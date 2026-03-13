"use client";

import { useApp } from "@/lib/providers";

export function Hero() {
  const { t } = useApp();

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8">

      {/* geometric shapes — behind text (z-0), hidden on small screens */}
      <div
        className="hidden sm:block pointer-events-none absolute right-[8%] top-1/2 -translate-y-1/2 z-0 w-[min(40vw,320px)] animate-fade-in"
        style={{ animationDelay: "200ms" }}
        aria-hidden
      >
        {/* main square */}
        <div className="hero-shape-main relative aspect-square w-full border border-[var(--fg)]/20" />

        {/* small square top-left */}
        <div className="hero-shape-left absolute -left-6 top-[10%] h-14 w-14 border border-[var(--fg)]/20 bg-[var(--bg)]" />

        {/* tall rect bottom-right */}
        <div className="hero-shape-right absolute -bottom-4 right-0 h-24 w-12 border border-[var(--fg)]/20 bg-[var(--bg)]" />

        {/* accent dot top-right */}
        <div className="hero-shape-dot absolute -right-3 -top-3 h-4 w-4 border border-[var(--fg)]/40 bg-[var(--bg)]" />

        {/* small accent square bottom-left */}
        <div className="hero-shape-accent absolute -bottom-1 -left-5 h-9 w-9 border border-[var(--fg)]/20" />
      </div>

      {/* text — on top */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <h1
          className="mb-6 text-5xl font-medium tracking-tight text-[var(--fg)] sm:text-7xl md:text-8xl lg:text-[9rem] animate-fade-in"
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
