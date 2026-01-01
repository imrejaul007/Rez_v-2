import React, { useState } from 'react';
import {
  ArrowLeft, Link2, CheckCircle, XCircle, AlertCircle, Clock,
  RefreshCw, Settings, ChevronRight, Package, TrendingUp, Pause,
  Play, Eye, Download, Upload, Filter, Search, ToggleLeft, ToggleRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantAggregatorBridge = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('connected');
  const [selectedAggregator, setSelectedAggregator] = useState(null);

  const aggregators = [
    {
      id: 'swiggy',
      name: 'Swiggy',
      icon: '🍊',
      status: 'active',
      connected: true,
      storeId: 'SW-BLR-12345',
      ordersToday: 156,
      revenueToday: 45670,
      acceptanceRate: 98.5,
      avgPrepTime: '18 min',
      rating: 4.5,
      menuItems: 145,
      lastSync: '30 sec ago',
      commission: 22
    },
    {
      id: 'zomato',
      name: 'Zomato',
      icon: '🔴',
      status: 'active',
      connected: true,
      storeId: 'ZMT-9876543',
      ordersToday: 198,
      revenueToday: 67890,
      acceptanceRate: 99.1,
      avgPrepTime: '16 min',
      rating: 4.6,
      menuItems: 145,
      lastSync: '45 sec ago',
      commission: 20
    },
    {
      id: 'ondc',
      name: 'ONDC Network',
      icon: '🇮🇳',
      status: 'active',
      connected: true,
      storeId: 'ONDC-IN-56789',
      ordersToday: 45,
      revenueToday: 12340,
      acceptanceRate: 97.8,
      avgPrepTime: '20 min',
      rating: 4.4,
      menuItems: 120,
      lastSync: '2 min ago',
      commission: 5
    },
    {
      id: 'magicpin',
      name: 'Magicpin',
      icon: '📍',
      status: 'inactive',
      connected: true,
      storeId: 'MP-BLR-4567',
      ordersToday: 0,
      revenueToday: 0,
      acceptanceRate: 0,
      avgPrepTime: '-',
      rating: 4.3,
      menuItems: 145,
      lastSync: '2 days ago',
      commission: 15
    },
    {
      id: 'eatsure',
      name: 'EatSure',
      icon: '🍽️',
      status: 'pending',
      connected: false,
      storeId: null,
      ordersToday: 0,
      revenueToday: 0,
      acceptanceRate: 0,
      avgPrepTime: '-',
      rating: 0,
      menuItems: 0,
      lastSync: null,
      commission: 18
    }
  ];

  const recentOrders = [
    {
      id: 'SW-ORD-7891',
      aggregator: 'swiggy',
      customer: 'Rahul S.',
      items: 3,
      amount: 456,
      status: 'preparing',
      time: '2 min ago'
    },
    {
      id: 'ZMT-ORD-4562',
      aggregator: 'zomato',
      customer: 'Priya M.',
      items: 2,
      amount: 289,
      status: 'ready',
      time: '5 min ago'
    },
    {
      id: 'ONDC-ORD-1234',
      aggregator: 'ondc',
      customer: 'Amit K.',
      items: 4,
      amount: 678,
      status: 'picked',
      time: '8 min ago'
    }
  ];

  const menuSyncStatus = {
    lastSync: '10 min ago',
    totalItems: 145,
    syncedItems: 145,
    pendingItems: 0,
    errors: 0
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400';
      case 'inactive': return 'bg-gray-500/20 text-gray-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'error': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getOrderStatusColor = (status) => {
    switch (status) {
      case 'preparing': return 'bg-yellow-500/20 text-yellow-400';
      case 'ready': return 'bg-blue-500/20 text-blue-400';
      case 'picked': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getAggregatorIcon = (id) => {
    return aggregators.find(a => a.id === id)?.icon || '📦';
  };

  const totalStats = {
    ordersToday: aggregators.reduce((sum, a) => sum + a.ordersToday, 0),
    revenueToday: aggregators.reduce((sum, a) => sum + a.revenueToday, 0),
    activeChannels: aggregators.filter(a => a.status === 'active').length
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Link2 size={24} className="mr-2" />
                Aggregator Bridge
              </h1>
              <p className="text-orange-200 text-sm">Swiggy, Zomato, ONDC & more</p>
            </div>
          </div>
          <RefreshCw size={20} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{totalStats.ordersToday}</p>
            <p className="text-xs text-orange-200">Orders Today</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(totalStats.revenueToday/1000).toFixed(1)}K</p>
            <p className="text-xs text-orange-200">Revenue</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-400">{totalStats.activeChannels}</p>
            <p className="text-xs text-orange-200">Active</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          {[
            { id: 'connected', label: 'Channels' },
            { id: 'orders', label: 'Orders' },
            { id: 'menu', label: 'Menu Sync' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id ? 'bg-orange-600 text-white' : 'text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Channels Tab */}
      {activeTab === 'connected' && (
        <div className="px-4 space-y-3">
          {/* Single Order Schema Notice */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-3">
            <div className="flex items-start">
              <Package size={18} className="text-orange-400 mr-2 mt-0.5" />
              <div>
                <p className="text-orange-400 font-medium text-sm">Unified Order Schema</p>
                <p className="text-gray-300 text-xs">
                  All aggregator orders normalize into one format in Merchant OS
                </p>
              </div>
            </div>
          </div>

          {aggregators.map(aggregator => (
            <div key={aggregator.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-2xl mr-3">
                    {aggregator.icon}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-white font-bold">{aggregator.name}</h3>
                      <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${getStatusColor(aggregator.status)}`}>
                        {aggregator.status}
                      </span>
                    </div>
                    {aggregator.storeId && (
                      <p className="text-gray-400 text-xs font-mono">{aggregator.storeId}</p>
                    )}
                  </div>
                </div>
                {aggregator.connected && (
                  <button className="text-gray-400">
                    <Settings size={18} />
                  </button>
                )}
              </div>

              {aggregator.status === 'active' && (
                <>
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                      <p className="text-white font-bold">{aggregator.ordersToday}</p>
                      <p className="text-gray-400 text-xs">Orders</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                      <p className="text-white font-bold">₹{(aggregator.revenueToday/1000).toFixed(1)}K</p>
                      <p className="text-gray-400 text-xs">Revenue</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                      <p className="text-green-400 font-bold">{aggregator.acceptanceRate}%</p>
                      <p className="text-gray-400 text-xs">Accept</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                      <p className="text-yellow-400 font-bold">{aggregator.rating}★</p>
                      <p className="text-gray-400 text-xs">Rating</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-400">
                        <Clock size={14} className="inline mr-1" />
                        {aggregator.lastSync}
                      </span>
                      <span className="text-gray-400">
                        {aggregator.commission}% commission
                      </span>
                    </div>
                    <button className="flex items-center text-orange-400">
                      {aggregator.status === 'active' ? (
                        <>
                          <Pause size={14} className="mr-1" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play size={14} className="mr-1" />
                          Resume
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}

              {aggregator.status === 'inactive' && (
                <button className="w-full mt-2 bg-gray-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                  <Play size={16} className="mr-2" />
                  Reactivate Channel
                </button>
              )}

              {aggregator.status === 'pending' && (
                <button className="w-full mt-2 bg-orange-600 text-white py-2 rounded-lg text-sm font-medium">
                  Complete Setup
                </button>
              )}
            </div>
          ))}

          {/* Add New Aggregator */}
          <button className="w-full bg-gray-800 border-2 border-dashed border-gray-600 rounded-xl p-4 flex items-center justify-center text-gray-400">
            <Link2 size={20} className="mr-2" />
            Connect New Aggregator
          </button>
        </div>
      )}

      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div className="px-4 space-y-4">
          {/* Filter */}
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-xl"
              />
            </div>
            <button className="bg-gray-800 text-white px-4 rounded-xl">
              <Filter size={20} />
            </button>
          </div>

          {/* Aggregator Filter Pills */}
          <div className="flex overflow-x-auto space-x-2 pb-2">
            <button className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium bg-orange-600 text-white">
              All ({totalStats.ordersToday})
            </button>
            {aggregators.filter(a => a.status === 'active').map(a => (
              <button
                key={a.id}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium bg-gray-800 text-gray-400 flex items-center"
              >
                <span className="mr-2">{a.icon}</span>
                {a.name} ({a.ordersToday})
              </button>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="space-y-3">
            {recentOrders.map(order => (
              <div key={order.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">{getAggregatorIcon(order.aggregator)}</span>
                    <div>
                      <p className="text-white font-bold">{order.id}</p>
                      <p className="text-gray-400 text-sm">{order.customer} • {order.items} items</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${getOrderStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">₹{order.amount}</span>
                  <span className="text-gray-400 text-sm">{order.time}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full bg-gray-800 text-gray-400 py-3 rounded-xl text-sm">
            View All Orders
          </button>
        </div>
      )}

      {/* Menu Sync Tab */}
      {activeTab === 'menu' && (
        <div className="px-4 space-y-4">
          {/* Sync Status */}
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold">Menu Sync Status</h3>
              <button className="bg-orange-600 text-white px-3 py-1 rounded-lg text-sm flex items-center">
                <RefreshCw size={14} className="mr-1" />
                Sync Now
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-white">{menuSyncStatus.totalItems}</p>
                <p className="text-gray-400 text-sm">Total Items</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-green-400">{menuSyncStatus.syncedItems}</p>
                <p className="text-gray-400 text-sm">Synced</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Last sync: {menuSyncStatus.lastSync}</span>
              <span className="text-green-400">
                <CheckCircle size={14} className="inline mr-1" />
                All items synced
              </span>
            </div>
          </div>

          {/* Per Aggregator Sync */}
          <div className="space-y-3">
            {aggregators.filter(a => a.connected).map(aggregator => (
              <div key={aggregator.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">{aggregator.icon}</span>
                    <div>
                      <h4 className="text-white font-bold">{aggregator.name}</h4>
                      <p className="text-gray-400 text-sm">{aggregator.menuItems} items</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {aggregator.status === 'active' ? (
                      <CheckCircle size={18} className="text-green-400" />
                    ) : (
                      <AlertCircle size={18} className="text-yellow-400" />
                    )}
                    <ChevronRight size={18} className="text-gray-400" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">
                    Last sync: {aggregator.lastSync || 'Never'}
                  </span>
                  <button className="text-orange-400">
                    <Upload size={14} className="inline mr-1" />
                    Push Menu
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sync Rule */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <div className="flex items-start">
              <Eye size={20} className="text-blue-400 mr-2 mt-0.5" />
              <div>
                <p className="text-blue-400 font-medium">Inventory Mutations Rule</p>
                <p className="text-gray-300 text-sm">
                  Inventory changes ONLY via Merchant OS APIs. Aggregator menus auto-sync from OS.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default MerchantAggregatorBridge;
