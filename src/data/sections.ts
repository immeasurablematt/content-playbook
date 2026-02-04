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
