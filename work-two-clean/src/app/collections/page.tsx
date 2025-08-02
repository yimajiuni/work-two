import { getCollections } from "@/lib/Shopify";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton";

// Force revalidation every 60 seconds to get fresh data
export const revalidate = 60;

const CollectionsPage = async () => {
    try {
        const collectionsData = await getCollections(50);
        const collections = collectionsData.edges.map((edge: any) => edge.node);

        return (
            <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
                {/* CAMPAIGN */}
                <div className="hidden sm:flex items-center justify-center py-24">
                    <div className="w-2/3">
                        <p className="text-4xl leading-[24px] font-finches">
                            Collections <span className="font-century-gothic text-xl">
                                Explore our curated collections featuring the latest styles and trends across all categories.
                            </span>
                        </p>
                    </div>
                </div>

                {/* Collections Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">


                    {collections.map((collection) => (
                        <Link
                            href={`/collections/${collection.handle}`}
                            key={collection.id}
                            className="group"
                        >
                            <div className="relative bg-slate-100 w-full aspect-[4/3] overflow-hidden">
                                <Image
                                    src={collection.image?.url || "/category.png"}
                                    alt={collection.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h2 className="text-white font-semibold tracking-wide text-xl drop-shadow-lg">
                                        {collection.title}
                                    </h2>
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

                {/* Empty State */}
                {collections.length === 0 && (
                    <div className="text-center py-16">
                        <h3 className="text-xl font-thin text-gray-900 mb-2">No collections found</h3>
                        <p className="text-gray-900 font-thin mb-4">
                            Check back soon for our collections
                        </p>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error("Error fetching collections:", error);
        return (
            <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
                <div className="text-center py-16">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Something went wrong</h2>
                    <p className="text-gray-600 mb-4">Failed to load collections. Please try again.</p>
                </div>
            </div>
        );
    }
};

export default CollectionsPage;  