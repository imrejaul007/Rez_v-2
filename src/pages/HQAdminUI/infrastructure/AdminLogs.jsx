import { useState } from 'react';
import { AlertCircle, Activity, Clock, Search, Filter, Download, Eye, Server, Cpu, Database, Zap } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminLogs() {
  const [activeTab, setActiveTab] = useState('errors');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSeverity, setFilterSeverity] = useState('all');

  const [errorLogs, setErrorLogs] = useState([
    {
      id: 1,
      timestamp: '2024-01-20 14:35:22',
      severity: 'error',
      message: 'Payment gateway timeout',
      service: 'Payment Service',
      endpoint: '/api/payments/process',
      method: 'POST',
      statusCode: 504,
      affectedUsers: 3,
      frequency: 12,
      stackTrace: 'Error: Gateway timeout at PaymentService.processPayment (payment.service.js:145)\n  at async processTransaction (transaction.controller.js:89)',
      resolved: false
    },
    {
      id: 2,
      timestamp: '2024-01-20 14:30:15',
      severity: 'warning',
      message: 'High memory usage detected',
      service: 'API Server',
      endpoint: 'N/A',
      method: 'N/A',
      statusCode: null,
      affectedUsers: 0,
      frequency: 1,
      stackTrace: 'Warning: Memory usage at 85% of allocated heap',
      resolved: false
    },
    {
      id: 3,
      timestamp: '2024-01-20 14:20:10',
      severity: 'error',
      message: 'Database connection pool exhausted',
      service: 'Database',
      endpoint: '/api/users/profile',
      method: 'GET',
      statusCode: 500,
      affectedUsers: 15,
      frequency: 5,
      stackTrace: 'Error: Unable to acquire connection from pool\n  at Database.getConnection (db.service.js:67)',
      resolved: true
    },
    {
      id: 4,
      timestamp: '2024-01-20 14:10:05',
      severity: 'critical',
      message: 'Authentication service down',
      service: 'Auth Service',
      endpoint: '/api/auth/login',
      method: 'POST',
      statusCode: 503,
      affectedUsers: 50,
      frequency: 25,
      stackTrace: 'Error: Service unavailable - Auth microservice not responding',
      resolved: true
    }
  ]);

  const [activityLogs] = useState([
    {
      id: 1,
      timestamp: '2024-01-20 14:35:00',
      type: 'admin',
      actor: 'admin@rez.com',
      action: 'Updated merchant status',
      target: 'The Coffee House',
      details: 'Changed status from pending to active',
      ipAddress: '192.168.1.100'
    },
    {
      id: 2,
      timestamp: '2024-01-20 14:30:00',
      type: 'user',
      actor: 'john@example.com',
      action: 'Completed transaction',
      target: 'TXN001234567',
      details: 'Purchase of ₹450 at The Coffee House',
      ipAddress: '103.45.67.89'
    },
    {
      id: 3,
      timestamp: '2024-01-20 14:25:00',
      type: 'system',
      actor: 'System',
      action: 'Automated cashback distribution',
      target: 'Batch #1234',
      details: 'Distributed ₹25,670 cashback to 234 users',
      ipAddress: 'SYSTEM'
    },
    {
      id: 4,
      timestamp: '2024-01-20 14:20:00',
      type: 'admin',
      actor: 'admin@rez.com',
      action: 'Created new campaign',
      target: 'Weekend Special Offers',
      details: 'Email campaign targeting all active users',
      ipAddress: '192.168.1.100'
    }
  ]);

  const [performanceMetrics] = useState({
    apiResponseTime: {
      avg: 245,
      p95: 890,
      p99: 1450,
      trend: '+5%'
    },
    databaseQueries: {
      avg: 12,
      slowQueries: 3,
      totalQueries: 45670,
      trend: '-2%'
    },
    pageLoadTime: {
      avg: 1.8,
      p95: 3.2,
      p99: 5.1,
      trend: '+3%'
    },
    resources: {
      cpu: 45,
      memory: 72,
      disk: 35,
      network: 28
    }
  });

  const [recentApiCalls] = useState([
    { endpoint: '/api/transactions/create', avgTime: 456, calls: 1234, errors: 12 },
    { endpoint: '/api/users/profile', avgTime: 123, calls: 5670, errors: 5 },
    { endpoint: '/api/merchants/list', avgTime: 234, calls: 890, errors: 2 },
    { endpoint: '/api/offers/search', avgTime: 345, calls: 2340, errors: 8 },
    { endpoint: '/api/cashback/calculate', avgTime: 567, calls: 1120, errors: 15 }
  ]);

  const filteredErrorLogs = errorLogs.filter(log => {
    const matchesSearch = log.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.service.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSeverity = filterSeverity === 'all' || log.severity === filterSeverity;
    return matchesSearch && matchesSeverity;
  });

  const handleResolve = (id) => {
    setErrorLogs(prev => prev.map(log =>
      log.id === id ? { ...log, resolved: true } : log
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Logs & Debugging</h1>
              <p className="text-gray-600 mt-1">Monitor system health and debug issues</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="font-medium text-red-900">
                  {errorLogs.filter(log => !log.resolved && log.severity === 'error').length} Active Errors
                </span>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Download className="w-5 h-5" />
                Export Logs
              </button>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Active Errors</p>
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">{errorLogs.filter(l => !l.resolved).length}</p>
            <p className="text-sm text-red-600 mt-2">Needs attention</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Avg API Response</p>
              <Zap className="w-8 h-8 text-yellow-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">{performanceMetrics.apiResponseTime.avg}ms</p>
            <p className="text-sm text-orange-600 mt-2">{performanceMetrics.apiResponseTime.trend} vs yesterday</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">CPU Usage</p>
              <Cpu className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">{performanceMetrics.resources.cpu}%</p>
            <p className="text-sm text-gray-600 mt-2">Within normal range</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Memory Usage</p>
              <Server className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">{performanceMetrics.resources.memory}%</p>
            <p className="text-sm text-gray-600 mt-2">8.6 GB / 12 GB</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('errors')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                  activeTab === 'errors'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <AlertCircle className="w-4 h-4" />
                Error Logs
              </button>
              <button
                onClick={() => setActiveTab('activity')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                  activeTab === 'activity'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Activity className="w-4 h-4" />
                Activity Logs
              </button>
              <button
                onClick={() => setActiveTab('performance')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                  activeTab === 'performance'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Zap className="w-4 h-4" />
                Performance
              </button>
            </nav>
          </div>

          {/* Error Logs Tab */}
          {activeTab === 'errors' && (
            <div className="p-6">
              {/* Filters */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search errors..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <select
                  value={filterSeverity}
                  onChange={(e) => setFilterSeverity(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Severity</option>
                  <option value="critical">Critical</option>
                  <option value="error">Error</option>
                  <option value="warning">Warning</option>
                </select>
              </div>

              {/* Error List */}
              <div className="space-y-4">
                {filteredErrorLogs.map((log) => (
                  <div
                    key={log.id}
                    className={`rounded-lg p-6 border-2 ${
                      log.severity === 'critical' ? 'bg-red-50 border-red-200' :
                      log.severity === 'error' ? 'bg-orange-50 border-orange-200' :
                      'bg-yellow-50 border-yellow-200'
                    } ${log.resolved ? 'opacity-60' : ''}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3 flex-1">
                        <AlertCircle className={`w-6 h-6 mt-1 ${
                          log.severity === 'critical' ? 'text-red-600' :
                          log.severity === 'error' ? 'text-orange-600' :
                          'text-yellow-600'
                        }`} />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900">{log.message}</h3>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              log.severity === 'critical' ? 'bg-red-100 text-red-700' :
                              log.severity === 'error' ? 'bg-orange-100 text-orange-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {log.severity}
                            </span>
                            {log.resolved && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                Resolved
                              </span>
                            )}
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-3 text-sm">
                            <div>
                              <p className="text-gray-600">Service</p>
                              <p className="font-medium text-gray-900">{log.service}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Endpoint</p>
                              <p className="font-mono text-xs text-gray-900">{log.endpoint}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Status Code</p>
                              <p className="font-medium text-gray-900">{log.statusCode || 'N/A'}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Affected Users</p>
                              <p className="font-medium text-gray-900">{log.affectedUsers}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Frequency</p>
                              <p className="font-medium text-gray-900">{log.frequency}x today</p>
                            </div>
                          </div>
                          <div className="bg-white bg-opacity-50 rounded p-3 mb-3">
                            <p className="text-xs text-gray-600 mb-1">Stack Trace:</p>
                            <pre className="text-xs font-mono text-gray-800 whitespace-pre-wrap">{log.stackTrace}</pre>
                          </div>
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {log.timestamp}
                          </p>
                        </div>
                      </div>
                    </div>
                    {!log.resolved && (
                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={() => handleResolve(log.id)}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                        >
                          Mark Resolved
                        </button>
                        <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm">
                          View Full Trace
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Activity Logs Tab */}
          {activeTab === 'activity' && (
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actor</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Target</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">IP Address</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {activityLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{log.timestamp}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            log.type === 'admin' ? 'bg-purple-100 text-purple-700' :
                            log.type === 'user' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {log.type}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{log.actor}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm font-medium text-gray-900">{log.action}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{log.target}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-600">{log.details}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm font-mono text-gray-600">{log.ipAddress}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Performance Tab */}
          {activeTab === 'performance' && (
            <div className="p-6">
              {/* Performance Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">API Response Time</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Average</span>
                        <span className="text-sm font-semibold text-gray-900">{performanceMetrics.apiResponseTime.avg}ms</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">95th Percentile</span>
                        <span className="text-sm font-semibold text-gray-900">{performanceMetrics.apiResponseTime.p95}ms</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">99th Percentile</span>
                        <span className="text-sm font-semibold text-gray-900">{performanceMetrics.apiResponseTime.p99}ms</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Database Queries</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Avg Query Time</span>
                        <span className="text-sm font-semibold text-gray-900">{performanceMetrics.databaseQueries.avg}ms</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Slow Queries</span>
                        <span className="text-sm font-semibold text-orange-600">{performanceMetrics.databaseQueries.slowQueries}</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Total Queries</span>
                        <span className="text-sm font-semibold text-gray-900">{performanceMetrics.databaseQueries.totalQueries.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Page Load Time</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Average</span>
                        <span className="text-sm font-semibold text-gray-900">{performanceMetrics.pageLoadTime.avg}s</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">95th Percentile</span>
                        <span className="text-sm font-semibold text-gray-900">{performanceMetrics.pageLoadTime.p95}s</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">99th Percentile</span>
                        <span className="text-sm font-semibold text-gray-900">{performanceMetrics.pageLoadTime.p99}s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resource Usage */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Resource Usage</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">CPU</span>
                      <span className="text-sm font-semibold text-gray-900">{performanceMetrics.resources.cpu}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${performanceMetrics.resources.cpu}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Memory</span>
                      <span className="text-sm font-semibold text-gray-900">{performanceMetrics.resources.memory}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: `${performanceMetrics.resources.memory}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Disk</span>
                      <span className="text-sm font-semibold text-gray-900">{performanceMetrics.resources.disk}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: `${performanceMetrics.resources.disk}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Network</span>
                      <span className="text-sm font-semibold text-gray-900">{performanceMetrics.resources.network}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${performanceMetrics.resources.network}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* API Performance */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top API Endpoints</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Endpoint</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avg Response Time</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Calls</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Errors</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Error Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentApiCalls.map((api, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3">
                            <p className="text-sm font-mono text-gray-900">{api.endpoint}</p>
                          </td>
                          <td className="px-4 py-3">
                            <p className={`text-sm font-semibold ${
                              api.avgTime < 200 ? 'text-green-600' :
                              api.avgTime < 500 ? 'text-yellow-600' :
                              'text-red-600'
                            }`}>
                              {api.avgTime}ms
                            </p>
                          </td>
                          <td className="px-4 py-3">
                            <p className="text-sm text-gray-900">{api.calls.toLocaleString()}</p>
                          </td>
                          <td className="px-4 py-3">
                            <p className="text-sm text-red-600">{api.errors}</p>
                          </td>
                          <td className="px-4 py-3">
                            <p className="text-sm text-gray-900">{((api.errors / api.calls) * 100).toFixed(2)}%</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
