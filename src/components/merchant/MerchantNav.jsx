import { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Store, ChevronRight, ShoppingBag, Package, RotateCcw, Truck,
  Tag, Zap, Crown, Megaphone, Camera, Users, CreditCard, Wallet, Star,
  BarChart3, LineChart, TrendingUp, DollarSign, Image, Gift, Award,
  UserPlus, FileText, FolderOpen, Bell, Headphones, Settings, MapPin,
  Clock, Cake, Coins, ShoppingCart, Layers, Lock, Box, ChevronDown, Menu, X,
  Monitor, ChefHat, Grid3x3, Scan, Calendar, Scissors, ClipboardList, Repeat, Globe, Target,
  Receipt, PackageSearch, Link as LinkIcon, Crown as MembershipIcon, Trash2, QrCode, ArrowLeftRight,
  CalendarDays, BookOpen, Stethoscope
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { filterNavByRole, MERCHANT_NAV_PERMISSIONS } from '../../utils/rolePermissions';

export default function MerchantNav() {
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
        { path: '/merchant/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/merchant/profile', icon: Store, label: 'Profile' },
        { path: '/merchant/pos', icon: ShoppingCart, label: 'POS System' },
        { path: '/merchant/barcode-scanner', icon: Scan, label: 'Barcode Scanner (Retail)' },
        { path: '/merchant/product-variants', icon: Layers, label: 'Product Variants (Retail)' },
        { path: '/merchant/kds', icon: Monitor, label: 'Kitchen Display (Restaurant)' },
        { path: '/merchant/tables', icon: Grid3x3, label: 'Table Management (Restaurant)' },
        { path: '/merchant/recipe-costing', icon: ChefHat, label: 'Recipe Costing (Restaurant)' },
        { path: '/merchant/qr-ordering', icon: QrCode, label: 'QR Ordering (Restaurant)' },
        { path: '/merchant/appointments', icon: Calendar, label: 'Appointments (Salon/Service)' },
        { path: '/merchant/service-catalog', icon: Scissors, label: 'Service Catalog (Salon)' },
        { path: '/merchant/class-schedule', icon: CalendarDays, label: 'Class Schedule (Fitness/Education)' },
        { path: '/merchant/booking-calendar', icon: BookOpen, label: 'Booking Calendar (Travel/Events)' },
        { path: '/merchant/prescriptions', icon: Stethoscope, label: 'Prescriptions (Healthcare)' },
        { path: '/merchant/marketplace', icon: Globe, label: 'D2C Marketplace (Brand)' },
        { path: '/merchant/subscriptions', icon: Repeat, label: 'Subscriptions (D2C)' }
      ]
    },
    {
      id: 'operations',
      label: 'Operations',
      icon: ShoppingBag,
      items: [
        { path: '/merchant/orders', icon: ShoppingBag, label: 'Orders' },
        { path: '/merchant/orders-multi-channel', icon: Layers, label: 'Multi-Channel Orders' },
        { path: '/merchant/products', icon: Package, label: 'Products' },
        { path: '/merchant/inventory', icon: Box, label: 'Inventory' },
        { path: '/merchant/inventory-advanced', icon: BarChart3, label: 'Advanced Inventory' },
        { path: '/merchant/batch-tracking', icon: QrCode, label: 'Batch & Expiry Tracking' },
        { path: '/merchant/waste-management', icon: Trash2, label: 'Waste Management' },
        { path: '/merchant/suppliers-procurement', icon: PackageSearch, label: 'Suppliers & Procurement' },
        { path: '/merchant/store-transfer', icon: ArrowLeftRight, label: 'Inter-Store Transfer' },
        { path: '/merchant/returns', icon: RotateCcw, label: 'Returns & Refunds' },
        { path: '/merchant/shipping', icon: Truck, label: 'Shipping & Logistics' }
      ]
    },
    {
      id: 'promotions',
      label: 'Promotions',
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
        { path: '/merchant/memberships', icon: MembershipIcon, label: 'Memberships & Packages' },
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
        { path: '/merchant/crm', icon: Target, label: 'CRM & Segmentation' },
        { path: '/merchant/reviews', icon: Star, label: 'Reviews & Ratings' }
      ]
    },
    {
      id: 'financials',
      label: 'Finance',
      icon: BarChart3,
      items: [
        { path: '/merchant/analytics', icon: BarChart3, label: 'Analytics' },
        { path: '/merchant/deal-analytics', icon: LineChart, label: 'Deal Analytics' },
        { path: '/merchant/performance', icon: TrendingUp, label: 'Performance Scorecard' },
        { path: '/merchant/transactions', icon: CreditCard, label: 'Transactions' },
        { path: '/merchant/wallet', icon: Wallet, label: 'Wallet' },
        { path: '/merchant/payments', icon: DollarSign, label: 'Payments & Settlements' },
        { path: '/merchant/financials', icon: CreditCard, label: 'Financial Reports' },
        { path: '/merchant/tax-compliance', icon: Receipt, label: 'Tax & Compliance' },
        { path: '/merchant/benchmarks', icon: TrendingUp, label: 'Benchmarks' }
      ]
    },
    {
      id: 'pricing',
      label: 'Pricing & Content',
      icon: DollarSign,
      items: [
        { path: '/merchant/price-engineering', icon: DollarSign, label: 'Price Engineering' },
        { path: '/merchant/pricing-intelligence', icon: TrendingUp, label: 'Smart Pricing & Competition' },
        { path: '/merchant/content', icon: Image, label: 'Content Management' },
        { path: '/merchant/free-delivery', icon: Truck, label: 'Free Delivery Rules' }
      ]
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      items: [
        { path: '/merchant/staff', icon: UserPlus, label: 'Staff Management' },
        { path: '/merchant/staff-roster', icon: ClipboardList, label: 'Staff Roster & Shifts' },
        { path: '/merchant/payroll', icon: CreditCard, label: 'Payroll & Commission' },
        { path: '/merchant/integrations', icon: LinkIcon, label: 'Integration Hub' },
        { path: '/merchant/compliance', icon: FileText, label: 'Compliance' },
        { path: '/merchant/documents', icon: FolderOpen, label: 'Documents' },
        { path: '/merchant/notifications', icon: Bell, label: 'Notifications' },
        { path: '/merchant/support', icon: Headphones, label: 'Support' },
        { path: '/merchant/settings', icon: Settings, label: 'Settings' }
      ]
    },
    {
      id: 'advanced',
      label: 'Advanced Features',
      icon: Zap,
      items: [
        { path: '/merchant/qr-payments', icon: QrCode, label: 'QR Payments' },
        { path: '/merchant/prive-module', icon: Crown, label: 'ReZ Privé Module' },
        { path: '/merchant/event-checkin', icon: Calendar, label: 'Event Check-In' },
        { path: '/merchant/user-roles', icon: Users, label: 'User Roles Management' },
        { path: '/merchant/creator-hub', icon: Camera, label: 'Creator Partnership Hub' },
        { path: '/merchant/marketing-campaigns', icon: Megaphone, label: 'Marketing Campaigns' },
        { path: '/merchant/review-management', icon: Star, label: 'Review Management' }
      ]
    }
  ];

  // Filter navigation based on user role
  const filteredNavCategories = useMemo(() => {
    // If no user role, show all nav items (for development)
    if (!userRole) {
      return navCategories;
    }
    return filterNavByRole(navCategories, userRole, MERCHANT_NAV_PERMISSIONS);
  }, [userRole]);

  const toggleCategory = (categoryId) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const isPathActive = (path) => {
    return location.pathname === path || (path === '/merchant/dashboard' && location.pathname === '/merchant');
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
          <h2 className="text-lg font-bold text-gray-900">Merchant Portal</h2>
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
