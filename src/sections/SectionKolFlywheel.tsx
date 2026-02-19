import { Blockquote } from "@/components/Blockquote";
import { Web3Content } from "@/components/Web3Content";

export function SectionKolFlywheelContent() {
  return (
    <Web3Content>
      <p className="lead text-lg text-ink-muted">
        The Content × KOL Integration Flywheel describes how owned content and KOL distribution reinforce each other in a closed loop — so each channel makes the other more effective. When running in steady state, this system compounds: content becomes better-sourced, KOL content becomes more credible, and audiences experience a coherent narrative across every touchpoint.
      </p>

      <div className="mt-8 space-y-12">

        <div id="content-to-kol" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Content → KOL Pipeline</h3>
          <div className="mt-4 space-y-3">
            <p>Owned content created through the production system becomes fuel for KOL campaigns. This means KOL posts are better-sourced, more credible, and easier to brief.</p>

            <h4 className="mt-4 font-semibold">How Owned Content Feeds KOL Campaigns</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Long-form articles</strong> become source material for KOL briefs — KOLs can reference, summarize, or react to blog content in their own voice</li>
              <li><strong>Case studies</strong> provide proof points KOLs can cite — a quantified result from a published case study is more credible than a KOL making a claim from a brand brief</li>
              <li><strong>Social threads</strong> can be co-created with KOLs for amplified reach — the team creates the thread framework, KOL publishes in their own voice</li>
              <li><strong>Data and benchmarks</strong> from content research become exclusive talking points for KOLs — on-chain data surfaced by the writing team becomes signal for KOL posts</li>
            </ul>

            <h4 className="mt-4 font-semibold">Content → KOL Workflow</h4>
            <ol className="list-decimal pl-6 space-y-1">
              <li>New article published → flag for KOL adaptation</li>
              <li>Create KOL-specific brief from article's key pain point, proof point, and vision of use</li>
              <li>KOL creates native content referencing or building on the article</li>
              <li>Article gets backlink and traffic from KOL audience; KOL gets credible source material and doesn't have to do research</li>
            </ol>
          </div>
        </div>

        <div id="kol-to-content" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">KOL → Content Pipeline</h3>
          <div className="mt-4 space-y-3">
            <p>KOL campaign data feeds back into the content strategy, closing the loop. This is the direction most teams miss — treating KOL as a one-way distribution channel rather than a research and feedback source.</p>

            <h4 className="mt-4 font-semibold">How KOL Data Improves Content</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Engagement data</strong> shows which pain points resonate most with real audiences → informs keyword strategy and messaging matrix updates</li>
              <li><strong>Audience reactions</strong> to KOL content reveal language, objections, and interests the team might miss in research → feeds customer interview insights</li>
              <li><strong>High-performing KOL content</strong> can be repurposed into owned blog content (with permission) → "As [KOL] noted in their thread about [topic]..."</li>
              <li><strong>KOL questions and DMs</strong> surface real user concerns that didn't come up in interviews → become FAQ content and objection-handling in briefs</li>
            </ul>

            <h4 className="mt-4 font-semibold">KOL → Content Workflow</h4>
            <ol className="list-decimal pl-6 space-y-1">
              <li>KOL campaign completes → review performance data</li>
              <li>Extract: which pain points got most engagement? Which angles fell flat?</li>
              <li>Update messaging matrix and keyword priorities based on findings</li>
              <li>Feed insights into next content briefs</li>
            </ol>
          </div>
        </div>

        <div id="kol-briefing" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">KOL Briefing Principles</h3>
          <div className="mt-4 space-y-3">
            <Blockquote>
              KOLs perform best with authentic voice. Provide the pain point, capability, and vision of use from the Messaging Matrix — and let KOLs translate to their own style. Never give them a script.
            </Blockquote>

            <h4 className="mt-4 font-semibold">What to Provide in a KOL Brief</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Key messages from the Messaging Matrix: pain point, capability framing, vision of use</li>
              <li>Tone guidelines from Brand Voice doc — as guardrails, not scripts</li>
              <li>Platform-native format guidance (CT thread vs YouTube vs newsletter)</li>
              <li>Approved numbers: every specific metric that can be cited, verified against Dune/DeFiLlama</li>
              <li>Anchor content URL (the article or case study the KOL can reference)</li>
              <li>Phrases to avoid: anything unverified, competitor attacks, regulatory-risk language, financial advice framing</li>
            </ul>

            <h4 className="mt-4 font-semibold">KOL Approval: Light Touch Only</h4>
            <p>KOLs do not get approval rights over their content — they write in their own voice. The review is factual accuracy only:</p>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>KOL sends draft for factual accuracy check (not tone, not rewriting)</li>
              <li>Factual check turnaround: 24h max; if missed, KOL proceeds</li>
              <li>Only flag errors in approved numbers, protocol descriptions, or regulatory-risk language</li>
            </ul>
          </div>
        </div>

        <div id="kol-tiers" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">KOL Tiers & Collaboration Approaches</h3>
          <div className="mt-4 space-y-3">
            <table className="my-4 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-2 text-left font-medium">Tier</th>
                  <th className="py-2 text-left font-medium">Audience size</th>
                  <th className="py-2 text-left font-medium">Best use</th>
                  <th className="py-2 text-left font-medium">ROI profile</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Tier 1 (Mega KOLs)</td>
                  <td className="py-2">100K+ followers</td>
                  <td className="py-2">Major launches, broad awareness campaigns</td>
                  <td className="py-2">High reach, lower trust/conversion. Use sparingly.</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Tier 2 (Niche KOLs)</td>
                  <td className="py-2">10K–100K followers</td>
                  <td className="py-2">Specific niches (DeFi, L2s, NFTs). Higher trust.</td>
                  <td className="py-2">Higher trust, better conversion. Core of most campaigns.</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Tier 3 (Micro KOLs)</td>
                  <td className="py-2">1K–10K followers</td>
                  <td className="py-2">Tight community. Strong audience overlap.</td>
                  <td className="py-2">Best ROI for ongoing partnerships. High authenticity.</td>
                </tr>
              </tbody>
            </table>

            <h4 className="mt-4 font-semibold">Collaboration Approaches</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li><strong>Organic alpha sharing:</strong> KOL genuinely uses and talks about the protocol — highest authenticity</li>
              <li><strong>Paid threads/reviews:</strong> Sponsored content with disclosure — works when content is genuinely useful to KOL's audience</li>
              <li><strong>Airdrops/token allocations:</strong> Align KOL incentives with protocol success</li>
              <li><strong>Advisory/ambassador roles:</strong> Long-term relationship for consistent, authentic promotion</li>
            </ul>

            <h4 className="mt-4 font-semibold">Red Flags to Screen Against</h4>
            <ul className="list-disc pl-6 space-y-0.5">
              <li>KOLs who shill everything — signal of low audience trust</li>
              <li>Fake engagement (check engagement rate vs follower count ratio)</li>
              <li>No audience overlap with the client's target segment</li>
              <li>History of promoting exit scams or low-quality projects</li>
            </ul>
          </div>
        </div>

        <div id="integrated-campaign-model" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Integrated Campaign Model</h3>
          <div className="mt-4 space-y-3">
            <p>For major launches or narrative campaigns, content and KOL should be orchestrated together — each channel reinforcing the others rather than operating in silos.</p>

            <table className="my-4 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="py-2 text-left font-medium">Week</th>
                  <th className="py-2 text-left font-medium">Channel</th>
                  <th className="py-2 text-left font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Week 1</td>
                  <td className="py-2">Owned content</td>
                  <td className="py-2">Blog post, landing page, social thread from brand account — gives KOLs something to point to</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Week 2</td>
                  <td className="py-2">KOL amplification</td>
                  <td className="py-2">KOLs reference, react to, or build on the owned content in their own voice</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Week 3</td>
                  <td className="py-2">Community engagement</td>
                  <td className="py-2">Spaces/AMAs, community posts, reply engagement on both brand and KOL threads</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-2 font-medium">Week 4</td>
                  <td className="py-2">Case study / proof follow-up</td>
                  <td className="py-2">Publish supporting evidence, customer stories, data roundups to close warm audience</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-2 text-sm text-ink-muted">Gate on Week 1: nothing moves to KOL wave until owned content is live and UTM tracking is confirmed active.</p>
          </div>
        </div>

      </div>
    </Web3Content>
  );
}
