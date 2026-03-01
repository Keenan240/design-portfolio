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
    <div className="flex justify-center w-full max-w-full overflow-x-auto">
      <div className="flex flex-row items-center shrink-0" style={{ gap: '102px' }}>
        <div className="w-[440px] h-[440px] shrink-0">
          <Stack
            randomRotation={false}
            sensitivity={200}
            sendToBackOnClick={true}
            cards={STACK_IMAGES.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Nucleus results ${i + 1}`}
                className="w-full h-full object-cover"
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
          className="block shrink-0 w-[520px] max-w-[520px]"
        >
          <img
            src="/projects/linkedin-post.png"
            alt="LinkedIn post - First Demo Day Win"
            className="rounded-2xl border border-[#DDDDDD] w-full h-auto object-contain"
          />
        </a>
      </div>
    </div>
  );
}
