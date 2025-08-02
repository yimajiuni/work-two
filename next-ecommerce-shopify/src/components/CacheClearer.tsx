"use client";
import { useState } from "react";

const CacheClearer = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const clearCache = async (type: string) => {
        setLoading(true);
        setMessage("");

        try {
            const response = await fetch('/api/revalidate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ type }),
            });

            const data = await response.json();

            if (data.success) {
                setMessage(`✅ ${data.message}`);
                // Refresh the page after a short delay
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                setMessage(`❌ ${data.error}`);
            }
        } catch (error) {
            setMessage("❌ Failed to clear cache");
            console.error('Error clearing cache:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
                <h3 className="font-semibold text-gray-800 mb-3">Cache Control</h3>

                <div className="space-y-2">
                    <button
                        onClick={() => clearCache('collections')}
                        disabled={loading}
                        className="w-full bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600 disabled:opacity-50 disabled:cursor-default"
                    >
                        {loading ? 'Clearing...' : 'Refresh Collections'}
                    </button>

                    <button
                        onClick={() => clearCache('products')}
                        disabled={loading}
                        className="w-full bg-green-500 text-white px-3 py-2 rounded text-sm hover:bg-green-600 disabled:opacity-50 disabled:cursor-default"
                    >
                        {loading ? 'Clearing...' : 'Refresh Products'}
                    </button>

                    <button
                        onClick={() => clearCache('all')}
                        disabled={loading}
                        className="w-full bg-red-500 text-white px-3 py-2 rounded text-sm hover:bg-red-600 disabled:opacity-50 disabled:cursor-default"
                    >
                        {loading ? 'Clearing...' : 'Refresh All'}
                    </button>
                </div>

                {message && (
                    <div className="mt-3 p-2 bg-gray-100 rounded text-sm">
                        {message}
                    </div>
                )}

                <p className="text-xs text-gray-500 mt-3">
                    Use this to refresh data from Shopify when you make changes in the admin panel.
                </p>
            </div>
        </div>
    );
};

export default CacheClearer; 