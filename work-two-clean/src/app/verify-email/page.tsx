'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useShopifyAuth } from '@/context/shopifyAuthContext';

const VerifyEmailPage = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [activationToken, setActivationToken] = useState('');

    const router = useRouter();
    const searchParams = useSearchParams();
    const { login } = useShopifyAuth();

    useEffect(() => {
        // Extract activation token from URL
        const token = searchParams.get('token');
        if (token) {
            setActivationToken(token);
            setMessage('Please set your password to complete account activation.');
        } else {
            setError('Invalid verification link. Please check your email for the correct link.');
        }
    }, [searchParams]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!activationToken) {
            setError('Missing activation token. Please check your email for the correct verification link.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('/api/auth/shopify/verify-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    activationToken,
                    password,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setMessage('Account activated successfully! Redirecting...');

                // Store authentication data
                if (result.customerAccessToken) {
                    login(result.customerAccessToken.accessToken, result.customer?.id);
                }

                // Redirect to home page
                setTimeout(() => router.push('/'), 2000);
            } else {
                setError(result.error || 'Activation failed. Please try again.');
            }
        } catch (err) {
            console.error('Activation error:', err);
            setError('Activation failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!activationToken) {
        return (
            <div className="font-inter text-thin h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
                <div className="w-full max-w-md text-center">
                    <h1 className="text-2xl font-times-new-roman-italic mb-4">Email Verification</h1>
                    {error && <div className="text-red-600 text-sm mb-4">{error}</div>}
                    <p className="text-sm text-gray-600">
                        Please check your email for the verification link and try again.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="font-inter text-thin h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
            <div className="w-full max-w-md">
                <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-times-new-roman-italic text-center">Complete Account Activation</h1>

                    {message && <div className="text-black text-sm text-center">{message}</div>}

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-inter text-thin text-gray-700 uppercase">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="ring-1 ring-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-sm placeholder:font-inter text-thin"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-inter text-thin text-gray-700 uppercase">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            className="ring-1 ring-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-sm placeholder:font-inter text-thin"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-black font-inter text-thin text-sm text-white p-2 disabled:cursor-not-allowed disabled:opacity-50"
                        disabled={isLoading}
                    >
                        {isLoading ? "Activating..." : "Activate Account"}
                    </button>

                    {error && <div className="text-red-600 text-sm">{error}</div>}
                </form>
            </div>
        </div>
    );
};

export default VerifyEmailPage; 