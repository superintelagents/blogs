import type { Metadata } from 'next'
import { ArrowLeft, ExternalLink, Github, Play, Bot, Zap, CheckCircle, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Customer Service AI Agents Case Study | SuperIntelAgents.ai',
  description: 'See how to build a powerful customer service AI agent network in minutes. Live demo with 5 specialized agents, single API endpoint, and real-time coordination.',
  keywords: ['AI agents', 'customer service', 'multi-agent system', 'case study', 'superintelagents'],
  openGraph: {
    title: 'Customer Service AI Agents Case Study | SuperIntelAgents.ai',
    description: 'See how to build a powerful customer service AI agent network in minutes. Live demo with 5 specialized agents, single API endpoint, and real-time coordination.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    authors: ['SuperIntelAgents Team'],
  },
}

export default function CustomerServiceCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Customer Service AI Agents</h1>
              <p className="text-gray-400">Live Case Study & Open Source Demo</p>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/superintelagents/customer-service-ai-agents" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
              <a 
                href="https://customer-service.superintelagents.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors text-white"
              >
                <Play className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm mb-6">
            <Bot className="w-4 h-4" />
            Case Study: Multi-Agent Customer Service
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">
            Build Complex Customer Service AI in Minutes
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            See how developers can create a powerful 5-agent customer service network using SuperIntelAgents.ai. 
            Complete with real-time coordination, comprehensive logging, and a single API endpoint.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">5</div>
            <div className="text-gray-400">Specialized Agents</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">1</div>
            <div className="text-gray-400">API Endpoint</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">2min</div>
            <div className="text-gray-400">Build Time</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">∞</div>
            <div className="text-gray-400">Capabilities</div>
          </div>
        </div>

        {/* Problem & Solution */}
        <div className="bg-gray-800 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">The Challenge</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-3">Traditional Approach</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Weeks of development time</li>
                <li>• Complex integration between systems</li>
                <li>• Multiple APIs to manage</li>
                <li>• Limited debugging capabilities</li>
                <li>• Difficult to iterate and improve</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">SuperIntelAgents.ai Solution</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Built in 2 minutes with visual builder</li>
                <li>• Single <code className="bg-gray-700 px-2 py-1 rounded">handle-request</code> endpoint</li>
                <li>• Automatic agent orchestration</li>
                <li>• Complete logging & stack traces</li>
                <li>• Instant iteration and deployment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Architecture Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Multi-Agent Architecture</h2>
          <div className="bg-gray-800 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* General Intelligence Agent */}
              <div className="lg:col-span-3 bg-gray-900 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Bot className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">General Intelligence Agent (Orchestrator)</h3>
                </div>
                <p className="text-gray-400 mb-4">Analyzes incoming requests and coordinates specialized agents</p>
                <div className="bg-gray-800 rounded p-3 font-mono text-sm">
                  <span className="text-green-400">POST</span> <span className="text-gray-300">/handle-request</span>
                  <div className="text-gray-500 mt-2">→ Routes to appropriate agents automatically</div>
                </div>
              </div>

              {/* Specialized Agents */}
              <div className="bg-gray-900 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <h4 className="font-semibold text-white">Knowledge Base Agent</h4>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Search documentation</li>
                  <li>• Retrieve FAQs</li>
                  <li>• Find product info</li>
                  <li>• Policy lookups</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <h4 className="font-semibold text-white">Ticket Management</h4>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Create support tickets</li>
                  <li>• Update status</li>
                  <li>• Assign priority</li>
                  <li>• Track resolution</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <h4 className="font-semibold text-white">Escalation Agent</h4>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Detect urgency</li>
                  <li>• Route to humans</li>
                  <li>• Schedule callbacks</li>
                  <li>• Priority handling</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <h4 className="font-semibold text-white">File Processing</h4>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Process attachments</li>
                  <li>• Store documents</li>
                  <li>• Extract data</li>
                  <li>• Generate reports</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <h4 className="font-semibold text-white">Integration Agent</h4>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• API calls</li>
                  <li>• External systems</li>
                  <li>• Data sync</li>
                  <li>• Third-party tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Why SuperIntelAgents.ai?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-semibold text-white">Lightning Fast Development</h3>
              </div>
              <p className="text-gray-400 mb-4">Build complex multi-agent systems in minutes, not weeks. Visual agent builder requires zero coding.</p>
              <div className="flex items-center gap-2 text-sm text-green-400">
                <CheckCircle className="w-4 h-4" />
                From idea to production in under 5 minutes
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Instant Iteration</h3>
              </div>
              <p className="text-gray-400 mb-4">Make changes and see results in seconds. Complete debugging with stack traces and activity logs.</p>
              <div className="flex items-center gap-2 text-sm text-green-400">
                <CheckCircle className="w-4 h-4" />
                Real-time updates and comprehensive logging
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Powerful Agent Capabilities</h3>
              </div>
              <p className="text-gray-400 mb-4">Each agent can make API calls, run compute operations, store files, and persist data automatically.</p>
              <div className="flex items-center gap-2 text-sm text-green-400">
                <CheckCircle className="w-4 h-4" />
                No infrastructure management required
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <ExternalLink className="w-6 h-6 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Single API Integration</h3>
              </div>
              <p className="text-gray-400 mb-4">One endpoint handles all agent interactions. Perfect for integrating into existing products and workflows.</p>
              <div className="flex items-center gap-2 text-sm text-green-400">
                <CheckCircle className="w-4 h-4" />
                Simple integration with any application
              </div>
            </div>
          </div>
        </div>

        {/* Live Demo Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Try the Live Demo</h2>
          <p className="text-gray-300 mb-6">
            Experience the power of multi-agent customer service in action. Try asking about refunds, reporting issues, 
            or uploading files to see different agents coordinate automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://customer-service.superintelagents.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors text-white font-medium"
            >
              <Play className="w-5 h-5" />
              Launch Interactive Demo
            </a>
            <a 
              href="https://github.com/superintelagents/customer-service-ai-agents" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-white font-medium"
            >
              <Github className="w-5 h-5" />
              View Source Code
            </a>
          </div>
        </div>

        {/* Implementation Guide */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Implementation Guide</h2>
          <div className="bg-gray-800 rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Clone the Repository</h3>
                  <div className="bg-gray-900 rounded p-3 font-mono text-sm text-gray-300">
                    git clone https://github.com/superintelagents/customer-service-ai-agents.git
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Install & Run</h3>
                  <div className="bg-gray-900 rounded p-3 font-mono text-sm text-gray-300">
                    npm install && npm run dev
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Build Your Own</h3>
                  <p className="text-gray-400">Visit <a href="https://superintelagents.ai" className="text-cyan-400 hover:text-cyan-300">SuperIntelAgents.ai</a> to create your own agent network with the visual builder.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Build Your Own AI Agent Network?</h2>
          <p className="text-gray-400 mb-8">
            Join thousands of developers building powerful AI agents in minutes with SuperIntelAgents.ai
          </p>
          <a 
            href="https://superintelagents.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-lg transition-all text-white font-medium text-lg"
          >
            <Bot className="w-6 h-6" />
            Start Building Now
          </a>
        </div>
      </div>
    </div>
  )
}