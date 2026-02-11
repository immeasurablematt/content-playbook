import type { SectionId } from "./sections";

export type AiCalloutTool = {
  name: string;
  detail: string;
};

export type AiCalloutEntry = {
  id: string;
  sectionId: SectionId;
  subsectionId: string;
  title: string;
  tip: string;
  tools: AiCalloutTool[];
};

export const aiCallouts: AiCalloutEntry[] = [
  {
    id: "callout-001-brand-voice",
    sectionId: "content-strategy",
    subsectionId: "brand-voice",
    title: "Save 3 hours: Extract your brand voice profile from existing content",
    tip: "Feed 10-15 of your best-performing posts, emails, or articles into Claude as context. Prompt it to extract voice characteristics, tone patterns, do's and don'ts, and a voice scale (e.g. 'If corporate is 1 and Deadpool is 10, you're a 6'). Use the output as your living brand voice doc that every future prompt references.",
    tools: [
      {
        name: "Claude Opus 4.5",
        detail: "Complex pattern recognition across content samples"
      },
      {
        name: "Claude Projects",
        detail: "Upload your top 15 content pieces as project knowledge so every conversation writes in your voice"
      },
      {
        name: "Firecrawl MCP",
        detail: "Scrape your own published blog posts and landing pages to feed as input"
      }
    ]
  },
  {
    id: "callout-002-audience",
    sectionId: "content-strategy",
    subsectionId: "audience",
    title: "Save 4 hours: Extract real customer language at scale",
    tip: "Instead of guessing how your audience talks about their problems, scrape the places they actually talk: Reddit threads, Discord channels, G2/Capterra reviews, Twitter replies, forum posts. AI extracts the exact phrases, pain points, and language patterns your audience uses, then clusters them by theme. Use these verbatim phrases in your messaging, headlines, and CTAs.",
    tools: [
      {
        name: "Firecrawl MCP in Claude Desktop",
        detail: "Scrape competitor review pages, Reddit threads, and forum discussions in real time"
      },
      {
        name: "Perplexity",
        detail: "Deep research on '[your category] complaints' with cited sources"
      },
      {
        name: "Claude Sonnet 4.5",
        detail: "Process and cluster extracted language into pain point categories"
      },
      {
        name: "DataForSEO MCP",
        detail: "Cross-reference extracted language against actual search volumes"
      }
    ]
  },
  {
    id: "callout-003-messaging",
    sectionId: "content-strategy",
    subsectionId: "messaging",
    title: "Save 2 hours: Generate messaging matrix draft variations",
    tip: "Once you have your audience language and brand voice, AI can generate 3-5 variations of your messaging matrix (pain, capability, vision of use) for each audience segment. You pick the winners. The key: feed it real customer language from the audience extraction step, not generic descriptions. AI drafts; your 10 years of experience picks the 2-3 that actually resonate.",
    tools: [
      {
        name: "Claude Opus 4.5",
        detail: "With your brand voice profile and customer language doc loaded as project knowledge"
      },
      {
        name: "Prompt structure",
        detail: "For [audience segment], generate 3 messaging variations using this framework: Pain, Capability, Vision of Use"
      }
    ]
  },
  {
    id: "callout-004-competitor",
    sectionId: "pain-point-seo",
    subsectionId: "competitor",
    title: "Save 7 hours: AI-powered competitor keyword gap analysis",
    tip: "Instead of manually auditing 10+ competitor sites, use AI to scrape their content, extract their keyword targets, map their positioning, and cross-reference against your backlog in under an hour. AI surfaces the gaps; you decide which ones are worth pursuing based on your tier classification.",
    tools: [
      {
        name: "DataForSEO MCP",
        detail: "Pull ranked keywords for each competitor domain directly in Claude (ranked_keywords, domain_intersection, competitors_domain)"
      },
      {
        name: "Firecrawl MCP",
        detail: "Scrape competitor landing pages and blog posts to extract positioning angles"
      },
      {
        name: "Claude Sonnet 4.5",
        detail: "Synthesize into a gap analysis, cluster by tier, prioritize by Pain Point Score"
      },
      {
        name: "Perplexity",
        detail: "Research competitor product updates and new features"
      }
    ]
  },
  {
    id: "callout-005-workflow",
    sectionId: "pain-point-seo",
    subsectionId: "workflow",
    title: "Save 60 minutes: Auto-generate content briefs from keyword data",
    tip: "Once you've classified a keyword into a tier, AI can generate a complete content brief using your Pain Point SEO template. Feed it the keyword, tier, search intent analysis, and your messaging matrix. It outputs a full brief with CTA strategy, proof element requirements, outline, and internal linking suggestions. You review and refine, not build from scratch.",
    tools: [
      {
        name: "Claude Projects",
        detail: "Upload the Pain Point SEO Content Brief Template as project knowledge so every brief follows your exact format"
      },
      {
        name: "DataForSEO MCP",
        detail: "Pull search volume, KD, CPC, and SERP features for the target keyword in real time"
      },
      {
        name: "Claude Sonnet 4.5",
        detail: "Generate the brief with search intent analysis and conversion strategy"
      }
    ]
  },
  {
    id: "callout-006-cluster",
    sectionId: "pain-point-seo",
    subsectionId: "cluster",
    title: "Save 3 hours: Build content cluster maps with AI research",
    tip: "AI can generate 100+ keyword ideas per topic cluster, cross-reference them against competitor rankings, classify by tier, and map internal linking relationships between pieces. The cluster map becomes your 3-6 month editorial roadmap. AI handles the volume; you validate the strategic phasing.",
    tools: [
      {
        name: "DataForSEO MCP",
        detail: "keyword_ideas, keyword_suggestions, related_keywords endpoints to generate and expand clusters"
      },
      {
        name: "Claude Opus 4.5",
        detail: "Classify each keyword by tier, map relationships, suggest internal linking structure and publishing sequence"
      }
    ]
  },
  {
    id: "callout-007-brief",
    sectionId: "content-production",
    subsectionId: "brief",
    title: "Save 60 minutes: Generate conversion-optimized brief drafts",
    tip: "With your keyword selected and tier classified, AI generates a full brief following your exact template. It pre-fills search intent analysis, suggests CTA placement based on tier (aggressive for Tier 1/2, balanced for Tier 3), recommends proof elements from your case study library, and creates an outline. You spend your time refining strategy, not filling in templates.",
    tools: [
      {
        name: "Claude Projects",
        detail: "Pain Point SEO brief template as project knowledge"
      },
      {
        name: "Upload your proof asset library",
        detail: "Case study summaries, key metrics, customer quotes so Claude can suggest specific proof elements"
      },
      {
        name: "DataForSEO MCP",
        detail: "serp_organic_live_advanced to analyze current SERP and identify content gaps"
      }
    ]
  },
  {
    id: "callout-008-creation",
    sectionId: "content-production",
    subsectionId: "creation",
    title: "Save 90 minutes: Draft and iterate with expert review agents",
    tip: "AI generates 2-3 outline variations and a full first draft from your complete brief. Then, instead of one round of 'does this look good?', spin up 3 expert review agents that each review independently: an SEO Specialist checks keyword integration and structure, a Conversion Expert evaluates CTA placement and proof usage, and an Industry Buyer tests whether it would actually influence their decision. Where all 3 agree, you have signal. Where they disagree, you have a decision to make.",
    tools: [
      {
        name: "Claude Sonnet 4.5",
        detail: "First draft generation (speed over depth)"
      },
      {
        name: "Claude Opus 4.5",
        detail: "Expert review agents (quality of analysis matters)"
      },
      {
        name: "OpenClaw / Claude Projects",
        detail: "Save each agent as a reusable configuration (SEO-Reviewer, CRO-Reviewer, Buyer-Reviewer)"
      },
      {
        name: "AI Ping Pong",
        detail: "Draft in Claude, review in Gemini, refine in Claude, fact-check in Perplexity"
      }
    ]
  },
  {
    id: "callout-009-optimization",
    sectionId: "content-production",
    subsectionId: "optimization",
    title: "Save 30 minutes: Automated quality gates before publish",
    tip: "Before any content goes live, run it through an AI quality gate that checks for AI tells (delve, landscape, leverage, paradigm, synergy), fact-verifies claims, validates CTA placement against the brief, confirms proof elements are present, and flags anything that reads generic. This is the last pass before human final review, not a replacement for it.",
    tools: [
      {
        name: "Claude Sonnet 4.5",
        detail: "Quality gate checklist as system prompt"
      },
      {
        name: "Perplexity",
        detail: "Fact-check any statistical claims, competitor comparisons, or market data"
      },
      {
        name: "Prompt template",
        detail: "Review for AI tells, fact verification, CTA placement, proof elements, brand voice alignment"
      }
    ]
  },
  {
    id: "callout-010-interview",
    sectionId: "case-study",
    subsectionId: "interview",
    title: "Save 2 hours: Transcribe and extract structured case study elements",
    tip: "Record your customer interview (with permission), run it through transcription, then have AI extract quotes organized by section (Challenge, Solution, Results), identify the strongest data points, and flag the best pull quotes. You get a structured extraction document in 15 minutes instead of manually re-listening and note-taking for 2+ hours.",
    tools: [
      {
        name: "Whisper API or Otter.ai",
        detail: "Transcription (upload recording, get transcript)"
      },
      {
        name: "Claude Opus 4.5",
        detail: "Extraction (nuance matters in selecting the right quotes)"
      },
      {
        name: "Prompt",
        detail: "Extract Challenge quotes, Solution quotes, Results with numbers, and flag the single best hero quote"
      }
    ]
  },
  {
    id: "callout-011-template",
    sectionId: "case-study",
    subsectionId: "template",
    title: "Save 90 minutes: Generate case study first draft from extraction",
    tip: "With your structured extraction in hand, AI generates a full case study draft following your standard template (impact card, challenge, solution, results, CTA). It places quotes in context, builds the narrative arc, and formats the before/after data. You spend your time strengthening the story and adding insights only you have, not wrestling with structure.",
    tools: [
      {
        name: "Claude Projects",
        detail: "Upload your case study template and 2-3 of your best published case studies as examples of voice and structure"
      },
      {
        name: "Claude Opus 4.5",
        detail: "Feed the extraction doc + template, match voice and structure of examples"
      }
    ]
  },
  {
    id: "callout-012-content-mix",
    sectionId: "social-media",
    subsectionId: "content-mix",
    title: "Save 5 hours: Atomize one article into 15+ platform-specific assets",
    tip: "Every Tier 1/2 article and case study should be atomized into social assets. Feed the published piece to AI and get: a LinkedIn long-form post, a Twitter/X thread, carousel copy, a poll, 3 angle tweets, a newsletter section, a YouTube Shorts script, and more. AI handles format adaptation; you curate the best 5-7 and refine hooks and CTAs. One article becomes your distribution engine for 2 weeks.",
    tools: [
      {
        name: "Claude Sonnet 4.5",
        detail: "Speed matters for volume; atomization is adaptation, not deep strategy"
      },
      {
        name: "Claude Projects",
        detail: "Upload content mix % guidelines and platform-specific tone notes"
      },
      {
        name: "Prompt template",
        detail: "Atomize into LinkedIn post, Twitter thread, standalone tweets, newsletter section, carousel text, Shorts script"
      }
    ]
  },
  {
    id: "callout-013-schedule",
    sectionId: "social-media",
    subsectionId: "schedule",
    title: "Save 3 hours: Batch-generate a week of social content",
    tip: "Instead of creating posts one at a time, batch your entire week's social content in one sitting. Feed AI your publishing calendar, recent articles, and content mix targets. Get a full week of posts across platforms, pre-categorized by type (educational, engagement, promotional, brand). Review, tweak, schedule.",
    tools: [
      {
        name: "Claude Sonnet 4.5",
        detail: "Content mix % and weekly schedule as context"
      },
      {
        name: "Notion MCP",
        detail: "Pull content calendar and recent published articles directly into Claude"
      },
      {
        name: "Scheduling via Typefully, Buffer, or Hootsuite",
        detail: "Finalize and schedule posts across platforms"
      }
    ]
  },
  {
    id: "callout-014-onboarding",
    sectionId: "email-marketing",
    subsectionId: "onboarding",
    title: "Save 2 hours: Draft complete email sequences from frameworks",
    tip: "Using your onboarding framework (triggers, timing, content per email), AI drafts the full sequence: welcome email, activation nudge, feature education, success milestone, re-engagement. Each email follows your brand voice and includes contextual CTAs. You focus on personalizing triggers and refining the value prop per email, not writing from blank.",
    tools: [
      {
        name: "Claude Projects",
        detail: "Upload your email framework templates, brand voice profile, and best-performing existing emails as examples"
      },
      {
        name: "Claude Sonnet 4.5",
        detail: "Initial drafts with subject line A/B variations"
      }
    ]
  },
  {
    id: "callout-015-segmentation",
    sectionId: "email-marketing",
    subsectionId: "segmentation",
    title: "Save 90 minutes: Build segmentation logic from behavioral data",
    tip: "Describe your user behaviors and business model to AI, and it can draft your segmentation matrix: which behaviors trigger which segments, what content each segment receives, and how segments graduate between lifecycle stages. You validate against your actual data and refine the logic.",
    tools: [
      {
        name: "Claude Opus 4.5",
        detail: "Segmentation requires strategic thinking"
      },
      {
        name: "Prompt",
        detail: "Given these user behaviors, lifecycle stages, and business goals, design a segmentation matrix with triggers, content strategy per segment, and graduation criteria"
      }
    ]
  },
  {
    id: "callout-016-dashboard",
    sectionId: "performance-reporting",
    subsectionId: "dashboard",
    title: "Save 90 minutes: Generate narrative performance reports from raw data",
    tip: "Instead of manually interpreting spreadsheet data and writing report narratives, feed your raw metrics (traffic by tier, conversions by article, keyword rankings, social engagement) to AI. It generates the narrative: what's working, why, what changed, and recommended next actions. You review the interpretation and add strategic context only you have.",
    tools: [
      {
        name: "Claude Sonnet 4.5",
        detail: "Reporting template as context"
      },
      {
        name: "DataForSEO MCP",
        detail: "Pull current keyword rankings, traffic estimates, and competitor movements directly into Claude"
      },
      {
        name: "Prompt",
        detail: "Generate executive summary, top 3 wins, bottom 3 issues, recommended actions"
      }
    ]
  },
  {
    id: "callout-017-tools",
    sectionId: "performance-reporting",
    subsectionId: "tools",
    title: "Save 60 minutes: Automate competitive rank tracking",
    tip: "Instead of manually checking competitor rankings weekly, set up automated tracking through DataForSEO. Pull rank changes for your target keywords and your top 5 competitors in a single API call. AI surfaces the meaningful movements and flags opportunities (competitor dropped, new SERP feature appeared).",
    tools: [
      {
        name: "DataForSEO MCP",
        detail: "historical_serp, ranked_keywords, domain_rank_overview for automated competitive monitoring"
      },
      {
        name: "Claude Sonnet 4.5",
        detail: "Interpret rank movements and flag actionable changes"
      },
      {
        name: "Cadence",
        detail: "Weekly automated pull, monthly deep analysis"
      }
    ]
  },
  {
    id: "callout-018-review",
    sectionId: "team-collaboration",
    subsectionId: "review",
    title: "Save 2 hours: Multi-agent expert review before publish",
    tip: "Instead of one person reviewing a draft and saying 'looks good,' spin up 3 AI expert agents that each review independently against different criteria. Compare where they agree (strong signal) and where they disagree (you have a decision to make). This catches issues that a single reviewer misses and forces quality through multiple lenses.",
    tools: [
      {
        name: "Claude Opus 4.5",
        detail: "Each agent (quality of critique matters)"
      },
      {
        name: "SEO Specialist agent",
        detail: "Keyword integration, header structure, internal linking, meta quality"
      },
      {
        name: "Conversion Expert agent",
        detail: "CTA placement, proof element strength, objection handling"
      },
      {
        name: "Industry Buyer agent",
        detail: "Would this influence your decision? what's missing?"
      },
      {
        name: "OpenClaw",
        detail: "Save each as reusable configuration"
      }
    ]
  },
  {
    id: "callout-019-cadences",
    sectionId: "team-collaboration",
    subsectionId: "cadences",
    title: "Save 2 hours weekly: AI-assisted content operations",
    tip: "Your weekly content review, brief assignments, and social batching can each be partially automated. AI drafts the weekly status update from your content calendar, identifies what's blocked, generates brief assignments for the next batch of keywords, and pre-drafts social content from recent articles. You review, decide, and assign in half the time.",
    tools: [
      {
        name: "Notion MCP",
        detail: "Pull content calendar status, keyword backlog, and pipeline directly into Claude"
      },
      {
        name: "Claude Sonnet 4.5",
        detail: "Generate weekly status summary, identify blockers, suggest next keyword assignments by priority"
      }
    ]
  }
];
