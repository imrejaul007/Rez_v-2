import React, { useState } from 'react';
import {
  ArrowLeft, Users, IndianRupee, TrendingUp, Award, Calendar,
  Filter, Search, ChevronRight, Plus, Edit, Settings, Target,
  Crown, Medal, Star, Download
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantSalesmanCommission = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('this_month');
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const [commissionSettings, setCommissionSettings] = useState({
    type: 'percentage', // percentage or fixed
    rate: 2, // 2% or fixed amount
    minSaleForCommission: 500,
    bonusEnabled: true,
    bonusThreshold: 100000,
    bonusRate: 3
  });

  const [salespeople, setSalespeople] = useState([
    {
      id: 1,
      name: 'Rahul Sharma',
      phone: '9876543210',
      role: 'Senior Sales',
      avatar: 'RS',
      sales: 185000,
      orders: 124,
      commission: 3700,
      bonus: 1500,
      totalEarning: 5200,
      target: 200000,
      rank: 1
    },
    {
      id: 2,
      name: 'Priya Verma',
      phone: '9876543211',
      role: 'Sales Executive',
      avatar: 'PV',
      sales: 142000,
      orders: 98,
      commission: 2840,
      bonus: 1000,
      totalEarning: 3840,
      target: 150000,
      rank: 2
    },
    {
      id: 3,
      name: 'Amit Kumar',
      phone: '9876543212',
      role: 'Sales Executive',
      avatar: 'AK',
      sales: 98000,
      orders: 65,
      commission: 1960,
      bonus: 0,
      totalEarning: 1960,
      target: 120000,
      rank: 3
    },
    {
      id: 4,
      name: 'Neha Singh',
      phone: '9876543213',
      role: 'Junior Sales',
      avatar: 'NS',
      sales: 67000,
      orders: 45,
      commission: 1340,
      bonus: 0,
      totalEarning: 1340,
      target: 80000,
      rank: 4
    },
  ]);

  const [recentTransactions, setRecentTransactions] = useState([
    { id: 1, salesperson: 'Rahul Sharma', orderId: 'ORD-5847', amount: 2500, commission: 50, date: '28 Dec 2024' },
    { id: 2, salesperson: 'Priya Verma', orderId: 'ORD-5846', amount: 1800, commission: 36, date: '28 Dec 2024' },
    { id: 3, salesperson: 'Rahul Sharma', orderId: 'ORD-5845', amount: 3200, commission: 64, date: '28 Dec 2024' },
    { id: 4, salesperson: 'Amit Kumar', orderId: 'ORD-5844', amount: 950, commission: 19, date: '27 Dec 2024' },
    { id: 5, salesperson: 'Neha Singh', orderId: 'ORD-5843', amount: 1500, commission: 30, date: '27 Dec 2024' },
  ]);

  const stats = {
    totalSales: salespeople.reduce((sum, s) => sum + s.sales, 0),
    totalCommission: salespeople.reduce((sum, s) => sum + s.totalEarning, 0),
    totalOrders: salespeople.reduce((sum, s) => sum + s.orders, 0),
    topPerformer: salespeople[0].name
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return <Crown size={20} className="text-yellow-400" />;
      case 2: return <Medal size={20} className="text-gray-300" />;
      case 3: return <Medal size={20} className="text-amber-600" />;
      default: return <span className="text-gray-400 font-bold">#{rank}</span>;
    }
  };

  const getProgressColor = (sales, target) => {
    const progress = (sales / target) * 100;
    if (progress >= 100) return 'bg-green-500';
    if (progress >= 75) return 'bg-blue-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Sales Commission</h1>
              <p className="text-sky-200 text-sm">Track salesperson earnings</p>
            </div>
          </div>
          <button
            onClick={() => setShowSettingsModal(true)}
            className="bg-white/20 p-2 rounded-lg"
          >
            <Settings size={20} />
          </button>
        </div>

        {/* Period Selector */}
        <div className="flex space-x-2 mb-4 overflow-x-auto">
          {['today', 'this_week', 'this_month', 'last_month'].map(period => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm ${
                selectedPeriod === period ? 'bg-white text-sky-600' : 'bg-white/20'
              }`}
            >
              {period.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 rounded-xl p-3">
            <p className="text-sky-200 text-xs mb-1">Total Sales</p>
            <p className="text-2xl font-bold">₹{(stats.totalSales/1000).toFixed(0)}K</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3">
            <p className="text-sky-200 text-xs mb-1">Total Commission</p>
            <p className="text-2xl font-bold">₹{stats.totalCommission.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-800 border-b border-gray-700">
        {['overview', 'leaderboard', 'transactions'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-sm font-medium capitalize ${
              activeTab === tab ? 'text-sky-400 border-b-2 border-sky-400' : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Commission Settings Card */}
            <div className="bg-gradient-to-r from-sky-900/30 to-blue-900/30 border border-sky-500/30 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold">Commission Structure</h3>
                <button
                  onClick={() => setShowSettingsModal(true)}
                  className="text-sky-400 text-sm"
                >
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Base Rate</p>
                  <p className="text-white font-bold">{commissionSettings.rate}% of sale</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Min Sale</p>
                  <p className="text-white font-bold">₹{commissionSettings.minSaleForCommission}</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Bonus Threshold</p>
                  <p className="text-white font-bold">₹{(commissionSettings.bonusThreshold/1000).toFixed(0)}K/month</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Bonus Rate</p>
                  <p className="text-white font-bold">{commissionSettings.bonusRate}% extra</p>
                </div>
              </div>
            </div>

            {/* Salespeople List */}
            <h3 className="text-white font-semibold">Team Performance</h3>
            {salespeople.map(person => (
              <div key={person.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">{person.avatar}</span>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h4 className="text-white font-medium mr-2">{person.name}</h4>
                        {getRankIcon(person.rank)}
                      </div>
                      <p className="text-gray-400 text-sm">{person.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-bold">₹{person.totalEarning.toLocaleString()}</p>
                    <p className="text-gray-500 text-xs">Commission</p>
                  </div>
                </div>

                {/* Progress to Target */}
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Sales: ₹{(person.sales/1000).toFixed(0)}K</span>
                    <span className="text-gray-400">Target: ₹{(person.target/1000).toFixed(0)}K</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full ${getProgressColor(person.sales, person.target)}`}
                      style={{ width: `${Math.min(100, (person.sales / person.target) * 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">
                    {((person.sales / person.target) * 100).toFixed(0)}% achieved
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-white font-medium">{person.orders}</p>
                    <p className="text-gray-400 text-xs">Orders</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-white font-medium">₹{person.commission}</p>
                    <p className="text-gray-400 text-xs">Base</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-green-400 font-medium">₹{person.bonus}</p>
                    <p className="text-gray-400 text-xs">Bonus</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="space-y-4">
            {/* Top 3 Podium */}
            <div className="flex items-end justify-center space-x-4 py-6">
              {/* 2nd Place */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">{salespeople[1].avatar}</span>
                </div>
                <div className="bg-gray-400 rounded-t-lg w-20 h-16 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <p className="text-white text-sm mt-2">{salespeople[1].name.split(' ')[0]}</p>
                <p className="text-gray-400 text-xs">₹{(salespeople[1].sales/1000).toFixed(0)}K</p>
              </div>

              {/* 1st Place */}
              <div className="text-center">
                <Crown size={24} className="text-yellow-400 mx-auto mb-1" />
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-xl">{salespeople[0].avatar}</span>
                </div>
                <div className="bg-yellow-500 rounded-t-lg w-24 h-24 flex items-center justify-center">
                  <span className="text-white font-bold text-3xl">1</span>
                </div>
                <p className="text-white font-medium mt-2">{salespeople[0].name.split(' ')[0]}</p>
                <p className="text-yellow-400 text-sm">₹{(salespeople[0].sales/1000).toFixed(0)}K</p>
              </div>

              {/* 3rd Place */}
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">{salespeople[2].avatar}</span>
                </div>
                <div className="bg-amber-600 rounded-t-lg w-20 h-12 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <p className="text-white text-sm mt-2">{salespeople[2].name.split(' ')[0]}</p>
                <p className="text-gray-400 text-xs">₹{(salespeople[2].sales/1000).toFixed(0)}K</p>
              </div>
            </div>

            {/* Full Leaderboard */}
            <div className="space-y-2">
              {salespeople.map((person, idx) => (
                <div key={person.id} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center mr-3">
                      {getRankIcon(idx + 1)}
                    </div>
                    <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">{person.avatar}</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{person.name}</p>
                      <p className="text-gray-400 text-sm">{person.orders} orders</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">₹{(person.sales/1000).toFixed(0)}K</p>
                    <p className="text-green-400 text-sm">₹{person.totalEarning} earned</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold">Recent Transactions</h3>
              <button className="text-sky-400 text-sm flex items-center">
                <Download size={14} className="mr-1" /> Export
              </button>
            </div>

            {recentTransactions.map(txn => (
              <div key={txn.id} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">{txn.orderId}</p>
                  <p className="text-gray-400 text-sm">{txn.salesperson}</p>
                  <p className="text-gray-500 text-xs">{txn.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-white">₹{txn.amount}</p>
                  <p className="text-green-400 text-sm">+₹{txn.commission}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="w-full bg-gray-900 rounded-t-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-lg font-bold">Commission Settings</h3>
              <button onClick={() => setShowSettingsModal(false)}>
                <span className="text-gray-400 text-2xl">&times;</span>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Base Commission Rate (%)</label>
                <input
                  type="number"
                  value={commissionSettings.rate}
                  onChange={(e) => setCommissionSettings({...commissionSettings, rate: e.target.value})}
                  className="w-full bg-gray-800 text-white p-3 rounded-xl"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Minimum Sale for Commission (₹)</label>
                <input
                  type="number"
                  value={commissionSettings.minSaleForCommission}
                  onChange={(e) => setCommissionSettings({...commissionSettings, minSaleForCommission: e.target.value})}
                  className="w-full bg-gray-800 text-white p-3 rounded-xl"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Bonus Threshold (₹/month)</label>
                <input
                  type="number"
                  value={commissionSettings.bonusThreshold}
                  onChange={(e) => setCommissionSettings({...commissionSettings, bonusThreshold: e.target.value})}
                  className="w-full bg-gray-800 text-white p-3 rounded-xl"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Bonus Rate (%)</label>
                <input
                  type="number"
                  value={commissionSettings.bonusRate}
                  onChange={(e) => setCommissionSettings({...commissionSettings, bonusRate: e.target.value})}
                  className="w-full bg-gray-800 text-white p-3 rounded-xl"
                />
              </div>
            </div>

            <button
              onClick={() => setShowSettingsModal(false)}
              className="w-full bg-sky-600 text-white py-4 rounded-xl font-bold mt-6"
            >
              Save Settings
            </button>
          </div>
        </div>
      )}

      <BottomNav userType="merchant" />
    </div>
  );
};

export default MerchantSalesmanCommission;
