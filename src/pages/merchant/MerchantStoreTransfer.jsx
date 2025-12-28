import { useState } from 'react';
import { Search, Plus, ArrowRight, Package, MapPin, TrendingUp, Clock, CheckCircle, XCircle, AlertTriangle, Download, Truck, BarChart3 } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantStoreTransfer() {
  const [activeTab, setActiveTab] = useState('transfers');
  const [showCreateTransfer, setShowCreateTransfer] = useState(false);

  // Store Locations
  const stores = [
    { id: 'store-001', name: 'Main Store - Indiranagar', city: 'Bangalore', type: 'flagship', inventory: 4567, value: 6789000 },
    { id: 'store-002', name: 'MG Road Branch', city: 'Bangalore', type: 'branch', inventory: 2345, value: 3456000 },
    { id: 'store-003', name: 'Koramangala Outlet', city: 'Bangalore', type: 'branch', inventory: 1890, value: 2678000 },
    { id: 'store-004', name: 'Mumbai - Bandra', city: 'Mumbai', type: 'regional', inventory: 3456, value: 5234000 },
    { id: 'store-005', name: 'Delhi - Connaught Place', city: 'Delhi', type: 'regional', inventory: 2987, value: 4123000 }
  ];

  // Transfer Requests
  const transfers = [
    {
      id: 'TRF-001',
      date: '2025-12-28',
      from: { storeId: 'store-001', name: 'Main Store - Indiranagar' },
      to: { storeId: 'store-002', name: 'MG Road Branch' },
      items: [
        { sku: 'SKU-1234', name: 'Nike Air Max Shoes', quantity: 15, unit: 'pairs', value: 1350 },
        { sku: 'SKU-5678', name: 'Levi\'s Jeans', quantity: 25, unit: 'pieces', value: 750 }
      ],
      totalValue: 52500,
      status: 'in_transit',
      createdBy: 'Rahul Sharma',
      approvedBy: 'Store Manager',
      dispatchDate: '2025-12-27',
      expectedDelivery: '2025-12-29',
      trackingNumber: 'TRK-897654',
      courier: 'Professional Courier',
      reason: 'Stock shortage at MG Road'
    },
    {
      id: 'TRF-002',
      date: '2025-12-28',
      from: { storeId: 'store-003', name: 'Koramangala Outlet' },
      to: { storeId: 'store-001', name: 'Main Store - Indiranagar' },
      items: [
        { sku: 'SKU-9012', name: 'Samsung Galaxy S23', quantity: 5, unit: 'units', value: 899 },
        { sku: 'SKU-3456', name: 'Apple Airpods Pro', quantity: 10, unit: 'units', value: 249 }
      ],
      totalValue: 6985,
      status: 'pending_approval',
      createdBy: 'Priya Patel',
      dispatchDate: null,
      expectedDelivery: null,
      reason: 'Excess stock - slow moving items'
    },
    {
      id: 'TRF-003',
      date: '2025-12-27',
      from: { storeId: 'store-001', name: 'Main Store - Indiranagar' },
      to: { storeId: 'store-004', name: 'Mumbai - Bandra' },
      items: [
        { sku: 'SKU-7890', name: 'Adidas Running Shoes', quantity: 30, unit: 'pairs', value: 899 },
        { sku: 'SKU-2345', name: 'Puma T-Shirts', quantity: 50, unit: 'pieces', value: 399 }
      ],
      totalValue: 46920,
      status: 'delivered',
      createdBy: 'Vikram Singh',
      approvedBy: 'Regional Manager',
      dispatchDate: '2025-12-24',
      expectedDelivery: '2025-12-27',
      deliveredDate: '2025-12-27',
      trackingNumber: 'TRK-112233',
      courier: 'Blue Dart',
      reason: 'New store stocking'
    },
    {
      id: 'TRF-004',
      date: '2025-12-26',
      from: { storeId: 'store-002', name: 'MG Road Branch' },
      to: { storeId: 'store-003', name: 'Koramangala Outlet' },
      items: [
        { sku: 'SKU-4567', name: 'L\'Oreal Face Serum', quantity: 40, unit: 'bottles', value: 1299 }
      ],
      totalValue: 51960,
      status: 'rejected',
      createdBy: 'Anjali Desai',
      rejectedBy: 'Inventory Manager',
      rejectionReason: 'Receiving store already has sufficient stock',
      reason: 'Overstock clearance'
    },
    {
      id: 'TRF-005',
      date: '2025-12-25',
      from: { storeId: 'store-004', name: 'Mumbai - Bandra' },
      to: { storeId: 'store-005', name: 'Delhi - Connaught Place' },
      items: [
        { sku: 'SKU-6789', name: 'Sony Headphones WH-1000XM5', quantity: 12, unit: 'units', value: 299 },
        { sku: 'SKU-8901', name: 'JBL Portable Speaker', quantity: 18, unit: 'units', value: 149 }
      ],
      totalValue: 6270,
      status: 'in_transit',
      createdBy: 'Sneha Reddy',
      approvedBy: 'Regional Manager',
      dispatchDate: '2025-12-24',
      expectedDelivery: '2025-12-28',
      trackingNumber: 'TRK-445566',
      courier: 'DTDC Express',
      reason: 'Festival season demand'
    }
  ];

  // Transfer Analytics
  const analytics = {
    thisMonth: {
      totalTransfers: 47,
      totalValue: 876450,
      pending: 8,
      inTransit: 12,
      delivered: 24,
      rejected: 3
    },
    topRoutes: [
      { from: 'Main Store', to: 'MG Road', count: 12, value: 234560 },
      { from: 'Main Store', to: 'Mumbai Bandra', count: 8, value: 187920 },
      { from: 'Koramangala', to: 'Main Store', count: 6, value: 98760 }
    ],
    topItems: [
      { item: 'Nike Air Max Shoes', transfers: 15, quantity: 180 },
      { item: 'Samsung Galaxy Phones', transfers: 12, quantity: 45 },
      { item: 'Levi\'s Jeans', transfers: 18, quantity: 320 }
    ]
  };

  // Inventory Optimization Suggestions
  const suggestions = [
    {
      priority: 'high',
      type: 'rebalance',
      from: 'Main Store - Indiranagar',
      to: 'Koramangala Outlet',
      items: 'Nike Air Jordan (15 pairs)',
      reason: 'Koramangala has stockout, Main Store has excess',
      potentialRevenue: 45000
    },
    {
      priority: 'medium',
      type: 'consolidate',
      from: 'MG Road Branch',
      to: 'Main Store - Indiranagar',
      items: 'Slow-moving electronics (8 items)',
      reason: 'Better visibility at flagship store',
      potentialRevenue: 28000
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending_approval': return 'bg-yellow-100 text-yellow-700';
      case 'in_transit': return 'bg-blue-100 text-blue-700';
      case 'delivered': return 'bg-green-100 text-green-700';
      case 'rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStoreTypeColor = (type) => {
    switch (type) {
      case 'flagship': return 'bg-purple-100 text-purple-700';
      case 'regional': return 'bg-blue-100 text-blue-700';
      case 'branch': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <MerchantNav />
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Inter-Store Transfer
            </h1>
            <p className="text-gray-600 mt-1">Manage inventory transfers between locations</p>
          </div>
          <button
            onClick={() => setShowCreateTransfer(true)}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create Transfer
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Stores</p>
              <p className="text-3xl font-bold text-gray-900">{stores.length}</p>
              <p className="text-indigo-600 text-sm mt-1">3 cities</p>
            </div>
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">This Month</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.thisMonth.totalTransfers}</p>
              <p className="text-blue-600 text-sm mt-1">₹{(analytics.thisMonth.totalValue / 100000).toFixed(1)}L</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Truck className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">In Transit</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.thisMonth.inTransit}</p>
              <p className="text-green-600 text-sm mt-1">Active shipments</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Package className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Pending</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.thisMonth.pending}</p>
              <p className="text-yellow-600 text-sm mt-1">Awaiting approval</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Delivered</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.thisMonth.delivered}</p>
              <p className="text-purple-600 text-sm mt-1">Success rate: 88%</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Store Network Overview */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Store Network</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {stores.map(store => (
            <div key={store.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-3">
                <MapPin className="w-5 h-5 text-indigo-600" />
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStoreTypeColor(store.type)}`}>
                  {store.type.toUpperCase()}
                </span>
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">{store.name}</h4>
              <p className="text-xs text-gray-600 mb-3">{store.city}</p>
              <div className="space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Items</span>
                  <span className="font-medium text-gray-900">{store.inventory}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Value</span>
                  <span className="font-medium text-gray-900">₹{(store.value / 100000).toFixed(1)}L</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm mb-6">
        <div className="flex border-b border-gray-200">
          {[
            { id: 'transfers', label: 'Transfer Requests', icon: Package },
            { id: 'analytics', label: 'Analytics', icon: BarChart3 },
            { id: 'suggestions', label: 'AI Suggestions', icon: TrendingUp }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 font-medium transition-colors flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                    ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Transfers Tab */}
        {activeTab === 'transfers' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search transfers..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <select className="px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500">
                  <option>All Status</option>
                  <option>Pending Approval</option>
                  <option>In Transit</option>
                  <option>Delivered</option>
                  <option>Rejected</option>
                </select>
                <button className="px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Export
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {transfers.map(transfer => (
                <div key={transfer.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">Transfer #{transfer.id}</h4>
                      <p className="text-sm text-gray-600">Created {transfer.date} by {transfer.createdBy}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(transfer.status)}`}>
                      {transfer.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>

                  {/* Route */}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <p className="text-xs text-gray-600 mb-1">From</p>
                        <p className="font-bold text-gray-900">{transfer.from.name}</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs text-gray-600 mb-1">To</p>
                        <p className="font-bold text-gray-900">{transfer.to.name}</p>
                      </div>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Items ({transfer.items.length})</p>
                    <div className="space-y-2">
                      {transfer.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                            <p className="text-xs text-gray-600">SKU: {item.sku}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900">{item.quantity} {item.unit}</p>
                            <p className="text-xs text-gray-600">₹{item.value} each</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-4 gap-4 mb-4 bg-gray-50 rounded-xl p-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Total Value</p>
                      <p className="font-bold text-gray-900">₹{transfer.totalValue.toLocaleString('en-IN')}</p>
                    </div>
                    {transfer.trackingNumber && (
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Tracking</p>
                        <p className="font-medium text-blue-600 text-sm">{transfer.trackingNumber}</p>
                      </div>
                    )}
                    {transfer.expectedDelivery && (
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Expected Delivery</p>
                        <p className="font-medium text-gray-900 text-sm">{new Date(transfer.expectedDelivery).toLocaleDateString('en-IN')}</p>
                      </div>
                    )}
                    {transfer.deliveredDate && (
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Delivered</p>
                        <p className="font-medium text-green-600 text-sm">{new Date(transfer.deliveredDate).toLocaleDateString('en-IN')}</p>
                      </div>
                    )}
                  </div>

                  {transfer.rejectionReason && (
                    <div className="bg-red-50 rounded-lg p-3 mb-4">
                      <p className="text-xs font-medium text-red-900 mb-1">Rejection Reason:</p>
                      <p className="text-sm text-red-800">{transfer.rejectionReason}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">Reason: <span className="font-medium text-gray-900">{transfer.reason}</span></p>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm">
                        View Details
                      </button>
                      {transfer.status === 'pending_approval' && (
                        <>
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm">
                            Approve
                          </button>
                          <button className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 text-sm">
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="p-6">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Top Transfer Routes</h3>
                <div className="space-y-3">
                  {analytics.topRoutes.map((route, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center font-bold text-indigo-600 text-sm">
                          #{idx + 1}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{route.from} → {route.to}</p>
                          <p className="text-xs text-gray-600">{route.count} transfers</p>
                        </div>
                      </div>
                      <p className="font-bold text-gray-900">₹{route.value.toLocaleString('en-IN')}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Most Transferred Items</h3>
                <div className="space-y-3">
                  {analytics.topItems.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center font-bold text-purple-600 text-sm">
                          #{idx + 1}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{item.item}</p>
                          <p className="text-xs text-gray-600">{item.transfers} transfers</p>
                        </div>
                      </div>
                      <p className="font-bold text-gray-900">{item.quantity} units</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AI Suggestions Tab */}
        {activeTab === 'suggestions' && (
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">AI-Powered Inventory Optimization</h3>
            <div className="space-y-4">
              {suggestions.map((suggestion, idx) => (
                <div key={idx} className="bg-gradient-to-br from-white to-blue-50 rounded-xl border-2 border-blue-200 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className={`w-6 h-6 ${suggestion.priority === 'high' ? 'text-red-600' : 'text-yellow-600'}`} />
                      <div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${suggestion.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {suggestion.priority.toUpperCase()} PRIORITY
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      {suggestion.type.toUpperCase()}
                    </span>
                  </div>

                  <div className="bg-white rounded-lg p-4 mb-3">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex-1">
                        <p className="text-xs text-gray-600 mb-1">From</p>
                        <p className="font-bold text-gray-900">{suggestion.from}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-blue-600" />
                      <div className="flex-1">
                        <p className="text-xs text-gray-600 mb-1">To</p>
                        <p className="font-bold text-gray-900">{suggestion.to}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-900">Items: {suggestion.items}</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3 mb-3">
                    <p className="text-xs font-medium text-gray-700 mb-1">Reason:</p>
                    <p className="text-sm text-gray-900">{suggestion.reason}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-600">Potential Revenue Impact</p>
                      <p className="text-xl font-bold text-green-600">+₹{suggestion.potentialRevenue.toLocaleString('en-IN')}</p>
                    </div>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                      Create Transfer
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
