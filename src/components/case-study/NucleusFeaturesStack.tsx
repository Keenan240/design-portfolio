"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";

const VISIBLE_THRESHOLD = 0.15;

function StackCardVideo({
  src,
  className,
  wrapperClassName,
  style,
}: {
  src: string;
  className?: string;
  wrapperClassName?: string;
  style?: CSSProperties;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const video = videoRef.current;
    if (!wrapper || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [e] = entries;
        if (!e) return;
        if (e.isIntersecting && e.intersectionRatio >= VISIBLE_THRESHOLD) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { root: null, rootMargin: "0px", threshold: [0, VISIBLE_THRESHOLD, 0.5, 1] }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={
        wrapperClassName ?? "flex-1 min-w-0 flex items-center justify-center min-h-0"
      }
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className={className}
        style={style}
      />
    </div>
  );
}

const cardClassName = "flex flex-col w-full";

const cardRevealInitial = { opacity: 0, y: 28 };
const cardRevealInView = { opacity: 1, y: 0 };
const cardRevealTransition = (delay: number) => ({
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
  delay,
});

function FeatureMediaStack({
  videoSrc,
  showBottomPlaceholders = true,
}: {
  videoSrc: string;
  showBottomPlaceholders?: boolean;
}) {
  return (
    <div className="mt-[40px] space-y-[25px]">
      <div className="w-full overflow-hidden bg-[#F5F5F5]">
        <div className="flex h-full w-full items-center justify-center px-[60px] py-[80px]">
          <StackCardVideo
            src={videoSrc}
            wrapperClassName="w-full flex items-center justify-center"
            className="w-[72%] max-w-full h-auto object-contain border border-[#DDDDDD] block"
          />
        </div>
      </div>

      {showBottomPlaceholders && (
        <div className="grid grid-cols-2 gap-[25px]">
          <div className="h-[320px] w-full overflow-hidden bg-[#F5F5F5] flex items-center justify-center text-[#757575] font-medium">
            Image Placeholder
          </div>
          <div className="h-[320px] w-full overflow-hidden bg-[#F5F5F5] flex items-center justify-center text-[#757575] font-medium">
            Image Placeholder
          </div>
        </div>
      )}
    </div>
  );
}

export default function NucleusFeaturesStack() {
  return (
    <div className="flex flex-col gap-[64px] w-full max-w-[1280px] mx-auto">
      <motion.div
        className={cardClassName}
        initial={cardRevealInitial}
        whileInView={cardRevealInView}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={cardRevealTransition(0)}
      >
        <h3 className="text-[22px] font-semibold text-black">Syllabus Scanner</h3>
        <p className="text-[20px] text-[#4a4a4a] leading-relaxed text-left">
          The Syllabus Scanner extracts deadlines, grading weights, and course logistics from uploaded syllabi so students start with a structured system instead of spending time on manual setup.
        </p>
        <FeatureMediaStack
          videoSrc="/projects/syllabus-scanner-demo.mp4"
          showBottomPlaceholders={false}
        />
      </motion.div>

      <motion.div
        className={cardClassName}
        initial={cardRevealInitial}
        whileInView={cardRevealInView}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={cardRevealTransition(0.06)}
      >
        <h3 className="text-[22px] font-semibold text-black">Classes Page</h3>
        <p className="text-[20px] text-[#4a4a4a] leading-relaxed text-left">
          The Classes Page centralizes course timelines, grading context, and policies in one place so students can stay oriented by class without jumping across multiple tools.
        </p>
        <div className="mt-[40px] space-y-[25px]">
          <div className="w-full overflow-hidden bg-[#F5F5F5]">
            <div className="flex h-full w-full items-center justify-center px-[60px] py-[80px]">
              <StackCardVideo
                src="/projects/classes-page-demo.mp4"
                wrapperClassName="w-full flex items-center justify-center"
                className="w-[72%] max-w-full h-auto object-contain border border-[#DDDDDD] block"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={cardClassName}
        initial={cardRevealInitial}
        whileInView={cardRevealInView}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={cardRevealTransition(0.12)}
      >
        <h3 className="text-[22px] font-semibold text-black">Weekly View</h3>
        <p className="text-[20px] text-[#4a4a4a] leading-relaxed text-left">
          Weekly View places tasks on a visual timeline so students can see workload by day and turn deadlines into a clearer plan for immediate execution.
        </p>
        <div className="mt-[40px] space-y-[25px]">
          <div className="w-full overflow-hidden bg-[#F5F5F5]">
            <div className="flex h-full w-full items-center justify-center px-[60px] py-[80px]">
              <StackCardVideo
                src="/projects/weekly-view-demo.mp4"
                wrapperClassName="w-full flex items-center justify-center"
                className="w-[72%] max-w-full h-auto object-contain border border-[#DDDDDD] block"
                style={{ clipPath: "inset(30px 10px 0 10px)" }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={cardClassName}
        initial={cardRevealInitial}
        whileInView={cardRevealInView}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={cardRevealTransition(0.18)}
      >
        <h3 className="text-[22px] font-semibold text-black">Sub-Deadlines</h3>
        <p className="text-[20px] text-[#4a4a4a] leading-relaxed text-left">
          Sub-Deadlines break large assessments into smaller checkpoints across time, helping students start earlier and make steady progress instead of cramming near due dates.
        </p>
        <div className="mt-[40px] grid grid-cols-2 gap-[25px]">
          <div className="w-full overflow-hidden bg-[#F5F5F5]">
            <div className="flex h-full w-full items-center justify-center px-[60px] py-[80px]">
              <StackCardVideo
                src="/projects/sub-deadlines-demo.mp4"
                wrapperClassName="w-full flex items-center justify-center"
                className="w-[82%] max-w-full h-auto object-contain border border-[#DDDDDD] block"
              />
            </div>
          </div>
          <div className="w-full overflow-hidden bg-[#F5F5F5]">
            <div className="flex h-full w-full items-center justify-center px-[60px] py-[80px]">
              <img
                src="/case-study/nucleus-sub-deadlines-frame-53.svg"
                alt="Sub-deadlines supporting frame"
                className="w-[108%] max-w-none h-auto object-contain block"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
