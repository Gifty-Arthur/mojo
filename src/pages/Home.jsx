import React, { useState, useEffect, useRef } from "react";

import Work from "./Work";
import AboutMe from "./AboutMe";
import { Link } from "react-scroll";

import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import p3 from "../assets/images/p3.png";
import Portfolio from "./Portfolio";

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
    }, 10);
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
      <div id="home">
        <div className="text-white text-[30px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side - Text Content */}
            <div className="flex flex-col">
              <h1 className="font-semibold text-[20px] md:text-[24px] text-[#959595] font-sans">
                I am
              </h1>
              <h1 className="text-[22px] md:text-[28px] text-[#959595] font-bold font-poppins">
                Mbeleck Berle
              </h1>
              <h1 className="text-2xl md:text-4xl text-[#7F00FF] mt-4">
                ML Engineer & Data Analyst
              </h1>
              <p className="text-[12px] md:text-[14px] mt-4 text-[#BABABA] leading-relaxed text-justify">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                <br /> consectetur, adipisci velit..." "There is no one who
                loves pain itself, <br />
                who seeks after it and wants to have it, simply because it is
                pain..
              </p>

              {/* Social Icons */}
              <div className="flex text-[#BABABA] flex-row gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/your-linkedin-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5e00bf]"
                >
                  <CiLinkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/your-instagram-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5e00bf]"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://github.com/MbeleckBerle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5e00bf]"
                >
                  <FaGithub size={24} />
                </a>
              </div>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row gap-4 mt-10">
                <a
                  href="mailto:giftarthur031@gmail.com"
                  className="w-full md:w-[141px] h-[43px] shadow-lg hover:bg-[#5e00bf] rounded-md bg-[#7F00FF] transition flex items-center justify-center"
                >
                  <p className="hover:text-black text-[14px] font-poppins text-center">
                    Hire me
                  </p>
                </a>
              </div>

              {/* Experience Section */}
              <div
                id="experience5"
                className="w-full md:w-[254px] h-[110px] rounded-md bg-[#1e1c1b] mt-10"
              >
                <div className="flex items-center justify-between">
                  <div className="p-4 border-r-2" ref={experienceRef}>
                    <p className="text-[24px] text-[#7F00FF] font-bold">
                      {countExperience}+
                    </p>
                    <p className="text-[#DFDFDF] text-[16px]">Experience</p>
                  </div>
                  <div className="p-4" ref={projectRef}>
                    <p className="text-[24px] text-[#7F00FF] font-bold">
                      {countProject}+
                    </p>
                    <p className="text-[#DFDFDF] text-[16px]">Project done</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center">
              <img
                src={p3}
                alt="Profile"
                className="w-[250px] h-[250px] md:w-[510px] md:h-[510px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div id="service">
        <Work />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
    </div>
  );
};

export default Home;
