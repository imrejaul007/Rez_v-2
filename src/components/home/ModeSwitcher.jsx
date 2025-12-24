import { MapPin, ShoppingBag, Wallet, Crown } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { useNavigate, useLocation } from 'react-router-dom';

const ModeSwitcher = () => {
  const { globalMode, setGlobalMode } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  const modes = [
    { id: 'nearYou', label: 'ReZ Near You', icon: MapPin, description: 'Local stores, offline + delivery', path: '/' },
    { id: 'mall', label: 'ReZ Mall', icon: ShoppingBag, description: 'Curated brands & collections', path: '/mall' },
    { id: 'cashStore', label: 'Cash Store', icon: Wallet, description: 'Affiliate shopping + coupons', path: '/cash-store' },
    { id: 'prive', label: 'Privé', icon: Crown, description: 'Invite-only exclusive deals', path: '/prive', locked: false },
  ];

  const handleModeSwitch = (mode) => {
    if (mode.locked) return;

    // Update global mode state
    setGlobalMode(mode.id);

    // Navigate to the mode's page
    navigate(mode.path);
  };

  const activeMode = modes.find(m => m.id === globalMode) || modes[0];

  return (
    <div className="px-4 py-3">
      {/* Mode Pills */}
      <div className="flex gap-1 p-1 rounded-2xl bg-rez-gray-100 dark:bg-[#1C1C1E]">
        {modes.map((mode) => {
          const Icon = mode.icon;
          const isActive = globalMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => handleModeSwitch(mode)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-medium transition-all ${
                isActive
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                  : mode.locked
                  ? 'text-rez-gray-700 dark:text-gray-600'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${mode.id === 'prive' && !isActive ? 'text-amber-500' : ''}`} />
              <span className="hidden sm:inline">{mode.label}</span>
              <span className="sm:hidden">{mode.label.split(' ').pop()}</span>
              {mode.locked && <span className="text-[10px]">🔒</span>}
            </button>
          );
        })}
      </div>

      {/* Mode Description */}
      <p className="text-center text-xs text-rez-gray-600 dark:text-gray-500 mt-2">
        {activeMode.description}
      </p>
    </div>
  );
};

export default ModeSwitcher;
