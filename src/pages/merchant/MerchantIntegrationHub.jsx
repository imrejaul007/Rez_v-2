import React, { useState } from 'react';
import {
  ArrowLeft, Link2, Settings, CheckCircle, XCircle, AlertCircle,
  RefreshCw, Plus, ChevronRight, Zap, Shield, Activity, Clock,
  Globe, Smartphone, CreditCard, Package, Users, FileText,
  Database, Webhook, Key, Lock, TrendingUp, Search
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantIntegrationHub = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('integrations');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const stats = {
    totalIntegrations: 12,
    activeConnections: 10,
    pendingSetup: 2,
    apiCalls24h: 45890,
    webhooksDelivered: 1234,
    healthScore: 98.5
  };

  const categories = [
    { id: 'all', name: 'All', count: 12 },
    { id: 'payments', name: 'Payments', count: 4 },
    { id: 'orders', name: 'Orders', count: 3 },
    { id: 'accounting', name: 'Accounting', count: 2 },
    { id: 'delivery', name: 'Delivery', count: 2 },
    { id: 'marketing', name: 'Marketing', count: 1 }
  ];

  const integrations = [
    // Payments
    {
      id: 'razorpay',
      name: 'Razorpay',
      category: 'payments',
      status: 'active',
      icon: '💳',
      description: 'Payment gateway - UPI, cards, netbanking',
      lastSync: '2 min ago',
      transactions: '₹12.5L today',
      health: 100
    },
    {
      id: 'paytm',
      name: 'Paytm',
      category: 'payments',
      status: 'active',
      icon: '📱',
      description: 'UPI & wallet payments',
      lastSync: '5 min ago',
      transactions: '₹3.2L today',
      health: 98
    },
    {
      id: 'phonepe',
      name: 'PhonePe',
      category: 'payments',
      status: 'active',
      icon: '💜',
      description: 'UPI payments',
      lastSync: '1 min ago',
      transactions: '₹5.8L today',
      health: 100
    },
    {
      id: 'bnpl',
      name: 'RTMN Finance',
      category: 'payments',
      status: 'pending',
      icon: '🏦',
      description: 'BNPL & credit line',
      lastSync: null,
      transactions: null,
      health: 0
    },
    // Orders
    {
      id: 'swiggy',
      name: 'Swiggy',
      category: 'orders',
      status: 'active',
      icon: '🍊',
      description: 'Food delivery aggregator',
      lastSync: '30 sec ago',
      transactions: '156 orders today',
      health: 99
    },
    {
      id: 'zomato',
      name: 'Zomato',
      category: 'orders',
      status: 'active',
      icon: '🔴',
      description: 'Food delivery aggregator',
      lastSync: '45 sec ago',
      transactions: '198 orders today',
      health: 100
    },
    {
      id: 'ondc',
      name: 'ONDC Network',
      category: 'orders',
      status: 'active',
      icon: '🇮🇳',
      description: 'Open network for digital commerce',
      lastSync: '2 min ago',
      transactions: '45 orders today',
      health: 97
    },
    // Accounting
    {
      id: 'tally',
      name: 'Tally Prime',
      category: 'accounting',
      status: 'active',
      icon: '📊',
      description: 'Accounting & GST',
      lastSync: '1 hour ago',
      transactions: '1,245 entries synced',
      health: 100
    },
    {
      id: 'zoho',
      name: 'Zoho Books',
      category: 'accounting',
      status: 'pending',
      icon: '📗',
      description: 'Cloud accounting',
      lastSync: null,
      transactions: null,
      health: 0
    },
    // Delivery
    {
      id: 'dunzo',
      name: 'Dunzo',
      category: 'delivery',
      status: 'active',
      icon: '🚴',
      description: 'Hyperlocal delivery',
      lastSync: '5 min ago',
      transactions: '78 deliveries today',
      health: 95
    },
    {
      id: 'porter',
      name: 'Porter',
      category: 'delivery',
      status: 'active',
      icon: '🚛',
      description: 'Business delivery',
      lastSync: '10 min ago',
      transactions: '12 pickups today',
      health: 100
    },
    // Marketing
    {
      id: 'gmb',
      name: 'Google My Business',
      category: 'marketing',
      status: 'active',
      icon: '🔍',
      description: 'Business listing & reviews',
      lastSync: '30 min ago',
      transactions: '4.5★ (1,234 reviews)',
      health: 100
    }
  ];

  const webhooks = [
    {
      id: 1,
      name: 'Order Created',
      endpoint: 'https://api.example.com/orders/webhook',
      events: ['order.created', 'order.updated'],
      status: 'active',
      successRate: 99.8,
      lastDelivery: '2 min ago'
    },
    {
      id: 2,
      name: 'Payment Received',
      endpoint: 'https://erp.company.com/payments',
      events: ['payment.success', 'payment.failed'],
      status: 'active',
      successRate: 100,
      lastDelivery: '5 min ago'
    },
    {
      id: 3,
      name: 'Inventory Update',
      endpoint: 'https://warehouse.internal/stock',
      events: ['inventory.low', 'inventory.updated'],
      status: 'active',
      successRate: 98.5,
      lastDelivery: '1 hour ago'
    }
  ];

  const apiKeys = [
    {
      id: 1,
      name: 'Production API Key',
      prefix: 'pk_live_****',
      created: '2024-01-01',
      lastUsed: '2 min ago',
      permissions: ['read', 'write'],
      status: 'active'
    },
    {
      id: 2,
      name: 'Test API Key',
      prefix: 'pk_test_****',
      created: '2024-01-15',
      lastUsed: '1 hour ago',
      permissions: ['read', 'write'],
      status: 'active'
    },
    {
      id: 3,
      name: 'Read-Only Key',
      prefix: 'pk_read_****',
      created: '2024-02-01',
      lastUsed: '1 day ago',
      permissions: ['read'],
      status: 'active'
    }
  ];

  const filteredIntegrations = selectedCategory === 'all'
    ? integrations
    : integrations.filter(i => i.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'error': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getHealthColor = (health) => {
    if (health >= 95) return 'text-green-400';
    if (health >= 80) return 'text-yellow-400';
    return 'text-red-400';
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
                <Link2 size={24} className="mr-2" />
                Integration Hub
              </h1>
              <p className="text-violet-200 text-sm">Connect everything to Merchant OS</p>
            </div>
          </div>
          <button className="bg-white/20 p-2 rounded-lg">
            <Plus size={20} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.activeConnections}/{stats.totalIntegrations}</p>
            <p className="text-xs text-violet-200">Active</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{(stats.apiCalls24h/1000).toFixed(1)}K</p>
            <p className="text-xs text-violet-200">API Calls/24h</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-400">{stats.healthScore}%</p>
            <p className="text-xs text-violet-200">Health</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          {[
            { id: 'integrations', label: 'Integrations', icon: Link2 },
            { id: 'webhooks', label: 'Webhooks', icon: Webhook },
            { id: 'api-keys', label: 'API Keys', icon: Key }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium flex items-center justify-center ${
                activeTab === tab.id ? 'bg-violet-600 text-white' : 'text-gray-400'
              }`}
            >
              <tab.icon size={16} className="mr-1" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Integrations Tab */}
      {activeTab === 'integrations' && (
        <div className="px-4">
          {/* Category Filter */}
          <div className="flex overflow-x-auto space-x-2 mb-4 pb-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === cat.id
                    ? 'bg-violet-600 text-white'
                    : 'bg-gray-800 text-gray-400'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Integration Cards */}
          <div className="space-y-3">
            {filteredIntegrations.map(integration => (
              <div key={integration.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-2xl mr-3">
                      {integration.icon}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-white font-bold">{integration.name}</h3>
                        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${getStatusColor(integration.status)}`}>
                          {integration.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{integration.description}</p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>

                {integration.status === 'active' && (
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-400">
                        <Clock size={14} className="inline mr-1" />
                        {integration.lastSync}
                      </span>
                      <span className="text-violet-400">{integration.transactions}</span>
                    </div>
                    <div className="flex items-center">
                      <Activity size={14} className={`mr-1 ${getHealthColor(integration.health)}`} />
                      <span className={getHealthColor(integration.health)}>{integration.health}%</span>
                    </div>
                  </div>
                )}

                {integration.status === 'pending' && (
                  <button className="w-full mt-2 bg-violet-600 text-white py-2 rounded-lg text-sm font-medium">
                    Complete Setup
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Add Integration */}
          <button className="w-full mt-4 bg-gray-800 border-2 border-dashed border-gray-600 rounded-xl p-4 flex items-center justify-center text-gray-400">
            <Plus size={20} className="mr-2" />
            Add New Integration
          </button>
        </div>
      )}

      {/* Webhooks Tab */}
      {activeTab === 'webhooks' && (
        <div className="px-4 space-y-4">
          {/* Info Banner */}
          <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4">
            <div className="flex items-start">
              <Webhook size={20} className="text-violet-400 mr-2 mt-0.5" />
              <div>
                <p className="text-violet-400 font-medium">Real-time Event Streaming</p>
                <p className="text-gray-300 text-sm">
                  Webhooks notify your systems instantly when events occur in Merchant OS
                </p>
              </div>
            </div>
          </div>

          {/* Webhook List */}
          <div className="space-y-3">
            {webhooks.map(webhook => (
              <div key={webhook.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-white font-bold">{webhook.name}</h3>
                      <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${getStatusColor(webhook.status)}`}>
                        {webhook.status}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs font-mono mt-1 truncate max-w-[250px]">
                      {webhook.endpoint}
                    </p>
                  </div>
                  <Settings size={18} className="text-gray-400" />
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {webhook.events.map((event, idx) => (
                    <span key={idx} className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded text-xs">
                      {event}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">
                      <CheckCircle size={14} className="inline mr-1" />
                      {webhook.successRate}% success
                    </span>
                    <span className="text-gray-400">
                      Last: {webhook.lastDelivery}
                    </span>
                  </div>
                  <button className="text-violet-400 text-sm">Test</button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Webhook */}
          <button className="w-full bg-violet-600 text-white py-3 rounded-xl font-bold flex items-center justify-center">
            <Plus size={20} className="mr-2" />
            Create Webhook
          </button>
        </div>
      )}

      {/* API Keys Tab */}
      {activeTab === 'api-keys' && (
        <div className="px-4 space-y-4">
          {/* Security Notice */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
            <div className="flex items-start">
              <Shield size={20} className="text-yellow-400 mr-2 mt-0.5" />
              <div>
                <p className="text-yellow-400 font-medium">Keep Your Keys Secure</p>
                <p className="text-gray-300 text-sm">
                  Never share API keys publicly. Rotate keys regularly.
                </p>
              </div>
            </div>
          </div>

          {/* API Keys List */}
          <div className="space-y-3">
            {apiKeys.map(key => (
              <div key={key.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center">
                      <Key size={16} className="text-violet-400 mr-2" />
                      <h3 className="text-white font-bold">{key.name}</h3>
                    </div>
                    <p className="text-gray-400 font-mono text-sm mt-1">{key.prefix}</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${getStatusColor(key.status)}`}>
                    {key.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {key.permissions.map((perm, idx) => (
                    <span key={idx} className={`px-2 py-0.5 rounded text-xs ${
                      perm === 'write' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {perm}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Created: {key.created}</span>
                  <span>Last used: {key.lastUsed}</span>
                </div>

                <div className="flex space-x-2 mt-3">
                  <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm">
                    Reveal
                  </button>
                  <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm">
                    Rotate
                  </button>
                  <button className="bg-red-600/20 text-red-400 px-4 py-2 rounded-lg text-sm">
                    Revoke
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Create New Key */}
          <button className="w-full bg-violet-600 text-white py-3 rounded-xl font-bold flex items-center justify-center">
            <Plus size={20} className="mr-2" />
            Create New API Key
          </button>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantIntegrationHub;
