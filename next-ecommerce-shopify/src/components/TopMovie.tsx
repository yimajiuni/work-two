"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const TopMovie = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const handleVideoLoad = () => {
        setVideoLoaded(true);
    };



    // Auto-play video on mobile when it&apos;s loaded (if possible)
    useEffect(() => {
        if (videoRef.current && videoLoaded) {
            // Try to play the video (will be muted due to browser restrictions)
            videoRef.current.play().catch(() => {
                // If autoplay fails, that's okay - poster image will show
                console.log('Video autoplay not supported');
            });
        }
    }, [videoLoaded]);

    return (
        <Link href="/collections/swimsuits" className="block">
            <div
                className="h-[calc(100vh-80px)] overflow-hidden relative cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Video Background */}
                <video
                    ref={videoRef}
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: 'center 40%' }}
                    onLoadedData={handleVideoLoad}
                >
                    <source src="/movie.mp4" type="video/mp4" />
                </video>

                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Content Container - Left Bottom */}
                <div className="relative z-10 h-full flex flex-col justify-end items-start px-4 sm:px-6 lg:px-8 sm:pb-12 lg:pb-16">
                    <div className="max-w-2xl transition-colors duration-300 transform hover:scale-105">
                        <div className="">
                            <h2 className="text-left text-white px-6 py-3 sm:px-8 lg:px-10 font-medium lg:text-lg font-century-gothic-thin">
                                TAKE OFF & DRY
                            </h2>
                        </div>
                        <h1 className="text-center text-5xl xl:text-6xl 2xl:text-7xl text-white font-normal leading-tight font-finches">
                            Poolside<br></br> Delicacies
                        </h1>
                        <div className="">
                            <h2 className="text-center text-white px-6 py-3 sm:px-8 lg:px-10 font-medium lg:text-lg font-century-gothic-thin">
                                SHOP NOW
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TopMovie;