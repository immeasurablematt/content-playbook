import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Web2Callout } from "@/components/Web2Callout";

export function Section5Content() {
  return (
    <>
      <p className="lead text-lg text-ink-muted">
        I built this social playbook working across Crypto Twitter, Discord, Telegram, and Web2 platforms. The engagement principles are universal—the channels and culture differ.
      </p>

      <Accordion type="single" collapsible className="mt-8 w-full">
        <AccordionItem value="overview">
          <AccordionTrigger>Social Media Playbook (Overview)</AccordionTrigger>
          <AccordionContent>
            <p>In my experience, Web3 social strategy centers on Crypto Twitter (CT), Discord, Telegram, and increasingly Farcaster. Web2 leans LinkedIn, Instagram, and TikTok. The structure below works for both—just swap the platforms and adjust for culture (CT = meme-heavy and fast-paced; LinkedIn = professional and polished).</p>
            <p className="mt-2">Map social threads to your messaging matrix regardless of platform: Post 1 = pain point (hook); Posts 2–3 = capability and feature function (education); Post 4 = vision of use (emotional close). Track which pain points drive the most engagement and double down.</p>

            <p className="mt-3 font-medium">Web3 Platform Priority (what I've used):</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li><strong>Crypto Twitter (CT):</strong> #1 for awareness, alpha sharing, community building. Fast, meme-driven, reply-guy culture.</li>
              <li><strong>Discord:</strong> Community hub, support, governance, long-form discussions. Critical for retention.</li>
              <li><strong>Telegram:</strong> Real-time alpha, announcements, tight-knit groups. Lower moderation overhead than Discord.</li>
              <li><strong>Farcaster:</strong> Emerging Web3-native social graph. Early adopter community, crypto-focused.</li>
              <li><strong>Governance Forums:</strong> Long-form proposals, technical discussions, protocol decisions.</li>
            </ul>

            <Web2Callout>
              <p><strong>Web2 Platform Priority:</strong> LinkedIn (B2B, thought leadership, recruiting), Instagram (B2C, visual brands, lifestyle), TikTok (B2C, viral potential, younger demos), YouTube (tutorials, long-form content, SEO), Twitter/X (real-time news, customer support, brand personality), webinars and podcasts (trust-building, lead gen).</p>
            </Web2Callout>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="content-mix">
          <AccordionTrigger>Content Mix %</AccordionTrigger>
          <AccordionContent>
            <p><strong>Purpose</strong> — Allocate share of voice across content types so the feed isn't all promo or all fluff. Adjust by platform and goal; revisit quarterly.</p>
            <p className="mt-3 font-medium">Example mix (starting point—adjust for platform culture):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Educational / value (40–50%)</strong> — Web3: How-tos, protocol explainers, alpha sharing, ecosystem updates. Web2: How-tos, tips, thought leadership. Builds trust and reach.</li>
              <li><strong>Engagement / community (25–35%)</strong> — Web3: Questions, polls, replies, governance discussions, meme participation. Web2: Questions, polls, UGC, conversation starters. Builds relationship and algorithm.</li>
              <li><strong>Promotional / conversion (15–25%)</strong> — Web3: Product updates, new features, TVL/metrics milestones, "connect wallet" CTAs. Web2: Product demos, offers, sign-up CTAs. Drives conversions and revenue.</li>
              <li><strong>Brand / personality (10–15%)</strong> — Web3: Meme culture, founder/team vibes, ecosystem shoutouts. Web2: Behind-the-scenes, culture, values. Differentiates and humanizes.</li>
            </ul>

            <Web2Callout>
              <p><strong>Web2 Content Mix Note:</strong> B2B tends toward 50%+ educational (whitepapers, webinars, case studies), less meme/personality. B2C consumer brands lean harder into personality (25–30%) and engagement (35–40%).</p>
            </Web2Callout>
            <p className="mt-3"><strong>How to set and adjust:</strong> Start with the mix above; measure engagement rate, clicks, and conversions by type. If promo underperforms, test more value-first hooks. If educational gets no action, add clearer CTAs. Document your chosen % in the playbook and review each quarter.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="schedule">
          <AccordionTrigger>Posting Schedule & Cadence</AccordionTrigger>
          <AccordionContent>
            <p><strong>Purpose</strong> — Consistency beats random bursts. Define minimum frequency and ideal times so content is batched and predictable.</p>
            <p className="mt-3 font-medium">Guidelines:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Frequency by platform</strong> — e.g. Twitter/X: 3–5/day or 1–2/day minimum; LinkedIn: 3–5/week; Instagram: 4–7/week. Set a minimum you can sustain.</li>
              <li><strong>Best times</strong> — Use platform insights and audience location; typical windows: morning commute, lunch, end of work. Test and document.</li>
              <li><strong>Batching</strong> — Create in weekly or biweekly batches; schedule native or via tool. Leave 10–20% for reactive/trending.</li>
              <li><strong>Calendar</strong> — Maintain a simple content calendar (pillar + format + stage) so mix and cadence are visible; align with product and campaign launches.</li>
            </ul>
            <p className="mt-3">Template: "[Platform]: [X] posts per [day/week]. Primary windows: [times]. Batch day: [day]. Owner: [role]."</p>

            <Web2Callout>
              <p><strong>Web2 Posting Cadence:</strong> LinkedIn 3–5/week (M/W/F best), Instagram 4–7/week (daily stories + 3–4 feed posts), TikTok daily for algorithm, YouTube 1–2/week (consistency over volume), Twitter/X 3–10/day depending on brand.</p>
            </Web2Callout>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="kol">
          <AccordionTrigger>KOL Collaboration Strategy (Web3-Specific)</AccordionTrigger>
          <AccordionContent>
            <p><strong>What I've learned about Web3 KOLs:</strong> Key Opinion Leaders (KOLs) in crypto have outsized influence—a single thread from a respected trader can drive millions in volume. Unlike Web2 influencers (follower count = value), Web3 KOLs are valued for alpha quality and trust.</p>

            <p className="mt-3 font-medium">Identifying the right KOLs:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Tier 1 (Mega KOLs):</strong> 100K+ followers, broad crypto audience, high engagement. Examples: @cobie, @DegenSpartan, @HsakaTrades. Use sparingly for major launches.</li>
              <li><strong>Tier 2 (Niche KOLs):</strong> 10K–100K followers, specific niche (DeFi, NFTs, L2s). Higher trust, better conversion for targeted campaigns.</li>
              <li><strong>Tier 3 (Micro KOLs):</strong> 1K–10K followers, tight community, very high engagement rate. Best ROI for ongoing partnerships.</li>
            </ul>

            <p className="mt-3 font-medium">Collaboration approaches I've used:</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li><strong>Organic alpha sharing:</strong> Give KOLs early access, let them discover value and share naturally. Most authentic, hardest to scale.</li>
              <li><strong>Paid threads/reviews:</strong> Sponsored content clearly disclosed. Works for awareness, lower trust than organic.</li>
              <li><strong>Airdrops/token allocations:</strong> Give KOLs a stake in the protocol's success. Aligns incentives long-term.</li>
              <li><strong>Advisory/ambassador roles:</strong> Ongoing relationship with input on product/marketing. Best for major launches.</li>
            </ul>

            <p className="mt-3 font-medium">Red flags to avoid:</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>KOLs who shill everything (no credibility, audience knows it's always paid)</li>
              <li>Fake engagement (bought followers, bot comments—check engagement rate)</li>
              <li>No audience overlap (ETH maxi promoting Solana project = mismatch)</li>
            </ul>

            <Web2Callout>
              <p><strong>Web2 Influencer Marketing:</strong> Instagram/TikTok influencers measured by follower count and engagement rate. Typical structure: flat fee per post/video, affiliate codes for tracking, long-term brand ambassador deals. FTC disclosure requirements stricter than Web3. ROI easier to measure (promo codes, affiliate links).</p>
            </Web2Callout>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="spaces">
          <AccordionTrigger>Spaces & AMAs (Web3 Community Engagement)</AccordionTrigger>
          <AccordionContent>
            <p><strong>Why Spaces/AMAs matter in Web3:</strong> Real-time audio builds trust faster than text. I've found that a single well-run Space can generate more community goodwill than 50 tweets. Also creates content to clip and repurpose.</p>

            <p className="mt-3 font-medium">Format types:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Twitter Spaces:</strong> Best for broad awareness, live Q&A, announcements. Record and clip for content. Host 1–2x/month for active community.</li>
              <li><strong>Discord Stage Channels:</strong> Deeper community engagement, governance discussions, technical deep-dives. Lower broadcast reach than Spaces.</li>
              <li><strong>Telegram voice chats:</strong> Smaller groups, international audiences (timezones matter), more intimate. Good for regional communities.</li>
              <li><strong>AMAs (Ask Me Anything):</strong> Text-based (Reddit, Discord, Telegram) or audio. High transparency signal—open to all questions.</li>
            </ul>

            <p className="mt-3 font-medium">Best practices I've learned:</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li><strong>Schedule for timezone coverage:</strong> Rotate times to hit US, Europe, Asia. Or run 2–3 sessions for major announcements.</li>
              <li><strong>Promote 48h in advance minimum:</strong> Pin in Discord, tweet 2–3x, Telegram announcement.</li>
              <li><strong>Have a moderator + speaker:</strong> Mod manages queue, mutes trolls, keeps flow. Speaker focuses on content.</li>
              <li><strong>Clip and repurpose:</strong> Turn 60-min Space into 5–10 short clips for Twitter, TikTok, YouTube Shorts.</li>
              <li><strong>Follow up with summary thread:</strong> Not everyone can attend live—recap key points in a thread within 24h.</li>
            </ul>

            <Web2Callout>
              <p><strong>Web2 Live Event Equivalents:</strong> Webinars (B2B lead gen, 30-60 min structured presentations with Q&A), Instagram/TikTok Lives (B2C, product launches, behind-the-scenes), LinkedIn Lives (thought leadership, panel discussions), YouTube livestreams (long-form, tutorials, gaming).</p>
            </Web2Callout>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="engagement">
          <AccordionTrigger>Reply Guy / Engagement Playbook</AccordionTrigger>
          <AccordionContent>
            <p><strong>Purpose</strong> — Turn replies and mentions into a repeatable process: who responds, when, how, and when to escalate. "Reply guy" = the voice that shows up in comments and DMs in brand voice. In Web3, this is critical—CT reply guy culture rewards witty, fast, authentic responses.</p>

            <p className="mt-3 font-medium">Core rules (adapted for Web3 vs Web2):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Who responds</strong> — Web3: Often the founder or core team member (authenticity matters). Web2: Designate 1–2 people or social media manager. Both: Must know brand voice and escalation paths.</li>
              <li><strong>When to respond</strong> — Web3: Speed is everything on CT—within 1-2 hours for mentions, 5-10 min during Spaces or AMAs. Web2: Same-day on questions, within 2–4 hours during campaigns. Set SLA (e.g. "reply within 12 hours").</li>
              <li><strong>How (tone)</strong> — Web3: Witty, meme-friendly, sometimes irreverent. Match the vibe—serious tech discourse or degen banter depending on audience. Web2: Professional, helpful, on-brand. No corporate jargon; no arguing. If negative, acknowledge and move to DM or support.</li>
              <li><strong>Escalation</strong> — Complaints, legal, PR risk, or highly technical → hand off to right team. Document what gets escalated and to whom. Web3-specific: Smart contract exploits, token price manipulation allegations, rug pull accusations = immediate escalation to security/legal.</li>
              <li><strong>Proactive engagement (Web3-specific)</strong> — Reply to KOLs and community members in your ecosystem. Participate in protocol governance discussions. Quote-tweet with value-add commentary. Like and amplify user-generated alpha. Goal: be seen as part of the community, not just a brand.</li>
            </ul>

            <Web2Callout>
              <p><strong>Web2 Engagement Tactics:</strong> Monitor brand mentions via tools (Sprout Social, Hootsuite). Respond to reviews (G2, Trustpilot, App Store). Engage with industry hashtags and LinkedIn groups. Join relevant Slack/Discord communities (without being salesy). Run polls and ask questions to boost algorithm reach.</p>
            </Web2Callout>

            <p className="mt-3">Template: "Reply SLA: [X] hours. Owner: [name]. Escalate: [list] → [owner]. Proactive: [X] comments per week in [channels/accounts]. CT engagement: [X] replies/day to community and KOLs."</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="per-stage">
          <AccordionTrigger>Per-Stage Content Plan</AccordionTrigger>
          <AccordionContent>
            <p><strong>Purpose</strong> — Align social content with the funnel (see Content Funnel Map in Section 1). Each stage has different formats and CTAs. The structure works for both Web3 and Web2—just swap the examples and platforms.</p>
            <p className="mt-3 font-medium">By stage (Web3 primary examples):</p>
            <table className="my-3 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="w-28 py-2 text-left font-medium">Stage</th>
                  <th className="py-2 text-left font-medium">Web3 Social Focus</th>
                  <th className="py-2 text-left font-medium">Web3 Formats / CTAs</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100"><td className="py-2 font-medium">Awareness</td><td className="py-2">Reach, education, ecosystem positioning</td><td className="py-2">Protocol explainers, "What is [tech]", ecosystem news, alpha threads, memes; CTA: follow, RT, join Discord</td></tr>
                <tr className="border-b border-stone-100"><td className="py-2 font-medium">Consideration</td><td className="py-2">Trust, differentiation, use cases</td><td className="py-2">How-to threads, DEX/protocol comparisons, TVL milestones, case study snippets, Dune dashboard shares; CTA: read docs, join Telegram, watch Space recording</td></tr>
                <tr className="border-b border-stone-100"><td className="py-2 font-medium">Decision</td><td className="py-2">Conversion, wallet connects, first transaction</td><td className="py-2">Product features, "try now" with wallet connect, limited incentives (airdrops, rewards), social proof (volume, users); CTA: connect wallet, start trading, earn rewards</td></tr>
                <tr className="border-b border-stone-100"><td className="py-2 font-medium">Retention & Advocacy</td><td className="py-2">Loyalty, UGC, community growth</td><td className="py-2">User wins (big trades, profits), power user tips, governance participation, referral rewards; CTA: share your trade, invite friends, vote on proposal</td></tr>
              </tbody>
            </table>

            <Web2Callout>
              <p><strong>Web2 Per-Stage Examples:</strong></p>
              <p><strong>Awareness:</strong> Thought leadership posts, industry trends, educational content, brand values; CTA: follow, subscribe, download whitepaper.</p>
              <p><strong>Consideration:</strong> Product demos, customer testimonials, comparison guides, webinar invites; CTA: read case study, book demo, register for webinar.</p>
              <p><strong>Decision:</strong> Limited offers, free trials, ROI calculators, "start now" posts; CTA: sign up, start trial, request quote.</p>
              <p><strong>Retention:</strong> Product tips, customer success stories, loyalty programs, referral incentives; CTA: refer a friend, leave a review, upgrade plan.</p>
            </Web2Callout>

            <p className="mt-3">Map your content mix % to these stages (e.g. most educational = awareness/consideration; most promo = decision). Per-stage plan should match the Full-Funnel Content Map in Section 1.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
