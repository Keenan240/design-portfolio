"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CaseStudyHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-8 left-8 z-50"
    >
      <Link 
        href="/"
        className="w-12 h-12 bg-white/80 backdrop-blur-md border border-[#ededed] rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors group"
      >
        <X className="w-5 h-5 text-[#757575] group-hover:text-black transition-colors" />
      </Link>
    </motion.div>
  );
}
