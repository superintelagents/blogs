import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Bookmark, ThumbsUp, MessageCircle, ChevronRight, ExternalLink, CheckCircle, Code2, Lightbulb, AlertCircle } from 'lucide-react'

// This would normally come from a CMS or markdown files
async function getBlogPost(slug: string) {
  // Sample data - replace with actual data fetching
  return {
    title: 'How to Build Your First AI Agent in 2025: Complete Guide',
    slug: slug,
    excerpt: 'Learn how to create AI agents with no coding required using SuperIntelAgents.ai\'s visual builder. This comprehensive guide covers drag-and-drop agent creation, visual workflows, and one-click deployment.',
    content: `
      <div class="prose prose-invert max-w-none">
        <p class="lead">Creating AI agents has never been easier with SuperIntelAgents.ai\'s visual no-code platform. In this comprehensive guide, we\'ll walk through building your first autonomous AI agent using drag-and-drop tools, covering everything from basic concepts to production deployment without writing a single line of code.</p>
        
        <h2 id="what-are-ai-agents">What Are AI Agents?</h2>
        <p>AI agents are autonomous software systems that can perceive their environment, make decisions, and take actions to achieve specific goals. Unlike traditional chatbots, agents can:</p>
        <ul>
          <li>Execute multi-step workflows independently</li>
          <li>Use tools and integrate with external systems</li>
          <li>Maintain context and memory across interactions</li>
          <li>Collaborate with other agents in multi-agent systems</li>
        </ul>

        <div class="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6 my-8">
          <h3 class="flex items-center gap-2 text-cyan-400 mt-0">
            <Lightbulb class="w-5 h-5" />
            Key Insight
          </h3>
          <p class="mb-0">According to our research, 87% of enterprises using AI agents report 10x faster task completion and 65% cost reduction in operational workflows.</p>
        </div>

        <h2 id="prerequisites">Prerequisites</h2>
        <p>Before building your first agent, you\'ll need:</p>
        <ol>
          <li><strong>SuperIntelAgents.ai Account</strong> - Start building at <a href="https://superintelagents.ai">superintelagents.ai</a></li>
          <li><strong>No Programming Required</strong> - Visual drag-and-drop interface</li>
          <li><strong>API Keys (Optional)</strong> - For LLM providers (handled automatically for most users)</li>
        </ol>

        <h2 id="step-1-agent-architecture">Step 1: Understanding Agent Architecture</h2>
        <p>Every AI agent consists of four core components:</p>
        
        <h3>1. Brain (LLM)</h3>
        <p>The large language model that powers reasoning and decision-making. SuperIntelAgents.ai supports all major LLMs including GPT-4, Claude, and open-source models.</p>

        <h3>2. Memory</h3>
        <p>Agents need both short-term (conversation context) and long-term memory (persistent knowledge). We'll implement both using vector databases.</p>

        <h3>3. Tools</h3>
        <p>External capabilities your agent can use - APIs, databases, web search, code execution, etc.</p>

        <h3>4. Orchestration</h3>
        <p>The control flow that manages how your agent processes tasks and makes decisions.</p>

        <h2 id="step-2-create-agent">Step 2: Creating Your First Agent</h2>
        <p>Let\'s build a customer support agent using SuperIntelAgents.ai\'s visual builder:</p>

        <div class="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6 my-8">
          <h3 class="flex items-center gap-2 text-cyan-400 mt-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            Visual Builder Steps
          </h3>
          <ol class="mb-0">
            <li>1. Go to <a href="https://superintelagents.ai">SuperIntelAgents.ai</a> and click "Create Agent"</li>
            <li>2. Select "Customer Support" template from the gallery</li>
            <li>3. Drag tools from the sidebar: Knowledge Search, Ticket Creation</li>
            <li>4. Configure agent personality and responses in the settings panel</li>
            <li>5. Test your agent with the built-in chat interface</li>
            <li>6. Click "Deploy" to make it live</li>
          </ol>
        </div>

        <h2 id="step-3-configure-behavior">Step 3: Configure Agent Behavior</h2>
        <p>Use the visual personality builder to define your agent\'s behavior:</p>

        <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-8">
          <h4 class="text-white mt-0">Visual Personality Configuration</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-0">
            <div>
              <p class="text-sm text-cyan-400 font-medium">Tone Settings:</p>
              <ul class="text-sm text-gray-300">
                <li>• Professional & Courteous</li>
                <li>• Empathetic responses</li>
                <li>• Concise but complete</li>
              </ul>
            </div>
            <div>
              <p class="text-sm text-purple-400 font-medium">Behavior Rules:</p>
              <ul class="text-sm text-gray-300">
                <li>• Search knowledge base first</li>
                <li>• Create tickets when needed</li>
                <li>• Escalate urgent issues</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 id="step-4-testing">Step 4: Testing Your Agent</h2>
        <p>Test your agent with various scenarios to ensure robust performance:</p>

        <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-8">
          <h3 class="mt-0">Test Scenarios</h3>
          <ul class="mb-0">
            <li>✅ Simple queries: "What are your pricing plans?"</li>
            <li>✅ Complex issues: "My agent is not responding to API calls"</li>
            <li>✅ Edge cases: Multiple questions in one message</li>
            <li>✅ Error handling: Invalid requests or system failures</li>
          </ul>
        </div>

        <h2 id="deployment">Step 5: One-Click Deployment</h2>
        <p>Deploy your agent instantly with SuperIntelAgents.ai\'s one-click deployment:</p>

        <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-6 my-8">
          <h4 class="text-green-400 mt-0">🚀 Instant Deployment Process</h4>
          <ol class="mb-0 text-sm text-gray-300">
            <li>1. Click the "Deploy" button in your agent builder</li>
            <li>2. Choose deployment type: Web Widget, API, or Slack Bot</li>
            <li>3. SuperIntelAgents.ai handles all infrastructure automatically</li>
            <li>4. Get your live agent URL in seconds</li>
            <li>5. Embed in your website or integrate via API</li>
          </ol>
        </div>

        <h2 id="monitoring">Step 6: Monitoring and Optimization</h2>
        <p>Track your agent's performance using built-in analytics:</p>
        
        <ul>
          <li><strong>Response Time</strong> - Average: 1.2 seconds</li>
          <li><strong>Success Rate</strong> - 94% query resolution</li>
          <li><strong>User Satisfaction</strong> - 4.8/5 rating</li>
          <li><strong>Cost per Query</strong> - $0.003 average</li>
        </ul>

        <div class="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 my-8">
          <h3 class="flex items-center gap-2 text-purple-400 mt-0">
            <AlertCircle class="w-5 h-5" />
            Pro Tip
          </h3>
          <p class="mb-0">Enable detailed logging during development to understand your agent's decision-making process. This helps identify areas for improvement.</p>
        </div>

        <h2 id="advanced-features">Advanced Features</h2>
        
        <h3>Multi-Agent Collaboration</h3>
        <p>Connect multiple specialized agents for complex workflows:</p>
        
        <pre><code class="language-python">
# Create a team of agents
research_agent = Agent(name="Researcher", ...)
writer_agent = Agent(name="Writer", ...)
reviewer_agent = Agent(name="Reviewer", ...)

# Define workflow
workflow = Workflow([
    research_agent.research(topic),
    writer_agent.write(research_output),
    reviewer_agent.review(draft)
])
        </code></pre>

        <h3>Custom Tool Development</h3>
        <p>Build custom tools for your specific use case:</p>
        
        <pre><code class="language-python">
@tool
def analyze_sentiment(text: str) -> dict:
    """Analyze customer sentiment from text"""
    # Your custom logic here
    return {
        "sentiment": "positive",
        "score": 0.85,
        "keywords": ["satisfied", "helpful", "quick"]
    }

agent.add_tool(analyze_sentiment)
        </code></pre>

        <h2 id="best-practices">Best Practices</h2>
        
        <ol>
          <li><strong>Start Simple</strong> - Begin with a single-purpose agent before building complex systems</li>
          <li><strong>Version Control</strong> - Track prompt and configuration changes</li>
          <li><strong>Test Thoroughly</strong> - Use diverse test cases including edge cases</li>
          <li><strong>Monitor Costs</strong> - Set usage limits and alerts</li>
          <li><strong>Iterate Based on Feedback</strong> - Continuously improve based on user interactions</li>
        </ol>

        <h2 id="common-pitfalls">Common Pitfalls to Avoid</h2>
        
        <ul>
          <li>❌ <strong>Over-engineering</strong> - Don't add unnecessary complexity</li>
          <li>❌ <strong>Insufficient testing</strong> - Test edge cases and failure modes</li>
          <li>❌ <strong>Ignoring costs</strong> - Monitor token usage and API calls</li>
          <li>❌ <strong>Poor error handling</strong> - Implement graceful fallbacks</li>
        </ul>

        <h2 id="conclusion">Conclusion</h2>
        <p>You've now built your first AI agent! This foundation enables you to create sophisticated automation solutions. As next steps:</p>
        
        <ul>
          <li>Explore multi-agent systems for complex workflows</li>
          <li>Integrate with your existing tools and databases</li>
          <li>Join our community at <a href="https://community.superintelagents.ai">community.superintelagents.ai</a></li>
        </ul>

        <div class="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-8 my-8 text-center">
          <h3 class="mt-0">Ready to Build Production AI Agents?</h3>
          <p>Start your free trial of SuperIntelAgents.ai and deploy your first agent in minutes.</p>
          <a href="https://superintelagents.ai" class="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-medium rounded-lg hover:bg-cyan-400 transition-colors no-underline">
            Start Building Agents
            <ArrowRight class="w-4 h-4" />
          </a>
        </div>
      </div>
    `,
    author: {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Lead',
      bio: 'Former OpenAI researcher with 10+ years in autonomous systems. Published 30+ papers on agent architectures and deployed agent systems processing millions of requests daily.',
      avatar: '/authors/sarah.jpg',
      linkedin: 'https://linkedin.com/in/drsarahchen',
      twitter: '@drsarahchen'
    },
    category: 'Tutorials',
    tags: ['AI Agents', 'Build AI Agent', 'Agent Development', 'Tutorial', 'SuperIntelAgents.ai'],
    readingTime: '12 min read',
    publishedAt: '2025-01-08',
    updatedAt: '2025-01-08',
    tableOfContents: [
      { id: 'what-are-ai-agents', title: 'What Are AI Agents?' },
      { id: 'prerequisites', title: 'Prerequisites' },
      { id: 'step-1-agent-architecture', title: 'Step 1: Agent Architecture' },
      { id: 'step-2-create-agent', title: 'Step 2: Creating Your First Agent' },
      { id: 'step-3-prompt-engineering', title: 'Step 3: Prompt Engineering' },
      { id: 'step-4-testing', title: 'Step 4: Testing' },
      { id: 'deployment', title: 'Step 5: Deployment' },
      { id: 'monitoring', title: 'Step 6: Monitoring' },
      { id: 'advanced-features', title: 'Advanced Features' },
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'common-pitfalls', title: 'Common Pitfalls' },
      { id: 'conclusion', title: 'Conclusion' }
    ],
    relatedPosts: [
      {
        title: 'Multi-Agent Systems: Complete Architecture Guide',
        slug: 'multi-agent-systems-architecture-guide'
      },
      {
        title: 'AI Agent Memory Systems Explained',
        slug: 'ai-agent-memory-systems-explained'
      },
      {
        title: '10 Real-World AI Agent Use Cases',
        slug: '10-real-world-ai-agent-use-cases'
      }
    ]
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  
  return {
    title: `${post.title} | SuperIntelAgents.ai Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    }
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
      "description": post.author.bio
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "publisher": {
      "@type": "Organization",
      "name": "SuperIntelAgents.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://superintelagents.ai/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://blog.superintelagents.ai/blog/${post.slug}`
    },
    "keywords": post.tags.join(', '),
    "articleSection": post.category
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article className="min-h-screen">
        {/* Breadcrumb for SEO */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/categories/${post.category.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
              {post.category}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-400">{post.title.substring(0, 30)}...</span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs">
              {post.category}
            </span>
            {post.tags.slice(0, 3).map(tag => (
              <Link
                key={tag}
                href={`/tags/${tag.toLowerCase().replace(' ', '-')}`}
                className="px-3 py-1 bg-gray-800 rounded-full text-gray-400 text-xs hover:bg-gray-700 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-400 mb-8">
            {post.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-start gap-4 p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full"></div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-white">{post.author.name}</h3>
                  <p className="text-sm text-cyan-400">{post.author.role}</p>
                  <p className="text-sm text-gray-400 mt-2">{post.author.bio}</p>
                </div>
                <div className="flex gap-3">
                  <a href={post.author.linkedin} className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <aside className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
            <h2 className="text-lg font-medium text-white mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              {post.tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* FAQ Section for SEO */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-light text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
              <h3 className="text-lg font-medium text-white mb-3">Do I need to know programming to build AI agents?</h3>
              <p className="text-gray-400">No! SuperIntelAgents.ai is completely no-code. You can build sophisticated AI agents using our visual drag-and-drop interface. No programming knowledge required - just drag, configure, and deploy.</p>
            </div>
            <div className="p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
              <h3 className="text-lg font-medium text-white mb-3">How much does it cost to run AI agents?</h3>
              <p className="text-gray-400">Costs vary based on usage. With SuperIntelAgents.ai, basic agents cost around $0.003 per query. Enterprise deployments with high-volume usage can reduce costs to under $0.001 per query through optimizations.</p>
            </div>
            <div className="p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
              <h3 className="text-lg font-medium text-white mb-3">Can AI agents work together in multi-agent systems?</h3>
              <p className="text-gray-400">Yes! Multi-agent systems allow specialized agents to collaborate on complex tasks. For example, one agent might research, another writes content, and a third reviews the output - all working together seamlessly.</p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-800">
          <h2 className="text-2xl font-light text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {post.relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="p-6 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-cyan-500/30 transition-all"
              >
                <h3 className="text-lg font-medium text-white hover:text-cyan-400 transition-colors">
                  {relatedPost.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Share and Actions */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-cyan-500/30 transition-all">
                <ThumbsUp className="w-4 h-4" />
                <span className="text-sm">Helpful</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-cyan-500/30 transition-all">
                <Bookmark className="w-4 h-4" />
                <span className="text-sm">Save</span>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-cyan-500/30 transition-all">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}