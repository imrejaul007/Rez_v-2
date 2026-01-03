import { useState } from 'react';
import { ShoppingCart, Package, Percent } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CorporateBulkOrders = () => {
  const [bulkTiers] = useState([
    { quantity: '50-99', discount: '10%', icon: '📦' },
    { quantity: '100-249', discount: '15%', icon: '📦📦' },
    { quantity: '250-499', discount: '20%', icon: '📦📦📦' },
    { quantity: '500+', discount: '25%', icon: '🏢' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Bulk Orders</h1>
        <p className="text-gray-600 dark:text-gray-400">Special pricing for large orders</p>
      </div>

      <div className="px-4 py-6 space-y-3">
        {bulkTiers.map((tier, i) => (
          <div key={i} className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{tier.icon}</span>
                <div>
                  <p className="font-bold text-rez-navy dark:text-white">{tier.quantity} items</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400 flex items-center gap-1">
                  <Percent className="w-5 h-5" />
                  {tier.discount}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 py-6">
        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Create Bulk Order
        </button>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CorporateBulkOrders;
