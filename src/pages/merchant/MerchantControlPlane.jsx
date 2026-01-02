import React, { useState } from 'react';
import {
  ArrowLeft, Activity, Zap, Shield, AlertTriangle, CheckCircle,
  Clock, TrendingUp, Database, Server, Globe, Cpu, HardDrive,
  Wifi, WifiOff, RefreshCw, Eye, Settings, ChevronRight,
  BarChart3, PieChart, LineChart
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantControlPlane = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('overview');
  const [refreshing, setRefreshing] = useState(false);

  const systemHealth = {
    overall: 99.2,
    uptime: '99.99%',
    lastIncident: '15 days ago',
    activeAlerts: 1
  };

  const services = [
    {
      id: 'orders',
      name: 'Order Engine',
      status: 'healthy',
      latency: '45ms',
      requests: '12.5K/min',
      errorRate: '0.01%',
      icon: '📦'
    },
    {
      id: 'payments',
      name: 'Payment Gateway',
      status: 'healthy',
      latency: '120ms',
      requests: '3.2K/min',
      errorRate: '0.02%',
      icon: '💳'
    },
    {
      id: 'inventory',
      name: 'Inventory Service',
      status: 'healthy',
      latency: '35ms',
      requests: '8.1K/min',
      errorRate: '0.00%',
      icon: '📊'
    },
    {
      id: 'pos',
      name: 'POS Engine',
      status: 'healthy',
      latency: '28ms',
      requests: '5.6K/min',
      errorRate: '0.01%',
      icon: '🖥️'
    },
    {
      id: 'loyalty',
      name: 'Loyalty & Coins',
      status: 'degraded',
      latency: '250ms',
      requests: '2.1K/min',
      errorRate: '0.15%',
      icon: '🪙'
    },
    {
      id: 'analytics',
      name: 'Analytics Pipeline',
      status: 'healthy',
      latency: '180ms',
      requests: '890/min',
      errorRate: '0.00%',
      icon: '📈'
    },
    {
      id: 'notifications',
      name: 'Notification Hub',
      status: 'healthy',
      latency: '65ms',
      requests: '1.5K/min',
      errorRate: '0.03%',
      icon: '🔔'
    },
    {
      id: 'sync',
      name: 'Sync Engine',
      status: 'healthy',
      latency: '95ms',
      requests: '4.2K/min',
      errorRate: '0.01%',
      icon: '🔄'
    }
  ];

  const integrationHealth = [
    { name: 'Swiggy', status: 'connected', health: 100, orders: 156 },
    { name: 'Zomato', status: 'connected', health: 100, orders: 198 },
    { name: 'ONDC', status: 'connected', health: 97, orders: 45 },
    { name: 'Razorpay', status: 'connected', health: 100, transactions: 892 },
    { name: 'Tally', status: 'connected', health: 100, synced: '1h ago' },
    { name: 'Dunzo', status: 'connected', health: 95, deliveries: 78 }
  ];

  const recentEvents = [
    { time: '2 min ago', type: 'info', message: 'Order #ORD-5678 created via Swiggy' },
    { time: '5 min ago', type: 'success', message: 'Payment ₹2,450 captured successfully' },
    { time: '8 min ago', type: 'warning', message: 'Loyalty service latency increased to 250ms' },
    { time: '15 min ago', type: 'info', message: 'Inventory sync completed for 245 items' },
    { time: '22 min ago', type: 'success', message: 'Tally export successful - 156 invoices' },
    { time: '30 min ago', type: 'info', message: 'New customer registered via QR scan' }
  ];

  const metrics = {
    ordersToday: 1245,
    revenueToday: 456780,
    avgOrderValue: 367,
    conversionRate: 4.2,
    customerSatisfaction: 4.6,
    returnRate: 2.1
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'healthy':
      case 'connected':
        return <CheckCircle size={16} className="text-green-400" />;
      case 'degraded':
        return <AlertTriangle size={16} className="text-yellow-400" />;
      case 'down':
        return <WifiOff size={16} className="text-red-400" />;
      default:
        return <Clock size={16} className="text-gray-400" />;
    }
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'success': return 'bg-green-500/20 text-green-400';
      case 'warning': return 'bg-yellow-500/20 text-yellow-400';
      case 'error': return 'bg-red-500/20 text-red-400';
      default: return 'bg-blue-500/20 text-blue-400';
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-4 border-b border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Cpu size={24} className="mr-2 text-cyan-400" />
                Control Plane
              </h1>
              <p className="text-slate-400 text-sm">Merchant OS Command Center</p>
            </div>
          </div>
          <button
            onClick={handleRefresh}
            className={`bg-slate-700 p-2 rounded-lg ${refreshing ? 'animate-spin' : ''}`}
          >
            <RefreshCw size={20} />
          </button>
        </div>

        {/* System Health */}
        <div className="bg-slate-700/50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-2 ${
                systemHealth.overall >= 99 ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'
              }`} />
              <span className="text-white font-medium">System Health</span>
            </div>
            <span className={`text-2xl font-bold ${
              systemHealth.overall >= 99 ? 'text-green-400' : 'text-yellow-400'
            }`}>
              {systemHealth.overall}%
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center text-sm">
            <div>
              <p className="text-slate-400">Uptime</p>
              <p className="text-green-400 font-bold">{systemHealth.uptime}</p>
            </div>
            <div>
              <p className="text-slate-400">Last Incident</p>
              <p className="text-white font-bold">{systemHealth.lastIncident}</p>
            </div>
            <div>
              <p className="text-slate-400">Active Alerts</p>
              <p className={`font-bold ${systemHealth.activeAlerts > 0 ? 'text-yellow-400' : 'text-green-400'}`}>
                {systemHealth.activeAlerts}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* View Switcher */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'services', label: 'Services' },
            { id: 'events', label: 'Events' }
          ].map(view => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                activeView === view.id ? 'bg-cyan-600 text-white' : 'text-gray-400'
              }`}
            >
              {view.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overview View */}
      {activeView === 'overview' && (
        <div className="px-4 space-y-4">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Orders Today</span>
                <BarChart3 size={16} className="text-cyan-400" />
              </div>
              <p className="text-2xl font-bold text-white">{metrics.ordersToday.toLocaleString()}</p>
              <p className="text-green-400 text-sm">+12% vs yesterday</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Revenue Today</span>
                <TrendingUp size={16} className="text-green-400" />
              </div>
              <p className="text-2xl font-bold text-white">₹{(metrics.revenueToday/1000).toFixed(1)}K</p>
              <p className="text-green-400 text-sm">+8% vs yesterday</p>
            </div>
          </div>

          {/* Integration Status */}
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-bold">Integration Health</h3>
              <span className="text-cyan-400 text-sm">View All</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {integrationHealth.slice(0, 6).map((integration, idx) => (
                <div key={idx} className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <div className="flex items-center justify-center mb-1">
                    {getStatusIcon(integration.status)}
                  </div>
                  <p className="text-white text-sm font-medium truncate">{integration.name}</p>
                  <p className="text-gray-400 text-xs">{integration.health}%</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-gray-800 rounded-xl p-3 text-center">
              <p className="text-cyan-400 text-lg font-bold">₹{metrics.avgOrderValue}</p>
              <p className="text-gray-400 text-xs">Avg Order</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-3 text-center">
              <p className="text-green-400 text-lg font-bold">{metrics.conversionRate}%</p>
              <p className="text-gray-400 text-xs">Conversion</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-3 text-center">
              <p className="text-yellow-400 text-lg font-bold">{metrics.customerSatisfaction}★</p>
              <p className="text-gray-400 text-xs">Satisfaction</p>
            </div>
          </div>

          {/* Control Plane Rule */}
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
            <div className="flex items-start">
              <Shield size={20} className="text-cyan-400 mr-2 mt-0.5" />
              <div>
                <p className="text-cyan-400 font-medium">Single Source of Truth</p>
                <p className="text-gray-300 text-sm">
                  All money, customers, and inventory pass through Merchant OS. No bypasses allowed.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Services View */}
      {activeView === 'services' && (
        <div className="px-4 space-y-3">
          {services.map(service => (
            <div key={service.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{service.icon}</span>
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-white font-bold">{service.name}</h3>
                      <div className="ml-2">
                        {getStatusIcon(service.status)}
                      </div>
                    </div>
                    <p className={`text-sm ${
                      service.status === 'healthy' ? 'text-green-400' :
                      service.status === 'degraded' ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className="text-white font-bold">{service.latency}</p>
                  <p className="text-gray-400 text-xs">Latency</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className="text-white font-bold">{service.requests}</p>
                  <p className="text-gray-400 text-xs">Requests</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className={`font-bold ${
                    parseFloat(service.errorRate) > 0.1 ? 'text-yellow-400' : 'text-green-400'
                  }`}>
                    {service.errorRate}
                  </p>
                  <p className="text-gray-400 text-xs">Error Rate</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Events View */}
      {activeView === 'events' && (
        <div className="px-4 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white font-bold">Recent Events</h3>
            <span className="text-cyan-400 text-sm">Live</span>
          </div>

          {recentEvents.map((event, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-3">
              <div className="flex items-start">
                <span className={`px-2 py-0.5 rounded text-xs mr-3 ${getEventTypeColor(event.type)}`}>
                  {event.type}
                </span>
                <div className="flex-1">
                  <p className="text-gray-300 text-sm">{event.message}</p>
                  <p className="text-gray-500 text-xs mt-1">{event.time}</p>
                </div>
              </div>
            </div>
          ))}

          <button className="w-full bg-gray-800 text-gray-400 py-3 rounded-xl text-sm">
            Load More Events
          </button>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantControlPlane;
