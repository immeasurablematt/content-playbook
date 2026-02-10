import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Web3Content } from "@/components/Web3Content";
import { Web2Content } from "@/components/Web2Content";

export function Section10Content() {
  return (
    <>
      <p className="lead text-lg text-ink-muted">
        I built this system working across SaaS, crypto protocols, and enterprise software. The same three-layer architecture adapts to any playbook. AI executes your methodology; it doesn't replace it.
      </p>

      <Accordion type="single" collapsible className="mt-8 w-full">
        <AccordionItem value="architecture">
          <AccordionTrigger>The Architecture: Three Layers (10.1)</AccordionTrigger>
          <AccordionContent>
            <p>The same three-layer system that powers AI marketing, adapted for your Pain Point SEO methodology.</p>

            <p className="mt-3 font-medium">Layer 1: Research (Information Access)</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Market research at scale (competitor analysis, customer language extraction)</li>
              <li>Keyword gap analysis across 100+ competitor pages</li>
              <li>Case study interview transcription and insight extraction</li>
              <li>30-60 minute research phase before any content creation</li>
            </ul>

            <p className="mt-3 font-medium">Layer 2: Methodology (Your Playbook Frameworks)</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pain Point SEO priority formula drives keyword selection</li>
              <li>Messaging matrix (pain, capability, vision) guides positioning</li>
              <li>Content funnel map determines asset types by stage</li>
              <li>Case study template structures customer stories</li>
              <li>Email sequence frameworks define nurture flows</li>
            </ul>

            <p className="mt-3 font-medium">Layer 3: Process (The Right Sequence)</p>
            <p>Research, Foundation, Structure, Assets, Iteration</p>

            <p className="mt-3 font-medium">Critical Insight:</p>
            <p>AI executes your methodology, it doesn't replace it. The frameworks in Sections 1-6 remain the strategy. AI becomes the accelerant.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="division-of-labor">
          <AccordionTrigger>Division of Labor: AI Accelerates vs Humans Decide (10.2)</AccordionTrigger>
          <AccordionContent>
            <p className="font-medium">Where AI Accelerates (Execution Speed):</p>

            <p className="mt-3"><strong>1. First Draft Generation</strong> - Input: Complete content brief (Section 3 template) with messaging matrix, brand voice, keyword tier. AI output: 2-3 outline variations, full draft following conversion-optimized structure. Time saved: 2 hours to 30 minutes.</p>

            <p className="mt-2"><strong>2. Content Atomization</strong> - Input: 1 published article (case study, comparison post, JTBD guide). AI output: 15+ platform-specific assets (Twitter thread, LinkedIn post, email section, video script). Time saved: 3 hours to 20 minutes.</p>

            <p className="mt-2"><strong>3. Competitor Keyword Gap Analysis</strong> - Input: List of top 10 competitors. AI output: Their target keywords, clusters, positioning cross-referenced against your backlog. Time saved: 8 hours to 1 hour.</p>

            <p className="mt-2"><strong>4. Interview Transcription to Case Study Extraction</strong> - Input: Recorded customer interview (Section 4 interview guide). AI output: Transcription, extracted quotes by section (Challenge, Solution, Results). Time saved: 2 hours to 15 minutes.</p>

            <p className="mt-2"><strong>5. Brief Generation from Templates</strong> - Input: Target keyword, tier classification, audience segment. AI output: Conversion-optimized outline, internal linking suggestions, CTA placement strategy. Time saved: 90 minutes to 30 minutes.</p>

            <p className="mt-4 font-medium">Where Human Judgment is Critical (Strategy & Quality):</p>

            <p className="mt-3"><strong>1. Messaging Matrix Development</strong> - AI can't authentically articulate visceral pain from first-person perspective. AI struggles with "cinematic" vision of use scenarios. Human insight required: what pain do customers actually feel vs what they say.</p>

            <p className="mt-2"><strong>2. Conversion Strategy</strong> - Which positioning angle for this audience segment? Which proof element (case study vs data vs testimonial) closes this objection? Which CTA offer for Tier 2 comparison keywords? AI can suggest options, but conversion rates reveal truth; your experience predicts it.</p>

            <p className="mt-2"><strong>3. Tier 1/2 Proof Selection</strong> - Which case study for which comparison article? Which metric to lead with for which competitor alternative page? Proof matching requires understanding buyer psychology at decision stage.</p>

            <p className="mt-2"><strong>4. Brand Voice Refinement and Enforcement</strong> - AI drafts generic by default. Human pass required: remove corporate jargon, add personality, enforce "do's and don'ts." Voice differentiation = competitive moat (Section 1).</p>

            <p className="mt-2"><strong>5. Quality Gates</strong> - Fact-checking: AI hallucinates, humans verify. Removing AI tells: "delve," "landscape," "leverage," "it's worth noting." Final judgment: Would you send this to a client without disclaimers?</p>

            <p className="mt-3"><strong>The Pattern:</strong> AI generates 5-10 options at speed. Your taste (10 years of experience) picks the 2-3 winners. That's your competitive advantage.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="build-sequence">
          <AccordionTrigger>The 5-Stage Build Sequence (10.3)</AccordionTrigger>
          <AccordionContent>
            <p>Every content asset follows this path. AI accelerates execution, human judgment validates at each gate.</p>

            <p className="mt-3 font-medium">Stage 1: Research (Deep Context)</p>
            <p>Before writing a single word, gather context AI can work with. Tasks: Market research, competitor analysis, customer language extraction, validation. AI Tools: Perplexity for deep research, Firecrawl for scraping competitor pages, Playwright for screenshots. Human Role: Define research questions, review outputs, synthesize into strategy. Output: market-research.md, competitor-analysis.md, customer-pain-points.md, opportunity-gaps.md. Time: 30-60 minutes (vs 4-8 hours manual).</p>

            <p className="mt-3 font-medium">Stage 2: Foundation (Voice, Positioning)</p>
            <p>Define who you are and how you're different. Tasks: Brand voice extraction, positioning angles, anti-positioning. Output: brand-voice-profile.md, positioning-angles.md.</p>

            <p className="mt-3 font-medium">Stage 3: Structure (Keywords, Content Pillars)</p>
            <p>Map the territory. Tasks: Keyword opportunities using Section 2 methodology, content pillars organized by buying intent, quick wins for 60-90 days. AI generates 100+ keyword ideas per circle, cross-references against competitor rankings. Output: keyword-strategy.md, content-clusters.md.</p>

            <p className="mt-3 font-medium">Stage 4: Assets (Landing Pages, Emails, Content)</p>
            <p>Build the actual marketing materials. AI generates first drafts from complete briefs, outline variations, CTA variations, email sequence drafts. Human adds unique insights, strengthens proof, enforces brand voice.</p>

            <p className="mt-3"><strong>Quality Checkpoint before Stage 5:</strong> Fact-check all claims, verify links, remove AI tells, would you send this to a client?</p>

            <p className="mt-3 font-medium">Stage 5: Iteration (Reject Until Right)</p>
            <p>First drafts are starting points. Rejection cycles with specific feedback. Expert review framework with task-based agents (SEO Specialist, Conversion Expert, Industry Expert). AI Ping Pong for critical content (Claude to Gemini to Claude to GPT to Perplexity for fact-checking).</p>

            <p className="mt-3">Output: Production-ready asset that passes quality gates. 10 minutes of expert review = 10 hours saved on rework.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="expert-review">
          <AccordionTrigger>Expert Review Framework (10.4)</AccordionTrigger>
          <AccordionContent>
            <p>The problem with AI is consistency. Task-based agents solve this by providing multiple independent perspectives, forcing consensus.</p>

            <p className="mt-3 font-medium">When to Use:</p>
            <p>After copy before design, after design before launch, after strategy before execution, any high-stakes decision.</p>

            <p className="mt-3 font-medium">Traditional Approach:</p>
            <p>"Is this landing page good?" / "Looks good, here's some feedback." No validation, no comparison.</p>

            <p className="mt-3 font-medium">Task-Based Agent Approach:</p>
            <p>Spin up 3 expert agents to review independently, then synthesize where they agree.</p>

            <p className="mt-3"><strong>Example:</strong> Reviewing a Tier 2 Comparison Article with SEO Specialist, Conversion Expert, and Industry Buyer agents. Each reviews independently. Consensus emerges: Strong structure, weak proof, opportunity in simplifying language. Where 3 agents agree, you have signal. Where they disagree, you have a decision to make.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="quality-gates">
          <AccordionTrigger>Quality Gates & Human Checkpoints (10.5)</AccordionTrigger>
          <AccordionContent>
            <p>Before publishing ANY AI-generated content, run this checklist.</p>

            <p className="mt-3 font-medium">Universal Quality Gates:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fact-check all claims</li>
              <li>Remove AI tells ("delve," "landscape," "paradigm," "leverage," "synergy," "It's worth noting," "importantly," "essentially," generic openings like "In today's digital landscape...")</li>
              <li>Add unique insights from experience</li>
              <li>Would you send this to a client?</li>
            </ul>

            <p className="mt-3 font-medium">Tier-Specific Gates:</p>
            <p><strong>Tier 1/2 (bottom-of-funnel)</strong> gets extra rigorous fact-checking, verified competitor claims, backed positioning claims, tested CTA language.</p>
            <p><strong>Tier 3 (mid-funnel)</strong> needs verified educational value, cited external sources, confirmed technical accuracy, 60/40 helpfulness vs promotion balance.</p>

            <p className="mt-3 font-medium">Content Type-Specific Gates:</p>
            <p><strong>Case studies</strong> need customer-approved quotes, verified proof points, permitted visual assets.</p>
            <p><strong>Comparison articles</strong> need current competitor facts, fair treatment, pros and cons.</p>
            <p><strong>Landing pages</strong> need working CTAs, tested forms, real social proof.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="atomization">
          <AccordionTrigger>Content Atomization Workflow (1 to 15+) (10.6)</AccordionTrigger>
          <AccordionContent>
            <p>The compound engine that turns every asset into a distribution system. One piece of core content becomes many. AI handles adaptation, human curates for quality.</p>

            <p className="mt-3 font-medium">Input:</p>
            <p>1 Core Piece (blog post, case study, webinar recording, internal docs).</p>

            <p className="mt-3 font-medium">AI Processing:</p>
            <p>Read full content, extract 5-10 key insights, adapt for platform-specific formats, generate 15+ variations.</p>

            <p className="mt-3 font-medium">Human Curation:</p>
            <p>Review all 15+ outputs, select best 5-7, refine hooks and CTAs, approve for distribution.</p>

            <p className="mt-3 font-medium">Output covers:</p>
            <p>LinkedIn (long-form post, carousel, poll), Twitter/X (thread, single tweet, angle tweets, question tweet), Instagram (carousel, reel script, story series), Email (newsletter section, nurture email), Video (YouTube script, Shorts script, TikTok/Reels script).</p>

            <p className="mt-3"><strong>Example:</strong> Tier 2 comparison article "AWS GPU Pricing vs [Your Product]" (2,200 words) atomized into 15 assets across all platforms. AI time: 20 minutes. Human curation: 30 minutes. Manual creation would take 6-8 hours.</p>

            <p className="mt-3 font-medium">The Compound Effect:</p>
            <p>Every Tier 2 article targets high-intent keyword (direct conversions), generates 15+ social assets (awareness, traffic), provides proof elements for future content, builds topical authority. 100 articles x 15 assets = 1,500 pieces of content in distribution.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="programmatic">
          <AccordionTrigger>Programmatic Content Opportunities (10.7)</AccordionTrigger>
          <AccordionContent>
            <p>Some content patterns can be systematized. One template, many variations. AI generates, human refines. The Pattern: Find content where 80% of structure stays the same, 20% customizes per variation.</p>

            <Web3Content>
              <p className="mt-3 font-medium">Web3 Programmatic Opportunities:</p>

              <p className="mt-2"><strong>1. "[Your Protocol] vs [Competitor]" Comparison Pages</strong> - Template with quick comparison table, what is each, feature comparison, pricing, when to choose which, migration guide, FAQ. 20 competitors = 20 pages.</p>

              <p className="mt-2"><strong>2. "Best [Category] for [Use Case]" Pages</strong> - Example: "Best Decentralized GPU Platform for AI Training." Variations: AI Training, Rendering, Gaming, Model Inference, Scientific Computing. 10 use cases x 1 template = 10 pages.</p>

              <p className="mt-2"><strong>3. "[Blockchain] + [Solution Category]" Pages</strong> - Example: "Solana DeFi Protocols." Variations across blockchains and categories. 5 blockchains x 5 categories = 25 pages.</p>
            </Web3Content>

            <Web2Content>
              <p className="mt-3 font-medium">Web2 Programmatic Opportunities:</p>

              <p className="mt-2"><strong>1. "[Your Service] for [Industry]" Landing Pages</strong> - Example: "AI Automation for Healthcare." 50 industries x 1 template = 50 pages.</p>

              <p className="mt-2"><strong>2. "[Your Service] in [City]" Local SEO Pages</strong> - Example: "SEO Services in Austin, TX." 100 cities x 1 template = 100 pages.</p>
            </Web2Content>

            <p className="mt-3 font-medium">Quality Control (Critical for Programmatic Content):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Avoid thin content. Add unique insights per page.</li>
              <li>Use real case studies per variation</li>
              <li>Write unique metadata</li>
              <li>Human review for every page</li>
              <li>Publishing strategy: 3-5 pages per week, steady cadence, looks natural to Google</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="flywheel">
          <AccordionTrigger>The Compound Flywheel (10.8)</AccordionTrigger>
          <AccordionContent>
            <p>The boring process that wins while everyone else chases hacks.</p>

            <p className="mt-3 font-medium">The Flywheel:</p>
            <p>CREATE (one piece of core content), RESEARCH (30-60 min deep context), ATOMIZE (1 to 15+ pieces), DISTRIBUTE (Organic, Paid, Email), CAPTURE (Lead Magnets, Sequences), CONVERT (Pain Point SEO, Messaging), LEARN (What worked, inform next), REPEAT.</p>

            <p className="mt-3 font-medium">Why It Compounds:</p>

            <p className="mt-2"><strong>Month 1:</strong> 8 articles, 120 social posts, 200 email subscribers, 5 conversions.</p>

            <p className="mt-2"><strong>Month 3:</strong> 24 articles cumulative, 360 social assets, 800 subscribers, internal linking strengthens all, 25 conversions (5x Month 1).</p>

            <p className="mt-2"><strong>Month 6:</strong> 48 articles, 720 social assets, 2,000 subscribers, programmatic clusters ranking, 80 conversions (16x Month 1).</p>

            <p className="mt-2"><strong>Month 12:</strong> 96 articles, 1,440 social assets, 5,000 subscribers, every new article links to 5-7 existing, case studies from conversions become new content (proof loop), 200+ conversions (40x Month 1).</p>

            <p className="mt-3 font-medium">The Boring Truth:</p>
            <p>Everyone else chases AI hacks, trying to "10x overnight," jumping from tactic to tactic. You publish consistently, atomize every asset, build clusters, let compound growth do the work. 12 months later, they're still looking for shortcuts. You have a content engine that generates leads while you sleep. That's the compound flywheel.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
