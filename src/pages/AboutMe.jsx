import React, { useEffect, useRef } from "react";
import p3 from "../assets/images/p3.png";

const AboutMe = () => {
  const figmaRef = useRef();
  const webRef = useRef();
  const githubRef = useRef();

  useEffect(() => {
    const animateRing = (ref, percent) => {
      const circle = ref.current;
      const radius = 70;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference * (1 - percent / 100);

      circle.style.strokeDasharray = `${circumference}`;
      circle.style.transition = "stroke-dashoffset 1s ease-out";
      circle.style.strokeDashoffset = offset;
    };

    const resetRing = (ref) => {
      const circle = ref.current;
      const radius = 70;
      const circumference = 2 * Math.PI * radius;
      circle.style.strokeDashoffset = circumference;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            if (id === "figma") animateRing(figmaRef, 100);
            if (id === "web") animateRing(webRef, 70);
            if (id === "github") animateRing(githubRef, 50);
          } else {
            if (id === "figma") resetRing(figmaRef);
            if (id === "web") resetRing(webRef);
            if (id === "github") resetRing(githubRef);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(".skill-container").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-4">
      {/* Header */}
      <div className="text-center mt-40">
        <h1 className="text-white font-bold text-[28px] md:text-[40px]">
          About
        </h1>
        <p className="text-[16px] md:text-[20px] text-[#707070] mt-2">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
        </p>
      </div>

      {/* Image + Text */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-16">
        <img
          src={p3}
          alt="about me"
          className="w-[250px] h-[250px] md:w-[510px] md:h-[510px]"
        />
        <div>
          <p className="text-[14px] md:text-[18px] text-[#959595] leading-relaxed text-justify">
            A software engineer, the modern-day architect of digital realms,
            navigates the ethereal landscapes of code, sculpting intangible
            structures that shape our technological world. With fingers poised
            over keyboards like virtuoso pianists, they compose symphonies of
            logic, their minds a labyrinth of algorithms and solutions. Their
            canvas is a screen, a vast expanse where lines of code dance in
            intricate patterns, weaving the fabric of programs and applications.
            Each keystroke is a brushstroke, crafting intricate architectures
            and breathing life into innovative designs. In this digital atelier,
            they don the mantle of problem solvers, confronting bugs and
            glitches like valiant knights in an ever-evolving quest for
            perfection.
          </p>

          <a
            href="/resume.pdf"
            download
            className="w-full md:w-[141px] h-[43px] shadow-lg hover:bg-[#5e00bf] mt-4 rounded-md bg-[#7F00FF] transition flex items-center justify-center"
          >
            <p className="hover:text-black text-[14px] font-poppins text-center">
              Download CV
            </p>
          </a>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 mt-12">
        {/* Figma */}
        <div id="figma" className="relative w-40 h-40 skill-container">
          <svg className="absolute w-full h-full">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#E5E7EB"
              strokeWidth="12"
              fill="none"
            />
            <circle
              ref={figmaRef}
              cx="80"
              cy="80"
              r="70"
              stroke="#7F00FF"
              strokeWidth="12"
              fill="none"
              strokeDasharray="739.6"
              strokeDashoffset="739.6"
              transform="rotate(-90 80 80)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-center text-[#7F00FF] font-bold">
            Figma - 100%
          </div>
        </div>

        {/* Web */}
        <div id="web" className="relative w-40 h-40 skill-container">
          <svg className="absolute w-full h-full">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#E5E7EB"
              strokeWidth="12"
              fill="none"
            />
            <circle
              ref={webRef}
              cx="80"
              cy="80"
              r="70"
              stroke="#7F00FF"
              strokeWidth="12"
              fill="none"
              strokeDashoffset="739.6"
              strokeDasharray="739.6"
              transform="rotate(-90 80 80)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-center text-[#7F00FF] font-bold">
            Web - 70%
          </div>
        </div>

        {/* GitHub */}
        <div id="github" className="relative w-40 h-40 skill-container">
          <svg className="absolute w-full h-full">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#E5E7EB"
              strokeWidth="12"
              fill="none"
            />
            <circle
              ref={githubRef}
              cx="80"
              cy="80"
              r="70"
              stroke="#7F00FF"
              strokeWidth="12"
              fill="none"
              strokeDashoffset="739.6"
              strokeDasharray="739.6"
              transform="rotate(-90 80 80)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-center text-[#7F00FF] font-bold">
            GitHub - 50%
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
