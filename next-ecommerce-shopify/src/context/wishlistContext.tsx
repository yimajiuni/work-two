'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useShopifyAuth } from './shopifyAuthContext';

interface WishlistItem {
    id: string;
    title: string;
    handle: string;
    price: string;
    image: string;
    variantId: string;
}

interface WishlistContextType {
    wishlistItems: WishlistItem[];
    addToWishlist: (item: WishlistItem) => void;
    removeFromWishlist: (itemId: string) => void;
    isInWishlist: (itemId: string) => boolean;
    clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};

interface WishlistProviderProps {
    children: ReactNode;
}

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
    const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
    const { isAuthenticated } = useShopifyAuth();

    // Load wishlist from localStorage on mount
    useEffect(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedWishlist) {
            try {
                setWishlistItems(JSON.parse(savedWishlist));
            } catch (error) {
                console.error('Error loading wishlist from localStorage:', error);
            }
        }
    }, []);

    // Save wishlist to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const addToWishlist = (item: WishlistItem) => {
        if (!isAuthenticated) {
            return; // Don't add to wishlist if not authenticated
        }

        setWishlistItems(prev => {
            const exists = prev.find(wishlistItem => wishlistItem.id === item.id);
            if (!exists) {
                return [...prev, item];
            }
            return prev;
        });
    };

    const removeFromWishlist = (itemId: string) => {
        setWishlistItems(prev => prev.filter(item => item.id !== itemId));
    };

    const isInWishlist = (itemId: string) => {
        return wishlistItems.some(item => item.id === itemId);
    };

    const clearWishlist = () => {
        setWishlistItems([]);
    };

    const value: WishlistContextType = {
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
    };

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
}; 