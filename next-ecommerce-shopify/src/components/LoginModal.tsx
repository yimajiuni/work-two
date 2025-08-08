"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLoginModal } from "@/context/loginContext";
import { useHamburger } from "@/context/hamburgerContext";

const LoginModal = () => {
    const { isLoginModalOpen, closeLoginModal } = useLoginModal();
    const { closeHamburger } = useHamburger();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isLoginModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Reset loading state when modal closes
            setIsLoading(false);
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isLoginModalOpen]);

    const handleLogin = () => {
        setIsLoading(true);
        closeLoginModal();
        closeHamburger();
        router.push('/login');
        // Reset loading state after navigation
        setTimeout(() => setIsLoading(false), 100);
    };

    const handleSignup = () => {
        setIsLoading(true);
        closeLoginModal();
        closeHamburger();
        router.push('/login?mode=signup');
        // Reset loading state after navigation
        setTimeout(() => setIsLoading(false), 100);
    };

    return (
        <>
            {/* Backdrop */}
            {isLoginModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={closeLoginModal}
                />
            )}

            {/* Drawer */}
            <div className={`font-inter text-thin text-black fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 transform transition-transform duration-300 ease-in-out ${isLoginModalOpen ? 'translate-x-0' : 'translate-x-full '
                }`}>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-sm text-gray-900 uppercase">Sign In Required</h2>
                    <button
                        onClick={closeLoginModal}
                        className="text-gray-600 p-2"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="square" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="flex flex-col p-6 min-h-[calc(100vh-320px)] max-h-[calc(100vh-300px)]">
                    <div className="flex-1 py-0 sm:py-12">
                        <div className="p-6 text-gray-900 text-m font-times-new-roman-italic text-center">
                            <div className="w-6 h-6 mx-auto mb-4 flex items-center justify-center group cursor-pointer" onClick={handleLogin}>
                                <svg className="w-6 h-6 text-gray-900 group-hover:fill-black transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <div className="mb-8">
                                <div className="text-sm mb-2">
                                    Create an account
                                </div>
                                <div className="text-sm mb-2">
                                    or sign in to save your wishlist,
                                </div>
                                <div className="text-sm mb-2">
                                    your personal information
                                </div>
                                <div className="text-sm mb-2">
                                    and purchase history.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* buttons */}
                    <div className="p-6 border-t border-gray-200 space-y-4">
                        {/*和柄ボタン外枠*/}
                        <button
                            onClick={handleLogin}
                            disabled={isLoading}
                            className="bg-black text-white hover:bg-white hover:text-white hover:border-black hover:border disabled:opacity-50 disabled:cursor-default overflow-hidden group relative w-full py-3 px-4 text-xs"
                        >
                            {/*和柄ボタン背景*/}
                            <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-difference bg-white text-black hover:bg-white hover:text-white" style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>
                            {/*和柄ボタンテキスト*/}
                            <div className="relative z-10 uppercase text-shadow-black-sharp">
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Loading...
                                    </div>
                                ) : (
                                    'Sign In'
                                )}
                            </div>
                        </button>

                        <button
                            onClick={handleSignup}
                            disabled={isLoading}
                            className="w-full border border-black text-black bg-white py-3 px-4 text-xs relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white hover:bg-white hover:text-black" style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>
                            <div className="relative z-10 uppercase text-shadow-white-opaque">Create Account</div>
                        </button>

                        <button
                            onClick={closeLoginModal}
                            className="w-full bg-white text-black text-xs py-2 px-4 flex items-center justify-center"
                        >
                            <span className="w-fit hover:border-b hover:border-black transition-colors pb-1">Maybe Later</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginModal; 