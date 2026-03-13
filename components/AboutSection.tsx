"use client";

import { useApp } from "@/lib/providers";

export function AboutSection() {
  const { t } = useApp();

  return (
    <section id="about" className="border-t border-[var(--border)] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-xl font-medium tracking-tight text-[var(--fg)] sm:mb-10 sm:text-2xl md:text-3xl">
          {t.about.title}
        </h2>
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm text-[var(--fg)] leading-relaxed sm:text-base">{t.about.intro}</p>
            <p className="text-sm text-[var(--muted)] leading-relaxed sm:text-base">{t.about.body}</p>
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
