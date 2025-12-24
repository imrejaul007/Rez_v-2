import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Star, MapPin, Heart, TrendingUp } from 'lucide-react';

function NewArrivals() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All New' },
    { id: 'stores', label: 'Stores' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' }
  ];

  const newArrivals = [
    {
      id: 1,
      type: 'store',
      name: 'Urban Fusion',
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
      rating: 4.9,
      distance: 1.2,
      joinedDaysAgo: 2,
      trending: true,
      offers: '20% off on first purchase'
    },
    {
      id: 2,
      type: 'product',
      name: 'Smart Watch Pro X',
      store: 'TechZone',
      category: 'Electronics',
      price: 12999,
      rezPrice: 10999,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      rating: 4.8,
      cashback: 15,
      coins: 500,
      addedDaysAgo: 1,
      trending: true
    },
    {
      id: 3,
      type: 'service',
      name: 'Premium Spa Package',
      provider: 'Serenity Spa',
      category: 'Beauty',
      price: 2999,
      rezPrice: 2499,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400',
      rating: 5.0,
      duration: '90 mins',
      cashback: 10,
      coins: 200,
      addedDaysAgo: 3,
      trending: false
    },
    {
      id: 4,
      type: 'store',
      name: 'Fresh Organics',
      category: 'Grocery',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400',
      rating: 4.7,
      distance: 0.8,
      joinedDaysAgo: 5,
      trending: false,
      offers: 'Free delivery on ₹500+'
    },
    {
      id: 5,
      type: 'product',
      name: 'Designer Handbag',
      store: 'LuxeStyle',
      category: 'Fashion',
      price: 8999,
      rezPrice: 6999,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
      rating: 4.6,
      cashback: 12,
      coins: 400,
      addedDaysAgo: 4,
      trending: false
    },
    {
      id: 6,
      type: 'service',
      name: 'Home Cleaning Pro',
      provider: 'CleanCo',
      category: 'Home Services',
      price: 1499,
      rezPrice: 1199,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400',
      rating: 4.9,
      duration: '2 hours',
      cashback: 8,
      coins: 150,
      addedDaysAgo: 6,
      trending: false
    }
  ];

  const filteredArrivals = activeCategory === 'all'
    ? newArrivals
    : newArrivals.filter(item => item.type === activeCategory.slice(0, -1));

  const handleItemClick = (item) => {
    if (item.type === 'store') {
      navigate(`/store/${item.id}`);
    } else if (item.type === 'product') {
      navigate(`/product/${item.id}`);
    } else if (item.type === 'service') {
      navigate(`/service/${item.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-full hover:bg-white/20 active:scale-95 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400" />
              <h1 className="text-h3 font-poppins text-white">New Arrivals</h1>
            </div>
            <p className="text-xs text-white/80">Just launched on ReZ</p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="px-4 pb-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-white text-indigo-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Stats Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <h3 className="font-bold text-rez-navy dark:text-white">This Week</h3>
          </div>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
            {filteredArrivals.length} New Additions
          </p>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">
            Be the first to discover and earn extra rewards!
          </p>
        </div>

        {/* New Arrivals Grid */}
        <div className="grid grid-cols-2 gap-3">
          {filteredArrivals.map(item => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-purple-500 transition-all active:scale-98 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />

                {/* New Badge */}
                <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-white fill-white" />
                  <span className="text-xs font-bold text-white">NEW</span>
                </div>

                {/* Trending Badge */}
                {item.trending && (
                  <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500">
                    <TrendingUp className="w-3 h-3 text-white" />
                  </div>
                )}

                {/* Wishlist Button */}
                <button className="absolute bottom-2 right-2 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all active:scale-95">
                  <Heart className="w-4 h-4 text-rez-gray-600" />
                </button>
              </div>

              <div className="p-3">
                <h3 className="font-bold text-sm text-rez-navy dark:text-white mb-1 line-clamp-1">
                  {item.name}
                </h3>

                {/* Store/Provider Name */}
                {(item.store || item.provider) && (
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">
                    {item.store || item.provider}
                  </p>
                )}

                {/* Category */}
                <div className="flex items-center gap-1 mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-xs font-medium text-purple-600 dark:text-purple-400">
                    {item.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-semibold text-rez-gray-700 dark:text-gray-300">
                    {item.rating}
                  </span>
                  {item.distance && (
                    <>
                      <span className="text-xs text-rez-gray-400">•</span>
                      <MapPin className="w-3 h-3 text-blue-500" />
                      <span className="text-xs text-blue-600 dark:text-blue-400">
                        {item.distance} km
                      </span>
                    </>
                  )}
                </div>

                {/* Price (for products/services) */}
                {item.price && (
                  <div className="mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-rez-navy dark:text-white">
                        ₹{item.rezPrice.toLocaleString()}
                      </span>
                      <span className="text-xs text-rez-gray-500 dark:text-gray-400 line-through">
                        ₹{item.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}

                {/* Rewards */}
                {item.cashback && (
                  <div className="flex items-center gap-1 mb-2">
                    <div className="px-2 py-0.5 rounded bg-emerald-500/20">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        {item.cashback}% back
                      </span>
                    </div>
                    <div className="px-2 py-0.5 rounded bg-amber-500/20">
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        +{item.coins}
                      </span>
                    </div>
                  </div>
                )}

                {/* Offers (for stores) */}
                {item.offers && (
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    {item.offers}
                  </p>
                )}

                {/* Added Days Ago */}
                <p className="text-xs text-rez-gray-500 dark:text-gray-400 mt-2">
                  Added {item.joinedDaysAgo || item.addedDaysAgo} days ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
