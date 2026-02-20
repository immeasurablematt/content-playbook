import { Blockquote } from "@/components/Blockquote";
import { CodeBlock } from "@/components/CodeBlock";

export function SectionCampaignOrchestrationContent() {
  return (
    <>
      <p className="lead text-lg text-ink-muted">
        Cross-channel campaign orchestration is how to plan and execute campaigns that run content, KOL, and partner channels simultaneously as a single integrated system. Reserve this model for moments that genuinely warrant it — protocol launches, major feature drops, liquidity pushes, narrative shifts. For steady-state work, channels run independently.
      </p>

      <div className="mt-8 space-y-12">

        <div id="when-to-orchestrate" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">When to Orchestrate vs Run Independently</h3>
          <div className="mt-4 space-y-3">
            <h4 className="mt-2 font-semibold">Orchestrate All Three Channels When:</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Protocol or token launch (TGE)</li>
              <li>Major feature release (new chain support, new product vertical, significant UX change)</li>
              <li>TVL or liquidity push with a defined target and timeline</li>
              <li>Narrative shift (rebranding, repositioning, recovering from a negative event)</li>
              <li>Ecosystem expansion (entering a new chain, announcing a major integration)</li>
              <li>Governance proposal requiring broad community buy-in</li>
            </ul>

            <h4 className="mt-4 font-semibold">Run Channels Independently When:</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Ongoing content production (SEO articles, case studies)</li>
              <li>Steady-state KOL relationships</li>
              <li>Community management and engagement</li>
              <li>Regular monthly reporting cadence</li>
            </ul>
          </div>
        </div>

        <div id="campaign-brief" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Campaign Brief Format</h3>
          <div className="mt-4 space-y-3">
            <p>Every orchestrated campaign starts with a single brief that all three workstreams pull from. Write this before any channel work begins — if you can't complete this brief, the campaign isn't ready to start.</p>
            <CodeBlock title="Integrated Campaign Brief">{`[Campaign Name] — Integrated Campaign Brief

Campaign type: Launch / Feature drop / Liquidity push / Narrative shift / Ecosystem expansion / Governance

One-line objective: [What does success look like in one sentence?]
  e.g. "Drive 5,000 wallet connects in 30 days for the Base chain launch"

Timeline: [Start date] → [End date] — [X weeks total]

Primary KPI: [Single metric the whole campaign is optimised for]
Secondary KPIs: [2–3 supporting metrics across channels]

Budget: Content production [$X] | KOL fees [$X] | Partner costs [$X] | Total [$X]

---

NARRATIVE & MESSAGING
[The single idea all three channels are communicating.
Write one paragraph — if you can't summarise it in a paragraph,
the narrative isn't clear enough yet.]

Core pain point: [What problem does this campaign address for the audience?]
Core claim: [What are we asserting? Include a number or proof point if possible]
Proof: [On-chain data, case study, KOL validation, or benchmark]
CTA: [Single action: connect wallet / join Discord / try the feature / vote]

---

AUDIENCE
Primary segment: [Who? Be specific — DeFi traders on Solana, ETH L2 LPs, etc.]
Where they are: [CT, Discord, Telegram, governance forums, etc.]
Market sentiment context: [Bull / bear / neutral — affects tone across all channels]

---

CHANNEL ASSIGNMENTS
| Channel         | Role                                      | Owner           | Lead time |
|-----------------|-------------------------------------------|-----------------|-----------|
| Owned content   | Anchor piece / supporting articles        | Strategist + Writer | 2–3 weeks |
| KOL             | Amplification / reaction / co-creation    | KOL Manager     | 1–2 weeks |
| Partner         | Co-announcement / joint content           | Account Lead    | 2–4 weeks |
| CT / social     | Brand posts / thread / reply engagement   | Social Owner    | 1 week    |

---

APPROVALS NEEDED BEFORE LAUNCH
□ Client sign-off on narrative and messaging
□ KOL briefs reviewed and accepted
□ Partner co-announcement copy approved
□ Legal/compliance review (if token or financial claims involved)
□ On-chain data verified (TVL, DAU figures, tx volume)`}</CodeBlock>
          </div>
        </div>

        <div id="channel-sequencing" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Channel Sequencing Model (4-Week Standard)</h3>
          <div className="mt-4 space-y-3">
            <Blockquote>
              Channels don't launch simultaneously — they sequence to create compounding momentum. Each wave gives the next wave something to point to. This is the single biggest operational insight for cross-channel campaigns.
            </Blockquote>

            <h4 className="mt-4 font-semibold">Week 1 — Foundation (Owned Content)</h4>
            <p>Publish the anchor piece before anything else goes live. This is what KOLs and partners will reference — it needs to exist first.</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Anchor blog post or landing page live</li>
              <li>Brand CT thread from the anchor content</li>
              <li>Discord/Telegram announcement to owned community</li>
              <li>UTM tracking on all CTAs confirmed active</li>
            </ul>
            <p className="mt-2 text-sm font-medium text-rose-700">Gate: Nothing moves to Week 2 until the anchor content is live and UTMs are verified.</p>

            <h4 className="mt-4 font-semibold">Week 2 — Amplification (KOL Wave)</h4>
            <p>KOLs publish in their own voice, referencing or building on the anchor content. Stagger across 3–5 days — don't drop all KOL posts on the same day.</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Tier 1 KOL(s) publish first — sets the signal for Tier 2/3</li>
              <li>Tier 2 niche KOLs publish mid-week</li>
              <li>Tier 3 micro KOLs and community amplifiers publish end of week</li>
              <li>Brand account engages with every KOL post: reply, quote-tweet, repost to Discord/Telegram</li>
              <li>Monitor CT sentiment — flag any negative reactions immediately</li>
            </ul>

            <h4 className="mt-4 font-semibold">Week 3 — Community Depth (Spaces, AMAs, Governance)</h4>
            <p>Real-time engagement converts the awareness built in weeks 1–2 into genuine community trust.</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Twitter/X Space or Discord AMA with founder or core team</li>
              <li>Promote 48h in advance; repurpose into 5–10 clips and a summary thread within 24h</li>
              <li>Partner cross-promotion activates: partner posts, newsletter mentions, joint Discord announcement</li>
              <li>Supporting articles or how-to content published (Tier 3 SEO supporting the anchor)</li>
              <li>Community engagement push: reply to every relevant CT mention, participate in governance discussions</li>
            </ul>

            <h4 className="mt-4 font-semibold">Week 4 — Proof & Conversion (Close)</h4>
            <p>Convert the warm audience the first three weeks built. Lead with results, not messaging.</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Publish early results: on-chain metrics snapshot, wallet connect numbers, community growth</li>
              <li>Case study or user story if available</li>
              <li>Final CTA push across all channels: wallet connect, token claim, governance vote</li>
              <li>Retargeting: re-engage anyone who clicked but didn't convert</li>
            </ul>
          </div>
        </div>

        <div id="dependency-map" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Dependency Map</h3>
          <div className="mt-4 space-y-3">
            <p>These are the hard dependencies that cause campaigns to fail when ignored. Map them at the brief stage — not after something breaks.</p>
            <table className="my-4 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-2 text-left font-medium">Dependency</th>
                  <th className="py-2 text-left font-medium">Blocks</th>
                  <th className="py-2 text-left font-medium">Lead time</th>
                  <th className="py-2 text-left font-medium">Owner</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Anchor content live</td>
                  <td className="py-2">KOL briefs can't reference a URL that doesn't exist</td>
                  <td className="py-2">2–3 weeks before KOL wave</td>
                  <td className="py-2">Writer + Strategist</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">On-chain data verified</td>
                  <td className="py-2">Any claim with a number needs verification before KOL or partner uses it</td>
                  <td className="py-2">1 week before content publish</td>
                  <td className="py-2">Client / On-chain analyst</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Client narrative sign-off</td>
                  <td className="py-2">KOL and partner briefs can't be finalised without approved messaging</td>
                  <td className="py-2">2 weeks before campaign start</td>
                  <td className="py-2">Account Lead</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Partner co-announcement approved</td>
                  <td className="py-2">Partner social posts and newsletters can't go without internal approval on their side</td>
                  <td className="py-2">2–4 weeks depending on partner</td>
                  <td className="py-2">Account Lead</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">KOL brief accepted</td>
                  <td className="py-2">KOLs need 5–10 days minimum to create native content</td>
                  <td className="py-2">1–2 weeks before KOL wave</td>
                  <td className="py-2">KOL Manager</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">UTM parameters set up</td>
                  <td className="py-2">Attribution is broken without this from day one</td>
                  <td className="py-2">Before first content publishes</td>
                  <td className="py-2">Strategist</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Legal/compliance review</td>
                  <td className="py-2">Any token price, yield, or financial claim needs sign-off</td>
                  <td className="py-2">Allow 1 week buffer</td>
                  <td className="py-2">Client</td>
                </tr>
              </tbody>
            </table>

            <h4 className="mt-4 font-semibold">Contingency Rules</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Partner approval delayed:</strong> Proceed with owned content and KOL wave; slot partner into Week 3 or 4 rather than delaying the whole campaign</li>
              <li><strong>KOL misses deadline:</strong> Don't hold Week 2 — proceed with confirmed KOLs; reschedule or replace the delayed one in Week 3</li>
              <li><strong>Anchor content delayed:</strong> Push the entire sequence — never launch KOL or partner wave before the anchor exists</li>
            </ul>
          </div>
        </div>

        <div id="unified-messaging" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Unified Messaging Document</h3>
          <div className="mt-4 space-y-3">
            <p>One document per campaign. Every channel reads from it. No channel should be briefed from memory or a Telegram message.</p>
            <CodeBlock title="Unified Messaging Document">{`[Campaign Name] — Messaging Document

Campaign narrative (1 paragraph):
[The story the campaign is telling. Plain language. No jargon.]

Core claim: [The single most important thing we're asserting]

Proof points (top 3, in order of strength):
1. [On-chain data point — TVL, DAUs, tx volume, etc.]
2. [Case study or protocol story]
3. [KOL or community validation]

Approved numbers:
[Every specific metric that can be cited,
verified against Dune/DeFiLlama. Nothing else gets used.]

Phrases to use:
["Built for traders who…" / "Verified on-chain" / brand voice language]

Phrases to avoid:
[Anything unverified / competitor attacks /
regulatory-risk language / financial advice framing]

---

CHANNEL ADAPTATIONS
| Channel          | Tone            | Length          | CTA                  | What's different              |
|------------------|-----------------|-----------------|----------------------|-------------------------------|
| Anchor blog      | Authoritative   | 1,500–2,500w    | Wallet connect       | Full proof, objection handling|
| Brand CT thread  | Sharp, punchy   | 6–10 posts      | Follow + click link  | Pain-first hook               |
| KOL posts        | KOL's own voice | KOL's format    | Soft endorsement     | No approved language          |
| Partner post     | Professional    | 2–3 paragraphs  | Integration CTA      | Mutual benefit framing        |
| Discord/Telegram | Community, warm | Short           | Click link / react   | Less polish, more warmth      |`}</CodeBlock>
          </div>
        </div>

        <div id="approval-workflow" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Approval Workflow</h3>
          <div className="mt-4 space-y-3">
            <p>The biggest campaign killer in Web3 is approval bottlenecks — especially when partners, KOLs, and client legal are all in the chain. Design the approval flow before the campaign starts.</p>

            <h4 className="mt-4 font-semibold">Tier 1: Client Approval (Required for Everything)</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Narrative and messaging document: approve before any channel work begins</li>
              <li>On-chain data and claims: approve before anchor content publishes</li>
              <li>Co-announcement copy: approve before partner receives it</li>
              <li>Timeline: 48h SLA for routine approvals; 24h for urgent</li>
            </ul>

            <h4 className="mt-4 font-semibold">Tier 2: KOL Review (Light Touch)</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>KOLs do not get approval rights over their content — they write in their own voice</li>
              <li>Send: key facts, approved numbers, phrases to avoid, and the anchor content URL</li>
              <li>KOL sends draft for factual accuracy check only (not tone, not rewriting)</li>
              <li>Factual check turnaround: 24h max; if missed, KOL proceeds</li>
            </ul>

            <h4 className="mt-4 font-semibold">Tier 3: Partner Approval (Managed Externally)</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>Allow 5–7 business days minimum — partners have their own approval chains</li>
              <li>Send copy in a single clean document, not a Telegram message thread</li>
              <li>Identify one named contact on the partner side who has sign-off authority</li>
              <li>Agree on an embargo date for the announcement before drafting begins</li>
            </ul>

            <h4 className="mt-4 font-semibold">Parallel vs Sequential</h4>
            <p>Run client approval and partner drafting in parallel where possible. Never let one block the other from starting — only from publishing.</p>
          </div>
        </div>

        <div id="performance-measurement" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Performance Measurement</h3>
          <div className="mt-4 space-y-3">
            <p>Define campaign KPIs in the brief before the campaign starts. Measure at end of Week 4 and again at 30 days post-campaign to capture lagging SEO and on-chain effects.</p>

            <table className="my-4 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-2 text-left font-medium">KPI</th>
                  <th className="py-2 text-left font-medium">Measurement method</th>
                  <th className="py-2 text-left font-medium">Owner</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Wallet connects</td>
                  <td className="py-2">UTM-tracked CTAs in GA4</td>
                  <td className="py-2">Strategist</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Discord/Telegram growth</td>
                  <td className="py-2">Community dashboard</td>
                  <td className="py-2">Community Manager</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">TVL change</td>
                  <td className="py-2">DeFiLlama before/after snapshot</td>
                  <td className="py-2">Client / Analyst</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">DAU change</td>
                  <td className="py-2">Dune Analytics before/after</td>
                  <td className="py-2">Client / Analyst</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">KOL reach and engagement</td>
                  <td className="py-2">Per-KOL post analytics</td>
                  <td className="py-2">KOL Manager</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Organic traffic to anchor</td>
                  <td className="py-2">Google Search Console</td>
                  <td className="py-2">Strategist</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Partner referral traffic</td>
                  <td className="py-2">UTM-tracked partner links</td>
                  <td className="py-2">Strategist</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Inbound BD inquiries</td>
                  <td className="py-2">CRM / Telegram DM log</td>
                  <td className="py-2">Account Lead</td>
                </tr>
              </tbody>
            </table>

            <h4 className="mt-4 font-semibold">Cross-Channel Attribution</h4>
            <p>In a coordinated campaign, the same user might touch the brand CT thread, a KOL post, and the anchor blog before converting. Attribution is necessarily imperfect — be honest with clients about this.</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>UTM every link across every channel from day one: <code className="font-mono text-sm">?utm_source=kol&amp;utm_medium=twitter&amp;utm_campaign=[name]</code></li>
              <li>Track last-touch conversions in GA4 for operational decisions</li>
              <li>Report total campaign conversions alongside channel breakdown — don't pretend one channel did it alone</li>
              <li>Cross-reference with on-chain data: if TVL spiked during Week 2 KOL wave, note the correlation even if you can't prove causation</li>
            </ul>

            <h4 className="mt-4 font-semibold">ROI Calculation</h4>
            <CodeBlock title="Campaign ROI formula">{`Campaign ROI = (Total conversions × estimated value per conversion) ÷ Total campaign cost

Total campaign cost = Content production + KOL fees + partner costs + team time

Estimated value per conversion (agree with client at brief stage):
  DEX protocol → average 30-day transaction volume per new wallet
  Lending protocol → average TVL per new depositor
  Community campaign → agreed value per Discord member

Report at two timepoints:
  1. End of campaign (30 days)
  2. 90 days post-campaign (captures compounding SEO + retention effects)`}</CodeBlock>

            <h4 className="mt-4 font-semibold">Post-Campaign Review</h4>
            <p>Run within 1 week of campaign end. Covers:</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>KPIs hit vs target — honest assessment</li>
              <li>Which channel drove the most conversions (per UTM data)</li>
              <li>Which messaging angle got the most engagement across CT, KOL, and community</li>
              <li>What broke or was delayed, and why</li>
              <li>What to do differently next campaign</li>
              <li>Update the messaging matrix based on what resonated</li>
            </ul>
            <p className="mt-2 text-sm text-ink-muted">Feed post-campaign findings back into the Content × KOL Integration Flywheel for the next steady-state cycle.</p>
          </div>
        </div>

      </div>
    </>
  );
}
