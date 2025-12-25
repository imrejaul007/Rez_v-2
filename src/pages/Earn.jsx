import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  ShoppingBag,
  QrCode,
  Share2,
  Star,
  Users,
  Calendar,
  Lock,
  Heart,
  Camera,
  MessageCircle,
  Target,
  Award,
  Flame,
  Clock,
  ChevronRight,
  CheckCircle,
  Sparkles,
  Store,
  Upload,
  PartyPopper,
  GraduationCap,
  Briefcase,
  Crown,
  MapPin,
  ThumbsUp,
  Video,
  ArrowRight,
  Ticket
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import BottomNavManager from '../components/layout/BottomNavManager';

const Earn = () => {
  const { rezCoins, brandedCoins, promoCoins } = useWallet();
  const [currentStreak, setCurrentStreak] = useState(7);
  const [monthlyEarnings, setMonthlyEarnings] = useState(2480);

  // Calculate total branded coins
  const totalBrandedCoins = brandedCoins.reduce((sum, coin) => sum + coin.balance, 0);
  const totalPromoCoins = promoCoins.balance;

  // Quick Earn Actions
  const quickEarnActions = [
    {
      id: 'scan-pay',
      icon: QrCode,
      title: 'Scan & Pay at Store',
      reward: 'Up to 10% ReZ Coins',
      iconBg: 'bg-rez-green-500/20 dark:bg-rez-green-500/10',
      iconColor: 'text-rez-green-500',
      path: '/pay-in-store'
    },
    {
      id: 'upload-bill',
      icon: Upload,
      title: 'Upload Bill',
      reward: 'Earn ₹50-₹200 Coins',
      iconBg: 'bg-blue-500/20 dark:bg-blue-500/10',
      iconColor: 'text-blue-500',
      path: '/upload-bill'
    },
    {
      id: 'share-offer',
      icon: Share2,
      title: 'Share an Offer',
      reward: 'Earn 20 ReZ Coins',
      iconBg: 'bg-purple-500/20 dark:bg-purple-500/10',
      iconColor: 'text-purple-500',
      path: '/refer'
    },
    {
      id: 'write-review',
      icon: Star,
      title: 'Write a Review',
      reward: 'Earn 25-100 Coins',
      iconBg: 'bg-rez-gold/20 dark:bg-rez-gold/10',
      iconColor: 'text-rez-gold-dark dark:text-rez-gold',
      path: '/explore/review-earn'
    },
    {
      id: 'refer-friend',
      icon: Users,
      title: 'Refer a Friend',
      reward: 'Earn 100 Coins',
      iconBg: 'bg-pink-500/20 dark:bg-pink-500/10',
      iconColor: 'text-pink-500',
      path: '/refer'
    },
    {
      id: 'daily-checkin',
      icon: Calendar,
      title: 'Daily Check-in',
      reward: 'Earn 10-500 Coins',
      iconBg: 'bg-rez-teal-500/20 dark:bg-rez-teal-500/10',
      iconColor: 'text-rez-teal-500',
      path: '/explore/daily-checkin'
    }
  ];

  // Shopping & Payment Methods
  const shoppingMethods = [
    {
      id: 'online-shopping',
      icon: ShoppingBag,
      title: 'Shop Online via ReZ',
      description: 'Amazon, Flipkart, Myntra & more',
      reward: 'Up to 8% Cashback',
      extraReward: '+ Branded Coins',
      path: '/cash-store'
    },
    {
      id: 'offline-payment',
      icon: Store,
      title: 'Pay at Partner Stores',
      description: 'Instant ReZ Coins on every purchase',
      reward: 'Always Better Price',
      extraReward: '+ First visit bonus',
      path: '/pay-in-store'
    },
    {
      id: 'lock-price',
      icon: Lock,
      title: 'Lock Price Deals',
      description: 'Lock with 10%, earn on both actions',
      reward: 'Double Earnings',
      extraReward: '+ Pickup bonus',
      path: '/deal-store'
    }
  ];

  // Social & Community Actions
  const socialActions = [
    { icon: Share2, title: 'Share Store/Offer', coins: '20-50', description: 'Friends must view' },
    { icon: ThumbsUp, title: 'Vote in Polls', coins: '10', description: 'Daily polls available' },
    { icon: MessageCircle, title: 'Comment on Offers', coins: '15', description: 'Quality comments' },
    { icon: Camera, title: 'Upload Photos', coins: '25-100', description: 'Store/product photos' },
    { icon: Video, title: 'Create Reels', coins: '50-200', description: 'UGC content rewards' },
    { icon: Heart, title: 'Rate Events', coins: '20', description: 'After event attendance' }
  ];

  // Special Programs
  const specialPrograms = [
    {
      id: 'student',
      icon: GraduationCap,
      title: 'Student Zone',
      badge: '🎓',
      rewards: ['Student of the Month', 'Event participation', 'Campus ambassador'],
      earnings: 'Up to 5,000 coins/month',
      path: '/exclusive/student'
    },
    {
      id: 'corporate',
      icon: Briefcase,
      title: 'Corporate Perks',
      badge: '🧑‍💼',
      rewards: ['Employee of the Month', 'Corporate events', 'Exclusive BNPL'],
      earnings: 'Up to 3,000 coins/month',
      path: '/exclusive/corporate'
    },
    {
      id: 'prive',
      icon: Crown,
      title: 'ReZ Privé',
      badge: '👑',
      rewards: ['Premium campaigns', 'High multipliers', 'Brand collaborations'],
      earnings: 'Unlimited potential',
      path: '/exclusive/prive'
    }
  ];

  // Bonus Opportunities
  const bonusOpportunities = [
    {
      title: 'Big Coin Drop',
      description: 'Complete 3 purchases today',
      reward: '+500 Coins',
      timeLeft: '6h 24m',
      icon: PartyPopper
    },
    {
      title: 'Double Cashback Day',
      description: 'All fashion purchases',
      reward: '2X Earnings',
      timeLeft: '12h 45m',
      icon: Zap
    },
    {
      title: 'Last Chance Bonus',
      description: 'Refer 2 friends today',
      reward: '+200 Coins',
      timeLeft: '3h 15m',
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24 transition-colors">
      {/* Header: Earnings Snapshot */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="px-4 py-4">
          <h1 className="text-h2 font-poppins text-rez-navy dark:text-white mb-4">💰 Your Earnings</h1>

          {/* Wallet Summary Pills */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="p-3 rounded-rez-lg bg-rez-green-50 dark:bg-rez-green-500/10 border border-rez-green-200 dark:border-rez-green-500/30 shadow-rez-subtle">
              <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">ReZ Coins</p>
              <p className="text-xl font-bold text-rez-green-600 dark:text-rez-green-400">{rezCoins.toLocaleString()}</p>
            </div>
            <div className="p-3 rounded-rez-lg bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 shadow-rez-subtle">
              <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">Branded</p>
              <p className="text-xl font-bold text-purple-600 dark:text-purple-400">{totalBrandedCoins.toLocaleString()}</p>
            </div>
            <div className="p-3 rounded-rez-lg bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 shadow-rez-subtle">
              <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">Promo</p>
              <p className="text-xl font-bold text-rez-gold-dark dark:text-rez-gold">{totalPromoCoins.toLocaleString()}</p>
            </div>
          </div>

          {/* This Month Earned */}
          <div className="p-4 rounded-rez-lg bg-gradient-to-r from-rez-green-50 to-amber-50 dark:from-rez-green-500/10 dark:to-amber-500/10 border border-rez-green-200 dark:border-rez-green-500/20 shadow-rez-subtle">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">This Month Earned</p>
                <p className="text-price font-poppins text-rez-navy dark:text-white">₹{monthlyEarnings.toLocaleString()}</p>
              </div>
              <div className="flex gap-2">
                <Link
                  to="/wallet"
                  className="px-3 py-2 rounded-rez-md bg-rez-green-500 hover:bg-rez-green-600 text-rez-navy dark:text-white text-caption font-semibold transition-colors"
                >
                  View Wallet
                </Link>
                <Link
                  to="/how-rez-works"
                  className="px-3 py-2 rounded-rez-md bg-rez-gray-100 dark:bg-white/10 hover:bg-rez-gray-200 dark:hover:bg-white/20 text-rez-navy dark:text-white text-caption font-semibold transition-colors"
                >
                  How Coins Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Earn Actions */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white flex items-center gap-2">
            <Zap className="w-6 h-6 text-rez-gold-dark dark:text-rez-gold" />
            Earn Now
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {quickEarnActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.id}
                to={action.path}
                className="p-4 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:border-rez-green-300 dark:hover:border-rez-green-500/30 shadow-rez-card hover:shadow-rez-green transition-all"
              >
                <div className={`w-12 h-12 rounded-rez-md ${action.iconBg} flex items-center justify-center mb-3`}>
                  <Icon className={`w-6 h-6 ${action.iconColor}`} />
                </div>
                <h3 className="text-body font-semibold text-rez-navy dark:text-white mb-1">{action.title}</h3>
                <p className="text-caption text-rez-green-600 dark:text-rez-green-400 font-medium">{action.reward}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Daily & Streak Earnings */}
      <div className="px-4 py-4" id="daily-rewards">
        <div className="p-6 rounded-rez-xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-500/20 dark:to-red-500/10 border border-orange-200 dark:border-orange-500/30 shadow-rez-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-rez-lg bg-orange-500/30 flex items-center justify-center">
              <Flame className="w-7 h-7 text-orange-500 dark:text-orange-400" />
            </div>
            <div>
              <h2 className="text-h4 font-poppins text-rez-navy dark:text-white">Daily Rewards</h2>
              <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">Current Streak: {currentStreak} days 🔥</p>
            </div>
          </div>

          {/* Streak Progress */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              { day: 1, coins: 10, completed: currentStreak >= 1 },
              { day: 3, coins: 30, completed: currentStreak >= 3 },
              { day: 7, coins: 100, completed: currentStreak >= 7 },
              { day: 30, coins: 500, completed: currentStreak >= 30, special: true }
            ].map((milestone) => (
              <div
                key={milestone.day}
                className={`p-3 rounded-rez-md text-center ${
                  milestone.completed
                    ? 'bg-orange-100 dark:bg-orange-500/20 border border-orange-300 dark:border-orange-500/50'
                    : 'bg-white/50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10'
                }`}
              >
                <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">Day {milestone.day}</p>
                <p className={`text-lg font-bold ${milestone.completed ? 'text-orange-600 dark:text-orange-400' : 'text-rez-gray-400 dark:text-gray-500'}`}>
                  {milestone.special && '🎉 '}+{milestone.coins}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full h-2 bg-rez-gray-200 dark:bg-white/10 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all"
              style={{ width: `${(currentStreak / 30) * 100}%` }}
            />
          </div>

          <button className="w-full py-3 rounded-rez-md bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-rez-navy dark:text-white font-semibold flex items-center justify-center gap-2 transition-all">
            <CheckCircle className="w-5 h-5" />
            Check in Today
          </button>
        </div>
      </div>

      {/* Shopping & Payment Earnings */}
      <div className="px-4 py-4">
        <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-4 flex items-center gap-2">
          <ShoppingBag className="w-6 h-6 text-purple-500" />
          Earn While Shopping
        </h2>

        <div className="space-y-3">
          {shoppingMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Link
                key={method.id}
                to={method.path}
                className="block p-5 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:border-rez-green-300 dark:hover:border-rez-green-500/30 shadow-rez-card hover:shadow-rez-green transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-rez-md bg-gradient-to-br from-rez-green-100 to-rez-teal-100 dark:from-rez-green-500/20 dark:to-rez-teal-500/20 flex items-center justify-center shrink-0`}>
                    <Icon className="w-7 h-7 text-rez-green-600 dark:text-rez-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-rez-navy dark:text-white mb-1">{method.title}</h3>
                    <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-2">{method.description}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-body-sm font-bold text-rez-green-600 dark:text-rez-green-400">{method.reward}</span>
                      <span className="text-caption text-purple-600 dark:text-purple-400">{method.extraReward}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-rez-gray-400 dark:text-gray-500 shrink-0" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Special Highlight */}
        <div className="mt-4 p-4 rounded-rez-lg bg-gradient-to-r from-rez-green-50 to-rez-teal-50 dark:from-rez-green-500/20 dark:to-rez-teal-500/20 border border-rez-green-200 dark:border-rez-green-500/30">
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-rez-green-600 dark:text-rez-green-400 shrink-0" />
            <p className="text-body-sm text-rez-navy dark:text-white font-semibold">
              🎯 Pay via ReZ = Always Better Price
            </p>
          </div>
        </div>
      </div>

      {/* Social & Community Earnings */}
      <div className="px-4 py-4">
        <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-pink-500" />
          Share & Engage
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {socialActions.map((action, idx) => {
            const Icon = action.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 shadow-rez-subtle"
              >
                <Icon className="w-6 h-6 text-pink-500 dark:text-pink-400 mb-3" />
                <h3 className="text-body-sm font-semibold text-rez-navy dark:text-white mb-1">{action.title}</h3>
                <p className="text-caption text-rez-gray-500 dark:text-gray-500 mb-2">{action.description}</p>
                <p className="text-body-sm font-bold text-pink-600 dark:text-pink-400">+{action.coins} coins</p>
              </div>
            );
          })}
        </div>

        {/* Social Highlight */}
        <div className="mt-4 p-4 rounded-rez-lg bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-500/20 dark:to-purple-500/20 border border-pink-200 dark:border-pink-500/30">
          <p className="text-body-sm text-rez-navy dark:text-white text-center">
            👥 <span className="font-semibold">Friends redeemed your shared deal</span> → +50 ReZ Coins
          </p>
        </div>
      </div>

      {/* Special Programs */}
      <div className="px-4 py-4">
        <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-rez-gold-dark dark:text-rez-gold" />
          Special Programs
        </h2>

        <div className="space-y-3">
          {specialPrograms.map((program) => {
            const Icon = program.icon;
            return (
              <Link
                key={program.id}
                to={program.path}
                className="block p-5 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:border-rez-gold/50 dark:hover:border-rez-gold/30 shadow-rez-card transition-all"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className={`w-14 h-14 rounded-rez-md bg-gradient-to-br from-rez-gold/20 to-orange-200 dark:from-rez-gold/20 dark:to-orange-500/20 flex items-center justify-center shrink-0`}>
                    <Icon className="w-7 h-7 text-rez-gold-dark dark:text-rez-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-rez-navy dark:text-white">{program.title}</h3>
                      <span className="text-xl">{program.badge}</span>
                    </div>
                    <div className="space-y-1 mb-3">
                      {program.rewards.map((reward, idx) => (
                        <p key={idx} className="text-caption text-rez-gray-600 dark:text-gray-400 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-rez-green-500" />
                          {reward}
                        </p>
                      ))}
                    </div>
                    <p className="text-body-sm font-bold text-rez-gold-dark dark:text-rez-gold">{program.earnings}</p>
                  </div>
                </div>
                <button className="w-full py-2 rounded-rez-md bg-rez-gray-100 dark:bg-white/10 hover:bg-rez-gray-200 dark:hover:bg-white/20 text-rez-navy dark:text-white text-body-sm font-semibold transition-colors">
                  Check Eligibility
                </button>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Events & Offline Earnings */}
      <div className="px-4 py-4">
        <Link
          to="/events"
          className="block p-6 rounded-rez-xl bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-500/20 dark:via-pink-500/20 dark:to-orange-500/20 border border-purple-200 dark:border-purple-500/30 shadow-rez-card hover:shadow-rez-green transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-rez-lg bg-purple-500/30 flex items-center justify-center">
              <Ticket className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-h4 font-poppins text-rez-navy dark:text-white">Earn at Events</h2>
              <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">College fests, markets, concerts & more</p>
            </div>
            <ChevronRight className="w-6 h-6 text-rez-gray-400 dark:text-gray-400" />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: '🎓', label: 'College Fests' },
              { icon: '🛍️', label: 'Flea Markets' },
              { icon: '🎵', label: 'Music Nights' },
              { icon: '⚽', label: 'Sports Events' }
            ].map((type, idx) => (
              <div key={idx} className="p-3 rounded-rez-md bg-rez-gray-50 dark:bg-white/50 dark:bg-white/10 text-center">
                <p className="text-2xl mb-1">{type.icon}</p>
                <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">{type.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 rounded-rez-md bg-white/50 dark:bg-white/5">
            <p className="text-body-sm text-rez-navy dark:text-white">
              💰 Ways to earn: Entry • Purchases • Sharing • Voting • Participation
            </p>
          </div>
        </Link>
      </div>

      {/* Bonus & Limited-Time Earnings */}
      <div className="px-4 py-4">
        <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-4 flex items-center gap-2">
          <PartyPopper className="w-6 h-6 text-orange-500" />
          Bonus Zone
        </h2>

        <div className="space-y-3">
          {bonusOpportunities.map((bonus, idx) => {
            const Icon = bonus.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-rez-lg bg-white dark:bg-bg-card border border-orange-200 dark:border-orange-500/30 shadow-rez-card relative overflow-hidden`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-rez-md bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-rez-navy dark:text-white mb-1">{bonus.title}</h3>
                    <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-2">{bonus.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-body-sm font-bold text-rez-green-600 dark:text-rez-green-400">{bonus.reward}</p>
                      <div className="flex items-center gap-1 text-orange-600 dark:text-orange-400">
                        <Clock className="w-4 h-4" />
                        <p className="text-caption font-semibold">{bonus.timeLeft}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-200/50 dark:bg-orange-500/10 rounded-full blur-2xl" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Education & Transparency */}
      <div className="px-4 py-4">
        <div className="p-6 rounded-rez-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200 dark:border-blue-500/30 shadow-rez-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-rez-lg bg-blue-500/30 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-h4 font-poppins text-rez-navy dark:text-white">Learn & Maximise</h2>
              <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">Become an earning pro</p>
            </div>
          </div>

          <div className="space-y-2">
            {[
              'How ReZ Coins work',
              'Difference between coin types',
              'Best ways to earn faster',
              'Coin expiry rules'
            ].map((topic, idx) => (
              <button
                key={idx}
                className="w-full p-3 rounded-rez-md bg-rez-gray-50 dark:bg-white/50 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-left flex items-center justify-between transition-colors"
              >
                <span className="text-body-sm text-rez-navy dark:text-white">{topic}</span>
                <ChevronRight className="w-4 h-4 text-rez-gray-400 dark:text-gray-400" />
              </button>
            ))}
          </div>

          <Link
            to="/how-rez-works"
            className="mt-4 w-full py-3 rounded-rez-md bg-blue-500 hover:bg-blue-600 text-rez-navy dark:text-white font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <Video className="w-5 h-5" />
            Watch 30-sec Explainer
          </Link>
        </div>
      </div>

      {/* Why ReZ Pays More */}
      <div className="px-4 py-4">
        <div className="p-6 rounded-rez-xl bg-gradient-to-r from-rez-green-50 to-purple-50 dark:from-rez-green-500/10 dark:to-purple-500/10 border border-rez-green-200 dark:border-rez-green-500/20 shadow-rez-card">
          <h3 className="text-h4 font-poppins text-rez-navy dark:text-white mb-4 text-center">
            Why ReZ Pays You More
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center text-center gap-2 p-4 rounded-rez-md bg-white/50 dark:bg-white/5">
              <span className="text-3xl">💰</span>
              <div>
                <p className="text-body-sm font-medium text-rez-navy dark:text-white">Merchant-Funded</p>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">Real savings, not discounts</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 rounded-rez-md bg-white/50 dark:bg-white/5">
              <span className="text-3xl">⚡</span>
              <div>
                <p className="text-body-sm font-medium text-rez-navy dark:text-white">Instant Rewards</p>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">No waiting periods</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 rounded-rez-md bg-white/50 dark:bg-white/5">
              <span className="text-3xl">🎯</span>
              <div>
                <p className="text-body-sm font-medium text-rez-navy dark:text-white">Triple Stack</p>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">Cashback + Coins + Loyalty</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 rounded-rez-md bg-white/50 dark:bg-white/5">
              <span className="text-3xl">🔄</span>
              <div>
                <p className="text-body-sm font-medium text-rez-navy dark:text-white">High Frequency</p>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">Earn daily, everywhere</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-8" />

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-20 left-0 right-0 px-4 pointer-events-none">
        <div className="pointer-events-auto">
          <Link
            to="/pay-in-store"
            className="block p-4 rounded-rez-lg bg-gradient-to-r from-rez-green-500 to-rez-teal-500 hover:from-rez-green-600 hover:to-rez-teal-600 text-rez-navy dark:text-white shadow-rez-green transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                <div>
                  <p className="font-bold">Find Ways to Earn Near Me</p>
                  <p className="text-caption text-white/80">Partner stores nearby</p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </div>
      <BottomNavManager />
    </div>
  );
};

export default Earn;
