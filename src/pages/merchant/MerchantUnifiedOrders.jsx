import React, { useState } from 'react';
import {
  ArrowLeft, Package, Filter, Search, Eye, Clock, CheckCircle,
  XCircle, Truck, MapPin, Phone, User, CreditCard, ChevronRight,
  RefreshCw, MoreVertical, Printer, MessageSquare, AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantUnifiedOrders = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const stats = {
    total: 399,
    pending: 12,
    preparing: 8,
    ready: 5,
    completed: 354,
    cancelled: 20
  };

  const channels = [
    { id: 'all', name: 'All Channels', icon: '📦', count: 399 },
    { id: 'pos', name: 'Walk-in POS', icon: '🖥️', count: 156 },
    { id: 'rez', name: 'ReZ App', icon: '📱', count: 89 },
    { id: 'swiggy', name: 'Swiggy', icon: '🍊', count: 67 },
    { id: 'zomato', name: 'Zomato', icon: '🔴', count: 52 },
    { id: 'ondc', name: 'ONDC', icon: '🇮🇳', count: 25 },
    { id: 'booking', name: 'Reservations', icon: '📅', count: 10 }
  ];

  const orders = [
    {
      id: 'ORD-2024-0001',
      unifiedId: 'UNI-78901',
      channel: 'swiggy',
      channelOrderId: 'SW-ORD-7891234',
      customer: {
        name: 'Rahul Sharma',
        phone: '+91 98765 43210',
        address: '123 MG Road, Bangalore'
      },
      items: [
        { name: 'Butter Chicken', qty: 2, price: 350 },
        { name: 'Naan', qty: 4, price: 40 },
        { name: 'Dal Makhani', qty: 1, price: 220 }
      ],
      subtotal: 1080,
      discount: 100,
      taxes: 54,
      total: 1034,
      payment: { method: 'online', status: 'paid' },
      status: 'preparing',
      createdAt: '2 min ago',
      estimatedDelivery: '25 min',
      deliveryPartner: 'Swiggy Delivery'
    },
    {
      id: 'ORD-2024-0002',
      unifiedId: 'UNI-78902',
      channel: 'pos',
      channelOrderId: null,
      customer: {
        name: 'Walk-in Customer',
        phone: null,
        address: null
      },
      items: [
        { name: 'Margherita Pizza', qty: 1, price: 299 },
        { name: 'Garlic Bread', qty: 1, price: 149 },
        { name: 'Coke', qty: 2, price: 60 }
      ],
      subtotal: 568,
      discount: 0,
      taxes: 28,
      total: 596,
      payment: { method: 'upi', status: 'paid' },
      status: 'ready',
      createdAt: '5 min ago',
      estimatedDelivery: null,
      deliveryPartner: null
    },
    {
      id: 'ORD-2024-0003',
      unifiedId: 'UNI-78903',
      channel: 'zomato',
      channelOrderId: 'ZMT-ORD-456789',
      customer: {
        name: 'Priya Patel',
        phone: '+91 87654 32109',
        address: '456 Koramangala, Bangalore'
      },
      items: [
        { name: 'Paneer Tikka', qty: 1, price: 280 },
        { name: 'Biryani', qty: 1, price: 320 }
      ],
      subtotal: 600,
      discount: 60,
      taxes: 27,
      total: 567,
      payment: { method: 'online', status: 'paid' },
      status: 'pending',
      createdAt: '8 min ago',
      estimatedDelivery: '30 min',
      deliveryPartner: 'Zomato Delivery'
    },
    {
      id: 'ORD-2024-0004',
      unifiedId: 'UNI-78904',
      channel: 'rez',
      channelOrderId: 'REZ-ORD-123456',
      customer: {
        name: 'Amit Kumar',
        phone: '+91 76543 21098',
        address: '789 Indiranagar, Bangalore'
      },
      items: [
        { name: 'Thali Special', qty: 2, price: 450 },
        { name: 'Raita', qty: 2, price: 50 }
      ],
      subtotal: 1000,
      discount: 150,
      taxes: 43,
      total: 893,
      payment: { method: 'wallet', status: 'paid' },
      status: 'completed',
      createdAt: '15 min ago',
      estimatedDelivery: null,
      deliveryPartner: 'Self Pickup'
    },
    {
      id: 'ORD-2024-0005',
      unifiedId: 'UNI-78905',
      channel: 'ondc',
      channelOrderId: 'ONDC-IN-789456',
      customer: {
        name: 'Sneha Reddy',
        phone: '+91 65432 10987',
        address: '321 HSR Layout, Bangalore'
      },
      items: [
        { name: 'Combo Meal', qty: 3, price: 399 }
      ],
      subtotal: 1197,
      discount: 0,
      taxes: 60,
      total: 1257,
      payment: { method: 'cod', status: 'pending' },
      status: 'pending',
      createdAt: '10 min ago',
      estimatedDelivery: '35 min',
      deliveryPartner: 'ONDC Partner'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'preparing': return 'bg-blue-500/20 text-blue-400';
      case 'ready': return 'bg-purple-500/20 text-purple-400';
      case 'completed': return 'bg-green-500/20 text-green-400';
      case 'cancelled': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getChannelIcon = (channel) => {
    return channels.find(c => c.id === channel)?.icon || '📦';
  };

  const getChannelName = (channel) => {
    return channels.find(c => c.id === channel)?.name || 'Unknown';
  };

  const getPaymentColor = (status) => {
    return status === 'paid' ? 'text-green-400' : 'text-yellow-400';
  };

  const filteredOrders = activeFilter === 'all'
    ? orders
    : orders.filter(o => o.channel === activeFilter);

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Package size={24} className="mr-2" />
                Unified Orders
              </h1>
              <p className="text-blue-200 text-sm">Single schema for all channels</p>
            </div>
          </div>
          <RefreshCw size={20} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.total}</p>
            <p className="text-xs text-blue-200">Total</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-yellow-400">{stats.pending}</p>
            <p className="text-xs text-blue-200">Pending</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-blue-300">{stats.preparing}</p>
            <p className="text-xs text-blue-200">Preparing</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-400">{stats.completed}</p>
            <p className="text-xs text-blue-200">Completed</p>
          </div>
        </div>
      </div>

      {/* Channel Filter */}
      <div className="p-4">
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {channels.map(channel => (
            <button
              key={channel.id}
              onClick={() => setActiveFilter(channel.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium flex items-center ${
                activeFilter === channel.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400'
              }`}
            >
              <span className="mr-2">{channel.icon}</span>
              {channel.name} ({channel.count})
            </button>
          ))}
        </div>
      </div>

      {/* Schema Notice */}
      <div className="px-4 mb-4">
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3">
          <div className="flex items-start">
            <Package size={18} className="text-blue-400 mr-2 mt-0.5" />
            <div>
              <p className="text-blue-400 font-medium text-sm">One Order Model</p>
              <p className="text-gray-300 text-xs">
                All orders from POS, app, and aggregators normalize into single schema
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="px-4 space-y-3">
        {filteredOrders.map(order => (
          <div
            key={order.id}
            className="bg-gray-800 rounded-xl p-4"
            onClick={() => setSelectedOrder(order)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-xl mr-3">
                  {getChannelIcon(order.channel)}
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="text-white font-bold">{order.id}</p>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{order.customer.name}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">₹{order.total}</p>
                <p className={`text-xs ${getPaymentColor(order.payment.status)}`}>
                  {order.payment.status}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">
                  {getChannelName(order.channel)}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">{order.items.length} items</span>
              </div>
              <span className="text-gray-500">{order.createdAt}</span>
            </div>

            {order.estimatedDelivery && (
              <div className="mt-2 flex items-center text-sm text-blue-400">
                <Truck size={14} className="mr-1" />
                ETA: {order.estimatedDelivery}
              </div>
            )}

            {order.channelOrderId && (
              <p className="text-gray-500 text-xs mt-2 font-mono">
                Channel ID: {order.channelOrderId}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
          <div className="bg-gray-800 rounded-t-2xl w-full max-h-[85vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">{getChannelIcon(selectedOrder.channel)}</span>
                  <div>
                    <h3 className="text-white font-bold">{selectedOrder.id}</h3>
                    <p className="text-gray-400 text-sm">Unified ID: {selectedOrder.unifiedId}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedOrder(null)} className="text-gray-400">✕</button>
              </div>
            </div>

            <div className="p-4 space-y-4">
              {/* Status */}
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(selectedOrder.status)}`}>
                  {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                </span>
                <span className="text-gray-400 text-sm">{selectedOrder.createdAt}</span>
              </div>

              {/* Customer */}
              <div className="bg-gray-700/50 rounded-xl p-4">
                <h4 className="text-gray-400 text-sm mb-2">Customer</h4>
                <div className="flex items-center mb-2">
                  <User size={16} className="text-gray-400 mr-2" />
                  <span className="text-white">{selectedOrder.customer.name}</span>
                </div>
                {selectedOrder.customer.phone && (
                  <div className="flex items-center mb-2">
                    <Phone size={16} className="text-gray-400 mr-2" />
                    <span className="text-white">{selectedOrder.customer.phone}</span>
                  </div>
                )}
                {selectedOrder.customer.address && (
                  <div className="flex items-start">
                    <MapPin size={16} className="text-gray-400 mr-2 mt-0.5" />
                    <span className="text-white">{selectedOrder.customer.address}</span>
                  </div>
                )}
              </div>

              {/* Items */}
              <div className="bg-gray-700/50 rounded-xl p-4">
                <h4 className="text-gray-400 text-sm mb-3">Order Items</h4>
                {selectedOrder.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-600 last:border-0">
                    <div>
                      <p className="text-white">{item.name}</p>
                      <p className="text-gray-400 text-sm">x{item.qty}</p>
                    </div>
                    <p className="text-white">₹{item.qty * item.price}</p>
                  </div>
                ))}
              </div>

              {/* Payment */}
              <div className="bg-gray-700/50 rounded-xl p-4">
                <h4 className="text-gray-400 text-sm mb-3">Payment Details</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white">₹{selectedOrder.subtotal}</span>
                  </div>
                  {selectedOrder.discount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Discount</span>
                      <span className="text-green-400">-₹{selectedOrder.discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-400">Taxes</span>
                    <span className="text-white">₹{selectedOrder.taxes}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-600">
                    <span className="text-white font-bold">Total</span>
                    <span className="text-white font-bold">₹{selectedOrder.total}</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <CreditCard size={16} className="text-gray-400 mr-2" />
                    <span className="text-white capitalize">{selectedOrder.payment.method}</span>
                  </div>
                  <span className={getPaymentColor(selectedOrder.payment.status)}>
                    {selectedOrder.payment.status}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center">
                  <Printer size={18} className="mr-2" />
                  Print
                </button>
                <button className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold flex items-center justify-center">
                  <MessageSquare size={18} className="mr-2" />
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantUnifiedOrders;
