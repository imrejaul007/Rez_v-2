import React, { useState } from 'react';
import {
  ArrowLeft,
  Code,
  Globe,
  Layers,
  Key,
  BarChart3,
  Shield,
  Zap,
  Package,
  Users,
  Building2,
  CreditCard,
  ShoppingCart,
  Star,
  TrendingUp,
  Lock,
  Unlock,
  Copy,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  Activity,
  Server,
  Database,
  Cpu,
  Network,
  FileJson,
  Terminal,
  BookOpen,
  Settings,
  DollarSign,
  Eye,
  Webhook,
  Box,
  Plug
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminCommerceProtocol = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedKey, setCopiedKey] = useState(null);

  // ============================================
  // 1. API MARKETPLACE - Third Parties Pay to Use ReZ Data
  // ============================================

  const [apiProducts, setApiProducts] = useState([
    {
      id: 'API001',
      name: 'ReZ Trust Score API',
      description: 'Get real-time trust scores for merchants and users',
      category: 'Trust & Verification',
      pricing: 'per_call',
      pricePerCall: 0.05,
      monthlyMin: 5000,
      activeClients: 47,
      callsThisMonth: 2450000,
      revenueThisMonth: 122500,
      endpoints: [
        'GET /v1/trust/merchant/{id}',
        'GET /v1/trust/user/{id}',
        'POST /v1/trust/verify'
      ],
      useCases: ['Loan underwriting', 'Insurance risk', 'B2B verification']
    },
    {
      id: 'API002',
      name: 'Consumer Behavior API',
      description: 'Aggregated spending patterns and preferences',
      category: 'Analytics',
      pricing: 'per_call',
      pricePerCall: 0.15,
      monthlyMin: 10000,
      activeClients: 23,
      callsThisMonth: 890000,
      revenueThisMonth: 133500,
      endpoints: [
        'GET /v1/behavior/trends/{category}',
        'GET /v1/behavior/segments',
        'POST /v1/behavior/predict'
      ],
      useCases: ['Market research', 'Product development', 'Ad targeting']
    },
    {
      id: 'API003',
      name: 'Merchant Intelligence API',
      description: 'Business health, revenue patterns, growth potential',
      category: 'Business Intelligence',
      pricing: 'per_call',
      pricePerCall: 0.25,
      monthlyMin: 15000,
      activeClients: 18,
      callsThisMonth: 340000,
      revenueThisMonth: 85000,
      endpoints: [
        'GET /v1/merchant/health/{id}',
        'GET /v1/merchant/revenue-pattern/{id}',
        'GET /v1/merchant/growth-score/{id}'
      ],
      useCases: ['Investment decisions', 'Commercial lending', 'Partnership scoring']
    },
    {
      id: 'API004',
      name: 'Location Intelligence API',
      description: 'Hyperlocal demand patterns, foot traffic, zone analytics',
      category: 'Location',
      pricing: 'per_call',
      pricePerCall: 0.10,
      monthlyMin: 8000,
      activeClients: 31,
      callsThisMonth: 1200000,
      revenueThisMonth: 120000,
      endpoints: [
        'GET /v1/location/demand/{zone_id}',
        'GET /v1/location/foot-traffic/{area}',
        'GET /v1/location/hotspots'
      ],
      useCases: ['Retail site selection', 'Real estate valuation', 'Urban planning']
    }
  ]);

  // API Clients
  const [apiClients, setApiClients] = useState([
    {
      id: 'CLIENT001',
      name: 'HDFC Bank',
      type: 'Financial Institution',
      apis: ['Trust Score API', 'Merchant Intelligence API'],
      monthlySpend: 125000,
      callsThisMonth: 1800000,
      status: 'active',
      tier: 'enterprise'
    },
    {
      id: 'CLIENT002',
      name: 'ICICI Prudential',
      type: 'Insurance',
      apis: ['Trust Score API', 'Consumer Behavior API'],
      monthlySpend: 85000,
      callsThisMonth: 950000,
      status: 'active',
      tier: 'enterprise'
    },
    {
      id: 'CLIENT003',
      name: 'WeWork India',
      type: 'Real Estate',
      apis: ['Location Intelligence API'],
      monthlySpend: 45000,
      callsThisMonth: 450000,
      status: 'active',
      tier: 'business'
    },
    {
      id: 'CLIENT004',
      name: 'Razorpay',
      type: 'Fintech',
      apis: ['Trust Score API', 'Merchant Intelligence API'],
      monthlySpend: 95000,
      callsThisMonth: 1200000,
      status: 'active',
      tier: 'enterprise'
    }
  ]);

  // ============================================
  // 2. WHITE-LABEL SOLUTIONS
  // ============================================

  const [whitelabelProducts, setWhitelabelProducts] = useState([
    {
      id: 'WL001',
      name: 'ReZ Commerce Stack',
      description: 'Complete e-commerce infrastructure with ReZ intelligence built-in',
      features: [
        'Merchant onboarding system',
        'Payment processing',
        'Loyalty & rewards engine',
        'Analytics dashboard',
        'Customer app (white-labeled)'
      ],
      pricing: 'Revenue Share',
      revenueShare: 2.5, // % of GMV
      activeDeployments: 12,
      totalGMV: 450000000,
      monthlyRevenue: 1125000
    },
    {
      id: 'WL002',
      name: 'ReZ Loyalty Engine',
      description: 'Plug-and-play loyalty system with ReZ coin economics',
      features: [
        'Points/coins management',
        'Tier system',
        'Rewards catalog',
        'Cross-merchant redemption',
        'Analytics'
      ],
      pricing: 'Per Active User',
      pricePerUser: 15, // per month
      activeDeployments: 28,
      totalUsers: 1200000,
      monthlyRevenue: 540000
    },
    {
      id: 'WL003',
      name: 'ReZ Trust Layer',
      description: 'Add trust scoring to any marketplace',
      features: [
        'User verification',
        'Merchant scoring',
        'Review authenticity',
        'Fraud detection',
        'Dispute resolution'
      ],
      pricing: 'Per Transaction',
      pricePerTransaction: 0.02,
      activeDeployments: 8,
      totalTransactions: 15000000,
      monthlyRevenue: 300000
    }
  ]);

  // ============================================
  // 3. PROTOCOL LAYER - ReZ as Infrastructure
  // ============================================

  const protocolMetrics = {
    totalApiCalls: 125000000, // Last 30 days
    totalApiRevenue: 4500000,
    activeIntegrations: 156,
    whitelabelGMV: 850000000,
    whitelabelRevenue: 2150000,

    // Network Effect
    externalMerchantsUsingRez: 12500,
    externalUsersReached: 3500000,

    // Protocol Dominance
    marketShareLocalCommerce: 34,
    dataContributors: 8500, // External sources feeding data
    apiDependentCompanies: 156
  };

  // ============================================
  // 4. DEVELOPER PORTAL STATS
  // ============================================

  const developerStats = {
    registeredDevelopers: 2450,
    activeApps: 890,
    sandboxCalls: 45000000,
    productionApps: 156,
    averageTimeToLive: 4.5, // Days from signup to production
    documentation: {
      pages: 345,
      examples: 128,
      sdks: ['Node.js', 'Python', 'Java', 'Go', 'PHP', 'Ruby']
    }
  };

  // ============================================
  // 5. API KEY MANAGEMENT
  // ============================================

  const [apiKeys, setApiKeys] = useState([
    {
      id: 'KEY001',
      name: 'Production - HDFC Integration',
      key: 'rez_live_sk_hdfc_7x8y9z...',
      type: 'production',
      permissions: ['trust.read', 'merchant.read'],
      callsToday: 58000,
      rateLimit: 100000,
      created: '2023-06-15',
      lastUsed: '2024-01-15 14:32:00'
    },
    {
      id: 'KEY002',
      name: 'Sandbox - Development',
      key: 'rez_test_sk_sandbox_abc123...',
      type: 'sandbox',
      permissions: ['*'],
      callsToday: 12000,
      rateLimit: 50000,
      created: '2024-01-10',
      lastUsed: '2024-01-15 14:28:00'
    }
  ]);

  // ============================================
  // 6. WEBHOOK CONFIGURATIONS
  // ============================================

  const [webhooks, setWebhooks] = useState([
    {
      id: 'WH001',
      client: 'HDFC Bank',
      url: 'https://hdfc-api.com/rez-webhook',
      events: ['trust.score.changed', 'merchant.status.changed'],
      status: 'active',
      successRate: 99.8,
      lastTriggered: '2024-01-15 14:30:00'
    },
    {
      id: 'WH002',
      client: 'Razorpay',
      url: 'https://razorpay.com/webhooks/rez',
      events: ['transaction.completed', 'merchant.verified'],
      status: 'active',
      successRate: 99.9,
      lastTriggered: '2024-01-15 14:31:00'
    }
  ]);

  // ============================================
  // 7. COMPETITIVE MOAT - Exit-Proof Architecture
  // ============================================

  const exitProofMetrics = {
    // Companies that can't function without ReZ
    criticalDependencies: [
      { company: 'Multiple NBFCs', count: 15, dependency: 'Trust scoring for loan approval' },
      { company: 'Insurance Companies', count: 8, dependency: 'Risk assessment data' },
      { company: 'Real Estate Platforms', count: 12, dependency: 'Location intelligence' },
      { company: 'Fintech Apps', count: 34, dependency: 'Merchant verification' },
      { company: 'Retail Chains', count: 45, dependency: 'Consumer behavior insights' }
    ],
    // Switching cost analysis
    averageSwitchingCost: 8500000, // ₹85L average to rebuild without ReZ
    integrationDepth: 4.2, // Average number of ReZ APIs used
    dataLockIn: 89, // % of clients would lose critical data if they left
  };

  const formatCurrency = (amount) => {
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`;
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
    if (amount >= 1000) return `₹${(amount / 1000).toFixed(1)}K`;
    return `₹${amount}`;
  };

  const formatNumber = (num) => {
    if (num >= 10000000) return `${(num / 10000000).toFixed(1)}Cr`;
    if (num >= 100000) return `${(num / 100000).toFixed(1)}L`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num;
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/admin')}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Admin</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Layers size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold">ReZ Commerce Protocol</h1>
              <p className="text-white/80 mt-1">API Marketplace & Exit-Proof Architecture</p>
            </div>
          </div>

          {/* Protocol Overview */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">API Revenue</div>
              <div className="text-2xl font-bold mt-1">{formatCurrency(protocolMetrics.totalApiRevenue)}</div>
              <div className="text-pink-200 text-xs mt-1">/month</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">API Calls</div>
              <div className="text-2xl font-bold mt-1">{formatNumber(protocolMetrics.totalApiCalls)}</div>
              <div className="text-pink-200 text-xs mt-1">/month</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">White-Label GMV</div>
              <div className="text-2xl font-bold mt-1">{formatCurrency(protocolMetrics.whitelabelGMV)}</div>
              <div className="text-pink-200 text-xs mt-1">Running through ReZ</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">API-Dependent</div>
              <div className="text-2xl font-bold mt-1">{protocolMetrics.apiDependentCompanies}</div>
              <div className="text-pink-200 text-xs mt-1">Companies</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Market Share</div>
              <div className="text-2xl font-bold mt-1">{protocolMetrics.marketShareLocalCommerce}%</div>
              <div className="text-pink-200 text-xs mt-1">Local commerce data</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[
            { id: 'overview', label: 'Protocol Overview', icon: Layers },
            { id: 'api-marketplace', label: 'API Products', icon: Code },
            { id: 'whitelabel', label: 'White-Label', icon: Box },
            { id: 'clients', label: 'API Clients', icon: Building2 },
            { id: 'developers', label: 'Developer Portal', icon: Terminal },
            { id: 'exit-proof', label: 'Exit-Proof', icon: Lock }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pb-8">

        {/* Protocol Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Vision Banner */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Globe size={24} />
                ReZ as Infrastructure: The Commerce Protocol
              </h3>
              <p className="text-white/80 mt-2">
                Not just a platform - ReZ is becoming the underlying protocol for local commerce.
                Competitors can't attack without using our APIs. Third parties pay to access our data.
                The more they integrate, the harder it is to leave.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Code className="text-blue-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">API Marketplace</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Banks, insurers, and fintechs pay to access our trust scores, behavior data, and merchant intelligence.
                </p>
                <div className="text-2xl font-bold text-blue-600">{formatCurrency(protocolMetrics.totalApiRevenue)}</div>
                <div className="text-sm text-gray-500">Monthly API Revenue</div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Box className="text-purple-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">White-Label Stack</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Other platforms run on ReZ infrastructure. They handle customers, we handle everything else.
                </p>
                <div className="text-2xl font-bold text-purple-600">{formatCurrency(protocolMetrics.whitelabelGMV)}</div>
                <div className="text-sm text-gray-500">GMV Through White-Label</div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <Network className="text-pink-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Data Network</h4>
                <p className="text-sm text-gray-600 mb-4">
                  External sources feed data to ReZ. We're the central intelligence layer for local commerce.
                </p>
                <div className="text-2xl font-bold text-pink-600">{formatNumber(protocolMetrics.dataContributors)}</div>
                <div className="text-sm text-gray-500">Data Contributors</div>
              </div>
            </div>

            {/* Network Effect Visualization */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h4 className="font-semibold text-gray-800 mb-4">The Protocol Network Effect</h4>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">{formatNumber(protocolMetrics.externalMerchantsUsingRez)}</div>
                  <div className="text-sm text-gray-600">External Merchants</div>
                  <div className="text-xs text-gray-400">Using ReZ via partners</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">{formatNumber(protocolMetrics.externalUsersReached)}</div>
                  <div className="text-sm text-gray-600">External Users Reached</div>
                  <div className="text-xs text-gray-400">Via white-label apps</div>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <div className="text-3xl font-bold text-pink-600">{protocolMetrics.activeIntegrations}</div>
                  <div className="text-sm text-gray-600">Active Integrations</div>
                  <div className="text-xs text-gray-400">Companies using our APIs</div>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <div className="text-3xl font-bold text-indigo-600">{protocolMetrics.marketShareLocalCommerce}%</div>
                  <div className="text-sm text-gray-600">Data Market Share</div>
                  <div className="text-xs text-gray-400">Local commerce intelligence</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* API Marketplace Tab */}
        {activeTab === 'api-marketplace' && (
          <div className="space-y-6">
            {/* API Products */}
            <div className="grid md:grid-cols-2 gap-6">
              {apiProducts.map(api => (
                <div key={api.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-medium">
                          {api.category}
                        </span>
                        <h4 className="font-semibold text-gray-800 text-lg mt-2">{api.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{api.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-indigo-600">₹{api.pricePerCall}</div>
                        <div className="text-xs text-gray-500">per call</div>
                      </div>
                    </div>

                    {/* Endpoints */}
                    <div className="mt-4 bg-gray-900 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-2">Endpoints</div>
                      {api.endpoints.map((endpoint, idx) => (
                        <div key={idx} className="text-xs font-mono text-green-400">
                          {endpoint}
                        </div>
                      ))}
                    </div>

                    {/* Use Cases */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {api.useCases.map((use, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {use}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-4 grid grid-cols-3 gap-4 pt-4 border-t">
                      <div>
                        <div className="text-lg font-bold text-gray-800">{api.activeClients}</div>
                        <div className="text-xs text-gray-500">Active Clients</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-800">{formatNumber(api.callsThisMonth)}</div>
                        <div className="text-xs text-gray-500">Calls/Month</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-emerald-600">{formatCurrency(api.revenueThisMonth)}</div>
                        <div className="text-xs text-gray-500">Revenue/Month</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Revenue Summary */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">Total API Marketplace Revenue</h3>
                  <p className="text-white/80">Revenue from selling data access to third parties</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold">
                    {formatCurrency(apiProducts.reduce((sum, api) => sum + api.revenueThisMonth, 0))}
                  </div>
                  <div className="text-white/80">per month</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* White-Label Tab */}
        {activeTab === 'whitelabel' && (
          <div className="space-y-6">
            {/* Vision */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Box size={24} />
                White-Label: They Run on ReZ Infrastructure
              </h3>
              <p className="text-white/80 mt-2">
                Other platforms can deploy ReZ-powered commerce with their own branding.
                They handle customer relationships. We handle everything else and take a cut.
              </p>
            </div>

            {/* White-Label Products */}
            <div className="space-y-4">
              {whitelabelProducts.map(product => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm border p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">{product.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600">
                        {product.revenueShare ? `${product.revenueShare}% GMV` :
                         product.pricePerUser ? `₹${product.pricePerUser}/user` :
                         `₹${product.pricePerTransaction}/txn`}
                      </div>
                      <div className="text-xs text-gray-500">{product.pricing}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-4 grid md:grid-cols-5 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                        <CheckCircle className="text-emerald-500" size={14} />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="mt-4 grid grid-cols-4 gap-4 pt-4 border-t">
                    <div>
                      <div className="text-lg font-bold text-gray-800">{product.activeDeployments}</div>
                      <div className="text-xs text-gray-500">Deployments</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-800">
                        {product.totalGMV ? formatCurrency(product.totalGMV) :
                         product.totalUsers ? formatNumber(product.totalUsers) :
                         formatNumber(product.totalTransactions)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {product.totalGMV ? 'GMV' : product.totalUsers ? 'Users' : 'Transactions'}
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-emerald-600">{formatCurrency(product.monthlyRevenue)}</div>
                      <div className="text-xs text-gray-500">Monthly Revenue</div>
                    </div>
                    <div>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 w-full">
                        View Deployments
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total White-Label Revenue */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">Total White-Label Revenue</h3>
                  <p className="text-white/80">From platforms running on ReZ infrastructure</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold">
                    {formatCurrency(whitelabelProducts.reduce((sum, p) => sum + p.monthlyRevenue, 0))}
                  </div>
                  <div className="text-white/80">per month</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* API Clients Tab */}
        {activeTab === 'clients' && (
          <div className="space-y-6">
            {/* Client List */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">API Clients</h3>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700">
                  + Onboard Client
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Client</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Type</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">APIs Used</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Calls/Month</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Monthly Spend</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Tier</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiClients.map(client => (
                      <tr key={client.id} className="border-t hover:bg-gray-50">
                        <td className="p-4">
                          <div className="font-medium text-gray-800">{client.name}</div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm text-gray-600">{client.type}</span>
                        </td>
                        <td className="p-4">
                          <div className="flex flex-wrap gap-1">
                            {client.apis.map((api, idx) => (
                              <span key={idx} className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs">
                                {api}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="font-medium">{formatNumber(client.callsThisMonth)}</span>
                        </td>
                        <td className="p-4">
                          <span className="font-medium text-emerald-600">{formatCurrency(client.monthlySpend)}</span>
                        </td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            client.tier === 'enterprise' ? 'bg-purple-100 text-purple-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {client.tier.toUpperCase()}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">
                            Active
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Webhooks */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                  <Webhook size={18} />
                  Webhook Configurations
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {webhooks.map(webhook => (
                  <div key={webhook.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-800">{webhook.client}</div>
                      <div className="text-xs font-mono text-gray-500">{webhook.url}</div>
                      <div className="flex gap-2 mt-2">
                        {webhook.events.map((event, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
                            {event}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-emerald-600">{webhook.successRate}% success</div>
                      <div className="text-xs text-gray-500">Last: {webhook.lastTriggered}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Developer Portal Tab */}
        {activeTab === 'developers' && (
          <div className="space-y-6">
            {/* Developer Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 border">
                <div className="text-gray-500 text-sm">Registered Developers</div>
                <div className="text-2xl font-bold text-gray-800 mt-1">{formatNumber(developerStats.registeredDevelopers)}</div>
              </div>
              <div className="bg-white rounded-xl p-4 border">
                <div className="text-gray-500 text-sm">Active Apps</div>
                <div className="text-2xl font-bold text-gray-800 mt-1">{developerStats.activeApps}</div>
              </div>
              <div className="bg-white rounded-xl p-4 border">
                <div className="text-gray-500 text-sm">Production Apps</div>
                <div className="text-2xl font-bold text-emerald-600 mt-1">{developerStats.productionApps}</div>
              </div>
              <div className="bg-white rounded-xl p-4 border">
                <div className="text-gray-500 text-sm">Avg Time to Live</div>
                <div className="text-2xl font-bold text-gray-800 mt-1">{developerStats.averageTimeToLive} days</div>
              </div>
            </div>

            {/* API Keys */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">API Keys</h3>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700">
                  + Generate Key
                </button>
              </div>
              <div className="p-4 space-y-3">
                {apiKeys.map(key => (
                  <div key={key.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-gray-800">{key.name}</div>
                        <div className="flex items-center gap-2 mt-2">
                          <code className="px-3 py-1 bg-gray-100 rounded text-sm font-mono text-gray-600">
                            {key.key}
                          </code>
                          <button
                            onClick={() => copyToClipboard(key.key, key.id)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            {copiedKey === key.id ? (
                              <CheckCircle className="text-emerald-500" size={16} />
                            ) : (
                              <Copy className="text-gray-400" size={16} />
                            )}
                          </button>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        key.type === 'production' ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {key.type.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex gap-4 mt-3 text-sm text-gray-500">
                      <span>Calls today: {formatNumber(key.callsToday)}</span>
                      <span>Rate limit: {formatNumber(key.rateLimit)}/day</span>
                      <span>Last used: {key.lastUsed}</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      {key.permissions.map((perm, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                          {perm}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SDKs & Documentation */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">SDKs & Documentation</h3>
              </div>
              <div className="p-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Official SDKs</h4>
                    <div className="flex flex-wrap gap-2">
                      {developerStats.documentation.sdks.map((sdk, idx) => (
                        <span key={idx} className="px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
                          {sdk}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Documentation</h4>
                    <div className="flex gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{developerStats.documentation.pages}</div>
                        <div className="text-xs text-gray-500">Doc Pages</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">{developerStats.documentation.examples}</div>
                        <div className="text-xs text-gray-500">Code Examples</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Exit-Proof Tab */}
        {activeTab === 'exit-proof' && (
          <div className="space-y-6">
            {/* Strategic Lock-In Banner */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Lock size={24} />
                Exit-Proof Architecture: The Ultimate Moat
              </h3>
              <p className="text-white/80 mt-2">
                {protocolMetrics.apiDependentCompanies} companies now depend on ReZ APIs for critical operations.
                Average switching cost: {formatCurrency(exitProofMetrics.averageSwitchingCost)}.
                They cannot leave without rebuilding their entire data infrastructure.
              </p>
            </div>

            {/* Critical Dependencies */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">Companies That Can't Function Without ReZ</h3>
              </div>
              <div className="p-4 space-y-3">
                {exitProofMetrics.criticalDependencies.map((dep, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-red-600">{dep.count}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{dep.company}</div>
                        <div className="text-sm text-gray-600">{dep.dependency}</div>
                      </div>
                    </div>
                    <Lock className="text-red-400" size={20} />
                  </div>
                ))}
              </div>
            </div>

            {/* Switching Cost Analysis */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <DollarSign className="text-red-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Average Switching Cost</h4>
                <div className="text-3xl font-bold text-red-600">{formatCurrency(exitProofMetrics.averageSwitchingCost)}</div>
                <p className="text-sm text-gray-600 mt-2">
                  To rebuild data infrastructure without ReZ APIs
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Plug className="text-orange-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Integration Depth</h4>
                <div className="text-3xl font-bold text-orange-600">{exitProofMetrics.integrationDepth}</div>
                <p className="text-sm text-gray-600 mt-2">
                  Average APIs per client - deeper integration = harder exit
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Database className="text-purple-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Data Lock-In</h4>
                <div className="text-3xl font-bold text-purple-600">{exitProofMetrics.dataLockIn}%</div>
                <p className="text-sm text-gray-600 mt-2">
                  Would lose critical data/intelligence if they left
                </p>
              </div>
            </div>

            {/* Why They Can't Leave */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">Why They Can't Leave</h3>
              </div>
              <div className="p-6 grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-800">For Financial Institutions</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="text-red-500 mt-1" size={16} />
                      <div>
                        <div className="font-medium text-gray-800">Trust Score Dependency</div>
                        <div className="text-sm text-gray-600">
                          Loan approvals use ReZ data. Without it, approval rates drop 40%
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="text-red-500 mt-1" size={16} />
                      <div>
                        <div className="font-medium text-gray-800">Real-Time Signals</div>
                        <div className="text-sm text-gray-600">
                          Only ReZ has live transaction data. Banks see monthly statements
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="text-red-500 mt-1" size={16} />
                      <div>
                        <div className="font-medium text-gray-800">Historical Data</div>
                        <div className="text-sm text-gray-600">
                          Years of merchant behavior data - impossible to replicate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-800">For Retail & Real Estate</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <AlertTriangle className="text-orange-500 mt-1" size={16} />
                      <div>
                        <div className="font-medium text-gray-800">Location Intelligence</div>
                        <div className="text-sm text-gray-600">
                          Site selection relies on ReZ foot traffic and demand data
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <AlertTriangle className="text-orange-500 mt-1" size={16} />
                      <div>
                        <div className="font-medium text-gray-800">Consumer Behavior</div>
                        <div className="text-sm text-gray-600">
                          Product decisions based on ReZ category trend data
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                      <AlertTriangle className="text-orange-500 mt-1" size={16} />
                      <div>
                        <div className="font-medium text-gray-800">Zone Economics</div>
                        <div className="text-sm text-gray-600">
                          Rent valuations use ReZ transaction density data
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Protocol Dominance */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold">Protocol Dominance Achieved</h3>
              <p className="text-white/80 mt-2">
                ReZ is no longer just a platform. It's the underlying infrastructure for local commerce intelligence.
                Competitors cannot attack without using our APIs. Third parties cannot make decisions without our data.
              </p>
              <div className="grid md:grid-cols-4 gap-4 mt-6">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">{protocolMetrics.marketShareLocalCommerce}%</div>
                  <div className="text-sm text-white/70">Data Market Share</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">{protocolMetrics.apiDependentCompanies}</div>
                  <div className="text-sm text-white/70">Dependent Companies</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">{formatCurrency(exitProofMetrics.averageSwitchingCost)}</div>
                  <div className="text-sm text-white/70">Avg Switching Cost</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">{exitProofMetrics.dataLockIn}%</div>
                  <div className="text-sm text-white/70">Data Lock-In Rate</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCommerceProtocol;
