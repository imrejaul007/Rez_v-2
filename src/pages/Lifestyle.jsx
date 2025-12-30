import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Wallet, Coins, Gift, Percent, Receipt, QrCode, Upload, Users, Trophy,
  ShoppingBag, Sparkles, Dumbbell, Calendar, UtensilsCrossed, Home as HomeIcon,
  TrendingUp, Award, ArrowRight, User, Bell, Search, Heart, Zap, Target,
  Clock, MapPin, Star, ChevronRight, Flame, Tag, CreditCard, PiggyBank,
  Ticket, CheckCircle, Lock, Scan, Share2, Crown, Timer, BadgePercent
} from 'lucide-react';

export default function Lifestyle() {
  const navigate = useNavigate();

  // User Wallet & Savings Data
  const walletData = {
    rezCoins: 2450,
    brandedCoins: 850,
    promoCoins: 200,
    totalSaved: 12450,
    monthSaved: 3240,
    cashbackPending: 450,
    lockedDeals: 3
  };

  // Today's Earnings Summary
  const todayEarnings = [
    { label: 'Daily Check-in', value: '+50', done: true },
    { label: 'Upload Bill', value: '+₹200', done: false },
    { label: 'Share Offer', value: '+20', done: false },
    { label: 'Write Review', value: '+50', done: false }
  ];

  // Quick Earning Actions
  const earningActions = [
    { id: 'checkin', title: 'Daily Check-in', subtitle: 'Claim 50 coins', icon: CheckCircle, color: 'from-green-500 to-emerald-600', path: '/daily-checkin', coins: '+50' },
    { id: 'upload', title: 'Upload Bill', subtitle: 'Get ₹50-200 back', icon: Upload, color: 'from-blue-500 to-indigo-600', path: '/upload-bill', coins: '+₹200' },
    { id: 'refer', title: 'Refer Friends', subtitle: 'Earn 100 coins each', icon: Users, color: 'from-purple-500 to-pink-600', path: '/refer', coins: '+100' },
    { id: 'scan', title: 'Scan & Pay', subtitle: 'Instant cashback', icon: QrCode, color: 'from-orange-500 to-red-600', path: '/scan-pay', coins: '+5%' }
  ];

  // Hot Offers in Lifestyle
  const hotOffers = [
    {
      id: 1,
      brand: 'Zara',
      category: 'Fashion',
      title: 'Flat 40% Off + 3x Coins',
      description: 'On all ethnic wear',
      image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=400&h=300&fit=crop',
      expiry: '2 hours left',
      cashback: '₹500',
      tag: 'Lightning Deal'
    },
    {
      id: 2,
      brand: 'Lakme Salon',
      category: 'Beauty',
      title: 'BOGO on Services',
      description: 'Facial + Cleanup combo',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop',
      expiry: '5 hours left',
      cashback: '₹350',
      tag: 'Buy 1 Get 1'
    },
    {
      id: 3,
      brand: 'Cult.fit',
      category: 'Fitness',
      title: '50% Off Membership',
      description: '3 months unlimited access',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
      expiry: 'Today only',
      cashback: '₹1,500',
      tag: 'Mega Deal'
    }
  ];

  // Lifestyle Categories
  const categories = [
    { id: 'fashion', name: 'Fashion', icon: ShoppingBag, color: 'from-purple-500 to-pink-500', path: '/fashion', offers: 234, cashback: 'Up to 15%' },
    { id: 'beauty', name: 'Beauty', icon: Sparkles, color: 'from-pink-500 to-rose-500', path: '/beauty', offers: 156, cashback: 'Up to 20%' },
    { id: 'fitness', name: 'Fitness', icon: Dumbbell, color: 'from-green-500 to-teal-500', path: '/fitness', offers: 89, cashback: 'Up to 25%' },
    { id: 'events', name: 'Events', icon: Calendar, color: 'from-blue-500 to-indigo-500', path: '/lifestyle/events', offers: 45, cashback: 'Up to 10%' },
    { id: 'food', name: 'Food', icon: UtensilsCrossed, color: 'from-orange-500 to-red-500', path: '/lifestyle/food', offers: 312, cashback: 'Up to 30%' },
    { id: 'home', name: 'Home', icon: HomeIcon, color: 'from-amber-500 to-yellow-500', path: '/home-services', offers: 78, cashback: 'Up to 12%' }
  ];

  // Offer Types
  const offerTypes = [
    { id: 'nearby', title: 'Nearby Offers', subtitle: '45 stores within 2km', icon: MapPin, color: 'bg-blue-100 text-blue-600', path: '/nearby-offers' },
    { id: 'today', title: "Today's Deals", subtitle: '23 expiring today', icon: Clock, color: 'bg-red-100 text-red-600', path: '/todays-offers' },
    { id: 'bogo', title: 'Buy 1 Get 1', subtitle: '67 BOGO offers', icon: Gift, color: 'bg-green-100 text-green-600', path: '/bogo-offers' },
    { id: 'lock', title: 'Lock Price', subtitle: 'Lock now, buy later', icon: Lock, color: 'bg-purple-100 text-purple-600', path: '/lock-price' },
    { id: 'trending', title: 'Trending', subtitle: 'Most popular now', icon: TrendingUp, color: 'bg-orange-100 text-orange-600', path: '/trending' },
    { id: 'clearance', title: 'Clearance', subtitle: 'Up to 70% off', icon: BadgePercent, color: 'bg-pink-100 text-pink-600', path: '/clearance' }
  ];

  // Exclusive Programs
  const exclusivePrograms = [
    { id: 'student', title: 'Student Zone', subtitle: 'Extra 10% off + rewards', icon: '🎓', path: '/student-zone' },
    { id: 'birthday', title: 'Birthday Special', subtitle: 'Free gift + 2x coins', icon: '🎂', path: '/birthday-offers' },
    { id: 'women', title: 'Women Exclusive', subtitle: 'Special deals for her', icon: '👩', path: '/women-exclusive' },
    { id: 'corporate', title: 'Corporate Perks', subtitle: 'Employee benefits', icon: '💼', path: '/corporate-perks' }
  ];

  // Games & Rewards
  const gamesRewards = [
    { id: 'spin', title: 'Spin & Win', subtitle: 'Win up to ₹1000', icon: '🎰', coins: 'Free spin available', path: '/spin-win' },
    { id: 'scratch', title: 'Scratch Card', subtitle: '3 cards available', icon: '🎴', coins: 'Guaranteed rewards', path: '/scratch-cards' },
    { id: 'quiz', title: 'Daily Quiz', subtitle: 'Answer & earn', icon: '❓', coins: '+25 coins', path: '/daily-quiz' },
    { id: 'leaderboard', title: 'Leaderboard', subtitle: 'Rank #234', icon: '🏆', coins: 'Top 100 win', path: '/leaderboard' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header with Wallet Summary */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-purple-200">Good evening,</div>
                <div className="font-bold">Arjun</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => navigate('/search')} className="p-2 bg-white/10 rounded-full">
                <Search className="w-5 h-5" />
              </button>
              <button onClick={() => navigate('/notifications')} className="p-2 bg-white/10 rounded-full relative">
                <Bell className="w-5 h-5" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <button onClick={() => navigate('/scan-pay')} className="p-2 bg-white/10 rounded-full">
                <QrCode className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Wallet Card */}
        <div className="px-4 pb-6">
          <button
            onClick={() => navigate('/wallet')}
            className="w-full bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5" />
                <span className="font-semibold">My Wallet</span>
              </div>
              <ChevronRight className="w-5 h-5 text-purple-200" />
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Coins className="w-4 h-4 text-yellow-400" />
                  <span className="text-xl font-bold">{walletData.rezCoins.toLocaleString()}</span>
                </div>
                <div className="text-xs text-purple-200">RezCoins</div>
              </div>
              <div className="border-x border-white/20">
                <div className="text-xl font-bold text-green-400 mb-1">₹{walletData.monthSaved.toLocaleString()}</div>
                <div className="text-xs text-purple-200">Saved This Month</div>
              </div>
              <div>
                <div className="text-xl font-bold text-yellow-400 mb-1">₹{walletData.cashbackPending}</div>
                <div className="text-xs text-purple-200">Pending Cashback</div>
              </div>
            </div>
          </button>
        </div>

        {/* Quick Stats Row */}
        <div className="px-4 pb-4 flex gap-3 overflow-x-auto scrollbar-hide">
          <div className="flex-shrink-0 bg-white/10 rounded-xl px-4 py-2 flex items-center gap-2">
            <PiggyBank className="w-4 h-4 text-green-400" />
            <span className="text-sm">Total Saved: <strong>₹{walletData.totalSaved.toLocaleString()}</strong></span>
          </div>
          <div className="flex-shrink-0 bg-white/10 rounded-xl px-4 py-2 flex items-center gap-2">
            <Lock className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">Locked Deals: <strong>{walletData.lockedDeals}</strong></span>
          </div>
          <div className="flex-shrink-0 bg-white/10 rounded-xl px-4 py-2 flex items-center gap-2">
            <Tag className="w-4 h-4 text-pink-400" />
            <span className="text-sm">Branded Coins: <strong>{walletData.brandedCoins}</strong></span>
          </div>
        </div>
      </div>

      {/* Earning Actions */}
      <div className="px-4 py-4 -mt-2">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-gray-900">Earn More Coins</h2>
            <button onClick={() => navigate('/earn')} className="text-sm text-purple-600 font-semibold">View All</button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {earningActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => navigate(action.path)}
                  className="flex flex-col items-center text-center"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-1`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs font-medium text-gray-900 leading-tight">{action.title}</div>
                  <div className="text-xs text-green-600 font-bold">{action.coins}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Offer Types Grid */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-900">Browse Offers</h2>
          <button onClick={() => navigate('/all-offers')} className="text-sm text-purple-600 font-semibold">All Offers</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {offerTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => navigate(type.path)}
                className="bg-white rounded-xl p-3 border border-gray-100 hover:shadow-md transition-all text-left"
              >
                <div className={`w-10 h-10 ${type.color} rounded-lg flex items-center justify-center mb-2`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-gray-900">{type.title}</div>
                <div className="text-xs text-gray-500">{type.subtitle}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hot Deals - Lightning */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-900 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Lightning Deals
          </h2>
          <button className="text-sm text-purple-600 font-semibold flex items-center gap-1">
            <Timer className="w-4 h-4" />
            See All
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {hotOffers.map((offer) => (
            <div
              key={offer.id}
              className="flex-shrink-0 w-64 bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="relative">
                <img src={offer.image} alt={offer.brand} className="w-full h-32 object-cover" />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Flame className="w-3 h-3" />
                  {offer.tag}
                </div>
                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                  {offer.expiry}
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">{offer.category}</span>
                  <span className="text-xs text-gray-500">{offer.brand}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{offer.title}</h3>
                <p className="text-xs text-gray-600 mb-2">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-green-600">
                    <CreditCard className="w-4 h-4" />
                    <span className="text-sm font-bold">{offer.cashback} cashback</span>
                  </div>
                  <button className="bg-purple-600 text-white px-3 py-1 rounded-lg text-xs font-semibold">
                    Grab
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lifestyle Categories */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-900">Lifestyle Categories</h2>
          <span className="text-xs text-gray-500">914 total offers</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => navigate(category.path)}
                className={`bg-gradient-to-br ${category.color} rounded-2xl p-4 text-white text-left hover:shadow-lg transition-all`}
              >
                <Icon className="w-8 h-8 mb-2 opacity-90" />
                <div className="font-bold text-sm mb-1">{category.name}</div>
                <div className="text-xs opacity-80">{category.offers} offers</div>
                <div className="text-xs font-semibold mt-1 bg-white/20 rounded-full px-2 py-0.5 inline-block">
                  {category.cashback}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Exclusive Programs */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-900 flex items-center gap-2">
            <Crown className="w-5 h-5 text-yellow-500" />
            Exclusive Programs
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {exclusivePrograms.map((program) => (
            <button
              key={program.id}
              onClick={() => navigate(program.path)}
              className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all flex items-center gap-3"
            >
              <div className="text-3xl">{program.icon}</div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">{program.title}</div>
                <div className="text-xs text-gray-500">{program.subtitle}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Games & Rewards */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-900 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-orange-500" />
            Games & Rewards
          </h2>
          <button className="text-sm text-purple-600 font-semibold">Play All</button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {gamesRewards.map((game) => (
            <button
              key={game.id}
              onClick={() => navigate(game.path)}
              className="flex-shrink-0 w-36 bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all text-center"
            >
              <div className="text-4xl mb-2">{game.icon}</div>
              <div className="font-semibold text-gray-900 text-sm mb-1">{game.title}</div>
              <div className="text-xs text-green-600 font-medium">{game.coins}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Upload Bill CTA */}
      <div className="px-4 py-4">
        <button
          onClick={() => navigate('/upload-bill')}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-5 text-white flex items-center justify-between hover:shadow-lg transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
              <Receipt className="w-8 h-8" />
            </div>
            <div className="text-left">
              <div className="font-bold text-lg">Upload Bill & Earn</div>
              <div className="text-sm opacity-90">Get ₹50-200 cashback on every bill</div>
            </div>
          </div>
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* Refer & Earn */}
      <div className="px-4 pb-6">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Share2 className="w-5 h-5" />
                <span className="font-bold">Refer & Earn</span>
              </div>
              <div className="text-2xl font-bold mb-1">₹100 per friend</div>
              <div className="text-sm opacity-90">Both you and your friend get ₹100 + 100 coins</div>
            </div>
            <button
              onClick={() => navigate('/refer')}
              className="bg-white text-purple-600 px-4 py-2 rounded-xl font-bold hover:shadow-lg"
            >
              Invite Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
