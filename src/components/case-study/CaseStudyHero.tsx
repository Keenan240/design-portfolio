"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="pb-8 pt-28">
      <div className="w-full">
        <div className="mb-[72px] grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_320px] md:items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-left text-[48px] font-semibold text-black"
            >
              {project.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="max-w-[680px] text-left text-[20px] leading-relaxed text-[#4a4a4a] md:pr-8"
            >
              {project.overview}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="px-0 py-0"
          >
            <div className="space-y-4 text-left">
              <div>
                <p className="text-[12px] font-semibold uppercase text-[#ACACAC]">Role</p>
                <p className="mt-1 text-[16px] font-medium text-black">{project.role}</p>
              </div>
              <div>
                <p className="text-[12px] font-semibold uppercase text-[#ACACAC]">Timeline</p>
                <p className="mt-1 text-[16px] font-medium text-black">{project.timeline}</p>
              </div>
              <div>
                <p className="text-[12px] font-semibold uppercase text-[#ACACAC]">Team</p>
                <div className="mt-1 space-y-1">
                  {project.team.map((member) => (
                    <p key={member} className="text-[16px] font-medium text-black">
                      {member}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-[25px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ scale: 1.01 }}
            className="group min-h-[360px] w-full overflow-hidden bg-[#F5F5F5]"
          >
            <div className="flex h-full w-full items-center justify-center px-[60px] py-[80px]">
              {project.overviewVideo ? (
                <video
                  src={project.overviewVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-auto w-[70%] max-w-full object-contain transition-transform duration-300 group-hover:scale-[0.97]"
                  style={{ clipPath: "inset(6px 12px 6px 8px)" }}
                />
              ) : project.id === "trax" ? (
                <img
                  src="/case-study/trax-main-placeholder.svg"
                  alt="Trax library flow"
                  className="h-auto w-[69%] max-w-full object-contain transition-transform duration-300 group-hover:scale-[0.97]"
                />
              ) : (
                <p className="text-[16px] text-[#757575]">Visual coming soon</p>
              )}
            </div>
          </motion.div>
          <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="group relative h-[380px] w-full overflow-hidden bg-[#F5F5F5]"
            >
              {project.id === "nucleus" && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <img
                    src="/case-study/nucleus-left-logo.svg"
                    alt="Nucleus icon cluster"
                    className="w-[152px] transition-transform duration-200 ease-out group-hover:scale-[0.95] group-hover:-rotate-12"
                  />
                </div>
              )}
              {project.id === "trax" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/case-study/trax-bottom-left-library-card.svg"
                    alt="Trax library card"
                    className="h-[164px] w-auto max-w-[90%] transition-transform duration-300 group-hover:scale-[0.98]"
                  />
                </div>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ scale: 1.01 }}
              className="group relative h-[380px] w-full overflow-hidden bg-[#F5F5F5]"
            >
              {project.id === "nucleus" && (
                <img
                  src="/case-study/nucleus-bottom-right-placeholder.svg"
                  alt="Nucleus weekly view detail"
                  className="absolute -bottom-[472px] -right-[246px] w-[744px] max-w-none origin-bottom-right transition-transform duration-300 group-hover:scale-[1.03]"
                />
              )}
              {project.id === "trax" && (
                <div className="flex h-full w-full items-center justify-center px-6 py-6">
                  <video
                    src="/case-study/trax-bottom-right-loop-upscaled.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[0.97]"
                    style={{ clipPath: "inset(6px 0 16px 0)" }}
                  />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
