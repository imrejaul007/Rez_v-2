import React, { useState } from 'react';
import {
  ArrowLeft, FileText, Download, Calendar, TrendingUp,
  Building2, Filter, Search, Eye, ChevronRight, AlertCircle,
  CheckCircle, Clock, DollarSign, Percent, Users
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantTDSTCSReports = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tds');
  const [selectedQuarter, setSelectedQuarter] = useState('Q3-2023');

  const tdsStats = {
    totalDeducted: 245000,
    totalDeposited: 220000,
    pending: 25000,
    transactions: 156
  };

  const tcsStats = {
    totalCollected: 85000,
    totalDeposited: 78000,
    pending: 7000,
    transactions: 42
  };

  const tdsDeductions = [
    {
      id: 1,
      vendor: 'ABC Contractors',
      pan: 'AAACA1234B',
      section: '194C',
      amount: 150000,
      tdsRate: 2,
      tdsAmount: 3000,
      date: '2024-01-15',
      status: 'deposited',
      challanNo: 'CHL-2024-001'
    },
    {
      id: 2,
      vendor: 'XYZ Professionals',
      pan: 'ABCPX5678D',
      section: '194J',
      amount: 100000,
      tdsRate: 10,
      tdsAmount: 10000,
      date: '2024-01-12',
      status: 'deposited',
      challanNo: 'CHL-2024-002'
    },
    {
      id: 3,
      vendor: 'PQR Suppliers',
      pan: 'AABCP9012F',
      section: '194Q',
      amount: 250000,
      tdsRate: 0.1,
      tdsAmount: 250,
      date: '2024-01-10',
      status: 'pending',
      challanNo: null
    },
    {
      id: 4,
      vendor: 'LMN Transport',
      pan: 'AALCL3456H',
      section: '194C',
      amount: 80000,
      tdsRate: 1,
      tdsAmount: 800,
      date: '2024-01-08',
      status: 'deposited',
      challanNo: 'CHL-2024-003'
    }
  ];

  const tcsCollections = [
    {
      id: 1,
      customer: 'DEF Traders',
      pan: 'AABCD1234E',
      section: '206C(1H)',
      amount: 560000,
      tcsRate: 0.1,
      tcsAmount: 560,
      date: '2024-01-14',
      status: 'deposited',
      challanNo: 'TCS-2024-001'
    },
    {
      id: 2,
      customer: 'GHI Enterprises',
      pan: 'AABCG5678I',
      section: '206C(1H)',
      amount: 850000,
      tcsRate: 0.1,
      tcsAmount: 850,
      date: '2024-01-11',
      status: 'pending',
      challanNo: null
    }
  ];

  const tdsSections = [
    { code: '194C', description: 'Contractors', rate: '1%/2%' },
    { code: '194J', description: 'Professional Fees', rate: '10%' },
    { code: '194Q', description: 'Purchase of Goods', rate: '0.1%' },
    { code: '194A', description: 'Interest', rate: '10%' },
    { code: '194H', description: 'Commission', rate: '5%' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'deposited': return 'bg-green-500/20 text-green-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'overdue': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const formatCurrency = (amount) => {
    if (amount >= 100000) return `₹${(amount/100000).toFixed(2)}L`;
    if (amount >= 1000) return `₹${(amount/1000).toFixed(1)}K`;
    return `₹${amount}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">TDS/TCS Reports</h1>
              <p className="text-violet-200 text-sm">Tax deduction & collection</p>
            </div>
          </div>
          <button className="bg-white/20 p-2 rounded-lg">
            <Download size={24} />
          </button>
        </div>

        {/* Quarter Selector */}
        <div className="flex items-center justify-between bg-white/10 rounded-xl p-3 mb-4">
          <div className="flex items-center">
            <Calendar size={18} className="mr-2" />
            <span>Financial Quarter:</span>
          </div>
          <select
            value={selectedQuarter}
            onChange={(e) => setSelectedQuarter(e.target.value)}
            className="bg-transparent text-white font-medium"
          >
            <option value="Q4-2023" className="text-black">Q4 (Jan-Mar 2024)</option>
            <option value="Q3-2023" className="text-black">Q3 (Oct-Dec 2023)</option>
            <option value="Q2-2023" className="text-black">Q2 (Jul-Sep 2023)</option>
            <option value="Q1-2023" className="text-black">Q1 (Apr-Jun 2023)</option>
          </select>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-violet-200 text-sm">TDS Deducted</span>
              <TrendingUp size={16} className="text-green-400" />
            </div>
            <p className="text-2xl font-bold">{formatCurrency(tdsStats.totalDeducted)}</p>
            <p className="text-violet-200 text-xs">{tdsStats.transactions} transactions</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-violet-200 text-sm">TCS Collected</span>
              <TrendingUp size={16} className="text-green-400" />
            </div>
            <p className="text-2xl font-bold">{formatCurrency(tcsStats.totalCollected)}</p>
            <p className="text-violet-200 text-xs">{tcsStats.transactions} transactions</p>
          </div>
        </div>
      </div>

      {/* Pending Alert */}
      {(tdsStats.pending > 0 || tcsStats.pending > 0) && (
        <div className="p-4">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
            <div className="flex items-start">
              <AlertCircle size={20} className="text-yellow-400 mr-2 mt-0.5" />
              <div>
                <p className="text-yellow-400 font-medium">Pending Deposits</p>
                <p className="text-gray-300 text-sm">
                  TDS: {formatCurrency(tdsStats.pending)} | TCS: {formatCurrency(tcsStats.pending)}
                </p>
                <p className="text-gray-400 text-xs mt-1">Due by 7th of next month</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="px-4 pb-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('tds')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'tds' ? 'bg-violet-600 text-white' : 'text-gray-400'
            }`}
          >
            TDS
          </button>
          <button
            onClick={() => setActiveTab('tcs')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'tcs' ? 'bg-violet-600 text-white' : 'text-gray-400'
            }`}
          >
            TCS
          </button>
          <button
            onClick={() => setActiveTab('sections')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'sections' ? 'bg-violet-600 text-white' : 'text-gray-400'
            }`}
          >
            Sections
          </button>
        </div>
      </div>

      {/* TDS Content */}
      {activeTab === 'tds' && (
        <div className="px-4 space-y-3">
          {tdsDeductions.map(tds => (
            <div key={tds.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-white font-bold">{tds.vendor}</p>
                  <p className="text-gray-400 text-sm">PAN: {tds.pan}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(tds.status)}`}>
                  {tds.status}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-3 text-sm">
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-gray-400 text-xs">Section</p>
                  <p className="text-violet-400 font-medium">{tds.section}</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-gray-400 text-xs">Amount</p>
                  <p className="text-white font-medium">{formatCurrency(tds.amount)}</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-gray-400 text-xs">Rate</p>
                  <p className="text-white font-medium">{tds.tdsRate}%</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-gray-400 text-xs">TDS</p>
                  <p className="text-green-400 font-medium">₹{tds.tdsAmount}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{tds.date}</span>
                {tds.challanNo ? (
                  <span className="text-green-400 text-xs">Challan: {tds.challanNo}</span>
                ) : (
                  <button className="bg-violet-600 text-white px-3 py-1 rounded-lg text-xs">
                    Generate Challan
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TCS Content */}
      {activeTab === 'tcs' && (
        <div className="px-4 space-y-3">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-4">
            <p className="text-blue-400 font-medium">TCS on Sale of Goods</p>
            <p className="text-gray-300 text-sm">
              Applicable on sales exceeding ₹50 lakhs per buyer per year
            </p>
          </div>

          {tcsCollections.map(tcs => (
            <div key={tcs.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-white font-bold">{tcs.customer}</p>
                  <p className="text-gray-400 text-sm">PAN: {tcs.pan}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(tcs.status)}`}>
                  {tcs.status}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-3 text-sm">
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-gray-400 text-xs">Section</p>
                  <p className="text-blue-400 font-medium text-xs">{tcs.section}</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-gray-400 text-xs">Amount</p>
                  <p className="text-white font-medium">{formatCurrency(tcs.amount)}</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-gray-400 text-xs">Rate</p>
                  <p className="text-white font-medium">{tcs.tcsRate}%</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-gray-400 text-xs">TCS</p>
                  <p className="text-green-400 font-medium">₹{tcs.tcsAmount}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{tcs.date}</span>
                {tcs.challanNo ? (
                  <span className="text-green-400 text-xs">Challan: {tcs.challanNo}</span>
                ) : (
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs">
                    Deposit TCS
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Sections Reference */}
      {activeTab === 'sections' && (
        <div className="px-4 space-y-3">
          <h3 className="text-white font-bold mb-3">Common TDS Sections</h3>
          {tdsSections.map((section, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
              <div>
                <code className="text-violet-400 font-bold font-mono">{section.code}</code>
                <p className="text-gray-300 text-sm">{section.description}</p>
              </div>
              <span className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-sm">
                {section.rate}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Export Options */}
      <div className="p-4">
        <h3 className="text-white font-bold mb-3">Export Reports</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-gray-800 p-4 rounded-xl text-center">
            <FileText size={24} className="mx-auto mb-2 text-violet-400" />
            <p className="text-white text-sm font-medium">Form 26Q</p>
            <p className="text-gray-400 text-xs">TDS Return</p>
          </button>
          <button className="bg-gray-800 p-4 rounded-xl text-center">
            <FileText size={24} className="mx-auto mb-2 text-blue-400" />
            <p className="text-white text-sm font-medium">Form 27EQ</p>
            <p className="text-gray-400 text-xs">TCS Return</p>
          </button>
          <button className="bg-gray-800 p-4 rounded-xl text-center">
            <Download size={24} className="mx-auto mb-2 text-green-400" />
            <p className="text-white text-sm font-medium">Challan Summary</p>
            <p className="text-gray-400 text-xs">Excel Export</p>
          </button>
          <button className="bg-gray-800 p-4 rounded-xl text-center">
            <Building2 size={24} className="mx-auto mb-2 text-orange-400" />
            <p className="text-white text-sm font-medium">Vendor Ledger</p>
            <p className="text-gray-400 text-xs">PAN-wise report</p>
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default MerchantTDSTCSReports;
