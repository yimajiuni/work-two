"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import ProductCustamize from "./ProductCustomize";
import ProductAdd from "./ProductAdd";
import ProductDetails from "./ProductDetails";
import ProductReviews from "./ProductReviews";
import { ProductImagesRef } from "./ProductImages";
import { TransformedProduct } from "@/lib/productUtils";
import { useProductState } from "@/hooks/useProductState";

interface ProductSpecsProps {
    product: TransformedProduct;
}

const ProductSpecs = ({ product }: ProductSpecsProps) => {
    const productImagesRef = useRef<ProductImagesRef>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Use the centralized product state management
    const {
        selectedVariant,
        priceInfo,
        isOutOfStock,
        stockNumber,
        handleOptionSelect,
        isOptionAvailable,
        isOptionSelected,
        filteredOptions
    } = useProductState({ product });

    const handleThumbnailClick = (index: number) => {
        setCurrentImageIndex(index);
        if (productImagesRef.current) {
            productImagesRef.current.setIndex(index);
        }
    };

    return (
        <div className="text-center px-5 md:px-10 lg:px-20 w-full md:w-2/3 lg:w-1/2 mx-auto mt-40 flex flex-col gap-4 justify-start items-center font-inter text-thin text-black relative overflow-visible">
            <h1 className="text-m font-normal uppercase">{product.title}</h1>

            {product.description && (
                <p className="text-xs leading-relaxed w-full w-full md:w-2/3 lg:w-1/2 mx-auto">{product.description}</p>
            )}
            <div className="h-[1px] bg-gray-100" />

            <div className="h-[1px] bg-gray-100" />

            {/* Customize Products */}
            {filteredOptions.length > 0 && (
                <ProductCustamize
                    productId={product.id}
                    variants={product.variants}
                    productOptions={filteredOptions}
                    productTitle={product.title}
                    productHandle={product.handle}
                    productImage={product.images[0]?.image.url}
                    selectedVariant={selectedVariant}
                    priceInfo={priceInfo}
                    isOutOfStock={isOutOfStock}
                    stockNumber={stockNumber}
                    handleOptionSelect={handleOptionSelect}
                    isOptionAvailable={isOptionAvailable}
                    isOptionSelected={isOptionSelected}
                />
            )}

            {/* Add to Cart - Show if no customization options or as fallback */}
            {filteredOptions.length === 0 && (
                <ProductAdd
                    productId={product.id}
                    variantId={selectedVariant?.id || ""}
                    stockNumber={stockNumber}
                    productTitle={product.title}
                    productHandle={product.handle}
                    productImage={product.images[0]?.image.url}
                    productPrice={priceInfo?.price || "¥0"}
                />
            )}

            {/* Thumbnail Navigation */}
            <div className="flex gap-1 justify-center mt-4">
                {product.images.map((item, i) => (
                    <div
                        className={`w-10 h-14 relative gap-4 cursor-pointer transition-all duration-200 ${i === currentImageIndex ? 'ring-2 ring-black' : ''
                            }`}
                        key={item._id || i}
                        onClick={() => handleThumbnailClick(i)}
                    >
                        <Image
                            src={item.image?.url || "/product.png"}
                            alt="category"
                            fill
                            sizes="30vw"
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="h-[1px] bg-gray-100" />

            {/* Product Details */}
            <ProductDetails
                productType={product.productType}
            />

            <div className="h-[1px] bg-gray-100" />

            {/* Reviews */}
            <div className="flex justify-center overflow-visible mx-auto">
                <ProductReviews productId={product.id} productTitle={product.title} />
            </div>
        </div>
    );
};

export default ProductSpecs; 