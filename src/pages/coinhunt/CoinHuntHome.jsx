import React, { useState } from 'react';
import {
  Coins, Zap, Gift, Clock, MapPin, Star, TrendingUp, Target,
  ChevronRight, ArrowRight, Flame, Timer, Percent, Tag,
  Home, Search, Ticket, Wallet, User, Bell, Filter
} from 'lucide-react';

// CoinHunt: Deals & Coupons Discovery
// Clones: ReZ + Offers System
// Unique: Gamified deal hunting with coin rewards

const CoinHuntHome = () => {
  const [activeTab, setActiveTab] = useState('deals');
  const [activeCategory, setActiveCategory] = useState('all');

  // User stats
  const userStats = {
    coins: 2450,
    deals Claimed: 23,
    totalSaved: 12850,
    streak: 7
  };

  // Categories
  const categories = [
    { id: 'all', name: 'All Deals', icon: '🔥', count: 156 },
    { id: 'flash', name: 'Flash', icon: '⚡', count: 12, hot: true },
    { id: 'food', name: 'Food', icon: '🍽️', count: 45 },
    { id: 'shopping', name: 'Shopping', icon: '🛍️', count: 38 },
    { id: 'beauty', name: 'Beauty', icon: '💅', count: 22 },
    { id: 'entertainment', name: 'Fun', icon: '🎮', count: 18 },
    { id: 'services', name: 'Services', icon: '🔧', count: 21 }
  ];

  // Flash deals (time-limited)
  const flashDeals = [
    {
      id: 1,
      merchant: "Tech World",
      deal: "40% OFF + 500 Coins",
      originalPrice: 15000,
      dealPrice: 9000,
      category: "Electronics",
      image: "📱",
      endsIn: "1h 23m",
      claimed: 78,
      total: 100,
      coinBonus: 500,
      featured: true
    },
    {
      id: 2,
      merchant: "Fashion Hub",
      deal: "Buy 1 Get 1 Free",
      category: "Fashion",
      image: "👗",
      endsIn: "3h 45m",
      claimed: 45,
      total: 100,
      coinBonus: 200
    },
    {
      id: 3,
      merchant: "Spa Bliss",
      deal: "60% OFF Massage",
      originalPrice: 2500,
      dealPrice: 1000,
      category: "Wellness",
      image: "🧘",
      endsIn: "5h 12m",
      claimed: 32,
      total: 50,
      coinBonus: 300
    }
  ];

  // Regular deals
  const deals = [
    {
      id: 1,
      merchant: "Pasta Paradise",
      type: "restaurant",
      deal: "Flat 25% OFF",
      description: "On orders above ₹500",
      rating: 4.8,
      distance: "1.2 km",
      image: "🍝",
      cashback: "20%",
      coinReward: 100,
      validTill: "Dec 31",
      claimed: 234
    },
    {
      id: 2,
      merchant: "Brew Masters",
      type: "cafe",
      deal: "Free Coffee",
      description: "With any breakfast combo",
      rating: 4.6,
      distance: "0.5 km",
      image: "☕",
      cashback: "15%",
      coinReward: 50,
      validTill: "Jan 15",
      claimed: 567,
      popular: true
    },
    {
      id: 3,
      merchant: "Fitness First",
      type: "gym",
      deal: "First Month FREE",
      description: "New members only",
      rating: 4.7,
      distance: "2.0 km",
      image: "💪",
      cashback: "30%",
      coinReward: 200,
      validTill: "Jan 31",
      claimed: 89
    },
    {
      id: 4,
      merchant: "Book Nook",
      type: "store",
      deal: "Buy 2 Get 1",
      description: "All fiction books",
      rating: 4.5,
      distance: "3.5 km",
      image: "📚",
      cashback: "10%",
      coinReward: 75,
      validTill: "Ongoing",
      claimed: 156
    }
  ];

  // Daily challenges
  const dailyChallenges = [
    { title: "Claim 3 Deals", progress: 2, target: 3, reward: 100, icon: "🎯" },
    { title: "Visit 2 Stores", progress: 1, target: 2, reward: 150, icon: "🏪" },
    { title: "Share a Deal", progress: 0, target: 1, reward: 50, icon: "📤" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <Coins className="w-7 h-7" />
              CoinHunt
            </h1>
            <p className="text-yellow-100 text-sm">Hunt deals, earn coins!</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative">
              <Bell className="w-6 h-6 text-white" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                5
              </span>
            </button>
            <div className="bg-white/20 rounded-full px-3 py-1 flex items-center gap-1">
              <Coins className="w-4 h-4 text-yellow-200" />
              <span className="text-white font-bold">{userStats.coins.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/20 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-white">{userStats.dealslaimed}</p>
            <p className="text-xs text-yellow-100">Deals Claimed</p>
          </div>
          <div className="bg-white/20 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-white">₹{(userStats.totalSaved/1000).toFixed(1)}K</p>
            <p className="text-xs text-yellow-100">Total Saved</p>
          </div>
          <div className="bg-white/20 rounded-xl p-3 text-center">
            <div className="flex items-center justify-center gap-1">
              <Flame className="w-5 h-5 text-orange-300" />
              <p className="text-2xl font-bold text-white">{userStats.streak}</p>
            </div>
            <p className="text-xs text-yellow-100">Day Streak</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search deals, merchants..."
            className="flex-1 outline-none text-gray-800"
          />
          <button className="bg-yellow-100 p-2 rounded-lg">
            <Filter className="w-5 h-5 text-yellow-600" />
          </button>
        </div>
      </div>

      {/* Daily Challenges */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-gray-800 flex items-center gap-2">
              <Target className="w-5 h-5 text-orange-500" />
              Daily Challenges
            </h2>
            <span className="text-sm text-orange-600">+300 coins possible</span>
          </div>
          <div className="space-y-3">
            {dailyChallenges.map((challenge, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-2xl">{challenge.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-700">{challenge.title}</span>
                    <span className="text-xs text-gray-500">{challenge.progress}/{challenge.target}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all"
                      style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs text-yellow-600 font-medium bg-yellow-50 px-2 py-1 rounded-full">
                  +{challenge.reward}🪙
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                  : 'bg-white text-gray-700 shadow-sm'
              }`}
            >
              <span>{cat.icon}</span>
              <span className="text-sm font-medium">{cat.name}</span>
              {cat.hot && (
                <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">HOT</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Flash Deals */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Flash Deals
          </h2>
          <button className="text-orange-600 text-sm flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {flashDeals.map((deal) => (
            <div
              key={deal.id}
              className={`flex-shrink-0 w-64 bg-white rounded-xl shadow-sm overflow-hidden ${
                deal.featured ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              {deal.featured && (
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium py-1 text-center">
                  ⭐ FEATURED DEAL
                </div>
              )}
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-4xl">{deal.image}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{deal.merchant}</h3>
                    <p className="text-sm text-gray-500">{deal.category}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-3 mb-3">
                  <p className="font-bold text-lg text-orange-600">{deal.deal}</p>
                  {deal.originalPrice && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gray-400 line-through text-sm">₹{deal.originalPrice}</span>
                      <span className="text-green-600 font-semibold">₹{deal.dealPrice}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-red-600">
                    <Timer className="w-4 h-4" />
                    <span>{deal.endsIn}</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-600">
                    <Coins className="w-4 h-4" />
                    <span>+{deal.coinBonus}</span>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                    <span>{deal.claimed} claimed</span>
                    <span>{deal.total - deal.claimed} left</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                      style={{ width: `${(deal.claimed / deal.total) * 100}%` }}
                    />
                  </div>
                </div>
                <button className="w-full mt-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 rounded-lg font-medium">
                  Claim Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regular Deals */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-800 flex items-center gap-2">
            <Gift className="w-5 h-5 text-orange-500" />
            Top Deals Near You
          </h2>
          <button className="text-orange-600 text-sm flex items-center gap-1">
            Map View <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex gap-4">
                <div className="text-4xl bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center">
                  {deal.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-800">{deal.merchant}</h3>
                        {deal.popular && (
                          <span className="bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-0.5">
                        <span className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          {deal.rating}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5">
                          <MapPin className="w-3 h-3" />
                          {deal.distance}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="bg-green-100 text-green-700 font-medium px-2 py-1 rounded-lg text-sm">
                      {deal.deal}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{deal.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{deal.cashback} cashback</span>
                      <span className="flex items-center gap-1 text-yellow-600">
                        <Coins className="w-3 h-3" />
                        +{deal.coinReward}
                      </span>
                    </div>
                    <button className="text-orange-600 font-medium text-sm flex items-center gap-1">
                      Get Deal <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3">
        <div className="flex justify-around items-center">
          {[
            { icon: Home, label: 'Home', active: true },
            { icon: Search, label: 'Explore', active: false },
            { icon: Ticket, label: 'My Deals', active: false },
            { icon: Wallet, label: 'Wallet', active: false },
            { icon: User, label: 'Profile', active: false }
          ].map((item, idx) => (
            <button key={idx} className="flex flex-col items-center gap-1">
              <item.icon className={`w-6 h-6 ${item.active ? 'text-orange-500' : 'text-gray-400'}`} />
              <span className={`text-xs ${item.active ? 'text-orange-500' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinHuntHome;
