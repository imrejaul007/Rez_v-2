import React, { useState } from 'react';
import {
  ArrowLeft, Gauge, Shield, AlertTriangle, TrendingUp,
  Clock, Users, Settings, ChevronRight, RefreshCw,
  CheckCircle, XCircle, Zap, Activity, Lock, Unlock,
  Plus, Edit2, Trash2, Eye, Filter, Search, Download
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminAPIQuotas = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const stats = {
    totalRequests: 12500000,
    requestsToday: 456789,
    avgResponseTime: 45,
    errorRate: 0.12,
    activeClients: 234,
    rateLimited: 12
  };

  const quotaPlans = [
    {
      id: 1,
      name: 'Free Tier',
      requestsPerMinute: 60,
      requestsPerDay: 1000,
      burstLimit: 10,
      clients: 156,
      color: 'gray'
    },
    {
      id: 2,
      name: 'Basic',
      requestsPerMinute: 300,
      requestsPerDay: 10000,
      burstLimit: 50,
      clients: 89,
      color: 'blue'
    },
    {
      id: 3,
      name: 'Pro',
      requestsPerMinute: 1000,
      requestsPerDay: 100000,
      burstLimit: 200,
      clients: 45,
      color: 'purple'
    },
    {
      id: 4,
      name: 'Enterprise',
      requestsPerMinute: 5000,
      requestsPerDay: 1000000,
      burstLimit: 1000,
      clients: 12,
      color: 'gold'
    }
  ];

  const apiClients = [
    {
      id: 1,
      name: 'Swiggy Integration',
      apiKey: 'sk_live_sw***************',
      plan: 'Enterprise',
      requestsToday: 45678,
      quotaUsed: 4.5,
      status: 'healthy',
      lastRequest: '2 seconds ago'
    },
    {
      id: 2,
      name: 'Zomato Sync',
      apiKey: 'sk_live_zm***************',
      plan: 'Pro',
      requestsToday: 23456,
      quotaUsed: 23.4,
      status: 'healthy',
      lastRequest: '5 seconds ago'
    },
    {
      id: 3,
      name: 'POS Terminal App',
      apiKey: 'sk_live_pos**************',
      plan: 'Basic',
      requestsToday: 8934,
      quotaUsed: 89.3,
      status: 'warning',
      lastRequest: '1 minute ago'
    },
    {
      id: 4,
      name: 'Third Party Analytics',
      apiKey: 'sk_live_an***************',
      plan: 'Free Tier',
      requestsToday: 1000,
      quotaUsed: 100,
      status: 'rate_limited',
      lastRequest: '3 minutes ago'
    },
    {
      id: 5,
      name: 'Mobile App',
      apiKey: 'sk_live_mb***************',
      plan: 'Pro',
      requestsToday: 34567,
      quotaUsed: 34.5,
      status: 'healthy',
      lastRequest: '10 seconds ago'
    }
  ];

  const rateLimitEvents = [
    {
      id: 1,
      client: 'Third Party Analytics',
      endpoint: '/api/v1/orders',
      time: '10 minutes ago',
      reason: 'Daily quota exceeded',
      requests: 1234
    },
    {
      id: 2,
      client: 'Unknown Client',
      endpoint: '/api/v1/products',
      time: '25 minutes ago',
      reason: 'Invalid API key',
      requests: 567
    },
    {
      id: 3,
      client: 'POS Terminal App',
      endpoint: '/api/v1/inventory',
      time: '1 hour ago',
      reason: 'Burst limit exceeded',
      requests: 89
    }
  ];

  const endpointStats = [
    { endpoint: '/api/v1/orders', requests: 234567, avgTime: 45, errorRate: 0.1 },
    { endpoint: '/api/v1/products', requests: 156789, avgTime: 32, errorRate: 0.05 },
    { endpoint: '/api/v1/inventory', requests: 89456, avgTime: 28, errorRate: 0.08 },
    { endpoint: '/api/v1/customers', requests: 67890, avgTime: 35, errorRate: 0.12 },
    { endpoint: '/api/v1/payments', requests: 45678, avgTime: 120, errorRate: 0.2 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-500/20 text-green-400';
      case 'warning':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'rate_limited':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getQuotaColor = (used) => {
    if (used >= 90) return 'bg-red-500';
    if (used >= 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Gauge size={24} className="mr-2" />
                API Rate Limiting
              </h1>
              <p className="text-orange-200 text-sm">Quota management & enforcement</p>
            </div>
          </div>
          <button
            onClick={() => setShowPlanModal(true)}
            className="bg-white/20 px-3 py-1.5 rounded-lg text-sm flex items-center"
          >
            <Plus size={16} className="mr-1" />
            New Plan
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{(stats.requestsToday/1000).toFixed(0)}K</p>
            <p className="text-xs text-orange-200">Today</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.avgResponseTime}ms</p>
            <p className="text-xs text-orange-200">Avg Time</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-red-300">{stats.rateLimited}</p>
            <p className="text-xs text-orange-200">Throttled</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'clients', label: 'Clients' },
            { id: 'plans', label: 'Plans' },
            { id: 'events', label: 'Events' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id ? 'bg-orange-600 text-white' : 'text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="px-4 space-y-4">
          {/* Rate Limiting Status */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield size={24} className="text-green-400 mr-3" />
                <div>
                  <p className="text-green-400 font-medium">Rate Limiting Active</p>
                  <p className="text-gray-300 text-sm">All endpoints protected</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">ON</span>
                <div className="w-12 h-6 bg-green-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Metrics */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3 flex items-center">
              <Activity size={18} className="mr-2" />
              Real-time Metrics
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-700/50 rounded-lg p-3">
                <p className="text-gray-400 text-xs">Requests/sec</p>
                <p className="text-white font-bold text-xl">~156</p>
                <div className="flex items-center text-green-400 text-xs mt-1">
                  <TrendingUp size={12} className="mr-1" />
                  +12% from avg
                </div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-3">
                <p className="text-gray-400 text-xs">Active Connections</p>
                <p className="text-white font-bold text-xl">234</p>
                <div className="text-gray-400 text-xs mt-1">
                  Across all clients
                </div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-3">
                <p className="text-gray-400 text-xs">Error Rate</p>
                <p className="text-green-400 font-bold text-xl">{stats.errorRate}%</p>
                <div className="text-gray-400 text-xs mt-1">
                  Below threshold
                </div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-3">
                <p className="text-gray-400 text-xs">P99 Latency</p>
                <p className="text-white font-bold text-xl">125ms</p>
                <div className="text-yellow-400 text-xs mt-1">
                  Slightly elevated
                </div>
              </div>
            </div>
          </div>

          {/* Top Endpoints */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Top Endpoints</h3>
            <div className="space-y-3">
              {endpointStats.slice(0, 5).map((ep, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex-1">
                    <code className="text-orange-400 text-sm">{ep.endpoint}</code>
                    <div className="flex items-center text-gray-400 text-xs mt-1">
                      <span>{(ep.requests/1000).toFixed(0)}K req</span>
                      <span className="mx-2">•</span>
                      <span>{ep.avgTime}ms avg</span>
                      <span className="mx-2">•</span>
                      <span className={ep.errorRate > 0.1 ? 'text-red-400' : ''}>{ep.errorRate}% err</span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Global Settings */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Global Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white">Emergency Kill Switch</p>
                  <p className="text-gray-400 text-xs">Block all API requests</p>
                </div>
                <div className="w-12 h-6 bg-gray-600 rounded-full relative">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white">Auto-ban on abuse</p>
                  <p className="text-gray-400 text-xs">Temporary block after violations</p>
                </div>
                <div className="w-12 h-6 bg-orange-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white">Slack Alerts</p>
                  <p className="text-gray-400 text-xs">Notify on rate limit events</p>
                </div>
                <div className="w-12 h-6 bg-orange-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Clients Tab */}
      {activeTab === 'clients' && (
        <div className="px-4 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search API clients..."
              className="w-full bg-gray-800 rounded-xl pl-10 pr-4 py-3 text-white"
            />
          </div>

          {apiClients.map(client => (
            <div key={client.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-white font-bold">{client.name}</h3>
                  <code className="text-gray-400 text-xs">{client.apiKey}</code>
                </div>
                <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(client.status)}`}>
                  {client.status.replace('_', ' ')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className="text-gray-400 text-xs">Plan</p>
                  <p className="text-white font-medium">{client.plan}</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className="text-gray-400 text-xs">Requests Today</p>
                  <p className="text-white font-medium">{client.requestsToday.toLocaleString()}</p>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Quota Usage</span>
                  <span className={client.quotaUsed >= 90 ? 'text-red-400' : 'text-white'}>
                    {client.quotaUsed}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getQuotaColor(client.quotaUsed)}`}
                    style={{ width: `${Math.min(client.quotaUsed, 100)}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-gray-400">Last request: {client.lastRequest}</span>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                  <Eye size={14} className="mr-1" />
                  View Logs
                </button>
                <button className="flex-1 bg-orange-600 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                  <Settings size={14} className="mr-1" />
                  Configure
                </button>
                {client.status === 'rate_limited' && (
                  <button className="p-2 bg-green-600 rounded-lg">
                    <Unlock size={16} className="text-white" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Plans Tab */}
      {activeTab === 'plans' && (
        <div className="px-4 space-y-4">
          {quotaPlans.map(plan => (
            <div key={plan.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-white font-bold text-lg">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.clients} clients using this plan</p>
                </div>
                <button className="text-gray-400">
                  <Edit2 size={18} />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-bold">{plan.requestsPerMinute}</p>
                  <p className="text-gray-400 text-xs">req/min</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-bold">{(plan.requestsPerDay/1000)}K</p>
                  <p className="text-gray-400 text-xs">req/day</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-white font-bold">{plan.burstLimit}</p>
                  <p className="text-gray-400 text-xs">burst</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm">
                  View Clients
                </button>
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm">
                  Edit Limits
                </button>
              </div>
            </div>
          ))}

          {/* Rate Limit Info */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
            <h4 className="text-orange-400 font-medium mb-2">Rate Limiting Algorithm</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Token Bucket with sliding window</li>
              <li>• Burst allowance for short spikes</li>
              <li>• Gradual backoff on violations</li>
              <li>• IP-based + API key based limiting</li>
            </ul>
          </div>
        </div>
      )}

      {/* Events Tab */}
      {activeTab === 'events' && (
        <div className="px-4 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">Recent rate limit events</p>
            <button className="text-orange-400 text-sm flex items-center">
              <Download size={14} className="mr-1" />
              Export
            </button>
          </div>

          {rateLimitEvents.map(event => (
            <div key={event.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-white font-medium">{event.client}</h4>
                  <code className="text-orange-400 text-sm">{event.endpoint}</code>
                </div>
                <span className="text-gray-400 text-xs">{event.time}</span>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-2 mb-2">
                <div className="flex items-center">
                  <AlertTriangle size={14} className="text-red-400 mr-2" />
                  <span className="text-red-400 text-sm">{event.reason}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">
                  {event.requests} requests blocked
                </span>
                <button className="text-orange-400">View Details</button>
              </div>
            </div>
          ))}

          {rateLimitEvents.length === 0 && (
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
              <p className="text-white font-medium">No rate limit events</p>
              <p className="text-gray-400 text-sm">All clients within their quotas</p>
            </div>
          )}
        </div>
      )}

      {/* New Plan Modal */}
      {showPlanModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="bg-gray-800 w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <h3 className="text-white font-bold text-lg mb-4">Create Quota Plan</h3>

            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm block mb-1">Plan Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                  placeholder="e.g., Premium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-400 text-sm block mb-1">Requests/Minute</label>
                  <input
                    type="number"
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                    placeholder="100"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm block mb-1">Requests/Day</label>
                  <input
                    type="number"
                    className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                    placeholder="10000"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Burst Limit</label>
                <input
                  type="number"
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                  placeholder="50"
                />
                <p className="text-gray-500 text-xs mt-1">Max concurrent requests allowed</p>
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Rate Limit Response</label>
                <select className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white">
                  <option>429 Too Many Requests</option>
                  <option>503 Service Unavailable</option>
                  <option>Custom Response</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-300">Include retry-after header</span>
                <div className="w-12 h-6 bg-orange-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowPlanModal(false)}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
              >
                Cancel
              </button>
              <button className="flex-1 bg-orange-600 text-white py-3 rounded-xl font-bold">
                Create Plan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAPIQuotas;
