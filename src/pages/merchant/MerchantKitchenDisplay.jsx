import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function MerchantKitchenDisplay() {
  const [orders] = React.useState([
    { id: 1, items: ['Pizza', 'Garlic Bread'], status: 'preparing', time: '8 min' },
    { id: 2, items: ['Burger', 'Fries'], status: 'ready', time: '0 min' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Kitchen Display</h1>

      <div className="grid grid-cols-1 gap-3">
        {orders.map(order => (
          <div key={order.id} className={`p-4 rounded-lg ${order.status === 'ready' ? 'bg-green-100 border-2 border-green-500' : 'bg-amber-100 border-2 border-amber-500'}`}>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-lg">Order #{order.id}</p>
                <div className="mt-2 space-y-1">
                  {order.items.map((item, i) => (
                    <p key={i} className="text-gray-900">✓ {item}</p>
                  ))}
                </div>
              </div>
              {order.status === 'ready' ? (
                <CheckCircle className="text-green-600" size={24} />
              ) : (
                <AlertCircle className="text-amber-600" size={24} />
              )}
            </div>
            <p className="text-sm font-semibold mt-3">{order.time} {order.status === 'ready' ? 'ready' : 'remaining'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}