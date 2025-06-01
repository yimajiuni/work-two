export function getBaseUrl() {
    // For custom domain (highest priority)
    if (process.env.NEXT_PUBLIC_API_URL) {
        const url = `https://${process.env.NEXT_PUBLIC_API_URL}`;
        console.log('Using custom domain:', url);
        return url;
    }

    // In production, use the Vercel URL (automatically set by Vercel)
    if (process.env.VERCEL_URL) {
        const url = `https://${process.env.VERCEL_URL}`;
        console.log('Using Vercel URL:', url);
        return url;
    }

    // For localhost
    console.log('Using localhost URL');
    return 'http://localhost:3000';
} 