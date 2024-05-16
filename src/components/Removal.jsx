import React, { useRef, useState } from "react";
import { removalList } from "./common/Helper";
import video from "../assets/video/sample_video.mp4";
import { Pause, Play } from "./common/Icon";

const Removal = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };
  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="max-w-[1164px] mx-auto px-3 md:pt-14 xl:pb-[100px] lg:pb-24 md:pb-20 sm:py-16 py-12">
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <h2 className="text-black font-Playfair lg:text-start text-center italic font-medium lg:text-xl text-lg lg:max-w-[480px]">
            Hair Removal & Skin Rejuvenation
          </h2>
          <p className="font-Poppins font-normal lg:pt-0 pt-3 lg:text-start text-center text-sm lg:max-w-[462px] text-black max-w-[600px] ">
            Explore your options with a free consultation. Our experts will
            guide you through our equipment and address all your questions,
            ensuring you're informed and confident in your choices.
          </p>
        </div>
        <div className="flex flex-wrap lg:grid lg:grid-cols-3 gap-6 mt-5 md:mt-10 justify-center items-center">
          {removalList.map((value, index) => (
            <div
              key={index}
              className="max-w-[364px] bg-white group shadow-cardShadow hover:bg-pink hover:shadow-none duration-300"
            >
              <div className="relative">
                <video
                  ref={videoRef}
                  controls
                  width="640"
                  height="360"
                  onClick={handleVideoClick}
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <img
                  onClick={handlePlayPause}
                  className={`absolute top-[50%] left-[50%] ${
                    isPlaying ? "" : "opacity-0"
                  }`}
                  src={isPlaying ? Play : Pause}
                  alt={isPlaying ? "Play" : "Pause"}
                />
              </div>
              <div className="pt-[21px] px-[26px] pb-6">
                <h5 className="text-black font-Marcellus group-hover:text-white transition-all ease-in-out duration-300 font-normal sm:text-md text-xmd">
                  {value.title}
                </h5>
                <p className="font-Poppins font-normal text-sm group-hover:text-white transition-all ease-in-out duration-300 text-grey pt-2">
                  Time
                  <span className="text-pink group-hover:text-white transition-all ease-in-out duration-300">
                    {value.time}
                  </span>
                </p>
                <p className="font-Poppins font-normal text-sm group-hover:text-white transition-all ease-in-out duration-300 text-grey pt-[7px]">
                  Starting From{" "}
                  <span className="text-pink group-hover:text-white transition-all ease-in-out duration-300">
                    {value.prise}
                  </span>
                </p>
                <p className="font-Poppins font-normal group-hover:text-white text-sm transition-all ease-in-out duration-300 text-black pt-[5px]">
                  {value.discription}
                </p>
                <button className="text-pink mt-[19px] border-[1px] border-solid border-pink group-hover:border-white group-hover:text-white border-opacity-20 bg-white group-hover:bg-pink hover:scale-95 transition-all ease-in-out duration-300 py-[9px] px-5 font-medium font-Inter text-sm leading-[200%]">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="bg-gradient-border p-[1px] mt-[50px] hover:scale-95 transition-all ease-in-out duration-300">
            <button className="text-pink border-none bg-white py-3.5 px-[65px] font-normal font-Poppins text-sm leading-[150%]">
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Removal;
