import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

interface Props {
  index: number;
  src: string;
  title: string;
  description: string;
  tags?: { name: string; color: string }[];
  source_code_link?: string;
}

const ProjectCard = ({ index, src, title, description, tags, source_code_link }: Props) => {
  return (
    <motion.div
      variants={{
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { delay: index * 0.1, duration: 0.75 } }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1.1}
        transitionSpeed={450}
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.2}
        glareColor="#7042f8"
        glarePosition="all"
      >
        <div className="bg-gradient-to-br from-[#0c0428] via-[#150342] to-[#0c0428] p-5 rounded-2xl sm:w-[360px] w-full border border-[#7042f88b] hover:border-[#7042f8] transition-colors duration-300">
          <div className="relative w-full h-[230px] rounded-xl overflow-hidden">
            <Image
              src={src}
              alt={title}
              width={360}
              height={230}
              className="w-full h-full object-cover"
            />
            
            {source_code_link && (
              <div className="absolute inset-0 flex justify-end m-3">
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
                >
                  <svg className="w-1/2 h-1/2 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </div>
            )}
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{title}</h3>
            <p className="mt-2 text-gray-300 text-[14px] leading-relaxed">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags && tags.map((tag, tagIndex) => (
              <p key={`${title}-${tag.name}-${tagIndex}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
