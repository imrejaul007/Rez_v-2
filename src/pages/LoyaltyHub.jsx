import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Trophy,
  Target,
  Flame,
  TrendingUp,
  ChevronRight,
  Star,
  Award,
  Crown,
  Zap,
  Gift,
  Calendar,
  Users,
  Sparkles,
  BadgeCheck,
  Clock,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  CheckCircle,
  Lock,
  Heart
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import Badge from '../components/common/Badge';
import Card from '../components/common/Card';

const LoyaltyHub = () => {
  const navigate = useNavigate();
  const { brandedCoins, rezCoins, totalCoinsValue } = useWallet();

  const [activeTab, setActiveTab] = useState('overview'); // overview, brands, streaks, rewards

  // Calculate overall loyalty stats
  const totalBrands = brandedCoins.length;
  const activeBrands = brandedCoins.filter(b => b.loyaltyData.visitsThisMonth > 0).length;
  const totalLifetimeVisits = brandedCoins.reduce((sum, b) => sum + b.loyaltyData.lifetimeVisits, 0);
  const totalCashbackSaved = brandedCoins.reduce((sum, b) => sum + b.loyaltyData.cashbackSaved, 0);
  const totalBrandCoins = brandedCoins.reduce((sum, b) => sum + b.balance, 0);
  const activeStreaks = brandedCoins.filter(b => b.loyaltyData.currentStreak > 0).length;

  // Get brands sorted by different criteria
  const brandsByProgress = [...brandedCoins].sort((a, b) => {
    const progressA = (a.loyaltyData.visitsThisMonth / a.loyaltyData.targetVisitsThisMonth) * 100;
    const progressB = (b.loyaltyData.visitsThisMonth / b.loyaltyData.targetVisitsThisMonth) * 100;
    return progressB - progressA;
  });

  const brandsByVisits = [...brandedCoins].sort((a, b) =>
    b.loyaltyData.lifetimeVisits - a.loyaltyData.lifetimeVisits
  );

  const brandsByCoins = [...brandedCoins].sort((a, b) => b.balance - a.balance);

  const brandsByStreak = [...brandedCoins].sort((a, b) =>
    b.loyaltyData.currentStreak - a.loyaltyData.currentStreak
  );

  // Almost there - brands close to next reward
  const almostThere = brandedCoins.filter(b => {
    const progress = (b.loyaltyData.visitsThisMonth / b.loyaltyData.targetVisitsThisMonth) * 100;
    return progress >= 60 && progress < 100;
  });

  // Calculate tier distribution
  const tierCounts = {
    bronze: brandedCoins.filter(b => b.loyaltyData.loyaltyLevel === 'bronze').length,
    silver: brandedCoins.filter(b => b.loyaltyData.loyaltyLevel === 'silver').length,
    gold: brandedCoins.filter(b => b.loyaltyData.loyaltyLevel === 'gold').length,
    platinum: brandedCoins.filter(b => b.loyaltyData.loyaltyLevel === 'platinum').length,
  };

  const getTierIcon = (level) => {
    switch (level) {
      case 'bronze': return '🥉';
      case 'silver': return '🥈';
      case 'gold': return '🥇';
      case 'platinum': return '👑';
      default: return '🏆';
    }
  };

  const getTierColor = (level) => {
    switch (level) {
      case 'bronze': return 'from-orange-500/20 to-amber-600/10 border-orange-500/30';
      case 'silver': return 'from-gray-400/20 to-gray-600/10 border-gray-400/30';
      case 'gold': return 'from-amber-500/20 to-yellow-600/10 border-amber-500/30';
      case 'platinum': return 'from-purple-500/20 to-pink-600/10 border-purple-500/30';
      default: return 'from-emerald-500/20 to-teal-600/10 border-emerald-500/30';
    }
  };

  const calculateProgress = (brand) => {
    return (brand.loyaltyData.visitsThisMonth / brand.loyaltyData.targetVisitsThisMonth) * 100;
  };

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-50 glass border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10">
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-white">Loyalty Hub</h1>
              <p className="text-xs text-gray-400">Your rewards across all brands</p>
            </div>
          </div>
          <Trophy className="w-6 h-6 text-amber-400" />
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 px-4 pb-3 overflow-x-auto hide-scrollbar">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'overview'
                ? 'bg-emerald-500 text-white'
                : 'bg-white/10 text-gray-400'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('brands')}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'brands'
                ? 'bg-emerald-500 text-white'
                : 'bg-white/10 text-gray-400'
            }`}
          >
            All Brands ({totalBrands})
          </button>
          <button
            onClick={() => setActiveTab('streaks')}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'streaks'
                ? 'bg-emerald-500 text-white'
                : 'bg-white/10 text-gray-400'
            }`}
          >
            Streaks 🔥
          </button>
          <button
            onClick={() => setActiveTab('rewards')}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === 'rewards'
                ? 'bg-emerald-500 text-white'
                : 'bg-white/10 text-gray-400'
            }`}
          >
            Rewards
          </button>
        </div>
      </div>

      {/* OVERVIEW TAB */}
      {activeTab === 'overview' && (
        <div className="px-4 py-4 space-y-6">
          {/* Overall Stats Hero */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-teal-600/10 border border-emerald-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Your Loyalty Status</h2>
                <p className="text-sm text-gray-400">Across {totalBrands} brands</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-4 rounded-2xl bg-white/5">
                <p className="text-2xl font-bold text-white mb-1">{totalLifetimeVisits}</p>
                <p className="text-xs text-gray-400">Total Visits</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5">
                <p className="text-2xl font-bold text-emerald-400 mb-1">₹{totalCashbackSaved.toLocaleString()}</p>
                <p className="text-xs text-gray-400">Saved</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5">
                <p className="text-2xl font-bold text-amber-400 mb-1">{totalBrandCoins}</p>
                <p className="text-xs text-gray-400">Brand Coins</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5">
                <p className="text-2xl font-bold text-orange-400 mb-1">{activeStreaks}</p>
                <p className="text-xs text-gray-400">Active Streaks</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
              <p className="text-sm text-gray-300 text-center">
                <span className="font-semibold text-white">{activeBrands} brands</span> active this month
              </p>
            </div>
          </div>

          {/* Tier Distribution */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Your Membership Tiers</h3>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(tierCounts).map(([tier, count]) => (
                count > 0 && (
                  <div
                    key={tier}
                    className={`p-4 rounded-2xl bg-gradient-to-br border ${getTierColor(tier)}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{getTierIcon(tier)}</span>
                      <p className="text-sm font-bold text-white capitalize">{tier}</p>
                    </div>
                    <p className="text-2xl font-bold text-white">{count}</p>
                    <p className="text-xs text-gray-400">{count === 1 ? 'brand' : 'brands'}</p>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Almost There - Quick Actions */}
          {almostThere.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-bold text-white">Almost There!</h3>
                </div>
                <Badge variant="default" size="sm" className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                  {almostThere.length} close
                </Badge>
              </div>

              <div className="space-y-3">
                {almostThere.map((brand) => {
                  const progress = calculateProgress(brand);
                  const remaining = brand.loyaltyData.targetVisitsThisMonth - brand.loyaltyData.visitsThisMonth;

                  return (
                    <Link
                      key={brand.brandId}
                      to={`/brand/${brand.brandId}`}
                      className="block p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-600/10 border border-amber-500/30 active:scale-98 transition-transform"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl flex-shrink-0">
                          {brand.logo}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-white mb-1">{brand.merchant}</p>
                          <p className="text-xs text-amber-300">
                            {remaining} more {remaining === 1 ? 'visit' : 'visits'} to unlock reward
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>

                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Top Brands by Visits */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-white">Most Visited</h3>
              <button
                onClick={() => setActiveTab('brands')}
                className="text-sm text-emerald-400 font-semibold"
              >
                View All
              </button>
            </div>

            <div className="space-y-2">
              {brandsByVisits.slice(0, 3).map((brand, index) => (
                <Link
                  key={brand.brandId}
                  to={`/brand/${brand.brandId}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 active:scale-98 transition-transform"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center font-bold text-white text-sm">
                    #{index + 1}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-xl flex-shrink-0">
                    {brand.logo}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{brand.merchant}</p>
                    <p className="text-xs text-gray-400">{brand.loyaltyData.lifetimeVisits} visits</p>
                  </div>
                  <Badge variant="default" size="sm" className={`${getTierColor(brand.loyaltyData.loyaltyLevel)}`}>
                    {getTierIcon(brand.loyaltyData.loyaltyLevel)} {brand.loyaltyData.loyaltyLevel}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>

          {/* Active Streaks Preview */}
          {activeStreaks > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-400" />
                  <h3 className="text-lg font-bold text-white">Active Streaks</h3>
                </div>
                <button
                  onClick={() => setActiveTab('streaks')}
                  className="text-sm text-emerald-400 font-semibold"
                >
                  View All
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {brandsByStreak.filter(b => b.loyaltyData.currentStreak > 0).slice(0, 4).map((brand) => (
                  <Link
                    key={brand.brandId}
                    to={`/brand/${brand.brandId}`}
                    className="p-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-600/10 border border-orange-500/30 active:scale-98 transition-transform"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{brand.logo}</span>
                      <Flame className="w-5 h-5 text-orange-400" />
                    </div>
                    <p className="text-sm font-semibold text-white mb-1">{brand.merchant}</p>
                    <p className="text-xs text-orange-300">{brand.loyaltyData.currentStreak} week streak</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* BRANDS TAB */}
      {activeTab === 'brands' && (
        <div className="px-4 py-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">All Your Brands</h3>
            <Badge variant="default" size="sm" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
              {totalBrands} brands
            </Badge>
          </div>

          {/* Brand Cards */}
          {brandsByProgress.map((brand) => {
            const progress = calculateProgress(brand);
            const remaining = brand.loyaltyData.targetVisitsThisMonth - brand.loyaltyData.visitsThisMonth;

            return (
              <Link
                key={brand.brandId}
                to={`/brand/${brand.brandId}`}
                className="block"
              >
                <Card className="p-4" hover>
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl flex-shrink-0 shadow-lg">
                      {brand.logo}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-base font-bold text-white">{brand.merchant}</p>
                        <Badge
                          variant="default"
                          size="xs"
                          className={getTierColor(brand.loyaltyData.loyaltyLevel)}
                        >
                          {getTierIcon(brand.loyaltyData.loyaltyLevel)}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                        <span>{brand.loyaltyData.lifetimeVisits} total visits</span>
                        <span>•</span>
                        <span>Since {brand.loyaltyData.memberSince}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                          <p className="text-xs text-gray-400 mb-0.5">Coins</p>
                          <p className="text-sm font-bold text-amber-400">{brand.balance}</p>
                        </div>
                        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                          <p className="text-xs text-gray-400 mb-0.5">Saved</p>
                          <p className="text-sm font-bold text-emerald-400">₹{brand.loyaltyData.cashbackSaved}</p>
                        </div>
                        <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                          <p className="text-xs text-gray-400 mb-0.5">Streak</p>
                          <p className="text-sm font-bold text-purple-400">
                            {brand.loyaltyData.currentStreak > 0 ? `${brand.loyaltyData.currentStreak}w` : '-'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <ChevronRight className="w-5 h-5 text-gray-500 mt-1" />
                  </div>

                  {/* Progress This Month */}
                  <div className="pt-3 border-t border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs text-gray-400">This Month</p>
                      <p className="text-xs font-semibold text-white">
                        {brand.loyaltyData.visitsThisMonth}/{brand.loyaltyData.targetVisitsThisMonth} visits
                      </p>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          progress >= 80
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                            : progress >= 50
                            ? 'bg-gradient-to-r from-amber-500 to-orange-400'
                            : 'bg-gradient-to-r from-gray-500 to-gray-600'
                        }`}
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                    {remaining > 0 && (
                      <p className="text-xs text-gray-500 mt-1">
                        {remaining} more to unlock reward
                      </p>
                    )}
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      )}

      {/* STREAKS TAB */}
      {activeTab === 'streaks' && (
        <div className="px-4 py-4 space-y-6">
          <div className="p-6 rounded-3xl bg-gradient-to-br from-orange-500/20 to-red-600/10 border border-orange-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                <Flame className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Visit Streaks</h2>
                <p className="text-sm text-gray-400">{activeStreaks} active streaks</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white/5">
                <p className="text-2xl font-bold text-orange-400 mb-1">{activeStreaks}</p>
                <p className="text-xs text-gray-400">Active</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5">
                <p className="text-2xl font-bold text-white mb-1">
                  {Math.max(...brandedCoins.map(b => b.loyaltyData.currentStreak))}
                </p>
                <p className="text-xs text-gray-400">Longest (weeks)</p>
              </div>
            </div>
          </div>

          {/* Active Streaks */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Active Streaks 🔥</h3>
            {brandsByStreak.filter(b => b.loyaltyData.currentStreak > 0).length > 0 ? (
              <div className="space-y-3">
                {brandsByStreak.filter(b => b.loyaltyData.currentStreak > 0).map((brand) => (
                  <Link
                    key={brand.brandId}
                    to={`/brand/${brand.brandId}`}
                    className="block p-4 rounded-2xl bg-gradient-to-r from-orange-500/10 to-red-600/10 border border-orange-500/30 active:scale-98 transition-transform"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl flex-shrink-0">
                        {brand.logo}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-white mb-1">{brand.merchant}</p>
                        <div className="flex items-center gap-2">
                          <Flame className="w-4 h-4 text-orange-400" />
                          <p className="text-xs text-orange-300">
                            {brand.loyaltyData.currentStreak} week streak • +{brand.loyaltyData.streakReward} coins bonus
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>

                    <div className="p-3 rounded-xl bg-white/5">
                      <p className="text-xs text-gray-300">
                        🎁 Keep visiting weekly to maintain your streak and earn bonus rewards
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <p className="text-sm text-gray-400">No active streaks yet. Visit brands weekly to start!</p>
              </div>
            )}
          </div>

          {/* Start a Streak */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Start a Streak</h3>
            <div className="space-y-2">
              {brandsByStreak.filter(b => b.loyaltyData.currentStreak === 0).slice(0, 5).map((brand) => (
                <Link
                  key={brand.brandId}
                  to={`/brand/${brand.brandId}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 active:scale-98 transition-transform"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-xl flex-shrink-0">
                    {brand.logo}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{brand.merchant}</p>
                    <p className="text-xs text-gray-400">Visit weekly to earn +{brand.loyaltyData.streakReward} bonus coins</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* REWARDS TAB */}
      {activeTab === 'rewards' && (
        <div className="px-4 py-4 space-y-6">
          <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-600/10 border border-purple-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                <Gift className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Your Rewards</h2>
                <p className="text-sm text-gray-400">Earned across all brands</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white/5">
                <p className="text-2xl font-bold text-amber-400 mb-1">{totalBrandCoins}</p>
                <p className="text-xs text-gray-400">Brand Coins</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5">
                <p className="text-2xl font-bold text-emerald-400 mb-1">{rezCoins.balance}</p>
                <p className="text-xs text-gray-400">ReZ Coins</p>
              </div>
            </div>
          </div>

          {/* Brands by Coins */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Brand Coins Balance</h3>
            <div className="space-y-3">
              {brandsByCoins.map((brand) => (
                <Link
                  key={brand.brandId}
                  to={`/brand/${brand.brandId}`}
                  className="block p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-600/10 border border-amber-500/30 active:scale-98 transition-transform"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl flex-shrink-0">
                      {brand.logo}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-white mb-1">{brand.merchant}</p>
                      <p className="text-xs text-gray-400">{brand.usableAt}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-amber-400">{brand.balance}</p>
                      <p className="text-xs text-gray-400">coins</p>
                    </div>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <div className="flex-1 p-2 rounded-lg bg-white/5 text-center">
                      <p className="text-xs text-gray-400">Earned</p>
                      <p className="text-sm font-semibold text-white">{brand.loyaltyData.totalCoinsEarned}</p>
                    </div>
                    <div className="flex-1 p-2 rounded-lg bg-white/5 text-center">
                      <p className="text-xs text-gray-400">Saved</p>
                      <p className="text-sm font-semibold text-emerald-400">₹{brand.loyaltyData.cashbackSaved}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Total Savings */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-600/10 border border-emerald-500/30">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-400">Total Cashback Saved</p>
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-3xl font-bold text-emerald-400 mb-1">₹{totalCashbackSaved.toLocaleString()}</p>
            <p className="text-xs text-gray-300">Across {totalBrands} brands</p>
          </div>
        </div>
      )}

      {/* Quick Access to Loyalty Rewards Page */}
      <div className="fixed bottom-20 left-4 right-4 z-40">
        <Link
          to="/exclusive/loyalty"
          className="block p-4 rounded-2xl glass border border-white/20 active:scale-98 transition-transform"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-sm font-semibold text-white">View Loyalty Challenges</p>
                <p className="text-xs text-gray-400">Complete milestones & earn rewards</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LoyaltyHub;
