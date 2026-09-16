"use client";

import type { Project } from "@/data/projects";
import { resolveCaseStudySections } from "@/lib/case-study";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import NextCaseStudyFooter from "@/components/case-study/NextCaseStudyFooter";
import type { RefObject } from "react";

interface CaseStudyContentProps {
  project: Project;
  theme?: "light" | "dark";
  /** Compact top padding when shown inside the home sheet */
  compact?: boolean;
  scrollRootRef?: RefObject<HTMLElement | null>;
}

export default function CaseStudyContent({
  project,
  theme = "light",
  compact = false,
  scrollRootRef,
}: CaseStudyContentProps) {
  const sections = resolveCaseStudySections(project);
  const navSections = [
    { id: "overview", title: "Overview" },
    ...sections.map((section) => ({
      id: section.id,
      title: section.navTitle ?? section.title,
    })),
  ];

  // Stick under the taller case-study top chrome
  const stickyTop = "sticky top-44";

  return (
    <div
      className={`case-study-theme w-full ${
        theme === "dark" ? "case-study-dark" : ""
      } ${compact ? "pt-4" : ""}`}
    >
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 px-6 pb-20 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10 md:px-10 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-12 lg:px-14">
        {navSections.length > 0 && (
          <aside className={`hidden md:block ${compact ? "pt-8" : ""}`}>
            <div className={stickyTop}>
              <CaseStudyNav
                sections={navSections}
                theme={theme}
                scrollRootRef={scrollRootRef}
              />
            </div>
          </aside>
        )}

        <div className="w-full">
          <div id="overview" className="relative -top-20 h-0 w-0" aria-hidden="true" />
          <CaseStudyHero project={project} theme={theme} compact={compact} />

          <div className="pb-32">
            {sections.map((section) => (
              <CaseStudySection
                key={section.id}
                sectionId={section.id}
                title={section.title}
                image={section.image}
                video={section.video}
                hasPlaceholder={
                  section.hasPlaceholder ??
                  (!section.image && !section.video && !section.customMedia)
                }
                placeholderStyle={section.placeholderStyle}
                customMedia={section.customMedia}
                hideTitle={section.hideTitle}
                mediaTopSpacing={section.mediaTopSpacing}
                theme={theme}
              >
                {typeof section.content === "string" ? (
                  <p>{section.content}</p>
                ) : (
                  section.content
                )}
              </CaseStudySection>
            ))}

            <NextCaseStudyFooter
              currentProjectId={project.id}
              theme={theme}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
