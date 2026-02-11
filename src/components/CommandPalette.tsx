import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { SECTIONS, SECTION_TEXT_COLORS, type SectionId } from "@/data/sections";
import { SUBSECTION_MAP } from "@/data/subsectionMap";
import { aiCallouts } from "@/data/aiCalloutData";
import { Search, FileText, Hash, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type SearchResult = {
  id: string;
  type: "section" | "subsection" | "callout";
  label: string;
  description?: string;
  sectionId: SectionId;
  subsectionId?: string;
  icon: typeof FileText;
  colorClass: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onNavigate: (sectionId: SectionId, subsectionId?: string) => void;
};

function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  for (const section of SECTIONS) {
    const colorClass = SECTION_TEXT_COLORS[section.number] || "text-teal-600";

    results.push({
      id: `section-${section.id}`,
      type: "section",
      label: section.title,
      description: `Section ${section.number}`,
      sectionId: section.id,
      icon: FileText,
      colorClass,
    });

    const subsections = SUBSECTION_MAP[section.id] || [];
    for (const sub of subsections) {
      results.push({
        id: `sub-${section.id}-${sub.id}`,
        type: "subsection",
        label: sub.title,
        description: section.title,
        sectionId: section.id,
        subsectionId: sub.id,
        icon: Hash,
        colorClass,
      });
    }
  }

  for (const callout of aiCallouts) {
    const section = SECTIONS.find((s) => s.id === callout.sectionId);
    const colorClass = section
      ? SECTION_TEXT_COLORS[section.number] || "text-teal-600"
      : "text-teal-600";

    results.push({
      id: `callout-${callout.id}`,
      type: "callout",
      label: callout.title,
      description: section?.title,
      sectionId: callout.sectionId,
      subsectionId: callout.subsectionId,
      icon: Sparkles,
      colorClass,
    });
  }

  return results;
}

export function CommandPalette({ open, onClose, onNavigate }: Props) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const searchIndex = useMemo(() => buildSearchIndex(), []);

  const filtered = useMemo(() => {
    if (!query.trim()) return searchIndex.slice(0, 15);
    const lower = query.toLowerCase();
    return searchIndex
      .filter(
        (r) =>
          r.label.toLowerCase().includes(lower) ||
          r.description?.toLowerCase().includes(lower)
      )
      .slice(0, 15);
  }, [query, searchIndex]);

  // Reset when opening
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  // Reset index when filtered results change
  useEffect(() => {
    setActiveIndex(0);
  }, [filtered]);

  // Scroll active item into view
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const active = list.children[activeIndex] as HTMLElement | undefined;
    if (active) {
      active.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  const select = useCallback(
    (result: SearchResult) => {
      onNavigate(result.sectionId, result.subsectionId);
      onClose();
    },
    [onNavigate, onClose]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && filtered[activeIndex]) {
        e.preventDefault();
        select(filtered[activeIndex]);
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [filtered, activeIndex, select, onClose]
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* Dialog */}
      <div className="relative w-full max-w-lg rounded-xl border border-stone-200 bg-white shadow-2xl animate-fade-in">
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-stone-100 px-4 py-3">
          <Search className="h-5 w-5 shrink-0 text-ink-muted" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search sections, subsections, AI tips..."
            className="flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink-subtle"
          />
          <kbd className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-[10px] text-ink-muted">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-72 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-ink-muted">
              No results found for "{query}"
            </div>
          ) : (
            filtered.map((result, i) => {
              const Icon = result.icon;
              return (
                <button
                  key={result.id}
                  type="button"
                  onClick={() => select(result)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                    i === activeIndex ? "bg-stone-100" : "hover:bg-stone-50"
                  )}
                >
                  <Icon className={cn("h-4 w-4 shrink-0", result.colorClass)} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-ink">
                      {result.label}
                    </p>
                    {result.description && (
                      <p className="truncate text-xs text-ink-muted">
                        {result.description}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 rounded bg-stone-100 px-1.5 py-0.5 text-[10px] font-medium uppercase text-ink-muted">
                    {result.type === "section"
                      ? "Section"
                      : result.type === "subsection"
                      ? "Sub"
                      : "AI Tip"}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer hint */}
        <div className="flex items-center gap-4 border-t border-stone-100 px-4 py-2 text-[10px] text-ink-subtle">
          <span>
            <kbd className="rounded bg-stone-100 px-1 font-mono">
              &#8593;&#8595;
            </kbd>{" "}
            navigate
          </span>
          <span>
            <kbd className="rounded bg-stone-100 px-1 font-mono">
              &#8629;
            </kbd>{" "}
            open
          </span>
          <span>
            <kbd className="rounded bg-stone-100 px-1 font-mono">esc</kbd>{" "}
            close
          </span>
        </div>
      </div>
    </div>
  );
}
