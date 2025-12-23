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
      color: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-emerald-500/20',
      iconColor: 'text-emerald-400',
      path: '/pay-in-store'
    },
    {
      id: 'upload-bill',
      icon: Upload,
      title: 'Upload Bill',
      reward: 'Earn ₹50-₹200 Coins',
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      path: '/upload-bill'
    },
    {
      id: 'share-offer',
      icon: Share2,
      title: 'Share an Offer',
      reward: 'Earn 20 ReZ Coins',
      color: 'from-purple-500 to-pink-500',
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
      path: '/share'
    },
    {
      id: 'write-review',
      icon: Star,
      title: 'Write a Review',
      reward: 'Earn 25-100 Coins',
      color: 'from-amber-500 to-orange-500',
      iconBg: 'bg-amber-500/20',
      iconColor: 'text-amber-400',
      path: '/reviews'
    },
    {
      id: 'refer-friend',
      icon: Users,
      title: 'Refer a Friend',
      reward: 'Earn 100 Coins',
      color: 'from-pink-500 to-rose-500',
      iconBg: 'bg-pink-500/20',
      iconColor: 'text-pink-400',
      path: '/refer'
    },
    {
      id: 'daily-checkin',
      icon: Calendar,
      title: 'Daily Check-in',
      reward: 'Earn 10-500 Coins',
      color: 'from-green-500 to-emerald-500',
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-400',
      path: '#daily-rewards'
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
      color: 'from-blue-500 to-purple-500',
      path: '/cash-store'
    },
    {
      id: 'offline-payment',
      icon: Store,
      title: 'Pay at Partner Stores',
      description: 'Instant ReZ Coins on every purchase',
      reward: 'Always Better Price',
      extraReward: '+ First visit bonus',
      color: 'from-emerald-500 to-teal-500',
      path: '/pay-in-store'
    },
    {
      id: 'lock-price',
      icon: Lock,
      title: 'Lock Price Deals',
      description: 'Lock with 10%, earn on both actions',
      reward: 'Double Earnings',
      extraReward: '+ Pickup bonus',
      color: 'from-purple-500 to-pink-500',
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
      color: 'from-blue-500 to-cyan-500',
      path: '/exclusive/student'
    },
    {
      id: 'corporate',
      icon: Briefcase,
      title: 'Corporate Perks',
      badge: '🧑‍💼',
      rewards: ['Employee of the Month', 'Corporate events', 'Exclusive BNPL'],
      earnings: 'Up to 3,000 coins/month',
      color: 'from-purple-500 to-blue-500',
      path: '/exclusive/corporate'
    },
    {
      id: 'prive',
      icon: Crown,
      title: 'ReZ Privé',
      badge: '👑',
      rewards: ['Premium campaigns', 'High multipliers', 'Brand collaborations'],
      earnings: 'Unlimited potential',
      color: 'from-amber-500 to-orange-500',
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
      icon: PartyPopper,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Double Cashback Day',
      description: 'All fashion purchases',
      reward: '2X Earnings',
      timeLeft: '12h 45m',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Last Chance Bonus',
      description: 'Refer 2 friends today',
      reward: '+200 Coins',
      timeLeft: '3h 15m',
      icon: Clock,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header: Earnings Snapshot */}
      <div className="sticky top-0 z-40 glass">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold text-white mb-4">💰 Your Earnings</h1>

          {/* Wallet Summary Pills */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/30">
              <p className="text-xs text-gray-400 mb-1">ReZ Coins</p>
              <p className="text-xl font-bold text-emerald-400">{rezCoins.toLocaleString()}</p>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30">
              <p className="text-xs text-gray-400 mb-1">Branded</p>
              <p className="text-xl font-bold text-purple-400">{totalBrandedCoins.toLocaleString()}</p>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/30">
              <p className="text-xs text-gray-400 mb-1">Promo</p>
              <p className="text-xl font-bold text-amber-400">{totalPromoCoins.toLocaleString()}</p>
            </div>
          </div>

          {/* This Month Earned */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-amber-500/10 border border-emerald-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 mb-1">This Month Earned</p>
                <p className="text-2xl font-bold text-white">₹{monthlyEarnings.toLocaleString()}</p>
              </div>
              <div className="flex gap-2">
                <Link
                  to="/wallet"
                  className="px-3 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/30 transition-colors"
                >
                  View Wallet
                </Link>
                <Link
                  to="/how-rez-works"
                  className="px-3 py-2 rounded-lg bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
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
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Zap className="w-6 h-6 text-amber-400" />
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
                className="p-4 rounded-2xl bg-[#2C2C2E] border border-white/10 hover:border-emerald-500/30 transition-all hover:scale-[1.02]"
              >
                <div className={`w-12 h-12 rounded-xl ${action.iconBg} flex items-center justify-center mb-3`}>
                  <Icon className={`w-6 h-6 ${action.iconColor}`} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{action.title}</h3>
                <p className="text-xs text-emerald-400 font-medium">{action.reward}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Daily & Streak Earnings */}
      <div className="px-4 py-4" id="daily-rewards">
        <div className="p-6 rounded-3xl bg-gradient-to-br from-orange-500/20 to-red-500/10 border border-orange-500/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/30 flex items-center justify-center">
              <Flame className="w-7 h-7 text-orange-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Daily Rewards</h2>
              <p className="text-sm text-gray-400">Current Streak: {currentStreak} days 🔥</p>
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
                className={`p-3 rounded-xl text-center ${
                  milestone.completed
                    ? 'bg-orange-500/20 border border-orange-500/50'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                <p className="text-xs text-gray-400 mb-1">Day {milestone.day}</p>
                <p className={`text-lg font-bold ${milestone.completed ? 'text-orange-400' : 'text-gray-500'}`}>
                  {milestone.special && '🎉 '}+{milestone.coins}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all"
              style={{ width: `${(currentStreak / 30) * 100}%` }}
            />
          </div>

          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Check in Today
          </button>
        </div>
      </div>

      {/* Shopping & Payment Earnings */}
      <div className="px-4 py-4">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <ShoppingBag className="w-6 h-6 text-purple-400" />
          Earn While Shopping
        </h2>

        <div className="space-y-3">
          {shoppingMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Link
                key={method.id}
                to={method.path}
                className="block p-5 rounded-2xl bg-gradient-to-br from-[#2C2C2E] to-[#1C1C1E] border border-white/10 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} bg-opacity-20 flex items-center justify-center shrink-0`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{method.title}</h3>
                    <p className="text-xs text-gray-400 mb-2">{method.description}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-emerald-400">{method.reward}</span>
                      <span className="text-xs text-purple-400">{method.extraReward}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500 shrink-0" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Special Highlight */}
        <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-emerald-400 shrink-0" />
            <p className="text-sm text-white font-semibold">
              🎯 Pay via ReZ = Always Better Price
            </p>
          </div>
        </div>
      </div>

      {/* Social & Community Earnings */}
      <div className="px-4 py-4">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-pink-400" />
          Share & Engage
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {socialActions.map((action, idx) => {
            const Icon = action.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#2C2C2E] border border-white/10"
              >
                <Icon className="w-6 h-6 text-pink-400 mb-3" />
                <h3 className="text-sm font-semibold text-white mb-1">{action.title}</h3>
                <p className="text-xs text-gray-500 mb-2">{action.description}</p>
                <p className="text-sm font-bold text-pink-400">+{action.coins} coins</p>
              </div>
            );
          })}
        </div>

        {/* Social Highlight */}
        <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30">
          <p className="text-sm text-white text-center">
            👥 <span className="font-semibold">Friends redeemed your shared deal</span> → +50 ReZ Coins
          </p>
        </div>
      </div>

      {/* Special Programs */}
      <div className="px-4 py-4">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-amber-400" />
          Special Programs
        </h2>

        <div className="space-y-3">
          {specialPrograms.map((program) => {
            const Icon = program.icon;
            return (
              <Link
                key={program.id}
                to={program.path}
                className="block p-5 rounded-2xl bg-gradient-to-br from-[#2C2C2E] to-[#1C1C1E] border border-white/10 hover:border-amber-500/30 transition-all"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} bg-opacity-20 flex items-center justify-center shrink-0`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-white">{program.title}</h3>
                      <span className="text-xl">{program.badge}</span>
                    </div>
                    <div className="space-y-1 mb-3">
                      {program.rewards.map((reward, idx) => (
                        <p key={idx} className="text-xs text-gray-400 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-emerald-400" />
                          {reward}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm font-bold text-amber-400">{program.earnings}</p>
                  </div>
                </div>
                <button className="w-full py-2 rounded-xl bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors">
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
          className="block p-6 rounded-3xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 border border-purple-500/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/30 flex items-center justify-center">
              <Ticket className="w-7 h-7 text-purple-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white">Earn at Events</h2>
              <p className="text-sm text-gray-400">College fests, markets, concerts & more</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: '🎓', label: 'College Fests' },
              { icon: '🛍️', label: 'Flea Markets' },
              { icon: '🎵', label: 'Music Nights' },
              { icon: '⚽', label: 'Sports Events' }
            ].map((type, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/10 text-center">
                <p className="text-2xl mb-1">{type.icon}</p>
                <p className="text-[10px] text-gray-400">{type.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 rounded-xl bg-white/5">
            <p className="text-sm text-white">
              💰 Ways to earn: Entry • Purchases • Sharing • Voting • Participation
            </p>
          </div>
        </Link>
      </div>

      {/* Bonus & Limited-Time Earnings */}
      <div className="px-4 py-4">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <PartyPopper className="w-6 h-6 text-orange-400" />
          Bonus Zone
        </h2>

        <div className="space-y-3">
          {bonusOpportunities.map((bonus, idx) => {
            const Icon = bonus.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl bg-gradient-to-r ${bonus.color} bg-opacity-10 border border-white/10 relative overflow-hidden`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{bonus.title}</h3>
                    <p className="text-xs text-gray-400 mb-2">{bonus.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-emerald-400">{bonus.reward}</p>
                      <div className="flex items-center gap-1 text-orange-400">
                        <Clock className="w-4 h-4" />
                        <p className="text-xs font-semibold">{bonus.timeLeft}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Education & Transparency */}
      <div className="px-4 py-4">
        <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/30 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Learn & Maximise</h2>
              <p className="text-sm text-gray-400">Become an earning pro</p>
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
                className="w-full p-3 rounded-xl bg-white/10 text-left flex items-center justify-between hover:bg-white/20 transition-colors"
              >
                <span className="text-sm text-white">{topic}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            ))}
          </div>

          <Link
            to="/how-rez-works"
            className="mt-4 w-full py-3 rounded-xl bg-blue-500/20 text-blue-400 font-semibold flex items-center justify-center gap-2 hover:bg-blue-500/30 transition-colors"
          >
            <Video className="w-5 h-5" />
            Watch 30-sec Explainer
          </Link>
        </div>
      </div>

      {/* Why ReZ Pays More */}
      <div className="px-4 py-4">
        <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-500/10 to-purple-500/10 border border-emerald-500/20">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">
            Why ReZ Pays You More
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-white/5">
              <span className="text-3xl">💰</span>
              <div>
                <p className="text-sm font-medium text-white">Merchant-Funded</p>
                <p className="text-xs text-gray-400">Real savings, not discounts</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-white/5">
              <span className="text-3xl">⚡</span>
              <div>
                <p className="text-sm font-medium text-white">Instant Rewards</p>
                <p className="text-xs text-gray-400">No waiting periods</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-white/5">
              <span className="text-3xl">🎯</span>
              <div>
                <p className="text-sm font-medium text-white">Triple Stack</p>
                <p className="text-xs text-gray-400">Cashback + Coins + Loyalty</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-white/5">
              <span className="text-3xl">🔄</span>
              <div>
                <p className="text-sm font-medium text-white">High Frequency</p>
                <p className="text-xs text-gray-400">Earn daily, everywhere</p>
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
            className="block p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                <div>
                  <p className="font-bold">Find Ways to Earn Near Me</p>
                  <p className="text-xs text-white/80">Partner stores nearby</p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Earn;
