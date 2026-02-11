export const SECTIONS = [
  { id: "web2-vs-web3", title: "Web2 vs Web3 Marketing", number: 1 },
  { id: "content-strategy", title: "Content Strategy", number: 2 },
  { id: "pain-point-seo", title: "Pain Point SEO", number: 3 },
  { id: "content-production", title: "Content Production System", number: 4 },
  { id: "case-study", title: "Case Study Development", number: 5 },
  { id: "social-media", title: "Social Media Playbook", number: 6 },
  { id: "email-marketing", title: "Email Marketing Framework", number: 7 },
  { id: "performance-reporting", title: "Performance Reporting & Analytics", number: 8 },
  { id: "team-collaboration", title: "Team Collaboration Patterns", number: 9 },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

export const SECTION_COLORS: Record<number, string> = {
  1: "bg-violet-500",
  2: "bg-teal-600",
  3: "bg-emerald-600",
  4: "bg-blue-600",
  5: "bg-amber-600",
  6: "bg-rose-600",
  7: "bg-orange-600",
  8: "bg-cyan-600",
  9: "bg-indigo-600",
};

export const SECTION_BORDER_COLORS: Record<number, string> = {
  1: "border-violet-500",
  2: "border-teal-600",
  3: "border-emerald-600",
  4: "border-blue-600",
  5: "border-amber-600",
  6: "border-rose-600",
  7: "border-orange-600",
  8: "border-cyan-600",
  9: "border-indigo-600",
};

export const SECTION_TEXT_COLORS: Record<number, string> = {
  1: "text-violet-500",
  2: "text-teal-600",
  3: "text-emerald-600",
  4: "text-blue-600",
  5: "text-amber-600",
  6: "text-rose-600",
  7: "text-orange-600",
  8: "text-cyan-600",
  9: "text-indigo-600",
};
