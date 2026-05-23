"use client";

import Link from "next/link";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

function hexToRgba(hex: string, alpha: number): string {
  const normalized = hex.replace("#", "");
  if (normalized.length !== 6) return `rgba(245, 245, 245, ${alpha})`;
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isExternal = project.link.startsWith("http");
  const isCaseStudyLocked =
    project.id === "trevo" || project.id === "scotia-itrade-coming-soon";
  const isCompactMockup = project.id === "trevo" || project.id === "scotia-itrade-coming-soon";
  const isTrevo = project.id === "trevo";
  const isScotia = project.id === "scotia-itrade-coming-soon";
  const showCaseStudyLabel =
    project.id === "nucleus" ||
    project.id === "trax";
  const cornerHoverLabel =
    project.cardHoverLabel ??
    (isScotia || isTrevo
      ? "Coming Soon"
      : project.id === "nucleus" || project.id === "trax"
        ? "2025"
        : "");
  const hoverAccent = hexToRgba(project.hoverAccent, 0.28);
  const imageClassName = isCompactMockup
    ? `relative z-10 w-[240px] h-auto object-contain transition-transform duration-300 group-hover:scale-[0.97] ${isTrevo ? "rounded-[40px]" : ""}`
    : "relative z-10 h-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[0.97]";

  const contentRect = (
    <motion.div
      layoutId={isExternal ? undefined : `project-image-${project.id}`}
      className="relative isolate flex w-full max-w-[684px] items-center justify-center overflow-hidden bg-[#F5F5F5] py-[80px] px-[60px] transition-transform duration-300 group-hover:scale-[1.01]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 blur-3xl transition-all duration-300 ease-out group-hover:scale-[1.18] group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 72% 70%, ${hoverAccent} 0%, rgba(245, 245, 245, 0) 72%)`,
        }}
      />
      {isExternal ? (
        <img
          src={project.image}
          alt={project.title}
          className={imageClassName}
        />
      ) : (
        <motion.img
          layoutId={`project-img-${project.id}`}
          src={project.image}
          alt={project.title}
          className={imageClassName}
        />
      )}
      {showCaseStudyLabel && (
        <span className="absolute bottom-[10px] left-[10px] z-20 bg-white px-[6px] py-[4px] text-[14px] tracking-[-0.07em] text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Case Study
        </span>
      )}
      {cornerHoverLabel && (
        <span
          className={`absolute bottom-[10px] right-[10px] z-20 bg-white px-[6px] py-[4px] text-[14px] tracking-[-0.07em] opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${
            isScotia || isTrevo ? "text-[#ACACAC]" : "text-black"
          }`}
        >
          {cornerHoverLabel}
        </span>
      )}
    </motion.div>
  );

  const textBlock = (
    <div className="w-full max-w-[684px] px-4 py-6">
      <h3 className="text-[24px] font-bold leading-snug text-black md:text-[28px]">
        {project.title}
      </h3>
      <p className="mt-2 text-[14px] font-normal leading-relaxed text-[#4a4a4a] md:text-[16px]">
        {project.cardOverview ?? project.overview}
      </p>
    </div>
  );

  const inner = (
    <>
      {contentRect}
      {textBlock}
    </>
  );

  return (
    <div className="flex w-full max-w-[684px] flex-col">
      {isCaseStudyLocked ? (
        <div className="group block" aria-disabled="true">
          {inner}
        </div>
      ) : isExternal ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          {inner}
        </a>
      ) : (
        <Link href={project.link} className="group block">
          {inner}
        </Link>
      )}
    </div>
  );
}
