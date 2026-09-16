import React from "react";
import {
  Building2,
  ClipboardList,
  HelpCircle,
  LightbulbOff,
  MapPinned,
  Megaphone,
  PersonStanding,
  Search,
  Shield,
  ThumbsDown,
  ThumbsUp,
  User,
  MapPin,
  Pointer,
} from "lucide-react";
import type { CaseStudySection as ProjectSection } from "@/data/projects";
import CaseStudyCallout from "@/components/case-study/CaseStudyCallout";
import CascadeItem from "@/components/case-study/CascadeItem";

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
          className={`flex h-full w-full items-center justify-center ${padClassName} ${
            label ? "pb-14" : "pb-10"
          }`}
        >
          {children}
        </div>
      ) : (
        <div className={`w-full ${emptyHeight}`} aria-hidden />
      )}
      {label ? (
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[14px] font-semibold text-[#ACACAC]">
          {label}
        </span>
      ) : null}
    </div>
  );
}

function ConceptRow({
  title,
  children,
  mediaLabel,
  mediaSrc,
  mediaAlt,
  index = 0,
}: {
  title: string;
  children: React.ReactNode;
  mediaLabel?: string;
  mediaSrc?: string;
  mediaAlt?: string;
  index?: number;
}) {
  return (
    <CascadeItem index={index}>
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10">
        {mediaSrc ? (
          <MediaFrame
            className="flex h-[260px] items-center justify-center sm:h-[280px] md:h-[300px]"
            padClassName="!box-border !h-full !py-8 px-6 sm:px-8"
          >
            <img
              src={mediaSrc}
              alt={mediaAlt ?? title}
              className="mx-auto max-h-full w-auto max-w-full object-contain object-center"
            />
          </MediaFrame>
        ) : (
          <MediaFrame label={mediaLabel} emptyHeight="h-[340px]" />
        )}
        <div className="min-w-0 pt-1">
          <h3 className="text-[22px] font-semibold leading-snug tracking-[-0.07em] text-[#2A2A2A] md:text-[24px]">
            {title}
          </h3>
          <div className="mt-4 space-y-4 text-[17px] leading-[1.7] text-[#9A9A9A] md:text-[18px]">
            {children}
          </div>
        </div>
      </div>
    </CascadeItem>
  );
}

export function KeyScreenAnalysis({
  title,
  findings,
  media,
  index = 0,
}: {
  title: string;
  findings: { headline: string; body: string }[];
  media?: React.ReactNode;
  index?: number;
}) {
  return (
    <CascadeItem
      index={index}
      className="!mt-48 first:!mt-0 md:!mt-56"
    >
      <h3 className="text-[28px] font-semibold leading-tight tracking-[-0.07em] text-[#2A2A2A] md:text-[36px]">
        {title}
      </h3>
      <div className="mt-10 grid grid-cols-1 items-start gap-8 md:mt-12 md:grid-cols-2 md:gap-10">
        <div className="min-w-0">
          {media ?? <MediaFrame emptyHeight="h-[520px] md:h-[640px]" />}
        </div>
        <div className="flex min-w-0 flex-col gap-8 md:gap-10">
          {findings.map((finding, i) => (
            <CascadeItem key={finding.headline} index={i}>
              <div>
                <h4 className="text-[20px] font-semibold leading-snug tracking-[-0.07em] text-[#2A2A2A] md:text-[22px]">
                  {finding.headline}
                </h4>
                <p className="mt-3 text-[16px] leading-[1.7] text-[#9A9A9A] md:text-[17px]">
                  {finding.body}
                </p>
              </div>
            </CascadeItem>
          ))}
        </div>
      </div>
    </CascadeItem>
  );
}

function KeyScreenPhone({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <MediaFrame padClassName="!py-12 px-8 sm:!py-14 sm:px-10 md:!py-16 md:px-12">
      <div className="w-[200px] max-w-full overflow-hidden rounded-[32px] sm:w-[220px] md:w-[240px] md:rounded-[38px]">
        <img
          src={src}
          alt={alt}
          className="block h-auto w-full object-contain object-center"
        />
      </div>
    </MediaFrame>
  );
}

export const scotiaCaseStudySections: ProjectSection[] = [
  {
    id: "what-is-a-trusted-location",
    navTitle: "Trusted location",
    title: "What is a trusted location?",
    hasPlaceholder: false,
    content: (
      <div className="w-full">
        <CascadeItem>
          <div className="flex w-full flex-col items-center bg-[#F5F5F5] px-8 py-14 md:px-16 md:py-20">
            <div
              className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-dotted border-[#ED111B] bg-white text-[#ED111B]"
              aria-hidden
            >
              <MapPin className="h-7 w-7" strokeWidth={2.25} />
            </div>
            <p className="max-w-[720px] text-center text-[26px] font-semibold leading-snug tracking-[-0.07em] text-[#2A2A2A] md:text-[32px]">
              A trusted location is a place that is designated as safe to bank
              in.
            </p>
          </div>
        </CascadeItem>

        <div className="mt-10 max-w-none space-y-6">
          <CascadeItem index={1}>
            <p>
              Many Scotiabank clients have expressed their complaints around
              constantly being stepped up, primarily in low-risk environments.
            </p>
          </CascadeItem>
          <CascadeItem index={2}>
            <CaseStudyCallout>
              Trusted Locations aims to solve this by allowing the user to skip
              extra verification when they are in a place they have indicated as
              safe.
            </CaseStudyCallout>
          </CascadeItem>
        </div>
      </div>
    ),
  },
  {
    id: "why-does-this-matter",
    navTitle: "Why it matters",
    title: "Why does this matter?",
    hasPlaceholder: false,
    content: (
      <>
        <CascadeItem>
          <MediaFrame
            emptyHeight="h-[240px] sm:h-[300px] md:h-[360px]"
            padClassName="px-6 py-8 sm:px-10 sm:py-12 md:px-16 md:py-16"
          >
            <img
              src="/case-study/scotia-big-five-banks.png"
              alt="Big Five Canadian banks: CIBC, RBC, BMO, and TD"
              className="h-auto w-full max-w-[220px] object-contain sm:max-w-[300px] md:max-w-[400px] lg:max-w-[480px]"
            />
          </MediaFrame>
        </CascadeItem>

        <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-stretch md:gap-5">
          {[
            {
              title: "Reducing friction & lowering costs",
              body: "Trusted Locations addresses 2SV complaints by cutting step-ups in low-risk moments, which can lift digital engagement and lower verification costs for the bank.",
            },
            {
              title: "Differentiating from the Canadian banks",
              body: "Currently none of the Big 5 banks offer a form of location-based security, and this opportunity presents itself as a chance to lead in a space that hasn't been covered.",
            },
            {
              title: "Future location-based features",
              body: "It also sets a precedent for sharing location with the bank, opening the door to future location-based features that weren't previously advertised or explored.",
            },
          ].map((card, i) => (
            <CascadeItem key={card.title} index={i + 1} className="flex flex-1">
              <div className="flex h-full w-full flex-col bg-[#f5f5f5] px-6 py-7 md:px-7">
                <p className="min-h-[3.6em] text-[21px] font-semibold leading-snug tracking-[-0.07em] text-[#2A2A2A] md:text-[22px]">
                  {card.title}
                </p>
                <p className="mt-5 text-[16px] leading-[1.65] text-[#9A9A9A] md:text-[17px]">
                  {card.body}
                </p>
              </div>
            </CascadeItem>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "current-solutions",
    navTitle: "Current solutions",
    title: "What are some current solutions?",
    hasPlaceholder: false,
    content: (
      <>
        <CascadeItem>
          <p>
            Out in the wild, Trusted Locations is not a common feature and only
            a handful of platforms provide it. The main difference between them
            is how much friction they want to remove from the user or in some
            cases increase.
          </p>
        </CascadeItem>
        <CascadeItem index={1}>
          <p className="mt-5">
            A few banks and fintechs do offer a form of location-based security,
            including Monzo, Wealthsimple, and Revolut.
          </p>
        </CascadeItem>

        <div className="mt-12 flex flex-col gap-5 md:flex-row md:items-stretch md:gap-5">
          {[
            {
              name: "Monzo",
              logo: "/case-study/scotia-logo-monzo.png",
              body: "Users can create “Known locations”, which require the client to be in if they want to complete transactions over a daily allowance.",
            },
            {
              name: "Wealthsimple",
              logo: "/case-study/scotia-logo-wealthsimple.png",
              body: "Primarily advertises the removal of extra verification steps with a “trusted place”. Step ups aren’t entirely removed and will still be required if unusual activity is detected.",
            },
            {
              name: "Revolut",
              logo: "/case-study/scotia-logo-revolut.png",
              body: "A feature that is part of their “Street mode” security where users have to take a selfie to approve a transaction above their limit outside of a trusted place.",
            },
          ].map((competitor, i) => (
            <CascadeItem
              key={competitor.name}
              index={i + 2}
              className="flex flex-1"
            >
              <div className="flex min-h-[300px] h-full w-full flex-col bg-[#f5f5f5] px-6 py-7">
                <img
                  src={competitor.logo}
                  alt={`${competitor.name} logo`}
                  className="mb-6 h-14 w-14 rounded-xl object-cover"
                />
                <p className="text-[20px] font-semibold tracking-[-0.07em] text-[#2A2A2A]">
                  {competitor.name}
                </p>
                <p className="mt-4 text-[16px] leading-[1.65] text-[#9A9A9A] md:text-[17px]">
                  {competitor.body}
                </p>
              </div>
            </CascadeItem>
          ))}
        </div>

        <div className="mt-10 space-y-6">
          <CascadeItem index={5}>
            <MediaFrame
              label="Monzo - Attempting to send money"
              padClassName="px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10"
            >
              <img
                src="/case-study/scotia-competitor-monzo.png"
                alt="Monzo known locations flow: choose security control, check location, confirm known location"
                className="h-auto w-full max-w-[780px] object-contain"
              />
            </MediaFrame>
          </CascadeItem>
          <CascadeItem index={6}>
            <MediaFrame
              label="Wealthsimple - Setting up a trusted location"
              padClassName="px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10"
            >
              <img
                src="/case-study/scotia-competitor-wealthsimple.png"
                alt="Wealthsimple trusted places flow: intro, set trusted place on map, and saved places list"
                className="h-auto w-full max-w-[780px] object-contain"
              />
            </MediaFrame>
          </CascadeItem>
        </div>
      </>
    ),
  },
  {
    id: "early-concepts",
    navTitle: "Early concepts",
    title: "Early concepts",
    hasPlaceholder: false,
    content: (
      <>
        <div className="w-full space-y-5">
          <CascadeItem>
            <p>
              In my early concepts, I focused on mapping out the flow users who
              do have a form of trusted locations are familiar with. This flow
              follows a Feature onboarding screen → Setup of a trusted location
              → The option to search for an address or add current location →
              Confirm trusted location → View Trusted Location in a list.
            </p>
          </CascadeItem>
          <CascadeItem index={1}>
            <p>
              Using this as a foundation, I also wanted to explore areas where
              we could differentiate ourselves from other institutions. I looked
              at a few potential additions such as Suggested location,
              personalization, and temporary locations.
            </p>
          </CascadeItem>
        </div>

        <CascadeItem index={2} className="!mt-10 md:!mt-12">
          <MediaFrame padClassName="!py-16 px-4 sm:!py-20 sm:px-6 md:!py-24 md:px-8 min-h-[380px] sm:min-h-[440px] md:min-h-[520px]">
            <div className="grid w-full grid-cols-5 items-center justify-items-center gap-2 sm:gap-3 md:gap-4">
              {[
                {
                  src: "/case-study/scotia-early-flow-1.jpg",
                  alt: "Trusted locations landing screen",
                },
                {
                  src: "/case-study/scotia-early-flow-2.jpg",
                  alt: "Trust your current location map screen",
                },
                {
                  src: "/case-study/scotia-early-flow-3.jpg",
                  alt: "Search address screen",
                },
                {
                  src: "/case-study/scotia-early-flow-4.jpg",
                  alt: "Pick an emoji for nickname screen",
                },
                {
                  src: "/case-study/scotia-early-flow-5.jpg",
                  alt: "Review and confirm expiry options screen",
                },
              ].map((screen) => (
                <img
                  key={screen.src}
                  src={screen.src}
                  alt={screen.alt}
                  className="mx-auto h-auto w-[88%] max-w-[140px] object-contain"
                />
              ))}
            </div>
          </MediaFrame>
        </CascadeItem>

        <div className="!mt-20 space-y-16 md:!mt-28 md:space-y-20">
          <ConceptRow
            title="Suggested locations"
            mediaSrc="/case-study/scotia-concept-suggested.png"
            mediaAlt="Suggested home address card prompting to add home as a trusted location"
            index={0}
          >
            <p>
              The idea behind this feature was to reduce the setup time and
              number of steps it would take a user to add a trusted location.
            </p>
            <p>
              Since we researched that most users would be adding their home as
              a trusted location I looked into adding a shortcut where we could
              take the user directly to the confirm location screen, skipping
              the step of entering their home address since we have it on file.
            </p>
          </ConceptRow>

          <ConceptRow
            title="Personalization"
            mediaSrc="/case-study/scotia-concept-personalization.png"
            mediaAlt="Nickname field with building emoji set to Work"
            index={1}
          >
            <p>
              In a lot of modern day apps, personalization and customization is
              an aspect some user groups may be looking for. In a feature where
              users may want to quickly scan between a few trusted locations, we
              could add an emoji and the option to add a nickname for easier
              recognition.
            </p>
          </ConceptRow>

          <ConceptRow
            title="Temporary locations"
            mediaSrc="/case-study/scotia-concept-temporary.png"
            mediaAlt="Locations list showing Home and a temporary Japan Hotel entry"
            index={2}
          >
            <p>
              The idea behind this feature was to allow a user to create a
              temporary trusted location if they were travelling so they could
              still reduce the number of times they receive 2SV.
            </p>
          </ConceptRow>
        </div>
      </>
    ),
  },
  {
    id: "review-sessions",
    navTitle: "Review",
    title: "Review sessions",
    hasPlaceholder: false,
    content: (
      <>
        <CascadeItem>
          <p>
            After formalizing an early concept of the user flow I took the
            designs to a few review sessions to get feedback on both the user
            interface but also the additional points of differentiation. Overall
            the primary points of feedback were:
          </p>
        </CascadeItem>

        <div className="mt-12 flex flex-col gap-5 md:flex-row md:items-stretch md:gap-5">
          {[
            "Flow of adding a trusted location had minimal critiques. However the content of information on some pages had many comments and concerns.",
            "Presentation of the landing page information using a carousel had a negative reception.",
            "Many questions regarding how the radius of a trusted location works and what exactly that captures.",
          ].map((body, i) => (
            <CascadeItem key={i} index={i + 1} className="flex flex-1">
              <div className="flex h-full w-full flex-col bg-[#f5f5f5] px-6 py-7">
                <p className="text-[14px] font-semibold uppercase tracking-[-0.07em] text-[#ACACAC]">
                  Feedback #{i + 1}
                </p>
                <p className="mt-4 text-[16px] leading-[1.65] text-[#9A9A9A] md:text-[17px]">
                  {body}
                </p>
              </div>
            </CascadeItem>
          ))}
        </div>

        <CascadeItem index={4} className="!mt-10 md:!mt-12">
          <MediaFrame padClassName="!pb-0 px-3 py-5 sm:px-5 sm:py-7 md:px-6 md:py-8">
            <img
              src="/case-study/scotia-review-userflow.png"
              alt="Trusted locations userflow with review annotations"
              className="h-auto w-full max-w-full object-contain"
            />
          </MediaFrame>
        </CascadeItem>
        <div className="!mt-8 flex flex-col gap-5 md:flex-row md:items-stretch md:gap-5">
          <CascadeItem index={0} className="flex flex-1">
            <div className="scotia-tint-green relative h-full w-full px-6 py-7">
              <ThumbsUp
                className="scotia-tint-icon-green absolute right-6 top-7 h-5 w-5"
                strokeWidth={2}
                aria-label="Positive feedback"
              />
              <p className="pr-10 text-[20px] font-semibold tracking-[-0.07em] text-[#2A2A2A]">
                Suggested location
              </p>
              <p className="scotia-tint-muted mt-4 text-[16px] leading-[1.65] md:text-[17px]">
                Well received, but the content in how the message was being
                conveyed could be altered to sound less intrusive.
              </p>
            </div>
          </CascadeItem>
          <CascadeItem index={1} className="flex flex-1">
            <div className="scotia-tint-green relative h-full w-full px-6 py-7">
              <ThumbsUp
                className="scotia-tint-icon-green absolute right-6 top-7 h-5 w-5"
                strokeWidth={2}
                aria-label="Positive feedback"
              />
              <p className="pr-10 text-[20px] font-semibold tracking-[-0.07em] text-[#2A2A2A]">
                Personalization
              </p>
              <p className="scotia-tint-muted mt-4 text-[16px] leading-[1.65] md:text-[17px]">
                Also well liked, and felt like an aspect the app needed in more
                areas.
              </p>
            </div>
          </CascadeItem>
        </div>

        <CascadeItem index={2} className="mt-5">
          <div className="scotia-tint-red relative px-6 py-8 md:px-8 md:py-10">
            <ThumbsDown
              className="scotia-tint-icon-red absolute right-6 top-8 h-5 w-5 md:right-8 md:top-10"
              strokeWidth={2}
              aria-label="Negative feedback"
            />
            <p className="pr-10 text-[22px] font-semibold leading-snug tracking-[-0.07em] text-[#2A2A2A] md:text-[24px]">
              Temporary locations was not well received
            </p>
            <p className="scotia-tint-muted mt-5 text-[16px] leading-[1.7] md:text-[17px]">
              While the feature itself makes sense, the goal it tries to
              accomplish contradicts the primary message we want to push with
              Trusted Locations. A trusted location is meant to be a safe,
              reliable space, not an area you feel you do not want to have 2SV
              in. Users who would use this feature would most likely be
              travelling, and even though 2SV is a point of friction for some,
              the security risk of reducing it in an unverified location would
              cost more than the extra step to complete the OTP.
            </p>
          </div>
        </CascadeItem>
      </>
    ),
  },
  {
    id: "introducing-trusted-locations",
    navTitle: "Introducing",
    title: "Introducing Trusted Locations",
    hasPlaceholder: false,
    content: (
      <>
        <CascadeItem>
          <p>
            Implementing all of these changes and taking feedback into
            consideration, here is what the current concept looks like!
          </p>
        </CascadeItem>

        <div className="mt-12 grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-14">
          <CascadeItem index={1}>
            <MediaFrame padClassName="!py-14 px-8 sm:!py-16 sm:px-10 md:!py-20 md:px-12">
              <div className="w-[220px] max-w-full overflow-hidden rounded-[36px] sm:w-[240px] md:w-[260px] md:rounded-[42px]">
                <video
                  src="/case-study/scotia-introducing-trusted-locations.mp4"
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
            </MediaFrame>
          </CascadeItem>
          <CascadeItem index={2}>
            <div className="space-y-10 pt-1 md:space-y-12">
              <div>
                <p className="text-[20px] font-semibold tracking-[-0.07em] text-[#2A2A2A]">
                  Add a location
                </p>
                <p className="mt-3 text-[16px] leading-[1.7] text-[#9A9A9A] md:text-[17px]">
                  Users can add up to 5 trusted locations where they receive
                  fewer verification steps when completing certain
                  transactions. Questions around what a trusted location is and
                  how the feature works are answered at the moment of deciding
                  to add your first location.
                </p>
              </div>
              <div>
                <p className="text-[20px] font-semibold tracking-[-0.07em] text-[#2A2A2A]">
                  Personalize a location
                </p>
                <p className="mt-3 text-[16px] leading-[1.7] text-[#9A9A9A] md:text-[17px]">
                  Users can personalize each location with a nickname and icon
                  so places are easy to recognize at a glance. That small layer
                  of customization helps when scanning a saved list and lowers
                  the chance of editing or removing the wrong location.
                </p>
              </div>
              <div>
                <p className="text-[20px] font-semibold tracking-[-0.07em] text-[#2A2A2A]">
                  Edit a location
                </p>
                <p className="mt-3 text-[16px] leading-[1.7] text-[#9A9A9A] md:text-[17px]">
                  Users can quickly update a location&apos;s address, name, or
                  icon if details change over time. Keeping edits flexible meant
                  clients could keep their trusted places accurate without
                  restarting the full setup process from scratch.
                </p>
              </div>
            </div>
          </CascadeItem>
        </div>
      </>
    ),
  },
  {
    id: "framing-user-interviews",
    navTitle: "Interviews",
    title:
      "Did we create an easy-to-navigate experience that clearly explains what the user is about to do?",
    hasPlaceholder: false,
    content: (
      <>
        <CascadeItem>
          <p>
            After finalizing this iteration, our next stage was to take it to
            user testing and present it to prospective clients as well as the
            general public.
          </p>
        </CascadeItem>
        <CascadeItem index={1}>
          <p className="mt-5">
            During my internship we sought to interview 6 candidates, and before
            my time with the team ended I was able to interview 4 participants.
          </p>
        </CascadeItem>

        <div className="mt-14 flex w-full items-center gap-3 sm:gap-4 md:gap-5">
          {[
            {
              label: "Scotiabank employee / client",
              tone: "scotia" as const,
            },
            {
              label: "Scotiabank employee / client",
              tone: "scotia" as const,
            },
            {
              label: "University student / non-Scotia client",
              tone: "external" as const,
            },
            {
              label: "University student / non-Scotia client",
              tone: "external" as const,
            },
          ].map((participant, i) => (
            <CascadeItem
              key={`${participant.label}-${i}`}
              index={i}
              className="min-w-0 flex-1"
            >
              <div
                className={`flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-full px-4 text-center sm:gap-4 sm:px-5 md:gap-5 md:px-6 ${
                  participant.tone === "scotia"
                    ? "scotia-tint-red"
                    : "scotia-tint-blue"
                }`}
              >
                <User
                  className="h-7 w-7 shrink-0 text-[#2A2A2A] sm:h-8 sm:w-8 md:h-10 md:w-10"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <p className="max-w-[12ch] text-[13px] font-semibold leading-snug tracking-[-0.04em] text-[#2A2A2A] sm:max-w-[15ch] sm:text-[15px] md:max-w-[16ch] md:text-[17px]">
                  {participant.label}
                </p>
              </div>
            </CascadeItem>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "key-screens",
    navTitle: "Key screens",
    title: "Key screens",
    hideTitle: true,
    hasPlaceholder: false,
    content: (
      <>
        <KeyScreenAnalysis
          index={0}
          title="New feature pop-up"
          media={
            <KeyScreenPhone
              src="/case-study/scotia-key-popup.png"
              alt="Introducing trusted locations pop-up on the home screen"
            />
          }
          findings={[
            {
              headline: "Recognized as a new option",
              body: "Participants recognized the pop-up as introducing a new option in the flow.",
            },
            {
              headline: "“What does it do?”",
              body: "All participants had some confusion regarding how exactly the feature functions and what data is being shared.",
            },
            {
              headline: "Easy to skip",
              body: "3/4 participants chose to dismiss the pop-up rather than “Add trusted location”.",
            },
            {
              headline: "Add a “Learn more”",
              body: "An external page for more info can help address concerns about how the feature functions.",
            },
          ]}
        />
        <KeyScreenAnalysis
          index={0}
          title="Feature marketing"
          media={
            <KeyScreenPhone
              src="/case-study/scotia-key-marketing.png"
              alt="Trusted locations feature marketing screen"
            />
          }
          findings={[
            {
              headline: "“Great visuals”",
              body: "Graphics and icons were complimented while users scanned the screen for info.",
            },
            {
              headline: "Lack of confidence",
              body: "All participants still lacked confidence in what to do next even after understanding the feature.",
            },
            {
              headline: "A preference for 2SV",
              body: "2/4 participants noted that they prefer having 2SV even if it is a point of friction.",
            },
            {
              headline: "Revise content",
              body: "Similar to the pop-up, the content needs to be more specific and mention what the user can expect from the feature.",
            },
          ]}
        />
        <KeyScreenAnalysis
          index={0}
          title="Trust current location"
          media={
            <KeyScreenPhone
              src="/case-study/scotia-key-trust-location.png"
              alt="Add trusted location map confirmation screen"
            />
          }
          findings={[
            {
              headline: "“Love the map”",
              body: "UI and map were highlighted as users were able to identify their current location quickly.",
            },
            {
              headline: "Radius is too large",
              body: "2/4 users noted that the 1km radius was too large and posed a security concern for them.",
            },
            {
              headline: "Uneasy about adding workplace",
              body: "Most participants were unsure about adding a workplace or congested areas in general.",
            },
            {
              headline: "Reduce radius size",
              body: "1km was our initial placeholder, so we can specify the size to however large a “precise location” is.",
            },
          ]}
        />
        <KeyScreenAnalysis
          index={0}
          title="Your trusted locations"
          media={
            <KeyScreenPhone
              src="/case-study/scotia-key-locations-list.png"
              alt="Trusted locations list with saved places"
            />
          }
          findings={[
            {
              headline: "“Exactly as expected”",
              body: "All participants had high praise for this screen, mentioning that everything they needed was on screen.",
            },
            {
              headline: "“So what now?”",
              body: "All participants had questions regarding what happens next and how they will know this feature is working.",
            },
            {
              headline: "Different interactions",
              body: "In some cases, participants chose to double check their information was added correctly.",
            },
            {
              headline: "More prominent confirmation",
              body: "The confirmation could be a full page rather than a snack bar to include more info on what to expect.",
            },
          ]}
        />
      </>
    ),
  },
  {
    id: "final-observations",
    navTitle: "Observations",
    title: "Final observations",
    hasPlaceholder: false,
    content: (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {[
          {
            icon: Megaphone,
            bg: "scotia-tint-purple",
            iconClass: "scotia-tint-icon-purple",
            title: "Pop-up lacked enough information",
            body: (
              <>
                <span className="font-semibold text-[#2A2A2A]">3/4</span>{" "}
                participants chose to close, some did it immediately.
              </>
            ),
          },
          {
            icon: PersonStanding,
            bg: "scotia-tint-green",
            iconClass: "scotia-tint-icon-green",
            title: "Users love simple flows",
            body: (
              <>
                <span className="font-semibold text-[#2A2A2A]">All</span>{" "}
                participants mentioned how easy it was to add a trusted
                location.
              </>
            ),
          },
          {
            icon: Building2,
            bg: "scotia-tint-slate",
            iconClass: "scotia-tint-icon-slate",
            title: "Examples/use cases matter",
            body: (
              <>
                <span className="font-semibold text-[#2A2A2A]">One</span>{" "}
                participant remarked dropping off to conduct more research.
              </>
            ),
          },
          {
            icon: Shield,
            bg: "scotia-tint-slate",
            iconClass: "scotia-tint-icon-slate",
            title: "Data & security concerns",
            body: (
              <>
                <span className="font-semibold text-[#2A2A2A]">3/4</span>{" "}
                participants noted concerns related to security and what data is
                being used.
              </>
            ),
          },
          {
            icon: LightbulbOff,
            bg: "scotia-tint-purple",
            iconClass: "scotia-tint-icon-purple",
            title: "Understanding is not confidence",
            body: (
              <>
                <span className="font-semibold text-[#2A2A2A]">All</span>{" "}
                participants still lacked confidence in what they should do next
                after reading the landing page.
              </>
            ),
          },
          {
            icon: MapPinned,
            bg: "scotia-tint-green",
            iconClass: "scotia-tint-icon-green",
            title: "Explaining what happens next",
            body: (
              <>
                <span className="font-semibold text-[#2A2A2A]">All</span>{" "}
                participants noted they did not know what happens after adding a
                trusted location.
              </>
            ),
          },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <CascadeItem key={item.title} index={i} className="h-full">
              <div
                className={`flex h-full gap-4 px-5 py-6 sm:px-6 sm:py-7 ${item.bg}`}
              >
                <Icon
                  className={`mt-0.5 h-6 w-6 shrink-0 ${item.iconClass}`}
                  strokeWidth={1.75}
                  aria-hidden
                />
                <div className="min-w-0">
                  <p className="text-[17px] font-semibold leading-snug tracking-[-0.05em] text-[#2A2A2A] md:text-[18px]">
                    {item.title}
                  </p>
                  <p className="scotia-tint-muted mt-2 text-[15px] leading-[1.65] md:text-[16px]">
                    {item.body}
                  </p>
                </div>
              </div>
            </CascadeItem>
          );
        })}
      </div>
    ),
  },
  {
    id: "learnings-takeaways",
    navTitle: "Learnings",
    title: "Learnings & takeaways",
    hasPlaceholder: false,
    content: (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-5">
        {[
          {
            num: "01",
            icon: ClipboardList,
            text: "Content plays a huge role in how a new feature will be perceived.",
            className: "md:col-span-1",
            tone: "scotia-tint-teal",
            iconTone: "scotia-tint-icon-teal",
          },
          {
            num: "02",
            icon: Pointer,
            text: "An MVP should be scoped down to what is essential and brings immediate value.",
            className: "md:col-span-1",
            tone: "scotia-tint-green",
            iconTone: "scotia-tint-icon-green",
          },
          {
            num: "03",
            icon: HelpCircle,
            text: "Constructing non-leading questions is harder than it seems.",
            className: "md:col-span-2",
            tone: "scotia-tint-olive",
            iconTone: "scotia-tint-icon-olive",
          },
          {
            num: "04",
            icon: Search,
            text: "User interviews reveal multiple perspectives that are hard to uncover.",
            className: "md:col-start-3 md:row-span-2 md:row-start-1",
            tone: "scotia-tint-purple",
            iconTone: "scotia-tint-icon-purple",
          },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <CascadeItem
              key={item.num}
              index={i}
              className={`h-full min-h-[180px] md:min-h-0 ${item.className}`}
            >
              <div
                className={`relative flex h-full min-h-[180px] flex-col justify-between px-6 py-7 md:min-h-full md:px-7 md:py-8 ${item.tone}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="scotia-tint-muted text-[15px] font-semibold tracking-[-0.04em]">
                    {item.num}
                  </p>
                  <Icon
                    className={`h-6 w-6 shrink-0 ${item.iconTone}`}
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <p className="mt-10 text-[20px] font-semibold leading-snug tracking-[-0.05em] text-[#2A2A2A] md:mt-12 md:text-[22px]">
                  {item.text}
                </p>
              </div>
            </CascadeItem>
          );
        })}
      </div>
    ),
  },
];
