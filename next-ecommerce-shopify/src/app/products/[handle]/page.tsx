import ProductImages from "@/components/ProductImages";
import { getProduct } from "@/lib/Shopify";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import RecentlyChecked from "@/components/RecentlyChecked";
import TopCategoryList from "@/components/TopCategoryList";
import ProductSpecs from "@/components/ProductSpecs";
import { transformShopifyProduct, TransformedProduct } from "@/lib/productUtils";

interface ProductPageProps {
    params: {
        handle: string;
    };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    try {
        const product = await getProduct(params.handle);

        if (!product) {
            return {
                title: 'Product Not Found',
                description: 'The requested product could not be found.'
            };
        }

        const transformedProduct = transformShopifyProduct(product);
        const priceInfo = transformedProduct.firstVariant ?
            `${transformedProduct.price} ${transformedProduct.currencyCode}` :
            "Price not available";

        return {
            title: `${transformedProduct.title} - Yima`,
            description: transformedProduct.description || `Shop ${transformedProduct.title} at Yima.`,
            openGraph: {
                title: transformedProduct.title,
                description: transformedProduct.description || `Shop ${transformedProduct.title} at Yima.`,
                images: transformedProduct.images.map(img => img.image.url),
            },
            twitter: {
                card: 'summary_large_image',
                title: transformedProduct.title,
                description: transformedProduct.description || `Shop ${transformedProduct.title} at Yima.`,
                images: transformedProduct.images.map(img => img.image.url)
            }
        };
    } catch (error) {
        return {
            title: 'Product',
            description: 'Shop our products at Yima.'
        };
    }
}

// Force revalidation every 0 seconds to get fresh data (temporary for debugging)
export const revalidate = 0;

const ProductPage = async ({ params }: ProductPageProps) => {
    console.log("Product handle:", params.handle);

    try {
        const product = await getProduct(params.handle);

        if (!product) {
            return notFound();
        }

        // Transform product data using centralized utility
        const transformedProduct: TransformedProduct = transformShopifyProduct(product);

        console.log('📦 Transformed Product Info:', {
            productId: transformedProduct.id,
            productTitle: transformedProduct.title,
            variantsCount: transformedProduct.variants.length,
            optionsCount: transformedProduct.options.length,
            isInStock: transformedProduct.isInStock,
            stockNumber: transformedProduct.stockNumber,
            price: transformedProduct.price,
            currencyCode: transformedProduct.currencyCode
        });

        return (
            <div className="relative">
                <div className="pt-4 px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Product Images */}
                        <div className="w-full lg:w-1/2 top-20 mt-0">
                            <ProductImages items={transformedProduct.images} />
                        </div>

                        {/* Product Details */}
                        <ProductSpecs product={transformedProduct} />
                    </div>

                    {/* Recently Checked Products and Category List */}
                    <div className="relative mt-8">
                        <RecentlyChecked limit={4} />
                        <div className="mt-1">
                            <TopCategoryList />
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching product:', error);
        return notFound();
    }
}

export default ProductPage;