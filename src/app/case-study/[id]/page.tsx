import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import CaseStudyHeader from "@/components/case-study/CaseStudyHeader";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyInfo from "@/components/case-study/CaseStudyInfo";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import CaseStudyNav from "@/components/case-study/CaseStudyNav";
import WorkInProgress from "@/components/case-study/WorkInProgress";
import TellKeenanPopup from "@/components/case-study/TellKeenanPopup";

interface PageProps {
  params: {
    id: string;
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const isWip = project.id === "trax" || project.id === "trevo";
  const navSections = isWip
    ? [{ id: "overview", title: "Overview" }]
    : [
        { id: "overview", title: "Overview" },
        ...project.sections.map((s) => ({ id: s.id, title: s.title })),
      ];

  return (
    <main className="min-h-screen bg-white">
      <CaseStudyHeader />

      <CaseStudyHero project={project} />

      <CaseStudyInfo project={project} />

      {isWip ? (
        <WorkInProgress />
      ) : (
        <div className="pb-32">
          <CaseStudySection
            title="Overview"
            video={project.overviewVideo}
            hasPlaceholder={!project.overviewVideo}
          >
            <p>{project.overview}</p>
          </CaseStudySection>

          {project.sections.map((section) => (
            <CaseStudySection
              key={section.id}
              sectionId={section.id}
              title={section.title}
              image={section.image}
              video={section.video}
              hasPlaceholder={section.hasPlaceholder ?? (!section.image && !section.video && !section.customMedia)}
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
      )}

      <CaseStudyNav sections={navSections} />

      {isWip && <TellKeenanPopup />}
    </main>
  );
}
