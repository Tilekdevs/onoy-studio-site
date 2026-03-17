"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useApp } from "@/lib/providers";
import { ContactModal } from "@/components/ContactModal";
import { withLocalePath } from "@/lib/i18n";

const PROJECTS = [
  {
    id: "1",
    title: "CRM for logistics",
    tag: "CRM",
    desc: "Internal CRM for freight company",
    image: "https://www.customerization.ca/wp-content/uploads/2024/06/crm-in-logistics-1024x727.webp",
  },
  {
    id: "2",
    title: "Telegram support bot",
    tag: "Bot",
    desc: "Support and FAQ automation",
    image: "https://neiros.ru/images/eac4255f7c37d848ac5cda7737116ab3.png",
  },
  {
    id: "3",
    title: "E-commerce platform",
    tag: "Web",
    desc: "Online store with payments",
    image: "https://www.spacestem.com/images/platform-ecommerce-uk.webp",
  },
  {
    id: "4",
    title: "API gateway",
    tag: "Backend",
    desc: "Unified API for mobile and web",
    image: "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2a933717-1d59-46a6-ba51-76e24ae048fc_1280x1502.gif",
  },
  {
    id: "5",
    title: "Kubernetes setup",
    tag: "DevOps",
    desc: "CI/CD and cluster management",
    image: "https://shalb.com/wp-content/uploads/2019/11/Devops1.jpeg",
  },
  {
    id: "6",
    title: "Mobile app",
    tag: "Mobile",
    desc: "Cross-platform React Native app",
    image: "https://itc.com.sa/tech-services/mobile-dev.jpg",
  },
  {
    id: "7",
    title: "Landing for SaaS product",
    tag: "Landing",
    desc: "High-conversion marketing website for B2B SaaS.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "8",
    title: "Admin dashboard",
    tag: "Dashboard",
    desc: "Analytics and management panel for internal operations.",
    image:
      "https://gracethemes.com/wp-content/uploads/2016/09/WordPress-Admin-Dashboard.png",
  },
  {
    id: "9",
    title: "Fintech API integrations",
    tag: "Fintech",
    desc: "Integration with payment gateways and banking APIs.",
    image:
      "https://document360.com/wp-content/uploads/2023/02/Fintech-API.png",
  },
  {
    id: "10",
    title: "Analytics microservices",
    tag: "Microservices",
    desc: "Event-based microservice architecture for real-time metrics.",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*ACehqvfHKn9HKvSON8ivCg.png",
  },
];

export default function ProjectsPage() {
  const { t, locale } = useApp();
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Header />
      <main className="pt-14">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href={withLocalePath(locale, "/")}
            className="mb-8 inline-block text-sm text-[var(--muted)] hover:text-[var(--fg)]"
          >
            {t.projects.back}
          </Link>
          <h1 className="mb-12 text-3xl font-medium tracking-tight sm:text-4xl">
            {t.projects.allProjects}
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setContactOpen(true)}
                className="flex flex-col border border-[var(--border)] bg-[var(--fg)]/5 text-left transition-colors hover:border-[var(--fg)]"
              >
                <div className="relative aspect-[4/3] w-full border-b border-[var(--border)]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
                    {p.tag}
                  </span>
                  <h2 className="text-lg font-medium text-[var(--fg)]">
                    {p.title}
                  </h2>
                  <p className="text-sm text-[var(--muted)]">{p.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

