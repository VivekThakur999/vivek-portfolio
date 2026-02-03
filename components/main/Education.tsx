"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { AcademicCapIcon, SparklesIcon, CalendarIcon, MapPinIcon, TrophyIcon, BookOpenIcon } from "@heroicons/react/24/solid";

const educationData = [
  {
    degree: "B-Tech in Computer Engineering",
    institution: "Godavari College of Engineering(DBATU)",
    location: "Jalgaon, Maharashtra",
    date: "2025 - 2028",
    grade: "CGPA: Presuing",
    iconBg: "#7042f8",
    points: [
      'Foucused on Software development, Data Structures & Algorithms, Web Technologies And UI/UX Designing',
      'Currently pursuing specialization in MERN Stack Development to build scalable full-stack applications.',
      'Served as Students Co-ordinator.',
      'Participated in multiple inter-collage hackathons and  codding challenges.',
      'Built multiple Projects  including an E-commernce Platform, Social Gaming Platform and Real-time Chat App.',
      'Consistently maintained academic performance with distinction across semesters.'
    ]
  },
  {
    degree: "Diploma in Enineering(Computer Enginnering)",
    institution: "KCES's College of Engineering and Management(MSBTE)",
    location: "Jalgaon, Maharashtra",
    date: "2020 - 2021",
    grade: "Percentage: 79.86%",
    iconBg: "#06d6a0",
    points: [
      "Completed Diploma in Engineering: Computer Enginnering.",
      "Secured good position in College Level Computer Science examination.",
      "Participated in district-level coding and technical quiz competitions.",
      "Developed strong logical and problem-solving foundation through programming assignments.",
      "Actively involved in organizing annual tech fest and computer exhibitions."
    ]
  }
];

const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-2 relative overflow-hidden min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #030014 0%, #0a0a2e 50%, #030014 100%)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <div className="flex items-center gap-2 py-3 px-6 border border-[#7042f88b] rounded-full opacity-[0.9] mb-8 bg-[#0300145e] backdrop-blur-sm">
            <SparklesIcon className="text-[#b49bff] h-5 w-5" />
            <h1 className="text-white text-sm font-medium">Educational Journey</h1>
          </div>

          <p className="text-gray-400 text-[18px] text-center uppercase tracking-wider mb-4">
            What I have learned so far
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 text-center">
            Academic Excellence
          </h2>
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

        {/* Custom Timeline */}
        <div className="mt-20 relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 opacity-30 transform md:-translate-x-1/2"></div>

          {educationData.map((education, index) => (
            <motion.div
              key={index}
              variants={slideInFromLeft(0.5 + index * 0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-[50%] md:pl-0' : 'md:pl-[50%] md:pr-0'
                } pl-20`}
            >
              {/* Timeline icon */}
              <div
                className="absolute left-0 md:left-1/2 top-8 w-16 h-16 rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10"
                style={{
                  background: education.iconBg,
                  boxShadow: `0 0 30px ${education.iconBg}`,
                }}
              >
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>

              {/* Content card */}
              <div className={`${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <div className="group relative p-8 rounded-2xl border border-[#7042f88b] bg-gradient-to-br from-[#0c0428] via-[#150342] to-[#0c0428] backdrop-blur-sm hover:border-[#7042f8] transition-all duration-500 overflow-hidden">
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Header */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                      {education.degree}
                    </h3>
                    <h4 className="text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold mb-3">
                      {education.institution}
                    </h4>

                    {/* Location and Grade */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a0b2e] border border-[#7042f88b]">
                        <MapPinIcon className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300 text-sm">{education.location}</span>
                      </div>
                      <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold">
                        {education.grade}
                      </div>
                    </div>

                    <hr
                      style={{
                        borderColor: "rgba(112, 66, 248, 0.3)",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        margin: "20px 0",
                        opacity: 0.5,
                      }}
                    />

                    {/* Points */}
                    <ul className="mt-5 space-y-3">
                      {education.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start gap-3 text-gray-300 text-[14px] leading-relaxed"
                        >
                          <div className="flex-shrink-0 w-2 h-2 mt-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-2xl border border-[#7042f88b] bg-gradient-to-br from-[#0c0428] via-[#150342] to-[#0c0428] backdrop-blur-sm">
            <div className="flex items-center gap-3 justify-center mb-6">
              <TrophyIcon className="w-8 h-8 text-cyan-400" />
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
                Certifications & Continuous Learning
              </h3>
            </div>
            <p className="text-gray-300 text-center mb-8 leading-relaxed">
              Beyond formal education, I&apos;m committed to continuous learning through online simulations,
              certifications, and full-stack development projects. I focus on enhancing my technical,
              analytical, and problem-solving skills through real-world learning experiences.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Accenture - Developer and Technology Job Simulation ",
                "Jp Morgan Chase - Java Bootcamp",
                "JavaScript Bootcamp - HackerRank",
                "Accenture - Introduction to Technology Apprenticeship Job Simulation ",
              ].map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-[#1a0b2e]/50 border border-[#7042f88b]/30 hover:border-purple-500 transition-all duration-300 group"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{cert}</span>
                </div>
              ))}
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default Education;