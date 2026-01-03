import { useState } from 'react';
import { Clock, Gift, Zap, Star, ChevronRight } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const ExclusiveDeals = () => {
  const [deals] = useState([
    { id: 1, title: 'Limited Time Flash Sale', discount: '70%', category: 'Electronics', timeLeft: '2h', image: '⚡', active: true },
    { id: 2, title: 'Member Exclusive Offer', discount: '50%', category: 'Fashion', timeLeft: '5h', image: '👑', active: true },
    { id: 3, title: 'Early Bird Special', discount: '40%', category: 'Food', timeLeft: '12h', image: '🌅', active: true },
    { id: 4, title: 'Tonight Only Deal', discount: '60%', category: 'Beauty', timeLeft: '8h', image: '🌙', active: true }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Exclusive Deals</h1>
        <p className="text-gray-600 dark:text-gray-400">Member-only offers</p>
      </div>

      <div className="px-4 py-6 space-y-4">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 overflow-hidden hover:shadow-md transition-all">
            <div className="flex gap-4 p-4">
              <div className="text-5xl flex-shrink-0">{deal.image}</div>
              <div className="flex-1">
                <p className="font-bold text-rez-navy dark:text-white mb-1">{deal.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{deal.category}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-red-600 dark:text-red-400">{deal.discount}</span>
                    <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-bold">{deal.timeLeft}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default ExclusiveDeals;
