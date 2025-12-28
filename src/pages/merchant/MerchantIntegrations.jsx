import { useState } from 'react';
import { Zap, CheckCircle, XCircle, Clock, Settings, Key, Link as LinkIcon, RefreshCw, AlertCircle, Download, Upload, Code, Webhook, Database, Cloud, CreditCard, Truck, MessageSquare, Mail, ShoppingCart } from 'lucide-react';

export default function MerchantIntegrations() {
  const [activeTab, setActiveTab] = useState('active');
  const [showApiKey, setShowApiKey] = useState(false);

  // Available integrations
  const integrations = [
    {
      id: 'razorpay',
      name: 'Razorpay',
      category: 'Payment Gateway',
      description: 'Accept payments online with India\'s leading payment solution',
      icon: CreditCard,
      status: 'active',
      connected: true,
      lastSync: '2025-12-28 10:30 AM',
      transactions: 1245,
      color: 'blue',
      config: {
        apiKey: 'rzp_live_xxxxxxxxxxxx',
        webhookUrl: 'https://api.rez.com/webhooks/razorpay'
      }
    },
    {
      id: 'shiprocket',
      name: 'Shiprocket',
      category: 'Shipping',
      description: 'AI-powered multi-courier shipping & logistics platform',
      icon: Truck,
      status: 'active',
      connected: true,
      lastSync: '2025-12-28 11:15 AM',
      shipments: 567,
      color: 'orange',
      config: {
        apiToken: 'shp_xxxxxxxxxxxx',
        webhookUrl: 'https://api.rez.com/webhooks/shiprocket'
      }
    },
    {
      id: 'whatsapp-business',
      name: 'WhatsApp Business API',
      category: 'Communication',
      description: 'Send order updates and customer support via WhatsApp',
      icon: MessageSquare,
      status: 'active',
      connected: true,
      lastSync: '2025-12-28 09:45 AM',
      messages: 3421,
      color: 'green',
      config: {
        phoneNumber: '+91 9876543210',
        apiKey: 'wa_xxxxxxxxxxxx'
      }
    },
    {
      id: 'mailchimp',
      name: 'Mailchimp',
      category: 'Email Marketing',
      description: 'Email marketing and automation platform',
      icon: Mail,
      status: 'inactive',
      connected: false,
      lastSync: null,
      subscribers: 0,
      color: 'yellow',
      config: null
    },
    {
      id: 'shopify',
      name: 'Shopify',
      category: 'E-commerce',
      description: 'Sync products and orders with Shopify store',
      icon: ShoppingCart,
      status: 'error',
      connected: true,
      lastSync: '2025-12-27 06:30 PM',
      error: 'API rate limit exceeded',
      color: 'purple',
      config: {
        storeUrl: 'mystore.myshopify.com',
        apiKey: 'shpat_xxxxxxxxxxxx'
      }
    },
    {
      id: 'zoho-books',
      name: 'Zoho Books',
      category: 'Accounting',
      description: 'Automated accounting and invoice management',
      icon: Database,
      status: 'active',
      connected: true,
      lastSync: '2025-12-28 08:00 AM',
      invoices: 234,
      color: 'red',
      config: {
        organizationId: 'org_xxxxxxxxxxxx',
        authToken: 'zoho_xxxxxxxxxxxx'
      }
    }
  ];

  // Webhook configurations
  const webhooks = [
    {
      id: 'wh-001',
      event: 'order.created',
      url: 'https://api.partner.com/webhooks/orders',
      status: 'active',
      lastTriggered: '2025-12-28 11:30 AM',
      successRate: 99.8
    },
    {
      id: 'wh-002',
      event: 'payment.success',
      url: 'https://api.accounting.com/webhooks/payments',
      status: 'active',
      lastTriggered: '2025-12-28 10:15 AM',
      successRate: 100
    },
    {
      id: 'wh-003',
      event: 'inventory.low_stock',
      url: 'https://api.supplier.com/webhooks/reorder',
      status: 'paused',
      lastTriggered: '2025-12-25 03:45 PM',
      successRate: 95.2
    }
  ];

  // API usage stats
  const apiStats = {
    totalCalls: 45678,
    successRate: 99.2,
    avgResponseTime: 245,
    monthlyLimit: 100000,
    usagePercent: 45.7
  };

  // Performance metrics
  const performanceMetrics = [
    {
      label: 'Active Integrations',
      value: '4',
      change: '+2',
      trend: 'up',
      icon: Zap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'API Calls (Month)',
      value: '45.7K',
      change: '+12.3%',
      trend: 'up',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Success Rate',
      value: '99.2%',
      change: '+0.5%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Avg Response Time',
      value: '245ms',
      change: '-12ms',
      trend: 'down',
      icon: Clock,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { label: 'Active', className: 'bg-green-100 text-green-700', icon: CheckCircle },
      inactive: { label: 'Inactive', className: 'bg-gray-100 text-gray-700', icon: XCircle },
      error: { label: 'Error', className: 'bg-red-100 text-red-700', icon: AlertCircle },
      paused: { label: 'Paused', className: 'bg-yellow-100 text-yellow-700', icon: Clock }
    };
    const config = statusConfig[status] || statusConfig.inactive;
    const Icon = config.icon;
    return (
      <span className={`px-2 py-1 text-xs rounded-full font-medium flex items-center gap-1 ${config.className}`}>
        <Icon className="w-3 h-3" />
        {config.label}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-8 h-8" />
                <h1 className="text-3xl font-bold">Integration Hub</h1>
              </div>
              <p className="text-purple-100">Connect with third-party services, APIs & webhooks</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center gap-2">
                <Key className="w-5 h-5" />
                API Keys
              </button>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center gap-2">
                <Code className="w-5 h-5" />
                Documentation
              </button>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {performanceMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
            );
          })}
        </div>

        {/* API Usage */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">API Usage This Month</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total API Calls</p>
              <p className="text-2xl font-bold text-gray-900">{apiStats.totalCalls.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Monthly Limit</p>
              <p className="text-2xl font-bold text-gray-900">{apiStats.monthlyLimit.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Success Rate</p>
              <p className="text-2xl font-bold text-green-600">{apiStats.successRate}%</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Avg Response</p>
              <p className="text-2xl font-bold text-blue-600">{apiStats.avgResponseTime}ms</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600">Usage Progress</span>
              <span className="font-semibold text-gray-900">{apiStats.usagePercent}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full"
                style={{ width: `${apiStats.usagePercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Tabs */}
          <div className="border-b border-gray-200 px-6">
            <div className="flex gap-4">
              {['active', 'available', 'webhooks', 'api'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-4 font-semibold text-sm capitalize border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-purple-600 text-purple-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {(activeTab === 'active' || activeTab === 'available') && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integrations
                  .filter(int => activeTab === 'active' ? int.connected : true)
                  .map((integration) => {
                    const Icon = integration.icon;
                    return (
                      <div key={integration.id} className={`border-2 rounded-lg p-6 ${
                        integration.status === 'error' ? 'border-red-200 bg-red-50' :
                        integration.connected ? `border-${integration.color}-200` : 'border-gray-200'
                      }`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-3">
                            <div className={`p-3 bg-${integration.color}-100 rounded-lg`}>
                              <Icon className={`w-6 h-6 text-${integration.color}-600`} />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-bold text-gray-900">{integration.name}</h4>
                                {getStatusBadge(integration.status)}
                              </div>
                              <p className="text-sm text-gray-600 mb-1">{integration.category}</p>
                              <p className="text-sm text-gray-600">{integration.description}</p>
                            </div>
                          </div>
                        </div>

                        {integration.connected && (
                          <div className="space-y-2 mb-4">
                            {integration.lastSync && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Last Sync:</span>
                                <span className="font-semibold text-gray-900">{integration.lastSync}</span>
                              </div>
                            )}
                            {integration.transactions && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Transactions:</span>
                                <span className="font-semibold text-gray-900">{integration.transactions}</span>
                              </div>
                            )}
                            {integration.shipments && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Shipments:</span>
                                <span className="font-semibold text-gray-900">{integration.shipments}</span>
                              </div>
                            )}
                            {integration.messages && (
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Messages:</span>
                                <span className="font-semibold text-gray-900">{integration.messages}</span>
                              </div>
                            )}
                            {integration.error && (
                              <div className="flex items-center gap-2 text-sm text-red-600">
                                <AlertCircle className="w-4 h-4" />
                                {integration.error}
                              </div>
                            )}
                          </div>
                        )}

                        <div className="flex items-center gap-2">
                          {integration.connected ? (
                            <>
                              <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                <Settings className="w-4 h-4" />
                                Configure
                              </button>
                              <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                                <RefreshCw className="w-4 h-4" />
                                Sync
                              </button>
                              <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors">
                                Disconnect
                              </button>
                            </>
                          ) : (
                            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                              <LinkIcon className="w-4 h-4" />
                              Connect
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}

            {activeTab === 'webhooks' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Webhook Configurations</h3>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Add Webhook
                  </button>
                </div>
                <div className="space-y-3">
                  {webhooks.map((webhook) => (
                    <div key={webhook.id} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Webhook className="w-5 h-5 text-purple-600" />
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-semibold text-gray-900">{webhook.event}</p>
                              {getStatusBadge(webhook.status)}
                            </div>
                            <p className="text-sm text-gray-600">{webhook.url}</p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600 mb-1">Last Triggered</p>
                          <p className="font-semibold text-gray-900">{webhook.lastTriggered}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">Success Rate</p>
                          <p className="font-semibold text-green-600">{webhook.successRate}%</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'api' && (
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">API Credentials</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">API Key</label>
                      <div className="flex items-center gap-2">
                        <input
                          type={showApiKey ? 'text' : 'password'}
                          value="sk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                          readOnly
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                        />
                        <button
                          onClick={() => setShowApiKey(!showApiKey)}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                        >
                          {showApiKey ? 'Hide' : 'Show'}
                        </button>
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                          Copy
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Webhook Secret</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="password"
                          value="whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                          readOnly
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                        />
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">API Documentation</h3>
                  <p className="text-gray-600 mb-4">Access comprehensive API documentation and examples</p>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Documentation
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
