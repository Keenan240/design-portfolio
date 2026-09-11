"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type PortfolioTheme = "light" | "dark";

const THEME_STORAGE_KEY = "portfolio-theme";

type ThemeContextValue = {
  theme: PortfolioTheme;
  isDark: boolean;
  setTheme: (theme: PortfolioTheme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredTheme(): PortfolioTheme {
  try {
    const stored =
      localStorage.getItem(THEME_STORAGE_KEY) ??
      localStorage.getItem("case-study-theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // ignore
  }
  return "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<PortfolioTheme>("light");

  useEffect(() => {
    setThemeState(readStoredTheme());
  }, []);

  useEffect(() => {
    const isDark = theme === "dark";
    document.body.style.backgroundColor = isDark ? "#1E1E1E" : "#FFFFFF";
    document.body.style.color = isDark ? "#FFFFFF" : "#2A2A2A";
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const setTheme = useCallback((next: PortfolioTheme) => {
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === "dark",
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
