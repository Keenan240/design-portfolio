"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const smoothEase = [0.16, 1, 0.3, 1] as const;
const RESUME =
  "https://drive.google.com/file/d/1iT9FR98j0llXF2S-UXUkM6wpao7c9wme/view?usp=sharing";

export default function PortfolioShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { isDark } = useTheme();
  const isWork = pathname === "/";
  const isAbout = pathname === "/about";
  const panelKey = isAbout ? "about" : "work";

  const ctaClass = isDark
    ? "inline-flex cursor-pointer items-center justify-center rounded-xl bg-[#2F2F2F] px-4 py-2.5 text-[15px] font-medium tracking-[-0.07em] text-white transition-colors hover:bg-[#3A3A3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 md:rounded-2xl md:bg-transparent md:px-3.5 md:py-1.5 md:text-[18px] md:hover:bg-white/10 lg:text-[20px]"
    : "inline-flex cursor-pointer items-center justify-center rounded-xl bg-[#F0F0F0] px-4 py-2.5 text-[15px] font-medium tracking-[-0.07em] text-[#2A2A2A] transition-colors hover:bg-[#E6E6E6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 md:rounded-2xl md:bg-transparent md:px-3.5 md:py-1.5 md:text-[18px] md:hover:bg-black/5 lg:text-[20px]";

  const ctaActiveClass = isDark
    ? `${ctaClass} md:bg-white/10`
    : `${ctaClass} md:bg-black/5`;

  const desktopCtaClass = isDark
    ? "inline-flex w-fit cursor-pointer items-center justify-start rounded-2xl bg-transparent px-3.5 py-1.5 text-[18px] font-medium tracking-[-0.07em] text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 lg:text-[20px]"
    : "inline-flex w-fit cursor-pointer items-center justify-start rounded-2xl bg-transparent px-3.5 py-1.5 text-[18px] font-medium tracking-[-0.07em] text-[#2A2A2A] transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 lg:text-[20px]";

  const desktopCtaActiveClass = isDark
    ? `${desktopCtaClass} bg-white/10`
    : `${desktopCtaClass} bg-black/5`;

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    const reset = () => window.scrollTo(0, 0);
    reset();
    const raf = requestAnimationFrame(reset);
    const t = window.setTimeout(reset, 0);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
    };
  }, [panelKey]);

  const railContainer = {
    hidden: {},
    visible: {
      transition: reduceMotion
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.04 },
    },
  };

  const railItem = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: smoothEase,
      },
    },
  };

  const primaryText = isDark ? "text-white" : "text-[#2A2A2A]";
  const mutedText = isDark ? "text-[#ACACAC]" : "text-[#757575]";

  const identityBlock = (
    <>
      <motion.h1
        variants={railItem}
        className={`text-[28px] font-semibold leading-tight tracking-[-0.07em] md:text-[32px] ${primaryText}`}
      >
        Keenan Yang
      </motion.h1>
      <motion.p
        variants={railItem}
        className={`mt-3 max-w-[18rem] text-[18px] font-medium leading-snug tracking-[-0.07em] md:text-left md:text-[20px] ${mutedText}`}
      >
        Product designer that builds from zero
      </motion.p>
    </>
  );

  const mobilePrimaryCtas = (
    <motion.div
      variants={railItem}
      className="mt-6 flex w-full flex-row flex-wrap items-center justify-center gap-2"
    >
      {isWork ? (
        <span className={ctaActiveClass} aria-current="page">
          Work
        </span>
      ) : (
        <Link href="/" className={ctaClass}>
          Work
        </Link>
      )}
      {isAbout ? (
        <span className={ctaActiveClass} aria-current="page">
          About
        </span>
      ) : (
        <Link href="/about" className={ctaClass}>
          About
        </Link>
      )}
      <a
        href={RESUME}
        target="_blank"
        rel="noopener noreferrer"
        className={ctaClass}
      >
        Resume
      </a>
    </motion.div>
  );

  const desktopPrimaryCtas = (
    <motion.div
      variants={railItem}
      className="mt-10 flex w-full flex-col items-start gap-1"
    >
      {isWork ? (
        <span className={desktopCtaActiveClass} aria-current="page">
          Work
        </span>
      ) : (
        <Link href="/" className={desktopCtaClass}>
          Work
        </Link>
      )}
      {isAbout ? (
        <span className={desktopCtaActiveClass} aria-current="page">
          About
        </span>
      ) : (
        <Link href="/about" className={desktopCtaClass}>
          About
        </Link>
      )}
      <a
        href={RESUME}
        target="_blank"
        rel="noopener noreferrer"
        className={desktopCtaClass}
      >
        Resume
      </a>
    </motion.div>
  );

  const desktopContactCtas = (
    <motion.div
      variants={railItem}
      className="mt-auto flex w-full flex-col items-start gap-1 pb-2"
    >
      <DesktopContactLinks isDark={isDark} />
    </motion.div>
  );

  const panelTransition = {
    duration: reduceMotion ? 0 : 0.42,
    ease: smoothEase,
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#1E1E1E] text-white" : "bg-white text-[#2A2A2A]"
      }`}
    >
      {/* Mobile: compact identity + primary nav row */}
      <motion.section
        className="flex w-full flex-col items-center px-6 pb-6 pt-14 text-center md:hidden"
        variants={railContainer}
        initial="hidden"
        animate="visible"
        aria-label="Profile"
      >
        {identityBlock}
        {mobilePrimaryCtas}
      </motion.section>

      <div className="mx-auto w-full md:flex md:min-h-screen md:flex-row md:gap-8 md:px-6 md:py-8 lg:gap-10 lg:px-7 lg:py-8">
        <motion.aside
          className="hidden w-full shrink-0 flex-col md:sticky md:top-8 md:flex md:h-[calc(100vh-4rem)] md:w-[220px] lg:w-[260px]"
          variants={railContainer}
          initial="hidden"
          animate="visible"
        >
          <div>
            {identityBlock}
            {desktopPrimaryCtas}
          </div>
          {desktopContactCtas}
        </motion.aside>

        <div className="relative min-w-0 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={panelKey}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={panelTransition}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function DesktopContactLinks({ isDark }: { isDark: boolean }) {
  const [showCopiedToast, setShowCopiedToast] = useState(false);
  const EMAIL = "keenan.yang1027@gmail.com";
  const LINKEDIN = "https://www.linkedin.com/in/keenanyang1027";
  const GITHUB = "https://github.com/Keenan240";

  const desktopCtaClass = isDark
    ? "inline-flex w-fit cursor-pointer items-center justify-start rounded-2xl bg-transparent px-3.5 py-1.5 text-[18px] font-medium tracking-[-0.07em] text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 lg:text-[20px]"
    : "inline-flex w-fit cursor-pointer items-center justify-start rounded-2xl bg-transparent px-3.5 py-1.5 text-[18px] font-medium tracking-[-0.07em] text-[#2A2A2A] transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 lg:text-[20px]";

  useEffect(() => {
    if (!showCopiedToast) return;
    const t = setTimeout(() => setShowCopiedToast(false), 2000);
    return () => clearTimeout(t);
  }, [showCopiedToast]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setShowCopiedToast(true);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <>
      <button type="button" onClick={copyEmail} className={desktopCtaClass}>
        Email
      </button>
      <a
        href={LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        className={desktopCtaClass}
      >
        LinkedIn
      </a>
      <a
        href={GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        className={desktopCtaClass}
      >
        GitHub
      </a>
      {showCopiedToast && (
        <div
          className={`fixed bottom-8 left-1/2 z-[100] -translate-x-1/2 rounded-lg px-4 py-2.5 text-sm font-medium shadow-lg ${
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
