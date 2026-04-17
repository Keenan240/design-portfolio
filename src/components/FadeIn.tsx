"use client";

import { motion, HTMLMotionProps, useReducedMotion } from "framer-motion";

const smoothEase = [0.16, 1, 0.3, 1] as const;

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
  const reduceMotion = useReducedMotion();

  const directions = {
    up: { y: reduceMotion ? 0 : 26 },
    down: { y: reduceMotion ? 0 : -26 },
    left: { x: reduceMotion ? 0 : 26 },
    right: { x: reduceMotion ? 0 : -26 },
  };

  return (
    <motion.div
      initial={{
        opacity: reduceMotion ? 1 : 0,
        ...(direction ? directions[direction] : {}),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-80px 0px -12% 0px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.88,
        delay: reduceMotion ? 0 : delay,
        ease: smoothEase,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

