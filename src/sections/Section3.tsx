import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CodeBlock } from "@/components/CodeBlock";
import { Web2Callout } from "@/components/Web2Callout";

export function Section3Content() {
  return (
    <>
      <p className="lead text-lg text-ink-muted">
        I built these briefs, creation processes, and optimization principles to force conversion-first thinking. Works across Web3 and Web2.
      </p>

      <Accordion type="single" collapsible className="mt-8 w-full">
        <AccordionItem value="brief">
          <AccordionTrigger>Content Brief Development (Pain Point SEO Method)</AccordionTrigger>
          <AccordionContent>
            <p><strong>Traditional Brief Elements:</strong> Target keyword, word count, competing content analysis, outline.</p>
            <p className="mt-2"><strong>Pain Point SEO Brief Additions:</strong></p>
            <p><strong>Buying Intent Analysis:</strong> What problem is the searcher trying to solve? Where are they in the buying journey? What solution types are they comparing? What objections might they have? What would make them convert on this page?</p>
            <p><strong>Conversion Strategy:</strong> Primary CTA (where in content, what offer); secondary CTAs (contextual variations); product positioning (how aggressive, how subtle); proof elements needed (case study, data, testimonials); comparison framing (if Tier 2 keyword).</p>
            <p className="mt-3 font-medium">Pain Point SEO Content Brief Template (A5):</p>
            <CodeBlock title="Full brief template — copy and adapt">{`# Content Brief: [Article Title]

## Keyword Strategy
- **Primary Keyword**: [keyword]
- **Keyword Tier**: [1, 2, or 3]
- **Search Volume**: [number]
- **Keyword Difficulty**: [score]
- **CPC**: [value]
- **Pain Point Score**: [(Volume/KD) × CPC × Intent Multiplier]

## Search Intent Analysis
- **Searcher Problem**: [specific problem they're trying to solve]
- **Buying Journey Stage**: [awareness / consideration / decision]
- **Alternative Solutions Considered**: [list competitors or alternatives]
- **Likely Objections**: [common hesitations or concerns]
- **Conversion Readiness**: [Low / Medium / High]

## Content Approach
- **Content Type**: [how-to / comparison / alternatives / category / case study]
- **Word Count Target**: [1200-1800 for Tier 1/2, 800-1200 for Tier 3]
- **Technical Depth**: [beginner / intermediate / advanced]
- **Unique Value Proposition**: [what makes this better than competitors]
- **Key Differentiators to Highlight**: [specific advantages]

## Conversion Strategy

### Primary CTA
- **Placement**: [After section 2, ~40% scroll depth]
- **Offer**: [Free trial / Demo / Pricing calculator / Comparison guide]
- **Angle**: [Speed / Cost / Control / Scale / Proof]
- **Copy**: [Specific CTA copy]

### Secondary CTAs
1. **Location**: [After intro, ~15% scroll depth] — [Offer], [Copy]
2. **Location**: [After proof section, ~70% scroll depth] — [Offer], [Copy]
3. **Location**: [End of article, ~90% scroll depth] — [Offer], [Copy]

### Product Positioning
- **For Tier 1/2**: Aggressive (we're the best solution for [use case])
- **For Tier 3**: Balanced (we're one solid solution, here's why)
- **Competitive Framing**: [How to position vs competitors mentioned]

### Proof Elements Required
1. [Specific case study or customer quote]
2. [Specific metric or data point]
3. [Competitive advantage with numbers]
4. [Technical proof or benchmark]

## Competing Content Analysis
- **Top 5 Ranking URLs**: [URL] - [what they do well] - [what they miss] (x5)
- **Content Gaps**: [opportunities they all miss]
- **Differentiation Angle**: [how we'll be uniquely valuable]
- **Proof Level**: [are competitors providing data/case studies?]

## Outline (Conversion-Optimized)
### [H2 Title That Hooks with Problem] — CTA #1
### [H2 Title That Delivers Immediate Value]
### [H2 Title Detailing Problem/Status Quo]
### [H2 Title Presenting Solution] — CTA #2
### [H2 Title Providing Proof] — CTA #3
### [H2 Title Addressing Objections]
### [H2 Title Summarizing Value] — CTA #4

## Internal Linking Strategy
- **Link to**: [3-4 related articles that support conversion funnel]
  1. [URL] - [anchor text] - [placement]
  2. [URL] - [anchor text] - [placement]
  3. [URL] - [anchor text] - [placement]

## Success Metrics
- **Target**: [X] conversions in first 90 days
- **Benchmark**: Similar Tier [X] articles average [Y] conversions
- **Track**: GA conversion events, GSC impressions/clicks

## Notes
[Any additional context, competitive intel, or strategic considerations]`}</CodeBlock>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="creation">
          <AccordionTrigger>Content Creation Process (Conversion-Optimized)</AccordionTrigger>
          <AccordionContent>
            <p><strong>Step 1: Research with Conversion Lens</strong> — Don't just research the topic. Research: What proof would convince this searcher? What objections need addressing? What competitor claims need countering? What unique data can we provide?</p>
            <p className="mt-3"><strong>Step 2: Outline for Conversion Journey</strong> — Traditional outline flows by topic logic. Conversion outline flows by persuasion logic.</p>
            <p className="mt-2 font-medium">Example: "AWS GPU Pricing vs [Your Product]" (Tier 2 Comparison)</p>
            <p>Bad Outline (Topic Logic): Introduction → AWS GPU Pricing Overview → [Your Product] GPU Pricing Overview → Feature Comparison → Conclusion.</p>
            <p>Good Outline (Conversion Logic):</p>
            <CodeBlock title="Conversion outline">{`- The Hidden Costs in AWS GPU Pricing [hook with problem]
- Quick Comparison Table [immediate value, positions us well]
- Breaking Down AWS GPU Pricing [detail their approach, highlight pain points]
- How [Your Product] Pricing Works Differently [position our advantages]
- Real Cost Comparison: 5 Common Workloads [concrete proof with numbers]
- When AWS Makes Sense vs When [Your Product] Wins [honest, builds trust]
- Migration Guide: AWS to [Your Product] [remove friction to switching]
- [CTA: Try [Your Product] free for 7 days, no credit card]`}</CodeBlock>
            <p className="mt-3"><strong>The Pattern:</strong> (1) Hook with pain point. (2) Provide immediate value (comparison table). (3) Detail the problem with status quo. (4) Present your solution. (5) Prove it with specific data. (6) Address objections honestly. (7) Remove conversion friction. (8) Clear CTA.</p>

            <p className="mt-4 font-medium">Example 2: "Jupiter vs Raydium: Best Solana DEX for Traders" (Tier 2 Comparison, Web3)</p>
            <CodeBlock title="Conversion outline">{`- Why DEX Choice Matters for Solana Traders [hook: slippage, fees, failed txs]
- Quick Comparison: Jupiter vs Raydium [immediate value table with routing, fees, liquidity]
- How Raydium Works: Direct Pool Trading [explain single-source trading, limitations]
- How Jupiter Works: Smart Route Aggregation [position our advantage: multi-DEX routing]
- Real Swap Comparison: 5 Common Trades [concrete proof: SOL→USDC, JUP→SOL, etc. with savings %]
- When Raydium Makes Sense vs When Jupiter Wins [honest: small trades vs large trades, new tokens vs established]
- Getting Started with Jupiter: 3-Minute Setup [remove friction, wallet connect flow]
- [CTA: Start swapping with Jupiter—connect wallet now]`}</CodeBlock>

            <Web2Callout>
              <p><strong>Web2 B2B Example:</strong> "HubSpot vs [Your CRM]: Best for Growth Teams". Outline: Hidden Costs in HubSpot Enterprise Plans → Quick Feature Comparison Table → Breaking Down HubSpot's Pricing Tiers → How [Your CRM] Works Differently → Real Cost Comparison: 5 Team Sizes → When HubSpot Wins vs When [Your CRM] Wins → Migration Guide → CTA: Start Free Trial.</p>
            </Web2Callout>
            <p className="mt-3"><strong>Step 3: Write with Conversion Elements Embedded</strong></p>
            <p><strong>Tier 1 & 2 Content (Bottom-of-Funnel):</strong> Product mentioned in first 100 words; aggressive CTAs (3-4 per article); comparison framing favors your solution; specific numbers and proof points; address objections directly; remove friction to trial/demo.</p>
            <p><strong>Tier 3 Content (Mid-Funnel):</strong> Provide genuine value first; product mentioned after establishing credibility; balanced CTAs (2-3 per article); present product as one solution among several; focus on education, conversion is secondary; build trust for future conversion.</p>
            <p className="mt-3"><strong>Step 4: CTA Placement Strategy</strong></p>
            <p><strong>For Tier 1/2 (Bottom-of-Funnel):</strong></p>
            <ol className="list-decimal pl-6 space-y-1">
              <li><strong>After Introduction (15% scroll)</strong> — Positioning: "Looking for [solution]? Try [Product]". Why: Capture ready-to-buy readers early.</li>
              <li><strong>Mid-Content (40% scroll)</strong> — Positioning: Contextual to surrounding content. Why: Catch engaged readers who are convinced.</li>
              <li><strong>After Proof Section (70% scroll)</strong> — Positioning: "See it in action" or "Start your trial". Why: Capitalize on momentum from proof.</li>
              <li><strong>End of Article (90% scroll)</strong> — Positioning: "Ready to get started?". Why: Catch completionists who read everything.</li>
            </ol>
            <p className="mt-2"><strong>For Tier 3 (Mid-Funnel):</strong></p>
            <ol className="list-decimal pl-6 space-y-1">
              <li><strong>After Value Delivery (50% scroll)</strong> — Positioning: "Want help with this? [Product] can assist". Why: After proving expertise, offer help.</li>
              <li><strong>End of Article (90% scroll)</strong> — Positioning: Soft CTA to related resource or trial. Why: Don't overwhelm, build relationship.</li>
            </ol>
            <p className="mt-3"><strong>CTA Copy Variation</strong> — Don't use same CTA copy 4 times. Vary based on context. I've found these angles work well:</p>

            <p className="mt-2 font-medium">Web3/DeFi Examples (Jupiter, Hyperliquid):</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li><strong>Speed Angle:</strong> "Get best swap prices in 1 second. No KYC, no waitlist. Start trading on Jupiter."</li>
              <li><strong>Cost Angle:</strong> "Save 0.5-2% on every swap. Jupiter routes across all Solana DEXs automatically. Connect wallet."</li>
              <li><strong>Simplicity Angle:</strong> "One click, best price. No manual DEX hopping. Swap with Jupiter now."</li>
              <li><strong>Proof Angle:</strong> "$10B+ in swaps. Trusted by 500K+ traders. See why Jupiter is #1 on Solana."</li>
            </ul>

            <p className="mt-2 font-medium">GPU/Infra Examples:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li><strong>Speed Angle:</strong> "Deploy H100s in under 2 minutes. No contracts, no waitlists. Access [Your Product] now."</li>
              <li><strong>Cost Angle:</strong> "Cut GPU costs by 90%. Enterprise-grade H100s at a fraction of AWS pricing. See pricing."</li>
              <li><strong>Simplicity Angle:</strong> "Skip the DevOps complexity. Bare metal with root access, managed for you. Try [Your Product]."</li>
              <li><strong>Scale Angle:</strong> "300K+ GPUs across 138 countries. Scale workloads without bottlenecks. Start building."</li>
            </ul>

            <Web2Callout>
              <p><strong>Web2 B2B SaaS CTA Examples:</strong></p>
              <p><strong>Speed:</strong> "Set up in 5 minutes. No dev work, no complex onboarding. Start free trial."</p>
              <p><strong>Cost:</strong> "Save $12K/year vs Salesforce. Same features, 70% less. See pricing."</p>
              <p><strong>Proof:</strong> "Trusted by 5,000+ companies. 4.8★ on G2. Read case studies."</p>
              <p><strong>Risk-Free:</strong> "14-day free trial. No credit card. Cancel anytime. Get started."</p>
            </Web2Callout>
            <p className="mt-3"><strong>Step 5: Internal Linking for Conversion Funnels</strong> — Pattern: Tier 3 (JTBD) → Tier 2 (Comparison) → Tier 1 (Category) → Product Page. Example: Article "How to Reduce AI Training Costs" (Tier 3): link "decentralized GPU platforms" → "Best Decentralized GPU Platforms" (Tier 1); "compared to AWS" → "AWS vs [Your Product] GPU Pricing" (Tier 2); "our case study with [Customer]" → case study with conversion CTA. Link placement: Within first 300 words link to most relevant bottom-of-funnel content; throughout body 3-5 contextual links; in CTA sections link to product or comparison content; avoid linking to other top-of-funnel content (keeps readers in conversion funnel).</p>

            <p className="mt-2"><strong>Web3-Specific:</strong> Link to on-chain proof—Dune dashboards showing TVL, transaction volume, user growth. Example: "Jupiter processes $2B+ in weekly volume" → link to Dune dashboard. This builds trust because the data is independently verifiable.</p>

            <Web2Callout>
              <p><strong>Web2 Proof Links:</strong> Case studies, analyst reports (Gartner, Forrester), third-party reviews (G2, Capterra), customer testimonials, ROI calculators.</p>
            </Web2Callout>
            <p className="mt-3"><strong>Step 6: Optimization Pass (Conversion Focus)</strong> — Traditional optimization: remove redundancy, improve readability, check keyword placement. Conversion optimization: remove friction to conversion; strengthen proof elements; address objections earlier; make CTAs more compelling; add social proof where relevant.</p>
            <p className="mt-2 font-medium">Optimization Checklist:</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Does intro immediately address searcher's problem?</li>
              <li>Are CTAs contextual and varied?</li>
              <li>Is product positioned appropriately for keyword tier?</li>
              <li>Do we provide specific numbers and proof?</li>
              <li>Are objections addressed before final CTA?</li>
              <li>Do internal links guide toward conversion?</li>
              <li>Is there friction to trial/demo? (Remove it.)</li>
              <li>Could a skeptical reader find reasons to convert?</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="optimization">
          <AccordionTrigger>Content Optimization Principles</AccordionTrigger>
          <AccordionContent>
            <p><strong>Writing Style:</strong> Lead with concrete value, not philosophy; use specific numbers over vague claims; short paragraphs (2-3 sentences max); active voice, present tense; remove marketing jargon; no em dashes, minimal emojis.</p>
            <p className="mt-2"><strong>Structure:</strong> Frontload key information; use H2s that tell a complete story; include scannable lists and tables; break up long sections with visuals/CTAs; end with clear next action.</p>
            <p className="mt-2"><strong>Technical Depth:</strong> Match audience expertise level; include code examples where relevant; explain complex concepts simply; provide both overview and deep-dive options; link to technical documentation.</p>
            <p className="mt-3"><strong>Conversion-Specific Principles:</strong></p>
            <p><strong>Proof Over Claims:</strong> Bad: "[Your product] offers the best GPU pricing". Good: "[Your product] H100s cost $2.49/hour vs AWS $8.12/hour (69% savings)".</p>
            <p><strong>Specificity Builds Trust:</strong> Bad: "Significantly faster deployment". Good: "Deploy H100 clusters in 90 seconds vs 3-5 days with AWS".</p>
            <p><strong>Address Objections Proactively:</strong> Don't wait for reader to think of objections. Address them: "Concerned about decentralized reliability? Our 99.9% uptime across 138 countries exceeds most centralized providers."</p>
            <p><strong>Make Conversion Frictionless:</strong> Bad CTA: "Contact sales to learn more". Good CTA: "Start free trial (no credit card required, 5-minute setup)".</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
