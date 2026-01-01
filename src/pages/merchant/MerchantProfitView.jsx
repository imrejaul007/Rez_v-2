import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, TrendingUp, TrendingDown, IndianRupee, Minus,
  Equal, Calendar, ChevronLeft, ChevronRight, Share2,
  MessageSquare, Bell, Info, ArrowUpRight, ArrowDownRight,
  Wallet, Percent, Coins, ShoppingBag, CreditCard
} from 'lucide-react';
import BottomNav from '../../components/BottomNav';

const MerchantProfitView = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('daily'); // daily, weekly, monthly

  // Today's profit data - Simple view
  const todayData = {
    totalSales: 45670,
    commission: 9134,  // 20%
    rezCoins: 2284,    // 5% of commission goes to coins
    netProfit: 36536,

    // Breakdown
    cashSales: 28500,
    onlineSales: 17170,

    // Transactions
    totalOrders: 67,
    averageOrder: 681,

    // Comparison
    vsYesterday: 12.5,
    vsLastWeek: 8.3
  };

  // Weekly summary
  const weeklyData = [
    { day: 'Mon', sales: 42000, profit: 33600 },
    { day: 'Tue', sales: 38500, profit: 30800 },
    { day: 'Wed', sales: 45670, profit: 36536 },
    { day: 'Thu', sales: 0, profit: 0, isFuture: true },
    { day: 'Fri', sales: 0, profit: 0, isFuture: true },
    { day: 'Sat', sales: 0, profit: 0, isFuture: true },
    { day: 'Sun', sales: 0, profit: 0, isFuture: true }
  ];

  const formatCurrency = (amount) => {
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)}L`;
    if (amount >= 1000) return `₹${(amount / 1000).toFixed(1)}k`;
    return `₹${amount}`;
  };

  const formatDate = (date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-4 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/merchant')} className="p-2 hover:bg-gray-700 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-gray-400" />
            </button>
            <div>
              <h1 className="text-lg font-bold text-white">Daily Profit</h1>
              <p className="text-xs text-gray-400">Simple earnings view</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-700 rounded-lg">
              <Share2 className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-lg">
              <Bell className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Date Selector */}
        <div className="flex items-center justify-between bg-gray-800 rounded-xl p-3">
          <button
            onClick={() => {
              const newDate = new Date(selectedDate);
              newDate.setDate(newDate.getDate() - 1);
              setSelectedDate(newDate);
            }}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-400" />
            <span className="text-white font-medium">{formatDate(selectedDate)}</span>
          </div>
          <button
            onClick={() => {
              const newDate = new Date(selectedDate);
              newDate.setDate(newDate.getDate() + 1);
              if (newDate <= new Date()) setSelectedDate(newDate);
            }}
            className="p-2 hover:bg-gray-700 rounded-lg"
            disabled={selectedDate.toDateString() === new Date().toDateString()}
          >
            <ChevronRight className={`w-5 h-5 ${
              selectedDate.toDateString() === new Date().toDateString()
                ? 'text-gray-600'
                : 'text-gray-400'
            }`} />
          </button>
        </div>

        {/* THE SIMPLE PROFIT FORMULA - Main Focus */}
        <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 rounded-2xl border border-green-500/30 p-6">
          <p className="text-center text-green-400 text-sm font-medium mb-4">YOUR NET PROFIT</p>

          {/* Net Profit - Big Number */}
          <div className="text-center mb-6">
            <p className="text-5xl font-bold text-white">
              ₹{todayData.netProfit.toLocaleString()}
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              {todayData.vsYesterday >= 0 ? (
                <div className="flex items-center gap-1 text-green-400">
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-sm">+{todayData.vsYesterday}% vs yesterday</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-red-400">
                  <ArrowDownRight className="w-4 h-4" />
                  <span className="text-sm">{todayData.vsYesterday}% vs yesterday</span>
                </div>
              )}
            </div>
          </div>

          {/* The Formula */}
          <div className="bg-gray-900/50 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Total Sales</span>
              </div>
              <span className="text-xl font-semibold text-white">₹{todayData.totalSales.toLocaleString()}</span>
            </div>

            <div className="flex items-center justify-center">
              <Minus className="w-5 h-5 text-gray-500" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Percent className="w-5 h-5 text-red-400" />
                <span className="text-gray-300">Commission (20%)</span>
              </div>
              <span className="text-xl font-semibold text-red-400">-₹{todayData.commission.toLocaleString()}</span>
            </div>

            <div className="flex items-center justify-center">
              <Minus className="w-5 h-5 text-gray-500" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">ReZ Coins (5%)</span>
              </div>
              <span className="text-xl font-semibold text-yellow-400">-₹{todayData.rezCoins.toLocaleString()}</span>
            </div>

            <div className="border-t border-gray-700 pt-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Equal className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">You Receive</span>
                </div>
                <span className="text-2xl font-bold text-green-400">₹{todayData.netProfit.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-400">Online</span>
            </div>
            <p className="text-xl font-bold text-white">₹{todayData.onlineSales.toLocaleString()}</p>
          </div>
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-400">Cash</span>
            </div>
            <p className="text-xl font-bold text-white">₹{todayData.cashSales.toLocaleString()}</p>
          </div>
        </div>

        {/* Orders Summary */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Orders</p>
              <p className="text-2xl font-bold text-white">{todayData.totalOrders}</p>
            </div>
            <div className="h-12 w-px bg-gray-700" />
            <div>
              <p className="text-gray-400 text-sm">Average Order</p>
              <p className="text-2xl font-bold text-white">₹{todayData.averageOrder}</p>
            </div>
          </div>
        </div>

        {/* Weekly Chart */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white">This Week</h3>
            <span className="text-sm text-gray-400">
              Total: ₹{weeklyData.reduce((sum, d) => sum + d.profit, 0).toLocaleString()}
            </span>
          </div>
          <div className="flex items-end justify-between gap-2 h-32">
            {weeklyData.map((day, idx) => {
              const maxSales = Math.max(...weeklyData.map(d => d.sales)) || 1;
              const height = (day.sales / maxSales) * 100;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex-1 flex items-end">
                    <div
                      className={`w-full rounded-t transition-all ${
                        day.isFuture ? 'bg-gray-700' : 'bg-green-500'
                      }`}
                      style={{ height: `${day.isFuture ? 20 : height}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{day.day}</p>
                  {!day.isFuture && (
                    <p className="text-xs text-gray-500">{formatCurrency(day.profit)}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Daily WhatsApp Report */}
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">Daily Profit Report</h3>
              <p className="text-sm text-gray-400 mt-1">
                Get this summary on WhatsApp every day at 10 PM
              </p>
              <button className="mt-3 px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-500">
                Enable WhatsApp Reports
              </button>
            </div>
          </div>
        </div>

        {/* Tip */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-white">
                <span className="font-medium">Pro tip:</span> Your commission rate is 20% (Free tier).
                Upgrade to Golden tier for 17% commission and save ₹{Math.round(todayData.totalSales * 0.03).toLocaleString()}/day.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default MerchantProfitView;
