import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="px-4 py-4 text-sm">


            <div className="font-inter text-thin text-xs border-black border-t pb-8"></div>
            {/* TOP */}
            <div className="flex flex-col md:flex-row justify-between gap-24">
                {/* LEFT */}
                <div className="font-times-new-roman w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4">
                    <Link href="/">
                        <div className="text-3xl tracking-wide font-times-new-roman-italic">Yima</div>
                    </Link>
                    <p className="font-times-new-roman-italic text-xl md:text-lg w-full">
                        2000 Wobbly St. Winding plaza <br />
                        Willow brook, CA 90210, <br />
                        United States
                    </p>
                    <span className="text-lg font-times-new-roman-italic">info@yima.com</span>
                    <span className="text-sm font-times-new-roman-italic">+81 (234) 567 890</span>
                    <div className="flex gap-4">
                        <Image src="/instagram.png" alt="" width={16} height={16} />
                        <Image src="/youtube.png" alt="" width={16} height={16} />
                        <Image src="/pinterest.png" alt="" width={16} height={16} />
                    </div>
                </div>
                {/* CENTER */}
                <div className="font-times-new-roman block md:hidden lg:flex justify-between w-1/2">
                    <div className="flex flex-col gap-6 pb-4 md:pb-0">
                        <h1 className="font-medium font-times-new-roman-italic text-2xl md:text-lg">Company</h1>
                        <div className="flex flex-col gap-4">
                            <Link href="">Privacy Policy</Link>
                            <Link href="">Terms and Conditions</Link>
                            <Link href="">Careers</Link>
                            <Link href="">Blog</Link>
                            <Link href="">Store Locations</Link>
                        </div>
                    </div>
                    <div className="block md:hidden border-black border-t pb-2"></div>
                    <div className="flex flex-col gap-6 pb-4 md:pb-0">
                        <h1 className="font-medium font-times-new-roman-italic text-2xl md:text-lg">Shop</h1>
                        <div className="flex flex-col gap-4">
                            <Link href="">Shop All</Link>
                            <Link href="">New Arrivals</Link>
                            <Link href="">Bestsellers</Link>
                            <Link href="">Edition</Link>
                            <Link href="">Sale</Link>
                        </div>
                    </div>
                    <div className="block md:hidden border-black border-t pb-2"></div>
                    <div className="flex flex-col gap-6 pb-4 md:pb-0">
                        <h1 className="font-medium font-times-new-roman-italic text-2xl md:text-lg">Help</h1>
                        <div className="flex flex-col gap-4">
                            <Link href="">My Account</Link>
                            <Link href="">Contact Us</Link>
                            <Link href="">FAQ</Link>
                            <Link href="">Delivery & shipping</Link>
                            <Link href="">Returns</Link>
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <h1 className="font-times-new-roman-italic text-2xl w-2/3 md:w-full leading-relaxed">
                        Subscribe our Newsletter to get the latest update of Yima</h1>

                    <div className="flex">
                        <input
                            type="text"
                            placeholder="ENTER YOUR EMAIL ADDRESS"
                            className="border-b border-black px-2 py-3 w-2/3 placeholder:font-inter placeholder:text-thin placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                        <button className="font-inter text-thin text-xs w-1/4 bg-black text-white">SIGN UP</button>
                    </div>

                </div>
            </div>
            {/*MIDDLE ROW*/}
            <div className="font-inter text-thin text-xs flex flex-col md:flex-row items-center justify-between gap-2 w-3/4 mx-auto mt-16 pt-2">
                {/*region*/}
                <div className="flex gap-2">
                    <div className="">
                        <span className="text-gray-500 mr-4">Language:</span>
                        <select name="" id="" className="justify-start border border-gray-300 px-2 py-1">
                            <option value="en">English</option>
                            <option value="jp">Japanese</option>
                        </select>
                    </div>
                    <div className="">
                        <span className="text-gray-500 mr-4">Currency:</span>
                        <select name="" id="" className="border border-gray-300 px-2 py-1">
                            <option value="usd">$ USD</option>
                            <option value="jpy">¥ JPY</option>
                        </select>
                    </div>
                </div>
                {/*payment methods*/}
                <div className="flex gap-2">
                    <Image src="/amex.png" alt="American Express" width={40} height={20} className="grayscale" style={{ objectFit: "contain" }} />
                    <Image src="/visa.png" alt="Visa" width={40} height={20} className="grayscale" style={{ objectFit: "contain" }} />
                    <Image src="/mastercard.png" alt="Mastercard" width={40} height={20} className="grayscale" style={{ objectFit: "contain" }} />
                    <Image src="/google-pay.png" alt="Google Pay" width={40} height={20} className="grayscale" style={{ objectFit: "contain" }} />
                    <Image src="/paypal.png" alt="PayPal" width={50} height={40} className="grayscale" style={{ objectFit: "contain" }} />

                    {/*<Image src="/apple-pay.png" alt="Apple Pay" width={40} height={20} className="grayscale" style={{ objectFit: "contain" }} />
                        <Image src="/amazon-pay.png" alt="Amazon Pay" width={30} height={15} className="grayscale" style={{ objectFit: "contain" }} />
                        <Image src="/klarna.png" alt="Klarna" width={40} height={20} className="grayscale" style={{ objectFit: "contain" }} />
                        */}
                </div>

            </div>

            {/* BOTTOM ROW*/}
            <div className="font-inter text-thin text-xs flex flex-col md:flex-row items-center justify-center gap-8 border-black border-t pt-4 mt-16 md:mt-0">
                <div className="flex flex-col gap-8 md:gap-24 lg:gap-32 justify-center items-center md:flex-row">

                    {/*copyright*/}
                    <div className="uppercase">Copyright © 2025 Yimajiuni All rights reserved.</div>

                </div>
            </div>
        </div >
    );
};

export default Footer;