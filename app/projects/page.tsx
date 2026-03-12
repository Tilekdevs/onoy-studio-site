import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PROJECTS = [
  { id: "1", title: "CRM for logistics", tag: "CRM", desc: "Internal CRM for freight company" },
  { id: "2", title: "Telegram support bot", tag: "Bot", desc: "Support and FAQ automation" },
  { id: "3", title: "E-commerce platform", tag: "Web", desc: "Online store with payments" },
  { id: "4", title: "API gateway", tag: "Backend", desc: "Unified API for mobile and web" },
  { id: "5", title: "Kubernetes setup", tag: "DevOps", desc: "CI/CD and cluster management" },
  { id: "6", title: "Mobile app", tag: "Mobile", desc: "Cross-platform React Native app" },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Header />
      <main className="pt-14">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-block text-sm text-[var(--muted)] hover:text-[var(--fg)]"
          >
            ← Back
          </Link>
          <h1 className="mb-12 text-3xl font-medium tracking-tight sm:text-4xl">
            All projects
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className="flex flex-col border border-[var(--border)] bg-[var(--fg)]/5 transition-colors hover:border-[var(--fg)]"
              >
                <div
                  className="aspect-[4/3] w-full border-b border-[var(--border)] bg-[var(--fg)]/10"
                  data-rounded
                />
                <div className="flex flex-col gap-2 p-4">
                  <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
                    {p.tag}
                  </span>
                  <h2 className="text-lg font-medium text-[var(--fg)]">{p.title}</h2>
                  <p className="text-sm text-[var(--muted)]">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
