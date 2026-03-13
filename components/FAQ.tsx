"use client";

import { useState } from "react";
import { useApp } from "@/lib/providers";

export function FAQ() {
  const { t } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="border-t border-[var(--border)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-2xl font-medium tracking-tight text-[var(--fg)] sm:text-3xl">
          {t.faq.title}
        </h2>
        <ul className="divide-y divide-[var(--border)]">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-sm font-medium text-[var(--fg)] sm:text-base">
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 text-[var(--muted)] transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-[var(--muted)] animate-fade-in">
                    {item.a}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
