import { notFound } from "next/navigation";
import CaseStudyPageView from "@/components/case-study/CaseStudyPageView";
import { getOpenableCaseStudy } from "@/lib/case-study";

interface PageProps {
  params: {
    id: string;
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = getOpenableCaseStudy(params.id);

  if (!project) {
    notFound();
  }

  return <CaseStudyPageView project={project} />;
}
