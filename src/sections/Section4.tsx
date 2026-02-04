import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CodeBlock } from "@/components/CodeBlock";
import { Web2Callout } from "@/components/Web2Callout";

export function Section4Content() {
  return (
    <>
      <p className="lead text-lg text-ink-muted">
        I developed this process to get customers to participate, run conversion-focused interviews, and structure case studies that support SEO and close deals. Works across Web3 protocols and Web2 SaaS—the structure is universal.
      </p>

      <Accordion type="single" collapsible className="mt-8 w-full">
        <AccordionItem value="anatomy">
          <AccordionTrigger>Anatomy of a Case Study</AccordionTrigger>
          <AccordionContent>
            <p>Effective case studies follow a consistent shape: an impact card above the fold, then Challenge → Solution & Implementation → Results, with optional technical details and takeaways. This structure matches what converts (proof, numbers, quotes) and what supports content (Tier 1/2/3 keywords).</p>
            <p className="mt-3 font-medium">Standard structure:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Impact summary card (above fold)</strong> — One-line challenge; 3–5 key results (cost %, time saved, scale); hero quote; CTA. Readers should get the story in 30 seconds.</li>
              <li><strong>The challenge</strong> — About the company (stage, size, what they do). What they were struggling with (cost, performance, procurement, business impact). Why they needed a change. Optional: what they tried before.</li>
              <li><strong>The solution</strong> — Why they chose you (decision factors, decisive moment). What they implemented (products, deployment method, timeline). Pull quote on implementation or technical advantage.</li>
              <li><strong>The results</strong> — By the numbers (before/after table when relevant; cost comparison table for cost-focused stories). Business/strategic impact. What became possible. Second hero quote.</li>
              <li><strong>Optional:</strong> Technical details (architecture, integration, security). Key takeaways (what worked, lessons, advice for others).</li>
              <li><strong>CTA</strong> — Try product, contact sales, or read related content.</li>
            </ol>
            <p className="mt-3 text-sm text-ink-muted">Use a cost comparison table (e.g. Provider | Total cost | vs baseline) when the story is cost-focused; it reinforces the key result and is highly scannable.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="participate">
          <AccordionTrigger>Getting Customers to Participate</AccordionTrigger>
          <AccordionContent>
            <p><strong>The challenge:</strong> Case studies are your strongest conversion content, but customers are busy, cautious about sharing competitive intel, or don't see the value. Strategy and incentives matter.</p>
            <p className="mt-2 font-medium">Customer identification:</p>
            <p><strong>Tier 1 (pursue actively):</strong> Impressive, quantifiable results; recognizable brands in your target market; customers who switched from a specific competitor; vocal advocates.</p>
            <p><strong>Tier 2 (opportunistic):</strong> Satisfied customers with good (not spectacular) results; smaller companies willing to trade exposure for credibility; emerging use cases you want to expand into.</p>
            <p><strong>Tier 3 (strategic):</strong> Enterprise logos for new verticals; use cases that match your highest-value keywords; willingness to do video.</p>
            <p className="mt-2"><strong>Outreach timing:</strong> Best: 60–90 days after successful implementation. Good: after a support win, or at renewal. Avoid: during onboarding, after complaints, or their busy seasons.</p>
            <p className="mt-2 font-medium">Outreach templates:</p>
            <CodeBlock title="Value exchange">{`Subject: Quick question + an opportunity

Hi [Name],

Noticed your team hit [specific milestone] last month. We're putting together a case study featuring companies that have [achieved similar outcome]. Would love to include [Company].

What's in it for you: co-branded promotion, featured placement (backlinks), early access to [feature], $[X] credit. One 30-min call; we handle writing/design.

Worth a conversation?`}</CodeBlock>
            <CodeBlock title="Mutual win (smaller companies)">{`Subject: Partnership opportunity

Hi [Name],

We'd like to feature [Company] in a case study about [specific achievement]: prominent placement, social promotion, backlink, content you can reuse. Draft for approval before publishing. Would 30 minutes next week work?`}</CodeBlock>
            <p className="mt-2 font-medium">Incentives:</p>
            <p>Monetary (credits, extended terms, discount). Exposure (webinar, guest post, social spotlight, press intro). Relationship (product access, beta, executive events). Match to company stage—startups often value exposure; enterprises often prefer relationship perks.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="interview">
          <AccordionTrigger>Interview Guide (Phase-Based)</AccordionTrigger>
          <AccordionContent>
            <p><strong>Why phase-based:</strong> Structure the call so you get company context, pre-product situation, decision process, implementation, and results in order. That maps directly to Challenge → Solution → Results in the case study. Always get full name, role, company, and consent to quote.</p>
            <p className="mt-2 font-medium">Intro (2–3 min)</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Could you briefly describe your company's main product or service, industry, and growth stage (e.g. seed, Series A)?</li>
              <li>Which specific AI or compute-intensive tasks are most critical to your business today?</li>
            </ul>
            <p className="mt-3 font-medium">Pre–[Product] situation</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>What were the most significant infrastructure challenges you faced before adopting [product] (e.g. high costs, slow provisioning)?</li>
              <li>Can you give an estimate of monthly compute costs prior to using [product]?</li>
              <li>How long did it typically take to provision GPU/resources for your projects?</li>
            </ul>
            <p className="mt-3 font-medium">Choosing [Product]</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>What specific reasons led you to choose [product] over other providers?</li>
              <li>Was there one decisive factor that convinced your team?</li>
              <li>What were your top evaluation criteria? Who was involved in the decision?</li>
            </ul>
            <p className="mt-3 font-medium">Technical implementation</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Which [product] offerings did you implement (e.g. cloud, bare metal, specific APIs)?</li>
              <li>Can you describe integrating [product] with your existing systems and workflows?</li>
              <li>Any critical configurations or workflows that contributed to your success?</li>
            </ul>
            <p className="mt-3 font-medium">Results & metrics</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>What measurable outcomes have you achieved (cost reductions, deployment speed, model performance)?</li>
              <li>Any benchmarks or examples that demonstrate the value?</li>
              <li>How much has [product] improved your team's productivity or accelerated time-to-market?</li>
              <li>Have these improvements impacted ROI or ability to scale? How?</li>
            </ul>
            <p className="mt-3 font-medium">Strategic impact & closing</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>How has the partnership influenced your strategic planning, product roadmap, or capabilities?</li>
              <li>What new capabilities or features were enabled by the savings or performance gains?</li>
              <li>Are there any standout features or benefits you'd particularly emphasize?</li>
            </ul>
            <p className="mt-3 font-medium">Web3-Specific Questions (DeFi/Protocol)</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>What TVL or transaction volume growth have you seen since integrating/using [protocol]?</li>
              <li>How has [protocol] affected your token metrics (holders, daily active wallets, trading volume)?</li>
              <li>What on-chain metrics best demonstrate the impact? (Can we link to a Dune dashboard?)</li>
              <li>How has community growth (Discord, governance participation) changed?</li>
              <li>Which chains or L2s are you most active on, and why does [protocol] fit your strategy?</li>
              <li>What percentage of your users/liquidity came from [protocol] integration?</li>
            </ul>

            <Web2Callout>
              <p><strong>Web2 B2B Results Questions:</strong> "What MRR or ARR growth since implementing?" "How has churn or NPS changed?" "What pipeline velocity or conversion rate improvements?" "How many hours/week saved for your team?" "What ROI timeframe—3 months, 6 months, 1 year?"</p>
            </Web2Callout>

            <p className="mt-3 font-medium">Conversion-specific (Pain Point SEO)</p>
            <p>Use case studies as proof for Tier 1/2/3 content. Ask: "If a company was comparing us to [competitor you replaced], what would you tell them?" "What's the one metric that made this decision a no-brainer?" "What would you say to someone hesitant about [common objection]?" Use answers in comparison content, key results, and objection handling.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="template">
          <AccordionTrigger>Case Study Template (Conversion-Optimized)</AccordionTrigger>
          <AccordionContent>
            <p className="font-medium">Quick reference (matches Anatomy):</p>
            <ul className="list-disc pl-6 mt-1 space-y-0.5 text-sm">
              <li><strong>Impact card:</strong> [Customer] | [Industry]. The Challenge: [one sentence]. Key Results: bullets (cost %, time, scale). Hero quote. CTA.</li>
              <li><strong>Challenge:</strong> About [Customer]. What they were struggling with (cost, performance, DX, business impact). Why they needed a change.</li>
              <li><strong>Solution:</strong> Why [Customer] chose you. What they implemented (products, deployment, timeline). Pull quote.</li>
              <li><strong>Results:</strong> By the numbers (table when relevant). Business impact. What became possible. Hero quote #2. CTA.</li>
              <li><strong>Optional:</strong> Technical details. Key takeaways. Final CTA + related resources.</li>
            </ul>
            <p className="mt-4 font-medium">Full template (expand to copy):</p>
            <CodeBlock title="Case study structure">{`## Impact Summary Card
[Customer Name] | [Industry/Use Case]
**The Challenge:** [One sentence — their main problem]
**Key Results:**
• [X]% cost reduction vs [previous provider]
• [X] seconds/minutes to deploy [resource]
• $[X] monthly savings | [X]x faster [metric]
"[Most compelling quote about the transformation]" — [Name, Title, Company]
[CTA]

## The Challenge
**About [Customer]:** [2–3 sentences: what they do, team size, AI/ML focus]
**What they were struggling with:** [Bullets: cost, performance, developer experience, business impact]
**Why they needed a change:** [2–3 sentences: triggers — budget, failed deployments, competitive pressure]

## The Solution
**Why [Customer] chose [Product]:** [Cost, speed, flexibility, DX — with specifics]
**What they implemented:** [Products used, deployment method, regions]. **Timeline:** Week 1 … Week 2–4 … Month 2+
**Pull quote:** "[Quote on implementation or technical advantage]" — [Name, Title]

## The Results
**By the numbers:** [Before/after table or cost comparison table when relevant]
**Business impact:** [Revenue, new capabilities, team productivity, competitive advantage]
**What became possible:** [New capability 1], [New capability 2]
**Hero quote #2:** "[Quote on overall impact]" — [Name, Title]
[CTA]

## Optional: Technical Details
[Architecture, integration approach, security/compliance]

## Key Takeaways
What worked well. Lessons learned. Advice for others.
[Final CTA] [Related resources / other case studies]`}</CodeBlock>
            <p className="mt-3 font-medium">SEO for case studies:</p>
            <p>Target: "[Use case] case study", "[Industry] case study [category]", "[Metric/outcome] case study", "[Competitor] alternative case study". Link from comparison and JTBD articles to case studies; link from case studies back to product and comparison pages.</p>

            <p className="mt-3 font-medium">Web3 Case Study Results (Key Metrics):</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li><strong>TVL growth:</strong> "$50M → $200M TVL in 90 days" (with Dune dashboard link)</li>
              <li><strong>Transaction volume:</strong> "3M → 12M monthly transactions" or "$500M → $2B monthly volume"</li>
              <li><strong>Daily active users:</strong> "5K → 25K daily active wallets" (DAU/MAU ratio improvement)</li>
              <li><strong>Token metrics:</strong> "Token holders 10K → 50K" or "Average hold time 3 days → 14 days"</li>
              <li><strong>Community growth:</strong> "Discord 5K → 25K members" or "Governance participation 200 → 2,000 voters"</li>
              <li><strong>Cost savings:</strong> "Gas fees reduced 80%" or "Trading fees 0.3% → 0.05%"</li>
            </ul>

            <Web2Callout>
              <p><strong>Web2 B2B Case Study Results (Key Metrics):</strong> MRR/ARR growth, churn reduction %, NPS improvement, pipeline velocity increase, time saved per week/month, cost savings vs previous solution, conversion rate lift, team productivity gains.</p>
            </Web2Callout>

            <p className="mt-3 font-medium">Example Web3 Case Study Skeleton (Hyperliquid-style DeFi):</p>
            <CodeBlock title="DeFi Protocol Example">{`## Impact Summary Card
DeltaPrime | DeFi Lending Protocol
**The Challenge:** High slippage and poor liquidity depth on existing DEX integrations limited borrower experience
**Key Results:**
• TVL grew 300% ($15M → $60M) in 60 days
• Trading volume increased 5x ($100M → $500M monthly)
• Liquidation slippage reduced from 2.8% to 0.3%
• User retention improved from 45% to 78% (monthly active)
"Integrating Hyperliquid's perpetual DEX gave our borrowers the deep liquidity they needed to manage leverage confidently. Game-changer for our protocol." — [Name, Title, DeltaPrime]
[CTA: See how Hyperliquid can power your DeFi protocol]

## The Challenge
**About DeltaPrime:** DeFi lending protocol on Arbitrum, 10K active borrowers, $15M TVL at start
**Struggling with:** Poor DEX liquidity causing high slippage on large trades, borrowers churning due to bad execution, limited leverage options compared to CEXs
**Trigger:** Two major borrowers switched to CEXs due to slippage and liquidation losses

## The Solution
**Why Hyperliquid:** Best on-chain liquidity depth, perpetual contracts without CEX custody risk, <0.5% slippage on large orders
**Implementation:** Integrated Hyperliquid perp DEX as liquidation venue, deployed smart contract bridge, 2-week integration timeline
**Pull quote:** "The API integration was straightforward, and liquidity depth exceeded our expectations immediately." — [Name, Title]

## The Results
**By the numbers:** (Table: Before/After TVL, Volume, Slippage, Retention)
**Business impact:** Protocol became competitive with CEX leverage offerings, retention improved dramatically, new institutional borrowers onboarded
**What became possible:** Launched 50x leverage products, expanded to new asset pairs, reduced liquidation losses by 85%
**Hero quote #2:** "[compelling transformation quote]" — [Name, Title]
[CTA: Get started with Hyperliquid]

## Technical Details
Smart contract architecture, Hyperliquid API integration, risk management parameters, governance vote process

## Key Takeaways
Deep liquidity transforms user experience. On-chain execution can match CEX quality. Integration complexity was lower than expected.
[Related: "Best Decentralized Perpetual Exchanges" | "Hyperliquid vs dYdX Comparison"]`}</CodeBlock>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </>
  );
}
