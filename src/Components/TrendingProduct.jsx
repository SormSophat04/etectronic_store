import React from 'react';

const TrendingProduct = () => {

    return (
        <div className="w-full mt-3 lg:mt-14">
            <div className={"container px-4 lg:px-30 mx-auto"}>
                <h1 className={"text-3xl font-bold mt-10"}>Trending Product For You!</h1>
                <div className={"overflow-x-auto mb-5 flex flex-wrap justify-between"}>
                    <div className="w-full md:w-[49%] shrink-0 mt-5 bg-gray-100 rounded-2xl"  data-aos="fade-up" data-aos-duration="1000">
                        <div className="w-full h-[210px] md:h-[215px] lg:h-[330px] rounded-t-2xl overflow-hidden relative bg-blue-400 content-center justify-items-center">
                            <img src={"https://i.pinimg.com/736x/3f/fb/1d/3ffb1de20180d684837495290607f244.jpg"} alt={"Best Deal"} />
                        </div>
                        <div className="py-5 ps-10 flex justify-between">
                            <div>
                                <p className="text-2xl line-clamp-1 font-bold">
                                    Popular Product
                                </p>
                                <p className="line-clamp-2 my-2">
                                    Delivery with in 24 hours
                                </p>

                                <button className="px-10 py-3 rounded-3xl cursor-pointer bg-blue-400 hover:bg-blue-400 hover:text-blue-200 duration-300 text-white text-xl font-bold mt-3">
                                    Shop Now
                                </button>
                            </div>
                            <div>
                                <p className="text-xl font-bold"></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[49%] shrink-0 mt-5 bg-gray-100 rounded-2xl" data-aos="fade-up" data-aos-duration="2000">
                        <div className="w-full h-[210px] md:h-[215px] lg:h-[330px] rounded-t-2xl overflow-hidden relative bg-blue-400 content-center justify-items-center">
                            <img src={"https://i.pinimg.com/736x/ee/40/8b/ee408b009921ba8643718ba8ca387b77.jpg"} alt={"Best Deal"} />
                        </div>
                        <div className="py-5 ps-10 flex justify-between">
                            <div>
                                <p className="text-2xl line-clamp-1 font-bold">
                                    For Students
                                </p>
                                <p className="line-clamp-2 my-2">
                                    Delivery with in 24 hours
                                </p>

                                <button className="px-10 py-3 rounded-3xl cursor-pointer bg-blue-400 hover:bg-blue-400 hover:text-blue-200 duration-300 text-white text-xl font-bold mt-3">
                                    Shop Now
                                </button>
                            </div>
                            <div>
                                <p className="text-xl font-bold"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingProduct;