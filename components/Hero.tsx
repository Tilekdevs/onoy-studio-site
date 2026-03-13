"use client";

import { useApp } from "@/lib/providers";

export function Hero() {
  const { t } = useApp();

  return (
    <section className="relative flex min-h-[min(85vh,700px)] flex-col justify-center px-4 pt-20 pb-12 sm:min-h-[85vh] sm:px-6 sm:pt-24 sm:pb-16 md:flex-row md:items-center md:justify-between lg:px-8">
      <div className="mx-auto w-full max-w-6xl md:mr-8 md:flex-1">
        <h1
          className="mb-4 text-4xl font-medium leading-tight tracking-tight text-[var(--fg)] animate-fade-in sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          style={{ animationDelay: "0ms" }}
        >
          {t.hero.title}
        </h1>
        <p
          className="max-w-xl text-base leading-relaxed text-[var(--muted)] animate-fade-in sm:text-lg md:text-xl"
          style={{ animationDelay: "120ms" }}
        >
          {t.hero.subtitle}
        </p>
      </div>
      {/* Abstract visual — скрыт на узких экранах, справа на md+ */}
      <div
        className="absolute right-4 top-1/2 hidden w-[min(36vw,300px)] -translate-y-1/2 animate-fade-in md:right-8 md:block"
        style={{ animationDelay: "200ms" }}
        aria-hidden
      >
        <div className="relative aspect-square w-full border border-[var(--border)] bg-[var(--fg)]/5" />
        <div className="absolute -left-4 top-1/4 h-20 w-20 border border-[var(--border)] bg-[var(--bg)] lg:-left-6 lg:h-24 lg:w-24" />
        <div className="absolute -bottom-2 right-2 h-24 w-16 border border-[var(--border)] bg-[var(--bg)] lg:right-4 lg:h-28 lg:w-20" />
      </div>
    </section>
  );
}
