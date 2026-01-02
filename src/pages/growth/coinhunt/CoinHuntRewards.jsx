import React, { useState } from 'react';
import {
  Gift, Coins, ShoppingBag, Ticket, Percent, Sparkles,
  Clock, ChevronRight, Lock, Check, Star, Award
} from 'lucide-react';

// CoinHunt Rewards: Redeem Coins for Rewards
// Backend API: GET /api/growth/coinhunt/rewards
// Backend API: POST /api/growth/coinhunt/rewards/redeem
// Backend API: GET /api/growth/coinhunt/rewards/history

const CoinHuntRewards = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const userBalance = {
    coins: 12450,
    redeemable: 12000,
    pending: 450
  };

  const rewardCategories = [
    { id: 'all', name: 'All', icon: '🎁' },
    { id: 'vouchers', name: 'Vouchers', icon: '🎟️' },
    { id: 'cashback', name: 'Cashback', icon: '💰' },
    { id: 'products', name: 'Products', icon: '📦' }
  ];

  const featuredRewards = [
    {
      id: 1,
      name: '₹100 Voucher',
      coins: 1000,
      brand: 'Amazon',
      icon: '🛍️',
      category: 'vouchers',
      discount: '10% OFF',
      available: 50,
      expires: '30 days'
    },
    {
      id: 2,
      name: '₹50 Cashback',
      coins: 500,
      brand: 'ReZ Wallet',
      icon: '💵',
      category: 'cashback',
      instant: true,
      available: 100
    },
    {
      id: 3,
      name: 'Movie Ticket',
      coins: 800,
      brand: 'PVR Cinemas',
      icon: '🎬',
      category: 'vouchers',
      available: 25,
      expires: '7 days'
    }
  ];

  const rewardsList = [
    { id: 4, name: '₹200 Voucher', coins: 2000, brand: 'Flipkart', icon: '🛒', category: 'vouchers' },
    { id: 5, name: '₹150 Cashback', coins: 1500, brand: 'ReZ Wallet', icon: '💰', category: 'cashback' },
    { id: 6, name: 'Spotify Premium', coins: 1200, brand: 'Spotify', icon: '🎵', category: 'products' },
    { id: 7, name: '₹500 Voucher', coins: 5000, brand: 'Myntra', icon: '👕', category: 'vouchers' },
    { id: 8, name: 'Coffee Voucher', coins: 300, brand: 'Starbucks', icon: '☕', category: 'vouchers' },
    { id: 9, name: '₹1000 Cashback', coins: 10000, brand: 'ReZ Wallet', icon: '💵', category: 'cashback' }
  ];

  const recentRedemptions = [
    { id: 1, reward: '₹100 Amazon Voucher', coins: 1000, date: '2 days ago', status: 'delivered' },
    { id: 2, reward: '₹50 Cashback', coins: 500, date: '5 days ago', status: 'delivered' },
    { id: 3, reward: 'Movie Ticket', coins: 800, date: '1 week ago', status: 'used' }
  ];

  const milestones = [
    { coins: 5000, reward: 'Bronze Badge', unlocked: true },
    { coins: 10000, reward: 'Silver Badge', unlocked: true },
    { coins: 25000, reward: 'Gold Badge', unlocked: false },
    { coins: 50000, reward: 'Diamond Badge', unlocked: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Gift className="w-6 h-6 text-white" />
              <h1 className="text-xl font-bold text-white">Rewards Store</h1>
            </div>
            <p className="text-purple-100 text-sm">Redeem your coins</p>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-white/20 backdrop-blur rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-purple-100 text-sm">Available Balance</span>
            <span className="text-purple-100 text-xs">Pending: {userBalance.pending} 🪙</span>
          </div>
          <div className="flex items-center gap-2">
            <Coins className="w-8 h-8 text-yellow-400" />
            <span className="text-white text-3xl font-bold">{userBalance.redeemable.toLocaleString()}</span>
            <span className="text-white text-xl">🪙</span>
          </div>
          <p className="text-purple-100 text-xs mt-2">
            Total Earned: {userBalance.coins.toLocaleString()} coins
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {rewardCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Rewards */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            Featured Rewards
          </h2>
          <button className="text-purple-600 text-sm">View All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {featuredRewards.map((reward) => (
            <div key={reward.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-24 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-4xl relative">
                {reward.icon}
                {reward.discount && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                    {reward.discount}
                  </div>
                )}
                {reward.instant && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">
                    Instant
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-bold text-gray-800 text-sm">{reward.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{reward.brand}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-bold text-sm">{reward.coins} 🪙</span>
                  <button
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      userBalance.redeemable >= reward.coins
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                    disabled={userBalance.redeemable < reward.coins}
                  >
                    {userBalance.redeemable >= reward.coins ? 'Redeem' : <Lock className="w-3 h-3" />}
                  </button>
                </div>
                {reward.expires && (
                  <p className="text-xs text-orange-600 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Valid {reward.expires}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Rewards */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">All Rewards</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {rewardsList.map((reward, idx) => (
            <div
              key={reward.id}
              className={`p-4 flex items-center gap-3 ${
                idx !== rewardsList.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-2xl">
                {reward.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-sm">{reward.name}</h3>
                <p className="text-xs text-gray-500">{reward.brand}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-purple-600 text-sm">{reward.coins} 🪙</p>
                <button
                  className={`mt-1 text-xs px-3 py-1 rounded-full font-medium ${
                    userBalance.redeemable >= reward.coins
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                  disabled={userBalance.redeemable < reward.coins}
                >
                  {userBalance.redeemable >= reward.coins ? 'Redeem' : 'Locked'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Coin Milestones</h2>
        <div className="bg-white rounded-xl shadow-sm p-4">
          {milestones.map((milestone, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 py-3 ${
                idx !== milestones.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                milestone.unlocked ? 'bg-green-500' : 'bg-gray-200'
              }`}>
                {milestone.unlocked ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <Lock className="w-5 h-5 text-gray-400" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-800">{milestone.reward}</p>
                <p className="text-xs text-gray-500">{milestone.coins.toLocaleString()} coins</p>
              </div>
              {milestone.unlocked && (
                <Award className="w-6 h-6 text-yellow-500" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recent Redemptions */}
      <div className="px-4 mt-6 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Recent Redemptions</h2>
          <button className="text-purple-600 text-sm">View All</button>
        </div>
        <div className="space-y-2">
          {recentRedemptions.map((redemption) => (
            <div key={redemption.id} className="bg-white rounded-xl p-3 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800 text-sm">{redemption.reward}</p>
                <p className="text-xs text-gray-500">{redemption.date}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">-{redemption.coins} 🪙</p>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  redemption.status === 'delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {redemption.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinHuntRewards;
