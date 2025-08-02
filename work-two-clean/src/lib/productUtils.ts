import { formatYen, isVariantInStock, getFirstAvailableVariant, isVariantOnSale, getVariantDiscountPercentage } from './Utils';

export interface TransformedProductVariant {
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
    selectedOptions: {
        name: string;
        value: string;
    }[];
}

export interface TransformedProductOption {
    id: string;
    name: string;
    values: string[];
}

export interface TransformedProduct {
    id: string;
    title: string;
    handle: string;
    description?: string;
    productType?: string;
    images: Array<{
        _id: string;
        image: { url: string };
    }>;
    variants: TransformedProductVariant[];
    options: TransformedProductOption[];
    firstAvailableVariant: TransformedProductVariant | null;
    firstVariant: TransformedProductVariant | null;
    isInStock: boolean;
    stockNumber: number;
    price: string;
    currencyCode: string;
}

export interface ProductStockInfo {
    isInStock: boolean;
    stockNumber: number;
    firstAvailableVariant: TransformedProductVariant | null;
    firstVariant: TransformedProductVariant | null;
}

export interface ProductPriceInfo {
    price: string;
    currencyCode: string;
    isOnSale: boolean;
    originalPrice?: string;
    discountPercentage?: number;
}

/**
 * Transform raw Shopify product data into a consistent format
 */
export const transformShopifyProduct = (product: any): TransformedProduct => {
    const variants = product.variants.edges.map((edge: any) => edge.node);
    const firstAvailableVariant = getFirstAvailableVariant(variants);
    const firstVariant = variants[0] || null;
    const isInStock = firstVariant ? isVariantInStock(firstVariant) : false;
    const stockNumber = firstAvailableVariant ? firstAvailableVariant.quantityAvailable : 0;
    const price = firstVariant?.price?.amount || "0";
    const currencyCode = firstVariant?.price?.currencyCode || "USD";

    return {
        id: product.id,
        title: product.title,
        handle: product.handle,
        description: product.description,
        productType: product.productType,
        images: product.images.edges.map((edge: any) => ({
            _id: edge.node.url,
            image: { url: edge.node.url }
        })),
        variants: variants.map((variant: any) => ({
            id: variant.id,
            title: variant.title,
            availableForSale: variant.availableForSale,
            quantityAvailable: variant.quantityAvailable,
            price: variant.price,
            compareAtPrice: variant.compareAtPrice,
            selectedOptions: variant.selectedOptions
        })),
        options: product.options || [],
        firstAvailableVariant,
        firstVariant,
        isInStock,
        stockNumber,
        price,
        currencyCode
    };
};

/**
 * Get stock information for a product
 */
export const getProductStockInfo = (variants: TransformedProductVariant[]): ProductStockInfo => {
    const firstAvailableVariant = getFirstAvailableVariant(variants);
    const firstVariant = variants[0] || null;
    const isInStock = firstVariant ? isVariantInStock(firstVariant) : false;
    const stockNumber = firstAvailableVariant ? firstAvailableVariant.quantityAvailable : 0;

    return {
        isInStock,
        stockNumber,
        firstAvailableVariant,
        firstVariant
    };
};

/**
 * Get price information for a variant
 */
export const getVariantPriceInfo = (variant: TransformedProductVariant): ProductPriceInfo => {
    const isOnSale = isVariantOnSale(variant);
    const discountPercentage = getVariantDiscountPercentage(variant);

    return {
        price: formatYen(variant.price.amount),
        currencyCode: variant.price.currencyCode,
        isOnSale,
        originalPrice: isOnSale && variant.compareAtPrice ? formatYen(variant.compareAtPrice.amount) : undefined,
        discountPercentage
    };
};

/**
 * Find a variant based on selected options
 */
export const findVariantByOptions = (
    variants: TransformedProductVariant[],
    selectedOptions: { [key: string]: string }
): TransformedProductVariant | undefined => {
    return variants.find((variant) => {
        return variant.selectedOptions.every(
            (option) => selectedOptions[option.name] === option.value
        );
    });
};

/**
 * Check if a combination of options has available variants
 */
export const isVariantInStockForChoices = (
    variants: TransformedProductVariant[],
    choices: { [key: string]: string }
): boolean => {
    return variants.some((variant) => {
        return (
            variant.selectedOptions.every(
                (option) => choices[option.name] === option.value
            ) &&
            isVariantInStock(variant)
        );
    });
};

/**
 * Filter out unavailable options (for non-color options)
 */
export const filterAvailableOptions = (
    options: TransformedProductOption[],
    variants: TransformedProductVariant[],
    selectedOptions: { [key: string]: string }
): TransformedProductOption[] => {
    return options.filter(option => {
        // Always show color options
        if (option.name.toLowerCase() === "color") {
            return true;
        }

        // Check if there are any available variants for this option
        const hasAvailableVariants = option.values.some((choice) => {
            return isVariantInStockForChoices(variants, {
                ...selectedOptions,
                [option.name]: choice,
            });
        });

        return hasAvailableVariants;
    });
};

/**
 * Get available choices for an option
 */
export const getAvailableChoices = (
    option: TransformedProductOption,
    variants: TransformedProductVariant[],
    selectedOptions: { [key: string]: string }
): string[] => {
    return option.values.filter((choice) => {
        return isVariantInStockForChoices(variants, {
            ...selectedOptions,
            [option.name]: choice,
        });
    });
}; 