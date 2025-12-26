import { Search, Bell, SlidersHorizontal, Sparkles } from 'lucide-react';
import { useApp, globalModeOptions } from '../../contexts/AppContext';
import { useWallet } from '../../contexts/WalletContext';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  const { globalMode, toggleFilterSheet, toggleModeSwitcher } = useApp();
  const { totalCoinsValue } = useWallet();

  const currentMode = globalModeOptions.find(m => m.id === globalMode);

  return (
    <header className="sticky top-0 z-50 safe-top">
      {/* Glassmorphic Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/80 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-900/80 backdrop-blur-2xl"></div>

      {/* Subtle Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>

      <div className="relative px-4 pt-3 pb-4">
        {/* Top Row */}
        <div className="flex items-center justify-between mb-4">
          {/* Logo & Mode Indicator */}
          <button
            onClick={toggleModeSwitcher}
            className="flex items-center gap-2.5 group"
          >
            {/* Logo with Gradient */}
            <div className="relative">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                ReZ
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Mode Badge with Glass Effect */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20"></div>
              <div className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg shadow-emerald-500/10">
                <span className="text-base">{currentMode?.icon}</span>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{currentMode?.label}</span>
              </div>
            </div>
          </button>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Coins with Premium Glass Effect */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 dark:from-amber-500/20 dark:to-yellow-500/20 backdrop-blur-xl border border-amber-500/20 dark:border-amber-500/30 shadow-lg">
                <span className="text-lg">🪙</span>
                <span className="text-sm font-bold bg-gradient-to-r from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400 bg-clip-text text-transparent">
                  {totalCoinsValue?.toLocaleString() || 0}
                </span>
              </div>
            </div>

            {/* Theme Toggle with Glass */}
            <div className="p-0.5 rounded-full bg-gradient-to-r from-white/50 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur-xl shadow-lg">
              <ThemeToggle />
            </div>

            {/* Notifications with Glass Effect */}
            <button className="relative p-2.5 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/70 dark:hover:bg-white/20 transition-all shadow-lg hover:shadow-xl group">
              <Bell className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:scale-110 transition-transform" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Search Bar with Advanced Glassmorphism */}
        <div className="flex gap-2">
          <div className="flex-1 relative group">
            {/* Glow Effect on Focus */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity"></div>

            {/* Search Input */}
            <div className="relative flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all">
              <Search className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search stores, products, or tell us what you need..."
                className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none text-sm font-medium"
              />
              <Sparkles className="w-4 h-4 text-emerald-500 dark:text-emerald-400 opacity-50" />
            </div>
          </div>

          {/* Filter Button with Glass */}
          <button
            onClick={toggleFilterSheet}
            className="relative p-3.5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 backdrop-blur-2xl border border-emerald-500/20 dark:border-emerald-500/30 hover:border-emerald-500/40 dark:hover:border-emerald-500/50 transition-all shadow-lg hover:shadow-xl group"
          >
            <SlidersHorizontal className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:rotate-90 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 rounded-2xl transition-all"></div>
          </button>
        </div>
      </div>

      {/* Bottom Border Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/50 dark:via-white/10 to-transparent"></div>
    </header>
  );
};

export default Header;
