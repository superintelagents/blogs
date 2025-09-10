import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, TrendingUp, BookOpen, Code2, Cpu, Bot, Workflow, Sparkles } from 'lucide-react'

// Category data - in a real app, this would come from a CMS or database
const categoryData = {
  'build-ai-agents': {
    title: 'Build AI Agents',
    description: 'Learn how to create AI agents with no coding required using SuperIntelAgents.ai\'s visual builder platform.',
    icon: Code2,
    color: 'cyan',
    posts: [
      {
        id: 1,
        title: 'How to Build Your First AI Agent in 2025: Complete Guide',
        slug: 'how-to-build-ai-agent-complete-guide-2025',
        excerpt: 'Learn how to create AI agents with no coding required using SuperIntelAgents.ai\'s visual builder. Complete step-by-step guide.',
        author: 'Dr. Sarah Chen',
        publishedAt: '2025-01-08',
        readingTime: '12 min read',
        featured: true
      },
      {
        id: 2,
        title: 'Visual Agent Builder: Create Customer Support Agents in Minutes',
        slug: 'visual-agent-builder-customer-support',
        excerpt: 'Use drag-and-drop tools to create sophisticated customer support agents without any programming knowledge.',
        author: 'Michael Rodriguez',
        publishedAt: '2025-01-07',
        readingTime: '8 min read',
        featured: false
      },
      {
        id: 3,
        title: 'No-Code AI Agents for Sales Automation',
        slug: 'no-code-ai-agents-sales-automation',
        excerpt: 'Build intelligent sales agents that qualify leads, book meetings, and follow up automatically.',
        author: 'Emily Watson',
        publishedAt: '2025-01-06',
        readingTime: '10 min read',
        featured: false
      }
    ]
  },
  'multi-agent-systems': {
    title: 'Multi-Agent Systems',
    description: 'Learn to orchestrate multiple AI agents working together for complex business workflows.',
    icon: Cpu,
    color: 'purple',
    posts: [
      {
        id: 1,
        title: 'Multi-Agent Systems: Orchestrating AI Agents for Enterprise Automation',
        slug: 'multi-agent-systems-enterprise-automation',
        excerpt: 'Discover how multi-agent systems transform enterprise workflows through agent collaboration.',
        author: 'Michael Rodriguez',
        publishedAt: '2025-01-07',
        readingTime: '15 min read',
        featured: true
      }
    ]
  },
  'agent-frameworks': {
    title: 'Agent Frameworks',
    description: 'Compare and learn popular AI agent frameworks and platforms.',
    icon: Bot,
    color: 'green',
    posts: [
      {
        id: 1,
        title: 'AI Agent Frameworks Comparison: LangChain vs AutoGen vs CrewAI',
        slug: 'ai-agent-frameworks-comparison-2025',
        excerpt: 'In-depth comparison of top AI agent frameworks with performance benchmarks.',
        author: 'Alex Thompson',
        publishedAt: '2025-01-06',
        readingTime: '18 min read',
        featured: true
      }
    ]
  },
  'workflow-automation': {
    title: 'Workflow Automation',
    description: 'Automate business processes with intelligent AI agents.',
    icon: Workflow,
    color: 'orange',
    posts: [
      {
        id: 1,
        title: 'Business Process Automation with AI Agents',
        slug: 'business-process-automation-ai-agents',
        excerpt: 'Transform repetitive business processes into automated workflows using AI agents.',
        author: 'Dr. James Liu',
        publishedAt: '2025-01-05',
        readingTime: '14 min read',
        featured: true
      }
    ]
  },
  'case-studies': {
    title: 'Case Studies',
    description: 'Real-world implementations and demos of AI agent systems in action.',
    icon: BookOpen,
    color: 'blue',
    posts: [
      {
        id: 1,
        title: 'Customer Service AI Agents: Live Case Study & Open Source Demo',
        slug: 'customer-service-ai-agents-case-study',
        excerpt: 'See how to build a powerful customer service AI agent network in minutes. Live demo with 5 specialized agents, single API endpoint, and real-time coordination.',
        author: 'SuperIntelAgents Team',
        publishedAt: '2025-01-15',
        readingTime: '8 min read',
        featured: true
      },
      {
        id: 2,
        title: 'App Builder AI Agents: From Idea to Production in Minutes',
        slug: 'app-builder-ai-agents-case-study',
        excerpt: 'Watch 6 specialized AI agents collaborate to build complete applications from natural language requirements. See real-time code generation, testing, and deployment in action.',
        author: 'SuperIntelAgents Team',
        publishedAt: '2025-01-16',
        readingTime: '10 min read',
        featured: false
      },
      {
        id: 3,
        title: 'Building Customer Support AI Agents That Actually Work',
        slug: 'customer-support-ai-agents-best-practices',
        excerpt: 'Real-world guide to deploying AI agents for customer support. Includes prompt engineering, tool integration, and handling edge cases.',
        author: 'Emily Watson',
        publishedAt: '2025-01-05',
        readingTime: '10 min read',
        featured: false
      }
    ]
  }
}

async function getCategoryData(slug: string) {
  return categoryData[slug as keyof typeof categoryData] || null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategoryData(slug)
  
  if (!category) {
    return {
      title: 'Category Not Found | SuperIntelAgents.ai Blog'
    }
  }
  
  return {
    title: `${category.title} - AI Agent Tutorials & Guides | SuperIntelAgents.ai Blog`,
    description: category.description,
    keywords: [category.title.toLowerCase(), 'AI agents', 'tutorials', 'guides'],
    openGraph: {
      title: `${category.title} - AI Agent Resources`,
      description: category.description,
      type: 'website',
    }
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategoryData(slug)

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-white mb-4">Category Not Found</h1>
          <p className="text-gray-400 mb-8">The category you're looking for doesn't exist.</p>
          <Link href="/" className="px-6 py-3 bg-cyan-500 text-black font-medium rounded-lg hover:bg-cyan-400 transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const Icon = category.icon

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/categories" className="hover:text-cyan-400 transition-colors">Categories</Link>
          <span>/</span>
          <span className="text-gray-400">{category.title}</span>
        </nav>
      </div>

      {/* Category Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className={`inline-flex p-4 bg-${category.color}-500/10 rounded-2xl mb-6`}>
            <Icon className={`w-12 h-12 text-${category.color}-400`} />
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            {category.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            {category.description}
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>{category.posts.length} articles</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Updated weekly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {category.posts.filter(post => post.featured).map(post => (
        <section key={post.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <div className={`w-full h-full bg-gradient-to-br from-${category.color}-400 to-${category.color}-600 rounded-full blur-3xl`}></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 bg-${category.color}-500/10 border border-${category.color}-500/30 rounded-full text-${category.color}-400 text-xs`}>
                  Featured
                </span>
              </div>
              
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-3xl font-light text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-6 text-lg">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.publishedAt}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* All Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-light text-white mb-8">All Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.posts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="p-6 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-cyan-500/30 transition-all h-full">
                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full"></div>
                      <div>
                        <p className="text-sm text-gray-300">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.publishedAt}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{post.readingTime}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Related Categories */}
      <section className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-light text-white mb-8">Explore More Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(categoryData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, cat]) => {
                const CategoryIcon = cat.icon
                return (
                  <Link
                    key={key}
                    href={`/categories/${key}`}
                    className="p-6 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-cyan-500/30 transition-all group"
                  >
                    <div className={`inline-flex p-3 bg-${cat.color}-500/10 rounded-lg mb-4`}>
                      <CategoryIcon className={`w-6 h-6 text-${cat.color}-400`} />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {cat.posts.length} articles
                    </p>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light text-white mb-4">
              Ready to Build Your Own AI Agent?
            </h2>
            <p className="text-gray-400 mb-8">
              Start creating powerful AI agents with SuperIntelAgents.ai's no-code visual builder.
              No programming knowledge required.
            </p>
            <Link 
              href="https://superintelagents.ai" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-black font-medium rounded-lg hover:bg-cyan-400 transition-colors"
            >
              Start Building Agents
              <Sparkles className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}