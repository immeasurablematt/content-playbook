import { useState, useCallback, type ComponentType } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { ContentPane } from "@/components/layout/ContentPane";
import { AiPanel } from "@/components/layout/AiPanel";
import { CommandPalette } from "@/components/CommandPalette";
import { useHashNavigation } from "@/hooks/useHashNavigation";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcuts";
import type { SectionId } from "@/data/sections";

type Props = {
  sectionComponents: Record<SectionId, ComponentType>;
};

export function ThreePaneLayout({ sectionComponents }: Props) {
  const { sectionId, subsectionId, navigate, navigateToSection } =
    useHashNavigation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aiPanelOpen, setAiPanelOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSidebar = useCallback(() => setSidebarOpen((o) => !o), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const closeAiPanel = useCallback(() => setAiPanelOpen(false), []);
  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  // Cmd+K to open search
  useKeyboardShortcut("k", openSearch, { meta: true });

  const handleNavigate = useCallback(
    (sid: SectionId, subId?: string) => {
      if (subId) {
        navigate(sid, subId);
      } else {
        navigateToSection(sid);
      }
    },
    [navigate, navigateToSection]
  );

  const SectionContent = sectionComponents[sectionId];

  return (
    <div className="min-h-screen bg-warm-bg">
      <Header
        onToggleSidebar={toggleSidebar}
        onOpenSearch={openSearch}
      />

      <Sidebar
        activeSectionId={sectionId}
        activeSubsectionId={subsectionId}
        onNavigate={handleNavigate}
        open={sidebarOpen}
        onClose={closeSidebar}
      />

      {/* Main grid: sidebar gutter + content + AI panel gutter */}
      <div className="pt-14 lg:pl-80 xl:pr-80">
        <ContentPane
          sectionId={sectionId}
          subsectionId={subsectionId}
          sectionComponent={SectionContent}
        />
      </div>

      <AiPanel
        sectionId={sectionId}
        open={aiPanelOpen}
        onClose={closeAiPanel}
      />

      {/* Mobile AI panel toggle */}
      <button
        type="button"
        onClick={() => setAiPanelOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-callout-border text-white shadow-lg xl:hidden"
        aria-label="Toggle AI tips"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3l1.912 5.813h6.088l-4.912 3.587 1.912 5.813L12 14.626l-4.912 3.587 1.912-5.813L4 8.813h6.088z" />
        </svg>
      </button>

      <CommandPalette
        open={searchOpen}
        onClose={closeSearch}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
