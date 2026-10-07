"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Theme = "dark" | "light" | "mono" | "mono-lite";

const STORAGE_KEY = "trioz-theme";
const DEFAULT_THEME: Theme = "dark";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
}>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial =
      stored && ["dark", "light", "mono", "mono-lite"].includes(stored)
        ? stored
        : DEFAULT_THEME;
    setThemeState(initial);
    document.documentElement.classList.remove(
      "dark",
      "light",
      "mono",
      "mono-lite"
    );
    document.documentElement.classList.add(initial);
    setMounted(true);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem(STORAGE_KEY, t);
    document.documentElement.classList.remove(
      "dark",
      "light",
      "mono",
      "mono-lite"
    );
    document.documentElement.classList.add(t);
  }, []);

  if (!mounted) {
    return (
      <div style={{ visibility: "hidden" }} aria-hidden>
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
