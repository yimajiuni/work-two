import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.json();

        // Validate required fields
        const requiredFields = ['firstName', 'lastName', 'email', 'topic', 'subTopic', 'queryTitle', 'message'];
        const missingFields = requiredFields.filter(field => !formData[field]);

        if (missingFields.length > 0) {
            return NextResponse.json(
                {
                    success: false,
                    error: `Missing required fields: ${missingFields.join(', ')}`
                },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Invalid email format'
                },
                { status: 400 }
            );
        }

        // Here you would typically:
        // 1. Save to database
        // 2. Send email notification
        // 3. Create support ticket
        // 4. Log the inquiry

        console.log('Contact form submission:', {
            ...formData,
            attachments: formData.attachments ? `${formData.attachments.length} files` : 'No files',
            timestamp: new Date().toISOString()
        });

        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({
            success: true,
            message: 'Your message has been sent successfully. We\'ll get back to you soon.',
            inquiryId: `INQ-${Date.now()}`
        });

    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Internal server error. Please try again later.'
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({
        message: 'Contact API endpoint',
        usage: 'POST /api/contact with form data'
    });
} 