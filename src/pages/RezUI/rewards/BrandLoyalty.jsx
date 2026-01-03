import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  Star,
  BadgeCheck,
  TrendingUp,
  Gift,
  Lock,
  Unlock,
  Target,
  Trophy,
  Flame,
  Award,
  Users,
  Camera,
  Upload,
  ChevronRight,
  CheckCircle,
  Clock,
  Calendar,
  Sparkles,
  Crown,
  Zap,
  ExternalLink,
  History,
  PartyPopper
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import Badge from '../components/common/Badge';
import { getBrandMetadata } from '../data/brandsData';
import { getBrandRewards } from '../data/rewardsData';

const BrandLoyalty = () => {
  const { brandId } = useParams();
  const navigate = useNavigate();
  const { rezCoinsData, brandedCoins, getBrandLoyalty } = useWallet();

  // State
  const [isFollowing, setIsFollowing] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  const [showHistory, setShowHistory] = useState(false);

  // Get brand data from WalletContext
  const brandData = getBrandLoyalty(brandId || 'starbucks');
  const brandMetadata = getBrandMetadata(brandId || 'starbucks');
  const brandRewardsData = getBrandRewards(brandId || 'starbucks');

  // Fallback if brand not found
  if (!brandData) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-xl text-rez-navy dark:text-white mb-4">Brand not found</p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-xl bg-emerald-500 text-rez-navy dark:text-white font-semibold"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Get nearest location (first one for simplicity)
  const nearestLocation = brandMetadata?.locations?.[0] || { name: 'Nearby', distance: 'N/A' };

  // Brand info with data from WalletContext + metadata
  const brand = {
    id: brandId || 'starbucks',
    name: brandData.merchant,
    logo: brandData.logo,
    category: brandMetadata?.category || 'Retail',
    subcategory: brandMetadata?.subcategory || '',
    rating: brandMetadata?.rating || 4.5,
    reviewCount: brandMetadata?.reviewCount || 1000,
    location: nearestLocation.name,
    distance: nearestLocation.distance,
    verified: brandMetadata?.verified || true,
    popularTag: brandMetadata?.popularTag || false,
    superCashbackBrand: brandMetadata?.superCashbackBrand || false,
    topRated: brandMetadata?.topRated || false,
    description: brandMetadata?.description || '',
    operatingHours: brandMetadata?.operatingHours || '9:00 AM - 9:00 PM',

    // Loyalty Status from WalletContext
    loyaltyLevel: brandData.loyaltyData.loyaltyLevel,
    visitsThisMonth: brandData.loyaltyData.visitsThisMonth,
    targetVisitsThisMonth: brandData.loyaltyData.targetVisitsThisMonth,
    lifetimeVisits: brandData.loyaltyData.lifetimeVisits,
    memberSince: brandData.loyaltyData.memberSince,

    // Coins & Stats from WalletContext
    brandCoins: brandData.balance,
    rezCoinsEarned: brandData.loyaltyData.totalCoinsEarned,
    cashbackSaved: brandData.loyaltyData.cashbackSaved,

    // Current streak from WalletContext
    currentStreak: brandData.loyaltyData.currentStreak,
    streakReward: brandData.loyaltyData.streakReward,

    // Brand-specific colors
    brandColor: brandData.color,
    accentColor: brandData.color
  };

  // Map rewards data to journey format with user's progress
  const currentVisits = brand.lifetimeVisits;
  const rewardsJourney = brandRewardsData.map((reward, index) => {
    const isUnlocked = currentVisits >= reward.visits;
    const isCurrent = !isUnlocked && (index === 0 || currentVisits >= brandRewardsData[index - 1]?.visits);

    return {
      id: index + 1,
      title: `${reward.visits} Visit${reward.visits > 1 ? 's' : ''}`,
      subtitle: reward.type === 'tier_upgrade' ? 'Tier Upgrade' :
                reward.type === 'freebie' ? 'Free Reward' :
                reward.type === 'discount' ? 'Discount' :
                reward.type === 'offer' ? 'Special Offer' : 'Perk',
      benefit: reward.reward,
      status: isUnlocked ? 'claimed' : isCurrent ? 'current' : 'locked',
      icon: reward.icon,
      visits: reward.visits,
      progress: isCurrent ? currentVisits : undefined,
      nextVisit: isCurrent ? reward.visits - currentVisits : undefined,
      value: reward.value,
      type: reward.type
    };
  });

  // Active Offers
  const activeOffers = [
    {
      id: 1,
      title: '10% Extra Cashback',
      description: 'For Silver members',
      type: 'level',
      validUntil: 'Permanent',
      icon: '🥈'
    },
    {
      id: 2,
      title: 'Weekend Bonus',
      description: 'Double coins on Sat-Sun',
      type: 'time',
      validUntil: 'This weekend',
      icon: '📅'
    },
    {
      id: 3,
      title: 'Come Back Offer',
      description: '₹50 off your next visit',
      type: 'retention',
      validUntil: '3 days',
      icon: '🎁'
    }
  ];

  // Social Proof
  const recentActivity = [
    {
      id: 1,
      userName: 'Priya K.',
      userPhoto: '👩',
      action: 'reached Gold tier',
      time: '2 hours ago',
      verified: true
    },
    {
      id: 2,
      userName: 'Rahul S.',
      userPhoto: '👨',
      action: 'earned 200 coins',
      time: '5 hours ago',
      verified: true
    },
    {
      id: 3,
      userName: 'Ananya M.',
      userPhoto: '👩‍🦰',
      action: 'unlocked free drink',
      time: '1 day ago',
      verified: true
    }
  ];

  // Loyalty History
  const loyaltyHistory = [
    {
      id: 1,
      date: 'Dec 18, 2024',
      type: 'visit',
      description: 'Grande Latte purchased',
      coinsEarned: 80,
      cashback: 50
    },
    {
      id: 2,
      date: 'Dec 15, 2024',
      type: 'reward',
      description: 'Claimed: 10% extra cashback',
      benefit: '₹100 saved'
    },
    {
      id: 3,
      date: 'Dec 12, 2024',
      type: 'visit',
      description: 'Cappuccino + Cookie',
      coinsEarned: 65,
      cashback: 40
    },
    {
      id: 4,
      date: 'Dec 10, 2024',
      type: 'milestone',
      description: 'Reached Silver tier',
      benefit: 'Unlocked exclusive perks'
    }
  ];

  const handleShare = () => {
    // Share functionality
    console.log('Sharing brand loyalty page');
  };

  const handleFollowBrand = () => {
    setIsFollowing(!isFollowing);
  };

  const calculateProgress = () => {
    return (brand.visitsThisMonth / brand.targetVisitsThisMonth) * 100;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* 🔝 TOP BAR */}
      <div className="sticky top-0 z-50 glass border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleFollowBrand}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                isFollowing
                  ? 'bg-red-500/20 border border-red-500/30'
                  : 'bg-white/10 border border-rez-gray-300 dark:border-white/20'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFollowing ? 'text-red-400 fill-red-400' : 'text-white'}`} />
              <span className="text-sm font-medium text-rez-navy dark:text-white">{isFollowing ? 'Following' : 'Follow'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10"
            >
              <Share2 className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* 🏪 BRAND HEADER */}
      <div className="px-4 py-6">
        <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-teal-600/10 border border-emerald-500/30">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-4xl flex-shrink-0 shadow-lg">
              {brand.logo}
            </div>

            <div className="flex-1">
              <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">{brand.name}</h1>

              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-sm font-semibold text-rez-navy dark:text-white">{brand.rating}</span>
                  <span className="text-xs text-rez-gray-600 dark:text-gray-400">({brand.reviewCount.toLocaleString()})</span>
                </div>
                {brand.verified && (
                  <Badge variant="success" size="sm">
                    <BadgeCheck className="w-3 h-3 mr-1" />
                    Verified ReZ Partner
                  </Badge>
                )}
              </div>

              <div className="flex items-center gap-2 text-sm text-rez-gray-700 dark:text-gray-300">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{brand.location} · {brand.distance} away</span>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex gap-2 flex-wrap">
            {brand.popularTag && (
              <Badge variant="default" size="sm" className="bg-red-500/20 text-red-300 border-red-500/30">
                🔥 Popular
              </Badge>
            )}
            {brand.superCashbackBrand && (
              <Badge variant="default" size="sm" className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                🪙 Super Cashback Brand
              </Badge>
            )}
            {brand.topRated && (
              <Badge variant="default" size="sm" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                ⭐ Top Rated
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* 🧑‍🤝‍🧑 YOUR LOYALTY STATUS (HERO SECTION) */}
      <div className="px-4 mb-6">
        <h2 className="text-xl font-bold text-rez-navy dark:text-white mb-4">Your Loyalty with {brand.name}</h2>

        <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-600/10 border border-purple-500/30">
          {/* Level Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/30 to-yellow-500/30 flex items-center justify-center">
                <span className="text-3xl">🥈</span>
              </div>
              <div>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">Level</p>
                <p className="text-lg font-bold text-rez-navy dark:text-white capitalize">{brand.loyaltyLevel} Member</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Member since</p>
              <p className="text-sm font-semibold text-rez-navy dark:text-white">{brand.memberSince}</p>
            </div>
          </div>

          {/* Progress to Next Reward */}
          <div className="mb-4 p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-semibold text-rez-navy dark:text-white">This Month's Progress</p>
              <p className="text-sm font-bold text-emerald-400">
                {brand.visitsThisMonth} / {brand.targetVisitsThisMonth} visits
              </p>
            </div>

            <div className="h-3 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all"
                style={{ width: `${calculateProgress()}%` }}
              />
            </div>

            <p className="text-xs text-rez-gray-600 dark:text-gray-400 text-center">
              One more visit to unlock <span className="text-emerald-400 font-semibold">Gold Reward 🎁</span>
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
              <p className="text-xl font-bold text-amber-400">{brand.brandCoins}</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Brand Coins</p>
            </div>
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
              <p className="text-xl font-bold text-emerald-400">₹{brand.cashbackSaved}</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Saved</p>
            </div>
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
              <p className="text-xl font-bold text-purple-400">{brand.lifetimeVisits}</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Total Visits</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🎯 NEXT TARGET (Achievement Focus) */}
      <div className="px-4 mb-6">
        {rewardsJourney.find(r => r.status === 'current') && (
          <div className="p-5 rounded-3xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 border-2 border-amber-500/50 shadow-lg shadow-amber-500/20">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-amber-400" />
              <p className="text-sm font-bold text-amber-300 uppercase tracking-wide">Next Target</p>
            </div>

            {(() => {
              const nextReward = rewardsJourney.find(r => r.status === 'current');
              const progress = (currentVisits / nextReward.visits) * 100;

              return (
                <>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/30 flex items-center justify-center text-3xl flex-shrink-0">
                      {nextReward.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-amber-300/80 mb-1">Level {nextReward.id}</p>
                      <p className="text-xl font-bold text-rez-navy dark:text-white mb-1">{nextReward.benefit}</p>
                      <p className="text-sm text-rez-gray-700 dark:text-gray-300">{nextReward.subtitle}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-rez-gray-100 dark:bg-white/10 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-rez-navy dark:text-white">Your Progress</p>
                      <p className="text-sm font-bold text-amber-400">{currentVisits}/{nextReward.visits} visits</p>
                    </div>
                    <div className="h-3 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 rounded-full transition-all"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-center text-amber-300">
                      🎯 Only {nextReward.nextVisit} more {nextReward.nextVisit === 1 ? 'visit' : 'visits'} to unlock!
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-rez-gray-600 dark:text-gray-400">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>Keep visiting to level up your rewards</span>
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </div>

      {/* 🎁 REWARDS YOU CAN UNLOCK */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-rez-navy dark:text-white">Full Rewards Journey</h3>
          <Badge variant="default" size="sm" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
            {rewardsJourney.filter(r => r.status === 'claimed').length}/{rewardsJourney.length} unlocked
          </Badge>
        </div>

        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {rewardsJourney.map((reward) => (
            <div
              key={reward.id}
              onClick={() => setSelectedReward(reward)}
              className={`flex-shrink-0 w-72 p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                reward.status === 'claimed'
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : reward.status === 'current'
                  ? 'bg-amber-500/10 border-amber-500/50 shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 border-rez-gray-200 dark:border-white/10'
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                  reward.status === 'claimed'
                    ? 'bg-emerald-500/20'
                    : reward.status === 'current'
                    ? 'bg-amber-500/20'
                    : 'bg-white/10'
                }`}>
                  {reward.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-bold text-rez-navy dark:text-white">{reward.title}</p>
                    {reward.status === 'claimed' && (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    )}
                    {reward.status === 'current' && (
                      <Zap className="w-4 h-4 text-amber-400" />
                    )}
                    {reward.status === 'locked' && (
                      <Lock className="w-4 h-4 text-rez-gray-600 dark:text-gray-500" />
                    )}
                  </div>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">{reward.subtitle}</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 mb-3">
                <p className="text-sm font-semibold text-rez-navy dark:text-white">{reward.benefit}</p>
              </div>

              {/* Progress for current reward */}
              {reward.status === 'current' && reward.progress !== undefined && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">{reward.progress}/{reward.visits} visits</p>
                    <p className="text-xs font-semibold text-amber-400">{reward.nextVisit} more!</p>
                  </div>
                  <div className="h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full"
                      style={{ width: `${(reward.progress / reward.visits) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Status Badge */}
              <div className="mt-3 flex items-center justify-between">
                {reward.status === 'claimed' ? (
                  <Badge variant="success" size="sm">✓ Claimed</Badge>
                ) : reward.status === 'current' ? (
                  <Badge variant="default" size="sm" className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                    🎯 In Progress
                  </Badge>
                ) : (
                  <Badge variant="default" size="sm" className="bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 border-rez-gray-200 dark:border-white/10">
                    🔒 Locked
                  </Badge>
                )}

                {typeof reward.visits === 'number' && (
                  <span className="text-xs text-rez-gray-600 dark:text-gray-500">{reward.visits} visits</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🪙 BRAND-SPECIFIC COINS */}
      <div className="px-4 mb-6">
        <div className="p-5 rounded-3xl bg-gradient-to-r from-amber-500/20 to-orange-600/10 border border-amber-500/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center">
              <span className="text-3xl">{brand.logo}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-1">{brand.name} Coins</h3>
              <p className="text-sm text-rez-gray-600 dark:text-gray-400">Use only at {brand.name} · Never expire</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-amber-400">{brand.brandCoins}</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">available</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 mb-4">
            <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-3">
              💡 Brand Coins are earned from purchases here and can be redeemed for exclusive {brand.name} rewards.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-300">
              <CheckCircle className="w-4 h-4" />
              <span>No expiry · Store-specific · Extra perks</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button className="py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-rez-navy dark:text-white font-semibold text-sm active:scale-95 transition-transform">
              Redeem Coins
            </button>
            <button className="py-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 border border-white/20 text-rez-navy dark:text-white font-semibold text-sm active:scale-95 transition-transform">
              Earn More
            </button>
          </div>
        </div>
      </div>

      {/* 🎯 ACTIVE OFFERS FOR YOU */}
      <div className="px-4 mb-6">
        <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-4">Special Offers Just for You</h3>

        <div className="space-y-3">
          {activeOffers.map((offer) => (
            <div
              key={offer.id}
              className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-600/10 border border-emerald-500/20"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-xl flex-shrink-0">
                  {offer.icon}
                </div>

                <div className="flex-1">
                  <p className="text-sm font-bold text-rez-navy dark:text-white mb-1">{offer.title}</p>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">{offer.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-emerald-400">Valid: {offer.validUntil}</span>
                    <button className="px-3 py-1.5 rounded-lg bg-emerald-500 text-rez-navy dark:text-white text-xs font-semibold active:scale-95 transition-transform">
                      Use Offer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📅 STREAKS & HABITS */}
      <div className="px-4 mb-6">
        <div className="p-5 rounded-3xl bg-gradient-to-br from-orange-500/20 to-red-600/10 border border-orange-500/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center">
              <Flame className="w-8 h-8 text-orange-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-1">Your Visit Streak</h3>
              <p className="text-sm text-rez-gray-600 dark:text-gray-400">Keep it going to earn bonus rewards</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-orange-400">{brand.currentStreak}</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">weeks</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-amber-400" />
              <p className="text-sm font-semibold text-rez-navy dark:text-white">Next Reward</p>
            </div>
            <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-3">
              🎁 Bonus {brand.streakReward} coins when you reach 3 weeks
            </p>
            <p className="text-xs text-orange-300">
              ⚡ Visit once more this week to keep your streak alive
            </p>
          </div>
        </div>
      </div>

      {/* 👥 SOCIAL PROOF & COMMUNITY */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-rez-navy dark:text-white">People Like You Love This Brand</h3>
          <Users className="w-5 h-5 text-purple-400" />
        </div>

        <div className="space-y-3">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center text-xl flex-shrink-0">
                {activity.userPhoto}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-semibold text-rez-navy dark:text-white">{activity.userName}</p>
                  {activity.verified && (
                    <BadgeCheck className="w-3 h-3 text-emerald-400" />
                  )}
                </div>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">{activity.action}</p>
              </div>

              <span className="text-xs text-rez-gray-600 dark:text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-center">
          <p className="text-sm text-rez-gray-700 dark:text-gray-300">
            <span className="font-semibold text-rez-navy dark:text-white">3 friends</span> earned rewards here this week
          </p>
        </div>
      </div>

      {/* 📸 SHARE & EARN */}
      <div className="px-4 mb-6">
        <div className="p-5 rounded-3xl bg-gradient-to-br from-pink-500/20 to-purple-600/10 border border-pink-500/30">
          <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-4 flex items-center gap-2">
            <Camera className="w-5 h-5 text-pink-400" />
            Share & Earn More
          </h3>

          <div className="space-y-3">
            <button className="w-full p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 flex items-center justify-between active:scale-98 transition-transform">
              <div className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-blue-400" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-rez-navy dark:text-white">Post Photo Review</p>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">Earn +50 coins</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
            </button>

            <button className="w-full p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 flex items-center justify-between active:scale-98 transition-transform">
              <div className="flex items-center gap-3">
                <Share2 className="w-5 h-5 text-emerald-400" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-rez-navy dark:text-white">Share Your Experience</p>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">Earn +30 coins</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
            </button>

            <button className="w-full p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 flex items-center justify-between active:scale-98 transition-transform">
              <div className="flex items-center gap-3">
                <Upload className="w-5 h-5 text-purple-400" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-rez-navy dark:text-white">Upload Bill</p>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">Faster tier upgrade</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* 📊 TRANSPARENCY & TRUST */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-rez-navy dark:text-white">Your Loyalty History</h3>
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="text-sm text-emerald-400 font-semibold flex items-center gap-1"
          >
            {showHistory ? 'Hide' : 'View All'}
            <History className="w-4 h-4" />
          </button>
        </div>

        {showHistory && (
          <div className="space-y-3">
            {loyaltyHistory.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {item.type === 'visit' && <Calendar className="w-4 h-4 text-blue-400" />}
                    {item.type === 'reward' && <Gift className="w-4 h-4 text-amber-400" />}
                    {item.type === 'milestone' && <Trophy className="w-4 h-4 text-purple-400" />}
                    <span className="text-xs text-rez-gray-600 dark:text-gray-400">{item.date}</span>
                  </div>
                  <Badge
                    variant="default"
                    size="xs"
                    className={
                      item.type === 'visit'
                        ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                        : item.type === 'reward'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                        : 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                    }
                  >
                    {item.type}
                  </Badge>
                </div>

                <p className="text-sm text-rez-navy dark:text-white mb-2">{item.description}</p>

                {item.coinsEarned && (
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-amber-400">+{item.coinsEarned} coins</span>
                    {item.cashback && <span className="text-emerald-400">₹{item.cashback} cashback</span>}
                  </div>
                )}

                {item.benefit && (
                  <p className="text-xs text-emerald-400">{item.benefit}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {!showHistory && (
          <div className="p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 text-center">
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">
              Track all your visits, rewards earned, and milestones achieved
            </p>
          </div>
        )}
      </div>

      {/* 🧠 AI LOYALTY INSIGHTS */}
      <div className="px-4 mb-6">
        <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-600/10 border border-blue-500/30">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-rez-navy dark:text-white mb-2">💡 Loyalty Insight</p>
              <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-3">
                Users who reach Gold level save 2× more at this brand. You're just {rewardsJourney[3].visits - brand.lifetimeVisits} visits away!
              </p>
              <p className="text-xs text-blue-300">
                ⚡ Tip: Visiting on weekdays gives you higher rewards
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🪙 COIN TYPES VISUAL RECAP */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-bold text-rez-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Coin Types at {brand.name}</h3>

        <div className="space-y-2">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
            <span className="text-2xl">🟢</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-rez-navy dark:text-white">ReZ Coins</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Universal · Use anywhere</p>
            </div>
            <span className="text-sm font-bold text-emerald-400">{rezCoinsData?.balance || 0}</span>
          </div>

          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-3">
            <span className="text-2xl">{brand.logo}</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-rez-navy dark:text-white">{brand.name} Coins</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Store-only · No expiry</p>
            </div>
            <span className="text-sm font-bold text-amber-400">{brand.brandCoins}</span>
          </div>

          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3">
            <span className="text-2xl">🔥</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-rez-navy dark:text-white">Promo Coins</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Limited-time · Extra boost</p>
            </div>
            <span className="text-sm font-bold text-red-400">0</span>
          </div>
        </div>
      </div>

      {/* 🏁 STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-rez-gray-200 dark:border-white/10 p-4">
        <div className="flex gap-3">
          <button
            onClick={() => navigate(`/store/${brand.id}`)}
            className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-rez-navy dark:text-white font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <Store className="w-5 h-5" />
            Visit Store
          </button>
          <button
            onClick={() => navigate(`/booking/${brand.id}`)}
            className="flex-1 py-4 rounded-2xl bg-rez-gray-100 dark:bg-white/10 border border-white/20 text-rez-navy dark:text-white font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <Gift className="w-5 h-5" />
            Book Now
          </button>
        </div>
        <p className="text-center text-xs text-rez-gray-600 dark:text-gray-400 mt-2">
          Earn rewards instantly with ReZ
        </p>
      </div>
    </div>
  );
};

export default BrandLoyalty;
