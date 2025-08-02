"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [category, setCategory] = useState("ALL");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !agreed) {
            setMessage("Please fill in your email and agree to terms");
            setIsSuccess(false);
            return;
        }

        setIsSubmitting(true);
        setMessage("");

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, category }),
            });

            const result = await response.json();

            if (result.success) {
                setMessage("Thank you for subscribing to our newsletter!");
                setIsSuccess(true);
                setEmail("");
                setAgreed(false);
                setCategory("ALL");
            } else {
                setMessage(result.error || "Failed to subscribe. Please try again.");
                setIsSuccess(false);
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            setMessage("Something went wrong. Please try again later.");
            setIsSuccess(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="py-16 px-4">
            <div className="max-w-lg mx-auto">
                {/* Logo */}
                <div className="flex justify-center mb-4">
                    <Image
                        src="/logo.svg"
                        alt="Yima Logo"
                        width={50}
                        height={20}
                        className="object-contain"
                    />
                </div>

                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="font-bodoni text-xl text-black leading-tight">
                        Subscribe our Newsletter<br />
                        for Our exclusive news,<br />
                        limited gift and seasonal sale<br />
                        of Yima!
                    </h2>
                </div>

                {/* Message Display */}
                {message && (
                    <div className={`text-center mb-6 p-3 rounded ${isSuccess
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                        }`}>
                        {message}
                    </div>
                )}

                {/* Email Form */}
                <form onSubmit={handleSubmit} className="mb-8">
                    <div className="flex items-center justify-center mb-6">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="uppercase flex-1 max-w-sm border-b border-black px-2 py-3 bg-transparent outline-none font-inter text-thin text-xs placeholder:uppercase"
                            required
                            disabled={isSubmitting}
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-6 py-3 font-inter text-thin text-xs transition-colors ${isSubmitting
                                ? 'bg-gray-400 cursor-default'
                                : 'bg-black text-white hover:bg-white hover:text-white hover:border-black hover:border overflow-hidden group relative'
                                }`}
                        >
                            <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-difference bg-white text-black hover:bg-white hover:text-white" style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>
                            <div className="relative z-10 uppercase text-shadow-black-sharp">
                                {isSubmitting ? 'SIGNING UP...' : 'SIGN UP'}
                            </div>
                        </button>
                    </div>
                    <div className="flex flex-wrap justify-between w-full">
                        {/* Checkbox */}
                        <div className="ml-[24px] flex items-center justify-start mb-8">
                            <label className="flex gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                    className="w-3 h-3 accent-black"
                                    required
                                    disabled={isSubmitting}
                                />
                                <span className="font-inter text-thin text-xs text-gray-900">
                                    I agree to the &nbsp;
                                    <Link href="/terms-and-conditions" className="underline">terms and conditions</Link>
                                </span>
                            </label>
                        </div>
                        {/*
                        <p className="font-ming text-xs text-gray-900 mr-5 bg-black h-5 w-10 text-white p-1 flex items-center justify-center">
                            選ぶ<span className="text-xs inline-block transform rotate-45 text-white">▩</span>
                        </p>*/}

                    </div>

                    {/* Radio Buttons */}
                    <div className="flex flex-wrap justify-center gap-[23px]">
                        {[
                            { value: "ALL", label: "ALL" },
                            { value: "OCCASIONS WEAR", label: "OCCASIONS WEAR" },
                            { value: "READY TO WEAR", label: "READY TO WEAR" },
                            { value: "SWIMSUITS & IMTIMATES", label: "SWIMSUITS & IMTIMATES" }
                        ].map((option) => (
                            <label key={option.value} className="flex items-center gap-1 cursor-pointer">
                                <input
                                    type="radio"
                                    name="category"
                                    value={option.value}
                                    checked={category === option.value}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="sr-only"
                                    disabled={isSubmitting}
                                />
                                <div className="w-3 h-3 rounded-sm border border-black flex items-center justify-center">
                                    {category === option.value && (
                                        <span className="text-xs transform">▩</span>
                                    )}
                                </div>
                                <span className="font-inter text-thin text-xs text-black">
                                    {option.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newsletter; 