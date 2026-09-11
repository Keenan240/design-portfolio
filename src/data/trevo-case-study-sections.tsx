import React from "react";
import type { CaseStudySection as ProjectSection } from "@/data/projects";
import CaseStudyCallout from "@/components/case-study/CaseStudyCallout";

/** Empty grey well. Swap in media later. */
function MediaFrame({
  label,
  children,
  className = "",
  padClassName = "px-8 pt-10",
  emptyHeight = "h-[320px]",
}: {
  label?: string;
  children?: React.ReactNode;
  className?: string;
  padClassName?: string;
  emptyHeight?: string;
}) {
  return (
    <div
      className={`group relative w-full overflow-hidden bg-[#F5F5F5] ${className}`}
    >
      {children ? (
        <div
          className={`flex w-full items-center justify-center ${padClassName} ${
            label ? "pb-14" : "pb-10"
          }`}
        >
          {children}
        </div>
      ) : (
        <div
          className={`w-full ${emptyHeight}`}
          aria-hidden
        />
      )}
      {label ? (
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold text-[#ACACAC]">
          {label}
        </span>
      ) : null}
    </div>
  );
}

export const trevoCaseStudySections: ProjectSection[] = [
  {
    id: "problem",
    navTitle: "Problem",
    title: "The trip dies between the save and the plan",
    hasPlaceholder: false,
    content: (
      <>
        <p>
          Most travel tools treat discovery, planning, and sharing as separate products. In
          practice, that split is why a lot of trips never leave the group chat.
        </p>
        <p className="mt-6">
          Students find destinations on social media, try to coordinate in scattered threads and
          spreadsheets, then post highlights after the fact with none of the useful itinerary
          attached. Inspiration, logistics, and documentation never meet.
        </p>

        <div className="mt-10 flex flex-col gap-5 md:flex-row md:gap-5">
          <div className="flex-1 bg-[#f5f5f5] px-6 py-6">
            <p className="text-[28px] font-semibold leading-none text-[#6FA7D6]">66%</p>
            <p className="mt-3 text-[16px] leading-relaxed text-[#9A9A9A]">
              of Gen Z use social for destination ideas, but there&apos;s no bridge from a{" "}
              <span className="font-semibold text-white">saved post</span> to a{" "}
              <span className="font-semibold text-white">usable plan</span> (Data Axel, 2025).
            </p>
          </div>
          <div className="flex-1 bg-[#f5f5f5] px-6 py-6">
            <p className="text-[28px] font-semibold leading-none text-[#6FA7D6]">34%</p>
            <p className="mt-3 text-[16px] leading-relaxed text-[#9A9A9A]">
              of students say{" "}
              <span className="font-semibold text-white">scheduling</span> with others is the{" "}
              <span className="font-semibold text-white">hardest part</span> of planning (Starling
              Bank, 2024).
            </p>
          </div>
          <div className="flex-1 bg-[#f5f5f5] px-6 py-6">
            <p className="text-[28px] font-semibold leading-none text-[#6FA7D6]">46%</p>
            <p className="mt-3 text-[16px] leading-relaxed text-[#9A9A9A]">
              of Gen Z post their travels (Skyscanner, 2026), but the next person still has to
              rebuild the trip{" "}
              <span className="font-semibold text-white">from scratch</span>.
            </p>
          </div>
        </div>

        <p className="mt-10">
          The result is familiar. People save more trips than they take, and the next traveler
          inherits vibes instead of a plan.
        </p>
      </>
    ),
    customMedia: <MediaFrame emptyHeight="h-[380px]" />,
    mediaTopSpacing: 64,
  },
  {
    id: "problem-space",
    navTitle: "Problem Space",
    title: "A beachhead we could actually reach",
    hasPlaceholder: false,
    content: (
      <>
        <h3 className="text-[24px] font-semibold text-black">
          Exchange students, not all travelers
        </h3>
        <p className="mt-3">
          Instead of designing for every kind of traveler, we started with university exchange
          students. They are one of the most travel-active Gen Z groups, and we could get in front
          of them quickly. Our campus alone sends 1,000+ students abroad each year and hosts 500+
          incoming exchange students, so we could talk to real users early instead of guessing at
          a broad market.
        </p>

        <div className="mt-8 flex flex-col gap-5">
          <CaseStudyCallout>
            They are digitally native. Discovery already happens on social, not in travel agencies.
          </CaseStudyCallout>
          <CaseStudyCallout>
            High-trust peers beat ads. Recommendations from friends matter more than influencers.
          </CaseStudyCallout>
          <CaseStudyCallout>
            Sharing is already a habit. Many run dedicated &quot;exchange&quot; Instagram accounts
            just to document trips.
          </CaseStudyCallout>
        </div>

        <div className="mt-12">
          <MediaFrame emptyHeight="h-[340px]" label="Segment / research" />
        </div>

        <h3 className="mt-12 text-[24px] font-semibold text-black">
          Two categories, each solving half the job
        </h3>
        <p className="mt-3">
          Looking at the market, tools clustered into planning products and memory products.
          Each was useful on its own and incomplete together.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-[25px] md:grid-cols-2">
          <div className="bg-[#f5f5f5] px-6 py-6">
            <h3 className="text-[17px] font-semibold text-black">Planning tools</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[#9A9A9A]">
              Wanderlog and Mindtrip can spit out itineraries, but they stay generic and weak at
              group or exchange-specific coordination.
            </p>
          </div>
          <div className="bg-[#f5f5f5] px-6 py-6">
            <h3 className="text-[17px] font-semibold text-black">Social trip apps</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[#9A9A9A]">
              Polarsteps and Find Penguins shine after the trip for memories and maps, but they
              don&apos;t help a group decide and plan beforehand.
            </p>
          </div>
        </div>

        <p className="mt-10">
          Trevo&apos;s bet was simpler. Inspiration, planning, and documentation are not three
          products. They are one continuous loop, and nobody was closing it.
        </p>
      </>
    ),
    customMedia: <MediaFrame emptyHeight="h-[360px]" label="Competitive landscape" />,
    mediaTopSpacing: 64,
  },
  {
    id: "goals-and-success-metrics",
    navTitle: "Goals",
    title: "If the loop works, these numbers move",
    hasPlaceholder: false,
    content: (
      <>
        <p>
          Our hypothesis was that closing the loop is what turns saved ideas into actual trips.
          So success metrics followed the loop itself, not vanity engagement.
        </p>

        <div className="mt-8 flex flex-col gap-5">
          <CaseStudyCallout>
            <span className="text-[#6FA7D6]">Explore to Plan conversion. </span>
            This is the share of users who open a shared itinerary and create or fork a plan from
            it. It proves that inspiration becomes action.
          </CaseStudyCallout>
          <CaseStudyCallout>
            <span className="text-[#6FA7D6]">Plan completion rate. </span>
            This is the share of started itineraries that reach a &quot;ready to travel&quot;
            state. It shows whether collaboration actually cuts coordination friction.
          </CaseStudyCallout>
          <CaseStudyCallout>
            <span className="text-[#6FA7D6]">Plan to Share conversion. </span>
            This is the share of finished itineraries published as live guides. It signals that
            documentation stopped being a separate chore.
          </CaseStudyCallout>
          <CaseStudyCallout>
            <span className="text-[#6FA7D6]">Beachhead penetration. </span>
            This tracks active users as a percent of our SOM (10.8K), cohort by cohort, before
            expanding beyond exchange students.
          </CaseStudyCallout>
        </div>
      </>
    ),
    customMedia: <MediaFrame emptyHeight="h-[300px]" />,
    mediaTopSpacing: 64,
  },
  {
    id: "solution",
    navTitle: "Solution",
    title: "One trip, three surfaces",
    hasPlaceholder: false,
    content: (
      <>
        <p>
          Each part of the product maps to one of the three gaps, and hands off cleanly to the
          next.
        </p>

        <div className="pt-12">
          <h3 className="text-[22px] font-semibold text-black">Explore</h3>
          <p className="mt-3">
            A collage of real trip photos that open into the structured itinerary behind them.
            Instead of saving an image and losing the context, you land inside the plan that made
            the trip work.
          </p>
          <div className="mt-10">
            <MediaFrame label="Explore" emptyHeight="h-[380px]" />
          </div>
        </div>

        <div className="pt-12">
          <h3 className="text-[22px] font-semibold text-black">Plan</h3>
          <p className="mt-3">
            Collaborative itineraries a group can build from a template or from scratch. The goal
            was one shared source of truth instead of a pile of chats, screenshots, and
            half-updated spreadsheets.
          </p>
          <div className="mt-10">
            <MediaFrame label="Plan" emptyHeight="h-[380px]" />
          </div>
        </div>

        <div className="pt-12">
          <h3 className="text-[22px] font-semibold text-black">Share</h3>
          <p className="mt-3">
            Turn a finished plan into a live guide and publish it. The itinerary someone actually
            used becomes what the next traveler discovers in Explore. Loop closed.
          </p>
          <div className="mt-10">
            <MediaFrame label="Share" emptyHeight="h-[380px]" />
          </div>
        </div>
      </>
    ),
  },
  {
    id: "reflection",
    navTitle: "Reflection",
    title: "What I’d push on next",
    hasPlaceholder: false,
    content: (
      <>
        <div className="flex flex-col gap-5 md:flex-row md:gap-5">
          <div className="flex-1 bg-[#f5f5f5] px-6 py-6">
            <h3 className="text-[17px] font-semibold text-black">AI as a draft, not a gimmick</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[#9A9A9A]">
              Our weakest competitive edge, and the most natural next bet, is AI-assisted trip
              generation. Done well, it shortens the path from Explore to a usable draft without
              replacing the collaborative plan.
            </p>
          </div>
          <div className="flex-1 bg-[#f5f5f5] px-6 py-6">
            <h3 className="text-[17px] font-semibold text-black">Test the loop earlier</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[#9A9A9A]">
              The biggest untested assumption is the loop itself. Does documentation as a byproduct
              make publishing easy, or do students simply not want to share polished itineraries?
            </p>
          </div>
          <div className="flex-1 bg-[#f5f5f5] px-6 py-6">
            <h3 className="text-[17px] font-semibold text-black">The team made it real</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[#9A9A9A]">
              Building Trevo with this crew was a highlight. Late nights, messy tradeoffs, and a
              product I still care about. Trevo forever.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <MediaFrame emptyHeight="h-[360px]" />
        </div>
      </>
    ),
  },
];
