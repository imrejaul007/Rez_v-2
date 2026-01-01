import React, { useState } from 'react';
import {
  ArrowLeft, DollarSign, TrendingUp, Calendar, CheckCircle,
  Clock, AlertCircle, Download, Filter, Eye, ChevronRight,
  Building2, CreditCard, Wallet, ArrowUpRight, ArrowDownLeft,
  RefreshCw, FileText, PieChart, Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantSettlementEngine = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const stats = {
    pendingSettlement: 234560,
    settledToday: 156780,
    inTransit: 45670,
    totalProcessed: 8567890,
    settlementRate: 99.8
  };

  const channels = [
    { name: 'POS Sales', amount: 156780, settled: 145670, pending: 11110, icon: '🖥️' },
    { name: 'ReZ App', amount: 89450, settled: 85000, pending: 4450, icon: '📱' },
    { name: 'Swiggy', amount: 45670, settled: 0, pending: 45670, icon: '🍊' },
    { name: 'Zomato', amount: 67890, settled: 0, pending: 67890, icon: '🔴' },
    { name: 'ONDC', amount: 12340, settled: 12340, pending: 0, icon: '🇮🇳' }
  ];

  const settlements = [
    {
      id: 'STL-2024-0045',
      date: '2024-01-17',
      amount: 156780,
      channel: 'multi',
      status: 'completed',
      bank: 'HDFC Bank ****4567',
      utr: 'HDFC24011756789',
      breakdown: {
        gross: 175000,
        commission: -12250,
        gst: -2205,
        tds: -3765,
        net: 156780
      }
    },
    {
      id: 'STL-2024-0044',
      date: '2024-01-16',
      amount: 145670,
      channel: 'multi',
      status: 'completed',
      bank: 'HDFC Bank ****4567',
      utr: 'HDFC24011645678',
      breakdown: {
        gross: 162000,
        commission: -11340,
        gst: -2041,
        tds: -2949,
        net: 145670
      }
    },
    {
      id: 'STL-2024-0043',
      date: '2024-01-15',
      amount: 178900,
      channel: 'multi',
      status: 'completed',
      bank: 'HDFC Bank ****4567',
      utr: 'HDFC24011534567',
      breakdown: {
        gross: 198000,
        commission: -13860,
        gst: -2495,
        tds: -2745,
        net: 178900
      }
    }
  ];

  const pendingByAggregator = [
    { name: 'Swiggy', amount: 45670, expectedDate: 'Jan 19', icon: '🍊' },
    { name: 'Zomato', amount: 67890, expectedDate: 'Jan 20', icon: '🔴' },
    { name: 'PhonePe', amount: 23450, expectedDate: 'Jan 18', icon: '💜' },
    { name: 'Razorpay', amount: 34560, expectedDate: 'Jan 18', icon: '💳' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400';
      case 'processing': return 'bg-blue-500/20 text-blue-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'failed': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <DollarSign size={24} className="mr-2" />
                Settlement Engine
              </h1>
              <p className="text-green-200 text-sm">Final settlement truth</p>
            </div>
          </div>
          <Download size={20} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-green-200 text-sm mb-1">Pending Settlement</p>
            <p className="text-2xl font-bold">₹{(stats.pendingSettlement/1000).toFixed(1)}K</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-green-200 text-sm mb-1">Settled Today</p>
            <p className="text-2xl font-bold text-green-300">₹{(stats.settledToday/1000).toFixed(1)}K</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-3">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(stats.inTransit/1000).toFixed(1)}K</p>
            <p className="text-xs text-green-200">In Transit</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(stats.totalProcessed/1000000).toFixed(1)}M</p>
            <p className="text-xs text-green-200">Total Processed</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-300">{stats.settlementRate}%</p>
            <p className="text-xs text-green-200">Success Rate</p>
          </div>
        </div>
      </div>

      {/* Settlement Truth Notice */}
      <div className="p-4">
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
          <div className="flex items-start">
            <Shield size={20} className="text-green-400 mr-2 mt-0.5" />
            <div>
              <p className="text-green-400 font-medium">Single Source of Truth</p>
              <p className="text-gray-300 text-sm">
                Merchant OS owns final settlement truth. All payments reconcile here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pb-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'history', label: 'History' },
            { id: 'pending', label: 'Pending' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id ? 'bg-green-600 text-white' : 'text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="px-4 space-y-4">
          {/* Channel Breakdown */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-4">Settlement by Channel</h3>
            <div className="space-y-3">
              {channels.map((channel, idx) => (
                <div key={idx} className="bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-xl mr-2">{channel.icon}</span>
                      <span className="text-white font-medium">{channel.name}</span>
                    </div>
                    <span className="text-white font-bold">₹{channel.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-400">
                      <CheckCircle size={12} className="inline mr-1" />
                      Settled: ₹{channel.settled.toLocaleString()}
                    </span>
                    {channel.pending > 0 && (
                      <span className="text-yellow-400">
                        <Clock size={12} className="inline mr-1" />
                        Pending: ₹{channel.pending.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bank Account */}
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-bold">Settlement Account</h3>
              <span className="text-green-400 text-sm">Verified</span>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4 flex items-center">
              <Building2 size={24} className="text-blue-400 mr-3" />
              <div>
                <p className="text-white font-medium">HDFC Bank</p>
                <p className="text-gray-400 text-sm">Account ****4567 • IFSC: HDFC0001234</p>
              </div>
            </div>
          </div>

          {/* Expected Settlements */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Expected Settlements</h3>
            <div className="space-y-2">
              {pendingByAggregator.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">{item.icon}</span>
                    <span className="text-white">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">₹{item.amount.toLocaleString()}</p>
                    <p className="text-gray-400 text-xs">{item.expectedDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* History Tab */}
      {activeTab === 'history' && (
        <div className="px-4 space-y-3">
          {/* Period Filter */}
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {['today', 'week', 'month', 'all'].map(period => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${
                  selectedPeriod === period
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-800 text-gray-400'
                }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>

          {/* Settlement List */}
          {settlements.map(settlement => (
            <div key={settlement.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-white font-bold">{settlement.id}</h3>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${getStatusColor(settlement.status)}`}>
                      {settlement.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{settlement.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-green-400 font-bold text-lg">₹{settlement.amount.toLocaleString()}</p>
                  <p className="text-gray-500 text-xs">Net Settled</p>
                </div>
              </div>

              {/* Breakdown */}
              <div className="bg-gray-700/50 rounded-lg p-3 mb-3 space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Gross Amount</span>
                  <span className="text-white">₹{settlement.breakdown.gross.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Commission</span>
                  <span className="text-red-400">{settlement.breakdown.commission.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">GST</span>
                  <span className="text-red-400">{settlement.breakdown.gst.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">TDS</span>
                  <span className="text-red-400">{settlement.breakdown.tds.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-600">
                  <span className="text-white font-medium">Net Settlement</span>
                  <span className="text-green-400 font-bold">₹{settlement.breakdown.net.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-400">
                  <Building2 size={14} className="mr-1" />
                  {settlement.bank}
                </div>
                <span className="text-gray-500 font-mono text-xs">{settlement.utr}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pending Tab */}
      {activeTab === 'pending' && (
        <div className="px-4 space-y-4">
          {/* Pending Summary */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Clock size={20} className="text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-medium">Total Pending</span>
              </div>
              <span className="text-white font-bold text-xl">₹{stats.pendingSettlement.toLocaleString()}</span>
            </div>
            <p className="text-gray-300 text-sm">
              Settlement expected within 2-3 business days based on aggregator policies
            </p>
          </div>

          {/* Pending by Source */}
          <div className="space-y-3">
            {pendingByAggregator.map((item, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <div>
                      <h3 className="text-white font-bold">{item.name}</h3>
                      <p className="text-gray-400 text-sm">Expected: {item.expectedDate}</p>
                    </div>
                  </div>
                  <p className="text-yellow-400 font-bold text-lg">₹{item.amount.toLocaleString()}</p>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-400">Settlement cycle: T+2</span>
                  <button className="text-green-400 flex items-center">
                    <Eye size={14} className="mr-1" />
                    Track
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Settlement Policy */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Settlement Policy</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">POS & QR Payments</span>
                <span className="text-white">T+1 (Next Day)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Swiggy / Zomato</span>
                <span className="text-white">Weekly</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">ONDC</span>
                <span className="text-white">T+2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">ReZ App Orders</span>
                <span className="text-white">T+1</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default MerchantSettlementEngine;
