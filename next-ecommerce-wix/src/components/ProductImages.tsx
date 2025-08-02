"use client"
import Image from "next/image";
import { useState } from "react";

// const images = [
//     {
//         id: 1,
//         url: "https://images.pexels.com/photos/1834501/pexels-photo-1834501.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
//     },
//     {
//         id: 2,
//         url: "https://images.pexels.com/photos/1834501/pexels-photo-1834501.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
//     },
//     {
//         id: 3,
//         url: "https://images.pexels.com/photos/1834501/pexels-photo-1834501.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
//     },
//     {
//         id: 4,
//         url: "https://images.pexels.com/photos/1834501/pexels-photo-1834501.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
//     }
// ]
const ProductImages = ({ items }: { items: any }) => {
    const [index, setIndex] = useState(0);

    // Check if items exist and have content
    if (!items || items.length === 0) {
        return (
            <div>
                <div className="h-[500px] relative bg-gray-200 rounded-md flex items-center justify-center">
                    <p className="text-gray-500">No images available</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="h-[500px] relative">
                <Image
                    src={items[index].image?.url || "/product.png"}
                    alt="category"
                    fill
                    sizes="50vw"
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex gap-4 justify-between mt-8">
                {items.map((item: any, i: number) => (
                    <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
                        key={item._id || i}
                        onClick={() => setIndex(i)}
                    >
                        <Image
                            src={item.image?.url || "/product.png"}
                            alt="category"
                            fill
                            sizes="30vw"
                            className="object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div >
    )
}

export default ProductImages;