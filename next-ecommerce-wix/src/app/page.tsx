//"use client";

import Slider from "@/components/Slider";
import ProductList from "@/components/ProductList";
import CategoryList from "@/components/CategoryList";
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton";

const HomePage = async () => {
  // Server-side logging
  const categoryId = process.env.NEXT_PUBLIC_FEATURED_CATEGORY_ID;
  console.log("Server-side ENV value:", categoryId);

  return (
    <div className=''>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList categoryId={process.env.NEXT_PUBLIC_FEATURED_CATEGORY_ID!}
            limit={4} searchParams={{}} />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">Categories</h1>
        <Suspense fallback={<Skeleton />}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList categoryId={process.env.NEXT_PUBLIC_FEATURED_CATEGORY_ID!} limit={4} searchParams={{}} />
      </div>
    </div>
  )
}

export default HomePage