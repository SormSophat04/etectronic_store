import React from "react";
import categories from "../data/Categories";

function OrderCart() {
  return (
    <div className="w-full mt-3 lg:mt-14">
      <div className="container px-4 lg:px-30 mx-auto">
        <h1 className="text-3xl font-bold ">Shop Our Top Categories</h1>
        <div className="flex flex-wrap gap-2 justify-between mt-4">
          {categories.map((item) => {
            return (
              <div key={item} className="w-[48.5%] md:w-[32%] lg:w-[16%] h-[230px] bg-blue-100 rounded-xl overflow-hidden relative">
                <h1 className="absolute z-3 left-1/2 transform -translate-x-1/2 top-3 font-bold text-2xl text-white" >{item.title}</h1>
                <img className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer" src={item.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OrderCart;
