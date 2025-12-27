import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Store, Tag, BarChart3, Send, Folder, FileText, Gamepad2, UserPlus, Calendar, Heart, Settings, Headphones, CreditCard, Coins, Wallet, Megaphone, Shield, Award, Plug, Activity, Bell, UserCog, Code, Image, Mail, Ticket, Zap, Building2 } from 'lucide-react';

export default function AdminNav() {
  const location = useLocation();

  const navItems = [
    { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin/users', icon: Users, label: 'Users' },
    { path: '/admin/merchants', icon: Store, label: 'Merchants' },
    { path: '/admin/transactions', icon: CreditCard, label: 'Transactions' },
    { path: '/admin/wallet', icon: Wallet, label: 'Wallet' },
    { path: '/admin/cashback', icon: Coins, label: 'Cashback' },
    { path: '/admin/offers', icon: Tag, label: 'Offers' },
    { path: '/admin/vouchers', icon: Ticket, label: 'Vouchers' },
    { path: '/admin/flash-sales', icon: Zap, label: 'Flash Sales' },
    { path: '/admin/bank-offers', icon: Building2, label: 'Bank Offers' },
    { path: '/admin/categories', icon: Folder, label: 'Categories' },
    { path: '/admin/content', icon: FileText, label: 'Content' },
    { path: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/admin/campaigns', icon: Send, label: 'Campaigns' },
    { path: '/admin/gamification', icon: Gamepad2, label: 'Gamification' },
    { path: '/admin/referrals', icon: UserPlus, label: 'Referrals' },
    { path: '/admin/events', icon: Calendar, label: 'Events' },
    { path: '/admin/social-impact', icon: Heart, label: 'Social Impact' },
    { path: '/admin/payments', icon: CreditCard, label: 'Payments' },
    { path: '/admin/marketing', icon: Megaphone, label: 'Marketing' },
    { path: '/admin/hero-banners', icon: Image, label: 'Hero Banners' },
    { path: '/admin/email-marketing', icon: Mail, label: 'Email Marketing' },
    { path: '/admin/fraud', icon: Shield, label: 'Fraud' },
    { path: '/admin/special-programs', icon: Award, label: 'Programs' },
    { path: '/admin/integrations', icon: Plug, label: 'Integrations' },
    { path: '/admin/api', icon: Code, label: 'API' },
    { path: '/admin/user-management', icon: UserCog, label: 'Admins' },
    { path: '/admin/notifications', icon: Bell, label: 'Notifications' },
    { path: '/admin/logs', icon: Activity, label: 'Logs' },
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
