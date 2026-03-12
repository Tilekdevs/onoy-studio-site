"use client";

import { useApp } from "@/lib/providers";

export function ProjectTypes() {
  const { t } = useApp();

  return (
    <section id="about" className="border-t border-[var(--border)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-2xl font-medium tracking-tight text-[var(--fg)] sm:text-3xl">
          {t.projectTypes.title}
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.projectTypes.items.map((item, i) => (
            <li
              key={item}
              className="border border-[var(--border)] bg-transparent px-5 py-4 text-[var(--fg)] transition-colors hover:border-[var(--fg)] hover:bg-[var(--fg)]/5"
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
