import { useState } from 'react';
import {
  Bell, AlertTriangle, TrendingUp, Calendar, Search,
  Mail, MessageSquare, Smartphone, ToggleLeft, ToggleRight,
  Clock, Filter, Download, CheckCircle, XCircle, AlertCircle,
  DollarSign, Database, Activity, Server, HardDrive, Users,
  Store, Star, ThumbsDown, Zap
} from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminNotifications() {
  const [activeTab, setActiveTab] = useState('system');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterSeverity, setFilterSeverity] = useState('all');

  const [systemNotifications, setSystemNotifications] = useState([
    {
      id: 1,
      type: 'critical',
      title: 'Payment Gateway Down',
      message: 'Razorpay payment gateway is experiencing downtime',
      timestamp: '2025-12-27 15:30:00',
      status: 'active',
      icon: AlertTriangle,
      color: 'red'
    },
    {
      id: 2,
      type: 'warning',
      title: 'High Error Rate',
      message: 'API error rate is above 5% threshold (Current: 7.2%)',
      timestamp: '2025-12-27 14:45:00',
      status: 'active',
      icon: Activity,
      color: 'yellow'
    },
    {
      id: 3,
      type: 'success',
      title: 'Database Backup Complete',
      message: 'Automated daily backup completed successfully',
      timestamp: '2025-12-27 03:00:00',
      status: 'resolved',
      icon: Database,
      color: 'green'
    },
    {
      id: 4,
      type: 'warning',
      title: 'API Response Time Slow',
      message: 'Average API response time: 850ms (Threshold: 500ms)',
      timestamp: '2025-12-27 13:20:00',
      status: 'active',
      icon: Server,
      color: 'yellow'
    },
    {
      id: 5,
      type: 'warning',
      title: 'Low Disk Space',
      message: 'Server disk usage at 85% capacity',
      timestamp: '2025-12-27 12:00:00',
      status: 'active',
      icon: HardDrive,
      color: 'orange'
    }
  ]);

  const [businessAlerts, setBusinessAlerts] = useState([
    {
      id: 1,
      type: 'milestone',
      title: 'Daily Revenue Milestone',
      message: 'Daily revenue crossed ₹10 Lakhs milestone!',
      timestamp: '2025-12-27 16:00:00',
      value: '₹12.5L',
      icon: TrendingUp,
      color: 'green'
    },
    {
      id: 2,
      type: 'transaction',
      title: 'High-Value Transaction',
      message: 'Transaction of ₹50,000 detected from user #12345',
      timestamp: '2025-12-27 15:45:00',
      value: '₹50,000',
      icon: DollarSign,
      color: 'blue'
    },
    {
      id: 3,
      type: 'merchant',
      title: 'New Merchant Signup',
      message: 'Premium merchant "Luxury Fashion Store" signed up',
      timestamp: '2025-12-27 14:30:00',
      value: 'Premium',
      icon: Store,
      color: 'purple'
    },
    {
      id: 4,
      type: 'content',
      title: 'Viral Content Alert',
      message: 'Reel #5678 reached 100K views in 24 hours',
      timestamp: '2025-12-27 13:00:00',
      value: '100K views',
      icon: Star,
      color: 'yellow'
    },
    {
      id: 5,
      type: 'review',
      title: 'Negative Review Alert',
      message: 'Merchant "Quick Foods" received 1-star review',
      timestamp: '2025-12-27 12:15:00',
      value: '1 star',
      icon: ThumbsDown,
      color: 'red'
    }
  ]);

  const [scheduledReports, setScheduledReports] = useState([
    {
      id: 1,
      name: 'Daily Summary Report',
      schedule: 'Daily at 8:00 AM',
      recipients: 'admin@rez.com, ops@rez.com',
      format: 'PDF',
      enabled: true,
      lastSent: '2025-12-27 08:00:00'
    },
    {
      id: 2,
      name: 'Weekly Performance Report',
      schedule: 'Every Monday at 9:00 AM',
      recipients: 'management@rez.com',
      format: 'Excel',
      enabled: true,
      lastSent: '2025-12-23 09:00:00'
    },
    {
      id: 3,
      name: 'Monthly Financial Report',
      schedule: '1st of every month at 10:00 AM',
      recipients: 'finance@rez.com, ceo@rez.com',
      format: 'PDF',
      enabled: true,
      lastSent: '2025-12-01 10:00:00'
    },
    {
      id: 4,
      name: 'Custom Analytics Report',
      schedule: 'Every Friday at 5:00 PM',
      recipients: 'analytics@rez.com',
      format: 'CSV',
      enabled: false,
      lastSent: '2025-12-20 17:00:00'
    }
  ]);

  const [notificationPreferences, setNotificationPreferences] = useState({
    systemAlerts: {
      email: true,
      sms: false,
      push: true
    },
    businessAlerts: {
      email: true,
      sms: true,
      push: true
    },
    reports: {
      email: true,
      sms: false,
      push: false
    },
    userActivity: {
      email: false,
      sms: false,
      push: true
    }
  });

  const [alertHistory, setAlertHistory] = useState([
    {
      id: 1,
      type: 'System Alert',
      title: 'Payment Gateway Down',
      severity: 'Critical',
      timestamp: '2025-12-27 15:30:00',
      status: 'Active',
      recipient: 'All Admins'
    },
    {
      id: 2,
      type: 'Business Alert',
      title: 'Daily Revenue Milestone',
      severity: 'Info',
      timestamp: '2025-12-27 16:00:00',
      status: 'Sent',
      recipient: 'Management Team'
    },
    {
      id: 3,
      type: 'System Alert',
      title: 'Database Backup Complete',
      severity: 'Info',
      timestamp: '2025-12-27 03:00:00',
      status: 'Sent',
      recipient: 'Operations Team'
    },
    {
      id: 4,
      type: 'Business Alert',
      title: 'High-Value Transaction',
      severity: 'Warning',
      timestamp: '2025-12-27 15:45:00',
      status: 'Sent',
      recipient: 'Finance Team'
    },
    {
      id: 5,
      type: 'Report',
      title: 'Daily Summary Report',
      severity: 'Info',
      timestamp: '2025-12-27 08:00:00',
      status: 'Sent',
      recipient: 'All Admins'
    }
  ]);

  const toggleReportStatus = (reportId) => {
    setScheduledReports(scheduledReports.map(report =>
      report.id === reportId ? { ...report, enabled: !report.enabled } : report
    ));
  };

  const togglePreference = (category, channel) => {
    setNotificationPreferences({
      ...notificationPreferences,
      [category]: {
        ...notificationPreferences[category],
        [channel]: !notificationPreferences[category][channel]
      }
    });
  };

  const filteredHistory = alertHistory.filter(alert => {
    const matchesSearch = alert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         alert.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || alert.type === filterType;
    const matchesSeverity = filterSeverity === 'all' || alert.severity === filterSeverity;
    return matchesSearch && matchesType && matchesSeverity;
  });

  const getSeverityColor = (severity) => {
    const colors = {
      'Critical': 'bg-red-100 text-red-700',
      'Warning': 'bg-yellow-100 text-yellow-700',
      'Info': 'bg-blue-100 text-blue-700'
    };
    return colors[severity] || 'bg-gray-100 text-gray-700';
  };

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-red-100 text-red-700',
      'Sent': 'bg-green-100 text-green-700',
      'Failed': 'bg-gray-100 text-gray-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Notifications & Alerts</h1>
              <p className="text-gray-600 mt-1">Manage system notifications and business alerts</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Download className="w-5 h-5" />
              Export Alerts
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Alerts</p>
                <p className="text-3xl font-bold text-red-600 mt-2">
                  {systemNotifications.filter(n => n.status === 'active').length}
                </p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Business Alerts</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">{businessAlerts.length}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Scheduled Reports</p>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  {scheduledReports.filter(r => r.enabled).length}/{scheduledReports.length}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Sent Today</p>
                <p className="text-3xl font-bold text-purple-600 mt-2">47</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Bell className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab('system')}
              className={`px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'system'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5" />
                System Notifications
              </div>
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'business'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Business Alerts
              </div>
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'reports'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Scheduled Reports
              </div>
            </button>
            <button
              onClick={() => setActiveTab('preferences')}
              className={`px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'preferences'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Preferences
              </div>
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'history'
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Alert History
              </div>
            </button>
          </div>

          {/* System Notifications Tab */}
          {activeTab === 'system' && (
            <div className="p-6">
              <div className="space-y-4">
                {systemNotifications.map(notification => {
                  const Icon = notification.icon;
                  return (
                    <div
                      key={notification.id}
                      className={`border-l-4 ${
                        notification.color === 'red' ? 'border-red-500 bg-red-50' :
                        notification.color === 'yellow' ? 'border-yellow-500 bg-yellow-50' :
                        notification.color === 'orange' ? 'border-orange-500 bg-orange-50' :
                        'border-green-500 bg-green-50'
                      } p-4 rounded-r-lg`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${
                          notification.color === 'red' ? 'bg-red-100' :
                          notification.color === 'yellow' ? 'bg-yellow-100' :
                          notification.color === 'orange' ? 'bg-orange-100' :
                          'bg-green-100'
                        }`}>
                          <Icon className={`w-6 h-6 ${
                            notification.color === 'red' ? 'text-red-600' :
                            notification.color === 'yellow' ? 'text-yellow-600' :
                            notification.color === 'orange' ? 'text-orange-600' :
                            'text-green-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-bold text-gray-900">{notification.title}</h4>
                              <p className="text-sm text-gray-700 mt-1">{notification.message}</p>
                              <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {notification.timestamp}
                              </p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              notification.status === 'active' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                            }`}>
                              {notification.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Business Alerts Tab */}
          {activeTab === 'business' && (
            <div className="p-6">
              <div className="space-y-4">
                {businessAlerts.map(alert => {
                  const Icon = alert.icon;
                  return (
                    <div
                      key={alert.id}
                      className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${
                          alert.color === 'green' ? 'bg-green-100' :
                          alert.color === 'blue' ? 'bg-blue-100' :
                          alert.color === 'purple' ? 'bg-purple-100' :
                          alert.color === 'yellow' ? 'bg-yellow-100' :
                          'bg-red-100'
                        }`}>
                          <Icon className={`w-6 h-6 ${
                            alert.color === 'green' ? 'text-green-600' :
                            alert.color === 'blue' ? 'text-blue-600' :
                            alert.color === 'purple' ? 'text-purple-600' :
                            alert.color === 'yellow' ? 'text-yellow-600' :
                            'text-red-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-bold text-gray-900">{alert.title}</h4>
                              <p className="text-sm text-gray-700 mt-1">{alert.message}</p>
                              <p className="text-xs text-gray-500 mt-2">{alert.timestamp}</p>
                            </div>
                            <span className="text-lg font-bold text-gray-900">{alert.value}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Scheduled Reports Tab */}
          {activeTab === 'reports' && (
            <div className="p-6">
              <div className="space-y-4">
                {scheduledReports.map(report => (
                  <div
                    key={report.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-bold text-gray-900">{report.name}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            report.enabled ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {report.enabled ? 'Enabled' : 'Disabled'}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{report.schedule}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <span>{report.recipients}</span>
                          </div>
                          <div>
                            <span className="font-medium">Format:</span> {report.format}
                          </div>
                          <div>
                            <span className="font-medium">Last Sent:</span> {report.lastSent}
                          </div>
                        </div>
                      </div>
                      <button onClick={() => toggleReportStatus(report.id)}>
                        {report.enabled ? (
                          <ToggleRight className="w-10 h-10 text-green-600" />
                        ) : (
                          <ToggleLeft className="w-10 h-10 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === 'preferences' && (
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Notification Preferences</h3>
              <div className="space-y-6">
                {Object.entries(notificationPreferences).map(([category, channels]) => (
                  <div key={category} className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4 capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-gray-600" />
                          <span className="font-medium text-gray-900">Email</span>
                        </div>
                        <button onClick={() => togglePreference(category, 'email')}>
                          {channels.email ? (
                            <ToggleRight className="w-10 h-10 text-green-600" />
                          ) : (
                            <ToggleLeft className="w-10 h-10 text-gray-400" />
                          )}
                        </button>
                      </div>

                      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-3">
                          <MessageSquare className="w-5 h-5 text-gray-600" />
                          <span className="font-medium text-gray-900">SMS</span>
                        </div>
                        <button onClick={() => togglePreference(category, 'sms')}>
                          {channels.sms ? (
                            <ToggleRight className="w-10 h-10 text-green-600" />
                          ) : (
                            <ToggleLeft className="w-10 h-10 text-gray-400" />
                          )}
                        </button>
                      </div>

                      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Smartphone className="w-5 h-5 text-gray-600" />
                          <span className="font-medium text-gray-900">Push</span>
                        </div>
                        <button onClick={() => togglePreference(category, 'push')}>
                          {channels.push ? (
                            <ToggleRight className="w-10 h-10 text-green-600" />
                          ) : (
                            <ToggleLeft className="w-10 h-10 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Alert History Tab */}
          {activeTab === 'history' && (
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search alerts..."
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
                  <option value="System Alert">System Alert</option>
                  <option value="Business Alert">Business Alert</option>
                  <option value="Report">Report</option>
                </select>
                <select
                  value={filterSeverity}
                  onChange={(e) => setFilterSeverity(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Severity</option>
                  <option value="Critical">Critical</option>
                  <option value="Warning">Warning</option>
                  <option value="Info">Info</option>
                </select>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Alert</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Severity</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recipient</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredHistory.map(alert => (
                      <tr key={alert.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <span className="text-sm font-medium text-gray-900">{alert.type}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-900">{alert.title}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                            {alert.severity}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">{alert.timestamp}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(alert.status)}`}>
                            {alert.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">{alert.recipient}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
