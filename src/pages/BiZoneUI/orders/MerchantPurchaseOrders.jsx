import React, { useState } from 'react';
import {
  ArrowLeft, Package, Plus, Search, Filter, Clock, CheckCircle,
  XCircle, Truck, FileText, ChevronRight, AlertCircle, Download,
  Send, Eye, Edit, Trash2, Building2, Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantPurchaseOrders = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [showCreatePO, setShowCreatePO] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const suppliers = [
    { id: 1, name: 'Metro Cash & Carry', contact: '9876543210', email: 'orders@metro.com', credit: 50000 },
    { id: 2, name: 'Reliance FMCG', contact: '9876543211', email: 'supply@reliance.com', credit: 75000 },
    { id: 3, name: 'ITC Distributors', contact: '9876543212', email: 'orders@itc.com', credit: 100000 },
    { id: 4, name: 'Local Veggie Mart', contact: '9876543213', email: 'fresh@veggiemart.com', credit: 25000 }
  ];

  const purchaseOrders = [
    {
      id: 'PO-2024-001',
      supplier: 'Metro Cash & Carry',
      date: '2024-01-15',
      expectedDelivery: '2024-01-18',
      items: 12,
      total: 45600,
      status: 'delivered',
      paymentStatus: 'paid'
    },
    {
      id: 'PO-2024-002',
      supplier: 'Reliance FMCG',
      date: '2024-01-16',
      expectedDelivery: '2024-01-19',
      items: 8,
      total: 32400,
      status: 'shipped',
      paymentStatus: 'pending'
    },
    {
      id: 'PO-2024-003',
      supplier: 'ITC Distributors',
      date: '2024-01-17',
      expectedDelivery: '2024-01-20',
      items: 15,
      total: 68900,
      status: 'confirmed',
      paymentStatus: 'pending'
    },
    {
      id: 'PO-2024-004',
      supplier: 'Local Veggie Mart',
      date: '2024-01-17',
      expectedDelivery: '2024-01-18',
      items: 20,
      total: 12500,
      status: 'pending',
      paymentStatus: 'pending'
    },
    {
      id: 'PO-2024-005',
      supplier: 'Metro Cash & Carry',
      date: '2024-01-14',
      expectedDelivery: '2024-01-17',
      items: 10,
      total: 28000,
      status: 'cancelled',
      paymentStatus: 'refunded'
    }
  ];

  const poStats = {
    pending: 2,
    confirmed: 1,
    shipped: 1,
    delivered: 1,
    totalValue: 187400,
    thisMonth: 5
  };

  const lowStockItems = [
    { name: 'Basmati Rice 5kg', current: 5, reorder: 20, supplier: 'Metro Cash & Carry' },
    { name: 'Cooking Oil 1L', current: 8, reorder: 25, supplier: 'Reliance FMCG' },
    { name: 'Sugar 1kg', current: 12, reorder: 30, supplier: 'ITC Distributors' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'bg-green-500/20 text-green-400';
      case 'shipped': return 'bg-blue-500/20 text-blue-400';
      case 'confirmed': return 'bg-purple-500/20 text-purple-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'cancelled': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered': return <CheckCircle size={16} />;
      case 'shipped': return <Truck size={16} />;
      case 'confirmed': return <FileText size={16} />;
      case 'pending': return <Clock size={16} />;
      case 'cancelled': return <XCircle size={16} />;
      default: return <Clock size={16} />;
    }
  };

  const filteredOrders = activeTab === 'all'
    ? purchaseOrders
    : purchaseOrders.filter(po => po.status === activeTab);

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Purchase Orders</h1>
              <p className="text-teal-200 text-sm">Manage supplier orders</p>
            </div>
          </div>
          <button
            onClick={() => setShowCreatePO(true)}
            className="bg-white/20 p-2 rounded-lg"
          >
            <Plus size={24} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{poStats.pending}</p>
            <p className="text-xs text-teal-200">Pending</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{poStats.shipped}</p>
            <p className="text-xs text-teal-200">In Transit</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{poStats.delivered}</p>
            <p className="text-xs text-teal-200">Delivered</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">₹{(poStats.totalValue/1000).toFixed(0)}K</p>
            <p className="text-xs text-teal-200">This Month</p>
          </div>
        </div>
      </div>

      {/* Low Stock Alert */}
      {lowStockItems.length > 0 && (
        <div className="p-4">
          <div className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-4">
            <div className="flex items-center mb-3">
              <AlertCircle size={20} className="text-orange-400 mr-2" />
              <span className="text-orange-400 font-medium">Low Stock Items - Reorder Needed</span>
            </div>
            <div className="space-y-2">
              {lowStockItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-2">
                  <div>
                    <p className="text-white text-sm">{item.name}</p>
                    <p className="text-gray-400 text-xs">{item.supplier}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-red-400 text-sm">{item.current} left</p>
                    <p className="text-gray-500 text-xs">Reorder: {item.reorder}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-3 bg-orange-600 text-white py-2 rounded-lg text-sm font-medium">
              Create Restock Order
            </button>
          </div>
        </div>
      )}

      {/* Search & Filter */}
      <div className="px-4 pb-2">
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-xl"
            />
          </div>
          <button className="bg-gray-800 text-white px-4 rounded-xl">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pb-4">
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {[
            { id: 'all', label: 'All' },
            { id: 'pending', label: 'Pending' },
            { id: 'confirmed', label: 'Confirmed' },
            { id: 'shipped', label: 'Shipped' },
            { id: 'delivered', label: 'Delivered' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === tab.id
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-800 text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Purchase Orders List */}
      <div className="px-4 space-y-3">
        {filteredOrders.map(po => (
          <div key={po.id} className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center">
                  <p className="text-white font-bold">{po.id}</p>
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs flex items-center ${getStatusColor(po.status)}`}>
                    {getStatusIcon(po.status)}
                    <span className="ml-1 capitalize">{po.status}</span>
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{po.supplier}</p>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">₹{po.total.toLocaleString()}</p>
                <p className="text-gray-400 text-xs">{po.items} items</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm mb-3">
              <div className="flex items-center text-gray-400">
                <Calendar size={14} className="mr-1" />
                <span>Ordered: {po.date}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Truck size={14} className="mr-1" />
                <span>Expected: {po.expectedDelivery}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className={`text-xs px-2 py-1 rounded-full ${
                po.paymentStatus === 'paid' ? 'bg-green-500/20 text-green-400' :
                po.paymentStatus === 'refunded' ? 'bg-gray-500/20 text-gray-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {po.paymentStatus === 'paid' ? '✓ Paid' :
                 po.paymentStatus === 'refunded' ? 'Refunded' : 'Payment Pending'}
              </span>
              <div className="flex space-x-2">
                <button className="text-gray-400 p-2">
                  <Eye size={18} />
                </button>
                <button className="text-gray-400 p-2">
                  <Download size={18} />
                </button>
                {po.status === 'pending' && (
                  <>
                    <button className="text-blue-400 p-2">
                      <Edit size={18} />
                    </button>
                    <button className="text-red-400 p-2">
                      <Trash2 size={18} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create PO Modal */}
      {showCreatePO && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
          <div className="bg-gray-800 rounded-t-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-bold">Create Purchase Order</h3>
                <button onClick={() => setShowCreatePO(false)} className="text-gray-400">
                  <XCircle size={24} />
                </button>
              </div>
            </div>

            <div className="p-4">
              {/* Supplier Selection */}
              <div className="mb-4">
                <label className="text-gray-400 text-sm mb-2 block">Select Supplier</label>
                <div className="space-y-2">
                  {suppliers.map(supplier => (
                    <button
                      key={supplier.id}
                      onClick={() => setSelectedSupplier(supplier.id)}
                      className={`w-full p-3 rounded-xl text-left flex items-center justify-between ${
                        selectedSupplier === supplier.id
                          ? 'bg-teal-600 text-white'
                          : 'bg-gray-700 text-white'
                      }`}
                    >
                      <div className="flex items-center">
                        <Building2 size={20} className="mr-3" />
                        <div>
                          <p className="font-medium">{supplier.name}</p>
                          <p className={`text-sm ${selectedSupplier === supplier.id ? 'text-teal-200' : 'text-gray-400'}`}>
                            Credit: ₹{supplier.credit.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      {selectedSupplier === supplier.id && <CheckCircle size={20} />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button className="bg-gray-700 text-white p-4 rounded-xl text-center">
                  <Package size={24} className="mx-auto mb-2" />
                  <p className="text-sm">From Low Stock</p>
                </button>
                <button className="bg-gray-700 text-white p-4 rounded-xl text-center">
                  <FileText size={24} className="mx-auto mb-2" />
                  <p className="text-sm">From Template</p>
                </button>
              </div>

              {/* Expected Delivery */}
              <div className="mb-4">
                <label className="text-gray-400 text-sm mb-2 block">Expected Delivery Date</label>
                <input
                  type="date"
                  className="w-full bg-gray-700 text-white p-3 rounded-xl"
                />
              </div>

              {/* Notes */}
              <div className="mb-6">
                <label className="text-gray-400 text-sm mb-2 block">Notes (Optional)</label>
                <textarea
                  placeholder="Add any special instructions..."
                  className="w-full bg-gray-700 text-white p-3 rounded-xl h-24 resize-none"
                />
              </div>

              <button
                disabled={!selectedSupplier}
                className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold disabled:opacity-50 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Continue to Add Items
              </button>
            </div>
          </div>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantPurchaseOrders;
