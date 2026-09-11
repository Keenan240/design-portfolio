"use client";

import { useReducedMotion } from "framer-motion";
import ExperienceList from "@/components/ExperienceList";
import WorldMap from "@/components/WorldMap";
import FadeIn from "@/components/FadeIn";
import { experience, sideStuff } from "@/data/experience";
import { useTheme } from "@/components/ThemeProvider";

const ABOUT_PHOTOS = [
  "/about/about-1.png",
  "/about/about-2.png",
  "/about/about-3.png",
  "/about/about-5.png",
  "/about/about-6.png",
  "/about/about-7.png",
  "/about/about-8.png",
  "/about/about-9.png",
] as const;

export default function About() {
  const reduceMotion = useReducedMotion();
  const { theme, isDark } = useTheme();

  return (
    <section className="flex min-w-0 flex-col gap-16 px-4 pb-28 md:gap-16 md:px-0 md:pb-16 lg:gap-20">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {ABOUT_PHOTOS.map((src, index) => (
          <FadeIn key={src} delay={reduceMotion ? 0 : index * 0.04}>
            <div
              className={`aspect-[4/3] overflow-hidden rounded-[22px] ${
                isDark ? "bg-[#252525]" : "bg-[#F5F5F5]"
              }`}
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="flex flex-col gap-16 md:gap-[100px]">
        <FadeIn>
          <ExperienceList
            title="experience :D"
            items={experience}
            theme={theme}
          />
        </FadeIn>
        <FadeIn>
          <ExperienceList
            title="side stuff :p"
            items={sideStuff}
            theme={theme}
          />
        </FadeIn>
        <FadeIn>
          <WorldMap theme={theme} />
        </FadeIn>
      </div>
    </section>
  );
}
