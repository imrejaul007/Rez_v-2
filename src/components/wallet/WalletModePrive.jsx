import { Link } from 'react-router-dom';
import {
  Crown,
  Gift,
  Sparkles,
  TrendingUp,
  Calendar,
  Award,
  ArrowRight,
  Star,
  Zap,
  Users
} from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';
import { useApp } from '../../contexts/AppContext';
import {
  formatRupees
} from '../../utils/wallet';
import BottomNav from '../layout/BottomNav';

/**
 * WalletModePrive Component
 * ReZ Privé Wallet Experience
 *
 * Emotion: "I belong here"
 * Design: Dark theme, gold accents, minimal but powerful
 * Colors: Black (#1A1A1A) + Gold (#D4AF37)
 * Focus: Status, access, prestige, exclusive privileges
 */
const WalletModePrive = () => {
  const wallet = useWallet();
  const { theme } = useApp();

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      {/* Hero Section - Dark & Premium */}
      <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black px-6 py-8">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Crown className="w-6 h-6 text-[#D4AF37]" />
              <h1 className="text-lg font-semibold text-white">Privé Vault</h1>
            </div>
            <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-[#D4AF37]/30">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </button>
          </div>

          {/* Privé Status Card */}
          <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-2xl p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-xs font-medium text-[#D4AF37] uppercase tracking-wider">
                    {wallet.priveCoins.tier} Member
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">
                  ELITE STATUS
                </h2>
                <p className="text-sm text-gray-400">
                  Active since Jan 2024
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400 mb-1">Influence Score</div>
                <div className="text-2xl font-bold text-[#D4AF37]">
                  {wallet.priveCoins.influenceScore}
                </div>
              </div>
            </div>

            <div className="h-2 bg-black/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#D4AF37] to-yellow-500"
                style={{ width: '85%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 space-y-6 pb-24 -mt-4">
        {/* Privé Coins Vault */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <Crown className="w-6 h-6 text-[#D4AF37]" />
            <h3 className="text-lg font-semibold text-white">
              Privé Coins Balance
            </h3>
          </div>

          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-5xl">👑</span>
              <div className="text-left">
                <div className="text-4xl font-bold text-[#D4AF37]">
                  {wallet.priveCoins.balance}
                </div>
                <div className="text-sm text-gray-400">coins</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              = {formatRupees(wallet.priveCoins.balance * 0.1)} value
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-black/40 border border-[#D4AF37]/20 rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-white mb-1">Everywhere</div>
              <div className="text-xs text-gray-400">Usability</div>
            </div>
            <div className="bg-black/40 border border-[#D4AF37]/20 rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-white mb-1">No Expiry</div>
              <div className="text-xs text-gray-400">Validity</div>
            </div>
          </div>

          <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-4">
            <div className="flex items-start gap-2">
              <Sparkles className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-300">
                <span className="font-semibold text-white">Most Powerful Coin:</span> Use for anything, anywhere - including gift cards, experiences, and luxury redemptions.
              </div>
            </div>
          </div>
        </div>

        {/* Total Privileges Value */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Gift className="w-6 h-6 text-[#D4AF37]" />
            <h3 className="text-lg font-semibold text-white">
              Total Privileges Value
            </h3>
          </div>

          <div className="mb-4">
            <div className="text-3xl font-bold text-[#D4AF37] mb-1">
              {formatRupees(12500)}
            </div>
            <div className="text-sm text-gray-400">
              Worth of exclusive access
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-black/40 rounded-lg p-3 text-center border border-gray-800">
              <div className="text-xl font-bold text-white">18</div>
              <div className="text-xs text-gray-400">Active</div>
            </div>
            <div className="bg-black/40 rounded-lg p-3 text-center border border-gray-800">
              <div className="text-xl font-bold text-white">45</div>
              <div className="text-xs text-gray-400">Unlocked</div>
            </div>
            <div className="bg-black/40 rounded-lg p-3 text-center border border-gray-800">
              <div className="text-xl font-bold text-white">12</div>
              <div className="text-xs text-gray-400">Coming</div>
            </div>
          </div>
        </div>

        {/* Exclusive Access */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#D4AF37]" />
              Exclusive Access
            </h3>
            <Link
              to="/prive/events"
              className="text-[#D4AF37] text-sm font-medium hover:underline flex items-center gap-1"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            <div className="bg-black/40 border border-gray-800 hover:border-[#D4AF37]/30 rounded-xl p-4 transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#D4AF37]/10">
                    <Star className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="font-medium text-white">VIP Events</div>
                    <div className="text-xs text-gray-400">3 this month</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </div>
            </div>

            <div className="bg-black/40 border border-gray-800 hover:border-[#D4AF37]/30 rounded-xl p-4 transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#D4AF37]/10">
                    <Users className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Brand Invitations</div>
                    <div className="text-xs text-gray-400">2 pending</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-medium">
                  New
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Influence Earnings */}
        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">
              Influence Earnings
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-2xl font-bold text-white mb-1">
                {formatRupees(4200)}
              </div>
              <div className="text-sm text-gray-400">
                Campaign Earnings
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">
                850
              </div>
              <div className="text-sm text-gray-400">
                Content Approved
              </div>
            </div>
          </div>

          <Link
            to="/prive/campaigns"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all"
          >
            <Zap className="w-5 h-5" />
            New Campaigns Available
          </Link>
        </div>

        {/* Tier Bonus */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-[#D4AF37]" />
            <h3 className="text-lg font-semibold text-white">
              Elite Tier Bonuses
            </h3>
          </div>

          <div className="space-y-3">
            {[
              { name: '2x Coins Multiplier', status: 'Active', icon: '⚡' },
              { name: 'Priority Support', status: 'Active', icon: '🎯' },
              { name: 'Early Access', status: 'Active', icon: '🔓' },
              { name: 'VIP Experiences', status: 'Active', icon: '✨' }
            ].map((bonus, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-black/40 border border-gray-800 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{bonus.icon}</span>
                  <span className="text-sm font-medium text-white">
                    {bonus.name}
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                  {bonus.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exclusive Redemptions */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-2xl p-6 shadow-2xl">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Gift className="w-5 h-5 text-[#D4AF37]" />
            Exclusive Redemptions
          </h3>

          <div className="grid grid-cols-3 gap-3">
            <Link
              to="/prive/gift-cards"
              className="flex flex-col items-center gap-2 p-4 bg-black/40 hover:bg-black/60 border border-gray-800 hover:border-[#D4AF37]/30 rounded-xl transition-all"
            >
              <div className="text-2xl">🎁</div>
              <div className="text-xs text-center text-gray-300">Gift Cards</div>
            </Link>

            <Link
              to="/prive/experiences"
              className="flex flex-col items-center gap-2 p-4 bg-black/40 hover:bg-black/60 border border-gray-800 hover:border-[#D4AF37]/30 rounded-xl transition-all"
            >
              <div className="text-2xl">🌟</div>
              <div className="text-xs text-center text-gray-300">Experiences</div>
            </Link>

            <Link
              to="/prive/luxury"
              className="flex flex-col items-center gap-2 p-4 bg-black/40 hover:bg-black/60 border border-gray-800 hover:border-[#D4AF37]/30 rounded-xl transition-all"
            >
              <div className="text-2xl">💎</div>
              <div className="text-xs text-center text-gray-300">Luxury</div>
            </Link>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default WalletModePrive;
