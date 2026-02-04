import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Blockquote } from "@/components/Blockquote";
import { CodeBlock } from "@/components/CodeBlock";
import { Web2Callout } from "@/components/Web2Callout";

export function Section2Content() {
  return (
    <>
      <p className="lead text-lg text-ink-muted">
        I developed this three-tier keyword model after seeing too many teams chase traffic over conversions. It works across Web3 and Web2—the buying intent signals are universal.
      </p>

      <Accordion type="single" collapsible className="mt-8 w-full">
        <AccordionItem value="shift">
          <AccordionTrigger>Strategic Shift: Conversions Over Traffic</AccordionTrigger>
          <AccordionContent>
            <p><strong>Traditional SEO Mistake:</strong> Most content teams prioritize keywords by: (1) Search volume (higher = better), (2) Keyword difficulty (lower = better). Result: High traffic, low conversions (0.03–0.19% typical).</p>
            <p className="mt-2"><strong>Pain Point SEO Approach:</strong> Prioritize keywords by: (1) Buying intent (higher = better), (2) Commercial value (higher = better), (3) Ranking difficulty (secondary consideration). Result: Lower traffic, high conversions (0.3–4.3% typical).</p>
            <Blockquote>
              A keyword with 100 searches/month and 2% conversion rate generates more value than a keyword with 10,000 searches/month and 0.05% conversion rate.
            </Blockquote>
            <p><strong>Calculation:</strong> 100 searches × 30% CTR × 2% conversion = 0.6 conversions/month. 10,000 searches × 30% CTR × 0.05% conversion = 1.5 conversions/month. The high-volume keyword wins by 2.5x, but requires 100x more traffic. ROI per content piece heavily favors the intent-focused approach.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tier1">
          <AccordionTrigger>Tier 1: Category Keywords (Extreme Bottom of Funnel)</AccordionTrigger>
          <AccordionContent>
            <p>People searching these terms are ready to buy. They don't need education or nurturing.</p>
            <p><strong>Characteristics:</strong> Direct product/service category searches; searcher already knows the solution type; high commercial intent; often high competition but worth fighting for.</p>
            <p className="mt-2"><strong>Examples I've targeted [DeFi/Web3]:</strong> "best Solana DEX", "Solana DEX aggregator", "decentralized perp exchange", "best decentralized derivatives platform", "Solana swap platform", "on-chain perpetual futures".</p>
            <p className="mt-2"><strong>Examples [GPU/Infra]:</strong> "decentralized GPU platform", "GPU cloud computing service", "distributed GPU infrastructure", "bare metal GPU hosting", "decentralized AI compute".</p>
            <p><strong>Content Formats:</strong> Product/service landing pages, feature comparison pages, pricing pages optimized for these terms, "Best [category]" listicles that position your product.</p>

            <Web2Callout>
              <p><strong>Web2 Category Keywords (B2B SaaS):</strong> "customer data platform", "marketing automation software", "sales engagement platform", "project management tool for agencies", "accounting software for startups".</p>
            </Web2Callout>
            <p><strong>Research Process:</strong> (1) List all ways someone could describe your product category. (2) Ask sales team: "What do prospects search for before finding us?" (3) Ask customers: "If you were to research our product, what would you search for?" (4) Check competitor title tags and H1s for category positioning. (5) Use DataForSEO to find variations and search volumes.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tier2">
          <AccordionTrigger>Tier 2: Comparison & Alternative Keywords (Extreme Bottom of Funnel)</AccordionTrigger>
          <AccordionContent>
            <p>People searching these are comparing options or looking to switch. They're deep in the buying process.</p>
            <p><strong>Characteristics:</strong> Indicates active product evaluation; often underestimated search volume (tools show zero, reality differs); lower competition than category keywords; very high conversion rates.</p>
            <p className="mt-2"><strong>Examples I've used [DeFi/Web3]:</strong> "Jupiter vs Raydium", "Hyperliquid vs dYdX", "best Hyperliquid alternatives", "Jupiter vs 1inch comparison", "dYdX alternatives for perpetual futures", "Raydium vs Orca swap comparison", "how to reduce swap slippage on Solana".</p>
            <p className="mt-2"><strong>Examples [GPU/Infra]:</strong> "AWS GPU pricing vs [Your Product]", "CoreWeave alternatives", "Lambda Labs vs [Your Product]", "Paperspace alternatives for AI training", "RunPod vs [Your Product] comparison".</p>
            <p><strong>Content Formats:</strong> Head-to-head comparison articles, "X Alternatives" listicles, feature comparison tables, migration guides from competitors.</p>

            <Web2Callout>
              <p><strong>Web2 Comparison Keywords (B2B SaaS):</strong> "HubSpot vs Salesforce", "Marketo alternatives", "best alternatives to Asana", "Slack vs Microsoft Teams for enterprise", "Figma vs Adobe XD comparison", "migrating from Intercom to [Your Product]".</p>
            </Web2Callout>
            <p><strong>Research Process:</strong> (1) Identify your top 5-10 competitors. (2) Create comparison keyword list for each: "[Competitor] vs [You]", "[You] vs [Competitor]", "[Competitor] alternative", "Best [Competitor] alternatives", "[Competitor] competitors". (3) Don't be discouraged by "zero search volume" in tools. (4) Write the content anyway if the competitor has significant market share. (5) Track actual traffic in GSC to validate.</p>
            <p className="mt-2 text-sm text-ink-muted">See also: Advanced: "Zero Volume" Keyword Strategy below.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tier3">
          <AccordionTrigger>Tier 3: Jobs-to-be-Done Keywords (Mid-Funnel)</AccordionTrigger>
          <AccordionContent>
            <p>These keywords indicate someone has a problem your product solves, even if they're not explicitly searching for your solution type yet.</p>
            <p><strong>Characteristics:</strong> Problem-aware, not necessarily solution-aware; still have buying intent (some fraction will purchase); often "how to" queries; medium competition; higher volume than Tier 1 & 2, lower conversion than Tier 1 & 2.</p>
            <p className="mt-2"><strong>Examples I've targeted [DeFi/Web3]:</strong> "how to reduce swap slippage on Solana", "how to find best DEX prices automatically", "how to trade perpetual futures on-chain", "how to avoid front-running on DEX swaps", "how to maximize liquidity provider returns", "how to get started with DeFi trading".</p>
            <p className="mt-2"><strong>Examples [GPU/Infra]:</strong> "how to reduce GPU training costs", "how to scale AI inference workloads", "how to migrate from AWS to decentralized GPU", "how to manage distributed GPU clusters", "how to optimize GPU utilization for AI".</p>
            <p><strong>Content Formats:</strong> How-to guides that present your product as a solution, problem-solution tutorials, technical implementation guides, best practices articles.</p>

            <Web2Callout>
              <p><strong>Web2 JTBD Keywords (B2B SaaS):</strong> "how to improve sales team productivity", "how to automate lead scoring", "how to reduce customer churn", "how to build a content marketing funnel", "how to integrate CRM with marketing automation".</p>
            </Web2Callout>
            <p><strong>Research Process:</strong> (1) Interview customers: "What problem were you trying to solve before finding us?" (2) Interview sales: "What do prospects say they need help with?" (3) Extract "jobs to be done" from customer conversations. (4) Prefix with "how to" / "ways to" / "best practices for". (5) Validate that your product legitimately solves this problem. (6) Ensure content provides value beyond just pitching your product.</p>
            <p className="mt-2"><strong>Critical Rule for JTBD Content:</strong> Your product should be presented as one solution among several, not the only solution. Provide genuine value first, conversion opportunity second. This builds trust and improves conversion rates.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="interview">
          <AccordionTrigger>Customer Interview Questions for Keyword Discovery</AccordionTrigger>
          <AccordionContent>
            <p><strong>Question Set 1: Category Keywords</strong> (ask customers and sales team):</p>
            <ol className="list-decimal pl-6 mt-1 space-y-1">
              <li>"How would you describe our product/service to someone who knew nothing about us?" — Listen for category descriptors: "It's a decentralized GPU platform" → category keyword.</li>
              <li>"If you were to research our product, what would you Google?" — Exact phrases become target keywords.</li>
              <li>"What words would you use to explain what we do to a technical colleague?" — Technical audience may use different terms than marketing assumes.</li>
            </ol>
            <p className="mt-3"><strong>Question Set 2: Comparison/Alternative Keywords</strong> (ask customers):</p>
            <ol className="list-decimal pl-6 mt-1 space-y-1" start={4}>
              <li>"If our product no longer existed, what would you use instead?" — These are your true competitors → build comparison content.</li>
              <li>"What other products did you evaluate before choosing us?" — Build "[Competitor] vs [Us]" content for each.</li>
              <li>"What product were you using before switching to us?" — Build "[Old Product] alternative" content.</li>
            </ol>
            <p className="mt-3"><strong>Question Set 3: Jobs-to-be-Done Keywords</strong> (ask customers):</p>
            <ol className="list-decimal pl-6 mt-1 space-y-1" start={7}>
              <li>"What specific problem were you trying to solve when you found us?" — Turn problem statements into "how to [solve problem]" keywords.</li>
              <li>"What are the top 3 benefits you get from our product?" — Each benefit suggests a problem → keyword opportunity.</li>
              <li>"What became possible after using our product that wasn't before?" — Capabilities unlocked = problems solved = keywords.</li>
            </ol>
            <p className="mt-3"><strong>Question Set 4: Search Behavior</strong> (ask sales team):</p>
            <ol className="list-decimal pl-6 mt-1 space-y-1" start={10}>
              <li>"What questions do prospects ask on discovery calls?" — Common questions = search queries.</li>
              <li>"What do prospects say they've already tried before talking to us?" — Failed solutions indicate problem awareness → JTBD keywords.</li>
              <li>"What objections do you hear most often?" — Objections reveal concerns → create content addressing them.</li>
            </ol>
            <p className="mt-3"><strong>Question Set 5: Web3-Specific Discovery</strong> (ask customers):</p>
            <ol className="list-decimal pl-6 mt-1 space-y-1" start={13}>
              <li>"Which chains or L2s are you most active on?" — Chain-specific keywords (Solana, Base, Arbitrum).</li>
              <li>"Where do you go to find alpha or research protocols?" — Distribution channels for content (CT, Discord, Dune).</li>
              <li>"What metrics do you track most closely?" — TVL, APY, transaction volume, slippage → keyword opportunities.</li>
              <li>"Which DEXs or protocols have you switched away from, and why?" — Competitor comparison content gold.</li>
            </ol>

            <Web2Callout>
              <p><strong>Web2-Specific Questions (B2B SaaS):</strong> "What's your current tech stack?" "What tools did you evaluate before choosing us?" "What's your biggest bottleneck right now?" "How do you measure success for this tool category?" "Who else was involved in the buying decision?"</p>
            </Web2Callout>

            <p className="mt-3"><strong>Implementation:</strong> Conduct 10-15 customer interviews; survey 20-30 customers with open-ended questions; interview entire sales or BD team; look for repeated phrases (5+ people saying same thing); exact customer language often differs from how marketing describes the product.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="competitor">
          <AccordionTrigger>Competitor Analysis Process (Pain Point SEO Lens)</AccordionTrigger>
          <AccordionContent>
            <p><strong>Phase 1: Identify Who's Actually Winning Conversions</strong> — Don't just analyze competitors with high traffic. Find competitors who are likely converting well. Indicators: Strong presence on comparison keywords; high CPC values on their brand terms (indicates commercial value); robust category keyword positioning; case studies and ROI calculators prominent on site; PPC spend on bottom-of-funnel terms.</p>
            <p className="mt-3"><strong>Phase 2: Reverse-Engineer Their Conversion Keywords</strong> — For top 3-5 competitors: (1) Extract all ranked keywords via DataForSEO. (2) Filter for: comparison keywords (contains "vs", "alternative", "comparison"), category keywords (contains your product category terms), JTBD keywords (contains "how to", "ways to", "best practices"). (3) Ignore informational keywords unless strategic. (4) Check which keywords they're running PPC for (indicates conversion value).</p>
            <p className="mt-3"><strong>Phase 3: Identify Comparison Gaps</strong> — Critical opportunity: competitors rarely create "Competitor vs Us" pages because it feels awkward. For each major competitor, check if they have "[Their Brand] vs [Other Competitor]" or "Best alternatives to [Other Competitor]" content. Create these pages from your perspective; position yourself favorably. Often ranks easily because competitor won't create counter-content. Example: If Competitor A and B don't have "A vs B" content, you create "Competitor A vs Competitor B vs [Your Product]" and capture that search traffic.</p>
            <p className="mt-3"><strong>Phase 4: CPC-Weighted Opportunity Scoring</strong></p>
            <CodeBlock title="Opportunity Score">{`Opportunity Score = (Search Volume / Keyword Difficulty) × CPC × Intent Tier Multiplier

Intent Tier Multipliers:
- Category Keywords: 3.0
- Comparison/Alternative: 3.0
- JTBD Keywords: 2.0
- Informational: 0.5`}</CodeBlock>
            <p className="mt-2">This formula systematically deprioritizes high-volume, low-intent keywords that traditional SEO would chase.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="workflow">
          <AccordionTrigger>Keyword Research Workflow (Pain Point SEO Method)</AccordionTrigger>
          <AccordionContent>
            <p><strong>Step 1: Start with Customer Language, Not Tools</strong> — Complete customer/sales interviews; extract exact phrases customers use; document problems they were trying to solve; list all mentioned competitors/alternatives.</p>
            <p><strong>Step 2: Build Category Keyword List</strong> — Start with how customers describe your product; add category synonyms; include modifiers (best, top, leading, enterprise, etc.); add location modifiers if relevant; include technology stack modifiers (cloud, decentralized, etc.).</p>
            <p><strong>Step 3: Build Comparison Keyword List</strong> — List all competitors mentioned by customers. For each competitor create: "[You] vs [Competitor]", "[Competitor] vs [You]", "[Competitor] alternative", "[Competitor] alternatives", "Best alternatives to [Competitor]", "[Competitor] competitors". Don't filter by search volume yet.</p>
            <p><strong>Step 4: Build JTBD Keyword List</strong> — Take each problem statement from interviews; convert to "how to [solve problem]", "ways to [solve problem]", "best practices for [solving problem]", "[problem] solution"; validate your product genuinely solves this problem; only keep keywords where you can provide real value.</p>
            <p><strong>Step 5: Validate with DataForSEO</strong> — Use google_keyword_ideas for related terms and volume; google_ads_search_volume to validate actual volume; bulk_keyword_difficulty to assess ranking difficulty; extract CPC data for commercial intent.</p>
            <p><strong>Step 6: Calculate Pain Point SEO Scores</strong> — For each keyword: Score = (Volume / Difficulty) × CPC × Intent Multiplier. Sort by: (1) Tier 1 & 2 by score, (2) Tier 3 by score, (3) Archive informational unless strategic.</p>
            <p><strong>Step 7: Prioritize Based on Resource Constraints</strong></p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li><strong>1-2 writers:</strong> Focus exclusively on Tier 1 & 2 for 6-12 months; only move to Tier 3 after exhausting bottom-of-funnel opportunities.</li>
              <li><strong>3-5 writers:</strong> 70% effort on Tier 1 & 2, 30% on highest-scoring Tier 3.</li>
              <li><strong>6+ writers:</strong> 50% Tier 1 & 2, 40% Tier 3, 10% strategic top-of-funnel (linkbait, brand awareness).</li>
            </ul>
            <p className="mt-2"><strong>Critical Insight:</strong> Most content teams are over-resourced for top-of-funnel and under-resourced for bottom-of-funnel. Flip this ratio.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cluster">
          <AccordionTrigger>Topic Cluster Strategy (Conversion-Focused)</AccordionTrigger>
          <AccordionContent>
            <p><strong>Traditional Cluster Problem:</strong> Most cluster strategies organize content by topical relevance, not buying intent. This creates beautiful architecture that doesn't convert.</p>
            <p><strong>Pain Point SEO Cluster Approach I've used:</strong> Organize clusters by customer journey stage and conversion potential.</p>

            <p className="mt-3"><strong>Cluster Type 1: Product Category Cluster (Web3 example)</strong> — Hub: "Best Solana DEX Aggregators: Complete Guide 2026". Spokes (all bottom-of-funnel): "What is a DEX Aggregator?", "Jupiter Pricing and Fees", "Solana DEX Aggregator Comparison", "Best DEX for Solana Trading", "How to Choose a DEX Aggregator". Internal linking: all spokes link to hub and to each other; hub links to all spokes. Conversion: Hub has "Try Jupiter" CTA; each spoke has contextual CTA.</p>

            <Web2Callout>
              <p><strong>Web2 Category Cluster Example:</strong> Hub: "Best Marketing Automation Platforms 2026". Spokes: "[Your Product] Pricing", "Email Marketing Software Comparison", "How to Choose Marketing Automation", "[Category] vs CRM Platforms".</p>
            </Web2Callout>

            <p className="mt-3"><strong>Cluster Type 2: Competitor Alternative Cluster (Web3 example)</strong> — Hub: "Top dYdX Alternatives for Perpetual Trading". Spokes: "Hyperliquid vs dYdX", "dYdX vs GMX", "Migrating from dYdX to Hyperliquid", "dYdX Fees vs Hyperliquid Fees", "dYdX Pros and Cons Analysis". Conversion: Each page presents Hyperliquid as superior alternative with migration path and feature comparison.</p>

            <Web2Callout>
              <p><strong>Web2 Competitor Cluster Example:</strong> Hub: "Best HubSpot Alternatives for Growth Teams". Spokes: "[Your Product] vs HubSpot", "HubSpot vs Marketo", "Migrating from HubSpot to [Your Product]", "HubSpot Pricing Comparison".</p>
            </Web2Callout>

            <p className="mt-3"><strong>Cluster Type 3: Jobs-to-be-Done Cluster (Web3 example)</strong> — Hub: "How to Trade Perpetual Futures On-Chain Without CEX Risk". Spokes: "How to Get Started with Decentralized Perps", "How to Reduce Trading Fees on Perpetual DEXs", "Best Practices for On-Chain Margin Trading", "Common Mistakes Trading Decentralized Perpetuals". Conversion: Hub presents multiple solutions (Hyperliquid, dYdX, GMX), positions Hyperliquid favorably; spokes show implementation with Hyperliquid features.</p>

            <Web2Callout>
              <p><strong>Web2 JTBD Cluster Example:</strong> Hub: "How to Reduce Customer Churn by 50%". Spokes: "How to Identify At-Risk Customers", "How to Build a Customer Health Score", "Best Practices for Retention Campaigns", "Common Churn Reduction Mistakes".</p>
            </Web2Callout>
            <p className="mt-3 font-medium">Implementation Phasing:</p>
            <ul className="list-disc pl-6">
              <li><strong>Phase 1 (Months 1-3):</strong> Category Cluster — establish category authority, capture ready-to-buy traffic, generate early conversions.</li>
              <li><strong>Phase 2 (Months 4-6):</strong> Top 3 Competitor Clusters — capture comparison traffic, win switch-consideration conversions, build competitive content moat.</li>
              <li><strong>Phase 3 (Months 7-9):</strong> Top 2 JTBD Clusters — expand to problem-aware audience, demonstrate expertise, build topical authority.</li>
              <li><strong>Phase 4 (Months 10-12):</strong> Expand based on data — double down on highest-converting clusters, build additional JTBD clusters, consider strategic top-of-funnel if bottom saturated.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="measuring">
          <AccordionTrigger>Measuring Success: Conversions, Not Traffic</AccordionTrigger>
          <AccordionContent>
            <p><strong>Critical shift in metrics:</strong> Traditional SEO tracks traffic, rankings, and domain authority. Pain Point SEO tracks conversions by article, conversion rate by keyword tier, and revenue influenced by content.</p>
            <p className="mt-2"><strong>What to track in Google Analytics:</strong> Set up events for product signups from blog posts, demo requests from specific articles, free trial starts, and contact form submissions from content. Use last-click (and optionally first-click) attribution.</p>
            <p className="mt-2"><strong>Key insight:</strong> The article ranked 16th for traffic can generate the most conversions. Prioritize by conversion rank, not traffic rank.</p>
            <p className="mt-3 font-medium">Optimization:</p>
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li><strong>High traffic + low conversions:</strong> Improve CTAs; add product mentions; consider archiving if top-of-funnel.</li>
              <li><strong>Low traffic + high conversions:</strong> Improve content to rank higher; build cluster; double down on this tier.</li>
              <li><strong>High traffic + high conversions:</strong> Maintain; use as link destination; replicate format.</li>
              <li><strong>Low traffic + low conversions:</strong> Deprioritize or archive; redirect to stronger content.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="zerovolume">
          <AccordionTrigger>Advanced: "Zero Volume" Keyword Strategy</AccordionTrigger>
          <AccordionContent>
            <p><strong>The Pattern:</strong> Tools like Ahrefs, SEMrush, and Moz frequently show zero search volume for keywords that actually drive conversions.</p>
            <p><strong>Why This Happens:</strong> (1) Long-tail combinations not in tool databases. (2) Emerging search patterns not yet captured. (3) B2B searches with small absolute volume but high value. (4) Localized or industry-specific terminology. (5) <strong>Web3-specific:</strong> Crypto terminology moves faster than SEO tools can index—new protocols, meme coins, and trading slang emerge weekly.</p>
            <p className="mt-2 font-medium">How to Identify Valuable Zero-Volume Keywords:</p>
            <p><strong>Method 1: Customer Language Audit</strong> — Transcribe 10 sales calls; extract exact questions prospects ask; turn questions into keywords; write content even if tools show zero volume.</p>
            <p><strong>Method 2: Competitor Analysis</strong> — Find competitor content with no keyword ranking in tools; check if it gets backlinks (signals value); check if they're running PPC to it (signals conversions); create competing content.</p>
            <p><strong>Method 3: Search Suggestion Mining</strong> — Type seed keywords into Google; review "People Also Ask" and "Related Searches"; capture autocomplete suggestions; many won't show volume in tools but get actual searches.</p>
            <p><strong>Method 4: Forum and Community Mining</strong> — Find industry communities (Reddit, Discord, Slack, Crypto Twitter, Telegram, Farcaster); extract common questions/problems; turn into keywords; create content addressing them. In Web3: monitor protocol Discords, governance forums, and CT threads for emerging pain points.</p>

            <Web2Callout>
              <p><strong>Web2-Specific Mining:</strong> Industry forums (Product Hunt, Indie Hackers, niche Subreddits), Slack/Discord communities, G2 and Capterra reviews for competitor pain points.</p>
            </Web2Callout>
            <p className="mt-2"><strong>Validation Process:</strong> (1) Create content targeting "zero volume" keyword. (2) Track in Google Search Console for 90 days. (3) Measure actual impressions and clicks. (4) If receives traffic: tool was wrong, keyword is valuable. (5) If no traffic after 90 days: keyword genuinely has no volume.</p>
            <p><strong>Success Rate:</strong> Approximately 30% of "zero volume" keywords actually drive meaningful traffic and conversions. Worth the experimentation investment.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
