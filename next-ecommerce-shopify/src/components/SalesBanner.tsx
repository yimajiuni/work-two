"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const SalesBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
        // Show banner 2 seconds after page load
        const timer = setTimeout(() => {
            setShouldShow(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Only show if we're past the 2-second delay AND not within top 30px
            if (shouldShow && scrollPosition > 30) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Check initial scroll position
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [shouldShow]);

    if (isClosed) return null;

    return (
        <div className={`fixed bottom-10 left-2 md:bottom-6 md:left-6 z-50 transition-all duration-500 ease-in-out ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
            }`}>
            <Link href="/collections/sale">
                <div className="relative border-[0.5px] border-black w-[90px] h-[90px] bg-white rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105">
                    {/* Close Button */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsClosed(true);
                        }}
                        className="absolute -top-2 -right-2 w-4 h-4 bg-black text-white rounded-full flex items-center justify-center text-xs hover:bg-gray-800 transition-colors duration-200 z-10"
                    >
                        ×
                    </button>

                    {/* Banner Content */}
                    <div className="text-center">
                        <div className="text-xs text-black font-inter text-xs leading-tight">
                            30% OFF
                        </div>
                        <div className="text-black font-finches text-m leading-tight mt-1">
                            Seasonal<br /> Sale
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SalesBanner; 