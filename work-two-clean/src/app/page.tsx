//"use client";

import TopMovie from "@/components/TopMovie";
import TopCategoryList from "@/components/TopCategoryList";
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton";
import NewArrivals from "@/components/NewArrivals";
import BestSellers from "@/components/BestSellers";
import PromotionalBanner from "@/components/SalesBanner";
import NewsletterDialog from "@/components/NewsletterDialog";
import SpecialBanner from "@/components/SpecialBanner";
import SeasonalSection from "@/components/SeasonalSection";

const HomePage = async () => {
  // Server-side logging
  const categoryId = process.env.NEXT_PUBLIC_FEATURED_CATEGORY_ID;
  console.log("Server-side ENV value:", categoryId);

  return (
    <div className=''>
      <TopMovie />
      {/*<Slider /> */}
      <div className="mt-8">
        <h1 className="text-2xl font-bodoni text-center">New Arrivals</h1>
        <Suspense fallback={<Skeleton />}>
          <NewArrivals />
        </Suspense>
      </div>
      <div className="mt-1">
        <SpecialBanner />
      </div>
      <div className="mt-1">
        <Suspense fallback={<Skeleton />}>
          <TopCategoryList />
        </Suspense>
      </div>
      <div className="mt-1">
        <SeasonalSection />
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-bodoni text-center">Best Sellers</h1>
        <BestSellers />
      </div>
      <PromotionalBanner />
      <NewsletterDialog />
    </div>
  )
}

export default HomePage