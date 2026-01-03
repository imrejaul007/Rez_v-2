import React, { useState } from 'react';
import {
  ArrowLeft, Code, Key, Copy, Eye, EyeOff, RefreshCw, Plus,
  FileText, Terminal, Globe, Lock, CheckCircle, AlertCircle,
  ChevronRight, Zap, Database, Shield, Clock, TrendingUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDeveloperPortal = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showKey, setShowKey] = useState({});
  const [showCreateKey, setShowCreateKey] = useState(false);

  const apiKeys = [
    {
      id: 1,
      name: 'Production API Key',
      key: 'rez_live_sk_1234567890abcdef',
      type: 'live',
      created: '2024-01-01',
      lastUsed: '2 mins ago',
      calls: 1245678,
      status: 'active'
    },
    {
      id: 2,
      name: 'Test API Key',
      key: 'rez_test_sk_abcdef1234567890',
      type: 'test',
      created: '2024-01-01',
      lastUsed: '1 hour ago',
      calls: 45890,
      status: 'active'
    },
    {
      id: 3,
      name: 'Partner Integration Key',
      key: 'rez_partner_sk_xyz123456789',
      type: 'partner',
      created: '2024-01-10',
      lastUsed: '3 days ago',
      calls: 12450,
      status: 'active'
    }
  ];

  const endpoints = [
    {
      category: 'Authentication',
      apis: [
        { method: 'POST', path: '/auth/token', description: 'Generate access token' },
        { method: 'POST', path: '/auth/refresh', description: 'Refresh access token' },
        { method: 'POST', path: '/auth/revoke', description: 'Revoke token' }
      ]
    },
    {
      category: 'Merchants',
      apis: [
        { method: 'GET', path: '/merchants', description: 'List all merchants' },
        { method: 'GET', path: '/merchants/:id', description: 'Get merchant details' },
        { method: 'POST', path: '/merchants', description: 'Create merchant' },
        { method: 'PUT', path: '/merchants/:id', description: 'Update merchant' }
      ]
    },
    {
      category: 'Orders',
      apis: [
        { method: 'GET', path: '/orders', description: 'List orders' },
        { method: 'POST', path: '/orders', description: 'Create order' },
        { method: 'GET', path: '/orders/:id', description: 'Get order details' },
        { method: 'POST', path: '/orders/:id/refund', description: 'Refund order' }
      ]
    },
    {
      category: 'Payments',
      apis: [
        { method: 'POST', path: '/payments/intent', description: 'Create payment intent' },
        { method: 'POST', path: '/payments/capture', description: 'Capture payment' },
        { method: 'GET', path: '/payments/:id', description: 'Get payment status' }
      ]
    },
    {
      category: 'Coins & Wallet',
      apis: [
        { method: 'GET', path: '/wallet/:userId', description: 'Get wallet balance' },
        { method: 'POST', path: '/coins/credit', description: 'Credit coins' },
        { method: 'POST', path: '/coins/debit', description: 'Debit coins' },
        { method: 'GET', path: '/coins/transactions', description: 'Transaction history' }
      ]
    },
    {
      category: 'Webhooks',
      apis: [
        { method: 'GET', path: '/webhooks', description: 'List webhooks' },
        { method: 'POST', path: '/webhooks', description: 'Create webhook' },
        { method: 'DELETE', path: '/webhooks/:id', description: 'Delete webhook' }
      ]
    }
  ];

  const sdks = [
    { name: 'Node.js', version: '2.4.1', downloads: '45K', icon: '🟢' },
    { name: 'Python', version: '2.3.0', downloads: '32K', icon: '🐍' },
    { name: 'PHP', version: '2.2.5', downloads: '28K', icon: '🐘' },
    { name: 'Java', version: '2.1.0', downloads: '18K', icon: '☕' },
    { name: 'Go', version: '1.8.0', downloads: '12K', icon: '🔵' },
    { name: 'Ruby', version: '1.6.0', downloads: '8K', icon: '💎' }
  ];

  const usageStats = {
    totalCalls: 1303018,
    successRate: 99.7,
    avgLatency: 145,
    activeIntegrations: 127
  };

  const getMethodColor = (method) => {
    switch (method) {
      case 'GET': return 'bg-green-500/20 text-green-400';
      case 'POST': return 'bg-blue-500/20 text-blue-400';
      case 'PUT': return 'bg-yellow-500/20 text-yellow-400';
      case 'DELETE': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Code size={24} className="mr-2" />
                Developer Portal
              </h1>
              <p className="text-violet-200 text-sm">API Documentation & SDKs</p>
            </div>
          </div>
        </div>

        {/* Usage Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{(usageStats.totalCalls/1000000).toFixed(1)}M</p>
            <p className="text-xs text-violet-200">API Calls</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{usageStats.successRate}%</p>
            <p className="text-xs text-violet-200">Success</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{usageStats.avgLatency}ms</p>
            <p className="text-xs text-violet-200">Latency</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{usageStats.activeIntegrations}</p>
            <p className="text-xs text-violet-200">Partners</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-800 border-b border-gray-700 overflow-x-auto">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'keys', label: 'API Keys' },
          { id: 'docs', label: 'Endpoints' },
          { id: 'sdks', label: 'SDKs' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-shrink-0 px-6 py-3 text-sm font-medium ${
              activeTab === tab.id
                ? 'text-violet-400 border-b-2 border-violet-400'
                : 'text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Quick Start */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-bold mb-3 flex items-center">
                <Zap size={20} className="mr-2 text-yellow-400" />
                Quick Start
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <p className="text-gray-400"># Install SDK</p>
                <p className="text-green-400">npm install @rez/sdk</p>
                <p className="text-gray-400 mt-3"># Initialize</p>
                <p className="text-blue-400">const rez = require('@rez/sdk')('YOUR_API_KEY');</p>
                <p className="text-gray-400 mt-3"># Make a request</p>
                <p className="text-purple-400">const merchants = await rez.merchants.list();</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-800 rounded-xl p-4">
                <Database size={24} className="text-blue-400 mb-2" />
                <h4 className="text-white font-medium">REST API</h4>
                <p className="text-gray-400 text-sm">Full RESTful API with JSON responses</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <Shield size={24} className="text-green-400 mb-2" />
                <h4 className="text-white font-medium">OAuth 2.0</h4>
                <p className="text-gray-400 text-sm">Secure authentication</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <Globe size={24} className="text-purple-400 mb-2" />
                <h4 className="text-white font-medium">Webhooks</h4>
                <p className="text-gray-400 text-sm">Real-time event notifications</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <Clock size={24} className="text-orange-400 mb-2" />
                <h4 className="text-white font-medium">Rate Limits</h4>
                <p className="text-gray-400 text-sm">1000 req/min per key</p>
              </div>
            </div>

            {/* Base URLs */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-bold mb-3">Base URLs</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div>
                    <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded mr-2">LIVE</span>
                    <span className="text-white font-mono">https://api.rez.app/v1</span>
                  </div>
                  <button onClick={() => copyToClipboard('https://api.rez.app/v1')} className="text-gray-400">
                    <Copy size={16} />
                  </button>
                </div>
                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div>
                    <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded mr-2">TEST</span>
                    <span className="text-white font-mono">https://sandbox.rez.app/v1</span>
                  </div>
                  <button onClick={() => copyToClipboard('https://sandbox.rez.app/v1')} className="text-gray-400">
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'keys' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-bold">API Keys</h3>
              <button
                onClick={() => setShowCreateKey(true)}
                className="bg-violet-600 text-white px-4 py-2 rounded-lg text-sm flex items-center"
              >
                <Plus size={16} className="mr-1" />
                Create Key
              </button>
            </div>

            <div className="space-y-3">
              {apiKeys.map(key => (
                <div key={key.id} className="bg-gray-800 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center">
                        <p className="text-white font-bold">{key.name}</p>
                        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                          key.type === 'live' ? 'bg-green-500/20 text-green-400' :
                          key.type === 'test' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {key.type}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">Created: {key.created}</p>
                    </div>
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
                      {key.status}
                    </span>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-3 flex items-center justify-between mb-3">
                    <code className="text-gray-300 text-sm font-mono">
                      {showKey[key.id] ? key.key : '••••••••••••••••••••••••'}
                    </code>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setShowKey({...showKey, [key.id]: !showKey[key.id]})}
                        className="text-gray-400"
                      >
                        {showKey[key.id] ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                      <button onClick={() => copyToClipboard(key.key)} className="text-gray-400">
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4 text-gray-400">
                      <span>Last used: {key.lastUsed}</span>
                      <span>{key.calls.toLocaleString()} calls</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-400 text-sm">Edit</button>
                      <button className="text-red-400 text-sm">Revoke</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'docs' && (
          <div className="space-y-4">
            {endpoints.map((category, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl overflow-hidden">
                <div className="bg-gray-700/50 px-4 py-3">
                  <h3 className="text-white font-bold">{category.category}</h3>
                </div>
                <div className="divide-y divide-gray-700">
                  {category.apis.map((api, apiIdx) => (
                    <div key={apiIdx} className="p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className={`px-2 py-1 rounded text-xs font-mono font-bold mr-3 ${getMethodColor(api.method)}`}>
                          {api.method}
                        </span>
                        <div>
                          <code className="text-white font-mono text-sm">{api.path}</code>
                          <p className="text-gray-400 text-xs">{api.description}</p>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'sdks' && (
          <div className="space-y-4">
            <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4 mb-4">
              <h3 className="text-violet-400 font-bold mb-1">Official SDKs</h3>
              <p className="text-gray-300 text-sm">
                Use our official SDKs to integrate ReZ APIs quickly and reliably
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {sdks.map((sdk, idx) => (
                <div key={idx} className="bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{sdk.icon}</span>
                    <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                      v{sdk.version}
                    </span>
                  </div>
                  <h4 className="text-white font-bold">{sdk.name}</h4>
                  <p className="text-gray-400 text-sm">{sdk.downloads} downloads</p>
                  <button className="mt-3 w-full bg-violet-600 text-white py-2 rounded-lg text-sm">
                    Install
                  </button>
                </div>
              ))}
            </div>

            {/* Sample Code */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-bold mb-3">Sample Integration</h3>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
{`// Node.js Example
const Rez = require('@rez/sdk');
const rez = new Rez('your_api_key');

// Create an order
const order = await rez.orders.create({
  merchant_id: 'merch_123',
  amount: 1500,
  currency: 'INR',
  customer: {
    name: 'John Doe',
    phone: '+919876543210'
  },
  items: [
    { name: 'Burger', qty: 2, price: 750 }
  ]
});

// Credit coins on completion
await rez.coins.credit({
  user_id: order.customer_id,
  amount: 150,
  reason: 'order_completion'
});`}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create Key Modal */}
      {showCreateKey && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-white text-xl font-bold mb-4">Create API Key</h3>

            <div className="mb-4">
              <label className="text-gray-400 text-sm mb-2 block">Key Name</label>
              <input
                type="text"
                placeholder="e.g., Production API Key"
                className="w-full bg-gray-700 text-white p-3 rounded-xl"
              />
            </div>

            <div className="mb-4">
              <label className="text-gray-400 text-sm mb-2 block">Environment</label>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-green-600 text-white p-3 rounded-xl">
                  Live
                </button>
                <button className="bg-gray-700 text-gray-300 p-3 rounded-xl">
                  Sandbox
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-2 block">Permissions</label>
              <div className="space-y-2">
                {['Read', 'Write', 'Admin'].map(perm => (
                  <label key={perm} className="flex items-center bg-gray-700 p-3 rounded-lg">
                    <input type="checkbox" className="mr-3" />
                    <span className="text-white">{perm}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowCreateKey(false)}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
              >
                Cancel
              </button>
              <button className="flex-1 bg-violet-600 text-white py-3 rounded-xl font-bold">
                Create Key
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDeveloperPortal;
