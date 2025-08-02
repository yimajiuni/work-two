"use client";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie";
import { createContext } from "react";
import { currentCart } from "@wix/ecom";

const refreshtoken = JSON.parse(Cookies.get("refreshToken") || "{}")

const WixContext = createClient({
    modules: {
        products,
        collections,
        currentCart,
    },
    auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
        tokens: {
            refreshToken: refreshtoken,
            accessToken: { value: "", expiresAt: 0 },
        },
    }),
});
export type wixClient = typeof WixContext;
export const wixClientContext = createContext<wixClient>(WixContext);
export const WixClientContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return <wixClientContext.Provider value={WixContext}>{children}</wixClientContext.Provider>
};