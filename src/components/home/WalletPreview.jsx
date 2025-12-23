import { Link } from 'react-router-dom';
import { Coins, ChevronRight, AlertCircle, Wallet, Plus, ArrowRight } from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';

const WalletPreview = () => {
  const { rezCoins, brandedCoins, promoCoins } = useWallet();

  // Calculate total branded coins (now it's an array)
  const totalBrandedCoins = Array.isArray(brandedCoins)
    ? brandedCoins.reduce((sum, coin) => sum + coin.balance, 0)
    : 0;

  const expiringCoins = promoCoins?.balance || 0;
  const expiryDays = promoCoins?.expiry || '3 days';

  return (
    <div className="px-4 py-4">
      <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-amber-500/10 border border-emerald-500/20">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-emerald-400" />
            <h2 className="text-sm font-semibold text-white">ReZ Wallet</h2>
          </div>
          <Link to="/wallet" className="flex items-center gap-1 text-xs text-emerald-400">
            View all <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Coin Balances */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-white/5 text-center">
            <Coins className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <p className="text-lg font-bold text-white">{rezCoins?.balance || 0}</p>
            <p className="text-[10px] text-gray-400">ReZ Coins</p>
          </div>
          <div className="p-3 rounded-xl bg-white/5 text-center">
            <Coins className="w-5 h-5 text-purple-400 mx-auto mb-1" />
            <p className="text-lg font-bold text-white">{totalBrandedCoins}</p>
            <p className="text-[10px] text-gray-400">Branded</p>
          </div>
          <div className="p-3 rounded-xl bg-white/5 text-center">
            <Coins className="w-5 h-5 text-pink-400 mx-auto mb-1" />
            <p className="text-lg font-bold text-white">{promoCoins?.balance || 0}</p>
            <p className="text-[10px] text-gray-400">Promo</p>
          </div>
        </div>

        {/* Expiry Warning */}
        {expiringCoins > 0 && (
          <div className="flex items-center gap-2 p-2 rounded-xl bg-red-500/10 border border-red-500/20 mb-4">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <p className="text-xs text-red-300 flex-1">
              <span className="font-medium">{expiringCoins} coins</span> expiring in {expiryDays} days
            </p>
            <Link to="/wallet/use" className="text-xs text-red-400 font-medium">
              Use now
            </Link>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            to="/wallet/use"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500 text-sm font-medium text-white"
          >
            <ArrowRight className="w-4 h-4" />
            Use Coins
          </Link>
          <Link
            to="/wallet"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 text-sm font-medium text-white"
          >
            View Wallet
          </Link>
          <Link
            to="/earn"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500/20 text-sm font-medium text-amber-400"
          >
            <Plus className="w-4 h-4" />
            Earn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WalletPreview;
