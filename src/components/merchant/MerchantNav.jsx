import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Store, ChevronDown, ShoppingBag, Package, RotateCcw, Truck,
  Tag, Zap, Crown, Megaphone, Camera, Users, CreditCard, Wallet, Star,
  BarChart3, LineChart, TrendingUp, DollarSign, Image, Gift, Award,
  UserPlus, FileText, FolderOpen, Bell, Headphones, Settings, MapPin,
  Clock, Cake, Coins, ShoppingCart, Layers, Lock, Box
} from 'lucide-react';

export default function MerchantNav() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const navCategories = [
    {
      id: 'overview',
      label: 'Overview',
      icon: LayoutDashboard,
      items: [
        { path: '/merchant/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/merchant/profile', icon: Store, label: 'Profile' }
      ]
    },
    {
      id: 'operations',
      label: 'Operations',
      icon: ShoppingBag,
      items: [
        { path: '/merchant/orders', icon: ShoppingBag, label: 'Orders' },
        { path: '/merchant/products', icon: Package, label: 'Products' },
        { path: '/merchant/inventory', icon: Box, label: 'Inventory' },
        { path: '/merchant/returns', icon: RotateCcw, label: 'Returns & Refunds' },
        { path: '/merchant/shipping', icon: Truck, label: 'Shipping & Logistics' }
      ]
    },
    {
      id: 'promotions',
      label: 'Promotions & Marketing',
      icon: Tag,
      items: [
        { path: '/merchant/offers', icon: Tag, label: 'Offers' },
        { path: '/merchant/flash-deals', icon: Zap, label: 'Flash Deals' },
        { path: '/merchant/exclusive-deals', icon: Crown, label: 'Exclusive Deals' },
        { path: '/merchant/campaigns', icon: Megaphone, label: 'Campaigns' },
        { path: '/merchant/ugc-campaigns', icon: Camera, label: 'UGC Campaigns' },
        { path: '/merchant/marketing', icon: Megaphone, label: 'Marketing Tools' },
        { path: '/merchant/nearby-offers', icon: MapPin, label: 'Nearby Offers' },
        { path: '/merchant/todays-offers', icon: Clock, label: "Today's Offers" },
        { path: '/merchant/bogo-offers', icon: Gift, label: 'BOGO Offers' },
        { path: '/merchant/birthday-offers', icon: Cake, label: 'Birthday Offers' },
        { path: '/merchant/clearance-sales', icon: ShoppingCart, label: 'Clearance Sales' },
        { path: '/merchant/lock-price-deals', icon: Lock, label: 'Lock Price Deals' }
      ]
    },
    {
      id: 'loyalty',
      label: 'Loyalty & Rewards',
      icon: Gift,
      items: [
        { path: '/merchant/loyalty', icon: Gift, label: 'Loyalty Program' },
        { path: '/merchant/loyalty-offers', icon: Award, label: 'Loyalty Offers' },
        { path: '/merchant/loyalty-tiers', icon: Layers, label: 'Loyalty Tiers' },
        { path: '/merchant/branded-coin-config', icon: Coins, label: 'Branded Coin Config' },
        { path: '/merchant/cashback-programs', icon: Coins, label: 'Cashback Programs' },
        { path: '/merchant/exclusive-programs', icon: Crown, label: 'Exclusive Programs' }
      ]
    },
    {
      id: 'customers',
      label: 'Customers',
      icon: Users,
      items: [
        { path: '/merchant/customers', icon: Users, label: 'Customer List' },
        { path: '/merchant/reviews', icon: Star, label: 'Reviews & Ratings' }
      ]
    },
    {
      id: 'financials',
      label: 'Finance & Analytics',
      icon: BarChart3,
      items: [
        { path: '/merchant/analytics', icon: BarChart3, label: 'Analytics' },
        { path: '/merchant/deal-analytics', icon: LineChart, label: 'Deal Analytics' },
        { path: '/merchant/performance', icon: TrendingUp, label: 'Performance Scorecard' },
        { path: '/merchant/transactions', icon: CreditCard, label: 'Transactions' },
        { path: '/merchant/wallet', icon: Wallet, label: 'Wallet' },
        { path: '/merchant/payments', icon: DollarSign, label: 'Payments & Settlements' },
        { path: '/merchant/financials', icon: CreditCard, label: 'Financial Reports' },
        { path: '/merchant/benchmarks', icon: TrendingUp, label: 'Benchmarks' }
      ]
    },
    {
      id: 'pricing',
      label: 'Pricing & Content',
      icon: DollarSign,
      items: [
        { path: '/merchant/price-engineering', icon: DollarSign, label: 'Price Engineering' },
        { path: '/merchant/content', icon: Image, label: 'Content Management' },
        { path: '/merchant/free-delivery', icon: Truck, label: 'Free Delivery Rules' }
      ]
    },
    {
      id: 'settings',
      label: 'Settings & Support',
      icon: Settings,
      items: [
        { path: '/merchant/staff', icon: UserPlus, label: 'Staff Management' },
        { path: '/merchant/compliance', icon: FileText, label: 'Compliance' },
        { path: '/merchant/documents', icon: FolderOpen, label: 'Documents' },
        { path: '/merchant/notifications', icon: Bell, label: 'Notifications' },
        { path: '/merchant/support', icon: Headphones, label: 'Support' },
        { path: '/merchant/settings', icon: Settings, label: 'Settings' }
      ]
    }
  ];

  const toggleDropdown = (categoryId) => {
    setOpenDropdown(openDropdown === categoryId ? null : categoryId);
  };

  const isPathActive = (path) => {
    return location.pathname === path || (path === '/merchant/dashboard' && location.pathname === '/merchant');
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
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 rounded-b-lg shadow-lg z-50">
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
