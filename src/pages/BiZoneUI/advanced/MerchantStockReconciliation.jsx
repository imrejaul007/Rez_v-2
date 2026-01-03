import React, { useState } from 'react';
import {
  ArrowLeft, Package, Search, BarChart3, AlertTriangle, CheckCircle,
  XCircle, RefreshCw, Download, Upload, Camera, Barcode, Filter,
  Calendar, Clock, Users, FileText, TrendingDown, TrendingUp,
  ChevronRight, Edit2, Save, History, Eye, AlertCircle, Boxes
} from 'lucide-react';

const MerchantStockReconciliation = () => {
  const [activeTab, setActiveTab] = useState('reconcile');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showReconcileModal, setShowReconcileModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // ==========================================
  // STOCK MISMATCH RECONCILIATION
  // Physical vs System Stock - Critical for Grocery/Retail
  // ==========================================

  // Stock Discrepancy Summary
  const [discrepancySummary, setDiscrepancySummary] = useState({
    totalItems: 456,
    matchedItems: 412,
    discrepancyItems: 44,
    overStock: 12,
    underStock: 32,
    totalVarianceValue: 15680,
    lastReconciliation: '2024-01-14 18:30',
    nextScheduled: '2024-01-15 18:00'
  });

  // Stock Items with Discrepancies
  const [stockItems, setStockItems] = useState([
    {
      id: 1,
      sku: 'SKU001',
      name: 'Tata Salt 1kg',
      category: 'Grocery',
      systemQty: 150,
      physicalQty: 145,
      variance: -5,
      varianceValue: -125,
      unit: 'pcs',
      lastReconciled: '2024-01-10',
      status: 'mismatch',
      reason: null
    },
    {
      id: 2,
      sku: 'SKU002',
      name: 'Fortune Oil 1L',
      category: 'Grocery',
      systemQty: 45,
      physicalQty: 48,
      variance: 3,
      varianceValue: 555,
      unit: 'pcs',
      lastReconciled: '2024-01-10',
      status: 'mismatch',
      reason: null
    },
    {
      id: 3,
      sku: 'SKU003',
      name: 'Amul Butter 500g',
      category: 'Dairy',
      systemQty: 25,
      physicalQty: 20,
      variance: -5,
      varianceValue: -1250,
      unit: 'pcs',
      lastReconciled: '2024-01-12',
      status: 'mismatch',
      reason: null
    },
    {
      id: 4,
      sku: 'SKU004',
      name: 'Britannia Bread',
      category: 'Bakery',
      systemQty: 30,
      physicalQty: 22,
      variance: -8,
      varianceValue: -320,
      unit: 'pcs',
      lastReconciled: '2024-01-14',
      status: 'mismatch',
      reason: 'expired'
    },
    {
      id: 5,
      sku: 'SKU005',
      name: 'Maggi Noodles',
      category: 'Grocery',
      systemQty: 100,
      physicalQty: 100,
      variance: 0,
      varianceValue: 0,
      unit: 'pcs',
      lastReconciled: '2024-01-14',
      status: 'matched',
      reason: null
    }
  ]);

  // Variance Reasons
  const varianceReasons = [
    { id: 'theft', label: 'Suspected Theft', icon: '🔒', severity: 'high' },
    { id: 'expired', label: 'Expired/Damaged', icon: '⚠️', severity: 'medium' },
    { id: 'count_error', label: 'Counting Error', icon: '🔢', severity: 'low' },
    { id: 'billing_miss', label: 'Missed in Billing', icon: '📝', severity: 'medium' },
    { id: 'return_not_updated', label: 'Return Not Updated', icon: '↩️', severity: 'low' },
    { id: 'supplier_short', label: 'Supplier Shortage', icon: '📦', severity: 'medium' },
    { id: 'internal_use', label: 'Internal Use', icon: '🏠', severity: 'low' },
    { id: 'other', label: 'Other', icon: '📋', severity: 'low' }
  ];

  // Reconciliation History
  const [reconciliationHistory, setReconciliationHistory] = useState([
    {
      id: 1,
      date: '2024-01-14',
      time: '18:30',
      staff: 'Rajesh Kumar',
      itemsChecked: 456,
      discrepancies: 44,
      varianceValue: 15680,
      status: 'completed'
    },
    {
      id: 2,
      date: '2024-01-07',
      time: '18:45',
      staff: 'Priya Singh',
      itemsChecked: 452,
      discrepancies: 38,
      varianceValue: 12450,
      status: 'completed'
    },
    {
      id: 3,
      date: '2023-12-31',
      time: '19:00',
      staff: 'Amit Patel',
      itemsChecked: 448,
      discrepancies: 52,
      varianceValue: 18920,
      status: 'completed'
    }
  ]);

  // Categories
  const categories = [
    { id: 'all', label: 'All Items', count: 456 },
    { id: 'mismatch', label: 'Mismatched', count: 44 },
    { id: 'grocery', label: 'Grocery', count: 180 },
    { id: 'dairy', label: 'Dairy', count: 45 },
    { id: 'bakery', label: 'Bakery', count: 30 },
    { id: 'beverages', label: 'Beverages', count: 65 }
  ];

  const handleReconcileItem = (item, physicalQty, reason) => {
    setStockItems(stockItems.map(i => {
      if (i.id === item.id) {
        return {
          ...i,
          physicalQty: physicalQty,
          variance: physicalQty - i.systemQty,
          varianceValue: (physicalQty - i.systemQty) * (i.varianceValue / Math.abs(i.variance || 1)),
          reason: reason,
          status: physicalQty === i.systemQty ? 'matched' : 'reconciled',
          lastReconciled: new Date().toISOString().split('T')[0]
        };
      }
      return i;
    }));
    setShowReconcileModal(false);
    setSelectedItem(null);
  };

  const filteredItems = stockItems.filter(item => {
    if (selectedCategory === 'mismatch' && item.status === 'matched') return false;
    if (selectedCategory !== 'all' && selectedCategory !== 'mismatch' && item.category.toLowerCase() !== selectedCategory) return false;
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase()) && !item.sku.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const renderReconcileTab = () => (
    <div className="space-y-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="text-green-600" size={20} />
            <span className="text-sm text-green-700">Matched</span>
          </div>
          <p className="text-2xl font-bold text-green-800">{discrepancySummary.matchedItems}</p>
          <p className="text-xs text-green-600">{((discrepancySummary.matchedItems / discrepancySummary.totalItems) * 100).toFixed(1)}% items</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="text-red-600" size={20} />
            <span className="text-sm text-red-700">Discrepancy</span>
          </div>
          <p className="text-2xl font-bold text-red-800">{discrepancySummary.discrepancyItems}</p>
          <p className="text-xs text-red-600">₹{discrepancySummary.totalVarianceValue.toLocaleString()} variance</p>
        </div>
      </div>

      {/* Variance Breakdown */}
      <div className="bg-white rounded-xl border p-4">
        <h3 className="font-bold mb-3">Variance Breakdown</h3>
        <div className="flex gap-4">
          <div className="flex-1 bg-orange-50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <TrendingDown className="text-orange-600" size={18} />
              <span className="text-sm text-orange-700">Under Stock</span>
            </div>
            <p className="text-xl font-bold text-orange-800 mt-1">{discrepancySummary.underStock} items</p>
          </div>
          <div className="flex-1 bg-blue-50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-blue-600" size={18} />
              <span className="text-sm text-blue-700">Over Stock</span>
            </div>
            <p className="text-xl font-bold text-blue-800 mt-1">{discrepancySummary.overStock} items</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="bg-blue-600 text-white rounded-xl p-4 flex items-center justify-center gap-2">
          <Camera size={20} />
          <span className="font-medium">Scan Count</span>
        </button>
        <button className="bg-purple-600 text-white rounded-xl p-4 flex items-center justify-center gap-2">
          <Upload size={20} />
          <span className="font-medium">Import Count</span>
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search by name or SKU..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border rounded-xl"
        />
      </div>

      {/* Stock Items List */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="divide-y">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className={`p-4 ${item.status === 'mismatch' ? 'bg-red-50/50' : ''}`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.sku} • {item.category}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.status === 'matched' ? 'bg-green-100 text-green-700' :
                  item.status === 'reconciled' ? 'bg-blue-100 text-blue-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {item.status}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-xs text-gray-500">System</p>
                  <p className="font-bold">{item.systemQty}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-xs text-gray-500">Physical</p>
                  <p className="font-bold">{item.physicalQty}</p>
                </div>
                <div className={`rounded-lg p-2 text-center ${
                  item.variance === 0 ? 'bg-green-50' :
                  item.variance < 0 ? 'bg-red-50' : 'bg-blue-50'
                }`}>
                  <p className="text-xs text-gray-500">Variance</p>
                  <p className={`font-bold ${
                    item.variance === 0 ? 'text-green-600' :
                    item.variance < 0 ? 'text-red-600' : 'text-blue-600'
                  }`}>
                    {item.variance > 0 ? '+' : ''}{item.variance}
                  </p>
                </div>
              </div>

              {item.reason && (
                <div className="mb-3 px-2 py-1 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-700">
                  Reason: {varianceReasons.find(r => r.id === item.reason)?.label || item.reason}
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Last: {item.lastReconciled}</span>
                {item.status !== 'matched' && (
                  <button
                    onClick={() => { setSelectedItem(item); setShowReconcileModal(true); }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-1"
                  >
                    <Edit2 size={14} />
                    Reconcile
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderHistoryTab = () => (
    <div className="space-y-4">
      {/* Schedule Next */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-bold">Next Reconciliation</h3>
            <p className="text-sm text-white/80">{discrepancySummary.nextScheduled}</p>
          </div>
          <button className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium">
            Reschedule
          </button>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 py-2 bg-white text-blue-600 rounded-lg font-medium">
            Start Now
          </button>
          <button className="flex-1 py-2 bg-white/20 rounded-lg font-medium">
            Set Reminder
          </button>
        </div>
      </div>

      {/* History List */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-bold">Reconciliation History</h3>
        </div>
        <div className="divide-y">
          {reconciliationHistory.map(record => (
            <div key={record.id} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-400" />
                  <span className="font-bold">{record.date}</span>
                  <span className="text-sm text-gray-500">{record.time}</span>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                  {record.status}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <Users size={14} />
                <span>{record.staff}</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-xs text-gray-500">Items</p>
                  <p className="font-bold">{record.itemsChecked}</p>
                </div>
                <div className="bg-red-50 rounded-lg p-2 text-center">
                  <p className="text-xs text-gray-500">Issues</p>
                  <p className="font-bold text-red-600">{record.discrepancies}</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-2 text-center">
                  <p className="text-xs text-gray-500">Variance</p>
                  <p className="font-bold text-orange-600">₹{record.varianceValue.toLocaleString()}</p>
                </div>
              </div>
              <button className="w-full mt-3 py-2 bg-gray-100 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                <Eye size={14} />
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-white rounded-xl border p-4">
        <h3 className="font-bold mb-3">Export Reports</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="p-3 bg-gray-50 rounded-lg flex items-center gap-2">
            <Download size={18} className="text-gray-600" />
            <span className="text-sm">Download PDF</span>
          </button>
          <button className="p-3 bg-gray-50 rounded-lg flex items-center gap-2">
            <Download size={18} className="text-gray-600" />
            <span className="text-sm">Export CSV</span>
          </button>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'reconcile', label: 'Reconcile', icon: <Boxes size={16} /> },
    { id: 'history', label: 'History', icon: <History size={16} /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center gap-3">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="font-bold text-lg">Stock Reconciliation</h1>
          <p className="text-xs text-gray-500">Physical vs System count</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="flex">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-600 border-blue-600 bg-blue-50/50'
                  : 'text-gray-600 border-transparent'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'reconcile' && renderReconcileTab()}
        {activeTab === 'history' && renderHistoryTab()}
      </div>

      {/* Reconcile Modal */}
      {showReconcileModal && selectedItem && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="font-bold">Reconcile: {selectedItem.name}</h3>
              <button
                onClick={() => { setShowReconcileModal(false); setSelectedItem(null); }}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <XCircle size={20} />
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Current Values */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-500">System Qty</p>
                  <p className="text-2xl font-bold">{selectedItem.systemQty}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-500">Physical Qty</p>
                  <input
                    type="number"
                    defaultValue={selectedItem.physicalQty}
                    className="text-2xl font-bold w-full text-center bg-transparent border-none focus:outline-none"
                    id="physicalQtyInput"
                  />
                </div>
              </div>

              {/* Reason Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">Variance Reason</label>
                <div className="grid grid-cols-2 gap-2">
                  {varianceReasons.map(reason => (
                    <button
                      key={reason.id}
                      className="p-3 border rounded-lg text-left hover:border-blue-500 hover:bg-blue-50"
                      onClick={() => {
                        const physicalQty = parseInt(document.getElementById('physicalQtyInput').value);
                        handleReconcileItem(selectedItem, physicalQty, reason.id);
                      }}
                    >
                      <span className="text-lg mr-2">{reason.icon}</span>
                      <span className="text-sm">{reason.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleReconcileItem(selectedItem, selectedItem.systemQty, 'count_error')}
                  className="flex-1 py-3 bg-green-600 text-white rounded-xl font-medium"
                >
                  Match System Qty
                </button>
                <button
                  onClick={() => {
                    const physicalQty = parseInt(document.getElementById('physicalQtyInput').value);
                    handleReconcileItem(selectedItem, physicalQty, null);
                  }}
                  className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-medium"
                >
                  Update Physical
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchantStockReconciliation;
