import { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, ChevronDown, Users, Store, CreditCard, Tag, BarChart3,
  Send, Folder, FileText, Gamepad2, UserPlus, Calendar, Heart, Settings,
  Headphones, Coins, Wallet, Megaphone, Shield, Award, Plug, Activity, Bell,
  UserCog, Code, Image, Mail, Ticket, Zap, Building2, Trophy, MessageSquare,
  Server, TrendingDown, GitCompare, Share2, ImagePlus, Brain, CheckCircle,
  Target, Package, GraduationCap, MapPin, Clock, Gift, TrendingUp, Flame,
  Receipt, UserCheck, Truck, Sparkles, QrCode, CalendarCheck, Lock, Grid3x3,
  Layers, Handshake, Briefcase, Menu, X, Globe, DollarSign, Crown
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { filterNavByRole, ADMIN_NAV_PERMISSIONS } from '../../utils/rolePermissions';

export default function AdminNav() {
  const location = useLocation();
  const [openCategories, setOpenCategories] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { userRole } = useAuth();

  const navCategories = [
    {
      id: 'overview',
      label: 'Overview',
      icon: LayoutDashboard,
      items: [
        { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/admin/global-dashboard', icon: Globe, label: 'Global Dashboard (ReZ HQ)' },
        { path: '/admin/regional-dashboard', icon: MapPin, label: 'Regional Dashboard' },
        { path: '/admin/marketing-dashboard', icon: Megaphone, label: 'Marketing Dashboard' },
        { path: '/admin/finance-dashboard', icon: DollarSign, label: 'Finance Dashboard' },
        { path: '/admin/operations-dashboard', icon: Settings, label: 'Operations Dashboard' },
        { path: '/admin/support-dashboard', icon: Headphones, label: 'Customer Support Dashboard' },
        { path: '/admin/content-dashboard', icon: FileText, label: 'Content Admin Dashboard' },
        { path: '/admin/analytics-dashboard', icon: BarChart3, label: 'Analytics Admin Dashboard' },
        { path: '/admin/role-management', icon: Shield, label: 'Admin Role Management' }
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
      label: 'Transactions',
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
        { path: '/admin/coin-issuance', icon: Zap, label: 'Coin Issuance Control' },
        { path: '/admin/coin-rules', icon: Settings, label: 'Coin Rules Engine' },
        { path: '/admin/coin-events', icon: Coins, label: 'Coin Events' },
        { path: '/admin/promo-coin-manager', icon: Ticket, label: 'Promo Coin Manager' },
        { path: '/admin/redemption-rules', icon: Shield, label: 'Redemption Rules' },
        { path: '/admin/checkout-priority', icon: CreditCard, label: 'Checkout Priority' },
        { path: '/admin/earning-rule-matrix', icon: Grid3x3, label: 'Earning Rules' }
      ]
    },
    {
      id: 'merchant-config',
      label: 'Merchant Config',
      icon: Store,
      items: [
        { path: '/admin/merchant-tier-config', icon: Layers, label: 'Merchant Tiers' },
        { path: '/admin/co-partner-brands', icon: Handshake, label: 'Co-Partner Brands' },
        { path: '/admin/partnerships', icon: Briefcase, label: 'Partnerships' }
      ]
    },
    {
      id: 'programs',
      label: 'Programs',
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
      label: 'Campaigns',
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
      label: 'Content',
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
      label: 'AI Engine',
      icon: Brain,
      items: [
        { path: '/admin/recommendations', icon: Brain, label: 'Recommendation Engine' },
        { path: '/admin/ai-recommendations', icon: Brain, label: 'AI Engine Config' }
      ]
    },
    {
      id: 'features',
      label: 'Features',
      icon: Target,
      items: [
        { path: '/admin/upload-bill-settings', icon: Receipt, label: 'Bill Upload Settings' },
        { path: '/admin/scan-pay-settings', icon: QrCode, label: 'Scan & Pay Settings' }
      ]
    },
    {
      id: 'security',
      label: 'Security',
      icon: Shield,
      items: [
        { path: '/admin/fraud', icon: Shield, label: 'Fraud Detection' },
        { path: '/admin/kyc-compliance', icon: UserCheck, label: 'KYC & Compliance' },
        { path: '/admin/logs', icon: Activity, label: 'Activity Logs' }
      ]
    },
    {
      id: 'system-management',
      label: 'System Management',
      icon: Settings,
      items: [
        { path: '/admin/mode-control', icon: Layers, label: 'Mode & Category Control' },
        { path: '/admin/college-corporate', icon: GraduationCap, label: 'College & Corporate' },
        { path: '/admin/bank-reconciliation', icon: DollarSign, label: 'Bank Reconciliation' },
        { path: '/operations/city-dashboard', icon: MapPin, label: 'City Operations' }
      ]
    },
    {
      id: 'integrations',
      label: 'Integrations',
      icon: Plug,
      items: [
        { path: '/admin/integrations', icon: Plug, label: 'Integrations' },
        { path: '/admin/background-jobs', icon: Server, label: 'Background Jobs' }
      ]
    },
    {
      id: 'support',
      label: 'Support',
      icon: Settings,
      items: [
        { path: '/admin/notifications', icon: Bell, label: 'Notifications' },
        { path: '/admin/support', icon: Headphones, label: 'Support' },
        { path: '/admin/settings', icon: Settings, label: 'Settings' }
      ]
    },
    {
      id: 'advanced',
      label: 'Advanced Features',
      icon: Sparkles,
      items: [
        { path: '/admin/multi-channel-marketing', icon: Megaphone, label: 'Multi-Channel Marketing' },
        { path: '/admin/role-based-access', icon: Shield, label: 'Role-Based Access Control' },
        { path: '/admin/regional-control', icon: MapPin, label: 'Regional Control' },
        { path: '/admin/creator-content', icon: ImagePlus, label: 'Creator Content Moderation' },
        { path: '/admin/social-impact-verification', icon: CheckCircle, label: 'Social Impact Verification' },
        { path: '/admin/prive-management', icon: Crown, label: 'ReZ Privé Management' },
        { path: '/admin/game-configuration', icon: Gamepad2, label: 'Game Configuration' },
        { path: '/admin/wallet-analytics', icon: BarChart3, label: 'Wallet Analytics' },
        { path: '/admin/ai-insights', icon: Brain, label: 'AI Insights' },
        { path: '/admin/fraud-detection', icon: Shield, label: 'Fraud Detection (Advanced)' },
        { path: '/admin/platform-health', icon: Activity, label: 'Platform Health' },
        { path: '/admin/content-moderation', icon: Shield, label: 'Content Moderation' },
        { path: '/admin/event-inventory', icon: Ticket, label: 'Event Inventory' },
        { path: '/admin/ecosystem-analytics', icon: BarChart3, label: 'Ecosystem Analytics' },
        { path: '/admin/merchant-super-os', icon: Store, label: 'Merchant Super OS' },
        { path: '/admin/settlement-commission', icon: DollarSign, label: 'Settlement & Commission' }
      ]
    }
  ];

  // Filter navigation based on user role
  const filteredNavCategories = useMemo(() => {
    // If no user role, show all nav items (for development)
    if (!userRole) {
      return navCategories;
    }
    return filterNavByRole(navCategories, userRole, ADMIN_NAV_PERMISSIONS);
  }, [userRole]);

  const toggleCategory = (categoryId) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const isPathActive = (path) => {
    return location.pathname === path || (path === '/admin/dashboard' && location.pathname === '/admin');
  };

  const isCategoryActive = (category) => {
    return category.items.some(item => isPathActive(item.path));
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white p-2 rounded-lg shadow-lg border border-gray-200"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-40 transition-transform duration-300 overflow-y-auto ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ${sidebarOpen ? 'w-64' : 'w-0'} lg:translate-x-0 lg:w-64`}
      >
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Admin Portal</h2>
        </div>

        <nav className="p-2">
          {filteredNavCategories.map((category) => {
            const CategoryIcon = category.icon;
            const isActive = isCategoryActive(category);
            const isOpen = openCategories[category.id];

            return (
              <div key={category.id} className="mb-1">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CategoryIcon className="w-5 h-5" />
                    <span className="font-medium text-sm">{category.label}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {category.items.map((item) => {
                      const ItemIcon = item.icon;
                      const isItemActive = isPathActive(item.path);

                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                            isItemActive
                              ? 'bg-indigo-100 text-indigo-700 font-semibold'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          <ItemIcon className="w-4 h-4" />
                          <span>{item.label}</span>
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

      {/* Spacer for content */}
      <div className={`${sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'} transition-all duration-300`} />
    </>
  );
}
