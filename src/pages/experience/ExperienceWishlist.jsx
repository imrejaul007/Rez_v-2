import { useState } from 'react';
import { Heart, Clock } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const ExperienceWishlist = () => {
  const [wishes] = useState([
    { id: 1, name: 'Cooking Class', image: '🍳', savedDate: '2025-01-02' },
    { id: 2, name: 'Yoga Retreat', image: '🧘', savedDate: '2025-01-01' },
    { id: 3, name: 'Art Workshop', image: '🎨', savedDate: '2024-12-30' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Wishlist</h1>
        <p className="text-gray-600 dark:text-gray-400">{wishes.length} experiences saved</p>
      </div>

      <div className="px-4 py-6 space-y-3">
        {wishes.map((wish) => (
          <div key={wish.id} className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-4 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="text-4xl">{wish.image}</div>
              <div>
                <p className="font-bold text-rez-navy dark:text-white">{wish.name}</p>
                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <Clock className="w-3 h-3" />
                  Saved {wish.savedDate}
                </div>
              </div>
            </div>
            <button className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20">
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            </button>
          </div>
        ))}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default ExperienceWishlist;
