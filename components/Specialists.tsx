"use client";

import { useApp } from "@/lib/providers";

export function Specialists() {
  const { t } = useApp();

  return (
    <section id="faq" className="border-t border-[var(--border)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-2xl font-medium tracking-tight text-[var(--fg)] sm:text-3xl">
          {t.specialists.title}
        </h2>
        <ul className="flex flex-wrap gap-3">
          {t.specialists.items.map((item, i) => (
            <li
              key={item}
              className="border border-[var(--border)] px-4 py-3 text-sm text-[var(--fg)] transition-colors hover:border-[var(--fg)]"
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
