"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const EMAIL = "keenan.yang1027@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/keenanyang1027";
const GITHUB = "https://github.com/Keenan240";

const menuItems = [
  { id: "email", label: "Email", href: null as string | null },
  { id: "linkedin", label: "LinkedIn", href: LINKEDIN },
  { id: "github", label: "GitHub", href: GITHUB },
] as const;

/** Arc positions to the left of the menu FAB (mobile). */
const arcOffsets = [
  { x: -118, y: -78 },
  { x: -138, y: 0 },
  { x: -118, y: 78 },
] as const;

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCopiedToast, setShowCopiedToast] = useState(false);
  const clusterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!showCopiedToast) return;
    const t = setTimeout(() => setShowCopiedToast(false), 2000);
    return () => clearTimeout(t);
  }, [showCopiedToast]);

  useEffect(() => {
    if (!menuOpen) return;

    function handlePointer(event: MouseEvent | TouchEvent) {
      if (!clusterRef.current) return;
      if (!clusterRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setShowCopiedToast(true);
      setMenuOpen(false);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  const fabSurface = isDark
    ? "border-white/10 bg-[#252525]/95 text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:bg-[#2e2e2e] focus-visible:ring-white/40"
    : "border-black/10 bg-white/95 text-[#2A2A2A] shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-[#F5F5F5] focus-visible:ring-black/20";

  const pillSurface = isDark
    ? "border-white/10 bg-[#252525]/95 text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
    : "border-black/10 bg-white/95 text-[#2A2A2A] shadow-[0_8px_24px_rgba(0,0,0,0.12)]";

  return (
    <>
      {/* Desktop / tablet: theme only */}
      <button
        type="button"
        onClick={toggleTheme}
        className={`fixed bottom-8 right-8 z-[110] hidden h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 md:flex ${fabSurface}`}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>

      {/* Mobile: menu FAB + larger theme toggle */}
      <div
        ref={clusterRef}
        className="fixed bottom-6 right-5 z-[110] flex flex-col items-end gap-3 md:hidden"
      >
        <div className="relative flex h-14 w-14 items-center justify-center">
          <AnimatePresence>
            {menuOpen &&
              menuItems.map((item, index) => {
                const offset = arcOffsets[index] ?? arcOffsets[0];
                const content = (
                  <span className="px-4 py-2.5 text-[15px] font-semibold tracking-[-0.07em]">
                    {item.label}
                  </span>
                );

                return (
                  <motion.div
                    key={item.id}
                    initial={
                      reduceMotion
                        ? { opacity: 1, x: offset.x, y: offset.y, scale: 1 }
                        : { opacity: 0, x: 0, y: 0, scale: 0.7 }
                    }
                    animate={{ opacity: 1, x: offset.x, y: offset.y, scale: 1 }}
                    exit={
                      reduceMotion
                        ? undefined
                        : { opacity: 0, x: 0, y: 0, scale: 0.7 }
                    }
                    transition={{
                      duration: reduceMotion ? 0 : 0.28,
                      delay: reduceMotion ? 0 : index * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center rounded-full border backdrop-blur-md ${pillSurface}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {content}
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={copyEmail}
                        className={`inline-flex items-center justify-center rounded-full border backdrop-blur-md ${pillSurface}`}
                      >
                        {content}
                      </button>
                    )}
                  </motion.div>
                );
              })}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 ${fabSurface}`}
            aria-label={menuOpen ? "Close contact menu" : "Open contact menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className={`flex h-14 w-14 items-center justify-center rounded-full border backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 ${fabSurface}`}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
        </button>
      </div>

      {showCopiedToast && (
        <div
          className={`fixed bottom-36 left-1/2 z-[120] -translate-x-1/2 rounded-lg px-4 py-2.5 text-sm font-medium shadow-lg md:bottom-8 ${
            isDark ? "bg-white text-[#2A2A2A]" : "bg-[#1E1E1E] text-white"
          }`}
          role="status"
          aria-live="polite"
        >
          Copied Email
        </div>
      )}
    </>
  );
}
