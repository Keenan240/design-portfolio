"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/data/projects";
import CaseStudyContent from "@/components/case-study/CaseStudyContent";
import { useTheme } from "@/components/ThemeProvider";

interface CaseStudyPageViewProps {
  project: Project;
}

export default function CaseStudyPageView({ project }: CaseStudyPageViewProps) {
  const reduceMotion = useReducedMotion();
  const { theme, isDark } = useTheme();
  /** True once the hero title has scrolled fully out of view */
  const [showBubbles, setShowBubbles] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    setShowBubbles(false);
  }, [project.id]);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      // Navbar only at the very top; any scroll down switches to bubbles
      setShowBubbles(window.scrollY > 8);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [project.id]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const headerEase = [0.22, 1, 0.36, 1] as const;
  const bubbleEase = [0.16, 1, 0.3, 1] as const;

  const backButtonClass = isDark
    ? "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#252525] text-[#ACACAC] transition-colors hover:bg-[#2e2e2e] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
    : "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F0F0F0] text-[#757575] transition-colors hover:bg-[#E6E6E6] hover:text-[#2A2A2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20";

  const backBubbleClass = isDark
    ? "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#252525]/90 text-[#ACACAC] shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-colors hover:bg-[#2e2e2e] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
    : "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/90 text-[#757575] shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md transition-colors hover:bg-[#F5F5F5] hover:text-[#2A2A2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20";

  const titleBubbleClass = isDark
    ? "max-w-[min(calc(100%-4.5rem),440px)] rounded-full border border-white/10 bg-[#252525]/90 px-6 py-2.5 text-center shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md md:px-7 md:py-3"
    : "max-w-[min(calc(100%-4.5rem),440px)] rounded-full border border-black/10 bg-white/90 px-6 py-2.5 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md md:px-7 md:py-3";

  const mutedText = isDark ? "text-[#ACACAC]" : "text-[#757575]";
  const primaryText = isDark ? "text-white" : "text-[#2A2A2A]";
  const chromeTitle =
    project.id === "scotiabank-unreleased-feature"
      ? "Trusted Locations"
      : project.title;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#1E1E1E] text-white" : "bg-white text-[#2A2A2A]"
      }`}
    >
      {/* Both chrome layers stay mounted. Unique fade/slide for each direction. */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40">
        <motion.div
          initial={false}
          animate={
            reduceMotion
              ? { opacity: showBubbles ? 0 : 1 }
              : showBubbles
                ? { opacity: 0, y: -10 }
                : { opacity: 1, y: 0 }
          }
          transition={
            showBubbles
              ? { duration: 0.2, ease: headerEase }
              : { duration: 0.28, delay: 0.06, ease: headerEase }
          }
          className={`backdrop-blur-sm transition-colors duration-300 ${
            isDark ? "bg-[#1E1E1E]/95" : "bg-white/95"
          } ${showBubbles ? "pointer-events-none" : "pointer-events-auto"}`}
          aria-hidden={showBubbles}
        >
          <div className="mx-auto w-full max-w-[1400px] px-6 pt-6 md:px-10 lg:px-14">
            <div className="flex items-center justify-between gap-4 pt-4">
              <Link
                href="/"
                tabIndex={showBubbles ? -1 : 0}
                className={backButtonClass}
                aria-label="Back to work"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div className="min-w-0 text-right">
                <p
                  className={`text-[12px] font-semibold uppercase tracking-[-0.07em] ${mutedText}`}
                >
                  Case study
                </p>
                <p
                  className={`truncate text-[20px] font-semibold tracking-[-0.07em] md:text-[22px] ${primaryText}`}
                >
                  {chromeTitle}
                </p>
              </div>
            </div>
            {/* Keep generous bottom chrome spacing without the divider line */}
            <div className="pb-[52px]" aria-hidden />
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={
            reduceMotion
              ? { opacity: showBubbles ? 1 : 0 }
              : showBubbles
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 18 }
          }
          transition={
            showBubbles
              ? { duration: 0.32, delay: 0.08, ease: bubbleEase }
              : { duration: 0.18, ease: bubbleEase }
          }
          className="absolute inset-x-0 top-0"
          aria-hidden={!showBubbles}
        >
          <div className="mx-auto flex w-full max-w-[1400px] items-start justify-between gap-3 px-6 pt-6 md:px-10 lg:px-14">
            <Link
              href="/"
              tabIndex={showBubbles ? 0 : -1}
              className={`${backBubbleClass} ${
                showBubbles ? "pointer-events-auto" : "pointer-events-none"
              }`}
              aria-label="Back to work"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              tabIndex={showBubbles ? 0 : -1}
              className={`${titleBubbleClass} ${
                showBubbles ? "pointer-events-auto" : "pointer-events-none"
              }`}
              aria-label="Back to top"
            >
              <p
                className={`truncate text-[11px] font-semibold uppercase tracking-[-0.07em] ${mutedText}`}
              >
                Case study
              </p>
              <p
                className={`truncate text-[15px] font-semibold leading-tight tracking-[-0.07em] md:text-[16px] ${primaryText}`}
              >
                {chromeTitle}
              </p>
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={false}
        animate={{ paddingTop: showBubbles ? 40 : 148 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : showBubbles
              ? { duration: 0.28, ease: headerEase }
              : { duration: 0.3, delay: 0.05, ease: bubbleEase }
        }
      >
        <CaseStudyContent project={project} theme={theme} compact />
      </motion.div>
    </div>
  );
}
