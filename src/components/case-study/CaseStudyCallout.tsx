"use client";

import type { ReactNode } from "react";

interface CaseStudyCalloutProps {
  children: ReactNode;
  className?: string;
}

/** Left-rule callout. Alternative to bullet emphasis. */
export default function CaseStudyCallout({
  children,
  className = "",
}: CaseStudyCalloutProps) {
  return (
    <blockquote
      className={`dark-callout border-l-[2.5px] border-[#B0B0B0] pl-5 text-[20px] font-semibold leading-relaxed tracking-[-0.07em] text-[#9A9A9A] ${className}`}
    >
      {children}
    </blockquote>
  );
}
