import { shopifyClient } from './Shopify';

// Wishlist types
export interface WishlistItem {
    id: string;
    title: string;
    handle: string;
    price: string;
    image: string;
    variantId: string;
}

export interface WishlistData {
    items: WishlistItem[];
    customerId?: string;
}

// Shopify API response types
interface ShopifyCustomerResponse {
    customer?: {
        id: string;
        metafield?: {
            value: string;
        };
    };
}

interface ShopifyCustomerUpdateResponse {
    customerUpdate: {
        customer?: {
            id: string;
        };
        userErrors: Array<{
            field: string;
            message: string;
        }>;
    };
}

interface ShopifyProduct {
    id: string;
    title: string;
    handle: string;
    priceRangeV2: {
        minVariantPrice: {
            amount: string;
            currencyCode: string;
        };
    };
    featuredImage?: {
        url: string;
        altText?: string;
    };
    variants: {
        edges: Array<{
            node: {
                id: string;
                price: {
                    amount: string;
                    currencyCode: string;
                };
            };
        }>;
    };
}

interface ShopifyProductsResponse {
    nodes: (ShopifyProduct | null)[];
}

// Get customer wishlist
export async function getCustomerWishlist(customerId: string): Promise<WishlistData> {
    try {
        const query = `
      query getCustomerWishlist($customerId: ID!) {
        customer(id: $customerId) {
          id
          metafield(namespace: "custom", key: "wishlist") {
            value
          }
        }
      }
    `;

        const response = await shopifyClient.request(query, {
            customerId: `gid://shopify/Customer/${customerId}`
        }) as ShopifyCustomerResponse;

        const wishlistData = response.customer?.metafield?.value;
        if (!wishlistData) {
            return { items: [], customerId };
        }

        const productIds = JSON.parse(wishlistData);

        // Fetch product details for wishlist items
        const products = await getWishlistProducts(productIds);

        return {
            items: products,
            customerId
        };
    } catch (error) {
        console.error('Error fetching wishlist:', error);
        return { items: [], customerId };
    }
}

// Add product to wishlist
export async function addToWishlist(customerId: string, productId: string): Promise<boolean> {
    try {
        // First get current wishlist
        const currentWishlist = await getCustomerWishlist(customerId);
        const currentIds = currentWishlist.items.map(item => item.id);

        // Check if product already exists
        if (currentIds.includes(productId)) {
            return true; // Already in wishlist
        }

        // Add new product ID
        const updatedIds = [...currentIds, productId];

        // Update metafield
        const mutation = `
      mutation updateCustomerWishlist($customerId: ID!, $metafieldInput: MetafieldInput!) {
        customerUpdate(input: {
          id: $customerId,
          metafields: [$metafieldInput]
        }) {
          customer {
            id
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

        const response = await shopifyClient.request(mutation, {
            customerId: `gid://shopify/Customer/${customerId}`,
            metafieldInput: {
                namespace: "custom",
                key: "wishlist",
                type: "json",
                value: JSON.stringify(updatedIds)
            }
        }) as ShopifyCustomerUpdateResponse;

        return !response.customerUpdate.userErrors.length;
    } catch (error) {
        console.error('Error adding to wishlist:', error);
        return false;
    }
}

// Remove product from wishlist
export async function removeFromWishlist(customerId: string, productId: string): Promise<boolean> {
    try {
        // Get current wishlist
        const currentWishlist = await getCustomerWishlist(customerId);
        const updatedIds = currentWishlist.items
            .map(item => item.id)
            .filter(id => id !== productId);

        // Update metafield
        const mutation = `
      mutation updateCustomerWishlist($customerId: ID!, $metafieldInput: MetafieldInput!) {
        customerUpdate(input: {
          id: $customerId,
          metafields: [$metafieldInput]
        }) {
          customer {
            id
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

        const response = await shopifyClient.request(mutation, {
            customerId: `gid://shopify/Customer/${customerId}`,
            metafieldInput: {
                namespace: "custom",
                key: "wishlist",
                type: "json",
                value: JSON.stringify(updatedIds)
            }
        }) as ShopifyCustomerUpdateResponse;

        return !response.customerUpdate.userErrors.length;
    } catch (error) {
        console.error('Error removing from wishlist:', error);
        return false;
    }
}

// Get product details for wishlist items
async function getWishlistProducts(productIds: string[]): Promise<WishlistItem[]> {
    if (!productIds.length) return [];

    try {
        const query = `
      query getWishlistProducts($ids: [ID!]!) {
        nodes(ids: $ids) {
          ... on Product {
            id
            title
            handle
            priceRangeV2 {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            featuredImage {
              url
              altText
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    `;

        const response = await shopifyClient.request(query, {
            ids: productIds.map(id => `gid://shopify/Product/${id}`)
        }) as ShopifyProductsResponse;

        return response.nodes
            .filter((node): node is ShopifyProduct => node !== null)
            .map((product: ShopifyProduct) => ({
                id: product.id.split('/').pop() || '',
                title: product.title,
                handle: product.handle,
                price: product.priceRangeV2.minVariantPrice.amount,
                image: product.featuredImage?.url || '',
                variantId: product.variants.edges[0]?.node.id.split('/').pop() || ''
            }));
    } catch (error) {
        console.error('Error fetching wishlist products:', error);
        return [];
    }
} 