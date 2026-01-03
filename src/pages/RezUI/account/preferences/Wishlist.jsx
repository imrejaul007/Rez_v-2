import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingCart, Share2, Tag, TrendingUp, X } from 'lucide-react';

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      image: 'https://images.unsplash.com/photo-1696446702108-bd9087d3d4d6?w=400',
      price: 159900,
      originalPrice: 169900,
      discount: 6,
      cashback: 7995,
      coins: 1599,
      category: 'Electronics',
      inStock: true,
      priceDropped: true,
      dropAmount: 5000
    },
    {
      id: 2,
      name: 'Nike Air Max 270',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
      price: 12995,
      originalPrice: 15995,
      discount: 19,
      cashback: 650,
      coins: 130,
      category: 'Fashion',
      inStock: true,
      priceDropped: false
    },
    {
      id: 3,
      name: 'Boat Rockerz 450 Pro',
      image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=400',
      price: 1499,
      originalPrice: 2999,
      discount: 50,
      cashback: 75,
      coins: 15,
      category: 'Electronics',
      inStock: true,
      priceDropped: false
    },
    {
      id: 4,
      name: 'Zara Leather Jacket',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
      price: 7999,
      originalPrice: 9999,
      discount: 20,
      cashback: 400,
      coins: 80,
      category: 'Fashion',
      inStock: false,
      priceDropped: false
    },
    {
      id: 5,
      name: 'Samsung 55" 4K TV',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400',
      price: 42999,
      originalPrice: 64999,
      discount: 34,
      cashback: 2150,
      coins: 430,
      category: 'Electronics',
      inStock: true,
      priceDropped: true,
      dropAmount: 3000
    }
  ]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const totalSavings = wishlistItems.reduce((sum, item) => sum + (item.originalPrice - item.price), 0);
  const totalCashback = wishlistItems.reduce((sum, item) => sum + item.cashback, 0);

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-h2 font-poppins text-rez-navy dark:text-white">My Wishlist</h1>
            <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
              <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
            </div>
          </div>
          <p className="text-caption text-rez-gray-600 dark:text-gray-400">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>

        {/* Summary Bar */}
        {wishlistItems.length > 0 && (
          <div className="px-4 pb-3 flex gap-3 overflow-x-auto hide-scrollbar">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 whitespace-nowrap">
              <Tag className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold text-emerald-400">Save ₹{totalSavings.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 whitespace-nowrap">
              <span className="text-xs">💰</span>
              <span className="text-xs font-semibold text-amber-400">₹{totalCashback.toLocaleString()} cashback</span>
            </div>
            {wishlistItems.filter(item => item.priceDropped).length > 0 && (
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 whitespace-nowrap">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-semibold text-blue-400">
                  {wishlistItems.filter(item => item.priceDropped).length} price drop
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Wishlist Items */}
      <div className="px-4 py-4">
        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-pink-500/20 flex items-center justify-center">
              <Heart className="w-12 h-12 text-pink-500" />
            </div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-2">Your wishlist is empty</h2>
            <p className="text-body text-rez-gray-600 dark:text-gray-400 mb-6">
              Save items you love and we'll notify you about price drops!
            </p>
            <Link
              to="/explore"
              className="inline-block px-6 py-3 rounded-xl bg-rez-green-500 text-white font-semibold active:scale-95 transition-all"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700"
              >
                {/* Price Drop Alert */}
                {item.priceDropped && (
                  <div className="mb-3 p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    <p className="text-xs text-blue-400 font-medium">
                      Price dropped by ₹{item.dropAmount.toLocaleString()}! 🎉
                    </p>
                  </div>
                )}

                <div className="flex gap-3">
                  {/* Image */}
                  <Link to={`/product/${item.id}`} className="flex-shrink-0 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-xl"
                    />
                    {item.discount > 0 && (
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-red-500 text-white text-xs font-bold">
                        {item.discount}% OFF
                      </div>
                    )}
                    {!item.inStock && (
                      <div className="absolute inset-0 rounded-xl bg-black/60 flex items-center justify-center">
                        <span className="text-xs font-semibold text-white">Out of Stock</span>
                      </div>
                    )}
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1 line-clamp-2">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">{item.category}</p>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-rez-navy dark:text-white">
                        ₹{item.price.toLocaleString()}
                      </span>
                      {item.originalPrice > item.price && (
                        <span className="text-xs text-rez-gray-500 dark:text-gray-400 line-through">
                          ₹{item.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* Rewards */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20">
                        <span className="text-xs text-emerald-400">💰</span>
                        <span className="text-xs font-semibold text-emerald-400">₹{item.cashback}</span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20">
                        <span className="text-xs text-amber-400">🪙</span>
                        <span className="text-xs font-semibold text-amber-400">{item.coins}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      {item.inStock ? (
                        <Link
                          to={`/checkout/product/${item.id}`}
                          className="flex-1 py-2 px-3 rounded-lg bg-rez-green-500 text-white text-xs font-semibold flex items-center justify-center gap-1 active:scale-95 transition-all"
                        >
                          <ShoppingCart className="w-3 h-3" />
                          Buy Now
                        </Link>
                      ) : (
                        <button
                          disabled
                          className="flex-1 py-2 px-3 rounded-lg bg-rez-gray-200 dark:bg-dark-700 text-rez-gray-500 dark:text-gray-400 text-xs font-semibold cursor-not-allowed"
                        >
                          Out of Stock
                        </button>
                      )}
                      <button className="p-2 rounded-lg bg-rez-gray-100 dark:bg-dark-700 active:scale-95 transition-all">
                        <Share2 className="w-4 h-4 text-rez-navy dark:text-white" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 rounded-lg bg-red-500/20 active:scale-95 transition-all"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      {wishlistItems.length > 0 && (
        <div className="fixed bottom-20 left-0 right-0 p-4 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700">
          <div className="flex gap-3">
            <button className="flex-1 py-3 rounded-xl bg-rez-gray-100 dark:bg-dark-700 text-rez-navy dark:text-white font-semibold active:scale-98 transition-all">
              Share Wishlist
            </button>
            <button className="flex-1 py-3 rounded-xl bg-rez-green-500 text-white font-semibold active:scale-98 transition-all">
              Buy All ({wishlistItems.filter(item => item.inStock).length})
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
