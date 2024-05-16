import React from "react";
const Header = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-[1440px] px-3 mx-auto">
          <div className="bg-header-bg bg-cover bg-size max-w-[1341px] mx-auto py-[88px] ps-[100px]">
            <div className="flex justify-between items-center">
              <div className="m-0">
                <h1 className="font-Playfair font-extrabold text-3xl text-white max-w-[520px]">
                  Welcome to Facvbnjkdfgb Electrolysis
                </h1>
                <h2 className="text-white font-Playfair italic font-normal text-xl pt-[7px]">
                  Your Journey to Timeless Beauty
                </h2>
                <p className="text-white border-0 border-s-[4px] mt-3.5 border-solid border-richBlack ps-4 max-w-[570px] font-Poppins font-normal text-sm">
                  Welcome to FabElectrolysis, revealing your natural radiance
                  with personalized, transformative procedures for a flawless
                  look. Experience it today!
                </p>
                <button className="text-white mt-[34px] shadow-bookButtonShadow bg-btn-bg hover:scale-95 transition-all ease-in-out duration-300 py-2.5 px-7 font-medium font-Inter text-sm leading-[200%]">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
