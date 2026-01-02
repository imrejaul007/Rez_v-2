import React from 'react';
import { Calendar, Package } from 'lucide-react';

// Washzy Orders
// Backend API: GET /api/wasil/washzy/orders

const WashzyOrders = () => {
  const orders = [
    {
      id: 1,
      service: 'Wash & Iron',
      weight: '5 kg',
      pickupDate: 'Jan 14',
      deliveryDate: 'Jan 16',
      total: 745,
      status: 'in_process',
      coinsEarned: 75
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white">My Orders</h1>
      </div>

      <div className="px-4 py-4 space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-gray-800">{order.service}</h3>
                <p className="text-sm text-gray-500">{order.weight}</p>
              </div>
              <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                In Process
              </span>
            </div>
            <div className="space-y-1 mt-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Picked up: {order.pickupDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                <span>Delivery: {order.deliveryDate}</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t">
              <p className="font-bold text-gray-800">₹{order.total}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WashzyOrders;
