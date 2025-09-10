import { Metadata } from 'next'
import Link from 'next/link'
import { Code2, Cpu, Bot, Workflow, BookOpen, Briefcase, CheckCircle, GitCompare, Database, Shield, TrendingUp, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Agent Categories - Tutorials, Guides & Best Practices | SuperIntelAgents.ai Blog',
  description: 'Browse AI agent content by category. Find tutorials on building AI agents, multi-agent systems, frameworks comparisons, and enterprise automation guides.',
}

const categories = [
  {
    title: 'Build AI Agents',
    slug: 'build-ai-agents',
    icon: Code2,
    description: 'Step-by-step tutorials for building your first AI agents',
    articleCount: 24,
    color: 'cyan',
    featured: true,
    topics: ['Getting Started', 'Agent Architecture', 'Tool Integration', 'Deployment']
  },
  {
    title: 'Multi-Agent Systems',
    slug: 'multi-agent-systems',
    icon: Cpu,
    description: 'Learn to orchestrate multiple agents for complex workflows',
    articleCount: 18,
    color: 'purple',
    featured: true,
    topics: ['Agent Collaboration', 'Communication Protocols', 'Swarm Intelligence', 'Orchestration']
  },
  {
    title: 'Agent Frameworks',
    slug: 'agent-frameworks',
    icon: Bot,
    description: 'Compare and learn popular AI agent frameworks',
    articleCount: 15,
    color: 'green',
    featured: true,
    topics: ['LangChain', 'AutoGen', 'CrewAI', 'Framework Comparisons']
  },
  {
    title: 'Workflow Automation',
    slug: 'workflow-automation',
    icon: Workflow,
    description: 'Automate business processes with intelligent agents',
    articleCount: 21,
    color: 'orange',
    featured: true,
    topics: ['Business Process', 'Task Automation', 'Integration', 'ROI Analysis']
  },
  {
    title: 'Tutorials',
    slug: 'tutorials',
    icon: BookOpen,
    description: 'Hands-on guides and practical examples',
    articleCount: 32,
    color: 'blue',
    topics: ['Beginner', 'Intermediate', 'Advanced', 'Video Tutorials']
  },
  {
    title: 'Case Studies',
    slug: 'case-studies',
    icon: Briefcase,
    description: 'Real-world implementations and success stories',
    articleCount: 12,
    color: 'indigo',
    topics: ['Enterprise', 'Startups', 'ROI Analysis', 'Lessons Learned']
  },
  {
    title: 'Best Practices',
    slug: 'best-practices',
    icon: CheckCircle,
    description: 'Industry standards and proven methodologies',
    articleCount: 19,
    color: 'emerald',
    topics: ['Security', 'Performance', 'Cost Optimization', 'Monitoring']
  },
  {
    title: 'Comparisons',
    slug: 'comparisons',
    icon: GitCompare,
    description: 'Compare tools, frameworks, and approaches',
    articleCount: 14,
    color: 'pink',
    topics: ['Framework Comparison', 'LLM Comparison', 'Platform Reviews', 'Benchmarks']
  },
  {
    title: 'Architecture',
    slug: 'architecture',
    icon: Database,
    description: 'System design and architectural patterns',
    articleCount: 16,
    color: 'amber',
    topics: ['System Design', 'Scalability', 'Memory Systems', 'Infrastructure']
  },
  {
    title: 'Security & Compliance',
    slug: 'security-compliance',
    icon: Shield,
    description: 'Secure your AI agents and ensure compliance',
    articleCount: 8,
    color: 'red',
    topics: ['Data Privacy', 'Authentication', 'Compliance', 'Threat Modeling']
  }
]

export default function CategoriesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              Browse by Category
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive collection of AI agent content organized by topic. 
              From beginner tutorials to advanced architectures.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-light text-white mb-8">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.filter(cat => cat.featured).map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group relative p-6 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-cyan-500/30 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br from-${category.color}-400 to-${category.color}-600 rounded-full blur-3xl`}></div>
                </div>
                
                <div className="relative">
                  <div className={`inline-flex p-3 bg-${category.color}-500/10 rounded-lg mb-4`}>
                    <Icon className={`w-6 h-6 text-${category.color}-400`} />
                  </div>
                  
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{category.articleCount} articles</span>
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-light text-white mb-8">All Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.slug} className="p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`inline-flex p-3 bg-${category.color}-500/10 rounded-lg`}>
                    <Icon className={`w-6 h-6 text-${category.color}-400`} />
                  </div>
                  <div className="flex-1">
                    <Link
                      href={`/categories/${category.slug}`}
                      className="text-lg font-medium text-white hover:text-cyan-400 transition-colors"
                    >
                      {category.title}
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">{category.articleCount} articles</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-400 mb-4">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {category.topics.map((topic) => (
                    <Link
                      key={topic}
                      href={`/tags/${topic.toLowerCase().replace(' ', '-')}`}
                      className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400 hover:bg-gray-700 hover:text-cyan-400 transition-all"
                    >
                      {topic}
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Popular Series */}
      <section className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-light text-white mb-8">Popular Article Series</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl">
              <h3 className="text-lg font-medium text-white mb-3">
                🚀 AI Agent Development Bootcamp
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                10-part series taking you from zero to production-ready AI agents
              </p>
              <Link href="/series/ai-agent-bootcamp" className="text-cyan-400 hover:text-cyan-300 text-sm">
                Start learning →
              </Link>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl">
              <h3 className="text-lg font-medium text-white mb-3">
                🏗️ Enterprise Multi-Agent Systems
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Advanced guide to building scalable multi-agent architectures
              </p>
              <Link href="/series/enterprise-agents" className="text-purple-400 hover:text-purple-300 text-sm">
                Explore series →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}