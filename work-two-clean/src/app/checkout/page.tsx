"use client";
import { useEffect, useState } from "react";
import { useShopifyCart } from "@/hooks/useShopifyCart";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { formatYen } from "@/lib/Utils";

const CheckoutPage = () => {
    const router = useRouter();
    const {
        items,
        isLoading,
        getCartTotal,
        getCartCount,
        removeItem,
        updateItem,
        loadCart
    } = useShopifyCart();

    const [isRedirecting, setIsRedirecting] = useState(false);

    useEffect(() => {
        loadCart();
    }, [loadCart]);

    useEffect(() => {
        // Redirect to home if cart is empty
        if (!isLoading && items.length === 0) {
            router.push('/');
        }
    }, [items, isLoading, router]);

    const handleQuantityChange = (lineId: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeItem(lineId);
        } else {
            updateItem(lineId, newQuantity);
        }
    };

    const handleCheckout = async () => {
        if (items.length === 0) return;

        setIsRedirecting(true);

        try {
            // For now, we'll redirect to Shopify's checkout
            // In a full implementation, you might want to create a custom checkout flow
            window.location.href = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/cart`;
        } catch (error) {
            console.error('Checkout error:', error);
            setIsRedirecting(false);
        }
    };

    const handleContinueShopping = () => {
        router.push('/');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-highlight mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading your cart...</p>
                </div>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
                    <p className="text-gray-600 mb-6">Add some products to get started</p>
                    <button
                        onClick={handleContinueShopping}
                        className="bg-highlight text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Shopping Cart</h1>

                            <div className="space-y-6">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4 border-b border-gray-200 pb-6">
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={item.image || "/placeholder-image.jpg"}
                                                alt={item.title}
                                                width={80}
                                                height={80}
                                                className="object-cover rounded-md"
                                            />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-medium text-gray-900 truncate">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {formatYen(item.price)}
                                            </p>
                                        </div>

                                        <div className="flex flex-col items-end gap-2">
                                            <div className="flex items-center border border-gray-300 rounded-md">
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

                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-red-500 hover:text-red-700 text-sm transition-colors"
                                                disabled={isLoading}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <button
                                    onClick={handleContinueShopping}
                                    className="text-highlight hover:text-opacity-80 transition-colors"
                                >
                                    ← Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>

                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span>Items ({getCartCount()})</span>
                                    <span>{formatYen(getCartTotal())}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Shipping</span>
                                    <span className="text-gray-500">Calculated at checkout</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Tax</span>
                                    <span className="text-gray-500">Calculated at checkout</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 mt-4 pt-4">
                                <div className="flex justify-between text-lg font-semibold">
                                    <span>Total</span>
                                    <span>{formatYen(getCartTotal())}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                disabled={isLoading || isRedirecting || items.length === 0}
                                className="w-full bg-highlight text-white py-3 px-4 rounded-md font-medium hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                            >
                                {isRedirecting ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Redirecting...
                                    </div>
                                ) : (
                                    'Proceed to Checkout'
                                )}
                            </button>

                            <p className="text-xs text-gray-500 mt-3 text-center">
                                You will be redirected to Shopify's secure checkout
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage; 