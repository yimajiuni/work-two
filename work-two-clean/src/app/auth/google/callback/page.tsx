'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { handleGoogleAuthCallback } from '@/lib/shopifyAuth';

const GoogleCallbackPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const handleCallback = async () => {
            try {
                const code = searchParams.get('code');
                const error = searchParams.get('error');

                if (error) {
                    setError('Google authentication was cancelled or failed');
                    setIsLoading(false);
                    return;
                }

                if (!code) {
                    setError('No authorization code received');
                    setIsLoading(false);
                    return;
                }

                // Handle Google OAuth callback
                const result = await handleGoogleAuthCallback(code);

                if (result.success && result.customerAccessToken) {
                    // Store authentication data
                    localStorage.setItem('shopify_customer_token', result.customerAccessToken.accessToken);
                    if (result.customer) {
                        localStorage.setItem('shopify_customer_id', result.customer.id);
                    }

                    // Redirect to home page or intended destination
                    router.push('/');
                } else {
                    setError(result.error || 'Authentication failed');
                }
            } catch (err) {
                console.error('Google callback error:', err);
                setError('Authentication failed. Please try again.');
            } finally {
                setIsLoading(false);
            }
        };

        handleCallback();
    }, [searchParams, router]);

    if (isLoading) {
        return (
            <div className="font-inter text-thin h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin h-8 w-8 border-b-2 border-black"></div>
                    <p className="text-sm">Completing authentication...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="font-inter text-thin h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="text-red-600 text-sm">{error}</div>
                    <button
                        onClick={() => router.push('/login')}
                        className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition-colors"
                    >
                        Back to Login
                    </button>
                </div>
            </div>
        );
    }

    return null;
};

export default GoogleCallbackPage; 