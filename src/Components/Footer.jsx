import React from 'react';
import pay from '../assets/images/assPay.png';
import { MdOutlineShoppingBag } from "react-icons/md";
import { GoGift } from "react-icons/go";
import { FaRegCircleQuestion } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="w-full mt-3 lg:mt-14">
            <div className="container px-4 lg:px-30 mx-auto">
                <hr className={"text-gray-400 my-20 flex-nowrap"}/>
                <div className={"flex flex-wrap mt-2"}>
                    <div className="w-full md:w-1/3 ">
                        <div className="flex items-center mb-8">
                            <div className="w-12 h-12 me-2">
                                <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="" />
                            </div>
                            <p className="text-3xl font-bold">Apple Store</p>
                        </div>
                        <p className={"mb-8"}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        <p className={"text-xl font-bold mb-5 ms-8"}>Accepted Payments</p>
                        <img src={pay} alt={"pay"}/>
                    </div>
                    <div className="w-full md:w-2/3 flex">
                        <div className={"lg:w-1/4"}>
                            <p className={"text-xl font-bold mb-4"}>Department</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>electronic</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Education Product</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Frozen Food</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Beverages</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Organic Grocery</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Office Supplies
                            </p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Beauty Products</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Books</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Electronics & Gadget</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Travel Accessories</p>
                        </div>
                        <div className={" lg:w-1/4 mb-4"}>
                            <p className={"text-xl font-bold mb-4"}>About us</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>About apple store</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>
                                Careers</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>News & Blog
                            </p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Help</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Press Center</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Shop by location</p>
                        </div>
                        <div className={" lg:w-1/4 mb-4"}>
                            <p className={"text-xl font-bold mb-4"}>Services</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Gift Card</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Mobile App</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Shipping & Delivery</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Order Pickup</p>
                        </div>
                        <div className={" lg:w-1/4"}>
                            <p className={"text-xl font-bold mb-4"}>Help</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Apple Help</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Returns</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>track orders</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>contact us</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>feedback</p>
                            <p className={"hover:text-blue-500 hover:scale-110 duration-200 cursor-pointer mb-2"}>Security & Fraud
                            </p>
                            </div>
                    </div>
                </div>
                <hr className={"text-gray-400 mt-20 flex-nowrap"}/>
                <div className={"flex flex-wrap lg:flex-nowrap items-center justify-center mb-6 mt-10"}>
                    <div className={"w-full lg:w-[400px] flex justify-center"}>
                        <p className={"hover:text-blue-500 duration-200 cursor-pointer mb-2 me-2 flex items-center justify-center"}>
                            <MdOutlineShoppingBag className={"text-2xl me-1 text-blue-600"}/> Become Seller</p>
                        <p className={"hover:text-blue-500 duration-200 cursor-pointer mb-2 me-2 flex items-center justify-center"}>
                            <GoGift className={"text-2xl me-1 text-blue-600"}/> Gift Cards</p>
                        <p className={"hover:text-blue-500 duration-200 cursor-pointer mb-2 me-2 flex items-center justify-center"}>
                            <FaRegCircleQuestion className={"text-2xl me-1 text-blue-600"}/>
                            Help Canter</p>
                    </div>
                    <div className={"w-full lg:w-[1000px] flex lg:flex-nowrap text-center justify-between flex-wrap"}>
                        <div className={"w-full flex gap-5 justify-center"}>
                            <p className={"hover:text-blue-500 duration-200 cursor-pointer mb-2"}>Terms of Service</p>
                            <p className={"hover:text-blue-500 duration-200 cursor-pointer mb-2"}>Privacy & Policy</p>
                        </div>
                        <div className={"w-full flex gap-5 justify-center"}>
                            <p className={"hover:text-blue-500 mb-2"}>All Right reserved by <a className={"text-blue-300"}>Sorm Sophat</a> full-stack design agency | 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
