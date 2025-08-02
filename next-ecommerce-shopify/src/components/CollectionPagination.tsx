"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface PaginationProps {
    currentPage: number;
    hasPrev: boolean;
    hasNext: boolean;
    totalProducts: number;
    productsPerPage: number;
    totalPages: number;
}

const Pagination = ({ currentPage, hasPrev, hasNext, totalProducts, productsPerPage, totalPages }: PaginationProps) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        replace(`${pathname}?${params.toString()}`);
    };

    // Calculate product range
    const startProduct = (currentPage - 1) * productsPerPage + 1;
    const endProduct = Math.min(currentPage * productsPerPage, totalProducts);

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            // Show all pages if total is small
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Show pages around current page
            let start = Math.max(1, currentPage - 2);
            let end = Math.min(totalPages, currentPage + 2);

            // Adjust if we're near the edges
            if (currentPage <= 3) {
                end = Math.min(totalPages, 5);
            } else if (currentPage >= totalPages - 2) {
                start = Math.max(1, totalPages - 4);
            }

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    // Don't show pagination if there are no products or only one page
    if (totalProducts === 0 || totalPages <= 1) {
        return null;
    }

    return (
        <div className="bg-white w-full h-8 flex gap-4 items-end">
            {/* Pagination controls */}
            <div className="flex items-center gap-2">


                {/* Page numbers */}
                <div className="flex gap-1">
                    {pageNumbers.map((pageNum) => (
                        <button
                            key={pageNum}
                            className={`px-1 py-1 text-xs font-inter text-thin cursor-pointer ${pageNum === currentPage
                                ? 'border-b border-black text-black'
                                : 'text-black'
                                }`}
                            onClick={() => createPageUrl(pageNum)}
                        >
                            {pageNum}
                        </button>
                    ))}
                </div>

            </div>
            {/* Product count information */}
            <div className="px-2 py-1 text-xs font-inter text-thin text-black">
                Showing {startProduct}-{endProduct} of {totalProducts} products
            </div>


        </div>
    );
};

export default Pagination;