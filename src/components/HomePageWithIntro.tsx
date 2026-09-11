"use client";

import { motion, useReducedMotion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const smoothEase = [0.16, 1, 0.3, 1] as const;

export default function HomePageWithIntro() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      {/* Mobile: cascading / overlapping card stack */}
      <section
        aria-label="Projects"
        className="relative px-4 pb-[max(6rem,calc(100svh-28rem))] pt-2 md:hidden"
      >
        {projects.map((project, index) => {
          const isLast = index === projects.length - 1;
          return (
            <div
              key={project.id}
              className={`sticky ${isLast ? "mb-0" : "mb-[-3.5rem]"}`}
              style={{
                top: `${1.1 + index * 0.55}rem`,
                zIndex: index + 1,
              }}
            >
              <div className="origin-top drop-shadow-[0_-8px_24px_rgba(0,0,0,0.2)]">
                <ProjectCard project={project} />
              </div>
            </div>
          );
        })}
      </section>

      {/* Desktop: project grid */}
      <section
        aria-label="Projects"
        className="hidden min-w-0 grid-cols-1 gap-5 pb-6 sm:grid-cols-2 md:grid lg:grid-cols-3 lg:gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="min-w-0 w-full"
            initial={
              reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.88,
              delay: reduceMotion ? 0 : 0.08 + index * 0.07,
              ease: smoothEase,
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </section>
    </>
  );
}
