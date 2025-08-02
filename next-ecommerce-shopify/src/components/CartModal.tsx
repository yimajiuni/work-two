"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useShopifyCart } from "@/hooks/useShopifyCart";
import { useCart } from "@/context/cartContext";
import { formatYen, extractColorFromVariant, extractSizeFromVariant, getColorCode } from '@/lib/Utils';

const CartModal = () => {
    const { isCartOpen, closeCart } = useCart();
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
    const [mounted, setMounted] = useState(false);
    const [isViewCartHovered, setIsViewCartHovered] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Load cart on component mount
        console.log('🛒 CartModal: Loading cart...');
        loadCart();
    }, [loadCart]);

    useEffect(() => {
        console.log('🛒 CartModal: Cart state updated:', { items: items.length, total: getCartTotal() });
    }, [items, getCartTotal]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isCartOpen]);

    const handleCheckout = () => {
        checkout();
    };

    const handleRemoveItem = (lineId: string) => {
        removeItem(lineId);
    };

    const handleQuantityChange = (lineId: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeItem(lineId);
        } else {
            updateItem(lineId, newQuantity);
        }
    };

    return (
        <>
            {/* Backdrop */}
            {isCartOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={closeCart}
                />
            )}

            {/* Drawer */}
            <div className={`font-inter text-thin text-black fixed top-0 right-0 h-screen w-full max-w-md bg-white z-50 transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex gap-2">
                        <h2 className="text-sm text-gray-900 uppercase">
                            Shopping Cart
                        </h2>
                        <h2 className="text-sm text-gray-900">
                            ({mounted ? getCartCount() : 0} items)
                        </h2>
                    </div>
                    <button
                        onClick={closeCart}
                        className="text-gray-600 p-2"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="square" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="flex flex-col p-6">
                    <div className="flex-1 overflow-y-auto p-6 min-h-[calc(100vh-320px)] max-h-[calc(100vh-320px)]">
                        {!items.length ? (
                            <div className="text-center py-12 text-gray-900 font-times-new-roman-italic">
                                <div className="w-6 h-6 mx-auto mb-4 flex items-center justify-center group cursor-pointer" onClick={() => { closeCart(); window.location.href = '/collections/all'; }}>
                                    <svg className="w-6 h-6 text-gray-900 group-hover:fill-black transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <div className="text-sm mb-2">Your cart is empty</div>
                                <div className="text-sm mb-2">Add some items to make</div>
                                <div className="text-sm mb-2">your wardrobe complete.</div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {items.map((item) => (
                                    <div className="flex gap-4" key={item.id}>
                                        <Link href={`/products/${item.productHandle}`}>
                                            <Image
                                                src={item.image || "/placeholder-image.jpg"}
                                                alt={item.title}
                                                width={80}
                                                height={100}
                                                className="object-cover hover:opacity-80 transition-opacity"
                                            />
                                        </Link>
                                        <div className="flex flex-col justify-between flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-4">
                                                <Link
                                                    href={`/products/${item.productHandle}`}
                                                    className="text-xs text-gray-900 hover:text-gray-700 transition-colors truncate flex-1"
                                                >
                                                    {item.title}
                                                </Link>
                                                <p className="text-sm text-gray-600">
                                                    {formatYen(item.price)}
                                                </p>
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

                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center border border-gray-300">
                                                    <button
                                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                        className="px-2 py-1 text-gray-600 hover:bg-gray-100 transition-colors text-xs"
                                                        disabled={isLoading}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="px-2 py-1 text-gray-900 min-w-[30px] text-center text-xs">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                        className="px-2 py-1 text-gray-600 hover:bg-gray-100 transition-colors text-xs"
                                                        disabled={isLoading}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <button
                                                    className="text-xs text-red-500 hover:text-red-700 transition-colors"
                                                    onClick={() => handleRemoveItem(item.id)}
                                                    disabled={isLoading}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 ? (
                        <div className="border-t border-gray-200 p-6 space-y-4">
                            <div className="flex items-center justify-between text-xs">
                                <span>Subtotal</span>
                                <span className="text-gray-900 font-semibold">
                                    {formatYen(getCartTotal())}
                                </span>
                            </div>
                            <p className="text-gray-500 text-xs">
                                Shipping and taxes calculated at checkout.
                            </p>

                            <div className="space-y-3">
                                <button
                                    className="w-full border-black border text-white py-3 px-4 bg-white transition-all duration-300 hover:bg-black hover:text-white text-xs uppercase group relative overflow-hidden"
                                    onClick={() => {
                                        closeCart();
                                        window.location.href = '/cart';
                                    }}
                                    onMouseEnter={() => setIsViewCartHovered(true)}
                                    onMouseLeave={() => setIsViewCartHovered(false)}
                                >
                                    {/* SVG Background Layer with Blend Effect */}
                                    <div className="absolute inset-0 bg-cover bg-center bg-white hover:bg-black hover:text-white mix-blend-difference group-hover:opacity-0 transition-opacity duration-300" style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>
                                    {/* Button Text Layer */}
                                    <div className="relative z-10 text-shadow-black-sharp">View Cart</div>
                                </button>
                                <button
                                    className={`w-full border border-gray-900 py-3 px-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-default text-xs uppercase group relative overflow-hidden ${isViewCartHovered
                                        ? 'text-black bg-white'
                                        : 'text-black hover:text-white hover:bg-black'
                                        }`}
                                    disabled={isLoading}
                                    onClick={handleCheckout}
                                >
                                    <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${isViewCartHovered
                                        ? 'opacity-100'
                                        : 'opacity-0 group-hover:opacity-100'
                                        }`} style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>
                                    <div className={`relative z-10 ${isViewCartHovered ? 'text-shadow-white-opaque' : ''}`}>
                                        {isLoading ? 'Processing...' : 'Checkout'}
                                    </div>
                                </button>

                            </div>
                        </div>
                    ) : (
                        <div className="border-t border-gray-200 p-6">
                            <Link href="/collections/all">
                                <button
                                    className="w-full bg-black text-white py-3 px-4 hover:bg-white hover:text-black hover:border-black hover:border text-xs relative overflow-hidden group"
                                    onClick={closeCart}
                                >
                                    <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: 'url(/wa-ptn-ec.png)' }}></div>
                                    <div className="relative z-10">Start Shopping</div>
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div >
        </>
    );
};

export default CartModal;