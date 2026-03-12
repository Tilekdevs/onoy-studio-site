import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectTypes } from "@/components/ProjectTypes";
import { ProjectsList } from "@/components/ProjectsList";
import { Specialists } from "@/components/Specialists";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProjectTypes />
        <ProjectsList />
        <Specialists />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
