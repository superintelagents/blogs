import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.superintelagents.ai'),
  title: {
    default: 'AI Agents Blog | Build Multi-Agent Systems & Automation - SuperIntelAgents.ai',
    template: '%s | SuperIntelAgents.ai Blog'
  },
  description: 'Learn how to build AI agents, multi-agent systems, and workflow automation. Expert guides on autonomous AI agents, agent frameworks, and practical implementations.',
  keywords: [
    'AI agents',
    'build AI agents',
    'multi-agent systems',
    'autonomous AI agents',
    'AI agent framework',
    'agent workflow automation',
    'artificial intelligence agents',
    'LLM agents',
    'agent orchestration',
    'AI agent development',
    'agent builder platform',
    'enterprise AI agents',
    'agent collaboration',
    'AI workforce',
    'intelligent agents'
  ],
  authors: [{ name: 'SuperIntelAgents.ai Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blog.superintelagents.ai',
    siteName: 'SuperIntelAgents.ai Blog',
    title: 'AI Agents Blog - Build & Deploy Multi-Agent Systems',
    description: 'Expert insights on building AI agents, multi-agent systems, and automation workflows',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SuperIntelAgents.ai - AI Agent Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents Blog - SuperIntelAgents.ai',
    description: 'Learn to build AI agents and multi-agent systems',
    images: ['/og-image.png'],
    creator: '@superintelagents'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://blog.superintelagents.ai',
    types: {
      'application/rss+xml': 'https://blog.superintelagents.ai/feed.xml'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "SuperIntelAgents.ai Blog",
              "url": "https://blog.superintelagents.ai",
              "description": "AI Agents, Multi-Agent Systems & Automation Blog",
              "publisher": {
                "@type": "Organization",
                "name": "SuperIntelAgents.ai",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://superintelagents.ai/logo.png"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://blog.superintelagents.ai/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-black text-gray-100 min-h-screen`}>
        <nav className="border-b border-gray-800 bg-black/95 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center gap-3">
                <span className="text-lg font-medium text-white">SuperIntelAgents<span className="text-cyan-400">.ai</span> <span className="text-gray-500">Blog</span></span>
              </Link>
              <div className="flex items-center gap-6">
                <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Articles</Link>
                <Link href="/categories" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Categories</Link>
                <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">About</Link>
                <Link href="https://superintelagents.ai" className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/20 transition-all text-sm">
                  Build Agents
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t border-gray-800 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-base font-medium text-white">SuperIntelAgents<span className="text-cyan-400">.ai</span></span>
                </div>
                <p className="text-xs text-gray-400 mb-4">
                  Building the future of AI agent infrastructure. Learn how to create, deploy, and scale intelligent agent systems.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-200 mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="/categories/tutorials" className="text-xs text-gray-400 hover:text-cyan-400 transition-colors">Tutorials</Link></li>
                  <li><Link href="/categories/case-studies" className="text-xs text-gray-400 hover:text-cyan-400 transition-colors">Case Studies</Link></li>
                  <li><Link href="/categories/best-practices" className="text-xs text-gray-400 hover:text-cyan-400 transition-colors">Best Practices</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-200 mb-4">Platform</h3>
                <ul className="space-y-2">
                  <li><a href="https://superintelagents.ai" className="text-xs text-gray-400 hover:text-cyan-400 transition-colors">Visual Agent Builder</a></li>
                  <li><a href="https://superintelagents.ai" className="text-xs text-gray-400 hover:text-cyan-400 transition-colors">No-Code Platform</a></li>
                  <li><a href="https://superintelagents.ai" className="text-xs text-gray-400 hover:text-cyan-400 transition-colors">Pricing</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p className="text-xs text-gray-500">© 2025 SuperIntelAgents.ai. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}