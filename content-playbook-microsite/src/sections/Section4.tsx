import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CodeBlock } from "@/components/CodeBlock";

export function Section4Content() {
  return (
    <>
      <p className="lead text-lg text-ink-muted">
        How to get customers to participate, run conversion-focused interviews, and structure case studies so they support SEO and close deals. Based on real published case studies and a repeatable template + interview guide.
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
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </>
  );
}
