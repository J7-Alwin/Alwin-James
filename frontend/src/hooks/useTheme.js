import { useEffect, useState, useCallback } from "react";

const getSystemTheme = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

export function useTheme() {
  // mode: "light" | "dark" | "system". Defaults to "system" so the site
  // matches the visitor's OS/browser preference on first load.
  const [mode, setModeState] = useState(() => {
    if (typeof window === "undefined") return "system";
    return localStorage.getItem("theme-mode") || "system";
  });

  const [systemTheme, setSystemTheme] = useState(getSystemTheme);

  // Track live changes to the system preference.
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setSystemTheme(e.matches ? "dark" : "light");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const theme = mode === "system" ? systemTheme : mode;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const setMode = useCallback((m) => {
    localStorage.setItem("theme-mode", m);
    setModeState(m);
  }, []);

  return { mode, setMode, theme };
}
