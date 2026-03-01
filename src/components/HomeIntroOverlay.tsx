"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const KEENAN_MS = 250;
const YANG_MS = 250;
const EXIT_MS = 250;
const REVEAL_DURATION = 0.12;

type Phase = "keenan" | "yang" | "exiting" | "done";

interface HomeIntroOverlayProps {
  onComplete?: () => void;
}

export default function HomeIntroOverlay({ onComplete }: HomeIntroOverlayProps) {
  const [phase, setPhase] = useState<Phase>("keenan");

  useEffect(() => {
    if (phase === "keenan") {
      const t = setTimeout(() => setPhase("yang"), KEENAN_MS);
      return () => clearTimeout(t);
    }
    if (phase === "yang") {
      const t = setTimeout(() => setPhase("exiting"), YANG_MS);
      return () => clearTimeout(t);
    }
  }, [phase]);

  if (phase === "done") return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "exiting" ? 0 : 1 }}
      transition={{ duration: EXIT_MS / 1000, ease: "easeOut" }}
      onAnimationComplete={() => {
        if (phase === "exiting") {
          setPhase("done");
          onComplete?.();
        }
      }}
      className="fixed inset-0 z-[60] overflow-hidden bg-white"
    >
      {phase === "keenan" && (
        <div className="absolute inset-0 flex items-start justify-start bg-black pt-20 pl-20 md:pt-24 md:pl-24">
          <motion.span
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: REVEAL_DURATION, ease: "easeOut" }}
            className="text-[200px] font-semibold leading-none text-[#FFFFFF]"
          >
            Keenan
          </motion.span>
        </div>
      )}
      {(phase === "yang" || phase === "exiting") && (
        <div className="absolute inset-0 flex items-end justify-end bg-[#FFFFFF] pb-20 pr-20 md:pb-24 md:pr-24">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: REVEAL_DURATION, ease: "easeOut" }}
            className="text-[200px] font-semibold leading-none text-black"
          >
            Yang
          </motion.span>
        </div>
      )}
    </motion.div>
  );
}
