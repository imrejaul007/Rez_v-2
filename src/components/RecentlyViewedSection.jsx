import { Clock, ChevronRight } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { useNavigate } from 'react-router-dom';

const RecentlyViewedSection = () => {
  const { recentlyViewed, clearRecentlyViewed } = useWishlist();
  const navigate = useNavigate();

  if (recentlyViewed.length === 0) {
    return null;
  }

  return (
    <div className="px-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recently Viewed</h2>
        </div>
        <button
          onClick={clearRecentlyViewed}
          className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
        >
          Clear
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-2">
        {recentlyViewed.slice(0, 10).map((item) => (
          <button
            key={`${item.type}-${item.id}`}
            onClick={() => navigate(`/${item.type}/${item.id}`)}
            className="flex-shrink-0 w-40 snap-start group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all">
              {/* Image Placeholder */}
              <div className="w-full h-32 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 mb-3 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-3xl">{item.type === 'product' ? '🛍️' : '🏪'}</span>
              </div>

              {/* Title */}
              <p className="font-semibold text-sm text-gray-900 dark:text-white mb-1 truncate">
                {item.name}
              </p>

              {/* Category/Price */}
              {item.category && (
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 truncate">
                  {item.category}
                </p>
              )}

              {item.price && (
                <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  ${item.price}
                </p>
              )}

              {/* View Again */}
              <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700 flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 group-hover:gap-2 transition-all">
                <span className="text-xs font-semibold">View Again</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewedSection;
