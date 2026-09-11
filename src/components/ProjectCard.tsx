"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Clock, Lock } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { isCaseStudyLocked } from "@/lib/case-study";
import { useTheme } from "@/components/ThemeProvider";

interface ProjectCardProps {
  project: Project;
}

function CardArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="h-6 w-6 shrink-0 md:h-7 md:w-7"
    >
      <path
        d="M7 17L17 7M17 7H7M17 7v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CardActionIcon({ project }: { project: Project }) {
  const icon =
    project.cardIcon ?? (project.cardLocked ? "lock" : "arrow");

  if (icon === "lock") {
    return <Lock className="h-4.5 w-4.5 md:h-5 md:w-5" strokeWidth={2.25} />;
  }

  if (icon === "clock") {
    return <Clock className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.25} />;
  }

  return <CardArrowIcon />;
}

function TextCardBody({
  project,
  isDark,
}: {
  project: Project;
  isDark: boolean;
}) {
  const metaParts = [project.cardLabel, project.cardYear].filter(Boolean);
  const surface = isDark ? "bg-[#252525]" : "bg-[#F5F5F5]";
  const title = isDark ? "text-white" : "text-[#2A2A2A]";
  const muted = isDark ? "text-[#ACACAC]" : "text-[#757575]";
  const iconBg = isDark
    ? "bg-[#1E1E1E] text-white"
    : "bg-white text-[#2A2A2A]";

  return (
    <div
      className={`flex h-full min-h-[380px] flex-col overflow-hidden rounded-[30px] p-7 md:min-h-[min(520px,calc(100vh-5.5rem))] md:p-8 ${surface}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3
            className={`text-[25px] font-semibold leading-snug tracking-[-0.07em] md:text-[27px] ${title}`}
          >
            {project.title}
          </h3>
          {metaParts.length > 0 && (
            <p
              className={`mt-2 text-[15px] font-medium tracking-[-0.07em] md:text-[16px] ${muted}`}
            >
              {metaParts.join(" • ")}
            </p>
          )}
        </div>
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full md:h-14 md:w-14 ${iconBg}`}
          aria-hidden
        >
          <CardActionIcon project={project} />
        </span>
      </div>

      <p
        className={`mt-4 text-[17px] font-normal leading-relaxed tracking-[-0.07em] md:text-[19px] ${muted}`}
      >
        {project.cardOverview ?? project.overview}
      </p>
    </div>
  );
}

function MediaCardBody({
  project,
  reduceMotion,
  isDark,
}: {
  project: Project;
  reduceMotion: boolean | null;
  isDark: boolean;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollRevealed, setScrollRevealed] = useState(false);
  const revealY = `${project.cardMediaRevealY ?? 26}%`;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!isMobile || reduceMotion || !cardRef.current) {
      setScrollRevealed(false);
      return;
    }

    const el = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        const visibleEnough =
          entry.isIntersecting && entry.intersectionRatio >= 0.45;
        setScrollRevealed(visibleEnough);
      },
      {
        threshold: [0.2, 0.45, 0.65, 0.85],
        rootMargin: "-12% 0px -28% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile, reduceMotion]);

  const mediaMotion = reduceMotion
    ? "translate-y-[var(--card-reveal-y)] scale-[0.88]"
    : isMobile
      ? `transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrollRevealed
            ? "translate-y-[var(--card-reveal-y)] scale-[0.88]"
            : "translate-y-0 scale-100"
        }`
      : "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:translate-y-[var(--card-reveal-y)] md:group-hover:scale-[0.88]";

  const isVideo = project.cardType === "video" && Boolean(project.cardVideoSrc);
  const photoSrc = project.cardPhotoSrc ?? project.image;
  const metaParts = [project.cardLabel, project.cardYear].filter(Boolean);
  const surface = isDark ? "bg-[#252525]" : "bg-[#F5F5F5]";
  const title = isDark ? "text-white" : "text-[#2A2A2A]";
  const muted = isDark ? "text-[#ACACAC]" : "text-[#757575]";
  const iconBg = isDark
    ? "bg-[#1E1E1E] text-white"
    : "bg-white text-[#2A2A2A]";

  return (
    <div
      ref={cardRef}
      className={`relative min-h-[380px] overflow-hidden rounded-[30px] md:min-h-[min(520px,calc(100vh-5.5rem))] ${surface}`}
    >
      <div className="absolute inset-x-0 top-0 z-0 p-7 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3
              className={`text-[25px] font-semibold leading-snug tracking-[-0.07em] md:text-[27px] ${title}`}
            >
              {project.title}
            </h3>
            {metaParts.length > 0 && (
              <p
                className={`mt-2 text-[15px] font-medium tracking-[-0.07em] md:text-[16px] ${muted}`}
              >
                {metaParts.join(" • ")}
              </p>
            )}
          </div>
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full md:h-14 md:w-14 ${iconBg}`}
            aria-hidden
          >
            <CardActionIcon project={project} />
          </span>
        </div>
      </div>

      <div
        className={`absolute inset-0 z-10 origin-top overflow-hidden rounded-[30px] ${mediaMotion}`}
        style={{ ["--card-reveal-y" as string]: revealY }}
      >
        {isVideo ? (
          <video
            className="h-full w-full object-cover object-center"
            src={project.cardVideoSrc}
            poster={photoSrc}
            autoPlay
            muted
            loop
            playsInline
            aria-label={project.title}
          />
        ) : (
          <img
            src={photoSrc}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const { isDark } = useTheme();
  const isExternal = project.link.startsWith("http");
  const locked = isCaseStudyLocked(project);
  const isMedia =
    project.cardType === "photo" || project.cardType === "video";

  const inner = isMedia ? (
    <MediaCardBody
      project={project}
      reduceMotion={reduceMotion}
      isDark={isDark}
    />
  ) : (
    <TextCardBody project={project} isDark={isDark} />
  );

  const interactiveClass = isDark
    ? "group block h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E1E1E]"
    : "group block h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  if (locked) {
    return (
      <div className="h-full" aria-disabled="true">
        <div className="group block h-full cursor-default">{inner}</div>
      </div>
    );
  }

  if (isExternal) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={interactiveClass}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={project.link} className={interactiveClass}>
      {inner}
    </Link>
  );
}
