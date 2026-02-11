import { aiCallouts } from "@/data/aiCalloutData";
import { AiCallout } from "@/components/AiCallout";
import type { SectionId } from "@/data/sections";
import { Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  sectionId: SectionId;
  open: boolean;
  onClose: () => void;
};

export function AiPanel({ sectionId, open, onClose }: Props) {
  const sectionCallouts = aiCallouts.filter((c) => c.sectionId === sectionId);

  return (
    <>
      {/* Mobile/tablet overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 xl:hidden"
          onClick={onClose}
          aria-hidden
        />
      )}

      <aside
        className={cn(
          "fixed top-14 right-0 z-40 h-[calc(100vh-3.5rem)] w-80 border-l border-stone-200 bg-white transition-transform duration-200 xl:translate-x-0",
          open ? "translate-x-0" : "translate-x-full xl:translate-x-0"
        )}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between border-b border-stone-100 px-4 py-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-callout-heading" />
            <h3 className="text-sm font-semibold text-ink">AI Workflow Tips</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-ink-muted hover:bg-stone-100 hover:text-ink xl:hidden"
            aria-label="Close AI panel"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Callout list */}
        <div className="content-scroll h-[calc(100%-3.25rem)] overflow-y-auto p-4">
          {sectionCallouts.length > 0 ? (
            <div className="space-y-4">
              {sectionCallouts.map((callout) => (
                <AiCallout key={callout.id} callout={callout} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Sparkles className="h-8 w-8 text-stone-300" />
              <p className="mt-3 text-sm text-ink-muted">
                No AI workflow tips for this section yet.
              </p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
