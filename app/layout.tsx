import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { Providers } from "@/lib/providers";
import { CursorDots } from "@/components/CursorDots";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Onoy Applications",
  description:
    "CRM, Telegram bots, websites, APIs, server deployment. Full-cycle development.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoMono.variable} antialiased`}>
        <Providers>
          <div className="relative">
            <CursorDots />
            {children}
          </div>
          <div className="site-scan-line" aria-hidden />
        </Providers>
      </body>
    </html>
  );
}
