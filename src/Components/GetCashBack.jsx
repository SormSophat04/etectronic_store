import React from 'react';
import card from '../assets/images/creditCard.png';

const GetCashBack = () => {
    return (
        <div className="w-full h-[30vh] bg-blue-300">
            <div className="container h-full px-4 lg:px-30 mx-auto items-center flex">
                <div className="w-full md:w-2/3 lg:w-1/2" data-aos="fade-right" data-aos-duration="2000">
                    <h1 className="text-5xl md:text-6xl text-white font-bold">
                        Get 5% Cash Back
                    </h1>
                    <p className="text-white mt-4 text-xl">
                        on applestore.com
                    </p>
                    <button className="px-10 py-4 mt-4 bg-blue-500 hover:bg-blue-400 text-white rounded-4xl text-2xl cursor-pointer">
                        Get Now
                    </button>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/2 hidden md:block" data-aos="zoom-in" data-aos-duration="3000">
                     <img src={card} alt={"Cash Back"} className={"lg:h-[460px] md:h-[300px]"}/>
                </div>
            </div>
        </div>
    );
};

export default GetCashBack;