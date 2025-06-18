import React from "react";

function Hero() {
  return (
    <div className="w-full h-[56vh] bg-img">
      <div className="container h-full px-4 lg:px-30 mx-auto items-center flex">
        <div className="w-full md:w-2/3 lg:w-1/3 md:ps-4 " data-aos="zoom-in-down" data-aos-duration="2000">
          <h1 className="text-5xl md:text-6xl text-white font-bold">
            Shopping and department store.
          </h1>
          <p className="text-gray-300 mt-4 text-xl">
            shopping is a process of buying goods or services from a seller to a
            customer.
          </p>
          <button className="px-10 py-4 mt-4 bg-blue-500 hover:bg-blue-400 text-white rounded-4xl text-2xl cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
