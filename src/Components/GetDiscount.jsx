import React from "react";
import iphonePink from "../assets/product/ipink.png";
import headPhone from "../assets/product/heandphone.png";
import macBook from "../assets/product/mac.png";
import iWatch from "../assets/product/watch.png";

function GetDiscount() {
  return (
    <div className="w-full mt-3 lg:mt-14">
      <div className="container px-4 lg:px-30 mx-auto">
        <h1 className="text-3xl font-bold ">Get up ot 50% off</h1>

        <div className="flex flex-wrap justify-between mt-4">
          <div className="my-3 w-full md:w-[48.5%] lg:w-[24%] bg-yellow-100 rounded-xl overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
            <div className="p-8">
              <p className="text-3xl font-bold mb-3">Save</p>
              <p className="text-5xl font-bold text-yellow-400">
                <sup>$</sup>100
              </p>
              <p className="text-xl mt-3">Explore Our Furnishing Range</p>
            </div>
            <div className="bg-yellow-400 w-full h-[260px] overflow-hidden justify-items-center content-center">
              <img
                src={iWatch}
                alt=""
                className=" h-[90%] object-cover hover:scale-110 duration-300 cursor-pointer"
              />
            </div>
          </div>

          <div className="my-3 w-full md:w-[48.5%] lg:w-[24%] bg-pink-100 rounded-xl overflow-hidden" data-aos="fade-up" data-aos-duration="1500">
            <div className="p-8">
              <p className="text-3xl font-bold mb-3">Save</p>
              <p className="text-5xl font-bold text-pink-400">
                <sup>$</sup>100
              </p>
              <p className="text-xl mt-3">Explore Our Furnishing Range</p>
            </div>
            <div className="bg-pink-400 w-full h-[260px] overflow-hidden justify-items-center content-center">
              <img
                src={iphonePink}
                alt=""
                className="w-full h-full object-cover hover:scale-110 duration-300 cursor-pointer"
              />
            </div>
          </div>

          <div className="my-3 w-full md:w-[48.5%] lg:w-[24%] bg-purple-100 rounded-xl overflow-hidden" data-aos="fade-up" data-aos-duration="2000">
            <div className="p-8">
              <p className="text-3xl font-bold mb-3">Save</p>
              <p className="text-5xl font-bold text-purple-400">
                <sup>$</sup>100
              </p>
              <p className="text-xl mt-3">Explore Our Furnishing Range</p>
            </div>
            <div className="bg-purple-400 w-full h-[260px] overflow-hidden justify-items-center content-center">
              <img
                src={headPhone}
                alt=""
                className="h-[90%] object-cover hover:scale-110 duration-300 cursor-pointer"
              />
            </div>
          </div>

          <div className="my-3 w-full md:w-[48.5%] lg:w-[24%] bg-blue-100 rounded-xl overflow-hidden" data-aos="fade-up" data-aos-duration="2500">
            <div className="p-8">
              <p className="text-3xl font-bold mb-3">Save</p>
              <p className="text-5xl font-bold text-blue-400">
                <sup>$</sup>100
              </p>
              <p className="text-xl mt-3">Explore Our Furnishing Range</p>
            </div>
            <div className="bg-blue-400 w-full h-[260px] overflow-hidden justify-items-center content-center">
              <img
                src={macBook}
                alt=""
                className="h-76%] object-cover hover:scale-110 duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetDiscount;
