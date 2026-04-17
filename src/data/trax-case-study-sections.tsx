import React from "react";
import type { CaseStudySection as ProjectSection } from "@/data/projects";

function TraxDecisionsAndScreensContent() {
  return (
    <>
      <div>
        <h3 className="text-[22px] font-semibold text-black">Denser library cards</h3>
        <p className="mt-3">
          The previous card layout used a lot of space, with only about six cards visible at once. By
          tightening card size and surfacing only essential metadata, the redesigned grid roughly doubles how
          many items fit in the same viewport.
        </p>
      </div>
      <div className="mt-10 space-y-[25px] w-full max-w-none">
        <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2">
          <div className="group relative h-[420px] w-full overflow-hidden bg-[#F5F5F5] px-6 pt-6 pb-14">
            <div className="flex h-full w-full items-center justify-center">
              <img
                src="/case-study/trax-new-card-grid-old-design.svg"
                alt="Library card grid old design"
                className="h-auto w-[92%] max-h-[95%] max-w-full object-contain"
              />
            </div>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold text-[#ACACAC]">
              Old Design
            </span>
          </div>
          <div className="group relative h-[420px] w-full overflow-hidden bg-[#F5F5F5] px-6 pt-6 pb-14">
            <div className="flex h-full w-full items-center justify-center">
              <img
                src="/case-study/trax-new-card-grid-new-design.svg"
                alt="Library card grid new design"
                className="h-auto w-[92%] max-h-[95%] max-w-full object-contain"
              />
            </div>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold text-[#ACACAC]">
              New Design
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2">
          <div className="group relative h-[500px] w-full overflow-hidden bg-[#F5F5F5] px-6 pt-6 pb-14">
            <div className="flex h-full w-full items-center justify-center">
              <img
                src="/case-study/trax-new-card-grid-row2-old-design.svg"
                alt="Library card grid second row old design"
                className="h-auto w-[92%] max-h-[95%] max-w-full object-contain"
              />
            </div>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold text-[#ACACAC]">
              Old Design
            </span>
          </div>
          <div className="group relative h-[500px] w-full overflow-hidden bg-[#F5F5F5] px-6 pt-6 pb-14">
            <div className="flex h-full w-full items-center justify-center">
              <img
                src="/case-study/trax-new-card-grid-row2-new-design.svg"
                alt="Library card grid second row new design"
                className="h-auto w-[92%] max-h-[95%] max-w-full object-contain"
              />
            </div>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold text-[#ACACAC]">
              New Design
            </span>
          </div>
        </div>
      </div>

      <div className="pt-12">
        <h3 className="text-[22px] font-semibold text-black">Filters &amp; quick access</h3>
        <p className="mt-3">
          Filter panels and quick-access paths were redesigned so users can narrow results without losing
          where they are in the library.
        </p>
      </div>
      <div className="mt-10 space-y-[25px] w-full max-w-none">
        <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2">
          <div className="group relative h-[500px] w-full overflow-hidden bg-[#F5F5F5] px-6 pt-6 pb-14">
            <div className="flex h-full w-full items-center justify-center">
              <img
                src="/case-study/trax-filter-old-design.svg"
                alt="Filtered search old design"
                className="h-auto w-[86%] max-h-[95%] max-w-full object-contain"
              />
            </div>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold text-[#ACACAC]">
              Old Design
            </span>
          </div>
          <div className="group relative h-[500px] w-full overflow-hidden bg-[#F5F5F5] px-6 pt-6 pb-14">
            <div className="flex h-full w-full items-center justify-center gap-4">
              <img
                src="/case-study/trax-filter-panels-a.svg"
                alt="Filtered search new design panel state A"
                className="h-auto w-[44%] max-w-[44%] object-contain self-center"
              />
              <img
                src="/case-study/trax-filter-panels-b.svg"
                alt="Filtered search new design panel state B"
                className="h-auto w-[44%] max-w-[44%] object-contain self-center"
              />
            </div>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold text-[#ACACAC]">
              New Design
            </span>
          </div>
        </div>
        <div className="group relative h-[660px] w-full overflow-hidden bg-[#F5F5F5] px-6 pt-6 pb-14">
          <div className="flex h-full w-full items-center justify-center">
            <img
              src="/case-study/trax-quick-access-filters.svg"
              alt="Quick access filters design"
              className="h-auto w-[100%] max-h-none max-w-none object-contain scale-[0.76] origin-center"
            />
          </div>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold text-[#ACACAC]">
            Quick Access Filters
          </span>
        </div>
      </div>

      <div className="pt-12">
        <h3 className="text-[22px] font-semibold text-black">Favourites</h3>
        <p className="mt-3">
          There was no Favourites section in the Library before, so moving it from home-page Quick Links into the main library now makes saved codes easier to open while scanning other codes.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-[25px] md:grid-cols-2">
        <div className="group relative min-h-[320px] w-full overflow-hidden bg-[#F5F5F5] px-6 pt-6 pb-14">
          <div className="flex h-full min-h-[280px] w-full items-center justify-center">
            <img
              src="/case-study/trax-favourites-old-design.png"
              alt="Library view before a dedicated Favourites section"
              className="h-auto w-[92%] max-h-[95%] max-w-full object-contain"
            />
          </div>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold text-[#ACACAC]">
            Old Design
          </span>
        </div>
        <div className="group relative min-h-[320px] w-full overflow-hidden bg-[#F5F5F5] px-6 pt-6 pb-14">
          <div className="flex h-full min-h-[280px] w-full items-center justify-center">
            <img
              src="/case-study/trax-favourites-new-design.svg"
              alt="Library view with Favourites in the main library"
              className="h-auto w-[92%] max-h-[95%] max-w-full object-contain"
            />
          </div>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold text-[#ACACAC]">
            New Design
          </span>
        </div>
      </div>

      <div className="pt-12">
        <h3 className="text-[22px] font-semibold text-black">Search HUD</h3>
        <p className="mt-3">
          Search results were adjusted to reduce visual noise and make matches easier to compare against the
          previous, busier layout.
        </p>
      </div>
      <div className="mt-10 space-y-[25px] w-full max-w-none">
        <div className="group relative h-[320px] w-full overflow-hidden bg-[#F5F5F5] px-6 pt-6 pb-14">
          <div className="flex h-full w-full items-center justify-center">
            <video
              src="/case-study/trax-search-results-old-loop-upscaled.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-auto w-[88%] max-h-[88%] max-w-full object-contain"
            />
          </div>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold text-[#ACACAC]">
            Old Design
          </span>
        </div>
        <div className="group relative h-[560px] w-full overflow-hidden bg-[#F5F5F5] px-6 pt-12 pb-9">
          <div className="flex h-full w-full items-center justify-center">
            <video
              src="/case-study/trax-bottom-right-loop-upscaled.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-auto w-[123%] max-h-[123%] max-w-none object-contain"
              style={{ clipPath: "inset(40px 0 110px 0)" }}
            />
          </div>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold text-[#ACACAC]">
            New Design
          </span>
        </div>
      </div>

      <div className="pt-12">
        <h3 className="text-[22px] font-semibold text-black">Final Design</h3>
      </div>
      <p className="mt-3">
        Together, these updates created a more modern Library UI that improves scanning, simplifies filtering,
        and makes key code references easier to access.
      </p>
      <div className="mt-10 min-h-[360px] w-full overflow-hidden bg-[#F5F5F5]">
        <div className="flex h-full w-full items-center justify-center px-[60px] py-[80px]">
          <img
            src="/case-study/trax-main-placeholder.svg"
            alt="Final Trax library design"
            className="h-auto w-[69%] max-w-full object-contain"
          />
        </div>
      </div>
    </>
  );
}

export const traxCaseStudySections: ProjectSection[] = [
  {
    id: "problem",
    title: "Problem",
    hasPlaceholder: true,
    placeholderStyle: "single",
    mediaTopSpacing: 64,
    content: (
      <>
        <h3 className="text-[24px] font-semibold text-black">Creating a modern library experience</h3>
        <p>
          Across Canada, code access is often fragmented across sources that are not tuned to provincial by-laws and are delivered through outdated search flows or static PDFs instead of a centralized searchable library.
        </p>
        <p className="mt-6">
          Trax is positioned to be that centralized experience, but the current library and search UI used screen space inefficiently and made browsing and searching harder to scan than leading benchmarks like UpCodes.
        </p>
      </>
    ),
    customMedia: (
      <div className="group min-h-[360px] w-full overflow-hidden bg-[#F5F5F5]">
        <div className="flex h-full w-full items-center justify-center px-[60px] py-[80px]">
          <img
            src="/case-study/trax-problem-image-36.svg"
            alt="Trax problem context visual"
            className="h-auto w-[80.5%] max-w-full object-contain"
          />
        </div>
      </div>
    ),
  },
  {
    id: "insights",
    title: "Market Research",
    hasPlaceholder: false,
    content: (
      <>
        <p>
          Before redesigning the library UI, I reviewed alternatives in Canada and the US to understand where
          Trax could differentiate and where current experiences felt outdated.
        </p>
      </>
    ),
    customMedia: (
      <div className="group relative h-[500px] w-full overflow-hidden bg-[#F5F5F5] px-6 pt-6 pb-14">
        <div className="flex h-full w-full items-center justify-center">
          <img
            src="/case-study/trax-current-space-frame-97.svg"
            alt="Current space design frame"
            className="h-auto w-[86%] max-h-[95%] max-w-full object-contain"
          />
        </div>
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold text-[#ACACAC]">
          Competitor Analysis
        </span>
      </div>
    ),
  },
  {
    id: "head-to-head",
    title: "Head-To-Head",
    hasPlaceholder: true,
    placeholderStyle: "single",
    mediaTopSpacing: 64,
    content: (
      <>
        <p>
          Trax is well positioned for Canadian building codes: many alternatives are either not tailored to
          provincial by-laws or feel dated. The National Research Council shift toward PDFs highlights the
          value of a centralized, searchable experience.
        </p>
        <p className="mt-6">
          UpCodes is a useful US benchmark: similar mental model, strong use of space, and feature depth, but
          not focused on Canada. That makes a tighter Trax library experience a strategic advantage if
          adoption accelerates.
        </p>
      </>
    ),
    customMedia: (
      <div className="space-y-[25px]">
        <div className="group relative h-[620px] w-full overflow-hidden bg-[#F5F5F5] px-6 pt-6 pb-14">
          <div className="flex h-full w-full items-center justify-center gap-[25px]">
            <img
              src="/case-study/trax-upcodes-swot.svg"
              alt="UpCodes SWOT analysis"
              className="h-auto w-[49%] max-h-[96%] max-w-[49%] object-contain"
            />
            <img
              src="/case-study/trax-trax-swot.svg"
              alt="Trax SWOT analysis"
              className="h-auto w-[49%] max-h-[96%] max-w-[49%] object-contain"
            />
          </div>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold text-[#ACACAC]">
            SWOT Chart
          </span>
        </div>
        <p className="text-[18px] font-semibold text-black">A useful library search should…</p>
        <div className="flex flex-col gap-5 md:flex-row md:gap-5">
          <div className="flex-1 border border-[#e7e7e7] bg-[#f5f5f5] px-6 py-6">
            <h3 className="text-[17px] font-semibold text-black">Use space better</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[#4a4a4a]">
              UpCodes fits more useful information into view, so Trax should tighten layout density without
              hurting readability.
            </p>
          </div>
          <div className="flex-1 border border-[#e7e7e7] bg-[#f5f5f5] px-6 py-6">
            <h3 className="text-[17px] font-semibold text-black">Keep users oriented</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[#4a4a4a]">
              Trax should make filtering and navigation feel predictable so users stay anchored while narrowing
              results.
            </p>
          </div>
          <div className="flex-1 border border-[#e7e7e7] bg-[#f5f5f5] px-6 py-6">
            <h3 className="text-[17px] font-semibold text-black">Prioritize Canadian context</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[#4a4a4a]">
              Unlike UpCodes, Trax can focus deeply on provincial by-laws and become the go-to centralized source
              in Canada.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "process",
    title: "Process",
    hasPlaceholder: true,
    placeholderStyle: "single",
    mediaTopSpacing: 64,
    content: (
      <>
        <p>
          Over roughly eight weeks, I worked with a project manager and fellow designers, iterating from rough
          wireframes to high-fidelity comparisons, prioritizing flows that affected everyday browsing and
          search.
        </p>
        <p className="mt-6">
          Early explorations focused on library density, search HUD behavior, and alternate groupings for
          cards before converging on the directions below.
        </p>
        <div className="mt-6 flex flex-col gap-5 md:flex-row md:gap-5">
          <div className="flex-1 border border-[#e7e7e7] bg-[#f5f5f5] px-6 py-6">
            <h3 className="text-[17px] font-semibold text-black">Card density</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[#4a4a4a]">
              Increase how many library cards fit in view while keeping legibility.
            </p>
          </div>
          <div className="flex-1 border border-[#e7e7e7] bg-[#f5f5f5] px-6 py-6">
            <h3 className="text-[17px] font-semibold text-black">Filter clarity</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[#4a4a4a]">
              Make filtering and quick access feel predictable and in-context.
            </p>
          </div>
          <div className="flex-1 border border-[#e7e7e7] bg-[#f5f5f5] px-6 py-6">
            <h3 className="text-[17px] font-semibold text-black">Result scanning</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[#4a4a4a]">
              Reduce noise in search results so matches are easier to compare.
            </p>
          </div>
        </div>
      </>
    ),
    customMedia: (
      <div className="space-y-[25px]">
        <div className="min-h-[360px] w-full overflow-hidden bg-[#F5F5F5]">
          <div className="flex h-full w-full items-center justify-center px-[60px] py-[80px]">
            <img
              src="/case-study/trax-ideation-library.svg"
              alt="Trax ideation library wireframe"
              className="h-auto w-[80.5%] max-w-full object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2">
          <div className="relative h-[360px] w-full overflow-hidden bg-[#F5F5F5] flex items-center justify-center">
            <img
              src="/case-study/trax-ideation-search-hud-mid-typing.svg"
              alt="Ideation search HUD mid typing"
              className="h-auto w-[80.5%] max-w-full object-contain"
            />
          </div>
          <div className="relative h-[360px] w-full overflow-hidden bg-[#F5F5F5] flex items-center justify-center">
            <img
              src="/case-study/trax-ideation-groupby-library-card.svg"
              alt="Ideation group by dropdown library card"
              className="h-auto w-[80.5%] max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "decisions",
    title: "Designs",
    hasPlaceholder: false,
    content: <TraxDecisionsAndScreensContent />,
  },
  {
    id: "reflection",
    title: "Reflection",
    hasPlaceholder: false,
    content: (
      <div className="flex flex-col gap-5 md:flex-row md:gap-5">
        <div className="flex-1 border border-[#e7e7e7] bg-[#f5f5f5] px-6 py-6">
          <h3 className="text-[17px] font-semibold text-black">Density needs clarity</h3>
          <p className="mt-3 text-[16px] leading-relaxed text-[#4a4a4a]">
            Increasing on-screen density only works when hierarchy and type stay calm, so legibility checks were
            essential at smaller card sizes.
          </p>
        </div>
        <div className="flex-1 border border-[#e7e7e7] bg-[#f5f5f5] px-6 py-6">
          <h3 className="text-[17px] font-semibold text-black">Predictability builds trust</h3>
          <p className="mt-3 text-[16px] leading-relaxed text-[#4a4a4a]">
            Filter and quick-access patterns mattered as much for confidence as speed because users need to feel
            anchored while narrowing results.
          </p>
        </div>
        <div className="flex-1 border border-[#e7e7e7] bg-[#f5f5f5] px-6 py-6">
          <h3 className="text-[17px] font-semibold text-black">Validate with real tasks</h3>
          <p className="mt-3 text-[16px] leading-relaxed text-[#4a4a4a]">
            The next step is task-based usability testing on real code lookup workflows to confirm these
            improvements under practical constraints.
          </p>
        </div>
      </div>
    ),
  },
];
