import React, { useState } from 'react';
import { Activity, Server, Database, Zap, AlertCircle, CheckCircle, Clock, TrendingUp, Cpu, HardDrive, Wifi, Shield } from 'lucide-react';

const AdminPlatformHealth = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // System health metrics
  const systemHealth = {
    overallStatus: 'healthy',
    uptime: 99.97,
    lastIncident: '12 days ago',
    activeAlerts: 2,
    services: {
      api: { status: 'healthy', uptime: 99.99, responseTime: 45 },
      database: { status: 'healthy', uptime: 99.98, responseTime: 12 },
      cache: { status: 'healthy', uptime: 100, responseTime: 3 },
      payments: { status: 'degraded', uptime: 99.85, responseTime: 234 },
      cdn: { status: 'healthy', uptime: 99.99, responseTime: 8 },
      notifications: { status: 'healthy', uptime: 99.96, responseTime: 156 }
    }
  };

  // Performance metrics
  const performanceMetrics = [
    {
      id: 'PM-001',
      metric: 'API Response Time',
      current: '45ms',
      target: '< 100ms',
      status: 'excellent',
      trend: '+2% from yesterday',
      history: [42, 38, 45, 43, 47, 45, 41]
    },
    {
      id: 'PM-002',
      metric: 'Database Query Time',
      current: '12ms',
      target: '< 50ms',
      status: 'excellent',
      trend: '-5% from yesterday',
      history: [15, 14, 13, 12, 11, 13, 12]
    },
    {
      id: 'PM-003',
      metric: 'Page Load Time',
      current: '1.2s',
      target: '< 2s',
      status: 'good',
      trend: '+8% from yesterday',
      history: [1.1, 1.0, 1.3, 1.2, 1.1, 1.2, 1.2]
    },
    {
      id: 'PM-004',
      metric: 'Payment Gateway Latency',
      current: '234ms',
      target: '< 200ms',
      status: 'degraded',
      trend: '+45% from yesterday',
      history: [156, 167, 178, 189, 201, 223, 234]
    }
  ];

  // Server resources
  const serverResources = [
    {
      id: 'SRV-001',
      name: 'API Server (Primary)',
      location: 'Mumbai - AWS ap-south-1',
      cpu: 45,
      memory: 62,
      disk: 38,
      network: 234, // Mbps
      status: 'healthy',
      requests: 12456
    },
    {
      id: 'SRV-002',
      name: 'API Server (Secondary)',
      location: 'Mumbai - AWS ap-south-1',
      cpu: 38,
      memory: 54,
      disk: 35,
      network: 189,
      status: 'healthy',
      requests: 9823
    },
    {
      id: 'SRV-003',
      name: 'Database Server (Primary)',
      location: 'Mumbai - AWS ap-south-1',
      cpu: 72,
      memory: 81,
      disk: 67,
      network: 456,
      status: 'warning',
      requests: 34567
    },
    {
      id: 'SRV-004',
      name: 'Database Server (Replica)',
      location: 'Bangalore - AWS ap-south-1',
      cpu: 28,
      memory: 34,
      disk: 67,
      network: 123,
      status: 'healthy',
      requests: 8945
    }
  ];

  // Errors & alerts
  const activeAlerts = [
    {
      id: 'ALT-001',
      severity: 'warning',
      service: 'Payment Gateway',
      message: 'High latency detected - 234ms average (target: < 200ms)',
      timestamp: '2025-10-28 22:15:00',
      duration: '2 hours',
      impact: 'Affecting 3% of transactions',
      recommendation: 'Consider switching to backup payment processor'
    },
    {
      id: 'ALT-002',
      severity: 'warning',
      service: 'Database Server',
      message: 'CPU usage at 72% - approaching threshold',
      timestamp: '2025-10-28 21:45:00',
      duration: '3 hours',
      impact: 'May cause slowdown during peak hours',
      recommendation: 'Scale up database instance or optimize queries'
    }
  ];

  // Error logs
  const errorLogs = [
    {
      id: 'ERR-001',
      level: 'error',
      service: 'Payment API',
      message: 'Payment gateway timeout - HDFC Bank',
      count: 45,
      firstSeen: '2025-10-28 20:00:00',
      lastSeen: '2025-10-28 22:30:00',
      stackTrace: 'PaymentGateway.processPayment() at line 234'
    },
    {
      id: 'ERR-002',
      level: 'warning',
      service: 'User API',
      message: 'Rate limit exceeded for IP: 103.45.67.89',
      count: 23,
      firstSeen: '2025-10-28 21:15:00',
      lastSeen: '2025-10-28 22:20:00',
      stackTrace: 'RateLimiter.checkLimit() at line 89'
    },
    {
      id: 'ERR-003',
      level: 'info',
      service: 'Notification Service',
      message: 'SMS delivery delayed - network congestion',
      count: 12,
      firstSeen: '2025-10-28 19:30:00',
      lastSeen: '2025-10-28 20:15:00',
      stackTrace: 'SMSService.send() at line 156'
    }
  ];

  // Availability SLA
  const slaMetrics = {
    monthly: {
      target: 99.9,
      actual: 99.97,
      downtime: '13 minutes',
      incidents: 2
    },
    weekly: {
      target: 99.9,
      actual: 99.98,
      downtime: '2 minutes',
      incidents: 1
    },
    daily: {
      target: 99.9,
      actual: 100,
      downtime: '0 minutes',
      incidents: 0
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy': return 'text-green-400';
      case 'degraded': return 'text-yellow-400';
      case 'warning': return 'text-orange-400';
      case 'critical': return 'text-red-400';
      case 'excellent': return 'text-green-400';
      case 'good': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'healthy': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'degraded': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'warning': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'excellent': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'good': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'warning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'info': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'error': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getResourceColor = (value) => {
    if (value >= 80) return 'text-red-400';
    if (value >= 60) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Activity className="w-10 h-10 text-blue-400" />
            Platform Health Monitor
          </h1>
          <p className="text-gray-400">Real-time system monitoring & performance tracking</p>
        </div>

        {/* Overall Status Banner */}
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">All Systems Operational</h2>
                <p className="text-gray-400">Uptime: {systemHealth.uptime}% • Last incident: {systemHealth.lastIncident}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">Active Alerts</div>
              <div className="text-3xl font-bold text-yellow-400">{systemHealth.activeAlerts}</div>
            </div>
          </div>
        </div>

        {/* Service Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {Object.entries(systemHealth.services).map(([key, service]) => (
            <div key={key} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Server className="w-6 h-6 text-blue-400" />
                  <span className="text-white font-semibold capitalize">{key}</span>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full border ${getStatusBadge(service.status)}`}>
                  {service.status.toUpperCase()}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Uptime:</span>
                  <span className="text-white font-bold">{service.uptime}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Response Time:</span>
                  <span className={getStatusColor(service.status)}>
                    {service.responseTime}ms
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview', icon: Activity },
            { id: 'performance', label: 'Performance', icon: TrendingUp },
            { id: 'servers', label: 'Server Resources', icon: Server },
            { id: 'alerts', label: 'Alerts & Errors', icon: AlertCircle }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">SLA Compliance</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(slaMetrics).map(([period, metrics]) => (
                  <div key={period} className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-bold text-white mb-4 capitalize">{period} SLA</h3>

                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-400 text-sm">Target</span>
                          <span className="text-white font-bold">{metrics.target}%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">Actual</span>
                          <span className={metrics.actual >= metrics.target ? 'text-green-400' : 'text-red-400'}>
                            {metrics.actual}%
                          </span>
                        </div>
                      </div>

                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${metrics.actual >= metrics.target ? 'bg-green-500' : 'bg-red-500'}`}
                          style={{ width: `${(metrics.actual / metrics.target) * 100}%` }}
                        />
                      </div>

                      <div className="pt-3 border-t border-white/10 space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Downtime:</span>
                          <span className="text-white">{metrics.downtime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Incidents:</span>
                          <span className="text-white">{metrics.incidents}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">99.9% Uptime Guarantee</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Current uptime of {systemHealth.uptime}% exceeds SLA commitment. Platform has been stable for the past {systemHealth.lastIncident}.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-gray-400 text-sm">Max Allowed Downtime/Month</div>
                    <div className="text-white font-bold text-lg">43.2 minutes</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-gray-400 text-sm">Actual Downtime This Month</div>
                    <div className="text-green-400 font-bold text-lg">13 minutes</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-gray-400 text-sm">Buffer Remaining</div>
                    <div className="text-blue-400 font-bold text-lg">30.2 minutes</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Performance Metrics</h2>

              {performanceMetrics.map((metric) => (
                <div key={metric.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{metric.metric}</h3>
                      <p className="text-gray-400 text-sm">Target: {metric.target}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${getStatusColor(metric.status)}`}>
                        {metric.current}
                      </div>
                      <div className="text-sm text-gray-400">{metric.trend}</div>
                    </div>
                  </div>

                  <div className="flex items-end gap-2 h-32">
                    {metric.history.map((value, idx) => {
                      const maxValue = Math.max(...metric.history);
                      const height = (value / maxValue) * 100;
                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                          <div className="text-xs text-gray-400">{value}</div>
                          <div
                            className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4">
                    <span className={`text-xs px-3 py-1 rounded-full border ${getStatusBadge(metric.status)}`}>
                      {metric.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'servers' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Server Resource Utilization</h2>

              {serverResources.map((server) => (
                <div key={server.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{server.name}</h3>
                      <p className="text-gray-400 text-sm">{server.location}</p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full border ${getStatusBadge(server.status)}`}>
                      {server.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Cpu className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-400 text-sm">CPU</span>
                      </div>
                      <div className={`text-2xl font-bold ${getResourceColor(server.cpu)}`}>
                        {server.cpu}%
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div
                          className={`h-2 rounded-full ${server.cpu >= 80 ? 'bg-red-500' : server.cpu >= 60 ? 'bg-yellow-500' : 'bg-green-500'}`}
                          style={{ width: `${server.cpu}%` }}
                        />
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <HardDrive className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-400 text-sm">Memory</span>
                      </div>
                      <div className={`text-2xl font-bold ${getResourceColor(server.memory)}`}>
                        {server.memory}%
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div
                          className={`h-2 rounded-full ${server.memory >= 80 ? 'bg-red-500' : server.memory >= 60 ? 'bg-yellow-500' : 'bg-green-500'}`}
                          style={{ width: `${server.memory}%` }}
                        />
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="w-5 h-5 text-green-400" />
                        <span className="text-gray-400 text-sm">Disk</span>
                      </div>
                      <div className={`text-2xl font-bold ${getResourceColor(server.disk)}`}>
                        {server.disk}%
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div
                          className={`h-2 rounded-full ${server.disk >= 80 ? 'bg-red-500' : server.disk >= 60 ? 'bg-yellow-500' : 'bg-green-500'}`}
                          style={{ width: `${server.disk}%` }}
                        />
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Wifi className="w-5 h-5 text-yellow-400" />
                        <span className="text-gray-400 text-sm">Network</span>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {server.network} Mbps
                      </div>
                      <div className="text-xs text-gray-400 mt-2">
                        {server.requests.toLocaleString()} req/min
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'alerts' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Active Alerts</h2>
                <div className="text-gray-400 text-sm">{activeAlerts.length} active alerts</div>
              </div>

              {activeAlerts.map((alert) => (
                <div key={alert.id} className={`rounded-xl p-6 border ${getSeverityColor(alert.severity)}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="w-6 h-6" />
                      <div>
                        <h3 className="text-xl font-bold text-white">{alert.service}</h3>
                        <p className="text-gray-400 text-sm">{alert.timestamp} • Duration: {alert.duration}</p>
                      </div>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full border ${getSeverityColor(alert.severity)}`}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-white font-medium text-lg mb-2">{alert.message}</div>
                    <div className="text-gray-400">Impact: {alert.impact}</div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-4">
                    <div className="text-gray-400 text-sm mb-1">Recommendation:</div>
                    <div className="text-white">{alert.recommendation}</div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
                      Investigate
                    </button>
                    <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all">
                      Resolve
                    </button>
                    <button className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-all">
                      Mute
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">Error Logs</h2>

                {errorLogs.map((log) => (
                  <div key={log.id} className={`rounded-xl p-6 border mb-4 ${getSeverityColor(log.level)}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">{log.service}</h3>
                        <p className="text-gray-400 text-sm">{log.stackTrace}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Occurrences</div>
                        <div className="text-2xl font-bold text-white">{log.count}</div>
                      </div>
                    </div>

                    <div className="text-white mb-3">{log.message}</div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">First seen: {log.firstSeen}</span>
                      <span className="text-gray-400">Last seen: {log.lastSeen}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPlatformHealth;
