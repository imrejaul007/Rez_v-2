import { useState } from 'react';
import {
  Settings, Server, Link2, Database, RefreshCw, CheckCircle, XCircle,
  AlertTriangle, Code, Key, Webhook, Activity, Clock, Shield, Zap,
  Download, Upload, FileJson, Terminal, Copy, Eye, EyeOff, Plus,
  Search, Filter, MoreVertical, ExternalLink, Trash2, Edit, Play
} from 'lucide-react';

export default function AdminPOSIntegration() {
  const [activeTab, setActiveTab] = useState('providers');
  const [showApiKey, setShowApiKey] = useState({});

  // Supported POS Providers
  const posProviders = [
    {
      id: 'square',
      name: 'Square POS',
      logo: '🟦',
      status: 'active',
      version: 'v2.0',
      merchants: 145,
      lastSync: '2 mins ago',
      features: ['Real-time sync', 'Inventory', 'Payments', 'Customers'],
      apiVersion: '2024-01-18',
      webhooks: 12
    },
    {
      id: 'shopify',
      name: 'Shopify POS',
      logo: '🟢',
      status: 'active',
      version: 'v3.0',
      merchants: 234,
      lastSync: '5 mins ago',
      features: ['Orders', 'Products', 'Customers', 'Discounts'],
      apiVersion: '2024-01',
      webhooks: 18
    },
    {
      id: 'lightspeed',
      name: 'Lightspeed',
      logo: '🔴',
      status: 'active',
      version: 'v1.5',
      merchants: 89,
      lastSync: '1 min ago',
      features: ['Sales', 'Inventory', 'Analytics', 'Loyalty'],
      apiVersion: 'v3',
      webhooks: 8
    },
    {
      id: 'clover',
      name: 'Clover POS',
      logo: '🍀',
      status: 'active',
      version: 'v2.1',
      merchants: 178,
      lastSync: '3 mins ago',
      features: ['Orders', 'Payments', 'Inventory', 'Employees'],
      apiVersion: 'v3.1',
      webhooks: 15
    },
    {
      id: 'toast',
      name: 'Toast POS',
      logo: '🍞',
      status: 'beta',
      version: 'v1.0',
      merchants: 34,
      lastSync: '10 mins ago',
      features: ['Restaurant', 'Orders', 'Menu', 'Tables'],
      apiVersion: 'v2',
      webhooks: 6
    },
    {
      id: 'vend',
      name: 'Vend (Lightspeed X)',
      logo: '🔷',
      status: 'active',
      version: 'v2.0',
      merchants: 67,
      lastSync: '4 mins ago',
      features: ['Retail', 'Inventory', 'Customers', 'Reports'],
      apiVersion: 'v2.0',
      webhooks: 10
    },
    {
      id: 'revel',
      name: 'Revel Systems',
      logo: '⚡',
      status: 'inactive',
      version: 'v1.2',
      merchants: 0,
      lastSync: 'Never',
      features: ['iPad POS', 'Inventory', 'CRM', 'Reporting'],
      apiVersion: 'v3',
      webhooks: 0
    },
    {
      id: 'custom',
      name: 'Custom API',
      logo: '🔧',
      status: 'active',
      version: 'v1.0',
      merchants: 23,
      lastSync: 'Varies',
      features: ['REST API', 'GraphQL', 'Webhooks', 'SDK'],
      apiVersion: 'Custom',
      webhooks: 45
    }
  ];

  // API Endpoints
  const apiEndpoints = [
    { method: 'POST', path: '/api/v1/pos/transactions', description: 'Create new transaction', auth: 'Bearer Token' },
    { method: 'GET', path: '/api/v1/pos/transactions/:id', description: 'Get transaction details', auth: 'Bearer Token' },
    { method: 'POST', path: '/api/v1/pos/apply-discount', description: 'Apply ReZ discount to cart', auth: 'Bearer Token' },
    { method: 'POST', path: '/api/v1/pos/redeem-coins', description: 'Redeem RezCoins at checkout', auth: 'Bearer Token' },
    { method: 'GET', path: '/api/v1/pos/customer/:phone', description: 'Lookup customer by phone', auth: 'Bearer Token' },
    { method: 'POST', path: '/api/v1/pos/award-coins', description: 'Award coins after purchase', auth: 'Bearer Token' },
    { method: 'GET', path: '/api/v1/pos/offers', description: 'Get active offers for merchant', auth: 'Bearer Token' },
    { method: 'POST', path: '/api/v1/pos/validate-coupon', description: 'Validate coupon code', auth: 'Bearer Token' },
    { method: 'POST', path: '/api/v1/pos/sync-inventory', description: 'Sync inventory data', auth: 'Bearer Token' },
    { method: 'GET', path: '/api/v1/pos/analytics', description: 'Get POS analytics', auth: 'Bearer Token' }
  ];

  // Webhook Events
  const webhookEvents = [
    { event: 'transaction.created', description: 'Fired when a new transaction is created', active: true },
    { event: 'transaction.completed', description: 'Fired when payment is successful', active: true },
    { event: 'transaction.refunded', description: 'Fired when a refund is processed', active: true },
    { event: 'coins.awarded', description: 'Fired when coins are awarded to customer', active: true },
    { event: 'coins.redeemed', description: 'Fired when coins are redeemed', active: true },
    { event: 'offer.applied', description: 'Fired when an offer is applied', active: true },
    { event: 'customer.created', description: 'Fired when new customer is added', active: false },
    { event: 'inventory.updated', description: 'Fired when inventory changes', active: false },
    { event: 'merchant.settings.changed', description: 'Fired when merchant updates settings', active: true },
    { event: 'loyalty.tier.changed', description: 'Fired when customer tier changes', active: true }
  ];

  // Integration Stats
  const integrationStats = {
    totalMerchants: 770,
    activeConnections: 682,
    dailyTransactions: 45230,
    syncSuccessRate: 99.7,
    avgLatency: 145,
    webhookDeliveryRate: 99.9
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'beta': return 'bg-yellow-100 text-yellow-700';
      case 'inactive': return 'bg-gray-100 text-gray-500';
      default: return 'bg-gray-100 text-gray-500';
    }
  };

  const getMethodColor = (method) => {
    switch (method) {
      case 'GET': return 'bg-blue-100 text-blue-700';
      case 'POST': return 'bg-green-100 text-green-700';
      case 'PUT': return 'bg-yellow-100 text-yellow-700';
      case 'DELETE': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">POS Integration Hub</h1>
              <p className="text-gray-600 mt-1">Manage third-party POS connections and API integrations</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                <FileJson className="w-4 h-4" />
                API Docs
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Provider
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-6 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Server className="w-4 h-4" />
              <span className="text-sm">Total Merchants</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{integrationStats.totalMerchants}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Link2 className="w-4 h-4" />
              <span className="text-sm">Active Connections</span>
            </div>
            <div className="text-2xl font-bold text-green-600">{integrationStats.activeConnections}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Activity className="w-4 h-4" />
              <span className="text-sm">Daily Transactions</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{integrationStats.dailyTransactions.toLocaleString()}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Sync Success Rate</span>
            </div>
            <div className="text-2xl font-bold text-green-600">{integrationStats.syncSuccessRate}%</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Zap className="w-4 h-4" />
              <span className="text-sm">Avg Latency</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{integrationStats.avgLatency}ms</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Webhook className="w-4 h-4" />
              <span className="text-sm">Webhook Delivery</span>
            </div>
            <div className="text-2xl font-bold text-green-600">{integrationStats.webhookDeliveryRate}%</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6">
        <div className="flex border-b border-gray-200">
          {[
            { id: 'providers', label: 'POS Providers', icon: Server },
            { id: 'api', label: 'API Endpoints', icon: Code },
            { id: 'webhooks', label: 'Webhooks', icon: Webhook },
            { id: 'sdk', label: 'SDK & Libraries', icon: Terminal },
            { id: 'logs', label: 'Integration Logs', icon: Activity }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 font-medium border-b-2 transition-all ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {activeTab === 'providers' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search providers..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-80"
                />
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {posProviders.map((provider) => (
                <div key={provider.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{provider.logo}</div>
                      <div>
                        <h3 className="font-bold text-gray-900">{provider.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(provider.status)}`}>
                            {provider.status}
                          </span>
                          <span className="text-xs text-gray-500">v{provider.version}</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="text-lg font-bold text-gray-900">{provider.merchants}</div>
                      <div className="text-xs text-gray-500">Merchants</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="text-lg font-bold text-gray-900">{provider.webhooks}</div>
                      <div className="text-xs text-gray-500">Webhooks</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="text-xs text-gray-600">{provider.lastSync}</div>
                      <div className="text-xs text-gray-500">Last Sync</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {provider.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="flex-1 px-3 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 flex items-center justify-center gap-1">
                      <Settings className="w-4 h-4" />
                      Configure
                    </button>
                    <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-1">
                      <RefreshCw className="w-4 h-4" />
                      Sync
                    </button>
                    <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'api' && (
          <div className="space-y-6">
            {/* API Keys Section */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Key className="w-5 h-5 text-purple-600" />
                API Keys & Authentication
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Production API Key</div>
                    <div className="text-sm text-gray-500">Used for live integrations</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="px-3 py-1 bg-gray-200 rounded font-mono text-sm">
                      {showApiKey.prod ? 'rez_live_sk_1234567890abcdef' : '••••••••••••••••'}
                    </code>
                    <button
                      onClick={() => setShowApiKey({...showApiKey, prod: !showApiKey.prod})}
                      className="p-2 hover:bg-gray-200 rounded"
                    >
                      {showApiKey.prod ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Sandbox API Key</div>
                    <div className="text-sm text-gray-500">Used for testing integrations</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="px-3 py-1 bg-gray-200 rounded font-mono text-sm">
                      {showApiKey.sandbox ? 'rez_test_sk_0987654321fedcba' : '••••••••••••••••'}
                    </code>
                    <button
                      onClick={() => setShowApiKey({...showApiKey, sandbox: !showApiKey.sandbox})}
                      className="p-2 hover:bg-gray-200 rounded"
                    >
                      {showApiKey.sandbox ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* API Endpoints */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-5 border-b border-gray-200">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-600" />
                  REST API Endpoints
                </h3>
                <p className="text-sm text-gray-500 mt-1">Base URL: https://api.rez.app/v1</p>
              </div>
              <div className="divide-y divide-gray-100">
                {apiEndpoints.map((endpoint, idx) => (
                  <div key={idx} className="p-4 hover:bg-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`px-2 py-1 rounded text-xs font-mono font-bold ${getMethodColor(endpoint.method)}`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm font-mono text-gray-800">{endpoint.path}</code>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600">{endpoint.description}</span>
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">{endpoint.auth}</span>
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <Play className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'webhooks' && (
          <div className="space-y-6">
            {/* Webhook URL Configuration */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Webhook className="w-5 h-5 text-purple-600" />
                Webhook Configuration
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Webhook Endpoint URL</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value="https://your-server.com/webhooks/rez"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                      readOnly
                    />
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                      Update
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Webhook Secret</label>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      value="whsec_1234567890abcdef"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                      readOnly
                    />
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      Regenerate
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Use this to verify webhook signatures</p>
                </div>
              </div>
            </div>

            {/* Webhook Events */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-5 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">Webhook Events</h3>
                  <p className="text-sm text-gray-500">Select which events trigger webhooks</p>
                </div>
                <button className="px-3 py-1 text-sm text-purple-600 hover:bg-purple-50 rounded">
                  Enable All
                </button>
              </div>
              <div className="divide-y divide-gray-100">
                {webhookEvents.map((webhook, idx) => (
                  <div key={idx} className="p-4 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={webhook.active} className="sr-only peer" readOnly />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                      <code className="text-sm font-mono text-purple-700 bg-purple-50 px-2 py-1 rounded">{webhook.event}</code>
                    </div>
                    <span className="text-sm text-gray-600">{webhook.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sdk' && (
          <div className="grid grid-cols-2 gap-6">
            {/* SDK Downloads */}
            {[
              { lang: 'JavaScript/Node.js', icon: '🟨', package: 'npm install @rez/pos-sdk', version: '2.3.1' },
              { lang: 'Python', icon: '🐍', package: 'pip install rez-pos-sdk', version: '2.3.0' },
              { lang: 'PHP', icon: '🐘', package: 'composer require rez/pos-sdk', version: '2.2.5' },
              { lang: 'Java', icon: '☕', package: 'com.rez:pos-sdk:2.3.0', version: '2.3.0' },
              { lang: 'Ruby', icon: '💎', package: 'gem install rez-pos-sdk', version: '2.2.0' },
              { lang: '.NET', icon: '🔷', package: 'dotnet add package Rez.PosSdk', version: '2.3.1' }
            ].map((sdk, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{sdk.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900">{sdk.lang}</h3>
                      <span className="text-xs text-gray-500">v{sdk.version}</span>
                    </div>
                  </div>
                  <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    Docs
                  </button>
                </div>
                <div className="bg-gray-900 rounded-lg p-3 flex items-center justify-between">
                  <code className="text-green-400 text-sm font-mono">{sdk.package}</code>
                  <button className="text-gray-400 hover:text-white">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'logs' && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Recent Integration Logs</h3>
              <div className="flex items-center gap-2">
                <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                  <option>All Events</option>
                  <option>Errors Only</option>
                  <option>Warnings</option>
                  <option>Success</option>
                </select>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
              {[
                { time: '2 mins ago', type: 'success', merchant: 'Zara Store #123', event: 'transaction.completed', details: 'Order #4521 - ₹2,450' },
                { time: '5 mins ago', type: 'success', merchant: 'Lakme Salon', event: 'coins.awarded', details: '+125 coins to customer' },
                { time: '8 mins ago', type: 'warning', merchant: 'Cult.fit Gym', event: 'webhook.retry', details: 'Retrying delivery (attempt 2/3)' },
                { time: '12 mins ago', type: 'error', merchant: 'Custom API #45', event: 'sync.failed', details: 'Connection timeout after 30s' },
                { time: '15 mins ago', type: 'success', merchant: 'Square POS', event: 'offer.applied', details: '20% discount applied' },
                { time: '20 mins ago', type: 'success', merchant: 'Shopify Store', event: 'inventory.synced', details: '145 products updated' }
              ].map((log, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    {log.type === 'success' && <CheckCircle className="w-5 h-5 text-green-500" />}
                    {log.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                    {log.type === 'error' && <XCircle className="w-5 h-5 text-red-500" />}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{log.merchant}</span>
                        <code className="text-xs bg-gray-100 px-2 py-0.5 rounded">{log.event}</code>
                      </div>
                      <div className="text-sm text-gray-500">{log.details}</div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
