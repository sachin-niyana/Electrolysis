"use client";
import { useState } from "react";
import { navLink } from "./common/Helper";
import { HiOutlineBars4 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/images/png/logo.png";
const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <nav className="z-10 py-[19px] flex-grow-0">
      <div className="flex items-center justify-between container max-w-[1364px] mx-auto px-3">
        <a href="/">
          <img className="w-[128px] h-[76px]" src={logo} alt="logo" />
        </a>
        <ul className="hidden lg:flex gap-6 ">
          {navLink.map((value, index) => {
            return (
              <li key={index}>
                <a
                  aria-label={value.title}
                  className="text-black text-opacity-70 hover:text-pink font-Inter font-normal nav_links text-sm transition-all ease-in-out duration-300"
                  key={index}
                  href={value.path}
                >
                  {value.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:flex">
          <div className="flex justify-start gap-[19px] items-center">
            <button className="text-black shadow-buttonShadow border-[1px] border-solid border-black border-opacity-20 bg-white hover:scale-95 transition-all ease-in-out duration-300 py-[9px] px-7 font-medium font-Inter text-sm leading-[200%]">
              Log In
            </button>
            <button className="text-white shadow-buttonShadow bg-btn-bg hover:scale-95 transition-all ease-in-out duration-300 py-2.5 px-7 font-medium font-Inter text-sm leading-[200%]">
              Contact Us
            </button>
          </div>
        </div>
        <button
          className="block lg:hidden text-black text-3xl"
          onClick={sidebarHandler}
        >
          <HiOutlineBars4 className="sm:w-10 sm:h-10 w-7 h-7" />
        </button>
      </div>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-50 z-50"
          onClick={sidebarHandler}
        ></div>
      )}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-full bg-pink z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <div className="p-4 min-h-screen flex flex-col justify-center items-center">
          <button
            className="text-black text-md font-bold absolute top-10 right-3"
            onClick={sidebarHandler}
          >
            <RxCross1 className="sm:w-10 sm:h-10 w-7 h-7" />
          </button>
          <ul className="flex flex-col items-center space-y-4 my-5">
            {navLink.map((value, index) => {
              return (
                <li key={index}>
                  <a
                    aria-label={value.title}
                    className="text-black hover:text-white font-Inter font-bold text-md transition-all ease-in-out duration-300"
                    key={index}
                    href={value.path}
                    onClick={sidebarHandler}
                  >
                    {value.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center">
            <div className="flex flex-col justify-start gap-[19px] items-center">
              <button className="text-black shadow-buttonShadow border-[1px] border-solid border-black border-opacity-20 bg-white hover:scale-95 transition-all ease-in-out duration-300 py-[9px] px-7 font-medium font-Inter text-xmd leading-[200%]">
                Log In
              </button>
              <button className="text-white shadow-buttonShadow bg-btn-bg hover:scale-95 transition-all ease-in-out duration-300 py-2.5 px-7 font-medium font-Inter text-xmd leading-[200%]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
