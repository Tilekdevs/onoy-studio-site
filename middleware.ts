import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, isLocale, LOCALES } from "@/lib/i18n";

const COOKIE_LOCALE = "onoy-locale";

function pickFromAcceptLanguage(header: string | null) {
  if (!header) return DEFAULT_LOCALE;
  const lower = header.toLowerCase();
  if (lower.includes("ky")) return "ky";
  if (lower.includes("ru")) return "ru";
  if (lower.includes("en")) return "en";
  return DEFAULT_LOCALE;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip Next internals + static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".jpeg") ||
    pathname.endsWith(".webp") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".gif") ||
    pathname.endsWith(".ico") ||
    pathname.endsWith(".txt") ||
    pathname.endsWith(".xml")
  ) {
    return NextResponse.next();
  }

  const seg = pathname.split("/")[1] ?? "";
  const hasLocale = isLocale(seg);

  const cookieLocale = req.cookies.get(COOKIE_LOCALE)?.value ?? "";
  const preferred =
    (isLocale(cookieLocale) && cookieLocale) ||
    pickFromAcceptLanguage(req.headers.get("accept-language"));

  // Redirect "/" or "/something" -> "/{locale}/something" (unless already prefixed)
  if (!hasLocale) {
    const locale = preferred;
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    const res = NextResponse.redirect(url);
    res.cookies.set(COOKIE_LOCALE, locale, { path: "/", sameSite: "lax" });
    return res;
  }

  // Sync cookie with URL locale
  if (isLocale(seg) && LOCALES.includes(seg)) {
    const res = NextResponse.next();
    res.cookies.set(COOKIE_LOCALE, seg, { path: "/", sameSite: "lax" });
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next).*)"],
};

