import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, ChevronRight, Clock, CheckCircle, XCircle, Truck, Calendar, MapPin, ShoppingBag } from 'lucide-react';

function OrderHistory() {
  const [activeTab, setActiveTab] = useState('all');

  const orders = [
    {
      id: 'ORD001234',
      date: '2024-01-15',
      items: [
        { name: 'iPhone 15 Pro', image: 'https://images.unsplash.com/photo-1696446702108-bd9087d3d4d6?w=400', qty: 1 }
      ],
      total: 124999,
      status: 'delivered',
      cashback: 6249,
      coinsEarned: 1250,
      store: 'Apple Store',
      deliveryDate: '2024-01-18'
    },
    {
      id: 'ORD001233',
      date: '2024-01-12',
      items: [
        { name: 'Nike Air Max', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', qty: 1 },
        { name: 'Adidas T-Shirt', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400', qty: 2 }
      ],
      total: 8499,
      status: 'shipped',
      cashback: 425,
      coinsEarned: 85,
      store: 'SportZone',
      expectedDelivery: '2024-01-16'
    },
    {
      id: 'SRV000456',
      date: '2024-01-10',
      items: [
        { name: 'Hair Spa & Treatment', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400', qty: 1 }
      ],
      total: 2500,
      status: 'completed',
      cashback: 625,
      coinsEarned: 125,
      store: 'Glowzy Salon',
      serviceDate: '2024-01-10 at 3:00 PM'
    },
    {
      id: 'ORD001232',
      date: '2024-01-08',
      items: [
        { name: 'Samsung Galaxy Buds', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400', qty: 1 }
      ],
      total: 12999,
      status: 'processing',
      cashback: 650,
      coinsEarned: 130,
      store: 'Samsung Shop'
    },
    {
      id: 'ORD001231',
      date: '2024-01-05',
      items: [
        { name: 'Zara Denim Jacket', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', qty: 1 }
      ],
      total: 4999,
      status: 'cancelled',
      cashback: 0,
      coinsEarned: 0,
      store: 'Zara Fashion'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'delivered':
      case 'completed':
        return 'text-emerald-500 bg-emerald-500/20 border-emerald-500/30';
      case 'shipped':
        return 'text-blue-500 bg-blue-500/20 border-blue-500/30';
      case 'processing':
        return 'text-amber-500 bg-amber-500/20 border-amber-500/30';
      case 'cancelled':
        return 'text-red-500 bg-red-500/20 border-red-500/30';
      default:
        return 'text-gray-500 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'delivered':
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'shipped':
        return <Truck className="w-4 h-4" />;
      case 'processing':
        return <Clock className="w-4 h-4" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  const filteredOrders = activeTab === 'all'
    ? orders
    : orders.filter(order => order.status === activeTab);

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4">
          <h1 className="text-h2 font-poppins text-rez-navy dark:text-white">My Orders</h1>
          <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-1">Track your purchases and services</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 px-4 pb-3 overflow-x-auto hide-scrollbar">
          {[
            { id: 'all', label: 'All', icon: ShoppingBag },
            { id: 'delivered', label: 'Delivered', icon: CheckCircle },
            { id: 'shipped', label: 'Shipped', icon: Truck },
            { id: 'processing', label: 'Processing', icon: Clock },
            { id: 'cancelled', label: 'Cancelled', icon: XCircle }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-rez-green-500 text-white'
                  : 'bg-rez-gray-100 dark:bg-dark-700 text-rez-gray-700 dark:text-gray-300'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Orders List */}
      <div className="px-4 py-4 space-y-3">
        {filteredOrders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="w-16 h-16 mx-auto text-rez-gray-300 dark:text-gray-600 mb-4" />
            <p className="text-body text-rez-gray-600 dark:text-gray-400">No orders found</p>
          </div>
        ) : (
          filteredOrders.map((order) => (
            <Link
              key={order.id}
              to={`/order/${order.id}`}
              className="block p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-rez-green-500 dark:hover:border-emerald-500 transition-all active:scale-98"
            >
              {/* Order Header */}
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-semibold text-rez-navy dark:text-white">Order #{order.id}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="w-3 h-3 text-rez-gray-500 dark:text-gray-400" />
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                      {new Date(order.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </p>
                  </div>
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  <span className="text-xs font-semibold capitalize">{order.status}</span>
                </div>
              </div>

              {/* Items */}
              <div className="flex gap-3 mb-3 overflow-x-auto hide-scrollbar">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex-shrink-0 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                    {item.qty > 1 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rez-green-500 text-white text-xs font-bold flex items-center justify-center">
                        {item.qty}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Store & Amount */}
              <div className="flex items-center justify-between py-3 border-t border-rez-gray-100 dark:border-dark-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rez-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-rez-gray-700 dark:text-gray-300">{order.store}</span>
                </div>
                <span className="text-sm font-bold text-rez-navy dark:text-white">₹{order.total.toLocaleString()}</span>
              </div>

              {/* Delivery/Service Info */}
              {order.status === 'shipped' && order.expectedDelivery && (
                <div className="mt-3 p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <p className="text-xs text-blue-400">
                    Expected delivery: {new Date(order.expectedDelivery).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </p>
                </div>
              )}

              {order.status === 'delivered' && order.deliveryDate && (
                <div className="mt-3 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <p className="text-xs text-emerald-400">
                    Delivered on {new Date(order.deliveryDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </p>
                </div>
              )}

              {order.status === 'completed' && order.serviceDate && (
                <div className="mt-3 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <p className="text-xs text-emerald-400">
                    Completed: {order.serviceDate}
                  </p>
                </div>
              )}

              {/* Rewards */}
              {order.cashback > 0 && (
                <div className="mt-3 flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-emerald-500/10 to-amber-500/10 border border-emerald-500/20">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-emerald-400">💰</span>
                      <span className="text-xs font-semibold text-emerald-400">₹{order.cashback} cashback</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-amber-400">🪙</span>
                      <span className="text-xs font-semibold text-amber-400">{order.coinsEarned} coins</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-rez-gray-400 dark:text-gray-500" />
                </div>
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default OrderHistory;
