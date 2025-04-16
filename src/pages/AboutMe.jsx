import React from "react";
import p3 from "../assets/images/p3.png";
const AboutMe = () => {
  return (
    <div>
      <div>
        <div className=" text-center mt-40">
          <h1 className="text-white font-bold text-[40px]">About</h1>
          <p className="text-[20px] text-[#707070]">
            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          </p>
        </div>

        <div className="flex items-center justify-between gap-20 ">
          <img src={p3} alt="" className="w-[510px] h-[510px] mt-18" />
          <p className="text-[18px] text-[#959595]  text-base">
            A software engineer, the modern-day architect of digital realms,
            navigates the ethereal landscapes of code, sculpting intangible
            structures that shape our technological world. With fingers poised
            over keyboards like virtuoso pianists, they compose symphonies of
            logic, their minds a labyrinth of algorithms and solutions.Their
            canvas is a screen, a vast expanse where lines of code dance in
            intricate patterns, weaving the fabric of programs and applications.
            Each keystroke is a brushstroke, crafting intricate architectures
            and breathing life into innovative designs.In this digital atelier,
            they don the mantle of problem solvers, confronting bugs and
            glitches like valiant knights in an ever-evolving quest for
            perfection. Debugging becomes a noble pursuit, unraveling the
            mysteries hidden within the tangled webs of code. designs.In this
            digital atelier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
