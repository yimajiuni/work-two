"use client";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import MegaMenu from "./MegaMenu";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
    const [isMegaMenuVisible, setIsMegaMenuVisible] = useState(false);
    const [showEditionBanner, setShowEditionBanner] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const handleShopMouseEnter = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setIsMegaMenuVisible(true);
    };

    const handleShopMouseLeave = () => {
        const id = setTimeout(() => {
            setIsMegaMenuVisible(false);
        }, 150); // 150ms delay to allow moving to MegaMenu
        setTimeoutId(id);
    };

    // Toggle banner every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setShowEditionBanner(prev => !prev);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Banner Section */}
            <div className="fixed top-0 left-0 right-0 h-10 bg-black text-white z-50">
                <div className="h-full flex items-center justify-center text-center px-4">
                    {showEditionBanner ? (
                        <Link href="edition/elena-confidence-look" className="px-2 py-1 font-times-new-roman-italic text-sm hover:underline transition-all duration-300">
                            Check the Edit with Elena Confidence look vol.12
                        </Link>
                    ) : (
                        <div className="font-times-new-roman-italic text-sm">
                            Purchase more than $500 and free shipping all over the world!
                        </div>
                    )}
                </div>
            </div>

            {/* Main Navbar */}
            <div className="fixed top-8 left-0 right-0 h-16 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-white/95 backdrop-blur-sm z-40">
                <div className="h-full flex items-center justify-between md:hidden">
                    {/* Mobile */}
                    <Link href="/" className="flex items-center">
                        <Image src="/logo.svg" alt="logo" width={24} height={24} />
                        <div className="text-2xl tracking-wide font-bodoni">Yima</div>
                    </Link>
                    <HamburgerMenu />
                </div>
                <div className="text-xs hidden md:flex items-center justify-between gap-8 h-full">
                    <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                        <Link href="/" className="flex items-center">
                            <Image src="/logo.svg" alt="logo" width={24} height={24} />
                            <div className="text-2xl tracking-wide font-bodoni">Yima</div>
                        </Link>
                        <div className="hidden md:flex gap-4 text-xs font-inter whitespace-nowrap">
                            <Link href="/collections/new-arrivals">NEW</Link>
                            <div
                                className="relative"
                                onMouseEnter={handleShopMouseEnter}
                                onMouseLeave={handleShopMouseLeave}
                            >
                                <Link href="/collections/all" className="cursor-pointer">
                                    SHOP
                                </Link>
                            </div>
                            <Link href="/collections/sale">SALE</Link>
                            <Link href="/edition/elena-confidence-look">EDITION</Link>
                            <Link href="/about">ABOUT</Link>
                            <Link href="/contact">CONTACT US</Link>
                        </div>
                    </div>
                    <div className="w-[200px] md:w-[240px] lg:w-1/3 flex items-center justify-between gap-4 lg:gap-8">
                        <SearchBar />
                        <NavIcons />
                    </div>
                </div>

                {/* MegaMenu at navbar level so that it is always visible */}
                <MegaMenu
                    isVisible={isMegaMenuVisible}
                    onMouseEnter={handleShopMouseEnter}
                    onMouseLeave={handleShopMouseLeave}
                />
            </div>
        </>
    )
}

export default Navbar;