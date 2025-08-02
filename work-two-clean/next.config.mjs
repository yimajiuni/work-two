/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
        SHOPIFY_STOREFRONT_ACCESS_TOKEN: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        SHOPIFY_ADMIN_ACCESS_TOKEN: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'static.wixstatic.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
            },
            {
                protocol: 'https',
                hostname: '*.myshopify.com',
            },
        ],
    },
};

export default nextConfig;
