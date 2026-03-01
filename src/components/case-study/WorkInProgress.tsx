"use client";

import { motion } from "framer-motion";
import { Construction } from "lucide-react";

export default function WorkInProgress() {
  return (
    <section
      id="overview"
      className="py-24 max-w-[1280px] mx-auto px-4 md:px-0 pb-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-[#f5f5f5] border border-[#ededed] rounded-[25px] p-12 md:p-16 text-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e5e5e5] border border-[#d4d4d4] mb-8"
        >
          <Construction className="w-8 h-8 text-[#757575]" />
        </motion.div>
        <h2 className="text-[24px] md:text-[28px] font-semibold text-black mb-3">
          Work in progress
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#4a4a4a] max-w-md mx-auto">
          This case study is still being written. Check back later for the full story.
        </p>
      </motion.div>
    </section>
  );
}
