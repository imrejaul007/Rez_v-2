import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Search,
  ChevronRight,
  Plane,
  Building2,
  Globe,
  Car,
  Ticket,
  Coins,
  ArrowRightLeft,
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import BottomNavManager from '../components/layout/BottomNavManager';
import {
  travelTabs,
  searchPlaceholders,
  flights,
  hotels,
  hotelCategories,
  destinations,
  activities,
  taxis,
  currencies,
  travelDeals,
} from '../data/travelData';
import FlightCard from '../components/travel/FlightCard';
import HotelCard from '../components/travel/HotelCard';
import DestinationCard from '../components/travel/DestinationCard';
import ActivityCard from '../components/travel/ActivityCard';
import TaxiCard from '../components/travel/TaxiCard';
import CurrencyCard from '../components/travel/CurrencyCard';
import TravelDealCard from '../components/travel/TravelDealCard';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import QuickActionBar from '../components/common/QuickActionBar';
import StreakLoyaltySection from '../components/common/StreakLoyaltySection';
import AISuggestions from '../components/common/AISuggestions';
import UGCSocialProof from '../components/common/UGCSocialProof';
import FooterTrust from '../components/common/FooterTrust';

const Travel = () => {
  const { rezCoins } = useWallet();
  const [activeTab, setActiveTab] = useState('flights');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [hotelCategory, setHotelCategory] = useState('nearby');

  // Rotate search placeholders
  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getTabIcon = (tabId) => {
    switch (tabId) {
      case 'flights': return <Plane className="w-4 h-4" />;
      case 'hotels': return <Building2 className="w-4 h-4" />;
      case 'destinations': return <Globe className="w-4 h-4" />;
      case 'taxis': return <Car className="w-4 h-4" />;
      case 'activities': return <Ticket className="w-4 h-4" />;
      case 'currency': return <ArrowRightLeft className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </Link>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-rez-navy dark:text-white">Travel</h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Flights · Hotels · Experiences · Savings</p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20">
              <span className="text-sm">🪙</span>
              <span className="text-sm font-medium text-amber-400">{rezCoins}</span>
            </div>
          </div>

          {/* Location */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 mt-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-sm text-rez-navy dark:text-white">Bangalore → Goa</span>
            <ChevronRight className="w-3.5 h-3.5 text-rez-gray-600 dark:text-gray-500" />
          </button>
        </div>

        {/* Search */}
        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-600 dark:text-gray-500" />
            <input
              type="text"
              placeholder={searchPlaceholders[placeholderIndex]}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Quick Tabs */}
        <div className="px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {travelTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full shrink-0 transition-colors ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="text-sm">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Action Bar */}
      <QuickActionBar category="travel" />

      {/* Travel Deals */}
      <div className="mt-4">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🔥</span>
            <h2 className="font-semibold text-rez-navy dark:text-white">Travel Deals</h2>
          </div>
          <button className="text-xs text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {travelDeals.map((deal) => (
            <TravelDealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>

      {/* Destinations */}
      <div className="mt-8">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Explore Destinations</h2>
          </div>
          <button className="text-xs text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </div>

      {/* Flights */}
      <div className="mt-8">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Plane className="w-5 h-5 text-indigo-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Best Flight Deals</h2>
          </div>
          <button className="text-xs text-emerald-400 flex items-center gap-1">
            Compare All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="px-4 space-y-3">
          {flights.slice(0, 3).map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
        <div className="px-4 mt-3">
          <Button variant="secondary" fullWidth>
            Search More Flights
          </Button>
        </div>
      </div>

      {/* Hotels */}
      <div className="mt-8">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-purple-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Hotels & Stays</h2>
          </div>
          <button className="text-xs text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Hotel category tabs */}
        <div className="px-4 mb-3">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {hotelCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setHotelCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 text-sm ${
                  hotelCategory === cat.id
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    : 'bg-white/5 text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>

      {/* Activities */}
      <div className="mt-8">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-pink-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Activities & Experiences</h2>
          </div>
          <button className="text-xs text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar pb-2">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>

      {/* Taxis */}
      <div className="mt-8">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <Car className="w-5 h-5 text-amber-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Taxis & Local Transport</h2>
          </div>
        </div>
        <div className="px-4 space-y-3">
          {taxis.slice(0, 3).map((taxi) => (
            <TaxiCard key={taxi.id} taxi={taxi} />
          ))}
        </div>
      </div>

      {/* Currency Exchange */}
      <div className="mt-8">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="w-5 h-5 text-teal-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Currency Exchange</h2>
          </div>
          <button className="text-xs text-emerald-400 flex items-center gap-1">
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
          {currencies.map((currency) => (
            <CurrencyCard key={currency.id} currency={currency} />
          ))}
        </div>
      </div>

      {/* Wallet Integration Banner */}
      <div className="mx-4 mt-8 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/20">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/30 flex items-center justify-center">
            <Coins className="w-7 h-7 text-emerald-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-rez-navy dark:text-white">ReZ Travel Savings</h3>
            <p className="text-sm text-rez-gray-700 dark:text-gray-300">Use coins to reduce trip cost by up to 20%</p>
            <p className="text-xs text-emerald-400 mt-1">You have {rezCoins} coins available</p>
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-3">Why Book with ReZ Travel</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">✅</span>
            <span className="text-sm text-rez-gray-700 dark:text-gray-300">Verified Partners</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">💰</span>
            <span className="text-sm text-rez-gray-700 dark:text-gray-300">Best Price + Coins</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">🔒</span>
            <span className="text-sm text-rez-gray-700 dark:text-gray-300">Secure Payments</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">💬</span>
            <span className="text-sm text-rez-gray-700 dark:text-gray-300">24/7 Support</span>
          </div>
        </div>
      </div>

      {/* AI Suggestions */}
      <AISuggestions
        category="travel"
        suggestions={[
          { id: 1, title: 'Best deals', icon: '🔥', link: '/travel?filter=deals' },
          { id: 2, title: 'Last minute', icon: '⏰', link: '/travel?filter=lastminute' },
          { id: 3, title: 'Price drop', icon: '📉', link: '/travel?filter=pricedrop' },
          { id: 4, title: 'Popular', icon: '⭐', link: '/travel?filter=popular' },
        ]}
        chips={[
          { id: 'flights', label: 'Flights', icon: '✈️' },
          { id: 'hotels', label: 'Hotels', icon: '🏨' },
          { id: 'packages', label: 'Packages', icon: '📦' },
          { id: 'activities', label: 'Activities', icon: '🎯' },
          { id: 'visa', label: 'Visa', icon: '🛂' },
        ]}
      />

      {/* UGC Social Proof */}
      <UGCSocialProof category="travel" />

      {/* Streaks & Loyalty */}
      <StreakLoyaltySection
        category="travel"
        streakData={{
          currentStreak: 1,
          targetStreak: 3,
          reward: 500,
          type: 'monthly'
        }}
        brandLoyalty={[
          { name: 'MakeMyTrip', icon: '✈️', visits: 2, targetVisits: 3, reward: 300 },
          { name: 'OYO', icon: '🏨', visits: 4, targetVisits: 5, reward: 200 },
        ]}
        weeklyMission={{
          completed: 1,
          target: 2,
          reward: 400,
          description: 'Book 2 trips this quarter'
        }}
      />

      {/* Footer Trust */}
      <FooterTrust
        coinsEarnable={600}
        expiringCoins={100}
        expiryDays={14}
      />

      {/* Bottom spacer */}
      <div className="h-8" />

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

export default Travel;
