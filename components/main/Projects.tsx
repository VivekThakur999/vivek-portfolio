"use client";

import React from "react";
import { motion } from "framer-motion";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { projectsData } from "@/constants";
import Link from "next/link";
import Image from "next/image";

// ProjectCard Component (built-in)
interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  tags?: Array<{ name: string; color: string }>;
  source_code_link?: string;
  live_demo_link?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, title, description, tags, source_code_link, live_demo_link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="bg-gradient-to-br from-[#0c0428] via-[#150342] to-[#0c0428] p-4 sm:p-5 rounded-2xl w-full sm:w-[360px] max-w-[360px] border border-[#7042f88b] hover:border-[#7042f8] transition-colors duration-300">
        <div className="relative w-full h-[180px] sm:h-[230px] rounded-xl overflow-hidden">
          <Image
            src={src}
            alt={title}
            width={360}
            height={230}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex justify-end gap-3 m-3 card-img_hover">
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
              >
                {/* GitHub Icon SVG */}
                <svg className="w-1/2 h-1/2 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /> </svg>
              </div>
            )}
            {live_demo_link && (
              <div
                onClick={() => window.open(live_demo_link, "_blank")}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
              >
                {/* Live Demo Icon SVG */}
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            )}
          </div>

        </div>

        <div className="mt-4 sm:mt-5">
          <h3 className="text-white font-bold text-lg sm:text-xl lg:text-[24px]">{title}</h3>
          <p className="mt-2 text-gray-300 text-sm sm:text-[14px] leading-relaxed">{description}</p>
        </div>

        <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
          {tags && tags.map((tag, tagIndex) => (
            <p
              key={`${title}-${tag.name}-${tagIndex}`}
              className={`text-xs sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};



// Main Projects Component
const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-8 sm:py-12 lg:py-20 relative overflow-hidden min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #030014 0%, #0a0a2e 50%, #030014 100%)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* The main content */}
      <div className="relative z-20 w-full max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="flex items-center gap-2 py-3 px-6 border border-[#7042f88b] rounded-full opacity-[0.9] mb-8 bg-[#0300145e] backdrop-blur-sm">
            <SparklesIcon className="text-[#b49bff] h-5 w-5" />
            <h1 className="text-white text-sm font-medium">My Work</h1>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 mb-6 text-center">
            Projects
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-center max-w-3xl text-base sm:text-lg leading-relaxed mb-6"
          >
            Of course, I can&apos;t call myself a tech guy without some software projects.
            <br />
            I enjoy building <span className="text-purple-400 font-semibold">Scalable</span>, <span className="text-cyan-400 font-semibold">User-oriented</span>, and <span className="text-purple-400 font-semibold">Performant</span> software and Applications.
          </motion.p>

          <div>
            <h3 className="text-white font-bold text-2xl sm:text-3xl mb-3">
              Stuff I Made
            </h3>
            <p className="text-gray-400 cursor-pointer">
              View my{" "}
              <Link
                href="https://github.com/VivekThakur999"
                target="_blank"
                className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 hover:from-purple-300 hover:to-cyan-300 font-semibold transition-all duration-300 hover:underline"
              >
                GitHub Profile
              </Link>
            </p>
          </div>
        </motion.div>

        <hr
          style={{
            borderColor: "rgba(112, 66, 248, 0.3)",
            borderStyle: "solid",
            borderWidth: "1px",
            margin: "40px auto",
            opacity: 0.5,
            maxWidth: "600px",
          }}
        />

        {/* Projects Grid - Using flex-wrap instead of grid */}
        <div className="mt-10 flex flex-wrap gap-4 sm:gap-7 justify-center">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>

        {/* View More Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-6"
        >
          <Link
            href="https://github.com/VivekThakur999"
            target="_blank"
            className="cursor-pointer px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            View More Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;