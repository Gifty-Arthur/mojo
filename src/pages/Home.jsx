import React, { useState, useEffect, useRef } from "react";

import Work from "./Work";
import AboutMe from "./AboutMe";

import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import p3 from "../assets/images/p3.png";

const Home = () => {
  const [countExperience, setCountExperience] = useState(0);
  const [countProject, setCountProject] = useState(0);

  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  const animateCount = (target, setCount) => {
    let start = 0;
    const interval = setInterval(() => {
      if (start < target) {
        start++;
        setCount(start);
      } else {
        clearInterval(interval);
      }
    }, 10); // Adjust the speed of counting by changing the interval time
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const experienceInView =
      experienceRef.current.getBoundingClientRect().top < window.innerHeight;
    const projectInView =
      projectRef.current.getBoundingClientRect().top < window.innerHeight;

    if (experienceInView) animateCount(10, setCountExperience);
    if (projectInView) animateCount(20, setCountProject);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="pt-32 mt-4 px-6 py-4">
      <div className="text-white text-[30px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="font-semibold text-[24px] text-[#959595] font-sans">
              I am
            </h1>
            <h1 className="text-[28px] text-[#959595] font-bold font-poppins ">
              Mbeleck Berle
            </h1>
            <h1 className="text-4xl text-[#7F00FF] mt-4">
              ML Engineer & Data Analyst
            </h1>
            <p className="text-[10px] mt-4 text-[#BABABA]">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              <br /> consectetur, adipisci velit..." "There is no one who loves
              pain itself, <br />
              who seeks after it and wants to have it, simply because it is
              pain..
            </p>
            <div className="flex cursor-pointer text-[#BABABA] flex-row gap-2 mt-4 ">
              <CiLinkedin className="hover:text-[#5e00bf]" />
              <FaInstagram className="hover:text-[#5e00bf]" />
              <FaGithub className="hover:text-[#5e00bf]" />
            </div>
            {/* button */}
            <div className="flex gap-4 mt-10">
              <button className="hidden md:block w-[141px] h-[43px] shadow-lg hover:bg-[#5e00bf] rounded-md bg-[#7F00FF] transition">
                <p className="hover:text-black font-poppins text-[14px]">
                  Hire me
                </p>
              </button>
              <button className="hidden md:block w-[141px] h-[43px] shadow-lg border-[#959595] rounded-md border-2 transition">
                <p className="hover:text-black font-poppins text-[14px]">
                  Download CV
                </p>
              </button>
            </div>

            {/* experience */}
            <div
              id="experience5"
              className="w-[254px] h-[110px] rounded-md bg-[#1e1c1b] mt-10 "
            >
              <div className="flex items-center ">
                <div className="p-4 border-r-2 mt-2 " ref={experienceRef}>
                  <p className="text-[24px]  text-[#7F00FF] font-bold">
                    {countExperience}+
                  </p>
                  <p className="text-[#DFDFDF] text-[16px]">Experience</p>
                </div>
                <div className="p-4  mt-2" ref={projectRef}>
                  <p className="text-[24px] text-[#7F00FF  text-[#7F00FF] font-bold">
                    {countProject}+
                  </p>
                  <p className="text-[#DFDFDF] text-[16px]">Project done</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* image profile */}
            <img src={p3} alt="" className="w-[510px] h-[510]" />
          </div>
        </div>
      </div>
      <Work />
      <AboutMe />
    </div>
  );
};

export default Home;
