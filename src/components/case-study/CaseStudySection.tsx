"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
  sectionId?: string;
  image?: string;
  video?: string;
  hasPlaceholder?: boolean;
  placeholderStyle?: "single" | "comparison";
  customMedia?: React.ReactNode;
  hideTitle?: boolean;
  mediaTopSpacing?: number;
  theme?: "light" | "dark";
}

export default function CaseStudySection({
  title,
  children,
  sectionId,
  image,
  video,
  hasPlaceholder,
  placeholderStyle = "single",
  customMedia,
  hideTitle,
  mediaTopSpacing,
  theme = "light",
}: CaseStudySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const id = sectionId ?? title.toLowerCase().replace(/\s+/g, "-");
  const isDark = theme === "dark";
  const titleClass = isDark ? "text-white" : "text-[#2A2A2A]";
  const bodyClass = isDark ? "text-[#B0B0B0]" : "text-[#9A9A9A]";
  const surfaceClass = isDark ? "bg-[#252525]" : "bg-[#F5F5F5]";
  const borderClass = isDark ? "border-white/10" : "border-[#DDDDDD]";
  const mutedClass = isDark ? "text-[#ACACAC]" : "text-[#757575]";

  return (
    <motion.section
      id={id}
      ref={ref}
      className="mx-0 w-full max-w-none px-0 py-14"
    >
      {!hideTitle && (
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className={`mb-3 text-[32px] font-semibold ${titleClass}`}
        >
          {title}
        </motion.h2>
      )}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.06 }}
        className={`space-y-4 text-[20px] leading-relaxed [&>*:first-child]:mt-0 [&>*:first-child]:pt-0 ${bodyClass}`}
      >
        {children}
      </motion.div>

      {(customMedia || image || video || hasPlaceholder) && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className={mediaTopSpacing === 64 ? "mt-[64px] w-full" : "mt-6 w-full"}
        >
          {customMedia ? (
            customMedia
          ) : video ? (
            <div
              className={`flex w-full items-center justify-center overflow-hidden rounded-[24px] border ${borderClass}`}
            >
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="mx-auto block h-auto w-full max-w-full rounded-[24px] object-contain object-center"
                style={{
                  clipPath: "inset(10px 20px)",
                }}
              />
            </div>
          ) : image ? (
            <img
              src={image}
              alt={title}
              className={`h-auto w-full rounded-[24px] border object-contain ${borderClass}`}
            />
          ) : placeholderStyle === "comparison" ? (
            <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2">
              <div
                className={`group relative flex h-[320px] w-full items-center justify-center overflow-hidden pb-12 font-medium ${surfaceClass} ${mutedClass}`}
              >
                Old Design Placeholder
                <span className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold ${mutedClass}`}>
                  Old Design
                </span>
              </div>
              <div
                className={`group relative flex h-[320px] w-full items-center justify-center overflow-hidden pb-12 font-medium ${surfaceClass} ${mutedClass}`}
              >
                New Design Placeholder
                <span className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold ${mutedClass}`}>
                  New Design
                </span>
              </div>
            </div>
          ) : (
            <div
              className={`group relative flex h-[320px] w-full items-center justify-center overflow-hidden font-medium ${surfaceClass} ${mutedClass}`}
            >
              Image Placeholder
            </div>
          )}
        </motion.div>
      )}
    </motion.section>
  );
}
