import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronDown, Wallet, User, Coins, Flame } from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';

const HomeHeader = () => {
  const { rezCoins } = useWallet();
  const [location, setLocation] = useState('BTM Layout, Bangalore');
  const totalSaved = 1240; // Mock data
  const userTier = 'Gold';
  const streak = 5;

  return (
    <div className="sticky top-0 z-50 glass">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left - Location */}
          <button className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 active:bg-white/10 transition-colors">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <div className="text-left">
              <p className="text-sm font-medium text-white truncate max-w-[140px]">{location}</p>
              <p className="text-[10px] text-gray-400">Within 3 km</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>

          {/* Right - Icons */}
          <div className="flex items-center gap-2">
            {/* Savings Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20">
              <span className="text-xs text-emerald-400">₹{totalSaved.toLocaleString()}</span>
              <span className="text-[10px] text-emerald-300">Saved</span>
            </div>

            {/* Wallet */}
            <Link
              to="/wallet"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20"
            >
              <Coins className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">{rezCoins?.balance || 0}</span>
            </Link>

            {/* Profile */}
            <Link
              to="/profile"
              className="relative p-2 rounded-full bg-white/5"
            >
              <User className="w-5 h-5 text-white" />
              {/* Streak indicator */}
              <div className="absolute -top-1 -right-1 flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-orange-500 text-[10px] text-white font-bold">
                <Flame className="w-2.5 h-2.5" />
                {streak}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
