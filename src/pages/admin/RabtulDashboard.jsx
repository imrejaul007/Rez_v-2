import React, { useState } from 'react';
import {
  Server, Database, Cloud, Shield, Zap, Activity, AlertTriangle, CheckCircle,
  Globe, Lock, Key, RefreshCw, Cpu, HardDrive, Wifi, Clock, Users, Coins,
  Bell, CreditCard, TrendingUp, BarChart2, Settings, ChevronRight,
  GitBranch, Box, Layers, Terminal, Eye, Play, Pause, ArrowUpRight
} from 'lucide-react';

const RabtulDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // System health metrics
  const systemHealth = {
    overall: 99.97,
    services: {
      auth: { status: 'healthy', uptime: 99.99, latency: 45 },
      payments: { status: 'healthy', uptime: 99.98, latency: 120 },
      coins: { status: 'healthy', uptime: 99.99, latency: 35 },
      notifications: { status: 'healthy', uptime: 99.95, latency: 85 },
      ai: { status: 'healthy', uptime: 99.92, latency: 250 },
      fraud: { status: 'warning', uptime: 99.87, latency: 180 },
      api_gateway: { status: 'healthy', uptime: 99.99, latency: 25 }
    }
  };

  // Core services
  const coreServices = [
    {
      id: 'auth',
      name: 'Auth Service',
      description: 'Identity & Access Management',
      icon: Lock,
      status: 'running',
      requests: 12456789,
      avgLatency: 45,
      errorRate: 0.01,
      instances: 8
    },
    {
      id: 'payments',
      name: 'Payment Service',
      description: 'UPI, Cards, Wallets',
      icon: CreditCard,
      status: 'running',
      requests: 3456789,
      avgLatency: 120,
      errorRate: 0.02,
      instances: 12
    },
    {
      id: 'coins',
      name: 'Coin Ledger',
      description: 'ReZ Coin Economy',
      icon: Coins,
      status: 'running',
      requests: 8901234,
      avgLatency: 35,
      errorRate: 0.005,
      instances: 6
    },
    {
      id: 'notifications',
      name: 'Notification Hub',
      description: 'Push, SMS, Email, WhatsApp',
      icon: Bell,
      status: 'running',
      requests: 5678901,
      avgLatency: 85,
      errorRate: 0.03,
      instances: 4
    },
    {
      id: 'ai',
      name: 'AIRA Engine',
      description: 'AI Personalization & Predictions',
      icon: Zap,
      status: 'running',
      requests: 2345678,
      avgLatency: 250,
      errorRate: 0.05,
      instances: 16
    },
    {
      id: 'fraud',
      name: 'Fraud Detection',
      description: 'Real-time ML Fraud Scoring',
      icon: Shield,
      status: 'warning',
      requests: 1234567,
      avgLatency: 180,
      errorRate: 0.08,
      instances: 8
    },
    {
      id: 'api_gateway',
      name: 'API Gateway',
      description: 'Unified API Entry Point',
      icon: Globe,
      status: 'running',
      requests: 45678901,
      avgLatency: 25,
      errorRate: 0.001,
      instances: 20
    },
    {
      id: 'data_lake',
      name: 'Data Lake',
      description: 'Cross-ecosystem Analytics',
      icon: Database,
      status: 'running',
      requests: 890123,
      avgLatency: 450,
      errorRate: 0.01,
      instances: 4
    }
  ];

  // API stats
  const apiStats = {
    totalRequests: 145678901,
    successRate: 99.97,
    avgLatency: 78,
    activeConnections: 234567,
    rateLimitHits: 1234,
    uniqueClients: 45678
  };

  // Connected apps
  const connectedApps = [
    { name: 'ReZ', requests: 45000000, status: 'active' },
    { name: 'BizOne', requests: 32000000, status: 'active' },
    { name: 'AI-R', requests: 18000000, status: 'active' },
    { name: 'BuzzLoop', requests: 12000000, status: 'active' },
    { name: 'CoinHunt', requests: 8000000, status: 'active' },
    { name: 'LocalEdge', requests: 5000000, status: 'active' },
    { name: 'Dinezy', requests: 15000000, status: 'active' },
    { name: 'Grocify', requests: 10000000, status: 'active' }
  ];

  const formatNumber = (num) => {
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`;
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toLocaleString();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'running':
      case 'healthy':
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'warning':
        return 'bg-yellow-100 text-yellow-700';
      case 'error':
      case 'down':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 border-b border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Cloud size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Rabtul Control Center</h1>
              <p className="text-gray-400 text-sm">RTMN Infrastructure Layer</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-green-900/50 text-green-400 px-3 py-1 rounded-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              All Systems Operational
            </div>
            <button className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600">
              <Settings size={20} />
            </button>
          </div>
        </div>

        {/* Health Overview */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">System Health</span>
              <Activity size={18} className="text-green-400" />
            </div>
            <p className="text-3xl font-bold text-green-400">{systemHealth.overall}%</p>
            <p className="text-xs text-gray-500">Uptime last 30 days</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">API Requests</span>
              <Globe size={18} className="text-cyan-400" />
            </div>
            <p className="text-3xl font-bold text-cyan-400">{formatNumber(apiStats.totalRequests)}</p>
            <p className="text-xs text-gray-500">Last 24 hours</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Avg Latency</span>
              <Clock size={18} className="text-purple-400" />
            </div>
            <p className="text-3xl font-bold text-purple-400">{apiStats.avgLatency}ms</p>
            <p className="text-xs text-gray-500">P95 response time</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Connected Apps</span>
              <Layers size={18} className="text-amber-400" />
            </div>
            <p className="text-3xl font-bold text-amber-400">{connectedApps.length}</p>
            <p className="text-xs text-gray-500">RTMN ecosystem apps</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Core Services */}
        <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Core Services</h2>
            <button className="text-cyan-400 text-sm font-medium flex items-center gap-1">
              <RefreshCw size={14} />
              Refresh
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {coreServices.map(service => (
              <div key={service.id} className="bg-gray-900 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                      <service.icon size={20} className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">{service.name}</h3>
                      <p className="text-xs text-gray-500">{service.description}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                    {service.status}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center text-sm">
                  <div>
                    <p className="text-gray-500 text-xs">Requests</p>
                    <p className="font-medium text-cyan-400">{formatNumber(service.requests)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Latency</p>
                    <p className="font-medium">{service.avgLatency}ms</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Error Rate</p>
                    <p className={`font-medium ${service.errorRate > 0.05 ? 'text-yellow-400' : 'text-green-400'}`}>
                      {service.errorRate}%
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Instances</p>
                    <p className="font-medium">{service.instances}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connected Apps */}
        <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Connected RTMN Apps</h2>
            <span className="text-gray-500 text-sm">{formatNumber(apiStats.totalRequests)} total requests</span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {connectedApps.map((app, idx) => (
              <div key={idx} className="bg-gray-900 rounded-xl p-3 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{app.name}</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                </div>
                <p className="text-lg font-bold text-cyan-400">{formatNumber(app.requests)}</p>
                <p className="text-xs text-gray-500">requests/24h</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4">
          <button className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-cyan-500/50 transition-colors text-left">
            <Key size={24} className="text-cyan-400 mb-2" />
            <p className="font-medium">API Keys</p>
            <p className="text-xs text-gray-500">Manage access tokens</p>
          </button>
          <button className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-cyan-500/50 transition-colors text-left">
            <Terminal size={24} className="text-purple-400 mb-2" />
            <p className="font-medium">API Docs</p>
            <p className="text-xs text-gray-500">Developer documentation</p>
          </button>
          <button className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-cyan-500/50 transition-colors text-left">
            <AlertTriangle size={24} className="text-amber-400 mb-2" />
            <p className="font-medium">Alerts</p>
            <p className="text-xs text-gray-500">System notifications</p>
          </button>
          <button className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-cyan-500/50 transition-colors text-left">
            <BarChart2 size={24} className="text-green-400 mb-2" />
            <p className="font-medium">Analytics</p>
            <p className="text-xs text-gray-500">Deep metrics</p>
          </button>
        </div>

        {/* Architecture Overview */}
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl p-6 border border-cyan-500/30">
          <h2 className="text-lg font-semibold mb-4">RTMN Architecture</h2>
          <div className="text-center space-y-4">
            {/* Apps Layer */}
            <div className="bg-gray-800/50 rounded-xl p-3">
              <p className="text-xs text-gray-400 mb-2">Distribution Layer (Apps)</p>
              <div className="flex justify-center gap-2 flex-wrap">
                {connectedApps.map((app, idx) => (
                  <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm">
                    {app.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-gray-500">↓</div>

            {/* API Gateway */}
            <div className="bg-purple-500/20 rounded-xl p-3 border border-purple-500/30">
              <p className="text-purple-400 font-medium">API Gateway</p>
              <p className="text-xs text-gray-400">Unified entry point for all apps</p>
            </div>

            <div className="text-gray-500">↓</div>

            {/* Core Services */}
            <div className="bg-gray-800/50 rounded-xl p-3">
              <p className="text-xs text-gray-400 mb-2">Core Services</p>
              <div className="grid grid-cols-4 gap-2">
                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Auth</span>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Payments</span>
                <span className="px-2 py-1 bg-amber-500/20 text-amber-400 rounded text-xs">Coins</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-400 rounded text-xs">Notifications</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">AIRA (AI)</span>
                <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">Fraud</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">Data Lake</span>
                <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">Cache</span>
              </div>
            </div>

            <div className="text-gray-500">↓</div>

            {/* Data Layer */}
            <div className="bg-gray-800/50 rounded-xl p-3">
              <p className="text-xs text-gray-400 mb-2">Data Layer</p>
              <div className="flex justify-center gap-4">
                <span className="px-3 py-1 bg-gray-700 rounded text-sm flex items-center gap-1">
                  <Database size={14} /> PostgreSQL
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded text-sm flex items-center gap-1">
                  <Database size={14} /> Redis
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded text-sm flex items-center gap-1">
                  <Database size={14} /> Elasticsearch
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RabtulDashboard;
