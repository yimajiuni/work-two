"use client";
import { useState, useImperativeHandle, forwardRef } from "react";
import Image from "next/image";

interface ProductImagesProps {
    items: Array<{
        _id: string;
        image: {
            url: string;
        };
    }>;
}

export interface ProductImagesRef {
    items: Array<{
        _id: string;
        image: {
            url: string;
        };
    }>;
    currentIndex: number;
    setIndex: (index: number) => void;
}

const ProductImages = forwardRef<ProductImagesRef, ProductImagesProps>(({ items }, ref) => {
    const [index, setIndex] = useState(0);

    useImperativeHandle(ref, () => ({
        items,
        currentIndex: index,
        setIndex
    }));

    // Check if items exist and have content
    if (!items || items.length === 0) {
        return (
            <div>
                <div className="h-[500px] relative bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">No images available</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col md:flex-col lg:flex-row gap-1">
            {/* Main Images Container - All Images Vertically Stacked */}
            <div className="w-full flex flex-col gap-1">
                {items.map((item: any, i: number) => (
                    <div
                        key={item._id || i}
                        className="w-full h-[1000px] relative"
                    >
                        <Image
                            src={item.image?.url || "/product.png"}
                            alt="category"
                            fill
                            sizes="100vw"
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Thumbnail Navigation */}
            {/* 
            <div className="flex sm:flex-row md:flex-row lg:flex-col gap-1 lg:justify-end">
                {items.map((item: any, i: number) => (
                    <div
                        className={`w-10 h-14 relative gap-4 cursor-pointer transition-all duration-200 ${i === index ? 'ring-2 ring-black' : ''
                            }`}
                        key={item._id || i}
                        onClick={() => setIndex(i)}
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
            */}
        </div>
    )
});

ProductImages.displayName = 'ProductImages';

export default ProductImages;