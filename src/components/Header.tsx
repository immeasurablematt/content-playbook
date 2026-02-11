import { useEcosystem, type EcosystemMode } from "@/context/EcosystemContext";
import { Search, Menu } from "lucide-react";

const TOGGLE_OPTIONS: { value: EcosystemMode; label: string }[] = [
  { value: "web3", label: "Web3" },
  { value: "both", label: "Both" },
  { value: "web2", label: "Web2" },
];

type Props = {
  onToggleSidebar: () => void;
  onOpenSearch: () => void;
};

export function Header({ onToggleSidebar, onOpenSearch }: Props) {
  const { mode, setMode } = useEcosystem();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center border-b border-stone-200 bg-white/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      {/* Mobile hamburger */}
      <button
        type="button"
        onClick={onToggleSidebar}
        className="mr-3 rounded-md p-1.5 text-ink-muted transition-colors hover:bg-stone-100 hover:text-ink lg:hidden"
        aria-label="Toggle sidebar"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Title */}
      <div className="flex items-baseline gap-2">
        <span className="font-serif text-lg font-semibold text-ink">
          Content Playbook
        </span>
        <span className="hidden text-xs text-ink-muted sm:inline">
          Matthew Baggetta
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Ecosystem toggle - compact */}
      <div className="mr-3 inline-flex rounded-md bg-stone-100 p-0.5">
        {TOGGLE_OPTIONS.map(({ value, label }) => {
          const isActive = mode === value;
          let activeClasses = "";
          if (isActive && value === "web3")
            activeClasses = "bg-web3 text-white shadow-sm";
          else if (isActive && value === "both")
            activeClasses = "bg-stone-800 text-white shadow-sm";
          else if (isActive && value === "web2")
            activeClasses = "bg-web2 text-white shadow-sm";

          return (
            <button
              key={value}
              onClick={() => setMode(value)}
              className={`rounded px-3 py-1 text-xs font-semibold transition-all ${
                isActive ? activeClasses : "text-ink-muted hover:text-ink"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Search trigger */}
      <button
        type="button"
        onClick={onOpenSearch}
        className="flex items-center gap-2 rounded-md border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs text-ink-muted transition-colors hover:border-stone-300 hover:bg-stone-100"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Search...</span>
        <kbd className="hidden rounded bg-stone-200 px-1.5 py-0.5 font-mono text-[10px] font-medium text-ink-muted sm:inline">
          {navigator.platform?.includes("Mac") ? "\u2318K" : "Ctrl+K"}
        </kbd>
      </button>
    </header>
  );
}
