"use client";

import { useApp } from "@/lib/providers";

export function ProjectTypes() {
  const { t } = useApp();

  return (
    <section id="services" className="border-t border-[var(--border)] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-xl font-medium tracking-tight text-[var(--fg)] sm:mb-12 sm:text-2xl md:text-3xl">
          {t.projectTypes.title}
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {t.projectTypes.items.map((item, i) => (
            <li
              key={item}
              className="border border-[var(--border)] bg-transparent px-4 py-3 text-sm text-[var(--fg)] transition-colors hover:border-[var(--fg)] hover:bg-[var(--fg)]/5 sm:px-5 sm:py-4 sm:text-base"
              style={{
                animation: "fadeInUp 0.5s ease-out forwards",
                animationDelay: `${i * 60}ms`,
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
