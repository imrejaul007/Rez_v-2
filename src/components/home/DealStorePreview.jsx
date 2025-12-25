import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Tag, Coins, Crown, MapPin, Clock, Zap, Users, Star, GraduationCap, Briefcase, Heart, Cake, Shield, Stethoscope } from 'lucide-react';

const DealStorePreview = () => {
  const [activeTab, setActiveTab] = useState('offers');

  const tabs = [
    { id: 'offers', label: 'Offers' },
    { id: 'cashback', label: 'Cashback' },
    { id: 'exclusive', label: 'Exclusive' },
  ];

  const offers = [
    { id: 1, title: 'Nearby Offers', icon: MapPin, count: 24, color: 'bg-blue-500/20', iconColor: 'text-blue-400' },
    { id: 2, title: "Today's Deals", icon: Clock, count: 18, color: 'bg-orange-500/20', iconColor: 'text-orange-400' },
    { id: 3, title: 'BOGO', icon: Tag, count: 12, badge: '2x', color: 'bg-green-500/20', iconColor: 'text-green-400' },
    { id: 4, title: '50-80% OFF', icon: Zap, count: 35, color: 'bg-red-500/20', iconColor: 'text-red-400' },
    { id: 5, title: 'Free Delivery', icon: Tag, count: 42, color: 'bg-purple-500/20', iconColor: 'text-purple-400' },
    { id: 6, title: 'Trending', icon: Star, count: 28, badge: 'HOT', color: 'bg-pink-500/20', iconColor: 'text-pink-400' },
    { id: 7, title: 'Lightning', icon: Zap, count: 8, badge: '⚡', color: 'bg-amber-500/20', iconColor: 'text-amber-400' },
    { id: 8, title: 'AI Picks', icon: Star, count: 15, color: 'bg-violet-500/20', iconColor: 'text-violet-400' },
  ];

  const cashbackDeals = [
    { id: 1, title: 'Super Cashback', subtitle: 'Up to 40% back', icon: Coins, color: 'bg-emerald-500/20', iconColor: 'text-emerald-400' },
    { id: 2, title: 'Double Coin Day', subtitle: '2x on all spends', icon: Coins, badge: '2X', color: 'bg-amber-500/20', iconColor: 'text-amber-400' },
    { id: 3, title: 'Big Coin Drops', subtitle: 'Limited time', icon: Tag, color: 'bg-purple-500/20', iconColor: 'text-purple-400' },
    { id: 4, title: 'Upload Bill Bonus', subtitle: '+50 extra coins', icon: Tag, color: 'bg-blue-500/20', iconColor: 'text-blue-400' },
    { id: 5, title: 'Bank Deals', subtitle: 'HDFC, ICICI, SBI', icon: Tag, color: 'bg-red-500/20', iconColor: 'text-red-400' },
  ];

  const exclusiveDeals = [
    { id: 1, title: 'Students', subtitle: 'Campus Zone', icon: GraduationCap, color: 'bg-blue-500/20', iconColor: 'text-blue-400', locked: false, path: '/exclusive/student' },
    { id: 2, title: 'Employees', subtitle: 'Corporate', icon: Briefcase, color: 'bg-gray-500/20', iconColor: 'text-rez-gray-600 dark:text-gray-400', locked: false, path: '/exclusive/corporate' },
    { id: 3, title: 'Women', subtitle: 'Exclusive', icon: Heart, color: 'bg-pink-500/20', iconColor: 'text-pink-400', locked: false, path: '/exclusive/women' },
    { id: 4, title: 'Birthday', subtitle: 'Specials', icon: Cake, color: 'bg-amber-500/20', iconColor: 'text-amber-400', locked: false, path: '/exclusive/birthday' },
    { id: 5, title: 'Defence', subtitle: 'Army/Navy', icon: Shield, color: 'bg-green-500/20', iconColor: 'text-green-400', locked: false, path: '/exclusive/special-profiles' },
    { id: 6, title: 'Healthcare', subtitle: 'Doctors/Nurses', icon: Stethoscope, color: 'bg-cyan-500/20', iconColor: 'text-cyan-400', locked: false, path: '/exclusive/special-profiles' },
  ];

  return (
    <div className="px-4 py-4">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-rez-navy dark:text-white">💥 Deals that save you money</h2>
        <Link to="/deal-store" className="flex items-center gap-1 text-xs text-emerald-400">
          View all <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-1 p-1 rounded-xl bg-rez-gray-100 dark:bg-[#1C1C1E] mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-emerald-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'offers' && (
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <Link
                key={offer.id}
                to="/deal-store"
                className={`min-w-[100px] p-3 rounded-2xl ${offer.color} shrink-0 active:scale-[0.98] transition-transform relative`}
              >
                {offer.badge && (
                  <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-red-500 text-[10px] text-rez-navy dark:text-white font-bold">
                    {offer.badge}
                  </span>
                )}
                <Icon className={`w-5 h-5 ${offer.iconColor} mb-2`} />
                <p className="text-xs font-medium text-rez-navy dark:text-white">{offer.title}</p>
                <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">{offer.count} offers</p>
              </Link>
            );
          })}
        </div>
      )}

      {activeTab === 'cashback' && (
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {cashbackDeals.map((deal) => {
            const Icon = deal.icon;
            return (
              <Link
                key={deal.id}
                to="/deal-store"
                className={`min-w-[120px] p-3 rounded-2xl ${deal.color} shrink-0 active:scale-[0.98] transition-transform relative`}
              >
                {deal.badge && (
                  <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-amber-500 text-[10px] text-rez-navy dark:text-white font-bold">
                    {deal.badge}
                  </span>
                )}
                <Icon className={`w-5 h-5 ${deal.iconColor} mb-2`} />
                <p className="text-xs font-medium text-rez-navy dark:text-white">{deal.title}</p>
                <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">{deal.subtitle}</p>
              </Link>
            );
          })}
        </div>
      )}

      {activeTab === 'exclusive' && (
        <div className="grid grid-cols-3 gap-3">
          {exclusiveDeals.map((deal) => {
            const Icon = deal.icon;
            return (
              <Link
                key={deal.id}
                to={deal.path}
                className={`p-3 rounded-2xl ${deal.color} active:scale-[0.98] transition-transform relative`}
              >
                <Icon className={`w-5 h-5 ${deal.iconColor} mb-2`} />
                <p className="text-xs font-medium text-rez-navy dark:text-white">{deal.title}</p>
                <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">{deal.subtitle}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DealStorePreview;
