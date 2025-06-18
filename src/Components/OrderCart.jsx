import React from "react";
import categories from "../data/Categories";

function OrderCart() {
  return (
    <div className="w-full mt-3 lg:mt-14">
      <div className="container px-4 lg:px-30 mx-auto">
        <h1 className="text-3xl font-bold mt-16">Shop Our Top Categories</h1>
        <div className="flex flex-wrap lg:justify-between gap-2 mt-10" data-aos="fade-up" data-aos-duration="2500">
          {categories.map((item) => {
            return (
              <div key={item.id} className="w-[48.5%] md:w-[32.5%] lg:w-[16%] h-[230px] bg-blue-50 rounded-xl overflow-hidden relative">
                <h1 className="absolute z-3 left-1/2 transform -translate-x-1/2 top-3 font-bold text-2xl text-white text-center w-full" >{item.title}</h1>
                <img className=" object-cover hover:scale-110 duration-300 cursor-pointer" src={item.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OrderCart;
