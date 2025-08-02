"use client";

import DOMPurify from "isomorphic-dompurify";

const ProductDescription = ({ description }: { description: string }) => {
    return (
        <div
            className="text-sm text-gray-500"
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(description || "")
            }}
        />
    );
};

export default ProductDescription; 