import React from "react";
import mojo from "../assets/images/mojo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-scroll";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#1b1b1b] mt-20 px-4 py-10">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <img src={mojo} alt="Logo" className="w-[120px]" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex justify-center mt-4 gap-8 text-lg">
          {["home", "service", "about", "portfolio", "contact"].map(
            (section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer hover:text-[#7F00FF] text-[18px] text-[#959595] transition duration-300 capitalize"
                >
                  {section}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 text-[#BABABA]">
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#5e00bf]"
          >
            <CiLinkedin size={28} />
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

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10 text-center">
          <div className="flex items-center gap-2">
            <CiMail className="text-[#959595]" />
            <a
              href="mailto:giftarthur031@gmail.com"
              className="text-[#959595] text-sm hover:text-[#7F00FF] transition"
            >
              giftarthur031@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <IoCallOutline className="text-[#959595]" />
            <p className="text-[#959595] text-sm">+93 729 107 005</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
