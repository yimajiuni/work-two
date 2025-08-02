'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCustomer } from '@/lib/Shopify';

interface ShopifyCustomer {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
    phone?: string;
}

interface ShopifyAuthContextType {
    customer: ShopifyCustomer | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (token: string, customerId?: string) => void;
    logout: () => void;
    refreshCustomer: () => Promise<void>;
}

const ShopifyAuthContext = createContext<ShopifyAuthContextType | undefined>(undefined);

export const useShopifyAuth = () => {
    const context = useContext(ShopifyAuthContext);
    if (context === undefined) {
        throw new Error('useShopifyAuth must be used within a ShopifyAuthProvider');
    }
    return context;
};

interface ShopifyAuthProviderProps {
    children: ReactNode;
}

export const ShopifyAuthProvider = ({ children }: ShopifyAuthProviderProps) => {
    const [customer, setCustomer] = useState<ShopifyCustomer | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const isAuthenticated = !!customer;

    const login = (token: string, customerId?: string) => {
        localStorage.setItem('shopify_customer_token', token);
        if (customerId) {
            localStorage.setItem('shopify_customer_id', customerId);
        }
        refreshCustomer();
    };

    const logout = () => {
        localStorage.removeItem('shopify_customer_token');
        localStorage.removeItem('shopify_customer_id');
        setCustomer(null);
    };

    const refreshCustomer = async () => {
        try {
            const token = localStorage.getItem('shopify_customer_token');

            if (token) {
                console.log('🔄 Refreshing customer data with token...');
                const customerData = await getCustomer('', token); // customerId is not used in getCustomer
                if (customerData) {
                    console.log('✅ Customer data retrieved:', customerData);
                    setCustomer(customerData);
                } else {
                    console.log('❌ No customer data found, logging out');
                    logout();
                }
            }
        } catch (error) {
            console.error('Error refreshing customer:', error);
            logout();
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        refreshCustomer();
    }, []);

    const value: ShopifyAuthContextType = {
        customer,
        isAuthenticated,
        isLoading,
        login,
        logout,
        refreshCustomer,
    };

    return (
        <ShopifyAuthContext.Provider value={value}>
            {children}
        </ShopifyAuthContext.Provider>
    );
}; 