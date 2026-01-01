import React, { useState } from 'react';
import {
  ArrowLeft, AlertTriangle, Calendar, Package, TrendingDown,
  Clock, CheckCircle, XCircle, Filter, Search, BarChart3,
  Trash2, Tag, Bell, ChevronRight, RefreshCw
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantExpiryDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('expiring');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const expiryStats = {
    expiringThisWeek: 45,
    expiringThisMonth: 128,
    expired: 12,
    potentialLoss: 24500,
    savedByDiscounts: 18200
  };

  const expiringItems = [
    {
      id: 1,
      name: 'Amul Fresh Milk 1L',
      sku: 'MILK-001',
      category: 'Dairy',
      batch: 'BTH-2024-001',
      quantity: 50,
      expiryDate: '2024-01-20',
      daysLeft: 3,
      mrp: 60,
      costPrice: 52,
      potentialLoss: 2600,
      status: 'critical'
    },
    {
      id: 2,
      name: 'Britannia Bread',
      sku: 'BRD-002',
      category: 'Bakery',
      batch: 'BTH-2024-002',
      quantity: 30,
      expiryDate: '2024-01-22',
      daysLeft: 5,
      mrp: 45,
      costPrice: 38,
      potentialLoss: 1140,
      status: 'warning'
    },
    {
      id: 3,
      name: 'Fresh Paneer 200g',
      sku: 'PNR-003',
      category: 'Dairy',
      batch: 'BTH-2024-003',
      quantity: 25,
      expiryDate: '2024-01-21',
      daysLeft: 4,
      mrp: 90,
      costPrice: 75,
      potentialLoss: 1875,
      status: 'warning'
    },
    {
      id: 4,
      name: 'Yogurt Cup 100g',
      sku: 'YGT-004',
      category: 'Dairy',
      batch: 'BTH-2024-004',
      quantity: 40,
      expiryDate: '2024-01-25',
      daysLeft: 8,
      mrp: 25,
      costPrice: 20,
      potentialLoss: 800,
      status: 'normal'
    },
    {
      id: 5,
      name: 'Chips Packet 100g',
      sku: 'CHP-005',
      category: 'Snacks',
      batch: 'BTH-2024-005',
      quantity: 60,
      expiryDate: '2024-02-15',
      daysLeft: 29,
      mrp: 30,
      costPrice: 24,
      potentialLoss: 1440,
      status: 'normal'
    }
  ];

  const expiredItems = [
    {
      id: 101,
      name: 'Curd 500g',
      quantity: 12,
      expiredOn: '2024-01-15',
      loss: 720,
      action: 'written_off'
    },
    {
      id: 102,
      name: 'Fresh Juice 200ml',
      quantity: 8,
      expiredOn: '2024-01-14',
      loss: 480,
      action: 'returned'
    }
  ];

  const categories = ['all', 'Dairy', 'Bakery', 'Snacks', 'Beverages', 'Frozen'];

  const getStatusColor = (status) => {
    switch (status) {
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'warning': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'normal': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const filteredItems = selectedCategory === 'all'
    ? expiringItems
    : expiringItems.filter(item => item.category === selectedCategory);

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
              <h1 className="text-xl font-bold">Expiry Management</h1>
              <p className="text-orange-200 text-sm">Track & manage product expiry</p>
            </div>
          </div>
          <button className="bg-white/20 p-2 rounded-lg">
            <Bell size={24} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-red-300">{expiryStats.expiringThisWeek}</p>
            <p className="text-xs text-orange-200">This Week</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-yellow-300">{expiryStats.expiringThisMonth}</p>
            <p className="text-xs text-orange-200">This Month</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-gray-300">{expiryStats.expired}</p>
            <p className="text-xs text-orange-200">Expired</p>
          </div>
        </div>
      </div>

      {/* Loss Prevention Card */}
      <div className="p-4">
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-bold">Loss Prevention</h3>
            <BarChart3 size={20} className="text-orange-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 text-sm">Potential Loss</p>
              <p className="text-red-400 text-xl font-bold">₹{expiryStats.potentialLoss.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Saved by Discounts</p>
              <p className="text-green-400 text-xl font-bold">₹{expiryStats.savedByDiscounts.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pb-2">
        <div className="flex bg-gray-800 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('expiring')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'expiring' ? 'bg-orange-600 text-white' : 'text-gray-400'
            }`}
          >
            Expiring Soon
          </button>
          <button
            onClick={() => setActiveTab('expired')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'expired' ? 'bg-red-600 text-white' : 'text-gray-400'
            }`}
          >
            Expired
          </button>
        </div>
      </div>

      {/* Category Filter */}
      {activeTab === 'expiring' && (
        <div className="px-4 pb-4">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm ${
                  selectedCategory === cat
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-800 text-gray-400'
                }`}
              >
                {cat === 'all' ? 'All Categories' : cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Expiring Items List */}
      {activeTab === 'expiring' && (
        <div className="px-4 space-y-3">
          {filteredItems.map(item => (
            <div key={item.id} className={`bg-gray-800 rounded-xl p-4 border ${getStatusColor(item.status).split(' ')[2] || 'border-gray-700'}`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center">
                    <p className="text-white font-bold">{item.name}</p>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${getStatusColor(item.status)}`}>
                      {item.daysLeft} days
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{item.sku} • {item.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">{item.quantity} units</p>
                  <p className="text-gray-400 text-xs">Batch: {item.batch}</p>
                </div>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-3 mb-3">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-gray-400">Expires</p>
                    <p className="text-white font-medium">{item.expiryDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Cost Price</p>
                    <p className="text-white font-medium">₹{item.costPrice}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Potential Loss</p>
                    <p className="text-red-400 font-medium">₹{item.potentialLoss}</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-orange-600 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                  <Tag size={16} className="mr-1" />
                  Create Discount
                </button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                  <RefreshCw size={18} />
                </button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Expired Items List */}
      {activeTab === 'expired' && (
        <div className="px-4 space-y-3">
          {expiredItems.map(item => (
            <div key={item.id} className="bg-gray-800 rounded-xl p-4 border border-red-500/30">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-white font-bold">{item.name}</p>
                  <p className="text-gray-400 text-sm">Expired: {item.expiredOn}</p>
                </div>
                <div className="text-right">
                  <p className="text-red-400 font-bold">-₹{item.loss}</p>
                  <p className="text-gray-400 text-xs">{item.quantity} units</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  item.action === 'written_off' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {item.action === 'written_off' ? 'Written Off' : 'Returned to Supplier'}
                </span>
                <button className="text-gray-400 text-sm">View Details</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quick Actions */}
      <div className="p-4">
        <h3 className="text-white font-bold mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-gray-800 p-4 rounded-xl text-center">
            <Tag size={24} className="mx-auto mb-2 text-orange-400" />
            <p className="text-white text-sm font-medium">Bulk Discount</p>
            <p className="text-gray-400 text-xs">For expiring items</p>
          </button>
          <button className="bg-gray-800 p-4 rounded-xl text-center">
            <Bell size={24} className="mx-auto mb-2 text-blue-400" />
            <p className="text-white text-sm font-medium">Alert Settings</p>
            <p className="text-gray-400 text-xs">Configure notifications</p>
          </button>
          <button className="bg-gray-800 p-4 rounded-xl text-center">
            <Trash2 size={24} className="mx-auto mb-2 text-red-400" />
            <p className="text-white text-sm font-medium">Write Off</p>
            <p className="text-gray-400 text-xs">Expired items</p>
          </button>
          <button className="bg-gray-800 p-4 rounded-xl text-center">
            <BarChart3 size={24} className="mx-auto mb-2 text-green-400" />
            <p className="text-white text-sm font-medium">Expiry Report</p>
            <p className="text-gray-400 text-xs">Download PDF</p>
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default MerchantExpiryDashboard;
