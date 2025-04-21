import React from "react";
import work from "../assets/images/w2.png";

const Work = () => {
  return (
    <div>
      {/* Heading */}
      <div className="text-center mt-20 px-4">
        <h1 className="text-white font-bold text-[28px] md:text-[40px]">
          Services
        </h1>
        <p className="text-[16px] md:text-[20px] text-[#707070] mt-2">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam
        </p>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10 px-4">
        {/* 1st Card */}
        <div className="w-full md:w-[399px] h-[272px] rounded-3xl bg-[#1b1b1b]">
          <div className="flex flex-col items-center pt-8">
            <img src={work} alt="service icon" />
            <h2 className="text-[20px] md:text-[24px] text-[#7F00FF] mt-2">
              App Design
            </h2>
            <p className="text-[#575757] text-center mt-4 text-[14px] md:text-[16px] px-2">
              Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet
              consectetur.
            </p>
          </div>
        </div>

        {/* 2nd Card */}
        <div className="w-full md:w-[399px] h-[272px] rounded-3xl bg-[#1b1b1b]">
          <div className="flex flex-col items-center pt-8">
            <img src={work} alt="service icon" />
            <h2 className="text-[20px] md:text-[24px] text-[#7F00FF] mt-2">
              App Design
            </h2>
            <p className="text-[#575757] text-center mt-4 text-[14px] md:text-[16px] px-2">
              Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet
              consectetur.
            </p>
          </div>
        </div>

        {/* 3rd Card */}
        <div className="w-full md:w-[399px] h-[272px] rounded-3xl bg-[#1b1b1b]">
          <div className="flex flex-col items-center pt-8">
            <img src={work} alt="service icon" />
            <h2 className="text-[20px] md:text-[24px] text-[#7F00FF] mt-2">
              App Design
            </h2>
            <p className="text-[#575757] text-center mt-4 text-[14px] md:text-[16px] px-2">
              Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit amet
              consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
