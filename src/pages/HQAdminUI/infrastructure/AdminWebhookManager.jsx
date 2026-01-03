import React, { useState } from 'react';
import {
  ArrowLeft, Webhook, Plus, Search, Filter, CheckCircle, XCircle,
  Clock, AlertCircle, RefreshCw, Eye, Edit, Trash2, Copy,
  Send, Activity, ChevronRight, Lock, Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminWebhookManager = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('endpoints');
  const [showCreate, setShowCreate] = useState(false);

  const stats = {
    totalEndpoints: 45,
    activeEndpoints: 42,
    deliveredToday: 12456,
    failedToday: 23,
    avgLatency: 180
  };

  const webhookEndpoints = [
    {
      id: 1,
      name: 'Order Events - Swiggy',
      url: 'https://api.swiggy.com/webhooks/rez',
      events: ['order.created', 'order.completed', 'order.cancelled'],
      status: 'active',
      secret: 'whsec_1234...abcd',
      lastDelivery: '2 mins ago',
      successRate: 99.8
    },
    {
      id: 2,
      name: 'Payment Updates - Razorpay',
      url: 'https://webhooks.razorpay.com/rez',
      events: ['payment.captured', 'payment.failed', 'refund.processed'],
      status: 'active',
      secret: 'whsec_5678...efgh',
      lastDelivery: '5 mins ago',
      successRate: 100
    },
    {
      id: 3,
      name: 'Merchant Sync - Zoho',
      url: 'https://zoho.com/webhooks/rez-sync',
      events: ['merchant.created', 'merchant.updated', 'inventory.updated'],
      status: 'active',
      secret: 'whsec_9012...ijkl',
      lastDelivery: '15 mins ago',
      successRate: 98.5
    },
    {
      id: 4,
      name: 'Analytics - Internal',
      url: 'https://analytics.rez.internal/events',
      events: ['user.signup', 'order.created', 'coin.earned'],
      status: 'paused',
      secret: 'whsec_3456...mnop',
      lastDelivery: '2 days ago',
      successRate: 95.2
    }
  ];

  const eventTypes = [
    { category: 'Orders', events: ['order.created', 'order.updated', 'order.completed', 'order.cancelled'] },
    { category: 'Payments', events: ['payment.initiated', 'payment.captured', 'payment.failed', 'refund.processed'] },
    { category: 'Merchants', events: ['merchant.created', 'merchant.updated', 'merchant.verified'] },
    { category: 'Users', events: ['user.signup', 'user.updated', 'user.deleted'] },
    { category: 'Coins', events: ['coin.earned', 'coin.redeemed', 'coin.expired'] }
  ];

  const recentDeliveries = [
    {
      id: 1,
      event: 'order.created',
      endpoint: 'Order Events - Swiggy',
      status: 'delivered',
      responseCode: 200,
      latency: 145,
      timestamp: '2024-01-17 14:30:45'
    },
    {
      id: 2,
      event: 'payment.captured',
      endpoint: 'Payment Updates - Razorpay',
      status: 'delivered',
      responseCode: 200,
      latency: 89,
      timestamp: '2024-01-17 14:30:12'
    },
    {
      id: 3,
      event: 'order.completed',
      endpoint: 'Order Events - Swiggy',
      status: 'failed',
      responseCode: 500,
      latency: 3000,
      timestamp: '2024-01-17 14:29:58',
      error: 'Internal server error'
    },
    {
      id: 4,
      event: 'merchant.updated',
      endpoint: 'Merchant Sync - Zoho',
      status: 'delivered',
      responseCode: 201,
      latency: 234,
      timestamp: '2024-01-17 14:28:30'
    },
    {
      id: 5,
      event: 'coin.earned',
      endpoint: 'Analytics - Internal',
      status: 'pending_retry',
      responseCode: 503,
      latency: 5000,
      timestamp: '2024-01-17 14:27:15',
      retryCount: 2
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400';
      case 'paused': return 'bg-yellow-500/20 text-yellow-400';
      case 'disabled': return 'bg-red-500/20 text-red-400';
      case 'delivered': return 'bg-green-500/20 text-green-400';
      case 'failed': return 'bg-red-500/20 text-red-400';
      case 'pending_retry': return 'bg-yellow-500/20 text-yellow-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Webhook size={24} className="mr-2" />
                Webhook Manager
              </h1>
              <p className="text-blue-200 text-sm">Manage event subscriptions</p>
            </div>
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="bg-white/20 p-2 rounded-lg"
          >
            <Plus size={24} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.totalEndpoints}</p>
            <p className="text-xs text-blue-200">Endpoints</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-400">{stats.deliveredToday}</p>
            <p className="text-xs text-blue-200">Delivered</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-red-400">{stats.failedToday}</p>
            <p className="text-xs text-blue-200">Failed</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.avgLatency}ms</p>
            <p className="text-xs text-blue-200">Avg Latency</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('endpoints')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'endpoints' ? 'bg-blue-600 text-white' : 'text-gray-400'
            }`}
          >
            Endpoints
          </button>
          <button
            onClick={() => setActiveTab('deliveries')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'deliveries' ? 'bg-blue-600 text-white' : 'text-gray-400'
            }`}
          >
            Deliveries
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'events' ? 'bg-blue-600 text-white' : 'text-gray-400'
            }`}
          >
            Event Types
          </button>
        </div>
      </div>

      {/* Endpoints List */}
      {activeTab === 'endpoints' && (
        <div className="px-4 space-y-3">
          {webhookEndpoints.map(endpoint => (
            <div key={endpoint.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center">
                    <p className="text-white font-bold">{endpoint.name}</p>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${getStatusColor(endpoint.status)}`}>
                      {endpoint.status}
                    </span>
                  </div>
                  <div className="flex items-center mt-1">
                    <Globe size={12} className="text-gray-400 mr-1" />
                    <code className="text-gray-400 text-xs truncate max-w-[250px]">{endpoint.url}</code>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-400">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-3 mb-3">
                <p className="text-gray-400 text-xs mb-2">Subscribed Events</p>
                <div className="flex flex-wrap gap-1">
                  {endpoint.events.map((event, idx) => (
                    <span key={idx} className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded">
                      {event}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Lock size={12} className="text-gray-400 mr-1" />
                    <code className="text-gray-400 text-xs">{endpoint.secret}</code>
                    <button className="ml-1 text-gray-400">
                      <Copy size={12} />
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400">Last: {endpoint.lastDelivery}</span>
                  <span className={endpoint.successRate >= 99 ? 'text-green-400' : 'text-yellow-400'}>
                    {endpoint.successRate}%
                  </span>
                </div>
              </div>

              <div className="flex space-x-2 mt-3">
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                  <Send size={14} className="mr-1" />
                  Test
                </button>
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                  <Activity size={14} className="mr-1" />
                  Logs
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Deliveries List */}
      {activeTab === 'deliveries' && (
        <div className="px-4 space-y-3">
          {recentDeliveries.map(delivery => (
            <div key={delivery.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center">
                    <code className="text-cyan-400 text-sm font-mono">{delivery.event}</code>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${getStatusColor(delivery.status)}`}>
                      {delivery.status.replace('_', ' ')}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{delivery.endpoint}</p>
                </div>
                <span className={`text-sm font-mono ${
                  delivery.responseCode >= 200 && delivery.responseCode < 300 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {delivery.responseCode}
                </span>
              </div>

              {delivery.error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-2 mb-2">
                  <p className="text-red-400 text-sm">{delivery.error}</p>
                  {delivery.retryCount && (
                    <p className="text-gray-500 text-xs mt-1">Retry attempt: {delivery.retryCount}/3</p>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{delivery.timestamp}</span>
                <span>{delivery.latency}ms</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Event Types */}
      {activeTab === 'events' && (
        <div className="px-4 space-y-4">
          {eventTypes.map((category, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-bold mb-3">{category.category}</h3>
              <div className="grid grid-cols-2 gap-2">
                {category.events.map((event, eventIdx) => (
                  <div key={eventIdx} className="bg-gray-700/50 rounded-lg p-2 flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
                    <code className="text-gray-300 text-xs">{event}</code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Webhook Modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
          <div className="bg-gray-800 rounded-t-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-bold">Create Webhook</h3>
                <button onClick={() => setShowCreate(false)} className="text-gray-400">
                  ✕
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Endpoint Name</label>
                <input
                  type="text"
                  placeholder="e.g., Order Events - Partner"
                  className="w-full bg-gray-700 text-white p-3 rounded-xl"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Webhook URL</label>
                <input
                  type="url"
                  placeholder="https://api.example.com/webhooks"
                  className="w-full bg-gray-700 text-white p-3 rounded-xl font-mono text-sm"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Events to Subscribe</label>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {eventTypes.map((category, idx) => (
                    <div key={idx} className="bg-gray-700/50 rounded-lg p-3">
                      <p className="text-gray-300 text-sm font-medium mb-2">{category.category}</p>
                      <div className="flex flex-wrap gap-2">
                        {category.events.map((event, eventIdx) => (
                          <label key={eventIdx} className="flex items-center bg-gray-600 px-2 py-1 rounded text-xs">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-gray-300">{event}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center">
                <Webhook size={20} className="mr-2" />
                Create Webhook
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminWebhookManager;
