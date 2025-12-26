import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Info, ChevronDown, ChevronUp, Check, AlertCircle } from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';
import { useUser } from '../../contexts/UserContext';

const CoinAutoApply = ({ billAmount, merchantId = null, category = null, onCoinsApplied }) => {
  const { calculateAutoApplyCoins, rezCoins, brandedCoins, promoCoins, priveCoins, coinRules } = useWallet();
  const { user } = useUser();
  const [expanded, setExpanded] = useState(false);
  const [manualMode, setManualMode] = useState(false);
  const [appliedCoins, setAppliedCoins] = useState(null);

  useEffect(() => {
    if (!manualMode && billAmount > 0) {
      const result = calculateAutoApplyCoins(billAmount, merchantId, category);
      setAppliedCoins(result);
      if (onCoinsApplied) {
        onCoinsApplied(result);
      }
    }
  }, [billAmount, merchantId, category, manualMode, calculateAutoApplyCoins, onCoinsApplied]);

  if (!appliedCoins || billAmount <= 0) {
    return null;
  }

  const totalSaving = appliedCoins.total;
  const finalAmount = appliedCoins.remainingBill;

  return (
    <div className="mb-4">
      {/* Summary Card */}
      <div className="p-4 rounded-rez-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/10 dark:to-teal-500/10 border border-emerald-500/30 dark:border-emerald-500/30">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="text-body-sm font-semibold text-rez-navy dark:text-white">Coins Applied</h3>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Auto-priority order</p>
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 hover:bg-white/50 dark:hover:bg-white/10 rounded-lg transition-colors"
          >
            {expanded ? (
              <ChevronUp className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>

        {/* Savings Summary */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-caption text-rez-gray-600 dark:text-gray-400">You're saving</span>
          <span className="text-h4 font-poppins text-emerald-600 dark:text-emerald-400">₹{totalSaving}</span>
          <span className="text-caption text-rez-gray-600 dark:text-gray-400">with coins</span>
        </div>

        {/* Breakdown (Expanded) */}
        {expanded && (
          <div className="space-y-2 mb-4 pb-4 border-b border-rez-gray-200 dark:border-white/10">
            {appliedCoins.breakdown.map((coin, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/50 dark:bg-white/5">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{coin.icon}</span>
                  <div>
                    <p className="text-body-sm font-medium text-rez-navy dark:text-white">{coin.name}</p>
                    <p className="text-caption text-rez-gray-600 dark:text-gray-400">Priority {coin.priority}</p>
                  </div>
                </div>
                <p className="text-body-sm font-bold text-emerald-600 dark:text-emerald-400">-₹{coin.amount}</p>
              </div>
            ))}

            {appliedCoins.breakdown.length === 0 && (
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-center">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mx-auto mb-2" />
                <p className="text-caption text-amber-800 dark:text-amber-300">No coins available for this purchase</p>
              </div>
            )}
          </div>
        )}

        {/* Bill Breakdown */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-body-sm">
            <span className="text-rez-gray-600 dark:text-gray-400">Original Bill</span>
            <span className="text-rez-navy dark:text-white">₹{billAmount}</span>
          </div>
          <div className="flex items-center justify-between text-body-sm">
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">Coins Applied</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">-₹{totalSaving}</span>
          </div>
          <div className="h-px bg-rez-gray-200 dark:bg-white/10 my-2" />
          <div className="flex items-center justify-between">
            <span className="text-body font-semibold text-rez-navy dark:text-white">You Pay</span>
            <span className="text-h4 font-poppins text-rez-navy dark:text-white">₹{finalAmount}</span>
          </div>
        </div>

        {/* Learn More Link */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-rez-gray-200 dark:border-white/10">
            <Link
              to="/coin-system"
              className="flex items-center justify-center gap-2 text-caption text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <Info className="w-4 h-4" />
              <span>Learn how auto-apply priority works</span>
            </Link>
          </div>
        )}

        {/* Manual Override Option */}
        {expanded && (
          <div className="mt-3">
            <button
              onClick={() => setManualMode(!manualMode)}
              className="w-full py-2 px-3 rounded-lg bg-rez-gray-100 dark:bg-white/10 hover:bg-rez-gray-200 dark:hover:bg-white/20 text-caption text-rez-navy dark:text-white font-medium transition-colors"
            >
              {manualMode ? 'Use Auto-Apply' : 'Customize Coins (Advanced)'}
            </button>
          </div>
        )}
      </div>

      {/* Auto-Apply Priority Info (Collapsed) */}
      {!expanded && (
        <div className="mt-2 flex items-center gap-2 text-caption text-rez-gray-600 dark:text-gray-400">
          <Info className="w-4 h-4" />
          <span>Applied in smart order: Promo → Branded → ReZ → Privé</span>
        </div>
      )}

      {/* Available Coins Summary */}
      {expanded && (
        <div className="mt-4 p-4 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10">
          <h4 className="text-body-sm font-semibold text-rez-navy dark:text-white mb-3">Your Available Coins</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-white dark:bg-white/5">
              <div className="flex items-center gap-2 mb-1">
                <span>💰</span>
                <span className="text-caption text-rez-gray-600 dark:text-gray-400">ReZ Coins</span>
              </div>
              <p className="text-body font-bold text-rez-navy dark:text-white">{rezCoins}</p>
            </div>
            <div className="p-3 rounded-lg bg-white dark:bg-white/5">
              <div className="flex items-center gap-2 mb-1">
                <span>🎁</span>
                <span className="text-caption text-rez-gray-600 dark:text-gray-400">Promo</span>
              </div>
              <p className="text-body font-bold text-rez-navy dark:text-white">{promoCoins?.balance || 0}</p>
            </div>
            {merchantId && brandedCoins?.find(bc => bc.brandId === merchantId) && (
              <div className="p-3 rounded-lg bg-white dark:bg-white/5">
                <div className="flex items-center gap-2 mb-1">
                  <span>🏪</span>
                  <span className="text-caption text-rez-gray-600 dark:text-gray-400">Branded</span>
                </div>
                <p className="text-body font-bold text-rez-navy dark:text-white">
                  {brandedCoins.find(bc => bc.brandId === merchantId)?.balance || 0}
                </p>
              </div>
            )}
            {/* Privé Coins - Show different UI based on membership status */}
            {user?.isPriveMember && priveCoins?.balance > 0 ? (
              // UNLOCKED - For Privé Members
              <div className="p-3 rounded-lg bg-gradient-to-br from-[#D4AF37]/10 to-amber-500/10 border border-[#D4AF37]/30">
                <div className="flex items-center gap-2 mb-1">
                  <span>👑</span>
                  <span className="text-caption text-[#D4AF37]">Privé</span>
                </div>
                <p className="text-body font-bold text-rez-navy dark:text-white">{priveCoins.balance}</p>
                <p className="text-[10px] text-[#D4AF37] mt-1">Elite member exclusive</p>
              </div>
            ) : (
              // LOCKED - For Non-Members (Aspirational)
              <Link
                to="/prive/unlock"
                className="p-3 rounded-lg bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl opacity-50">👑</span>
                    <span className="text-caption text-gray-400">Privé</span>
                  </div>
                  <div className="px-2 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30">
                    <span className="text-[10px] text-[#D4AF37] font-medium">🔒 Locked</span>
                  </div>
                </div>
                <p className="text-caption text-gray-500 mb-1">Most powerful coin</p>
                <div className="flex items-center gap-1">
                  <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#D4AF37] to-yellow-500"
                      style={{ width: `${user?.priveScore || 0}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] text-[#D4AF37] font-medium">{user?.priveScore || 0}%</span>
                </div>
                <p className="text-[10px] text-gray-500 mt-1">Tap to see how to unlock →</p>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinAutoApply;
