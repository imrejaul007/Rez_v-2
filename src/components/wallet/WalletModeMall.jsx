import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Award,
  ShoppingBag,
  TrendingUp,
  ArrowRight,
  Gift,
  Sparkles,
  Star,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../../contexts/WalletContext';
import { useUser } from '../../contexts/UserContext';
import { formatRupees } from '../../utils/wallet';
import BottomNav from '../layout/BottomNav';

/**
 * WalletModeMall Component
 * ReZ Mall Wallet Experience
 *
 * PURPOSE: Curated brands, trusted shopping, higher-value purchases
 * EMOTION: "Your rewards make premium affordable"
 * DESIGN: White + Gold, Trust, premium
 * TONE: Makes coins feel valuable, encourages higher AOV, reinforces curated trust
 */
const WalletModeMall = () => {
  const navigate = useNavigate();
  const wallet = useWallet();
  const { user } = useUser();

  const totalRezCoins = wallet.rezCoinsData?.balance || wallet.rezCoins;
  const totalBrandedCoins = wallet.brandedCoins.reduce((sum, brand) => sum + brand.balance, 0);

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">
              Wallet
            </h1>
          </div>
        </div>
      </div>

      {/* Top Section */}
      <div className="px-4 py-6 bg-gradient-to-br from-white via-amber-50 to-yellow-50 dark:from-dark-800 dark:via-yellow-900/20 dark:to-amber-900/20">
        <div className="text-center">
          <p className="text-sm font-medium text-rez-gray-700 dark:text-gray-300 mb-2">
            Your ReZ Mall Balance
          </p>
          <h2 className="text-5xl font-bold font-poppins mb-2 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            {totalRezCoins + totalBrandedCoins}
          </h2>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">
            Usable on curated brands
          </p>
        </div>
      </div>

      <div className="p-4 space-y-4 pb-24">
        {/* Coin Emphasis */}
        <div className="space-y-3">
          {/* ReZ Coin (Primary in Mall) */}
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border-2 border-amber-200 dark:border-amber-500/30 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🪙</span>
                </div>
                <div>
                  <h3 className="text-body font-semibold text-rez-navy dark:text-white">
                    ReZ Coin
                  </h3>
                  <p className="text-caption text-amber-600 dark:text-amber-400 font-medium">
                    Primary currency
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-h3 font-bold text-rez-navy dark:text-white">
                  {totalRezCoins}
                </p>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                  = {formatRupees(totalRezCoins)}
                </p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20">
              <p className="text-caption text-amber-800 dark:text-amber-300">
                💡 Best use: Apply on premium brands for maximum value
              </p>
            </div>
          </div>

          {/* Branded Coins (Brand tiles with logos) */}
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-rez-navy dark:text-white" />
                <h3 className="text-body font-semibold text-rez-navy dark:text-white">
                  Brand Wallet
                </h3>
              </div>
              <Link
                to="/wallet/brands"
                className="text-caption text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1"
              >
                View All
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {wallet.brandedCoins.slice(0, 6).map((brand) => (
                <Link
                  key={brand.brandId}
                  to={`/store/${brand.brandId}`}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 hover:bg-rez-gray-100 dark:hover:bg-white/10 transition-colors border border-rez-gray-200 dark:border-white/10"
                >
                  <div className="w-14 h-14 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center shadow-sm">
                    <span className="text-3xl">{brand.logo}</span>
                  </div>
                  <div className="text-center">
                    <p className="text-caption font-semibold text-rez-navy dark:text-white truncate w-full">
                      {brand.merchant}
                    </p>
                    <p className="text-[10px] text-amber-600 dark:text-amber-400 font-bold">
                      {brand.balance} coins
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Privé Coin - Show different UI based on membership status */}
          {user?.isPriveMember && wallet.priveCoins.balance > 0 ? (
            // UNLOCKED - For Privé Members
            <div className="p-4 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center">
                    <span className="text-2xl">👑</span>
                  </div>
                  <div>
                    <h3 className="text-body font-semibold text-white">
                      Privé Coin
                    </h3>
                    <p className="text-caption text-[#D4AF37]">
                      Elite member exclusive
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-h4 font-bold text-[#D4AF37]">
                    {wallet.priveCoins.balance}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // LOCKED - For Non-Members (Aspirational)
            <Link
              to="/prive/unlock"
              className="p-4 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all shadow-lg cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
                    <span className="text-2xl opacity-50">👑</span>
                  </div>
                  <div>
                    <h3 className="text-body font-semibold text-gray-400">
                      Privé Coin
                    </h3>
                    <p className="text-caption text-gray-500">
                      Most powerful coin
                    </p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30">
                  <span className="text-xs text-[#D4AF37] font-medium">🔒 Locked</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500">Your progress to unlock</span>
                  <span className="text-xs text-[#D4AF37] font-bold">{user?.priveScore || 0}%</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#D4AF37] to-yellow-500 transition-all"
                    style={{ width: `${user?.priveScore || 0}%` }}
                  ></div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs text-gray-500">
                  Only coin that works on gift cards
                </p>
                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
              </div>
            </Link>
          )}
        </div>

        {/* Best Use Suggestions */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-200 dark:border-blue-500/20">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-body font-semibold text-rez-navy dark:text-white">
              Smart Apply Preview
            </h3>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-white/10 mb-3">
            <p className="text-body-sm text-rez-navy dark:text-white font-medium mb-1">
              Use 320 ReZ Coins on Nykaa → Save ₹320
            </p>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">
              Best savings will be auto-applied at checkout
            </p>
          </div>
        </div>

        {/* Brand Wallet View */}
        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="text-body font-semibold text-rez-navy dark:text-white mb-4">
            Brand Performance
          </h3>
          <div className="space-y-3">
            {wallet.brandedCoins.slice(0, 3).map((brand) => (
              <Link
                key={brand.brandId}
                to={`/store/${brand.brandId}`}
                className="block p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 hover:bg-rez-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{brand.logo}</span>
                    <div>
                      <p className="text-body-sm font-semibold text-rez-navy dark:text-white">
                        {brand.merchant}
                      </p>
                      <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                        {brand.loyaltyData.lifetimeVisits} visits
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-rez-gray-400" />
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-caption text-rez-gray-600 dark:text-gray-400">Earned</p>
                    <p className="text-body-sm font-bold text-emerald-600 dark:text-emerald-400">
                      {brand.loyaltyData.totalCoinsEarned}
                    </p>
                  </div>
                  <div>
                    <p className="text-caption text-rez-gray-600 dark:text-gray-400">Used</p>
                    <p className="text-body-sm font-bold text-rez-navy dark:text-white">
                      {brand.loyaltyData.totalCoinsEarned - brand.balance}
                    </p>
                  </div>
                  <div>
                    <p className="text-caption text-rez-gray-600 dark:text-gray-400">Available</p>
                    <p className="text-body-sm font-bold text-amber-600 dark:text-amber-400">
                      {brand.balance}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mall History */}
        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-body font-semibold text-rez-navy dark:text-white">
              Mall History
            </h3>
            <Link
              to="/wallet/transactions"
              className="text-caption text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1"
            >
              See All
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <p className="text-body-sm font-semibold text-rez-navy dark:text-white">
                      Brand-wise savings
                    </p>
                    <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                      {formatRupees(wallet.savingsStats.thisMonth)} this month
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="text-body-sm font-semibold text-rez-navy dark:text-white">
                      Trust badges earned
                    </p>
                    <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                      {wallet.brandedCoins.length} brands trusted
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Earn More from Mall */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-200 dark:border-purple-500/20">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h3 className="text-body font-semibold text-rez-navy dark:text-white">
              Earn More
            </h3>
          </div>
          <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-4">
            Shop from curated brands to earn more coins and unlock exclusive rewards
          </p>
          <Link
            to="/mall"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all"
          >
            <ShoppingBag className="w-5 h-5" />
            Browse Mall Brands
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                This Month
              </p>
            </div>
            <p className="text-h4 font-bold text-rez-navy dark:text-white">
              {formatRupees(wallet.savingsStats.thisMonth)}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <div className="flex items-center gap-2 mb-2">
              <ShoppingBag className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                Purchases
              </p>
            </div>
            <p className="text-h4 font-bold text-rez-navy dark:text-white">
              {wallet.transactions.filter(t => t.type === 'earned').length}
            </p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default WalletModeMall;
