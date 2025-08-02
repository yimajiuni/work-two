"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useShopifyCart } from "@/hooks/useShopifyCart";
import { addToWishlist, removeFromWishlist } from "@/lib/shopifyWishlist";
import LoginModal from "./LoginModal";
import { addToCheckedHistory } from "@/lib/checkedHistory";

interface ProductCardProps {
    product: {
        id: string;
        title: string;
        handle?: string;
        description?: string;
        price: {
            amount: string;
            currencyCode: string;
        };
        image?: string;
        variantId?: string;
        source: 'shopify';
        isInWishlist?: boolean;
        availableForSale?: boolean;
    };
}

const TopProductCard = ({ product }: ProductCardProps) => {
    const { addItem } = useShopifyCart();
    const [isWishlistLoading, setIsWishlistLoading] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(product.isInWishlist || false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleAddToCart = async () => {
        try {
            if (product.variantId) {
                await addItem(product.variantId, 1);
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const handleWishlistToggle = async () => {
        try {
            const customerId = localStorage.getItem('shopify_customer_id');

            if (!customerId) {
                // Show login modal instead of just logging
                setShowLoginModal(true);
                return;
            }

            setIsWishlistLoading(true);

            if (isInWishlist) {
                const success = await removeFromWishlist(customerId, product.id);
                if (success) {
                    setIsInWishlist(false);
                }
            } else {
                const success = await addToWishlist(customerId, product.id);
                if (success) {
                    setIsInWishlist(true);
                }
            }
        } catch (error) {
            console.error('Error toggling wishlist:', error);
        } finally {
            setIsWishlistLoading(false);
        }
    };

    const handleProductClick = () => {
        // Add product to checked history when clicked
        addToCheckedHistory({
            id: product.id,
            title: product.title,
            handle: product.handle || product.id,
            description: product.description,
            price: product.price,
            image: product.image || "/product.png",
            variantId: product.variantId,
            availableForSale: product.availableForSale,
        });
    };

    const getProductUrl = () => {
        return `/products/${product.handle || product.id}`;
    };

    return (
        <>
            <div className="group relative bg-white overflow-hidden">
                {/* Product Image */}
                <Link href={getProductUrl()} onClick={handleProductClick}>
                    <div className="h-[500px] overflow-hidden relative">
                        <Image
                            src={product.image || "/placeholder-product.jpg"}
                            alt={product.title}
                            width={400}
                            height={500}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />



                    </div>
                </Link>

            </div>

        </>
    );
};

export default TopProductCard; 