"use client";
import Image from "next/image";
import { useWixClient } from "@/hooks/useWixClient";
import { useEffect } from "react";
import { useCartStore } from "@/hooks/useCartStore";
import { media as wixMedia } from "@wix/sdk";

const CartModal = () => {
    // const cartItems = true;
    const wixClient = useWixClient();
    const { cart, isLoading, removeItem } = useCartStore();


    return (
        <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgba(0,0,0,0.2)] bg-white top-12 right-0 text-sm flex flex-col gap-6 z-20">
            {!cart.lineItems ? (
                <div className="">Cart is Empty</div>
            ) : (
                <>
                    <h2 className="text-xl">Shopping Cart</h2>
                    {/*LIST*/}
                    <div className="flex flex-col gap-8">
                        {/*item*/}
                        {cart.lineItems.map((item) => (
                            <div className="flex gap-4" key={item._id}>
                                <Image
                                    src={wixMedia.getScaledToFillImageUrl(item.image || "", 72, 96, {})}
                                    alt="item" width={72} height={96}
                                    className="object-cover rounded-md" />
                                <div className="flex flex-col justify-between w-full">
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="p-1 bg-gray-50 rounded-sm">{item.productName?.original}</h3>
                                        <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                                            {item.quantity && item.quantity > 1 && (
                                                <div className="text-xs text-green-500">
                                                    {item.quantity} x{" "}
                                                </div>
                                            )}
                                            ${item.price?.amount}
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {item.availability?.status}
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Qty. {item.quantity}</span>
                                        <span className="text-blue-500"
                                            style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                                            onClick={() => removeItem(wixClient, item._id || "")}>Remove</span>
                                    </div>
                                </div>
                            </div>))}

                    </div>
                    {/*BOTTOM*/}
                    <div className="">
                        <div className="flex items-center justify-between font-semibold">
                            <span className="">Subtotal</span>
                            <span className="">${cart.lineItems?.reduce((total, item) => total + (Number(item.price?.amount) || 0), 0) || 0}</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 mb-4">
                            Shipping and taxes calculated at checkout.
                        </p>
                        <div className="flex justify-between text-sm">
                            <button className="ring-gray-300 ring-1 px-4 py-3 rounded-md">View Cart</button>
                            <button className="bg-black text-white px-4 py-3 rounded-md disabled:cursor-not-allowed disabled:opacity-75" disabled={isLoading}>Checkout</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartModal;