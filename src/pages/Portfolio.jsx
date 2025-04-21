import React from "react";
import p1 from "../assets/images/p1.png";

const Portfolio = () => {
  return (
    <div>
      <div className="text-center mt-40">
        <h1 className="text-white font-bold text-[40px]">Portfolio</h1>
        <div className="flex items-center justify-center gap-8 mt-6">
          <button className="w-[100px] h-[54px] rounded-md bg-[#7F00FF]  cursor-pointer">
            All
          </button>
          <button className="w-[199px] h-[54px] rounded-md  hover:bg-[#5e00bf] bg-[#1b1b1b] cursor-pointer">
            App Mobile
          </button>

          <button className="w-[199px] h-[54px]  hover:bg-[#5e00bf] rounded-md bg-[#1b1b1b] cursor-pointer">
            Website Design
          </button>
        </div>
      </div>

      <div className="mt-20 flex items-center justify-between">
        <img src={p1} alt="" className="w-[215px]" />
        <img src={p1} alt="" className="w-[215px]" />
        <img src={p1} alt="" className="w-[215px]" />
        <img src={p1} alt="" className="w-[215px]" />
      </div>
    </div>
  );
};

export default Portfolio;
