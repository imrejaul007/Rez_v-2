import { useState } from 'react';
import { Crown, Star, Gift, Zap } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const ExclusiveVIPAccess = () => {
  const [vipStatus] = useState({
    level: 'Platinum',
    yearsActive: 2,
    totalSpent: 500000,
    rewards: { coins: 50000, vouchers: 15 }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">VIP Access</h1>
        <p className="text-gray-600 dark:text-gray-400">Premium experience unlocked</p>
      </div>

      <div className="px-4 py-6">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Crown className="w-8 h-8" />
            <h2 className="text-3xl font-bold">{vipStatus.level} VIP</h2>
          </div>
          <div className="space-y-2 text-sm">
            <p>Member for {vipStatus.yearsActive} years</p>
            <p>Total spent: ₹{(vipStatus.totalSpent / 100000).toFixed(1)}L</p>
          </div>
        </div>

        <h3 className="font-bold text-rez-navy dark:text-white mb-3">Your VIP Rewards</h3>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white dark:bg-dark-800 rounded-xl p-4 border border-gray-200 dark:border-dark-700 text-center">
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">{vipStatus.rewards.coins}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Coins Available</p>
          </div>
          <div className="bg-white dark:bg-dark-800 rounded-xl p-4 border border-gray-200 dark:border-dark-700 text-center">
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{vipStatus.rewards.vouchers}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Vouchers</p>
          </div>
        </div>

        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:scale-[1.02] transition-all">
          View VIP Benefits
        </button>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default ExclusiveVIPAccess;
