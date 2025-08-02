import { NextRequest, NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs';

export async function POST(request: NextRequest) {
    try {
        const { email, category } = await request.json();

        // Validate email
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { success: false, error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // EmailJS configuration
        const serviceId = process.env.EMAILJS_SERVICE_ID;
        const templateId = process.env.EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS configuration missing');
            return NextResponse.json(
                { success: false, error: 'Email service not configured' },
                { status: 500 }
            );
        }

        // Send welcome email
        const templateParams = {
            to_email: email,
            to_name: email.split('@')[0],
            category: category,
            message: `Welcome to Yima's newsletter! You've subscribed to ${category} updates.`
        };

        const response = await emailjs.send(
            serviceId,
            templateId,
            templateParams,
            publicKey
        );

        // Store subscriber in database (optional)
        // await saveSubscriber(email, category);

        return NextResponse.json({
            success: true,
            message: 'Successfully subscribed to newsletter!'
        });

    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to subscribe to newsletter' },
            { status: 500 }
        );
    }
} 