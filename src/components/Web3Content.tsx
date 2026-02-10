import { useEcosystem } from "@/context/EcosystemContext";

export function Web3Content({ children }: { children: React.ReactNode }) {
  const { mode } = useEcosystem();

  if (mode === "web2") return null;

  return <>{children}</>;
}
