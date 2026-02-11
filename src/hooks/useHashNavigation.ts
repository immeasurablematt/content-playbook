import { useState, useEffect, useCallback } from "react";
import { SECTIONS, type SectionId } from "@/data/sections";

type HashState = {
  sectionId: SectionId;
  subsectionId: string | null;
};

function parseHash(hash: string): HashState {
  const raw = hash.replace(/^#/, "");
  if (!raw) {
    return { sectionId: SECTIONS[0].id, subsectionId: null };
  }

  const parts = raw.split("/");
  const sectionId = parts[0] as SectionId;
  const subsectionId = parts[1] || null;

  const validSection = SECTIONS.find((s) => s.id === sectionId);
  if (!validSection) {
    return { sectionId: SECTIONS[0].id, subsectionId: null };
  }

  return { sectionId, subsectionId };
}

export function useHashNavigation() {
  const [state, setState] = useState<HashState>(() =>
    parseHash(window.location.hash)
  );

  useEffect(() => {
    const handler = () => {
      setState(parseHash(window.location.hash));
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = useCallback((sectionId: SectionId, subsectionId?: string) => {
    const hash = subsectionId ? `${sectionId}/${subsectionId}` : sectionId;
    window.location.hash = hash;
  }, []);

  const navigateToSection = useCallback((sectionId: SectionId) => {
    window.location.hash = sectionId;
  }, []);

  return {
    sectionId: state.sectionId,
    subsectionId: state.subsectionId,
    navigate,
    navigateToSection,
  };
}
