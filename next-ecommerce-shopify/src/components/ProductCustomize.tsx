"use client";

import ProductAdd from "./ProductAdd";
import { getColorCode } from "@/lib/Utils";
import {
    TransformedProductVariant,
    TransformedProductOption,
    ProductPriceInfo
} from "@/lib/productUtils";

interface ProductCustomizeProps {
    productId: string;
    variants: TransformedProductVariant[];
    productOptions: TransformedProductOption[];
    productTitle?: string;
    productHandle?: string;
    productImage?: string;
    selectedVariant: TransformedProductVariant | null;
    priceInfo: ProductPriceInfo | null;
    isOutOfStock: boolean;
    stockNumber: number;
    handleOptionSelect: (optionType: string, choice: string) => void;
    isOptionAvailable: (optionType: string, choice: string) => boolean;
    isOptionSelected: (optionType: string, choice: string) => boolean;
}

const ProductCustomize = ({
    productId,
    variants,
    productOptions,
    productTitle,
    productHandle,
    productImage,
    selectedVariant,
    priceInfo,
    isOutOfStock,
    stockNumber,
    handleOptionSelect,
    isOptionAvailable,
    isOptionSelected
}: ProductCustomizeProps) => {

    // Debug logging
    console.log('🎨 ProductCustomize Debug:', {
        productId,
        variantsCount: variants.length,
        productOptionsCount: productOptions.length,
        selectedVariant: selectedVariant ? {
            id: selectedVariant.id,
            title: selectedVariant.title,
            availableForSale: selectedVariant.availableForSale,
            quantityAvailable: selectedVariant.quantityAvailable
        } : null,
        priceInfo,
        isOutOfStock,
        stockNumber
    });

    // Filter out Fabric option temporarily while waiting for Shopify to update
    const filteredProductOptions = productOptions.filter(option =>
        option.name.toLowerCase() !== 'fabric'
    );

    return (
        <div className="flex flex-col gap-6">
            {/* Sale Price Display - Moved above color selection */}
            {priceInfo && (
                <div className="flex flex-col items-center gap-1">
                    {priceInfo.isOnSale && priceInfo.originalPrice && (
                        <>
                            <span className="text-xs text-gray-600 font-inter text-thin line-through">
                                {priceInfo.originalPrice}
                            </span>
                        </>
                    )}
                    <span className={`text-m font-times-new-roman ${priceInfo.isOnSale ? 'text-red-600 font-medium' : 'text-gray-900'}`}>
                        {priceInfo.price}
                    </span>
                </div>
            )}

            {filteredProductOptions.map((option) => {
                // Check if there are any available variants for this option
                const hasAvailableVariants = option.values.some((choice) => {
                    return isOptionAvailable(option.name, choice);
                });

                // Skip rendering the entire option section if no variants are available (except for color)
                if (option.name.toLowerCase() !== "color" && !hasAvailableVariants) {
                    return null;
                }

                return (
                    <div className="flex flex-col gap-4" key={option.id}>
                        <ul className="flex items-center justify-center gap-3 flex-wrap">
                            {option.values.map((choice) => {
                                const disabled = !isOptionAvailable(option.name, choice);
                                const selected = isOptionSelected(option.name, choice);

                                const clickHandler = disabled
                                    ? undefined
                                    : () => handleOptionSelect(option.name, choice);

                                return option.name.toLowerCase() === "color" ? (
                                    <li
                                        className={`w-5 h-5 ring-1 ring-black relative group transition-all duration-200 ${selected
                                            ? 'scale-110'
                                            : disabled
                                                ? 'ring-gray-300 opacity-100 '
                                                : 'ring-gray-300 hover:ring-black hover:scale-105'
                                            }`}
                                        style={{
                                            backgroundColor: getColorCode(choice),
                                            cursor: disabled ? "default" : "pointer",
                                        }}
                                        onClick={clickHandler}
                                        key={choice}
                                        title={`${choice}${disabled ? ' - Out of Stock' : ''}`}
                                    >
                                        {disabled && (
                                            <div className="absolute w-12 h-[1px] rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                        )}
                                    </li>
                                ) : (
                                    <li
                                        className={`ring-1 ring-black py-2 px-2 min-w-[38px] text-sm relative group transition-all duration-200 ${selected
                                            ? 'ring-black bg-black text-white shadow-md'
                                            : disabled
                                                ? 'ring-gray-900 text-black'
                                                : 'ring-black text-black hover:bg-black hover:text-white hover:shadow-sm'
                                            }`}
                                        style={{
                                            cursor: disabled ? "default" : "pointer",
                                        }}
                                        key={choice}
                                        onClick={clickHandler}
                                        title={`${choice}${disabled ? ' - Out of Stock' : ''}`}
                                    >
                                        {choice}
                                        {disabled && (
                                            <div className="absolute w-full h-[1px] bg-black rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}

            {/* Selected Variant Info */}
            {selectedVariant && (
                <div className="pt-4">
                    <div className="text-xs text-gray-900 font-medium">
                        {selectedVariant.quantityAvailable > 0 ? (
                            <>
                                <span className="font-inter text-thin uppercase">Selected:</span> {selectedVariant.title}
                                <span className="ml-2 uppercase">
                                    ({selectedVariant.quantityAvailable} in stock)
                                </span>
                            </>
                        ) : (
                            <span className="text-red-600 uppercase">
                                Out of stock
                            </span>
                        )}
                    </div>
                </div>
            )}

            <ProductAdd
                productId={productId}
                variantId={selectedVariant?.id || ""}
                stockNumber={stockNumber}
                productTitle={productTitle}
                productHandle={productHandle}
                productImage={productImage}
                productPrice={priceInfo?.price || "¥0"}
            />
        </div>
    );
};

export default ProductCustomize;