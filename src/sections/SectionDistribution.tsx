import { Blockquote } from "@/components/Blockquote";
import { CodeBlock } from "@/components/CodeBlock";

export function SectionDistributionContent() {
  return (
    <>
      <p className="lead text-lg text-ink-muted">
        Social repurposing is the starting point—not the finish line. This section covers every distribution channel beyond social: email, Reddit, content syndication, governance forums, and partner amplification, with a Web3-native lens throughout.
      </p>

      <div className="mt-8 space-y-12">

        <div id="channel-stack" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Distribution Channel Stack</h3>
          <div className="mt-4 space-y-3">
            <p>Not every piece of content goes everywhere. Match distribution channel to content type and audience stage.</p>
            <table className="my-4 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-2 text-left font-medium">Channel</th>
                  <th className="py-2 text-left font-medium">Best for</th>
                  <th className="py-2 text-left font-medium">Audience stage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Email / Newsletter</td>
                  <td className="py-2">Protocol updates, governance, drip education, re-engagement</td>
                  <td className="py-2">Consideration → Retention</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Reddit</td>
                  <td className="py-2">Community credibility, organic discovery, long-tail reach</td>
                  <td className="py-2">Awareness → Consideration</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Mirror / Paragraph</td>
                  <td className="py-2">Thought leadership, narrative pieces, long-form protocol explainers</td>
                  <td className="py-2">Awareness → Consideration</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Governance forums</td>
                  <td className="py-2">Proposals, technical discussions, ecosystem positioning</td>
                  <td className="py-2">Consideration → Retention</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Partner amplification</td>
                  <td className="py-2">Ecosystem co-promotion, cross-protocol reach</td>
                  <td className="py-2">Awareness → Decision</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Community posting (Discord, Telegram)</td>
                  <td className="py-2">Targeted distribution into ecosystem communities</td>
                  <td className="py-2">Consideration → Decision</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="email-newsletter" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Email & Newsletter Distribution</h3>
          <div className="mt-4 space-y-3">
            <p>Email is less central in Web3 than in Web2, but still critical for onboarding, governance, re-engagement, and educational drip campaigns. It works best for users who have already connected a wallet or opted in.</p>

            <h4 className="mt-4 font-semibold">Where Email Wins in Web3</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Onboarding sequences after wallet connect</li>
              <li>Protocol update and feature announcements</li>
              <li>Governance notifications and voting reminders</li>
              <li>Re-engagement for dormant wallets</li>
              <li>Educational drip campaigns for complex protocols</li>
            </ul>

            <h4 className="mt-4 font-semibold">Distributing Content via Email</h4>
            <p>Every Tier 1/2 article and case study should be considered for newsletter distribution. The goal is not to summarise the piece — it's to surface the pain point and drive the click.</p>
            <CodeBlock title="Email structure for content distribution">{`Subject line: lead with the problem or the data point, not the article title
  → "Why 80% of Solana swaps leave money on the table"
  → NOT "New article: Best DEX Aggregators"

Body: 3–4 sentences max
  → Pain point → what the article solves → link

CTA: one link, one ask`}</CodeBlock>

            <h4 className="mt-4 font-semibold">Onboarding Sequences (Post-Wallet Connect)</h4>
            <p>Goal: guide new users from wallet connection to first meaningful on-chain action within 7 days. Activation drops dramatically if no transaction occurs in that window.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Email 1 (Day 0, within 5 min of wallet connect):</strong> Welcome + first action prompt</li>
              <li><strong>Email 2 (Day 2):</strong> Education + feature discovery</li>
              <li><strong>Email 3 (Day 7, if no activity):</strong> Social proof + re-engagement incentive</li>
            </ul>

            <h4 className="mt-4 font-semibold">Re-Engagement Triggers</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>30 days no activity: "Here's what's new since you last traded"</li>
              <li>Partial onboarding: "Finish your first swap and get [reward]"</li>
              <li>Feature launch: "You're early to [feature] — try it now"</li>
              <li>Market movement: "SOL just hit $150 — time to trade?"</li>
            </ul>

            <h4 className="mt-4 font-semibold">Segmentation by On-Chain Behavior</h4>
            <p>Don't send the same email to everyone. Segment by:</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li><strong>Transaction volume:</strong> Whales ({'>'} $100K), mid-tier ($10K–$100K), retail ({'<'} $10K)</li>
              <li><strong>Activity frequency:</strong> Daily, weekly, monthly, dormant ({'>'} 30 days)</li>
              <li><strong>Product usage:</strong> Spot only, perps only, LPs, governance participants</li>
              <li><strong>Token holdings:</strong> Governance token holders vs non-holders</li>
              <li><strong>Chain preference:</strong> Solana-native, ETH L2, multi-chain</li>
              <li><strong>Onboarding stage:</strong> Wallet connected only → first transaction → power user</li>
            </ul>

            <h4 className="mt-4 font-semibold">Governance Notifications</h4>
            <p>Subject line clarity: <em>"Governance Proposal #42: Fee Structure Update — Vote by Friday"</em>. TL;DR at top, full details linked. Send only to token holders — not the full list.</p>
          </div>
        </div>

        <div id="reddit" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Reddit Distribution</h3>
          <div className="mt-4 space-y-3">
            <Blockquote>
              Reddit is the dark horse of organic distribution in Web3. Users actively search for solutions to specific problems, and Reddit rewards genuine value over follower count. A well-placed comment can drive more qualified traffic than 20 CT posts.
            </Blockquote>

            <h4 className="mt-4 font-semibold">Web3 Subreddits to Target</h4>
            <p><strong>Broad crypto:</strong> r/CryptoCurrency (2.7M), r/ethereum (1.8M), r/DeFi (800K), r/solana (400K).</p>
            <p className="mt-1"><strong>Protocol-specific:</strong> r/Uniswap, r/AAVE, r/Chainlink — and the equivalent for each client's ecosystem.</p>
            <p className="mt-2"><strong>Sweet spot formula:</strong> 10K–500K members, active daily discussions, founders/builders as members, mod rules that allow self-promotion with genuine value.</p>

            <h4 className="mt-4 font-semibold">Content Formats That Work on Reddit</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Case Study + Lesson:</strong> "We tested [strategy] across 5 protocols. Here's what actually worked:"</li>
              <li><strong>Tool/Method Breakdown:</strong> "We've used [approach] for 18 months across Web3 marketing. Honest breakdown:"</li>
              <li><strong>Ask Reddit:</strong> "What's your biggest frustration with [DeFi category] right now?"</li>
            </ul>
            <p className="mt-2">Always lead with value. Never open with a link or a pitch.</p>

            <h4 className="mt-4 font-semibold">Weekly Reddit Execution</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Monday:</strong> Scan top 5 target subreddits; save 10–15 high-value posts; note recurring pain points</li>
              <li><strong>Tue–Thu:</strong> Comment on 5–10 posts daily with detailed, helpful responses — no links, no pitching</li>
              <li><strong>Friday:</strong> Post 1 original piece using a proven format; post at 9–11 AM EST for best visibility</li>
              <li><strong>Weekend:</strong> Reply to all comments; DM genuinely interested users; repurpose top-performing posts to CT</li>
            </ul>

            <h4 className="mt-4 font-semibold">Conversion Path</h4>
            <p>Helpful Reddit comment → user checks profile → clicks CT or website → follows → sees work over time → DMs or books a call. Timeline: 2–8 weeks. This is a long game — consistency beats virality.</p>
          </div>
        </div>

        <div id="syndication" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Content Syndication (Mirror, Paragraph, Ecosystem Publications)</h3>
          <div className="mt-4 space-y-3">
            <p>Syndication extends the reach of long-form content beyond owned channels. In Web3, the primary syndication destinations are on-chain publishing platforms and ecosystem media.</p>

            <h4 className="mt-4 font-semibold">Primary Syndication Channels</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mirror.xyz:</strong> On-chain publishing with native Web3 audience. Best for narrative pieces, protocol manifestos, and long-form explainers. Posts can be minted as NFTs for community engagement.</li>
              <li><strong>Paragraph.xyz:</strong> Newsletter and publishing platform with strong Web3 traction. Good for recurring content series and subscriber-based distribution.</li>
              <li><strong>Ecosystem publications:</strong> Most major chains and ecosystems have newsletters, blogs, or media arms that accept contributor content (e.g. Solana Foundation blog, ETH Research, Bankless). Pursue these for high-credibility placement.</li>
            </ul>

            <h4 className="mt-4 font-semibold">Syndication Rules</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Always publish on the client's owned domain first, wait 48–72h, then syndicate</li>
              <li>Use canonical tags where supported to protect SEO value</li>
              <li>Adapt the intro for the syndication platform's audience — don't copy-paste</li>
              <li>On Mirror specifically: tailor to the on-chain community; audience skews more crypto-native than search traffic</li>
            </ul>

            <h4 className="mt-4 font-semibold">What to Syndicate</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li><strong>Tier 1/2 articles:</strong> Yes — highest value, worth the distribution effort</li>
              <li><strong>Case studies:</strong> Yes — strong proof assets, ecosystem publications love them</li>
              <li><strong>Tier 3 educational content:</strong> Selectively, when it's genuinely useful to the platform's audience</li>
            </ul>
          </div>
        </div>

        <div id="governance-forums" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Governance Forums & Ecosystem Communities</h3>
          <div className="mt-4 space-y-3">
            <p>Governance forums (Snapshot, Commonwealth, protocol-specific forums) are underused distribution channels. Long-form technical content and case studies posted here reach the most engaged segment of a protocol's audience: token holders and active community members.</p>

            <h4 className="mt-4 font-semibold">How to Use Governance Forums for Distribution</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cross-post protocol explainers or technical deep-dives as forum posts — frame as community education, not promotion</li>
              <li>When a new article is published on a topic relevant to an active governance discussion, drop a link in the thread with genuine context</li>
              <li>Use case studies as evidence in governance proposals (e.g. "Our marketing approach drove X TVL growth — here's the full case study")</li>
            </ul>

            <h4 className="mt-4 font-semibold">Discord & Telegram Community Posting</h4>
            <p>Beyond the client's own server, targeted posting in ecosystem partner communities is a distribution lever — but requires care.</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Only post in communities where the content is genuinely relevant</li>
              <li>Follow each server's rules on self-promotion — many have dedicated #resources or #articles channels</li>
              <li>Lead with value, not the link — summarise the insight first, link second</li>
              <li>Never mass-post the same message across servers — tailor each one</li>
            </ul>
          </div>
        </div>

        <div id="partner-amplification" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Partner & Ecosystem Amplification</h3>
          <div className="mt-4 space-y-3">
            <p>Co-promotion with ecosystem partners multiplies distribution without additional content production. In Web3, protocol ecosystems are interconnected — integrations, shared liquidity, and co-dependent communities make cross-promotion natural.</p>

            <h4 className="mt-4 font-semibold">How to Structure Partner Amplification</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Co-authored content:</strong> Write a piece together with an ecosystem partner (e.g. "How [Protocol A] + [Protocol B] improve yield for LPs"). Both parties promote to their audiences.</li>
              <li><strong>Newsletter swaps:</strong> Feature each other's content in respective newsletters or Discord announcement channels</li>
              <li><strong>CT cross-promotion:</strong> Coordinate a thread or quote-tweet chain where both protocols engage — signals ecosystem alignment to both audiences</li>
              <li><strong>Case study featuring the partner:</strong> Write a case study about the integration or collaboration. Partner has strong incentive to share.</li>
            </ul>

            <h4 className="mt-4 font-semibold">Identifying the Right Partners</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Protocols the client has a live integration with</li>
              <li>Protocols targeting the same user segment but not competing directly</li>
              <li>Ecosystem foundations and grants programs (they often have large distribution channels and want to promote ecosystem activity)</li>
            </ul>
          </div>
        </div>

        <div id="distribution-cadence" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Distribution Cadence</h3>
          <div className="mt-4 space-y-3">
            <p>Tie distribution to the content calendar. Every new article or case study should trigger a distribution checklist.</p>
            <table className="my-4 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-2 text-left font-medium">Timing</th>
                  <th className="py-2 text-left font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Publish day</td>
                  <td className="py-2">CT thread + Discord/Telegram post (see Social Media Playbook)</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Day 2–3</td>
                  <td className="py-2">Reddit post or comment in relevant subreddit</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Day 3–4</td>
                  <td className="py-2">Syndicate to Mirror or Paragraph</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Day 5–7</td>
                  <td className="py-2">Email newsletter feature (if on send schedule)</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Week 2</td>
                  <td className="py-2">Pitch to ecosystem publication or partner for co-promotion</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Ongoing</td>
                  <td className="py-2">Monitor Reddit/governance forums for relevant discussions; drop link with context</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="channel-performance" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Performance Tracking by Channel</h3>
          <div className="mt-4 space-y-3">
            <p>Track distribution channel performance separately from organic search. Not every channel drives conversions — some build awareness, others build community trust.</p>
            <table className="my-4 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-2 text-left font-medium">Channel</th>
                  <th className="py-2 text-left font-medium">Primary metric</th>
                  <th className="py-2 text-left font-medium">Secondary metric</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Email</td>
                  <td className="py-2">Click-through rate, wallet connects from email</td>
                  <td className="py-2">Open rate, unsubscribes</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Reddit</td>
                  <td className="py-2">Profile visits, DMs, CT follows from Reddit</td>
                  <td className="py-2">Upvotes, comment engagement</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Mirror / Paragraph</td>
                  <td className="py-2">Reads, mints (Mirror), subscriber growth</td>
                  <td className="py-2">Time on page</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Governance forums</td>
                  <td className="py-2">Thread engagement, proposal citations</td>
                  <td className="py-2">Token holder reach</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Partner amplification</td>
                  <td className="py-2">Referral traffic, wallet connects from partner channels</td>
                  <td className="py-2">Reach, impressions</td>
                </tr>
              </tbody>
            </table>
            <Blockquote>
              Use UTM parameters on all distributed links to track which channel drives traffic and conversions. Start with last-touch; upgrade to position-based when 6+ months of data is available.
            </Blockquote>
          </div>
        </div>

      </div>
    </>
  );
}
