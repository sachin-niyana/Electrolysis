import React from "react";
import star from "../assets/images/png/light-star.png";
const Header = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-[1440px] px-3 mx-auto md:pb-[76px] sm:pb-16 pb-12">
          <div className="bg-header-bg shadow-headerShadow bg-cover bg-size max-w-[1341px] mx-auto lg:py-[88px] md:py-20 sm:py-16 py-12 md:ps-[100px] md:pe-0 px-3 relative">
            <img
              className="max-w-[454px] w-full absolute top-0 left-0 pointer-events-none"
              src={star}
              alt="star"
            />
            <h1 className="font-Playfair sm:text-start text-center font-extrabold xl:text-3xl lg:text-2xl text-xl text-white lg:max-w-[520px] max-w-[580px]">
              Welcome to Facvbnjkdfgb Electrolysis
            </h1>
            <h2 className="text-white font-Playfair sm:text-start text-center italic font-normal lg:text-xl text-lg pt-[7px]">
              Your Journey to Timeless Beauty
            </h2>
            <p className="text-white sm:text-start text-center border-0 border-s-[4px] mt-3.5 border-solid border-richBlack ps-4 max-w-[570px] font-Poppins font-normal text-sm">
              Welcome to FabElectrolysis, revealing your natural radiance with
              personalized, transformative procedures for a flawless look.
              Experience it today!
            </p>
            <div className="flex sm:justify-start justify-center">
              <button className="text-white mt-[34px] shadow-bookButtonShadow bg-btn-bg hover:scale-95 transition-all ease-in-out duration-300 py-2.5 px-7 font-medium font-Inter text-sm leading-[200%]">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
