import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
        const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
        const redirectUri = `${siteUrl}/auth/google/callback`;

        return NextResponse.json({
            success: true,
            config: {
                hasClientId: !!googleClientId,
                hasClientSecret: !!googleClientSecret,
                siteUrl,
                redirectUri,
                clientIdLength: googleClientId?.length || 0,
            },
            instructions: [
                '1. Check that all environment variables are set',
                '2. Verify redirect URI in Google Console matches exactly',
                '3. Make sure Google+ API is enabled',
                '4. Check that OAuth consent screen is configured'
            ]
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Configuration check failed' },
            { status: 500 }
        );
    }
} 