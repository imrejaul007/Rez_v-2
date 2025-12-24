import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Coins, TrendingUp, Gift, Sparkles, Crown, Users,
  ArrowRight, Lock, Star, Zap, Award, Target, Shield
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import { useUser } from '../contexts/UserContext';
import Header from '../components/layout/Header';
import BottomNav from '../components/layout/BottomNav';
import ModeSwitcher from '../components/home/ModeSwitcher';

const RezPrive = () => {
  const { rezCoins } = useWallet();
  const { user } = useUser();
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  // Mock Privé user data
  const priveData = {
    name: user?.name || 'Valued Member',
    tier: 'Entry',
    tierProgress: 72,
    nextTier: 'Elite',
    pointsToNext: 2800,
    priveCoins: 3150,
    totalScore: 74.5,
    accessState: 'active',
    accessCategory: 'Power User',
    memberSince: '12/23',
    monthlyEarnings: 2840,
    activeCampaigns: 3,
    pillars: [
      { id: 'engagement', name: 'Engagement', score: 78, icon: '📊', color: 'from-green-500/20 to-emerald-500/20' },
      { id: 'trust', name: 'Trust & Integrity', score: 92, icon: '🛡️', color: 'from-blue-500/20 to-cyan-500/20' },
      { id: 'influence', name: 'Influence', score: 65, icon: '📢', color: 'from-pink-500/20 to-rose-500/20' },
      { id: 'economic', name: 'Economic Value', score: 70, icon: '💰', color: 'from-purple-500/20 to-violet-500/20' },
      { id: 'brand_affinity', name: 'Brand Affinity', score: 60, icon: '🎯', color: 'from-orange-500/20 to-amber-500/20' },
      { id: 'network', name: 'Network', score: 55, icon: '🔗', color: 'from-cyan-500/20 to-teal-500/20' }
    ]
  };

  const featuredOffers = [
    {
      id: 1,
      brand: 'Artisan Watch Co',
      title: 'Private Preview Event',
      subtitle: 'Exclusive collection launch',
      reward: '500 Privé Coins',
      expiresIn: '2 days',
      isExclusive: true,
      image: '⌚'
    },
    {
      id: 2,
      brand: 'Luxury Café',
      title: 'Weekend Dining Experience',
      subtitle: 'Complimentary tasting menu',
      reward: '300 ReZ Coins',
      expiresIn: '5 days',
      isExclusive: false,
      image: '☕'
    },
    {
      id: 3,
      brand: 'Premium Spa',
      title: 'Wellness Retreat',
      subtitle: 'Full day spa package',
      reward: '750 Privé Coins',
      expiresIn: '7 days',
      isExclusive: true,
      image: '💆'
    }
  ];

  const quickActions = [
    { id: 'wallet', label: 'Wallet', icon: '◈', route: '/wallet' },
    { id: 'earnings', label: 'Earnings', icon: '↑', route: '/prive/earnings' },
    { id: 'redeem', label: 'Redeem', icon: '◇', route: '/prive/redeem' },
    { id: 'invite', label: 'Invite', icon: '✦', route: '/prive/invite' }
  ];

  const todaysHighlights = [
    {
      id: 1,
      icon: '🎁',
      title: 'Up to 40% at StyleHub',
      subtitle: 'Privé members only',
      badge: 'Limited',
      badgeColor: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      icon: '📍',
      title: 'Café Artisan - 0.5km',
      subtitle: '25% Privé bonus today',
      badge: 'Nearby',
      badgeColor: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      icon: '📢',
      title: 'Brand Campaign',
      subtitle: 'Earn 500 Privé Coins',
      badge: 'New',
      badgeColor: 'from-orange-500 to-amber-500'
    }
  ];

  const handleCheckIn = () => {
    setIsCheckedIn(true);
    // Award daily check-in coins
  };

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <Header />

      {/* Mode Switcher */}
      <ModeSwitcher />

      {/* Page Title */}
      <div className="px-4 py-4 bg-black">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Crown className="w-6 h-6 text-amber-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                ReZ Privé
              </h1>
            </div>
            <p className="text-sm text-gray-400">
                Invite-only luxury experience
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20">
                <Coins className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-400">{priveData.priveCoins}</span>
              </div>
              <Link
                to="/profile"
                className="p-2 rounded-full bg-white/5"
              >
                <Crown className="w-5 h-5 text-amber-400" />
              </Link>
            </div>
          </div>
      </div>

      {/* Premium Member Card */}
      <div className="px-4 py-6">
        <Link
          to="/prive/tier"
          className="block relative overflow-hidden rounded-3xl border border-amber-500/30"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-orange-500/10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />

          <div className="relative p-6">
            {/* Card Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/30 to-yellow-500/30 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">PRIVÉ</div>
                  <h2 className="text-xl font-bold text-white">{priveData.name}</h2>
                  <p className="text-sm text-gray-400">{priveData.accessCategory}</p>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-amber-500/20">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {priveData.tier}
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <div className="text-2xl font-bold text-amber-400">{priveData.totalScore.toFixed(0)}</div>
                <div className="text-xs text-gray-500">Score</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{priveData.priveCoins}</div>
                <div className="text-xs text-gray-500">Privé Coins</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{priveData.activeCampaigns}</div>
                <div className="text-xs text-gray-500">Active</div>
              </div>
            </div>

            {/* Tier Progress */}
            <div>
              <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                <span>Progress to {priveData.nextTier}</span>
                <span>{priveData.tierProgress}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-500"
                  style={{ width: `${priveData.tierProgress}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {priveData.pointsToNext.toLocaleString()} points to next tier
              </p>
            </div>

            {/* Gold line accent */}
            <div className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          </div>
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mb-8">
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((action) => (
            <Link
              key={action.id}
              to={action.route}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all text-center"
            >
              <div className="text-2xl mb-2">{action.icon}</div>
              <div className="text-xs text-gray-400">{action.label}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Daily Check-In */}
      {!isCheckedIn && (
        <div className="px-4 mb-8">
          <button
            onClick={handleCheckIn}
            className="w-full p-6 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 hover:border-emerald-500/50 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/30 flex items-center justify-center">
                  <Gift className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-semibold mb-1">Daily Check-In</h3>
                  <p className="text-sm text-gray-400">Earn 50 Privé Coins</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-400" />
            </div>
          </button>
        </div>
      )}

      {/* Today's Highlights */}
      <div className="px-4 mb-8">
        <h2 className="text-lg font-bold text-white mb-4">Today's Highlights</h2>
        <div className="space-y-3">
          {todaysHighlights.map((highlight) => (
            <div
              key={highlight.id}
              className="p-4 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">{highlight.icon}</div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">{highlight.title}</h3>
                  <p className="text-sm text-gray-400">{highlight.subtitle}</p>
                </div>
                <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${highlight.badgeColor} text-white text-xs font-bold`}>
                  {highlight.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6 Pillars Score */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Your Influence Score</h2>
          <Link to="/prive/score" className="text-sm text-amber-400">
            Details
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {priveData.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`p-4 rounded-2xl bg-gradient-to-br ${pillar.color} border border-white/10`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{pillar.icon}</span>
                <span className="text-lg font-bold text-white">{pillar.score}</span>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{pillar.name}</h3>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white/50 rounded-full transition-all"
                  style={{ width: `${pillar.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Exclusive Offers */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold text-white">Privé Exclusives</h2>
          </div>
          <Link to="/prive/offers" className="text-sm text-amber-400">
            See All
          </Link>
        </div>
        <div className="space-y-3">
          {featuredOffers.map((offer) => (
            <Link
              key={offer.id}
              to={`/prive/offer/${offer.id}`}
              className="block p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center text-3xl">
                  {offer.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-white">{offer.brand}</h3>
                    {offer.isExclusive && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-[10px] font-bold text-amber-400">
                        EXCLUSIVE
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 mb-1">{offer.title}</p>
                  <p className="text-xs text-gray-500">{offer.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Coins className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-bold text-amber-400">{offer.reward}</span>
                </div>
                <span className="text-xs text-gray-500">Expires in {offer.expiresIn}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Status Message */}
      <div className="px-4 mb-8">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-emerald-400" />
            <h3 className="text-white font-semibold">Status Secured</h3>
          </div>
          <p className="text-sm text-gray-400 mb-3">
            Your Privé access is active. Keep engaging to maintain your status.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '85%' }} />
            </div>
            <span className="text-xs text-emerald-400 font-medium">85%</span>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="px-4 mb-8">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-orange-500/10 border border-amber-500/20">
          <p className="text-sm text-gray-300 text-center italic">
            "This is not a discount app. This is status + access + higher rewards."
          </p>
        </div>
      </div>

      {/* Trust Stats */}
      <div className="px-4 mb-8">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-white/5">
            <div className="text-2xl font-bold text-amber-400 mb-1">2.5K</div>
            <div className="text-xs text-gray-500">Members</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5">
            <div className="text-2xl font-bold text-amber-400 mb-1">₹25L+</div>
            <div className="text-xs text-gray-500">Value Unlocked</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5">
            <div className="text-2xl font-bold text-amber-400 mb-1">500+</div>
            <div className="text-xs text-gray-500">Exclusive Offers</div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default RezPrive;
