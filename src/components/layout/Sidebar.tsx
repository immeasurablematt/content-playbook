import { SECTIONS, SECTION_TEXT_COLORS, type SectionId } from "@/data/sections";
import { SUBSECTION_MAP } from "@/data/subsectionMap";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

type Props = {
  activeSectionId: SectionId;
  activeSubsectionId: string | null;
  onNavigate: (sectionId: SectionId, subsectionId?: string) => void;
  open: boolean;
  onClose: () => void;
};

export function Sidebar({
  activeSectionId,
  activeSubsectionId,
  onNavigate,
  open,
  onClose,
}: Props) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
          aria-hidden
        />
      )}

      <aside
        className={cn(
          "fixed top-14 left-0 z-40 flex h-[calc(100vh-3.5rem)] w-80 flex-col bg-sidebar-bg transition-transform duration-200 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="sidebar-scroll flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-0.5">
            {SECTIONS.map(({ id, title, number }) => {
              const isActive = activeSectionId === id;
              const subsections = SUBSECTION_MAP[id] || [];
              const textColorClass = SECTION_TEXT_COLORS[number] || "text-teal-400";

              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate(id);
                      if (window.innerWidth < 1024) onClose();
                    }}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors",
                      isActive
                        ? "bg-sidebar-hover text-sidebar-active font-medium"
                        : "text-sidebar-text hover:bg-sidebar-hover hover:text-white"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-bold",
                        isActive
                          ? `${textColorClass} bg-white/10`
                          : "text-sidebar-muted bg-white/5"
                      )}
                    >
                      {number}
                    </span>
                    <span>{title}</span>
                    {subsections.length > 0 && (
                      <ChevronRight
                        className={cn(
                          "ml-auto h-3.5 w-3.5 shrink-0 transition-transform",
                          isActive ? "rotate-90 text-sidebar-active" : "text-sidebar-muted"
                        )}
                      />
                    )}
                  </button>

                  {/* Subsection list (only for active section) */}
                  {isActive && subsections.length > 0 && (
                    <ul className="ml-7 mt-1 space-y-0.5 border-l border-white/10 pl-3">
                      {subsections.map((sub) => (
                        <li key={sub.id}>
                          <button
                            type="button"
                            onClick={() => {
                              onNavigate(id, sub.id);
                              if (window.innerWidth < 1024) onClose();
                            }}
                            className={cn(
                              "w-full rounded px-2 py-1 text-left text-xs transition-colors",
                              activeSubsectionId === sub.id
                                ? "text-sidebar-active font-medium"
                                : "text-sidebar-muted hover:text-sidebar-text"
                            )}
                          >
                            {sub.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 px-4 py-3">
          <p className="text-[10px] uppercase tracking-widest text-sidebar-muted">
            Content Playbook v2
          </p>
        </div>
      </aside>
    </>
  );
}
