import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { BsCartPlus } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Services",
      to: "/services",
    },
    {
      name: "Contact",
      to: "/contact",
    },
  ];

  return (
    <>
      {/* Top Header */}
      <div className="bg-blue-500 text-white py-1 flex">
        <div className="container px-2 lg:px-30 mx-auto flex justify-between">
          {/* telphone */}
          <div className="flex items-center space-x-1">
            <FiPhone />
            <p>+855 123 456 789</p>
          </div>
          {/* promotion */}
          <div className="hidden md:block">
            <p>Get 50% Off on Selected Items &emsp; |&emsp; Shop Now</p>
          </div>

          {/* locatoin and language */}
          <div>
            <select className="border-0 outline-0 pe-4 ms-5">
              <option value="" className="bg-white text-gray-500">
                EN
              </option>
              <option value="" className="bg-white text-gray-500">
                KH
              </option>
            </select>
            <select className="border-0 outline-0 pe-4 ms-5">
              <option value="" className="bg-white text-gray-500">
                Cambodia
              </option>
              <option value="" className="bg-white text-gray-500">
                China
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* NavBar Header */}
      <div className="container flex lg:px-30 mx-auto p-2">
        <div className="flex justify-between items-center w-1/2">
          {/* logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 me-2">
              <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="" />
            </div>
            <p className="text-3xl font-bold">Store</p>
          </div>


          {/* menu */}
          <div className="space-x-4 text-white">
            <ul className="hidden lg:flex">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="mx-5 text-xl text-black hover:text-blue-600 hover:scale-110 duration-300 ease-in-out"
                >
                  <NavLink to={item.to}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden lg:flex justify-between items-center ps-10 lg:w-1/2">
          {/* search */}
          <form action="" className="px-5">
            <div className="flex items-center border border-slate-400 px-3 py-2 rounded-3xl">
              <input
                type="text"
                placeholder="Search here..."
                className="outline-0"
              />
              <button>
                <IoSearch className="text-2xl cursor-pointer" />
              </button>
            </div>
          </form>
          {/* account and cart */}
          <NavLink className="flex items-center space-x-2 text-lg">
            <GoPerson className="text-2xl" />
            <span className="text-xl">Account</span>
          </NavLink>
          <NavLink className="flex items-center space-x-2 text-lg">
            <BsCartPlus className="text-2xl" />
            <span className="text-xl">Cart</span>
          </NavLink>
        </div>
        <button
          className="block lg:hidden w-full ms-55"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <IoClose className="text-3xl" />
          ) : (
            <HiMenuAlt3 className="text-3xl" />
          )}
        </button>

        <div
          className={`${
            menuOpen
              ? "opacity-100 translate-y-16 pointer-events-auto z-10"
              : "opacity-0 -tracking-y-14 pointer-events-none z-10"
          } w-[90%] lg:hidden absolute translate-y-16 left-1/2 transform -translate-x-1/2 p-4 border bg-blue-200 rounded-box pb-10 `}
        >
          <ul className="z-10">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="py-2 border-b-1 mx-5 text-xl hover:text-blue-700 duration-300 ease-in-out"
              >
                <NavLink to={item.to}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
