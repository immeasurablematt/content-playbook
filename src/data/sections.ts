export const SECTIONS = [
  { id: "content-strategy", title: "Content Strategy", number: 1 },
  { id: "pain-point-seo", title: "Pain Point SEO", number: 2 },
  { id: "content-production", title: "Content Production System", number: 3 },
  { id: "case-study", title: "Case Study Development", number: 4 },
  { id: "social-media", title: "Social Media Playbook", number: 5 },
  { id: "team-collaboration", title: "Team Collaboration Patterns", number: 6 },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
