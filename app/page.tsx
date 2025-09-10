import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, User, Tag, TrendingUp, BookOpen, Code2, Cpu, Bot, Workflow, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Agents Blog - Build Multi-Agent Systems & Automation | SuperIntelAgents.ai',
  description: 'Learn how to build AI agents, multi-agent systems, and workflow automation. Expert guides, tutorials, and case studies on autonomous AI agent development.',
  openGraph: {
    title: 'AI Agents Blog - Build & Deploy Multi-Agent Systems',
    description: 'Expert insights on building AI agents, multi-agent systems, and automation workflows. Learn from real-world implementations.',
  }
}

// Featured categories for SEO
const featuredCategories = [
  {
    title: 'Build AI Agents',
    slug: 'build-ai-agents',
    icon: Code2,
    description: 'No-code tutorials for creating your first AI agents visually',
    color: 'cyan'
  },
  {
    title: 'Multi-Agent Systems',
    slug: 'multi-agent-systems',
    icon: Cpu,
    description: 'Orchestrating multiple agents for complex workflows',
    color: 'purple'
  },
  {
    title: 'Agent Frameworks',
    slug: 'agent-frameworks',
    icon: Bot,
    description: 'Compare LangChain, AutoGen, CrewAI and more',
    color: 'green'
  },
  {
    title: 'Workflow Automation',
    slug: 'workflow-automation',
    icon: Workflow,
    description: 'Automate business processes with AI agents',
    color: 'orange'
  }
]

// Sample blog posts optimized for SEO
const blogPosts = [
  {
    id: 1,
    title: 'Customer Service AI Agents: Live Case Study & Open Source Demo',
    slug: 'customer-service-ai-agents-case-study',
    excerpt: 'See how to build a powerful customer service AI agent network in minutes. Live demo with 5 specialized agents, single API endpoint, and real-time coordination. Complete with open source code.',
    category: 'Case Studies',
    tags: ['Customer Service', 'Multi-Agent Systems', 'Case Study', 'Open Source'],
    author: {
      name: 'SuperIntelAgents Team',
      role: 'AI Development Team',
      avatar: '/authors/team.jpg',
      bio: 'Building the future of AI agent development with visual, no-code tools'
    },
    readingTime: '8 min read',
    publishedAt: '2025-01-15',
    featured: true,
    image: '/blog/customer-service-case-study.jpg'
  },
  {
    id: 2,
    title: 'App Builder AI Agents: From Idea to Production in Minutes',
    slug: 'app-builder-ai-agents-case-study',
    excerpt: 'Watch 6 specialized AI agents collaborate to build complete applications from natural language requirements. See real-time code generation, testing, and deployment in action.',
    category: 'Case Studies',
    tags: ['App Builder', 'Code Generation', 'Multi-Agent Systems', 'AI Development'],
    author: {
      name: 'SuperIntelAgents Team',
      role: 'AI Development Team',
      avatar: '/authors/team.jpg',
      bio: 'Building the future of AI agent development with visual, no-code tools'
    },
    readingTime: '10 min read',
    publishedAt: '2025-01-16',
    featured: true,
    image: '/blog/app-builder-case-study.jpg'
  },
  {
    id: 3,
    title: 'How to Build Your First AI Agent in 2025: Complete Guide',
    slug: 'how-to-build-ai-agent-complete-guide-2025',
    excerpt: 'Learn how to build AI agents from scratch using SuperIntelAgents.ai. This comprehensive guide covers agent architecture, tool integration, memory systems, and deployment strategies for autonomous AI agents.',
    category: 'Tutorials',
    tags: ['AI Agents', 'Build AI Agent', 'Agent Development', 'Tutorial'],
    author: {
      name: 'Dr. Sarah Chen',
      role: 'AI Research Lead',
      avatar: '/authors/sarah.jpg',
      bio: 'Former OpenAI researcher with 10+ years in autonomous systems'
    },
    readingTime: '12 min read',
    publishedAt: '2025-01-08',
    featured: false,
    image: '/blog/build-ai-agent-hero.jpg'
  },
  {
    id: 4,
    title: 'Multi-Agent Systems: Orchestrating AI Agents for Enterprise Automation',
    slug: 'multi-agent-systems-enterprise-automation',
    excerpt: 'Discover how multi-agent systems transform enterprise workflows. Learn agent collaboration patterns, communication protocols, and real-world implementation strategies.',
    category: 'Architecture',
    tags: ['Multi-Agent Systems', 'Enterprise AI', 'Agent Orchestration'],
    author: {
      name: 'Michael Rodriguez',
      role: 'Principal Engineer',
      avatar: '/authors/michael.jpg',
      bio: 'Built AI infrastructure at Google, Meta. Expert in distributed systems'
    },
    readingTime: '15 min read',
    publishedAt: '2025-01-07',
    featured: false,
    image: '/blog/multi-agent-systems.jpg'
  },
  {
    id: 5,
    title: 'AI Agent Frameworks Comparison: LangChain vs AutoGen vs CrewAI',
    slug: 'ai-agent-frameworks-comparison-2025',
    excerpt: 'In-depth comparison of top AI agent frameworks. Performance benchmarks, feature analysis, and recommendations for different use cases.',
    category: 'Comparisons',
    tags: ['Agent Frameworks', 'LangChain', 'AutoGen', 'CrewAI'],
    author: {
      name: 'Alex Thompson',
      role: 'Solutions Architect',
      avatar: '/authors/alex.jpg',
      bio: 'AWS ML Specialist, deployed 100+ agent systems in production'
    },
    readingTime: '18 min read',
    publishedAt: '2025-01-06',
    featured: false,
    image: '/blog/framework-comparison.jpg'
  },
  {
    id: 6,
    title: 'Building Customer Support AI Agents That Actually Work',
    slug: 'customer-support-ai-agents-best-practices',
    excerpt: 'Real-world guide to deploying AI agents for customer support. Includes prompt engineering, tool integration, and handling edge cases.',
    category: 'Case Studies',
    tags: ['Customer Support', 'AI Agents', 'Production'],
    author: {
      name: 'Emily Watson',
      role: 'Head of AI Operations',
      avatar: '/authors/emily.jpg',
      bio: 'Led AI transformation at Fortune 500 companies'
    },
    readingTime: '10 min read',
    publishedAt: '2025-01-05',
    featured: false,
    image: '/blog/customer-support-agents.jpg'
  },
  {
    id: 7,
    title: 'Agent Memory Systems: Short-term, Long-term, and Vector Databases',
    slug: 'ai-agent-memory-systems-guide',
    excerpt: 'Deep dive into AI agent memory architectures. Learn how to implement persistent memory, context management, and knowledge retrieval.',
    category: 'Technical Deep Dive',
    tags: ['Agent Memory', 'Vector Databases', 'RAG', 'Architecture'],
    author: {
      name: 'Dr. James Liu',
      role: 'ML Research Scientist',
      avatar: '/authors/james.jpg',
      bio: 'PhD in Machine Learning, published 20+ papers on agent systems'
    },
    readingTime: '20 min read',
    publishedAt: '2025-01-04',
    featured: false,
    image: '/blog/agent-memory.jpg'
  }
]

export default function BlogHome() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with SEO-optimized H1 */}
      <section className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 50% 100%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs mb-6">
              <Sparkles className="w-3 h-3" />
              <span>AI Agents & Multi-Agent Systems Blog</span>
            </div>
            <h1 className="text-5xl font-light text-white mb-6">
              Learn to Build <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-normal">AI Agents</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Learn to create powerful AI agents with no coding required using SuperIntelAgents.ai's visual builder. 
              From beginner tutorials to enterprise deployments.
            </p>
            
            {/* Search Bar for SEO */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search no-code AI agents, visual builder, automation..."
                  className="w-full px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-all">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-light text-white mb-8">Popular Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredCategories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group p-6 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-cyan-500/30 transition-all"
              >
                <div className={`inline-flex p-3 bg-${category.color}-500/10 rounded-lg mb-4`}>
                  <Icon className={`w-6 h-6 text-${category.color}-400`} />
                </div>
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {category.description}
                </p>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-light text-white">Featured Articles</h2>
          <Link href="/archive" className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-2">
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.filter(post => post.featured).map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-light text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.publishedAt}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Recent Articles */}
        <h3 className="text-xl font-light text-white mb-6">Recent Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="p-6 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-cyan-500/30 transition-all h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-cyan-400">{post.category}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-xs text-gray-500">{post.readingTime}</span>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full"></div>
                    <div>
                      <p className="text-sm text-gray-300">{post.author.name}</p>
                      <p className="text-xs text-gray-500">{post.publishedAt}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light text-white mb-4">
              Stay Updated on AI Agent Development
            </h2>
            <p className="text-gray-400 mb-8">
              Get weekly insights on no-code AI agent creation, visual automation workflows, and enterprise deployments.
              Join 10,000+ business leaders and automation experts.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
              />
              <button className="px-6 py-3 bg-cyan-500 text-black font-medium rounded-lg hover:bg-cyan-400 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}