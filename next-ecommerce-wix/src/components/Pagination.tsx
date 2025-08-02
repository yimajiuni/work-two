"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Pagination = ({ currentPage, hasPrev, hasNext }: { currentPage: number, hasPrev: boolean, hasNext: boolean }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        replace(`${pathname}?${params.toString()}`);

    }

    return (
        <div className="gap-4 justify-between mt-12 w-full flex">
            <button
                className="bg-highlight text-white p-2 rounded-md text-sm w-24 cursor-pointer disabled:disabled:cursor-not-allowed  disabled:bg-pink-200"
                disabled={!hasPrev}
                onClick={() => createPageUrl(currentPage - 1)}
            >
                Previous
            </button>
            <button
                className="bg-highlight text-white p-2 rounded-md text-sm w-24 cursor-pointer disabled:disabled:cursor-not-allowed  disabled:bg-pink-200"
                disabled={!hasNext}
                onClick={() => createPageUrl(currentPage + 1)}
            >Next
            </button>
        </div>
    )
}

export default Pagination;