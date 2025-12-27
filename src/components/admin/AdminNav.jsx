import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, ChevronDown, Users, Store, CreditCard, Tag, BarChart3,
  Send, Folder, FileText, Gamepad2, UserPlus, Calendar, Heart, Settings,
  Headphones, Coins, Wallet, Megaphone, Shield, Award, Plug, Activity, Bell,
  UserCog, Code, Image, Mail, Ticket, Zap, Building2, Trophy, MessageSquare,
  Server, TrendingDown, GitCompare, Share2, ImagePlus, Brain, CheckCircle,
  Target, Package, GraduationCap, MapPin, Clock, Gift, TrendingUp, Flame,
  Receipt, UserCheck, Truck, Sparkles, QrCode, CalendarCheck, Lock, Grid3x3,
  Layers, Handshake, Briefcase
} from 'lucide-react';

export default function AdminNav() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const navCategories = [
    {
      id: 'overview',
      label: 'Overview',
      icon: LayoutDashboard,
      items: [
        { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' }
      ]
    },
    {
      id: 'user-management',
      label: 'User Management',
      icon: Users,
      items: [
        { path: '/admin/users', icon: Users, label: 'Users' },
        { path: '/admin/merchants', icon: Store, label: 'Merchants' },
        { path: '/admin/user-management', icon: UserCog, label: 'Admin Users' },
        { path: '/admin/profile-verification', icon: UserCheck, label: 'Profile Verification' },
        { path: '/admin/friend-network-settings', icon: Users, label: 'Social Network' }
      ]
    },
    {
      id: 'transactions',
      label: 'Transactions & Payments',
      icon: CreditCard,
      items: [
        { path: '/admin/transactions', icon: CreditCard, label: 'Transactions' },
        { path: '/admin/wallet', icon: Wallet, label: 'Wallet Management' },
        { path: '/admin/cashback', icon: Coins, label: 'Cashback' },
        { path: '/admin/payments', icon: CreditCard, label: 'Payment Gateway' }
      ]
    },
    {
      id: 'offers-deals',
      label: 'Offers & Deals',
      icon: Tag,
      items: [
        { path: '/admin/offers', icon: Tag, label: 'Offers' },
        { path: '/admin/vouchers', icon: Ticket, label: 'Vouchers' },
        { path: '/admin/flash-sales', icon: Zap, label: 'Flash Sales' },
        { path: '/admin/lightning-deals', icon: Zap, label: 'Lightning Deals' },
        { path: '/admin/sponsored-deals', icon: Award, label: 'Sponsored Deals' },
        { path: '/admin/discount-buckets', icon: Package, label: 'Discount Buckets' },
        { path: '/admin/bank-offers', icon: Building2, label: 'Bank Offers' },
        { path: '/admin/nearby-offers', icon: MapPin, label: 'Nearby Offers' },
        { path: '/admin/todays-offers', icon: Clock, label: "Today's Offers" },
        { path: '/admin/bogo-management', icon: Gift, label: 'BOGO Management' },
        { path: '/admin/new-deals-settings', icon: Sparkles, label: 'New Deals' },
        { path: '/admin/lock-price-deals', icon: Lock, label: 'Lock Price Deals' },
        { path: '/admin/free-delivery', icon: Truck, label: 'Free Delivery' }
      ]
    },
    {
      id: 'coin-system',
      label: '4-Coin System',
      icon: Coins,
      items: [
        { path: '/admin/coin-system-overview', icon: Coins, label: '4-Coin Overview' },
        { path: '/admin/coin-events', icon: Coins, label: 'Coin Events' },
        { path: '/admin/promo-coin-manager', icon: Ticket, label: 'Promo Coin Manager' },
        { path: '/admin/redemption-rules', icon: Shield, label: 'Redemption Rules' },
        { path: '/admin/checkout-priority', icon: CreditCard, label: 'Checkout Priority' },
        { path: '/admin/earning-rule-matrix', icon: Grid3x3, label: 'Earning Rules' }
      ]
    },
    {
      id: 'merchant-config',
      label: 'Merchant Configuration',
      icon: Store,
      items: [
        { path: '/admin/merchant-tier-config', icon: Layers, label: 'Merchant Tiers' },
        { path: '/admin/co-partner-brands', icon: Handshake, label: 'Co-Partner Brands' },
        { path: '/admin/partnerships', icon: Briefcase, label: 'Partnerships' }
      ]
    },
    {
      id: 'programs',
      label: 'Programs & Gamification',
      icon: Gamepad2,
      items: [
        { path: '/admin/exclusive-programs', icon: GraduationCap, label: 'Exclusive Programs' },
        { path: '/admin/special-programs', icon: Award, label: 'Special Programs' },
        { path: '/admin/gamification', icon: Gamepad2, label: 'Gamification' },
        { path: '/admin/referrals', icon: UserPlus, label: 'Referrals' },
        { path: '/admin/tournaments', icon: Trophy, label: 'Tournaments' },
        { path: '/admin/events', icon: Calendar, label: 'Events' },
        { path: '/admin/daily-checkin', icon: CalendarCheck, label: 'Daily Check-in' },
        { path: '/admin/social-impact', icon: Heart, label: 'Social Impact' }
      ]
    },
    {
      id: 'campaigns',
      label: 'Marketing & Campaigns',
      icon: Megaphone,
      items: [
        { path: '/admin/campaigns', icon: Send, label: 'Campaigns' },
        { path: '/admin/campaign-approval', icon: CheckCircle, label: 'Campaign Approvals' },
        { path: '/admin/marketing', icon: Megaphone, label: 'Marketing Tools' },
        { path: '/admin/hero-banners', icon: Image, label: 'Hero Banners' },
        { path: '/admin/email-marketing', icon: Mail, label: 'Email Marketing' },
        { path: '/admin/sms-campaigns', icon: MessageSquare, label: 'SMS Campaigns' },
        { path: '/admin/social-integration', icon: Share2, label: 'Social Media' }
      ]
    },
    {
      id: 'content',
      label: 'Content & Analytics',
      icon: BarChart3,
      items: [
        { path: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
        { path: '/admin/categories', icon: Folder, label: 'Categories' },
        { path: '/admin/content', icon: FileText, label: 'Content Management' },
        { path: '/admin/ugc-management', icon: ImagePlus, label: 'UGC Management' },
        { path: '/admin/trending-algorithm', icon: TrendingUp, label: 'Trending Algorithm' },
        { path: '/admin/hotspot-management', icon: Flame, label: 'Hotspot Management' },
        { path: '/admin/price-tracking', icon: TrendingDown, label: 'Price Tracking' },
        { path: '/admin/product-comparison', icon: GitCompare, label: 'Product Comparison' }
      ]
    },
    {
      id: 'ai-recommendations',
      label: 'AI & Recommendations',
      icon: Brain,
      items: [
        { path: '/admin/recommendations', icon: Brain, label: 'Recommendation Engine' },
        { path: '/admin/ai-recommendations', icon: Brain, label: 'AI Engine Config' }
      ]
    },
    {
      id: 'features',
      label: 'Feature Management',
      icon: Target,
      items: [
        { path: '/admin/upload-bill-settings', icon: Receipt, label: 'Bill Upload Settings' },
        { path: '/admin/scan-pay-settings', icon: QrCode, label: 'Scan & Pay Settings' }
      ]
    },
    {
      id: 'security',
      label: 'Security & Compliance',
      icon: Shield,
      items: [
        { path: '/admin/fraud', icon: Shield, label: 'Fraud Detection' },
        { path: '/admin/logs', icon: Activity, label: 'Activity Logs' }
      ]
    },
    {
      id: 'integrations',
      label: 'Integrations & API',
      icon: Plug,
      items: [
        { path: '/admin/integrations', icon: Plug, label: 'Integrations' },
        { path: '/admin/api', icon: Code, label: 'API Management' },
        { path: '/admin/background-jobs', icon: Server, label: 'Background Jobs' }
      ]
    },
    {
      id: 'support',
      label: 'Support & Settings',
      icon: Settings,
      items: [
        { path: '/admin/notifications', icon: Bell, label: 'Notifications' },
        { path: '/admin/support', icon: Headphones, label: 'Support' },
        { path: '/admin/settings', icon: Settings, label: 'Settings' }
      ]
    }
  ];

  const toggleDropdown = (categoryId) => {
    setOpenDropdown(openDropdown === categoryId ? null : categoryId);
  };

  const isPathActive = (path) => {
    return location.pathname === path || (path === '/admin/dashboard' && location.pathname === '/admin');
  };

  const isCategoryActive = (category) => {
    return category.items.some(item => isPathActive(item.path));
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex gap-1 overflow-x-auto">
          {navCategories.map((category) => {
            const CategoryIcon = category.icon;
            const isActive = isCategoryActive(category);

            return (
              <div key={category.id} className="relative">
                <button
                  onClick={() => toggleDropdown(category.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'border-indigo-600 text-indigo-600 font-medium bg-indigo-50'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <CategoryIcon className="w-4 h-4" />
                  {category.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === category.id ? 'rotate-180' : ''}`} />
                </button>

                {openDropdown === category.id && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-b-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                    {category.items.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setOpenDropdown(null)}
                          className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                            isPathActive(item.path)
                              ? 'bg-indigo-50 text-indigo-600 font-medium border-l-4 border-indigo-600'
                              : 'text-gray-700 border-l-4 border-transparent'
                          }`}
                        >
                          <ItemIcon className="w-4 h-4" />
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Click outside to close dropdown */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </div>
  );
}
