"use client";

import Link from "next/link";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

function endYearFromTimeline(timeline: string): string {
  const lastPart = timeline.split(" - ").pop()?.trim() ?? "";
  const year = lastPart.split(" ").pop() ?? "";
  return year;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const yearTag = project.id === "scotiabank-trade-flow-audit" ? "Coming soon" : endYearFromTimeline(project.timeline);
  const isExternal = project.link.startsWith("http");
  const isDisabled = project.id === "scotiabank-trade-flow-audit";
  const containImage = project.id === "trax" || project.id === "scotiabank-trade-flow-audit";
  const isScotiabank = project.id === "scotiabank-trade-flow-audit";
  const photoCardBg = isScotiabank ? "bg-[#ED111B]" : "bg-[#F9F9F9]";

  const cardContent = (
    <>
      <motion.div
        layoutId={isExternal || isDisabled ? undefined : `project-image-${project.id}`}
        className={`rounded-[25px] w-full overflow-hidden transition-transform duration-300 h-[340px] border border-[#ededed] ${photoCardBg} ${containImage ? "flex items-center justify-center p-6" : ""} ${!isDisabled ? "group-hover:scale-[1.01]" : ""}`}
      >
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full block ${containImage ? `object-contain ${isScotiabank ? "bg-[#ED111B]" : "bg-[#F9F9F9]"}` : "object-cover"}`}
        />
      </motion.div>
      <div className="mt-6 flex items-center gap-[12px]">
        <h3 className="text-[24px] md:text-[28px] font-semibold text-black leading-snug">
          {project.title}
        </h3>
        <span className="shrink-0 rounded-full border border-[#DDDDDD] bg-[#f5f5f5] px-2.5 py-0.5 text-[12px] font-medium text-[#4a4a4a]">
          {yearTag}
        </span>
      </div>
      <p className="mt-[18px] text-[14px] md:text-[16px] leading-relaxed text-[#4a4a4a] w-full">
        {project.cardOverview ?? project.overview}
      </p>
    </>
  );

  return (
    <div className="flex flex-col w-full">
      {isDisabled ? (
        <div className="block cursor-default">{cardContent}</div>
      ) : isExternal ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          {cardContent}
        </a>
      ) : (
        <Link href={project.link} className="block group">
          {cardContent}
        </Link>
      )}
    </div>
  );
}

