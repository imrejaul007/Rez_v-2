import { useState } from 'react';
import { RotateCcw, Search, Filter, Download, Eye, ThumbsUp, ThumbsDown, AlertCircle, CheckCircle, XCircle, Package, DollarSign, Clock, Image as ImageIcon } from 'lucide-react';

export default function MerchantReturns() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showReturnDetail, setShowReturnDetail] = useState(false);
  const [selectedReturn, setSelectedReturn] = useState(null);

  const [returns, setReturns] = useState([
    {
      id: 'RET001',
      orderNumber: '#REZ2024001',
      returnNumber: 'RET-2024-001',
      customer: { name: 'Rahul Sharma', phone: '+91 98765 43210', email: 'rahul@example.com' },
      date: '2024-01-15 02:30 PM',
      products: [
        { name: 'Nike Air Max 270', qty: 1, price: 12999, reason: 'Size too small' }
      ],
      totalRefund: 12999,
      status: 'pending',
      reason: 'Wrong Size',
      description: 'The shoes are too small for me. I need a larger size.',
      images: ['return1.jpg', 'return2.jpg'],
      requestedAt: '2024-01-15 02:30 PM'
    },
    {
      id: 'RET002',
      orderNumber: '#REZ2024003',
      returnNumber: 'RET-2024-002',
      customer: { name: 'Priya Patel', phone: '+91 87654 32109', email: 'priya@example.com' },
      date: '2024-01-14 06:15 PM',
      products: [
        { name: 'Levi\'s Denim Shirt', qty: 1, price: 2499, reason: 'Color mismatch' }
      ],
      totalRefund: 2499,
      status: 'approved',
      reason: 'Product Quality Issue',
      description: 'The color looks different from what was shown in the images.',
      images: ['return3.jpg'],
      requestedAt: '2024-01-14 06:15 PM',
      approvedAt: '2024-01-14 08:00 PM',
      refundMethod: 'wallet',
      refundProcessedAt: null
    },
    {
      id: 'RET003',
      orderNumber: '#REZ2024005',
      returnNumber: 'RET-2024-003',
      customer: { name: 'Amit Kumar', phone: '+91 76543 21098', email: 'amit@example.com' },
      date: '2024-01-14 11:00 AM',
      products: [
        { name: 'Fossil Chronograph Watch', qty: 1, price: 8999, reason: 'Received damaged' }
      ],
      totalRefund: 8999,
      status: 'refunded',
      reason: 'Damaged Product',
      description: 'Watch glass is cracked. Product arrived damaged.',
      images: ['return4.jpg', 'return5.jpg', 'return6.jpg'],
      requestedAt: '2024-01-14 11:00 AM',
      approvedAt: '2024-01-14 12:30 PM',
      refundMethod: 'original',
      refundProcessedAt: '2024-01-14 12:45 PM'
    },
    {
      id: 'RET004',
      orderNumber: '#REZ2024007',
      returnNumber: 'RET-2024-004',
      customer: { name: 'Sneha Reddy', phone: '+91 65432 10987', email: 'sneha@example.com' },
      date: '2024-01-13 04:20 PM',
      products: [
        { name: 'Woodland Leather Bag', qty: 1, price: 3499, reason: 'Wrong item' }
      ],
      totalRefund: 3499,
      status: 'rejected',
      reason: 'Wrong Item Received',
      description: 'I ordered a black bag but received brown.',
      images: ['return7.jpg'],
      requestedAt: '2024-01-13 04:20 PM',
      rejectedAt: '2024-01-13 05:00 PM',
      rejectionReason: 'Return window expired (7 days only)'
    }
  ]);

  const stats = {
    totalReturns: returns.length,
    pendingReturns: returns.filter(r => r.status === 'pending').length,
    approvedReturns: returns.filter(r => r.status === 'approved').length,
    refundedReturns: returns.filter(r => r.status === 'refunded').length,
    rejectedReturns: returns.filter(r => r.status === 'rejected').length,
    totalRefundAmount: returns.filter(r => r.status === 'refunded').reduce((sum, r) => sum + r.totalRefund, 0),
    returnRate: 8.5 // percentage
  };

  const filteredReturns = returns.filter(ret => {
    const matchesSearch = ret.returnNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ret.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ret.customer.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || ret.status === activeTab;
    return matchesSearch && matchesTab;
  });

  const getStatusBadge = (status) => {
    const badges = {
      pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: Clock, label: 'Pending Review' },
      approved: { bg: 'bg-blue-100', text: 'text-blue-800', icon: ThumbsUp, label: 'Approved' },
      refunded: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle, label: 'Refunded' },
      rejected: { bg: 'bg-red-100', text: 'text-red-800', icon: XCircle, label: 'Rejected' }
    };
    const badge = badges[status];
    const Icon = badge.icon;
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
        <Icon className="w-3 h-3" />
        {badge.label}
      </span>
    );
  };

  const handleApproveReturn = (returnId) => {
    setReturns(returns.map(ret =>
      ret.id === returnId
        ? { ...ret, status: 'approved', approvedAt: new Date().toISOString() }
        : ret
    ));
    setShowReturnDetail(false);
  };

  const handleRejectReturn = (returnId, reason) => {
    setReturns(returns.map(ret =>
      ret.id === returnId
        ? { ...ret, status: 'rejected', rejectedAt: new Date().toISOString(), rejectionReason: reason }
        : ret
    ));
    setShowReturnDetail(false);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <RotateCcw className="w-8 h-8 text-indigo-600" />
          Returns & Refunds Management
        </h1>
        <p className="text-gray-600 mt-1">Process return requests and manage refunds efficiently</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-sm text-gray-600">Total Returns</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{stats.totalReturns}</div>
        </div>
        <div className="bg-white rounded-lg border border-yellow-200 p-4">
          <div className="text-sm text-yellow-600">Pending</div>
          <div className="text-2xl font-bold text-yellow-900 mt-1">{stats.pendingReturns}</div>
        </div>
        <div className="bg-white rounded-lg border border-blue-200 p-4">
          <div className="text-sm text-blue-600">Approved</div>
          <div className="text-2xl font-bold text-blue-900 mt-1">{stats.approvedReturns}</div>
        </div>
        <div className="bg-white rounded-lg border border-green-200 p-4">
          <div className="text-sm text-green-600">Refunded</div>
          <div className="text-2xl font-bold text-green-900 mt-1">{stats.refundedReturns}</div>
        </div>
        <div className="bg-white rounded-lg border border-red-200 p-4">
          <div className="text-sm text-red-600">Rejected</div>
          <div className="text-2xl font-bold text-red-900 mt-1">{stats.rejectedReturns}</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-sm text-gray-600">Return Rate</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{stats.returnRate}%</div>
        </div>
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-4 text-white">
          <div className="text-sm text-indigo-100">Refunded</div>
          <div className="text-2xl font-bold mt-1">₹{(stats.totalRefundAmount / 1000).toFixed(0)}K</div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 flex gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by return number, order ID or customer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="w-5 h-5" />
            Export Report
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mt-4 border-t pt-4 overflow-x-auto">
          {['all', 'pending', 'approved', 'refunded', 'rejected'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Returns Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Refund</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredReturns.map((ret) => (
                <tr key={ret.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-indigo-600">{ret.returnNumber}</div>
                    <div className="text-xs text-gray-500">{ret.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{ret.orderNumber}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{ret.customer.name}</div>
                    <div className="text-sm text-gray-500">{ret.customer.phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{ret.products[0].name}</div>
                    <div className="text-xs text-gray-500">Qty: {ret.products[0].qty}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{ret.reason}</div>
                    {ret.images && ret.images.length > 0 && (
                      <div className="flex items-center gap-1 mt-1">
                        <ImageIcon className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{ret.images.length} image{ret.images.length > 1 ? 's' : ''}</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">₹{ret.totalRefund.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(ret.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedReturn(ret);
                          setShowReturnDetail(true);
                        }}
                        className="p-1 text-gray-600 hover:text-indigo-600"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      {ret.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleApproveReturn(ret.id)}
                            className="p-1 text-green-600 hover:text-green-700"
                          >
                            <ThumbsUp className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleRejectReturn(ret.id, 'Invalid return request')}
                            className="p-1 text-red-600 hover:text-red-700"
                          >
                            <ThumbsDown className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredReturns.length === 0 && (
          <div className="text-center py-12">
            <RotateCcw className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No returns found</p>
          </div>
        )}
      </div>

      {/* Return Detail Modal */}
      {showReturnDetail && selectedReturn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedReturn.returnNumber}</h2>
                  <p className="text-sm text-gray-600 mt-1">Return requested on {selectedReturn.date}</p>
                </div>
                {getStatusBadge(selectedReturn.status)}
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Customer Details */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Customer Information</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Name:</span>
                    <span className="text-sm font-medium text-gray-900">{selectedReturn.customer.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Phone:</span>
                    <span className="text-sm font-medium text-gray-900">{selectedReturn.customer.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Email:</span>
                    <span className="text-sm font-medium text-gray-900">{selectedReturn.customer.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Original Order:</span>
                    <span className="text-sm font-medium text-indigo-600">{selectedReturn.orderNumber}</span>
                  </div>
                </div>
              </div>

              {/* Return Reason */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Return Details</h3>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 space-y-3">
                  <div>
                    <div className="text-sm font-medium text-gray-700">Reason:</div>
                    <div className="text-sm text-gray-900 mt-1">{selectedReturn.reason}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">Description:</div>
                    <div className="text-sm text-gray-900 mt-1">{selectedReturn.description}</div>
                  </div>
                  {selectedReturn.images && selectedReturn.images.length > 0 && (
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Proof Images:</div>
                      <div className="grid grid-cols-3 gap-2">
                        {selectedReturn.images.map((img, index) => (
                          <div key={index} className="bg-gray-200 h-24 rounded-lg flex items-center justify-center">
                            <ImageIcon className="w-8 h-8 text-gray-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Product Details</h3>
                <div className="bg-gray-50 rounded-lg divide-y divide-gray-200">
                  {selectedReturn.products.map((product, index) => (
                    <div key={index} className="p-4 flex justify-between items-center">
                      <div>
                        <div className="font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-600">Quantity: {product.qty}</div>
                        <div className="text-sm text-gray-600">Return Reason: {product.reason}</div>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">₹{product.price.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Refund Summary */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Refund Summary</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Total Refund Amount:</span>
                    <span className="text-2xl font-bold text-green-600">₹{selectedReturn.totalRefund.toLocaleString()}</span>
                  </div>
                  {selectedReturn.refundMethod && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Refund Method:</span>
                        <span className="text-gray-900 capitalize">{selectedReturn.refundMethod}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Rejection Reason */}
              {selectedReturn.status === 'rejected' && selectedReturn.rejectionReason && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-900 mb-2">Rejection Reason</h3>
                  <p className="text-sm text-red-800">{selectedReturn.rejectionReason}</p>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-between">
              <button
                onClick={() => setShowReturnDetail(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Close
              </button>
              {selectedReturn.status === 'pending' && (
                <div className="flex gap-3">
                  <button
                    onClick={() => handleRejectReturn(selectedReturn.id, 'Invalid return request')}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    <ThumbsDown className="w-4 h-4" />
                    Reject Return
                  </button>
                  <button
                    onClick={() => handleApproveReturn(selectedReturn.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    Approve & Refund
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
