"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface MegaMenuProps {
    isVisible: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const MegaMenu = ({ isVisible, onMouseEnter, onMouseLeave }: MegaMenuProps) => {
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    const bannerImages = [
        "/mega-banner-1.jpg",
        "/mega-banner-2.jpg",
        "/mega-banner-3.jpg"
    ];

    // Auto-switch banner every 1 seconds
    useEffect(() => {
        if (!isVisible) return;

        const interval = setInterval(() => {
            setCurrentBannerIndex((prev) => (prev + 1) % bannerImages.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [isVisible, bannerImages.length]);

    if (!isVisible) return null;

    const menuItems = [
        {
            title: "Shop",
            items: [
                { name: "Shop all", href: "/collections/all" },
                { name: "New arrivals", href: "/collections/new" },
                { name: "Bestsellers", href: "/collections/bestsellers" },
                { name: "Sale", href: "/collections/sale" }
            ]
        },
        {
            title: "Occasion Wear",
            items: [
                { name: "Mini dress", href: "/collections/mini-dress" },
                { name: "Midi dress", href: "/collections/midi-dress" },
                { name: "Maxi dress", href: "/collections/maxi-dress" },
                { name: "Bridal", href: "/collections/bridal" }
            ]
        },
        {
            title: "Ready to wear",
            items: [
                { name: "Tops", href: "/collections/tops" },
                { name: "Bottoms", href: "/collections/bottoms" },
                { name: "Outerwear", href: "/collections/outerwear" },
                { name: "Dresses", href: "/collections/dresses" }
            ]
        },
        {
            title: "Swim & intimates",
            items: [
                { name: "Swimsuits", href: "/collections/swimsuits" },
                { name: "Intimate wears", href: "/collections/intimates" },
                { name: "Resort", href: "/collections/resort" }
            ]
        }
    ];

    return (
        <div
            className="bg-white/95 backdrop-blur-sm border-b border-white/30 shadow-lg z-40 absolute top-full left-0 right-0 w-screen"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="px-4 py-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
                    {/* Menu Sections - 4 columns */}
                    <div className="lg:col-span-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {menuItems.map((section, index) => (
                                <div key={index} className="space-y-4">
                                    <h3 className="text-sm font-inter text-thin text-gray-900 uppercase tracking-wide">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {section.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <Link
                                                    href={item.href}
                                                    className="text-xs font-inter text-thin text-gray-600 uppercase hover:text-black hover:border-b hover:border-black w-fit py-1"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Banner Section - 2 columns */}
                    <div className="lg:col-span-3">
                        <Link href="/collections/occasion-wear" className="block">
                            <div className="grid grid-cols-2">
                                {/* Left Column - Switching Banner */}
                                <div className="relative h-48 bg-gray-100 overflow-hidden">
                                    <Image
                                        src={bannerImages[currentBannerIndex]}
                                        alt="Occasion Wear Banner"
                                        fill
                                        className="object-cover transition-opacity duration-1000"
                                    />
                                </div>

                                {/* Right Column - Copy */}
                                <div className="flex flex-col justify-center text-white bg-black p-4">
                                    <h4 className="font-finches text-2xl text-white px-4 mx-auto mb-2">
                                        Lets Go Dancing<br />
                                        with our<br />
                                        <p className="text-3xl">Occasion Wear</p>
                                    </h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu; 