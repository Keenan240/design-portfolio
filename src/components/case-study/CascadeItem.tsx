"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/** Staggered fade-up for cards / blocks inside case study sections. */
export default function CascadeItem({
  children,
  index = 0,
  className = "",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{
        duration: 0.58,
        ease,
        delay: 0.06 + index * 0.1,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
