import { useState } from 'react';
import { Check, Crown, Gift, Zap } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const ExclusiveMembership = () => {
  const [membership] = useState({
    status: 'active',
    tier: 'Gold',
    expiryDate: '2025-12-31',
    benefits: ['20% discount', '2x coins', 'VIP support', 'Free shipping', 'Exclusive events']
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Premium Membership</h1>
        <p className="text-gray-600 dark:text-gray-400">Unlock exclusive benefits</p>
      </div>

      <div className="px-4 py-6">
        <div className="bg-gradient-to-br from-yellow-400 to-amber-600 rounded-2xl p-6 text-white mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Crown className="w-8 h-8" />
            <h2 className="text-3xl font-bold">{membership.tier}</h2>
          </div>
          <p className="text-sm opacity-90 mb-2">Member since 2024</p>
          <p className="text-xs opacity-75">Expires: {membership.expiryDate}</p>
        </div>

        <h3 className="font-bold text-rez-navy dark:text-white mb-3">Your Benefits</h3>
        <div className="space-y-2 mb-6">
          {membership.benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-white dark:bg-dark-800 rounded-lg border border-gray-200 dark:border-dark-700">
              <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>

        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:scale-[1.02] transition-all">
          Renew Membership
        </button>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default ExclusiveMembership;
