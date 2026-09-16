"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects, type Project } from "@/data/projects";
import { isPasscodeGated } from "@/lib/case-study";
import { readPasscodeUnlock } from "@/lib/passcode";
import PasscodeGate from "@/components/case-study/PasscodeGate";

const HIGHLIGHT_IDS = [
  "scotiabank-unreleased-feature",
  "nucleus",
  "trax",
] as const;

function getNextCaseStudies(currentId: string): Project[] {
  return HIGHLIGHT_IDS.filter((id) => id !== currentId)
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is Project => Boolean(p));
}

function CardArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
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

interface NextCaseStudyFooterProps {
  currentProjectId: string;
  theme?: "light" | "dark";
}

export default function NextCaseStudyFooter({
  currentProjectId,
  theme = "light",
}: NextCaseStudyFooterProps) {
  const router = useRouter();
  const nextProjects = getNextCaseStudies(currentProjectId);
  const [passcodeProject, setPasscodeProject] = useState<Project | null>(null);

  if (nextProjects.length === 0) return null;

  const isDark = theme === "dark";
  const titleClass = isDark ? "text-white" : "text-[#2A2A2A]";
  const mutedClass = isDark ? "text-[#ACACAC]" : "text-[#757575]";
  const surfaceClass = isDark ? "bg-[#252525]" : "bg-[#F5F5F5]";
  const iconBg = isDark
    ? "bg-[#1E1E1E] text-white"
    : "bg-white text-[#2A2A2A]";
  const eyebrowClass = isDark ? "text-[#ACACAC]" : "text-[#757575]";
  const focusRing = isDark
    ? "focus-visible:ring-white/40"
    : "focus-visible:ring-black/20";
  const cardClass = `group flex min-h-[200px] w-full flex-col p-5 text-left transition-transform duration-300 hover:scale-[1.015] focus-visible:outline-none focus-visible:ring-2 md:min-h-[220px] md:p-6 ${focusRing} ${surfaceClass}`;

  function renderCardBody(project: Project) {
    const metaParts = [project.cardLabel, project.cardYear].filter(Boolean);
    const blurb = project.cardOverview ?? project.overview;

    return (
      <>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3
              className={`text-[18px] font-semibold leading-snug tracking-[-0.06em] md:text-[20px] ${titleClass}`}
            >
              {project.title}
            </h3>
            {metaParts.length > 0 && (
              <p
                className={`mt-1.5 text-[13px] font-medium tracking-[-0.04em] md:text-[14px] ${mutedClass}`}
              >
                {metaParts.join(" • ")}
              </p>
            )}
          </div>
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 md:h-11 md:w-11 ${iconBg}`}
            aria-hidden
          >
            <CardArrowIcon className="h-5 w-5" />
          </span>
        </div>

        <p
          className={`mt-4 line-clamp-3 text-[14px] font-normal leading-relaxed tracking-[-0.02em] md:text-[15px] ${mutedClass}`}
        >
          {blurb}
        </p>
      </>
    );
  }

  return (
    <section
      aria-labelledby="next-case-study-heading"
      className="mt-24 pt-16 md:mt-28 md:pt-16"
      style={{
        borderTop: isDark
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <h2
        id="next-case-study-heading"
        className={`text-[28px] font-semibold tracking-[-0.07em] md:text-[32px] ${titleClass}`}
      >
        But wait there&apos;s more!
      </h2>
      <p
        className={`mt-2 text-[15px] tracking-[-0.02em] md:text-[16px] ${eyebrowClass}`}
      >
        Keep going with another case study
      </p>

      <div
        className={`mt-8 grid grid-cols-1 gap-4 ${
          nextProjects.length > 1 ? "md:grid-cols-2" : ""
        }`}
      >
        {nextProjects.map((project) => {
          const needsPasscode = isPasscodeGated(project);

          if (needsPasscode) {
            return (
              <button
                key={project.id}
                type="button"
                className={`${cardClass} appearance-none border-0`}
                onClick={() => {
                  if (readPasscodeUnlock(project.id)) {
                    router.push(project.link);
                    return;
                  }
                  setPasscodeProject(project);
                }}
              >
                {renderCardBody(project)}
              </button>
            );
          }

          return (
            <Link key={project.id} href={project.link} className={cardClass}>
              {renderCardBody(project)}
            </Link>
          );
        })}
      </div>

      {passcodeProject ? (
        <PasscodeGate
          open
          projectId={passcodeProject.id}
          caseStudyTitle={passcodeProject.title}
          onClose={() => setPasscodeProject(null)}
          onSuccess={() => {
            const link = passcodeProject.link;
            setPasscodeProject(null);
            router.push(link);
          }}
        />
      ) : null}
    </section>
  );
}
