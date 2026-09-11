"use client";

import Stack from "@/components/Stack";

const LINKEDIN_POST_URL =
  "https://www.linkedin.com/posts/keenanyang1027_first-demo-day-win-im-thrilled-to-announce-activity-7307921346150170624-yqXj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkNuuEBDrSTWi4rLSWp0E_0WFJsgp0-B6I";

const STACK_IMAGES = [
  "/projects/results-grid-1.png",
  "/projects/results-grid-2.png",
  "/projects/results-grid-3.png",
];

export default function ResultsStackWithPost() {
  return (
    <div className="flex w-full max-w-full flex-col items-center justify-center gap-14 overflow-hidden sm:flex-row sm:items-center sm:gap-16 lg:gap-24">
      <div className="aspect-square w-full max-w-[320px] shrink sm:max-w-[min(100%,340px)] lg:max-w-[360px]">
        <Stack
          randomRotation={false}
          sensitivity={200}
          sendToBackOnClick={true}
          cards={STACK_IMAGES.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Nucleus results ${i + 1}`}
              className="h-full w-full object-cover"
            />
          ))}
          autoplay={false}
          autoplayDelay={3000}
          pauseOnHover={false}
        />
      </div>
      <a
        href={LINKEDIN_POST_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full max-w-[380px] shrink sm:max-w-[min(100%,400px)] lg:max-w-[420px]"
      >
        <img
          src="/projects/linkedin-post.png"
          alt="LinkedIn post - First Demo Day Win"
          className="h-auto w-full rounded-2xl border border-[#DDDDDD] object-contain"
        />
      </a>
    </div>
  );
}
