"use client";
import { useState, useEffect } from "react";
import { useShopifyCart } from "@/hooks/useShopifyCart";
import TopProductCard from "./TopProductCard";
import Skeleton from "./Skeleton";
import { getCheckedHistory, CheckedProduct } from "@/lib/checkedHistory";
import { transformShopifyProduct } from "@/lib/collectionUtils";

interface RecentlyCheckedProps {
    limit?: number;
}

const RecentlyChecked = ({ limit = 4 }: RecentlyCheckedProps) => {
    const [recentProducts, setRecentProducts] = useState<CheckedProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const { addItem, isLoading: cartLoading } = useShopifyCart();

    // Load recently checked products from localStorage
    useEffect(() => {
        loadRecentProducts();
    }, []);

    const loadRecentProducts = () => {
        try {
            setLoading(true);
            const products = getCheckedHistory();
            // Limit to the specified number and ensure they're valid
            const validProducts = products
                .filter((product) => product && product.id && product.title)
                .slice(0, limit);
            setRecentProducts(validProducts);
        } catch (err) {
            console.error("Error loading recent products:", err);
            setError("Failed to load recent products.");
        } finally {
            setLoading(false);
        }
    };

    // Transform recent products to match ProductCard interface
    const transformedProducts = recentProducts.map((product) => ({
        id: product.id,
        title: product.title,
        handle: product.handle,
        description: product.description,
        price: {
            amount: typeof product.price === 'string' ? product.price : product.price.amount,
            currencyCode: typeof product.price === 'string' ? 'USD' : product.price.currencyCode,
        },
        image: product.image || "/product.png",
        variantId: product.variantId,
        availableForSale: product.availableForSale !== false,
        source: 'shopify' as const,
    }));

    if (error) {
        return null; // Don't show error state for recently checked
    }

    if (recentProducts.length === 0) {
        return null; // Don't render anything if no recent products
    }

    return (
        <div className="mt-8 border-t border-black pt-8">
            <h1 className="text-2xl font-bodoni text-center">Recently Checked</h1>
            <div className="gap-1 mt-8">
                {/* Products Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {Array.from({ length: limit }).map((_, index) => (
                            <Skeleton key={index} />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
                        {transformedProducts.map((product) => (
                            <TopProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecentlyChecked; 