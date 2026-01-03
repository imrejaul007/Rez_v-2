import { useState } from 'react';
import { ShoppingBag, Clock, CheckCircle } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CorporateOrders = () => {
  const [orders] = useState([
    { id: 1, date: '2025-01-02', items: 150, status: 'delivered', total: 45000 },
    { id: 2, date: '2025-01-01', items: 75, status: 'in_transit', total: 22500 },
    { id: 3, date: '2024-12-31', items: 200, status: 'delivered', total: 60000 }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Corporate Orders</h1>
        <p className="text-gray-600 dark:text-gray-400">{orders.length} orders</p>
      </div>

      <div className="px-4 py-6 space-y-3">
        {orders.map((order) => (
          <div key={order.id} className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="font-bold text-rez-navy dark:text-white">Order #{order.id}</p>
              <p className="text-sm font-bold text-amber-600 dark:text-amber-400">₹{order.total}</p>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>{order.items} items</span>
              <span className={`px-2 py-1 rounded text-xs font-bold ${order.status === 'delivered' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'}`}>
                {order.status.replace('_', ' ').toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CorporateOrders;
