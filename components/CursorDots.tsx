"use client";

import { useEffect, useRef } from "react";

export function CursorDots() {
  const baseRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const base = baseRef.current;
    const glow = glowRef.current;
    if (!base || !glow) return;

    const onMove = (e: MouseEvent) => {
      glow.style.setProperty("--cx", `${e.clientX}px`);
      glow.style.setProperty("--cy", `${e.clientY}px`);
    };

    const onScroll = () => {
      // сдвигаем паттерн синхронно со скроллом страницы
      const offset = `0px ${(-window.scrollY % 32)}px`;
      base.style.backgroundPosition = offset;
      glow.style.backgroundPosition = offset;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* base: dim dots, скроллятся через backgroundPosition */}
      <div
        ref={baseRef}
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* glow: яркие точки вокруг курсора */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, var(--fg) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.3,
          maskImage:
            "radial-gradient(circle 220px at var(--cx, -9999px) var(--cy, -9999px), black 0%, transparent 100%)",
        }}
      />
    </>
  );
}
