import { createContext, useContext, useState, type ReactNode } from "react";

export type EcosystemMode = "web3" | "web2" | "both";

type EcosystemContextType = {
  mode: EcosystemMode;
  setMode: (mode: EcosystemMode) => void;
};

const EcosystemContext = createContext<EcosystemContextType>({
  mode: "both",
  setMode: () => {},
});

export function EcosystemProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<EcosystemMode>(() => {
    try {
      const saved = localStorage.getItem("ecosystem-mode");
      if (saved === "web3" || saved === "web2" || saved === "both") return saved;
    } catch {
      /* ignore */
    }
    return "both";
  });

  const handleSetMode = (newMode: EcosystemMode) => {
    setMode(newMode);
    try {
      localStorage.setItem("ecosystem-mode", newMode);
    } catch {
      /* ignore */
    }
  };

  return (
    <EcosystemContext.Provider value={{ mode, setMode: handleSetMode }}>
      {children}
    </EcosystemContext.Provider>
  );
}

export function useEcosystem() {
  return useContext(EcosystemContext);
}
