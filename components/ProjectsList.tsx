"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/lib/providers";
import { ContactModal } from "@/components/ContactModal";

const MOCK_PROJECTS = [
  {
    id: "1",
    title: "CRM for logistics",
    tag: "CRM",
    desc: "System for managing orders, clients and shipments in one place.",
    image:
      "https://www.customerization.ca/wp-content/uploads/2024/06/crm-in-logistics-1024x727.webp",
  },
  {
    id: "2",
    title: "Telegram support bot",
    tag: "Bot",
    desc: "Bot that answers FAQ and forwards important tickets to managers.",
    image:
      "https://neiros.ru/images/eac4255f7c37d848ac5cda7737116ab3.png",
  },
  {
    id: "3",
    title: "E-commerce platform",
    tag: "Web",
    desc: "Storefront, cart, payments and admin panel for online sales.",
    image:
      "https://www.spacestem.com/images/platform-ecommerce-uk.webp",
  },
  {
    id: "4",
    title: "API gateway",
    tag: "Backend",
    desc: "Single API layer for mobile, web and partners.",
    image:
      "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2a933717-1d59-46a6-ba51-76e24ae048fc_1280x1502.gif",
  },
  {
    id: "5",
    title: "Kubernetes setup",
    tag: "DevOps",
    desc: "CI/CD, monitoring and autoscaling for production workloads.",
    image:
      "https://shalb.com/wp-content/uploads/2019/11/Devops1.jpeg",
  },
];

type Project = (typeof MOCK_PROJECTS)[number];

export function ProjectsList() {
  const { t } = useApp();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    let rafId: number;
    const speed = 0.8; // pixels per frame

    const step = () => {
      const fullWidth = track.scrollWidth;
      if (!fullWidth) {
        rafId = requestAnimationFrame(step);
        return;
      }
      const singleWidth = fullWidth / 2;
      offset += speed;
      if (offset >= singleWidth) {
        offset = 0;
      }
      track.style.transform = `translateX(${-offset}px)`;
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleOpen = (project: Project) => {
    setSelected(project);
  };

  const handleContact = () => {
    setContactOpen(true);
  };

  return (
    <section id="projects" className="border-t border-[var(--border)] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3 sm:mb-10 sm:gap-4">
          <h2 className="text-xl font-medium tracking-tight text-[var(--fg)] sm:text-2xl md:text-3xl">
            {t.projects.title}
          </h2>
          <Link
            href="/projects"
            className="inline-flex h-9 items-center border border-[var(--border)] px-3 text-xs text-[var(--fg)] transition-colors hover:border-[var(--fg)] hover:bg-[var(--fg)]/5 sm:h-10 sm:px-4 sm:text-sm"
          >
            {t.projects.allProjects}
          </Link>
        </div>

        <div className="projects-strip -mx-4 sm:mx-0">
          <div ref={trackRef} className="projects-track pl-4 sm:pl-0">
            {[...MOCK_PROJECTS, ...MOCK_PROJECTS].map((p, i) => (
              <button
                key={`${p.id}-${i}`}
                type="button"
                onClick={() => handleOpen(p)}
                className="flex min-w-[260px] max-w-[260px] shrink-0 flex-col border border-[var(--border)] bg-[var(--fg)]/5 text-left transition-colors hover:border-[var(--fg)] sm:min-w-[280px] sm:max-w-[280px]"
              >
                <div className="relative aspect-[4/3] w-full border-b border-[var(--border)]" data-rounded>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 260px, 280px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <span className="text-xs uppercase tracking-wider text-[var(--muted)]">{p.tag}</span>
                  <h3 className="text-sm font-medium text-[var(--fg)]">{p.title}</h3>
                  <p className="text-xs text-[var(--muted)] line-clamp-2">{p.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[90] flex items-end justify-center bg-black/70 p-4 sm:items-center">
          <div className="w-full max-w-lg border border-[var(--border)] bg-[var(--bg)] p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between sm:mb-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--muted)]">{selected.tag}</p>
                <h2 className="mt-1 text-base font-medium text-[var(--fg)] sm:text-lg">{selected.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="flex h-8 w-8 shrink-0 items-center justify-center border border-[var(--border)] text-[var(--fg)] hover:border-[var(--fg)]"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <p className="mb-4 text-sm text-[var(--muted)] sm:mb-6">{selected.desc}</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-xs text-[var(--muted)] sm:max-w-xs">
                Кому это нужно: компаниям, которые хотят автоматизировать процессы и убрать ручную
                рутину. Опишите свою задачу — мы подскажем, подходит ли вам такой подход.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelected(null);
                  handleContact();
                }}
                className="w-full border border-[var(--fg)] bg-[var(--fg)] px-4 py-3 text-sm text-[var(--bg)] sm:w-auto sm:py-2"
              >
                Связаться с нами
              </button>
            </div>
          </div>
        </div>
      )}

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}
