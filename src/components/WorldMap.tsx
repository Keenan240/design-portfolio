"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { travels } from "@/data/travels";

interface WorldMapProps {
  theme?: "light" | "dark";
}

export default function WorldMap({ theme = "light" }: WorldMapProps) {
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);
  const isDark = theme === "dark";

  return (
    <div className="mt-24 flex w-full flex-col items-center gap-10 md:mt-32">
      <div className="flex flex-col items-center gap-2">
        <h2
          className={`text-center text-[28px] font-medium tracking-[-0.07em] md:text-[32px] ${
            isDark ? "text-white" : "text-[#2A2A2A]"
          }`}
        >
          world domination ( ˘▽˘)っ♨
        </h2>
        <p
          className={`text-[14px] uppercase tracking-widest ${
            isDark ? "text-[#ACACAC]" : "text-[#757575]"
          }`}
        >
          travel passport with {travels.length} locations
        </p>
      </div>

      <div
        className={`relative aspect-[1094/650] w-full max-w-[1094px] overflow-visible ${
          isDark ? "bg-[#1E1E1E]" : "bg-transparent"
        }`}
      >
        <img
          src="/world-map.png"
          alt="World Map"
          className={`h-full w-full object-contain grayscale ${
            isDark
              ? "opacity-45 invert mix-blend-screen"
              : "opacity-20"
          }`}
        />

        {travels.map((pin) => (
          <div
            key={pin.id}
            className="absolute"
            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            onMouseEnter={() => setHoveredPin(pin.id)}
            onMouseLeave={() => setHoveredPin(null)}
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 2],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className={`absolute h-4 w-4 rounded-full ${
                  isDark ? "bg-white" : "bg-[#2A2A2A]"
                }`}
              />

              <motion.div
                whileHover={{ scale: 1.5 }}
                className={`relative z-10 h-2 w-2 cursor-pointer rounded-full ${
                  isDark ? "bg-white" : "bg-[#2A2A2A]"
                }`}
              />

              <AnimatePresence>
                {hoveredPin === pin.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    className="pointer-events-none absolute bottom-full z-20 mb-4"
                  >
                    <div
                      className={`min-w-[150px] rounded-lg px-4 py-2 shadow-xl ${
                        isDark
                          ? "border border-white/15 bg-[#252525]"
                          : "border border-black bg-white"
                      }`}
                    >
                      <p
                        className={`text-sm font-semibold ${
                          isDark ? "text-white" : "text-[#2A2A2A]"
                        }`}
                      >
                        {pin.city}
                      </p>
                      <p className="mb-1 text-[10px] uppercase tracking-widest text-[#ACACAC]">
                        {pin.country}
                      </p>
                      {pin.story && (
                        <p
                          className={`mt-1 border-t pt-1 text-[11px] italic ${
                            isDark
                              ? "border-white/10 text-[#ACACAC]"
                              : "border-gray-100 text-gray-700"
                          }`}
                        >
                          {pin.story}
                        </p>
                      )}
                    </div>
                    <div
                      className={`mx-auto -mt-1 h-2 w-2 rotate-45 border-r border-b ${
                        isDark
                          ? "border-white/15 bg-[#252525]"
                          : "border-black bg-white"
                      }`}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
