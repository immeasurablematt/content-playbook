import { useEcosystem } from "@/context/EcosystemContext";

export function Web2Callout({ children }: { children: React.ReactNode }) {
  const { mode } = useEcosystem();

  // Hide in web3-only mode
  if (mode === "web3") return null;

  // In web2 mode, render inline without the callout box
  if (mode === "web2") {
    return <div className="my-4">{children}</div>;
  }

  // In "both" mode, keep the original blue callout styling
  return (
    <div className="my-4 rounded-lg border border-blue-200 bg-blue-50 p-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
        Web2 Equivalent
      </p>
      <div className="text-sm text-blue-900">{children}</div>
    </div>
  );
}
