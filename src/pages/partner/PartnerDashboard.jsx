import { useState } from 'react';
import { Handshake, TrendingUp, Users, DollarSign, Award, BarChart3, Bell, Settings } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

// Backend API: GET /api/partner/dashboard
// Backend API: GET /api/partner/earnings
// Backend API: GET /api/partner/referrals

export default function PartnerDashboard() {
  const [period, setPeriod] = useState('month');

  const stats = {
    totalEarnings: 45670,
    activeReferrals: 234,
    conversionRate: 68,
    pendingPayouts: 12340
  };

  const recentReferrals = [
    {
      id: 1,
      name: 'Rahul Kumar',
      joinedDate: '2026-01-02',
      status: 'active',
      earnings: 500,
      orders: 12
    },
    {
      id: 2,
      name: 'Priya Sharma',
      joinedDate: '2026-01-01',
      status: 'active',
      earnings: 750,
      orders: 18
    },
    {
      id: 3,
      name: 'Amit Verma',
      joinedDate: '2025-12-30',
      status: 'pending',
      earnings: 0,
      orders: 0
    }
  ];

  const earningsHistory = [
    { month: 'Sep', amount: 32000 },
    { month: 'Oct', amount: 38000 },
    { month: 'Nov', amount: 42000 },
    { month: 'Dec', amount: 45670 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Handshake className="w-10 h-10" />
            <div>
              <h1 className="text-2xl font-bold">Partner Portal</h1>
              <p className="text-emerald-100">Grow together, earn together</p>
            </div>
          </div>
          <button className="p-2 bg-white/20 rounded-lg">
            <Bell className="w-6 h-6" />
          </button>
        </div>

        {/* Main Stats */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <div className="text-emerald-100 text-sm mb-1">Total Earnings</div>
          <div className="text-4xl font-bold">₹{stats.totalEarnings.toLocaleString()}</div>
          <div className="flex items-center gap-2 mt-2 text-emerald-100">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">+23% this month</span>
          </div>
        </div>

        {/* Period Selector */}
        <div className="flex gap-2">
          {['week', 'month', 'quarter', 'year'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                period === p
                  ? 'bg-white text-emerald-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-600 text-sm">Active Referrals</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.activeReferrals}</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600 text-sm">Conversion</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.conversionRate}%</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span className="text-gray-600 text-sm">Pending Payouts</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">₹{stats.pendingPayouts.toLocaleString()}</div>
            <button className="w-full mt-3 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all">
              Request Payout
            </button>
          </div>
        </div>

        {/* Earnings Chart */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">Earnings Trend</h3>
          <div className="flex items-end justify-between gap-2 h-40">
            {earningsHistory.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-to-t from-emerald-600 to-teal-600 rounded-t-lg"
                  style={{ height: `${(item.amount / 50000) * 100}%` }}
                />
                <div className="text-xs text-gray-600">{item.month}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Referrals */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-4">Recent Referrals</h3>
          <div className="space-y-3">
            {recentReferrals.map((referral) => (
              <div key={referral.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">{referral.name}</div>
                  <div className="text-sm text-gray-600">Joined {referral.joinedDate}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-emerald-600">₹{referral.earnings}</div>
                  <div className="text-xs text-gray-500">{referral.orders} orders</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <button className="px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all flex items-center justify-center gap-2">
            <Award className="w-5 h-5" />
            Share Link
          </button>
          <button className="px-4 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all flex items-center justify-center gap-2">
            <Settings className="w-5 h-5" />
            Settings
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
