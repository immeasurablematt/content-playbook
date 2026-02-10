import { useEcosystem } from "@/context/EcosystemContext";

export function Web2Content({ children }: { children: React.ReactNode }) {
  const { mode } = useEcosystem();

  if (mode === "web3") return null;

  return <>{children}</>;
}
