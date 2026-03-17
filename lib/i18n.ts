import type { Locale } from "@/lib/translations";

export const LOCALES: readonly Locale[] = ["ru", "ky", "en"] as const;
export const DEFAULT_LOCALE: Locale = "ru";

export function isLocale(x: string): x is Locale {
  return (LOCALES as readonly string[]).includes(x);
}

export function localePrefix(locale: Locale) {
  return `/${locale}` as const;
}

export function withLocalePath(locale: Locale, path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${localePrefix(locale)}${clean === "/" ? "" : clean}`;
}

