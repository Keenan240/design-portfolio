import React from 'react';
import ResultsStackWithPost from '@/components/case-study/ResultsStackWithPost';
import NucleusFeaturesStack from '@/components/case-study/NucleusFeaturesStack';
import CaseStudyCallout from '@/components/case-study/CaseStudyCallout';
import Masonry from '@/components/Masonry';

export interface CaseStudySection {
  id: string;
  title: string;
  /** Short label for the left nav; falls back to title when omitted */
  navTitle?: string;
  content: string | React.ReactNode;
  image?: string;
  video?: string;
  hasPlaceholder?: boolean;
  placeholderStyle?: "single" | "comparison";
  customMedia?: React.ReactNode;
  hideTitle?: boolean;
  mediaTopSpacing?: number;
}

export type PortfolioCategory = "product" | "side";
export type ProjectCardType = "text" | "video" | "photo";

export interface Project {
  id: string;
  title: string;
  image: string;
  /** Primary card hover accent color (hex) */
  hoverAccent: string;
  /** Home page: professional work vs side projects */
  portfolioCategory: PortfolioCategory;
  /** Case study hero image. Omit = use project.image. null = show placeholder. */
  caseStudyImage?: string | null;
  link: string;
  role: string;
  timeline: string;
  team: string[];
  skills: string[];
  overview: string;
  /** Optional case-study hero headline. Falls back to title when omitted. */
  heroTitle?: string;
  /** Optional short description for the home page card. If omitted, overview is used. */
  cardOverview?: string;
  /** Bottom-right hover label on the card image (e.g. year or "Open project"). */
  cardHoverLabel?: string;
  /** Home grid card variant. Defaults to text when omitted. */
  cardType?: ProjectCardType;
  /** Visible chip label on home cards (e.g. Case study, Coming soon). */
  cardLabel?: string;
  /** Visible year chip on home cards. */
  cardYear?: string;
  /** Optional video source for video-type home cards. */
  cardVideoSrc?: string;
  /** Optional photo source for photo-type home cards. */
  cardPhotoSrc?: string;
  /** How far the media layer slides down on hover (percent). Defaults to 26. */
  cardMediaRevealY?: number;
  /** Show a lock chip and treat the home card as non-clickable. */
  cardLocked?: boolean;
  /** Override the circular action icon on home cards. Defaults to arrow (or lock when cardLocked). */
  cardIcon?: "arrow" | "lock" | "clock";
  overviewVideo?: string;
  sections: CaseStudySection[];
}

export const projects: Project[] = [
  {
    id: "scotiabank-unreleased-feature",
    title: "Scotiabank - Unreleased Feature",
    hoverAccent: "#ED111B",
    portfolioCategory: "product",
    image: "/projects/scotia-itrade-home.svg",
    caseStudyImage: null,
    link: "/case-study/scotiabank-unreleased-feature",
    role: "Product Design Intern",
    timeline: "2026",
    team: ["Scotiabank"],
    skills: ["Product Design", "UX Design"],
    overview:
      "This is a password locked case study due to this containing sensitive information regarding a feature set to release in the future. For any recruiters, hiring managers, or those who request to view it please email me for the passcode.",
    cardOverview:
      "This is a password locked case study due to this containing sensitive information regarding a feature set to release in the future. For any recruiters, hiring managers, or those who request to view it please email me for the passcode.",
    cardType: "photo",
    cardLabel: "In-progress",
    cardYear: "2026",
    cardLocked: true,
    cardIcon: "clock",
    cardPhotoSrc: "/projects/scotiabank-card.jpg",
    cardMediaRevealY: 36,
    sections: [
      {
        id: "overview",
        title: "Overview",
        content:
          "This is a password locked case study due to this containing sensitive information regarding a feature set to release in the future. For any recruiters, hiring managers, or those who request to view it please email me for the passcode.",
      },
    ],
  },
  {
    id: "scotia-itrade-coming-soon",
    title: "Scotiabank Open Banking Research",
    hoverAccent: "#ED111B",
    portfolioCategory: "product",
    image: "/projects/scotia-itrade-home.svg",
    caseStudyImage: null,
    link: "/case-study/scotia-itrade-coming-soon",
    role: "Product Design Intern",
    timeline: "2026",
    team: ["Scotiabank iTRADE Team"],
    skills: ["Product Design", "UX Design", "Design Systems"],
    overview:
      "With Open Banking coming into affect Scotiabank is looking to find a way to utilize this change to differneitate from the other Big 5 Banks and emerging Fintechs.",
    cardOverview:
      "With Open Banking coming into affect Scotiabank is looking to find a way to utilize this change to differneitate from the other Big 5 Banks and emerging Fintechs.",
    cardType: "text",
    cardLabel: "In-Progress",
    cardYear: "2026",
    cardLocked: true,
    cardIcon: "clock",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content:
          "This is a password locked case study due to this containing sensitive information regarding a feature set to release in the future. For any recruiters, hiring managers, or those who request to view it please email me for the passcode.",
      },
    ],
  },
  {
    id: "trevo",
    title: "Trevo",
    heroTitle: "Yes you should doomscroll to plan your trip",
    hoverAccent: "#6FA7D6",
    portfolioCategory: "product",
    image: "/projects/trevo-home.gif",
    caseStudyImage: null,
    link: "/case-study/trevo",
    role: "Product Designer",
    timeline: "Sep 2025 - Mar 2026",
    team: [
      "1 Project Manager",
      "4 Business Analysts",
      "3 Product Designers",
      "4 Developers",
    ],
    skills: ["Figma", "Product Design", "UI/UX", "Wireframing", "Prototyping"],
    overview:
      "Trevo turns doomscrolling into trip planning. Explore real itineraries, build them with your group, and share guides that start the next person's trip.",
    cardOverview:
      "A travel platform that turns doomscrolling into real itineraries. Explore, plan, and share trips in one loop.",
    cardType: "video",
    cardLabel: "In-Progress",
    cardYear: "2026",
    cardLocked: true,
    cardIcon: "clock",
    cardVideoSrc: "/projects/trevo-card.mp4",
    cardPhotoSrc: "/projects/trevo-home.jpg",
    overviewVideo: "/projects/trevo-overview.mp4",
    sections: [],
  },
  {
    id: "trax",
    title: "Trax Library Redesign",
    hoverAccent: "#CBE271",
    portfolioCategory: "product",
    image: "/projects/trax-home.png",
    link: "/case-study/trax",
    role: "Product Designer",
    timeline: "Oct 2025 - Dec 2025",
    team: ["1 Project Manager", "3 Product Designers"],
    skills: ["UX Research", "Competitive Analysis", "Wireframing", "Prototyping"],
    overview: "A complete redesign of the Trax library experience focused on making building-code search faster, improving information density, and creating a cleaner UI that keeps filtering and navigation easier to scan.",
    cardOverview:
      "A redesign focused on faster building-code search, clearer information density, and easier filtering.",
    cardType: "text",
    cardLabel: "Case study",
    cardYear: "2026",
    cardVideoSrc: "/case-study/trax-bottom-right-loop.mp4",
    sections: [
      {
        id: "problem",
        title: "Problem Identification",
        content: "The existing library system was outdated, making it difficult for students to find and reserve books efficiently."
      },
      {
        id: "research",
        title: "Research and Discovery",
        content: "User surveys and heatmaps revealed that the search functionality was the primary pain point for 75% of users."
      },
      {
        id: "ideation",
        title: "Ideation",
        content: "We explored several search patterns, ultimately deciding on a faceted search system to help users narrow down results quickly."
      },
      {
        id: "mvp",
        title: "MVP",
        content: "The MVP focused on a revamped search interface and a simplified book reservation flow."
      },
      {
        id: "improvements",
        title: "Improvements",
        content: "Post-launch analytics led us to add a 'quick-view' feature for book details to reduce page jumps."
      },
      {
        id: "reflection",
        title: "Reflection",
        content: "This project highlighted the impact of small UX improvements on overall user satisfaction in high-utility systems."
      }
    ]
  },
  {
    id: "badgein",
    title: "BadgeIn",
    hoverAccent: "#2563EB",
    portfolioCategory: "side",
    image: "/projects/badgein-home.png",
    link: "https://badge-in.vercel.app/",
    role: "Design & Engineering",
    timeline: "2026",
    team: [],
    skills: ["Product Design", "Next.js", "Print layout"],
    overview:
      "A lightweight badge generator for networking events that includes your guest's personal LinkedIn QR codes.",
    cardOverview:
      "A lightweight badge generator for networking events that includes your guest's personal LinkedIn QR codes.",
    cardHoverLabel: "Open project",
    cardType: "text",
    cardLabel: "View project",
    cardYear: "2026",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content:
          "BadgeIn turns a guest-list CSV into print-ready badges with LinkedIn QR codes. Open the live project for the full experience.",
      },
    ],
  },
  {
    id: "nucleus",
    title: "Nucleus",
    heroTitle: "Preparing to study takes longer than studying!",
    hoverAccent: "#8338EC",
    portfolioCategory: "product",
    image: "/projects/nucleus-home.png",
    caseStudyImage: "/nucleus-weekly-view.svg",
    link: "/case-study/nucleus",
    role: "Junior Product Designer",
    timeline: "Oct 2024 - Mar 2025",
    team: [
      "1 Project Manager",
      "3 Business Analysts",
      "2 Product Designers",
      "4 Developers",
    ],
    skills: ["Figma", "Product Design", "UI/UX", "Wireframing", "Prototyping"],
    overview: "Nucleus is a student task manager that reduces procrastination by removing setup friction before work even begins. Through an automated syllabus scanner, it turns course logistics, grades, and deadlines into a single daily workflow so students spend less time organizing and more time executing.",
    cardOverview: "Nucleus is a unified academic system that reduces organizational friction before students begin their work, transforming academic inputs into structured, actionable workflows.",
    overviewVideo: "/projects/nucleus-overview.mp4",
    cardType: "video",
    cardLabel: "Case study",
    cardYear: "2025",
    cardVideoSrc: "/projects/nucleus-card.mp4",
    cardPhotoSrc: "/projects/nucleus-card.jpg",
    sections: [
      {
        id: "problem",
        navTitle: "Problem",
        title: "It takes WORK to organize your work",
        hasPlaceholder: false,
        content: (
          <>
            <p className="font-normal text-[20px] px-0 text-left">Students are forced to piece together classes, deadlines, and tasks across disconnected tools, and that fragmentation creates three core friction points.</p>
            <div className="pt-8">
              <div className="flex flex-col gap-5 w-full mb-0">
              <div className="w-full bg-[#f5f5f5] px-8 py-7 flex flex-col !m-0 min-h-0 text-left">
                <div className="flex flex-row items-center gap-3 w-full">
                  <span
                    className="nucleus-problem-number-reveal text-[22px] font-semibold text-[#ACACAC]"
                    style={{ animationDelay: "60ms" }}
                  >
                    01
                  </span>
                  <h3 className="text-[24px] font-semibold text-[#7c3aed]">Tool Switching</h3>
                </div>
                <p className="text-[20px] text-[#9A9A9A] leading-relaxed mt-4">Students constantly switch between tools to track deadlines, manage tasks, record notes, and monitor grades.</p>
              </div>
              <div className="w-full bg-[#f5f5f5] px-8 py-7 flex flex-col !m-0 min-h-0 text-left">
                <div className="flex flex-row items-center gap-3 w-full">
                  <span
                    className="nucleus-problem-number-reveal text-[22px] font-semibold text-[#ACACAC]"
                    style={{ animationDelay: "140ms" }}
                  >
                    02
                  </span>
                  <h3 className="text-[24px] font-semibold text-[#7c3aed]">Micro-decisions</h3>
                </div>
                <p className="text-[20px] text-[#9A9A9A] leading-relaxed mt-4">Each platform introduces micro-decisions such as what to track, where to input information, and how systems should connect.</p>
              </div>
              <div className="w-full bg-[#f5f5f5] px-8 py-7 flex flex-col !m-0 min-h-0 text-left">
                <div className="flex flex-row items-center gap-3 w-full">
                  <span
                    className="nucleus-problem-number-reveal text-[22px] font-semibold text-[#ACACAC]"
                    style={{ animationDelay: "220ms" }}
                  >
                    03
                  </span>
                  <h3 className="text-[24px] font-semibold text-[#7c3aed]">Setup before work</h3>
                </div>
                <p className="text-[20px] text-[#9A9A9A] leading-relaxed mt-4">Because organization requires manual setup and ongoing maintenance, procrastination often begins before the actual work does.</p>
              </div>
              </div>
            </div>
          </>
        ),
      },
      {
        id: "understanding-what-students-actually-organize",
        navTitle: "Research",
        title: "Quantifying the issue",
        hasPlaceholder: false,
        content: (
          <>
            <div className="pt-[36px]">
            <div className="flex w-full flex-col gap-5 md:flex-row md:gap-5">
              <div className="flex-1 bg-[#f5f5f5] px-6 py-6">
                <p className="text-[28px] font-semibold leading-none text-[#7c3aed]">75%</p>
                <p className="mt-3 text-[16px] leading-relaxed text-[#9A9A9A]">
                  of students identify as{" "}
                  <span className="font-semibold text-white">procrastinators</span>.
                </p>
              </div>
              <div className="flex-1 bg-[#f5f5f5] px-6 py-6">
                <p className="text-[28px] font-semibold leading-none text-[#7c3aed]">~ 3.6 HRS</p>
                <p className="mt-3 text-[16px] leading-relaxed text-[#9A9A9A]">
                  <span className="font-semibold text-white">procrastinated</span> daily by the
                  average college student.
                </p>
              </div>
              <div className="flex-1 bg-[#f5f5f5] px-6 py-6">
                <p className="text-[28px] font-semibold leading-none text-[#7c3aed]">1000+</p>
                <p className="mt-3 text-[16px] leading-relaxed text-[#9A9A9A]">
                  <span className="font-semibold text-white">apps fragmenting</span> the task
                  management process.
                </p>
              </div>
            </div>
              <p className="font-normal text-[20px] px-0 text-left mt-10">Through interviews and workflow mapping, we found that students still have to manually connect these components themselves. This revealed a clear opportunity: instead of giving students more tools, we could design a unified academic system that minimizes organizational decisions altogether.</p>
              <p className="font-normal text-[20px] px-0 text-left mt-6">To move beyond the &quot;Problem&quot; and arrive at the &quot;Solution,&quot; we had to bridge the gap between abstract student needs and a functional, low-friction interface. Our process was defined by three phases: understanding the landscape, defining our target, and an iterative design cycle.</p>
            </div>
          </>
        ),
      },
      {
        id: "the-landscape-competitive-differentiation",
        navTitle: "Competition",
        title: "Competitive Landscape",
        hasPlaceholder: false,
        content: (
          <>
            <div>
              <p className="font-normal text-[20px] px-0 text-left">Our analysis showed a clear divide in the market. Existing solutions are either high-effort systems that require manual setup or single-purpose tools that fail to provide a complete academic workflow. We identified a gap for a tool that lowers the barrier to entry by automating the setup process.</p>
              <p className="font-normal text-[20px] px-0 text-left mt-6">We focused on three core user groups:</p>
              <div className="mt-6 flex flex-col gap-5">
                <CaseStudyCallout>
                  Incoming college students adjusting to a new and heavier workload.
                </CaseStudyCallout>
                <CaseStudyCallout>
                  Students who lack an existing organizational system and rely on scattered tools.
                </CaseStudyCallout>
                <CaseStudyCallout>
                  Students who prioritize efficiency and value automation over manual personalization.
                </CaseStudyCallout>
              </div>
              <p className="font-normal text-[20px] px-0 text-left mt-6">Given the demand for automation in education and the reality of student burnout, we designed Nucleus to do the heavy lifting. By positioning Nucleus as an automated, multi-purpose tool, we provide a simpler approach to academic planning than current alternatives.</p>
            </div>
            <div className="pt-[64px]">
              <div className="w-full overflow-hidden bg-[#F5F5F5]">
                <div className="flex h-full w-full items-center justify-center px-[60px] py-[80px]">
                  <img
                    src="/competitive-analysis.svg"
                    alt="Competitive analysis quadrant: Multi-Functional vs Single-Purpose, High Effort vs Low Effort"
                    className="w-[85%] max-w-full rounded-[12px] border border-[#ededed]"
                  />
                </div>
              </div>
            </div>
          </>
        ),
      },
      {
        id: "iteration-1-foundational-draft",
        navTitle: "Iteration 1",
        title: "Tiles on tiles",
        hasPlaceholder: false,
        content: (
          <>
            <div>
              <p className="font-normal text-[20px] px-0 text-left">In our first design, we focused on proof of concept. The V1 iteration was a fundamental &quot;Weekly Schedule&quot; utilizing Task Tiles as the primary interface for input. We integrated the Syllabus Scanner early to test the viability of automated data extraction. At this stage, our goal was simple: prove that we could reduce the manual setup time that typically keeps students from organizing.</p>
            </div>
            <div className="pt-[64px]">
            <div className="w-full overflow-hidden bg-[#F5F5F5]">
              <div className="flex h-full w-full flex-row flex-wrap justify-center items-center gap-6 px-[40px] py-[56px]">
                <div className="flex flex-col items-center justify-center flex-1 min-w-0 max-w-[500px]">
                  <img src="/nucleus-iteration1-home-view.png" alt="Nucleus V1 weekly view with Task Tiles and daily cards" className="w-full border border-[#ededed]" />
                  <p className="mt-[12px] text-center text-[14px] font-normal text-[#9A9A9A] w-full">Weekly View V1</p>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 min-w-0 max-w-[500px]">
                  <img src="/nucleus-iteration1-syllabus-puller.png" alt="SylaScan syllabus upload and uploaded syllabi list" className="w-full border border-[#ededed]" />
                  <p className="mt-[12px] text-center text-[14px] font-normal text-[#9A9A9A] w-full">Syllabus Scanner V1</p>
                </div>
              </div>
            </div>
            </div>
          </>
        ),
      },
      {
        id: "iteration-2-structuring-workspace",
        navTitle: "Iteration 2",
        title: "Consolidating your courses",
        hasPlaceholder: false,
        content: (
          <>
            <div>
              <p className="font-normal text-[20px] px-0 text-left">In V2, we began to see the limitations of keeping tools in isolation. We realized students needed context for their tasks, which led to the creation of the Classes Page. Crucially, we shifted the Syllabus Scanner from being its own standalone flow into a deeply integrated component of the &quot;Add a Class&quot; experience. By making the scanner part of the natural process of adding a course, we reduced the friction of initial setup even further. We also refined our Task Tiles to ensure high-priority items remained front and center, moving closer to a dashboard experience that felt &quot;student-native.&quot;</p>
            </div>
            <div className="pt-[64px]">
            <div className="w-full overflow-hidden bg-[#F5F5F5]">
              <div className="flex h-full w-full flex-row flex-wrap justify-center items-center gap-6 px-[40px] py-[56px]">
                <div className="flex flex-col items-center justify-center flex-1 min-w-0 max-w-[500px]">
                  <img src="/nucleus-iteration2-my-tasks.png" alt="Nucleus V2 My Tasks dashboard with daily task cards" className="w-full border border-[#ededed]" />
                  <p className="mt-[12px] text-center text-[14px] font-normal text-[#9A9A9A] w-full">Weekly View V2</p>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 min-w-0 max-w-[500px]">
                  <img src="/nucleus-iteration2-classes.png" alt="Nucleus V2 Classes Page with course list and details" className="w-full border border-[#ededed]" />
                  <p className="mt-[12px] text-center text-[14px] font-normal text-[#9A9A9A] w-full">Classes Page</p>
                </div>
              </div>
            </div>
            </div>
          </>
        ),
      },
      {
        id: "fall-demo-day",
        navTitle: "Demo Day",
        title: "Our first launch",
        hasPlaceholder: false,
        content: (
          <>
            <div className="w-full overflow-hidden bg-[#F5F5F5] mb-6">
              <div className="flex h-full w-full items-center justify-center px-[60px] py-[80px]">
                <video
                  src="/projects/nucleus-fall-demo-day.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="mx-auto block h-auto w-[88.5%] max-w-full object-contain object-center"
                />
              </div>
            </div>
            <p className="font-normal text-[20px] px-0 text-left">At Fall Demo Day, we received direct feedback that challenged our product strategy. Judges compared Nucleus to existing tools and questioned if we actually solved procrastination. They noted our unique feature, automated syllabus parsing, was a limited value add in a saturated market. The consensus was that our product was a nice to have rather than an essential solution.</p>
            <div className="pt-[64px] flex flex-col items-center">
              <p className="font-normal text-[20px] text-[#9A9A9A] italic text-right max-w-[640px]">&quot;I advise the team to try and absorb as many positive takeaways as possible. Especially if disagreed, try to think about it from the Judges perspective... there is a reason they thought the way they did.&quot;</p>
              <p className="font-normal text-[16px] text-[#9A9A9A] text-right max-w-[640px] mt-2">- Nick A. (QTMA Co-Chair)</p>
            </div>
            <div className="pt-[64px]">
              <Masonry
                items={[
                  { id: "fd1", img: "/fall-demo-day-1.png", height: 380 },
                  { id: "fd2", img: "/fall-demo-day-2.png", height: 420 },
                  { id: "fd3", img: "/fall-demo-day-3.png", height: 340 },
                  { id: "fd4", img: "/fall-demo-day-4.png", height: 460 },
                  { id: "fd5", img: "/fall-demo-day-5.png", height: 400 },
                  { id: "fd6", img: "/fall-demo-day-6.png", height: 360 },
                  { id: "fd7", img: "/fall-demo-day-7.png", height: 440 },
                  { id: "fd8", img: "/fall-demo-day-8.png", height: 400 },
                  { id: "fd9", img: "/fall-demo-day-9.png", height: 480 },
                  { id: "fd10", img: "/fall-demo-day-10.png", height: 420 },
                ]}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover
                hoverScale={0.95}
                blurToFocus
                colorShiftOnHover={false}
              />
            </div>
          </>
        ),
      },
      {
        id: "validating-the-core-problem",
        navTitle: "Validation",
        title: "Understanding where to build on",
        hasPlaceholder: false,
        content: (
          <>
            <p className="font-normal text-[20px] px-0 text-left">This feedback was a critical turning point for the team. We realized we could not rely on our initial vision alone. Before moving forward, we put our core architecture to the test with over <strong className="text-[#7c3aed]">100 beta users</strong> to determine which elements resonated most. This research helped us identify what to double down on, what to refine, and what to remove.</p>
            <div className="mt-6 flex flex-col gap-5">
              <CaseStudyCallout>
                Class View was rated{" "}
                <span className="font-semibold text-[#7c3aed]">4.2/5</span>
                , confirming that centralizing course logistics was a high value need.
              </CaseStudyCallout>
              <CaseStudyCallout>
                Task Tiles received a{" "}
                <span className="font-semibold text-[#7c3aed]">4.08/5</span>
                , validating the need for a front and center dashboard for high priority items.
              </CaseStudyCallout>
              <CaseStudyCallout>
                Weekly Page feedback highlighted a need for further refinement, directly leading
                to the column based layout we eventually adopted.
              </CaseStudyCallout>
            </div>
            <p className="font-normal text-[20px] px-0 text-left mt-6">This process ensured that our final four pillars, the Syllabus Scanner, Classes Page, Weekly View, and new feature Sub-deadlines, were targeted solutions to the specific organizational friction points identified in our research.</p>
          </>
        ),
      },
      {
        id: "iteration-3-enabling-active-execution",
        navTitle: "Iteration 3",
        title: "A fresh new look",
        hasPlaceholder: false,
        mediaTopSpacing: 64,
        customMedia: (
          <NucleusFeaturesStack />
        ),
        content: (
          <>
            <p className="font-normal text-[20px] px-0 text-left">After Fall Demo Day and beta testing, we rebuilt Nucleus from a passive tracker into an active academic assistant. Weekly View became a calendar-style column layout so deadlines map to real time, and Sub-deadlines let students break large assessments into milestones, targeting procrastination at the moment work starts.</p>
          </>
        ),
      },
      {
        id: "results-and-reflection",
        navTitle: "Results",
        title: "Results & Reflection",
        hasPlaceholder: false,
        content: (
          <>
            <div className="flex flex-row gap-[45px] mt-8 mb-8 px-0">
              <div className="flex-1 min-w-0 h-[260px] bg-[#f5f5f5] px-8 py-10 flex flex-col justify-end items-center text-center">
                <span className="text-[40px] mb-3">💯</span>
                <h3 className="text-[24px] font-semibold text-[#7c3aed]">100+ Beta Users</h3>
                <p className="text-[15px] text-[#9A9A9A] leading-relaxed mt-2">Active beta users testing the platform during initial rollout.</p>
              </div>
              <div className="flex-1 min-w-0 h-[260px] bg-[#f5f5f5] px-8 py-10 flex flex-col justify-end items-center text-center">
                <span className="text-[40px] mb-3">🏆</span>
                <h3 className="text-[24px] font-semibold text-[#7c3aed]">#1 Product</h3>
                <p className="text-[15px] text-[#9A9A9A] leading-relaxed mt-2">Recognition at QTMA 2025 Winter Demo Day, selected from four teams.</p>
              </div>
            </div>
            <p>
              Following development and testing, Nucleus was launched to a closed
              beta of post-secondary students to evaluate adoption and real-world
              usability. The product gained early traction among students seeking a
              simpler entry point into academic organization. These outcomes
              validated the core hypothesis established during research: reducing
              organizational friction at the start of the academic workflow
              meaningfully resonates with students. Early adoption suggested strong
              demand for systems that integrate directly into academic structure
              rather than requiring students to build their own productivity
              frameworks.
            </p>
            <div className="mt-12 w-full py-[20px]">
              <ResultsStackWithPost />
            </div>
            <div className="mt-16 space-y-14">
              <div>
                <h3 className="mb-3 text-[24px] font-semibold text-black">
                  Finding product design
                </h3>
                <p>
                  Nucleus was my first introduction to product design and the incubator
                  space. What started as a random curiosity for a club turned into a
                  spark for passion that has changed what I want my career to be.
                  Working through late-night design sessions, team discussions, and
                  iterative product decisions introduced me to the reality of building
                  where ambiguity, constraints, and rapid learning are always present.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[24px] font-semibold text-black">
                  Learning by building
                </h3>
                <p>
                  Starting with no prior design experience, I learned Figma from the
                  ground up while actively contributing to product direction and
                  execution. My goal throughout the project was not only to deliver
                  designs, but to continuously remove friction for the team by
                  improving both speed and clarity in our workflow.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[24px] font-semibold text-black">
                  Reframing what design means
                </h3>
                <p>
                  More importantly, Nucleus reshaped how I think about design. I learned
                  that effective products are rarely defined by feature complexity, but
                  by how well they reduce effort for users. Many of our strongest
                  decisions came from reframing problems rather than adding
                  functionality, particularly our shift toward designing for students at
                  the beginning of their academic journey. If I could go back and work
                  on Nucleus again, our UI aesthetics would definitely be different but
                  accessibility is something I really would have emphasized more.
                </p>
              </div>
            </div>
            <p className="mt-14">
              The joy, pressure, and responsibility of building Nucleus solidified
              my interest in product design and motivated me to pursue building as a
              long-term path instead of the typical SWE route most CS students
              follow.
            </p>
          </>
        ),
      },
    ],
  },
];
