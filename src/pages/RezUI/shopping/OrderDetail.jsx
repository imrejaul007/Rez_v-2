import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package, MapPin, Clock, CheckCircle, Truck, Calendar, Phone, Mail, Download, Share2, MessageCircle } from 'lucide-react';

function OrderDetail() {
  const { orderId } = useParams();

  // Mock order data - in real app, fetch from API
  const order = {
    id: 'ORD001234',
    date: '2024-01-15T10:30:00',
    status: 'delivered',
    items: [
      {
        id: 1,
        name: 'iPhone 15 Pro 256GB - Natural Titanium',
        image: 'https://images.unsplash.com/photo-1696446702108-bd9087d3d4d6?w=400',
        qty: 1,
        price: 124999,
        cashback: 6249,
        coins: 1250
      }
    ],
    subtotal: 124999,
    tax: 0,
    shippingCost: 0,
    total: 124999,
    cashback: 6249,
    coinsEarned: 1250,
    paymentMethod: 'UPI - Google Pay',
    store: {
      name: 'Apple Store MG Road',
      address: '123 MG Road, Bangalore, Karnataka 560001',
      phone: '+91 80 1234 5678',
      email: 'support@applestore.com'
    },
    shipping: {
      address: 'Rajesh Kumar\n45 Indiranagar Main Road\nBangalore, Karnataka 560038\n+91 98765 43210',
      method: 'Express Delivery',
      trackingId: 'TRACK1234567890'
    },
    timeline: [
      { status: 'Delivered', date: '2024-01-18T14:30:00', done: true, icon: CheckCircle },
      { status: 'Out for Delivery', date: '2024-01-18T09:00:00', done: true, icon: Truck },
      { status: 'In Transit', date: '2024-01-17T12:00:00', done: true, icon: Package },
      { status: 'Shipped', date: '2024-01-16T10:00:00', done: true, icon: Truck },
      { status: 'Order Confirmed', date: '2024-01-15T10:30:00', done: true, icon: CheckCircle }
    ]
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4 flex items-center gap-3">
          <Link to="/orders" className="p-2 -ml-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700 active:scale-95 transition-all">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </Link>
          <div className="flex-1">
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">Order #{order.id}</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">
              Placed on {new Date(order.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
          <button className="p-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700 active:scale-95 transition-all">
            <Share2 className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Status Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-semibold text-emerald-400">Order Delivered</h2>
              <p className="text-xs text-emerald-300">
                on {new Date(order.timeline[0].date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} at{' '}
                {new Date(order.timeline[0].date).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
          <p className="text-xs text-emerald-200">Your product was delivered successfully. Hope you enjoy it! 🎉</p>
        </div>

        {/* Order Timeline */}
        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <h2 className="text-sm font-semibold text-rez-navy dark:text-white mb-4">Order Timeline</h2>
          <div className="space-y-4">
            {order.timeline.map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    item.done ? 'bg-emerald-500' : 'bg-rez-gray-200 dark:bg-dark-700'
                  }`}>
                    <item.icon className={`w-4 h-4 ${item.done ? 'text-white' : 'text-rez-gray-500 dark:text-gray-400'}`} />
                  </div>
                  {idx < order.timeline.length - 1 && (
                    <div className={`w-0.5 h-8 ${item.done ? 'bg-emerald-500' : 'bg-rez-gray-200 dark:bg-dark-700'}`} />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <p className={`text-sm font-medium ${item.done ? 'text-rez-navy dark:text-white' : 'text-rez-gray-500 dark:text-gray-400'}`}>
                    {item.status}
                  </p>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">
                    {new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })},{' '}
                    {new Date(item.date).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Items */}
        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <h2 className="text-sm font-semibold text-rez-navy dark:text-white mb-4">Items ({order.items.length})</h2>
          <div className="space-y-3">
            {order.items.map((item) => (
              <div key={item.id} className="flex gap-3">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">{item.name}</h3>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">Qty: {item.qty}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-rez-navy dark:text-white">₹{item.price.toLocaleString()}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-emerald-500">💰 ₹{item.cashback}</span>
                      <span className="text-xs text-amber-500">🪙 {item.coins}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Address */}
        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-rez-green-500" />
            <h2 className="text-sm font-semibold text-rez-navy dark:text-white">Shipping Address</h2>
          </div>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 whitespace-pre-line">{order.shipping.address}</p>
          {order.shipping.trackingId && (
            <div className="mt-3 p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <p className="text-xs text-blue-400">Tracking ID: {order.shipping.trackingId}</p>
            </div>
          )}
        </div>

        {/* Store Info */}
        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <div className="flex items-center gap-2 mb-3">
            <Package className="w-4 h-4 text-rez-green-500" />
            <h2 className="text-sm font-semibold text-rez-navy dark:text-white">Store Information</h2>
          </div>
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-2">{order.store.name}</h3>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-3">{order.store.address}</p>
          <div className="flex gap-2">
            <a href={`tel:${order.store.phone}`} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-rez-gray-100 dark:bg-dark-700 text-rez-navy dark:text-white text-xs font-medium">
              <Phone className="w-4 h-4" />
              Call
            </a>
            <a href={`mailto:${order.store.email}`} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-rez-gray-100 dark:bg-dark-700 text-rez-navy dark:text-white text-xs font-medium">
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <h2 className="text-sm font-semibold text-rez-navy dark:text-white mb-4">Payment Summary</h2>
          <div className="space-y-2 mb-3">
            <div className="flex justify-between text-sm">
              <span className="text-rez-gray-600 dark:text-gray-400">Subtotal</span>
              <span className="text-rez-navy dark:text-white">₹{order.subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-rez-gray-600 dark:text-gray-400">Tax</span>
              <span className="text-rez-navy dark:text-white">₹{order.tax}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-rez-gray-600 dark:text-gray-400">Shipping</span>
              <span className="text-emerald-500 font-medium">FREE</span>
            </div>
            <div className="pt-2 border-t border-rez-gray-200 dark:border-dark-700 flex justify-between">
              <span className="text-sm font-semibold text-rez-navy dark:text-white">Total Paid</span>
              <span className="text-sm font-bold text-rez-navy dark:text-white">₹{order.total.toLocaleString()}</span>
            </div>
          </div>
          <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500/10 to-amber-500/10 border border-emerald-500/20">
            <div className="flex items-center justify-between">
              <span className="text-xs text-rez-gray-700 dark:text-gray-300">Rewards Earned</span>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-emerald-500">💰 ₹{order.cashback}</span>
                <span className="text-xs font-semibold text-amber-500">🪙 {order.coinsEarned}</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-3">
            Paid via {order.paymentMethod}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="flex-1 py-3 rounded-xl bg-rez-gray-100 dark:bg-dark-700 text-rez-navy dark:text-white text-sm font-semibold flex items-center justify-center gap-2 active:scale-98 transition-all">
            <Download className="w-4 h-4" />
            Download Invoice
          </button>
          <button className="flex-1 py-3 rounded-xl bg-rez-green-500 text-white text-sm font-semibold flex items-center justify-center gap-2 active:scale-98 transition-all">
            <MessageCircle className="w-4 h-4" />
            Get Help
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
