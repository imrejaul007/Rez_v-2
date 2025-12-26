import { NavLink } from 'react-router-dom';
import { Home, Compass, ScanLine, Tag, Wallet } from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/explore', icon: Compass, label: 'Explore' },
  { path: '/scan', icon: ScanLine, label: 'Pay', highlight: true },
  { path: '/deal-store', icon: Tag, label: 'Deals' },
  { path: '/wallet', icon: Wallet, label: 'Wallet' },
];

const BottomNavNearYou = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass safe-bottom border-t border-rez-gray-200 dark:border-white/10">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map(({ path, icon: Icon, label, highlight }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all ${
                highlight
                  ? isActive
                    ? 'text-white bg-emerald-500 scale-110'
                    : 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/20 scale-105'
                  : isActive
                  ? 'text-rez-green-500 dark:text-emerald-400'
                  : 'text-rez-gray-600 dark:text-gray-500 active:text-rez-gray-700 dark:active:text-gray-300'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className={`p-2 rounded-xl ${
                  highlight
                    ? ''
                    : isActive
                    ? 'bg-rez-green-500/20 dark:bg-emerald-500/20'
                    : ''
                }`}>
                  <Icon className="w-5 h-5" strokeWidth={isActive || highlight ? 2.5 : 2} />
                </div>
                <span className={`text-xs font-medium ${highlight ? 'font-bold' : ''}`}>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavNearYou;
