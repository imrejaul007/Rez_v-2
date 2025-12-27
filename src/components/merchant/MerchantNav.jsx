import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Tag, Users, CreditCard, Star, BarChart3, Wallet, Megaphone, Headphones, Settings } from 'lucide-react';

export default function MerchantNav() {
  const location = useLocation();

  const navItems = [
    { path: '/merchant/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/merchant/offers', icon: Tag, label: 'Offers' },
    { path: '/merchant/customers', icon: Users, label: 'Customers' },
    { path: '/merchant/transactions', icon: CreditCard, label: 'Transactions' },
    { path: '/merchant/reviews', icon: Star, label: 'Reviews' },
    { path: '/merchant/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/merchant/financials', icon: Wallet, label: 'Financials' },
    { path: '/merchant/marketing', icon: Megaphone, label: 'Marketing' },
    { path: '/merchant/support', icon: Headphones, label: 'Support' },
    { path: '/merchant/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex gap-1 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path ||
                           (item.path === '/merchant/dashboard' && location.pathname === '/merchant');

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
