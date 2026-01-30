import { useEffect, useRef, useState } from "react";
import { TableOfContents } from "@/components/TableOfContents";
import { SECTIONS, type SectionId } from "@/data/sections";
import { Section1Content } from "@/sections/Section1";
import { Section2Content } from "@/sections/Section2";
import { Section3Content } from "@/sections/Section3";
import { Section4Content } from "@/sections/Section4";
import { Section5Content } from "@/sections/Section5";
import { Section8Content } from "@/sections/Section8";
import { ChevronDown } from "lucide-react";

const SECTION_COMPONENTS = [
  Section1Content,
  Section2Content,
  Section3Content,
  Section4Content,
  Section5Content,
  Section8Content,
] as const;

function Hero() {
  return (
    <header className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center md:pt-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-6xl">
          Content Marketing Playbook & Strategy
        </h1>
        <p className="mt-4 text-xl text-ink-muted md:text-2xl">Matthew Baggetta</p>
        <p className="mt-6 max-w-xl mx-auto text-sm text-ink-muted leading-relaxed">
          Everything below was developed over 10+ years working in-house and as a consultant, doing content for Web2 tech SaaS and Web3 companies.
        </p>
        <div className="mt-12 flex justify-center">
          <a
            href={`#${SECTIONS[0].id}`}
            className="flex flex-col items-center gap-1 text-ink-muted transition-colors hover:text-ink"
            aria-label="Scroll to content"
          >
            <span className="text-sm">Explore</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-200 py-12">
      <div className="mx-auto max-w-3xl px-6 text-center text-sm text-ink-muted">
        <p>Content Marketing Playbook & Strategy</p>
        <p className="mt-1">Matthew Baggetta</p>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeId, setActiveId] = useState<SectionId | null>(null);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const [gateChecked, setGateChecked] = useState(false);

  useEffect(() => {
    fetch("/api/check", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        setGateChecked(true);
        if (!data.ok) window.location.href = "/unlock";
      })
      .catch(() => setGateChecked(true));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionId;
            if (SECTIONS.some((s) => s.id === id)) setActiveId(id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(id, el);
  };

  const scrollToSection = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!gateChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <p className="text-sm text-ink-muted">Loading…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <main className="relative">
        <div className="mx-auto max-w-3xl px-6 md:max-w-4xl lg:max-w-5xl">
          <div className="lg:mr-64">
            {SECTIONS.map(({ id, title, number }, i) => {
              const Content = SECTION_COMPONENTS[i];
              return (
                <section
                  key={id}
                  id={id}
                  ref={setRef(id)}
                  className="scroll-mt-28 border-t border-stone-200 py-16 md:py-20"
                >
                  <div className="mx-auto max-w-3xl px-0">
                    <span className="text-sm font-medium uppercase tracking-wider text-accent">
                      Section {number}
                    </span>
                    <h2 className="mt-2 font-serif text-3xl font-semibold text-ink md:text-4xl">
                      {title}
                    </h2>
                    <div className="mt-8 prose prose-stone max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-ink/90 prose-li:text-ink/90 prose-strong:text-ink prose-table:text-sm">
                      <Content />
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
        <TableOfContents activeId={activeId} onNavigate={scrollToSection} />
      </main>
      <Footer />
    </div>
  );
}
