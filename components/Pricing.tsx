"use client";

import { useState } from "react";
import { useApp } from "@/lib/providers";
import { ContactModal } from "@/components/ContactModal";

export function Pricing() {
  const { t } = useApp();
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="pricing" className="border-t border-[var(--border)] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-xl font-medium tracking-tight text-[var(--fg)] sm:mb-8 sm:text-2xl md:text-3xl">
            {t.nav.pricing}
          </h2>
          <p className="max-w-xl text-sm text-[var(--muted)] sm:text-base">{t.pricing.intro}</p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-4 inline-flex h-11 w-full items-center justify-center border border-[var(--fg)] bg-[var(--fg)] px-6 text-sm text-[var(--bg)] transition-opacity hover:opacity-90 sm:mt-6 sm:h-12 sm:w-auto"
          >
            {t.pricing.cta}
          </button>
        </div>
      </section>
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
