import { formatYen, isProductInStock, getFirstAvailableVariant, isVariantOnSale } from './Utils';

// Product transformation interface
export interface TransformedProduct {
    id: string;
    title: string;
    handle?: string;
    description?: string;
    price: {
        amount: string;
        currencyCode: string;
    };
    image?: string;
    variantId?: string;
    source: 'shopify';
    availableForSale?: boolean;
    stockQuantity?: number;
    variants?: Array<{
        id: string;
        title: string;
        availableForSale: boolean;
        quantityAvailable: number;
        price: {
            amount: string;
            currencyCode: string;
        };
        compareAtPrice?: {
            amount: string;
            currencyCode: string;
        };
        selectedOptions: Array<{
            name: string;
            value: string;
        }>;
    }>;
    options?: Array<{
        name: string;
        values: string[];
    }>;
}

// Pagination data interface
export interface PaginationData {
    totalProducts: number;
    currentPage: number;
    hasPrev: boolean;
    hasNext: boolean;
    totalPages: number;
}

/**
 * Transform Shopify product to consistent format
 */
export const transformShopifyProduct = (product: any): TransformedProduct => {
    const variants = product.variants.edges.map((edge: any) => edge.node);
    const firstAvailableVariant = getFirstAvailableVariant(variants);
    const isInStock = isProductInStock(variants);

    return {
        id: product.id,
        title: product.title,
        handle: product.handle,
        description: product.description,
        price: {
            amount: product.priceRange.minVariantPrice.amount,
            currencyCode: product.priceRange.minVariantPrice.currencyCode,
        },
        image: product.images.edges[0]?.node.url || "/product.png",
        variantId: firstAvailableVariant?.id || product.variants.edges[0]?.node.id,
        availableForSale: isInStock,
        stockQuantity: firstAvailableVariant ? firstAvailableVariant.quantityAvailable : 0,
        source: 'shopify' as const,
        variants: variants.map((variant: any) => ({
            id: variant.id,
            title: variant.title,
            availableForSale: variant.availableForSale,
            quantityAvailable: variant.quantityAvailable,
            price: variant.price,
            compareAtPrice: variant.compareAtPrice,
            selectedOptions: variant.selectedOptions,
        })),
        options: product.options || [],
    };
};

/**
 * Apply filters to products based on search parameters
 */
export const applyProductFilters = (products: any[], searchParams: any, allProducts: any[] = []) => {
    console.log('🔧 Applying filters with searchParams:', searchParams);
    let filtered = [...products];
    console.log(`📦 Starting with ${filtered.length} products`);

    // Filter by collections
    if (searchParams?.cat) {
        const selectedCollections = searchParams.cat.split(',');
        console.log('🏷️ Filtering by collections:', selectedCollections);

        // If we're filtering by collections and we have all products loaded
        if (allProducts.length > 0) {
            filtered = allProducts;
            console.log(`📦 Using all products (${filtered.length}) for collection filtering`);
        }

        filtered = filtered.filter(product => {
            console.log(`🏷️ Checking product: ${product.title}`);

            // Try multiple matching strategies
            const matchesByTags = product.tags && selectedCollections.some((collection: string) =>
                product.tags.some((tag: string) =>
                    tag.toLowerCase().includes(collection.toLowerCase())
                )
            );

            const matchesByType = product.productType && selectedCollections.some((collection: string) =>
                product.productType.toLowerCase().includes(collection.toLowerCase())
            );

            const matchesByVendor = product.vendor && selectedCollections.some((collection: string) =>
                product.vendor.toLowerCase().includes(collection.toLowerCase())
            );

            const hasMatch = matchesByTags || matchesByType || matchesByVendor;
            console.log(`  Product "${product.title}" has collection match: ${hasMatch}`);

            return hasMatch;
        });

        console.log(`✅ After collection filtering: ${filtered.length} products remaining`);
    }

    // Filter by colors
    if (searchParams?.color) {
        const selectedColors = searchParams.color.split(',');
        console.log('🔍 Filtering by colors:', selectedColors);

        filtered = filtered.filter(product => {
            const hasMatchingColor = product.variants.edges.some((variantEdge: any) => {
                const variant = variantEdge.node;
                return variant.selectedOptions && variant.selectedOptions.some((option: any) => {
                    const isColorOption = option.name.toLowerCase() === 'color';
                    const matchesSelectedColor = selectedColors.includes(option.value.toLowerCase());
                    return isColorOption && matchesSelectedColor;
                });
            });

            console.log(`  Product "${product.title}" has matching color: ${hasMatchingColor}`);
            return hasMatchingColor;
        });

        console.log(`✅ After color filtering: ${filtered.length} products remaining`);
    }

    // Filter by sizes
    if (searchParams?.size) {
        const selectedSizes = searchParams.size.split(',');
        filtered = filtered.filter(product => {
            return product.variants.edges.some((variantEdge: any) => {
                const variant = variantEdge.node;
                return variant.selectedOptions && variant.selectedOptions.some((option: any) =>
                    option.name.toLowerCase() === 'size' &&
                    selectedSizes.includes(option.value.toLowerCase())
                );
            });
        });
    }

    // Filter by price range
    if (searchParams?.min || searchParams?.max) {
        const minPrice = searchParams.min ? parseFloat(searchParams.min) : 0;
        const maxPrice = searchParams.max ? parseFloat(searchParams.max) : Infinity;

        filtered = filtered.filter(product => {
            const price = parseFloat(product.priceRange.minVariantPrice.amount);
            return price >= minPrice && price <= maxPrice;
        });
    }

    // Sort products
    if (searchParams?.sort) {
        const [direction, field] = searchParams.sort.split(' ');

        filtered.sort((a, b) => {
            if (field === 'price') {
                const priceA = parseFloat(a.priceRange.minVariantPrice.amount);
                const priceB = parseFloat(b.priceRange.minVariantPrice.amount);
                return direction === 'asc' ? priceA - priceB : priceB - priceA;
            } else if (field === 'lastUpdated') {
                return direction === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
            }
            return 0;
        });
    }

    return filtered;
};

/**
 * Calculate pagination data
 */
export const calculatePaginationData = (
    totalProducts: number,
    currentPage: number,
    limit: number
): PaginationData => {
    const totalPages = Math.ceil(totalProducts / limit);
    return {
        totalProducts,
        currentPage,
        hasPrev: currentPage > 1,
        hasNext: currentPage < totalPages,
        totalPages
    };
};

/**
 * Apply pagination to filtered products
 */
export const applyPagination = (products: any[], currentPage: number, limit: number) => {
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;
    return products.slice(startIndex, endIndex);
}; 