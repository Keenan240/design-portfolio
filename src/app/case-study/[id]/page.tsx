import { projects, CaseStudySection as ProjectSection } from "@/data/projects";
import { traxCaseStudySections } from "@/data/trax-case-study-sections";
import { notFound } from "next/navigation";
import CaseStudyHeader from "@/components/case-study/CaseStudyHeader";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";

interface PageProps {
  params: {
    id: string;
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = projects.find((p) => p.id === params.id);
  const isLockedCaseStudy =
    params.id === "trevo" || params.id === "scotia-itrade-coming-soon";

  if (
    !project ||
    isLockedCaseStudy ||
    project.link.startsWith("http")
  ) {
    notFound();
  }

  const defaultPlaceholderSectionTemplate: ProjectSection[] = [
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

  const usePlaceholderLayout =
    project.id === "trax" ||
    project.id === "trevo" ||
    project.id === "scotia-itrade-coming-soon";
  const sections = usePlaceholderLayout
    ? project.id === "trax"
      ? traxCaseStudySections
      : defaultPlaceholderSectionTemplate
    : project.sections;

  const navSections = [{ id: "overview", title: "Overview" }, ...sections.map((section) => ({ id: section.id, title: section.title }))];

  return (
    <main className="min-h-screen bg-white">
      <CaseStudyHeader />
      <div className="mx-auto grid max-w-[1480px] grid-cols-1 px-4 pb-20 pt-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10 md:px-8">
        {navSections.length > 0 && (
          <aside className="hidden md:block">
            <div className="sticky top-28">
              <CaseStudyNav sections={navSections} />
            </div>
          </aside>
        )}

        <div className={`w-full ${navSections.length > 0 ? "md:pl-2" : ""}`}>
          <div id="overview" className="relative -top-20 h-0 w-0" aria-hidden="true" />
          <CaseStudyHero project={project} />

          <div className="pb-32">
            {sections.map((section) => (
              <CaseStudySection
                key={section.id}
                sectionId={section.id}
                title={section.title}
                image={section.image}
                video={section.video}
                hasPlaceholder={section.hasPlaceholder ?? (!section.image && !section.video && !section.customMedia)}
                placeholderStyle={section.placeholderStyle}
                customMedia={section.customMedia}
                hideTitle={section.hideTitle}
                mediaTopSpacing={section.mediaTopSpacing}
              >
                {typeof section.content === "string" ? (
                  <p>{section.content}</p>
                ) : (
                  section.content
                )}
              </CaseStudySection>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
