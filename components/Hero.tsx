"use client";

import { useApp } from "@/lib/providers";

export function Hero() {
  const { t } = useApp();

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <h1
          className="mb-6 text-5xl font-medium tracking-tight text-[var(--fg)] sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in"
          style={{ animationDelay: "0ms" }}
        >
          {t.hero.title}
        </h1>
        <p
          className="max-w-xl text-lg text-[var(--muted)] sm:text-xl animate-fade-in"
          style={{ animationDelay: "120ms" }}
        >
          {t.hero.subtitle}
        </p>
      </div>
      {/* Abstract visual — geometric blocks */}
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 w-[min(40vw,320px)] animate-fade-in md:right-8"
        style={{ animationDelay: "200ms" }}
        aria-hidden
      >
        <div className="relative aspect-square w-full border border-[var(--border)] bg-[var(--fg)]/5" />
        <div className="absolute -left-4 top-1/4 h-20 w-20 border border-[var(--border)] bg-[var(--bg)] md:-left-6 md:h-24 md:w-24" />
        <div className="absolute -bottom-2 right-2 h-24 w-16 border border-[var(--border)] bg-[var(--bg)] md:right-4 md:h-28 md:w-20" />
      </div>
    </section>
  );
}
