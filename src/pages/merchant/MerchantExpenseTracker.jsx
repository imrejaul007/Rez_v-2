import React, { useState } from 'react';
import {
  ArrowLeft, Plus, Search, Filter, Calendar, TrendingUp, TrendingDown,
  Receipt, Truck, Zap, Users, ShoppingBag, Wrench, Building, Coffee,
  CreditCard, Wallet, PieChart, BarChart2, Download, Camera, X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantExpenseTracker = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('this_month');
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { id: 'inventory', name: 'Inventory/Stock', icon: ShoppingBag, color: 'bg-blue-600' },
    { id: 'salary', name: 'Salary & Wages', icon: Users, color: 'bg-green-600' },
    { id: 'rent', name: 'Rent', icon: Building, color: 'bg-purple-600' },
    { id: 'utilities', name: 'Utilities (Elec/Water)', icon: Zap, color: 'bg-yellow-600' },
    { id: 'transport', name: 'Transport/Delivery', icon: Truck, color: 'bg-orange-600' },
    { id: 'maintenance', name: 'Maintenance', icon: Wrench, color: 'bg-red-600' },
    { id: 'marketing', name: 'Marketing/Ads', icon: TrendingUp, color: 'bg-pink-600' },
    { id: 'food', name: 'Food & Beverages', icon: Coffee, color: 'bg-amber-600' },
    { id: 'misc', name: 'Miscellaneous', icon: Receipt, color: 'bg-gray-600' },
  ];

  const [expenses, setExpenses] = useState([
    { id: 1, category: 'inventory', description: 'Vegetables & Groceries', amount: 15000, date: '28 Dec 2024', paymentMode: 'cash', vendor: 'Fresh Mart' },
    { id: 2, category: 'salary', description: 'Staff Salary - December', amount: 85000, date: '25 Dec 2024', paymentMode: 'bank', vendor: 'Payroll' },
    { id: 3, category: 'utilities', description: 'Electricity Bill', amount: 8500, date: '22 Dec 2024', paymentMode: 'upi', vendor: 'MSEB' },
    { id: 4, category: 'rent', description: 'Shop Rent - January', amount: 45000, date: '20 Dec 2024', paymentMode: 'bank', vendor: 'Landlord' },
    { id: 5, category: 'transport', description: 'Delivery Partner Payment', amount: 12000, date: '18 Dec 2024', paymentMode: 'upi', vendor: 'Local Delivery' },
    { id: 6, category: 'maintenance', description: 'AC Repair', amount: 3500, date: '15 Dec 2024', paymentMode: 'cash', vendor: 'Cool Services' },
    { id: 7, category: 'inventory', description: 'Packaging Materials', amount: 5000, date: '12 Dec 2024', paymentMode: 'upi', vendor: 'PackMart' },
    { id: 8, category: 'marketing', description: 'Instagram Ads', amount: 8000, date: '10 Dec 2024', paymentMode: 'card', vendor: 'Meta' },
  ]);

  const summary = {
    totalExpenses: expenses.reduce((sum, e) => sum + e.amount, 0),
    thisMonth: 182000,
    lastMonth: 165000,
    change: 10.3,
    topCategory: 'Salary & Wages',
    topCategoryAmount: 85000
  };

  const categoryBreakdown = categories.map(cat => ({
    ...cat,
    amount: expenses.filter(e => e.category === cat.id).reduce((sum, e) => sum + e.amount, 0)
  })).sort((a, b) => b.amount - a.amount);

  const filteredExpenses = activeTab === 'all'
    ? expenses
    : expenses.filter(e => e.category === activeTab);

  const getCategoryInfo = (categoryId) => categories.find(c => c.id === categoryId);

  const getPaymentIcon = (mode) => {
    switch (mode) {
      case 'cash': return '💵';
      case 'upi': return '📱';
      case 'card': return '💳';
      case 'bank': return '🏦';
      default: return '💰';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Expense Tracker</h1>
              <p className="text-rose-200 text-sm">Track all business expenses</p>
            </div>
          </div>
          <button
            onClick={() => setShowAddExpense(true)}
            className="bg-white/20 p-2 rounded-full"
          >
            <Plus size={24} />
          </button>
        </div>

        {/* Period Selector */}
        <div className="flex space-x-2 mb-4 overflow-x-auto">
          {['today', 'this_week', 'this_month', 'last_month'].map(period => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm ${
                selectedPeriod === period ? 'bg-white text-rose-600' : 'bg-white/20'
              }`}
            >
              {period.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </button>
          ))}
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-rose-200 text-sm mb-1">Total Expenses</p>
            <p className="text-2xl font-bold">₹{(summary.totalExpenses/1000).toFixed(1)}K</p>
            <div className={`flex items-center text-sm mt-1 ${summary.change > 0 ? 'text-red-300' : 'text-green-300'}`}>
              {summary.change > 0 ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
              {summary.change}% vs last month
            </div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-rose-200 text-sm mb-1">Top Category</p>
            <p className="text-lg font-bold">{summary.topCategory}</p>
            <p className="text-rose-200">₹{(summary.topCategoryAmount/1000).toFixed(1)}K</p>
          </div>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-semibold">Category Breakdown</h3>
          <button className="text-rose-400 text-sm flex items-center">
            <PieChart size={14} className="mr-1" /> View Chart
          </button>
        </div>

        <div className="flex overflow-x-auto space-x-3 pb-2">
          {categoryBreakdown.filter(c => c.amount > 0).map(cat => {
            const Icon = cat.icon;
            const percentage = ((cat.amount / summary.totalExpenses) * 100).toFixed(0);
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(activeTab === cat.id ? 'all' : cat.id)}
                className={`flex-shrink-0 bg-gray-800 rounded-xl p-3 min-w-[120px] ${
                  activeTab === cat.id ? 'ring-2 ring-rose-400' : ''
                }`}
              >
                <div className={`w-10 h-10 ${cat.color} rounded-lg flex items-center justify-center mb-2`}>
                  <Icon size={20} className="text-white" />
                </div>
                <p className="text-white font-medium text-sm">{cat.name}</p>
                <p className="text-gray-400 text-xs">₹{(cat.amount/1000).toFixed(1)}K ({percentage}%)</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expense List */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-semibold">
            {activeTab === 'all' ? 'All Expenses' : getCategoryInfo(activeTab)?.name}
          </h3>
          <button className="text-gray-400">
            <Filter size={18} />
          </button>
        </div>

        <div className="space-y-3">
          {filteredExpenses.map(expense => {
            const catInfo = getCategoryInfo(expense.category);
            const Icon = catInfo?.icon || Receipt;
            return (
              <div key={expense.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <div className={`w-12 h-12 ${catInfo?.color} rounded-xl flex items-center justify-center mr-3`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{expense.description}</p>
                      <p className="text-gray-400 text-sm">{expense.vendor}</p>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <span>{expense.date}</span>
                        <span className="mx-2">•</span>
                        <span>{getPaymentIcon(expense.paymentMode)} {expense.paymentMode}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-red-400 font-bold">-₹{expense.amount.toLocaleString()}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Expense FAB */}
      <button
        onClick={() => setShowAddExpense(true)}
        className="fixed bottom-24 right-4 bg-rose-500 text-white p-4 rounded-full shadow-lg"
      >
        <Plus size={24} />
      </button>

      {/* Add Expense Modal */}
      {showAddExpense && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="w-full bg-gray-900 rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-lg font-bold">Add Expense</h3>
              <button onClick={() => setShowAddExpense(false)}>
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            {/* Category Selection */}
            <div className="mb-4">
              <label className="text-gray-400 text-sm mb-2 block">Category</label>
              <div className="grid grid-cols-3 gap-2">
                {categories.map(cat => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`p-3 rounded-xl flex flex-col items-center ${
                        selectedCategory === cat.id ? cat.color : 'bg-gray-800'
                      }`}
                    >
                      <Icon size={20} className="text-white mb-1" />
                      <span className="text-white text-xs text-center">{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Amount */}
            <div className="mb-4">
              <label className="text-gray-400 text-sm mb-2 block">Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">₹</span>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full bg-gray-800 text-white text-2xl font-bold pl-10 pr-4 py-4 rounded-xl"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="text-gray-400 text-sm mb-2 block">Description</label>
              <input
                type="text"
                placeholder="e.g. Monthly groceries"
                className="w-full bg-gray-800 text-white p-3 rounded-xl"
              />
            </div>

            {/* Vendor */}
            <div className="mb-4">
              <label className="text-gray-400 text-sm mb-2 block">Vendor/Paid To</label>
              <input
                type="text"
                placeholder="e.g. Fresh Mart"
                className="w-full bg-gray-800 text-white p-3 rounded-xl"
              />
            </div>

            {/* Payment Mode */}
            <div className="mb-4">
              <label className="text-gray-400 text-sm mb-2 block">Payment Mode</label>
              <div className="flex space-x-2">
                {[
                  { id: 'cash', label: '💵 Cash' },
                  { id: 'upi', label: '📱 UPI' },
                  { id: 'card', label: '💳 Card' },
                  { id: 'bank', label: '🏦 Bank' },
                ].map(mode => (
                  <button
                    key={mode.id}
                    className="flex-1 bg-gray-800 text-white py-2 rounded-lg text-sm"
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Attach Receipt */}
            <button className="w-full bg-gray-800 text-gray-400 py-3 rounded-xl mb-6 flex items-center justify-center">
              <Camera size={18} className="mr-2" /> Attach Receipt Photo
            </button>

            {/* Save Button */}
            <button className="w-full bg-rose-500 text-white py-4 rounded-xl font-bold">
              Add Expense
            </button>
          </div>
        </div>
      )}

      <BottomNav userType="merchant" />
    </div>
  );
};

export default MerchantExpenseTracker;
