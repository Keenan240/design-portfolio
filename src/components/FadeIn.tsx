"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface FadeInProps extends HTMLMotionProps<"div"> {
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  className,
  ...props
}: FadeInProps) {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...(direction ? directions[direction] : {}),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

