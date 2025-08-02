"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCustomerOrders, ShopifyOrder } from "@/lib/Shopify";
import { useShopifyAuth } from "@/context/shopifyAuthContext";

const OrdersPage = () => {
    const [orders, setOrders] = useState<ShopifyOrder[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState('history');
    const router = useRouter();
    const { customer, logout } = useShopifyAuth();

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            setIsLoading(true);
            setError(null);

            const customerAccessToken = localStorage.getItem('shopify_customer_token');

            if (!customerAccessToken) {
                router.push('/login');
                return;
            }

            const ordersData = await getCustomerOrders(customerAccessToken);
            setOrders(ordersData);
        } catch (err) {
            console.error("Error fetching orders:", err);
            setError("Failed to load orders. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignOut = () => {
        logout();
        router.push('/');
    };

    const getOrderStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'fulfilled':
                return 'bg-green-100 text-green-800';
            case 'unfulfilled':
                return 'bg-yellow-100 text-yellow-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            case 'partially_fulfilled':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatPrice = (amount: string, currencyCode: string) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currencyCode
        }).format(parseFloat(amount));
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
                        <div className="space-y-4">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow">
                                    <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                                    <div className="space-y-2">
                                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                                        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Orders</h1>
                        <p className="text-gray-600 mb-6">{error}</p>
                        <button
                            onClick={fetchOrders}
                            className="bg-highlight text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="font-inter text-thin min-h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-4 md:py-8">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="mb-4 md:mb-6">
                    <h1 className="font-bodoni text-2xl md:text-3xl lg:text-4xl text-center mb-2 md:mb-4">Profile Page</h1>
                    <p className="font-inter text-thin text-xs text-center text-gray-600 w-full md:w-2/3 lg:w-full mx-auto px-4">
                        Welcome {customer?.firstName}. While logging in, you can check and save your personal information and purchase history.
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
                                        onClick={() => router.push('/profile')}
                                        className="text-left pt-2 lg:pt-3 transition-colors text-gray-400"
                                    >
                                        <span className="font-inter text-thin text-xs">▩ My Profile</span>
                                    </button>
                                    <button
                                        className="text-left pt-2 lg:pt-3 transition-colors text-black border-b border-black lg:w-fit"
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
                            <div>
                                <h2 className="font-bodoni text-xl md:text-2xl text-start mb-4 md:mb-6">Order History</h2>

                                {orders.length === 0 ? (
                                    <div className="text-center py-8 md:py-12 text-gray-800">
                                        <p className="font-times-new-roman-italic text-sm mb-2">No orders found.</p>
                                        <p className="font-times-new-roman-italic text-sm mb-2">This field is for you to organize</p>
                                        <p className="font-times-new-roman-italic text-sm mb-8">your purchase history.</p>
                                        <Link
                                            href="/"
                                            className="uppercase border border-black inline-block bg-black hover:border hover:border-black hover:text-black text-white font-inter text-thin text-xs w-4/5 md:w-1/3 px-4 md:px-6 py-2 md:py-3 transition-colors overflow-hidden group relative"
                                        >
                                            <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white hover:bg-white hover:text-black" style={{ backgroundImage: 'url(/wa-ptn-ec.svg)' }}></div>
                                            <div className="relative z-10 uppercase group-hover:text-shadow-white-opaque">
                                                Start Shopping
                                            </div>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        {orders.map((order) => (
                                            <div key={order.id} className="border border-gray-200 overflow-hidden">
                                                {/* Order Header */}
                                                <div className="p-4 md:p-6 border-b border-gray-200 bg-gray-50">
                                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                                        <div>
                                                            <h3 className="text-lg font-semibold text-gray-900">
                                                                Order #{order.orderNumber}
                                                            </h3>
                                                            <p className="text-sm text-gray-500">
                                                                Placed on {formatDate(order.processedAt)}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center gap-4">
                                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getOrderStatusColor(order.fulfillmentStatus)}`}>
                                                                {order.fulfillmentStatus.replace('_', ' ').toUpperCase()}
                                                            </span>
                                                            <span className="text-lg font-semibold text-gray-900">
                                                                {formatPrice(order.totalPriceV2.amount, order.totalPriceV2.currencyCode)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Order Items */}
                                                <div className="p-4 md:p-6">
                                                    <div className="space-y-4">
                                                        {order.lineItems.edges.map((edge: { node: any }) => {
                                                            const item = edge.node;
                                                            return (
                                                                <div key={item.id} className="flex gap-4">
                                                                    <div className="flex-shrink-0">
                                                                        <Image
                                                                            src={item.variant?.image?.url || "/product.png"}
                                                                            alt={item.title}
                                                                            width={80}
                                                                            height={80}
                                                                            className="object-cover rounded-md"
                                                                        />
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <h4 className="text-sm font-medium text-gray-900 truncate">
                                                                            {item.title}
                                                                        </h4>
                                                                        {item.variant?.title && item.variant.title !== 'Default Title' && (
                                                                            <p className="text-sm text-gray-500">
                                                                                {item.variant.title}
                                                                            </p>
                                                                        )}
                                                                        <p className="text-sm text-gray-500">
                                                                            Qty: {item.quantity}
                                                                        </p>
                                                                        <p className="text-sm font-medium text-gray-900">
                                                                            {formatPrice(item.originalTotal.amount, item.originalTotal.currencyCode)}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>

                                                    {/* Order Details */}
                                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                            {/* Shipping Address */}
                                                            {order.shippingAddress && (
                                                                <div>
                                                                    <h4 className="text-sm font-medium text-gray-900 mb-2">Shipping Address</h4>
                                                                    <div className="text-sm text-gray-600">
                                                                        <p>{order.shippingAddress.firstName} {order.shippingAddress.lastName}</p>
                                                                        <p>{order.shippingAddress.address1}</p>
                                                                        {order.shippingAddress.address2 && (
                                                                            <p>{order.shippingAddress.address2}</p>
                                                                        )}
                                                                        <p>
                                                                            {order.shippingAddress.city}, {order.shippingAddress.province} {order.shippingAddress.zip}
                                                                        </p>
                                                                        <p>{order.shippingAddress.country}</p>
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {/* Order Summary */}
                                                            <div>
                                                                <h4 className="text-sm font-medium text-gray-900 mb-2">Order Summary</h4>
                                                                <div className="space-y-1 text-sm">
                                                                    <div className="flex justify-between">
                                                                        <span className="text-gray-600">Subtotal</span>
                                                                        <span className="text-gray-900">
                                                                            {formatPrice(order.subtotalPriceV2.amount, order.subtotalPriceV2.currencyCode)}
                                                                        </span>
                                                                    </div>
                                                                    {order.totalShippingPriceV2.amount !== '0.00' && (
                                                                        <div className="flex justify-between">
                                                                            <span className="text-gray-600">Shipping</span>
                                                                            <span className="text-gray-900">
                                                                                {formatPrice(order.totalShippingPriceV2.amount, order.totalShippingPriceV2.currencyCode)}
                                                                            </span>
                                                                        </div>
                                                                    )}
                                                                    {order.totalTaxV2.amount !== '0.00' && (
                                                                        <div className="flex justify-between">
                                                                            <span className="text-gray-600">Tax</span>
                                                                            <span className="text-gray-900">
                                                                                {formatPrice(order.totalTaxV2.amount, order.totalTaxV2.currencyCode)}
                                                                            </span>
                                                                        </div>
                                                                    )}
                                                                    <div className="flex justify-between font-medium pt-2 border-t border-gray-200">
                                                                        <span className="text-gray-900">Total</span>
                                                                        <span className="text-gray-900">
                                                                            {formatPrice(order.totalPriceV2.amount, order.totalPriceV2.currencyCode)}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Fulfillment Tracking */}
                                                    {order.fulfillments && order.fulfillments.length > 0 && (
                                                        <div className="mt-6 pt-6 border-t border-gray-200">
                                                            <h4 className="text-sm font-medium text-gray-900 mb-4">Tracking Information</h4>
                                                            <div className="space-y-3">
                                                                {order.fulfillments.map((fulfillment: any, index: number) => (
                                                                    <div key={index} className="bg-gray-50 rounded-md p-4">
                                                                        <div className="flex items-center justify-between mb-2">
                                                                            <span className="text-sm font-medium text-gray-900">
                                                                                Fulfillment #{fulfillment.id}
                                                                            </span>
                                                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getOrderStatusColor(fulfillment.status)}`}>
                                                                                {fulfillment.status.toUpperCase()}
                                                                            </span>
                                                                        </div>
                                                                        {fulfillment.trackingInfo && fulfillment.trackingInfo.length > 0 && (
                                                                            <div className="space-y-2">
                                                                                {fulfillment.trackingInfo.map((tracking: any, trackIndex: number) => (
                                                                                    <div key={trackIndex} className="text-sm">
                                                                                        <p className="text-gray-600">
                                                                                            <span className="font-medium">Carrier:</span> {tracking.company}
                                                                                        </p>
                                                                                        {tracking.number && (
                                                                                            <p className="text-gray-600">
                                                                                                <span className="font-medium">Tracking Number:</span> {tracking.number}
                                                                                            </p>
                                                                                        )}
                                                                                        {tracking.url && (
                                                                                            <a
                                                                                                href={tracking.url}
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"
                                                                                                className="text-black hover:text-gray-600 text-sm underline"
                                                                                            >
                                                                                                Track Package →
                                                                                            </a>
                                                                                        )}
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersPage; 