'use client';

import TopCategoryList from '@/components/TopCategoryList';
import Image from 'next/image';

const AboutPage = () => {
    return (
        <div className="min-h-screen px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-0 md:py-8">
            <div className="max-w-5xl mx-auto pt-0 md:pt-12">
                {/* Top Row */}
                <div className="grid grid-cols-5">
                    {/* Animated white square that bounces around */}
                    <div className="absolute inset-0 overflow-hidden z-10">
                        <div className="absolute w-48 h-64 bg-white animate-bounce-corners"></div>
                    </div>

                    {/* Left Quarter - 3 columns */}
                    {/* Far Left Column - Single */}
                    <div className="col-span-1 flex items-center justify-center mr-1">
                        <div className="w-full h-full flex items-center justify-end relative">
                            <Image
                                src="/about-1.png"
                                alt="About 1"
                                width={200}
                                height={300}
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="col-span-2 relative h-full justify-center">
                        {/* Centered white square with Japanese text */}
                        <div className="absolute inset-0 flex items-end md:items-center justify-end md:justify-center z-20">
                            <div className="bg-white pr-1 pl-2 pt-2 pb-2 md:p-0">
                                <div className="text-center">
                                    <div className="text-4xl font-ming whitespace-nowrap">”自然に還る</div>
                                    <div className="text-2xl font-ming">信頼とマニフェ</div>
                                    <div className="text-2xl font-ming">ストを掲げて。”</div>
                                </div>
                            </div>
                        </div>


                        {/* Top Left - 2 columns */}
                        <div className="grid grid-cols-2 justify-start mr-1 gap-1 min-h-[400px]">


                            <div className="grid grid-rows-2 gap-1">
                                <div className="flex items-end relative">
                                    <Image
                                        src="/about-2.png"
                                        alt="About 2"
                                        width={200}
                                        height={300}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex items-start relative">
                                    <Image
                                        src="/about-3.png"
                                        alt="About 3"
                                        width={200}
                                        height={300}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-rows-2 gap-1">
                                <div className="flex items-end justify-start relative">
                                    <Image
                                        src="/about-4.png"
                                        alt="About 4"
                                        width={200}
                                        height={300}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex items-start justify-start relative">
                                    <Image
                                        src="/about-5.png"
                                        alt="About 5"
                                        width={200}
                                        height={300}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Right Quarter - 2 rows */}
                    <div className="col-span-2">
                        <div className="grid grid-rows-2 h-full gap-1">
                            {/* Top Row - Picture 6 */}
                            <div className="flex items-end justify-start relative">
                                <Image
                                    src="/about-6.png"
                                    alt="About 6"
                                    width={300}
                                    height={200}
                                    className="object-cover"
                                />
                            </div>

                            {/* Bottom Row - Text with border and scroll */}
                            <div className="border border-black rounded-lg overflow-x-auto about-scrollbar max-h-[210px] z-20">
                                <div className="w-[500px]">
                                    <p className="text-sm font-bold mb-4 uppercase ">
                                        Return to nature now. With trust and manifesto.
                                    </p>
                                    <p className="text-sm font-thin leading-relaxed">
                                        We aim our product to achieve the concept.
                                        Yima is more than an apparel brand — it's a call to reconnect.
                                        Born from the belief that nature is not something we visit,
                                        but something we are, Yima weaves this philosophy into every thread.
                                        We create clothing that honors simplicity, earth-conscious
                                        design into infinite avant-garde that cultivated
                                        and inspired by our day to day, quiet strength of intentional living.
                                        Every piece reflects our manifesto; To walk gently and to choose consciously.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-5 gap-1">
                    {/* Left Column - History Text */}
                    <div className="col-span-3 border border-black rounded-md overflow-x-auto about-scrollbar h-[350px] md:h-[380px]">
                        <div className="w-[800px]">
                            <div>
                                <h2 className="text-sm font-bold mb-4 uppercase">Our History</h2>
                                <p className="text-sm font-thin leading-relaxed mb-4">
                                    Yima was born in the early days of quiet reflection.
                                    In 2020, amidst a world caught in noise and speed, a small circle of artists, designers, and thinkers stepped away. They left the cities behind — not to escape, but to listen. In the rhythm of the wild, the silence of mountains, and the warmth of hand-woven fabrics, they rediscovered something essential: the beauty of living simply, slowly, and truthfully.
                                </p>
                                <h2 className="text-sm font-bold mb-4 uppercase">
                                    Universality and its endless revolve</h2>
                                <p className="text-sm font-thin leading-relaxed mb-4">
                                    What started as a personal manifesto turned into wearable philosophy. Yima began with just a few pieces: hand-dyed garments made from natural fibers, shaped by minimal design and maximum intention. Each item was an act of respect — for the earth, for the maker, and for the wearer. Over time, YIMA grew into a quiet movement. Not fast fashion, but found fashion — designed to last, to soften with time, and to tell your story.<br />
                                    Today, Yima stands as a reminder: We are not separate from nature. We are part of it. And every return is a beginning.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Japanese Character */}
                    <div className="relative col-span-2">
                        <div className="bg-black w-full h-[350px] md:h-[380px] flex items-center justify-center relative overflow-hidden">
                            {/* Animated overlay black square */}
                            <div className="absolute w-[100px] md:w-[150px] h-[110px] md:h-[185px] bg-black animate-bounce-corners"></div>

                            <div className="text-white font-ming text-[180px] md:text-[300px] leading-none overflow-hidden">祭</div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="pt-8">
                <h1 className="text-2xl font-bodoni text-center mt-8 mb-8">Go Discover Our Collections</h1>
                <TopCategoryList />
            </div>
        </div >
    );
};

export default AboutPage; 