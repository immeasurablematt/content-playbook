import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CodeBlock } from "@/components/CodeBlock";
import { Web2Callout } from "@/components/Web2Callout";

export function SectionReportingContent() {
  return (
    <>
      <p className="lead text-lg text-ink-muted">
        I built this reporting framework after seeing too many teams drown in vanity metrics. Track what drives conversions, revenue, and protocol health—not just traffic.
      </p>

      <Accordion type="single" collapsible className="mt-8 w-full">
        <AccordionItem value="dashboard">
          <AccordionTrigger>Pain Point SEO Metrics Dashboard</AccordionTrigger>
          <AccordionContent>
            <p><strong>Purpose:</strong> Track content performance by what matters—conversions and revenue influence, not just traffic. This dashboard structure works for Web3 and Web2; swap the metrics based on your business model.</p>

            <p className="mt-3 font-medium">Core Metrics (Pain Point SEO Method):</p>

            <table className="my-4 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-2 text-left font-medium">Metric</th>
                  <th className="py-2 text-left font-medium">What it measures</th>
                  <th className="py-2 text-left font-medium">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Conversions by Article</td>
                  <td className="py-2">How many sign-ups, trials, or wallet connects came from each piece of content</td>
                  <td className="py-2">The #1 metric. Traffic is vanity; conversions are sanity.</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Conversion Rate by Tier</td>
                  <td className="py-2">Tier 1/2 vs Tier 3 keyword conversion rates</td>
                  <td className="py-2">Validates the tiering system. Tier 1/2 should convert 5–10x higher.</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Traffic by Tier</td>
                  <td className="py-2">How much organic traffic each tier generates</td>
                  <td className="py-2">Secondary metric. Tier 3 will have more traffic but lower conversion.</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Revenue Influenced</td>
                  <td className="py-2">How much revenue (or TVL, or tx volume) can be attributed to content touchpoints</td>
                  <td className="py-2">Connects content directly to business outcomes. Use last-touch or multi-touch attribution.</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Ranking Movement</td>
                  <td className="py-2">Position changes for target keywords (weekly or monthly)</td>
                  <td className="py-2">Leading indicator. Ranking up = future traffic and conversions.</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Content Velocity</td>
                  <td className="py-2">Articles published per month, by tier</td>
                  <td className="py-2">Operational metric. Are you publishing enough Tier 1/2 content?</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-3 font-medium">Web3-Specific Metrics to Add:</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li><strong>Content → Wallet Connections:</strong> How many wallet connects originated from content (tracked via UTM or referral param)</li>
              <li><strong>Content → TVL Influenced:</strong> Track wallet addresses that came from content → measure their contributed TVL over 30/60/90 days</li>
              <li><strong>Content → Transaction Volume:</strong> Similar to TVL—how much tx volume came from content-acquired users</li>
              <li><strong>Content → Governance Participation:</strong> Did content-acquired users vote in governance? (Higher quality users)</li>
            </ul>

            <Web2Callout>
              <p><strong>Web2 B2B Metrics to Add:</strong> Content → MQLs generated, Content → Pipeline influenced ($), Content → Closed-won revenue, Content → Customer LTV (segment by acquisition source). For B2C: Content → Free trial starts, Content → Paid conversions, Content → Retention rate by source.</p>
            </Web2Callout>

            <p className="mt-3 font-medium">Example Dashboard View (Spreadsheet or BI Tool):</p>
            <CodeBlock title="Sample Row (Jupiter Blog Article)">{`Article: "Jupiter vs Raydium: Best Solana DEX for Traders"
Keyword Tier: Tier 2 (Comparison)
Target Keyword: "jupiter vs raydium"
Publish Date: 2025-01-15
---
Traffic (Last 30d): 2,847
Conversions (Wallet Connects): 68
Conversion Rate: 2.39%
Avg. TVL per User (90d): $12,400
TVL Influenced: $843,200
Ranking: #2 (up from #5 last month)
Status: 🟢 Green (high conversion, ranking up)`}</CodeBlock>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="zones">
          <AccordionTrigger>Green/Yellow/Orange/Red Zone System</AccordionTrigger>
          <AccordionContent>
            <p><strong>What I use:</strong> A simple color-coding system to quickly assess content performance. Traffic is NOT the primary input—conversion rate and business impact are.</p>

            <p className="mt-3 font-medium">Zone Definitions:</p>

            <p className="mt-2"><strong>🟢 Green Zone (Winning Content):</strong></p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Conversion rate &gt;2% (Tier 1/2) or &gt;0.5% (Tier 3)</li>
              <li>Ranking in top 5 for target keyword</li>
              <li>Traffic stable or growing month-over-month</li>
              <li>Revenue/TVL influence high relative to other content</li>
            </ul>
            <p className="mt-1 italic text-sm">Action: Maintain. Build cluster around it. Replicate format for similar keywords. Use as internal link destination.</p>

            <p className="mt-3"><strong>🟡 Yellow Zone (Needs Optimization):</strong></p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Conversion rate 0.5–2% (Tier 1/2) or 0.1–0.5% (Tier 3)</li>
              <li>Ranking #6–15 for target keyword (page 1–2)</li>
              <li>Traffic flat or slightly declining</li>
            </ul>
            <p className="mt-1 italic text-sm">Action: Optimize CTAs, add more proof elements, improve content to rank higher, build cluster to support it. Review and improve within 30 days.</p>

            <p className="mt-3"><strong>🟠 Orange Zone (Underperforming):</strong></p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Conversion rate &lt;0.5% (Tier 1/2) or &lt;0.1% (Tier 3)</li>
              <li>Ranking #16+ (page 2+)</li>
              <li>Low or declining traffic</li>
            </ul>
            <p className="mt-1 italic text-sm">Action: Decide—major rewrite to salvage, or redirect to stronger content and deprioritize. If Tier 1/2, prioritize fixing (high potential). If Tier 3, consider archiving.</p>

            <p className="mt-3"><strong>🔴 Red Zone (Archive or Redirect):</strong></p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Zero or near-zero conversions over 90 days</li>
              <li>No meaningful traffic</li>
              <li>Keyword has no search volume (validated via GSC)</li>
            </ul>
            <p className="mt-1 italic text-sm">Action: Redirect to related content (301 redirect). Archive or delete. Don't waste maintenance effort on dead content.</p>

            <p className="mt-4 font-medium">Quarterly Content Audit Using Zones:</p>
            <p>Every quarter, tag every published article with a zone color. Create action plan: 70% effort maintaining/expanding Green Zone, 25% optimizing Yellow, 5% deciding on Orange/Red.</p>

            <Web2Callout>
              <p><strong>Web2 B2B Zone Tweaks:</strong> Green = >5% MQL conversion (Tier 1/2), >1% (Tier 3). Yellow = 2–5% (Tier 1/2). Measure pipeline $ influenced instead of just conversions—higher impact visibility to leadership.</p>
            </Web2Callout>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="success-metrics">
          <AccordionTrigger>Content Success Metrics (4 Categories)</AccordionTrigger>
          <AccordionContent>
            <p>I organize success metrics into four buckets: SEO Performance, Engagement, Business Impact, and Efficiency. Track all four to get a complete picture.</p>

            <p className="mt-3 font-medium">1. SEO Performance Metrics</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li><strong>Organic Traffic:</strong> Sessions from organic search (Google, Bing). Track by article, by cluster, by tier.</li>
              <li><strong>Keyword Rankings:</strong> Position for target keywords. Track weekly or monthly. Focus on Tier 1/2 keywords.</li>
              <li><strong>Impressions (GSC):</strong> How many times your content appeared in search results. Leading indicator of traffic.</li>
              <li><strong>Click-Through Rate (GSC):</strong> Impressions → clicks. Low CTR = bad title/meta description. Optimize.</li>
              <li><strong>Backlinks:</strong> Number of referring domains linking to your content. Quality > quantity.</li>
            </ul>

            <p className="mt-3 font-medium">2. Engagement Metrics</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li><strong>Time on Page:</strong> Are readers actually reading? <1 min = bounce. >3 min = engaged.</li>
              <li><strong>Scroll Depth:</strong> What % of readers scroll to bottom? Tracks content quality and CTA placement effectiveness.</li>
              <li><strong>Bounce Rate:</strong> % of single-page sessions. High bounce on Tier 1/2 = problem (wrong audience or bad content).</li>
              <li><strong>Internal Click-Through:</strong> Did they click internal links to other content or product pages? Measures funnel progression.</li>
            </ul>

            <p className="mt-3 font-medium">3. Business Impact Metrics (Most Important)</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li><strong>Conversions:</strong> Wallet connects, sign-ups, trials, demo requests—whatever your conversion goal is.</li>
              <li><strong>Conversion Rate:</strong> (Conversions / Sessions) × 100. The single best metric for content quality.</li>
              <li><strong>Revenue/TVL Influenced:</strong> How much business value did this content drive? Use attribution modeling.</li>
              <li><strong>Customer LTV by Source:</strong> Do content-acquired users stay longer or spend more? (Web2-specific, but trackable on-chain for Web3.)</li>
            </ul>

            <p className="mt-4"><strong>Web3 Business Impact Examples:</strong></p>
            <CodeBlock title="Jupiter Article Performance (90 days)">{`Article: "How to Reduce Swap Slippage on Solana"
Conversions (Wallet Connects): 142
Avg. Swap Volume per User: $8,200
Total Tx Volume Influenced: $1,164,800
Avg. Tx per User (90d): 12.3
Retention (still active 90d later): 68%`}</CodeBlock>

            <Web2Callout>
              <p><strong>Web2 Business Impact Examples:</strong> MQLs generated: 87. Pipeline influenced: $430K. Closed-won revenue: $68K. Customer LTV (cohort): $12,400. Payback period: 4 months (content cost / revenue influenced).</p>
            </Web2Callout>

            <p className="mt-4 font-medium">4. Efficiency Metrics (Operational)</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li><strong>Cost per Article:</strong> Writer time + strategist time + any external costs (tools, design). Track to manage budget.</li>
              <li><strong>Time to Publish:</strong> Brief → draft → review → publish. Optimize bottlenecks.</li>
              <li><strong>Cost per Conversion:</strong> (Total content cost / Total conversions). Compare to paid acquisition cost (PPC, etc.).</li>
              <li><strong>ROI:</strong> (Revenue influenced / Content cost) × 100. Content ROI often beats paid channels 5–10x.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cadence">
          <AccordionTrigger>Reporting Cadence (Weekly / Monthly / Quarterly)</AccordionTrigger>
          <AccordionContent>
            <p><strong>Why cadence matters:</strong> Different metrics matter at different time horizons. Weekly = operations. Monthly = performance. Quarterly = strategy.</p>

            <p className="mt-3 font-medium">Weekly Reporting (Operational)</p>
            <p><strong>Audience:</strong> Content team (strategist, writers, social).</p>
            <p><strong>Metrics:</strong></p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Articles published this week (by tier)</li>
              <li>Articles in draft/review/stuck</li>
              <li>Ranking changes for top 10 target keywords</li>
              <li>Quick wins (new rankings in top 10, conversion spikes)</li>
            </ul>
            <p className="mt-2"><strong>Format:</strong> Slack/Discord update or quick 10-min standup. No slides. Keep it fast.</p>

            <p className="mt-3 font-medium">Monthly Reporting (Performance Review)</p>
            <p><strong>Audience:</strong> Content team + marketing lead.</p>
            <p><strong>Metrics:</strong></p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Organic traffic (total, by tier, top 10 articles)</li>
              <li>Conversions (total, by tier, top 10 converting articles)</li>
              <li>Conversion rate trends (is it improving?)</li>
              <li>Ranking improvements (new page 1 rankings, lost rankings)</li>
              <li>Content velocity (articles published by tier vs goal)</li>
              <li>Revenue/TVL influenced (if attribution is set up)</li>
            </ul>
            <p className="mt-2"><strong>Format:</strong> Shared doc or dashboard. 1-page summary + detailed data appendix. 30-min review meeting.</p>

            <p className="mt-3 font-medium">Quarterly Reporting (Strategic)</p>
            <p><strong>Audience:</strong> Marketing lead, executive team, board (if relevant).</p>
            <p><strong>Metrics:</strong></p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Quarter-over-quarter growth (traffic, conversions, revenue influenced)</li>
              <li>Content ROI (total content cost vs revenue/TVL influenced)</li>
              <li>Zone audit results (how many articles in Green/Yellow/Orange/Red)</li>
              <li>Cluster performance (which topic clusters are winning)</li>
              <li>Competitive positioning (are we winning comparison keywords?)</li>
              <li>Strategic recommendations (what to double down on, what to cut)</li>
            </ul>
            <p className="mt-2"><strong>Format:</strong> Slide deck or narrative memo. 60-min strategy session. Tie content performance to company OKRs.</p>

            <CodeBlock title="Example Monthly Report Summary (Jupiter, Web3)">{`## Jupiter Content Marketing — January 2026

### 🎯 Key Results
- **Conversions:** 1,247 wallet connects (+18% MoM)
- **Conversion Rate:** 2.1% (+0.3% MoM) — Tier 1/2: 3.8%, Tier 3: 0.9%
- **TVL Influenced:** $18.2M (+22% MoM)
- **Organic Traffic:** 42,300 sessions (+12% MoM)

### 📈 Top Performing Content
1. "Jupiter vs Raydium" — 68 conversions, $843K TVL
2. "How to Reduce Swap Slippage" — 142 conversions, $1.16M TVL
3. "Best Solana DEX Aggregators" — 89 conversions, $721K TVL

### 📊 Content Velocity
- Tier 1/2 Published: 8 articles (goal: 6) ✅
- Tier 3 Published: 4 articles (goal: 4) ✅

### 🎨 Zone Audit
- Green: 12 articles (maintain + expand clusters)
- Yellow: 8 articles (optimize CTAs + rankings)
- Orange: 3 articles (rewrite or redirect)
- Red: 1 article (redirected to stronger content)

### 🚀 Next Month Priorities
1. Build cluster around "Best Solana DEX" (hub + 5 spokes)
2. Optimize 8 Yellow Zone articles (improve rankings + CTAs)
3. Publish 3 new Tier 2 comparison articles (vs Orca, vs Meteora, vs Phoenix)`}</CodeBlock>

            <Web2Callout>
              <p><strong>Web2 B2B Quarterly Report Add:</strong> Marketing-sourced pipeline $ (how much opportunity pipeline came from content), Sales cycle impact (do content-engaged leads close faster?), Content-assisted deals (multi-touch attribution showing content influence on closed deals). Tie to company revenue targets.</p>
            </Web2Callout>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="attribution">
          <AccordionTrigger>Attribution Models (Last-Touch vs Multi-Touch)</AccordionTrigger>
          <AccordionContent>
            <p><strong>The challenge:</strong> Users rarely convert on first visit. They read multiple articles, visit from different channels, research over days or weeks. Which content gets credit?</p>

            <p className="mt-3 font-medium">Attribution Models I've Used:</p>

            <p className="mt-2"><strong>1. Last-Touch Attribution (Simplest)</strong></p>
            <p>Give 100% credit to the last piece of content before conversion. Easy to implement and understand. Downside: ignores earlier touchpoints that built trust.</p>
            <p><strong>When to use:</strong> Small team, limited analytics setup, need quick wins. Better than no attribution.</p>

            <p className="mt-2"><strong>2. First-Touch Attribution</strong></p>
            <p>Give 100% credit to the first piece of content that brought user in. Shows which content is best at attracting new users. Downside: ignores nurture content that closed the deal.</p>
            <p><strong>When to use:</strong> Alongside last-touch for comparison. Helps identify top-of-funnel winners.</p>

            <p className="mt-2"><strong>3. Linear Multi-Touch</strong></p>
            <p>Give equal credit to every content touchpoint in the conversion path. More fair but harder to track (requires cookie/wallet tracking across sessions).</p>
            <p><strong>When to use:</strong> Mature content operation, GA4 or Mixpanel tracking set up, want to understand full funnel.</p>

            <p className="mt-2"><strong>4. Position-Based (U-Shaped)</strong></p>
            <p>Give 40% credit to first touch, 40% to last touch, 20% split among middle touchpoints. Recognizes both discovery and closing content.</p>
            <p><strong>When to use:</strong> My preferred model for Web3 and Web2. Balances simplicity with accuracy.</p>

            <p className="mt-4 font-medium">Implementation:</p>
            <p><strong>Web3 (Wallet-Based Tracking):</strong></p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>User visits "Jupiter vs Raydium" → cookie or UTM param stores visit</li>
              <li>User returns to "How to Swap on Jupiter" → second touchpoint tracked</li>
              <li>User connects wallet → conversion event tied to wallet address + touchpoint history</li>
              <li>Track wallet's subsequent on-chain behavior (swaps, volume, retention) → attribute back to content</li>
            </ul>
            <p className="mt-2 italic text-sm">Tool: Google Analytics 4, Mixpanel, Amplitude, or custom on-chain analytics (Dune, Flipside).</p>

            <Web2Callout>
              <p><strong>Web2 B2B Attribution:</strong> Track form fills, demo requests, trial sign-ups tied to cookie ID. Sync with CRM (HubSpot, Salesforce) to follow lead → opportunity → closed-won. Multi-touch models show which content assists vs closes. Marketing ops often owns attribution model and reporting. Tool: HubSpot, Marketo, Bizible, Dreamdata.</p>
            </Web2Callout>

            <p className="mt-3"><strong>Practical Advice:</strong> Start with last-touch. It's better than guessing. Upgrade to position-based when you have 6+ months of data and can invest in tracking setup.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tools">
          <AccordionTrigger>Tools & Stack</AccordionTrigger>
          <AccordionContent>
            <p><strong>What I use for reporting (Web3 and Web2):</strong></p>

            <p className="mt-3 font-medium">Core Analytics:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Google Search Console:</strong> Keyword rankings, impressions, clicks, CTR. Free. Essential for SEO.</li>
              <li><strong>Google Analytics 4:</strong> Traffic, conversions, engagement metrics, multi-touch attribution. Free (paid for enterprise scale).</li>
              <li><strong>DataForSEO API:</strong> Keyword research, difficulty scores, CPC values. Paid but cheap (~$100/month for small teams).</li>
            </ul>

            <p className="mt-3 font-medium">Web3-Specific:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Dune Analytics:</strong> On-chain behavior tracking. Create custom dashboards showing TVL, tx volume, user retention by acquisition source. Free (paid for private dashboards).</li>
              <li><strong>Flipside Crypto:</strong> Alternative to Dune, similar capabilities. Query blockchain data.</li>
              <li><strong>Mixpanel or Amplitude:</strong> Track wallet connects, first transaction, power user milestones. Tie content touchpoints to on-chain behavior.</li>
            </ul>

            <Web2Callout>
              <p><strong>Web2 B2B Tools:</strong> HubSpot or Salesforce (CRM + marketing automation), Clearbit or ZoomInfo (lead enrichment), Bizible or Dreamdata (multi-touch attribution), Looker or Tableau (BI dashboards), SEMrush or Ahrefs (keyword tracking and competitive analysis).</p>
            </Web2Callout>

            <p className="mt-3 font-medium">Reporting & Dashboards:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Google Sheets:</strong> Honestly, this is what I use 80% of the time. Pull data from GSC, GA4, Dune via APIs or manual export. Create pivot tables and charts. Share with team. Simple and flexible.</li>
              <li><strong>Looker Studio (formerly Data Studio):</strong> Free BI tool from Google. Connects to GA4, GSC, sheets. Auto-refreshing dashboards.</li>
              <li><strong>Notion or Airtable:</strong> Content calendar, keyword backlog, zone audit tracking. Lightweight project management.</li>
            </ul>

            <p className="mt-3 italic text-sm">Avoid over-tooling. Start with free tools (GSC, GA4, Sheets). Add paid tools only when you're blocked without them.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
