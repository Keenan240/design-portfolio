import { notFound } from "next/navigation";
import CaseStudyAccess from "@/components/case-study/CaseStudyAccess";
import { getCaseStudyForRoute } from "@/lib/case-study";

interface PageProps {
  params: {
    id: string;
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = getCaseStudyForRoute(params.id);

  if (!project) {
    notFound();
  }

  return <CaseStudyAccess project={project} />;
}
