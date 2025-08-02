'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWishlist } from '@/context/wishlistContext';
import { useShopifyAuth } from '@/context/shopifyAuthContext';
import { useLoginModal } from '@/context/loginContext';
import { getProductsByIds } from '@/lib/Shopify';
import CollectionCard from '@/components/CollectionCard';
import RecentlyChecked from '@/components/RecentlyChecked';
import { transformShopifyProduct, TransformedProduct } from '@/lib/collectionUtils';

const WishlistPage = () => {
    const router = useRouter();
    const { wishlistItems, removeFromWishlist } = useWishlist();
    const { isAuthenticated, customer } = useShopifyAuth();
    const { openLoginModal } = useLoginModal();
    const [wishlistProducts, setWishlistProducts] = useState<TransformedProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProducts, setLoadingProducts] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) {
            openLoginModal();
            return;
        }

        setIsLoading(false);
    }, [isAuthenticated, openLoginModal]);

    useEffect(() => {
        if (wishlistItems.length === 0) {
            setWishlistProducts([]);
            return;
        }

        const fetchWishlistProducts = async () => {
            try {
                setLoadingProducts(true);

                // Extract product IDs from wishlist items
                const productIds = wishlistItems.map(item => item.id);

                // Fetch products from Shopify
                const products = await getProductsByIds(productIds);

                // Transform products to match ProductCard interface
                const transformedProducts = products.map(transformShopifyProduct);

                setWishlistProducts(transformedProducts);
            } catch (error) {
                console.error('Error fetching wishlist products:', error);
                setWishlistProducts([]);
            } finally {
                setLoadingProducts(false);
            }
        };

        fetchWishlistProducts();
    }, [wishlistItems]);

    if (isLoading) {
        return (
            <div className="font-inter text-thin h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto mb-4"></div>
                    <p>Loading wishlist...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null; // Will redirect to login
    }

    return (
        <div className="font-inter text-thin text-xs text-gray-900 min-h-[calc(100vh-80px)] px-4 py-8">
            <div className="">
                {/* Page Title */}
                <h1 className="text-2xl font-bodoni text-black text-center mb-4">Saved Items</h1>

                {/* Welcome Message */}
                <p className="text-center text-gray-900 mb-8">
                    Welcome {customer?.firstName || customer?.email || 'User'}. While logging in, you can check your favorite product in wishlist
                </p>

                {wishlistItems.length === 0 ? (
                    <div className="font-inter text-thin text-xs text-gray-900 bg-white p-6">
                        <div className="text-center">

                            <div className="w-7 h-7 mx-auto mb-4 flex items-center justify-center group cursor-pointer">
                                <svg className="w-7 h-7 text-gray-900 group-hover:fill-black transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <p className="font-times-new-roman-italic text-sm mb-2">Your wishlist is currently empty.</p>
                            <p className="font-times-new-roman-italic text-sm mb-2">Favorite products to create</p>
                            <p className="font-times-new-roman-italic text-sm mb-16">your own Wardrobe.</p>
                            <button
                                onClick={() => router.push('/')}
                                className="bg-black w-full md:w-1/3 mx-auto text-white font-inter text-thin text-xs uppercase px-6 py-3 transition-colors border border-black hover:border hover:border-black hover:text-black overflow-hidden group relative"
                            >
                                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white hover:bg-white hover:text-black" style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>
                                <div className="relative z-10 uppercase group-hover:text-shadow-white-opaque">
                                    Continue Shopping
                                </div>
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Loading state for products */}
                        {loadingProducts ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mb-12">
                                {wishlistItems.map((item) => (
                                    <div key={item.id} className="bg-white overflow-hidden animate-pulse">
                                        <div className="h-64 bg-gray-200"></div>
                                        <div className="p-4">
                                            <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <>
                                {/* Products Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 mb-12">
                                    {wishlistProducts.map((product) => (
                                        <CollectionCard
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                                </div>


                            </>
                        )}
                    </>
                )}

                {/* Recently Checked Row - Always visible */}
                <div>
                    <RecentlyChecked limit={4} />
                </div>
            </div>
        </div>
    );
};

export default WishlistPage; 