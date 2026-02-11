AI Callout Integration Outline
Revised with specific tools, models, MCPs, and time savings

Component: <AiCallout> (new component, similar pattern to Web2Callout)
Visual: Distinct styled box inline within accordion content
Each callout has: h3 title ("Save X hours/minutes: ..."), tip body, and tool/model specifics


SECTION 2: Content Strategy
Accordion: "brand-voice"

  Save 3 hours: Extract your brand voice profile from existing content

  Tip: Feed 10-15 of your best-performing posts, emails, or articles into Claude as
  context. Prompt it to extract voice characteristics, tone patterns, do's/don'ts, and
  a voice scale (e.g., "If corporate is 1 and Deadpool is 10, you're a 6"). Use the
  output as your living brand voice doc that every future prompt references.

  Tools and setup:
  - Claude Opus 4.5 (complex pattern recognition across content samples)
  - Claude Projects: Upload your top 15 content pieces as project knowledge, so every
    conversation in that project writes in your voice by default
  - Firecrawl MCP: Scrape your own published blog posts and landing pages to feed as
    input if content lives on the web
  - Output: brand-voice-profile.md that becomes a system prompt attachment for all
    future content generation


Accordion: "audience"

  Save 4 hours: Extract real customer language at scale

  Tip: Instead of guessing how your audience talks about their problems, scrape the
  places they actually talk: Reddit threads, Discord channels, G2/Capterra reviews,
  Twitter replies, forum posts. AI extracts the exact phrases, pain points, and
  language patterns your audience uses, then clusters them by theme. Use these verbatim
  phrases in your messaging, headlines, and CTAs.

  Tools and setup:
  - Firecrawl MCP in Claude Desktop: Scrape competitor review pages, Reddit threads,
    and forum discussions in real time during your Claude conversation
  - Perplexity: Deep research on "[your category] complaints," "[competitor] problems,"
    "[use case] frustrations" with cited sources
  - Claude Sonnet 4.5: Process and cluster extracted language into pain point
    categories, frequency analysis, and exact quote library
  - DataForSEO MCP: Cross-reference extracted language against actual search volumes
    to validate which pain phrases people actually search for
  - Output: customer-pain-language.md with categorized verbatim quotes, search volumes,
    and suggested headline/CTA applications


Accordion: "messaging"

  Save 2 hours: Generate messaging matrix draft variations

  Tip: Once you have your audience language and brand voice, AI can generate 3-5
  variations of your messaging matrix (pain, capability, vision of use) for each
  audience segment. You pick the winners. The key: feed it real customer language
  from the audience extraction step, not generic descriptions. AI drafts; your
  10 years of experience picks the 2-3 that actually resonate.

  Tools and setup:
  - Claude Opus 4.5 with your brand voice profile and customer language doc loaded
    as project knowledge
  - Prompt structure: "For [audience segment], generate 3 messaging variations using
    this framework: Pain (what hurts), Capability (what we do about it), Vision of Use
    (what life looks like after). Use these verbatim customer phrases: [paste from
    language extraction]."
  - Human gate: AI generates 5-10 options. Your taste picks the 2-3 winners. That
    selection IS your competitive advantage.


SECTION 3: Pain Point SEO
Accordion: "competitor"

  Save 7 hours: AI-powered competitor keyword gap analysis

  Tip: Instead of manually auditing 10+ competitor sites, use AI to scrape their
  content, extract their keyword targets, map their positioning, and cross-reference
  against your backlog in under an hour. AI surfaces the gaps; you decide which ones
  are worth pursuing based on your tier classification.

  Tools and setup:
  - DataForSEO MCP: Pull ranked keywords for each competitor domain directly in Claude
    (dataforseo_labs_google_ranked_keywords, domain_intersection, competitors_domain)
  - Firecrawl MCP: Scrape competitor landing pages and blog posts to extract their
    positioning angles, CTAs, and proof elements
  - Claude Sonnet 4.5: Synthesize competitor data into a gap analysis, cluster by
    tier (1/2/3), and prioritize by Pain Point Score formula
    ((Volume / KD) x CPC x Intent Multiplier)
  - Perplexity: Research competitor product updates, recent funding, new features
    that might shift keyword priorities
  - Output: competitor-gap-analysis.md with tiered keyword opportunities, competitor
    positioning weaknesses, and recommended content priorities


Accordion: "workflow"

  Save 60 minutes: Auto-generate content briefs from keyword data

  Tip: Once you've classified a keyword into a tier, AI can generate a complete
  content brief using your Pain Point SEO template (Section 3). Feed it the keyword,
  tier, search intent analysis, and your messaging matrix. It outputs a full brief
  with CTA strategy, proof element requirements, outline, and internal linking
  suggestions. You review and refine, not build from scratch.

  Tools and setup:
  - Claude Projects: Upload the Pain Point SEO Content Brief Template (Section 3
    template) as project knowledge. Every brief generated in this project follows
    your exact format.
  - DataForSEO MCP: Pull search volume, KD, CPC, and SERP features for the target
    keyword in real time during brief creation
  - Claude Sonnet 4.5: Generate the brief. Prompt: "Create a content brief for
    [keyword], Tier [X]. Include search intent analysis, conversion strategy, CTA
    placement, proof elements needed, and outline."
  - Output: Ready-to-assign content brief in 30 minutes instead of 90


Accordion: "cluster"

  Save 3 hours: Build content cluster maps with AI research

  Tip: AI can generate 100+ keyword ideas per topic cluster, cross-reference them
  against competitor rankings, classify by tier, and map internal linking
  relationships between pieces. The cluster map becomes your 3-6 month editorial
  roadmap. AI handles the volume; you validate the strategic phasing.

  Tools and setup:
  - DataForSEO MCP: keyword_ideas, keyword_suggestions, related_keywords endpoints
    to generate and expand keyword clusters in Claude
  - Claude Opus 4.5: Classify each keyword by tier, map relationships between
    keywords, suggest internal linking structure, and recommend publishing sequence
    (foundational pieces first, then supporting content)
  - Output: content-clusters.md with keyword groups, tier classifications, internal
    link map, and phased publishing calendar


SECTION 4: Content Production System
Accordion: "brief"

  Save 60 minutes: Generate conversion-optimized brief drafts

  Tip: With your keyword selected and tier classified, AI generates a full brief
  following your exact template. It pre-fills search intent analysis, suggests CTA
  placement based on tier (aggressive for Tier 1/2, balanced for Tier 3), recommends
  proof elements from your case study library, and creates an outline. You spend your
  time refining strategy, not filling in templates.

  Tools and setup:
  - Same Claude Projects setup as Section 3 "workflow" callout
  - Key addition: Upload your proof asset library (case study summaries, key metrics,
    customer quotes by use case) so Claude can suggest specific proof elements per brief
  - DataForSEO MCP: serp_organic_live_advanced to analyze current SERP and identify
    content gaps in competing articles


Accordion: "creation"

  Save 90 minutes: Draft and iterate with expert review agents

  Tip: AI generates 2-3 outline variations and a full first draft from your complete
  brief. Then, instead of one round of "does this look good?", spin up 3 expert
  review agents that each review independently: an SEO Specialist checks keyword
  integration and structure, a Conversion Expert evaluates CTA placement and proof
  usage, and an Industry Buyer tests whether it would actually influence their
  decision. Where all 3 agree, you have signal. Where they disagree, you have a
  decision to make.

  Tools and setup:
  - Claude Sonnet 4.5 for first draft generation (speed over depth)
  - Claude Opus 4.5 for expert review agents (quality of analysis matters)
  - OpenClaw / Claude Projects setup for each agent role:
    * SEO Specialist agent: System prompt focused on keyword density, header structure,
      internal linking, meta optimization, schema markup opportunities
    * Conversion Expert agent: System prompt focused on CTA placement, proof element
      effectiveness, objection handling, conversion psychology
    * Industry Buyer agent: System prompt with your target audience persona, their
      decision criteria, competitive alternatives they're considering
  - AI Ping Pong workflow for high-stakes content: Draft in Claude, review in Gemini,
    refine in Claude, fact-check in Perplexity. Each model catches different blind spots.
  - Quality gate prompt: "Review this draft against these criteria: [paste quality gate
    checklist from Section 10.5]. Flag any AI tells (delve, landscape, leverage,
    paradigm, synergy, it's worth noting, importantly, essentially). Would you send
    this to a client without disclaimers?"


Accordion: "optimization"

  Save 30 minutes: Automated quality gates before publish

  Tip: Before any content goes live, run it through an AI quality gate that checks for
  AI tells, fact-verifies claims, validates CTA placement against the brief, confirms
  proof elements are present, and flags anything that reads generic. This is the last
  pass before human final review, not a replacement for it.

  Tools and setup:
  - Claude Sonnet 4.5 with quality gate checklist as system prompt
  - Prompt template: "Review this article for: (1) AI tells to remove [list], (2) facts
    that need verification, (3) CTA placement vs brief requirements, (4) proof elements
    present vs required, (5) brand voice alignment vs profile. Return a pass/fail per
    item with specific fixes."
  - Perplexity: Fact-check any statistical claims, competitor comparisons, or market
    data cited in the article
  - Human gate: AI identifies issues. You decide which matter. Always do a final
    human read: "Would you send this to a client?"


SECTION 5: Case Study Development
Accordion: "interview"

  Save 2 hours: Transcribe and extract structured case study elements

  Tip: Record your customer interview (with permission), run it through transcription,
  then have AI extract quotes organized by section (Challenge, Solution, Results),
  identify the strongest data points, and flag the best pull quotes. You get a
  structured extraction document in 15 minutes instead of manually re-listening and
  note-taking for 2+ hours.

  Tools and setup:
  - Whisper API or Otter.ai for transcription (upload recording, get transcript)
  - Claude Opus 4.5 for extraction (nuance matters in selecting the right quotes)
  - Prompt: "From this interview transcript, extract: (1) Challenge section: the 3
    strongest pain point quotes, the business impact of the problem, what they tried
    before. (2) Solution section: why they chose us, the decisive moment quote,
    implementation details. (3) Results section: all quantifiable outcomes with exact
    numbers, the strongest 'what became possible' quote. (4) Flag the single best hero
    quote for above-the-fold placement."
  - Output: case-study-extraction.md organized by your Section 5 template structure


Accordion: "template"

  Save 90 minutes: Generate case study first draft from extraction

  Tip: With your structured extraction in hand, AI generates a full case study draft
  following your standard template (impact card, challenge, solution, results, CTA).
  It places quotes in context, builds the narrative arc, and formats the before/after
  data. You spend your time strengthening the story and adding insights only you have,
  not wrestling with structure.

  Tools and setup:
  - Claude Projects: Upload your case study template (Section 5 anatomy) and 2-3 of
    your best published case studies as examples of voice and structure
  - Claude Opus 4.5: Feed the extraction doc + template. Prompt: "Write a case study
    draft following this template, using this extraction document. Match the voice and
    structure of these example case studies. Include an impact summary card, cost
    comparison table if relevant, and contextual CTAs."
  - Human gate: Customer-approved quotes only. Verify all numbers. Check that
    competitive claims are current and fair.


SECTION 6: Social Media Playbook
Accordion: "content-mix"

  Save 5 hours: Atomize one article into 15+ platform-specific assets

  Tip: Every Tier 1/2 article and case study should be atomized into social assets.
  Feed the published piece to AI and get: a LinkedIn long-form post, a Twitter/X
  thread, carousel copy, a poll, 3 angle tweets, a newsletter section, a YouTube
  Shorts script, and more. AI handles format adaptation; you curate the best 5-7
  and refine hooks and CTAs. One article becomes your distribution engine for 2 weeks.

  Tools and setup:
  - Claude Sonnet 4.5 (speed matters for volume; atomization is adaptation, not
    deep strategy)
  - Claude Projects: Upload your content mix % guidelines (Section 6) and platform-
    specific tone notes as project knowledge
  - Prompt template: "Atomize this article into: (1) LinkedIn long-form post (pain
    point hook, 3 key insights, CTA), (2) Twitter/X thread (5-7 tweets, hook tweet +
    breakdown + CTA), (3) 3 standalone tweets (different angles from the article),
    (4) Newsletter email section (2-3 paragraphs, link to full article), (5) Instagram
    carousel (5-7 slide text), (6) YouTube Shorts script (60 seconds, hook-value-CTA).
    Match brand voice profile. Map to messaging matrix: Post 1 = pain, Post 2-3 =
    capability, Post 4 = vision of use."
  - Human curation: Review all outputs, select best 5-7, refine hooks, approve.
    20 minutes AI + 30 minutes human = 50 minutes total vs 6-8 hours manual.


Accordion: "schedule"

  Save 3 hours: Batch-generate a week of social content

  Tip: Instead of creating posts one at a time, batch your entire week's social
  content in one sitting. Feed AI your publishing calendar, recent articles, and
  content mix targets. Get a full week of posts across platforms, pre-categorized by
  type (educational, engagement, promotional, brand). Review, tweak, schedule.

  Tools and setup:
  - Claude Sonnet 4.5 with your content mix % and weekly schedule as context
  - Notion MCP: Pull your content calendar and recent published articles directly
    into Claude for batch generation
  - Prompt: "Generate [X] social posts for this week using this content mix: 45%
    educational, 30% engagement, 15% promotional, 10% brand. Source material: [recent
    articles/case studies]. Platforms: [your platforms]. Follow brand voice profile."
  - Scheduling: Export to Typefully (Twitter/X threads), Buffer, or Hootsuite


SECTION 7: Email Marketing Framework
Accordion: "onboarding"

  Save 2 hours: Draft complete email sequences from frameworks

  Tip: Using your onboarding framework (triggers, timing, content per email), AI
  drafts the full sequence: welcome email, activation nudge, feature education,
  success milestone, re-engagement. Each email follows your brand voice and includes
  contextual CTAs. You focus on personalizing triggers and refining the value prop
  per email, not writing from blank.

  Tools and setup:
  - Claude Projects: Upload your email framework (Section 7 templates), brand voice
    profile, and your best-performing existing emails as examples
  - Claude Sonnet 4.5 for initial drafts (volume and speed)
  - Prompt: "Draft a [X]-email onboarding sequence triggered by [event]. Email 1:
    welcome + first action CTA. Email 2 (day 3): feature education. Email 3 (day 7):
    success story/case study. Email 4 (day 14): advanced use case. Email 5 (day 30):
    feedback request. Match brand voice. Include subject line variations for A/B testing."
  - Human gate: Test all links, verify personalization tokens, review tone for each
    segment. Never send AI-drafted emails without reading them as if you're the recipient.


Accordion: "segmentation"

  Save 90 minutes: Build segmentation logic from behavioral data

  Tip: Describe your user behaviors and business model to AI, and it can draft your
  segmentation matrix: which behaviors trigger which segments, what content each
  segment receives, and how segments graduate between lifecycle stages. You validate
  against your actual data and refine the logic.

  Tools and setup:
  - Claude Opus 4.5 (segmentation requires strategic thinking)
  - Prompt: "Given these user behaviors [list], these lifecycle stages [list], and
    these business goals [list], design a segmentation matrix. For each segment:
    define the trigger, the email content strategy, graduation criteria to next stage,
    and re-engagement trigger if dormant."


SECTION 8: Performance Reporting and Analytics
Accordion: "dashboard"

  Save 90 minutes: Generate narrative performance reports from raw data

  Tip: Instead of manually interpreting spreadsheet data and writing report
  narratives, feed your raw metrics (traffic by tier, conversions by article, keyword
  rankings, social engagement) to AI. It generates the narrative: what's working, why,
  what changed, and recommended next actions. You review the interpretation and add
  strategic context only you have.

  Tools and setup:
  - Claude Sonnet 4.5 with your reporting template as context
  - DataForSEO MCP: Pull current keyword rankings, traffic estimates, and competitor
    movements directly into Claude for real-time reporting
  - Prompt: "Here are this month's metrics [paste or upload CSV]. Generate a
    performance report following this structure: (1) Executive summary (3 sentences),
    (2) What's working (top 3 wins with data), (3) What needs attention (bottom 3 with
    diagnosis), (4) Recommended actions for next month. Compare against last month's
    baseline. Highlight Tier 1/2 conversion rates separately from Tier 3."
  - Output: Report draft that you review, add strategic context to, and share with
    stakeholders


Accordion: "tools"

  Save 60 minutes: Automate competitive rank tracking

  Tip: Instead of manually checking competitor rankings weekly, set up automated
  tracking through DataForSEO. Pull rank changes for your target keywords and your
  top 5 competitors in a single API call. AI surfaces the meaningful movements and
  flags opportunities (competitor dropped, new SERP feature appeared, etc.).

  Tools and setup:
  - DataForSEO MCP: historical_serp, ranked_keywords, domain_rank_overview for
    automated competitive monitoring
  - Claude Sonnet 4.5: Interpret rank movements and flag actionable changes
  - Cadence: Weekly automated pull, monthly deep analysis


SECTION 9: Team Collaboration Patterns
Accordion: "review"

  Save 2 hours: Multi-agent expert review before publish

  Tip: Instead of one person reviewing a draft and saying "looks good," spin up 3
  AI expert agents that each review independently against different criteria. Compare
  where they agree (strong signal) and where they disagree (you have a decision to
  make). This catches issues that a single reviewer misses and forces quality through
  multiple lenses.

  Tools and setup:
  - Claude Opus 4.5 for each agent (quality of critique matters)
  - Three separate conversations or Claude Projects, each with a role-specific
    system prompt:
    * SEO Specialist: "You are an SEO specialist reviewing content. Evaluate: keyword
      integration (natural, not stuffed), header structure (H2/H3 hierarchy), internal
      linking (relevant, contextual), meta description quality, schema markup
      opportunities. Score 1-10 with specific fixes."
    * Conversion Expert: "You are a conversion rate optimization specialist. Evaluate:
      CTA placement (after intro, mid-content, after proof, end), proof element
      strength (case study, data, testimonial), objection handling, urgency/scarcity
      usage, conversion path clarity. Score 1-10 with specific fixes."
    * Industry Buyer: "You are a [target persona] evaluating this content as part of
      your buying research. Would this influence your decision? What's missing? What
      feels generic? What would make you click the CTA? Be honest and specific."
  - Synthesis: Copy all 3 reviews into a single conversation. Prompt: "Here are 3
    expert reviews of the same article. Where do all 3 agree? Where do they disagree?
    What are the top 5 changes that would have the highest impact?"
  - OpenClaw setup: Save each agent as a reusable configuration. Name them
    "SEO-Reviewer," "CRO-Reviewer," "Buyer-Reviewer." Run for every Tier 1/2 article.


Accordion: "cadences"

  Save 2 hours/week: AI-assisted weekly content operations

  Tip: Your weekly content review, brief assignments, and social batching can each be
  partially automated. AI drafts the weekly status update from your content calendar,
  identifies what's blocked, generates brief assignments for the next batch of
  keywords, and pre-drafts social content from recent articles. You review, decide,
  and assign in half the time.

  Tools and setup:
  - Notion MCP: Pull content calendar status, keyword backlog, and case study pipeline
    directly into Claude
  - Claude Sonnet 4.5: Generate weekly status summary, identify blockers, suggest
    next keyword assignments based on capacity and priority
  - Prompt: "Here's our content calendar [from Notion]. Generate: (1) This week's
    status (what's publishing, what's in review, what's blocked), (2) Next 3 brief
    assignments from the keyword backlog (prioritize by Pain Point Score), (3) Social
    content batch from articles published this week."


CROSS-CUTTING: Programmatic Content (Section 4, "creation" accordion)

  Save 40+ hours: Programmatic content at scale

  Tip: Some content patterns are 80% template, 20% customization. Comparison pages
  ("[You] vs [Competitor]"), use-case pages ("[Product] for [Industry]"), and
  location pages ("[Service] in [City]") can be templatized. AI generates variations
  from a single template, adding unique insights per page to avoid thin content.
  20 competitors = 20 comparison pages. 10 use cases = 10 landing pages. You review
  each for unique value and publish 3-5 per week for steady, natural growth.

  Tools and setup:
  - Claude Projects: Upload your comparison page template with structure, CTA
    placement, and proof element requirements
  - DataForSEO MCP: Pull competitor data, pricing info, and feature comparisons for
    each variation
  - Firecrawl MCP: Scrape competitor pages to ensure comparison claims are current
  - Claude Sonnet 4.5: Generate variations. Prompt: "Using this template, generate
    a comparison page for [You] vs [Competitor]. Include: quick comparison table,
    feature-by-feature breakdown, pricing comparison (use current data), when to
    choose each, migration guide outline, FAQ. Add unique insights per competitor
    based on their actual positioning."
  - Quality gate: Every programmatic page gets human review. Add unique case study
    or metric per page. Write unique meta descriptions. Publish 3-5/week (looks
    natural to Google).


SUMMARY: What gets removed from standalone Section 10

After distributing all AI callouts, the standalone Section 10 (AI-Assisted Production
Systems) gets removed entirely from sections.ts and App.tsx. All of its content lives
organically within Sections 2-9 as inline callout boxes. The Section 10 file
(Section10.tsx) can be archived or deleted.

Key items from Section 10 and where they land:
- Three-layer architecture     -> Distributed across callouts (implicit, not explicit)
- First draft generation       -> Section 4 "creation"
- Content atomization           -> Section 6 "content-mix"
- Competitor keyword gap        -> Section 3 "competitor"
- Interview transcription       -> Section 5 "interview"
- Brief generation              -> Section 3 "workflow" + Section 4 "brief"
- Expert review framework       -> Section 9 "review"
- Quality gates                 -> Section 4 "optimization"
- Content atomization workflow   -> Section 6 "content-mix"
- Programmatic content          -> Section 4 "creation"
- Compound flywheel             -> Distributed (the flywheel IS the playbook in action)
- Division of labor (human vs AI) -> Embedded in each callout's "Human gate" notes
- Build sequence (5 stages)     -> Distributed across sections in natural order
