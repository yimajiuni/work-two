// Color mapping from color names to hex codes
export const COLOR_MAP: { [key: string]: string } = {
    // Basic colors
    red: "#FF0000",
    blue: "#0000FF",
    green: "#00FF00",
    yellow: "#FFFF00",
    black: "#000000",
    white: "#FFFFFF",
    gray: "#808080",
    grey: "#808080",

    // Fashion colors
    navy: "#000080",
    burgundy: "#800020",
    maroon: "#800000",
    purple: "#800080",
    pink: "#FFC0CB",
    orange: "#FFA500",
    brown: "#A52A2A",
    beige: "#F5F5DC",
    cream: "#FFFDD0",
    ivory: "#FFFFF0",
    tan: "#D2B48C",
    khaki: "#C3B091",
    olive: "#808000",
    teal: "#008080",
    turquoise: "#0CB7BF",
    wine: "#860505",
    "off white": "#FBFCF2",  // Add this for "Off White" from Shopify
    cyan: "#00FFFF",
    magenta: "#FF00FF",
    lavender: "#E6E6FA",
    lilac: "#C8A2C8",
    mauve: "#E0B0FF",
    coral: "#FF7F50",
    salmon: "#FA8072",
    peach: "#FFE5B4",
    gold: "#FFD700",
    silver: "#C0C0C0",
    bronze: "#CD7F32",
    copper: "#B87333",

    // Common fashion variations
    darkblue: "#00008B",
    lightblue: "#ADD8E6",
    darkred: "#8B0000",
    lightred: "#FFB6C1",
    darkgreen: "#006400",
    lightgreen: "#90EE90",
    darkgray: "#404040",
    lightgray: "#D3D3D3",
    darkbrown: "#654321",
    lightbrown: "#D2691E",

    // Multi-color patterns
    multicolor: "#FFD700", // Gold as default for multicolor
    rainbow: "#FFD700", // Gold as default for rainbow
    striped: "#C0C0C0", // Silver as default for striped
    floral: "#FFB6C1", // Light pink as default for floral
    geometric: "#808080", // Gray as default for geometric
    abstract: "#FFA500", // Orange as default for abstract
};

// Function to get color code from color name
export const getColorCode = (colorName: string): string => {
    const normalizedColor = colorName.toLowerCase().trim();
    return COLOR_MAP[normalizedColor] || "#CCCCCC"; // Default to gray if not found
};

// Function to check if a color name has a corresponding color code
export const hasColorCode = (colorName: string): boolean => {
    const normalizedColor = colorName.toLowerCase().trim();
    return COLOR_MAP.hasOwnProperty(normalizedColor);
};

/**
 * Format price as yen with proper comma separators and no decimals
 * @param price - Price as string or number
 * @returns Formatted yen string (e.g., "¥10,000")
 */
export const formatYen = (price: string | number): string => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    const flooredPrice = Math.floor(numPrice);
    return `¥${flooredPrice.toLocaleString('ja-JP')}`;
};

/**
 * Check if a product variant is actually in stock
 * @param variant - Shopify variant object
 * @returns boolean indicating if variant is in stock
 */
export const isVariantInStock = (variant: {
    availableForSale: boolean;
    quantityAvailable: number;
}): boolean => {
    return variant.availableForSale && variant.quantityAvailable > 0;
};

/**
 * Get the stock quantity for a variant
 * @param variant - Shopify variant object
 * @returns number representing available stock
 */
export const getVariantStockQuantity = (variant: {
    availableForSale: boolean;
    quantityAvailable: number;
}): number => {
    return variant.availableForSale ? variant.quantityAvailable : 0;
};

/**
 * Check if a product has any variants in stock
 * @param variants - Array of Shopify variant objects
 * @returns boolean indicating if any variant is in stock
 */
export const isProductInStock = (variants: Array<{
    availableForSale: boolean;
    quantityAvailable: number;
}>): boolean => {
    return variants.some(variant => isVariantInStock(variant));
};

/**
 * Get the first available variant for a product
 * @param variants - Array of Shopify variant objects
 * @returns the first in-stock variant or null
 */
export const getFirstAvailableVariant = (variants: Array<{
    id: string;
    availableForSale: boolean;
    quantityAvailable: number;
    [key: string]: any;
}>): any => {
    return variants.find(variant => isVariantInStock(variant)) || null;
};

/**
 * Extract color from variant title
 * @param variantTitle - The variant title (e.g., "Red / M")
 * @returns The color name or empty string
 */
export const extractColorFromVariant = (variantTitle: string): string => {
    if (!variantTitle) return '';

    // Split by common separators and take the first part (usually color)
    const parts = variantTitle.split(/[\/\-\|]/).map(part => part.trim());
    return parts[0] || '';
};

/**
 * Extract size from variant title
 * @param variantTitle - The variant title (e.g., "Red / Silk / M" or "Red / M")
 * @returns The size or empty string
 */
export const extractSizeFromVariant = (variantTitle: string): string => {
    if (!variantTitle) return '';

    // Split by common separators and take the last part (usually size)
    const parts = variantTitle.split(/[\/\-|]/).map(part => part.trim());

    // If we have 3 parts (Color / Fabric / Size), take the last part
    // If we have 2 parts (Color / Size), take the last part
    // If we have 1 part, it might be just the color
    if (parts.length >= 2) {
        const lastPart = parts[parts.length - 1];
        // Check if the last part looks like a size (single letter or number)
        if (/^[A-Z0-9]+$/.test(lastPart) && lastPart.length <= 3) {
            return lastPart;
        }
    }

    return '';
};

/**
 * Calculate discount percentage between original and sale price
 * @param originalPrice - The original price (compareAtPrice)
 * @param salePrice - The current sale price
 * @returns The discount percentage as a number
 */
export const calculateDiscountPercentage = (originalPrice: number, salePrice: number): number => {
    if (originalPrice <= salePrice || originalPrice === 0) return 0;
    return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
};

/**
 * Check if a variant is on sale
 * @param variant - The Shopify variant object
 * @returns true if the variant has a compareAtPrice higher than the current price
 */
export const isVariantOnSale = (variant: {
    price: { amount: string; currencyCode: string };
    compareAtPrice?: { amount: string; currencyCode: string };
}): boolean => {
    if (!variant.compareAtPrice) return false;

    const currentPrice = parseFloat(variant.price.amount);
    const originalPrice = parseFloat(variant.compareAtPrice.amount);

    return originalPrice > currentPrice;
};

/**
 * Get the discount percentage for a variant
 * @param variant - The Shopify variant object
 * @returns The discount percentage or 0 if not on sale
 */
export const getVariantDiscountPercentage = (variant: {
    price: { amount: string; currencyCode: string };
    compareAtPrice?: { amount: string; currencyCode: string };
}): number => {
    if (!variant.compareAtPrice) return 0;

    const currentPrice = parseFloat(variant.price.amount);
    const originalPrice = parseFloat(variant.compareAtPrice.amount);

    return calculateDiscountPercentage(originalPrice, currentPrice);
}; 