import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { code } = await request.json();

        if (!code) {
            return NextResponse.json(
                { success: false, error: 'Authorization code is required' },
                { status: 400 }
            );
        }

        const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
        const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
        const redirectUri = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/google/callback`;

        console.log('🔐 Google OAuth Debug:', {
            hasClientId: !!googleClientId,
            hasClientSecret: !!googleClientSecret,
            redirectUri,
            codeLength: code.length
        });

        // Exchange authorization code for access token
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: googleClientId!,
                client_secret: googleClientSecret!,
                code,
                grant_type: 'authorization_code',
                redirect_uri: redirectUri,
            }),
        });

        const tokenData = await tokenResponse.json();

        console.log('🔐 Google OAuth Response:', {
            status: tokenResponse.status,
            ok: tokenResponse.ok,
            data: tokenData
        });

        if (!tokenResponse.ok) {
            console.error('Google token exchange error:', tokenData);
            return NextResponse.json(
                {
                    success: false,
                    error: `Failed to exchange authorization code: ${tokenData.error_description || tokenData.error}`
                },
                { status: 400 }
            );
        }

        return NextResponse.json({
            success: true,
            accessToken: tokenData.access_token,
            refreshToken: tokenData.refresh_token,
            expiresIn: tokenData.expires_in,
        });
    } catch (error) {
        console.error('Google token exchange error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
} 