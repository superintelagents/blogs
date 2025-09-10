import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://blog.superintelagents.ai'
  
  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  // Category pages - high priority for SEO
  const categories = [
    'build-ai-agents',
    'multi-agent-systems', 
    'agent-frameworks',
    'workflow-automation',
    'tutorials',
    'case-studies',
    'best-practices',
    'architecture',
    'comparisons'
  ]

  const categoryPages = categories.map(category => ({
    url: `${baseUrl}/categories/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Blog posts - highest priority for content
  const blogPosts = [
    'how-to-build-ai-agent-complete-guide-2025',
    'multi-agent-systems-enterprise-automation',
    'ai-agent-frameworks-comparison-2025',
    'customer-support-ai-agents-best-practices',
    'ai-agent-memory-systems-guide',
    'langchain-vs-autogen-vs-crewai-comparison',
    'build-sales-ai-agent-tutorial',
    'ai-agents-for-data-analysis',
    'agent-orchestration-patterns',
    'production-ai-agent-deployment'
  ]

  const blogPages = blogPosts.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Tag pages for SEO
  const tags = [
    'ai-agents',
    'build-ai-agent',
    'multi-agent-systems',
    'agent-development',
    'langchain',
    'autogen',
    'crewai',
    'agent-frameworks',
    'workflow-automation',
    'enterprise-ai'
  ]

  const tagPages = tags.map(tag => ({
    url: `${baseUrl}/tags/${tag}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...mainPages, ...categoryPages, ...blogPages, ...tagPages]
}