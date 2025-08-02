"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useShopifyCart } from "@/hooks/useShopifyCart";
import { useWishlist } from "@/context/wishlistContext";
import { useLoginModal } from "@/context/loginContext";
import { useShopifyAuth } from "@/context/shopifyAuthContext";
import { addToCheckedHistory } from "@/lib/checkedHistory";
import { formatYen, getColorCode, isVariantOnSale } from "@/lib/Utils";

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
        availableForSale?: boolean;
        stockQuantity?: number;
        variants?: Array<{
            id: string;
            title: string;
            availableForSale: boolean;
            quantityAvailable: number;
            price: {
                amount: string;
                currencyCode: string;
            };
            compareAtPrice?: {
                amount: string;
                currencyCode: string;
            };
            selectedOptions: Array<{
                name: string;
                value: string;
            }>;
        }>;
        options?: Array<{
            name: string;
            values: string[];
        }>;
    };
    showCheckProduct?: boolean;
}

const ProductCard = ({ product, showCheckProduct = false }: ProductCardProps) => {
    const { addItem, isLoading } = useShopifyCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const { openLoginModal } = useLoginModal();
    const { isAuthenticated } = useShopifyAuth();
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
    const [selectedVariant, setSelectedVariant] = useState<any>(null);
    const [showDropdown, setShowDropdown] = useState(false);

    // Initialize with first available variant
    useEffect(() => {
        if (product.variants && product.variants.length > 0) {
            const firstAvailable = product.variants.find(v => v.availableForSale);
            if (firstAvailable) {
                setSelectedVariant(firstAvailable);
                const initialOptions: { [key: string]: string } = {};
                firstAvailable.selectedOptions.forEach(option => {
                    initialOptions[option.name] = option.value;
                });
                setSelectedOptions(initialOptions);
            }
        }
    }, [product.variants]);

    // Update selected variant when options change
    useEffect(() => {
        if (product.variants && Object.keys(selectedOptions).length > 0) {
            const variant = product.variants.find(v =>
                v.selectedOptions.every(option =>
                    selectedOptions[option.name] === option.value
                )
            );
            setSelectedVariant(variant || null);
        }
    }, [selectedOptions, product.variants]);

    const handleOptionSelect = (optionName: string, value: string) => {
        setSelectedOptions(prev => ({
            ...prev,
            [optionName]: value
        }));
    };

    const handleAddToCart = async () => {
        const variantToUse = selectedVariant || product;
        const isOutOfStock = !variantToUse.availableForSale || !variantToUse.id || (variantToUse.quantityAvailable !== undefined && variantToUse.quantityAvailable < 1);

        if (isOutOfStock) {
            console.log('❌ Cannot add item: Out of stock or no variant ID', {
                availableForSale: variantToUse.availableForSale,
                variantId: variantToUse.id,
                stockQuantity: variantToUse.quantityAvailable
            });
            return;
        }

        console.log('🛒 Attempting to add item to cart:', {
            variantId: variantToUse.id,
            quantity: 1,
            availableForSale: variantToUse.availableForSale,
            stockQuantity: variantToUse.quantityAvailable,
            selectedOptions
        });

        try {
            if (variantToUse.id) {
                await addItem(variantToUse.id, 1);
                console.log('✅ Item added to cart successfully');
            }
        } catch (error) {
            console.error('❌ Error adding to cart:', error);
        }
    };

    const handleWishlistToggle = (e: React.MouseEvent) => {
        e.preventDefault();

        if (!isAuthenticated) {
            openLoginModal();
            return;
        }

        const wishlistItem = {
            id: product.id,
            title: product.title,
            handle: product.handle || product.id,
            price: formatYen(product.price.amount),
            image: product.image || "/product.png",
            variantId: product.variantId || "",
        };

        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(wishlistItem);
        }
    };

    const getProductUrl = () => {
        return `/products/${product.handle || product.id}`;
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

    return (
        <>
            <div
                className="group relative bg-white overflow-hidden"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
            >
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

                        {/* Button Container - Bottom Center */}
                        <div className="gap-1 absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">

                            {/* Wishlist Button */}
                            <button
                                onClick={(e) => {
                                    handleWishlistToggle(e);
                                }}
                                className={`wishlist-button p-2 transition-all duration-300 ${isInWishlist(product.id)
                                    ? 'favorited bg-black hover:bg-white hover:border-black hover:text-[#ff0707]' // FAVORITED: Black background → White background on hover, Red text on hover
                                    : 'bg-black hover:bg-white hover:border-black hover:text-black' // NOT FAVORITED: Black background → White background on hover, Black text on hover
                                    }`}
                            >
                                <svg
                                    className={`wishlist-heart w-6 h-6 transition-all duration-300 ${isInWishlist(product.id)
                                        ? 'fill-[#FF0707] group-hover:fill-[#FF0707]' // FAVORITED: Red heart (always red, even on hover)
                                        : 'fill-white group-hover:fill-white' // NOT FAVORITED: White heart on black bg → White heart on white bg (group) or Black heart on white bg (button hover)
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

                            {/* Add to Cart Button or Check Product Button */}
                            {showCheckProduct ? (
                                <Link href={getProductUrl()}>
                                    <button
                                        className="w-[250px] px-3 py-3 transition-all duration-300 text-xs font-medium font-inter bg-white text-black hover:bg-black hover:text-white"
                                    >
                                        CHECK PRODUCT
                                    </button>
                                </Link>
                            ) : (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleAddToCart();
                                    }}
                                    disabled={isLoading || !selectedVariant?.availableForSale || (selectedVariant?.quantityAvailable !== undefined && selectedVariant.quantityAvailable < 1)}
                                    className={`w-[250px] px-3 py-3 transition-all duration-300 text-xs font-medium font-inter disabled:cursor-default ${!selectedVariant?.availableForSale || (selectedVariant?.quantityAvailable !== undefined && selectedVariant.quantityAvailable < 1)
                                        ? 'bg-black text-white'
                                        : 'bg-white text-black hover:bg-black hover:text-white '
                                        }`}
                                >
                                    {!selectedVariant?.availableForSale || (selectedVariant?.quantityAvailable !== undefined && selectedVariant.quantityAvailable < 1) ? "OUT OF STOCK" : isLoading ? "ADDING..." : "ADD TO CART"}
                                </button>
                            )}
                        </div>
                    </div>
                </Link>

                {/* Product Info */}
                <div className="flex items-start justify-between px-2 py-2 text-xs font-inter text-thintext-gray-900">
                    <h3 className="uppercase">
                        {product.title}
                    </h3>

                    {/* Price */}
                    <div className="text-m font-times-new-roman">
                        {selectedVariant && isVariantOnSale(selectedVariant) && selectedVariant.compareAtPrice ? (
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-600 font-inter text-thin line-through">
                                    {formatYen(selectedVariant.compareAtPrice.amount)}
                                </span>
                                <p className="text-sm font-times-new-roman text-red-600 font-medium">
                                    {formatYen(selectedVariant.price.amount)}
                                </p>
                            </div>
                        ) : (
                            <p className="text-sm font-times-new-roman text-gray-900">
                                {formatYen(selectedVariant?.price?.amount || product.price.amount)}
                            </p>
                        )}
                    </div>
                </div>

                {/* Variant Selection Dropdown - Appears on hover */}
                {product.options && product.options.length > 0 && product.availableForSale && (product.stockQuantity === undefined || product.stockQuantity > 0) && (
                    <div
                        className={`px-2 max-h-36 pb-2 transition-all duration-300 ${showDropdown ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                            }`}
                    >
                        {product.options.map((option) => (
                            <div key={option.name} className="flex gap-1 mb-1 justify-between items-center">
                                <label className="block text-xs font-inter text-thin mb-1">
                                    {option.name}:
                                </label>
                                <div className="flex flex-wrap gap-1">
                                    {option.values.map((value) => {
                                        const isSelected = selectedOptions[option.name] === value;
                                        const isAvailable = product.variants?.some(v =>
                                            v.selectedOptions.every(opt =>
                                                opt.name === option.name ? opt.value === value : selectedOptions[opt.name] === opt.value
                                            ) && v.availableForSale
                                        );

                                        // Check if this is a color option
                                        const isColorOption = option.name.toLowerCase() === 'color';
                                        const colorCode = isColorOption ? getColorCode(value) : null;

                                        return (
                                            <button
                                                key={value}
                                                onClick={() => handleOptionSelect(option.name, value)}
                                                disabled={!isAvailable}
                                                className={`font-inter text-thin min-w-[16px] min-h-[15px] text-xs border transition-all duration-200 ${isSelected
                                                    ? 'border-black bg-black text-white'
                                                    : isAvailable
                                                        ? 'bg-white text-black border-gray-200 hover:border-black'
                                                        : 'border-gray-200 bg-gray-200 text-black disabled:line-through'
                                                    }`}
                                            >
                                                {isColorOption ? (
                                                    <div className="flex items-center justify-center">
                                                        <div
                                                            className="w-2 h-2"
                                                            style={{ backgroundColor: colorCode || '#CCCCCC' }}
                                                        ></div>
                                                    </div>
                                                ) : (
                                                    value
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </>
    );
};

export default ProductCard; 