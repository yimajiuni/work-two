"use client";
import { useState, useEffect } from "react";
import { useShopifyCart } from "@/hooks/useShopifyCart";
import Skeleton from "./Skeleton";
import CollectionPagination from "./CollectionPagination";
import CollectionCard from "./CollectionCard";
import { useProductData } from "@/hooks/useCollectionData";
import {
    transformShopifyProduct,
    applyProductFilters,
    calculatePaginationData,
    applyPagination,
    PaginationData
} from "@/lib/collectionUtils";

interface ProductListProps {
    collectionHandle?: string;
    searchParams?: any;
    limit?: number;
    onPaginationDataChange?: (data: PaginationData) => void;
}

const ProductList = ({ collectionHandle, searchParams, limit = 16, onPaginationDataChange }: ProductListProps) => {
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
    const [allProducts, setAllProducts] = useState<any[]>([]); // Store all products for filtering
    const [paginatedProducts, setPaginatedProducts] = useState<any[]>([]);

    // Pagination state - get current page from URL
    const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;

    const { addItem, isLoading: cartLoading } = useShopifyCart();
    const { products, loading, error, refetch } = useProductData(collectionHandle);

    // Store all products for filtering when not in a specific collection
    useEffect(() => {
        if (products.length > 0 && !collectionHandle) {
            setAllProducts(products);
        }
    }, [products, collectionHandle]);

    // Apply filters when products or searchParams change
    useEffect(() => {
        if (products.length > 0) {
            const filtered = applyProductFilters(products, searchParams, allProducts);
            setFilteredProducts(filtered);
        }
    }, [products, searchParams, allProducts]);

    // Apply pagination when filtered products change
    useEffect(() => {
        const paginated = applyPagination(filteredProducts, currentPage, limit);
        setPaginatedProducts(paginated);
    }, [filteredProducts, currentPage, limit]);

    // Notify parent component of pagination data changes
    useEffect(() => {
        if (onPaginationDataChange) {
            const paginationData = calculatePaginationData(
                filteredProducts.length,
                currentPage,
                limit
            );
            onPaginationDataChange(paginationData);
        }
    }, [filteredProducts, currentPage, limit, onPaginationDataChange]);

    // Transform Shopify products to match ProductCard interface
    const transformedProducts = paginatedProducts.map(transformShopifyProduct);

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-thin text-gray-800 mb-4">Something went wrong</h2>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <button
                        onClick={refetch}
                        className="bg-highlight text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Products Grid */}
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                    {Array.from({ length: limit }).map((_, index) => (
                        <Skeleton key={index} />
                    ))}
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mt-8">
                        {transformedProducts.map((product) => (
                            <CollectionCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>

                    {/* Empty State */}
                    {transformedProducts.length === 0 && (
                        <div className="text-center py-16">
                            <h3 className="text-sm font-thin text-gray-900 mb-4">No products found</h3>
                            <p className="w-1/2 mx-auto text-gray-800 text-xs font-thin mb-4 leading-relaxed">
                                {collectionHandle
                                    ? "This collection is empty. Check back soon for new products."
                                    : "Try adjusting your search or filter criteria"
                                }
                            </p>
                            <button
                                onClick={refetch}
                                className="bg-highlight text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                            >
                                Refresh Products
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default ProductList;