"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface HamburgerContextType {
    isHamburgerOpen: boolean;
    setIsHamburgerOpen: (open: boolean) => void;
    closeHamburger: () => void;
}

const HamburgerContext = createContext<HamburgerContextType | undefined>(undefined);

export const useHamburger = () => {
    const context = useContext(HamburgerContext);
    if (context === undefined) {
        throw new Error('useHamburger must be used within a HamburgerProvider');
    }
    return context;
};

interface HamburgerProviderProps {
    children: ReactNode;
}

export const HamburgerProvider: React.FC<HamburgerProviderProps> = ({ children }) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const closeHamburger = () => {
        setIsHamburgerOpen(false);
    };

    return (
        <HamburgerContext.Provider value={{
            isHamburgerOpen,
            setIsHamburgerOpen,
            closeHamburger
        }}>
            {children}
        </HamburgerContext.Provider>
    );
}; 