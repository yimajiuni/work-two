"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getCollections, ShopifyCollection } from "@/lib/Shopify";

const CategoryList = () => {
    const [collections, setCollections] = useState<ShopifyCollection[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchCollections();
    }, []);

    const fetchCollections = async () => {
        try {
            setLoading(true);
            setError(null);

            const collectionsData = await getCollections(20);
            const collectionsList = collectionsData.edges.map((edge: any) => edge.node);

            setCollections(collectionsList);
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
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
                            <div className="relative bg-slate-100 w-full h-96 animate-pulse">
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
        <div className="px-4 overflow-x-scroll scrollbar-hide">
            <div className="flex gap-4 md:gap-8">
                {collections.map((collection) => (
                    <Link
                        href={`/list?cat=${collection.handle}`}
                        className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
                        key={collection.id}
                    >
                        <div className="relative bg-slate-100 w-full h-96 group">
                            <Image
                                src={collection.image?.url || "/category.png"}
                                alt={collection.title}
                                fill
                                sizes="25vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                <h1 className="text-white font-semibold tracking-wide text-lg drop-shadow-lg">
                                    {collection.title}
                                </h1>
                                {collection.description && (
                                    <p className="text-white text-sm opacity-90 mt-1 line-clamp-2 drop-shadow-lg">
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

export default CategoryList;