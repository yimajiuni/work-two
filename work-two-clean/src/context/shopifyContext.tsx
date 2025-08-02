"use client";
import { createContext, useContext } from "react";

// Shopify Storefront API client
class ShopifyClient {
    private domain: string;
    private storefrontAccessToken: string;

    constructor() {
        this.domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
        this.storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
    }

    async query(query: string, variables: any = {}) {
        const response = await fetch(`https://${this.domain}/api/2023-10/graphql.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': this.storefrontAccessToken,
            },
            body: JSON.stringify({ query, variables }),
        });

        if (!response.ok) {
            throw new Error(`Shopify API error: ${response.statusText}`);
        }

        return response.json();
    }

    // Cart operations
    async createCart() {
        const query = `
            mutation createCart {
                cartCreate {
                    cart {
                        id
                        checkoutUrl
                        lines(first: 10) {
                            edges {
                                node {
                                    id
                                    quantity
                                    merchandise {
                                        ... on ProductVariant {
                                            id
                                            title
                                            priceV2 {
                                                amount
                                                currencyCode
                                            }
                                            product {
                                                title
                                                images(first: 1) {
                                                    edges {
                                                        node {
                                                            url
                                                            altText
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        cost {
                            subtotalAmount {
                                amount
                                currencyCode
                            }
                            totalAmount {
                                amount
                                currencyCode
                            }
                        }
                    }
                }
            }
        `;

        const response = await this.query(query);
        return response.data.cartCreate.cart;
    }

    async getCart(cartId: string) {
        const query = `
            query getCart($cartId: ID!) {
                cart(id: $cartId) {
                    id
                    checkoutUrl
                    lines(first: 10) {
                        edges {
                            node {
                                id
                                quantity
                                merchandise {
                                    ... on ProductVariant {
                                        id
                                        title
                                        priceV2 {
                                            amount
                                            currencyCode
                                        }
                                        product {
                                            title
                                            images(first: 1) {
                                                edges {
                                                    node {
                                                        url
                                                        altText
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    cost {
                        subtotalAmount {
                            amount
                            currencyCode
                        }
                        totalAmount {
                            amount
                            currencyCode
                        }
                    }
                }
            }
        `;

        const response = await this.query(query, { cartId });
        return response.data.cart;
    }

    async addToCart(cartId: string, variantId: string, quantity: number = 1) {
        const query = `
            mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
                cartLinesAdd(cartId: $cartId, lines: $lines) {
                    cart {
                        id
                        checkoutUrl
                        lines(first: 10) {
                            edges {
                                node {
                                    id
                                    quantity
                                    merchandise {
                                        ... on ProductVariant {
                                            id
                                            title
                                            priceV2 {
                                                amount
                                                currencyCode
                                            }
                                            product {
                                                title
                                                images(first: 1) {
                                                    edges {
                                                        node {
                                                            url
                                                            altText
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        cost {
                            subtotalAmount {
                                amount
                                currencyCode
                            }
                            totalAmount {
                                amount
                                currencyCode
                            }
                        }
                    }
                }
            }
        `;

        const response = await this.query(query, {
            cartId,
            lines: [{ merchandiseId: variantId, quantity }]
        });
        return response.data.cartLinesAdd.cart;
    }

    async removeFromCart(cartId: string, lineId: string) {
        const query = `
            mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
                cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
                    cart {
                        id
                        checkoutUrl
                        lines(first: 10) {
                            edges {
                                node {
                                    id
                                    quantity
                                    merchandise {
                                        ... on ProductVariant {
                                            id
                                            title
                                            priceV2 {
                                                amount
                                                currencyCode
                                            }
                                            product {
                                                title
                                                images(first: 1) {
                                                    edges {
                                                        node {
                                                            url
                                                            altText
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        cost {
                            subtotalAmount {
                                amount
                                currencyCode
                            }
                            totalAmount {
                                amount
                                currencyCode
                            }
                        }
                    }
                }
            }
        `;

        const response = await this.query(query, {
            cartId,
            lineIds: [lineId]
        });
        return response.data.cartLinesRemove.cart;
    }

    // Product operations
    async getProducts(first: number = 20) {
        const query = `
            query getProducts($first: Int!) {
                products(first: $first) {
                    edges {
                        node {
                            id
                            title
                            handle
                            description
                            images(first: 1) {
                                edges {
                                    node {
                                        url
                                        altText
                                    }
                                }
                            }
                            variants(first: 10) {
                                edges {
                                    node {
                                        id
                                        title
                                        priceV2 {
                                            amount
                                            currencyCode
                                        }
                                        availableForSale
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `;

        const response = await this.query(query, { first });
        return response.data.products.edges.map((edge: any) => edge.node);
    }

    async getProduct(handle: string) {
        const query = `
            query getProduct($handle: String!) {
                product(handle: $handle) {
                    id
                    title
                    handle
                    description
                    images(first: 10) {
                        edges {
                            node {
                                url
                                altText
                            }
                        }
                    }
                    variants(first: 10) {
                        edges {
                            node {
                                id
                                title
                                priceV2 {
                                    amount
                                    currencyCode
                                }
                                availableForSale
                            }
                        }
                    }
                }
            }
        `;

        const response = await this.query(query, { handle });
        return response.data.product;
    }
}

const shopifyClient = new ShopifyClient();
export type ShopifyClientType = typeof shopifyClient;

export const ShopifyContext = createContext<ShopifyClientType>(shopifyClient);

export const ShopifyProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ShopifyContext.Provider value={shopifyClient}>
            {children}
        </ShopifyContext.Provider>
    );
};

export const useShopifyClient = () => {
    const context = useContext(ShopifyContext);
    if (!context) {
        throw new Error('useShopifyClient must be used within a ShopifyProvider');
    }
    return context;
}; 