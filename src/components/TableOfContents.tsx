import { SECTIONS, type SectionId } from "@/data/sections";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

type Props = {
  activeId: SectionId | null;
  onNavigate: (id: SectionId) => void;
};

export function TableOfContents({ activeId, onNavigate }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      {/* Mobile toggle (hidden on desktop where TOC is always visible) */}
      <button
        type="button"
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-lg md:hidden"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open table of contents"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Overlay on mobile when open */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* TOC panel: floating sidebar on desktop, slide-in on mobile */}
      <nav
        className={cn(
          "fixed top-24 z-40 w-56 transition-transform duration-200 md:top-28 md:right-8 md:translate-x-0",
          open ? "right-6 translate-x-0" : "right-6 translate-x-[calc(100%+4rem)] md:translate-x-0"
        )}
        aria-label="Table of contents"
      >
        <div className="rounded-lg border border-stone-200 bg-white/95 p-4 shadow-sm backdrop-blur">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-muted">
            On this page
          </p>
          <ul className="space-y-0.5">
            {SECTIONS.map(({ id, title, number }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => {
                    onNavigate(id);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full rounded px-2 py-1.5 text-left text-sm transition-colors",
                    activeId === id
                      ? "bg-accent-subtle font-medium text-accent"
                      : "text-ink-muted hover:bg-stone-100 hover:text-ink"
                  )}
                >
                  <span className="text-ink-muted">{number}.</span> {title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
