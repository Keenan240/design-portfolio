"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const pathname = usePathname();
  const { isDark } = useTheme();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showCopiedToast, setShowCopiedToast] = useState(false);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const EMAIL = "keenan.yang1027@gmail.com";

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setIsContactOpen(false);
      setShowCopiedToast(true);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  useEffect(() => {
    if (!showCopiedToast) return;
    const t = setTimeout(() => setShowCopiedToast(false), 2000);
    return () => clearTimeout(t);
  }, [showCopiedToast]);

  useEffect(() => {
    if (!isContactOpen) return;

    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (!contactRef.current) return;
      if (!contactRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isContactOpen]);

  // Home, About, and case studies use their own chrome; hide the top nav there.
  if (
    pathname === "/" ||
    pathname === "/about" ||
    pathname.startsWith("/case-study/")
  ) {
    return null;
  }

  const linkClass = isDark
    ? "inline-flex h-5 items-center text-sm font-medium uppercase leading-none text-white transition-colors hover:text-[#ACACAC]"
    : "inline-flex h-5 items-center text-sm font-medium uppercase leading-none text-[#2A2A2A] transition-colors hover:text-[#4a4a4a]";

  const brandClass = isDark
    ? "justify-self-start text-base font-medium lowercase text-white transition-colors hover:text-[#ACACAC]"
    : "justify-self-start text-base font-medium lowercase text-[#2A2A2A] transition-colors hover:text-[#4a4a4a]";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isDark ? "bg-[#1E1E1E]" : "bg-white"
        }`}
      >
        <div className="mx-auto grid max-w-[1480px] grid-cols-[1fr_auto_1fr] items-center gap-y-4 px-4 py-6 md:px-8">
          <Link href="/" className={brandClass}>
            keenan yang :p
          </Link>

          <div className="col-start-2 flex items-center justify-center gap-6 md:gap-10">
            <Link href="/about" className={linkClass}>
              About
            </Link>

            <Link href="/fun" className={linkClass}>
              Fun
            </Link>

            <div ref={contactRef} className="relative">
              <button
                type="button"
                className={`${linkClass} appearance-none bg-transparent p-0`}
                onClick={() => setIsContactOpen((open) => !open)}
                aria-haspopup="menu"
                aria-expanded={isContactOpen}
              >
                Contact
              </button>

              {isContactOpen && (
                <div
                  className="absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2"
                  role="presentation"
                >
                  <div
                    className={`contact-dropdown-appear flex flex-col gap-2 rounded-xl border p-3 shadow-lg ${
                      isDark
                        ? "border-white/10 bg-[#252525]"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={copyEmail}
                      className={`flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm font-medium ${
                        isDark
                          ? "text-white hover:bg-white/10"
                          : "text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Mail
                          className={`h-4 w-4 ${isDark ? "text-white" : "text-[#2A2A2A]"}`}
                        />
                        <span>Email</span>
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 ${
                          isDark ? "text-[#ACACAC]" : "text-gray-400"
                        }`}
                      />
                    </button>
                    <a
                      href="https://www.linkedin.com/in/keenanyang1027"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between rounded-md px-2 py-2 text-sm font-medium ${
                        isDark
                          ? "text-white hover:bg-white/10"
                          : "text-gray-800 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsContactOpen(false)}
                    >
                      <span className="flex items-center gap-2">
                        <Linkedin
                          className={`h-4 w-4 ${isDark ? "text-white" : "text-[#2A2A2A]"}`}
                        />
                        <span>LinkedIn</span>
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 ${
                          isDark ? "text-[#ACACAC]" : "text-gray-400"
                        }`}
                      />
                    </a>
                    <a
                      href="https://github.com/Keenan240"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between rounded-md px-2 py-2 text-sm font-medium ${
                        isDark
                          ? "text-white hover:bg-white/10"
                          : "text-gray-800 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsContactOpen(false)}
                    >
                      <span className="flex items-center gap-2">
                        <Github
                          className={`h-4 w-4 ${isDark ? "text-white" : "text-[#2A2A2A]"}`}
                        />
                        <span>GitHub</span>
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 ${
                          isDark ? "text-[#ACACAC]" : "text-gray-400"
                        }`}
                      />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="https://drive.google.com/file/d/1iT9FR98j0llXF2S-UXUkM6wpao7c9wme/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Resume
            </a>
          </div>

          <div aria-hidden="true" />
        </div>
      </nav>

      {showCopiedToast && (
        <div
          className={`fixed bottom-8 left-1/2 z-[100] -translate-x-1/2 rounded-lg px-4 py-2.5 text-sm font-medium shadow-lg ${
            isDark ? "bg-white text-[#2A2A2A]" : "bg-gray-900 text-white"
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
