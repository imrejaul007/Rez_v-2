import { useState } from 'react';
import { CreditCard, MessageSquare, Mail, Bell, BarChart3, Share2, CheckCircle, XCircle, Settings, RefreshCw, Key } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminIntegrations() {
  const [activeTab, setActiveTab] = useState('payment');

  const [paymentGateways, setPaymentGateways] = useState([
    {
      id: 1,
      name: 'Razorpay',
      type: 'payment',
      status: 'active',
      lastSync: '2024-01-20 14:35:22',
      apiKey: 'rzp_live_***************',
      secretKey: '***************',
      webhookUrl: 'https://api.rez.com/webhooks/razorpay',
      testMode: false,
      transactionsToday: 1234,
      uptime: 99.8
    },
    {
      id: 2,
      name: 'Paytm',
      type: 'payment',
      status: 'active',
      lastSync: '2024-01-20 14:30:15',
      merchantId: 'PAYTM_***************',
      secretKey: '***************',
      webhookUrl: 'https://api.rez.com/webhooks/paytm',
      testMode: false,
      transactionsToday: 890,
      uptime: 99.5
    },
    {
      id: 3,
      name: 'PhonePe',
      type: 'payment',
      status: 'inactive',
      lastSync: '2024-01-15 10:20:00',
      merchantId: 'PHONEPE_***************',
      secretKey: '***************',
      webhookUrl: 'https://api.rez.com/webhooks/phonepe',
      testMode: true,
      transactionsToday: 0,
      uptime: 0
    }
  ]);

  const [smsGateways] = useState([
    {
      id: 1,
      name: 'Twilio',
      status: 'active',
      lastSync: '2024-01-20 14:35:00',
      accountSid: 'AC***************',
      authToken: '***************',
      phoneNumber: '+1234567890',
      messagesSent: 5670,
      creditsRemaining: 50000
    },
    {
      id: 2,
      name: 'MSG91',
      status: 'active',
      lastSync: '2024-01-20 14:30:00',
      authKey: '***************',
      senderId: 'REZAPP',
      messagesSent: 3450,
      creditsRemaining: 25000
    }
  ]);

  const [emailServices] = useState([
    {
      id: 1,
      name: 'SendGrid',
      status: 'active',
      lastSync: '2024-01-20 14:35:00',
      apiKey: 'SG.***************',
      fromEmail: 'noreply@rez.com',
      fromName: 'ReZ App',
      emailsSent: 12340,
      deliveryRate: 98.5
    },
    {
      id: 2,
      name: 'AWS SES',
      status: 'inactive',
      lastSync: '2024-01-10 10:00:00',
      region: 'ap-south-1',
      accessKey: '***************',
      secretKey: '***************',
      emailsSent: 0,
      deliveryRate: 0
    }
  ]);

  const [pushServices] = useState([
    {
      id: 1,
      name: 'Firebase Cloud Messaging',
      status: 'active',
      lastSync: '2024-01-20 14:35:00',
      projectId: 'rez-app-prod',
      serverKey: '***************',
      notificationsSent: 23450,
      deliveryRate: 95.2
    }
  ]);

  const [analytics] = useState([
    {
      id: 1,
      name: 'Google Analytics',
      status: 'active',
      lastSync: '2024-01-20 14:35:00',
      trackingId: 'UA-***************',
      propertyId: 'G-***************',
      eventsTracked: 125000
    },
    {
      id: 2,
      name: 'Mixpanel',
      status: 'active',
      lastSync: '2024-01-20 14:30:00',
      projectToken: '***************',
      apiSecret: '***************',
      eventsTracked: 89000
    },
    {
      id: 3,
      name: 'Amplitude',
      status: 'inactive',
      lastSync: '2024-01-01 00:00:00',
      apiKey: '***************',
      secretKey: '***************',
      eventsTracked: 0
    }
  ]);

  const [affiliateNetworks] = useState([
    {
      id: 1,
      name: 'Impact',
      status: 'active',
      lastSync: '2024-01-20 14:00:00',
      accountId: 'IMP_***************',
      apiKey: '***************',
      activePartners: 45,
      conversions: 1234,
      revenue: 456000
    },
    {
      id: 2,
      name: 'CJ Affiliate',
      status: 'active',
      lastSync: '2024-01-20 13:30:00',
      publisherId: 'CJ_***************',
      apiToken: '***************',
      activePartners: 23,
      conversions: 567,
      revenue: 234000
    }
  ]);

  const handleToggleStatus = (id, category) => {
    if (category === 'payment') {
      setPaymentGateways(prev => prev.map(g =>
        g.id === id ? { ...g, status: g.status === 'active' ? 'inactive' : 'active' } : g
      ));
    }
  };

  const handleTestConnection = (name) => {
    alert(`Testing connection to ${name}...`);
  };

  const handleSync = (name) => {
    alert(`Syncing ${name}...`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Third-party Integrations</h1>
              <p className="text-gray-600 mt-1">Manage all external service integrations</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-900">
                  {paymentGateways.filter(g => g.status === 'active').length + smsGateways.filter(s => s.status === 'active').length} Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Payment</p>
              <CreditCard className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">{paymentGateways.filter(g => g.status === 'active').length}/{paymentGateways.length}</p>
            <p className="text-xs text-gray-600 mt-1">Active gateways</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">SMS</p>
              <MessageSquare className="w-6 h-6 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">{smsGateways.filter(s => s.status === 'active').length}/{smsGateways.length}</p>
            <p className="text-xs text-gray-600 mt-1">Active services</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Email</p>
              <Mail className="w-6 h-6 text-orange-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">{emailServices.filter(e => e.status === 'active').length}/{emailServices.length}</p>
            <p className="text-xs text-gray-600 mt-1">Active services</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Analytics</p>
              <BarChart3 className="w-6 h-6 text-purple-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">{analytics.filter(a => a.status === 'active').length}/{analytics.length}</p>
            <p className="text-xs text-gray-600 mt-1">Active platforms</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm font-medium">Affiliate</p>
              <Share2 className="w-6 h-6 text-indigo-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">{affiliateNetworks.filter(a => a.status === 'active').length}/{affiliateNetworks.length}</p>
            <p className="text-xs text-gray-600 mt-1">Active networks</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('payment')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                  activeTab === 'payment'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                Payment Gateways
              </button>
              <button
                onClick={() => setActiveTab('communication')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                  activeTab === 'communication'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                Communication
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                  activeTab === 'analytics'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                Analytics
              </button>
              <button
                onClick={() => setActiveTab('affiliate')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors flex items-center gap-2 ${
                  activeTab === 'affiliate'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Share2 className="w-4 h-4" />
                Affiliate Networks
              </button>
            </nav>
          </div>

          {/* Payment Gateways Tab */}
          {activeTab === 'payment' && (
            <div className="p-6">
              <div className="space-y-4">
                {paymentGateways.map((gateway) => (
                  <div key={gateway.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">{gateway.name}</h3>
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            gateway.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {gateway.status === 'active' ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                            {gateway.status}
                          </span>
                          {gateway.testMode && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                              Test Mode
                            </span>
                          )}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-gray-600">API Key</p>
                            <p className="text-sm font-mono text-gray-900">{gateway.apiKey || gateway.merchantId}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Webhook URL</p>
                            <p className="text-sm font-mono text-gray-900 truncate">{gateway.webhookUrl}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Today's Transactions</p>
                            <p className="text-sm font-semibold text-gray-900">{gateway.transactionsToday.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Uptime</p>
                            <p className="text-sm font-semibold text-gray-900">{gateway.uptime}%</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">Last synced: {gateway.lastSync}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleToggleStatus(gateway.id, 'payment')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                          gateway.status === 'active'
                            ? 'bg-red-600 text-white hover:bg-red-700'
                            : 'bg-green-600 text-white hover:bg-green-700'
                        }`}
                      >
                        {gateway.status === 'active' ? 'Disable' : 'Enable'}
                      </button>
                      <button
                        onClick={() => handleTestConnection(gateway.name)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
                      >
                        Test Connection
                      </button>
                      <button
                        onClick={() => handleSync(gateway.name)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm font-medium"
                      >
                        <RefreshCw className="w-4 h-4" />
                        Sync Now
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">
                        <Settings className="w-4 h-4" />
                        Configure
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Communication Tab */}
          {activeTab === 'communication' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">SMS Gateways</h3>
              <div className="space-y-4 mb-8">
                {smsGateways.map((gateway) => (
                  <div key={gateway.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <MessageSquare className="w-6 h-6 text-blue-500" />
                          <h3 className="text-lg font-semibold text-gray-900">{gateway.name}</h3>
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            gateway.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {gateway.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-gray-600">Account/Auth Key</p>
                            <p className="text-sm font-mono text-gray-900">{gateway.accountSid || gateway.authKey}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Sender ID/Phone</p>
                            <p className="text-sm font-mono text-gray-900">{gateway.senderId || gateway.phoneNumber}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Messages Sent</p>
                            <p className="text-sm font-semibold text-gray-900">{gateway.messagesSent.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Credits Remaining</p>
                            <p className="text-sm font-semibold text-gray-900">{gateway.creditsRemaining.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                        Test SMS
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                        <Settings className="w-4 h-4" />
                        Configure
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Services</h3>
              <div className="space-y-4 mb-8">
                {emailServices.map((service) => (
                  <div key={service.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Mail className="w-6 h-6 text-orange-500" />
                          <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            service.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {service.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-gray-600">From Email</p>
                            <p className="text-sm font-mono text-gray-900">{service.fromEmail || service.region}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">From Name</p>
                            <p className="text-sm text-gray-900">{service.fromName || 'N/A'}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Emails Sent</p>
                            <p className="text-sm font-semibold text-gray-900">{service.emailsSent.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Delivery Rate</p>
                            <p className="text-sm font-semibold text-gray-900">{service.deliveryRate}%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm">
                        Send Test Email
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                        <Settings className="w-4 h-4" />
                        Configure
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Push Notifications</h3>
              <div className="space-y-4">
                {pushServices.map((service) => (
                  <div key={service.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Bell className="w-6 h-6 text-red-500" />
                          <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            {service.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-gray-600">Project ID</p>
                            <p className="text-sm font-mono text-gray-900">{service.projectId}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Notifications Sent</p>
                            <p className="text-sm font-semibold text-gray-900">{service.notificationsSent.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Delivery Rate</p>
                            <p className="text-sm font-semibold text-gray-900">{service.deliveryRate}%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
                        Send Test Notification
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                        <Settings className="w-4 h-4" />
                        Configure
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="p-6">
              <div className="space-y-4">
                {analytics.map((platform) => (
                  <div key={platform.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <BarChart3 className="w-6 h-6 text-purple-500" />
                          <h3 className="text-lg font-semibold text-gray-900">{platform.name}</h3>
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            platform.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {platform.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-gray-600">Tracking/Project ID</p>
                            <p className="text-sm font-mono text-gray-900">{platform.trackingId || platform.projectToken || platform.apiKey}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Events Tracked (Today)</p>
                            <p className="text-sm font-semibold text-gray-900">{platform.eventsTracked.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Last Sync</p>
                            <p className="text-sm text-gray-900">{platform.lastSync}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm">
                        View Dashboard
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                        <Settings className="w-4 h-4" />
                        Configure
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Affiliate Networks Tab */}
          {activeTab === 'affiliate' && (
            <div className="p-6">
              <div className="space-y-4">
                {affiliateNetworks.map((network) => (
                  <div key={network.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Share2 className="w-6 h-6 text-indigo-500" />
                          <h3 className="text-lg font-semibold text-gray-900">{network.name}</h3>
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            {network.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-gray-600">Account ID</p>
                            <p className="text-sm font-mono text-gray-900">{network.accountId || network.publisherId}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Active Partners</p>
                            <p className="text-sm font-semibold text-gray-900">{network.activePartners}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Conversions</p>
                            <p className="text-sm font-semibold text-gray-900">{network.conversions.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Revenue</p>
                            <p className="text-sm font-semibold text-green-600">₹{(network.revenue / 1000).toFixed(0)}K</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600">Last Sync</p>
                            <p className="text-sm text-gray-900">{network.lastSync}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 text-sm">
                        <RefreshCw className="w-4 h-4" />
                        Sync Data
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                        <Settings className="w-4 h-4" />
                        Configure
                      </button>
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
}
