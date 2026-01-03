import { useState } from 'react';
import { Check, Gift, Zap, Star } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const ExclusiveBenefits = () => {
  const [benefits] = useState([
    { title: 'Priority Support', description: 'Get support within 2 hours', icon: '🎯' },
    { title: 'Double Coins', description: '2x coins on every purchase', icon: '🪙' },
    { title: 'Free Shipping', description: 'Unlimited free shipping', icon: '🚚' },
    { title: 'Birthday Gift', description: 'Special gift on your birthday', icon: '🎁' },
    { title: 'Exclusive Previews', description: 'Early access to new products', icon: '✨' },
    { title: 'VIP Events', description: 'Invites to exclusive events', icon: '🎭' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Member Benefits</h1>
        <p className="text-gray-600 dark:text-gray-400">Exclusive perks just for you</p>
      </div>

      <div className="px-4 py-6 grid grid-cols-1 gap-3">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-4 flex gap-4">
            <div className="text-3xl flex-shrink-0">{benefit.icon}</div>
            <div className="flex-1">
              <p className="font-bold text-rez-navy dark:text-white">{benefit.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
            </div>
            <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
          </div>
        ))}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default ExclusiveBenefits;
