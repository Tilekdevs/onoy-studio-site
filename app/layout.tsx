import type { Metadata, Viewport } from "next";
import { Roboto_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Onoy Applications",
  description: "Full-cycle development studio.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("onoy-locale")?.value || "ru";
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${robotoMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
