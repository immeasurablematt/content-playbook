import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Blockquote } from "@/components/Blockquote";
import { CodeBlock } from "@/components/CodeBlock";

export function Section1Content() {
  return (
    <>
      <p className="lead text-lg text-ink-muted">
        Goals, audience, brand voice, messaging matrix, content funnel, and content pillars that drive conversions.
      </p>

      <Accordion type="single" collapsible className="mt-8 w-full">
        <AccordionItem value="goals">
          <AccordionTrigger>Goals & Objectives</AccordionTrigger>
          <AccordionContent>
            <p><strong>Primary Goal</strong> — One clear, top-level outcome (e.g. "Grow followers and increase engagement on [channel]," "Generate MQLs from organic content," "Establish thought leadership in [category]"). Everything else supports this.</p>
            <p className="mt-2"><strong>Specific Objectives (Time-Bound, Quantified)</strong> — Set 3-month (or quarter) objectives with numbers so you can measure progress and adjust. Base targets on historical data when available.</p>
            <p className="mt-2 font-medium">Example structure:</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Increase [metric A] by X–Y% in 3 months (e.g. smart followers, engagement rate, MQLs).</li>
              <li>Reach [metric B] to [target range] in 3 months (e.g. total engagements, sign-ups from content).</li>
            </ul>
            <p className="mt-2"><strong>Baseline / Historical Context</strong> — Document where you are now: current metric values, growth over the last 6–12 months, and why the chosen targets are realistic. Refer back when reporting.</p>
            <p className="mt-2"><strong>Template:</strong> Primary goal: [one sentence]. Objectives: (1) [Metric] from [current] to [target] by [date]; (2) [Metric] from [current] to [target]. Baseline: [source and numbers].</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand-voice">
          <AccordionTrigger>Brand Voice & Tone</AccordionTrigger>
          <AccordionContent>
            <p><strong>Definition</strong> — A short statement of who the brand sounds like (e.g. "Champion of decentralization and self-custody," "Irreverent and bold—like Deadpool," "Mentor, not hero: wise, battle-tested"). This shapes every piece of content.</p>
            <p className="mt-2"><strong>Purpose</strong> — Why this voice: cut through noise, differentiate from competitors, build community, make complex topics approachable, spark engagement.</p>
            <p className="mt-2"><strong>Core Voice Characteristics</strong> — 3–5 traits with one-line descriptions (e.g. Witty, Bold, Supportive, Pragmatic). Optional: tone scale (e.g. "If Wall Street is 1 and Deadpool is 10, we're 5–7.5").</p>
            <p className="mt-2"><strong>Do's and Don'ts</strong> — Do: [e.g. drop pop-culture refs, keep it conversational, sneak in subtle flexes]. Don't: [e.g. go full corporate, use stuffy terms, dry vibes].</p>
            <p className="mt-2"><strong>Branded Elements</strong> — Approved emoji, hashtags, or visual cues that stay consistent (e.g. 🟣💜 for a purple brand). Use sparingly but consistently.</p>
            <p className="mt-2">Align voice with your Audience Definition and Product Messaging Matrix so tone supports pain points and vision of use.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="audience">
          <AccordionTrigger>Audience Definition</AccordionTrigger>
          <AccordionContent>
            <Blockquote>
              You can't build a growth flywheel if you don't know who you're building for or why they can't live without your product. Skip this step and your marketing will be dry, generic, and ineffective.
            </Blockquote>
            <p><strong>The Problem with Vague Audiences:</strong></p>
            <p>"Crypto users" or "B2B SaaS buyers" or "enterprise customers" are too broad to be useful. You need specificity across multiple dimensions to create messaging that resonates.</p>
            <h3 className="mt-6 font-semibold">Step 1: Define Your Primary Audience</h3>
            <p>Work through these dimensions to build a crisp, actionable audience definition:</p>
            <p><strong>1. Core Values & Motivations</strong> — What brought them to your product category? What do they care about?</p>
            <p>Examples: Web3: Financial freedom vs privacy vs decentralization vs tech experimentation. B2B SaaS: Cost reduction vs innovation leadership vs risk mitigation. Enterprise: Compliance vs competitive advantage vs operational efficiency. Someone motivated by sovereignty needs different messaging than someone motivated by experimentation. This shapes your entire tone.</p>
            <p><strong>2. Success Definition (in context of your product)</strong> — What does winning look like for them? Examples: Crypto native: Financial independence, alpha generation, early access. Startup founder: Product-market fit, fundraising, rapid scaling. Enterprise buyer: Career advancement, risk mitigation, measurable ROI.</p>
            <p><strong>3. Where They Actually Spend Time (Distribution Strategy)</strong> — Your "watering holes" determine where you show up and how you communicate. Examples: Crypto natives: CT (Crypto Twitter), Discord, Telegram, Farcaster. Technical builders: GitHub, Stack Overflow, Reddit, protocol forums. Enterprise buyers: LinkedIn, industry conferences, analyst reports. Startup founders: Product Hunt, Indie Hackers, YC community. Your content and partnerships should meet them where they already are, not where you wish they were.</p>
            <p><strong>4. What They Care About Beyond Your Category</strong> — The ecosystems they follow, cultural trends they track, other products/communities they support. This context helps you speak their language naturally, find partnership opportunities that feel authentic, create content that references their world, and build positioning that resonates culturally.</p>
            <p className="mt-4 font-medium">Audience Definition Template:</p>
            <CodeBlock title="Template (expand to copy)">{`## Primary Audience: [Segment Name]

**Core Values & Motivations:**
- [Value 1]: [Specific manifestation in their behavior]
- [Value 2]: [Specific manifestation in their behavior]
- [Value 3]: [Specific manifestation in their behavior]

**Success Definition:**
In the context of our product, success means: [Specific, measurable outcome they care about]

**Where They Spend Time:**
- Primary channels: [Platform 1], [Platform 2], [Platform 3]
- Communities: [Specific Discord/Slack/Forum names]
- Information sources: [Where they learn, who they trust]

**Adjacent Interests:**
- Ecosystems: [Specific projects/platforms they follow]
- Cultural touchpoints: [Memes, trends, movements they reference]
- Complementary tools: [What else is in their stack]

**Critical Pain Points:**
- [Pain 1]: [Specific situation where this manifests]
- [Pain 2]: [Specific situation where this manifests]
- [Pain 3]: [Specific situation where this manifests]

**Content Needs:**
- Format preferences: [Long-form vs short-form, technical vs narrative]
- Proof required: [Case studies vs data vs social proof]
- Decision factors: [What they evaluate, how they decide]`}</CodeBlock>
            <p className="mt-4"><strong>Multiple Audience Segments:</strong> Most products serve 2-4 distinct audience segments. Create a separate definition for each.</p>
            <p><strong>Prioritization:</strong> (1) Which segment has the highest conversion rate? (2) Which has the highest lifetime value? (3) Which is easiest to reach (distribution advantage)? (4) Which provides best word-of-mouth/viral growth? Focus 70% of effort on your #1 segment, 30% on #2. Ignore #3+ until you've saturated the first two.</p>
            <p className="mt-3"><strong>Context-Dependent Messaging:</strong> The same audience might need different messaging based on market conditions. Bull Market vs Bear Market (Crypto/Web3): Bull = speed, opportunity capture, FOMO prevention; Bear = safety, sustainability, long-term value. Early Stage vs Growth Stage (B2B SaaS): Early = flexibility, speed to value, low commitment; Growth = scalability, integration, enterprise features. Market Leader vs Challenger (Enterprise): Leader = stability, ecosystem, proven results; Challenger = innovation, cost savings, agility. Your product messaging matrix (below) should be adapted for these contexts, not built as a single static document.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="messaging">
          <AccordionTrigger>Product Messaging Matrix</AccordionTrigger>
          <AccordionContent>
            <p><strong>Why it matters:</strong> Most marketing leads with features and benefits and skips the middle layer—the pain and how users actually feel it. Without that, there's no "aha" moment and no opening for a decision. This approach forces pain-first, user-language messaging.</p>
            <p className="mt-3"><strong>The structure:</strong></p>
            <pre className="my-3 rounded-lg border border-stone-200 bg-stone-50 p-3 font-mono text-sm">PAIN POINT → CAPABILITY → FEATURE FUNCTION → VISION OF USE → BENEFIT</pre>
            <p>Start with pain, not features. Focus on your top 3 differentiated features so you can measure what messaging actually performs.</p>

            <p className="mt-4 font-medium">Questions to ask for each column (use when filling the table)</p>
            <table className="my-3 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="w-32 py-2 text-left font-medium">Column</th>
                  <th className="py-2 text-left font-medium">Question to answer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100"><td className="py-2 font-medium">Pain Point</td><td className="py-2">What negative experience prevents the user from achieving their goals in a specific situation? Be visceral. Be explicit. Describe frustration as it's felt and experienced, not explained by an impartial observer.</td></tr>
                <tr className="border-b border-stone-100"><td className="py-2 font-medium">Capability</td><td className="py-2">What capability or "superpower" does your feature give users that resolves or neutralizes their pain?</td></tr>
                <tr className="border-b border-stone-100"><td className="py-2 font-medium">Feature Function</td><td className="py-2">How does the feature deliver that capability technically? This is the only place to talk about how it works.</td></tr>
                <tr className="border-b border-stone-100"><td className="py-2 font-medium">Vision of Use</td><td className="py-2">Paint a vivid scene showing how this feature works in the user's day-to-day. Be specific and urgent. The audience should feel this scenario in their gut.</td></tr>
                <tr className="border-b border-stone-100"><td className="py-2 font-medium">Benefit</td><td className="py-2">What positive outcome do they walk away with? (This is usually the only thing most teams talk about, which is why messaging falls flat.)</td></tr>
              </tbody>
            </table>

            <p className="mt-4 font-medium">Matrix table (one row per feature)</p>
            <table className="my-3 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="w-24 py-2 text-left font-medium">Feature</th>
                  <th className="py-2 text-left font-medium">Pain Point</th>
                  <th className="py-2 text-left font-medium">Capability</th>
                  <th className="py-2 text-left font-medium">Feature Function</th>
                  <th className="py-2 text-left font-medium">Vision of Use</th>
                  <th className="py-2 text-left font-medium">Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100 align-top">
                  <td className="py-2 font-medium">[Feature 1]</td>
                  <td className="py-2">[Vivid first-person]</td>
                  <td className="py-2">[One sentence]</td>
                  <td className="py-2">[How it works]</td>
                  <td className="py-2">[Cinematic scenario]</td>
                  <td className="py-2">[Outcome]</td>
                </tr>
                <tr className="border-b border-stone-100 align-top">
                  <td className="py-2 font-medium">[Feature 2]</td>
                  <td className="py-2">…</td>
                  <td className="py-2">…</td>
                  <td className="py-2">…</td>
                  <td className="py-2">…</td>
                  <td className="py-2">…</td>
                </tr>
                <tr className="border-b border-stone-100 align-top">
                  <td className="py-2 font-medium">[Feature 3]</td>
                  <td className="py-2">…</td>
                  <td className="py-2">…</td>
                  <td className="py-2">…</td>
                  <td className="py-2">…</td>
                  <td className="py-2">…</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4 font-medium">Writing guidelines</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Use "you" language</strong> — Be the user. "You're stuck waiting..." not "Users experience friction."</li>
              <li><strong>Make pain vivid</strong> — Bad: "Gas management creates inefficiency." Good: "You spot a play on Solana but you don't have SOL for gas. You're stuck swapping, bridging. The opportunity slips by. Again."</li>
              <li><strong>Vision of use = cinematic</strong> — Show the feature in action with specific, emotional detail; don't just explain it.</li>
            </ul>

            <h4 className="mt-6 font-semibold">Example: Unified Gas Tank (Web3)</h4>
            <p><strong>Pain Point:</strong> You spot a play on Solana but you don't have any SOL for gas. You're stuck swapping, bridging, waiting. The opportunity slips by while you're scrambling for the right token. Again.</p>
            <p><strong>Capability:</strong> Move across chains instantly without thinking about gas logistics.</p>
            <p><strong>Feature Function:</strong> Deposit USDC once into a universal gas tank that covers transactions across 36 blockchains automatically.</p>
            <p><strong>Vision of Use:</strong> You're bridging from Ethereum to Solana and the move is happening NOW. No time to source gas. You execute immediately. Your timing is perfect and you watch half of CT scrambling on your timeline.</p>
            <p><strong>Benefit:</strong> Never miss a time-sensitive opportunity because of gas management again.</p>
            <p className="mt-2 text-sm text-ink-muted">Same structure applies to B2B SaaS, infra, and other categories—pain first, then capability and scenario.</p>

            <p className="mt-6 font-medium">Where it gets used</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li><strong>Social:</strong> Post 1 = pain (hook); 2–3 = capability/function; 4 = vision of use (close).</li>
              <li><strong>Landing pages:</strong> Headline = pain; subhead = capability; body = function; close = vision of use; CTA = benefit.</li>
              <li><strong>Content briefs:</strong> Pain as hook, vision of use as examples, benefit as CTA.</li>
              <li><strong>Sales:</strong> Pain opens discovery; capability qualifies; vision of use closes.</li>
            </ul>
            <p className="mt-2 text-sm text-ink-muted">Track what resonates (which pain points, which visions get shared) and iterate the matrix from real feedback.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="funnel-map">
          <AccordionTrigger>Content Funnel Map</AccordionTrigger>
          <AccordionContent>
            <p><strong>Purpose</strong> — Map content types and goals to each stage of the buyer journey so every asset has a clear role and success metric. Use this to plan campaigns, assign KPIs, and avoid creating content that doesn't move people toward conversion.</p>
            <p className="mt-3"><strong>Funnel stages (definitions):</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Awareness (TOFU)</strong> — Audience doesn't know they have a problem or your category yet. Goal: reach, brand recall, education.</li>
              <li><strong>Consideration (MOFU)</strong> — They know the problem and are evaluating options. Goal: consideration set inclusion, trust, differentiation.</li>
              <li><strong>Decision (BOFU)</strong> — Ready to choose. Goal: conversion, sign-up, demo, purchase.</li>
              <li><strong>Retention & Advocacy</strong> — Existing users. Goal: retention, expansion, referrals, UGC.</li>
            </ul>
            <p className="mt-4 font-medium">Full-funnel content map (content type → stage → goal):</p>
            <table className="my-3 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="w-28 py-2 text-left font-medium">Stage</th>
                  <th className="py-2 text-left font-medium">Content types</th>
                  <th className="py-2 text-left font-medium">Primary goal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100"><td className="py-2 font-medium">Awareness</td><td className="py-2">Thought leadership, explainers, educational keywords, brand stories, top-of-feed social</td><td className="py-2">Reach, recall, "what is X"</td></tr>
                <tr className="border-b border-stone-100"><td className="py-2 font-medium">Consideration</td><td className="py-2">How-to guides, comparisons, alternatives, use cases, case study teases, webinars</td><td className="py-2">Consideration set, trust, intent</td></tr>
                <tr className="border-b border-stone-100"><td className="py-2 font-medium">Decision</td><td className="py-2">Product pages, "[Competitor] vs Us", demos, trials, pricing, social proof, CTAs</td><td className="py-2">Sign-up, demo, purchase</td></tr>
                <tr className="border-b border-stone-100"><td className="py-2 font-medium">Retention & Advocacy</td><td className="py-2">Onboarding, tips, power-user content, referral programs, UGC, community highlights</td><td className="py-2">Retention, NPS, referrals</td></tr>
              </tbody>
            </table>
            <p className="mt-3">Align this map with your Content Pillar Architecture and Product Messaging Matrix: pain points and visions of use can be mapped to stages (e.g. pain = awareness/consideration, vision of use = decision).</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="pillars">
          <AccordionTrigger>Content Pillar Architecture</AccordionTrigger>
          <AccordionContent>
            <p><strong>Overview:</strong> Content pillars organize your content into strategic clusters that drive conversions, not just topical coverage. The key is structuring clusters by buying intent, not just subject matter.</p>
            <p className="mt-3"><strong>Hub & Spoke Model:</strong> Hub Page = comprehensive guide targeting primary keyword. Spoke Pages = supporting content targeting related keywords. Internal Linking = systematic cross-linking between hub and spoke. Conversion Path = CTAs placed strategically throughout cluster.</p>
            <p className="mt-3 font-medium">Pain Point SEO priority:</p>
            <CodeBlock title="Formula">{`Priority Level = Buying Intent Score × (Search Volume / Keyword Difficulty) × CPC

Buying Intent Scores:
- Category Keywords (e.g., "[product category] platform"): 10
- Comparison/Alternative Keywords (e.g., "[Competitor A] vs [Competitor B]"): 10
- Jobs-to-be-Done Keywords (e.g., "how to [solve problem]"): 7
- Informational Keywords (e.g., "what is [concept]"): 2`}</CodeBlock>
            <p className="mt-3 font-medium">Content Type by Funnel Position:</p>
            <CodeBlock title="Funnel mapping">{`BOTTOM OF FUNNEL (Prioritize First):
├─ Category Keywords → Product/Service Pages
├─ Comparison Keywords → "[Competitor] vs [Us]" Articles
└─ Alternative Keywords → "[Competitor] Alternatives" Articles

MID-FUNNEL (Build After Bottom):
├─ Jobs-to-be-Done Keywords → How-to Guides with Product CTA
├─ Problem-Solution Keywords → Technical Tutorials
└─ Use Case Keywords → Industry-Specific Applications

TOP OF FUNNEL (Only After Exhausting Above):
├─ Educational Keywords → Explainer Content
└─ Awareness Keywords → Thought Leadership`}</CodeBlock>
            <p className="mt-3 italic">For the full priority formula, cluster templates, and implementation phasing, see Pain Point SEO.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
