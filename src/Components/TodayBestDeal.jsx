import React, {useContext} from 'react';
import {IoMdHeartEmpty, IoMdStar} from "react-icons/io";
import ProductContext from "../store/ProductContext.jsx";
import BtnCatogory  from "../data/BtnCatogory.jsx";

const TodayBestDeal = () => {
    const { items, isLoading } = useContext(ProductContext);

    return (
        <div className="w-full mt-3 lg:mt-14">
            <div className={"container px-4 lg:px-30 mx-auto"}>
                <h1 className={"text-3xl font-bold mt-5"}>Today Best Deals for You!</h1>
                <div>
                    {
                        BtnCatogory.map((item, i)=> {
                            return (
                                <button key={i} className="px-6 py-2 rounded-3xl cursor-pointer border-2 text-black border-gray-300 hover:bg-blue-400 hover:text-white duration-300 me-4 mt-5">
                                    {item.name}
                                </button>
                            );
                        })
                    }

                </div>
                <div className={"overflow-x-auto mb-5"}>
                    <div className={"flex flex-wrap gap-5"}>
                        {isLoading ? (
                            <div className="w-[149%] md:w-[48.5%] shrink-0 animate-pulse">
                                <div className="w-full h-[358px] bg-gray-300 rounded-lg overflow-hidden relative">
                                    <div className="btn btn-circle absolute end-3 top-3 bg-gray-400"></div>
                                </div>
                                <div className="py-5 flex justify-between">
                                    <div className="flex">
                                        <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
                                        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                                        <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
                                        <div className="h-5 bg-gray-300 rounded w-1/3 mb-3"></div>
                                        <div className="h-10 bg-gray-300 rounded-xl w-32"></div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="h-6 bg-gray-300 rounded w-16"></div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            items.map((v, i) => {
                                return (
                                    <div key={i} className="w-[47%] md:w-[48.5%] lg:w-[23.8%] shrink-0 mt-6">
                                        <div className="w-full h-[170px] md:h-[320px] lg:h-[300px] rounded-2xl overflow-hidden relative bg-gray-100  content-center justify-items-center" data-aos="zoom-in" data-aos-duration="2000" >
                                            <div className="btn btn-circle absolute end-3 top-3 bg-white">
                                                <button>
                                                    <IoMdHeartEmpty className="text-2xl" />
                                                </button>
                                            </div>
                                            <img src={v.image} alt={"Best Deal"} />
                                        </div>
                                        <div className="py-5 flex justify-between">
                                            <div>
                                                <p className="text-xl line-clamp-1 font-bold">
                                                    {v.name}
                                                </p>
                                                <p className="line-clamp-2 my-2 text-gray-600">
                                                    {v.des}
                                                </p>
                                                <p className=" text-xl flex">
                                                    {v.rate} <IoMdStar className="text-2xl text-yellow-300" />
                                                </p>
                                                <button className="px-6 py-2 rounded-3xl cursor-pointer border text-black border-blue-500 hover:bg-blue-400 hover:text-white duration-300 mt-3">
                                                    Add Cart
                                                </button>
                                            </div>
                                            <div>
                                                <p className="text-xl font-bold">${v.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodayBestDeal;