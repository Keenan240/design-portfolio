import {
  projects,
  type CaseStudySection,
  type Project,
} from "@/data/projects";
import { traxCaseStudySections } from "@/data/trax-case-study-sections";
import { trevoCaseStudySections } from "@/data/trevo-case-study-sections";

const defaultPlaceholderSections: CaseStudySection[] = [
  {
    id: "problem",
    title: "Problem",
    hasPlaceholder: true,
    content:
      "This section is currently being finalized. A full breakdown of the challenge, constraints, and context will be added soon.",
  },
  {
    id: "process-from-discovery-to-design",
    title: "Process",
    hasPlaceholder: true,
    content:
      "Research and design process details are in progress. This area will include key decisions, exploration, and iteration notes.",
  },
  {
    id: "iteration-1-foundational-draft",
    title: "Solution",
    hasPlaceholder: true,
    content:
      "Solution details are coming soon. Finalized flows, interface rationale, and feature walkthroughs will be shared here.",
  },
  {
    id: "iteration-3-enabling-active-execution",
    title: "Refinement",
    hasPlaceholder: true,
    content:
      "Post-iteration refinements and improvements are currently under preparation and will be published in this section.",
  },
  {
    id: "results-and-reflection",
    title: "Results",
    hasPlaceholder: true,
    content:
      "Outcomes, learnings, and reflection notes are being compiled and will be added once complete.",
  },
];

export function isCaseStudyLocked(project: Project): boolean {
  return (
    project.cardLocked === true ||
    project.id === "trevo" ||
    project.id === "scotia-itrade-coming-soon" ||
    project.id === "scotiabank-unreleased-feature"
  );
}

export function getOpenableCaseStudy(id: string): Project | undefined {
  const project = projects.find((p) => p.id === id);
  if (!project || isCaseStudyLocked(project) || project.link.startsWith("http")) {
    return undefined;
  }
  return project;
}

export function resolveCaseStudySections(project: Project): CaseStudySection[] {
  if (project.id === "trax") return traxCaseStudySections;
  if (project.id === "trevo") return trevoCaseStudySections;
  if (project.id === "scotia-itrade-coming-soon") return defaultPlaceholderSections;
  return project.sections;
}
