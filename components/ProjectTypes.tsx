"use client";

import { useApp } from "@/lib/providers";
import { useState } from "react";

const iconDefs = [
  // 0: CRM — grid lines
  (hovered: boolean) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <line x1="3" y1="9" x2="21" y2="9"
        style={hovered ? { animation: "iconScanFade 1.4s ease infinite" } : {}} />
      <line x1="3" y1="15" x2="21" y2="15"
        style={hovered ? { animation: "iconScanFade 1.4s ease 0.35s infinite" } : {}} />
      <line x1="9" y1="9" x2="9" y2="21"
        style={hovered ? { animation: "iconScanFade 1.4s ease 0.7s infinite" } : {}} />
    </svg>
  ),
  // 1: Telegram — typing dots
  (hovered: boolean) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <circle cx="9" cy="11" r="0.5" fill="currentColor" stroke="none"
        style={hovered ? { animation: "iconTypingBounce 1.2s ease infinite", transformBox: "fill-box", transformOrigin: "center" } : {}} />
      <circle cx="12" cy="11" r="0.5" fill="currentColor" stroke="none"
        style={hovered ? { animation: "iconTypingBounce 1.2s ease 0.15s infinite", transformBox: "fill-box", transformOrigin: "center" } : {}} />
      <circle cx="15" cy="11" r="0.5" fill="currentColor" stroke="none"
        style={hovered ? { animation: "iconTypingBounce 1.2s ease 0.30s infinite", transformBox: "fill-box", transformOrigin: "center" } : {}} />
    </svg>
  ),
  // 2: Browser — window dots pulse
  (hovered: boolean) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="1" />
      <line x1="2" y1="8" x2="22" y2="8" />
      <circle cx="5.5" cy="5.5" r="0.75" fill="currentColor" stroke="none"
        style={hovered ? { animation: "iconDotPulse 1s ease infinite" } : {}} />
      <circle cx="8.5" cy="5.5" r="0.75" fill="currentColor" stroke="none"
        style={hovered ? { animation: "iconDotPulse 1s ease 0.3s infinite" } : {}} />
    </svg>
  ),
  // 3: Code — slash bobbles
  (hovered: boolean) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20"
        style={hovered ? { animation: "iconSlashBob 1s ease infinite", transformBox: "fill-box", transformOrigin: "center" } : {}} />
    </svg>
  ),
  // 4: Terminal — cursor blinks
  (hovered: boolean) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="1" />
      <polyline points="8 9 12 13 8 17" />
      <line x1="13" y1="17" x2="17" y2="17"
        style={hovered ? { animation: "iconCursorBlink 0.7s step-end infinite" } : {}} />
    </svg>
  ),
  // 5: Mobile — home dot pulses
  (hovered: boolean) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <circle cx="12" cy="18" r="0.75" fill="currentColor" stroke="none"
        style={hovered ? { animation: "iconHomePulse 1s ease infinite", transformBox: "fill-box", transformOrigin: "center" } : {}} />
    </svg>
  ),
];

export function ProjectTypes() {
  const { t } = useApp();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="about" className="border-t border-[var(--border)] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-14 text-2xl font-medium tracking-tight text-[var(--fg)] sm:text-3xl">
          {t.projectTypes.title}
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {t.projectTypes.items.map((item, i) => (
            <li
              key={item.title}
              className="group relative border border-[var(--border)] bg-[var(--bg)] px-6 py-6 transition-colors duration-300 hover:bg-[var(--fg)]/[0.04] cursor-default"
              style={{
                animation: "fadeInUp 0.5s ease-out forwards",
                animationDelay: `${i * 60}ms`,
                opacity: 0,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* border highlight on hover */}
              <span className="pointer-events-none absolute inset-0 border border-[var(--fg)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start gap-4">
                {/* icon */}
                <span className="mt-0.5 shrink-0 text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--fg)]">
                  {iconDefs[i](hoveredIndex === i)}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium tracking-wide text-[var(--fg)] transition-colors duration-300">
                    {item.title}
                  </p>

                  {/* description — expands on hover */}
                  <div className="grid transition-all duration-300 ease-out [grid-template-rows:0fr] group-hover:[grid-template-rows:1fr]">
                    <p className="overflow-hidden text-xs leading-relaxed text-[var(--muted)] pt-0 group-hover:pt-2 transition-[padding] duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
