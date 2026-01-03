import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MapPin, Search, ChevronRight, Coins, Filter,
  Zap, Star, Clock, TrendingUp, Heart, Target,
  Flame, Gift, Package, Sparkles, Users, Play
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';

const StoreHub = () => {
  const navigate = useNavigate();
  const { rezCoins } = useWallet();
  const [activeMode, setActiveMode] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Bangalore');
  const [radius, setRadius] = useState('3km');

  // Mode options
  const modes = [
    { id: 'all', label: 'All', icon: '🌍' },
    { id: 'halal', label: 'Halal', icon: '🕌' },
    { id: 'vegan', label: 'Vegan', icon: '🌱' },
    { id: 'vegetarian', label: 'Vegetarian', icon: '🥬' },
    { id: 'adult', label: 'Adult', icon: '🔞' },
  ];

  // Store types
  const storeTypes = [
    { id: 'instant', name: 'Instant', icon: '🚚', subtitle: '60-Min Delivery', link: '/grocery/fast', color: 'from-blue-500/20 to-cyan-500/20' },
    { id: 'convenience', name: 'Convenience', icon: '🏪', subtitle: 'Groceries & More', link: '/grocery', color: 'from-green-500/20 to-emerald-500/20' },
    { id: 'sample', name: 'Sample Store', icon: '🎁', subtitle: 'Try Before Buy', link: '/store/sample', color: 'from-purple-500/20 to-pink-500/20' },
    { id: 'luxury', name: 'Luxury', icon: '💎', subtitle: 'Premium Brands', link: '/store/luxury', color: 'from-amber-500/20 to-yellow-500/20' },
    { id: 'organic', name: 'Organic', icon: '🌿', subtitle: 'Clean & Natural', link: '/store/organic', color: 'from-green-500/20 to-teal-500/20' },
    { id: 'men', name: 'Men Store', icon: '👔', subtitle: 'Men Fashion', link: '/store/men', color: 'from-blue-500/20 to-indigo-500/20' },
    { id: 'women', name: 'Women Store', icon: '👗', subtitle: 'Women Fashion', link: '/store/women', color: 'from-pink-500/20 to-rose-500/20' },
    { id: 'children', name: 'Children', icon: '🧸', subtitle: 'Kids & Toys', link: '/store/children', color: 'from-orange-500/20 to-red-500/20' },
    { id: 'rental', name: 'Rental', icon: '🔄', subtitle: 'Rent Fashion', link: '/store/rental', color: 'from-cyan-500/20 to-blue-500/20' },
    { id: 'gifting', name: 'Gifting', icon: '🎀', subtitle: 'Cards & Hampers', link: '/store/gifting', color: 'from-red-500/20 to-pink-500/20' },
    { id: 'deals', name: 'Deals Store', icon: '🏷️', subtitle: 'Best Offers', link: '/deals', color: 'from-orange-500/20 to-amber-500/20' },
    { id: 'flea', name: 'Flea Market', icon: '🛍️', subtitle: 'Local Markets', link: '/flea-market', color: 'from-purple-500/20 to-violet-500/20' },
  ];

  // Additional categories
  const moreCategories = [
    { id: 'events', name: 'Events', icon: '🎉', link: '/events' },
    { id: 'travel', name: 'Travel', icon: '✈️', link: '/travel' },
    { id: 'electronics', name: 'Electronics', icon: '📱', link: '/electronics' },
    { id: 'fashion', name: 'Fashion', icon: '👕', link: '/fashion' },
    { id: 'food', name: 'Food & Dining', icon: '🍽️', link: '/food' },
    { id: 'beauty', name: 'Beauty', icon: '💆', link: '/beauty' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥', link: '/healthcare' },
    { id: 'fitness', name: 'Fitness', icon: '🏋️', link: '/fitness' },
    { id: 'home', name: 'Home Services', icon: '🔧', link: '/home-services' },
    { id: 'financial', name: 'Financial', icon: '💳', link: '/financial' },
  ];

  // Mock stores data
  const speedStores = [
    { id: 1, name: 'BigBasket', type: '60-min', cashback: 15, rating: 4.5, eta: '32 min', image: '🛒', distance: '1.2 km' },
    { id: 2, name: 'Blinkit', type: '60-min', cashback: 20, rating: 4.3, eta: '18 min', image: '⚡', distance: '0.8 km' },
    { id: 3, name: 'Swiggy Instamart', type: '60-min', cashback: 12, rating: 4.4, eta: '25 min', image: '🛍️', distance: '1.5 km' },
  ];

  const cashbackStores = [
    { id: 4, name: 'Zara', cashback: 25, rating: 4.6, type: 'Fashion', image: '👗', offer: 'Extra 10% off' },
    { id: 5, name: 'Croma', cashback: 20, rating: 4.4, type: 'Electronics', image: '📱', offer: 'Mega Sale' },
    { id: 6, name: 'Nykaa', cashback: 22, rating: 4.7, type: 'Beauty', image: '💄', offer: 'Buy 2 Get 1' },
  ];

  const topRatedStores = [
    { id: 7, name: 'Paradise Biryani', rating: 4.8, reviews: 2340, type: 'Food', cashback: 18, image: '🍛', redeemed: 234 },
    { id: 8, name: 'Lakme Salon', rating: 4.7, reviews: 1890, type: 'Beauty', cashback: 20, image: '💇', redeemed: 189 },
    { id: 9, name: 'Cult.fit', rating: 4.6, reviews: 3210, type: 'Fitness', cashback: 15, image: '🏋️', redeemed: 421 },
  ];

  const halalStores = [
    { id: 10, name: 'Al Baik', verified: true, rating: 4.5, distance: '2.1 km', eta: '35 min', cashback: 18, image: '🍗' },
    { id: 11, name: 'Meeras', verified: true, rating: 4.6, distance: '1.8 km', eta: '28 min', cashback: 20, image: '🥘' },
  ];

  const storeOffers = [
    { id: 1, store: 'Starbucks', type: 'BOGO', badge: '🎯', cashback: 15, validity: '2 days left', image: '☕' },
    { id: 2, store: 'Dominos', type: '50% OFF', badge: '🔥', cashback: 20, validity: '5 hours left', image: '🍕' },
    { id: 3, store: 'Nike', type: 'Cashback', badge: '🪙', cashback: 25, validity: '1 week left', image: '👟' },
  ];

  const aiRecommended = [
    { id: 1, name: 'Sephora', reason: 'Because you shop beauty & wellness', cashback: 22, rating: 4.6, image: '💅' },
    { id: 2, name: 'Lifestyle', reason: 'Based on your fashion taste', cashback: 18, rating: 4.5, image: '👔' },
  ];

  const friendsActivity = [
    { id: 1, friends: ['👩', '👨', '👩‍🦱'], count: 3, store: 'Zara', saved: 1200 },
    { id: 2, friends: ['🧔', '👨‍💼'], count: 2, store: 'Croma', saved: 850 },
  ];

  const reels = [
    { id: 1, user: 'Priya', store: 'Nykaa', thumbnail: '💄', views: '15K', product: 'Lipstick haul' },
    { id: 2, user: 'Rahul', store: 'Decathlon', thumbnail: '🏃', views: '12K', product: 'Gear review' },
    { id: 3, user: 'Sneha', store: 'Myntra', thumbnail: '👗', views: '18K', product: 'Fashion tips' },
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      {/* STICKY HEADER */}
      <div className="sticky top-0 z-40 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-3">
          {/* Top Row */}
          <div className="flex items-center justify-between mb-3">
            {/* Location Selector */}
            <button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-rez-gray-100 dark:bg-dark-700">
              <MapPin className="w-4 h-4 text-emerald-500" />
              <div className="text-left">
                <p className="text-sm font-bold text-rez-navy dark:text-white">{location}</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">{radius}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" />
            </button>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-xl bg-rez-gray-100 dark:bg-dark-700">
                <Search className="w-5 h-5 text-rez-navy dark:text-white" />
              </button>
              <Link to="/wallet" className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/20">
                <Coins className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-400">{rezCoins}</span>
              </Link>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
            {modes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full shrink-0 text-sm transition-all ${
                  activeMode === mode.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                    : 'bg-white dark:bg-dark-700 text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                <span>{mode.icon}</span>
                <span className="font-medium">{mode.label}</span>
              </button>
            ))}
          </div>

          {/* Active Mode Badge */}
          {activeMode !== 'all' && (
            <div className="mt-2 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <p className="text-xs text-emerald-700 dark:text-emerald-400">
                🔍 Filtered for {modes.find(m => m.id === activeMode)?.label} stores only
              </p>
            </div>
          )}
        </div>
      </div>

      {/* SECTION 1: STORE TYPES */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">Explore Stores by Type</h2>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Find exactly what you need</p>
          </div>
        </div>

        {/* Store Types Grid - 2 rows scrollable */}
        <div className="grid grid-rows-2 grid-flow-col gap-3 overflow-x-auto hide-scrollbar pb-2">
          {storeTypes.map((type) => (
            <Link
              key={type.id}
              to={type.link}
              className={`min-w-[140px] p-4 rounded-2xl bg-gradient-to-br ${type.color} border border-white/10 active:scale-[0.98] transition-transform`}
            >
              <span className="text-3xl block mb-2">{type.icon}</span>
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-0.5">{type.name}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">{type.subtitle}</p>
            </Link>
          ))}
        </div>

        {/* More Categories */}
        <div className="mt-4 flex flex-wrap gap-2">
          {moreCategories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="px-4 py-2 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 flex items-center gap-2"
            >
              <span className="text-lg">{cat.icon}</span>
              <span className="text-sm text-rez-navy dark:text-white">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* SECTION 2.1: 60-Min Stores */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            <h2 className="font-bold text-rez-navy dark:text-white">60-Min Stores Near You</h2>
          </div>
          <Link to="/grocery/fast" className="text-sm text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {speedStores.map((store) => (
            <div
              key={store.id}
              className="min-w-[200px] p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{store.image}</span>
                <div className="px-2 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">⏱ {store.eta}</p>
                </div>
              </div>
              <h3 className="font-bold text-rez-navy dark:text-white mb-1">{store.name}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">{store.distance}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-xs text-rez-navy dark:text-white">{store.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Coins className="w-3 h-3 text-amber-400" />
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400">{store.cashback}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2.2: Best Cashback Stores */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-amber-400" />
            <h2 className="font-bold text-rez-navy dark:text-white">Best Cashback Stores</h2>
          </div>
          <Link to="/deals" className="text-sm text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {cashbackStores.map((store) => (
            <div
              key={store.id}
              className="min-w-[180px] p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20"
            >
              <span className="text-3xl block mb-2">{store.image}</span>
              <h3 className="font-bold text-rez-navy dark:text-white mb-1">{store.name}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-3">{store.offer}</p>
              <div className="px-3 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-center">
                <p className="text-sm font-bold text-white">Earn up to {store.cashback}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2.3: Top Rated Stores */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <h2 className="font-bold text-rez-navy dark:text-white">Top Rated Stores</h2>
          </div>
          <Link to="/popular" className="text-sm text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="space-y-3">
          {topRatedStores.map((store) => (
            <div
              key={store.id}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 flex items-center gap-4"
            >
              <span className="text-4xl">{store.image}</span>
              <div className="flex-1">
                <h3 className="font-bold text-rez-navy dark:text-white mb-1">{store.name}</h3>
                <div className="flex items-center gap-3 text-xs text-rez-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    {store.rating} ({store.reviews})
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {store.redeemed} redeemed
                  </span>
                </div>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
                <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{store.cashback}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2.4: Halal Verified (Conditional) */}
      {activeMode === 'halal' && (
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🕌</span>
              <h2 className="font-bold text-rez-navy dark:text-white">Halal-Verified Stores</h2>
            </div>
          </div>

          <div className="space-y-3">
            {halalStores.map((store) => (
              <div
                key={store.id}
                className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-emerald-200 dark:border-emerald-800"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{store.image}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-rez-navy dark:text-white">{store.name}</h3>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-xs font-bold text-emerald-600 dark:text-emerald-400">✓ Verified</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-rez-gray-600 dark:text-gray-400">
                      <span>{store.distance}</span>
                      <span>⏱ {store.eta}</span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        {store.rating}
                      </span>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
                    <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{store.cashback}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: Store Offers */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-rez-navy dark:text-white">Store Deals You'll Love</h2>
          <Link to="/offers" className="text-sm text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-3">
          <button className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-sm font-medium">
            🎯 Offers
          </button>
          <button className="px-4 py-2 rounded-xl bg-white dark:bg-dark-800 text-rez-gray-600 dark:text-gray-400 text-sm">
            🪙 Cashback
          </button>
          <button className="px-4 py-2 rounded-xl bg-white dark:bg-dark-800 text-rez-gray-600 dark:text-gray-400 text-sm">
            🔐 Exclusive
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {storeOffers.map((offer) => (
            <div
              key={offer.id}
              className="min-w-[160px] p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{offer.image}</span>
                <span className="text-xl">{offer.badge}</span>
              </div>
              <h3 className="font-bold text-rez-navy dark:text-white mb-1">{offer.store}</h3>
              <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-2">{offer.type}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-rez-gray-600 dark:text-gray-400">{offer.validity}</span>
                <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                  <Coins className="w-3 h-3" />
                  {offer.cashback}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: AI Recommended */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <h2 className="font-bold text-rez-navy dark:text-white">AI Recommended for You</h2>
        </div>

        <div className="space-y-3">
          {aiRecommended.map((store) => (
            <div
              key={store.id}
              className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{store.image}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-rez-navy dark:text-white mb-1">{store.name}</h3>
                  <p className="text-xs text-purple-600 dark:text-purple-400 italic">{store.reason}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-sm text-rez-navy dark:text-white">{store.rating}</span>
                  </div>
                  <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{store.cashback}% back</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION: Friends Activity */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-5 h-5 text-blue-400" />
          <h2 className="font-bold text-rez-navy dark:text-white">Friends Redeemed Here</h2>
        </div>

        <div className="space-y-2">
          {friendsActivity.map((activity) => (
            <div
              key={activity.id}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {activity.friends.map((friend, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-white dark:border-dark-800 flex items-center justify-center">
                      <span className="text-sm">{friend}</span>
                    </div>
                  ))}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-rez-navy dark:text-white">
                    <span className="font-bold">{activity.count} friends</span> saved ₹{activity.saved} here
                  </p>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">{activity.store}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: UGC Reels */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Play className="w-5 h-5 text-red-400" />
            <h2 className="font-bold text-rez-navy dark:text-white">See It Before You Buy</h2>
          </div>
          <Link to="/reels" className="text-sm text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {reels.map((reel) => (
            <Link
              key={reel.id}
              to={`/reel/${reel.id}`}
              className="min-w-[140px] h-[200px] rounded-2xl bg-gradient-to-b from-red-500/30 to-pink-500/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl opacity-50">{reel.thumbnail}</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80">
                <p className="text-sm font-medium text-white">{reel.product}</p>
                <p className="text-[10px] text-gray-300">@ {reel.store} • {reel.views} views</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* SECTION: Gamification */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/10 border border-orange-500/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
              <Flame className="w-6 h-6 text-orange-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-rez-navy dark:text-white">🔥 5-day streak!</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Visit 2 more stores to unlock +100 bonus coins</p>
            </div>
          </div>
          <div className="h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 w-3/4"></div>
          </div>
        </div>
      </div>

      {/* Filter Button */}
      <Link
        to="/explore"
        className="fixed bottom-24 right-4 w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg"
      >
        <Filter className="w-6 h-6 text-white" />
      </Link>
    </div>
  );
};

export default StoreHub;
