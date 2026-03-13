"use client";

import { useApp } from "@/lib/providers";

export function Footer() {
  const { t } = useApp();

  return (
    <footer className="border-t border-[var(--border)] px-4 py-5 pb-[env(safe-area-inset-bottom)] sm:px-6 sm:py-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs text-[var(--muted)]">{t.footer}</p>
      </div>
    </footer>
  );
}
