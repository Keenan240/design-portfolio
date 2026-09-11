import { ExperienceItem } from "@/data/experience";

interface ExperienceListProps {
  title: string;
  items: ExperienceItem[];
  theme?: "light" | "dark";
}

export default function ExperienceList({
  title,
  items,
  theme = "light",
}: ExperienceListProps) {
  const isDark = theme === "dark";

  return (
    <div className="flex w-full flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-16 lg:gap-24">
      <h2
        className={`min-w-0 shrink-0 text-[28px] font-medium tracking-[-0.07em] md:w-[220px] md:pt-0.5 md:text-[36px] lg:w-[240px] ${
          isDark ? "text-white" : "text-[#2A2A2A]"
        }`}
      >
        {title}
      </h2>

      {/* Right-aligned block with gutter breathing room */}
      <div className="w-full max-w-[680px] md:ml-auto md:w-[min(680px,calc(100%-2rem))] md:pr-6 lg:pr-10 xl:pr-14">
        <div
          className={`mb-6 hidden text-[16px] font-medium italic md:mb-8 md:flex md:text-[20px] ${
            isDark ? "text-[#ACACAC]" : "text-[#757575]"
          }`}
        >
          <span className="w-[38%] shrink-0 pr-4">company</span>
          <span className="w-[42%] shrink-0 pr-4">role</span>
          <span className="shrink-0">year</span>
        </div>

        <div className="flex flex-col gap-5">
          {items.map((item, index) => (
            <div
              key={`${item.company}-${index}`}
              className={`flex w-full flex-col gap-1 text-[17px] tracking-[-0.07em] md:flex-row md:gap-0 md:text-[20px] ${
                isDark ? "text-white" : "text-[#202020]"
              }`}
            >
              <span className="font-medium md:w-[38%] md:shrink-0 md:pr-4">
                {item.company}
              </span>
              <span
                className={`font-medium md:w-[42%] md:shrink-0 md:pr-4 ${
                  isDark ? "text-[#ACACAC] md:text-white" : ""
                }`}
              >
                {item.role}
              </span>
              <span
                className={`font-medium md:shrink-0 ${
                  isDark ? "text-[#ACACAC] md:text-white" : ""
                }`}
              >
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
