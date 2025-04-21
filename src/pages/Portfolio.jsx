import React from "react";
import p1 from "../assets/images/p1.png";

const Portfolio = () => {
  return (
    <div className="px-4">
      {/* Heading and Filters */}
      <div className="text-center mt-40">
        <h1 className="text-white font-bold text-[28px] md:text-[40px]">
          Portfolio
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-6">
          <button className="w-full md:w-[100px] h-[54px] rounded-md bg-[#7F00FF] cursor-pointer">
            All
          </button>
          <button className="w-full md:w-[199px] h-[54px] rounded-md hover:bg-[#5e00bf] bg-[#1b1b1b] cursor-pointer">
            App Mobile
          </button>
          <button className="w-full md:w-[199px] h-[54px] rounded-md hover:bg-[#5e00bf] bg-[#1b1b1b] cursor-pointer">
            Website Design
          </button>
        </div>
      </div>

      {/* Portfolio Items */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {/* 1st Image with link */}
        <a
          href="https://github.com/MbeleckBerle"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[215px] hover:scale-105 transition-transform"
        >
          <img src={p1} alt="portfolio item" className="rounded-md" />
        </a>

        {/* Other images (you can link more if needed) */}
        <img
          src={p1}
          alt="portfolio item"
          className="w-[215px] rounded-md hover:scale-105 transition-transform"
        />
        <img
          src={p1}
          alt="portfolio item"
          className="w-[215px] rounded-md hover:scale-105 transition-transform"
        />
        <img
          src={p1}
          alt="portfolio item"
          className="w-[215px] rounded-md hover:scale-105 transition-transform"
        />
      </div>
    </div>
  );
};

export default Portfolio;
