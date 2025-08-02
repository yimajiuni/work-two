import { getCollections } from "@/lib/Shopify";
import Link from "next/link";
import CacheClearer from "@/components/CacheClearer";

// Force revalidation every 30 seconds for debugging
export const revalidate = 30;

const DebugCollectionsPage = async () => {
    try {
        const collectionsData = await getCollections(50);
        const collections = collectionsData.edges.map((edge: any) => edge.node);

        return (
            <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-8">
                <h1 className="text-3xl font-bold mb-8">Available Collections (Debug)</h1>
                <p className="text-gray-600 mb-6">This page refreshes every 30 seconds to show the latest data from Shopify.</p>

                <div className="grid gap-4">
                    {collections.map((collection) => (
                        <div key={collection.id} className="border p-4 rounded-lg">
                            <h2 className="text-xl font-semibold">{collection.title}</h2>
                            <p className="text-gray-600 mb-2">Handle: <code className="bg-gray-100 px-2 py-1 rounded">{collection.handle}</code></p>
                            <p className="text-gray-600 mb-2">ID: <code className="bg-gray-100 px-2 py-1 rounded">{collection.id}</code></p>
                            {collection.description && (
                                <p className="text-gray-600 mb-2">Description: {collection.description}</p>
                            )}
                            <div className="flex gap-2 mt-3">
                                <Link
                                    href={`/collections/${collection.handle}`}
                                    className="text-blue-600 hover:underline"
                                >
                                    View Collection Products →
                                </Link>
                                <span className="text-gray-400">|</span>
                                <span className="text-gray-500">
                                    URL: <code className="bg-gray-100 px-2 py-1 rounded">/collections/{collection.handle}</code>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                    <h3 className="font-semibold mb-2">URL Structure:</h3>
                    <p className="text-sm text-gray-700">
                        Each collection is accessible at: <code>/collections/[handle]</code>
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                        Example: <code>/collections/ready-to-wear</code>
                    </p>
                    <p className="text-sm text-gray-700 mt-2">
                        <strong>Note:</strong> If you changed the collection handle in Shopify, it may take a few minutes for the changes to appear here due to caching.
                    </p>
                </div>

                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h3 className="font-semibold mb-2 text-yellow-800">Troubleshooting:</h3>
                    <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• If you don't see your updated collection, wait 30 seconds and refresh this page</li>
                        <li>• Check that the collection is published in your Shopify admin</li>
                        <li>• Verify the collection handle in Shopify matches what you expect</li>
                        <li>• Clear your browser cache if needed</li>
                        <li>• Use the cache control buttons in the bottom right to manually refresh data</li>
                    </ul>
                </div>

                {/* Cache Clearer Component */}
                <CacheClearer />
            </div>
        );
    } catch (error) {
        console.error("Error fetching collections:", error);
        return (
            <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-8">
                <h1 className="text-3xl font-bold mb-8">Error Loading Collections</h1>
                <p className="text-red-600">Failed to load collections: {String(error)}</p>
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h3 className="font-semibold mb-2 text-red-800">Possible Issues:</h3>
                    <ul className="text-sm text-red-700 space-y-1">
                        <li>• Check your Shopify environment variables</li>
                        <li>• Verify your Shopify store domain and access tokens</li>
                        <li>• Ensure your Shopify store is accessible</li>
                    </ul>
                </div>

                {/* Cache Clearer Component */}
                <CacheClearer />
            </div>
        );
    }
};

export default DebugCollectionsPage; 