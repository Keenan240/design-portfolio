"use client";

import ExperienceList from "@/components/ExperienceList";
import WorldMap from "@/components/WorldMap";
import { experience, sideStuff } from "@/data/experience";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Photo Gallery Header - Full Width */}
      <div className="w-full mb-32 overflow-hidden">
        <FadeIn direction="down" className="relative h-[400px] flex justify-center items-center">
          <div className="flex gap-8 px-10">
            {/* Left side extensions */}
            <motion.div
              initial={{ rotate: -6, scale: 1 }}
              whileHover={{ scale: 1.05, zIndex: 50, rotate: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-[455px] h-[280px] border border-[#757575] rounded-[22px] shrink-0 cursor-pointer relative overflow-hidden"
            >
              <img src="/about/about-1.png" alt="" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ rotate: 2, scale: 1 }}
              whileHover={{ scale: 1.05, zIndex: 50, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-[455px] h-[280px] border border-[#757575] rounded-[22px] shrink-0 -ml-40 cursor-pointer relative overflow-hidden"
            >
              <img src="/about/about-2.png" alt="" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* Main 4 from Figma */}
            <motion.div
              initial={{ rotate: 3, scale: 1 }}
              whileHover={{ scale: 1.05, zIndex: 50, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-[455px] h-[280px] border border-[#757575] rounded-[22px] shrink-0 -ml-40 cursor-pointer relative overflow-hidden"
            >
              <img src="/about/about-3.png" alt="" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ rotate: -4, scale: 1 }}
              whileHover={{ scale: 1.05, zIndex: 50, rotate: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-[455px] h-[280px] border border-[#757575] rounded-[22px] shrink-0 -ml-40 mt-10 cursor-pointer relative overflow-hidden"
            >
              <img src="/about/about-5.png" alt="" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ rotate: 7, scale: 1 }}
              whileHover={{ scale: 1.05, zIndex: 50, rotate: 7 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-[455px] h-[280px] border border-[#757575] rounded-[22px] shrink-0 -ml-40 cursor-pointer relative overflow-hidden"
            >
              <img src="/about/about-6.png" alt="" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ rotate: -4, scale: 1 }}
              whileHover={{ scale: 1.05, zIndex: 50, rotate: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-[455px] h-[280px] border border-[#757575] rounded-[22px] shrink-0 -ml-40 mt-[-20px] cursor-pointer relative overflow-hidden"
            >
              <img src="/about/about-7.png" alt="" className="w-full h-full object-cover" />
            </motion.div>
            
            {/* Right side extensions */}
            <motion.div
              initial={{ rotate: 12, scale: 1 }}
              whileHover={{ scale: 1.05, zIndex: 50, rotate: 12 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-[455px] h-[280px] border border-[#757575] rounded-[22px] shrink-0 -ml-40 cursor-pointer relative overflow-hidden"
            >
              <img src="/about/about-8.png" alt="" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ rotate: -2, scale: 1 }}
              whileHover={{ scale: 1.05, zIndex: 50, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-[455px] h-[280px] border border-[#757575] rounded-[22px] shrink-0 -ml-40 cursor-pointer relative overflow-hidden"
            >
              <img src="/about/about-9.png" alt="" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </FadeIn>
      </div>

      <div className="max-w-[1062px] mx-auto px-4 md:px-0">
        <div className="flex flex-col gap-[140px]">
          <FadeIn>
            <ExperienceList title="experience :D" items={experience} />
          </FadeIn>
          <FadeIn>
            <ExperienceList title="side stuff :p" items={sideStuff} />
          </FadeIn>
        </div>

        {/* World Map Section */}
        <FadeIn>
          <WorldMap />
        </FadeIn>
      </div>
    </div>
  );
}

