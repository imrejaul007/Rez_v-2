import React, { useState } from 'react';
import {
  Globe, Key, Shield, Clock, Activity, AlertTriangle, CheckCircle,
  Plus, Search, Filter, Copy, Eye, EyeOff, Trash2, Edit2, RefreshCw,
  TrendingUp, BarChart2, Lock, Unlock, ChevronRight, Settings,
  Zap, Users, Server, ArrowUpRight, ArrowDownRight, Terminal
} from 'lucide-react';

const RabtulAPIGateway = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showApiKey, setShowApiKey] = useState({});

  // API Gateway stats
  const gatewayStats = {
    totalRequests: 145678901,
    successRate: 99.97,
    avgLatency: 25,
    peakRPS: 45678,
    currentRPS: 12345,
    activeClients: 8,
    rateLimitHits: 1234,
    blockedRequests: 567
  };

  // API endpoints
  const apiEndpoints = [
    {
      group: 'Auth Service',
      prefix: '/api/v1/auth',
      endpoints: [
        { method: 'POST', path: '/login', calls: 2345678, latency: 45, status: 'active' },
        { method: 'POST', path: '/register', calls: 567890, latency: 85, status: 'active' },
        { method: 'POST', path: '/refresh', calls: 1234567, latency: 35, status: 'active' },
        { method: 'POST', path: '/logout', calls: 234567, latency: 25, status: 'active' },
        { method: 'GET', path: '/verify', calls: 3456789, latency: 30, status: 'active' }
      ]
    },
    {
      group: 'Coin Service',
      prefix: '/api/v1/coins',
      endpoints: [
        { method: 'GET', path: '/balance', calls: 5678901, latency: 25, status: 'active' },
        { method: 'POST', path: '/earn', calls: 2345678, latency: 45, status: 'active' },
        { method: 'POST', path: '/redeem', calls: 890123, latency: 55, status: 'active' },
        { method: 'GET', path: '/history', calls: 1234567, latency: 85, status: 'active' },
        { method: 'POST', path: '/transfer', calls: 234567, latency: 120, status: 'active' }
      ]
    },
    {
      group: 'Payment Service',
      prefix: '/api/v1/payments',
      endpoints: [
        { method: 'POST', path: '/initiate', calls: 1234567, latency: 150, status: 'active' },
        { method: 'POST', path: '/verify', calls: 1234567, latency: 85, status: 'active' },
        { method: 'GET', path: '/status/:id', calls: 2345678, latency: 45, status: 'active' },
        { method: 'POST', path: '/refund', calls: 45678, latency: 180, status: 'active' }
      ]
    },
    {
      group: 'Merchant Service',
      prefix: '/api/v1/merchant',
      endpoints: [
        { method: 'GET', path: '/profile', calls: 890123, latency: 35, status: 'active' },
        { method: 'GET', path: '/orders', calls: 3456789, latency: 65, status: 'active' },
        { method: 'POST', path: '/pos/transaction', calls: 2345678, latency: 95, status: 'active' },
        { method: 'GET', path: '/inventory', calls: 1234567, latency: 55, status: 'active' },
        { method: 'GET', path: '/analytics', calls: 567890, latency: 250, status: 'active' }
      ]
    },
    {
      group: 'User Service',
      prefix: '/api/v1/user',
      endpoints: [
        { method: 'GET', path: '/profile', calls: 4567890, latency: 30, status: 'active' },
        { method: 'GET', path: '/offers', calls: 8901234, latency: 75, status: 'active' },
        { method: 'GET', path: '/orders', calls: 2345678, latency: 65, status: 'active' },
        { method: 'POST', path: '/review', calls: 456789, latency: 85, status: 'active' }
      ]
    }
  ];

  // API clients (connected apps)
  const apiClients = [
    {
      id: 1,
      name: 'ReZ Mobile App',
      clientId: 'rez_mobile_prod_xxxxx',
      apiKey: 'sk_live_xxxxxxxxxxxxxxxxx',
      status: 'active',
      requests: 45000000,
      rateLimit: 10000,
      lastActive: '2 mins ago'
    },
    {
      id: 2,
      name: 'BizOne Merchant App',
      clientId: 'bizone_prod_xxxxx',
      apiKey: 'sk_live_yyyyyyyyyyyyyyyyy',
      status: 'active',
      requests: 32000000,
      rateLimit: 5000,
      lastActive: '1 min ago'
    },
    {
      id: 3,
      name: 'AI-R Discovery',
      clientId: 'air_prod_xxxxx',
      apiKey: 'sk_live_zzzzzzzzzzzzzzzzz',
      status: 'active',
      requests: 18000000,
      rateLimit: 3000,
      lastActive: '5 mins ago'
    },
    {
      id: 4,
      name: 'Dinezy Food',
      clientId: 'dinezy_prod_xxxxx',
      apiKey: 'sk_live_aaaaaaaaaaaaaaaa',
      status: 'active',
      requests: 15000000,
      rateLimit: 3000,
      lastActive: '3 mins ago'
    },
    {
      id: 5,
      name: 'External Partner API',
      clientId: 'partner_sandbox_xxxxx',
      apiKey: 'sk_test_bbbbbbbbbbbbbbbb',
      status: 'sandbox',
      requests: 125000,
      rateLimit: 100,
      lastActive: '1 hour ago'
    }
  ];

  // Rate limiting rules
  const rateLimitRules = [
    { name: 'Default', limit: 1000, window: '1 minute', applies: 'All endpoints' },
    { name: 'Auth Endpoints', limit: 100, window: '1 minute', applies: '/api/v1/auth/*' },
    { name: 'Payment Endpoints', limit: 500, window: '1 minute', applies: '/api/v1/payments/*' },
    { name: 'High Traffic', limit: 5000, window: '1 minute', applies: 'Verified partners' }
  ];

  const formatNumber = (num) => {
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`;
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toLocaleString();
  };

  const getMethodColor = (method) => {
    switch (method) {
      case 'GET': return 'bg-green-500/20 text-green-400';
      case 'POST': return 'bg-blue-500/20 text-blue-400';
      case 'PUT': return 'bg-amber-500/20 text-amber-400';
      case 'DELETE': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart2 },
    { id: 'endpoints', label: 'Endpoints', icon: Globe },
    { id: 'clients', label: 'API Clients', icon: Key },
    { id: 'rate-limits', label: 'Rate Limits', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 border-b border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Globe size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">API Gateway</h1>
              <p className="text-gray-400 text-sm">Unified API entry point for RTMN ecosystem</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-600">
              <Terminal size={18} />
              API Docs
            </button>
            <button className="bg-purple-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-500">
              <Plus size={18} />
              New Client
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Total Requests</span>
              <Activity size={18} className="text-cyan-400" />
            </div>
            <p className="text-2xl font-bold text-cyan-400">{formatNumber(gatewayStats.totalRequests)}</p>
            <p className="text-xs text-green-400 flex items-center gap-1">
              <ArrowUpRight size={12} /> +18.5% vs yesterday
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Success Rate</span>
              <CheckCircle size={18} className="text-green-400" />
            </div>
            <p className="text-2xl font-bold text-green-400">{gatewayStats.successRate}%</p>
            <p className="text-xs text-gray-500">Last 24 hours</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Avg Latency</span>
              <Clock size={18} className="text-purple-400" />
            </div>
            <p className="text-2xl font-bold text-purple-400">{gatewayStats.avgLatency}ms</p>
            <p className="text-xs text-gray-500">P95 response</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Current RPS</span>
              <Zap size={18} className="text-amber-400" />
            </div>
            <p className="text-2xl font-bold text-amber-400">{formatNumber(gatewayStats.currentRPS)}</p>
            <p className="text-xs text-gray-500">Peak: {formatNumber(gatewayStats.peakRPS)}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="flex">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors
                ${activeTab === tab.id
                  ? 'border-purple-500 text-purple-400'
                  : 'border-transparent text-gray-400 hover:text-white'}`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Traffic Chart Placeholder */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">API Traffic (Last 24 Hours)</h3>
              <div className="h-48 flex items-end justify-between gap-1">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-purple-600 to-cyan-500 rounded-t"
                    style={{ height: `${Math.random() * 80 + 20}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>Now</span>
              </div>
            </div>

            {/* Top Endpoints */}
            <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Top Endpoints by Traffic</h3>
              <div className="space-y-3">
                {apiEndpoints.flatMap(g => g.endpoints).sort((a, b) => b.calls - a.calls).slice(0, 5).map((ep, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-900 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-1 rounded text-xs font-mono ${getMethodColor(ep.method)}`}>
                        {ep.method}
                      </span>
                      <span className="font-mono text-sm">{ep.path}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="font-medium text-cyan-400">{formatNumber(ep.calls)}</p>
                        <p className="text-xs text-gray-500">requests</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{ep.latency}ms</p>
                        <p className="text-xs text-gray-500">avg latency</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Endpoints Tab */}
        {activeTab === 'endpoints' && (
          <div className="space-y-6">
            {apiEndpoints.map((group, idx) => (
              <div key={idx} className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">{group.group}</h3>
                    <p className="text-sm text-gray-500 font-mono">{group.prefix}</p>
                  </div>
                  <span className="text-cyan-400 text-sm">{group.endpoints.length} endpoints</span>
                </div>
                <div className="space-y-2">
                  {group.endpoints.map((ep, epIdx) => (
                    <div key={epIdx} className="flex items-center justify-between p-3 bg-gray-900 rounded-lg hover:bg-gray-850 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-1 rounded text-xs font-mono ${getMethodColor(ep.method)}`}>
                          {ep.method}
                        </span>
                        <span className="font-mono text-sm text-gray-300">{group.prefix}{ep.path}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-400">{formatNumber(ep.calls)} calls</span>
                        <span className="text-sm text-gray-400">{ep.latency}ms</span>
                        <span className="w-2 h-2 bg-green-400 rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* API Clients Tab */}
        {activeTab === 'clients' && (
          <div className="space-y-4">
            {apiClients.map(client => (
              <div key={client.id} className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                      <Key size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{client.name}</h3>
                      <p className="text-xs text-gray-500 font-mono">{client.clientId}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium
                    ${client.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                    {client.status}
                  </span>
                </div>

                <div className="bg-gray-900 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">API Key</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm">
                        {showApiKey[client.id] ? client.apiKey : '••••••••••••••••••••'}
                      </span>
                      <button
                        onClick={() => setShowApiKey({ ...showApiKey, [client.id]: !showApiKey[client.id] })}
                        className="p-1 hover:bg-gray-700 rounded"
                      >
                        {showApiKey[client.id] ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                      <button className="p-1 hover:bg-gray-700 rounded">
                        <Copy size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Total Requests</p>
                    <p className="font-semibold text-cyan-400">{formatNumber(client.requests)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Rate Limit</p>
                    <p className="font-semibold">{formatNumber(client.rateLimit)}/min</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Last Active</p>
                    <p className="font-semibold text-green-400">{client.lastActive}</p>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 mt-4 pt-4 border-t border-gray-700">
                  <button className="px-3 py-1 text-sm text-gray-400 hover:bg-gray-700 rounded-lg">
                    <RefreshCw size={14} className="inline mr-1" />
                    Rotate Key
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-400 hover:bg-gray-700 rounded-lg">
                    <Settings size={14} className="inline mr-1" />
                    Settings
                  </button>
                  <button className="px-3 py-1 text-sm text-red-400 hover:bg-red-500/20 rounded-lg">
                    <Trash2 size={14} className="inline mr-1" />
                    Revoke
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Rate Limits Tab */}
        {activeTab === 'rate-limits' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Rate Limiting Rules</h3>
                <button className="bg-purple-600 px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                  <Plus size={14} />
                  Add Rule
                </button>
              </div>
              <div className="space-y-3">
                {rateLimitRules.map((rule, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-900 rounded-xl">
                    <div>
                      <p className="font-medium">{rule.name}</p>
                      <p className="text-sm text-gray-500">Applies to: {rule.applies}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="font-semibold text-cyan-400">{formatNumber(rule.limit)}</p>
                        <p className="text-xs text-gray-500">per {rule.window}</p>
                      </div>
                      <button className="p-2 hover:bg-gray-700 rounded-lg">
                        <Edit2 size={16} className="text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rate Limit Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
                <h4 className="font-semibold mb-3">Rate Limit Hits (24h)</h4>
                <p className="text-3xl font-bold text-amber-400">{formatNumber(gatewayStats.rateLimitHits)}</p>
                <p className="text-sm text-gray-500 mt-1">Requests throttled</p>
              </div>
              <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
                <h4 className="font-semibold mb-3">Blocked Requests (24h)</h4>
                <p className="text-3xl font-bold text-red-400">{formatNumber(gatewayStats.blockedRequests)}</p>
                <p className="text-sm text-gray-500 mt-1">Security blocks</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RabtulAPIGateway;
