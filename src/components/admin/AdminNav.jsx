import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Store, Tag, BarChart3, Send, Folder, FileText, Gamepad2, UserPlus, Calendar, Heart, Settings, Headphones } from 'lucide-react';

export default function AdminNav() {
  const location = useLocation();

  const navItems = [
    { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin/users', icon: Users, label: 'Users' },
    { path: '/admin/merchants', icon: Store, label: 'Merchants' },
    { path: '/admin/offers', icon: Tag, label: 'Offers' },
    { path: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/admin/campaigns', icon: Send, label: 'Campaigns' },
    { path: '/admin/categories', icon: Folder, label: 'Categories' },
    { path: '/admin/content', icon: FileText, label: 'Content' },
    { path: '/admin/gamification', icon: Gamepad2, label: 'Gamification' },
    { path: '/admin/referrals', icon: UserPlus, label: 'Referrals' },
    { path: '/admin/events', icon: Calendar, label: 'Events' },
    { path: '/admin/social-impact', icon: Heart, label: 'Social Impact' },
    { path: '/admin/settings', icon: Settings, label: 'Settings' },
    { path: '/admin/support', icon: Headphones, label: 'Support' }
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex gap-1 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path ||
                           (item.path === '/admin/dashboard' && location.pathname === '/admin');

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'border-indigo-600 text-indigo-600 font-medium'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
