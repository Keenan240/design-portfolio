"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface CaseStudyHeroProps {
  project: Project;
  theme?: "light" | "dark";
  compact?: boolean;
}

export default function CaseStudyHero({
  project,
  theme = "light",
  compact = false,
}: CaseStudyHeroProps) {
  const isDark = theme === "dark";
  const titleClass = isDark ? "text-white" : "text-[#2A2A2A]";
  const bodyClass = isDark ? "text-[#B0B0B0]" : "text-[#9A9A9A]";
  const valueClass = isDark ? "text-white" : "text-[#2A2A2A]";
  const surfaceClass = isDark ? "bg-[#252525]" : "bg-[#F5F5F5]";
  const mutedClass = isDark ? "text-[#ACACAC]" : "text-[#A3A3A3]";
  const headline = project.heroTitle ?? project.title;
  const isActionHeadline = Boolean(project.heroTitle);
  const isPhoneOverviewVideo =
    (project.id === "trevo" ||
      project.id === "scotiabank-unreleased-feature") &&
    Boolean(project.overviewVideo);

  return (
    <section className={compact ? "pb-8 pt-6" : "pb-8 pt-28"}>
      <div className="w-full">
        <div className="mb-[72px] flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-16 lg:gap-24">
          <div className="min-w-0 flex-1">
            <motion.h1
              id="case-study-hero-title"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`mb-4 text-left font-semibold leading-tight ${
                isActionHeadline
                  ? "max-w-[820px] text-[48px]"
                  : "text-[48px]"
              } ${titleClass}`}
            >
              {headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className={`max-w-[680px] text-left text-[20px] leading-relaxed ${bodyClass}`}
            >
              {project.overview}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="w-full shrink-0 px-0 py-0 md:w-auto md:max-w-[280px] md:text-right"
          >
            <div className="space-y-4 text-left md:text-right">
              <div>
                <p className={`text-[12px] font-semibold uppercase ${mutedClass}`}>Role</p>
                <p className={`mt-1 text-[16px] font-medium ${valueClass}`}>{project.role}</p>
              </div>
              <div>
                <p className={`text-[12px] font-semibold uppercase ${mutedClass}`}>Timeline</p>
                <p className={`mt-1 text-[16px] font-medium ${valueClass}`}>{project.timeline}</p>
              </div>
              <div>
                <p className={`text-[12px] font-semibold uppercase ${mutedClass}`}>Team</p>
                <div className="mt-1 space-y-1">
                  {project.team.map((member) => (
                    <p key={member} className={`text-[16px] font-medium ${valueClass}`}>
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
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ scale: 1.01 }}
            className={`group w-full overflow-hidden ${surfaceClass} ${
              isPhoneOverviewVideo ? "relative min-h-[560px]" : "min-h-[360px]"
            }`}
          >
            {isPhoneOverviewVideo ? (
              <div className="flex h-full min-h-[560px] w-full items-center justify-center px-[60px] py-[64px]">
                <div className="w-[230px] max-w-full overflow-hidden rounded-[40px] transition-transform duration-300 group-hover:scale-[0.97]">
                  <video
                    src={project.overviewVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="block h-auto w-full object-contain object-center"
                    onEnded={(e) => {
                      const video = e.currentTarget;
                      video.currentTime = 0;
                      void video.play();
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center px-[60px] py-[80px]">
                {project.overviewVideo ? (
                  <video
                    src={project.overviewVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="mx-auto block h-auto w-[70%] max-w-full object-contain object-center transition-transform duration-300 group-hover:scale-[0.97]"
                    style={{ clipPath: "inset(6px 10px)" }}
                  />
                ) : project.id === "trax" ? (
                  <img
                    src="/case-study/trax-main-placeholder.svg"
                    alt="Trax library flow"
                    className="h-auto w-[56%] max-w-full object-contain transition-transform duration-300 group-hover:scale-[0.97]"
                  />
                ) : null}
              </div>
            )}
          </motion.div>
          <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={
                project.id === "scotiabank-unreleased-feature"
                  ? undefined
                  : { scale: 1.01 }
              }
              className={`group relative h-[380px] w-full overflow-hidden ${surfaceClass}`}
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
              {project.id === "trevo" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/case-study/trevo-bottom-left.png"
                    alt="Trevo wordmark"
                    className="h-auto w-[72%] max-w-[280px] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
              )}
              {project.id === "scotiabank-unreleased-feature" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="scotia-flying-s h-[132px] w-[132px] md:h-[152px] md:w-[152px]"
                    role="img"
                    aria-label="Scotiabank"
                  />
                </div>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ scale: 1.01 }}
              className={`group relative h-[380px] w-full overflow-hidden ${surfaceClass}`}
            >
              {project.id === "nucleus" && (
                <img
                  src="/case-study/nucleus-bottom-right-placeholder.svg"
                  alt="Nucleus weekly view detail"
                  className="absolute -bottom-[480px] -right-[310px] w-[744px] max-w-none origin-bottom-right transition-transform duration-300 group-hover:scale-[1.03]"
                />
              )}
              {project.id === "trax" && (
                <div className="flex h-full w-full items-center justify-center px-8 py-8">
                  <video
                    src="/case-study/trax-bottom-right-loop-upscaled.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="mx-auto block h-auto max-h-full w-auto max-w-full object-contain object-center transition-transform duration-300 group-hover:scale-[0.97]"
                  />
                </div>
              )}
              {project.id === "trevo" && (
                <div className="absolute inset-0 flex items-center justify-center px-8 py-8">
                  <img
                    src="/case-study/trevo-bottom-right.png"
                    alt="Trevo itinerary place cards"
                    className="h-auto max-h-full w-[88%] max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
              )}
              {project.id === "scotiabank-unreleased-feature" && (
                <div className="absolute inset-0 flex items-center justify-center px-8 py-8 md:px-10 md:py-10">
                  <img
                    src="/case-study/scotia-overview-trust-card.png"
                    alt="Trust this location card"
                    className="h-auto max-h-[78%] w-full max-w-[320px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
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
