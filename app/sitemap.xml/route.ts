import type { NextRequest } from "next/server";
import { LOCALES } from "@/lib/i18n";

function originFrom(req: NextRequest) {
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? "localhost:3000";
  const proto = req.headers.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}`;
}

function xmlEscape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function GET(req: NextRequest) {
  const origin = originFrom(req);
  const now = new Date().toISOString();

  const paths = ["/", "/projects"] as const;
  const urls: string[] = [];
  for (const locale of LOCALES) {
    for (const p of paths) {
      const pathname = p === "/" ? `/${locale}` : `/${locale}${p}`;
      urls.push(`${origin}${pathname}`);
    }
  }

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url>\n` +
          `    <loc>${xmlEscape(u)}</loc>\n` +
          `    <lastmod>${now}</lastmod>\n` +
          `  </url>\n`,
      )
      .join("") +
    `</urlset>\n`;

  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
}

