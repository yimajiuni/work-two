'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SpecialBanner = () => {
    const [isRotated, setIsRotated] = useState(false);

    const handleClick = () => {
        setIsRotated(true);
        // Navigate after 1 second delay
        setTimeout(() => {
            window.location.href = '/edition/elena-confidence-look';
        }, 1000);
    };

    return (
        <div className="relative w-full h-96 overflow-hidden md:h-[500px] group">
            {/* Background Image */}
            <Image
                src="/special-img.png"
                alt="Special Yima Look"
                fill
                className="object-cover scale-105"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center mix-blend-difference">
                <div className="ml-8 md:ml-16 text-white">
                    {/* Line 1: Confidence */}
                    <div className="font-finches text-4xl md:text-6xl lg:text-6xl leading-tight mb-1">
                        Confidence
                    </div>

                    {/* Line 2: Look vol.12 */}
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="font-finches text-4xl md:text-6xl lg:text-6xl leading-tight">
                            Look
                        </span>
                        <span className="font-times-new-roman text-2xl md:text-4xl lg:text-5xl leading-tight">
                            vol.12
                        </span>
                    </div>

                    {/* Line 3: Special Yima look wore and inspired by Elena */}
                    <div className="w-[200px] text-center font-century-gothic-thin uppercase text-lg md:text-xl lg:text-2xl leading-relaxed max-w-md relative">
                        <span className="relative z-10 mix-blend-difference">
                            Special Yima look worn and inspired by Elena
                        </span>
                    </div>
                </div>

                {/* White Square - positioned relative to the text */}
                <div className="absolute bottom-5 md:bottom-12 lg:bottom-10" style={{
                    left: 'calc(2rem + 200px)'
                }}>
                    <Link href="/edition/elena-confidence-look" onClick={handleClick}>
                        <div className={`w-20 h-20 bg-white mix-blend-difference flex items-center justify-center transition-transform hover:rotate-45 duration-300 ${isRotated ? 'rotate-45' : 'rotate-0'}`}>
                            <span className="font-finches text-black text-m text-center leading-tight">
                                Click here<br />to check
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SpecialBanner; 