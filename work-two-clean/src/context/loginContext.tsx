"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoginContextType {
    isLoginModalOpen: boolean;
    openLoginModal: () => void;
    closeLoginModal: () => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const useLoginModal = () => {
    const context = useContext(LoginContext);
    if (context === undefined) {
        throw new Error('useLoginModal must be used within a LoginProvider');
    }
    return context;
};

interface LoginProviderProps {
    children: ReactNode;
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const openLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    return (
        <LoginContext.Provider value={{
            isLoginModalOpen,
            openLoginModal,
            closeLoginModal
        }}>
            {children}
        </LoginContext.Provider>
    );
}; 