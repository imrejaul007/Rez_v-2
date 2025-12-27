import { useState } from 'react';
import { Package, TrendingDown, AlertTriangle, CheckCircle, BarChart3, Download, Upload, Filter, Search, Plus, Edit, Trash2, Archive, RefreshCw, Calendar, MapPin, Truck, DollarSign, Activity } from 'lucide-react';

export default function MerchantInventoryAdvanced() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedWarehouse, setSelectedWarehouse] = useState('all');
  const [showLowStock, setShowLowStock] = useState(false);

  // Mock inventory data with SKU tracking
  const inventoryItems = [
    {
      id: 'inv-001',
      sku: 'TSHIRT-BLK-M-001',
      productName: 'Premium Cotton T-Shirt',
      category: 'Fashion',
      variant: 'Black - Medium',
      warehouse: 'main',
      stock: 12,
      minStock: 20,
      maxStock: 100,
      reorderPoint: 25,
      costPrice: 250,
      sellingPrice: 799,
      supplier: 'Cotton Co.',
      leadTime: 7,
      lastRestocked: '2025-12-20',
      turnoverRate: 4.2,
      status: 'low_stock'
    },
    {
      id: 'inv-002',
      sku: 'WALLET-LEA-BRN-002',
      productName: 'Leather Wallet',
      category: 'Accessories',
      variant: 'Brown',
      warehouse: 'main',
      stock: 45,
      minStock: 15,
      maxStock: 80,
      reorderPoint: 20,
      costPrice: 650,
      sellingPrice: 1299,
      supplier: 'Leather Crafts Ltd',
      leadTime: 10,
      lastRestocked: '2025-12-18',
      turnoverRate: 3.8,
      status: 'healthy'
    },
    {
      id: 'inv-003',
      sku: 'COFFEE-ORG-500-003',
      productName: 'Organic Coffee Beans',
      category: 'Food',
      variant: '500g Pack',
      warehouse: 'secondary',
      stock: 0,
      minStock: 30,
      maxStock: 200,
      reorderPoint: 40,
      costPrice: 280,
      sellingPrice: 499,
      supplier: 'Coffee Estates',
      leadTime: 5,
      lastRestocked: '2025-12-10',
      turnoverRate: 6.5,
      status: 'out_of_stock'
    },
    {
      id: 'inv-004',
      sku: 'POT-SET-CER-004',
      productName: 'Ceramic Pottery Set',
      category: 'Home Decor',
      variant: '6-piece',
      warehouse: 'main',
      stock: 28,
      minStock: 10,
      maxStock: 50,
      reorderPoint: 15,
      costPrice: 1250,
      sellingPrice: 2499,
      supplier: 'Artisan Crafts',
      leadTime: 14,
      lastRestocked: '2025-12-15',
      turnoverRate: 2.1,
      status: 'healthy'
    }
  ];

  // Warehouse locations
  const warehouses = [
    { id: 'main', name: 'Main Warehouse - Mumbai', items: 245, value: 1845600, utilization: 68 },
    { id: 'secondary', name: 'Secondary - Delhi', items: 178, value: 892340, utilization: 52 },
    { id: 'store', name: 'Store Front', items: 89, value: 456780, utilization: 45 }
  ];

  // Inventory alerts
  const inventoryAlerts = [
    { type: 'critical', count: 3, label: 'Out of Stock', icon: AlertTriangle, color: 'red' },
    { type: 'warning', count: 8, label: 'Low Stock', icon: TrendingDown, color: 'yellow' },
    { type: 'reorder', count: 5, label: 'Reorder Soon', icon: RefreshCw, color: 'orange' },
    { type: 'excess', count: 2, label: 'Excess Stock', icon: Archive, color: 'blue' }
  ];

  // Stock movements (recent)
  const stockMovements = [
    {
      id: 'mov-001',
      type: 'in',
      sku: 'TSHIRT-BLK-M-001',
      product: 'Premium Cotton T-Shirt',
      quantity: 50,
      from: 'Cotton Co.',
      to: 'Main Warehouse',
      date: '2025-12-20',
      reference: 'PO-2025-156'
    },
    {
      id: 'mov-002',
      type: 'out',
      sku: 'WALLET-LEA-BRN-002',
      product: 'Leather Wallet',
      quantity: 15,
      from: 'Main Warehouse',
      to: 'Customer Order #1234',
      date: '2025-12-27',
      reference: 'SO-2025-890'
    },
    {
      id: 'mov-003',
      type: 'transfer',
      sku: 'POT-SET-CER-004',
      product: 'Ceramic Pottery Set',
      quantity: 10,
      from: 'Main Warehouse',
      to: 'Store Front',
      date: '2025-12-26',
      reference: 'TRF-2025-034'
    }
  ];

  // Performance metrics
  const performanceMetrics = [
    {
      label: 'Total Inventory Value',
      value: '₹31,94,720',
      change: '+8.4%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'SKU Count',
      value: '512',
      change: '+23',
      trend: 'up',
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Avg. Turnover Rate',
      value: '4.2x',
      change: '+0.6',
      trend: 'up',
      icon: Activity,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Stock Accuracy',
      value: '96.8%',
      change: '+2.1%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      healthy: { label: 'Healthy', className: 'bg-green-100 text-green-700' },
      low_stock: { label: 'Low Stock', className: 'bg-yellow-100 text-yellow-700' },
      out_of_stock: { label: 'Out of Stock', className: 'bg-red-100 text-red-700' },
      excess: { label: 'Excess', className: 'bg-blue-100 text-blue-700' }
    };
    const config = statusConfig[status] || statusConfig.healthy;
    return <span className={`px-2 py-1 text-xs rounded-full font-medium ${config.className}`}>{config.label}</span>;
  };

  const getMovementBadge = (type) => {
    const typeConfig = {
      in: { label: 'Stock In', className: 'bg-green-100 text-green-700' },
      out: { label: 'Stock Out', className: 'bg-red-100 text-red-700' },
      transfer: { label: 'Transfer', className: 'bg-blue-100 text-blue-700' },
      adjustment: { label: 'Adjustment', className: 'bg-purple-100 text-purple-700' }
    };
    const config = typeConfig[type] || typeConfig.in;
    return <span className={`px-2 py-1 text-xs rounded-full font-medium ${config.className}`}>{config.label}</span>;
  };

  const filteredItems = showLowStock
    ? inventoryItems.filter(item => item.status === 'low_stock' || item.status === 'out_of_stock')
    : inventoryItems;

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Package className="w-8 h-8" />
                <h1 className="text-3xl font-bold">Advanced Inventory Management</h1>
              </div>
              <p className="text-blue-100">Multi-warehouse SKU tracking with predictive analytics</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export
              </button>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Import
              </button>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add Item
              </button>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {performanceMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    <Activity className="w-4 h-4" />
                    {metric.change}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
            );
          })}
        </div>

        {/* Inventory Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {inventoryAlerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <div key={alert.type} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 bg-${alert.color}-100 rounded-lg`}>
                      <Icon className={`w-5 h-5 text-${alert.color}-600`} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{alert.count}</p>
                      <p className="text-sm text-gray-600">{alert.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Warehouses */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Warehouse Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {warehouses.map((warehouse) => (
              <div key={warehouse.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">{warehouse.name}</h4>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Items:</span>
                    <span className="font-semibold text-gray-900">{warehouse.items}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Value:</span>
                    <span className="font-semibold text-gray-900">₹{warehouse.value.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Utilization:</span>
                    <span className="font-semibold text-gray-900">{warehouse.utilization}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${warehouse.utilization}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Tabs */}
          <div className="border-b border-gray-200 px-6">
            <div className="flex gap-4">
              {['overview', 'movements', 'analytics', 'forecasting'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-4 font-semibold text-sm capitalize border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                {/* Filters */}
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <select
                    value={selectedWarehouse}
                    onChange={(e) => setSelectedWarehouse(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="all">All Warehouses</option>
                    {warehouses.map(w => (
                      <option key={w.id} value={w.id}>{w.name}</option>
                    ))}
                  </select>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={showLowStock}
                      onChange={(e) => setShowLowStock(e.target.checked)}
                      className="rounded text-blue-600"
                    />
                    <span className="text-sm text-gray-700">Show only low stock items</span>
                  </label>
                  <div className="flex-1" />
                  <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search SKU or product..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Inventory Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">SKU</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Product</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Warehouse</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Stock</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Value</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Turnover</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredItems.map((item) => (
                        <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <p className="font-mono text-sm font-semibold text-gray-900">{item.sku}</p>
                          </td>
                          <td className="py-4 px-4">
                            <div>
                              <p className="font-semibold text-gray-900">{item.productName}</p>
                              <p className="text-xs text-gray-600">{item.variant}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-700">
                            {warehouses.find(w => w.id === item.warehouse)?.name.split(' - ')[1] || item.warehouse}
                          </td>
                          <td className="py-4 px-4">
                            <div>
                              <p className={`font-semibold ${item.stock <= item.minStock ? 'text-red-600' : 'text-gray-900'}`}>
                                {item.stock}
                              </p>
                              <p className="text-xs text-gray-600">Min: {item.minStock}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <p className="font-semibold text-gray-900">₹{(item.stock * item.costPrice).toLocaleString()}</p>
                          </td>
                          <td className="py-4 px-4">
                            <p className="font-semibold text-gray-900">{item.turnoverRate}x</p>
                          </td>
                          <td className="py-4 px-4">{getStatusBadge(item.status)}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <button className="p-1 hover:bg-gray-100 rounded">
                                <Edit className="w-4 h-4 text-gray-600" />
                              </button>
                              <button className="p-1 hover:bg-red-100 rounded">
                                <Trash2 className="w-4 h-4 text-red-600" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'movements' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Stock Movements</h3>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Record Movement
                  </button>
                </div>
                <div className="space-y-3">
                  {stockMovements.map((movement) => (
                    <div key={movement.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Truck className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-semibold text-gray-900">{movement.product}</p>
                            <p className="text-sm text-gray-600">SKU: {movement.sku}</p>
                          </div>
                        </div>
                        {getMovementBadge(movement.type)}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600 mb-1">Quantity</p>
                          <p className="font-semibold text-gray-900">{movement.quantity} units</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">From</p>
                          <p className="font-semibold text-gray-900">{movement.from}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">To</p>
                          <p className="font-semibold text-gray-900">{movement.to}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">Date & Reference</p>
                          <p className="font-semibold text-gray-900">{movement.date}</p>
                          <p className="text-xs text-gray-600">{movement.reference}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Inventory Value Trend</h3>
                    <div className="h-48 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                      <p className="text-gray-600">Inventory value chart</p>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Turnover Analysis</h3>
                    <div className="h-48 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                      <p className="text-gray-600">Turnover rate chart</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'forecasting' && (
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Demand Forecasting</h3>
                  <div className="h-64 flex items-center justify-center bg-gradient-to-br from-green-50 to-teal-50 rounded-lg">
                    <p className="text-gray-600">AI-powered demand forecast</p>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Reorders</h3>
                  <div className="space-y-3">
                    <p className="text-gray-600">Smart reorder recommendations based on historical data and trends...</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
