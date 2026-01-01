import React, { useState } from 'react';
import {
  ArrowLeft, Download, AlertTriangle, CheckCircle, Clock, Filter,
  Search, TrendingUp, TrendingDown, IndianRupee, Calendar, RefreshCw,
  ChevronRight, ExternalLink, FileText, XCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantAggregatorReconciliation = () => {
  const navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('this_week');
  const [activeTab, setActiveTab] = useState('pending');

  const platforms = [
    { id: 'zomato', name: 'Zomato', logo: '🍕', color: 'bg-red-600', commission: 22 },
    { id: 'swiggy', name: 'Swiggy', logo: '🧡', color: 'bg-orange-500', commission: 20 },
    { id: 'magicpin', name: 'Magicpin', logo: '📍', color: 'bg-purple-600', commission: 15 },
    { id: 'eazydiner', name: 'EazyDiner', logo: '🍽️', color: 'bg-blue-600', commission: 18 },
  ];

  const reconciliationSummary = {
    totalOrders: 485,
    totalGMV: 245000,
    expectedPayout: 189650,
    actualPayout: 182400,
    discrepancy: 7250,
    pendingSettlement: 45000
  };

  const [orders, setOrders] = useState([
    {
      id: 'ZMT001',
      platform: 'zomato',
      orderId: 'ORD-8475621',
      date: '28 Dec 2024',
      gmv: 850,
      commission: 187,
      gst: 33.66,
      tcs: 8.5,
      packing: 20,
      delivery: 0,
      netPayout: 600.84,
      status: 'matched',
      platformPayout: 600.84
    },
    {
      id: 'SWG001',
      platform: 'swiggy',
      orderId: 'ORD-9584721',
      date: '28 Dec 2024',
      gmv: 1200,
      commission: 240,
      gst: 43.2,
      tcs: 12,
      packing: 30,
      delivery: 50,
      netPayout: 824.8,
      status: 'discrepancy',
      platformPayout: 790,
      discrepancyAmount: 34.8,
      discrepancyReason: 'Missing packing charge credit'
    },
    {
      id: 'ZMT002',
      platform: 'zomato',
      orderId: 'ORD-8475622',
      date: '27 Dec 2024',
      gmv: 650,
      commission: 143,
      gst: 25.74,
      tcs: 6.5,
      packing: 15,
      delivery: 0,
      netPayout: 459.76,
      status: 'pending',
      platformPayout: null
    },
    {
      id: 'MGP001',
      platform: 'magicpin',
      orderId: 'ORD-MP45821',
      date: '27 Dec 2024',
      gmv: 1800,
      commission: 270,
      gst: 48.6,
      tcs: 18,
      packing: 0,
      delivery: 0,
      netPayout: 1463.4,
      status: 'matched',
      platformPayout: 1463.4
    },
    {
      id: 'SWG002',
      platform: 'swiggy',
      orderId: 'ORD-9584722',
      date: '26 Dec 2024',
      gmv: 2100,
      commission: 420,
      gst: 75.6,
      tcs: 21,
      packing: 45,
      delivery: 80,
      netPayout: 1458.4,
      status: 'discrepancy',
      platformPayout: 1380,
      discrepancyAmount: 78.4,
      discrepancyReason: 'Extra deduction - under investigation'
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'matched': return 'bg-green-500';
      case 'discrepancy': return 'bg-red-500';
      case 'pending': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'matched': return <CheckCircle size={16} />;
      case 'discrepancy': return <AlertTriangle size={16} />;
      case 'pending': return <Clock size={16} />;
      default: return null;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesPlatform = selectedPlatform === 'all' || order.platform === selectedPlatform;
    const matchesTab = activeTab === 'all' ||
      (activeTab === 'pending' && order.status === 'pending') ||
      (activeTab === 'discrepancy' && order.status === 'discrepancy') ||
      (activeTab === 'matched' && order.status === 'matched');
    return matchesPlatform && matchesTab;
  });

  const discrepancyCount = orders.filter(o => o.status === 'discrepancy').length;
  const totalDiscrepancy = orders.filter(o => o.status === 'discrepancy')
    .reduce((sum, o) => sum + (o.discrepancyAmount || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Aggregator Reconciliation</h1>
              <p className="text-violet-200 text-sm">Match orders with platform payouts</p>
            </div>
          </div>
          <button className="bg-white/20 p-2 rounded-lg">
            <RefreshCw size={20} />
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-violet-200 text-xs mb-1">Expected Payout</p>
            <p className="text-xl font-bold">₹{(reconciliationSummary.expectedPayout/1000).toFixed(1)}K</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-violet-200 text-xs mb-1">Actual Received</p>
            <p className="text-xl font-bold">₹{(reconciliationSummary.actualPayout/1000).toFixed(1)}K</p>
          </div>
          <div className={`rounded-lg p-3 ${totalDiscrepancy > 0 ? 'bg-red-500/30' : 'bg-green-500/30'}`}>
            <p className="text-xs mb-1">Discrepancy</p>
            <p className="text-xl font-bold text-red-300">-₹{totalDiscrepancy.toFixed(0)}</p>
          </div>
          <div className="bg-yellow-500/20 rounded-lg p-3">
            <p className="text-yellow-200 text-xs mb-1">Pending Settlement</p>
            <p className="text-xl font-bold">₹{(reconciliationSummary.pendingSettlement/1000).toFixed(1)}K</p>
          </div>
        </div>
      </div>

      {/* Platform Filter */}
      <div className="p-4 flex overflow-x-auto space-x-2">
        <button
          onClick={() => setSelectedPlatform('all')}
          className={`flex-shrink-0 px-4 py-2 rounded-full text-sm ${
            selectedPlatform === 'all' ? 'bg-violet-500 text-white' : 'bg-gray-700 text-gray-300'
          }`}
        >
          All Platforms
        </button>
        {platforms.map(platform => (
          <button
            key={platform.id}
            onClick={() => setSelectedPlatform(platform.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm flex items-center ${
              selectedPlatform === platform.id ? platform.color + ' text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            <span className="mr-1">{platform.logo}</span> {platform.name}
          </button>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-800 border-b border-gray-700">
        {[
          { id: 'all', label: 'All' },
          { id: 'discrepancy', label: `Issues (${discrepancyCount})` },
          { id: 'pending', label: 'Pending' },
          { id: 'matched', label: 'Matched' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === tab.id
                ? 'text-violet-400 border-b-2 border-violet-400'
                : 'text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Discrepancy Alert */}
      {discrepancyCount > 0 && activeTab !== 'matched' && (
        <div className="mx-4 mt-4 bg-red-900/30 border border-red-500/30 rounded-xl p-4">
          <div className="flex items-center">
            <AlertTriangle size={24} className="text-red-400 mr-3" />
            <div className="flex-1">
              <p className="text-red-400 font-medium">{discrepancyCount} Orders with Discrepancy</p>
              <p className="text-red-300/70 text-sm">Total shortfall: ₹{totalDiscrepancy.toFixed(2)}</p>
            </div>
            <button className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm">
              Raise Ticket
            </button>
          </div>
        </div>
      )}

      {/* Orders List */}
      <div className="p-4 space-y-3">
        {filteredOrders.map(order => {
          const platform = platforms.find(p => p.id === order.platform);
          return (
            <div key={order.id} className="bg-gray-800 rounded-xl p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className={`w-10 h-10 ${platform?.color} rounded-lg flex items-center justify-center mr-3`}>
                    <span className="text-lg">{platform?.logo}</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{order.orderId}</p>
                    <p className="text-gray-400 text-xs">{order.date}</p>
                  </div>
                </div>
                <span className={`flex items-center text-xs px-2 py-1 rounded-full text-white ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  <span className="ml-1 capitalize">{order.status}</span>
                </span>
              </div>

              {/* Order Breakdown */}
              <div className="bg-gray-700/30 rounded-lg p-3 mb-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Order Value (GMV)</span>
                  <span className="text-white">₹{order.gmv}</span>
                </div>
                <div className="flex justify-between text-red-400">
                  <span>Commission ({platform?.commission}%)</span>
                  <span>-₹{order.commission}</span>
                </div>
                <div className="flex justify-between text-red-400">
                  <span>GST on Commission</span>
                  <span>-₹{order.gst}</span>
                </div>
                <div className="flex justify-between text-red-400">
                  <span>TCS (1%)</span>
                  <span>-₹{order.tcs}</span>
                </div>
                {order.packing > 0 && (
                  <div className="flex justify-between text-green-400">
                    <span>Packing Charges</span>
                    <span>+₹{order.packing}</span>
                  </div>
                )}
                {order.delivery > 0 && (
                  <div className="flex justify-between text-green-400">
                    <span>Delivery Premium</span>
                    <span>+₹{order.delivery}</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-gray-600 font-medium">
                  <span className="text-white">Expected Payout</span>
                  <span className="text-green-400">₹{order.netPayout.toFixed(2)}</span>
                </div>
              </div>

              {/* Payout Comparison */}
              {order.status !== 'pending' && (
                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3 mb-3">
                  <div>
                    <p className="text-gray-400 text-xs">Platform Payout</p>
                    <p className="text-white font-medium">₹{order.platformPayout?.toFixed(2) || '-'}</p>
                  </div>
                  {order.status === 'discrepancy' && (
                    <div className="text-right">
                      <p className="text-red-400 text-xs">Shortfall</p>
                      <p className="text-red-400 font-bold">-₹{order.discrepancyAmount?.toFixed(2)}</p>
                    </div>
                  )}
                  {order.status === 'matched' && (
                    <CheckCircle size={24} className="text-green-400" />
                  )}
                </div>
              )}

              {/* Discrepancy Reason */}
              {order.discrepancyReason && (
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                  <p className="text-red-400 text-sm">
                    <AlertTriangle size={14} className="inline mr-1" />
                    {order.discrepancyReason}
                  </p>
                </div>
              )}

              {/* Actions */}
              {order.status === 'discrepancy' && (
                <div className="flex space-x-2 mt-3">
                  <button className="flex-1 bg-violet-600 text-white py-2 rounded-lg text-sm">
                    Raise Dispute
                  </button>
                  <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm">
                    Mark Resolved
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Download Report Button */}
      <div className="fixed bottom-24 left-4 right-4">
        <button className="w-full bg-violet-600 text-white py-4 rounded-xl font-bold flex items-center justify-center">
          <Download size={20} className="mr-2" />
          Download Reconciliation Report
        </button>
      </div>

      <BottomNav userType="merchant" />
    </div>
  );
};

export default MerchantAggregatorReconciliation;
