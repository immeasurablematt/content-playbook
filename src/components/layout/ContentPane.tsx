import { useEffect, useRef } from "react";
import {
  SECTIONS,
  SECTION_BORDER_COLORS,
  SECTION_TEXT_COLORS,
  type SectionId,
} from "@/data/sections";
import type { ComponentType } from "react";

type Props = {
  sectionId: SectionId;
  subsectionId: string | null;
  sectionComponent: ComponentType;
};

export function ContentPane({ sectionId, subsectionId, sectionComponent: Content }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const section = SECTIONS.find((s) => s.id === sectionId);
  const borderColor = SECTION_BORDER_COLORS[section?.number ?? 1] || "border-teal-600";
  const textColor = SECTION_TEXT_COLORS[section?.number ?? 1] || "text-teal-600";

  // Scroll to subsection on hash change
  useEffect(() => {
    if (subsectionId) {
      const el = document.getElementById(subsectionId);
      if (el) {
        // Small delay to let content render
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    } else if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [subsectionId, sectionId]);

  return (
    <main
      ref={containerRef}
      className="content-scroll h-[calc(100vh-3.5rem)] overflow-y-auto bg-warm-bg"
    >
      <div className="mx-auto max-w-3xl px-6 py-10 lg:px-10">
        {/* Section header */}
        <div className={`border-l-4 ${borderColor} pl-4`}>
          <span className={`text-xs font-semibold uppercase tracking-wider ${textColor}`}>
            Section {section?.number}
          </span>
          <h2 className="mt-1 font-serif text-3xl font-semibold text-ink md:text-4xl">
            {section?.title}
          </h2>
        </div>

        {/* Section content */}
        <div className="mt-10 prose prose-stone max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-ink/90 prose-li:text-ink/90 prose-strong:text-ink prose-table:text-sm">
          <Content />
        </div>
      </div>
    </main>
  );
}
