"use client";
import { useState } from "react";
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

    return (
        <>
            {/* FILTER AND PAGINATION ROW */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full my-8 gap-4 sm:gap-0">
                <CollectionFilter />
                <div className="flex-shrink-0 sm:ml-4 w-full sm:w-auto flex justify-end sm:justify-start">
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

            {/* PRODUCT LIST*/}
            <CollectionList
                collectionHandle={collectionHandle}
                searchParams={searchParams}
                limit={limit}
                onPaginationDataChange={setPaginationData}
            />
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