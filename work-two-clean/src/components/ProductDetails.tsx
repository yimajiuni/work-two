"use client";
import { useState, useRef, useEffect } from "react";

interface ProductDetailsProps {
    productType?: string;
    // Future props for Shopify variants
    productDetails?: string;
    howToCare?: string;
    sizeGuide?: {
        measurements: {
            uk: string[];
            bust: string[];
            waist: string[];
            hips: string[];
        };
        helpEmail: string;
    };
}

const ProductDetails = ({
    productType,
    productDetails,
    howToCare,
    sizeGuide
}: ProductDetailsProps) => {
    const [activeTab, setActiveTab] = useState<'details' | 'care' | 'size' | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Click outside handler
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                // Check if the click is on a review-related element
                const target = event.target as Element;
                const isReviewElement = target.closest('[data-review-component]') ||
                    target.closest('[data-review-tabs]') ||
                    target.closest('.review-tabs') ||
                    target.closest('.review-button');

                // Only close if not clicking on review elements
                if (!isReviewElement) {
                    setActiveTab(null);
                }
            }
        };

        if (activeTab) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeTab]);

    // Default size guide data (can be replaced with Shopify variants later)
    const defaultSizeGuide = {
        measurements: {
            uk: ['4', '6', '8', '10', '12', '14', '16'],
            bust: ['77-80', '80-83', '84-87', '88-91', '92-95', '96-99', '100-103'],
            waist: ['58-61', '61-64', '65-68', '69-72', '73-76', '77-80', '81-84'],
            hips: ['86-89', '89-92', '93-97', '98-101', '101-104', '105-108', '109-112']
        },
        helpEmail: 'info@yima-international.com'
    };

    const sizeData = sizeGuide || defaultSizeGuide;

    const tabs = [
        { id: 'details', label: 'Product Details' },
        { id: 'care', label: 'How to Care' },
        { id: 'size', label: 'Size Guide' }
    ] as const;

    return (
        <div
            ref={containerRef}
            className="w-full max-w-2xl mx-auto"
        >
            {/* Tab Navigation */}
            <div className="flex gap-4 justify-center mb-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
                        className={`text-xs font-inter text-thin transition-all duration-300 pb-2 border-b ${activeTab === tab.id
                            ? 'border-black text-black'
                            : 'border-transparent text-gray-500 hover:text-black'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="">
                {/* Product Details Tab */}
                {activeTab === 'details' && (
                    <div className="space-y-4 border border-black shadow-lg p-4">
                        <h3 className="uppercase text-xs font-inter text-thin text-white bg-black px-4 py-2 -m-4 mb-4">Product Details</h3>
                        {productDetails ? (
                            <div className="text-left text-xs leading-relaxed text-gray-700">
                                {productDetails}
                            </div>
                        ) : (
                            <div className="items-center text-left text-xs leading-relaxed text-gray-700 space-y-3">
                                {productType && (
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <span className="font-medium">Type:</span>
                                            <p className="mt-1">{productType}</p>
                                        </div>
                                    </div>
                                )}
                                <p>
                                    Discover the perfect blend of comfort and style with our premium collection.
                                    Each piece is carefully crafted using the finest materials to ensure both
                                    durability and elegance.
                                </p>
                                <p>
                                    Our products are designed with attention to detail, featuring superior
                                    craftsmanship and timeless aesthetics that complement any wardrobe.
                                </p>
                                <p className="text-xs text-black font-medium uppercase">
                                    Made with: 100% Moroccan washable Silk.
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {/* How to Care Tab */}
                {activeTab === 'care' && (
                    <div className="space-y-4 border border-black shadow-lg p-4">
                        <h3 className="uppercase text-xs font-inter text-thin text-white bg-black px-4 py-2 -m-4 mb-4">How to Care</h3>
                        {howToCare ? (
                            <div className="text-xs leading-relaxed text-gray-700">
                                {howToCare}
                            </div>
                        ) : (
                            <div className="flex flex-row gap-1 justify-center items-start text-left text-xs leading-relaxed text-gray-700">
                                <div className="space-y-2">
                                    <h4 className="font-medium">Washing Instructions:</h4>
                                    <ul className="list-disc list-inside space-y-1 ml-2">
                                        <li>Hand wash in cold water or dry clean only</li>
                                        <li>Do not bleach or use harsh detergents</li>
                                        <li>Wash similar colors together</li>
                                        <li>Do not tumble dry</li>
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-medium">Care Tips:</h4>
                                    <ul className="list-disc list-inside space-y-1 ml-2">
                                        <li>Store in a cool, dry place</li>
                                        <li>Avoid direct sunlight to prevent fading</li>
                                        <li>Iron on low heat if necessary</li>
                                        <li>Handle with care to maintain shape</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Size Guide Tab */}
                {activeTab === 'size' && (
                    <div className="space-y-6 border border-black shadow-lg p-4">
                        <h3 className="uppercase text-xs font-inter text-thin text-white bg-black px-4 py-2 -m-4 mb-4">Size Guide</h3>

                        {/* Product Measurements */}
                        <div className="space-y-3">
                            <h4 className="text-xs font-medium text-black">Product Measurements</h4>
                            <p className="text-xs text-gray-600">International Size Comparison</p>
                        </div>

                        {/* How To Measure */}
                        <div className="space-y-3">
                            <h4 className="text-xs font-medium text-black">How To Measure</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-600">
                                <div>
                                    <span className="font-medium">Bust:</span> Measure around the fullest part of your bust
                                </div>
                                <div>
                                    <span className="font-medium">Waist:</span> Measure around your natural waistline
                                </div>
                                <div>
                                    <span className="font-medium">Hips:</span> Measure around the fullest part of your hips
                                </div>
                            </div>
                        </div>

                        {/* Size Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-2 font-medium">UK Size</th>
                                        {sizeData.measurements.uk.map((size, index) => (
                                            <th key={index} className="text-center py-2 font-medium">
                                                {size}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-2 font-medium">Bust</td>
                                        {sizeData.measurements.bust.map((measurement, index) => (
                                            <td key={index} className="text-center py-2">
                                                {measurement}
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-2 font-medium">Waist</td>
                                        {sizeData.measurements.waist.map((measurement, index) => (
                                            <td key={index} className="text-center py-2">
                                                {measurement}
                                            </td>
                                        ))}
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-2 font-medium">Hips</td>
                                        {sizeData.measurements.hips.map((measurement, index) => (
                                            <td key={index} className="text-center py-2">
                                                {measurement}
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Units */}
                        <div className="flex gap-4 text-xs text-gray-600">
                            <span className="font-medium">CM</span>
                            <span className="font-medium">INCHES</span>
                        </div>

                        {/* Contact Us */}
                        <div className="space-y-2 pt-4 border-t border-gray-200">
                            <h4 className="text-xs font-medium text-black">Contact Us</h4>
                            <p className="text-xs text-gray-600">
                                Need sizing advice or have questions?{' '}
                                <a
                                    href="/contact"
                                    className="underline text-black hover:underline"
                                >
                                    Contact us
                                </a>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetails; 