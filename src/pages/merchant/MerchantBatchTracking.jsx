import { useState } from 'react';
import { Search, Plus, AlertTriangle, Calendar, Package, CheckCircle, XCircle, Clock, Download, Filter, QrCode, FileText, TrendingUp } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantBatchTracking() {
  const [activeTab, setActiveTab] = useState('batches');
  const [searchQuery, setSearchQuery] = useState('');

  // Batch Inventory
  const batches = [
    {
      id: 'BATCH-001',
      product: 'Paracetamol 500mg Tablets',
      category: 'Pharmacy',
      batchNumber: 'PCT5-2024-11',
      manufacturer: 'Sun Pharma Ltd',
      mfgDate: '2024-11-15',
      expiryDate: '2026-11-14',
      quantity: 450,
      unit: 'strips',
      location: 'Shelf A-12',
      status: 'good',
      daysToExpiry: 686,
      mrp: 12.50,
      costPrice: 8.20,
      qualityCheck: { status: 'passed', date: '2024-12-01', inspector: 'Dr. Sharma' }
    },
    {
      id: 'BATCH-002',
      product: 'Fresh Milk (Full Cream)',
      category: 'Dairy',
      batchNumber: 'MILK-20251228',
      manufacturer: 'Amul Dairy',
      mfgDate: '2025-12-27',
      expiryDate: '2025-12-30',
      quantity: 45,
      unit: 'liters',
      location: 'Cold Storage-1',
      status: 'expiring_soon',
      daysToExpiry: 2,
      mrp: 65,
      costPrice: 52,
      qualityCheck: { status: 'passed', date: '2025-12-27', inspector: 'Quality Team' }
    },
    {
      id: 'BATCH-003',
      product: 'Organic Face Serum',
      category: 'Beauty',
      batchNumber: 'SER-2024-08-A',
      manufacturer: 'Lotus Herbals',
      mfgDate: '2024-08-10',
      expiryDate: '2026-08-09',
      quantity: 28,
      unit: 'bottles',
      location: 'Beauty Section-3',
      status: 'good',
      daysToExpiry: 589,
      mrp: 1299,
      costPrice: 899,
      qualityCheck: { status: 'passed', date: '2024-08-15', inspector: 'QC Lab' }
    },
    {
      id: 'BATCH-004',
      product: 'Cough Syrup (Benadryl)',
      category: 'Pharmacy',
      batchNumber: 'BEN-2025-01',
      manufacturer: 'Johnson & Johnson',
      mfgDate: '2025-01-05',
      expiryDate: '2026-01-04',
      quantity: 120,
      unit: 'bottles',
      location: 'Shelf B-08',
      status: 'good',
      daysToExpiry: 372,
      mrp: 145,
      costPrice: 105,
      qualityCheck: { status: 'passed', date: '2025-01-10', inspector: 'Dr. Kumar' }
    },
    {
      id: 'BATCH-005',
      product: 'Bread Slices (Whole Wheat)',
      category: 'Bakery',
      batchNumber: 'BWW-20251227',
      manufacturer: 'Britannia Industries',
      mfgDate: '2025-12-25',
      expiryDate: '2025-12-29',
      quantity: 78,
      unit: 'packets',
      location: 'Bakery Shelf-2',
      status: 'expiring_soon',
      daysToExpiry: 1,
      mrp: 42,
      costPrice: 32,
      qualityCheck: { status: 'passed', date: '2025-12-25', inspector: 'QC Team' }
    },
    {
      id: 'BATCH-006',
      product: 'Vitamin D3 Supplements',
      category: 'Pharmacy',
      batchNumber: 'VIT-D3-2024-10',
      manufacturer: 'HealthKart',
      mfgDate: '2024-10-20',
      expiryDate: '2026-10-19',
      quantity: 95,
      unit: 'bottles',
      location: 'Shelf C-15',
      status: 'good',
      daysToExpiry: 660,
      mrp: 899,
      costPrice: 650,
      qualityCheck: { status: 'passed', date: '2024-10-25', inspector: 'Dr. Patel' }
    },
    {
      id: 'BATCH-007',
      product: 'Chicken Breast (Fresh)',
      category: 'Meat',
      batchNumber: 'CHK-20251226',
      manufacturer: 'FreshMeat Co',
      mfgDate: '2025-12-26',
      expiryDate: '2025-12-28',
      quantity: 12.5,
      unit: 'kg',
      location: 'Cold Storage-2',
      status: 'expired',
      daysToExpiry: 0,
      mrp: 280,
      costPrice: 220,
      qualityCheck: { status: 'passed', date: '2025-12-26', inspector: 'Food Safety' }
    },
    {
      id: 'BATCH-008',
      product: 'Hair Care Shampoo',
      category: 'Beauty',
      batchNumber: 'SHP-2024-12-B',
      manufacturer: 'L\'Oreal',
      mfgDate: '2024-12-01',
      expiryDate: '2026-12-01',
      quantity: 156,
      unit: 'bottles',
      location: 'Beauty Section-1',
      status: 'good',
      daysToExpiry: 703,
      mrp: 425,
      costPrice: 310,
      qualityCheck: { status: 'passed', date: '2024-12-05', inspector: 'QC Lab' }
    }
  ];

  // Expiry Alerts
  const expiryAlerts = [
    { priority: 'critical', count: 3, timeframe: 'Today', value: 2890 },
    { priority: 'high', count: 8, timeframe: 'Next 3 days', value: 8450 },
    { priority: 'medium', count: 15, timeframe: 'Next 7 days', value: 12780 },
    { priority: 'low', count: 32, timeframe: 'Next 30 days', value: 24560 }
  ];

  // Quality Control History
  const qualityChecks = [
    {
      id: 'QC-001',
      date: '2025-12-28',
      batchNumber: 'PCT5-2024-11',
      product: 'Paracetamol 500mg Tablets',
      inspector: 'Dr. Sharma',
      result: 'passed',
      parameters: [
        { name: 'Visual Inspection', status: 'passed', notes: 'No defects' },
        { name: 'Tablet Count', status: 'passed', notes: 'Accurate count' },
        { name: 'Packaging Integrity', status: 'passed', notes: 'Sealed properly' },
        { name: 'Expiry Date Verification', status: 'passed', notes: 'Valid until Nov 2026' }
      ]
    },
    {
      id: 'QC-002',
      date: '2025-12-27',
      batchNumber: 'MILK-20251228',
      product: 'Fresh Milk (Full Cream)',
      inspector: 'Quality Team',
      result: 'passed',
      parameters: [
        { name: 'Temperature Check', status: 'passed', notes: '4°C maintained' },
        { name: 'Fat Content', status: 'passed', notes: '6% verified' },
        { name: 'Pasteurization', status: 'passed', notes: 'Properly done' },
        { name: 'Packaging', status: 'passed', notes: 'No leakage' }
      ]
    }
  ];

  // Recall Management
  const recalls = [
    {
      id: 'REC-001',
      date: '2025-12-15',
      product: 'Cough Syrup (Generic)',
      batchNumber: 'COUGH-2024-08',
      reason: 'Manufacturing defect - incorrect dosage',
      manufacturer: 'Generic Pharma Ltd',
      affectedQuantity: 450,
      recoveredQuantity: 423,
      status: 'in_progress',
      notificationsSent: 156,
      severity: 'high'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'good': return 'bg-green-100 text-green-700';
      case 'expiring_soon': return 'bg-yellow-100 text-yellow-700';
      case 'expired': return 'bg-red-100 text-red-700';
      case 'recalled': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-700 border-red-300';
      case 'high': return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'low': return 'bg-blue-100 text-blue-700 border-blue-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const filteredBatches = batches.filter(batch =>
    batch.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
    batch.batchNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <MerchantNav />
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Batch & Expiry Tracking
            </h1>
            <p className="text-gray-600 mt-1">Monitor batch numbers, expiry dates & quality control</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Add Batch
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Active Batches</p>
              <p className="text-3xl font-bold text-gray-900">847</p>
              <p className="text-green-600 text-sm mt-1">Across 6 categories</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-red-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Expiring Soon</p>
              <p className="text-3xl font-bold text-gray-900">58</p>
              <p className="text-red-600 text-sm mt-1">Next 7 days</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">QC Passed</p>
              <p className="text-3xl font-bold text-gray-900">98.7%</p>
              <p className="text-green-600 text-sm mt-1">This month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Stock Value at Risk</p>
              <p className="text-3xl font-bold text-gray-900">₹24.5K</p>
              <p className="text-orange-600 text-sm mt-1">Expiring items</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Expiry Alerts */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Expiry Alerts</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {expiryAlerts.map((alert, idx) => (
            <div key={idx} className={`border-2 rounded-xl p-4 ${getPriorityColor(alert.priority)}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase">{alert.priority}</span>
                <AlertTriangle className="w-5 h-5" />
              </div>
              <p className="text-2xl font-bold mb-1">{alert.count}</p>
              <p className="text-sm mb-2">{alert.timeframe}</p>
              <p className="text-xs">Value: ₹{alert.value.toLocaleString('en-IN')}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm mb-6">
        <div className="flex border-b border-gray-200">
          {[
            { id: 'batches', label: 'Batch Inventory', icon: Package },
            { id: 'expiry', label: 'Expiry Calendar', icon: Calendar },
            { id: 'quality', label: 'Quality Control', icon: CheckCircle },
            { id: 'recalls', label: 'Recalls', icon: AlertTriangle }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 font-medium transition-colors flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Batches Tab */}
        {activeTab === 'batches' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by product or batch number..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <select className="px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500">
                  <option>All Categories</option>
                  <option>Pharmacy</option>
                  <option>Dairy</option>
                  <option>Beauty</option>
                  <option>Bakery</option>
                </select>
                <select className="px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500">
                  <option>All Status</option>
                  <option>Good</option>
                  <option>Expiring Soon</option>
                  <option>Expired</option>
                </select>
                <button className="px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Export
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {filteredBatches.map(batch => (
                <div key={batch.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <QrCode className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{batch.product}</h4>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span>Batch: <span className="font-medium text-gray-900">{batch.batchNumber}</span></span>
                          <span>•</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">{batch.category}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(batch.status)}`}>
                      {batch.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-5 gap-4 mb-4 bg-gray-50 rounded-xl p-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Manufacturer</p>
                      <p className="font-medium text-gray-900 text-sm">{batch.manufacturer}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Mfg Date</p>
                      <p className="font-medium text-gray-900 text-sm">{new Date(batch.mfgDate).toLocaleDateString('en-IN')}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Expiry Date</p>
                      <p className="font-medium text-gray-900 text-sm">{new Date(batch.expiryDate).toLocaleDateString('en-IN')}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Days to Expiry</p>
                      <p className={`font-bold text-sm ${batch.daysToExpiry <= 3 ? 'text-red-600' : batch.daysToExpiry <= 30 ? 'text-yellow-600' : 'text-green-600'}`}>
                        {batch.daysToExpiry} days
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Stock</p>
                      <p className="font-medium text-gray-900 text-sm">{batch.quantity} {batch.unit}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm">
                      <div>
                        <span className="text-gray-600">Location:</span>
                        <span className="ml-2 font-medium text-gray-900">{batch.location}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">MRP:</span>
                        <span className="ml-2 font-medium text-gray-900">₹{batch.mrp}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">QC:</span>
                        <span className={`ml-2 font-medium ${batch.qualityCheck.status === 'passed' ? 'text-green-600' : 'text-red-600'}`}>
                          {batch.qualityCheck.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                        View Details
                      </button>
                      {batch.status === 'expiring_soon' && (
                        <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 text-sm">
                          Mark for Clearance
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quality Control Tab */}
        {activeTab === 'quality' && (
          <div className="p-6">
            <div className="space-y-4">
              {qualityChecks.map(qc => (
                <div key={qc.id} className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{qc.product}</h4>
                      <p className="text-sm text-gray-600">Batch: {qc.batchNumber} • Inspected on {new Date(qc.date).toLocaleDateString('en-IN')}</p>
                      <p className="text-sm text-gray-600">Inspector: {qc.inspector}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${qc.result === 'passed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {qc.result.toUpperCase()}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {qc.parameters.map((param, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-lg p-3">
                        {param.status === 'passed' ? (
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{param.name}</p>
                          <p className="text-sm text-gray-600">{param.notes}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recalls Tab */}
        {activeTab === 'recalls' && (
          <div className="p-6">
            <div className="space-y-4">
              {recalls.map(recall => (
                <div key={recall.id} className="bg-white rounded-xl border-2 border-red-300 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                        <h4 className="font-bold text-gray-900 text-lg">Product Recall Alert</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">Date: {new Date(recall.date).toLocaleDateString('en-IN')}</p>
                      <p className="font-medium text-gray-900">Product: {recall.product}</p>
                      <p className="text-sm text-gray-600">Batch: {recall.batchNumber}</p>
                      <p className="text-sm text-gray-600">Manufacturer: {recall.manufacturer}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${recall.severity === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {recall.severity.toUpperCase()} SEVERITY
                    </span>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4 mb-4">
                    <p className="font-medium text-red-900 mb-1">Recall Reason:</p>
                    <p className="text-red-800">{recall.reason}</p>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Affected Quantity</p>
                      <p className="text-lg font-bold text-gray-900">{recall.affectedQuantity}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Recovered</p>
                      <p className="text-lg font-bold text-green-600">{recall.recoveredQuantity}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Pending</p>
                      <p className="text-lg font-bold text-red-600">{recall.affectedQuantity - recall.recoveredQuantity}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Notifications Sent</p>
                      <p className="text-lg font-bold text-blue-600">{recall.notificationsSent}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${recall.status === 'in_progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                      {recall.status.replace('_', ' ').toUpperCase()}
                    </span>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium">
                      View Full Report
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
