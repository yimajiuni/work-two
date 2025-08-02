'use client';

import Image from 'next/image';
import Link from 'next/link';

const SeasonalSection = () => {
    return (
        <div className="w-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content Side - Left */}
                <div className="space-y-6 mx-16 sm:mx-16 lg:mx-32">

                    <h2 className="lg:mt-0 mt-24 font-finches text-4xl md:text-5xl lg:text-4xl leading-tight text-black group-hover:text-gray-700 transition-colors duration-300">
                        Yima's Summer Maneuver
                    </h2>

                    <div className="mt-6 font-inter text-thin font-thin text-base md:text-md leading-relaxed text-black space-y-4">
                        <p>
                            We present the Chiaki Aero Bikini Sigma and seamless retro-style
                            bikini pattern designed in Japan, combining functionality and design.

                            fundamental mesh is made entirely of beta elastic silk, known for its exceptional
                            lightness and durability, and weighs just 10g for optimal comfort and resilience.

                            Designed for a fully customizable fit, the wires detect your own body heat and
                            features custom-recycled tencel seam,hypoallergenic bra cup, and hock tips.</p>
                    </div>
                    <Link href="/collections/swimsuits" className="inline-block text-lg font-times-new-roman-italic w-fit border-b border-black text-black hover:bg-opacity-90 hover:shadow-lg transition-colors">
                        Go check the collection
                    </Link>
                </div>

                {/* Visual Side - Right */}
                <div className="relative">
                    <div className="aspect-[4/5] relative overflow-hidden">
                        <Image
                            src="/seasonal-img.png"
                            alt="Yima's SummerManeuver Collection"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeasonalSection; 