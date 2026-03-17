import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/translations";
import { isLocale } from "@/lib/i18n";
import { requestOrigin } from "@/lib/requestOrigin";
import { alternatesFor, localeDescription } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const l = locale as Locale;
  const origin = await requestOrigin();

  const title =
    l === "ru"
      ? "Проекты — Onoy (разработка ПО под ключ)"
      : "Долбоорлор — Onoy (толук циклдүү иштеп чыгуу)";

  const description = localeDescription(l);

  return {
    metadataBase: new URL(origin),
    title,
    description,
    alternates: {
      canonical: `/${l}/projects`,
      languages: alternatesFor("/projects", origin),
    },
    robots: { index: true, follow: true },
  };
}

export default async function ProjectsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return children;
}

