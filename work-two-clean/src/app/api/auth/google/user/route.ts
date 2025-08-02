import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { accessToken } = await request.json();

        if (!accessToken) {
            return NextResponse.json(
                { success: false, error: 'Access token is required' },
                { status: 400 }
            );
        }

        // Get user information from Google
        const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const userData = await userResponse.json();

        if (!userResponse.ok) {
            console.error('Google user info error:', userData);
            return NextResponse.json(
                { success: false, error: 'Failed to get user information' },
                { status: 400 }
            );
        }

        return NextResponse.json({
            success: true,
            user: {
                id: userData.id,
                email: userData.email,
                given_name: userData.given_name,
                family_name: userData.family_name,
                picture: userData.picture,
                verified_email: userData.verified_email,
            },
        });
    } catch (error) {
        console.error('Google user info error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
} 