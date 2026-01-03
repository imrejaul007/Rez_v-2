import React, { useState } from 'react';
import { Package, Clock, CheckCircle, XCircle, ChevronRight } from 'lucide-react';

// Shopazy Orders: View Order History
// Backend API: GET /api/wasil/shopazy/orders

const ShopazyOrders = () => {
  const [activeTab, setActiveTab] = useState('all');

  const orders = [
    {
      id: 'ORD001',
      items: [{ name: 'iPhone 15 Pro Max', qty: 1, image: '📱' }],
      total: 134900,
      status: 'delivered',
      date: 'Jan 10, 2026',
      coinsEarned: 1349
    },
    {
      id: 'ORD002',
      items: [{ name: 'AirPods Pro', qty: 2, image: '🎧' }],
      total: 49800,
      status: 'shipped',
      date: 'Jan 14, 2026',
      expectedDelivery: 'Jan 16'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white">My Orders</h1>
      </div>

      <div className="bg-white border-b sticky top-0 z-10">
        <div className="flex px-4">
          {['all', 'pending', 'delivered'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium capitalize ${
                activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm text-gray-500">Order {order.id}</p>
                <p className="text-xs text-gray-400">{order.date}</p>
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded ${
                order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                order.status === 'shipped' ? 'bg-blue-100 text-blue-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {order.status}
              </span>
            </div>

            {order.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 mb-3">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-3xl">
                  {item.image}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                </div>
              </div>
            ))}

            <div className="border-t pt-3 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="font-bold text-gray-800">₹{order.total.toLocaleString()}</p>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                View Details
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {order.coinsEarned && (
              <div className="mt-2 bg-yellow-50 border border-yellow-200 rounded-lg p-2 text-center">
                <p className="text-xs text-yellow-800">Earned {order.coinsEarned}🪙 coins</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopazyOrders;
