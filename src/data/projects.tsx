import React from 'react';
import ResultsStackWithPost from '@/components/case-study/ResultsStackWithPost';
import NucleusFeaturesStack from '@/components/case-study/NucleusFeaturesStack';
import Masonry from '@/components/Masonry';

export interface CaseStudySection {
  id: string;
  title: string;
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
  /** Optional short description for the home page card. If omitted, overview is used. */
  cardOverview?: string;
  overviewVideo?: string;
  sections: CaseStudySection[];
}

export const projects: Project[] = [
  {
    id: "scotia-itrade-coming-soon",
    title: "Scotia iTRADE",
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
      "Design work from my internship at Scotia iTRADE is currently under preparation and will be published soon.",
    cardOverview:
      "Designs from internship coming soon...",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content:
          "Designs from internship coming soon."
      }
    ]
  },
  {
    id: "trevo",
    title: "Trevo",
    hoverAccent: "#6FA7D6",
    portfolioCategory: "product",
    image: "/projects/trevo-home.gif",
    caseStudyImage: null,
    link: "/case-study/trevo",
    role: "Product Designer",
    timeline: "Oct 2025 - March 2026",
    team: [
      "1 Project Manager",
      "4 Business Analysts",
      "2 UI/UX Designers",
      "4 Developers"
    ],
    skills: ["Figma", "Product Design", "UI/UX", "Wireframing", "Prototyping"],
    overview:
      "Trevo is a mobile app that reimagines group travel by empowering individuals to create and share meaningful experiences.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content:
          "Trevo was designed as a companion experience to help students discover and commit to clubs, events, and opportunities that align with their goals without adding additional organizational overhead."
      }
    ]
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
    id: "nucleus",
    title: "Nucleus",
    hoverAccent: "#8338EC",
    portfolioCategory: "product",
    image: "/projects/nucleus-home.png",
    caseStudyImage: "/nucleus-weekly-view.svg",
    link: "/case-study/nucleus",
    role: "Junior Product Designer",
    timeline: "Oct 2024 - March 2025",
    team: [
      "1 Project Manager",
      "3 Business Analysts",
      "2 UI/UX Designers",
      "4 Developers"
    ],
    skills: ["Figma", "Product Design", "UI/UX", "Wireframing", "Prototyping"],
    overview: "Nucleus is a student task manager that reduces procrastination by removing setup friction before work even begins. Through an automated syllabus scanner, it turns course logistics, grades, and deadlines into a single daily workflow so students spend less time organizing and more time executing.",
    cardOverview: "Nucleus is a unified academic system that reduces organizational friction before students begin their work, transforming academic inputs into structured, actionable workflows.",
    overviewVideo: "/projects/nucleus-overview.mp4",
    sections: [
      {
        id: "problem",
        title: "Problem",
        hasPlaceholder: false,
        content: (
          <>
            <p className="font-normal text-[20px] px-0 text-left">Students are forced to piece together classes, deadlines, and tasks across disconnected tools, and that fragmentation creates three core friction points.</p>
            <div className="pt-8">
              <div className="flex flex-col gap-5 w-full mb-0">
              <div className="w-full bg-[#f5f5f5] px-8 py-7 border border-[#e7e7e7] flex flex-col !m-0 min-h-0 text-left">
                <div className="flex flex-row items-center gap-3 w-full">
                  <span
                    className="nucleus-problem-number-reveal text-[22px] font-bold text-[#ACACAC]"
                    style={{ animationDelay: "60ms" }}
                  >
                    01
                  </span>
                  <h3 className="text-[22px] font-semibold text-[#7c3aed]">Tool Switching</h3>
                </div>
                <p className="text-[20px] text-[#6a6a6a] leading-relaxed mt-4">Students constantly switch between tools to track deadlines, manage tasks, record notes, and monitor grades.</p>
              </div>
              <div className="w-full bg-[#f5f5f5] px-8 py-7 border border-[#e7e7e7] flex flex-col !m-0 min-h-0 text-left">
                <div className="flex flex-row items-center gap-3 w-full">
                  <span
                    className="nucleus-problem-number-reveal text-[22px] font-bold text-[#ACACAC]"
                    style={{ animationDelay: "140ms" }}
                  >
                    02
                  </span>
                  <h3 className="text-[22px] font-semibold text-[#7c3aed]">Micro-decisions</h3>
                </div>
                <p className="text-[20px] text-[#6a6a6a] leading-relaxed mt-4">Each platform introduces micro-decisions such as what to track, where to input information, and how systems should connect.</p>
              </div>
              <div className="w-full bg-[#f5f5f5] px-8 py-7 border border-[#e7e7e7] flex flex-col !m-0 min-h-0 text-left">
                <div className="flex flex-row items-center gap-3 w-full">
                  <span
                    className="nucleus-problem-number-reveal text-[22px] font-bold text-[#ACACAC]"
                    style={{ animationDelay: "220ms" }}
                  >
                    03
                  </span>
                  <h3 className="text-[22px] font-semibold text-[#7c3aed]">Setup before work</h3>
                </div>
                <p className="text-[20px] text-[#6a6a6a] leading-relaxed mt-4">Because organization requires manual setup and ongoing maintenance, procrastination often begins before the actual work does.</p>
              </div>
              </div>
            </div>
          </>
        ),
      },
      {
        id: "understanding-what-students-actually-organize",
        title: "Discovery",
        hasPlaceholder: false,
        content: (
          <>
            <div className="pt-[36px]">
            <div className="flex flex-row gap-5 w-full mb-0">
              <div className="flex-1 min-w-0 bg-[#f5f5f5] p-8 border border-[#e7e7e7] flex flex-col items-center justify-center text-center">
                <p className="text-[40px] font-bold text-[#7c3aed] leading-tight">75%</p>
                <p className="text-[18px] font-bold text-black mt-3">
                  of students <span className="text-[#d97373]">identify</span> as
                </p>
                <p className="text-[18px] font-bold text-black">procrastinators</p>
              </div>
              <div className="flex-1 min-w-0 bg-[#f5f5f5] p-8 border border-[#e7e7e7] flex flex-col items-center justify-center text-center">
                <p className="text-[40px] font-bold text-[#7c3aed] leading-tight">~ 3.6 HRS</p>
                <p className="text-[18px] font-bold text-black mt-3">
                  <span className="text-[#d97373]">procrastinated</span> daily by the
                </p>
                <p className="text-[18px] font-bold text-black">average college student</p>
              </div>
              <div className="flex-1 min-w-0 bg-[#f5f5f5] p-8 border border-[#e7e7e7] flex flex-col items-center justify-center text-center">
                <p className="text-[40px] font-bold text-[#7c3aed] leading-tight">1000+</p>
                <p className="text-[18px] font-bold text-black mt-3">
                  <span className="text-[#d97373]">apps fragmenting</span>
                </p>
                <p className="text-[18px] font-bold text-black">the task management process</p>
              </div>
            </div>
              <p className="font-normal text-[20px] px-0 text-left mt-10">Through interviews and workflow mapping, we found that students still have to manually connect these components themselves. This revealed a clear opportunity: instead of giving students more tools, we could design a <strong className="text-[#7c3aed]">unified academic system that minimizes organizational decisions</strong> altogether.</p>
              <p className="font-normal text-[20px] px-0 text-left mt-6">To move beyond the &quot;Problem&quot; and arrive at the &quot;Solution,&quot; we had to bridge the gap between abstract student needs and a functional, low-friction interface. Our process was defined by three phases: <strong className="text-[#7c3aed]">understanding the landscape</strong>, <strong className="text-[#7c3aed]">defining our target</strong>, and <strong className="text-[#7c3aed]">an iterative design cycle</strong>.</p>
            </div>
          </>
        ),
      },
      {
        id: "the-landscape-competitive-differentiation",
        title: "Competitive Landscape",
        hasPlaceholder: false,
        content: (
          <>
            <div>
              <p className="font-normal text-[20px] px-0 text-left">Our analysis showed a clear divide in the market. Existing solutions are either high-effort systems that require manual setup or single-purpose tools that fail to provide a complete academic workflow. We identified a gap for a tool that lowers the barrier to entry by automating the setup process.</p>
              <p className="font-normal text-[20px] px-0 text-left mt-6">We focused on three core user groups:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li className="font-normal text-[20px] text-left">Incoming college students adjusting to a new and heavier workload.</li>
                <li className="font-normal text-[20px] text-left">Students who lack an existing organizational system and rely on scattered tools.</li>
                <li className="font-normal text-[20px] text-left">Students who prioritize efficiency and value automation over manual personalization.</li>
              </ul>
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
        title: "Iteration 1",
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
                  <p className="mt-[12px] text-center text-[14px] font-normal text-[#4a4a4a] w-full">Weekly View V1</p>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 min-w-0 max-w-[500px]">
                  <img src="/nucleus-iteration1-syllabus-puller.png" alt="SylaScan syllabus upload and uploaded syllabi list" className="w-full border border-[#ededed]" />
                  <p className="mt-[12px] text-center text-[14px] font-normal text-[#4a4a4a] w-full">Syllabus Scanner V1</p>
                </div>
              </div>
            </div>
            </div>
          </>
        ),
      },
      {
        id: "iteration-2-structuring-workspace",
        title: "Iteration 2",
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
                  <p className="mt-[12px] text-center text-[14px] font-normal text-[#4a4a4a] w-full">Weekly View V2</p>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 min-w-0 max-w-[500px]">
                  <img src="/nucleus-iteration2-classes.png" alt="Nucleus V2 Classes Page with course list and details" className="w-full border border-[#ededed]" />
                  <p className="mt-[12px] text-center text-[14px] font-normal text-[#4a4a4a] w-full">Classes Page</p>
                </div>
              </div>
            </div>
            </div>
          </>
        ),
      },
      {
        id: "fall-demo-day",
        title: "Fall Demo Day",
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
                  className="w-[88.5%] h-auto object-contain block"
                />
              </div>
            </div>
            <p className="font-normal text-[20px] px-0 text-left">At Fall Demo Day, we received direct feedback that challenged our product strategy. Judges compared Nucleus to existing tools and questioned if we actually solved procrastination. They noted our unique feature, automated syllabus parsing, was a limited value add in a saturated market. The consensus was that our product was a nice to have rather than an essential solution.</p>
            <div className="pt-[64px] flex flex-col items-center">
              <p className="font-normal text-[20px] text-[#4a4a4a] italic text-right max-w-[640px]">&quot;I advise the team to try and absorb as many positive takeaways as possible. Especially if disagreed, try to think about it from the Judges perspective... there is a reason they thought the way they did.&quot;</p>
              <p className="font-normal text-[16px] text-[#4a4a4a] text-right max-w-[640px] mt-2">- Nick A. (QTMA Co-Chair)</p>
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
        title: "Validation",
        hasPlaceholder: false,
        content: (
          <>
            <p className="font-normal text-[20px] px-0 text-left">This feedback was a critical turning point for the team. We realized we could not rely on our initial vision alone. Before moving forward, we put our core architecture to the test with over <strong className="text-[#7c3aed]">100 beta users</strong> to determine which elements resonated most. This research helped us identify what to double down on, what to refine, and what to remove.</p>
            <ul className="list-disc pl-6 space-y-2 mt-6">
              <li className="font-normal text-[20px] text-left">Class View was rated <strong className="text-[#7c3aed]">4.2/5</strong>, confirming that centralizing course logistics was a high value need.</li>
              <li className="font-normal text-[20px] text-left">Task Tiles received a <strong className="text-[#7c3aed]">4.08/5</strong>, validating the need for a front and center dashboard for high priority items.</li>
              <li className="font-normal text-[20px] text-left">Weekly Page feedback highlighted a need for further refinement, directly leading to the column based layout we eventually adopted.</li>
            </ul>
            <p className="font-normal text-[20px] px-0 text-left mt-6">This process ensured that our final four pillars, the Syllabus Scanner, Classes Page, Weekly View, and new feature Sub-deadlines, were targeted solutions to the specific organizational friction points identified in our research.</p>
          </>
        ),
      },
      {
        id: "iteration-3-enabling-active-execution",
        title: "Iteration 3",
        hasPlaceholder: false,
        mediaTopSpacing: 64,
        customMedia: (
          <NucleusFeaturesStack />
        ),
        content: (
          <>
            <p className="font-normal text-[20px] px-0 text-left">Following Fall Demo Day and our subsequent user testing, we went straight to work. Our goal was to pivot from a passive tracking tool to an active academic assistant that directly addressed the friction students face when they start their work.</p>
            <p className="font-normal text-[20px] px-0 text-left mt-6">We implemented a calendar based, vertical column layout for the Weekly View. This provided a visual representation of time that allowed students to turn abstract deadlines into scheduled execution. To address the critique that we were a nice to have tool, we introduced Sub-deadlines as a core feature. This allowed students to break large, overwhelming assessments into manageable milestones. This approach directly targeted the procrastination cycle by forcing task chunking rather than just passive deadline logging.</p>
            <p className="font-normal text-[20px] px-0 text-left mt-6">Each of these features now directly addresses a specific friction point we identified, transforming academic inputs into a structured and actionable workflow.</p>
          </>
        ),
      },
      {
        id: "results-and-reflection",
        title: "Results & Reflection",
        hasPlaceholder: false,
        content: (
          <>
            <div className="flex flex-row gap-[45px] mt-8 mb-8 px-0">
              <div className="flex-1 min-w-0 h-[260px] bg-[#f5f5f5] px-8 py-10 border border-[#e7e7e7] flex flex-col justify-end items-center text-center">
                <span className="text-[40px] mb-3">💯</span>
                <h3 className="text-[28px] font-semibold text-[#7c3aed]">100+ Beta Users</h3>
                <p className="text-[15px] text-[#4a4a4a] leading-relaxed mt-2">Active beta users testing the platform during initial rollout.</p>
              </div>
              <div className="flex-1 min-w-0 h-[260px] bg-[#f5f5f5] px-8 py-10 border border-[#e7e7e7] flex flex-col justify-end items-center text-center">
                <span className="text-[40px] mb-3">🏆</span>
                <h3 className="text-[28px] font-semibold text-[#7c3aed]">#1 Product</h3>
                <p className="text-[15px] text-[#4a4a4a] leading-relaxed mt-2">Recognition at QTMA 2025 Winter Demo Day, selected from four teams.</p>
              </div>
            </div>
            <p>Following development and testing, Nucleus was launched to a closed beta of post-secondary students to evaluate adoption and real-world usability. The product gained early traction among students seeking a simpler entry point into academic organization. These outcomes validated the core hypothesis established during research: reducing organizational friction at the start of the academic workflow meaningfully resonates with students. Early adoption suggested strong demand for systems that integrate directly into academic structure rather than requiring students to build their own productivity frameworks.</p>
            <div className="mt-12 w-full py-[20px]">
              <ResultsStackWithPost />
            </div>
            <p>Nucleus was my first introduction to product design and the incubator space. What started as a random curiosity for a club turned into a spark for passion that has changed what I want my career to be. Working through late-night design sessions, team discussions, and iterative product decisions introduced me to the reality of building where ambiguity, constraints, and rapid learning are always present.</p>
            <p>Starting with no prior design experience, I learned Figma from the ground up while actively contributing to product direction and execution. My goal throughout the project was not only to deliver designs, but to continuously remove friction for the team by improving both speed and clarity in our workflow.</p>
            <p>More importantly, Nucleus reshaped how I think about design. I learned that effective products are rarely defined by feature complexity, but by how well they reduce effort for users. Many of our strongest decisions came from reframing problems rather than adding functionality, particularly our shift toward designing for students at the beginning of their academic journey. If I could go back and work on Nucleus again, our UI aesthetics would definitely be different but accessibility is something I really would have emphasized more.</p>
            <p>The joy, pressure, and responsibility of building Nucleus solidified my interest in product design and motivated me to pursue building as a long-term path instead of the typical SWE route most CS students follow.</p>
          </>
        ),
      },
    ],
  },
];
