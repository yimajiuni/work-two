export function getBaseUrl() {
    // For custom domain (highest priority)
    if (process.env.NEXT_PUBLIC_API_URL) {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        // If the URL already includes http:// or https://, use it as is
        if (apiUrl.startsWith('http://') || apiUrl.startsWith('https://')) {
            console.log('Using custom domain with protocol:', apiUrl);
            return apiUrl;
        }
        // Otherwise, add https://
        const url = `https://${apiUrl}`;
        console.log('Using custom domain with added protocol:', url);
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