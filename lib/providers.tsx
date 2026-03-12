"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import type { Locale, Translations } from "@/lib/translations";
import { translations } from "@/lib/translations";

type Theme = "dark" | "light";

type ContextValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
};

const Context = createContext<ContextValue | null>(null);

const STORAGE_THEME = "onoy-theme";
const STORAGE_LOCALE = "onoy-locale";

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem(STORAGE_THEME) as Theme | null;
    const storedLocale = localStorage.getItem(STORAGE_LOCALE) as Locale | null;
    if (storedTheme === "dark" || storedTheme === "light") setThemeState(storedTheme);
    if (storedLocale === "en" || storedLocale === "ru") setLocaleState(storedLocale);
    setMounted(true);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem(STORAGE_THEME, t);
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_LOCALE, l);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme, mounted]);

  const t = translations[locale];

  return (
    <Context.Provider value={{ theme, setTheme, locale, setLocale, t }}>
      {children}
    </Context.Provider>
  );
}

export function useApp() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("useApp must be used within Providers");
  return ctx;
}
