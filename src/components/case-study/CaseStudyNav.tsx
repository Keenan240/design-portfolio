"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, List } from "lucide-react";

interface Section {
  id: string;
  title: string;
}

interface CaseStudyNavProps {
  sections: Section[];
}

export default function CaseStudyNav({ sections }: CaseStudyNavProps) {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300);

      // Check if at bottom
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      setIsAtBottom(scrollTop + windowHeight >= documentHeight - 100);

      // Track active section
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const currentScroll = scrollTop + windowHeight / 3;

      let currentIdx = 0;
      sectionElements.forEach((el, idx) => {
        if (el && el.offsetTop <= currentScroll) {
          currentIdx = idx;
        }
      });
      setActiveSectionIndex(currentIdx);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowPopup(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setShowPopup(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setShowPopup(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMainClick = () => {
    if (isAtBottom) {
      scrollToTop();
    } else if (activeSectionIndex < sections.length - 1) {
      scrollToSection(sections[activeSectionIndex + 1].id);
    } else {
      scrollToTop();
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      <AnimatePresence>
        {isVisible && (
          <div className="relative flex flex-col items-center">
            {/* Popup Menu */}
            <AnimatePresence>
              {showPopup && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute bottom-full mb-4 bg-white border border-[#ededed] rounded-[20px] shadow-xl p-4 w-[240px] overflow-hidden"
                  onMouseEnter={() => setShowPopup(true)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={scrollToTop}
                      className="text-left px-3 py-2 rounded-lg hover:bg-[#f5f5f5] text-[14px] font-medium text-[#757575] hover:text-black transition-colors"
                    >
                      Back to Top
                    </button>
                    <div className="h-[1px] bg-[#ededed] my-1" />
                    {sections.map((section, idx) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`text-left px-3 py-2 rounded-lg transition-colors text-[14px] font-medium ${
                          activeSectionIndex === idx
                            ? "bg-[#f5f5f5] text-black"
                            : "text-[#757575] hover:text-black hover:bg-[#f5f5f5]"
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleMainClick}
              className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg hover:scale-105 transition-transform group"
            >
              {isAtBottom ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  <span className="text-[14px] font-medium">Back to the top</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  <span className="text-[14px] font-medium">
                    {activeSectionIndex < sections.length - 1 ? "Next section" : "Back to top"}
                  </span>
                </>
              )}
              <div className="w-[1px] h-4 bg-white/20" />
              <List className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
