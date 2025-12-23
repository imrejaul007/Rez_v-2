import { Search, Bell, SlidersHorizontal } from 'lucide-react';
import { useApp, globalModeOptions } from '../../contexts/AppContext';
import { useWallet } from '../../contexts/WalletContext';

const Header = () => {
  const { globalMode, toggleFilterSheet, toggleModeSwitcher } = useApp();
  const { totalCoinsValue } = useWallet();

  const currentMode = globalModeOptions.find(m => m.id === globalMode);

  return (
    <header className="sticky top-0 z-50 glass safe-top">
      <div className="px-4 pt-2 pb-3">
        {/* Top Row */}
        <div className="flex items-center justify-between mb-3">
          {/* Logo & Mode Indicator */}
          <button
            onClick={toggleModeSwitcher}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-bold text-white">ReZ</span>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/10">
              <span className="text-sm">{currentMode?.icon}</span>
              <span className="text-xs text-gray-300">{currentMode?.label}</span>
            </div>
          </button>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Coins */}
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-500/20">
              <span className="text-amber-400">🪙</span>
              <span className="text-sm font-medium text-amber-400">{totalCoinsValue?.toLocaleString() || 0}</span>
            </div>

            {/* Notifications */}
            <button className="relative p-2 rounded-full bg-white/10">
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex gap-2">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search stores, products, or tell us what you need..."
              className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm"
            />
          </div>
          <button
            onClick={toggleFilterSheet}
            className="p-3 rounded-2xl bg-white/10 active:bg-white/20 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
