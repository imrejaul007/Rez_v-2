import React from 'react';
import { Package, Calendar, Check } from 'lucide-react';

// Essentia+ Subscription
// Backend API: GET /api/wasil/essentia/subscriptions

const EssentiaSubscription = () => {
  const subscription = {
    plan: 'Monthly Essentials Box',
    price: 1499,
    frequency: 'Monthly',
    nextDelivery: 'Jan 20',
    items: ['Organic Quinoa 500g', 'Chia Seeds 250g', 'Flax Seeds 250g', 'Honey 500ml'],
    status: 'active'
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white">My Subscription</h1>
      </div>

      <div className="px-4 py-4">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-gray-800">{subscription.plan}</h3>
              <p className="text-sm text-gray-500">{subscription.frequency}</p>
            </div>
            <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">Active</span>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Package className="w-4 h-4" />
              <span>Next delivery: {subscription.nextDelivery}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>₹{subscription.price}/month</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="font-medium text-gray-800 mb-2">This month's box:</p>
            <div className="space-y-1">
              {subscription.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <button className="bg-gray-100 text-gray-700 py-2 rounded-lg text-sm">Pause</button>
            <button className="bg-emerald-500 text-white py-2 rounded-lg text-sm">Customize</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssentiaSubscription;
