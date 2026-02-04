"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 relative overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 w-full z-[20]"
      >
        {/* Section Header */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-[10px]"
        >
          <BriefcaseIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Experience</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5 text-center"
        >
          Professional Journey
        </motion.h2>

        {/* Experience Cards */}
        <div className="flex flex-col gap-8 max-w-[900px] w-full mt-10">
          {/* Experience 1 */}
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="p-6 sm:p-8 rounded-xl bg-[#0f0f1a] border border-[#7042f88b]"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              UI/UX Design Intern
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mt-1">
              Sumago Infotech Pvt. Ltd. | Internship
            </p>

            <ul className="mt-4 text-gray-300 text-sm sm:text-base list-disc list-inside space-y-2">
              <li>Designed wireframes, user flows, and interactive prototypes using Figma</li>
              <li>Collaborated with developers and marketing teams to align design with branding</li>
              <li>Applied user-centered design principles and improved usability through feedback</li>
            </ul>
          </motion.div>

          {/* Experience 2 */}
          <motion.div
            variants={slideInFromRight(0.8)}
            className="p-6 sm:p-8 rounded-xl bg-[#0f0f1a] border border-[#7042f88b]"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Android Developer
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mt-1">
              Academic & Personal Projects
            </p>

            <ul className="mt-4 text-gray-300 text-sm sm:text-base list-disc list-inside space-y-2">
              <li>Built Android applications using Android Studio, Java, and Firebase</li>
              <li>Implemented authentication, media features, and clean UI components</li>
              <li>Integrated Firebase services for backend, storage, and real-time data</li>
            </ul>
          </motion.div>

          {/* Experience 3 */}
          <motion.div
            variants={slideInFromLeft(1)}
            className="p-6 sm:p-8 rounded-xl bg-[#0f0f1a] border border-[#7042f88b]"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Full Stack Developer
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mt-1">
              Personal Projects
            </p>

            <ul className="mt-4 text-gray-300 text-sm sm:text-base list-disc list-inside space-y-2">
              <li>Developed responsive web applications using modern frontend technologies</li>
              <li>Worked with Java, Spring Boot, and REST APIs for backend development</li>
              <li>Deployed and maintained projects using GitHub and Vercel</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
