import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Providers } from "@/lib/providers";
import { CursorDots } from "@/components/CursorDots";
import type { Locale } from "@/lib/translations";
import { isLocale, LOCALES } from "@/lib/i18n";
import { requestOrigin } from "@/lib/requestOrigin";
import {
  SITE_NAME,
  alternatesFor,
  localeDescription,
  localeTitle,
} from "@/lib/seo";

export const dynamic = "force-static";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const l = locale as Locale;
  const origin = await requestOrigin();

  const title = localeTitle(l);
  const description = localeDescription(l);

  return {
    metadataBase: new URL(origin),
    title,
    description,
    applicationName: SITE_NAME,
    alternates: {
      canonical: `/${l}`,
      languages: alternatesFor("/", origin),
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: l,
      url: `/${l}`,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const origin = await requestOrigin();

  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: `${origin}/${l}`,
    areaServed: ["KG", "CIS"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <Providers initialLocale={l}>
      <div className="relative">
        <CursorDots />
        {children}
      </div>
      <div className="site-scan-line" aria-hidden />
      </Providers>
    </>
  );
}

