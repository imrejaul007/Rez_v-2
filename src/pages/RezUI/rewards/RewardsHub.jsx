import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Trophy,
  Gift,
  Target,
  Star,
  Crown,
  Zap,
  TrendingUp,
  ChevronRight,
  Lock,
  CheckCircle,
  Flame,
  Award,
  Users,
  ShoppingBag,
  Sparkles,
  Globe,
  Heart
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

const RewardsHub = () => {
  const navigate = useNavigate();
  const { brandedCoins } = useWallet();

  const [activeLevel, setActiveLevel] = useState('app'); // app, category, brand

  // Calculate app-wide stats
  const totalVisits = brandedCoins.reduce((sum, b) => sum + b.loyaltyData.lifetimeVisits, 0);
  const categoriesUsed = new Set(brandedCoins.map(b => {
    // Map brands to categories (simplified)
    if (b.brandId === 'starbucks' || b.brandId === 'ccd' || b.brandId === 'biryani-blues' || b.brandId === 'dominos') return 'Food & Dining';
    if (b.brandId === 'lakme' || b.brandId === 'nykaa') return 'Beauty & Wellness';
    if (b.brandId === 'zara') return 'Fashion';
    return 'Other';
  })).size;

  // Calculate category totals
  const foodDiningVisits = brandedCoins
    .filter(b => ['starbucks', 'ccd', 'biryani-blues', 'dominos'].includes(b.brandId))
    .reduce((sum, b) => sum + b.loyaltyData.lifetimeVisits, 0);

  const beautyVisits = brandedCoins
    .filter(b => ['lakme', 'nykaa'].includes(b.brandId))
    .reduce((sum, b) => sum + b.loyaltyData.lifetimeVisits, 0);

  const fashionVisits = brandedCoins
    .filter(b => ['zara'].includes(b.brandId))
    .reduce((sum, b) => sum + b.loyaltyData.lifetimeVisits, 0);

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
              <h1 className="text-xl font-bold text-rez-navy dark:text-white">Rewards Hub</h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Unlock rewards at every level</p>
            </div>
          </div>
          <Gift className="w-6 h-6 text-amber-400" />
        </div>

        {/* Level Tabs */}
        <div className="flex gap-2 px-4 pb-3 overflow-x-auto hide-scrollbar">
          <button
            onClick={() => setActiveLevel('app')}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              activeLevel === 'app'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            🏆 ReZ Master
          </button>
          <button
            onClick={() => setActiveLevel('category')}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              activeLevel === 'category'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            🎯 Category Rewards
          </button>
          <button
            onClick={() => setActiveLevel('brand')}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              activeLevel === 'brand'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            ⭐ Brand Rewards
          </button>
        </div>
      </div>

      {/* APP-WIDE REWARDS */}
      {activeLevel === 'app' && (
        <div className="px-4 py-4 space-y-6">
          {/* Hero Card */}
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
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Total Purchases</p>
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
              {appWideRewards.rewards.map((reward, index) => {
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
                        <p className="text-xs text-rez-gray-600 dark:text-gray-500 mt-1">{reward.description}</p>
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

          {/* Diversity Rewards */}
          <div>
            <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-3">Category Explorer</h3>
            <div className="grid grid-cols-2 gap-3">
              {appWideRewards.diversityRewards.map((reward, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl bg-gradient-to-br ${getStatusColor(reward.status)} border`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{reward.icon}</span>
                    {getStatusIcon(reward.status)}
                  </div>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">{reward.categories} Categories</p>
                  <p className="text-sm font-semibold text-rez-navy dark:text-white">{reward.reward}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Spending Milestones */}
          <div>
            <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-3">Spending Milestones</h3>
            <div className="space-y-2">
              {appWideRewards.spendingMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-xl bg-gradient-to-r ${getStatusColor(milestone.status)} border flex items-center justify-between`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{milestone.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-rez-navy dark:text-white">₹{milestone.spent.toLocaleString()} spent</p>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">{milestone.reward}</p>
                    </div>
                  </div>
                  {getStatusIcon(milestone.status)}
                </div>
              ))}
            </div>
          </div>

          {/* Streak Rewards */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-bold text-rez-navy dark:text-white">Streak Rewards</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {appWideRewards.streakRewards.map((streak, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl bg-gradient-to-br ${getStatusColor(streak.status)} border`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{streak.icon}</span>
                    {getStatusIcon(streak.status)}
                  </div>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">{streak.days} Days</p>
                  <p className="text-sm font-semibold text-rez-navy dark:text-white">{streak.reward}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Referral Rewards */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-rez-navy dark:text-white">Referral Rewards</h3>
            </div>
            <div className="space-y-2">
              {appWideRewards.referralRewards.map((referral, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-xl bg-gradient-to-r ${getStatusColor(referral.status)} border flex items-center justify-between`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{referral.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-rez-navy dark:text-white">{referral.referrals} Friend{referral.referrals > 1 ? 's' : ''}</p>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">{referral.reward}</p>
                    </div>
                  </div>
                  {getStatusIcon(referral.status)}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CATEGORY REWARDS */}
      {activeLevel === 'category' && (
        <div className="px-4 py-4 space-y-6">
          {Object.values(categoryRewards).map((category) => {
            const categoryVisits = category.categoryName === 'Food & Dining' ? foodDiningVisits :
                                   category.categoryName === 'Beauty & Wellness' ? beautyVisits :
                                   category.categoryName === 'Fashion' ? fashionVisits : 0;

            return (
              <div key={category.categoryName}>
                {/* Category Header */}
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

                {/* Category Rewards */}
                <div className="space-y-3 mb-6">
                  {category.rewards.map((reward, index) => {
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

                {/* Diversity Bonus */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-rez-navy dark:text-white mb-3">Diversity Bonus</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {category.diversityBonus.map((bonus, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-xl bg-gradient-to-br ${getStatusColor(bonus.status)} border`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xl">{bonus.icon}</span>
                          {getStatusIcon(bonus.status)}
                        </div>
                        <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">{bonus.brandsVisited} Brands</p>
                        <p className="text-xs font-semibold text-rez-navy dark:text-white">{bonus.reward}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* BRAND REWARDS */}
      {activeLevel === 'brand' && (
        <div className="px-4 py-4 space-y-6">
          <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-4">
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

                  {/* Reward Progress */}
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

      {/* Quick Navigation */}
      <div className="fixed bottom-20 left-4 right-4 z-40">
        <Link
          to="/loyalty"
          className="block p-4 rounded-2xl glass border border-white/20 active:scale-98 transition-transform"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Trophy className="w-5 h-5 text-amber-400" />
              <div>
                <p className="text-sm font-semibold text-rez-navy dark:text-white">View Loyalty Hub</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Track all your brand progress</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RewardsHub;
