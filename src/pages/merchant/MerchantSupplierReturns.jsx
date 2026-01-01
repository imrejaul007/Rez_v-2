import React, { useState } from 'react';
import {
  ArrowLeft, Package, RotateCcw, Truck, CheckCircle, XCircle,
  AlertTriangle, Clock, Search, Filter, Download, Camera, Barcode,
  Calendar, ChevronRight, Edit2, Plus, FileText, Users, Building2,
  Phone, Mail, Eye, History, BarChart3, TrendingDown, IndianRupee,
  Box, ClipboardList, Send, Printer
} from 'lucide-react';

const MerchantSupplierReturns = () => {
  const [activeTab, setActiveTab] = useState('returns');
  const [searchQuery, setSearchQuery] = useState('');
  const [showReturnModal, setShowReturnModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // ==========================================
  // SUPPLIER RETURNS (PURCHASE RETURNS)
  // Return goods to supplier - Critical for Grocery/Retail
  // ==========================================

  // Returns Summary
  const [returnsSummary, setReturnsSummary] = useState({
    pendingReturns: 8,
    inTransit: 3,
    completed: 45,
    creditNotesPending: 12500,
    creditNotesReceived: 85000,
    thisMonthReturns: 15,
    thisMonthValue: 28500
  });

  // Suppliers
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: 'Hindustan Unilever', code: 'HUL001', contact: 'Rajesh', phone: '9876543210', pendingReturns: 3 },
    { id: 2, name: 'ITC Ltd', code: 'ITC001', contact: 'Priya', phone: '9876543211', pendingReturns: 2 },
    { id: 3, name: 'Nestle India', code: 'NES001', contact: 'Amit', phone: '9876543212', pendingReturns: 1 },
    { id: 4, name: 'P&G India', code: 'PG001', contact: 'Sunita', phone: '9876543213', pendingReturns: 2 }
  ]);

  // Return Items
  const [returnItems, setReturnItems] = useState([
    {
      id: 1,
      returnId: 'RET001',
      supplier: 'Hindustan Unilever',
      items: [
        { name: 'Surf Excel 1kg', qty: 10, reason: 'damaged', value: 1850 },
        { name: 'Lux Soap 100g', qty: 24, reason: 'expired', value: 720 }
      ],
      totalValue: 2570,
      status: 'pending',
      createdDate: '2024-01-12',
      pickupDate: null,
      creditNoteStatus: 'pending'
    },
    {
      id: 2,
      returnId: 'RET002',
      supplier: 'ITC Ltd',
      items: [
        { name: 'Aashirvaad Atta 5kg', qty: 5, reason: 'short_expiry', value: 1400 },
        { name: 'Sunfeast Biscuits', qty: 36, reason: 'damaged', value: 540 }
      ],
      totalValue: 1940,
      status: 'pickup_scheduled',
      createdDate: '2024-01-10',
      pickupDate: '2024-01-16',
      creditNoteStatus: 'pending'
    },
    {
      id: 3,
      returnId: 'RET003',
      supplier: 'Nestle India',
      items: [
        { name: 'Maggi Noodles', qty: 48, reason: 'expired', value: 672 }
      ],
      totalValue: 672,
      status: 'in_transit',
      createdDate: '2024-01-08',
      pickupDate: '2024-01-12',
      creditNoteStatus: 'pending'
    },
    {
      id: 4,
      returnId: 'RET004',
      supplier: 'P&G India',
      items: [
        { name: 'Tide Detergent 2kg', qty: 8, reason: 'wrong_product', value: 1520 }
      ],
      totalValue: 1520,
      status: 'completed',
      createdDate: '2024-01-05',
      pickupDate: '2024-01-08',
      creditNoteStatus: 'received',
      creditNoteAmount: 1520,
      creditNoteDate: '2024-01-12'
    }
  ]);

  // Return Reasons
  const returnReasons = [
    { id: 'expired', label: 'Expired Product', icon: '⏰', severity: 'high' },
    { id: 'short_expiry', label: 'Short Expiry', icon: '📅', severity: 'medium' },
    { id: 'damaged', label: 'Damaged/Broken', icon: '💔', severity: 'high' },
    { id: 'wrong_product', label: 'Wrong Product Delivered', icon: '❌', severity: 'medium' },
    { id: 'quality', label: 'Quality Issue', icon: '👎', severity: 'high' },
    { id: 'excess', label: 'Excess Supply', icon: '📦', severity: 'low' },
    { id: 'defective', label: 'Manufacturing Defect', icon: '🔧', severity: 'high' },
    { id: 'other', label: 'Other', icon: '📋', severity: 'low' }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'yellow';
      case 'pickup_scheduled': return 'blue';
      case 'in_transit': return 'purple';
      case 'completed': return 'green';
      case 'rejected': return 'red';
      default: return 'gray';
    }
  };

  const getStatusLabel = (status) => {
    switch(status) {
      case 'pending': return 'Pending Pickup';
      case 'pickup_scheduled': return 'Pickup Scheduled';
      case 'in_transit': return 'In Transit';
      case 'completed': return 'Completed';
      case 'rejected': return 'Rejected';
      default: return status;
    }
  };

  const renderReturnsTab = () => (
    <div className="space-y-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 text-white">
          <p className="text-sm text-white/80">Pending Returns</p>
          <p className="text-2xl font-bold">{returnsSummary.pendingReturns}</p>
          <p className="text-xs text-white/70">₹{returnsSummary.creditNotesPending.toLocaleString()} credit pending</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-4 text-white">
          <p className="text-sm text-white/80">This Month</p>
          <p className="text-2xl font-bold">{returnsSummary.thisMonthReturns}</p>
          <p className="text-xs text-white/70">₹{returnsSummary.thisMonthValue.toLocaleString()} value</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
          <Truck className="mx-auto text-blue-600 mb-1" size={20} />
          <p className="text-lg font-bold text-blue-700">{returnsSummary.inTransit}</p>
          <p className="text-xs text-blue-600">In Transit</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
          <CheckCircle className="mx-auto text-green-600 mb-1" size={20} />
          <p className="text-lg font-bold text-green-700">{returnsSummary.completed}</p>
          <p className="text-xs text-green-600">Completed</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
          <FileText className="mx-auto text-purple-600 mb-1" size={20} />
          <p className="text-lg font-bold text-purple-700">₹{(returnsSummary.creditNotesReceived/1000).toFixed(0)}K</p>
          <p className="text-xs text-purple-600">Credits Received</p>
        </div>
      </div>

      {/* New Return Button */}
      <button
        onClick={() => setShowReturnModal(true)}
        className="w-full p-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl text-white flex items-center justify-center gap-2"
      >
        <RotateCcw size={20} />
        <span className="font-bold">Create New Return</span>
      </button>

      {/* Return List */}
      <div className="space-y-3">
        {returnItems.map(item => (
          <div key={item.id} className="bg-white rounded-xl border overflow-hidden">
            <div className={`p-4 ${
              item.status === 'pending' ? 'bg-yellow-50' :
              item.status === 'in_transit' ? 'bg-purple-50' :
              item.status === 'completed' ? 'bg-green-50' : ''
            }`}>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-bold">{item.returnId}</p>
                  <p className="text-sm text-gray-500">{item.supplier}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                  item.status === 'pickup_scheduled' ? 'bg-blue-100 text-blue-700' :
                  item.status === 'in_transit' ? 'bg-purple-100 text-purple-700' :
                  item.status === 'completed' ? 'bg-green-100 text-green-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {getStatusLabel(item.status)}
                </span>
              </div>

              {/* Items */}
              <div className="space-y-2 mb-3">
                {item.items.map((product, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm bg-white/50 rounded p-2">
                    <div>
                      <span>{product.name}</span>
                      <span className="text-gray-500 ml-2">x{product.qty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 bg-gray-100 rounded">
                        {returnReasons.find(r => r.id === product.reason)?.label || product.reason}
                      </span>
                      <span className="font-medium">₹{product.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  Created: {item.createdDate}
                  {item.pickupDate && <span className="ml-2">• Pickup: {item.pickupDate}</span>}
                </div>
                <span className="font-bold text-lg">₹{item.totalValue.toLocaleString()}</span>
              </div>

              {/* Credit Note Status */}
              {item.creditNoteStatus && (
                <div className={`mt-3 p-2 rounded-lg text-sm ${
                  item.creditNoteStatus === 'received' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {item.creditNoteStatus === 'received' ? (
                    <span>✅ Credit Note Received: ₹{item.creditNoteAmount} on {item.creditNoteDate}</span>
                  ) : (
                    <span>⏳ Credit Note Pending</span>
                  )}
                </div>
              )}
            </div>

            {/* Actions */}
            {item.status !== 'completed' && (
              <div className="p-3 border-t flex gap-2">
                <button className="flex-1 py-2 bg-gray-100 rounded-lg text-sm font-medium flex items-center justify-center gap-1">
                  <Eye size={14} />
                  View Details
                </button>
                {item.status === 'pending' && (
                  <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-1">
                    <Truck size={14} />
                    Schedule Pickup
                  </button>
                )}
                <button className="px-3 py-2 bg-gray-100 rounded-lg">
                  <Printer size={14} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderSuppliersTab = () => (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search suppliers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border rounded-xl"
        />
      </div>

      {/* Supplier List */}
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="divide-y">
          {suppliers.map(supplier => (
            <div key={supplier.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Building2 className="text-gray-600" size={20} />
                </div>
                <div>
                  <p className="font-bold">{supplier.name}</p>
                  <p className="text-xs text-gray-500">{supplier.code} • {supplier.contact}</p>
                </div>
              </div>
              <div className="text-right">
                {supplier.pendingReturns > 0 && (
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                    {supplier.pendingReturns} pending
                  </span>
                )}
                <button className="ml-2 p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronRight size={16} className="text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderHistoryTab = () => (
    <div className="space-y-4">
      {/* Stats */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 text-white">
        <h3 className="font-bold mb-3">Return Analytics</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">156</p>
            <p className="text-xs text-white/70">Total Returns</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">₹2.4L</p>
            <p className="text-xs text-white/70">Total Value</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">92%</p>
            <p className="text-xs text-white/70">Credit Rate</p>
          </div>
        </div>
      </div>

      {/* Top Return Reasons */}
      <div className="bg-white rounded-xl border p-4">
        <h3 className="font-bold mb-3">Top Return Reasons</h3>
        <div className="space-y-3">
          {[
            { reason: 'Expired', count: 45, value: 68000, percent: 35 },
            { reason: 'Damaged', count: 32, value: 48000, percent: 25 },
            { reason: 'Short Expiry', count: 28, value: 35000, percent: 18 },
            { reason: 'Wrong Product', count: 18, value: 22000, percent: 12 }
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{item.reason}</span>
                <span className="text-sm text-gray-500">{item.count} items • ₹{(item.value/1000).toFixed(0)}K</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Export */}
      <div className="grid grid-cols-2 gap-3">
        <button className="p-4 bg-gray-100 rounded-xl flex items-center justify-center gap-2">
          <Download size={18} />
          <span className="font-medium">Export PDF</span>
        </button>
        <button className="p-4 bg-gray-100 rounded-xl flex items-center justify-center gap-2">
          <Download size={18} />
          <span className="font-medium">Export CSV</span>
        </button>
      </div>
    </div>
  );

  const tabs = [
    { id: 'returns', label: 'Returns', icon: <RotateCcw size={16} /> },
    { id: 'suppliers', label: 'Suppliers', icon: <Building2 size={16} /> },
    { id: 'history', label: 'Analytics', icon: <BarChart3 size={16} /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-4">
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-white/20 rounded-lg">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="font-bold text-lg">Supplier Returns</h1>
            <p className="text-xs text-white/80">Return goods & track credit notes</p>
          </div>
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
                  ? 'text-orange-600 border-orange-600 bg-orange-50/50'
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
        {activeTab === 'returns' && renderReturnsTab()}
        {activeTab === 'suppliers' && renderSuppliersTab()}
        {activeTab === 'history' && renderHistoryTab()}
      </div>

      {/* New Return Modal */}
      {showReturnModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-4 border-b">
              <h3 className="font-bold">Create New Return</h3>
            </div>

            <div className="p-4 space-y-4">
              {/* Select Supplier */}
              <div>
                <label className="block text-sm font-medium mb-2">Select Supplier</label>
                <select className="w-full p-3 border rounded-xl">
                  <option>Choose supplier...</option>
                  {suppliers.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>

              {/* Scan or Add Items */}
              <div>
                <label className="block text-sm font-medium mb-2">Add Items</label>
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center gap-2">
                    <Barcode size={18} className="text-blue-600" />
                    <span className="text-sm">Scan Barcode</span>
                  </button>
                  <button className="p-3 bg-gray-50 border rounded-lg flex items-center justify-center gap-2">
                    <Search size={18} className="text-gray-600" />
                    <span className="text-sm">Search Item</span>
                  </button>
                </div>
              </div>

              {/* Return Reason */}
              <div>
                <label className="block text-sm font-medium mb-2">Return Reason</label>
                <div className="grid grid-cols-2 gap-2">
                  {returnReasons.slice(0, 6).map(reason => (
                    <button key={reason.id} className="p-3 border rounded-lg text-left hover:bg-orange-50 hover:border-orange-300">
                      <span className="text-lg mr-2">{reason.icon}</span>
                      <span className="text-sm">{reason.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">Photo Evidence (Optional)</label>
                <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 flex flex-col items-center gap-2">
                  <Camera size={24} />
                  <span>Take Photo</span>
                </button>
              </div>

              {/* Submit */}
              <button className="w-full py-3 bg-orange-600 text-white rounded-xl font-bold">
                Create Return Request
              </button>
            </div>

            <div className="p-4 border-t">
              <button
                onClick={() => setShowReturnModal(false)}
                className="w-full py-3 bg-gray-100 rounded-xl font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchantSupplierReturns;
