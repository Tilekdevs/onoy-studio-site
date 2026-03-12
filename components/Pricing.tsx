"use client";

import { useState } from "react";
import { useApp } from "@/lib/providers";
import { ContactModal } from "@/components/ContactModal";

export function Pricing() {
  const { t } = useApp();
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="pricing" className="border-t border-[var(--border)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-medium tracking-tight text-[var(--fg)] sm:text-3xl">
            {t.nav.pricing}
          </h2>
          <p className="max-w-xl text-[var(--muted)]">{t.pricing.intro}</p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-6 inline-flex h-12 items-center border border-[var(--fg)] bg-[var(--fg)] px-6 text-sm text-[var(--bg)] transition-opacity hover:opacity-90"
          >
            {t.pricing.cta}
          </button>
        </div>
      </section>
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
