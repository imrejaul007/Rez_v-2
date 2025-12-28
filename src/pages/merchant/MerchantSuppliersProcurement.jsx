import { useState } from 'react';
import { Truck, Users, ShoppingCart, Package, CheckCircle, Clock, AlertCircle, TrendingUp, DollarSign, Star, Calendar, FileText, Phone, Mail, MapPin, Plus, Edit, Eye, Download } from 'lucide-react';

export default function MerchantSuppliersProcurement() {
  const [activeTab, setActiveTab] = useState('suppliers');
  const [showAddModal, setShowAddModal] = useState(false);

  // Suppliers data
  const suppliers = [
    {
      id: 'sup-001',
      name: 'Textile Mills India Ltd',
      category: 'Raw Materials',
      contact: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      email: 'rajesh@textiles.com',
      address: 'Mumbai, Maharashtra',
      rating: 4.8,
      totalOrders: 156,
      totalValue: 3456780,
      avgLeadTime: 7,
      onTimeDelivery: 94,
      qualityScore: 96,
      paymentTerms: 'Net 30',
      status: 'active',
      lastOrder: '2025-12-25'
    },
    {
      id: 'sup-002',
      name: 'Packaging Solutions Co',
      category: 'Packaging',
      contact: 'Priya Sharma',
      phone: '+91 98123 45678',
      email: 'priya@packaging.com',
      address: 'Delhi, NCR',
      rating: 4.6,
      totalOrders: 89,
      totalValue: 1234560,
      avgLeadTime: 5,
      onTimeDelivery: 91,
      qualityScore: 92,
      paymentTerms: 'Net 15',
      status: 'active',
      lastOrder: '2025-12-20'
    },
    {
      id: 'sup-003',
      name: 'Organic Farms Supply',
      category: 'Food Products',
      contact: 'Amit Patel',
      phone: '+91 97654 32109',
      email: 'amit@organicfarms.com',
      address: 'Bangalore, Karnataka',
      rating: 4.9,
      totalOrders: 234,
      totalValue: 5678900,
      avgLeadTime: 3,
      onTimeDelivery: 97,
      qualityScore: 98,
      paymentTerms: 'Net 20',
      status: 'active',
      lastOrder: '2025-12-27'
    }
  ];

  // Purchase orders
  const purchaseOrders = [
    {
      id: 'PO-2025-001',
      supplier: 'Textile Mills India Ltd',
      items: 5,
      totalAmount: 125600,
      orderDate: '2025-12-20',
      expectedDate: '2025-12-27',
      status: 'in_transit',
      paymentStatus: 'pending',
      deliveryProgress: 60
    },
    {
      id: 'PO-2025-002',
      supplier: 'Packaging Solutions Co',
      items: 3,
      totalAmount: 45900,
      orderDate: '2025-12-18',
      expectedDate: '2025-12-23',
      status: 'delivered',
      paymentStatus: 'paid',
      deliveryProgress: 100
    },
    {
      id: 'PO-2025-003',
      supplier: 'Organic Farms Supply',
      items: 8,
      totalAmount: 234500,
      orderDate: '2025-12-22',
      expectedDate: '2025-12-25',
      status: 'processing',
      paymentStatus: 'pending',
      deliveryProgress: 30
    }
  ];

  // Performance metrics
  const performanceMetrics = [
    {
      label: 'Active Suppliers',
      value: '45',
      change: '+5',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Total Procurement',
      value: '₹45.6L',
      change: '+18.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'On-Time Delivery',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      icon: Truck,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Avg Lead Time',
      value: '5.2 days',
      change: '-0.8',
      trend: 'down',
      icon: Clock,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  // Automated reorder suggestions
  const reorderSuggestions = [
    {
      product: 'Cotton Fabric - White',
      currentStock: 12,
      reorderPoint: 20,
      suggestedQuantity: 100,
      supplier: 'Textile Mills India Ltd',
      unitPrice: 250,
      totalCost: 25000,
      leadTime: 7
    },
    {
      product: 'Packaging Boxes - Medium',
      currentStock: 45,
      reorderPoint: 50,
      suggestedQuantity: 500,
      supplier: 'Packaging Solutions Co',
      unitPrice: 15,
      totalCost: 7500,
      leadTime: 5
    },
    {
      product: 'Organic Coffee Beans',
      currentStock: 8,
      reorderPoint: 30,
      suggestedQuantity: 200,
      supplier: 'Organic Farms Supply',
      unitPrice: 280,
      totalCost: 56000,
      leadTime: 3
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { label: 'Active', className: 'bg-green-100 text-green-700' },
      pending: { label: 'Pending', className: 'bg-yellow-100 text-yellow-700' },
      inactive: { label: 'Inactive', className: 'bg-gray-100 text-gray-700' },
      processing: { label: 'Processing', className: 'bg-blue-100 text-blue-700' },
      in_transit: { label: 'In Transit', className: 'bg-purple-100 text-purple-700' },
      delivered: { label: 'Delivered', className: 'bg-green-100 text-green-700' },
      cancelled: { label: 'Cancelled', className: 'bg-red-100 text-red-700' }
    };
    const config = statusConfig[status] || statusConfig.active;
    return <span className={`px-2 py-1 text-xs rounded-full font-medium ${config.className}`}>{config.label}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Truck className="w-8 h-8" />
                <h1 className="text-3xl font-bold">Supplier & Procurement Management</h1>
              </div>
              <p className="text-blue-100">Vendor management, purchase orders & automated reordering</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export
              </button>
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Supplier
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
                  <div className={`flex items-center gap-1 text-sm font-semibold ${metric.trend === 'up' ? 'text-green-600' : metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}>
                    {metric.trend === 'up' && <TrendingUp className="w-4 h-4" />}
                    {metric.change}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
            );
          })}
        </div>

        {/* Reorder Suggestions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              <h3 className="text-lg font-semibold text-gray-900">Automated Reorder Suggestions</h3>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Create Bulk PO
            </button>
          </div>
          <div className="space-y-3">
            {reorderSuggestions.map((suggestion, index) => (
              <div key={index} className="border border-orange-200 bg-orange-50 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="w-5 h-5 text-orange-600" />
                      <h4 className="font-semibold text-gray-900">{suggestion.product}</h4>
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full font-medium">
                        Low Stock: {suggestion.currentStock} units
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600 mb-1">Supplier</p>
                        <p className="font-semibold text-gray-900">{suggestion.supplier}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Suggested Qty</p>
                        <p className="font-semibold text-gray-900">{suggestion.suggestedQuantity} units</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Total Cost</p>
                        <p className="font-semibold text-green-600">₹{suggestion.totalCost.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Lead Time</p>
                        <p className="font-semibold text-gray-900">{suggestion.leadTime} days</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                      Create PO
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
                      Adjust
                    </button>
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
              {['suppliers', 'purchase_orders', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-4 font-semibold text-sm capitalize border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.replace('_', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'suppliers' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {suppliers.map((supplier) => (
                    <div key={supplier.id} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                            <Users className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold text-gray-900">{supplier.name}</h4>
                              {getStatusBadge(supplier.status)}
                            </div>
                            <p className="text-sm text-gray-600 mb-1">{supplier.category}</p>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                              <span className="text-sm font-semibold text-gray-900">{supplier.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Total Orders</p>
                          <p className="font-semibold text-gray-900">{supplier.totalOrders}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Total Value</p>
                          <p className="font-semibold text-gray-900">₹{(supplier.totalValue / 100000).toFixed(1)}L</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Avg Lead Time</p>
                          <p className="font-semibold text-gray-900">{supplier.avgLeadTime} days</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">On-Time %</p>
                          <p className="font-semibold text-green-600">{supplier.onTimeDelivery}%</p>
                        </div>
                      </div>

                      <div className="mb-4 pb-4 border-b border-gray-200 space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone className="w-4 h-4" />
                          {supplier.phone}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Mail className="w-4 h-4" />
                          {supplier.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          {supplier.address}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                          Create PO
                        </button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'purchase_orders' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Purchase Orders</h3>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Create PO
                  </button>
                </div>
                <div className="space-y-3">
                  {purchaseOrders.map((po) => (
                    <div key={po.id} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <FileText className="w-5 h-5 text-blue-600" />
                            <h4 className="font-bold text-gray-900">{po.id}</h4>
                            {getStatusBadge(po.status)}
                          </div>
                          <p className="text-sm text-gray-600">{po.supplier}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                          <p className="text-2xl font-bold text-gray-900">₹{po.totalAmount.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Items</p>
                          <p className="font-semibold text-gray-900">{po.items}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Order Date</p>
                          <p className="font-semibold text-gray-900">{po.orderDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Expected</p>
                          <p className="font-semibold text-gray-900">{po.expectedDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Payment</p>
                          {po.paymentStatus === 'paid' ? (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Paid</span>
                          ) : (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">Pending</span>
                          )}
                        </div>
                      </div>

                      {po.status !== 'delivered' && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-gray-600">Delivery Progress</span>
                            <span className="font-semibold text-gray-900">{po.deliveryProgress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all"
                              style={{ width: `${po.deliveryProgress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-2">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                        {po.status === 'in_transit' && (
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            Mark Received
                          </button>
                        )}
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Procurement Spend Trend</h3>
                    <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                      <p className="text-gray-600">Monthly spend chart</p>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Supplier Performance</h3>
                    <div className="h-64 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                      <p className="text-gray-600">Supplier comparison chart</p>
                    </div>
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
