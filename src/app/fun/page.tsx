"use client";

import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { funPhotos } from "@/data/fun-photos";

const smoothEase = [0.16, 1, 0.3, 1] as const;

const DESKTOP_OFFSETS = [0, 48, 24, 72];
const MOBILE_OFFSETS  = [0, 36];

export default function FunPage() {
  const reduceMotion = useReducedMotion();

  const heroContainer = {
    hidden: {},
    visible: {
      transition: reduceMotion
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren: 0.11, delayChildren: 0.06 },
    },
  };

  const heroItem = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.92, ease: smoothEase },
    },
  };

  const desktopCols: (typeof funPhotos)[] = [[], [], [], []];
  funPhotos.forEach((photo, i) => desktopCols[i % 4].push(photo));

  const mobileCols: (typeof funPhotos)[] = [[], []];
  funPhotos.forEach((photo, i) => mobileCols[i % 2].push(photo));

  return (
    <div className="min-h-screen">
      {/* Hero heading */}
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
            Captured by me
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="mt-7 max-w-xl text-base leading-relaxed text-[#ACACAC] md:text-lg"
          >
            My full time side hobby since I was 8
          </motion.p>
        </section>
      </motion.div>

      {/* Photo grid — pushed far enough below to require scrolling */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-12 mt-[200px] pb-24">
        <FadeIn>
          {/* Desktop: 4-column staggered */}
          <div className="hidden sm:flex gap-3 lg:gap-4 items-start">
            {desktopCols.map((col, colIdx) => (
              <div
                key={colIdx}
                className="flex flex-1 flex-col gap-3 lg:gap-4"
                style={{ marginTop: DESKTOP_OFFSETS[colIdx] }}
              >
                {col.map((photo) => (
                  <div
                    key={photo.id}
                    className="group overflow-hidden rounded-[10px] shadow-[0_2px_16px_0_rgba(0,0,0,0.08)]"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile: 2-column staggered */}
          <div className="flex sm:hidden gap-3 items-start">
            {mobileCols.map((col, colIdx) => (
              <div
                key={colIdx}
                className="flex flex-1 flex-col gap-3"
                style={{ marginTop: MOBILE_OFFSETS[colIdx] }}
              >
                {col.map((photo) => (
                  <div
                    key={photo.id}
                    className="group overflow-hidden rounded-[8px] shadow-[0_2px_12px_0_rgba(0,0,0,0.08)]"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-auto block"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
