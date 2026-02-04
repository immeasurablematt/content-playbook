import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CodeBlock } from "@/components/CodeBlock";
import { Web2Callout } from "@/components/Web2Callout";

export function SectionEmailContent() {
  return (
    <>
      <p className="lead text-lg text-ink-muted">
        I've found that email marketing in Web3 is less central than in Web2, but still critical for onboarding, governance, and re-engagement. The principles are universal—the triggers and segmentation shift.
      </p>

      <Accordion type="single" collapsible className="mt-8 w-full">
        <AccordionItem value="context">
          <AccordionTrigger>Email in Web3 Context</AccordionTrigger>
          <AccordionContent>
            <p><strong>Why email matters less (but still matters) in Web3:</strong></p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Primary channels elsewhere:</strong> Discord, Telegram, and CT are where communities live. Email is secondary.</li>
              <li><strong>Wallet-first identity:</strong> Users often connect wallets without providing email. You have on-chain behavior but no inbox access.</li>
              <li><strong>Skepticism of centralized platforms:</strong> Web3 users are wary of "Web2-style" marketing emails. Approach must be value-first, never spammy.</li>
            </ul>

            <p className="mt-3"><strong>Where email still wins in Web3:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Onboarding sequences:</strong> After wallet connect, guide users through first transaction, staking, governance.</li>
              <li><strong>Protocol updates and governance:</strong> Major announcements, governance proposals, security updates. Higher deliverability than Discord pings.</li>
              <li><strong>Re-engagement for dormant wallets:</strong> "We noticed you haven't traded in 30 days" with incentive to return.</li>
              <li><strong>Educational drip campaigns:</strong> For complex protocols (DeFi, derivatives), email educates over time without overwhelming.</li>
            </ul>

            <Web2Callout>
              <p><strong>Web2 Email Priority:</strong> Email is often the #1 or #2 marketing channel. MQL nurturing, lifecycle emails (onboarding, activation, retention), abandoned cart, upsell/cross-sell, newsletters, event promotions. Much higher volume and sophistication (segmentation, automation, A/B testing at scale).</p>
            </Web2Callout>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="onboarding">
          <AccordionTrigger>Onboarding Sequences (Post-Wallet Connect)</AccordionTrigger>
          <AccordionContent>
            <p><strong>Goal:</strong> Guide new users from wallet connection to first meaningful action (swap, stake, vote, trade) within 7 days. In my experience, if they don't complete a transaction within 7 days, activation rate drops dramatically.</p>

            <p className="mt-3 font-medium">Example 3-email onboarding sequence (Jupiter, DEX aggregator):</p>
            <CodeBlock title="Email 1: Welcome + First Swap (Day 0, 5 min after wallet connect)">{`Subject: Welcome to Jupiter—Get the Best Swap Price in 60 Seconds

Hi [Name or "Trader"],

You just connected your wallet to Jupiter. Here's what you unlocked:
• Best swap prices across all Solana DEXs, automatically
• <0.1% slippage on most trades
• No sign-up, no KYC, just connect and trade

**Your First Swap (takes 60 seconds):**
1. Click "Swap" in the app
2. Select tokens (try SOL → USDC)
3. Jupiter routes across Raydium, Orca, Serum for best price
4. Confirm and you're done

[CTA: Make Your First Swap]

Questions? Join our Discord: [link]
Reply to this email anytime.

— The Jupiter Team`}</CodeBlock>

            <CodeBlock title="Email 2: Education + Feature Discovery (Day 2)">{`Subject: How Jupiter Saves You Money on Every Trade

You've connected your wallet. Here's why traders choose Jupiter:

**Smart Routing = Lower Costs**
Jupiter checks prices across all Solana DEXs and automatically splits your order for the best execution. On a $10K trade, that's often $50-$200 saved vs single-DEX trading.

**3 Features to Try:**
1. **Limit Orders:** Set your price, walk away, Jupiter executes when it hits
2. **DCA (Dollar-Cost Averaging):** Auto-buy at intervals (daily, weekly)
3. **Price Alerts:** Get notified when your target price hits

[CTA: Explore Features] [CTA: Read Docs]

See you on-chain,
— Jupiter Team`}</CodeBlock>

            <CodeBlock title="Email 3: Social Proof + Re-Engagement (Day 7, if no activity)">{`Subject: Join 500K+ Traders Using Jupiter Daily

Hi [Name],

We noticed you haven't made a swap yet. No pressure—but here's what you're missing:

**Jupiter by the numbers:**
• $10B+ total volume
• 500K+ monthly active wallets
• <0.1% average slippage
• Trusted by the biggest Solana traders

**Still not sure?** Check out these tweets from our community: [social proof screenshots or links]

**Ready to trade?** [CTA: Start Swapping]

Questions? Concerns? Reply to this email.

— Jupiter Team

P.S. New to Solana DeFi? [Link to beginner guide]`}</CodeBlock>

            <Web2Callout>
              <p><strong>Web2 B2B SaaS Onboarding Sequence:</strong> Day 0: Welcome + setup checklist. Day 2: Feature highlights + tutorial videos. Day 5: Case study + ROI calculator. Day 7: Book a demo with customer success. Day 14: "Need help?" + support resources. Day 21: Upsell to paid plan or additional features. Day 30: NPS survey.</p>
            </Web2Callout>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="governance">
          <AccordionTrigger>Protocol Updates & Governance Notifications</AccordionTrigger>
          <AccordionContent>
            <p><strong>Use case:</strong> Major protocol upgrades, governance proposals, security updates, token economics changes. These are high-importance, low-frequency emails. I've found deliverability is better than Discord for critical announcements (Discord notifications get missed).</p>

            <p className="mt-3 font-medium">Best practices:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Subject line clarity:</strong> No clever copy—be direct. "Governance Proposal #42: Fee Structure Update" or "Security Update: Action Required".</li>
              <li><strong>TL;DR at top:</strong> Most users won't read the full email. Summary: what's changing, when, what action (if any) is required.</li>
              <li><strong>Link to full details:</strong> Governance forum post, Snapshot vote, documentation. Email is announcement; forum/docs are detail.</li>
              <li><strong>Segmentation:</strong> Send governance emails only to token holders or governance participants (not all wallet connects). Reduces spam complaints.</li>
            </ul>

            <p className="mt-3 font-medium">Example: Governance Proposal Email</p>
            <CodeBlock title="Subject: Governance Proposal #42: Fee Tier Update (Vote by Feb 15)">{`**TL;DR:** Proposal to reduce swap fees from 0.3% to 0.2% for trades >$10K. Vote closes Feb 15.

Hi [Name],

A new governance proposal is live: **Reduce swap fees for large trades to increase volume.**

**What's Proposed:**
• Current: 0.3% fee on all swaps
• Proposed: 0.2% fee on swaps >$10K, 0.3% on swaps <$10K
• Goal: Attract larger traders and institutional volume

**Why this matters:**
Lower fees for whales → more volume → more liquidity → better prices for everyone.

**Your Vote:**
You hold [X] $JUP tokens. Cast your vote:
[CTA: Vote on Snapshot]

**Vote Closes:** Feb 15, 11:59 PM UTC

Read full proposal and discussion: [Forum Link]

— Jupiter Governance Team`}</CodeBlock>

            <Web2Callout>
              <p><strong>Web2 Product Update Emails:</strong> "What's New in [Product] This Month" with feature highlights, changelog, tutorial links. Sent monthly or quarterly. Optional: NPS survey embedded to gauge satisfaction. Typical segments: active users, power users, churned users.</p>
            </Web2Callout>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="reengagement">
          <AccordionTrigger>Re-Engagement for Dormant Wallets</AccordionTrigger>
          <AccordionContent>
            <p><strong>The challenge:</strong> Users connect wallet, maybe make one trade, then disappear. Unlike Web2 where you can track login activity, in Web3 you track on-chain behavior (last transaction, last swap, last stake).</p>

            <p className="mt-3 font-medium">Trigger-based re-engagement (examples):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>30 days no activity:</strong> "We miss you—here's what's new" + incentive (airdrop, reduced fees, exclusive feature access).</li>
              <li><strong>Partial onboarding:</strong> Wallet connected but no first transaction. "Finish your first swap and get [reward]".</li>
              <li><strong>Feature announcement:</strong> Big feature launch (limit orders, new chain support). "You're early to [feature]—try it now".</li>
              <li><strong>Market movement:</strong> "SOL just hit $150—time to trade?" (use sparingly, can feel pushy).</li>
            </ul>

            <p className="mt-3 font-medium">Example: 30-day dormant re-engagement</p>
            <CodeBlock title="Subject: It's Been a Minute—Here's What You Missed on Jupiter">{`Hi [Name],

We haven't seen your wallet active in 30 days. No guilt trip—just wanted to share what's new:

**New Features Since You Left:**
✅ Limit Orders (set and forget)
✅ DCA (auto-buy daily/weekly)
✅ Price Alerts (get notified when your target hits)
✅ 15% lower fees on large trades

**Come back and we'll cover your first $5 in fees.** [CTA: Claim Offer]

Questions? Reply to this email or hop in Discord: [link]

— Jupiter Team

P.S. If you're done with Jupiter, no hard feelings. [Unsubscribe]`}</CodeBlock>

            <Web2Callout>
              <p><strong>Web2 Re-Engagement Campaigns:</strong> "We Miss You" emails with discount code or free trial extension. Win-back series (3-5 emails over 30 days) with progressively stronger offers. Exit surveys for churned users: "Why did you leave?" Reactivation based on product updates: "We fixed [pain point you complained about]".</p>
            </Web2Callout>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="educational">
          <AccordionTrigger>Educational Drip Campaigns</AccordionTrigger>
          <AccordionContent>
            <p><strong>Use case:</strong> Complex protocols (DeFi, perpetual futures, staking) require education over time. I've found that dumping everything in one email overwhelms users. Drip it out over 2–4 weeks.</p>

            <p className="mt-3 font-medium">Example educational drip (Hyperliquid, perpetual DEX):</p>
            <p><strong>Week 1:</strong> "What are Perpetual Futures?" (basics, vs spot trading, leverage explained)</p>
            <p><strong>Week 2:</strong> "How to Place Your First Perp Trade on Hyperliquid" (step-by-step, screenshots)</p>
            <p><strong>Week 3:</strong> "Risk Management: How to Use Stop-Losses and Take-Profits" (protect your capital)</p>
            <p><strong>Week 4:</strong> "Advanced: Funding Rates and How to Use Them" (pro trader tactics)</p>

            <p className="mt-3"><strong>Delivery cadence:</strong> One email per week, same day/time. Users can opt out if too frequent. Track engagement: open rates, click-throughs, and most importantly—do educated users trade more?</p>

            <Web2Callout>
              <p><strong>Web2 Educational Nurture Campaigns:</strong> Lead magnets (ebook, webinar) trigger 5–7 email drip. Day 0: Deliver resource. Day 2: Highlight key takeaway #1. Day 5: Key takeaway #2 + case study. Day 9: Related resource. Day 14: "Ready to implement? Book a demo." Often tied to lead scoring (engaged recipients = hot leads).</p>
            </Web2Callout>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="segmentation">
          <AccordionTrigger>Segmentation by On-Chain Behavior</AccordionTrigger>
          <AccordionContent>
            <p><strong>The advantage in Web3:</strong> Every action is on-chain and verifiable. You can segment by actual behavior, not self-reported surveys. In my experience, this makes segmentation more accurate than most Web2 scenarios.</p>

            <p className="mt-3 font-medium">Segmentation dimensions I've used:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Transaction volume:</strong> Whales ({'>'} $100K), mid-tier ($10K–$100K), retail ({'<'} $10K). Different messaging, offers, and features.</li>
              <li><strong>Activity frequency:</strong> Daily traders, weekly traders, monthly traders, dormant ({'>'} 30 days no activity).</li>
              <li><strong>Product usage:</strong> Spot only, perps only, both, liquidity providers, governance participants.</li>
              <li><strong>Token holdings:</strong> Governance token holders (eligible for proposals), non-holders (incentivize to acquire).</li>
              <li><strong>Chain preference:</strong> Solana-native users, ETH L2 users (Base, Arbitrum), multi-chain users.</li>
              <li><strong>Onboarding stage:</strong> Wallet connected only, first transaction completed, multiple transactions, power user ({'>'} 50 transactions).</li>
            </ul>

            <p className="mt-3 font-medium">Example: Whale vs Retail Messaging</p>
            <CodeBlock title="Whale Segment (>$100K volume)">{`Subject: Exclusive: Priority Support + Lower Fees for High-Volume Traders

Hi [Name],

We see you. You've traded $[X]M on Jupiter—you're in the top 0.5% of users.

**Your VIP Benefits:**
• 0.15% fees (vs standard 0.2%)
• Priority support (reply to this email anytime)
• Early access to new features
• Direct line to our team for custom integrations

Questions? Want to discuss custom solutions? Reply here.

— Jupiter Team`}</CodeBlock>

            <CodeBlock title="Retail Segment (<$10K volume)">{`Subject: 5 Tips to Get More from Jupiter

Hi [Name],

You've made [X] swaps on Jupiter. Here are 5 tips to save even more:

1. Use Limit Orders to buy dips automatically
2. Set Price Alerts so you never miss a move
3. Try DCA to auto-buy weekly (removes emotion)
4. Check your swap history to see how much you've saved
5. Join Discord for trading tips and alpha

[CTA: Explore Features]

— Jupiter Team`}</CodeBlock>

            <Web2Callout>
              <p><strong>Web2 B2B Segmentation:</strong> Company size (SMB, mid-market, enterprise), industry vertical, product usage (free, paid, power user), engagement score (email opens, logins, feature usage), lifecycle stage (trial, onboarding, active, at-risk, churned). Typical tool: HubSpot, Salesforce, Segment for tracking.</p>
            </Web2Callout>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="best-practices">
          <AccordionTrigger>Best Practices & Deliverability</AccordionTrigger>
          <AccordionContent>
            <p><strong>Core principles I've learned:</strong></p>

            <p className="mt-2 font-medium">1. Permission-based (critical in Web3):</p>
            <p>Never buy email lists. Only send to users who opted in (checkbox at wallet connect, explicit sign-up, governance participation). Web3 users are hyper-sensitive to spam.</p>

            <p className="mt-2 font-medium">2. Easy unsubscribe:</p>
            <p>One-click unsubscribe at bottom of every email. Don't make users hunt for it. Respecting their choice builds trust.</p>

            <p className="mt-2 font-medium">3. Sender reputation:</p>
            <p>Use dedicated domain for email (email.jupiter.com, not jupiter.com). Set up SPF, DKIM, DMARC. Monitor bounce rates and spam complaints (keep both {'<'} 2%).</p>

            <p className="mt-2 font-medium">4. Frequency caps:</p>
            <p>Web3 users have low tolerance for email volume. Max 2–3 emails/week for onboarding; 1–2/month for established users (unless governance or security critical).</p>

            <p className="mt-2 font-medium">5. Mobile-first:</p>
            <p>60–70% of crypto users check email on mobile. Short subject lines (40 chars), clear CTAs, single-column layout.</p>

            <p className="mt-2 font-medium">6. Personal from address:</p>
            <p>"team@jupiter.com" or "alice@jupiter.com" feels more human than "noreply@jupiter.com". Encourage replies—build relationships.</p>

            <p className="mt-3 font-medium">Testing and optimization:</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>A/B test subject lines (plain vs curiosity-driven)</li>
              <li>Test send time (UTC-friendly for global audiences)</li>
              <li>Track open rate, click-through rate, and most importantly: conversion to on-chain action (did the email drive a swap/stake/vote?)</li>
            </ul>

            <Web2Callout>
              <p><strong>Web2 Email Best Practices:</strong> Personalization (merge tags for name, company, behavior), dynamic content (show different content blocks per segment), automated workflows (trigger-based, lifecycle), A/B testing at scale (subject line, CTA, design), compliance (CAN-SPAM, GDPR), email validation (clean list regularly). Tools: SendGrid, Mailchimp, HubSpot, Klaviyo.</p>
            </Web2Callout>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
