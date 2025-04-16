import React from "react";
import work from "../assets/images/w2.png";

const Work = () => {
  return (
    <div>
      <div className=" text-center mt-20">
        <h1 className="text-white font-bold text-[40px]">Services</h1>
        <p className="text-[20px] text-[#707070]">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam
        </p>
      </div>

      <div className="flex items-center justify-between gap-6">
        <div className="w-[399px] h-[272px] rounded-3xl bg-[#1b1b1b] mt-9">
          <div className="justify-center items-center flex flex-col pt-8">
            <img src={work} alt="" className="" />
            <h2 className="text-[24px] text-[#7F00FF]">App Design</h2>
            <p className="text-[#575757] text-center mt-4">
              Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet
              consectetur
            </p>
          </div>
        </div>
        {/* 2nd */}
        <div className="w-[399px] h-[272px] rounded-3xl bg-[#1b1b1b] mt-9">
          <div className="justify-center items-center flex flex-col pt-8">
            <img src={work} alt="" className="" />
            <h2 className="text-[24px] text-[#7F00FF]">App Design</h2>
            <p className="text-[#575757] text-center mt-4">
              Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet
              consectetur
            </p>
          </div>
        </div>
        {/* 3rd */}
        <div className="w-[399px] h-[272px] rounded-3xl bg-[#1b1b1b] mt-9">
          <div className="justify-center items-center flex flex-col pt-8">
            <img src={work} alt="" className="" />
            <h2 className="text-[24px] text-[#7F00FF]">App Design</h2>
            <p className="text-[#575757] text-center mt-4">
              Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet
              consectetur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
