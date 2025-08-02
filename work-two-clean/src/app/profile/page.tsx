'use client';

import { useShopifyAuth } from '@/context/shopifyAuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const ProfilePage = () => {
    const { customer, isAuthenticated, isLoading, logout } = useShopifyAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'profile' | 'history'>('profile');

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, isLoading, router]);

    const handleSignOut = () => {
        logout();
        router.push('/');
    };

    if (isLoading) {
        return (
            <div className="font-inter text-thin h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto mb-4"></div>
                    <p>Loading profile...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null; // Will redirect to login
    }

    const username = customer?.firstName || customer?.email?.split('@')[0] || 'User';

    return (
        <div className="font-inter text-thin min-h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-4 md:py-8">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="mb-4 md:mb-6">
                    <h1 className="font-bodoni text-2xl md:text-3xl lg:text-4xl text-center mb-2 md:mb-4">Profile Page</h1>
                    <p className="font-inter text-thin text-xs text-center text-gray-600 w-full md:w-2/3 lg:w-full mx-auto px-4">
                        Welcome {username}. While logging in, you can check and save your personal information and purchase history.
                    </p>
                </div>

                {/* Main Container */}
                <div className="bg-gray-200 p-3 md:p-4 lg:p-6">
                    <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
                        {/* Sticky Sidebar */}
                        <aside className="w-full lg:w-64 lg:flex-shrink-0 lg:sticky lg:top-8 lg:h-fit order-1 lg:order-1">
                            <div className="bg-white p-4 md:p-6 shadow-md">
                                {/* Tabs */}
                                <div className="flex lg:flex-col gap-10 lg:gap-8 lg:mb-10 mb-4 justify-start">
                                    <button
                                        onClick={() => setActiveTab('profile')}
                                        className={`text-left pt-2 lg:pt-3 transition-colors ${activeTab === 'profile'
                                            ? 'text-black border-b border-black lg:w-fit'
                                            : 'text-gray-400'
                                            }`}
                                    >
                                        <span className="font-inter text-thin text-xs">▩ My Profile</span>
                                    </button>
                                    <button
                                        onClick={() => router.push('/orders')}
                                        className={`text-left pt-2 lg:pt-3 transition-colors ${activeTab === 'history'
                                            ? 'text-black border-b border-black lg:w-fit'
                                            : 'text-gray-400'
                                            }`}
                                    >
                                        <span className="font-inter text-thin text-xs">▩ Order History</span>
                                    </button>
                                </div>

                                {/* Sidebar Actions */}
                                <div className="flex lg:flex-col gap-4 md:gap-6 w-2/3 md:w-full">
                                    <button
                                        onClick={handleSignOut}
                                        className="flex-1 lg:flex-none border border-black text-black  font-inter text-thin my-2 md:my-0 text-xs px-0 md:px-4 py-0 md:py-2 transition-colors"
                                    >
                                        Sign Out
                                    </button>
                                    <Link
                                        href="/contact"
                                        className="mt-3 md:mt-0 flex-1 lg:flex-none text-black font-inter text-thin text-xs px-1 text-center underline lg:w-fit lg:mx-auto block"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className="flex-1 bg-white p-4 md:p-6 shadow-md order-1 lg:order-2">
                            {activeTab === 'profile' ? (
                                <div className="space-y-6 md:space-y-8">
                                    {/* Personal Information Row */}
                                    <div>
                                        <h2 className="font-bodoni text-xl md:text-2xl text-start mb-4 md:mb-6">Personal Information</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-gray-900">
                                            <div>
                                                <label className="text-xs font-medium uppercase block mb-1 md:mb-2">Email</label>
                                                <p className="text-xs font-inter text-thin break-all">{customer?.email}</p>
                                            </div>
                                            <div>
                                                <label className="text-xs font-medium uppercase block mb-1 md:mb-2">Phone</label>
                                                <p className="text-xs font-inter text-thin">{customer?.phone || 'Not provided'}</p>
                                            </div>
                                            <div>
                                                <label className="text-xs font-medium uppercase block mb-1 md:mb-2">First Name</label>
                                                <p className="text-xs font-inter text-thin">{customer?.firstName || 'Not provided'}</p>
                                            </div>
                                            <div>
                                                <label className="text-xs font-medium uppercase block mb-1 md:mb-2">Last Name</label>
                                                <p className="text-xs font-inter text-thin">{customer?.lastName || 'Not provided'}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Preferred Addresses Row */}
                                    <div>
                                        <h2 className="font-bodoni text-xl md:text-2xl text-start mb-4 md:mb-6">Preferred Addresses</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-gray-900">
                                            <div>
                                                <label className="text-xs font-medium uppercase block mb-1 md:mb-2">Billing Address</label>
                                                <p className="text-xs font-inter text-thin">No billing address saved</p>
                                            </div>
                                            <div>
                                                <label className="text-xs font-medium uppercase block mb-1 md:mb-2">Shipping Address</label>
                                                <p className="text-xs font-inter text-thin">No shipping address saved</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 md:mt-6">
                                            <button className="uppercase bg-black text-white font-inter text-thin text-xs px-3 md:px-4 py-2 hover:bg-white hover:border hover:border-black hover:text-white transition-colors overflow-hidden group relative">
                                                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white hover:bg-white hover:text-black mix-blend-difference" style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>
                                                <div className="relative z-10 uppercase text-shadow-black-sharp">
                                                    Add New Shopping Address
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h2 className="font-bodoni text-xl md:text-2xl text-start mb-4 md:mb-6">Order History</h2>
                                    <div className="text-center py-8 md:py-12 text-gray-800">
                                        <p className="font-times-new-roman-italic text-sm mb-2">Loading your order history...</p>
                                        <p className="font-times-new-roman-italic text-sm mb-2">Please wait while we fetch</p>
                                        <p className="font-times-new-roman-italic text-sm mb-8">your complete purchase history.</p>
                                        <div className="animate-pulse">
                                            <div className="w-4/5 md:w-1/3 h-10 bg-gray-200 mx-auto rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage; 