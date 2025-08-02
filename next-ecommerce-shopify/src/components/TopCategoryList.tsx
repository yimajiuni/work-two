"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getCollectionsByIds, ShopifyCollection } from "@/lib/Shopify";

const TopCategoryList = () => {
    const [collections, setCollections] = useState<ShopifyCollection[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Specific collection IDs for the top categories section
    const FEATURED_COLLECTION_IDS = [
        "gid://shopify/Collection/459323769087", // Replace with actual collection IDs
        "gid://shopify/Collection/459323736319",
        "gid://shopify/Collection/459323670783",
    ];

    useEffect(() => {
        fetchCollections();
    }, []);

    const fetchCollections = async () => {
        try {
            setLoading(true);
            setError(null);

            const collectionsData = await getCollectionsByIds(FEATURED_COLLECTION_IDS);
            setCollections(collectionsData);
        } catch (err) {
            console.error("Error fetching collections:", err);
            setError("Failed to load categories");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="px-4 overflow-x-scroll scrollbar-hide">
                <div className="flex gap-4 md:gap-8">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                            <div className="relative bg-slate-100 w-full h-96">
                                <div className="absolute inset-0 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="px-4 text-center py-8">
                <p className="text-red-500 mb-4">{error}</p>
                <button
                    onClick={fetchCollections}
                    className="bg-highlight text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                >
                    Try Again
                </button>
            </div>
        );
    }

    if (!collections || collections.length === 0) {
        return (
            <div className="px-4 text-center py-8">
                <p className="text-gray-500">No categories found</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="flex gap-1">
                {collections.map((collection) => (
                    <Link
                        href={`/collections/${collection.handle}`}
                        className="flex-1"
                        key={collection.id}
                    >
                        <div className="relative bg-slate-100 w-full aspect-[1/1] group overflow-hidden">
                            <Image
                                src={collection.image?.url || "/category.png"}
                                alt={collection.title}
                                fill
                                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                                className="object-cover group-hover:scale-105 transition-transform"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20  hover:scale-105 group-hover:bg-opacity-30 transition-all duration-300"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <h1 className="text-white font-finches tracking-wide text-xl text-center drop-shadow-lg w-24">
                                    {collection.title}
                                </h1>
                                {collection.description && (
                                    <p className="text-center text-white text-xs font-century-gothic text-thin uppercase opacity-90 mt-1 line-clamp-4 drop-shadow-lg w-24">
                                        {collection.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TopCategoryList;