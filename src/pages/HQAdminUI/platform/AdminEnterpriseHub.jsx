import React, { useState } from 'react';
import {
  ArrowLeft,
  Building2,
  Plug,
  Layers,
  Shield,
  CheckCircle,
  Clock,
  AlertTriangle,
  Code,
  Database,
  Server,
  Globe,
  Lock,
  Key,
  FileText,
  Webhook,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  BarChart3,
  Settings,
  RefreshCw,
  Zap,
  Box,
  CreditCard,
  Users,
  Store,
  Gift,
  QrCode,
  Receipt,
  TrendingUp,
  Play,
  Pause,
  Copy,
  ExternalLink
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminEnterpriseHub = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // ============================================
  // ENTERPRISE INTEGRATION MODELS
  // ============================================
  // ReZ integrates as a "Sidecar", not a replacement

  const integrationModels = [
    {
      id: 'post-bill',
      name: 'Post-Bill Integration',
      description: 'Ingest bills after they\'re created on existing POS',
      difficulty: 'Easy',
      timeToIntegrate: '1-2 weeks',
      riskLevel: 'Very Low',
      features: [
        'Cashback/coin rewards',
        'Loyalty program',
        'Customer analytics',
        'Offer recommendations'
      ],
      techMethods: [
        'API push from POS → ReZ',
        'SFTP bill dumps (hourly/daily)',
        'Bill QR / OCR (fallback)'
      ],
      enterpriseLove: 'Zero disruption, no billing risk, easy rollback'
    },
    {
      id: 'scan-pay',
      name: 'Scan & Pay Overlay',
      description: 'QR-based payment layer on top of existing POS',
      difficulty: 'Easy',
      timeToIntegrate: '2-3 weeks',
      riskLevel: 'Low',
      features: [
        'QR payment processing',
        'Coin application at checkout',
        'User identification',
        'Payment settlement'
      ],
      techMethods: [
        'Static/Dynamic QR generation',
        'Payment callback API',
        'Reconciliation webhook'
      ],
      enterpriseLove: 'Faster checkout, reduced cash handling'
    },
    {
      id: 'loyalty-mirror',
      name: 'Loyalty & CRM Mirror',
      description: 'Mirror customer data for enhanced CRM',
      difficulty: 'Medium',
      timeToIntegrate: '3-4 weeks',
      riskLevel: 'Low',
      features: [
        'Customer sync',
        'Visit frequency tracking',
        'Spend patterns',
        'Segment triggers',
        'Campaign eligibility'
      ],
      techMethods: [
        'REST API sync',
        'Webhooks for real-time updates',
        'Tokenized customer IDs'
      ],
      enterpriseLove: 'Enhances CRM without replacement'
    },
    {
      id: 'central-hq',
      name: 'Central HQ Integration',
      description: 'Single integration at HQ, all stores inherit',
      difficulty: 'Medium',
      timeToIntegrate: '4-6 weeks',
      riskLevel: 'Medium',
      features: [
        'Chain-wide loyalty',
        'National campaigns',
        'City-wise offers',
        'Centralized reporting'
      ],
      techMethods: [
        'ERP integration (SAP/Oracle)',
        'Master data sync',
        'Store-level config API'
      ],
      enterpriseLove: 'Integrate once, deploy everywhere'
    },
    {
      id: 'white-label',
      name: 'White-Label ReZ',
      description: 'ReZ runs invisibly, brand app uses ReZ APIs',
      difficulty: 'Advanced',
      timeToIntegrate: '6-8 weeks',
      riskLevel: 'Medium',
      features: [
        'Full reward engine',
        'Custom branding',
        'Deep analytics',
        'API access'
      ],
      techMethods: [
        'Full API suite',
        'White-label SDK',
        'Custom domain'
      ],
      enterpriseLove: 'ReZ becomes infrastructure, deep lock-in'
    }
  ];

  // ============================================
  // ENTERPRISE PARTNERS
  // ============================================

  const [enterprisePartners, setEnterprisePartners] = useState([
    {
      id: 'ENT001',
      name: 'Reliance Retail',
      logo: '🏪',
      integrationModel: 'central-hq',
      stores: 1250,
      activeStores: 1180,
      status: 'live',
      gmv: 450000000, // Monthly
      transactions: 2500000,
      customersReached: 890000,
      integrationDate: '2023-06-15',
      apiCalls: 15000000,
      lastSync: '2024-01-15 14:30:00'
    },
    {
      id: 'ENT002',
      name: 'DMart',
      logo: '🛒',
      integrationModel: 'post-bill',
      stores: 340,
      activeStores: 340,
      status: 'live',
      gmv: 280000000,
      transactions: 1800000,
      customersReached: 650000,
      integrationDate: '2023-09-01',
      apiCalls: 8500000,
      lastSync: '2024-01-15 14:28:00'
    },
    {
      id: 'ENT003',
      name: 'Croma',
      logo: '📱',
      integrationModel: 'scan-pay',
      stores: 180,
      activeStores: 175,
      status: 'live',
      gmv: 120000000,
      transactions: 450000,
      customersReached: 280000,
      integrationDate: '2023-11-15',
      apiCalls: 3200000,
      lastSync: '2024-01-15 14:25:00'
    },
    {
      id: 'ENT004',
      name: 'BigBazaar',
      logo: '🏬',
      integrationModel: 'loyalty-mirror',
      stores: 280,
      activeStores: 0,
      status: 'integration',
      gmv: 0,
      transactions: 0,
      customersReached: 0,
      integrationDate: null,
      apiCalls: 0,
      lastSync: null
    }
  ]);

  // ============================================
  // API METRICS
  // ============================================

  const apiMetrics = {
    totalApiCalls: 28500000, // This month
    successRate: 99.97,
    averageLatency: 45, // ms
    peakTPS: 2500, // Transactions per second

    endpoints: [
      { name: '/v1/bill/ingest', calls: 8500000, latency: 32, errors: 0.01 },
      { name: '/v1/loyalty/credit', calls: 6200000, latency: 28, errors: 0.02 },
      { name: '/v1/customer/lookup', calls: 5800000, latency: 15, errors: 0.01 },
      { name: '/v1/offer/eligible', calls: 4500000, latency: 45, errors: 0.03 },
      { name: '/v1/payment/process', calls: 2200000, latency: 120, errors: 0.05 },
      { name: '/v1/analytics/summary', calls: 1300000, latency: 250, errors: 0.02 }
    ]
  };

  // ============================================
  // SECURITY & COMPLIANCE
  // ============================================

  const securityFeatures = [
    { name: 'OAuth 2.0 / mTLS', status: 'enabled', description: 'Secure authentication' },
    { name: 'IP Whitelisting', status: 'enabled', description: 'Restrict API access by IP' },
    { name: 'Rate Limiting', status: 'enabled', description: '10K requests/min per client' },
    { name: 'Data Encryption', status: 'enabled', description: 'AES-256 at rest, TLS 1.3 in transit' },
    { name: 'PII Tokenization', status: 'enabled', description: 'Customer data tokenized' },
    { name: 'Audit Logging', status: 'enabled', description: '7+ years retention' },
    { name: 'ISO 27001', status: 'in_progress', description: 'Certification in progress' },
    { name: 'SOC2 Type II', status: 'planned', description: 'Roadmap Q3 2024' }
  ];

  // ============================================
  // SANDBOX ENVIRONMENT
  // ============================================

  const sandboxStats = {
    activeApps: 45,
    sandboxApiCalls: 2500000,
    averageIntegrationTime: 12, // days
    successfulMigrations: 38
  };

  // ============================================
  // WEBHOOKS
  // ============================================

  const [webhooks, setWebhooks] = useState([
    {
      id: 'WH001',
      client: 'Reliance Retail',
      url: 'https://reliance-api.com/rez-webhook',
      events: ['bill.processed', 'loyalty.credited', 'offer.redeemed'],
      status: 'active',
      successRate: 99.9,
      lastTriggered: '2024-01-15 14:30:00'
    },
    {
      id: 'WH002',
      client: 'DMart',
      url: 'https://dmart.com/webhooks/rez',
      events: ['transaction.completed', 'customer.enrolled'],
      status: 'active',
      successRate: 99.8,
      lastTriggered: '2024-01-15 14:28:00'
    }
  ]);

  const formatCurrency = (amount) => {
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`;
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
    return `₹${amount}`;
  };

  const formatNumber = (num) => {
    if (num >= 10000000) return `${(num / 10000000).toFixed(1)}Cr`;
    if (num >= 100000) return `${(num / 100000).toFixed(1)}L`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-black text-white p-6">
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
              <Building2 size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Enterprise Integration Hub</h1>
              <p className="text-white/80 mt-1">DMart, Reliance, Croma - Sidecar Integration</p>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Enterprise Partners</div>
              <div className="text-2xl font-bold mt-1">{enterprisePartners.filter(p => p.status === 'live').length}</div>
              <div className="text-emerald-300 text-xs">Live integrations</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Stores Connected</div>
              <div className="text-2xl font-bold mt-1">
                {enterprisePartners.reduce((sum, p) => sum + p.activeStores, 0)}
              </div>
              <div className="text-emerald-300 text-xs">Active locations</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Monthly GMV</div>
              <div className="text-2xl font-bold mt-1">
                {formatCurrency(enterprisePartners.reduce((sum, p) => sum + p.gmv, 0))}
              </div>
              <div className="text-emerald-300 text-xs">Through ReZ</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">API Calls</div>
              <div className="text-2xl font-bold mt-1">{formatNumber(apiMetrics.totalApiCalls)}</div>
              <div className="text-emerald-300 text-xs">{apiMetrics.successRate}% success</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Customers Reached</div>
              <div className="text-2xl font-bold mt-1">
                {formatNumber(enterprisePartners.reduce((sum, p) => sum + p.customersReached, 0))}
              </div>
              <div className="text-emerald-300 text-xs">Via enterprise</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[
            { id: 'overview', label: 'Overview', icon: Layers },
            { id: 'models', label: 'Integration Models', icon: Plug },
            { id: 'partners', label: 'Partners', icon: Building2 },
            { id: 'api', label: 'API Performance', icon: Activity },
            { id: 'security', label: 'Security', icon: Shield },
            { id: 'sandbox', label: 'Sandbox', icon: Code }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-slate-800 text-white shadow-lg'
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

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">ReZ as Sidecar, Not Replacement</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">❌ Don't Say</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• "Replace your POS"</li>
                    <li>• "We own customer data"</li>
                    <li>• "Migrate to our system"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">✅ Say</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• "We enhance your existing POS without touching it"</li>
                    <li>• "You retain ownership. We only process rewards"</li>
                    <li>• "Integrate in weeks, not months"</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What ReZ Quietly Controls */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-semibold text-gray-800 mb-4">What ReZ Quietly Controls (The Real Win)</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 bg-purple-50 rounded-lg text-center">
                  <Wallet className="mx-auto text-purple-600 mb-2" size={32} />
                  <div className="font-medium text-gray-800">Wallet Habit</div>
                  <div className="text-sm text-gray-600">Users pay with ReZ everywhere</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg text-center">
                  <Gift className="mx-auto text-blue-600 mb-2" size={32} />
                  <div className="font-medium text-gray-800">Rewards Logic</div>
                  <div className="text-sm text-gray-600">We control coin economics</div>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg text-center">
                  <TrendingUp className="mx-auto text-emerald-600 mb-2" size={32} />
                  <div className="font-medium text-gray-800">Cross-Merchant Intel</div>
                  <div className="text-sm text-gray-600">We see the full journey</div>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg text-center">
                  <RefreshCw className="mx-auto text-orange-600 mb-2" size={32} />
                  <div className="font-medium text-gray-800">Repeat Behavior</div>
                  <div className="text-sm text-gray-600">We drive customers back</div>
                </div>
              </div>
            </div>

            {/* Integration Flow */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Typical Integration Flow</h3>
              <div className="flex items-center justify-between overflow-x-auto pb-4">
                {[
                  { step: 1, title: 'Discovery', desc: 'Understand existing stack' },
                  { step: 2, title: 'Sandbox', desc: 'Test integration' },
                  { step: 3, title: 'Pilot', desc: '5-10 stores live' },
                  { step: 4, title: 'Rollout', desc: 'Gradual expansion' },
                  { step: 5, title: 'Optimize', desc: 'Performance tuning' }
                ].map((item, idx) => (
                  <div key={item.step} className="flex items-center">
                    <div className="text-center px-4">
                      <div className="w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                        {item.step}
                      </div>
                      <div className="font-medium text-gray-800">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                    {idx < 4 && (
                      <ArrowUpRight className="text-gray-300" size={24} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Integration Models Tab */}
        {activeTab === 'models' && (
          <div className="space-y-6">
            {integrationModels.map(model => (
              <div key={model.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{model.name}</h3>
                      <p className="text-gray-600 mt-1">{model.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        model.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-700' :
                        model.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {model.difficulty}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        model.riskLevel === 'Very Low' ? 'bg-emerald-100 text-emerald-700' :
                        model.riskLevel === 'Low' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {model.riskLevel} Risk
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Features</h4>
                      <ul className="space-y-1">
                        {model.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="text-emerald-500" size={14} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Technical Methods</h4>
                      <ul className="space-y-1">
                        {model.techMethods.map((method, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                            <Code className="text-blue-500" size={14} />
                            {method}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Why Enterprises Love It</h4>
                      <p className="text-sm text-gray-600 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                        {model.enterpriseLove}
                      </p>
                      <div className="mt-3 text-sm text-gray-500">
                        ⏱️ Integration time: {model.timeToIntegrate}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Partners Tab */}
        {activeTab === 'partners' && (
          <div className="space-y-6">
            <div className="grid gap-6">
              {enterprisePartners.map(partner => (
                <div key={partner.id} className={`bg-white rounded-xl shadow-sm border overflow-hidden ${
                  partner.status !== 'live' ? 'opacity-75' : ''
                }`}>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{partner.logo}</div>
                        <div>
                          <h3 className="font-semibold text-gray-800 text-lg">{partner.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm text-gray-500 capitalize">
                              {partner.integrationModel.replace('-', ' ')}
                            </span>
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                              partner.status === 'live' ? 'bg-emerald-100 text-emerald-700' :
                              partner.status === 'integration' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-gray-100 text-gray-600'
                            }`}>
                              {partner.status.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>
                      {partner.status === 'live' && (
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Last sync</div>
                          <div className="text-sm font-medium">{partner.lastSync}</div>
                        </div>
                      )}
                    </div>

                    {partner.status === 'live' && (
                      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-500">Stores</div>
                          <div className="text-xl font-bold">{partner.activeStores}/{partner.stores}</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-500">Monthly GMV</div>
                          <div className="text-xl font-bold text-emerald-600">{formatCurrency(partner.gmv)}</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-500">Transactions</div>
                          <div className="text-xl font-bold">{formatNumber(partner.transactions)}</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-500">Customers</div>
                          <div className="text-xl font-bold">{formatNumber(partner.customersReached)}</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-500">API Calls</div>
                          <div className="text-xl font-bold">{formatNumber(partner.apiCalls)}</div>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-500">Since</div>
                          <div className="text-xl font-bold">{partner.integrationDate?.split('-')[0]}</div>
                        </div>
                      </div>
                    )}

                    {partner.status === 'integration' && (
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Clock className="text-yellow-600" size={20} />
                          <span className="font-medium text-yellow-800">Integration in Progress</span>
                        </div>
                        <p className="text-sm text-yellow-700 mt-2">
                          Technical team working on sandbox testing. Expected go-live: Q1 2024
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* API Performance Tab */}
        {activeTab === 'api' && (
          <div className="space-y-6">
            {/* API Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 border">
                <div className="text-gray-500 text-sm">Total API Calls</div>
                <div className="text-2xl font-bold text-gray-800 mt-1">{formatNumber(apiMetrics.totalApiCalls)}</div>
                <div className="text-xs text-gray-500">This month</div>
              </div>
              <div className="bg-white rounded-xl p-4 border">
                <div className="text-gray-500 text-sm">Success Rate</div>
                <div className="text-2xl font-bold text-emerald-600 mt-1">{apiMetrics.successRate}%</div>
                <div className="text-xs text-gray-500">Uptime</div>
              </div>
              <div className="bg-white rounded-xl p-4 border">
                <div className="text-gray-500 text-sm">Avg Latency</div>
                <div className="text-2xl font-bold text-gray-800 mt-1">{apiMetrics.averageLatency}ms</div>
                <div className="text-xs text-gray-500">Response time</div>
              </div>
              <div className="bg-white rounded-xl p-4 border">
                <div className="text-gray-500 text-sm">Peak TPS</div>
                <div className="text-2xl font-bold text-gray-800 mt-1">{formatNumber(apiMetrics.peakTPS)}</div>
                <div className="text-xs text-gray-500">Transactions/sec</div>
              </div>
            </div>

            {/* Endpoint Performance */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">Endpoint Performance</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Endpoint</th>
                      <th className="text-right p-4 text-sm font-medium text-gray-600">Calls</th>
                      <th className="text-right p-4 text-sm font-medium text-gray-600">Latency</th>
                      <th className="text-right p-4 text-sm font-medium text-gray-600">Error Rate</th>
                      <th className="text-right p-4 text-sm font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiMetrics.endpoints.map((endpoint, idx) => (
                      <tr key={idx} className="border-t hover:bg-gray-50">
                        <td className="p-4">
                          <code className="text-sm bg-gray-100 px-2 py-1 rounded">{endpoint.name}</code>
                        </td>
                        <td className="p-4 text-right font-medium">{formatNumber(endpoint.calls)}</td>
                        <td className="p-4 text-right">
                          <span className={`${
                            endpoint.latency < 50 ? 'text-emerald-600' :
                            endpoint.latency < 100 ? 'text-yellow-600' :
                            'text-red-600'
                          }`}>
                            {endpoint.latency}ms
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <span className={`${
                            endpoint.errors < 0.05 ? 'text-emerald-600' : 'text-red-600'
                          }`}>
                            {endpoint.errors}%
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">
                            Healthy
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
                <h3 className="font-semibold text-gray-800">Active Webhooks</h3>
              </div>
              <div className="p-4 space-y-4">
                {webhooks.map(webhook => (
                  <div key={webhook.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-800">{webhook.client}</div>
                      <code className="text-xs text-gray-500">{webhook.url}</code>
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

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">Security & Compliance</h3>
                <p className="text-sm text-gray-500">Enterprise-grade security features</p>
              </div>
              <div className="p-4 grid md:grid-cols-2 gap-4">
                {securityFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {feature.status === 'enabled' ? (
                        <CheckCircle className="text-emerald-500" size={24} />
                      ) : feature.status === 'in_progress' ? (
                        <Clock className="text-yellow-500" size={24} />
                      ) : (
                        <AlertTriangle className="text-gray-400" size={24} />
                      )}
                      <div>
                        <div className="font-medium text-gray-800">{feature.name}</div>
                        <div className="text-sm text-gray-500">{feature.description}</div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      feature.status === 'enabled' ? 'bg-emerald-100 text-emerald-700' :
                      feature.status === 'in_progress' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {feature.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* API Key Management */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-semibold text-gray-800 mb-4">API Key Management</h3>
              <div className="p-4 bg-gray-900 rounded-lg text-green-400 font-mono text-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Production Key (masked)</span>
                  <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300">
                    <Copy size={14} /> Copy
                  </button>
                </div>
                <code>rez_live_sk_enterprise_7x8y9z************************</code>
              </div>
              <div className="mt-4 flex gap-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Rotate Key
                </button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                  View Audit Log
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sandbox Tab */}
        {activeTab === 'sandbox' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Sandbox Environment</h3>
              <p className="text-white/80">
                Test your integration before going live. Full API access with test data.
              </p>
              <div className="grid md:grid-cols-4 gap-4 mt-4">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">{sandboxStats.activeApps}</div>
                  <div className="text-sm text-white/70">Active Apps</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">{formatNumber(sandboxStats.sandboxApiCalls)}</div>
                  <div className="text-sm text-white/70">Sandbox Calls</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">{sandboxStats.averageIntegrationTime} days</div>
                  <div className="text-sm text-white/70">Avg Integration</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold">{sandboxStats.successfulMigrations}</div>
                  <div className="text-sm text-white/70">Gone Live</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Quick Start</h3>
              <div className="p-4 bg-gray-900 rounded-lg text-green-400 font-mono text-sm overflow-x-auto">
                <pre>{`# Install ReZ SDK
npm install @rez/enterprise-sdk

# Initialize
const rez = new RezEnterprise({
  apiKey: 'rez_test_sk_sandbox_abc123...',
  environment: 'sandbox'
});

# Ingest a bill
await rez.bills.ingest({
  billNumber: 'TEST-001',
  amount: 1500,
  items: [...],
  customerId: 'cust_123'
});

# Credit loyalty points
await rez.loyalty.credit({
  customerId: 'cust_123',
  points: 150,
  source: 'purchase'
});`}</pre>
              </div>
              <div className="mt-4">
                <a href="#" className="text-blue-600 hover:underline flex items-center gap-1">
                  View Full Documentation <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminEnterpriseHub;
