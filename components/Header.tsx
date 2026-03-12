"use client";

import { useState } from "react";
import Link from "next/link";
import { useApp } from "@/lib/providers";
import { ContactModal } from "@/components/ContactModal";

export function Header() {
  const { t, theme, setTheme, locale, setLocale } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const nav = [
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "faq", label: t.nav.faq },
    { id: "pricing", label: t.nav.pricing },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-medium tracking-wide text-[var(--fg)]">
          Onoy
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              {label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
          >
            {t.nav.contact}
          </button>
        </nav>

        <div className="flex items-center gap-4">
          {/* Language */}
          <div className="relative" aria-label={t.nav.language}>
            <button
              type="button"
              onClick={() => setLocale(locale === "en" ? "ru" : "en")}
              className="flex h-8 min-w-[3rem] items-center justify-center border border-[var(--border)] bg-transparent px-2 text-xs uppercase text-[var(--fg)] transition-colors hover:border-[var(--fg)]"
              aria-pressed={locale === "ru"}
            >
              {locale === "en" ? "EN" : "RU"}
            </button>
          </div>

          {/* Theme */}
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-8 w-8 items-center justify-center border border-[var(--border)] bg-transparent text-[var(--fg)] transition-colors hover:border-[var(--fg)]"
            aria-label={theme === "dark" ? "Switch to light" : "Switch to dark"}
          >
            {theme === "dark" ? (
              <span className="text-sm">☀</span>
            ) : (
              <span className="text-sm">◆</span>
            )}
          </button>

          {/* Mobile menu */}
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center border border-[var(--border)] md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
          >
            <span className="text-sm">{menuOpen ? "✕" : "≡"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {nav.map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[var(--muted)] hover:text-[var(--fg)]"
              >
                {label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => { setMenuOpen(false); setContactOpen(true); }}
              className="text-left text-sm text-[var(--muted)] hover:text-[var(--fg)]"
            >
              {t.nav.contact}
            </button>
          </nav>
        </div>
      )}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  );
}
