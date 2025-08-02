"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useShopifyAuth } from "@/context/shopifyAuthContext";
import { useWishlist } from "@/context/wishlistContext";
import { useShopifyCart } from "@/hooks/useShopifyCart";
import { useCart } from "@/context/cartContext";
import { useLoginModal } from "@/context/loginContext";

const NavIcons = () => {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const pathName = usePathname();

    // Use Shopify authentication
    const { customer, isAuthenticated, logout } = useShopifyAuth();
    const { wishlistItems } = useWishlist();

    // Use global cart context
    const { toggleCart } = useCart();
    const { openLoginModal } = useLoginModal();

    const handleProfile = () => {
        if (!isAuthenticated) {
            openLoginModal();
        } else {
            router.push('/profile');
        }
    };

    const handleLogout = async () => {
        setIsLoading(true);
        logout();
        setIsLoading(false);
        router.push('/');
    };

    const { getCartCount, loadCart } = useShopifyCart();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        loadCart();
    }, [loadCart]);

    return (
        <div className="flex items-center gap-2 xl:gap-6 relative">
            <svg
                className="w-6 h-6 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
                onClick={handleProfile}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <div
                className="relative cursor-pointer"
                onClick={() => {
                    if (!isAuthenticated) {
                        openLoginModal();
                    } else {
                        router.push('/wishlist');
                    }
                }}
            >
                <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </div>
            <div
                className="relative cursor-pointer"
                onClick={toggleCart}
            >
                <svg
                    className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full text-white text-xs flex items-center justify-center">
                    {mounted ? getCartCount() : 0}
                </div>
            </div>
        </div>
    );
};

export default NavIcons;