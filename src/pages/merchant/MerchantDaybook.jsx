import React, { useState } from 'react';
import {
  ArrowLeft, BookOpen, Plus, Calendar, TrendingUp, TrendingDown,
  DollarSign, Banknote, CreditCard, ArrowUpRight, ArrowDownLeft,
  Filter, Download, ChevronLeft, ChevronRight, Eye, Edit,
  Wallet, Building2, Users, Package, FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantDaybook = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showAddEntry, setShowAddEntry] = useState(false);
  const [entryType, setEntryType] = useState('income');

  const daySummary = {
    openingBalance: 45000,
    closingBalance: 62500,
    totalIncome: 28500,
    totalExpense: 11000,
    cashIn: 18500,
    cashOut: 8000,
    bankIn: 10000,
    bankOut: 3000
  };

  const entries = [
    {
      id: 1,
      time: '09:15 AM',
      type: 'income',
      category: 'Sales',
      description: 'Morning sales - Cash',
      amount: 4500,
      method: 'cash',
      reference: 'SHIFT-001'
    },
    {
      id: 2,
      time: '10:30 AM',
      type: 'expense',
      category: 'Purchases',
      description: 'Vegetable stock from vendor',
      amount: 2500,
      method: 'cash',
      reference: 'PO-2024-001'
    },
    {
      id: 3,
      time: '11:45 AM',
      type: 'income',
      category: 'Sales',
      description: 'UPI payments received',
      amount: 8200,
      method: 'bank',
      reference: 'BATCH-UPI-001'
    },
    {
      id: 4,
      time: '12:30 PM',
      type: 'expense',
      category: 'Utilities',
      description: 'Electricity bill payment',
      amount: 3500,
      method: 'bank',
      reference: 'BILL-ELEC-001'
    },
    {
      id: 5,
      time: '02:00 PM',
      type: 'income',
      category: 'Sales',
      description: 'Lunch hour sales - Mixed',
      amount: 12500,
      method: 'cash',
      reference: 'SHIFT-001'
    },
    {
      id: 6,
      time: '03:15 PM',
      type: 'expense',
      category: 'Staff',
      description: 'Daily wages - 2 helpers',
      amount: 1200,
      method: 'cash',
      reference: 'PAYROLL-001'
    },
    {
      id: 7,
      time: '04:00 PM',
      type: 'expense',
      category: 'Maintenance',
      description: 'AC repair service',
      amount: 800,
      method: 'cash',
      reference: 'MAINT-001'
    },
    {
      id: 8,
      time: '05:30 PM',
      type: 'income',
      category: 'Sales',
      description: 'Card payments batch',
      amount: 3300,
      method: 'bank',
      reference: 'BATCH-CARD-001'
    },
    {
      id: 9,
      time: '06:00 PM',
      type: 'expense',
      category: 'Purchases',
      description: 'Dairy products',
      amount: 1800,
      method: 'cash',
      reference: 'PO-2024-002'
    },
    {
      id: 10,
      time: '07:00 PM',
      type: 'expense',
      category: 'Miscellaneous',
      description: 'Packaging materials',
      amount: 1200,
      method: 'bank',
      reference: 'MISC-001'
    }
  ];

  const expenseCategories = [
    { id: 'purchases', name: 'Purchases', icon: Package },
    { id: 'utilities', name: 'Utilities', icon: Building2 },
    { id: 'staff', name: 'Staff/Wages', icon: Users },
    { id: 'maintenance', name: 'Maintenance', icon: FileText },
    { id: 'miscellaneous', name: 'Miscellaneous', icon: Wallet }
  ];

  const incomeCategories = [
    { id: 'sales', name: 'Sales', icon: DollarSign },
    { id: 'refund', name: 'Refund Received', icon: ArrowDownLeft },
    { id: 'other', name: 'Other Income', icon: Wallet }
  ];

  const filteredEntries = activeTab === 'all'
    ? entries
    : entries.filter(e => e.type === activeTab);

  const runningBalance = (entries) => {
    let balance = daySummary.openingBalance;
    return entries.map(entry => {
      balance = entry.type === 'income' ? balance + entry.amount : balance - entry.amount;
      return { ...entry, balance };
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Daybook / Cashbook</h1>
              <p className="text-amber-200 text-sm">Daily cash & bank entries</p>
            </div>
          </div>
          <button
            onClick={() => setShowAddEntry(true)}
            className="bg-white/20 p-2 rounded-lg"
          >
            <Plus size={24} />
          </button>
        </div>

        {/* Date Navigation */}
        <div className="flex items-center justify-between bg-white/10 rounded-xl p-3 mb-4">
          <button className="p-1">
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center">
            <Calendar size={18} className="mr-2" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-transparent text-white font-medium"
            />
          </div>
          <button className="p-1">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Day Summary */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-amber-200 text-sm">Total Income</span>
              <TrendingUp size={16} className="text-green-400" />
            </div>
            <p className="text-2xl font-bold text-green-400">+₹{daySummary.totalIncome.toLocaleString()}</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-amber-200 text-sm">Total Expense</span>
              <TrendingDown size={16} className="text-red-400" />
            </div>
            <p className="text-2xl font-bold text-red-400">-₹{daySummary.totalExpense.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Balance Cards */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center mb-2">
              <Banknote size={20} className="text-green-400 mr-2" />
              <span className="text-gray-400 text-sm">Cash</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-400 text-xs">In: ₹{daySummary.cashIn.toLocaleString()}</p>
                <p className="text-red-400 text-xs">Out: ₹{daySummary.cashOut.toLocaleString()}</p>
              </div>
              <p className="text-white font-bold">₹{(daySummary.cashIn - daySummary.cashOut).toLocaleString()}</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center mb-2">
              <Building2 size={20} className="text-blue-400 mr-2" />
              <span className="text-gray-400 text-sm">Bank</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-400 text-xs">In: ₹{daySummary.bankIn.toLocaleString()}</p>
                <p className="text-red-400 text-xs">Out: ₹{daySummary.bankOut.toLocaleString()}</p>
              </div>
              <p className="text-white font-bold">₹{(daySummary.bankIn - daySummary.bankOut).toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Opening/Closing Balance */}
        <div className="bg-gray-800 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <p className="text-gray-400 text-xs">Opening Balance</p>
              <p className="text-white font-bold">₹{daySummary.openingBalance.toLocaleString()}</p>
            </div>
            <ArrowUpRight size={24} className="text-green-400 mx-4" />
            <div className="text-center flex-1">
              <p className="text-gray-400 text-xs">Closing Balance</p>
              <p className="text-green-400 font-bold">₹{daySummary.closingBalance.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs & Filter */}
      <div className="px-4 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {[
              { id: 'all', label: 'All' },
              { id: 'income', label: 'Income' },
              { id: 'expense', label: 'Expense' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeTab === tab.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-800 text-gray-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button className="bg-gray-800 text-white p-2 rounded-lg">
            <Download size={20} />
          </button>
        </div>
      </div>

      {/* Entries List */}
      <div className="px-4 py-2">
        <div className="space-y-2">
          {runningBalance(filteredEntries).map((entry, idx) => (
            <div key={entry.id} className="bg-gray-800 rounded-xl p-3">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    entry.type === 'income' ? 'bg-green-500/20' : 'bg-red-500/20'
                  }`}>
                    {entry.type === 'income' ? (
                      <ArrowDownLeft size={16} className="text-green-400" />
                    ) : (
                      <ArrowUpRight size={16} className="text-red-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-white font-medium">{entry.description}</p>
                    <p className="text-gray-400 text-xs">{entry.category} • {entry.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${entry.type === 'income' ? 'text-green-400' : 'text-red-400'}`}>
                    {entry.type === 'income' ? '+' : '-'}₹{entry.amount.toLocaleString()}
                  </p>
                  <p className="text-gray-500 text-xs">
                    Bal: ₹{entry.balance.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-0.5 rounded-full ${
                    entry.method === 'cash' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {entry.method === 'cash' ? 'Cash' : 'Bank'}
                  </span>
                  <span className="text-gray-500">{entry.reference}</span>
                </div>
                <div className="flex space-x-2">
                  <button className="text-gray-400">
                    <Eye size={14} />
                  </button>
                  <button className="text-gray-400">
                    <Edit size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Entry Modal */}
      {showAddEntry && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
          <div className="bg-gray-800 rounded-t-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-bold">Add Entry</h3>
                <button onClick={() => setShowAddEntry(false)} className="text-gray-400">
                  ✕
                </button>
              </div>
            </div>

            <div className="p-4">
              {/* Entry Type Toggle */}
              <div className="flex bg-gray-700 rounded-xl p-1 mb-4">
                <button
                  onClick={() => setEntryType('income')}
                  className={`flex-1 py-3 rounded-lg font-medium ${
                    entryType === 'income'
                      ? 'bg-green-600 text-white'
                      : 'text-gray-400'
                  }`}
                >
                  Income
                </button>
                <button
                  onClick={() => setEntryType('expense')}
                  className={`flex-1 py-3 rounded-lg font-medium ${
                    entryType === 'expense'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-400'
                  }`}
                >
                  Expense
                </button>
              </div>

              {/* Category */}
              <div className="mb-4">
                <label className="text-gray-400 text-sm mb-2 block">Category</label>
                <div className="grid grid-cols-3 gap-2">
                  {(entryType === 'income' ? incomeCategories : expenseCategories).map(cat => {
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        className="bg-gray-700 p-3 rounded-xl text-center"
                      >
                        <Icon size={20} className="mx-auto mb-1 text-amber-400" />
                        <p className="text-white text-xs">{cat.name}</p>
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
                    className="w-full bg-gray-700 text-white text-2xl pl-10 pr-4 py-4 rounded-xl"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-4">
                <label className="text-gray-400 text-sm mb-2 block">Payment Method</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-green-600 text-white p-3 rounded-xl flex items-center justify-center">
                    <Banknote size={20} className="mr-2" />
                    Cash
                  </button>
                  <button className="bg-gray-700 text-gray-300 p-3 rounded-xl flex items-center justify-center">
                    <Building2 size={20} className="mr-2" />
                    Bank
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="text-gray-400 text-sm mb-2 block">Description</label>
                <input
                  type="text"
                  placeholder="Enter description..."
                  className="w-full bg-gray-700 text-white p-3 rounded-xl"
                />
              </div>

              {/* Reference */}
              <div className="mb-6">
                <label className="text-gray-400 text-sm mb-2 block">Reference (Optional)</label>
                <input
                  type="text"
                  placeholder="Invoice/Bill number..."
                  className="w-full bg-gray-700 text-white p-3 rounded-xl"
                />
              </div>

              <button className={`w-full py-4 rounded-xl font-bold ${
                entryType === 'income' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
              }`}>
                Add {entryType === 'income' ? 'Income' : 'Expense'} Entry
              </button>
            </div>
          </div>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantDaybook;
