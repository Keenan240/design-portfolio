"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
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

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-8">
      <div
        ref={contactRef}
        className="relative flex gap-8 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 shadow-sm"
      >
        <Link href="/" className="text-sm font-medium hover:text-gray-600 transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium hover:text-gray-600 transition-colors">
          About
        </Link>
        <button
          type="button"
          className="text-sm font-medium hover:text-gray-600 transition-colors"
          onClick={() => setIsContactOpen((open) => !open)}
          aria-haspopup="menu"
          aria-expanded={isContactOpen}
        >
          Contact
        </button>

        {isContactOpen && (
          <div className="contact-dropdown-appear absolute right-0 top-full mt-3 w-56 rounded-xl border border-gray-200 bg-white shadow-lg p-3 flex flex-col gap-2">
            <button
              type="button"
              onClick={copyEmail}
              className="flex w-full items-center justify-between rounded-md px-2 py-2 hover:bg-gray-50 text-sm font-medium text-gray-800 text-left"
            >
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-black" />
                <span>Email</span>
              </span>
              <ChevronRight className="h-4 w-4 text-gray-400 shrink-0" />
            </button>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-md px-2 py-2 hover:bg-gray-50 text-sm font-medium text-gray-800"
              onClick={() => setIsContactOpen(false)}
            >
              <span className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-black" />
                <span>LinkedIn</span>
              </span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </a>
            <a
              href="https://github.com/Keenan240"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-md px-2 py-2 hover:bg-gray-50 text-sm font-medium text-gray-800"
              onClick={() => setIsContactOpen(false)}
            >
              <span className="flex items-center gap-2">
                <Github className="h-4 w-4 text-black" />
                <span>GitHub</span>
              </span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </a>
          </div>
        )}
      </div>
    </nav>

    {showCopiedToast && (
      <div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] rounded-lg bg-gray-900 text-white px-4 py-2.5 text-sm font-medium shadow-lg"
        role="status"
        aria-live="polite"
      >
        Copied Email
      </div>
    )}
    </>
  );
}