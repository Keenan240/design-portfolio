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
}

export default function CaseStudySection({ title, children, sectionId, image, video, hasPlaceholder, placeholderStyle = "single", customMedia, hideTitle, mediaTopSpacing }: CaseStudySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const id = sectionId ?? title.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.section 
      id={id}
      ref={ref}
      className="mx-0 w-full max-w-none px-0 py-20"
    >
      {!hideTitle && (
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-3 text-[32px] font-semibold text-black"
        >
          {title}
        </motion.h2>
      )}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="space-y-4 text-[20px] leading-relaxed text-[#4a4a4a] [&>*:first-child]:mt-0 [&>*:first-child]:pt-0"
      >
        {children}
      </motion.div>
      
      {(customMedia || image || video || hasPlaceholder) && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className={mediaTopSpacing === 64 ? "mt-[64px] w-full" : "mt-6 w-full"}
        >
          {customMedia ? (
            customMedia
          ) : video ? (
            <div className="w-full overflow-hidden rounded-[24px] border border-[#DDDDDD]">
              <video 
                src={video} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-auto object-contain rounded-[24px] block"
                style={{
                  clipPath: "inset(10px 20px 10px 20px)",
                }}
              />
            </div>
          ) : image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto object-contain rounded-[24px] border border-[#DDDDDD]" 
            />
          ) : placeholderStyle === "comparison" ? (
            <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2">
              <div className="group relative h-[320px] w-full overflow-hidden bg-[#F5F5F5] pb-12 flex items-center justify-center text-[#757575] font-medium">
                Old Design Placeholder
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold text-[#ACACAC]">
                  Old Design
                </span>
              </div>
              <div className="group relative h-[320px] w-full overflow-hidden bg-[#F5F5F5] pb-12 flex items-center justify-center text-[#757575] font-medium">
                New Design Placeholder
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold text-[#ACACAC]">
                  New Design
                </span>
              </div>
            </div>
          ) : (
            <div className="group relative h-[320px] w-full overflow-hidden bg-[#F5F5F5] flex items-center justify-center text-[#757575] font-medium">
              Image Placeholder
            </div>
          )}
        </motion.div>
      )}
    </motion.section>
  );
}
