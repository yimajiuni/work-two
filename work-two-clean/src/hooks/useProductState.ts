import { useState, useEffect, useCallback } from 'react';
import {
    TransformedProduct,
    TransformedProductVariant,
    TransformedProductOption,
    findVariantByOptions,
    isVariantInStockForChoices,
    getVariantPriceInfo
} from '@/lib/productUtils';

interface UseProductStateProps {
    product: TransformedProduct;
}

interface UseProductStateReturn {
    // Selected options state
    selectedOptions: { [key: string]: string };
    setSelectedOptions: (options: { [key: string]: string }) => void;

    // Current variant state
    selectedVariant: TransformedProductVariant | null;

    // Price information
    priceInfo: ReturnType<typeof getVariantPriceInfo> | null;

    // Stock information
    isOutOfStock: boolean;
    stockNumber: number;

    // Option handlers
    handleOptionSelect: (optionType: string, choice: string) => void;
    isOptionAvailable: (optionType: string, choice: string) => boolean;
    isOptionSelected: (optionType: string, choice: string) => boolean;

    // Filtered options (excluding unavailable ones)
    filteredOptions: TransformedProductOption[];
}

export const useProductState = ({ product }: UseProductStateProps): UseProductStateReturn => {
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
    const [selectedVariant, setSelectedVariant] = useState<TransformedProductVariant | null>(null);

    // Initialize with first available variant
    useEffect(() => {
        if (Object.keys(selectedOptions).length === 0 && product.variants.length > 0) {
            const firstAvailableVariant = product.firstAvailableVariant || product.firstVariant;
            if (firstAvailableVariant) {
                setSelectedVariant(firstAvailableVariant);

                // Set initial selected options
                const initialOptions: { [key: string]: string } = {};
                firstAvailableVariant.selectedOptions.forEach((option) => {
                    initialOptions[option.name] = option.value;
                });
                setSelectedOptions(initialOptions);
            }
        }
    }, [product.variants, product.firstAvailableVariant, product.firstVariant, selectedOptions]);

    // Update selected variant when options change
    useEffect(() => {
        if (Object.keys(selectedOptions).length > 0) {
            const variant = findVariantByOptions(product.variants, selectedOptions);
            setSelectedVariant(variant || null);
        }
    }, [selectedOptions, product.variants]);

    // Handle option selection
    const handleOptionSelect = useCallback((optionType: string, choice: string) => {
        setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
    }, []);

    // Check if an option is available
    const isOptionAvailable = useCallback((optionType: string, choice: string) => {
        return isVariantInStockForChoices(product.variants, {
            ...selectedOptions,
            [optionType]: choice,
        });
    }, [product.variants, selectedOptions]);

    // Check if an option is selected
    const isOptionSelected = useCallback((optionType: string, choice: string) => {
        return selectedOptions[optionType] === choice;
    }, [selectedOptions]);

    // Show all options, but we'll handle availability display in the component
    const filteredOptions = product.options.filter(option =>
        option.name.toLowerCase() !== 'fabric'
    );

    // Get price information for selected variant
    const priceInfo = selectedVariant ? getVariantPriceInfo(selectedVariant) : null;

    // Stock information
    const isOutOfStock = !selectedVariant || selectedVariant.quantityAvailable < 1;
    const stockNumber = selectedVariant?.quantityAvailable || 0;

    return {
        selectedOptions,
        setSelectedOptions,
        selectedVariant,
        priceInfo,
        isOutOfStock,
        stockNumber,
        handleOptionSelect,
        isOptionAvailable,
        isOptionSelected,
        filteredOptions
    };
}; 