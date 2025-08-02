import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { bodoni, finches, centuryGothic, centuryGothicThin, timesNewRoman, ming } from "@/fonts/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatAssistant from "@/components/AIChatAssistant";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import { ShopifyProvider } from "@/context/shopifyContext";
import { CartProvider } from "@/context/cartContext";
import { LoginProvider } from "@/context/loginContext";
import { ShopifyAuthProvider } from "@/context/shopifyAuthContext";
import { WishlistProvider } from "@/context/wishlistContext";
import CartModal from "@/components/CartModal";
import LoginModal from "@/components/LoginModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Yimajiuni Original Next Shopify EC website",
  description: "A complete e-commerce application with Next.js and Shopify",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bodoni.variable} ${finches.variable} ${centuryGothic.variable} ${centuryGothicThin.variable} ${ming.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} pt-[80px]`}>
        <ShopifyProvider>
          <ShopifyAuthProvider>
            <WishlistProvider>
              <CartProvider>
                <LoginProvider>
                  <Navbar />
                  {children}
                  <Footer />
                  <AIChatAssistant />
                  <CartModal />
                  <LoginModal />
                </LoginProvider>
              </CartProvider>
            </WishlistProvider>
          </ShopifyAuthProvider>
        </ShopifyProvider>
      </body>
    </html>
  );
}
