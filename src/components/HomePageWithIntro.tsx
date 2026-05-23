"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";
import {
  projects,
  type PortfolioCategory,
} from "@/data/projects";

const smoothEase = [0.16, 1, 0.3, 1] as const;

export default function HomePageWithIntro() {
  const [category, setCategory] = useState<PortfolioCategory>("product");
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(
    () => projects.filter((p) => p.portfolioCategory === category),
    [category],
  );

  const heroContainer = {
    hidden: {},
    visible: {
      transition: reduceMotion
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren: 0.11, delayChildren: 0.06 },
    },
  };

  const heroItem = {
    hidden: reduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.92,
        ease: smoothEase,
      },
    },
  };

  const panelTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: smoothEase };

  return (
    <div className="min-h-screen">
      <motion.div
        className="mx-auto max-w-[1280px] px-4 md:px-8"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <section className="flex flex-col items-center pt-[252px] text-center md:pt-[284px]">
          <motion.h1
            variants={heroItem}
            className="max-w-4xl text-[clamp(2.25rem,7vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.07em] text-black"
          >
            Building from Zero
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="mt-7 max-w-xl text-base leading-relaxed text-[#ACACAC] md:text-lg"
          >
            Currently at{" "}
            <span className="font-semibold text-[#ACACAC]">Scotiabank</span>
          </motion.p>
          <motion.p
            variants={heroItem}
            className="mt-0 max-w-xl text-base leading-relaxed text-[#ACACAC] md:text-lg"
          >
            Always{" "}
            <span className="font-semibold text-[#ACACAC]">
              building something new
            </span>
          </motion.p>
        </section>

        <motion.div
          variants={heroItem}
          className="mt-[200px] flex justify-center pb-14 md:pb-20"
        >
          <div
            className="relative inline-flex rounded-full bg-[#ececec] p-1"
            role="tablist"
            aria-label="Work category"
          >
            <button
              type="button"
              role="tab"
              aria-selected={category === "product"}
              onClick={() => setCategory("product")}
              className="relative min-w-[132px] rounded-full py-2.5 text-sm font-medium text-black md:min-w-[148px]"
            >
              {category === "product" && (
                <motion.span
                  layoutId="home-category-pill"
                  className="absolute inset-0 z-0 rounded-full bg-white shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">Products</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={category === "side"}
              onClick={() => setCategory("side")}
              className="relative min-w-[132px] rounded-full py-2.5 text-sm font-medium text-black md:min-w-[148px]"
            >
              {category === "side" && (
                <motion.span
                  layoutId="home-category-pill"
                  className="absolute inset-0 z-0 rounded-full bg-white shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">Side work</span>
            </button>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence mode="wait">
        {category === "side" ? (
          <motion.section
            key="side"
            role="tabpanel"
            aria-label="Side work"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
            transition={panelTransition}
            className="mx-auto box-border grid w-full max-w-[1393px] grid-cols-1 gap-[25px] px-4 pb-24 md:grid-cols-2 md:items-start md:gap-[25px] md:px-0"
          >
            {filtered.map((project, index) => (
              <FadeIn
                key={project.id}
                delay={reduceMotion ? 0 : 0.06 + index * 0.09}
                className="min-w-0 w-full"
              >
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </motion.section>
        ) : (
          <motion.section
            key="product"
            role="tabpanel"
            aria-label="Products"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
            transition={panelTransition}
            className="mx-auto box-border grid w-full max-w-[1393px] grid-cols-1 gap-[25px] px-4 pb-24 md:grid-cols-2 md:items-start md:gap-[25px] md:px-0"
          >
            {filtered.map((project, index) => (
              <FadeIn
                key={project.id}
                delay={reduceMotion ? 0 : 0.06 + index * 0.09}
                className="min-w-0 w-full"
              >
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
