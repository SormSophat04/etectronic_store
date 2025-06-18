import React from 'react'
import { Briefcase, Lightbulb, TrendingUp, Handshake, ShieldCheck, Rocket } from 'lucide-react';
function Service() {
  return (
        <div className="w-full h-[310vh] md:h-[120vh] ">
            <div className="container h-full px-4 lg:px-30 mx-auto items-center flex flex-wrap gap-2">
                <section className="bg-gradient-to-br bg-blue-300 w-full text-white py-20 md:py-28 px-4 text-center rounded-b-3xl shadow-lg">
                    <div className="container mx-auto max-w-4xl" data-aos="zoom-in-down" data-aos-duration="2000">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
                            Elevate Your Business with Our Expert Services
                        </h1>
                        <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up delay-100">
                            We provide tailored solutions to help you achieve your goals and maximize your potential.
                        </p>
                        <button className="bg-white text-blue-300 hover:bg-indigo-50 hover:scale-105 transform transition-all duration-3000 font-bold py-3 px-8 rounded-full shadow-lg text-lg animate-fade-in-up delay-200">
                            Get Started Today
                        </button>
                    </div>
                </section>

                <section className="py-16 md:py-24 px-4 bg-white rounded-xl mx-auto my-12 max-w-7xl">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                            What We Offer
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-gray-100 p-8 rounded-2xl transform transition-all duration-300 group" data-aos="fade-up" data-aos-duration="1000">
                                <div className="bg-indigo-100 p-4 rounded-full inline-block mb-6 group-hover:bg-indigo-200 transition-colors duration-200">
                                    <Briefcase className="w-10 h-10 text-indigo-600 group-hover:text-indigo-700" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Consulting</h3>
                                <p className="text-gray-600">
                                    Strategic advice and hands-on support to optimize your operations and foster growth.
                                </p>
                            </div>

                            <div className="bg-gray-100 p-8 rounded-2xl transform  transition-all duration-300 group" data-aos="fade-up" data-aos-duration="1500">
                                <div className="bg-green-100 p-4 rounded-full inline-block mb-6 group-hover:bg-green-200 transition-colors duration-200">
                                    <Lightbulb className="w-10 h-10 text-green-600 group-hover:text-green-700" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation & Development</h3>
                                <p className="text-gray-600">
                                    Bringing your ideas to life with cutting-edge technology and creative solutions.
                                </p>
                            </div>


                            <div className="bg-gray-100 p-8 rounded-2xl transform transition-all duration-300 group" data-aos="fade-up" data-aos-duration="2000">
                                <div className="bg-blue-100 p-4 rounded-full inline-block mb-6 group-hover:bg-blue-200 transition-colors duration-200">
                                    <TrendingUp className="w-10 h-10 text-blue-600 group-hover:text-blue-700" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Strategies</h3>
                                <p className="text-gray-600">
                                    Developing robust marketing plans to enhance your brand visibility and reach.
                                </p>
                            </div>


                            <div className="bg-gray-100 p-8 rounded-2xl transform transition-all duration-300 group" data-aos="fade-up" data-aos-duration="1000">
                                <div className="bg-yellow-100 p-4 rounded-full inline-block mb-6 group-hover:bg-yellow-200 transition-colors duration-200">
                                    <Handshake className="w-10 h-10 text-yellow-600 group-hover:text-yellow-700" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership Building</h3>
                                <p className="text-gray-600">
                                    Connecting you with key partners to expand your network and opportunities.
                                </p>
                            </div>


                            <div className="bg-gray-100 p-8 rounded-2xl transform  transition-all duration-300 group" data-aos="fade-up" data-aos-duration="1500">
                                <div className="bg-red-100 p-4 rounded-full inline-block mb-6 group-hover:bg-red-200 transition-colors duration-200">
                                    <ShieldCheck className="w-10 h-10 text-red-600 group-hover:text-red-700" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Security & Compliance</h3>
                                <p className="text-gray-600">
                                    Ensuring your operations meet the highest standards of security and regulatory compliance.
                                </p>
                            </div>


                            <div className="bg-gray-100 p-8 rounded-2xl transform transition-all duration-300 group" data-aos="fade-up" data-aos-duration="2000">
                                <div className="bg-purple-100 p-4 rounded-full inline-block mb-6 group-hover:bg-purple-200 transition-colors duration-200">
                                    <Rocket className="w-10 h-10 text-purple-600 group-hover:text-purple-700" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth Acceleration</h3>
                                <p className="text-gray-600">
                                    Rapidly scaling your business with proven strategies and dedicated support.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
  )
}

export default Service
