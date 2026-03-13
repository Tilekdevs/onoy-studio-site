"use client";

import { useApp } from "@/lib/providers";

export function Specialists() {
  const { t } = useApp();

  return (
    <section className="border-t border-[var(--border)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-xl font-medium tracking-tight text-[var(--fg)] sm:mb-12 sm:text-2xl md:text-3xl">
          {t.specialists.title}
        </h2>
        <ul className="flex flex-wrap gap-2 sm:gap-3">
          {t.specialists.items.map((item, i) => (
            <li
              key={item}
              className="border border-[var(--border)] px-3 py-2.5 text-xs text-[var(--fg)] transition-colors hover:border-[var(--fg)] sm:px-4 sm:py-3 sm:text-sm"
              style={{
                animation: "fadeInUp 0.5s ease-out forwards",
                animationDelay: `${i * 50}ms`,
                opacity: 0,
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
