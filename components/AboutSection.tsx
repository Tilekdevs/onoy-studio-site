"use client";

import { useApp } from "@/lib/providers";

export function AboutSection() {
  const { t } = useApp();

  return (
    <section id="about" className="border-t border-[var(--border)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-2xl font-medium tracking-tight text-[var(--fg)] sm:text-3xl">
          {t.about.title}
        </h2>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <p className="text-[var(--fg)] leading-relaxed">{t.about.intro}</p>
            <p className="text-[var(--muted)] leading-relaxed">{t.about.body}</p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--muted)]">
              {t.about.listTitle}
            </h3>
            <ul className="space-y-3">
              {t.about.list.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-l-2 border-[var(--border)] pl-4 text-[var(--fg)]"
                >
                  <span className="text-[var(--muted)]">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
