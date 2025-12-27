import { useState } from 'react';
import {
  ShoppingBag, Search, Filter, Clock, CheckCircle, XCircle, RefreshCw,
  Package, Truck, AlertCircle, DollarSign, User, MapPin, Phone, Mail,
  Calendar, Tag, MessageSquare, ChevronDown, ChevronUp, Eye, Printer,
  Download, BarChart3, TrendingUp, Timer, ThumbsUp, ThumbsDown,
  RotateCcw, CreditCard, Wallet, ArrowLeft, Ban, Star
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantOrders() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showReturnModal, setShowReturnModal] = useState(false);
  const [showRefundModal, setShowRefundModal] = useState(false);
  const [expandedOrders, setExpandedOrders] = useState([]);
  const [rejectReason, setRejectReason] = useState('');
  const [preparationTime, setPreparationTime] = useState('30');
  const [refundAmount, setRefundAmount] = useState('');
  const [refundMethod, setRefundMethod] = useState('wallet');

  const [orders, setOrders] = useState([
    {
      id: 'ORD-2024-001',
      customer: {
        name: 'John Doe',
        phone: '+91 98765 43210',
        email: 'john@example.com',
        avatar: 'JD'
      },
      items: [
        { id: 1, name: 'Premium Pizza Margherita', quantity: 2, price: 449, total: 898 },
        { id: 2, name: 'Espresso Coffee', quantity: 1, price: 150, total: 150 }
      ],
      subtotal: 1048,
      discount: 105,
      deliveryFee: 50,
      tax: 94,
      total: 1087,
      payment: {
        method: 'UPI',
        status: 'paid',
        transactionId: 'TXN123456789'
      },
      delivery: {
        type: 'delivery',
        address: '123 MG Road, Bangalore, Karnataka - 560001',
        instructions: 'Ring doorbell twice. Dont call.'
      },
      status: 'new',
      offer: '10% OFF',
      coinsEarned: 100,
      createdAt: '2024-01-27T10:30:00',
      estimatedTime: null
    },
    {
      id: 'ORD-2024-002',
      customer: {
        name: 'Jane Smith',
        phone: '+91 98765 43211',
        email: 'jane@example.com',
        avatar: 'JS'
      },
      items: [
        { id: 1, name: 'Chicken Burger Deluxe', quantity: 1, price: 249, total: 249 },
        { id: 2, name: 'Chocolate Lava Cake', quantity: 2, price: 149, total: 298 },
        { id: 3, name: 'Mango Smoothie', quantity: 1, price: 149, total: 149 }
      ],
      subtotal: 696,
      discount: 0,
      deliveryFee: 40,
      tax: 66,
      total: 802,
      payment: {
        method: 'Card',
        status: 'paid',
        transactionId: 'TXN123456790'
      },
      delivery: {
        type: 'pickup',
        address: 'Store Pickup',
        instructions: 'Will collect at 2 PM'
      },
      status: 'accepted',
      offer: null,
      coinsEarned: 80,
      createdAt: '2024-01-27T09:15:00',
      estimatedTime: '30 mins',
      acceptedAt: '2024-01-27T09:17:00'
    },
    {
      id: 'ORD-2024-003',
      customer: {
        name: 'Mike Johnson',
        phone: '+91 98765 43212',
        email: 'mike@example.com',
        avatar: 'MJ'
      },
      items: [
        { id: 1, name: 'Caesar Salad Bowl', quantity: 1, price: 399, total: 399 }
      ],
      subtotal: 399,
      discount: 160,
      deliveryFee: 30,
      tax: 36,
      total: 305,
      payment: {
        method: 'Wallet',
        status: 'paid',
        transactionId: 'TXN123456791'
      },
      delivery: {
        type: 'delivery',
        address: '456 Brigade Road, Bangalore, Karnataka - 560025',
        instructions: 'Leave at door'
      },
      status: 'ready',
      offer: '40% OFF Lunch',
      coinsEarned: 60,
      createdAt: '2024-01-27T08:45:00',
      estimatedTime: '20 mins',
      acceptedAt: '2024-01-27T08:47:00',
      readyAt: '2024-01-27T09:15:00'
    },
    {
      id: 'ORD-2024-004',
      customer: {
        name: 'Sarah Williams',
        phone: '+91 98765 43213',
        email: 'sarah@example.com',
        avatar: 'SW'
      },
      items: [
        { id: 1, name: 'Premium Pizza Margherita', quantity: 1, price: 449, total: 449 },
        { id: 2, name: 'Espresso Coffee', quantity: 2, price: 150, total: 300 }
      ],
      subtotal: 749,
      discount: 0,
      deliveryFee: 50,
      tax: 72,
      total: 871,
      payment: {
        method: 'Cash',
        status: 'pending',
        transactionId: null
      },
      delivery: {
        type: 'delivery',
        address: '789 Indiranagar, Bangalore, Karnataka - 560038',
        instructions: 'Call on arrival'
      },
      status: 'completed',
      offer: null,
      coinsEarned: 87,
      createdAt: '2024-01-26T18:30:00',
      estimatedTime: '25 mins',
      acceptedAt: '2024-01-26T18:32:00',
      readyAt: '2024-01-26T18:55:00',
      completedAt: '2024-01-26T19:20:00',
      customerRating: 5
    },
    {
      id: 'ORD-2024-005',
      customer: {
        name: 'David Brown',
        phone: '+91 98765 43214',
        email: 'david@example.com',
        avatar: 'DB'
      },
      items: [
        { id: 1, name: 'Chicken Burger Deluxe', quantity: 3, price: 249, total: 747 }
      ],
      subtotal: 747,
      discount: 75,
      deliveryFee: 60,
      tax: 73,
      total: 805,
      payment: {
        method: 'UPI',
        status: 'paid',
        transactionId: 'TXN123456792'
      },
      delivery: {
        type: 'delivery',
        address: '321 Koramangala, Bangalore, Karnataka - 560095',
        instructions: 'Apartment B-404'
      },
      status: 'rejected',
      offer: '10% OFF',
      coinsEarned: 0,
      createdAt: '2024-01-27T07:00:00',
      rejectedAt: '2024-01-27T07:02:00',
      rejectionReason: 'Item out of stock'
    },
    {
      id: 'ORD-2024-006',
      customer: {
        name: 'Emily Davis',
        phone: '+91 98765 43215',
        email: 'emily@example.com',
        avatar: 'ED'
      },
      items: [
        { id: 1, name: 'Premium Pizza Margherita', quantity: 2, price: 449, total: 898 },
        { id: 2, name: 'Chocolate Lava Cake', quantity: 2, price: 149, total: 298 }
      ],
      subtotal: 1196,
      discount: 240,
      deliveryFee: 50,
      tax: 101,
      total: 1107,
      payment: {
        method: 'Card',
        status: 'paid',
        transactionId: 'TXN123456793'
      },
      delivery: {
        type: 'delivery',
        address: '555 Whitefield, Bangalore, Karnataka - 560066',
        instructions: 'Gate code: 1234'
      },
      status: 'return_requested',
      offer: '20% OFF',
      coinsEarned: 110,
      createdAt: '2024-01-26T19:00:00',
      completedAt: '2024-01-26T20:15:00',
      returnRequest: {
        reason: 'Food quality issue',
        description: 'Pizza was cold and not fresh',
        images: ['return1.jpg', 'return2.jpg'],
        requestedAt: '2024-01-26T20:45:00',
        refundAmount: 898
      }
    },
    {
      id: 'ORD-2024-007',
      customer: {
        name: 'Robert Taylor',
        phone: '+91 98765 43216',
        email: 'robert@example.com',
        avatar: 'RT'
      },
      items: [
        { id: 1, name: 'Caesar Salad Bowl', quantity: 1, price: 399, total: 399 }
      ],
      subtotal: 399,
      discount: 0,
      deliveryFee: 40,
      tax: 44,
      total: 483,
      payment: {
        method: 'Wallet',
        status: 'paid',
        transactionId: 'TXN123456794'
      },
      delivery: {
        type: 'pickup',
        address: 'Store Pickup',
        instructions: null
      },
      status: 'refund_requested',
      offer: null,
      coinsEarned: 48,
      createdAt: '2024-01-26T17:30:00',
      completedAt: '2024-01-26T18:00:00',
      refundRequest: {
        reason: 'Wrong item received',
        description: 'Ordered salad but received soup',
        requestedAt: '2024-01-26T18:30:00',
        refundAmount: 483,
        refundMethod: 'wallet'
      }
    }
  ]);

  const statusConfig = {
    new: {
      color: 'blue',
      icon: Clock,
      label: 'New Order',
      description: 'Requires action'
    },
    accepted: {
      color: 'indigo',
      icon: CheckCircle,
      label: 'Accepted',
      description: 'In preparation'
    },
    ready: {
      color: 'purple',
      icon: Package,
      label: 'Ready',
      description: 'Ready for pickup/delivery'
    },
    completed: {
      color: 'green',
      icon: CheckCircle,
      label: 'Completed',
      description: 'Order delivered'
    },
    rejected: {
      color: 'red',
      icon: XCircle,
      label: 'Rejected',
      description: 'Order cancelled'
    },
    return_requested: {
      color: 'orange',
      icon: RotateCcw,
      label: 'Return Requested',
      description: 'Customer requested return'
    },
    refund_requested: {
      color: 'yellow',
      icon: DollarSign,
      label: 'Refund Requested',
      description: 'Customer requested refund'
    }
  };

  const rejectReasons = [
    'Item out of stock',
    'Too busy to fulfill order',
    'Delivery address out of range',
    'Payment issue',
    'Customer request',
    'Other'
  ];

  const filteredOrders = orders.filter(order => {
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.customer.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleAcceptOrder = (orderId) => {
    setOrders(orders.map(order =>
      order.id === orderId
        ? {
            ...order,
            status: 'accepted',
            estimatedTime: preparationTime + ' mins',
            acceptedAt: new Date().toISOString()
          }
        : order
    ));
  };

  const handleRejectOrder = () => {
    if (selectedOrder && rejectReason) {
      setOrders(orders.map(order =>
        order.id === selectedOrder.id
          ? {
              ...order,
              status: 'rejected',
              rejectedAt: new Date().toISOString(),
              rejectionReason: rejectReason
            }
          : order
      ));
      setShowRejectModal(false);
      setRejectReason('');
      setSelectedOrder(null);
    }
  };

  const handleMarkReady = (orderId) => {
    setOrders(orders.map(order =>
      order.id === orderId
        ? {
            ...order,
            status: 'ready',
            readyAt: new Date().toISOString()
          }
        : order
    ));
  };

  const handleMarkCompleted = (orderId) => {
    setOrders(orders.map(order =>
      order.id === orderId
        ? {
            ...order,
            status: 'completed',
            completedAt: new Date().toISOString()
          }
        : order
    ));
  };

  const handleProcessReturn = (approve) => {
    if (selectedOrder) {
      setOrders(orders.map(order =>
        order.id === selectedOrder.id
          ? {
              ...order,
              status: approve ? 'refund_requested' : 'completed',
              returnRequest: {
                ...order.returnRequest,
                status: approve ? 'approved' : 'rejected',
                processedAt: new Date().toISOString()
              }
            }
          : order
      ));
      setShowReturnModal(false);
      setSelectedOrder(null);
    }
  };

  const handleProcessRefund = () => {
    if (selectedOrder && refundAmount && refundMethod) {
      setOrders(orders.map(order =>
        order.id === selectedOrder.id
          ? {
              ...order,
              status: 'completed',
              refundRequest: {
                ...order.refundRequest,
                status: 'processed',
                processedAmount: parseFloat(refundAmount),
                refundMethod: refundMethod,
                processedAt: new Date().toISOString()
              }
            }
          : order
      ));
      setShowRefundModal(false);
      setRefundAmount('');
      setRefundMethod('wallet');
      setSelectedOrder(null);
    }
  };

  const toggleOrderExpand = (orderId) => {
    if (expandedOrders.includes(orderId)) {
      setExpandedOrders(expandedOrders.filter(id => id !== orderId));
    } else {
      setExpandedOrders([...expandedOrders, orderId]);
    }
  };

  const getOrderStats = () => {
    return {
      new: orders.filter(o => o.status === 'new').length,
      accepted: orders.filter(o => o.status === 'accepted').length,
      ready: orders.filter(o => o.status === 'ready').length,
      completed: orders.filter(o => o.status === 'completed').length,
      returns: orders.filter(o => o.status === 'return_requested').length,
      refunds: orders.filter(o => o.status === 'refund_requested').length,
      acceptanceRate: ((orders.filter(o => o.status !== 'rejected').length / orders.length) * 100).toFixed(1),
      avgPreparationTime: '28',
      returnRate: ((orders.filter(o => o.status === 'return_requested' || o.returnRequest).length / orders.length) * 100).toFixed(1),
      refundRate: ((orders.filter(o => o.status === 'refund_requested' || o.refundRequest).length / orders.length) * 100).toFixed(1),
      satisfactionScore: '4.6'
    };
  };

  const stats = getOrderStats();

  const renderRejectModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Reject Order</h3>
          <p className="text-sm text-gray-600 mt-1">Order ID: {selectedOrder?.id}</p>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rejection Reason *</label>
            <select
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select a reason</option>
              {rejectReasons.map((reason) => (
                <option key={reason} value={reason}>{reason}</option>
              ))}
            </select>
          </div>
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700">
              <strong>Note:</strong> Customer will be notified immediately and refund will be processed automatically if payment was made.
            </p>
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={() => {
              setShowRejectModal(false);
              setRejectReason('');
              setSelectedOrder(null);
            }}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleRejectOrder}
            disabled={!rejectReason}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Reject Order
          </button>
        </div>
      </div>
    </div>
  );

  const renderReturnModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Return Request</h3>
          <p className="text-sm text-gray-600 mt-1">Order ID: {selectedOrder?.id}</p>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Customer Information</h4>
            <div className="p-4 bg-gray-50 rounded-lg space-y-2">
              <p className="text-sm"><strong>Name:</strong> {selectedOrder?.customer.name}</p>
              <p className="text-sm"><strong>Phone:</strong> {selectedOrder?.customer.phone}</p>
              <p className="text-sm"><strong>Email:</strong> {selectedOrder?.customer.email}</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">Return Details</h4>
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-700">Reason:</p>
                <p className="text-sm text-gray-900">{selectedOrder?.returnRequest?.reason}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Description:</p>
                <p className="text-sm text-gray-900">{selectedOrder?.returnRequest?.description}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Refund Amount:</p>
                <p className="text-lg font-bold text-orange-600">₹{selectedOrder?.returnRequest?.refundAmount}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Requested At:</p>
                <p className="text-sm text-gray-900">
                  {selectedOrder?.returnRequest?.requestedAt ? new Date(selectedOrder.returnRequest.requestedAt).toLocaleString() : 'N/A'}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">Order Items</h4>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {selectedOrder?.items.map((item) => (
                <div key={item.id} className="p-3 border-b border-gray-200 last:border-0 flex justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity} × ₹{item.price}</p>
                  </div>
                  <p className="font-medium text-gray-900">₹{item.total}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-700">
              <strong>Action Required:</strong> Review the return request and approve or reject based on your return policy.
              Approved returns will trigger an automatic refund.
            </p>
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={() => {
              setShowReturnModal(false);
              setSelectedOrder(null);
            }}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => handleProcessReturn(false)}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            <ThumbsDown className="w-4 h-4" />
            Reject Return
          </button>
          <button
            onClick={() => handleProcessReturn(true)}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            <ThumbsUp className="w-4 h-4" />
            Approve Return
          </button>
        </div>
      </div>
    </div>
  );

  const renderRefundModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Process Refund</h3>
          <p className="text-sm text-gray-600 mt-1">Order ID: {selectedOrder?.id}</p>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Refund Request Details</h4>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-700">Reason:</p>
                <p className="text-sm text-gray-900">{selectedOrder?.refundRequest?.reason}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Description:</p>
                <p className="text-sm text-gray-900">{selectedOrder?.refundRequest?.description}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Requested Amount:</p>
                <p className="text-lg font-bold text-yellow-600">₹{selectedOrder?.refundRequest?.refundAmount}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">Order Summary</h4>
            <div className="p-4 bg-gray-50 rounded-lg space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal:</span>
                <span className="text-gray-900">₹{selectedOrder?.subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Discount:</span>
                <span className="text-red-600">-₹{selectedOrder?.discount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Delivery Fee:</span>
                <span className="text-gray-900">₹{selectedOrder?.deliveryFee}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax:</span>
                <span className="text-gray-900">₹{selectedOrder?.tax}</span>
              </div>
              <div className="flex justify-between font-medium text-base pt-2 border-t border-gray-300">
                <span className="text-gray-900">Total Paid:</span>
                <span className="text-gray-900">₹{selectedOrder?.total}</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Refund Amount (₹) *</label>
            <input
              type="number"
              value={refundAmount}
              onChange={(e) => setRefundAmount(e.target.value)}
              placeholder={`Max: ₹${selectedOrder?.total || 0}`}
              max={selectedOrder?.total}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setRefundAmount(String(selectedOrder?.total || 0))}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200"
              >
                Full Refund
              </button>
              <button
                onClick={() => setRefundAmount(String((selectedOrder?.total || 0) / 2))}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200"
              >
                50% Refund
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Refund Method *</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setRefundMethod('wallet')}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  refundMethod === 'wallet'
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Wallet className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium text-gray-900">ReZ Wallet</span>
                </div>
                <p className="text-xs text-gray-600">Instant refund to customer wallet</p>
              </button>
              <button
                onClick={() => setRefundMethod('original')}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  refundMethod === 'original'
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <CreditCard className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium text-gray-900">Original Method</span>
                </div>
                <p className="text-xs text-gray-600">Refund to {selectedOrder?.payment.method}</p>
              </button>
            </div>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Processing Time:</strong> Wallet refunds are instant. Refunds to original payment method may take 5-7 business days.
            </p>
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={() => {
              setShowRefundModal(false);
              setRefundAmount('');
              setRefundMethod('wallet');
              setSelectedOrder(null);
            }}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleProcessRefund}
            disabled={!refundAmount || parseFloat(refundAmount) <= 0}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <DollarSign className="w-4 h-4" />
            Process Refund
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Order Management</h1>
              <p className="text-gray-600 mt-1">Accept, reject, and manage customer orders</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                <Download className="w-5 h-5" />
                Export
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <BarChart3 className="w-5 h-5" />
                Analytics
              </button>
            </div>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full">
                {stats.new}
              </span>
            </div>
            <p className="text-gray-600 text-sm font-medium">New Orders</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">Requires Action</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm font-medium">Acceptance Rate</p>
            <p className="text-2xl font-bold text-green-600 mt-1">{stats.acceptanceRate}%</p>
            <p className="text-xs text-gray-500 mt-1">Industry avg: 85%</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Timer className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm font-medium">Avg Prep Time</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stats.avgPreparationTime} mins</p>
            <p className="text-xs text-gray-500 mt-1">Target: 30 mins</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Star className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm font-medium">Customer Satisfaction</p>
            <p className="text-2xl font-bold text-green-600 mt-1">{stats.satisfactionScore}/5.0</p>
            <p className="text-xs text-gray-500 mt-1">Based on 156 ratings</p>
          </div>
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">In Progress</p>
                <p className="text-xl font-bold text-gray-900">{stats.accepted}</p>
              </div>
              <Package className="w-8 h-8 text-indigo-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Ready</p>
                <p className="text-xl font-bold text-gray-900">{stats.ready}</p>
              </div>
              <Truck className="w-8 h-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Returns</p>
                <p className="text-xl font-bold text-orange-600">{stats.returns}</p>
              </div>
              <RotateCcw className="w-8 h-8 text-orange-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Refunds</p>
                <p className="text-xl font-bold text-yellow-600">{stats.refunds}</p>
              </div>
              <DollarSign className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by Order ID or Customer Name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="all">All Orders</option>
                <option value="new">New Orders</option>
                <option value="accepted">Accepted</option>
                <option value="ready">Ready</option>
                <option value="completed">Completed</option>
                <option value="rejected">Rejected</option>
                <option value="return_requested">Return Requests</option>
                <option value="refund_requested">Refund Requests</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order) => {
            const statusInfo = statusConfig[order.status];
            const StatusIcon = statusInfo.icon;
            const isExpanded = expandedOrders.includes(order.id);

            return (
              <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-12 h-12 rounded-full bg-${statusInfo.color}-100 flex items-center justify-center flex-shrink-0`}>
                        <span className="text-lg font-bold text-gray-900">
                          {order.customer.avatar}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{order.id}</h3>
                          <span className={`flex items-center gap-1 px-3 py-1 bg-${statusInfo.color}-100 text-${statusInfo.color}-700 text-sm font-medium rounded-full`}>
                            <StatusIcon className="w-4 h-4" />
                            {statusInfo.label}
                          </span>
                          {order.delivery.type === 'pickup' && (
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                              Pickup
                            </span>
                          )}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Customer</p>
                            <p className="font-medium text-gray-900">{order.customer.name}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Order Time</p>
                            <p className="font-medium text-gray-900">
                              {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-600">Items</p>
                            <p className="font-medium text-gray-900">{order.items.length} items</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Total</p>
                            <p className="font-medium text-green-600">₹{order.total}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleOrderExpand(order.id)}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                      {/* Items */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Order Items</h4>
                        <div className="space-y-2">
                          {order.items.map((item) => (
                            <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <div>
                                <p className="font-medium text-gray-900">{item.name}</p>
                                <p className="text-sm text-gray-600">Qty: {item.quantity} × ₹{item.price}</p>
                              </div>
                              <p className="font-medium text-gray-900">₹{item.total}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Customer & Delivery Info */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Customer Details</h4>
                          <div className="p-3 bg-gray-50 rounded-lg space-y-2 text-sm">
                            <p className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-gray-600" />
                              {order.customer.phone}
                            </p>
                            <p className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-gray-600" />
                              {order.customer.email}
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Delivery Details</h4>
                          <div className="p-3 bg-gray-50 rounded-lg space-y-2 text-sm">
                            <p className="flex items-start gap-2">
                              <MapPin className="w-4 h-4 text-gray-600 mt-0.5" />
                              <span>{order.delivery.address}</span>
                            </p>
                            {order.delivery.instructions && (
                              <p className="flex items-start gap-2">
                                <MessageSquare className="w-4 h-4 text-gray-600 mt-0.5" />
                                <span className="italic">{order.delivery.instructions}</span>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Payment Info */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Payment Summary</h4>
                        <div className="p-4 bg-gray-50 rounded-lg space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Subtotal:</span>
                            <span className="text-gray-900">₹{order.subtotal}</span>
                          </div>
                          {order.discount > 0 && (
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Discount {order.offer && `(${order.offer})`}:</span>
                              <span className="text-red-600">-₹{order.discount}</span>
                            </div>
                          )}
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Delivery Fee:</span>
                            <span className="text-gray-900">₹{order.deliveryFee}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Tax:</span>
                            <span className="text-gray-900">₹{order.tax}</span>
                          </div>
                          <div className="flex justify-between font-medium text-base pt-2 border-t border-gray-300">
                            <span className="text-gray-900">Total:</span>
                            <span className="text-green-600">₹{order.total}</span>
                          </div>
                          <div className="flex justify-between text-sm pt-2 border-t border-gray-300">
                            <span className="text-gray-600">Payment Method:</span>
                            <span className="text-gray-900">{order.payment.method}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Payment Status:</span>
                            <span className={`font-medium ${order.payment.status === 'paid' ? 'text-green-600' : 'text-yellow-600'}`}>
                              {order.payment.status === 'paid' ? 'Paid' : 'Pending'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Rejection Reason */}
                      {order.status === 'rejected' && order.rejectionReason && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-sm text-red-700">
                            <strong>Rejection Reason:</strong> {order.rejectionReason}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    {order.status === 'new' && (
                      <div className="flex gap-3">
                        <div className="flex-1">
                          <label className="block text-sm text-gray-600 mb-1">Prep Time (mins)</label>
                          <input
                            type="number"
                            value={preparationTime}
                            onChange={(e) => setPreparationTime(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            placeholder="30"
                          />
                        </div>
                        <div className="flex items-end gap-2">
                          <button
                            onClick={() => handleAcceptOrder(order.id)}
                            className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                          >
                            <CheckCircle className="w-4 h-4" />
                            Accept Order
                          </button>
                          <button
                            onClick={() => {
                              setSelectedOrder(order);
                              setShowRejectModal(true);
                            }}
                            className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                          >
                            <XCircle className="w-4 h-4" />
                            Reject
                          </button>
                        </div>
                      </div>
                    )}

                    {order.status === 'accepted' && (
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">
                          Estimated completion: {order.estimatedTime}
                        </p>
                        <button
                          onClick={() => handleMarkReady(order.id)}
                          className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                        >
                          <Package className="w-4 h-4" />
                          Mark as Ready
                        </button>
                      </div>
                    )}

                    {order.status === 'ready' && (
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">
                          Order ready for {order.delivery.type === 'pickup' ? 'pickup' : 'delivery'}
                        </p>
                        <button
                          onClick={() => handleMarkCompleted(order.id)}
                          className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Mark as Completed
                        </button>
                      </div>
                    )}

                    {order.status === 'completed' && (
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <p className="text-sm text-green-600 font-medium">Order Completed</p>
                          {order.customerRating && (
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                              <span className="text-sm font-medium">{order.customerRating}/5</span>
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Printer className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {order.status === 'return_requested' && (
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-orange-600 font-medium">Return request pending review</p>
                        <button
                          onClick={() => {
                            setSelectedOrder(order);
                            setShowReturnModal(true);
                          }}
                          className="flex items-center gap-2 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                        >
                          <RotateCcw className="w-4 h-4" />
                          Review Return
                        </button>
                      </div>
                    )}

                    {order.status === 'refund_requested' && (
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-yellow-600 font-medium">Refund request pending</p>
                        <button
                          onClick={() => {
                            setSelectedOrder(order);
                            setRefundAmount(String(order.total));
                            setShowRefundModal(true);
                          }}
                          className="flex items-center gap-2 px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                        >
                          <DollarSign className="w-4 h-4" />
                          Process Refund
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredOrders.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-600">
              {searchQuery || filterStatus !== 'all'
                ? 'Try adjusting your filters'
                : 'Orders will appear here once customers place them'}
            </p>
          </div>
        )}
      </div>

      {/* Modals */}
      {showRejectModal && renderRejectModal()}
      {showReturnModal && renderReturnModal()}
      {showRefundModal && renderRefundModal()}
    </div>
  );
}
