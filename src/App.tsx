import { useEffect, useState } from "react";
import type { SectionId } from "@/data/sections";
import { SectionWeb2Web3Content } from "@/sections/SectionWeb2Web3";
import { Section1Content } from "@/sections/Section1";
import { Section2Content } from "@/sections/Section2";
import { Section3Content } from "@/sections/Section3";
import { Section4Content } from "@/sections/Section4";
import { Section5Content } from "@/sections/Section5";
import { Section7Content } from "@/sections/Section7";
import { SectionEmailContent } from "@/sections/SectionEmail";
import { SectionReportingContent } from "@/sections/SectionReporting";
import { Section8Content } from "@/sections/Section8";
import { EcosystemProvider } from "@/context/EcosystemContext";
import { ThreePaneLayout } from "@/components/layout/ThreePaneLayout";
import type { ComponentType } from "react";

const SECTION_COMPONENTS: Record<SectionId, ComponentType> = {
  "web2-vs-web3": SectionWeb2Web3Content,
  "content-strategy": Section1Content,
  "pain-point-seo": Section2Content,
  "content-production": Section3Content,
  "case-study": Section4Content,
  "social-media": Section5Content,
  "reddit-strategy": Section7Content,
  "email-marketing": SectionEmailContent,
  "performance-reporting": SectionReportingContent,
  "team-collaboration": Section8Content,
};

export default function App() {
  const [gateChecked, setGateChecked] = useState(false);

  useEffect(() => {
    fetch("/api/check", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        setGateChecked(true);
        if (!data.ok) window.location.href = "/unlock";
      })
      .catch(() => setGateChecked(true));
  }, []);

  if (!gateChecked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-warm-bg">
        <p className="text-sm text-ink-muted">Loading...</p>
      </div>
    );
  }

  return (
    <EcosystemProvider>
      <ThreePaneLayout sectionComponents={SECTION_COMPONENTS} />
    </EcosystemProvider>
  );
}
