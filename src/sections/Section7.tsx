import { Accordion } from "@/components/Accordion";
import { CodeBlock } from "@/components/CodeBlock";
import { Web2Callout } from "@/components/Web2Callout";
import { Web3Content } from "@/components/Web3Content";

export function Section7Content() {
  return (
    <>
      <p className="lead text-lg text-ink-muted">
        Reddit is the dark horse of organic reach. While everyone fights over Twitter/X algorithm changes and LinkedIn's professional echo chamber, Reddit users actively seek solutions to specific problems. Unlike other platforms, Reddit rewards genuine value over follower count or engagement baiting.
      </p>

      <div className="mt-8 space-y-12">
        <div id="web3-vs-web2-reddit" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Web3 vs Web2 Reddit Strategy</h3>
          <div className="mt-6 grid lg:grid-cols-2 gap-8">
            <Web3Content title="Web3 Reddit Approach">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-ink">Top Subreddits:</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li><strong>r/CryptoCurrency (2.7M):</strong> Mainstream crypto discussions, market sentiment</li>
                    <li><strong>r/ethereum (1.8M):</strong> Technical discussions, protocol updates, developer community</li>
                    <li><strong>r/DeFi (800K):</strong> Yield strategies, protocol reviews, alpha sharing</li>
                    <li><strong>r/solana (400K):</strong> Solana ecosystem, NFTs, gaming</li>
                    <li><strong>Protocol-specific subs:</strong> r/Uniswap, r/AAVE, r/Chainlink</li>
                  </ul>
                </div>
              </div>
            </Web3Content>

            <Web2Callout title="Web2 Reddit Approach">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-ink">Top Subreddits:</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li><strong>r/entrepreneur (1M):</strong> Startup stories, business advice, tool recommendations</li>
                    <li><strong>r/marketing (700K):</strong> Campaign breakdowns, strategy discussions, tool reviews</li>
                    <li><strong>r/startups (800K):</strong> Growth tactics, fundraising, product launches</li>
                    <li><strong>r/SaaS (200K):</strong> B2B software, pricing strategies, user acquisition</li>
                    <li><strong>Industry-specific:</strong> r/webdev, r/digitalmarketing, r/sales</li>
                  </ul>
                </div>
              </div>
            </Web2Callout>
          </div>
        </div>

        <div id="content-frameworks" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Content Frameworks That Work</h3>
          
          <Accordion
            items={[
              {
                title: "1. The 'Case Study + Lesson' Post (Best ROI)",
                content: (
                  <div className="space-y-4">
                    <p><strong>Why it works:</strong> Provides genuine value, shows actual data, invites discussion. Reddit users can smell marketing from miles away—this feels like community contribution.</p>
                    
                    <div className="bg-stone-50 p-4 rounded-lg">
                      <p className="font-semibold mb-2">Structure:</p>
                      <CodeBlock 
                        code={`Title: "I spent $10K testing [strategy] across 5 Web3 protocols. Here's what actually worked:"

Post:
- Context: Why I ran this test  
- Method: Exactly what I did (screenshots/data)
- Results: Numbers (engagement, conversions, costs)
- Insights: 3-5 specific takeaways
- Tools: What I used (with honest pros/cons)
- Questions: What should I test next?`}
                        language="text" 
                      />
                    </div>
                  </div>
                )
              },
              {
                title: "2. The 'Tool/Method Breakdown' (Authority Building)",
                content: (
                  <div className="space-y-4">
                    <CodeBlock 
                      code={`Title: "I've used [tool/strategy] for 18 months across Web3 marketing. Here's an honest breakdown:"

Post:
- Background: My experience level/context
- What it does well: Specific use cases with examples
- Where it falls short: Honest limitations/frustrations  
- Comparison: vs alternatives (brief)
- Best for: Ideal user profile
- Pricing reality: Hidden costs, value assessment`}
                      language="text" 
                    />
                  </div>
                )
              },
              {
                title: "3. The 'Ask Reddit' (Community Intelligence)",
                content: (
                  <div className="space-y-4">
                    <CodeBlock 
                      code={`Title: "What's your biggest frustration with [category] right now?"

Post:
- Your experience: Brief background
- The pattern you're seeing: Specific problem
- Your hypothesis: What you think is happening
- The ask: Their perspective/experience
- Value back: Promise to share aggregated insights`}
                      language="text" 
                    />
                  </div>
                )
              }
            ]}
          />
        </div>

        <div id="subreddit-selection" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Strategic Subreddit Selection</h3>
          
          <div className="mt-6 space-y-6">
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-emerald-900 mb-3">Sweet Spot Formula</h4>
              <ul className="space-y-2 text-emerald-800">
                <li>• <strong>10K-500K members</strong> (sweet spot for engagement)</li>
                <li>• <strong>Active daily discussions</strong> (check post frequency)</li>
                <li>• <strong>Founders/builders as members</strong> (your target audience)</li>
                <li>• <strong>Mod rules allow self-promotion</strong> (with value)</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-900 mb-3">Subreddits to Avoid</h4>
              <ul className="space-y-2 text-red-800">
                <li>• <strong>r/entrepreneur</strong> (too broad, low quality)</li>
                <li>• <strong>r/marketing</strong> (everyone's selling)</li>
                <li>• Any subreddit where mods instantly remove promo</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="execution-framework" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Weekly Execution Framework</h3>
          
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Monday: Research</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Scroll top 5 target subreddits</li>
                <li>• Save 10-15 high-value posts</li>
                <li>• Note pain points mentioned</li>
                <li>• Identify trending topics</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Tue-Thu: Engage</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Comment on 5-10 posts daily</li>
                <li>• Give detailed, helpful responses</li>
                <li>• No links, no pitching, pure value</li>
                <li>• Build karma and visibility</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-900 mb-2">Friday: Create</h4>
              <ul className="text-sm text-amber-800 space-y-1">
                <li>• Write 1 detailed post</li>
                <li>• Use proven formats</li>
                <li>• Include real examples</li>
                <li>• Post at 9-11 AM EST</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Weekend: Convert</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Respond to all comments</li>
                <li>• DM interested users</li>
                <li>• Repurpose to Twitter</li>
                <li>• Track profile visits</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="results-metrics" className="scroll-mt-header pb-10 border-b border-stone-200">
          <h3 className="font-serif text-2xl font-semibold text-ink">Real Results & Success Metrics</h3>
          
          <div className="mt-6 grid lg:grid-cols-2 gap-8">
            <div className="bg-stone-50 p-6 rounded-lg">
              <h4 className="font-semibold text-ink mb-4">6-Month Results</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Detailed comments posted:</span>
                  <span className="font-semibold">47</span>
                </div>
                <div className="flex justify-between">
                  <span>Long-form posts created:</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between">
                  <span>Karma earned:</span>
                  <span className="font-semibold">1,200+</span>
                </div>
                <div className="flex justify-between">
                  <span>Profile visits per week:</span>
                  <span className="font-semibold">40+</span>
                </div>
                <div className="flex justify-between">
                  <span>DMs from potential clients:</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span>Projects signed:</span>
                  <span className="font-semibold text-green-600">3 ($18,000)</span>
                </div>
                <div className="flex justify-between">
                  <span>Time invested:</span>
                  <span className="font-semibold">3-4 hours/week</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-ink mb-3">Success Metrics to Track</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Comment-to-upvote ratio</strong> (higher = better engagement)</li>
                  <li>• <strong>Quality of comments</strong> (questions, follow-ups, shared experiences)</li>
                  <li>• <strong>Profile visits</strong> after posting</li>
                  <li>• <strong>DM inquiries</strong> about working together</li>
                  <li>• <strong>Cross-posts</strong> to other relevant subreddits</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="text-sm text-amber-800"><strong>The Conversion Path:</strong> Helpful Reddit comment → User checks profile → Sees bio/links → Clicks Twitter/website → Follows → Sees work over time → Eventually DMs or books call</p>
                <p className="text-sm text-amber-800 mt-2"><strong>Timeline:</strong> 2-8 weeks from first interaction to conversion.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="content-repurposing" className="scroll-mt-header">
          <h3 className="font-serif text-2xl font-semibold text-ink">Content Repurposing System</h3>
          
          <div className="mt-6 space-y-6">
            <p>This is where Reddit becomes 10x more valuable. Every Reddit post you find becomes Twitter content, LinkedIn articles, and newsletter segments.</p>
            
            <div className="bg-stone-50 p-6 rounded-lg">
              <h4 className="font-semibold text-ink mb-3">The Multiplier Process</h4>
              <ol className="list-decimal pl-6 space-y-2 text-sm">
                <li>Find high-value Reddit posts (insights, pain points, success stories)</li>
                <li>Repackage as Twitter thread with your commentary</li>
                <li>Credit the Reddit user (builds goodwill)</li>
                <li>Drive engagement on Twitter</li>
                <li>Expand into LinkedIn article with deeper analysis</li>
                <li>Use insights for newsletter segments</li>
              </ol>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-3">Twitter Thread Template</h4>
              <CodeBlock 
                code={`"This Reddit user made $100K in <12 months.

Here's the entire playbook:

🧵 1/8

Most SaaS founders fail because they build for themselves, not customers.

This founder did the opposite:

2/8 What Actually Worked:
• Customer interviews before coding
• MVP in 2 weeks, not 2 months  
• Pricing experiments from day 1
• Email list pre-launch

3/8 What Didn't Work:
• Complex features early
• Waiting for 'perfect' product
• Underpricing initially
• Ignoring churn signals

[Continue with specific details]

8/8 12 months of lessons compressed into 3 minutes.

Credit: u/founder_name on Reddit

What's the best SaaS advice you've received?"`}
                language="text" 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}