"use client";

import { useState, useEffect } from "react";

interface Section {
  id: string;
  title: string;
}

interface CaseStudyNavProps {
  sections: Section[];
}

export default function CaseStudyNav({ sections }: CaseStudyNavProps) {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const sectionElements = sections.map((s) => document.getElementById(s.id));
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav aria-label="Case study sections" className="w-full">
      <ul className="flex flex-col gap-2">
        {sections.map((section, idx) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left text-[22px] leading-tight tracking-[-0.07em] transition-colors ${
                activeSectionIndex === idx
                  ? "font-semibold text-black"
                  : "font-normal text-[#ACACAC] hover:text-black"
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
