import { useEcosystem, type EcosystemMode } from "@/context/EcosystemContext";

const OPTIONS: { value: EcosystemMode; label: string }[] = [
  { value: "web3", label: "Web3" },
  { value: "both", label: "Both" },
  { value: "web2", label: "Web2" },
];

export function EcosystemToggle() {
  const { mode, setMode } = useEcosystem();

  return (
    <div className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/95 backdrop-blur supports-[backdrop-filter]:bg-stone-50/80">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        <span className="text-xs font-medium uppercase tracking-wider text-ink-muted">
          Viewing
        </span>
        <div className="inline-flex rounded-lg bg-stone-200/60 p-0.5">
          {OPTIONS.map(({ value, label }) => {
            const isActive = mode === value;
            let activeClasses = "";
            if (isActive && value === "web3")
              activeClasses = "bg-purple-600 text-white shadow-sm";
            else if (isActive && value === "both")
              activeClasses = "bg-stone-800 text-white shadow-sm";
            else if (isActive && value === "web2")
              activeClasses = "bg-blue-600 text-white shadow-sm";

            return (
              <button
                key={value}
                onClick={() => setMode(value)}
                className={`rounded-md px-4 py-1.5 text-xs font-semibold transition-all ${
                  isActive
                    ? activeClasses
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
