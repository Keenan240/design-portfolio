"use client";

import { useState, useEffect, type RefObject } from "react";

interface Section {
  id: string;
  title: string;
}

interface CaseStudyNavProps {
  sections: Section[];
  theme?: "light" | "dark";
  scrollRootRef?: RefObject<HTMLElement | null>;
}

export default function CaseStudyNav({
  sections,
  theme = "light",
  scrollRootRef,
}: CaseStudyNavProps) {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const isDark = theme === "dark";

  useEffect(() => {
    const root = scrollRootRef?.current ?? null;

    const handleScroll = () => {
      const sectionElements = sections.map((s) => document.getElementById(s.id));

      if (root) {
        const rootRect = root.getBoundingClientRect();
        const marker = rootRect.top + root.clientHeight / 3;
        let currentIdx = 0;
        sectionElements.forEach((el, idx) => {
          if (!el) return;
          const top = el.getBoundingClientRect().top;
          if (top <= marker) currentIdx = idx;
        });
        setActiveSectionIndex(currentIdx);
        return;
      }

      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const currentScroll = scrollTop + windowHeight / 3;
      let currentIdx = 0;
      sectionElements.forEach((el, idx) => {
        if (el && el.offsetTop <= currentScroll) {
          currentIdx = idx;
        }
      });
      setActiveSectionIndex(currentIdx);
    };

    handleScroll();
    const target: HTMLElement | Window = root ?? window;
    target.addEventListener("scroll", handleScroll, { passive: true });
    return () => target.removeEventListener("scroll", handleScroll);
  }, [sections, scrollRootRef]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const root = scrollRootRef?.current;
    if (root) {
      const rootRect = root.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const nextTop = root.scrollTop + (elRect.top - rootRect.top) - 24;
      root.scrollTo({ top: nextTop, behavior: "smooth" });
      return;
    }

    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav aria-label="Case study sections" className="w-full">
      <ul className="flex flex-col gap-2">
        {sections.map((section, idx) => (
          <li key={section.id}>
            <button
              type="button"
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left text-[13px] leading-snug tracking-[-0.07em] transition-colors md:text-[14px] ${
                activeSectionIndex === idx
                  ? isDark
                    ? "font-semibold text-white"
                    : "font-semibold text-[#2A2A2A]"
                  : isDark
                    ? "font-normal text-[#ACACAC] hover:text-white"
                    : "font-normal text-[#757575] hover:text-[#2A2A2A]"
              }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
