import { Blockquote } from "@/components/Blockquote";
import { CodeBlock } from "@/components/CodeBlock";
import { Web3Content } from "@/components/Web3Content";

export function SectionBriefingContent() {
  return (
    <Web3Content>
      <p className="lead text-lg text-ink-muted">
        The end-to-end process from keyword backlog to published article for Web3 and crypto clients. Defines who does what and when across strategy, writing, and social functions — and what constitutes a fully ready-to-publish piece.
      </p>

      <div className="mt-8 space-y-12">

        <div id="briefing-handoff" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Briefing & Handoff</h3>
          <div className="mt-4 space-y-3">
            <h4 className="mt-2 font-semibold">What the Strategist Provides Before Writer Starts</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full brief using the Pain Point SEO brief template (see Content Production System)</li>
              <li>Access to: messaging matrix, brand voice doc, audience definition</li>
              <li>Proof asset list with links or placeholders: which protocol case studies, on-chain data points (TVL, DAUs, tx volume), KOL quotes, or Dune/DeFiLlama benchmarks to include</li>
            </ul>

            <h4 className="mt-4 font-semibold">Handoff Sequence</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Keyword backlog</strong> → strategist prioritizes and assigns next keywords to briefs</li>
              <li><strong>Brief completed</strong> → assign to writer with due date; writer confirms access to strategy docs and proof assets</li>
              <li><strong>Writer delivers draft</strong> → strategist reviews; writer revises; repeat until approved</li>
              <li><strong>Approved draft</strong> → publish; trigger repurposing (social) and internal link updates</li>
            </ol>
            <p className="mt-3 text-sm text-ink-muted">Brief due 1–2 weeks before writer start date so writer can clarify questions and request proof assets.</p>
          </div>
        </div>

        <div id="review-approval" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Review & Approval Workflow</h3>
          <div className="mt-4 space-y-3">
            <h4 className="mt-2 font-semibold">Stages</h4>
            <ol className="list-decimal pl-6 space-y-1">
              <li><strong>Outline review</strong> (recommended for Tier 1/2) — strategist checks conversion logic and CTA placement before full draft is written</li>
              <li><strong>Draft review</strong> — strategist (and optionally one stakeholder) reviews against brief and checklist</li>
            </ol>

            <h4 className="mt-4 font-semibold">Who Reviews</h4>
            <p><strong>Strategist always.</strong> For Tier 1/2 or high-visibility pieces, add one stakeholder (product, marketing lead) for a single round. Avoid design-by-committee — more than two reviewers slows everything down without improving quality.</p>

            <h4 className="mt-4 font-semibold">Review Criteria</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Conversion strategy implemented as specified in brief</li>
              <li>CTAs in place and contextual — wallet connect, Discord join, protocol trial — not generic sign-up language</li>
              <li>Proof elements included: on-chain data, protocol case studies, KOL quotes, benchmark comparisons</li>
              <li>Protocol positioning matches keyword tier (aggressive for T1/2, balanced for T3)</li>
              <li>Voice/tone aligned to client brand voice and crypto-native audience</li>
              <li>Internal links per brief (to related articles, protocol or comparison pages)</li>
            </ul>

            <h4 className="mt-4 font-semibold">Timeline & Feedback Rules</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>5 business days per review round, max 2 rounds</li>
              <li>Return feedback in one batch, not drip-fed — drip feedback forces writers to re-do work they've already revised</li>
              <li>If blocked on legal/PR concerns: ask what's addressable (anonymize, remove metrics, soften claim). Escalate with a clear ask. Don't let draft sit without a path to yes or no.</li>
            </ul>
          </div>
        </div>

        <div id="prepublish-checklist" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Pre-Publish Checklist</h3>
          <div className="mt-4 space-y-3">
            <p>Run this before publishing any article. If any item is missing, fix before publish — don't cut corners on the last step.</p>
            <CodeBlock title="Pre-publish checklist">{`□ CTA placement matches brief
  (after intro ~15%, mid-content ~40%, after proof ~70%, end ~90%)

□ CTA copy is varied and contextual
  NOT the same line 4 times
  Written in Web3-native language:
  "Connect your wallet in 30 seconds — no KYC" not "Start your free trial"

□ Protocol positioning matches keyword tier
  T1/2 = aggressive (we're the best solution for X)
  T3 = balanced (we're one solid option, here's why)

□ Proof elements from brief are present
  On-chain data (TVL, DAUs, tx volume, wallet retention)
  Protocol case study or KOL quote
  Benchmark comparison (Dune/DeFiLlama)

□ Internal links per brief
  Links to related articles, protocol or comparison pages
  Link pattern: T3 → T2 → T1 → protocol page

□ Meta description and target keyword in place
  Title optimized for click and keyword

□ Intro addresses searcher's specific Web3 problem
  Objections (smart contract risk, liquidity depth, chain support)
  addressed before final CTA`}</CodeBlock>
          </div>
        </div>

        <div id="roles-pro" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Roles: Writer & Social Owner</h3>
          <div className="mt-4 space-y-3">
            <h4 className="mt-2 font-semibold">Writer</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Executes conversion-focused briefs: outline, positioning, CTAs, proof elements</li>
              <li>Writes for the crypto-native reader — trader, developer, LP, or DAO contributor — not a generic buyer</li>
              <li>Finds or requests proof assets when brief specifies them (on-chain data, KOL quotes, Dune dashboards)</li>
              <li>May own protocol case study drafts from interview notes</li>
              <li>May own first-pass CT thread repurposing from published articles</li>
            </ul>

            <h4 className="mt-4 font-semibold">Social / Engagement Owner</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Owns content mix, posting schedule, and reply/engagement playbook</li>
              <li>Repurposes new articles and case studies into CT threads, standalone posts, Discord summaries, and Telegram announcements</li>
              <li>Responsible for reply SLA and escalation; proactive engagement</li>
            </ul>

            <h4 className="mt-4 font-semibold">Feedback Loop</h4>
            <p>Review conversion data monthly (conversions by article, by tier). Share what's working. Adjust CTA copy, proof elements, and prioritization. Evolve briefs and playbook from real results.</p>
          </div>
        </div>

        <div id="cadences-pro" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Cadences (Content Execution)</h3>
          <div className="mt-4 space-y-3">
            <h4 className="mt-2 font-semibold">Weekly</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Content calendar review + brief assignments (same as strategy cadence)</li>
              <li>Social: batch create/schedule CT posts, Discord summaries, and Telegram announcements; review CT reply backlog and proactive engagement queue</li>
            </ul>

            <h4 className="mt-4 font-semibold">Monthly</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Conversion review by article and tier</li>
              <li>Case study pipeline review: outreach status, interviews scheduled, drafts in review</li>
              <li>Proof asset library update: completed case studies tagged by chain, protocol category (DEX, lending, L2, infra), on-chain metric type (TVL, DAUs, tx volume), and competitor displaced</li>
            </ul>

            <h4 className="mt-4 font-semibold">Quarterly</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Content mix adjustment (social mix % review)</li>
              <li>Case study pipeline health: are we maintaining 3× pipeline vs target?</li>
            </ul>
          </div>
        </div>

        <div id="single-source-of-truth" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Single Source of Truth</h3>
          <div className="mt-4 space-y-3">
            <Blockquote>
              Without a single source of truth, keyword work gets duplicated, briefs get lost, case studies stall, and nobody knows what's actually published vs in draft. This is the operational backbone of the whole system.
            </Blockquote>
            <p>Maintain one document or workspace covering all four of these:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Keyword backlog</strong> — tier classification, cluster assignment, status (not started / brief in progress / in draft / published)</li>
              <li><strong>Content calendar</strong> — brief → draft → review → publish pipeline with owners and due dates</li>
              <li><strong>Case study pipeline</strong> — outreach → interview scheduled → draft in review → client approval → published</li>
              <li><strong>Proof asset library</strong> — completed case studies tagged by chain, protocol category, on-chain metric, and competitor displaced; KOL quotes and Dune dashboard links accessible to writers</li>
            </ul>
            <p className="mt-3 text-sm text-ink-muted">Tool: Notion or Airtable for most teams. Sheets works fine. The tool matters less than the discipline of actually updating it.</p>
          </div>
        </div>

      </div>
    </Web3Content>
  );
}
