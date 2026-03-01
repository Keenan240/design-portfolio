"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const usePlaceholder = project.caseStudyImage === null;
  const heroSrc = usePlaceholder ? undefined : (project.caseStudyImage ?? project.image);
  const useSharedLayout = !usePlaceholder && heroSrc === project.image;

  return (
    <section className="pt-32 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[48px] font-semibold text-black mb-12 text-center"
        >
          {project.title}
        </motion.h1>

        <motion.div
          layoutId={useSharedLayout ? `project-image-${project.id}` : undefined}
          className="bg-[#F9F9F9] border border-[#DDDDDD] rounded-[25px] h-[580px] w-full overflow-hidden relative flex items-end justify-center"
        >
          <div className="absolute inset-x-16 top-[99px] bottom-8 bg-[#F9F9F9] rounded-t-[12px] overflow-hidden flex items-center justify-center">
            {usePlaceholder ? (
              <p className="text-[16px] text-[#4a4a4a]">Visual coming soon</p>
            ) : heroSrc ? (
              <motion.img
                layoutId={useSharedLayout ? `project-img-${project.id}` : undefined}
                src={heroSrc}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
