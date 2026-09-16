"use client";

import { useTheme } from "@/components/ThemeProvider";

/** Full-page case study loading skeleton used during route transitions and unlock. */
export default function CaseStudySkeleton() {
  const { isDark } = useTheme();

  const page = isDark ? "bg-[#1E1E1E]" : "bg-white";
  const chrome = isDark ? "bg-[#252525]" : "bg-[#F0F0F0]";
  const well = isDark ? "bg-[#252525]" : "bg-[#F5F5F5]";
  const pulse = "animate-pulse";

  return (
    <div className={`min-h-screen ${page}`} aria-busy="true" aria-label="Loading case study">
      <div className="mx-auto w-full max-w-[1400px] px-6 pt-6 md:px-10 lg:px-14">
        <div className="flex items-center justify-between gap-4 pt-4 pb-[52px]">
          <div className={`h-11 w-11 rounded-full ${chrome} ${pulse}`} />
          <div className="flex flex-col items-end gap-2">
            <div className={`h-3 w-20 rounded ${chrome} ${pulse}`} />
            <div className={`h-6 w-48 rounded ${chrome} ${pulse}`} />
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 px-6 pb-20 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10 md:px-10 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-12 lg:px-14">
        <aside className="hidden md:block">
          <div className="space-y-3 pt-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`h-4 rounded ${chrome} ${pulse}`}
                style={{ width: `${56 + (i % 3) * 14}%` }}
              />
            ))}
          </div>
        </aside>

        <div className="w-full space-y-8">
          <div className="space-y-4">
            <div className={`h-10 w-[85%] max-w-[640px] rounded ${chrome} ${pulse}`} />
            <div className={`h-4 w-full max-w-[560px] rounded ${chrome} ${pulse}`} />
            <div className={`h-4 w-[70%] max-w-[420px] rounded ${chrome} ${pulse}`} />
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:justify-end">
            <div className="space-y-3 md:w-[200px]">
              <div className={`h-3 w-16 rounded ${chrome} ${pulse}`} />
              <div className={`h-4 w-28 rounded ${chrome} ${pulse}`} />
              <div className={`mt-4 h-3 w-20 rounded ${chrome} ${pulse}`} />
              <div className={`h-4 w-24 rounded ${chrome} ${pulse}`} />
            </div>
          </div>

          <div className={`h-[360px] w-full rounded-[4px] ${well} ${pulse}`} />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className={`h-[220px] rounded-[4px] ${well} ${pulse}`} />
            <div className={`h-[220px] rounded-[4px] ${well} ${pulse}`} />
          </div>

          <div className="space-y-3 pt-8">
            <div className={`h-8 w-64 rounded ${chrome} ${pulse}`} />
            <div className={`h-4 w-full rounded ${chrome} ${pulse}`} />
            <div className={`h-4 w-[90%] rounded ${chrome} ${pulse}`} />
            <div className={`h-4 w-[75%] rounded ${chrome} ${pulse}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
