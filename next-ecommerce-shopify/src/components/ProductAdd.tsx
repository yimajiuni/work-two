"use client";
import { useState, useEffect } from "react";
import { useShopifyCart } from "@/hooks/useShopifyCart";
import { useWishlist } from "@/context/wishlistContext";
import { useLoginModal } from "@/context/loginContext";
import { useShopifyAuth } from "@/context/shopifyAuthContext";
import { isVariantInStock } from "@/lib/Utils";
import { formatYen } from "@/lib/Utils";

const ProductAdd = ({
    productId,
    variantId,
    stockNumber,
    productTitle,
    productHandle,
    productImage,
    productPrice,
}: {
    productId: string;
    variantId: string;
    stockNumber: number;
    productTitle?: string;
    productHandle?: string;
    productImage?: string;
    productPrice?: string;
}) => {
    const [quantity, setQuantity] = useState(1);
    const { addItem, isLoading } = useShopifyCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const { openLoginModal } = useLoginModal();
    const { isAuthenticated } = useShopifyAuth();

    // Check if the variant is actually in stock
    const isOutOfStock = stockNumber < 1 || !variantId;

    // Debug logging when props change
    useEffect(() => {
        console.log('🛒 Add Component Stock Data Updated:', {
            productId,
            variantId,
            stockNumber,
            isOutOfStock,
            hasVariantId: !!variantId,
            stockAvailable: stockNumber > 0
        });
    }, [productId, variantId, stockNumber, isOutOfStock]);

    // Debug logging
    console.log('🛒 Add Component Stock Data:', {
        productId,
        variantId,
        stockNumber,
        isOutOfStock,
        hasVariantId: !!variantId,
        stockAvailable: stockNumber > 0
    });


    const handleWishlistToggle = () => {
        // Check if user is authenticated before allowing wishlist operations
        if (!isAuthenticated) {
            openLoginModal();
            return;
        }

        const wishlistItem = {
            id: productId,
            title: productTitle || "Product",
            handle: productHandle || productId,
            price: productPrice || "¥0",
            image: productImage || "/product.png",
            variantId: variantId || "",
        };

        if (isInWishlist(productId)) {
            removeFromWishlist(productId);
        } else {
            addToWishlist(wishlistItem);
        }
    };
    {/*
    const handleQuantity = (type: "d" | "i") => {
        if (type === "d" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
        if (type === "i" && quantity < stockNumber) {
            setQuantity((prev) => prev + 1);
        }
    };*/}

    const handleAddToCart = async () => {
        if (isOutOfStock) {
            console.log('❌ Cannot add item: Out of stock', { stockNumber, variantId });
            return;
        }

        console.log('🛒 Attempting to add item to cart:', { variantId, quantity, stockNumber });

        try {
            await addItem(variantId, quantity);
            console.log('✅ Item added to cart successfully');
            // Reset quantity to 1 after successful add
            setQuantity(1);
        } catch (error) {
            console.error('❌ Error adding to cart:', error);
        }
    };

    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-between">

                    <div className="flex gap-2">
                        {/* Wishlist Button */}
                        <button
                            onClick={handleWishlistToggle}
                            className={`p-3 border border-black transition-all duration-300 group ${isInWishlist(productId)
                                ? 'bg-white hover:bg-black hover:border-white hover:text-white'//favorited state, of base button
                                : 'bg-white hover:bg-black hover:border-white hover:text-white'//not favorited state, of base button
                                }`}
                        >
                            <svg
                                className={`w-5 h-5 transition-all duration-300 ${isInWishlist(productId)
                                    ? 'fill-[#FF0707] group-hover:fill-[#FF0707]'//favorited state, of heart
                                    : 'fill-black group-hover:fill-white'//not favorited state, of heart
                                    }`}
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </button>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            disabled={isLoading || isOutOfStock}
                            className={`w-[190px] px-2 border transition-all duration-300 text-xs font-medium font-inter disabled:cursor-default relative overflow-hidden group ${isOutOfStock
                                ? 'bg-white text-black border-black'
                                : 'bg-black text-white border-black hover:bg-white hover:text-white'
                                }`}
                        >
                            {/*和柄ボタン背景*/}
                            <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-difference bg-white text-black hover:bg-white hover:text-white" style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>
                            {/*和柄ボタンテキスト*/}
                            <div className="relative z-10 uppercase group-hover:text-white group-hover:text-shadow-black-sharp">
                                {isOutOfStock ? "OUT OF STOCK" : isLoading ? "ADDING..." : "ADD TO CART"}
                            </div>
                        </button>
                    </div>
                    {/*handle quantity
                    <div className="flex items-center gap-4">
                        <div className="bg-gray-100 py-2 px-4 flex items-center justify-between w-32">
                        <button
                            className="text-2xl cursor-pointer"
                            onClick={() => handleQuantity("d")}
                            disabled={stockNumber < 1}
                        >
                            -
                        </button>
                        <span>{quantity}</span>
                        <button
                            className="text-2xl cursor-pointer"
                            onClick={() => handleQuantity("i")}
                            disabled={stockNumber < 1}
                        >
                            +
                        </button>
                    </div>
                    {stockNumber < 1 ? (
                        <div className="text-xs text-red-500">Product is out of stock</div>
                    ) : (
                            <div className="text-xs">Only <span className="text-black">{stockNumber} items</span>{" "}
                            left!
                            <br />{"don't"} miss it.
                        </div>
                    )}
                    </div>*/}
                </div>

            </div>

        </>
    )
}

export default ProductAdd;