"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HomeIntroOverlay from "@/components/HomeIntroOverlay";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";
import { projects } from "@/data/projects";

export default function HomePageWithIntro() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="relative">
      <HomeIntroOverlay onComplete={() => setIntroDone(true)} />

      <motion.div
        className="hidden sm:block absolute z-0 top-32 left-10 md:top-40 md:left-40 w-[320px] md:w-[420px]"
        initial={{ opacity: 0, y: 24, rotate: -10 }}
        animate={
          introDone
            ? { opacity: 1, y: 0, rotate: -10 }
            : { opacity: 0, y: 24, rotate: -10 }
        }
        transition={{
          duration: 0.45,
          ease: [0.21, 0.47, 0.32, 0.98],
          delay: 0.1,
        }}
      >
        <img
          src="/top-artists-card.png"
          alt="Top artists card detail"
          className="w-full rounded-2xl shadow-lg"
        />
        <motion.img
          src="/valorant-character.png"
          alt=""
          aria-hidden
          className="absolute -bottom-28 -left-12 w-24 md:w-36 object-contain"
          initial={{ opacity: 0 }}
          animate={introDone ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
            delay: 0.25,
          }}
        />
      </motion.div>

      <motion.img
        src="/frame-21-1.svg"
        alt="Boarding pass card detail"
        className="hidden sm:block absolute z-0 top-40 right-6 md:top-44 md:right-16 w-[260px] md:w-[320px] rounded-2xl"
        initial={{ opacity: 0, y: 24, rotate: 10 }}
        animate={
          introDone
            ? { opacity: 1, y: 0, rotate: 10 }
            : { opacity: 0, y: 24, rotate: 10 }
        }
        transition={{
          duration: 0.45,
          ease: [0.21, 0.47, 0.32, 0.98],
          delay: 0.15,
        }}
      />

      <motion.img
        src="/frame-21-2.svg"
        alt="Boarding pass card detail"
        className="hidden sm:block absolute z-0 top-56 right-6 md:top-64 md:right-16 w-[260px] md:w-[320px] rounded-2xl"
        initial={{ opacity: 0, y: 24, rotate: 10 }}
        animate={
          introDone
            ? { opacity: 1, y: 0, rotate: 10 }
            : { opacity: 0, y: 24, rotate: 10 }
        }
        transition={{
          duration: 0.45,
          ease: [0.21, 0.47, 0.32, 0.98],
          delay: 0.2,
        }}
      />

      <div className="px-4 md:px-0">
        <div className="max-w-[1280px] mx-auto">
          <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={
              introDone
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 10 }
            }
            transition={{
              duration: 0.5,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="relative z-10 -mt-8 flex flex-col items-center gap-2"
          >
            <h1 className="text-[48px] font-semibold text-black">
              Keenan Yang
            </h1>
            <p className="text-base font-normal text-[#4a4a4a]">
              Product Design Intern @ Scotiabank
            </p>
          </motion.div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[40px] pb-20">
            {projects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
