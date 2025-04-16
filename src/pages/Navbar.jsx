import React, { useState } from "react";
import mojo from "../assets/images/mojo.png";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#121212] font-serif fixed top-0 left-0 w-full z-50 p-5 shadow-xl">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src={mojo} alt="Logo" className="" />

        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-center gap-8 text-lg">
          {["home", "service", "about", "portfolio", "contact"].map(
            (section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer hover:text-[#7F00FF] text-[18px]  text-[#959595] transition duration-300 capitalize"
                >
                  {section}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block w-[141px] h-[43px] shadow-lg hover:bg-[#5e00bf] rounded-md bg-[#7F00FF] transition">
          <p className="hover:text-black font-poppins">Hire me</p>
        </button>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 px-6 py-4 bg-[#121212] shadow-lg rounded-md">
          <ul className="flex flex-col gap-4 text-lg">
            {["home", "service", "about", "portfolio", "contact"].map(
              (section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={closeMenu}
                    className="cursor-pointer hover:text-[#7F00FF] text-[18px] font-poppins text-[#959595] transition duration-300 capitalize"
                  >
                    {section}
                  </Link>
                </li>
              )
            )}
          </ul>
          <button className="w-full mt-4 h-[43px] shadow-lg hover:bg-[#5e00bf] rounded-md bg-[#7F00FF] transition">
            <p className="hover:text-black font-poppins">Hire me</p>
          </button>

          {/* home */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
