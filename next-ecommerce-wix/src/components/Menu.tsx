"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <Image src="/menu.png" alt="menu" width={28} height={28} className="cursor-pointer" onClick={() => setIsOpen((prev) => !prev)} />
            {isOpen && (
                <div className="fixed inset-0 bg-black text-white top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                    <Link href="/">Home</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Logout</Link>
                    <Link href="/">Cart(1)</Link>
                </div>
            )
            }
        </div>
    )
}

export default Menu;