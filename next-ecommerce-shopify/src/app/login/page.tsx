"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
    registerCustomer,
    loginCustomer,
    recoverPassword,
    initiateGoogleAuth
} from "@/lib/shopifyAuth";
import { useShopifyAuth } from "@/context/shopifyAuthContext";

enum MODE {
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
    RESET_PASSWORD = "RESET_PASSWORD",
}

const LoginPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { isAuthenticated, login } = useShopifyAuth();

    // Check if already logged in
    useEffect(() => {
        if (isAuthenticated) {
            router.push("/");
        }
    }, [isAuthenticated, router]);

    const [mode, setMode] = useState(MODE.LOGIN);

    // Handle URL parameters for mode
    useEffect(() => {
        const urlMode = searchParams.get('mode');
        if (urlMode === 'signup' || urlMode === 'register') {
            setMode(MODE.REGISTER);
        } else if (urlMode === 'reset') {
            setMode(MODE.RESET_PASSWORD);
        } else {
            setMode(MODE.LOGIN);
        }
    }, [searchParams]);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const formTitle =
        mode === MODE.LOGIN
            ? "Sign In"
            : mode === MODE.REGISTER
                ? "Create Account"
                : "Reset Your Password";

    const buttonTitle =
        mode === MODE.LOGIN
            ? "Sign In"
            : mode === MODE.REGISTER
                ? "Create Account"
                : "Send Reset Email";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        setMessage("");

        console.log('🔐 Login page - Starting authentication process:', {
            mode,
            email,
            firstName,
            lastName,
            hasPassword: !!password
        });

        try {
            let result;

            switch (mode) {
                case MODE.LOGIN:
                    console.log('🔐 Attempting login...');
                    result = await loginCustomer(email, password);
                    break;
                case MODE.REGISTER:
                    console.log('🔐 Attempting registration...');
                    result = await registerCustomer(email, password, firstName, lastName);
                    break;
                case MODE.RESET_PASSWORD:
                    console.log('🔐 Attempting password reset...');
                    result = await recoverPassword(email);
                    break;
                default:
                    return;
            }

            console.log('🔐 Authentication result:', result);

            if (result.success) {
                if (mode === MODE.LOGIN || mode === MODE.REGISTER) {
                    // Store authentication data using context
                    const authResult = result as any; // Cast to any to handle dynamic properties
                    if (authResult.customerAccessToken) {
                        console.log('🔐 Storing authentication data...');
                        if (authResult.customer) {
                            login(authResult.customerAccessToken.accessToken, authResult.customer.id);
                        } else {
                            // If no customer data in response, just store the token
                            login(authResult.customerAccessToken.accessToken);
                        }
                    }

                    setMessage("Redirecting to profile...");
                    setTimeout(() => router.push("/profile"), 1000);
                } else {
                    setMessage("Password reset email sent. Please check your inbox.");
                }
            } else {
                console.error('🔐 Authentication failed:', result.error);

                // Handle different error cases
                if ('requiresVerification' in result && result.requiresVerification) {
                    setMessage("✅ Account created! Please check your email and click the verification link. You'll be redirected to Shopify to complete verification. After verification, return here to log in.");
                } else if ('accountExists' in result && result.accountExists) {
                    setMessage("An account with this email already exists. Please try logging in instead.");
                    setMode(MODE.LOGIN); // Switch to login mode
                } else if (result.error && result.error.includes('different password')) {
                    setError(result.error);
                    setMessage("💡 Tip: If you completed verification on Shopify, you may have set a different password. Try that password, or use 'Forgot Password' to reset it.");
                } else {
                    setError(result.error || "Something went wrong");
                }
            }
        } catch (err) {
            console.error('🔐 Authentication error:', err);
            setError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleAuth = () => {
        setIsLoading(true);
        initiateGoogleAuth();
    };

    return (
        <div className="font-inter text-thin h-[calc(100vh)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
            <div className="w-full max-w-sm">
                <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-times-new-roman-italic text-center">{formTitle}</h1>

                    {mode === MODE.REGISTER && (
                        <>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs text-gray-700 uppercase">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="ring-1 ring-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-xs placeholder:font-inter text-thin"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs text-gray-700 uppercase">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="ring-1 ring-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-xs placeholder:font-inter text-thin"
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        </>
                    )}

                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-inter text-thin text-gray-700 uppercase">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Yours@email.com"
                            className="ring-1 ring-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-xs placeholder:font-inter text-thin"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {(mode === MODE.LOGIN || mode === MODE.REGISTER) && (
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-inter text-thin text-gray-700 uppercase">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="ring-1 ring-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-xs placeholder:font-inter text-thin"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    {mode === MODE.LOGIN && (
                        <div
                            className="text-xs underline cursor-pointer w-fit"
                            onClick={() => setMode(MODE.RESET_PASSWORD)}
                        >
                            Forgot Password?
                        </div>
                    )}

                    <button
                        type="submit"
                        className="bg-black border border-black font-inter text-thin text-xs uppercase py-3 text-white disabled:cursor-default disabled:opacity-50 hover:bg-white hover:text-white hover:border-black hover:border overflow-hidden group relative"
                        disabled={isLoading}
                    >
                        <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-difference bg-white text-black hover:bg-white hover:text-white" style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>

                        <div className="relative z-10 uppercase text-shadow-black-sharp">
                            {isLoading ? "Loading..." : buttonTitle}
                        </div>

                    </button>

                    {/* Google OAuth Button */}
                    {(mode === MODE.LOGIN || mode === MODE.REGISTER) && (
                        <button
                            type="button"
                            onClick={handleGoogleAuth}
                            disabled={isLoading}
                            className="uppercase border border-gray-700 font-inter text-thin text-xs text-gray-700 p-2 disabled:cursor-default disabled:opacity-50 flex items-center justify-center gap-2 transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Continue with Google
                        </button>
                    )}

                    {error && <div className="text-red-600 text-xs">{error}</div>}
                    {message && <div className="text-black text-xs">{message}</div>}

                    {/* Mode switching links */}
                    {mode === MODE.LOGIN && (
                        <div
                            className="text-xs underline cursor-pointer w-fit"
                            onClick={() => setMode(MODE.REGISTER)}
                        >
                            Don't have an account?
                        </div>
                    )}
                    {mode === MODE.REGISTER && (
                        <div
                            className="text-xs underline cursor-pointer w-fit"
                            onClick={() => setMode(MODE.LOGIN)}
                        >
                            Have an account?
                        </div>
                    )}
                    {mode === MODE.RESET_PASSWORD && (
                        <div
                            className="text-xs underline cursor-pointer w-fit"
                            onClick={() => setMode(MODE.LOGIN)}
                        >
                            Back to Sign In
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default LoginPage;