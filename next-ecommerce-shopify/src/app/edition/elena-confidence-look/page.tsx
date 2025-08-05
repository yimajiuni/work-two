"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import RecentlyChecked from "@/components/RecentlyChecked";
import TopCategoryList from "@/components/TopCategoryList";

const ElenaConfidenceLookPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-pulse text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-48 mx-auto"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white px-4 pt-4 sm:px-6 lg:px-8">
            {/* Top Row - Main Visual with Overlay */}
            <div className="relative h-[calc(100vh-80px)] pt-20">
                <Image
                    src="/elena-confidence-look-12-1.png"
                    alt="Elena Confidence Look"
                    fill
                    className="object-cover object-top"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />

                {/* Overlay Content - Responsive Layout */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                        {/* Left Column - Main Copy */}
                        <div className="flex flex-col justify-center items-center text-center">
                            <h1 className="pt-10 md:pt-0 font-finches w-2/3 md:w-full text-4xl md:text-5xl text-white leading-tight mb-4">
                                Affirm, Breathe,<br />
                                &Grow Pretty Imaginations
                            </h1>
                            <p className="font-thin text-base text-white">
                                Grab it Simply By Your Own Actions.
                            </p>
                        </div>

                        {/* Middle Column - Hidden on mobile, visible on md+ */}
                        <div className="hidden md:flex items-center justify-center">
                            {/* Empty column */}
                        </div>

                        {/* Right Column - Example Sentence */}
                        <div className="flex items-center justify-center text-center md:text-left">
                            <p className="font-thin w-2/3 md:w-full text-sm line-clamp-4 md:line-clamp-none md:text-base text-white leading-relaxed max-w-sm">
                                The interwinded resilience and transience is reflected in Yima&apos;s SS 2025 collection, which combines durable fabrics that are recycled with our dedicated production process with elements of lightness and flexibility, resulting in maneuverous experiment that highlights the connections between form and function, past and present, the natural environment and the human heart.
                                This edition exibits how it is worn by our muse philanthropist Elena confidently in her busy life.                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Down Arrow */}
            <div className="w-full justify-center text-xl text-center mt-6 mb-6">
                ▼
            </div>

            {/* Bottom Row - Responsive Layout */}
            <div className="flex flex-col lg:flex-row mb-12 gap-6 lg:gap-0">
                {/* Left Column - Image */}
                <div className="w-full lg:w-1/2">
                    <Image
                        src="/elena-confidence-look-12-2.png"
                        alt="Elena Confidence Look Vol.12"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Right Column - Product Section */}
                <div className="text-center mx-auto w-full lg:w-1/3 p-20 flex flex-col justify-center">
                    <Link href="/collections/all">
                        <h2 className="uppercase font-thin text-sm text-black mb-4 border-b border-black w-fit mx-auto">
                            ▷Shop This Look◁
                        </h2>
                        <div className="mb-4 hover:cursor-pointer">
                            <Image
                                src="/elena-confidence-look-12-3.png"
                                alt="Elena Two Piece Dress"
                                width={400}
                                height={500}
                                className="w-full max-w-sm mx-auto object-cover"
                            />
                        </div>

                        <h3 className="font-times-new-roman-italic text-sm sm:text-base md:text-lg text-black mb-2">
                            Elena Two Piece Dress
                        </h3>
                        <p className="font-inter text-sm text-black">
                            $800
                        </p>
                    </Link>
                </div>
            </div>

            {/* Recently Checked Products and Category List */}
            <div className="relative mt-8">
                <RecentlyChecked limit={4} />
                <div className="mt-1">
                    <TopCategoryList />
                </div>
            </div>
        </div>
    );
};

export default ElenaConfidenceLookPage; 