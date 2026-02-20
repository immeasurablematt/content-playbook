import { Blockquote } from "@/components/Blockquote";
import { Web3Content } from "@/components/Web3Content";
import { Web2Content } from "@/components/Web2Content";

export function SectionWeb2Web3Content() {
  return (
    <>
      <p className="lead text-lg text-ink-muted">
        Web2 and Web3 don't just use different tools. They optimize for fundamentally different things.
      </p>

      <p className="mt-6">
        Web2 marketing is centralized and revenue-driven—you're moving users through a funnel toward subscriptions, purchases, or ad impressions. Web3 flips that. Projects are decentralized and community-owned, often built around tokens and governance. Marketing isn't about driving sales. It's about growing a network where users are stakeholders. Success is measured in on-chain activity, liquidity, and ecosystem health.
      </p>

      <div className="mt-8 space-y-12">
        <Web2Content>
          <div id="web2-objectives" className="scroll-mt-header pb-10 border-b border-stone-200">
            <h3 className="font-serif text-2xl font-semibold text-ink">Web2 Marketing Objectives: The Traditional Funnel</h3>
            <div className="mt-4 space-y-3">
              <p>I developed my initial framework in the Web2 world, where marketing revolves around a classic sales funnel (often AIDA: Awareness, Interest, Desire, Action) aimed at driving users from discovery to long-term loyalty. The ultimate goal is usually monetizing through a subscription-as-a-service (SaaS) model, where recurring revenue is king.</p>

              <h4 className="mt-4 font-semibold">Generating New Traffic and Awareness</h4>
              <p>This is the top-of-funnel (TOFU) focus. In my experience, marketers use SEO, content marketing, social media ads, influencer partnerships, and PR to attract eyeballs. Metrics here include impressions, website visits, and brand mentions. The aim is broad exposure to build a large audience pool.</p>

              <h4 className="mt-4 font-semibold">Nurturing Leads</h4>
              <p>Once traffic is in, it's about building relationships. Tools like email drip campaigns, webinars, personalized content (e.g., blog posts or ebooks), and retargeting ads keep users engaged. This stage measures engagement rates, open/click-through rates, and lead scoring to qualify prospects.</p>

              <h4 className="mt-4 font-semibold">Acquiring and Converting Leads</h4>
              <p>Mid-funnel (MOFU) efforts push users toward a decision. Tactics include free trials, demos, landing pages with CTAs, A/B testing, and sales outreach. Conversion rates, cost per acquisition (CPA), and lead-to-customer ratios are key KPIs. The focus is on turning interest into sign-ups or purchases.</p>

              <h4 className="mt-4 font-semibold">Selling and Closing</h4>
              <p>Bottom-of-funnel (BOFU) is where the transaction happens. Upselling features, discount codes, testimonials, and urgency tactics (e.g., limited-time offers) drive the sale. For SaaS, this often means securing that initial subscription payment.</p>

              <h4 className="mt-4 font-semibold">Retaining Customers</h4>
              <p>Post-purchase, the emphasis shifts to loyalty and reducing churn. Strategies include onboarding emails, customer success teams, feature updates, loyalty programs, and NPS surveys. Lifetime value (LTV), retention rates, and upsell/cross-sell revenue are tracked to ensure users stick around and spend more.</p>

              <h4 className="mt-4 font-semibold">Why This Works in Web2</h4>
              <p>Centralized platforms control the user experience, data, and monetization. Revenue comes from direct sales or ads, so objectives prioritize scalable, predictable growth.</p>

              <p className="mt-3"><strong>Examples I've observed:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Netflix:</strong> Awareness via viral trailers, nurturing through personalized recommendations, conversion with easy sign-ups, retention via content algorithms.</li>
                <li><strong>HubSpot / Salesforce:</strong> B2B focus on lead gen through inbound marketing, with CRMs tracking the entire funnel.</li>
              </ul>

              <p className="mt-3"><strong>Challenges:</strong> High competition for attention, rising ad costs, and privacy regulations (e.g., GDPR) can complicate tracking.</p>
            </div>
          </div>
        </Web2Content>

        <Web3Content>
          <div id="web3-objectives" className="scroll-mt-header pb-10 border-b border-stone-200">
            <h3 className="font-serif text-2xl font-semibold text-ink">Web3 Marketing Objectives: Ecosystem Growth and On-Chain Metrics</h3>
            <div className="mt-4 space-y-3">
              <p>Web3 marketing centers on network vitality, not just revenue. Projects rely on tokens, smart contracts, and community governance, so objectives focus on active, on-chain engagement that boosts token value and ecosystem health.</p>

              <h4 className="mt-4 font-semibold">Growing Awareness</h4>
              <p>Similar to Web2 TOFU, but with a twist—it's often grassroots and viral. In my work, I've used tactics like airdrops, meme marketing, Twitter (X) spaces, Discord AMAs, and collaborations with KOLs (key opinion leaders). Metrics: Social media buzz, token mentions, and community size (e.g., followers or Telegram members). The goal is to educate on the project's utility in a skeptical space.</p>

              <h4 className="mt-4 font-semibold">Generating New Daily Active Users (DAUs)</h4>
              <p>This is the engagement powerhouse. Unlike Web2's passive traffic, Web3 wants users interacting daily via wallets, dApps, or protocols. Strategies I've developed include onboarding incentives like free tokens for sign-ups, gamification (e.g., play-to-earn), referral programs, and integrations with popular chains (e.g., Ethereum or Solana). KPIs: DAU/MAU ratios, wallet connections, and user retention curves.</p>

              <h4 className="mt-4 font-semibold">Increasing On-Chain Transaction Volume (Tx Vol)</h4>
              <p>Here, marketing drives real activity. I've found that campaigns encouraging swaps, staking, or governance votes can spike volume. Tactics: Yield farming promotions, limited-edition NFTs, or DeFi incentives. Metrics: Total value locked (TVL), gas fees generated, and transaction counts. High tx vol signals a thriving network and can pump token prices.</p>

              <h4 className="mt-4 font-semibold">Increasing Liquidity</h4>
              <p>Essential for sustainability, this focuses on deepening pools to reduce slippage and attract traders. Approaches I've used: Liquidity mining rewards, partnerships with DEXs (e.g., Jupiter on Solana), and community-driven events like token burns or AMAs. KPIs: Liquidity depth, trading volume on exchanges, and impermanent loss mitigation.</p>

              <h4 className="mt-4 font-semibold">Why This Works in Web3</h4>
              <p>Decentralization means value accrues to the network, not just the company. Tokens align incentives—users become stakeholders. Marketing often leverages speculation and FOMO (fear of missing out) but must combat rugs and scams.</p>

              <p className="mt-3"><strong>Examples I've studied:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Jupiter (Solana DEX aggregator):</strong> Awareness through DeFi community engagement, DAUs via seamless swap UX, tx vol from aggregating the best prices, liquidity via LP partnerships. Their marketing emphasizes speed and Solana's low fees.</li>
                <li><strong>Hyperliquid (decentralized perp exchange):</strong> Grew DAUs with a focus on serious traders, boosted tx vol through competitive perpetual contracts, liquidity through market maker incentives. Their approach is less meme-heavy, more data-driven.</li>
                <li><strong>Base (Coinbase's L2):</strong> Marketing emphasizes low-fee transactions to drive adoption and on-chain activity, backed by Coinbase's brand trust.</li>
              </ul>

              <p className="mt-3"><strong>Challenges I've navigated:</strong> Volatility, regulatory uncertainty, and "crypto winters" can tank metrics. Plus, metrics are public on-chain, so transparency is a double-edged sword.</p>
            </div>
          </div>
        </Web3Content>

        <div id="key-differences" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Key Differences and Strategic Implications</h3>
          <div className="mt-4 space-y-3">
            <p>Over the years, I've identified the critical distinctions that shape how I approach strategy in each ecosystem:</p>

            <table className="my-4 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-2 text-left font-medium">Dimension</th>
                  <th className="py-2 text-left font-medium">Web2</th>
                  <th className="py-2 text-left font-medium">Web3</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Monetization</td>
                  <td className="py-2">Sells access (subscriptions)</td>
                  <td className="py-2">Sells participation (tokens/utilities)</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">User Relationship</td>
                  <td className="py-2">Users are "customers"</td>
                  <td className="py-2">Users are "owners" via tokens</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Marketing Style</td>
                  <td className="py-2">Top-down campaigns</td>
                  <td className="py-2">Community-first (DAOs, governance)</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Metrics & Tools</td>
                  <td className="py-2">Google Analytics, CRMs</td>
                  <td className="py-2">Blockchain explorers (Etherscan), on-chain data</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Key Risk</td>
                  <td className="py-2">Churn from bad UX</td>
                  <td className="py-2">Apathy if tokenomics fail</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-3"><strong>Overlaps I've leveraged:</strong> Both need awareness, but Web3 often borrows Web2 tactics (e.g., SEO for project sites) while adding crypto-specific ones like bounty programs. Hybrid "Web2.5" approaches are emerging (e.g., Reddit's NFTs for community engagement).</p>
          </div>
        </div>

        <div id="blending" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Strategic Implications: Blending Web2 and Web3</h3>
          <div className="mt-4 space-y-3">
            <Blockquote>
              In my experience, building a strategy for a specific project means thinking about blending elements—e.g., use Web2 funnels to onboard into Web3 ecosystems. The methodology is universal. The examples adapt.
            </Blockquote>

            <p className="mt-3">I developed this playbook to work for both ecosystems. Throughout the sections that follow, I present Web3 examples as the primary lens (because that's where I've focused most recently), but I include "Web2 Equivalent" callout boxes to show how the same framework applies to SaaS, B2B, and traditional digital marketing.</p>

            <p className="mt-3"><strong>The blended approach I use:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Use Web2 SEO and content funnels</strong> to drive awareness and education about Web3 protocols</li>
              <li><strong>Apply Web3 community engagement tactics</strong> (Discord, governance, token incentives) to create deeper loyalty</li>
              <li><strong>Measure both traditional metrics</strong> (conversions, MQLs) <strong>and on-chain metrics</strong> (DAUs, TVL, tx volume)</li>
              <li><strong>Adapt voice and tone</strong> based on where your audience lives (LinkedIn for enterprise, CT for crypto natives)</li>
            </ul>

            <p className="mt-3">The framework is universal. The channels, examples, and metrics shift based on your ecosystem. This playbook gives you both.</p>
          </div>
        </div>
      </div>
    </>
  );
}
