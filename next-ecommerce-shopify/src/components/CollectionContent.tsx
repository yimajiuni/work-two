"use client";
import { useState, useEffect, useRef } from "react";
import CollectionFilter from "@/components/CollectionFilter";
import CollectionList from "@/components/CollectionList";
import CollectionPagination from "@/components/CollectionPagination";
import RecentlyChecked from "@/components/RecentlyChecked";
import TopCategoryList from "@/components/TopCategoryList";
import { PaginationData } from "@/lib/collectionUtils";

interface CollectionContentProps {
    collectionHandle: string;
    searchParams: any;
    limit: number;
}

const CollectionContent = ({ collectionHandle, searchParams, limit }: CollectionContentProps) => {
    const [paginationData, setPaginationData] = useState<PaginationData>({
        totalProducts: 0,
        currentPage: 1,
        hasPrev: false,
        hasNext: false,
        totalPages: 0
    });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const [filterHeight, setFilterHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const filterRef = useRef<HTMLDivElement>(null);

    // Measure content and filter heights
    const updateHeights = () => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.offsetHeight);
        }
        if (filterRef.current) {
            setFilterHeight(filterRef.current.offsetHeight);
        }
    };

    // Update heights on mount and when pagination data changes
    useEffect(() => {
        updateHeights();
        // Add resize listener
        window.addEventListener('resize', updateHeights);
        return () => window.removeEventListener('resize', updateHeights);
    }, [paginationData]);

    /**
     * Determines the appropriate spacer height between filter and pagination based on multiple factors
     * This function creates dynamic spacing that adapts to the current page layout and content
     * 
     * @returns {string} Tailwind CSS margin classes for the spacer
     */
    const getSpacerHeight = () => {
        // If no dropdown is open, no spacer is needed
        if (!isDropdownOpen) return 'mb-0';

        // Check if pagination exists (more than 1 page means pagination is shown)
        const hasPagination = paginationData.totalPages > 1;

        // STEP 1: Set base spacer based on content height
        // This determines initial spacing based on how much product content is displayed
        let baseSpacer = 'mb-[10px] sm:mb-4'; // Default for medium content (300-600px)

        if (contentHeight < 70) {
            baseSpacer = 'mb-[20px] sm:mb-8'; // Small content = less spacing needed
        } else if (contentHeight > 100) {
            baseSpacer = 'mb-[100px] sm:mb-14'; // Large content = more spacing needed
        }

        // STEP 2: Adjust based on filter height
        // If the filter section is tall (dropdown open), reduce spacer since filter takes up more space
        if (filterHeight > 100) {
            // Filter is tall, so reduce spacer to prevent too much empty space
            if (baseSpacer.includes('mb-[100px]')) {
                baseSpacer = 'mb-[20px] sm:mb-2'; // Reduce desktop spacing
            } else if (baseSpacer.includes('mb-[20px]')) {
                baseSpacer = 'mb-[0px] sm:mb-0'; // Reduce both mobile and desktop
            } else {
                baseSpacer = 'mb-[20px] sm:mb-0'; // Reduce for large content
            }
        }

        // STEP 3: Adjust based on pagination existence
        // If no pagination exists, reduce spacer since there's less content to push down
        if (!hasPagination) {
            // No pagination means less content, so reduce spacer
            if (baseSpacer.includes('mb-[40px]')) {
                baseSpacer = 'mb-[30px] sm:mb-2'; // Minimal spacing for small content
            } else if (baseSpacer.includes('mb-[60px]')) {
                baseSpacer = 'mb-[45px] sm:mb-4'; // Reduced spacing for medium content
            } else if (baseSpacer.includes('mb-[80px]')) {
                baseSpacer = 'mb-[60px] sm:mb-6'; // Reduced spacing for large content
            } else {
                baseSpacer = 'mb-[80px] sm:mb-7'; // Maintain spacing for very large content
            }
        }

        return baseSpacer;
    };


    return (
        <>
            {/* FILTER AND PAGINATION ROW - CSS STICKY */}
            <div className="sticky top-20 z-20 bg-white py-4 px-4 -mx-4">
                <div className="relative w-full">
                    <div className="flex-1" ref={filterRef}>
                        <CollectionFilter onDropdownStateChange={setIsDropdownOpen} />
                    </div>

                    {/* Spacer for mobile - only when dropdown is open */}
                    <div className={`transition-all duration-300 ${getSpacerHeight()}`}></div>
                    <div className="z-10 sm:z-30 absolute top-15 sm:top-0 right-0 flex-shrink-0 w-full sm:w-auto flex justify-start sm:justify-end">
                        <CollectionPagination
                            currentPage={paginationData.currentPage}
                            totalProducts={paginationData.totalProducts}
                            productsPerPage={limit}
                            totalPages={paginationData.totalPages}
                            hasPrev={paginationData.hasPrev}
                            hasNext={paginationData.hasNext}
                        />
                    </div>

                </div>
            </div>

            {/* PRODUCT LIST*/}
            <div ref={contentRef}>
                <CollectionList
                    collectionHandle={collectionHandle}
                    searchParams={searchParams}
                    limit={limit}
                    onPaginationDataChange={setPaginationData}
                />
            </div>
            {/* FILTER BOTTOM ROW */}
            <div className="flex items-center justify-end w-full my-8">
                <div className="flex-shrink-0 w-full sm:w-auto">
                    <CollectionPagination
                        currentPage={paginationData.currentPage}
                        totalProducts={paginationData.totalProducts}
                        productsPerPage={limit}
                        totalPages={paginationData.totalPages}
                        hasPrev={paginationData.hasPrev}
                        hasNext={paginationData.hasNext}
                    />
                </div>
            </div>
            {/* Recently Checked Products and Category List */}
            <div className="relative mt-8">
                <RecentlyChecked limit={4} />
                <div className="mt-1">
                    <TopCategoryList />
                </div>
            </div>

        </>
    );
};

export default CollectionContent; 