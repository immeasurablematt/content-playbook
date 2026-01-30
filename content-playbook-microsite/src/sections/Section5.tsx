import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Section5Content() {
  return (
    <>
      <p className="lead text-lg text-ink-muted">
        Social content guidance and repurposing from the playbook.
      </p>

      <Accordion type="single" collapsible className="mt-8 w-full">
        <AccordionItem value="overview">
          <AccordionTrigger>Social Media Playbook (Overview)</AccordionTrigger>
          <AccordionContent>
            <p>Platform-specific strategies (LinkedIn, Twitter/X, etc.), content repurposing from blog to social, engagement tactics, and metrics. Map social threads to your messaging matrix: Post 1 = pain point (hook); Posts 2–3 = capability and feature function (education); Post 4 = vision of use (emotional close). Track which pain points drive the most engagement and double down.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="content-mix">
          <AccordionTrigger>Content Mix %</AccordionTrigger>
          <AccordionContent>
            <p><strong>Purpose</strong> — Allocate share of voice across content types so the feed isn't all promo or all fluff. Adjust by platform and goal; revisit quarterly.</p>
            <p className="mt-3 font-medium">Example mix (starting point):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Educational / value (40–50%)</strong> — How-tos, tips, explainers, thought leadership. Builds trust and reach.</li>
              <li><strong>Engagement / community (25–35%)</strong> — Questions, polls, replies, UGC, conversation starters. Builds relationship and algorithm.</li>
              <li><strong>Promotional / conversion (15–25%)</strong> — Product, offers, CTAs, demos. Drives sign-ups and revenue.</li>
              <li><strong>Brand / personality (10–15%)</strong> — Behind-the-scenes, culture, tone. Differentiates and humanizes.</li>
            </ul>
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
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="engagement">
          <AccordionTrigger>Reply Guy / Engagement Playbook</AccordionTrigger>
          <AccordionContent>
            <p><strong>Purpose</strong> — Turn replies and mentions into a repeatable process: who responds, when, how, and when to escalate. "Reply guy" = the voice that shows up in comments and DMs in brand voice.</p>
            <p className="mt-3 font-medium">Core rules:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Who responds</strong> — Designate 1–2 people (or rotate) who own replies; they must know brand voice and escalation paths.</li>
              <li><strong>When to respond</strong> — Aim for same-day on questions and mentions; within 2–4 hours during campaigns. Set SLA (e.g. "reply within 12 hours").</li>
              <li><strong>How (tone)</strong> — Use Brand Voice & Tone from Section 1: helpful, on-brand, concise. No corporate jargon; no arguing. If negative, acknowledge and move to DM or support.</li>
              <li><strong>Escalation</strong> — Complaints, legal, PR risk, or highly technical → hand off to right team. Document what gets escalated and to whom.</li>
              <li><strong>Proactive engagement</strong> — Comment on others' posts in your category (thought leaders, partners, happy users). Add value; don't pitch. Builds presence and reciprocity.</li>
            </ul>
            <p className="mt-3">Template: "Reply SLA: [X] hours. Owner: [name]. Escalate: [list] → [owner]. Proactive: [X] comments per week in [channels/accounts]."</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="per-stage">
          <AccordionTrigger>Per-Stage Content Plan</AccordionTrigger>
          <AccordionContent>
            <p><strong>Purpose</strong> — Align social content with the funnel (see Content Funnel Map in Section 1). Each stage has different formats and CTAs.</p>
            <p className="mt-3 font-medium">By stage:</p>
            <table className="my-3 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="w-28 py-2 text-left font-medium">Stage</th>
                  <th className="py-2 text-left font-medium">Social content focus</th>
                  <th className="py-2 text-left font-medium">Example formats / CTAs</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100"><td className="py-2 font-medium">Awareness</td><td className="py-2">Reach, education, brand recall</td><td className="py-2">Short explainers, "what is X", trends, thought leadership quotes; CTA: follow, share</td></tr>
                <tr className="border-b border-stone-100"><td className="py-2 font-medium">Consideration</td><td className="py-2">Trust, comparison, use cases</td><td className="py-2">How-to tips, comparison teases, case study snippets, threads from pain → solution; CTA: read blog, join webinar</td></tr>
                <tr className="border-b border-stone-100"><td className="py-2 font-medium">Decision</td><td className="py-2">Conversion, sign-up, demo</td><td className="py-2">Product highlights, social proof, limited offers, "try now" posts; CTA: sign up, book demo, start trial</td></tr>
                <tr className="border-b border-stone-100"><td className="py-2 font-medium">Retention & Advocacy</td><td className="py-2">Loyalty, UGC, referrals</td><td className="py-2">Customer wins, testimonials, tips for power users, referral prompts; CTA: share your story, refer a friend</td></tr>
              </tbody>
            </table>
            <p className="mt-3">Map your content mix % to these stages (e.g. most educational = awareness/consideration; most promo = decision). Per-stage plan should match the Full-Funnel Content Map in Section 1.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
