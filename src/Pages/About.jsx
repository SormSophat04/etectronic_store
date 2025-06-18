import React from 'react'

function About() {
  return (
        <div className="w-full h-[200vh] md:h-[70vh] ">
            <div className="container h-full px-4 lg:px-30 mx-auto items-center flex flex-wrap gap-2">
                <div className="w-full h-[650px] md:w-[49%] md:h-[800px] bg-gray-100 rounded-2xl p-10">
                    <div className={""} data-aos="zoom-in-down" data-aos-duration="2000">
                        <p className={"text-2xl text-blue-500 mb-10"}>How It Started</p>
                        <p className={"text-4xl md:text-5xl lg:text-7xl font-bold "}>Our Dream is Global Learning Transformation</p>
                    </div>
                    <div className={"mt-10 md:mt-20 lg:mt-60"} data-aos="zoom-in-down" data-aos-duration="1000">
                        <p className={"text-gray-500"}>Apple Inc. is a global technology company known for its innovative products, sleek design, and seamless user experience.
                            Founded in 1976 by Steve Jobs, Steve Wozniak, and Ronald Wayne, Apple has revolutionized personal computing and mobile technology. From the iPhone and iPad to the MacBook and Apple Watch, Apple creates devices that redefine how people live and work.
                            Apple’s ecosystem offers powerful integration across devices, making life more connected and efficient. Apple continues to lead the tech industry through innovation, user-focused design, and cutting-edge performance.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-[49%] lg:w-[49%] h-[800px]">
                    <div className="w-full md:h-[49.5%]  rounded-2xl mb-2 bg-yellow-300">
                        <img src={"https://i.pinimg.com/736x/d2/91/d7/d291d71d63c89f4d100f6c333961132e.jpg"} alt={""} className={"w-full h-full object-cover rounded-2xl"} />
                    </div>
                    <div className="w-full md:h-[49.5%]  flex flex-wrap bg-gray-100 rounded-2xl p-10 justify-between">
                        <div className="w-full md:w-[48%] h-[48%] p-8 md:p-4 bg-white rounded-2xl mb-4" data-aos="zoom-in" data-aos-duration="2000">
                            <h1 className={"text-5xl font-bold"}>20</h1>
                            <p className="text-xl text-gray-500">Year Experience</p>
                        </div>
                        <div className="w-full md:w-[48%] h-[48%] p-8 md:p-4 bg-white rounded-2xl mb-4" data-aos="zoom-in" data-aos-duration="2000">
                            <h1 className={"text-5xl font-bold"}>299</h1>
                            <p className="text-xl text-gray-500">Project Challenge</p>
                        </div>
                        <div className="w-full md:w-[48%] p-8 md:p-4 bg-white rounded-2xl mb-4" data-aos="zoom-in" data-aos-duration="2000">
                            <h1 className={"text-5xl font-bold"}>999+</h1>
                            <p className="text-xl text-gray-500">Positive Review</p>
                        </div>
                        <div className="w-full md:w-[48%] p-8 md:p-4 bg-white rounded-2xl mb-4" data-aos="zoom-in" data-aos-duration="2000">
                            <h1 className={"text-5xl font-bold"}>800K</h1>
                            <p className="text-xl text-gray-500">Trusted Student</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About
