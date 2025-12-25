import { Link } from 'react-router-dom';
import { Search, Camera, Receipt, Gift, Flame, Gamepad2, Trophy, TrendingUp } from 'lucide-react';

const HomeQuickActions = () => {
  const actions = [
    { id: 'stores', label: 'All Stores', icon: Search, link: '/stores', color: 'bg-blue-500/20', iconColor: 'text-blue-400' },
    { id: 'scan', label: 'Scan & Pay', icon: Camera, link: '/scan', color: 'bg-emerald-500/20', iconColor: 'text-emerald-400' },
    { id: 'bill', label: 'Upload Bill', icon: Receipt, link: '/upload-bill', color: 'bg-purple-500/20', iconColor: 'text-purple-400' },
    { id: 'contests', label: 'Contests', icon: Trophy, link: '/contests', color: 'bg-amber-500/20', iconColor: 'text-amber-400', badge: 'NEW' },
    { id: 'deals', label: "Today's Deals", icon: Flame, link: '/deals', color: 'bg-red-500/20', iconColor: 'text-red-400', badge: 'HOT' },
    { id: 'savings', label: 'Savings', icon: TrendingUp, link: '/savings-tracker', color: 'bg-green-500/20', iconColor: 'text-green-400' },
    { id: 'play', label: 'Play & Earn', icon: Gamepad2, link: '/games', color: 'bg-pink-500/20', iconColor: 'text-pink-400' },
  ];

  return (
    <div className="px-4 py-3">
      <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.id}
              to={action.link}
              className="flex flex-col items-center gap-2 min-w-[72px] shrink-0"
            >
              <div className={`relative w-14 h-14 rounded-2xl ${action.color} flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${action.iconColor}`} />
                {action.badge && (
                  <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-red-500 text-[10px] text-rez-navy dark:text-white font-bold">
                    {action.badge}
                  </span>
                )}
              </div>
              <span className="text-xs text-rez-gray-600 dark:text-gray-400 text-center">{action.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomeQuickActions;
