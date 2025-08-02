"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useShopifyCart } from "@/hooks/useShopifyCart";
import RecentlyChecked from "@/components/RecentlyChecked";
import TopCategoryList from "@/components/TopCategoryList";
import { formatYen, extractColorFromVariant, extractSizeFromVariant, getColorCode } from "@/lib/Utils";

const CartPage = () => {
    const router = useRouter();
    const {
        items,
        isLoading,
        removeItem,
        updateItem,
        getCartTotal,
        getCartCount,
        checkout,
        loadCart
    } = useShopifyCart();
    const [isCheckoutHovered, setIsCheckoutHovered] = useState(false);

    useEffect(() => {
        console.log('🛒 CartPage: Loading cart...');
        loadCart();
    }, [loadCart]);

    useEffect(() => {
        console.log('🛒 CartPage: Cart state updated:', { items: items.length, total: getCartTotal() });
    }, [items, getCartTotal]);

    const handleQuantityChange = (lineId: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeItem(lineId);
        } else {
            updateItem(lineId, newQuantity);
        }
    };

    const handleCheckout = async () => {
        if (items.length === 0) return;

        try {
            checkout();
        } catch (error) {
            console.error('Checkout error:', error);
        }
    };

    const handleContinueShopping = () => {
        router.push('/');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 pt-8">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-4">
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <div key={index} className="bg-white p-6 shadow">
                                        <div className="flex gap-4">
                                            <div className="w-20 h-20 bg-gray-200 rounded"></div>
                                            <div className="flex-1 space-y-2">
                                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-white p-6 shadow h-64">
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-inter text-thin text-black pt-8">
            <div>
                <div className="mx-auto mb-8 px-6 lg:px-8">
                    <h1 className="text-2xl font-times-new-roman-italic">Shopping Cart</h1>
                    <p className="mt-2 text-xs font-inter text-thin uppercase">
                        {items.length === 0
                            ? "Your cart is empty"
                            : `${getCartCount()} item${getCartCount() !== 1 ? 's' : ''} in your cart`
                        }
                    </p>
                </div>

                {items.length === 0 ? (
                    <div>
                        <div className="text-center py-16">
                            <div className="mb-6">
                                <svg className="mx-auto h-12 w-12 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="square" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <p className="font-times-new-roman-italic text-gray-900 mb-6">Pleasure to be your first purchase</p>
                            <button
                                onClick={handleContinueShopping}
                                className="font-inter text-thin text-sm min-w-[250px] bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
                            >
                                Start Shopping
                            </button>
                        </div>

                        {/* Recently Checked Products and Category List */}
                        <div className="relative mx-4">
                            <RecentlyChecked limit={4} />
                            <div className="mt-1">
                                <TopCategoryList />
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-8">
                            {/* Cart Items */}
                            <div className="lg:col-span-2 font-inter text-thin text-black">
                                <div className="bg-white shadow-sm border border-black overflow-hidden">
                                    <div className="p-6">
                                        <h2 className="text-xl font-times-new-roman-italic mb-6">Cart Items</h2>

                                        <div className="space-y-6">
                                            {items.map((item) => (
                                                <div key={item.id} className="flex gap-4 border-b border-black pb-6 last:border-b-0">
                                                    <div className="flex-shrink-0">
                                                        <Link href={`/products/${item.productHandle}`}>
                                                            <Image
                                                                src={item.image || "/placeholder-image.jpg"}
                                                                alt={item.title}
                                                                width={80}
                                                                height={80}
                                                                className="object-cover hover:opacity-80 transition-opacity"
                                                            />
                                                        </Link>
                                                    </div>

                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-start justify-between">
                                                            <div className="flex-1 min-w-0">
                                                                <Link
                                                                    href={`/products/${item.productHandle}`}
                                                                    className="uppercase text-m truncate hover:text-gray-600 transition-colors cursor-pointer"
                                                                >
                                                                    {item.title}
                                                                </Link>
                                                                <p className="text-sm text-gray-600 mt-1">
                                                                    {formatYen(item.price)}
                                                                </p>
                                                            </div>

                                                            <button
                                                                onClick={() => removeItem(item.id)}
                                                                className="text-gray-900 hover:text-gray-300 transition-colors ml-4"
                                                            >
                                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            </button>
                                                        </div>

                                                        {/* Color and Size Info */}
                                                        <div className="flex items-center gap-2 mt-2">
                                                            {(() => {
                                                                const color = extractColorFromVariant(item.variantTitle);
                                                                const size = extractSizeFromVariant(item.variantTitle);
                                                                return (
                                                                    <>
                                                                        {color && (
                                                                            <div className="flex items-center gap-1">
                                                                                <div
                                                                                    className="w-3 h-3 border border-gray-300"
                                                                                    style={{ backgroundColor: getColorCode(color) }}
                                                                                />
                                                                                <span className="text-xs font-inter text-thin">{color}</span>
                                                                            </div>
                                                                        )}
                                                                        {size && (
                                                                            <span className="text-xs font-inter text-thin">/ {size}</span>
                                                                        )}
                                                                    </>
                                                                );
                                                            })()}
                                                        </div>

                                                        <div className="flex items-center justify-between mt-4">
                                                            <div className="flex items-center border border-gray-300">
                                                                <button
                                                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                                                                    disabled={isLoading}
                                                                >
                                                                    -
                                                                </button>
                                                                <span className="px-3 py-1 text-gray-900 min-w-[40px] text-center">
                                                                    {item.quantity}
                                                                </span>
                                                                <button
                                                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                                                                    disabled={isLoading}
                                                                >
                                                                    +
                                                                </button>
                                                            </div>

                                                            <div className="text-right">
                                                                <p className="text-lg font-semibold text-gray-900">
                                                                    {formatYen(parseFloat(item.price) * item.quantity)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div className="lg:col-span-1 font-inter text-thin text-black">
                                <div className="bg-white shadow-sm border border-black p-6 sticky top-8">
                                    <h2 className="text-xl font-times-new-roman-italic mb-6">Order Summary</h2>

                                    <div className="space-y-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Items ({getCartCount()})</span>
                                            <span className="text-gray-900">{formatYen(getCartTotal())}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Shipping</span>
                                            <span className="text-gray-500">Calculated at checkout</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Tax</span>
                                            <span className="text-gray-500">Calculated at checkout</span>
                                        </div>

                                        <div className="border-t border-black pt-4">
                                            <div className="flex justify-between text-lg">
                                                <span className="text-gray-900 font-times-new-roman-italic text-xl">Total</span>
                                                <span className="text-gray-900 font-semibold">{formatYen(getCartTotal())}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 space-y-3">
                                        <button
                                            onClick={handleCheckout}
                                            disabled={isLoading || items.length === 0}
                                            className="w-full border-black border text-white py-3 px-4 bg-white transition-all duration-300 hover:bg-black hover:text-white text-sm uppercase group relative overflow-hidden disabled:opacity-50 disabled:cursor-default"
                                            onMouseEnter={() => setIsCheckoutHovered(true)}
                                            onMouseLeave={() => setIsCheckoutHovered(false)}
                                        >
                                            {/* SVG Background Layer with Blend Effect */}
                                            <div className="absolute inset-0 bg-cover bg-center bg-white hover:bg-black hover:text-white mix-blend-difference group-hover:opacity-0 transition-opacity duration-300" style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>
                                            {/* Button Text Layer */}
                                            <div className="relative z-10 text-shadow-black-sharp">Proceed to Checkout</div>
                                        </button>

                                        <button
                                            onClick={handleContinueShopping}
                                            className={`w-full border border-gray-900 py-3 px-4 transition-all duration-300 text-sm uppercase group relative overflow-hidden shadow-md ${isCheckoutHovered
                                                ? 'text-black bg-white'
                                                : 'text-black hover:text-white hover:bg-black'
                                                }`}
                                        >
                                            <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${isCheckoutHovered
                                                ? 'opacity-100'
                                                : 'opacity-0 group-hover:opacity-100'
                                                }`} style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>
                                            <div className={`relative z-10 ${isCheckoutHovered ? 'text-shadow-white-opaque' : ''}`}>
                                                Continue Shopping
                                            </div>
                                        </button>
                                    </div>

                                    <div className="mt-4 text-xs text-gray-500 text-center">
                                        Secure checkout powered by Shopify
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recently Checked Products and Category List */}
                        <div className="relative mx-4">
                            <RecentlyChecked limit={4} />
                            <div className="mt-1">
                                <TopCategoryList />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartPage; 