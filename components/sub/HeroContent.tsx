"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import BlackHoleTransition from "@/components/BlackHoleTransition";

const HeroContent = () => {
  const [showPortal, setShowPortal] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 mt-16 sm:mt-24 lg:mt-40 w-full z-[20] gap-6 lg:gap-0"
    >
      <div className="h-full w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 justify-center m-auto text-center lg:text-start order-2 lg:order-1">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[6px] sm:py-[8px] px-[6px] sm:px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto lg:mx-0 w-fit"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[11px] sm:text-[13px]">
            Android Developer and UI/UX Designer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white max-w-[600px]"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base lg:text-lg text-gray-400 my-4 sm:my-5 max-w-[600px] px-2 sm:px-4 lg:px-0"
        >
          I’m an Android Developer and UI/UX Designer building practical, user-focused applications. Explore my projects and technical skills.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex gap-4 flex-wrap justify-center lg:justify-start"
        >
          <a
            href="#projects"
            className="py-2 sm:py-3 px-4 sm:px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[180px] sm:max-w-[200px] text-sm sm:text-base"
          >
            Learn More!
          </a>

          <button
            onClick={() => setShowPortal(true)}
            className="py-2 sm:py-3 px-4 sm:px-6 rounded-lg border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black transition max-w-[200px] text-sm sm:text-base"
          >
            Enter the Void
          </button>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 h-full flex justify-center items-center order-1 lg:order-2"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={400}
          width={400}
          className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] xl:w-[650px] xl:h-[650px]"
        />
      </motion.div>

      {showPortal && <BlackHoleTransition />}
    </motion.div>
  );
};

export default HeroContent;
