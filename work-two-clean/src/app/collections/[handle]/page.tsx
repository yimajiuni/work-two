import { getCollection } from "@/lib/Shopify";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton";
import CollectionContent from "@/components/CollectionContent";

interface CollectionPageProps {
    params: {
        handle: string;
    };
    searchParams: any;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
    try {
        const collection = await getCollection(params.handle, 20);

        if (!collection) {
            return {
                title: 'Collection Not Found',
                description: 'The requested collection could not be found.'
            };
        }

        return {
            title: `${collection.title} Collection`,
            description: collection.description || `Explore our ${collection.title} collection featuring the latest styles and trends.`,
            openGraph: {
                title: `${collection.title} Collection`,
                description: collection.description || `Explore our ${collection.title} collection featuring the latest styles and trends.`,
                images: collection.image ? [collection.image.url] : [],
            },
        };
    } catch (error) {
        return {
            title: 'Collection',
            description: 'Explore our collection of products.'
        };
    }
}

// Force revalidation every 60 seconds to get fresh data
export const revalidate = 60;

const CollectionPage = async ({ params, searchParams }: CollectionPageProps) => {
    try {
        // Fetch the specific collection
        const collection = await getCollection(params.handle, 20);

        if (!collection) {
            notFound();
        }

        return (
            <div className="px-4 relative">
                {/* CAMPAIGN */}
                <div className="hidden sm:flex items-center justify-center py-24">
                    <div className="w-2/3">
                        <p className="text-center text-4xl leading-[24px] font-finches">
                            <span className="">{collection.title}</span> <span className="font-century-gothic-thin text-xl">
                                {collection.description || `Explore our ${collection.title.toLowerCase()} collection featuring the latest styles and trends.`}
                            </span>
                        </p>
                    </div>
                </div>

                {/* FILTER AND PRODUCTS */}
                <Suspense fallback={<Skeleton />}>
                    <CollectionContent
                        collectionHandle={collection.handle}
                        searchParams={searchParams}
                        limit={16}
                    />
                </Suspense>
            </div>
        );
    } catch (error) {
        console.error("Error fetching collection:", error);
        notFound();
    }
};

export default CollectionPage; 