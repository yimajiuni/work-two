import { GraphQLClient, gql } from 'graphql-request';

// Debug: Log environment variables
console.log('=== Shopify Environment Variables Debug ===');
console.log('SHOPIFY_STORE_DOMAIN:', process.env.SHOPIFY_STORE_DOMAIN);
console.log('SHOPIFY_STOREFRONT_ACCESS_TOKEN:', process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN ? 'SET' : 'NOT SET');
console.log('SHOPIFY_ADMIN_ACCESS_TOKEN:', process.env.SHOPIFY_ADMIN_ACCESS_TOKEN ? 'SET' : 'NOT SET');
console.log('==========================================');

// Environment variables with validation
const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const SHOPIFY_ADMIN_ACCESS_TOKEN = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;

// Only validate in production or when actually using the variables
const validateEnvironmentVariables = () => {
  if (!SHOPIFY_STORE_DOMAIN) {
    throw new Error('SHOPIFY_STORE_DOMAIN environment variable is not set. Please add it to your .env.local file.');
  }

  if (!SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    throw new Error('SHOPIFY_STOREFRONT_ACCESS_TOKEN environment variable is not set. Please add it to your .env.local file.');
  }

  if (!SHOPIFY_ADMIN_ACCESS_TOKEN) {
    throw new Error('SHOPIFY_ADMIN_ACCESS_TOKEN environment variable is not set. Please add it to your .env.local file.');
  }
};

// API endpoints
const STOREFRONT_ENDPOINT = SHOPIFY_STORE_DOMAIN ? `https://${SHOPIFY_STORE_DOMAIN}/api/2023-10/graphql.json` : '';
const ADMIN_ENDPOINT = SHOPIFY_STORE_DOMAIN ? `https://${SHOPIFY_STORE_DOMAIN}/admin/api/2023-10/graphql.json` : '';

// Storefront client (for public data)
export const shopifyClient = new GraphQLClient(STOREFRONT_ENDPOINT, {
  headers: {
    'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN || '',
    'Content-Type': 'application/json',
  },
});

// Admin client (for customer data, orders, etc.)
export const shopifyAdminClient = new GraphQLClient(ADMIN_ENDPOINT, {
  headers: {
    'X-Shopify-Access-Token': SHOPIFY_ADMIN_ACCESS_TOKEN || '',
    'Content-Type': 'application/json',
  },
});

// Type definitions
export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  options?: Array<{
    id: string;
    name: string;
    values: string[];
  }>;
  images: {
    edges: Array<{
      node: {
        url: string;
        altText?: string;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        price: {
          amount: string;
          currencyCode: string;
        };
        compareAtPrice?: {
          amount: string;
          currencyCode: string;
        };
        availableForSale: boolean;
        quantityAvailable: number;
        selectedOptions: Array<{
          name: string;
          value: string;
        }>;
        image?: {
          url: string;
          altText?: string;
        };
      };
    }>;
  };
  tags: string[];
  productType: string;
  vendor: string;
}

export interface ShopifyCollection {
  id: string;
  title: string;
  handle: string;
  description: string;
  image?: {
    url: string;
    altText?: string;
  };
  products: {
    edges: Array<{
      node: ShopifyProduct;
    }>;
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    subtotalAmount: {
      amount: string;
      currencyCode: string;
    };
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
    totalTaxAmount: {
      amount: string;
      currencyCode: string;
    };
  };
  lines: {
    edges: Array<{
      node: {
        id: string;
        quantity: number;
        cost: {
          subtotalAmount: {
            amount: string;
            currencyCode: string;
          };
        };
        merchandise: {
          id: string;
          title: string;
          price: {
            amount: string;
            currencyCode: string;
          };
          product: {
            id: string;
            title: string;
            handle: string;
            images: {
              edges: Array<{
                node: {
                  url: string;
                  altText?: string;
                };
              }>;
            };
          };
        };
      };
    }>;
  };
}

export interface ShopifyCustomer {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  acceptsMarketing: boolean;
  defaultAddress?: {
    id: string;
    firstName?: string;
    lastName?: string;
    address1?: string;
    address2?: string;
    city?: string;
    province?: string;
    country?: string;
    zip?: string;
    phone?: string;
  };
}

export interface ShopifyOrder {
  id: string;
  orderNumber: string;
  processedAt: string;
  fulfillmentStatus: string;
  financialStatus: string;
  totalPriceV2: {
    amount: string;
    currencyCode: string;
  };
  subtotalPriceV2: {
    amount: string;
    currencyCode: string;
  };
  totalShippingPriceV2: {
    amount: string;
    currencyCode: string;
  };
  totalTaxV2: {
    amount: string;
    currencyCode: string;
  };
  lineItems: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        quantity: number;
        originalTotal: {
          amount: string;
          currencyCode: string;
        };
        variant?: {
          title: string;
          image?: {
            url: string;
            altText?: string;
          };
        };
      };
    }>;
  };
  shippingAddress?: {
    firstName?: string;
    lastName?: string;
    address1?: string;
    address2?: string;
    city?: string;
    province?: string;
    country?: string;
    zip?: string;
  };
  fulfillments?: Array<{
    id: string;
    status: string;
    trackingInfo?: Array<{
      company?: string;
      number?: string;
      url?: string;
    }>;
  }>;
}

// GraphQL Queries
export const PRODUCTS_QUERY = gql`
  query getProducts($first: Int!, $after: String, $query: String) {
    products(first: $first, after: $after, query: $query) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          options {
            id
            name
            values
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 50) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                  currencyCode
                }
                availableForSale
                quantityAvailable
                selectedOptions {
                  name
                  value
                }
                image {
                  url
                  altText
                }
              }
            }
          }
          tags
          productType
          vendor
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

export const PRODUCT_QUERY = gql`
  query getProduct($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      options {
        id
        name
        values
      }
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 50) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
            availableForSale
            quantityAvailable
            selectedOptions {
              name
              value
            }
            image {
              url
              altText
            }
          }
        }
      }
      tags
      productType
      vendor
    }
  }
`;

export const COLLECTIONS_QUERY = gql`
  query getCollections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          image {
            url
            altText
          }
        }
      }
    }
  }
`;

export const COLLECTION_QUERY = gql`
  query getCollection($handle: String!, $first: Int!, $after: String) {
    collection(handle: $handle) {
      id
      title
      handle
      description
      image {
        url
        altText
      }
      products(first: $first, after: $after) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            options {
              id
              name
              values
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 50) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  compareAtPrice {
                    amount
                    currencyCode
                  }
                  availableForSale
                  quantityAvailable
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    url
                    altText
                  }
                }
              }
            }
            tags
            productType
            vendor
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  }
`;

// Cart mutations
export const CREATE_CART_MUTATION = gql`
  mutation createCart($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        lines(first: 50) {
          edges {
            node {
              id
              quantity
              cost {
                subtotalAmount {
                  amount
                  currencyCode
                }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  product {
                    id
                    title
                    handle
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
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        lines(first: 50) {
          edges {
            node {
              id
              quantity
              cost {
                subtotalAmount {
                  amount
                  currencyCode
                }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  product {
                    id
                    title
                    handle
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
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const UPDATE_CART_MUTATION = gql`
  mutation updateCart($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        lines(first: 50) {
          edges {
            node {
              id
              quantity
              cost {
                subtotalAmount {
                  amount
                  currencyCode
                }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  product {
                    id
                    title
                    handle
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
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
        }
        lines(first: 50) {
          edges {
            node {
              id
              quantity
              cost {
                subtotalAmount {
                  amount
                  currencyCode
                }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  product {
                    id
                    title
                    handle
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
      }
      userErrors {
        field
        message
      }
    }
  }
`;

// Customer-related queries
export const CUSTOMER_QUERY = gql`
  query getCustomer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      firstName
      lastName
      email
      phone
      acceptsMarketing
      defaultAddress {
        id
        firstName
        lastName
        address1
        address2
        city
        province
        country
        zip
        phone
      }
    }
  }
`;

export const CUSTOMER_UPDATE_MUTATION = gql`
  mutation customerUpdate($customer: CustomerUpdateInput!, $customerAccessToken: String!) {
    customerUpdate(customer: $customer, customerAccessToken: $customerAccessToken) {
      customer {
        id
        firstName
        lastName
        email
        phone
        acceptsMarketing
        defaultAddress {
          id
          firstName
          lastName
          address1
          address2
          city
          province
          country
          zip
          phone
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

// Customer orders query
export const CART_QUERY = gql`
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      totalQuantity
      cost {
        subtotalAmount {
          amount
          currencyCode
        }
        totalAmount {
          amount
          currencyCode
        }
        totalTaxAmount {
          amount
          currencyCode
        }
      }
      lines(first: 50) {
        edges {
          node {
            id
            quantity
            cost {
              subtotalAmount {
                amount
                currencyCode
              }
            }
            merchandise {
              ... on ProductVariant {
                id
                title
                price {
                  amount
                  currencyCode
                }
                product {
                  id
                  title
                  handle
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
    }
  }
`;

export const CUSTOMER_ORDERS_QUERY = gql`
  query getCustomerOrders($customerAccessToken: String!, $first: Int!) {
    customer(customerAccessToken: $customerAccessToken) {
      orders(first: $first) {
        edges {
          node {
            id
            orderNumber
            processedAt
            fulfillmentStatus
            financialStatus
            totalPriceV2 {
              amount
              currencyCode
            }
            subtotalPriceV2 {
              amount
              currencyCode
            }
            totalShippingPriceV2 {
              amount
              currencyCode
            }
            totalTaxV2 {
              amount
              currencyCode
            }
            lineItems(first: 50) {
              edges {
                node {
                  id
                  title
                  quantity
                  originalTotal {
                    amount
                    currencyCode
                  }
                  variant {
                    title
                    image {
                      url
                      altText
                    }
                  }
                }
              }
            }
            shippingAddress {
              firstName
              lastName
              address1
              address2
              city
              province
              country
              zip
            }
            fulfillments {
              id
              status
              trackingInfo {
                company
                number
                url
              }
            }
          }
        }
      }
    }
  }
`;

// API Response Types
interface ProductsResponse {
  products: {
    edges: Array<{
      node: ShopifyProduct;
    }>;
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
}

interface ProductResponse {
  product: ShopifyProduct;
}

interface CollectionsResponse {
  collections: {
    edges: Array<{
      node: ShopifyCollection;
    }>;
  };
}

interface CollectionResponse {
  collection: ShopifyCollection;
}

interface CartResponse {
  cartCreate: {
    cart: ShopifyCart;
    userErrors: Array<{
      field: string;
      message: string;
    }>;
  };
}

interface CartLinesResponse {
  cartLinesAdd: {
    cart: ShopifyCart;
    userErrors: Array<{
      field: string;
      message: string;
    }>;
  };
}

interface CartUpdateResponse {
  cartLinesUpdate: {
    cart: ShopifyCart;
    userErrors: Array<{
      field: string;
      message: string;
    }>;
  };
}

interface CartRemoveResponse {
  cartLinesRemove: {
    cart: ShopifyCart;
    userErrors: Array<{
      field: string;
      message: string;
    }>;
  };
}

// API Functions
export async function getProducts(first: number = 20, after?: string, query?: string) {
  try {
    validateEnvironmentVariables();

    const variables = { first, after, query };
    const response = await shopifyClient.request(PRODUCTS_QUERY, variables) as ProductsResponse;
    return response.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function getProduct(handle: string) {
  try {
    const response = await shopifyClient.request(PRODUCT_QUERY, { handle }) as ProductResponse;

    // Enhanced stock information logging for debugging
    if (response.product?.variants?.edges?.length > 0) {
      console.log('📦 Shopify Stock Data for Product:', {
        productTitle: response.product.title,
        productId: response.product.id,
        variantsCount: response.product.variants.edges.length,
        variants: response.product.variants.edges.map((edge: any) => ({
          variantId: edge.node.id,
          title: edge.node.title,
          availableForSale: edge.node.availableForSale,
          quantityAvailable: edge.node.quantityAvailable,
          stockStatus: edge.node.quantityAvailable > 0 ? 'IN STOCK' : 'OUT OF STOCK'
        }))
      });
    }

    return response.product;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

/**
 * Refresh stock data for specific products
 * @param productIds - Array of product IDs to refresh
 * @returns Updated product data
 */
export async function refreshProductStock(productIds: string[]) {
  try {
    console.log('🔄 Refreshing stock data for products:', productIds);

    const products = await getProductsByIds(productIds);

    console.log('✅ Stock refresh completed:', products.map(product => ({
      id: product.id,
      title: product.title,
      variants: product.variants.edges.map((edge: any) => ({
        variantId: edge.node.id,
        availableForSale: edge.node.availableForSale,
        quantityAvailable: edge.node.quantityAvailable
      }))
    })));

    return products;
  } catch (error) {
    console.error('❌ Error refreshing stock data:', error);
    throw error;
  }
}

export async function getProductsByIds(productIds: string[]) {
  try {
    validateEnvironmentVariables();

    const queryString = `
      query GetProductsByIds($ids: [ID!]!) {
        nodes(ids: $ids) {
          ... on Product {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  availableForSale
                  quantityAvailable
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
            tags
            productType
            vendor
          }
        }
      }
    `;

    const variables = {
      ids: productIds,
    };

    const response = await shopifyClient.request<{ nodes: ShopifyProduct[] }>(queryString, variables);
    return response.nodes.filter(node => node !== null) as ShopifyProduct[];
  } catch (error) {
    console.error('Error fetching products by IDs:', error);
    throw error;
  }
}

export async function getCollections(first: number = 20) {
  try {
    console.log(`🔍 Fetching collections (first: ${first})...`);
    const response = await shopifyClient.request(COLLECTIONS_QUERY, { first }) as CollectionsResponse;

    console.log(`✅ Found ${response.collections.edges.length} collections:`);
    response.collections.edges.forEach((edge, index) => {
      console.log(`  ${index + 1}. ${edge.node.title} (handle: ${edge.node.handle})`);
    });

    return response.collections;
  } catch (error) {
    console.error('❌ Error fetching collections:', error);
    throw error;
  }
}

export async function getCollectionsByIds(collectionIds: string[]) {
  try {
    validateEnvironmentVariables();

    const queryString = `
      query GetCollectionsByIds($ids: [ID!]!) {
        nodes(ids: $ids) {
          ... on Collection {
            id
            title
            handle
            description
            image {
              url
              altText
            }
          }
        }
      }
    `;

    const variables = {
      ids: collectionIds,
    };

    const response = await shopifyClient.request<{ nodes: ShopifyCollection[] }>(queryString, variables);
    return response.nodes.filter(node => node !== null) as ShopifyCollection[];
  } catch (error) {
    console.error('Error fetching collections by IDs:', error);
    throw error;
  }
}

export async function getCollection(handle: string, first: number = 20, after?: string) {
  try {
    console.log(`🔍 Fetching collection with handle: "${handle}" (first: ${first})...`);
    const response = await shopifyClient.request(COLLECTION_QUERY, { handle, first, after }) as CollectionResponse;

    if (response.collection) {
      console.log(`✅ Found collection: "${response.collection.title}" (handle: ${response.collection.handle})`);
      console.log(`   Products: ${response.collection.products.edges.length}`);
    } else {
      console.log(`❌ No collection found with handle: "${handle}"`);
    }

    return response.collection;
  } catch (error) {
    console.error(`❌ Error fetching collection "${handle}":`, error);
    throw error;
  }
}

export async function getCart(cartId: string) {
  try {
    const response = await shopifyClient.request(CART_QUERY, { cartId }) as { cart: ShopifyCart };
    return response.cart;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
}

export async function createCart() {
  try {
    const response = await shopifyClient.request(CREATE_CART_MUTATION, {
      input: {}
    }) as CartResponse;

    // Check for user errors
    if (response.cartCreate.userErrors.length > 0) {
      console.error('Create cart user errors:', response.cartCreate.userErrors);
      throw new Error(response.cartCreate.userErrors[0].message);
    }

    return response.cartCreate.cart;
  } catch (error) {
    console.error('Error creating cart:', error);
    throw error;
  }
}

export async function addToCart(cartId: string, variantId: string, quantity: number = 1) {
  try {
    const response = await shopifyClient.request(ADD_TO_CART_MUTATION, {
      cartId,
      lines: [{
        merchandiseId: variantId,
        quantity
      }]
    }) as CartLinesResponse;

    // Check for user errors
    if (response.cartLinesAdd.userErrors.length > 0) {
      console.error('Add to cart user errors:', response.cartLinesAdd.userErrors);
      throw new Error(response.cartLinesAdd.userErrors[0].message);
    }

    return response.cartLinesAdd.cart;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
}

export async function updateCartItem(cartId: string, lineId: string, quantity: number) {
  try {
    const response = await shopifyClient.request(UPDATE_CART_MUTATION, {
      cartId,
      lines: [{
        id: lineId,
        quantity
      }]
    }) as CartUpdateResponse;

    // Check for user errors
    if (response.cartLinesUpdate.userErrors.length > 0) {
      console.error('Update cart user errors:', response.cartLinesUpdate.userErrors);
      throw new Error(response.cartLinesUpdate.userErrors[0].message);
    }

    return response.cartLinesUpdate.cart;
  } catch (error) {
    console.error('Error updating cart:', error);
    throw error;
  }
}

export async function removeFromCart(cartId: string, lineId: string) {
  try {
    const response = await shopifyClient.request(REMOVE_FROM_CART_MUTATION, {
      cartId,
      lineIds: [lineId]
    }) as CartRemoveResponse;

    // Check for user errors
    if (response.cartLinesRemove.userErrors.length > 0) {
      console.error('Remove from cart user errors:', response.cartLinesRemove.userErrors);
      throw new Error(response.cartLinesRemove.userErrors[0].message);
    }

    return response.cartLinesRemove.cart;
  } catch (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
}

// Customer response interfaces
interface CustomerResponse {
  customer: ShopifyCustomer;
}

interface CustomerUpdateResponse {
  customerUpdate: {
    customer: ShopifyCustomer;
    userErrors: Array<{
      field: string;
      message: string;
    }>;
  };
}

interface CustomerOrdersResponse {
  customer: {
    orders: {
      edges: Array<{
        node: ShopifyOrder;
      }>;
    };
  };
}

// Customer functions
export async function getCustomer(customerId: string, customerAccessToken: string): Promise<ShopifyCustomer | null> {
  try {
    const response = await shopifyClient.request(CUSTOMER_QUERY, {
      customerAccessToken
    }) as CustomerResponse;

    return response.customer;
  } catch (error) {
    console.error('Error fetching customer:', error);
    return null;
  }
}

export async function updateCustomer(
  customerId: string,
  customerAccessToken: string,
  updateData: {
    firstName?: string;
    lastName?: string;
    phone?: string;
    defaultAddress?: {
      address1?: string;
      address2?: string;
      city?: string;
      province?: string;
      zip?: string;
      country?: string;
    };
  }
): Promise<ShopifyCustomer | null> {
  try {
    const customerInput: any = {};

    if (updateData.firstName !== undefined) customerInput.firstName = updateData.firstName;
    if (updateData.lastName !== undefined) customerInput.lastName = updateData.lastName;
    if (updateData.phone !== undefined) customerInput.phone = updateData.phone;

    if (updateData.defaultAddress) {
      customerInput.defaultAddress = updateData.defaultAddress;
    }

    const response = await shopifyClient.request(CUSTOMER_UPDATE_MUTATION, {
      customer: customerInput,
      customerAccessToken
    }) as CustomerUpdateResponse;

    if (response.customerUpdate.userErrors.length > 0) {
      console.error('Customer update errors:', response.customerUpdate.userErrors);
      return null;
    }

    return response.customerUpdate.customer;
  } catch (error) {
    console.error('Error updating customer:', error);
    return null;
  }
}

// Get customer orders
export async function getCustomerOrders(customerAccessToken: string, first: number = 50): Promise<ShopifyOrder[]> {
  try {
    const response = await shopifyClient.request(CUSTOMER_ORDERS_QUERY, {
      customerAccessToken,
      first
    }) as CustomerOrdersResponse;

    return response.customer.orders.edges.map(edge => edge.node);
  } catch (error) {
    console.error('Error fetching customer orders:', error);
    return [];
  }
}
