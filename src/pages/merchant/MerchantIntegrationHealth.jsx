import React, { useState } from 'react';
import {
  ArrowLeft, Activity, Shield, AlertTriangle, CheckCircle,
  XCircle, Clock, RefreshCw, Settings, Eye, ChevronRight,
  Zap, WifiOff, Wifi, TrendingUp, TrendingDown, Bell,
  Play, Pause, RotateCcw
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantIntegrationHealth = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('health');

  const overallHealth = {
    score: 97.5,
    uptime: '99.98%',
    avgLatency: '85ms',
    activeAlerts: 2,
    circuitBreakersTripped: 1
  };

  const integrations = [
    {
      id: 'razorpay',
      name: 'Razorpay',
      icon: '💳',
      health: 100,
      status: 'healthy',
      latency: '120ms',
      uptime: '99.99%',
      requests: '3.2K/min',
      errorRate: '0.02%',
      circuitBreaker: 'closed',
      lastCheck: '10 sec ago'
    },
    {
      id: 'swiggy',
      name: 'Swiggy',
      icon: '🍊',
      health: 95,
      status: 'degraded',
      latency: '450ms',
      uptime: '99.5%',
      requests: '890/min',
      errorRate: '0.5%',
      circuitBreaker: 'half-open',
      lastCheck: '15 sec ago',
      alert: 'High latency detected'
    },
    {
      id: 'zomato',
      name: 'Zomato',
      icon: '🔴',
      health: 100,
      status: 'healthy',
      latency: '95ms',
      uptime: '99.99%',
      requests: '1.1K/min',
      errorRate: '0.01%',
      circuitBreaker: 'closed',
      lastCheck: '8 sec ago'
    },
    {
      id: 'tally',
      name: 'Tally Prime',
      icon: '📊',
      health: 100,
      status: 'healthy',
      latency: '180ms',
      uptime: '100%',
      requests: '45/min',
      errorRate: '0%',
      circuitBreaker: 'closed',
      lastCheck: '30 sec ago'
    },
    {
      id: 'dunzo',
      name: 'Dunzo',
      icon: '🚴',
      health: 0,
      status: 'down',
      latency: '-',
      uptime: '95%',
      requests: '0/min',
      errorRate: '100%',
      circuitBreaker: 'open',
      lastCheck: '5 sec ago',
      alert: 'Service unavailable - circuit breaker tripped'
    }
  ];

  const alerts = [
    {
      id: 1,
      severity: 'critical',
      integration: 'Dunzo',
      message: 'Service down - Circuit breaker tripped',
      time: '5 min ago',
      acknowledged: false
    },
    {
      id: 2,
      severity: 'warning',
      integration: 'Swiggy',
      message: 'High latency detected (450ms avg)',
      time: '15 min ago',
      acknowledged: false
    },
    {
      id: 3,
      severity: 'info',
      integration: 'Razorpay',
      message: 'API rate limit at 80%',
      time: '1 hour ago',
      acknowledged: true
    }
  ];

  const circuitBreakerStates = [
    { name: 'Razorpay', state: 'closed', failures: 0, threshold: 5 },
    { name: 'Swiggy', state: 'half-open', failures: 3, threshold: 5 },
    { name: 'Zomato', state: 'closed', failures: 0, threshold: 5 },
    { name: 'Dunzo', state: 'open', failures: 5, threshold: 5 },
    { name: 'Tally', state: 'closed', failures: 0, threshold: 5 }
  ];

  const rateLimits = [
    { name: 'Razorpay API', current: 800, limit: 1000, percentage: 80 },
    { name: 'Swiggy Orders', current: 450, limit: 1000, percentage: 45 },
    { name: 'Zomato Orders', current: 550, limit: 1000, percentage: 55 },
    { name: 'Webhook Delivery', current: 120, limit: 500, percentage: 24 }
  ];

  const getHealthColor = (health) => {
    if (health >= 95) return 'text-green-400';
    if (health >= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'healthy':
        return <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full text-xs flex items-center"><CheckCircle size={12} className="mr-1" />Healthy</span>;
      case 'degraded':
        return <span className="bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full text-xs flex items-center"><AlertTriangle size={12} className="mr-1" />Degraded</span>;
      case 'down':
        return <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full text-xs flex items-center"><XCircle size={12} className="mr-1" />Down</span>;
      default:
        return null;
    }
  };

  const getCircuitBreakerColor = (state) => {
    switch (state) {
      case 'closed': return 'bg-green-500/20 text-green-400';
      case 'half-open': return 'bg-yellow-500/20 text-yellow-400';
      case 'open': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'warning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'info': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Activity size={24} className="mr-2" />
                Integration Health
              </h1>
              <p className="text-cyan-200 text-sm">Circuit breakers & monitoring</p>
            </div>
          </div>
          <RefreshCw size={20} />
        </div>

        {/* Health Score */}
        <div className="bg-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-cyan-200">Overall Health</span>
            <span className={`text-3xl font-bold ${getHealthColor(overallHealth.score)}`}>
              {overallHealth.score}%
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-center text-sm">
            <div>
              <p className="text-white font-bold">{overallHealth.uptime}</p>
              <p className="text-cyan-200 text-xs">Uptime</p>
            </div>
            <div>
              <p className="text-white font-bold">{overallHealth.avgLatency}</p>
              <p className="text-cyan-200 text-xs">Latency</p>
            </div>
            <div>
              <p className={`font-bold ${overallHealth.activeAlerts > 0 ? 'text-yellow-400' : 'text-green-400'}`}>
                {overallHealth.activeAlerts}
              </p>
              <p className="text-cyan-200 text-xs">Alerts</p>
            </div>
            <div>
              <p className={`font-bold ${overallHealth.circuitBreakersTripped > 0 ? 'text-red-400' : 'text-green-400'}`}>
                {overallHealth.circuitBreakersTripped}
              </p>
              <p className="text-cyan-200 text-xs">Tripped</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          {[
            { id: 'health', label: 'Health' },
            { id: 'alerts', label: 'Alerts' },
            { id: 'circuits', label: 'Circuit Breakers' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id ? 'bg-cyan-600 text-white' : 'text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Health Tab */}
      {activeTab === 'health' && (
        <div className="px-4 space-y-3">
          {integrations.map(integration => (
            <div key={integration.id} className={`bg-gray-800 rounded-xl p-4 ${
              integration.status === 'down' ? 'border border-red-500/30' :
              integration.status === 'degraded' ? 'border border-yellow-500/30' : ''
            }`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{integration.icon}</span>
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-white font-bold">{integration.name}</h3>
                      <div className="ml-2">{getStatusBadge(integration.status)}</div>
                    </div>
                    <p className="text-gray-400 text-sm">Last check: {integration.lastCheck}</p>
                  </div>
                </div>
                <span className={`text-2xl font-bold ${getHealthColor(integration.health)}`}>
                  {integration.health}%
                </span>
              </div>

              {integration.alert && (
                <div className={`mb-3 p-2 rounded-lg text-sm ${
                  integration.status === 'down' ? 'bg-red-500/10 text-red-400' : 'bg-yellow-500/10 text-yellow-400'
                }`}>
                  <AlertTriangle size={14} className="inline mr-1" />
                  {integration.alert}
                </div>
              )}

              <div className="grid grid-cols-4 gap-2 text-center text-sm">
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className="text-white font-bold">{integration.latency}</p>
                  <p className="text-gray-400 text-xs">Latency</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className="text-white font-bold">{integration.uptime}</p>
                  <p className="text-gray-400 text-xs">Uptime</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className="text-white font-bold">{integration.requests}</p>
                  <p className="text-gray-400 text-xs">Requests</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className={`font-bold ${parseFloat(integration.errorRate) > 0.5 ? 'text-red-400' : 'text-green-400'}`}>
                    {integration.errorRate}
                  </p>
                  <p className="text-gray-400 text-xs">Errors</p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className={`px-2 py-1 rounded text-xs ${getCircuitBreakerColor(integration.circuitBreaker)}`}>
                  CB: {integration.circuitBreaker}
                </span>
                {integration.status === 'down' && (
                  <button className="text-cyan-400 text-sm flex items-center">
                    <RotateCcw size={14} className="mr-1" />
                    Reset Circuit
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Alerts Tab */}
      {activeTab === 'alerts' && (
        <div className="px-4 space-y-3">
          {alerts.map(alert => (
            <div key={alert.id} className={`rounded-xl p-4 border ${getSeverityColor(alert.severity)} ${
              alert.acknowledged ? 'opacity-60' : ''
            }`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  <Bell size={18} className="mr-2" />
                  <span className="font-medium">{alert.integration}</span>
                </div>
                <span className="text-xs opacity-75">{alert.time}</span>
              </div>
              <p className="text-sm mb-3">{alert.message}</p>
              <div className="flex space-x-2">
                {!alert.acknowledged && (
                  <button className="flex-1 bg-white/10 py-2 rounded-lg text-sm">
                    Acknowledge
                  </button>
                )}
                <button className="flex-1 bg-white/10 py-2 rounded-lg text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Circuit Breakers Tab */}
      {activeTab === 'circuits' && (
        <div className="px-4 space-y-4">
          {/* Circuit Breaker Explainer */}
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
            <div className="flex items-start">
              <Shield size={20} className="text-cyan-400 mr-2 mt-0.5" />
              <div>
                <p className="text-cyan-400 font-medium">Safety Layers</p>
                <p className="text-gray-300 text-sm">
                  Circuit breakers prevent cascading failures. When tripped, requests are blocked to protect the system.
                </p>
              </div>
            </div>
          </div>

          {/* Circuit Breaker States */}
          <div className="space-y-3">
            {circuitBreakerStates.map((cb, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-bold">{cb.name}</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${getCircuitBreakerColor(cb.state)}`}>
                    {cb.state.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Failures: {cb.failures}/{cb.threshold}</span>
                  {cb.state === 'open' && (
                    <button className="text-cyan-400 flex items-center">
                      <RotateCcw size={14} className="mr-1" />
                      Reset
                    </button>
                  )}
                </div>
                {/* Failure Bar */}
                <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      cb.failures >= cb.threshold ? 'bg-red-500' :
                      cb.failures > 0 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${(cb.failures / cb.threshold) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Rate Limits */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-4">Rate Limits</h3>
            <div className="space-y-3">
              {rateLimits.map((rl, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-300 text-sm">{rl.name}</span>
                    <span className={`text-sm ${rl.percentage > 80 ? 'text-yellow-400' : 'text-white'}`}>
                      {rl.current}/{rl.limit} ({rl.percentage}%)
                    </span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        rl.percentage > 90 ? 'bg-red-500' :
                        rl.percentage > 70 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${rl.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantIntegrationHealth;
