"use client";

import { useRef, useEffect } from "react";

const VISIBLE_THRESHOLD = 0.15;

function StackCardVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
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
    <div ref={wrapperRef} className="flex-1 min-w-0 flex items-center justify-center min-h-0">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className={className}
      />
    </div>
  );
}

const cardClassName =
  "flex flex-col w-full bg-white rounded-[24px] border border-[#DDDDDD] p-8 pt-[36px] pb-[48px] shadow-[0px_2px_12px_rgba(0,0,0,0.08)]";

export default function NucleusFeaturesStack() {
  return (
    <div className="flex flex-col gap-[64px] w-full max-w-[1280px] mx-auto">
      <div className={`${cardClassName}`}>
        <div className="flex flex-row gap-6 items-stretch">
          <div className="flex flex-col justify-end max-w-[480px] shrink-0">
            <h3 className="text-[32px] font-semibold text-black pb-6">
              Syllabus Scanner
            </h3>
            <h4 className="text-[20px] font-semibold text-black mb-4">
              What It Does
            </h4>
            <p className="text-[14px] text-[#4a4a4a] leading-relaxed text-left">
              The Syllabus Scanner automatically extracts key academic
              information from uploaded course syllabi, generating structured
              course data including deadlines, grading breakdowns, and important
              logistics. This provides students with an immediate organizational
              foundation at the start of the semester without requiring manual
              setup.
            </p>
            <h4 className="text-[20px] font-semibold text-black mt-6 mb-4">
              Value &amp; Impact
            </h4>
            <p className="text-[14px] text-[#4a4a4a] leading-relaxed text-left">
              Research showed that many students procrastinate before organizing
              simply because setup feels overwhelming. By removing manual data
              entry, the onboarding experience shifts from building a system to
              starting with one already created. This reduces activation energy
              and allows students to transition directly into managing their
              workload rather than preparing to manage it.
            </p>
          </div>
          <StackCardVideo
            src="/projects/syllabus-scanner-demo.mp4"
            className="max-w-full max-h-full w-auto h-full object-contain rounded-[16px] border border-[#DDDDDD] block"
          />
        </div>
      </div>

      <div className={`${cardClassName}`}>
        <div className="flex flex-row gap-6 items-stretch">
          <div className="flex flex-col justify-end max-w-[480px] shrink-0">
            <h3 className="text-[32px] font-semibold text-black pb-6">
              Classes Page
            </h3>
            <h4 className="text-[20px] font-semibold text-black mb-4">
              What It Does
            </h4>
            <p className="text-[14px] text-[#4a4a4a] leading-relaxed text-left">
              The Classes Page centralizes essential course information into a
              single, persistent workspace. Students can access assignment
              timelines, grading weights, instructor information, and academic
              policies without navigating across multiple platforms. Each course
              acts as an anchor point connecting deadlines, tasks, and
              performance tracking.
            </p>
            <h4 className="text-[20px] font-semibold text-black mt-6 mb-4">
              Value &amp; Impact
            </h4>
            <p className="text-[14px] text-[#4a4a4a] leading-relaxed text-left">
              Students naturally organize responsibilities by course rather than
              by abstract task lists. Designing around this mental model reduces
              the need for translation between platforms. Centralizing academic
              context minimizes tool switching and helps students maintain
              clarity about course expectations throughout the semester.
            </p>
          </div>
          <StackCardVideo
            src="/projects/classes-page-demo.mp4"
            className="max-w-full max-h-full w-auto h-full object-contain rounded-[16px] border border-[#DDDDDD] block"
          />
        </div>
      </div>

      <div className={`${cardClassName}`}>
        <div className="flex flex-row gap-6 items-stretch">
          <div className="flex flex-col justify-end max-w-[480px] shrink-0">
            <h3 className="text-[32px] font-semibold text-black pb-6">
              Weekly View
            </h3>
            <h4 className="text-[20px] font-semibold text-black mb-4">
              What It Does
            </h4>
            <p className="text-[14px] text-[#4a4a4a] leading-relaxed text-left">
              The Weekly View presents tasks and deadlines within a color-coded
              weekly timeline, allowing students to visualize workload
              distribution and upcoming responsibilities. Students can customize
              action plans directly within this view, turning deadlines into
              scheduled execution.
            </p>
            <h4 className="text-[20px] font-semibold text-black mt-6 mb-4">
              Value &amp; Impact
            </h4>
            <p className="text-[14px] text-[#4a4a4a] leading-relaxed text-left">
              Students often know what assignments exist but struggle to decide
              what to work on at any given moment. By transforming deadlines
              into a visual weekly plan, this feature reduces decision fatigue
              and supports short-term prioritization. The experience moves
              students from passive awareness of deadlines toward active task
              execution.
            </p>
          </div>
          <StackCardVideo
            src="/projects/weekly-view-demo.mp4"
            className="max-w-full max-h-full w-auto h-full object-contain rounded-[16px] border border-[#DDDDDD] block"
          />
        </div>
      </div>

      <div className={`${cardClassName}`}>
        <div className="flex flex-row gap-6 items-stretch">
          <div className="flex flex-col justify-end max-w-[480px] shrink-0">
            <h3 className="text-[32px] font-semibold text-black pb-6">
              Sub-Deadlines
            </h3>
            <h4 className="text-[20px] font-semibold text-black mb-4">
              What It Does
            </h4>
            <p className="text-[14px] text-[#4a4a4a] leading-relaxed text-left">
              Sub-Deadlines break large assessments into smaller, manageable
              milestones distributed across a timeline leading up to the final
              due date. These structured checkpoints guide students through
              long-term assignments incrementally.
            </p>
            <h4 className="text-[20px] font-semibold text-black mt-6 mb-4">
              Value &amp; Impact
            </h4>
            <p className="text-[14px] text-[#4a4a4a] leading-relaxed text-left">
              Large assignments frequently trigger avoidance because the
              starting point feels unclear. By reframing assessments as a
              sequence of smaller actions, Sub-Deadlines reduce perceived
              workload intensity and encourage consistent progress over
              last-minute completion. This directly targets organizational
              procrastination identified during research.
            </p>
          </div>
          <StackCardVideo
            src="/projects/sub-deadlines-demo.mp4"
            className="max-w-full max-h-full w-auto h-full object-contain rounded-[16px] border border-[#DDDDDD] block"
          />
        </div>
      </div>
    </div>
  );
}
