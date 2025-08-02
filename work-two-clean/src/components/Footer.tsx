"use client";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "./Newsletter";
import { useState } from "react";

const Footer = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (section: string) => {
        setOpenDropdown(openDropdown === section ? null : section);
    };

    return (
        <div className="px-4 py-4 text-sm">
            {/* Newsletter Section */}
            <Newsletter />

            {/* TOP */}
            <div className="font-inter text-thin text-xs mx-auto max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-8">

                {/* menus */}
                <div className="flex justify-center gap-14 lg:gap-16">
                    <div className="block md:hidden border-b border-black pb-4" />
                    <div className="flex flex-col">
                        <button
                            onClick={() => toggleDropdown('company')}
                            className="gap-1 flex text-left items-center justify-center"
                        >
                            <h2 className="text-gray-500 uppercase">Company</h2>
                            <span className="text-sm font-inter text-thin">
                                {openDropdown === 'company' ? '◆' : '▩'}
                            </span>
                        </button>
                        <div className={`flex flex-col gap-4 transition-all duration-300 ${openDropdown === 'company' ? 'max-h-48 opacity-100 pt-2 pb-2' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            <Link href="/privacy-policy" className="hover:text-black transition-colors">Privacy Policy</Link>
                            <Link href="/terms-conditions" className="hover:text-black transition-colors">Terms and Conditions</Link>
                            <Link href="/careers" className="hover:text-black transition-colors">Careers</Link>
                            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
                            <Link href="/store-locations" className="hover:text-black transition-colors">Store Locations</Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <button
                            onClick={() => toggleDropdown('shop')}
                            className="gap-1 flex text-left items-center justify-center"
                        >
                            <h2 className="text-gray-500 uppercase">Shop</h2>
                            <span className="text-sm font-inter text-thin transform transition-transform duration-200">
                                {openDropdown === 'shop' ? '◆' : '▩'}
                            </span>
                        </button>
                        <div className={`flex flex-col gap-4 transition-all duration-300 ${openDropdown === 'shop' ? 'max-h-48 opacity-100 pt-4 pb-2' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            <Link href="/collections/all" className="hover:text-black transition-colors">Shop All</Link>
                            <Link href="/collections/new-arrivals" className="hover:text-black transition-colors">New Arrivals</Link>
                            <Link href="/collections/best-sellers" className="hover:text-black transition-colors">Bestsellers</Link>
                            <Link href="/edition/elena-confidence-look" className="hover:text-black transition-colors">Edition</Link>
                            <Link href="/collections/sale" className="hover:text-black transition-colors">Sale</Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <button
                            onClick={() => toggleDropdown('help')}
                            className="gap-1 flex text-left items-center justify-center"
                        >
                            <h2 className="text-gray-500 uppercase">Help</h2>
                            <span className="text-sm font-inter text-thin transform transition-transform duration-200">
                                {openDropdown === 'help' ? '◆' : '▩'}
                            </span>
                        </button>
                        <div className={`flex flex-col gap-4 transition-all duration-300 ${openDropdown === 'help' ? 'max-h-48 opacity-100 pt-4 pb-2' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            <Link href="/profile" className="hover:text-black transition-colors">Profile Page</Link>
                            <Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link>
                            <Link href="/faq" className="hover:text-black transition-colors">FAQ</Link>
                            <Link href="/shipping" className="hover:text-black transition-colors">Delivery & shipping</Link>
                            <Link href="/returns" className="hover:text-black transition-colors">Returns</Link>
                        </div>
                    </div>
                </div>
                {/*region*/}
                <div className="uppercase flex justify-center gap-12">

                    <div className="">
                        <span className="text-gray-500 mr-4">Language:</span>
                        <select name="" id="" className="justify-start border border-gray-300 px-2 py-1">
                            <option value="en">English</option>
                            <option value="jp">Japanese</option>
                        </select>
                    </div>
                    <div className="">
                        <span className="text-gray-500 mr-4">Currency:</span>
                        <select name="" id="" className="border border-gray-300 px-2 py-1">
                            <option value="usd">$ USD</option>
                            <option value="jpy">¥ JPY</option>
                        </select>
                    </div>
                </div>

            </div>

            {/* BOTTOM*/}
            <div className="font-inter text-thin text-xs flex flex-col md:flex-row items-center justify-center gap-12 border-black border-t pt-6 mt-6">
                <div className="flex flex-col gap-8 md:gap-24 lg:gap-32 justify-center items-center md:flex-row">
                    <div className="flex gap-4">
                        <Image src="/instagram.png" alt="" width={16} height={16} />
                        <Image src="/youtube.png" alt="" width={16} height={16} />
                        <Image src="/pinterest.png" alt="" width={16} height={16} />
                    </div>
                    {/*copyright*/}
                    <div className="uppercase">© 2025 Yimajiuni All rights reserved.</div>
                    {/*payment methods*/}
                    <div className="hidden md:flex gap-2">
                        <Image src="/amex.png" alt="American Express" width={30} height={15} className="grayscale" style={{ objectFit: "contain" }} />
                        <Image src="/visa.png" alt="Visa" width={20} height={15} className="grayscale" style={{ objectFit: "contain" }} />
                        <Image src="/mastercard.png" alt="Mastercard" width={30} height={15} className="grayscale" style={{ objectFit: "contain" }} />
                        <Image src="/google-pay.png" alt="Google Pay" width={30} height={15} className="grayscale" style={{ objectFit: "contain" }} />
                        <Image src="/paypal.png" alt="PayPal" width={40} height={30} className="grayscale" style={{ objectFit: "contain" }} />

                        {/*<Image src="/apple-pay.png" alt="Apple Pay" width={40} height={20} className="grayscale" style={{ objectFit: "contain" }} />
                        <Image src="/amazon-pay.png" alt="Amazon Pay" width={30} height={15} className="grayscale" style={{ objectFit: "contain" }} />
                        <Image src="/klarna.png" alt="Klarna" width={40} height={20} className="grayscale" style={{ objectFit: "contain" }} />
                        */}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;