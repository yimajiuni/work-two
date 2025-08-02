'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const NewsletterDialog = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const checkAndShowDialog = () => {
            const lastShown = localStorage.getItem('newsletterDialogLastShown');
            const now = Date.now();
            const oneHour = 1 * 20 * 1000; // 1 hour in milliseconds = 60*60*1000

            // Show dialog if never shown or if more than 1 hour has passed
            if (!lastShown || (now - parseInt(lastShown)) > oneHour) {
                // Add a small delay to ensure page is fully loaded
                setTimeout(() => {
                    setIsVisible(true);
                    localStorage.setItem('newsletterDialogLastShown', now.toString());
                }, 2000);
            }
        };

        checkAndShowDialog();
    }, []);

    const handleUnlockOffer = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitted(true);
        setIsSubmitting(false);

        // Close dialog after 2 seconds
        setTimeout(() => {
            setIsVisible(false);
            setIsSubmitted(false);
            setEmail('');
        }, 2000);
    };

    const handleUnlockLater = () => {
        setIsVisible(false);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Dialog */}
            <div className="relative w-full max-w-2xl bg-white overflow-hidden">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center transition-colors duration-200"
                >
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-row">
                    {/* Left column - Image */}
                    <div className="w-1/2 relative">
                        <Image
                            src="/subscribe-image.png"
                            alt="Newsletter signup"
                            width={250}
                            height={200}
                            className="w-full h-full object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Right column - Content */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                        {!isSubmitted ? (
                            <>
                                <div className="text-center lg:text-left mb-4">
                                    <h2 className="text-xl lg:text-2xl font-times-new-roman-italic text-black mb-2">
                                        UNLOCK 20% OFF
                                    </h2>
                                    <p className="text-left text-sm font-times-new-roman tracking-tight">
                                        Sign-up to our Newsletter to get 20% off your first order.
                                    </p>
                                </div>

                                <form onSubmit={handleUnlockOffer} className="space-y-2">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-times-new-roman-italic mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email address"
                                            className="w-full px-4 py-1 border border-black border-b-[0.5px] placeholder:font-inter placeholder:text-thin placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-200 focus:!ring-black"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row relative">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting || !email.trim()}
                                            onMouseEnter={() => !email.trim() && setShowTooltip(true)}
                                            onMouseLeave={() => setShowTooltip(false)}
                                            className="flex-1 bg-black border border-black text-white font-inter text-thin text-xs py-2 px-4 transition-colors duration-200 disabled:cursor-not-allowed uppercase hover:bg-white hover:text-white hover:border-black hover:border overflow-hidden group relative"
                                        >
                                            <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-difference bg-white text-black hover:bg-white hover:text-white" style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>
                                            <div className="relative z-10 uppercase text-shadow-black-sharp">
                                                {isSubmitting ? 'Unlocking...' : 'Unlock Offer'}
                                            </div>
                                        </button>

                                        {/* Tooltip */}
                                        {showTooltip && !email.trim() && (
                                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 whitespace-nowrap z-20">
                                                Please enter your email
                                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col sm:flex-row">
                                        <button
                                            type="button"
                                            onClick={handleUnlockLater}
                                            className="overflow-hidden group relative flex-1 bg-white border border-black text-black font-inter text-thin text-xs py-2 px-4 hover:bg-black hover:text-black transition-colors duration-200 uppercase"
                                        >
                                            <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white hover:bg-white hover:text-black" style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>
                                            <div className="relative z-10 uppercase text-shadow-white-opaque">
                                                Unlock Later
                                            </div>
                                        </button>

                                    </div>

                                </form>

                                <p className="text-xs font-times-new-roman leading-relaxed mt-6 text-center lg:text-left">
                                    By signing up, you agree to receive emails including promotions and special offers from us.
                                </p>
                            </>
                        ) : (
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white border border-black flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-times-new-roman-italic uppercase text-black mb-2">
                                    Welcome to the Family!
                                </h3>
                                <p className="text-gray-600">
                                    Your 20% off discount code has been sent to your email.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterDialog; 