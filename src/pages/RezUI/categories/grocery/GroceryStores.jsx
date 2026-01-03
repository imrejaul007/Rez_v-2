import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Store, Star, MapPin, Clock, Leaf, TrendingUp, Package } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

function GroceryStores() {
  const navigate = useNavigate();

  const stores = [
    {
      id: 1,
      name: 'FreshMart Organics',
      type: 'Organic Store',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400',
      rating: 4.7,
      reviews: 2340,
      distance: 0.5,
      delivery: '15 mins',
      open: true,
      highlights: ['100% Organic', 'Farm Fresh', 'Chemical Free'],
      offers: '20% off on first order',
      minOrder: 99
    },
    {
      id: 2,
      name: 'Nature\'s Basket',
      type: 'Premium Grocery',
      image: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=400',
      rating: 4.9,
      reviews: 1890,
      distance: 1.2,
      delivery: '25 mins',
      open: true,
      highlights: ['Premium Quality', 'Imported Items', 'Gourmet'],
      offers: 'Free delivery above ₹499',
      minOrder: 199
    },
    {
      id: 3,
      name: 'Daily Needs Supermart',
      type: 'Supermarket',
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400',
      rating: 4.6,
      reviews: 3450,
      distance: 0.8,
      delivery: '20 mins',
      open: false,
      highlights: ['Wide Range', 'Best Prices', 'Daily Essentials'],
      offers: 'Flat ₹100 off on ₹999',
      minOrder: 149
    },
    {
      id: 4,
      name: 'Super Bazaar',
      type: 'Hypermarket',
      image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=400',
      rating: 4.8,
      reviews: 4120,
      distance: 1.5,
      delivery: '30 mins',
      open: true,
      highlights: ['Bulk Deals', 'Fresh Produce', 'Home Delivery'],
      offers: 'Buy 2 Get 1 Free on select items',
      minOrder: 199
    }
  ];

  const categories = [
    { id: 'all', name: 'All Stores', icon: '🏪', color: 'from-green-500/20 to-emerald-500/20' },
    { id: 'organic', name: 'Organic', icon: '🌿', color: 'from-green-500/20 to-lime-500/20' },
    { id: 'premium', name: 'Premium', icon: '⭐', color: 'from-amber-500/20 to-yellow-500/20' },
    { id: 'supermarket', name: 'Supermarket', icon: '🛒', color: 'from-blue-500/20 to-cyan-500/20' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Fresh/Organic-Themed Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-green-600 via-emerald-600 to-lime-600">
        <div className="px-4 py-6">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 rounded-full hover:bg-white/20 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Store className="w-6 h-6 text-white" />
                <h1 className="text-2xl font-bold text-white">Grocery Stores</h1>
              </div>
              <p className="text-sm text-white/90">Fresh groceries delivered fast</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">{stores.length}+</p>
              <p className="text-xs text-white/80">Stores</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">5000+</p>
              <p className="text-xs text-white/80">Products</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">4.8</p>
              <p className="text-xs text-white/80">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Freshness Banner */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
          <div className="flex items-center gap-3">
            <Leaf className="w-10 h-10 text-green-500" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Farm Fresh Guarantee!</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">100% fresh produce delivered to your doorstep</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 pb-4">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-full bg-gradient-to-br ${cat.color} border border-white/20 whitespace-nowrap text-sm font-medium text-rez-navy dark:text-white hover:scale-105 transition-all`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Benefit Banner */}
      <div className="px-4 mb-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-lime-500/20 border border-emerald-500/30">
          <div className="flex items-center gap-3">
            <Package className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Grocery Rewards</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Get up to 15% cashback + coins on all grocery orders</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stores List */}
      <div className="px-4 space-y-4">
        {stores.map(store => (
          <div
            key={store.id}
            onClick={() => navigate(`/grocery/store/${store.id}`)}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-black/80 text-rez-navy dark:text-white backdrop-blur-sm">
                  {store.type}
                </span>
              </div>
              {store.open ? (
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {store.delivery}
                  </span>
                </div>
              ) : (
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500 text-white">
                    Closed
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Title */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-rez-navy dark:text-white flex-1">{store.name}</h3>
              </div>

              {/* Location & Distance */}
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span>{store.distance} km away</span>
                <span className="text-gray-400">•</span>
                <span className="text-green-600 dark:text-green-400 font-medium">Min order ₹{store.minOrder}</span>
              </div>

              {/* Highlights */}
              <div className="mb-3">
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Highlights:</p>
                <div className="flex flex-wrap gap-2">
                  {store.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Offer */}
              <div className="mb-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                <p className="text-xs font-bold text-amber-700 dark:text-amber-400">
                  🎁 {store.offers}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-rez-navy dark:text-white">{store.rating}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">({store.reviews})</span>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:scale-105 transition-all">
                {store.open ? 'Shop Now' : 'View Store'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-6 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 text-center">
          <TrendingUp className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-rez-navy dark:text-white mb-2">List Your Grocery Store</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Partner with ReZ and reach thousands of customers
          </p>
          <Link
            to="/partner/grocery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:scale-105 transition-all"
          >
            Become a Partner
          </Link>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
}

export default GroceryStores;
