import { useState } from 'react';
import {
  Activity, Clock, CheckCircle, XCircle, AlertCircle, RefreshCw, Play, Pause,
  Trash2, Calendar, TrendingUp, Zap, Database, Bell, DollarSign, Users,
  Settings, Eye, Download, Filter, Search, BarChart3, Server
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminBackgroundJobs() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const [queueHealth] = useState({
    active: 12,
    completed: 45678,
    failed: 234,
    delayed: 8,
    avgProcessingTime: 2.3,
    successRate: 99.5,
    totalJobs: 45932,
    peakLoad: 45
  });

  const [jobs, setJobs] = useState([
    {
      id: 1,
      name: 'Coin Expiry Check',
      type: 'coin_expiry',
      status: 'active',
      priority: 'high',
      schedule: '0 0 * * *',
      scheduleDescription: 'Daily at midnight',
      lastRun: '2025-12-27 00:00:15',
      nextRun: '2025-12-28 00:00:00',
      duration: 3420,
      progress: 75,
      processedRecords: 15670,
      totalRecords: 20890,
      successCount: 15234,
      failureCount: 436,
      enabled: true,
      retryAttempts: 3,
      webhook: 'https://api.rez.com/webhooks/coin-expiry'
    },
    {
      id: 2,
      name: 'Trial Expiry Notifications',
      type: 'trial_expiry',
      status: 'completed',
      priority: 'medium',
      schedule: '0 9 * * *',
      scheduleDescription: 'Daily at 9 AM',
      lastRun: '2025-12-27 09:00:00',
      nextRun: '2025-12-28 09:00:00',
      duration: 1234,
      progress: 100,
      processedRecords: 892,
      totalRecords: 892,
      successCount: 892,
      failureCount: 0,
      enabled: true,
      retryAttempts: 3,
      webhook: 'https://api.rez.com/webhooks/trial-expiry'
    },
    {
      id: 3,
      name: 'Cashback Payout Processing',
      type: 'cashback_payout',
      status: 'failed',
      priority: 'critical',
      schedule: '0 */6 * * *',
      scheduleDescription: 'Every 6 hours',
      lastRun: '2025-12-27 12:00:00',
      nextRun: '2025-12-27 18:00:00',
      duration: 567,
      progress: 45,
      processedRecords: 234,
      totalRecords: 520,
      successCount: 189,
      failureCount: 45,
      enabled: true,
      retryAttempts: 3,
      webhook: 'https://api.rez.com/webhooks/cashback-payout',
      error: 'Database connection timeout at record #234'
    },
    {
      id: 4,
      name: 'Session Cleanup',
      type: 'session_cleanup',
      status: 'completed',
      priority: 'low',
      schedule: '0 2 * * *',
      scheduleDescription: 'Daily at 2 AM',
      lastRun: '2025-12-27 02:00:00',
      nextRun: '2025-12-28 02:00:00',
      duration: 890,
      progress: 100,
      processedRecords: 45600,
      totalRecords: 45600,
      successCount: 45600,
      failureCount: 0,
      enabled: true,
      retryAttempts: 1,
      webhook: null
    },
    {
      id: 5,
      name: 'Reservation Cleanup',
      type: 'reservation_cleanup',
      status: 'delayed',
      priority: 'medium',
      schedule: '0 */4 * * *',
      scheduleDescription: 'Every 4 hours',
      lastRun: '2025-12-27 08:00:00',
      nextRun: '2025-12-27 12:00:00',
      duration: null,
      progress: 0,
      processedRecords: 0,
      totalRecords: 1234,
      successCount: 0,
      failureCount: 0,
      enabled: true,
      retryAttempts: 3,
      webhook: 'https://api.rez.com/webhooks/reservation-cleanup',
      delayReason: 'Waiting for database lock release'
    },
    {
      id: 6,
      name: 'Email Queue Processing',
      type: 'email_queue',
      status: 'active',
      priority: 'high',
      schedule: '*/5 * * * *',
      scheduleDescription: 'Every 5 minutes',
      lastRun: '2025-12-27 15:45:00',
      nextRun: '2025-12-27 15:50:00',
      duration: 120,
      progress: 60,
      processedRecords: 3456,
      totalRecords: 5760,
      successCount: 3234,
      failureCount: 222,
      enabled: true,
      retryAttempts: 5,
      webhook: null
    },
    {
      id: 7,
      name: 'SMS Queue Processing',
      type: 'sms_queue',
      status: 'completed',
      priority: 'high',
      schedule: '*/10 * * * *',
      scheduleDescription: 'Every 10 minutes',
      lastRun: '2025-12-27 15:40:00',
      nextRun: '2025-12-27 15:50:00',
      duration: 234,
      progress: 100,
      processedRecords: 1234,
      totalRecords: 1234,
      successCount: 1198,
      failureCount: 36,
      enabled: true,
      retryAttempts: 5,
      webhook: null
    },
    {
      id: 8,
      name: 'Webhook Retry Queue',
      type: 'webhook_retry',
      status: 'active',
      priority: 'medium',
      schedule: '*/15 * * * *',
      scheduleDescription: 'Every 15 minutes',
      lastRun: '2025-12-27 15:30:00',
      nextRun: '2025-12-27 15:45:00',
      duration: 89,
      progress: 35,
      processedRecords: 45,
      totalRecords: 128,
      successCount: 38,
      failureCount: 7,
      enabled: true,
      retryAttempts: 10,
      webhook: null
    }
  ]);

  const [deadLetterQueue] = useState([
    {
      id: 1,
      jobName: 'Cashback Payout #45234',
      jobType: 'cashback_payout',
      failedAt: '2025-12-27 12:15:00',
      attempts: 5,
      error: 'Payment gateway timeout - Unable to process payout',
      payload: { userId: 12345, amount: 450, transactionId: 'TXN789012' },
      canRetry: true
    },
    {
      id: 2,
      jobName: 'Trial Expiry Email #892',
      jobType: 'trial_expiry',
      failedAt: '2025-12-26 09:23:00',
      attempts: 5,
      error: 'SMTP server unavailable',
      payload: { userId: 67890, email: 'user@example.com', trialEndDate: '2025-12-26' },
      canRetry: true
    },
    {
      id: 3,
      jobName: 'Coin Expiry Notification #234',
      jobType: 'coin_expiry',
      failedAt: '2025-12-25 00:45:00',
      attempts: 5,
      error: 'User account deleted - Cannot send notification',
      payload: { userId: 23456, expiringCoins: 500, expiryDate: '2025-12-31' },
      canRetry: false
    }
  ]);

  const [jobLogs, setJobLogs] = useState([
    {
      id: 1,
      jobName: 'Coin Expiry Check',
      status: 'success',
      timestamp: '2025-12-27 00:00:15',
      duration: 3420,
      records: 20890,
      message: 'Successfully processed 20890 records. Sent 1234 expiry notifications.'
    },
    {
      id: 2,
      jobName: 'Trial Expiry Notifications',
      status: 'success',
      timestamp: '2025-12-27 09:00:00',
      duration: 1234,
      records: 892,
      message: 'Sent 892 trial expiry emails. All delivered successfully.'
    },
    {
      id: 3,
      jobName: 'Cashback Payout Processing',
      status: 'failed',
      timestamp: '2025-12-27 12:00:00',
      duration: 567,
      records: 234,
      message: 'ERROR: Database connection timeout at record #234. Rolled back transaction.'
    },
    {
      id: 4,
      jobName: 'Session Cleanup',
      status: 'success',
      timestamp: '2025-12-27 02:00:00',
      duration: 890,
      records: 45600,
      message: 'Cleaned up 45600 expired sessions.'
    },
    {
      id: 5,
      jobName: 'Email Queue Processing',
      status: 'warning',
      timestamp: '2025-12-27 15:45:00',
      duration: 120,
      records: 5760,
      message: 'Processed 5760 emails. 222 failed due to invalid addresses.'
    }
  ]);

  const [performanceMetrics] = useState({
    hourlyJobCount: [12, 15, 10, 8, 14, 18, 22, 25, 20, 16, 19, 23, 28, 24, 21, 19, 17, 15, 13, 18, 22, 25, 20, 16],
    avgResponseTime: [2.1, 2.3, 2.0, 2.4, 2.2, 2.5, 2.8, 3.1, 2.9, 2.7, 2.4, 2.6, 2.8, 2.5, 2.3, 2.1, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0, 2.7, 2.4],
    successRate: [99.5, 99.3, 99.7, 99.2, 99.6, 99.4, 98.9, 99.1, 99.5, 99.6, 99.8, 99.4, 99.2, 99.5, 99.7, 99.6, 99.4, 99.5, 99.3, 99.1, 98.8, 99.0, 99.4, 99.5]
  });

  const handleRetryJob = (id) => {
    setJobs(prev => prev.map(job =>
      job.id === id ? { ...job, status: 'active', progress: 0, error: null } : job
    ));
  };

  const handleToggleJob = (id) => {
    setJobs(prev => prev.map(job =>
      job.id === id ? { ...job, enabled: !job.enabled } : job
    ));
  };

  const handleDeleteJob = (id) => {
    setJobs(prev => prev.filter(job => job.id !== id));
  };

  const handleRetryDeadLetter = (id) => {
    console.log('Retrying dead letter job:', id);
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || job.type === filterType;
    const matchesStatus = filterStatus === 'all' || job.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-blue-100 text-blue-700',
      completed: 'bg-green-100 text-green-700',
      failed: 'bg-red-100 text-red-700',
      delayed: 'bg-orange-100 text-orange-700',
      paused: 'bg-gray-100 text-gray-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return Activity;
      case 'completed': return CheckCircle;
      case 'failed': return XCircle;
      case 'delayed': return Clock;
      default: return AlertCircle;
    }
  };

  const getPriorityColor = (priority) => {
    const colors = {
      critical: 'bg-red-100 text-red-700 border-red-200',
      high: 'bg-orange-100 text-orange-700 border-orange-200',
      medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      low: 'bg-gray-100 text-gray-700 border-gray-200'
    };
    return colors[priority] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Background Jobs Queue Monitor</h1>
              <p className="text-gray-600 mt-1">Monitor and manage background job processing</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-900">
                  {queueHealth.successRate}% Success Rate
                </span>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Settings className="w-5 h-5" />
                Configure
              </button>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Queue Health Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Jobs</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{queueHealth.active}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Currently processing</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Completed</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {(queueHealth.completed / 1000).toFixed(1)}K
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Last 24 hours</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Failed Jobs</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{queueHealth.failed}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Needs attention</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Avg Processing</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{queueHealth.avgProcessingTime}s</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Response time</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6 overflow-x-auto">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Job Queue
              </button>
              <button
                onClick={() => setActiveTab('logs')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'logs'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Execution Logs
              </button>
              <button
                onClick={() => setActiveTab('deadletter')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'deadletter'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Dead Letter Queue ({deadLetterQueue.length})
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === 'analytics'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Analytics
              </button>
            </nav>
          </div>

          {/* Job Queue Tab */}
          {activeTab === 'overview' && (
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Types</option>
                  <option value="coin_expiry">Coin Expiry</option>
                  <option value="trial_expiry">Trial Expiry</option>
                  <option value="cashback_payout">Cashback Payout</option>
                  <option value="session_cleanup">Session Cleanup</option>
                  <option value="reservation_cleanup">Reservation Cleanup</option>
                  <option value="email_queue">Email Queue</option>
                  <option value="sms_queue">SMS Queue</option>
                  <option value="webhook_retry">Webhook Retry</option>
                </select>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="failed">Failed</option>
                  <option value="delayed">Delayed</option>
                </select>
              </div>

              <div className="space-y-4">
                {filteredJobs.map((job) => {
                  const StatusIcon = getStatusIcon(job.status);
                  return (
                    <div
                      key={job.id}
                      className={`rounded-lg p-6 border-2 ${
                        job.status === 'failed' ? 'bg-red-50 border-red-200' :
                        job.status === 'active' ? 'bg-blue-50 border-blue-200' :
                        job.status === 'delayed' ? 'bg-orange-50 border-orange-200' :
                        'bg-white border-gray-200'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-3 flex-1">
                          <StatusIcon className={`w-6 h-6 mt-1 ${
                            job.status === 'failed' ? 'text-red-600' :
                            job.status === 'active' ? 'text-blue-600' :
                            job.status === 'delayed' ? 'text-orange-600' :
                            'text-green-600'
                          }`} />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg font-bold text-gray-900">{job.name}</h3>
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                                {job.status}
                              </span>
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(job.priority)}`}>
                                {job.priority}
                              </span>
                              {!job.enabled && (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                                  Disabled
                                </span>
                              )}
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-3 text-sm">
                              <div>
                                <p className="text-gray-600">Schedule</p>
                                <p className="font-medium text-gray-900">{job.scheduleDescription}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">Last Run</p>
                                <p className="font-medium text-gray-900">{job.lastRun}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">Next Run</p>
                                <p className="font-medium text-gray-900">{job.nextRun}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">Duration</p>
                                <p className="font-medium text-gray-900">
                                  {job.duration ? `${(job.duration / 1000).toFixed(1)}s` : '-'}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-600">Success Rate</p>
                                <p className="font-medium text-gray-900">
                                  {job.processedRecords > 0 ? ((job.successCount / job.processedRecords) * 100).toFixed(1) : 0}%
                                </p>
                              </div>
                            </div>

                            {job.status === 'active' && (
                              <div className="mb-3">
                                <div className="flex items-center justify-between text-sm mb-1">
                                  <span className="text-gray-600">Progress</span>
                                  <span className="font-medium text-gray-900">
                                    {job.processedRecords.toLocaleString()} / {job.totalRecords.toLocaleString()} records ({job.progress}%)
                                  </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${job.progress}%` }}
                                  ></div>
                                </div>
                              </div>
                            )}

                            {job.error && (
                              <div className="bg-red-100 border border-red-200 rounded p-3 mb-3">
                                <p className="text-sm font-medium text-red-900">Error:</p>
                                <p className="text-sm text-red-700">{job.error}</p>
                              </div>
                            )}

                            {job.delayReason && (
                              <div className="bg-orange-100 border border-orange-200 rounded p-3 mb-3">
                                <p className="text-sm font-medium text-orange-900">Delayed:</p>
                                <p className="text-sm text-orange-700">{job.delayReason}</p>
                              </div>
                            )}

                            <div className="flex items-center gap-4 text-xs text-gray-600">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                Cron: {job.schedule}
                              </span>
                              <span className="flex items-center gap-1">
                                <RefreshCw className="w-3 h-3" />
                                Max Retries: {job.retryAttempts}
                              </span>
                              {job.webhook && (
                                <span className="flex items-center gap-1">
                                  <Zap className="w-3 h-3" />
                                  Webhook configured
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {job.status === 'failed' && (
                          <button
                            onClick={() => handleRetryJob(job.id)}
                            className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                          >
                            <RefreshCw className="w-4 h-4" />
                            Retry Now
                          </button>
                        )}
                        <button
                          onClick={() => handleToggleJob(job.id)}
                          className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm ${
                            job.enabled
                              ? 'bg-orange-600 text-white hover:bg-orange-700'
                              : 'bg-green-600 text-white hover:bg-green-700'
                          }`}
                        >
                          {job.enabled ? (
                            <>
                              <Pause className="w-4 h-4" />
                              Disable
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4" />
                              Enable
                            </>
                          )}
                        </button>
                        <button className="flex items-center gap-1 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm">
                          <Eye className="w-4 h-4" />
                          View Logs
                        </button>
                        <button className="flex items-center gap-1 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                          <Settings className="w-4 h-4" />
                          Configure
                        </button>
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Execution Logs Tab */}
          {activeTab === 'logs' && (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Recent Job Executions</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  <Download className="w-4 h-4" />
                  Export Logs
                </button>
              </div>

              <div className="space-y-4">
                {jobLogs.map((log) => (
                  <div
                    key={log.id}
                    className={`rounded-lg p-6 border-2 ${
                      log.status === 'failed' ? 'bg-red-50 border-red-200' :
                      log.status === 'warning' ? 'bg-orange-50 border-orange-200' :
                      'bg-green-50 border-green-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {log.status === 'success' ? (
                        <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                      ) : log.status === 'warning' ? (
                        <AlertCircle className="w-6 h-6 text-orange-600 mt-1" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600 mt-1" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-gray-900">{log.jobName}</h4>
                          <span className="text-sm text-gray-600">{log.timestamp}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                          <div>
                            <p className="text-gray-600">Duration</p>
                            <p className="font-medium text-gray-900">{(log.duration / 1000).toFixed(2)}s</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Records Processed</p>
                            <p className="font-medium text-gray-900">{log.records.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Status</p>
                            <p className={`font-medium capitalize ${
                              log.status === 'success' ? 'text-green-600' :
                              log.status === 'warning' ? 'text-orange-600' :
                              'text-red-600'
                            }`}>
                              {log.status}
                            </p>
                          </div>
                        </div>
                        <div className={`rounded p-3 ${
                          log.status === 'failed' ? 'bg-red-100' :
                          log.status === 'warning' ? 'bg-orange-100' :
                          'bg-green-100'
                        }`}>
                          <p className="text-sm text-gray-900">{log.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dead Letter Queue Tab */}
          {activeTab === 'deadletter' && (
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Dead Letter Queue</h3>
                <p className="text-sm text-gray-600">
                  Jobs that have failed after maximum retry attempts
                </p>
              </div>

              {deadLetterQueue.length === 0 ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <p className="text-gray-600">No jobs in dead letter queue</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {deadLetterQueue.map((item) => (
                    <div key={item.id} className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                      <div className="flex items-start gap-3">
                        <XCircle className="w-6 h-6 text-red-600 mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-gray-900">{item.jobName}</h4>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                              {item.jobType.replace(/_/g, ' ').toUpperCase()}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                            <div>
                              <p className="text-gray-600">Failed At</p>
                              <p className="font-medium text-gray-900">{item.failedAt}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Retry Attempts</p>
                              <p className="font-medium text-gray-900">{item.attempts} / 5</p>
                            </div>
                          </div>
                          <div className="bg-red-100 border border-red-200 rounded p-3 mb-3">
                            <p className="text-sm font-medium text-red-900 mb-1">Error:</p>
                            <p className="text-sm text-red-700">{item.error}</p>
                          </div>
                          <div className="bg-white bg-opacity-50 rounded p-3 mb-3">
                            <p className="text-xs text-gray-600 mb-1">Payload:</p>
                            <pre className="text-xs font-mono text-gray-800">
                              {JSON.stringify(item.payload, null, 2)}
                            </pre>
                          </div>
                          <div className="flex items-center gap-2">
                            {item.canRetry && (
                              <button
                                onClick={() => handleRetryDeadLetter(item.id)}
                                className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                              >
                                <RefreshCw className="w-4 h-4" />
                                Manual Retry
                              </button>
                            )}
                            <button className="flex items-center gap-1 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm">
                              <Eye className="w-4 h-4" />
                              View Details
                            </button>
                            <button className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
                              <Trash2 className="w-4 h-4" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Job Queue Performance Analytics</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-sm font-medium text-gray-600 mb-4">Total Jobs Processed</h4>
                  <p className="text-3xl font-bold text-gray-900 mb-2">
                    {(queueHealth.totalJobs / 1000).toFixed(1)}K
                  </p>
                  <p className="text-sm text-gray-600">Last 24 hours</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-sm font-medium text-gray-600 mb-4">Peak Load</h4>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{queueHealth.peakLoad}</p>
                  <p className="text-sm text-gray-600">Concurrent jobs</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-sm font-medium text-gray-600 mb-4">Uptime</h4>
                  <p className="text-3xl font-bold text-gray-900 mb-2">99.98%</p>
                  <p className="text-sm text-gray-600">Last 30 days</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="text-sm font-medium text-gray-600 mb-4">Hourly Job Count (Last 24h)</h4>
                <div className="h-48 flex items-end justify-between gap-1">
                  {performanceMetrics.hourlyJobCount.map((count, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-indigo-600 rounded-t hover:bg-indigo-700 transition-colors"
                        style={{ height: `${(count / 30) * 100}%` }}
                        title={`${count} jobs`}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-600">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span>23:59</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-sm font-medium text-gray-600 mb-4">Average Response Time (Last 24h)</h4>
                  <div className="h-32 flex items-end justify-between gap-1">
                    {performanceMetrics.avgResponseTime.map((time, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-purple-600 rounded-t hover:bg-purple-700 transition-colors"
                          style={{ height: `${(time / 3.5) * 100}%` }}
                          title={`${time}s`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-sm font-medium text-gray-600 mb-4">Success Rate (Last 24h)</h4>
                  <div className="h-32 flex items-end justify-between gap-1">
                    {performanceMetrics.successRate.map((rate, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-green-600 rounded-t hover:bg-green-700 transition-colors"
                          style={{ height: `${rate}%` }}
                          title={`${rate}%`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
