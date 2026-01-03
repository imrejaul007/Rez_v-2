import { useState } from 'react';
import {
  Settings, Server, Link2, Database, RefreshCw, CheckCircle, XCircle,
  AlertTriangle, Code, Key, Webhook, Activity, Clock, Shield, Zap,
  Download, Upload, FileJson, Terminal, Copy, Eye, EyeOff, Plus,
  Search, ArrowRight, ExternalLink, HelpCircle, Play, Pause, Trash2,
  Smartphone, Monitor, CreditCard, QrCode, Receipt, Users, Gift
} from 'lucide-react';

export default function MerchantPOSIntegration() {
  const [activeTab, setActiveTab] = useState('connection');
  const [showApiKey, setShowApiKey] = useState(false);
  const [selectedPOS, setSelectedPOS] = useState(null);

  // Current Connection Status
  const connectionStatus = {
    connected: true,
    provider: 'Square POS',
    lastSync: '2 minutes ago',
    syncStatus: 'active',
    transactionsToday: 47,
    coinsAwarded: 2350,
    offersApplied: 12
  };

  // Available POS Systems
  const posOptions = [
    {
      id: 'square',
      name: 'Square POS',
      logo: '🟦',
      description: 'Popular all-in-one POS for retail & restaurants',
      features: ['Real-time sync', 'Inventory tracking', 'Customer management', 'Analytics'],
      setupTime: '5 minutes',
      popular: true
    },
    {
      id: 'shopify',
      name: 'Shopify POS',
      logo: '🟢',
      description: 'Best for omnichannel retail businesses',
      features: ['Online + Offline', 'Inventory sync', 'Customer profiles', 'Discounts'],
      setupTime: '10 minutes',
      popular: true
    },
    {
      id: 'lightspeed',
      name: 'Lightspeed',
      logo: '🔴',
      description: 'Advanced POS for retail, restaurants & golf',
      features: ['Multi-location', 'Purchase orders', 'Loyalty built-in', 'Reporting'],
      setupTime: '15 minutes',
      popular: false
    },
    {
      id: 'clover',
      name: 'Clover POS',
      logo: '🍀',
      description: 'Flexible POS with app marketplace',
      features: ['App ecosystem', 'Employee management', 'Table service', 'Tips'],
      setupTime: '10 minutes',
      popular: true
    },
    {
      id: 'toast',
      name: 'Toast POS',
      logo: '🍞',
      description: 'Restaurant-focused POS system',
      features: ['Menu management', 'Online ordering', 'Kitchen display', 'Delivery'],
      setupTime: '20 minutes',
      popular: false
    },
    {
      id: 'custom',
      name: 'Custom Integration',
      logo: '🔧',
      description: 'Connect your own POS using our API',
      features: ['REST API', 'Webhooks', 'SDK support', 'Full control'],
      setupTime: 'Varies',
      popular: false
    }
  ];

  // Integration Features to Configure
  const integrationFeatures = [
    {
      id: 'auto_coins',
      title: 'Auto-Award RezCoins',
      description: 'Automatically award coins after each transaction',
      enabled: true,
      config: { rate: '1 coin per ₹10 spent' }
    },
    {
      id: 'coin_redemption',
      title: 'Coin Redemption at Checkout',
      description: 'Allow customers to redeem coins during payment',
      enabled: true,
      config: { maxRedemption: '50% of bill' }
    },
    {
      id: 'offer_sync',
      title: 'Offer Sync',
      description: 'Sync ReZ offers to your POS automatically',
      enabled: true,
      config: { autoApply: true }
    },
    {
      id: 'customer_lookup',
      title: 'Customer Lookup',
      description: 'Lookup ReZ customers by phone number',
      enabled: true,
      config: { showBalance: true, showTier: true }
    },
    {
      id: 'inventory_sync',
      title: 'Inventory Sync',
      description: 'Sync inventory between ReZ and your POS',
      enabled: false,
      config: { frequency: 'hourly' }
    },
    {
      id: 'receipt_branding',
      title: 'Receipt Branding',
      description: 'Add ReZ coins earned to customer receipts',
      enabled: true,
      config: { showQR: true }
    }
  ];

  // Recent Sync Activity
  const syncActivity = [
    { time: '2 mins ago', type: 'transaction', status: 'success', details: 'Order #4521 synced - ₹2,450 - +245 coins' },
    { time: '5 mins ago', type: 'offer', status: 'success', details: 'Applied 20% discount - Summer Sale' },
    { time: '8 mins ago', type: 'redemption', status: 'success', details: 'Redeemed 500 coins - ₹50 discount' },
    { time: '15 mins ago', type: 'transaction', status: 'success', details: 'Order #4520 synced - ₹890 - +89 coins' },
    { time: '20 mins ago', type: 'customer', status: 'success', details: 'New customer registered via POS' },
    { time: '1 hour ago', type: 'error', status: 'failed', details: 'Sync failed - Retried successfully' }
  ];

  // API Credentials
  const apiCredentials = {
    merchantId: 'MERCH_123456789',
    apiKey: 'rez_pos_sk_live_xxxxxxxxxxxxxxxxxx',
    webhookUrl: 'https://api.rez.app/webhooks/pos/MERCH_123456789',
    webhookSecret: 'whsec_xxxxxxxxxxxxxxxx'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">POS Integration</h1>
              <p className="text-gray-600 mt-1">Connect your POS system to ReZ for seamless rewards</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                Integration Guide
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Sync Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Connection Status Card */}
      {connectionStatus.connected && (
        <div className="px-6 py-4">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-4xl">
                  🟦
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-bold text-lg">Connected to {connectionStatus.provider}</span>
                  </div>
                  <div className="text-green-100 text-sm">Last synced: {connectionStatus.lastSync}</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">{connectionStatus.transactionsToday}</div>
                  <div className="text-sm text-green-100">Transactions Today</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{connectionStatus.coinsAwarded.toLocaleString()}</div>
                  <div className="text-sm text-green-100">Coins Awarded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{connectionStatus.offersApplied}</div>
                  <div className="text-sm text-green-100">Offers Applied</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="px-6">
        <div className="flex border-b border-gray-200">
          {[
            { id: 'connection', label: 'Connection', icon: Link2 },
            { id: 'features', label: 'Features', icon: Settings },
            { id: 'api', label: 'API & Credentials', icon: Key },
            { id: 'activity', label: 'Sync Activity', icon: Activity },
            { id: 'troubleshoot', label: 'Troubleshoot', icon: AlertTriangle }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 font-medium border-b-2 transition-all ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {activeTab === 'connection' && (
          <div className="space-y-6">
            {/* Current Connection */}
            {connectionStatus.connected && (
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900">Current Connection</h3>
                  <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                    Disconnect
                  </button>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <span className="text-4xl">🟦</span>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">Square POS</div>
                    <div className="text-sm text-gray-500">Connected since Jan 15, 2025</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Active
                    </span>
                    <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Available POS Systems */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">
                {connectionStatus.connected ? 'Switch to Another POS' : 'Connect Your POS System'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {posOptions.map((pos) => (
                  <button
                    key={pos.id}
                    onClick={() => setSelectedPOS(pos.id)}
                    className={`bg-white rounded-xl border-2 p-5 text-left transition-all hover:shadow-md ${
                      selectedPOS === pos.id ? 'border-purple-600' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{pos.logo}</span>
                        <div>
                          <div className="font-bold text-gray-900 flex items-center gap-2">
                            {pos.name}
                            {pos.popular && (
                              <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs">
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{pos.description}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {pos.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Setup time: {pos.setupTime}</span>
                      <ArrowRight className="w-5 h-5 text-purple-600" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {selectedPOS && (
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-purple-900">Ready to connect {posOptions.find(p => p.id === selectedPOS)?.name}?</h3>
                    <p className="text-sm text-purple-700 mt-1">You'll be redirected to authorize the connection</p>
                  </div>
                  <button className="px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 flex items-center gap-2">
                    Connect Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'features' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-5 border-b border-gray-200">
                <h3 className="font-bold text-gray-900">Integration Features</h3>
                <p className="text-sm text-gray-500">Configure how ReZ integrates with your POS</p>
              </div>
              <div className="divide-y divide-gray-100">
                {integrationFeatures.map((feature) => (
                  <div key={feature.id} className="p-5 flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          feature.enabled ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {feature.enabled ? 'Enabled' : 'Disabled'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{feature.description}</p>
                      {feature.enabled && feature.config && (
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(feature.config).map(([key, value]) => (
                            <span key={key} className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">
                              {typeof value === 'boolean' ? key : `${key}: ${value}`}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                        Configure
                      </button>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={feature.enabled} className="sr-only peer" readOnly />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'api' && (
          <div className="space-y-6">
            {/* API Credentials */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Key className="w-5 h-5 text-purple-600" />
                Your API Credentials
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Merchant ID</label>
                  <div className="flex gap-2">
                    <code className="flex-1 px-4 py-2 bg-gray-100 rounded-lg font-mono text-sm">
                      {apiCredentials.merchantId}
                    </code>
                    <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">API Key</label>
                  <div className="flex gap-2">
                    <code className="flex-1 px-4 py-2 bg-gray-100 rounded-lg font-mono text-sm">
                      {showApiKey ? apiCredentials.apiKey : '••••••••••••••••••••••••••••••'}
                    </code>
                    <button
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Webhook URL</label>
                  <div className="flex gap-2">
                    <code className="flex-1 px-4 py-2 bg-gray-100 rounded-lg font-mono text-sm break-all">
                      {apiCredentials.webhookUrl}
                    </code>
                    <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Integration Code */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-600" />
                Quick Integration Code
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-green-400 font-mono">
{`// Initialize ReZ POS SDK
const rez = new RezPOS({
  merchantId: '${apiCredentials.merchantId}',
  apiKey: 'your-api-key'
});

// After a transaction completes
await rez.recordTransaction({
  orderId: 'ORDER_123',
  amount: 2450,
  customerPhone: '+919876543210'
});

// Check customer balance
const customer = await rez.getCustomer('+919876543210');
console.log('Coins:', customer.rezCoins);

// Apply discount
const discount = await rez.applyOffer('SUMMER20', 2450);`}
                </pre>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download SDK
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                  <FileJson className="w-4 h-4" />
                  View Full Docs
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-5 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900">Sync Activity Log</h3>
                <p className="text-sm text-gray-500">Real-time sync status between ReZ and your POS</p>
              </div>
              <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              {syncActivity.map((activity, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    {activity.status === 'success' && <CheckCircle className="w-5 h-5 text-green-500" />}
                    {activity.status === 'failed' && <XCircle className="w-5 h-5 text-red-500" />}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          activity.type === 'transaction' ? 'bg-blue-100 text-blue-700' :
                          activity.type === 'offer' ? 'bg-green-100 text-green-700' :
                          activity.type === 'redemption' ? 'bg-purple-100 text-purple-700' :
                          activity.type === 'customer' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {activity.type}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{activity.details}</div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200 text-center">
              <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                View All Activity →
              </button>
            </div>
          </div>
        )}

        {activeTab === 'troubleshoot' && (
          <div className="space-y-6">
            {/* Connection Test */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-4">Connection Test</h3>
              <div className="space-y-3">
                {[
                  { name: 'API Connection', status: 'success', latency: '45ms' },
                  { name: 'Webhook Delivery', status: 'success', latency: '120ms' },
                  { name: 'Transaction Sync', status: 'success', latency: '89ms' },
                  { name: 'Inventory Sync', status: 'warning', latency: '2.3s' }
                ].map((test, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      {test.status === 'success' && <CheckCircle className="w-5 h-5 text-green-500" />}
                      {test.status === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                      {test.status === 'error' && <XCircle className="w-5 h-5 text-red-500" />}
                      <span className="font-medium text-gray-900">{test.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">Latency: {test.latency}</span>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Run Full Test
              </button>
            </div>

            {/* Common Issues */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-4">Common Issues & Solutions</h3>
              <div className="space-y-3">
                {[
                  { issue: 'Transactions not syncing', solution: 'Check API key permissions and webhook URL' },
                  { issue: 'Coins not being awarded', solution: 'Verify coin earning rules in Features tab' },
                  { issue: 'Offers not appearing in POS', solution: 'Ensure Offer Sync is enabled' },
                  { issue: 'Customer lookup failing', solution: 'Check phone number format (+91XXXXXXXXXX)' }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                    <div className="font-medium text-gray-900 mb-1">{item.issue}</div>
                    <div className="text-sm text-gray-600">{item.solution}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-purple-900">Need Help?</h3>
                  <p className="text-sm text-purple-700 mt-1">Our integration team is here to assist you</p>
                </div>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
