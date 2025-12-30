import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, ShoppingBag, Calendar, User } from 'lucide-react';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/lifestyle' },
    { id: 'explore', icon: Search, label: 'Explore', path: '/fashion' },
    { id: 'wardrobe', icon: ShoppingBag, label: 'Wardrobe', path: '/lifestyle/fashion/virtual-wardrobe' },
    { id: 'calendar', icon: Calendar, label: 'Calendar', path: '/lifestyle/fashion/outfit-calendar' },
    { id: 'profile', icon: User, label: 'Profile', path: '/lifestyle/profile' }
  ];

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-area-pb">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                active ? 'text-purple-600' : 'text-gray-600'
              }`}
            >
              <Icon className={`w-6 h-6 ${active ? 'fill-purple-100' : ''}`} />
              <span className={`text-xs font-medium ${active ? 'font-semibold' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
