"use client";
import { useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import PerformanceMonitor from "./PerformanceMonitor";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedShop, setExpandedShop] = useState(false);

    const shopCategories = [
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
        <div className="relative">
            <div className="flex items-center gap-4 justify-between">
                <NavIcons />
                <svg
                    className="w-6 h-6 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            {isOpen && (
                <div className="fixed pt-5 px-5 inset-0 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 text-gray-900 top-16 w-full h-[calc(100vh-80px)] flex flex-col gap-8 text-xl z-10 overflow-y-auto">
                    <div className="flex flex-col gap-4">
                        <SearchBar />
                    </div>

                    {/* Mobile Shop Menu */}
                    <div className="text-sm font-thin flex flex-col gap-4">
                        <Link href="/collections/new">NEW</Link>

                        {/* Shop Section */}
                        <div className="space-y-2">
                            <button
                                onClick={() => setExpandedShop(!expandedShop)}
                                className="flex items-center justify-between w-full text-left"
                            >
                                <span>SHOP</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${expandedShop ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {expandedShop && (
                                <div className="ml-4 space-y-4">
                                    {shopCategories.map((category, index) => (
                                        <div key={index} className="space-y-2">
                                            <h4 className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                                                {category.title}
                                            </h4>
                                            <div className="ml-2 space-y-1">
                                                {category.items.map((item, itemIndex) => (
                                                    <Link
                                                        key={itemIndex}
                                                        href={item.href}
                                                        className="block text-sm text-gray-700 hover:text-gray-900 py-1"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link href="/collections/sale">SALE</Link>
                        <Link href="/edition/elena-confidence-look">EDITION</Link>
                        <Link href="/about">ABOUT</Link>
                        <Link href="/contact">CONTACT US</Link>
                    </div>

                    <div className="flex flex-col gap-4 font-inter">
                        <PerformanceMonitor />
                    </div>

                </div>
            )}
        </div>
    )
}

export default Menu;