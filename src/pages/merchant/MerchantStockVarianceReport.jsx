import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Package, AlertTriangle, CheckCircle, TrendingDown,
  TrendingUp, RefreshCw, Download, Filter, Search, Calendar,
  BarChart3, Box, Minus, Plus, Edit3, Save, X, Clock,
  AlertCircle, FileText, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantStockVarianceReport = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('today');
  const [showReconcileModal, setShowReconcileModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const summaryStats = {
    totalItems: 245,
    matchedItems: 232,
    varianceItems: 13,
    totalVarianceValue: 4520,
    surplusValue: 1200,
    shortageValue: 3320
  };

  const varianceItems = [
    {
      id: 1,
      name: 'Maggi 2-Minute Noodles',
      sku: 'MGGI-001',
      systemStock: 45,
      actualStock: 42,
      variance: -3,
      varianceValue: -180,
      reason: 'Possible theft/damage',
      lastReconciled: '3 days ago',
      category: 'Grocery'
    },
    {
      id: 2,
      name: 'Coca-Cola 500ml',
      sku: 'COKE-500',
      systemStock: 120,
      actualStock: 125,
      variance: 5,
      varianceValue: 200,
      reason: 'Uncounted stock received',
      lastReconciled: '1 week ago',
      category: 'Beverages'
    },
    {
      id: 3,
      name: 'Parle-G Biscuits',
      sku: 'PG-100',
      systemStock: 80,
      actualStock: 75,
      variance: -5,
      varianceValue: -100,
      reason: 'Expired items removed',
      lastReconciled: '2 days ago',
      category: 'Snacks'
    },
    {
      id: 4,
      name: 'Amul Butter 500g',
      sku: 'AMB-500',
      systemStock: 15,
      actualStock: 12,
      variance: -3,
      varianceValue: -750,
      reason: 'Offline sale not synced',
      lastReconciled: 'Yesterday',
      category: 'Dairy'
    },
    {
      id: 5,
      name: 'Lays Classic 50g',
      sku: 'LAYS-50',
      systemStock: 60,
      actualStock: 64,
      variance: 4,
      varianceValue: 80,
      reason: 'Return not processed',
      lastReconciled: '5 days ago',
      category: 'Snacks'
    }
  ];

  const varianceReasons = [
    'Damaged/Expired Items',
    'Offline Sale Not Synced',
    'Return Not Processed',
    'Theft/Pilferage',
    'Stock Received Not Entered',
    'Counting Error',
    'Other'
  ];

  const handleReconcile = (item) => {
    setSelectedItem(item);
    setShowReconcileModal(true);
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
              <h1 className="text-lg font-bold text-white">Stock Variance</h1>
              <p className="text-xs text-gray-400">Reconciliation & Audit</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
              <Download className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-2 bg-blue-600 rounded-lg hover:bg-blue-500">
              <RefreshCw className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Date Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['today', 'week', 'month'].map(period => (
            <button
              key={period}
              onClick={() => setSelectedDate(period)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                selectedDate === period
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400'
              }`}
            >
              {period === 'today' ? 'Today' : period === 'week' ? 'This Week' : 'This Month'}
            </button>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-400">Matched</span>
            </div>
            <p className="text-2xl font-bold text-white">{summaryStats.matchedItems}</p>
            <p className="text-xs text-gray-500">of {summaryStats.totalItems} items</p>
          </div>
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-gray-400">Variance</span>
            </div>
            <p className="text-2xl font-bold text-yellow-400">{summaryStats.varianceItems}</p>
            <p className="text-xs text-gray-500">items with mismatch</p>
          </div>
        </div>

        {/* Variance Value */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-white">Variance Value</h3>
            <span className="text-sm text-gray-400">Net Impact</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-red-400 mb-1">
                <TrendingDown className="w-4 h-4" />
                <span className="text-sm">Shortage</span>
              </div>
              <p className="text-xl font-bold text-red-400">-₹{summaryStats.shortageValue}</p>
            </div>
            <div className="text-center border-x border-gray-700">
              <div className="flex items-center justify-center gap-1 text-green-400 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">Surplus</span>
              </div>
              <p className="text-xl font-bold text-green-400">+₹{summaryStats.surplusValue}</p>
            </div>
            <div className="text-center">
              <span className="text-sm text-gray-400">Net</span>
              <p className={`text-xl font-bold ${
                summaryStats.shortageValue > summaryStats.surplusValue ? 'text-red-400' : 'text-green-400'
              }`}>
                -₹{summaryStats.shortageValue - summaryStats.surplusValue}
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search items with variance..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white"
          />
        </div>

        {/* Variance Items List */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-700 flex items-center justify-between">
            <h3 className="font-semibold text-white">Items with Variance</h3>
            <span className="text-sm text-gray-400">{varianceItems.length} items</span>
          </div>
          <div className="divide-y divide-gray-700">
            {varianceItems.map(item => (
              <div key={item.id} className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-medium text-white">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.sku} • {item.category}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-sm font-medium ${
                    item.variance < 0 ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'
                  }`}>
                    {item.variance > 0 ? '+' : ''}{item.variance}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="p-2 bg-gray-900 rounded text-center">
                    <p className="text-xs text-gray-400">System</p>
                    <p className="text-lg font-semibold text-white">{item.systemStock}</p>
                  </div>
                  <div className="p-2 bg-gray-900 rounded text-center">
                    <p className="text-xs text-gray-400">Actual</p>
                    <p className="text-lg font-semibold text-blue-400">{item.actualStock}</p>
                  </div>
                  <div className="p-2 bg-gray-900 rounded text-center">
                    <p className="text-xs text-gray-400">Value</p>
                    <p className={`text-lg font-semibold ${
                      item.varianceValue < 0 ? 'text-red-400' : 'text-green-400'
                    }`}>
                      {item.varianceValue > 0 ? '+' : ''}₹{Math.abs(item.varianceValue)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-yellow-400">{item.reason}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" />
                      Last reconciled: {item.lastReconciled}
                    </p>
                  </div>
                  <button
                    onClick={() => handleReconcile(item)}
                    className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500"
                  >
                    Reconcile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Start Stock Count */}
        <button className="w-full p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center gap-2 text-white font-medium hover:opacity-90 transition-opacity">
          <Box className="w-5 h-5" />
          Start New Stock Count
        </button>

        {/* Audit Trail */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-semibold text-white">Recent Corrections</h3>
          </div>
          <div className="divide-y divide-gray-700">
            {[
              { item: 'Surf Excel 1kg', from: 28, to: 25, by: 'Rahul', time: '1 hour ago', reason: 'Damaged items' },
              { item: 'Britannia Bread', from: 15, to: 18, by: 'System', time: '3 hours ago', reason: 'Offline sync' },
              { item: 'Tata Salt 1kg', from: 50, to: 48, by: 'Amit', time: 'Yesterday', reason: 'Expired stock' }
            ].map((log, idx) => (
              <div key={idx} className="p-3 flex items-center justify-between">
                <div>
                  <p className="text-white text-sm">{log.item}</p>
                  <p className="text-xs text-gray-400">
                    {log.from} → {log.to} • {log.reason}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">{log.by}</p>
                  <p className="text-xs text-gray-500">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reconcile Modal */}
      {showReconcileModal && selectedItem && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl w-full max-w-md overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Reconcile Stock</h2>
                <button onClick={() => setShowReconcileModal(false)} className="p-2 hover:bg-gray-700 rounded-lg">
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="p-4 bg-gray-900 rounded-lg">
                <p className="font-medium text-white">{selectedItem.name}</p>
                <p className="text-sm text-gray-400">{selectedItem.sku}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">System Stock</label>
                  <div className="p-3 bg-gray-900 rounded-lg text-center">
                    <p className="text-2xl font-bold text-white">{selectedItem.systemStock}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Actual Stock</label>
                  <input
                    type="number"
                    defaultValue={selectedItem.actualStock}
                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-center text-2xl font-bold text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Reason for Variance</label>
                <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white">
                  {varianceReasons.map((reason, idx) => (
                    <option key={idx} value={reason}>{reason}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Notes (Optional)</label>
                <textarea
                  placeholder="Add any additional notes..."
                  rows={2}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white resize-none"
                />
              </div>

              <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <div className="flex items-center gap-2 text-yellow-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>This correction will be logged in audit trail</span>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-700 flex gap-3">
              <button
                onClick={() => setShowReconcileModal(false)}
                className="flex-1 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowReconcileModal(false);
                }}
                className="flex-1 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Correction
              </button>
            </div>
          </div>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantStockVarianceReport;
