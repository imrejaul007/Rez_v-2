import { useState } from 'react';
import { Heart, Trash2, ShoppingCart, Store, Tag, ArrowLeft, Filter } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { useNavigate } from 'react-router-dom';

const WishlistPage = () => {
  const { wishlist, wishlistCount, removeFromWishlist, clearWishlist } = useWishlist();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all'); // all, products, stores

  const filteredItems = filter === 'all'
    ? wishlist
    : wishlist.filter(item => item.type === filter.slice(0, -1)); // 'products' -> 'product'

  const handleRemove = (itemId, type) => {
    if (confirm('Remove this item from your wishlist?')) {
      removeFromWishlist(itemId, type);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={clearWishlist}
                className="px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 font-semibold text-sm transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Wishlist</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">{wishlistCount} saved items</p>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            {['all', 'products', 'stores'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                  filter === tab
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">No items in wishlist</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Start adding your favorite items to save them for later
            </p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 transition-all"
            >
              Explore Deals
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredItems.map((item) => (
              <div
                key={`${item.type}-${item.id}`}
                className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex gap-4">
                  {/* Image/Icon */}
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center flex-shrink-0">
                    {item.type === 'product' ? (
                      <ShoppingCart className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <Store className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 dark:text-white truncate">
                          {item.name}
                        </h3>
                        {item.category && (
                          <p className="text-xs text-gray-500 dark:text-gray-400">{item.category}</p>
                        )}
                      </div>
                      <button
                        onClick={() => handleRemove(item.id, item.type)}
                        className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Price or Cashback */}
                    {item.price && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                          ${item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                            ${item.originalPrice}
                          </span>
                        )}
                      </div>
                    )}

                    {item.cashback && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3">
                        <Tag className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          {item.cashback}% Cashback
                        </span>
                      </div>
                    )}

                    {/* Action Button */}
                    <button
                      onClick={() => navigate(`/${item.type}/${item.id}`)}
                      className="w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold text-sm shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 transition-all"
                    >
                      {item.type === 'product' ? 'View Product' : 'Visit Store'}
                    </button>
                  </div>
                </div>

                {/* Added Date */}
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Added {new Date(item.addedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
