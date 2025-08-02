"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;

        if (name) {
            router.push(`/list?name=${name}`)
        }
    };

    return (
        <form className="flex items-center justify-between border-b border-black gap-2 pb-2 flex-1" onSubmit={handleSearch} >
            <input type="text" name="name" placeholder="SEARCH" className="flex-1 bg-transparent outline-none placeholder:text-xs lg:placeholder:text-xs placeholder:text-black placeholder:font-thin" />
            <button className="cursor-pointer">
                <Image src="/search.png" alt="search" width={16} height={16} />
            </button>
        </form >
    )
}

export default SearchBar;