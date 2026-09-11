"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <ThemeToggle />
    </ThemeProvider>
  );
}
