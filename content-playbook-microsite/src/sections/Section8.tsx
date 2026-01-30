import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Section8Content() {
  return (
    <>
      <p className="lead text-lg text-ink-muted">
        Systems, process, and workflows to execute the playbook: strategy → keywords → briefs → production → case studies → social.
      </p>

      <Accordion type="single" collapsible className="mt-8 w-full">
        <AccordionItem value="flow">
          <AccordionTrigger>How It All Fits Together</AccordionTrigger>
          <AccordionContent>
            <p>Everything in Sections 1–5 runs in sequence. Strategy sets the inputs; keywords and clusters feed the calendar; briefs and case studies feed production; social repurposes and engages. Define ownership and cadence at each step so nothing sits in a silo.</p>
            <p className="mt-3 font-medium">End-to-end flow:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Content Strategy (Section 1)</strong> — Goals, audience, voice, messaging matrix, funnel map, pillars. Owner: strategist. Cadence: set at kickoff; revisit quarterly.</li>
              <li><strong>Pain Point SEO (Section 2)</strong> — Keyword research → tiered backlog, cluster plan, prioritization by resource. Owner: strategist (or dedicated SEO). Cadence: backlog refresh monthly; cluster phasing per plan (e.g. Months 1–3 category, 4–6 competitor, 7–9 JTBD).</li>
              <li><strong>Content calendar</strong> — Assigns keywords/clusters to briefs and publish dates. Owner: strategist. Cadence: weekly review; briefs due 1–2 weeks before writer start.</li>
              <li><strong>Content Production (Section 3)</strong> — Brief → writer → draft → review → publish. Owner: writer executes; strategist owns brief and review. Cadence: per your editorial calendar (e.g. 2–4 articles/month).</li>
              <li><strong>Case Study Development (Section 4)</strong> — Outreach → interview → write → approve → publish. Owner: strategist or dedicated PM for outreach; writer for draft. Cadence: pipeline review monthly; completed case studies feed proof library for briefs.</li>
              <li><strong>Social Media (Section 5)</strong> — Content mix, schedule, engagement, per-stage plan. Owner: one person (or rotation). Cadence: batch weekly/biweekly; repurpose every new Tier 1/2 article and case study into threads/posts; reply SLA per playbook.</li>
            </ol>
            <p className="mt-3 text-sm text-ink-muted">Keep a single source of truth for: keyword backlog (tier, cluster, status), content calendar (brief → draft → review → publish), case study pipeline (outreach → interview → draft → approval), and proof asset library (case studies, quotes, metrics by use case/competitor).</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="roles">
          <AccordionTrigger>Roles & Responsibilities</AccordionTrigger>
          <AccordionContent>
            <p><strong>Strategist (or strategy + SEO)</strong></p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Owns Content Strategy (Section 1) and Pain Point SEO (Section 2): goals, audience, messaging matrix, keyword research, tier classification, cluster plan.</li>
              <li>Produces content briefs (Section 3 template): keyword, intent, conversion strategy, CTAs, proof elements, outline.</li>
              <li>Owns content calendar: assigns keywords to briefs, deadlines, handoff to writer.</li>
              <li>Reviews drafts: conversion strategy implemented, CTAs in place, proof included, voice/tone.</li>
              <li>Often owns or coordinates case study outreach and interview scheduling; may hand off interview notes to writer for draft.</li>
            </ul>
            <p className="mt-3"><strong>Writer</strong></p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Executes conversion-focused brief: outline, positioning, CTAs, proof elements.</li>
              <li>Writes for the buyer, not just the searcher; weaves product positioning per tier (aggressive for Tier 1/2, balanced for Tier 3).</li>
              <li>Finds or requests proof assets (case study links, quotes, data) when brief specifies them.</li>
              <li>May own case study drafts from interview notes; may own first-pass social repurposing (threads from blog posts).</li>
            </ul>
            <p className="mt-3"><strong>Social / engagement owner</strong></p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Owns content mix, posting schedule, and reply/engagement playbook (Section 5).</li>
              <li>Repurposes new blog and case study content into threads, posts, and clips per cadence.</li>
              <li>Responsible for reply SLA and escalation; proactive engagement in community.</li>
            </ul>
            <p className="mt-3"><strong>Feedback loop:</strong> Review conversion data monthly (conversions by article, by tier); share what's working; adjust CTA copy, proof elements, and prioritization. Evolve briefs and playbook from real results.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="handoff">
          <AccordionTrigger>Briefing & Handoff</AccordionTrigger>
          <AccordionContent>
            <p><strong>What the strategist provides before the writer starts:</strong></p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Full brief using the Pain Point SEO brief template (Section 3): keyword, tier, intent analysis, conversion strategy, CTAs, proof elements, outline, internal linking.</li>
              <li>Access to: messaging matrix, brand voice doc, audience definition (so writer can match tone and pain points).</li>
              <li>Proof asset list with links or placeholders: which case studies, quotes, or data to include; if not yet created, "TBD from [upcoming case study]" or "use [metric] from [source]".</li>
            </ul>
            <p className="mt-3"><strong>Handoff sequence:</strong></p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Keyword backlog (Section 2) → strategist prioritizes and assigns next keywords to briefs.</li>
              <li>Brief completed → assign to writer with due date; writer confirms access to strategy docs and proof assets.</li>
              <li>Writer delivers draft → strategist reviews (see Review & Approval); writer revises; repeat until approved.</li>
              <li>Approved draft → publish; then trigger repurposing (social) and internal link updates (other articles linking to this one).</li>
            </ol>
            <p className="mt-3"><strong>Timing:</strong> Brief due 1–2 weeks before writer start date so writer can clarify questions. Avoid "brief and draft due same week"—writer needs time to research and request proof assets.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="review">
          <AccordionTrigger>Review & Approval Workflow</AccordionTrigger>
          <AccordionContent>
            <p><strong>Stages:</strong> (1) Outline review (optional but recommended for Tier 1/2)—strategist checks conversion logic and CTA placement before full draft. (2) Draft review—strategist (and optionally stakeholder) reviews against brief and checklist.</p>
            <p className="mt-2"><strong>Who reviews:</strong> Strategist always. For Tier 1/2 or high-visibility pieces, add one stakeholder (product, marketing lead) for a single round; avoid design-by-committee.</p>
            <p className="mt-2"><strong>Criteria:</strong> Conversion strategy implemented; CTAs in place and contextual; proof elements included; product positioning matches tier; voice/tone aligned; internal links per brief.</p>
            <p className="mt-2"><strong>Timeline:</strong> Set expectations up front (e.g. 5 business days per round, max 2 rounds). Return feedback in one batch, not drip-fed.</p>
            <p className="mt-2"><strong>When blocked:</strong> Legal/PR concerns—ask what's addressable (anonymize, remove metrics, soften claim); escalate with clear ask; don't let draft sit without a path to yes or no.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="checklist">
          <AccordionTrigger>Pre-Publish Checklist</AccordionTrigger>
          <AccordionContent>
            <p>Run this before publishing any article. Ties directly to Section 3 conversion strategy.</p>
            <ul className="list-disc pl-6 mt-2 space-y-0.5">
              <li>CTA placement matches brief (after intro, mid-content, after proof, end).</li>
              <li>CTA copy is varied and contextual (not the same line 4 times).</li>
              <li>Product positioning matches keyword tier (aggressive for Tier 1/2, balanced for Tier 3).</li>
              <li>Proof elements from brief are present (case study, quote, metric, comparison).</li>
              <li>Internal links per brief (to related articles, product/comparison pages).</li>
              <li>Meta description and target keyword in place; title optimized for click and keyword.</li>
              <li>Intro addresses searcher problem; objections addressed before final CTA.</li>
            </ul>
            <p className="mt-3 text-sm text-ink-muted">If any item is missing, fix before publish. This keeps conversion quality consistent and avoids "publish and forget."</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cadences">
          <AccordionTrigger>Cadences & Rituals</AccordionTrigger>
          <AccordionContent>
            <p>Build a rhythm so strategy, production, and learning stay aligned.</p>
            <p className="mt-3 font-medium">Weekly:</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Content calendar review: what's publishing, what briefs are due, what's blocked.</li>
              <li>Brief assignments: assign next batch of briefs to writers; confirm proof assets available.</li>
              <li>Social: batch create/schedule posts; review reply backlog.</li>
            </ul>
            <p className="mt-3 font-medium">Monthly:</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Conversion review: which articles drove conversions (by tier); which underperformed; adjust CTA or positioning for underperformers.</li>
              <li>Keyword backlog: reprioritize based on performance and capacity; add new keywords from customer/sales input.</li>
              <li>Case study pipeline: outreach status, interviews scheduled, drafts in review; ensure completed case studies are in proof library for briefs.</li>
            </ul>
            <p className="mt-3 font-medium">Quarterly:</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Goals and strategy (Section 1): are objectives on track? Update baseline and targets if needed.</li>
              <li>Content mix (Section 5): adjust % by type if engagement or conversions warrant.</li>
              <li>Cluster phasing (Section 2): are you on plan (category → competitor → JTBD)? Double down on highest-converting clusters.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="case-social">
          <AccordionTrigger>Case Study & Social Workflows</AccordionTrigger>
          <AccordionContent>
            <p><strong>Case study pipeline:</strong></p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Owner: strategist or dedicated PM. Outreach per Section 4 (tiers, timing, templates, incentives).</li>
              <li>Pipeline review monthly: how many in outreach, interview scheduled, draft in progress, approval pending. Target 3x the case studies you need per quarter.</li>
              <li>Handoff: after interview, strategist or writer turns notes into draft using Section 4 template; same review/approval as blog (strategist, then customer approval).</li>
              <li>When published: add to proof asset library with tags (use case, competitor replaced, key metrics). Briefs can then reference "Case study: [Customer] — 70% cost reduction" for Tier 2 comparison content.</li>
            </ul>
            <p className="mt-3"><strong>Social repurposing:</strong></p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Trigger: every new Tier 1/2 article and every new case study → 1 thread (pain point → capability → vision of use) + 3–5 single posts or clips. Owner: social owner or writer; social owner schedules and engages.</li>
              <li>Batching: weekly or biweekly batch of social content from recent blog + case studies; align to content mix % and per-stage plan (Section 5).</li>
              <li>Engagement: one person (or rotation) owns reply SLA and proactive commenting; escalate complaints or PR risk per Section 5 playbook.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}