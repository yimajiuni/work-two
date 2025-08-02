"use client";
import { useState, useEffect } from "react";
import { getProductsByIds, ShopifyProduct } from "@/lib/Shopify";
import ProductCardTop from "./TopProductCard";
import Skeleton from "./Skeleton";
import { transformShopifyProduct } from "@/lib/collectionUtils";

// Specific product IDs for new arrivals
const NEW_ARRIVALS_PRODUCT_IDS = [
    "gid://shopify/Product/9145425854719", // Original product IDs
    "gid://shopify/Product/9145126158591",
    "gid://shopify/Product/9145425395967",
    "gid://shopify/Product/9145426116863"
];

const NewArrivals = () => {
    const [products, setProducts] = useState<ShopifyProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch specific products on component mount
    useEffect(() => {
        fetchNewArrivals();
    }, []);

    const fetchNewArrivals = async () => {
        try {
            setLoading(true);
            setError(null);

            const productsData = await getProductsByIds(NEW_ARRIVALS_PRODUCT_IDS);
            setProducts(productsData);
        } catch (err) {
            console.error("Error fetching new arrivals:", err);
            setError("Failed to load new arrivals. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Transform Shopify products to match ProductCardTop interface
    const transformedProducts = products.map(transformShopifyProduct);

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-xs font-thin text-gray-800 mb-4">Something went wrong</h2>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <button
                        onClick={fetchNewArrivals}
                        className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="overflow-hidden">
            {/* Products Grid */}
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Skeleton key={index} />
                    ))}
                </div>
            ) : (
                <>
                    <div className="flex gap-1 mt-8 animate-scroll">
                        {/* First set of products */}
                        {transformedProducts.map((product) => (
                            <div key={`first-${product.id}`} className="flex-shrink-0 w-[300px]">
                                <ProductCardTop product={product} />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {transformedProducts.map((product) => (
                            <div key={`second-${product.id}`} className="flex-shrink-0 w-[300px]">
                                <ProductCardTop product={product} />
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {transformedProducts.length === 0 && (
                        <div className="text-center py-16">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">No new arrivals found</h3>
                            <p className="text-gray-600 mb-4">
                                Check back soon for the latest products
                            </p>
                            <button
                                onClick={fetchNewArrivals}
                                className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors"
                            >
                                Refresh
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default NewArrivals;