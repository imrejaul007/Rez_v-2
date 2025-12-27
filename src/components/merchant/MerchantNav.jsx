import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Tag, Users, CreditCard, Star, BarChart3, Wallet, Megaphone, Headphones, Settings, Store, Bell, Image, Gift, UserPlus, TrendingUp, FileText, FolderOpen, ShoppingBag, Package, Camera, Award, DollarSign } from 'lucide-react';

export default function MerchantNav() {
  const location = useLocation();

  const navItems = [
    { path: '/merchant/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/merchant/profile', icon: Store, label: 'Profile' },
    { path: '/merchant/orders', icon: ShoppingBag, label: 'Orders' },
    { path: '/merchant/products', icon: Package, label: 'Products' },
    { path: '/merchant/offers', icon: Tag, label: 'Offers' },
    { path: '/merchant/campaigns', icon: Megaphone, label: 'Campaigns' },
    { path: '/merchant/ugc-campaigns', icon: Camera, label: 'UGC' },
    { path: '/merchant/customers', icon: Users, label: 'Customers' },
    { path: '/merchant/transactions', icon: CreditCard, label: 'Transactions' },
    { path: '/merchant/wallet', icon: Wallet, label: 'Wallet' },
    { path: '/merchant/reviews', icon: Star, label: 'Reviews' },
    { path: '/merchant/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/merchant/financials', icon: CreditCard, label: 'Financials' },
    { path: '/merchant/marketing', icon: Megaphone, label: 'Marketing' },
    { path: '/merchant/content', icon: Image, label: 'Content' },
    { path: '/merchant/loyalty', icon: Gift, label: 'Loyalty' },
    { path: '/merchant/loyalty-offers', icon: Award, label: 'Loyalty Offers' },
    { path: '/merchant/price-engineering', icon: DollarSign, label: 'Pricing' },
    { path: '/merchant/staff', icon: UserPlus, label: 'Staff' },
    { path: '/merchant/benchmarks', icon: TrendingUp, label: 'Benchmarks' },
    { path: '/merchant/compliance', icon: FileText, label: 'Compliance' },
    { path: '/merchant/documents', icon: FolderOpen, label: 'Documents' },
    { path: '/merchant/notifications', icon: Bell, label: 'Notifications' },
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
