"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { travels } from "@/data/travels";

export default function WorldMap() {
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-col items-center gap-10 mt-32">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-[32px] font-medium text-black text-center">
          world domination ( ˘▽˘)っ♨
        </h2>
        <p className="text-[14px] text-[#acacac] uppercase tracking-widest">
          travel passport — {travels.length} locations
        </p>
      </div>

      <div className="relative w-full max-w-[1094px] aspect-[1094/650] bg-transparent overflow-visible">
        {/* World Map Image from User */}
        <img 
          src="/world-map.png" 
          alt="World Map" 
          className="w-full h-full object-contain opacity-20 grayscale"
        />

        {/* Pins */}
        {travels.map((pin) => (
          <div
            key={pin.id}
            className="absolute"
            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            onMouseEnter={() => setHoveredPin(pin.id)}
            onMouseLeave={() => setHoveredPin(null)}
          >
            <div className="relative flex items-center justify-center">
              {/* Pulse Effect */}
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
                className="absolute w-4 h-4 bg-black rounded-full"
              />
              
              {/* Main Dot */}
              <motion.div 
                whileHover={{ scale: 1.5 }}
                className="w-2 h-2 bg-black rounded-full cursor-pointer relative z-10"
              />

              {/* Tooltip */}
              <AnimatePresence>
                {hoveredPin === pin.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    className="absolute bottom-full mb-4 z-20 pointer-events-none"
                  >
                    <div className="bg-white border border-black px-4 py-2 rounded-lg shadow-xl min-w-[150px]">
                      <p className="text-sm font-bold text-black">{pin.city}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">{pin.country}</p>
                      {pin.story && (
                        <p className="text-[11px] text-gray-700 italic border-top border-gray-100 pt-1 mt-1">
                          {pin.story}
                        </p>
                      )}
                    </div>
                    {/* Tooltip Arrow */}
                    <div className="w-2 h-2 bg-white border-r border-b border-black rotate-45 mx-auto -mt-1" />
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

