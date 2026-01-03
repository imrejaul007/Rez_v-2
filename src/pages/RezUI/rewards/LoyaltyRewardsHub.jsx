import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Trophy,
  Target,
  Flame,
  Gift,
  Star,
  TrendingUp,
  ChevronRight,
  Award,
  Crown,
  Zap,
  CheckCircle,
  Lock,
  Users,
  ShoppingBag,
  Sparkles,
  Heart,
  Eye,
  Calendar
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import Badge from '../components/common/Badge';
import Card from '../components/common/Card';
import {
  brandRewards,
  categoryRewards,
  appWideRewards,
  calculateRewardProgress
} from '../data/rewardsData';

const LoyaltyRewardsHub = () => {
  const navigate = useNavigate();
  const { brandedCoins, rezCoins } = useWallet();

  // Main navigation: loyalty, rewards
  const [activeSection, setActiveSection] = useState('loyalty'); // loyalty, rewards

  // Sub-navigation for loyalty section
  const [loyaltyTab, setLoyaltyTab] = useState('overview'); // overview, brands, streaks

  // Sub-navigation for rewards section
  const [rewardsTab, setRewardsTab] = useState('app'); // app, category, brand

  // Calculate stats
  const totalVisits = brandedCoins.reduce((sum, b) => sum + b.loyaltyData.lifetimeVisits, 0);
  const totalBrands = brandedCoins.length;
  const activeBrands = brandedCoins.filter(b => b.loyaltyData.visitsThisMonth > 0).length;
  const totalCashbackSaved = brandedCoins.reduce((sum, b) => sum + b.loyaltyData.cashbackSaved, 0);
  const totalBrandCoins = brandedCoins.reduce((sum, b) => sum + b.balance, 0);
  const activeStreaks = brandedCoins.filter(b => b.loyaltyData.currentStreak > 0).length;

  const categoriesUsed = new Set(brandedCoins.map(b => {
    if (b.brandId === 'starbucks' || b.brandId === 'ccd' || b.brandId === 'biryani-blues' || b.brandId === 'dominos') return 'Food & Dining';
    if (b.brandId === 'lakme' || b.brandId === 'nykaa') return 'Beauty & Wellness';
    if (b.brandId === 'zara') return 'Fashion';
    return 'Other';
  })).size;

  // Sort functions
  const brandsByProgress = [...brandedCoins].sort((a, b) => {
    const progressA = (a.loyaltyData.visitsThisMonth / a.loyaltyData.targetVisitsThisMonth) * 100;
    const progressB = (b.loyaltyData.visitsThisMonth / b.loyaltyData.targetVisitsThisMonth) * 100;
    return progressB - progressA;
  });

  const brandsByVisits = [...brandedCoins].sort((a, b) =>
    b.loyaltyData.lifetimeVisits - a.loyaltyData.lifetimeVisits
  );

  const brandsByStreak = [...brandedCoins].sort((a, b) =>
    b.loyaltyData.currentStreak - a.loyaltyData.currentStreak
  );

  const brandsByCoins = [...brandedCoins].sort((a, b) => b.balance - a.balance);

  const almostThere = brandedCoins.filter(b => {
    const progress = (b.loyaltyData.visitsThisMonth / b.loyaltyData.targetVisitsThisMonth) * 100;
    return progress >= 60 && progress < 100;
  });

  // Category calculations
  const foodDiningVisits = brandedCoins
    .filter(b => ['starbucks', 'ccd', 'biryani-blues', 'dominos'].includes(b.brandId))
    .reduce((sum, b) => sum + b.loyaltyData.lifetimeVisits, 0);

  const beautyVisits = brandedCoins
    .filter(b => ['lakme', 'nykaa'].includes(b.brandId))
    .reduce((sum, b) => sum + b.loyaltyData.lifetimeVisits, 0);

  const fashionVisits = brandedCoins
    .filter(b => ['zara'].includes(b.brandId))
    .reduce((sum, b) => sum + b.loyaltyData.lifetimeVisits, 0);

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'claimed':
        return 'from-emerald-500/20 to-teal-600/10 border-emerald-500/30';
      case 'current':
        return 'from-amber-500/20 to-orange-600/10 border-amber-500/50';
      case 'locked':
        return 'from-gray-500/20 to-gray-600/10 border-gray-500/30';
      default:
        return 'from-white/5 to-white/10 border-rez-gray-200 dark:border-white/10';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'claimed':
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      case 'current':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'locked':
        return <Lock className="w-5 h-5 text-rez-gray-600 dark:text-gray-500" />;
      default:
        return null;
    }
  };

  const tierCounts = {
    bronze: brandedCoins.filter(b => b.loyaltyData.loyaltyLevel === 'bronze').length,
    silver: brandedCoins.filter(b => b.loyaltyData.loyaltyLevel === 'silver').length,
    gold: brandedCoins.filter(b => b.loyaltyData.loyaltyLevel === 'gold').length,
    platinum: brandedCoins.filter(b => b.loyaltyData.loyaltyLevel === 'platinum').length,
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-50 glass border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-rez-navy dark:text-white">Loyalty & Rewards</h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Track progress & unlock rewards</p>
            </div>
          </div>
          <Trophy className="w-6 h-6 text-amber-400" />
        </div>

        {/* Main Section Tabs */}
        <div className="flex gap-2 px-4 pb-3 border-b border-rez-gray-200 dark:border-white/10">
          <button
            onClick={() => setActiveSection('loyalty')}
            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeSection === 'loyalty'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Trophy className="w-4 h-4" />
              <span>Loyalty Status</span>
            </div>
          </button>
          <button
            onClick={() => setActiveSection('rewards')}
            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeSection === 'rewards'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Gift className="w-4 h-4" />
              <span>Rewards Journey</span>
            </div>
          </button>
        </div>

        {/* Sub-navigation for Loyalty */}
        {activeSection === 'loyalty' && (
          <div className="flex gap-2 px-4 py-3 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setLoyaltyTab('overview')}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                loyaltyTab === 'overview'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setLoyaltyTab('brands')}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                loyaltyTab === 'brands'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              All Brands ({totalBrands})
            </button>
            <button
              onClick={() => setLoyaltyTab('streaks')}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                loyaltyTab === 'streaks'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              Streaks 🔥
            </button>
          </div>
        )}

        {/* Sub-navigation for Rewards */}
        {activeSection === 'rewards' && (
          <div className="flex gap-2 px-4 py-3 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setRewardsTab('app')}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                rewardsTab === 'app'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                  : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              🏆 ReZ Master
            </button>
            <button
              onClick={() => setRewardsTab('category')}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                rewardsTab === 'category'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              🎯 Categories
            </button>
            <button
              onClick={() => setRewardsTab('brand')}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                rewardsTab === 'brand'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              ⭐ Brands
            </button>
          </div>
        )}
      </div>

      {/* LOYALTY SECTION */}
      {activeSection === 'loyalty' && (
        <>
          {/* Loyalty Overview */}
          {loyaltyTab === 'overview' && (
            <div className="px-4 py-4 space-y-6">
              {/* Overall Stats Hero */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-teal-600/10 border border-emerald-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-rez-navy dark:text-white">Your Loyalty Status</h2>
                    <p className="text-sm text-rez-gray-600 dark:text-gray-400">Across {totalBrands} brands</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5">
                    <p className="text-2xl font-bold text-rez-navy dark:text-white mb-1">{totalVisits}</p>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">Total Visits</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5">
                    <p className="text-2xl font-bold text-emerald-400 mb-1">₹{totalCashbackSaved.toLocaleString()}</p>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">Saved</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5">
                    <p className="text-2xl font-bold text-amber-400 mb-1">{totalBrandCoins}</p>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">Brand Coins</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5">
                    <p className="text-2xl font-bold text-orange-400 mb-1">{activeStreaks}</p>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">Active Streaks</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                  <p className="text-sm text-rez-gray-700 dark:text-gray-300 text-center">
                    <span className="font-semibold text-rez-navy dark:text-white">{activeBrands} brands</span> active this month
                  </p>
                </div>
              </div>

              {/* Tier Distribution */}
              <div>
                <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-3">Your Membership Tiers</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(tierCounts).map(([tier, count]) => (
                    count > 0 && (
                      <div
                        key={tier}
                        className={`p-4 rounded-2xl bg-gradient-to-br border ${getTierColor(tier)}`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{getTierIcon(tier)}</span>
                          <p className="text-sm font-bold text-rez-navy dark:text-white capitalize">{tier}</p>
                        </div>
                        <p className="text-2xl font-bold text-rez-navy dark:text-white">{count}</p>
                        <p className="text-xs text-rez-gray-600 dark:text-gray-400">{count === 1 ? 'brand' : 'brands'}</p>
                      </div>
                    )
                  ))}
                </div>
              </div>

              {/* Almost There */}
              {almostThere.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-amber-400" />
                      <h3 className="text-lg font-bold text-rez-navy dark:text-white">Almost There!</h3>
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
                              <p className="text-sm font-bold text-rez-navy dark:text-white mb-1">{brand.merchant}</p>
                              <p className="text-xs text-amber-300">
                                {remaining} more {remaining === 1 ? 'visit' : 'visits'} to unlock reward
                              </p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
                          </div>

                          <div className="h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
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

              {/* Top Brands */}
              <div>
                <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-3">Most Visited</h3>
                <div className="space-y-2">
                  {brandsByVisits.slice(0, 3).map((brand, index) => (
                    <Link
                      key={brand.brandId}
                      to={`/brand/${brand.brandId}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 active:scale-98 transition-transform"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center font-bold text-rez-navy dark:text-white text-sm">
                        #{index + 1}
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-xl flex-shrink-0">
                        {brand.logo}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-rez-navy dark:text-white">{brand.merchant}</p>
                        <p className="text-xs text-rez-gray-600 dark:text-gray-400">{brand.loyaltyData.lifetimeVisits} visits</p>
                      </div>
                      <Badge variant="default" size="sm" className={`${getTierColor(brand.loyaltyData.loyaltyLevel)}`}>
                        {getTierIcon(brand.loyaltyData.loyaltyLevel)}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* All Brands Tab - Similar to LoyaltyHub brands tab */}
          {loyaltyTab === 'brands' && (
            <div className="px-4 py-4 space-y-4">
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
                            <p className="text-base font-bold text-rez-navy dark:text-white">{brand.merchant}</p>
                            <Badge
                              variant="default"
                              size="xs"
                              className={getTierColor(brand.loyaltyData.loyaltyLevel)}
                            >
                              {getTierIcon(brand.loyaltyData.loyaltyLevel)}
                            </Badge>
                          </div>

                          <div className="flex items-center gap-3 text-xs text-rez-gray-600 dark:text-gray-400 mb-2">
                            <span>{brand.loyaltyData.lifetimeVisits} total visits</span>
                            <span>•</span>
                            <span>Since {brand.loyaltyData.memberSince}</span>
                          </div>

                          <div className="grid grid-cols-3 gap-2">
                            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-0.5">Coins</p>
                              <p className="text-sm font-bold text-amber-400">{brand.balance}</p>
                            </div>
                            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-0.5">Saved</p>
                              <p className="text-sm font-bold text-emerald-400">₹{brand.loyaltyData.cashbackSaved}</p>
                            </div>
                            <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-0.5">Streak</p>
                              <p className="text-sm font-bold text-purple-400">
                                {brand.loyaltyData.currentStreak > 0 ? `${brand.loyaltyData.currentStreak}w` : '-'}
                              </p>
                            </div>
                          </div>
                        </div>

                        <ChevronRight className="w-5 h-5 text-rez-gray-600 dark:text-gray-500 mt-1" />
                      </div>

                      <div className="pt-3 border-t border-rez-gray-200 dark:border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs text-rez-gray-600 dark:text-gray-400">This Month</p>
                          <p className="text-xs font-semibold text-rez-navy dark:text-white">
                            {brand.loyaltyData.visitsThisMonth}/{brand.loyaltyData.targetVisitsThisMonth} visits
                          </p>
                        </div>
                        <div className="h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
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
                          <p className="text-xs text-rez-gray-600 dark:text-gray-500 mt-1">
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

          {/* Streaks Tab - Similar to LoyaltyHub streaks tab */}
          {loyaltyTab === 'streaks' && (
            <div className="px-4 py-4 space-y-6">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-orange-500/20 to-red-600/10 border border-orange-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                    <Flame className="w-8 h-8 text-orange-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-rez-navy dark:text-white">Visit Streaks</h2>
                    <p className="text-sm text-rez-gray-600 dark:text-gray-400">{activeStreaks} active streaks</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
                    <p className="text-2xl font-bold text-orange-400 mb-1">{activeStreaks}</p>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">Active</p>
                  </div>
                  <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
                    <p className="text-2xl font-bold text-rez-navy dark:text-white mb-1">
                      {Math.max(...brandedCoins.map(b => b.loyaltyData.currentStreak))}
                    </p>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">Longest (weeks)</p>
                  </div>
                </div>
              </div>

              {/* Active Streaks */}
              <div>
                <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-3">Active Streaks 🔥</h3>
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
                            <p className="text-sm font-bold text-rez-navy dark:text-white mb-1">{brand.merchant}</p>
                            <div className="flex items-center gap-2">
                              <Flame className="w-4 h-4 text-orange-400" />
                              <p className="text-xs text-orange-300">
                                {brand.loyaltyData.currentStreak} week streak • +{brand.loyaltyData.streakReward} coins bonus
                              </p>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
                        </div>

                        <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
                          <p className="text-xs text-rez-gray-700 dark:text-gray-300">
                            🎁 Keep visiting weekly to maintain your streak and earn bonus rewards
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 rounded-2xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 text-center">
                    <p className="text-sm text-rez-gray-600 dark:text-gray-400">No active streaks yet. Visit brands weekly to start!</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* REWARDS SECTION - Reuse RewardsHub content */}
      {activeSection === 'rewards' && (
        <>
          {/* App-wide rewards tab */}
          {rewardsTab === 'app' && (
            <div className="px-4 py-4 space-y-6">
              <div className={`p-6 rounded-3xl bg-gradient-to-br ${appWideRewards.color} border ${appWideRewards.borderColor}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center text-4xl">
                    {appWideRewards.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-1">{appWideRewards.programName}</h2>
                    <p className="text-sm text-rez-gray-600 dark:text-gray-400">{appWideRewards.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 text-center">
                    <p className="text-xl font-bold text-rez-navy dark:text-white">{totalVisits}</p>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">Purchases</p>
                  </div>
                  <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 text-center">
                    <p className="text-xl font-bold text-purple-400">{categoriesUsed}</p>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">Categories</p>
                  </div>
                  <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 text-center">
                    <p className="text-xl font-bold text-amber-400">{brandedCoins.length}</p>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">Brands</p>
                  </div>
                </div>
              </div>

              {/* Main Journey Rewards */}
              <div>
                <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-3">Your ReZ Journey</h3>
                <div className="space-y-3">
                  {appWideRewards.rewards.slice(0, 5).map((reward, index) => {
                    const requirementMatch = reward.requirement.match(/(\d+)/);
                    const requiredCount = requirementMatch ? parseInt(requirementMatch[0]) : 0;
                    const progress = calculateRewardProgress(totalVisits, requiredCount);

                    return (
                      <div
                        key={index}
                        className={`p-4 rounded-2xl bg-gradient-to-r ${getStatusColor(reward.status)} border`}
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                            reward.status === 'claimed' ? 'bg-emerald-500/20' :
                            reward.status === 'current' ? 'bg-amber-500/20' : 'bg-gray-500/20'
                          }`}>
                            {reward.icon}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="text-sm font-bold text-rez-navy dark:text-white">{reward.milestone}</p>
                              {getStatusIcon(reward.status)}
                            </div>
                            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">{reward.requirement}</p>
                            <p className="text-sm font-semibold text-emerald-400">{reward.reward}</p>
                          </div>
                        </div>

                        {reward.status !== 'claimed' && (
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Progress</p>
                              <p className="text-xs font-semibold text-rez-navy dark:text-white">{Math.round(progress)}%</p>
                            </div>
                            <div className="h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full transition-all"
                                style={{ width: `${Math.min(progress, 100)}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Category rewards tab */}
          {rewardsTab === 'category' && (
            <div className="px-4 py-4 space-y-6">
              {Object.values(categoryRewards).map((category) => {
                const categoryVisits = category.categoryName === 'Food & Dining' ? foodDiningVisits :
                                       category.categoryName === 'Beauty & Wellness' ? beautyVisits :
                                       category.categoryName === 'Fashion' ? fashionVisits : 0;

                return (
                  <div key={category.categoryName}>
                    <div className={`p-6 rounded-3xl bg-gradient-to-br ${category.color} border ${category.borderColor} mb-4`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-14 h-14 rounded-2xl bg-rez-gray-100 dark:bg-white/10 flex items-center justify-center text-3xl">
                          {category.icon}
                        </div>
                        <div className="flex-1">
                          <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-1">{category.categoryName}</h2>
                          <p className="text-sm text-rez-gray-600 dark:text-gray-400">{category.description}</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm text-rez-gray-600 dark:text-gray-400">Total Visits</p>
                          <p className="text-lg font-bold text-rez-navy dark:text-white">{categoryVisits}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {category.rewards.slice(0, 3).map((reward, index) => {
                        const progress = calculateRewardProgress(categoryVisits, reward.totalVisits);

                        return (
                          <div
                            key={index}
                            className={`p-4 rounded-2xl bg-gradient-to-r ${getStatusColor(reward.status)} border`}
                          >
                            <div className="flex items-start gap-3 mb-3">
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                                reward.status === 'claimed' ? 'bg-emerald-500/20' :
                                reward.status === 'current' ? 'bg-amber-500/20' : 'bg-gray-500/20'
                              }`}>
                                {reward.icon}
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">{reward.totalVisits} Visits</p>
                                  {getStatusIcon(reward.status)}
                                </div>
                                <p className="text-sm font-bold text-rez-navy dark:text-white mb-1">{reward.reward}</p>
                                <p className="text-xs text-rez-gray-600 dark:text-gray-500">{reward.description}</p>
                              </div>
                            </div>

                            {reward.status !== 'claimed' && (
                              <div>
                                <div className="flex items-center justify-between mb-1">
                                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">{categoryVisits}/{reward.totalVisits} visits</p>
                                  <p className="text-xs font-semibold text-rez-navy dark:text-white">{Math.round(progress)}%</p>
                                </div>
                                <div className="h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full transition-all"
                                    style={{ width: `${Math.min(progress, 100)}%` }}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Brand rewards tab */}
          {rewardsTab === 'brand' && (
            <div className="px-4 py-4 space-y-4">
              <p className="text-sm text-rez-gray-600 dark:text-gray-400">
                Click on a brand to view detailed reward timeline
              </p>

              {brandedCoins.map((brand) => {
                const rewards = brandRewards[brand.brandId] || [];
                const currentVisits = brand.loyaltyData.lifetimeVisits;

                return (
                  <Link
                    key={brand.brandId}
                    to={`/brand/${brand.brandId}`}
                    className="block"
                  >
                    <Card className="p-4" hover>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl flex-shrink-0">
                          {brand.logo}
                        </div>
                        <div className="flex-1">
                          <p className="text-base font-bold text-rez-navy dark:text-white mb-1">{brand.merchant}</p>
                          <p className="text-xs text-rez-gray-600 dark:text-gray-400">{currentVisits} total visits</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
                      </div>

                      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
                        {rewards.slice(0, 5).map((reward, index) => {
                          const isUnlocked = currentVisits >= reward.visits;
                          const isCurrent = currentVisits < reward.visits && (index === 0 || currentVisits >= rewards[index - 1]?.visits);

                          return (
                            <div
                              key={index}
                              className={`flex-shrink-0 w-20 p-3 rounded-xl border ${
                                isUnlocked
                                  ? 'bg-emerald-500/20 border-emerald-500/30'
                                  : isCurrent
                                  ? 'bg-amber-500/20 border-amber-500/30'
                                  : 'bg-gray-500/20 border-gray-500/30'
                              }`}
                            >
                              <div className="text-center">
                                <p className="text-2xl mb-1">{reward.icon}</p>
                                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">{reward.visits}</p>
                                {isUnlocked ? (
                                  <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto" />
                                ) : isCurrent ? (
                                  <Zap className="w-4 h-4 text-amber-400 mx-auto" />
                                ) : (
                                  <Lock className="w-4 h-4 text-rez-gray-600 dark:text-gray-500 mx-auto" />
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LoyaltyRewardsHub;
