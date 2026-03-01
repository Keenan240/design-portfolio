"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
  sectionId?: string;
  image?: string;
  video?: string;
  hasPlaceholder?: boolean;
  customMedia?: React.ReactNode;
  hideTitle?: boolean;
  mediaTopSpacing?: number;
}

export default function CaseStudySection({ title, children, sectionId, image, video, hasPlaceholder, customMedia, hideTitle, mediaTopSpacing }: CaseStudySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [40, 0, 0, -40]);
  const id = sectionId ?? title.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.section 
      id={id}
      ref={ref}
      style={{ opacity, y }}
      className="py-24 max-w-[1280px] mx-auto px-4 md:px-0"
    >
      {!hideTitle && (
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[32px] font-semibold text-black mb-8"
        >
          {title}
        </motion.h2>
      )}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="text-[20px] text-[#4a4a4a] leading-relaxed space-y-6"
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
          ) : (
            <div className="w-full min-h-[300px] bg-[#ededed] border border-[#757575] rounded-[25px] flex items-center justify-center text-[#757575] font-medium">
              Image Placeholder
            </div>
          )}
        </motion.div>
      )}
    </motion.section>
  );
}
