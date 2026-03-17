import type { Locale } from "@/lib/translations";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n";

export const SITE_NAME = "Onoy Applications";

export function absoluteUrl(pathname: string, origin: string) {
  const clean = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${origin.replace(/\/+$/, "")}${clean}`;
}

export function localeTitle(locale: Locale) {
  if (locale === "ru") return "Разработка ПО под ключ в Бишкеке — Onoy";
  if (locale === "ky") return "Бишкекте программалык камсыздоо иштеп чыгуу — Onoy";
  return "Full-cycle software development — Onoy";
}

export function localeDescription(locale: Locale) {
  if (locale === "ru")
    return "Разработка CRM, Telegram-ботов, сайтов, API и DevOps. Полный цикл: аналитика, дизайн, разработка, запуск и поддержка. Бишкек и СНГ.";
  if (locale === "ky")
    return "CRM, Telegram-бот, сайт, API жана DevOps. Толук цикл: анализ, дизайн, иштеп чыгуу, ишке киргизүү жана колдоо. Бишкек жана СНГ.";
  return "CRM, Telegram bots, websites, APIs, server deployment. Full-cycle development.";
}

export function alternatesFor(pathname: string, origin: string) {
  const langs: Record<string, string> = {};
  for (const l of LOCALES)
    langs[l] = absoluteUrl(`/${l}${pathname === "/" ? "" : pathname}`, origin);
  langs["x-default"] = absoluteUrl(
    `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`,
    origin,
  );
  return langs;
}

