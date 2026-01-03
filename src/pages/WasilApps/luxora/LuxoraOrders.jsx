import React from 'react';
import { Package, Calendar, ShieldCheck } from 'lucide-react';

// Luxora Orders
// Backend API: GET /api/wasil/luxora/orders

const LuxoraOrders = () => {
  const orders = [
    {
      id: 'LUX001',
      product: 'Gucci Marmont Handbag',
      brand: 'Gucci',
      price: 189900,
      date: 'Jan 10, 2026',
      status: 'delivered',
      coinsEarned: 18990,
      authentic: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-amber-600 to-yellow-600 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white">My Orders</h1>
      </div>

      <div className="px-4 py-4 space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-sm text-gray-500">Order {order.id}</p>
                <p className="text-xs text-gray-400">{order.date}</p>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                Delivered
              </span>
            </div>

            <div className="flex gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl flex items-center justify-center text-4xl">
                👜
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">{order.brand}</p>
                <h3 className="font-bold text-gray-800">{order.product}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-green-600">Authenticated</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 pt-3 border-t">
              <div>
                <p className="font-bold text-gray-800">₹{order.price.toLocaleString()}</p>
                <p className="text-xs text-green-600">+{order.coinsEarned.toLocaleString()}🪙</p>
              </div>
              <button className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuxoraOrders;
