"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import EarthCanvas from "../sub/EarthCanvas";

const About = () => {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/vivekresume.pdf';
    link.download = 'Vivek Resume.pdf'; // Your custom filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center py-20 relative overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 mt-4 w-full z-[20]"
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-[10px]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">About Me</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5 text-center"
        >
          Crafting Digital Experiences
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full gap-8 lg:gap-0">
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="flex flex-col gap-6 text-white max-w-[600px] w-auto h-auto text-center lg:text-left order-2 lg:order-1"
          >
            <div className="flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-6 text-sm sm:text-base lg:text-xl text-gray-300 mb-6 sm:mb-10 px-2 sm:px-0">
              <p>
                I&apos;m a passionate{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  Android Developer and UI/UX Designer
                </span>{" "}
                focused on building intuitive, reliable, and visually engaging applications. I enjoy turning ideas into functional products that balance clean design with solid performance.
              </p>
              <p>
                My experience includes Android app development, user-centered interface design, and working with core programming concepts. I approach every project with attention to detail, writing structured, maintainable code and designing interfaces that prioritize usability.
              </p>
              <p>
                Beyond coursework, I actively work on personal projects, explore new technologies, and continuously refine my development and design skills. I’m driven by curiosity, consistency, and the goal of creating digital experiences that feel simple, effective, and meaningful.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center">
              <motion.button
                variants={slideInFromLeft(1.2)}
                onClick={handleDownloadCV}
                className="w-full sm:w-auto py-3 sm:py-4 px-4 sm:px-6 button-primary text-center text-white text-sm sm:text-base lg:text-lg cursor-pointer rounded-lg"
              >
                Download CV
              </motion.button>
              <motion.a
                variants={slideInFromLeft(1.4)}
                href="#contact"
                className="w-full sm:w-auto py-3 sm:py-4 px-4 sm:px-6 border border-[#7042f88b] text-center text-sm sm:text-base lg:text-lg text-white cursor-pointer rounded-lg hover:bg-[#7042f88b] transition-all duration-300"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>

          {/* earth canva */}
          <motion.div
            variants={slideInFromRight(0.8)}
            className="flex justify-center items-center order-1 lg:order-2 w-full lg:w-auto"
          >
            <div>
              <EarthCanvas />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;