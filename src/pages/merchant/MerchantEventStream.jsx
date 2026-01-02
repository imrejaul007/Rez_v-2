import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, Activity, Zap, Filter, Search, Eye, Clock,
  ChevronRight, Play, Pause, RefreshCw, Download, Settings,
  CheckCircle, XCircle, AlertCircle, Package, CreditCard,
  Users, ShoppingCart, Bell, Database
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantEventStream = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('stream');
  const [isLive, setIsLive] = useState(true);
  const [selectedType, setSelectedType] = useState('all');

  const stats = {
    eventsToday: 45678,
    eventsPerMinute: 156,
    avgLatency: '12ms',
    errorRate: 0.02
  };

  const eventTypes = [
    { id: 'all', name: 'All Events', count: 45678 },
    { id: 'order', name: 'Orders', count: 12456, icon: Package },
    { id: 'payment', name: 'Payments', count: 8934, icon: CreditCard },
    { id: 'inventory', name: 'Inventory', count: 15678, icon: Database },
    { id: 'customer', name: 'Customers', count: 5670, icon: Users },
    { id: 'notification', name: 'Notifications', count: 2940, icon: Bell }
  ];

  const [events, setEvents] = useState([
    {
      id: 'evt-001',
      type: 'order.created',
      source: 'swiggy',
      timestamp: new Date().toISOString(),
      data: { orderId: 'ORD-2024-0045', amount: 456, items: 3 },
      status: 'processed',
      latency: '8ms'
    },
    {
      id: 'evt-002',
      type: 'payment.success',
      source: 'razorpay',
      timestamp: new Date(Date.now() - 5000).toISOString(),
      data: { paymentId: 'pay_xyz123', amount: 456, method: 'upi' },
      status: 'processed',
      latency: '12ms'
    },
    {
      id: 'evt-003',
      type: 'inventory.updated',
      source: 'pos',
      timestamp: new Date(Date.now() - 12000).toISOString(),
      data: { sku: 'SKU-001', previousQty: 50, newQty: 47 },
      status: 'processed',
      latency: '5ms'
    },
    {
      id: 'evt-004',
      type: 'customer.created',
      source: 'rez-app',
      timestamp: new Date(Date.now() - 25000).toISOString(),
      data: { customerId: 'CUS-789', name: 'Rahul S.', phone: '+91 98765 43210' },
      status: 'processed',
      latency: '15ms'
    },
    {
      id: 'evt-005',
      type: 'order.status_changed',
      source: 'merchant-os',
      timestamp: new Date(Date.now() - 35000).toISOString(),
      data: { orderId: 'ORD-2024-0044', from: 'preparing', to: 'ready' },
      status: 'processed',
      latency: '6ms'
    },
    {
      id: 'evt-006',
      type: 'payment.failed',
      source: 'razorpay',
      timestamp: new Date(Date.now() - 45000).toISOString(),
      data: { paymentId: 'pay_abc456', amount: 289, reason: 'insufficient_funds' },
      status: 'error',
      latency: '18ms'
    },
    {
      id: 'evt-007',
      type: 'notification.sent',
      source: 'notification-hub',
      timestamp: new Date(Date.now() - 60000).toISOString(),
      data: { channel: 'sms', recipient: '+91 87654 32109', template: 'order_ready' },
      status: 'processed',
      latency: '45ms'
    }
  ]);

  const consumers = [
    {
      id: 'analytics',
      name: 'Analytics Pipeline',
      status: 'active',
      lag: 0,
      processed: '45.6K',
      health: 100
    },
    {
      id: 'webhook',
      name: 'Webhook Delivery',
      status: 'active',
      lag: 12,
      processed: '12.3K',
      health: 98
    },
    {
      id: 'tally-sync',
      name: 'Tally Sync',
      status: 'active',
      lag: 45,
      processed: '8.9K',
      health: 100
    },
    {
      id: 'notification',
      name: 'Notification Service',
      status: 'degraded',
      lag: 156,
      processed: '5.2K',
      health: 85
    }
  ];

  const getEventTypeColor = (type) => {
    if (type.startsWith('order')) return 'bg-blue-500/20 text-blue-400';
    if (type.startsWith('payment')) return 'bg-green-500/20 text-green-400';
    if (type.startsWith('inventory')) return 'bg-purple-500/20 text-purple-400';
    if (type.startsWith('customer')) return 'bg-cyan-500/20 text-cyan-400';
    if (type.startsWith('notification')) return 'bg-yellow-500/20 text-yellow-400';
    return 'bg-gray-500/20 text-gray-400';
  };

  const getEventIcon = (type) => {
    if (type.startsWith('order')) return Package;
    if (type.startsWith('payment')) return CreditCard;
    if (type.startsWith('inventory')) return Database;
    if (type.startsWith('customer')) return Users;
    if (type.startsWith('notification')) return Bell;
    return Zap;
  };

  const getSourceIcon = (source) => {
    switch (source) {
      case 'swiggy': return '🍊';
      case 'zomato': return '🔴';
      case 'razorpay': return '💳';
      case 'pos': return '🖥️';
      case 'rez-app': return '📱';
      case 'merchant-os': return '⚡';
      default: return '📡';
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = (now - date) / 1000;
    if (diff < 60) return `${Math.floor(diff)}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    return date.toLocaleTimeString();
  };

  const filteredEvents = selectedType === 'all'
    ? events
    : events.filter(e => e.type.startsWith(selectedType));

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Activity size={24} className="mr-2" />
                Event Stream
              </h1>
              <p className="text-rose-200 text-sm">Real-time event bus</p>
            </div>
          </div>
          <button
            onClick={() => setIsLive(!isLive)}
            className={`px-3 py-1 rounded-full text-sm flex items-center ${
              isLive ? 'bg-green-500' : 'bg-gray-600'
            }`}
          >
            {isLive ? (
              <>
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                Live
              </>
            ) : (
              <>
                <Pause size={14} className="mr-1" />
                Paused
              </>
            )}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{(stats.eventsToday/1000).toFixed(1)}K</p>
            <p className="text-xs text-rose-200">Today</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.eventsPerMinute}</p>
            <p className="text-xs text-rose-200">/min</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.avgLatency}</p>
            <p className="text-xs text-rose-200">Latency</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-400">{stats.errorRate}%</p>
            <p className="text-xs text-rose-200">Errors</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          {[
            { id: 'stream', label: 'Event Stream' },
            { id: 'consumers', label: 'Consumers' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id ? 'bg-rose-600 text-white' : 'text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stream Tab */}
      {activeTab === 'stream' && (
        <div className="px-4">
          {/* Event Type Filter */}
          <div className="flex overflow-x-auto space-x-2 mb-4 pb-2">
            {eventTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium flex items-center ${
                  selectedType === type.id
                    ? 'bg-rose-600 text-white'
                    : 'bg-gray-800 text-gray-400'
                }`}
              >
                {type.icon && <type.icon size={14} className="mr-1" />}
                {type.name}
              </button>
            ))}
          </div>

          {/* Event Stream Notice */}
          <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-3 mb-4">
            <div className="flex items-start">
              <Zap size={18} className="text-rose-400 mr-2 mt-0.5" />
              <div>
                <p className="text-rose-400 font-medium text-sm">Event-Driven Architecture</p>
                <p className="text-gray-300 text-xs">
                  Analytics reads from event stream, not database hacks. All mutations emit events.
                </p>
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-2">
            {filteredEvents.map(event => {
              const EventIcon = getEventIcon(event.type);
              return (
                <div key={event.id} className={`bg-gray-800 rounded-xl p-3 ${
                  event.status === 'error' ? 'border border-red-500/30' : ''
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">{getSourceIcon(event.source)}</span>
                      <div>
                        <div className="flex items-center">
                          <span className={`px-2 py-0.5 rounded text-xs ${getEventTypeColor(event.type)}`}>
                            {event.type}
                          </span>
                          {event.status === 'error' && (
                            <XCircle size={14} className="text-red-400 ml-2" />
                          )}
                        </div>
                        <p className="text-gray-400 text-xs mt-1">{event.source}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-xs">{formatTime(event.timestamp)}</p>
                      <p className="text-green-400 text-xs">{event.latency}</p>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <pre className="text-gray-300 text-xs font-mono overflow-x-auto">
                      {JSON.stringify(event.data, null, 2)}
                    </pre>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="w-full mt-4 bg-gray-800 text-gray-400 py-3 rounded-xl text-sm">
            Load More Events
          </button>
        </div>
      )}

      {/* Consumers Tab */}
      {activeTab === 'consumers' && (
        <div className="px-4 space-y-4">
          {/* Consumer Info */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <div className="flex items-start">
              <Database size={20} className="text-blue-400 mr-2 mt-0.5" />
              <div>
                <p className="text-blue-400 font-medium">Event Consumers</p>
                <p className="text-gray-300 text-sm">
                  Services that subscribe to and process events from the stream
                </p>
              </div>
            </div>
          </div>

          {/* Consumer List */}
          <div className="space-y-3">
            {consumers.map(consumer => (
              <div key={consumer.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-white font-bold">{consumer.name}</h3>
                      <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                        consumer.status === 'active' ? 'bg-green-500/20 text-green-400' :
                        consumer.status === 'degraded' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {consumer.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">Processed: {consumer.processed} events</p>
                  </div>
                  <Settings size={18} className="text-gray-400" />
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className={`font-bold ${consumer.lag > 100 ? 'text-yellow-400' : 'text-white'}`}>
                      {consumer.lag}
                    </p>
                    <p className="text-gray-400 text-xs">Lag</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-white font-bold">{consumer.processed}</p>
                    <p className="text-gray-400 text-xs">Processed</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className={`font-bold ${
                      consumer.health >= 95 ? 'text-green-400' :
                      consumer.health >= 80 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {consumer.health}%
                    </p>
                    <p className="text-gray-400 text-xs">Health</p>
                  </div>
                </div>

                {consumer.status === 'degraded' && (
                  <div className="mt-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-2">
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-400 text-sm">
                        <AlertCircle size={14} className="inline mr-1" />
                        High lag detected
                      </span>
                      <button className="text-yellow-400 text-sm">
                        <RefreshCw size={14} className="inline mr-1" />
                        Reset
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Add Consumer */}
          <button className="w-full bg-rose-600 text-white py-3 rounded-xl font-bold flex items-center justify-center">
            <Database size={20} className="mr-2" />
            Add Consumer
          </button>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantEventStream;
