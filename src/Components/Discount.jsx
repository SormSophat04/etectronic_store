import React from "react";

function Discount() {
    return (
        <div className='w-full h-[50vh] bg-img-2'>
            <div className="container h-full px-4 lg:px-[128px] mx-auto flex items-center justify-end">
                <div className='w-full md:w-[60%] lg:w-[38%] bg-blue-600 p-10 lg:px-16 lg:py-20 rounded-xl' data-aos="zoom-in" data-aos-duration="1000">
                    <h1 className='text-4xl md:text-6xl text-white font-bold'>
                        Get 5% Cash back on $200
                    </h1>
                    <p className='text-xl md:text-xl mt-6 text-white'>
                        Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
                    </p>
                    <button className='px-10 py-3 hover:bg-blue-300 border border-white rounded-4xl cursor-pointer mt-5 text-2xl text-white'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Discount;
