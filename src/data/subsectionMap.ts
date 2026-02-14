import type { SectionId } from "./sections";

export type Subsection = {
  id: string;
  title: string;
};

export const SUBSECTION_MAP: Record<SectionId, Subsection[]> = {
  "web2-vs-web3": [
    { id: "web2-objectives", title: "Web2 Marketing Objectives" },
    { id: "web3-objectives", title: "Web3 Marketing Objectives" },
    { id: "key-differences", title: "Key Differences" },
    { id: "blending", title: "Blending Web2 and Web3" },
  ],
  "content-strategy": [
    { id: "goals", title: "Goals & Objectives" },
    { id: "brand-voice", title: "Brand Voice & Tone" },
    { id: "audience", title: "Audience Definition" },
    { id: "messaging", title: "Product Messaging Matrix" },
    { id: "funnel-map", title: "Content Funnel Map" },
    { id: "pillars", title: "Content Pillars" },
  ],
  "pain-point-seo": [
    { id: "shift", title: "Strategic Shift: Conversions Over Traffic" },
    { id: "tier1", title: "Tier 1: Category Keywords" },
    { id: "tier2", title: "Tier 2: Comparison & Alternative Keywords" },
    { id: "tier3", title: "Tier 3: Jobs-to-Be-Done Keywords" },
    { id: "interview", title: "Customer Interview Method" },
    { id: "competitor", title: "Competitor Keyword Analysis" },
    { id: "workflow", title: "Keyword Research Workflow" },
    { id: "cluster", title: "Topic Cluster Architecture" },
    { id: "measuring", title: "Measuring What Matters" },
    { id: "zerovolume", title: "Zero-Volume Keywords" },
  ],
  "content-production": [
    { id: "brief", title: "Content Brief Development" },
    { id: "creation", title: "Content Creation Process" },
    { id: "optimization", title: "Optimization Principles" },
  ],
  "case-study": [
    { id: "anatomy", title: "Anatomy of a Case Study" },
    { id: "participate", title: "Getting Customers to Participate" },
    { id: "interview", title: "Interview Framework" },
    { id: "template", title: "Case Study Template" },
  ],
  "social-media": [
    { id: "overview", title: "Social Media Playbook Overview" },
    { id: "content-mix", title: "Content Mix %" },
    { id: "schedule", title: "Publishing Schedule" },
    { id: "kol", title: "KOL & Influencer Strategy" },
    { id: "spaces", title: "Twitter Spaces & AMAs" },
    { id: "engagement", title: "Engagement Playbook" },
    { id: "per-stage", title: "Per-Stage Content" },
  ],
  "reddit-strategy": [
    { id: "web3-vs-web2-reddit", title: "Web3 vs Web2 Reddit Strategy" },
    { id: "content-frameworks", title: "Content Frameworks That Work" },
    { id: "subreddit-selection", title: "Strategic Subreddit Selection" },
    { id: "execution-framework", title: "Weekly Execution Framework" },
    { id: "results-metrics", title: "Real Results & Success Metrics" },
    { id: "content-repurposing", title: "Content Repurposing System" },
  ],
  "email-marketing": [
    { id: "context", title: "Email in Context" },
    { id: "onboarding", title: "Onboarding Sequences" },
    { id: "governance", title: "Governance & Protocol Updates" },
    { id: "reengagement", title: "Re-engagement Campaigns" },
    { id: "educational", title: "Educational Drip Campaigns" },
    { id: "segmentation", title: "Segmentation Strategy" },
    { id: "best-practices", title: "Email Best Practices" },
  ],
  "performance-reporting": [
    { id: "dashboard", title: "Metrics Dashboard" },
    { id: "zones", title: "TOFU / MOFU / BOFU Zones" },
    { id: "success-metrics", title: "Success Metrics" },
    { id: "cadence", title: "Reporting Cadence" },
    { id: "attribution", title: "Attribution Models" },
    { id: "tools", title: "Tools & Stack" },
  ],
  "team-collaboration": [
    { id: "flow", title: "How It All Fits Together" },
    { id: "roles", title: "Roles & Responsibilities" },
    { id: "handoff", title: "Handoff Protocols" },
    { id: "review", title: "Content Review Workflow" },
    { id: "checklist", title: "Pre-Publish Checklist" },
    { id: "cadences", title: "Weekly Cadences" },
    { id: "case-social", title: "Case Study to Social Pipeline" },
  ],
};
