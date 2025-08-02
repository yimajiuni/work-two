'use client';

import { useState } from 'react';
import { debugCustomerAccount } from '@/lib/shopifyAuth';

const DebugAccountPage = () => {
    const [email, setEmail] = useState('');
    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleCheck = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setResult(null);

        try {
            const debugResult = await debugCustomerAccount(email);
            setResult(debugResult);
        } catch (error) {
            setResult({ error: 'Debug failed', details: error });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="font-inter text-thin h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-times-new-roman-italic text-center mb-8">Debug Customer Account</h1>

                <form onSubmit={handleCheck} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-inter text-thin text-gray-700 uppercase">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email to check"
                            className="ring-1 ring-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-sm placeholder:font-inter text-thin"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-black font-inter text-thin text-sm text-white p-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {isLoading ? "Checking..." : "Check Account Status"}
                    </button>
                </form>

                {result && (
                    <div className="mt-8 p-4 border border-gray-300">
                        <h2 className="font-bold mb-2">Debug Results:</h2>
                        <pre className="text-xs bg-gray-100 p-2 overflow-auto">
                            {JSON.stringify(result, null, 2)}
                        </pre>
                    </div>
                )}

                <div className="mt-8 text-sm text-gray-600">
                    <h3 className="font-bold mb-2">What this does:</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Checks if a customer account exists in Shopify</li>
                        <li>Attempts to send a password recovery email</li>
                        <li>Shows detailed error messages</li>
                        <li>Helps identify account status issues</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DebugAccountPage; 