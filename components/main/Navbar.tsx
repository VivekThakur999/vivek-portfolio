import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 lg:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-2 sm:px-4">
        <a
          href="#start"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Vivek Thakur
          </span>
        </a>

        <div className="hidden md:flex w-auto max-w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-4 lg:px-[20px] py-[10px] rounded-full text-gray-200 text-sm lg:text-base">
            <a href="#about-me" className="px-2 cursor-pointer hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#education" className="px-2 cursor-pointer hover:text-purple-400 transition-colors">
              Education
            </a>
            <a href="#skills" className="px-2 cursor-pointer hover:text-purple-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="px-2 cursor-pointer hover:text-purple-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="px-2  cursor-pointer hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="flex cursor-pointer flex-row gap-3 sm:gap-5">
          <a href="https://github.com/VivekThakur999" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://img.icons8.com/?size=100&id=bVGqATNwfhYq&format=png&color=000000"
              alt="GitHub"
              className="hover:scale-110 transition-all duration-200"
              width={30}
              height={30}
            />
          </a>
          <a href="linkedin.com/in/vivek-thakur-53188730a" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"

              alt="LinkedIn"
              className="hover:scale-110 transition-all duration-200"
              width={30}
              height={30}
            />
          </a>
          <a href="https://leetcode.com/u/vivekthakur999/"
            target="_blank" rel="noopener noreferrer">
            <Image
              src="https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000"
              alt="leetcode"
              className="hover:scale-110 transition-all duration-200"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
