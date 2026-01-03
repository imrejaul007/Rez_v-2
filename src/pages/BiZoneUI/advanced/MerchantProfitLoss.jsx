import React, { useState } from 'react';
import {
  ArrowLeft, TrendingUp, TrendingDown, Calendar, Download, Filter,
  IndianRupee, ShoppingBag, Users, Building, Zap, Truck, PieChart,
  BarChart2, ArrowUpRight, ArrowDownRight, ChevronRight, Info
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantProfitLoss = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState('this_month');
  const [showDetails, setShowDetails] = useState(null);

  const periods = [
    { id: 'today', label: 'Today' },
    { id: 'this_week', label: 'This Week' },
    { id: 'this_month', label: 'This Month' },
    { id: 'last_month', label: 'Last Month' },
    { id: 'this_quarter', label: 'This Quarter' },
    { id: 'this_year', label: 'This Year' },
  ];

  const pnlData = {
    revenue: {
      total: 485000,
      breakdown: [
        { name: 'Dine-in Sales', amount: 245000, percentage: 50.5 },
        { name: 'Takeaway', amount: 120000, percentage: 24.7 },
        { name: 'Delivery (Zomato/Swiggy)', amount: 85000, percentage: 17.5 },
        { name: 'Catering', amount: 25000, percentage: 5.2 },
        { name: 'Other Income', amount: 10000, percentage: 2.1 },
      ]
    },
    costOfGoodsSold: {
      total: 165000,
      breakdown: [
        { name: 'Raw Materials', amount: 120000, percentage: 72.7 },
        { name: 'Packaging', amount: 25000, percentage: 15.2 },
        { name: 'Wastage', amount: 20000, percentage: 12.1 },
      ]
    },
    operatingExpenses: {
      total: 198000,
      breakdown: [
        { name: 'Staff Salary', amount: 85000, percentage: 42.9 },
        { name: 'Rent', amount: 45000, percentage: 22.7 },
        { name: 'Utilities', amount: 15000, percentage: 7.6 },
        { name: 'Marketing', amount: 18000, percentage: 9.1 },
        { name: 'Aggregator Commission', amount: 17000, percentage: 8.6 },
        { name: 'Maintenance', amount: 8000, percentage: 4.0 },
        { name: 'Miscellaneous', amount: 10000, percentage: 5.1 },
      ]
    },
    taxes: {
      total: 29100,
      breakdown: [
        { name: 'GST Payable', amount: 24300, percentage: 83.5 },
        { name: 'TDS', amount: 4800, percentage: 16.5 },
      ]
    }
  };

  const grossProfit = pnlData.revenue.total - pnlData.costOfGoodsSold.total;
  const operatingProfit = grossProfit - pnlData.operatingExpenses.total;
  const netProfit = operatingProfit - pnlData.taxes.total;

  const grossMargin = ((grossProfit / pnlData.revenue.total) * 100).toFixed(1);
  const operatingMargin = ((operatingProfit / pnlData.revenue.total) * 100).toFixed(1);
  const netMargin = ((netProfit / pnlData.revenue.total) * 100).toFixed(1);

  const comparison = {
    revenueChange: 12.5,
    profitChange: 18.2,
    expenseChange: 8.3
  };

  const renderSection = (title, data, type = 'income') => {
    const isExpanded = showDetails === title;
    const color = type === 'income' ? 'text-green-400' : 'text-red-400';
    const bgColor = type === 'income' ? 'bg-green-900/20' : 'bg-red-900/20';

    return (
      <div className="bg-gray-800 rounded-xl mb-3 overflow-hidden">
        <button
          onClick={() => setShowDetails(isExpanded ? null : title)}
          className="w-full p-4 flex items-center justify-between"
        >
          <div>
            <p className="text-gray-400 text-sm">{title}</p>
            <p className={`text-xl font-bold ${color}`}>
              {type === 'income' ? '+' : '-'}₹{(data.total / 1000).toFixed(1)}K
            </p>
          </div>
          <ChevronRight
            size={20}
            className={`text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
          />
        </button>

        {isExpanded && (
          <div className={`px-4 pb-4 ${bgColor}`}>
            {data.breakdown.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-700/50 last:border-0">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                  <span className="text-gray-300 text-sm">{item.name}</span>
                </div>
                <div className="text-right">
                  <p className="text-white text-sm">₹{item.amount.toLocaleString()}</p>
                  <p className="text-gray-500 text-xs">{item.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Profit & Loss</h1>
              <p className="text-indigo-200 text-sm">Financial Statement</p>
            </div>
          </div>
          <button className="bg-white/20 p-2 rounded-lg">
            <Download size={20} />
          </button>
        </div>

        {/* Period Selector */}
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {periods.map(period => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm ${
                selectedPeriod === period.id ? 'bg-white text-indigo-600' : 'bg-white/20'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>

      {/* Net Profit Card */}
      <div className="p-4">
        <div className={`rounded-2xl p-6 ${netProfit >= 0 ? 'bg-gradient-to-r from-green-900/50 to-emerald-900/50 border border-green-500/30' : 'bg-gradient-to-r from-red-900/50 to-rose-900/50 border border-red-500/30'}`}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-300">Net Profit</p>
            <div className={`flex items-center text-sm ${comparison.profitChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {comparison.profitChange >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              {Math.abs(comparison.profitChange)}% vs last period
            </div>
          </div>
          <p className={`text-4xl font-bold ${netProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {netProfit >= 0 ? '+' : '-'}₹{Math.abs(netProfit).toLocaleString()}
          </p>
          <p className="text-gray-400 mt-1">Net Margin: {netMargin}%</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="px-4 grid grid-cols-3 gap-3 mb-4">
        <div className="bg-gray-800 rounded-xl p-3 text-center">
          <p className="text-gray-400 text-xs mb-1">Revenue</p>
          <p className="text-white font-bold">₹{(pnlData.revenue.total/1000).toFixed(0)}K</p>
          <p className="text-green-400 text-xs flex items-center justify-center">
            <ArrowUpRight size={12} /> {comparison.revenueChange}%
          </p>
        </div>
        <div className="bg-gray-800 rounded-xl p-3 text-center">
          <p className="text-gray-400 text-xs mb-1">Gross Margin</p>
          <p className="text-white font-bold">{grossMargin}%</p>
          <p className="text-gray-500 text-xs">₹{(grossProfit/1000).toFixed(0)}K</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-3 text-center">
          <p className="text-gray-400 text-xs mb-1">Expenses</p>
          <p className="text-white font-bold">₹{((pnlData.costOfGoodsSold.total + pnlData.operatingExpenses.total)/1000).toFixed(0)}K</p>
          <p className="text-red-400 text-xs flex items-center justify-center">
            <ArrowUpRight size={12} /> {comparison.expenseChange}%
          </p>
        </div>
      </div>

      {/* P&L Statement */}
      <div className="px-4">
        <h3 className="text-white font-semibold mb-3 flex items-center">
          <BarChart2 size={18} className="mr-2 text-indigo-400" />
          P&L Statement
        </h3>

        {/* Revenue */}
        {renderSection('Revenue', pnlData.revenue, 'income')}

        {/* Less: COGS */}
        {renderSection('Cost of Goods Sold', pnlData.costOfGoodsSold, 'expense')}

        {/* Gross Profit */}
        <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4 mb-3">
          <div className="flex items-center justify-between">
            <p className="text-blue-300">Gross Profit</p>
            <p className="text-blue-400 font-bold text-lg">₹{grossProfit.toLocaleString()}</p>
          </div>
          <div className="mt-2 bg-gray-700/50 rounded-full h-2 overflow-hidden">
            <div
              className="bg-blue-400 h-full"
              style={{ width: `${grossMargin}%` }}
            ></div>
          </div>
          <p className="text-gray-400 text-xs mt-1">Gross Margin: {grossMargin}%</p>
        </div>

        {/* Operating Expenses */}
        {renderSection('Operating Expenses', pnlData.operatingExpenses, 'expense')}

        {/* Operating Profit */}
        <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4 mb-3">
          <div className="flex items-center justify-between">
            <p className="text-purple-300">Operating Profit (EBITDA)</p>
            <p className="text-purple-400 font-bold text-lg">₹{operatingProfit.toLocaleString()}</p>
          </div>
          <p className="text-gray-400 text-xs mt-1">Operating Margin: {operatingMargin}%</p>
        </div>

        {/* Taxes */}
        {renderSection('Taxes', pnlData.taxes, 'expense')}

        {/* Net Profit */}
        <div className={`rounded-xl p-4 mb-3 ${netProfit >= 0 ? 'bg-green-900/30 border border-green-500/30' : 'bg-red-900/30 border border-red-500/30'}`}>
          <div className="flex items-center justify-between">
            <p className={netProfit >= 0 ? 'text-green-300' : 'text-red-300'}>Net Profit</p>
            <p className={`font-bold text-xl ${netProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              ₹{netProfit.toLocaleString()}
            </p>
          </div>
          <p className="text-gray-400 text-xs mt-1">Net Margin: {netMargin}%</p>
        </div>

        {/* Download Options */}
        <div className="flex space-x-3 mt-6">
          <button className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-medium flex items-center justify-center">
            <Download size={18} className="mr-2" /> PDF Report
          </button>
          <button className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-medium flex items-center justify-center">
            <Download size={18} className="mr-2" /> Excel
          </button>
        </div>
      </div>

      <BottomNav userType="merchant" />
    </div>
  );
};

export default MerchantProfitLoss;
