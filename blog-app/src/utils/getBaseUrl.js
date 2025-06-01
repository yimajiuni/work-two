export function getBaseUrl() {
    if (typeof window !== 'undefined') {
        // Browser should use relative path
        return '';
    }

    if (process.env.VERCEL_URL) {
        // Reference: https://vercel.com/docs/concepts/projects/environment-variables
        return `https://${process.env.VERCEL_URL}`;
    }

    if (process.env.NEXT_PUBLIC_VERCEL_URL) {
        return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    }

    // Assume localhost
    return `http://localhost:${process.env.PORT ?? 3000}`;
} 