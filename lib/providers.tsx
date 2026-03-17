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

export function Providers({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    const storedTheme = localStorage.getItem(STORAGE_THEME) as Theme | null;
    return storedTheme === "dark" || storedTheme === "light" ? storedTheme : "dark";
  });

  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return initialLocale ?? "ru";
    const storedLocale = localStorage.getItem(STORAGE_LOCALE) as Locale | null;
    if (storedLocale === "en" || storedLocale === "ru" || storedLocale === "ky")
      return storedLocale;
    return initialLocale ?? "ru";
  });

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem(STORAGE_THEME, t);
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_LOCALE, l);
    document.documentElement.setAttribute("lang", l);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
  }, [locale]);

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
