import Link from "next/link";
import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";

const CategoryList = async () => {
    try {
        const wixClient = await wixClientServer();
        console.log("Fetching categories...");

        const cats = await wixClient.collections.queryCollections().find();
        console.log("Categories found:", cats.items?.length);
        console.log("Categories:", cats.items);

        if (!cats.items || cats.items.length === 0) {
            return <div>No categories found</div>;
        }

        return (
            <div className="px-4 overflow-x-scroll scrollbar-hide">
                <div className="flex gap-4 md:gap-8">
                    {cats.items.map((item) => (
                        <Link href={`/list?cat=${item.slug}`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6" key={item._id}>
                            <div className="relative bg-slate-100 w-full h-96">
                                <Image
                                    src={item.media?.items?.[0]?.image?.url || "./category.png"}
                                    alt="category"
                                    fill
                                    sizes="25vw"
                                    className="object-cover"
                                />
                                <h1 className="text-cl mt-8 font-light tracking-wide">{item.name}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error fetching categories:", error);
        return <div>Error fetching categories</div>;
    }
}

export default CategoryList;