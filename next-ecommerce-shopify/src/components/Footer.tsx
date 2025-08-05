"use client";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "./Newsletter";
import { useState } from "react";

const Footer = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [openRegionDropdown, setOpenRegionDropdown] = useState<string | null>(null);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [selectedCurrency, setSelectedCurrency] = useState('$ USD');

    const toggleDropdown = (section: string) => {
        setOpenDropdown(openDropdown === section ? null : section);
    };

    const toggleRegionDropdown = (section: string) => {
        setOpenRegionDropdown(openRegionDropdown === section ? null : section);
    };

    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
        // Keep dropdown open after selection
    };

    const handleCurrencySelect = (currency: string) => {
        setSelectedCurrency(currency);
        // Keep dropdown open after selection
    };

    return (
        <div className="px-4 py-4 text-sm">
            {/* Newsletter Section */}
            <Newsletter />

            {/* TOP */}
            <div className="font-inter text-thin text-xs mx-auto max-w-4xl w-full flex flex-col gap-4 mb-10 sm:mb-0">

                {/* Top row with menus and region */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="items-center justify-between gap-4">
                        {/* footer menus */}
                        <div className="flex justify-center gap-14 lg:gap-16">
                            <div className="flex flex-col">
                                <button
                                    onClick={() => toggleDropdown('company')}
                                    className="gap-1 flex text-left items-center justify-center"
                                >
                                    <h2 className="text-gray-500 uppercase">Company</h2>
                                    <span className={`z-20 px-0.1 py-0.1 bg-white rounded-full text-xs font-inter text-thin transform transition-transform duration-200 ${openDropdown === 'company' ? 'rotate-0 scale-[200%] translate-y-5' : ' -rotate-45'}`}>
                                        ▩
                                    </span>
                                </button>
                            </div>
                            <div className="flex flex-col">
                                <button
                                    onClick={() => toggleDropdown('shop')}
                                    className="gap-1 flex text-left items-center justify-center"
                                >
                                    <h2 className="text-gray-500 uppercase">Shop</h2>
                                    <span className={`z-20 px-0.1 py-0.1 bg-white rounded-full text-xs font-inter text-thin transform transition-transform duration-200 ${openDropdown === 'shop' ? 'rotate-0 scale-[200%] translate-y-5' : ' -rotate-45'}`}>
                                        ▩
                                    </span>
                                </button>
                            </div>
                            <div className="flex flex-col">
                                <button
                                    onClick={() => toggleDropdown('help')}
                                    className="gap-1 flex text-left items-center justify-center"
                                >
                                    <h2 className="text-gray-500 uppercase">Help</h2>
                                    <span className={`z-20 px-0.1 py-0.1 bg-white rounded-full text-xs font-inter text-thin transform transition-transform duration-200 ${openDropdown === 'help' ? 'rotate-0 scale-[200%] translate-y-5' : ' -rotate-45'}`}>
                                        ▩
                                    </span>
                                </button>
                            </div>
                        </div>
                        {/* Shared dropdown area - centered below footer menu */}
                        <div className="relative">
                            <div className={`mt-4 z-10 flex flex-row flex-wrap justify-center gap-4 transition-all duration-300 ${openDropdown ? 'max-h-48 border border-black px-3 py-2 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                {openDropdown === 'company' && (
                                    <>
                                        <Link href="/privacy-policy" className="hover:text-black transition-colors hover:bg-gray-200 cursor-pointer border-r border-gray-200">Privacy Policy</Link>
                                        <Link href="/terms-conditions" className="hover:text-black transition-colors hover:bg-gray-200 cursor-pointer border-r border-gray-200">Terms and Conditions</Link>
                                        <Link href="/careers" className="hover:text-black transition-colors hover:bg-gray-200 cursor-pointer border-r border-gray-200">Careers</Link>
                                        <Link href="/blog" className="hover:text-black transition-colors hover:bg-gray-200 cursor-pointer border-r border-gray-200">Blog</Link>
                                        <Link href="/store-locations" className="hover:text-black transition-colors hover:bg-gray-200 cursor-pointer border-r border-gray-200">Store Locations</Link>

                                    </>
                                )}
                                {openDropdown === 'shop' && (
                                    <>
                                        <Link href="/collections/all" className="hover:text-black transition-colors hover:bg-gray-200 cursor-pointer border-r border-gray-200">Shop All</Link>
                                        <Link href="/collections/new-arrivals" className="hover:text-black transition-colors hover:bg-gray-200 cursor-pointer border-r border-gray-200">New Arrivals</Link>
                                        <Link href="/collections/best-sellers" className="hover:text-black transition-colors hover:bg-gray-200 cursor-pointer border-r border-gray-200">Bestsellers</Link>
                                        <Link href="/edition/elena-confidence-look" className="hover:text-black transition-colors hover:bg-gray-200 cursor-pointer border-r border-gray-200">Edition</Link>
                                        <Link href="/collections/sale" className="hover:text-black transition-colors hover:bg-gray-200 cursor-pointer border-r border-gray-200">Sale</Link>
                                    </>
                                )}
                                {openDropdown === 'help' && (
                                    <>
                                        <Link href="/profile" className="hover:text-black transition-colors hover:bg-gray-200 cursor-pointer border-r border-gray-200">Profile Page</Link>
                                        <Link href="/contact" className="hover:text-black transition-colors hover:bg-gray-200 cursor-pointer border-r border-gray-200">Contact Us</Link>
                                        <Link href="/faq" className="hover:text-black transition-colors hover:bg-gray-200 cursor-pointer border-r border-gray-200">FAQ</Link>
                                        <Link href="/shipping" className="hover:text-black transition-colors hover:bg-gray-200 cursor-pointer border-r border-gray-200">Delivery & shipping</Link>
                                        <Link href="/returns" className="hover:text-black transition-colors hover:bg-gray-200 cursor-pointer border-r border-gray-200">Returns</Link>
                                    </>

                                )}
                                {/* Bottom square wa symbol */}
                                <div className="absolute -bottom-1 left-20 flex">
                                    <div className="w-2 h-2 border-[0.5px] border-black bg-white bg-[url('/wa-ptn-ec.png')] bg-cover transform scale-[200%]"></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*region*/}
                    <div className="uppercase flex justify-center gap-12">
                        <div className="flex flex-col">
                            <button
                                onClick={() => toggleRegionDropdown('language')}
                                className="gap-1 flex text-left items-center justify-center"
                            >
                                <span className="text-gray-500 mr-4">Language:</span>
                                <span className="text-black">{selectedLanguage}</span>
                                <span className={`z-20 px-0.1 py-0.1 bg-white rounded-full text-xs font-inter text-thin transform transition-transform duration-200 ${openRegionDropdown === 'language' ? 'rotate-0 scale-[200%] translate-y-5' : '-rotate-45'}`}>
                                    ▩
                                </span>
                            </button>
                            {/* Language dropdown */}
                            <div className={`mt-4 z-10 flex flex-col gap-2 transition-all duration-300 relative ${openRegionDropdown === 'language' ? 'max-h-48 border border-black px-3 py-2 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                <button
                                    onClick={() => handleLanguageSelect('English')}
                                    className={`hover:text-black transition-colors hover:bg-gray-200 cursor-pointer border-b border-gray-200 flex items-center gap-2 ${selectedLanguage === 'English' ? '' : ''}`}
                                >
                                    <div className="w-3 h-3 border border-gray-300 flex items-center justify-center">
                                        {selectedLanguage === 'English' && (
                                            <div className="w-2 h-2 border-[0.5px] border-black bg-white bg-[url('/wa-ptn-ec.png')] bg-cover transform scale-[200%]"></div>
                                        )}
                                    </div>
                                    English
                                </button>
                                <button
                                    onClick={() => handleLanguageSelect('Japanese')}
                                    className={`hover:text-black transition-colors hover:bg-gray-200 cursor-pointer flex items-center gap-2 ${selectedLanguage === 'Japanese' ? '' : ''}`}
                                >
                                    <div className="w-3 h-3 border border-gray-300 flex items-center justify-center">
                                        {selectedLanguage === 'Japanese' && (
                                            <div className="w-2 h-2 border-[0.5px] border-black bg-white bg-[url('/wa-ptn-ec.png')] bg-cover transform scale-[200%]"></div>
                                        )}
                                    </div>
                                    Japanese
                                </button>
                                {/* Bottom kasumi cloud square */}
                                <div className="absolute bottom-[27%] -left-7 sm:-left-9 flex items-center gap-1">
                                    <div className="h-2 w-6 sm:w-7 border-[0.5px] border-black bg-white bg-cover transform scale-[200%]">

                                    </div>

                                </div>


                            </div>
                        </div>
                        <div className="flex flex-col">
                            <button
                                onClick={() => toggleRegionDropdown('currency')}
                                className="gap-1 flex text-left items-center justify-center"
                            >
                                <span className="text-gray-500 mr-4">Currency:</span>
                                <span className="text-black whitespace-nowrap">{selectedCurrency}</span>
                                <span className={`z-20 px-0.1 py-0.1 bg-white rounded-full text-xs font-inter text-thin transform transition-transform duration-200 ${openRegionDropdown === 'currency' ? 'rotate-0 scale-[200%] translate-y-5' : '-rotate-45'}`}>
                                    ▩
                                </span>
                            </button>
                            {/* Currency dropdown */}
                            <div className={`mt-4 z-10 flex flex-col gap-2 transition-all duration-300 relative ${openRegionDropdown === 'currency' ? 'max-h-48 border border-black px-3 py-2 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                <button
                                    onClick={() => handleCurrencySelect('$ USD')}
                                    className={`hover:text-black transition-colors hover:bg-gray-200 cursor-pointer border-b border-gray-200 flex items-center gap-2 ${selectedCurrency === '$ USD' ? '' : ''}`}
                                >
                                    <div className="w-3 h-3 border border-gray-300 flex items-center justify-center">
                                        {selectedCurrency === '$ USD' && (
                                            <div className="w-2 h-2 border-[0.5px] border-black bg-white bg-[url('/wa-ptn-ec.png')] bg-cover transform scale-[200%]"></div>
                                        )}
                                    </div>
                                    $ USD
                                </button>
                                <button
                                    onClick={() => handleCurrencySelect('¥ JPY')}
                                    className={`hover:text-black transition-colors hover:bg-gray-200 cursor-pointer flex items-center gap-2 ${selectedCurrency === '¥ JPY' ? '' : ''}`}
                                >
                                    <div className="w-3 h-3 border border-gray-300 flex items-center justify-center">
                                        {selectedCurrency === '¥ JPY' && (
                                            <div className="w-2 h-2 border-[0.5px] border-black bg-white bg-[url('/wa-ptn-ec.png')] bg-cover transform scale-[200%]"></div>
                                        )}
                                    </div>
                                    ¥ JPY
                                </button>
                                {/* Bottom kasumi cloud square */}
                                <div className="absolute bottom-[0%] -right-5 sm:-right-10 flex items-center gap-1">
                                    <div className="h-2 w-5 sm:w-8 border-[0.5px] border-black bg-white bg-cover transform scale-[200%]">
                                        <div className="text-[5px] font-ming text-center items-center mx-auto">身近</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* BOTTOM*/}
            <div className="font-inter text-thin text-xs flex flex-col md:flex-row items-center justify-center gap-12 border-black border-t pt-6 mt-6">
                <div className="flex flex-col gap-8 md:gap-24 lg:gap-32 justify-center items-center md:flex-row">
                    <div className="flex gap-4 cursor-pointer">
                        <Image src="/instagram.png" alt="" width={16} height={16} />
                        <Image src="/youtube.png" alt="" width={16} height={16} />
                        <Image src="/pinterest.png" alt="" width={16} height={16} />
                        {/*payment methods 
                    <div className="hidden md:flex gap-2">
                        <Image src="/amex.png" alt="American Express" width={30} height={15} className="grayscale" style={{ objectFit: "contain" }} />
                        <Image src="/visa.png" alt="Visa" width={20} height={15} className="grayscale" style={{ objectFit: "contain" }} />
                        <Image src="/mastercard.png" alt="Mastercard" width={30} height={15} className="grayscale" style={{ objectFit: "contain" }} />
                        <Image src="/google-pay.png" alt="Google Pay" width={30} height={15} className="grayscale" style={{ objectFit: "contain" }} />
                        <Image src="/paypal.png" alt="PayPal" width={40} height={30} className="grayscale" style={{ objectFit: "contain" }} />
                    </div>
                    mobile*/}
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

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;