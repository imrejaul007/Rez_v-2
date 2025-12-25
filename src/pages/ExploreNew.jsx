import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Map } from 'lucide-react';
import ExploreHeader from '../components/explore/ExploreHeader';
import ModeSwitcher from '../components/explore/ModeSwitcher';
import QuickDiscoveryChips from '../components/explore/QuickDiscoveryChips';
import UGCReels from '../components/explore/UGCReels';
import UGCPostsFeed from '../components/explore/UGCPostsFeed';
import VerifiedReviews from '../components/explore/VerifiedReviews';
import WhatsHotNearYou from '../components/explore/WhatsHotNearYou';
import SmartPicks from '../components/explore/SmartPicks';
import ShopByCategory from '../components/explore/ShopByCategory';
import CompareDecide from '../components/explore/CompareDecide';
import TrendingStores from '../components/explore/TrendingStores';
import FriendsCommunity from '../components/explore/FriendsCommunity';
import SocialProofStrip from '../components/explore/SocialProofStrip';
import PlayEarn from '../components/explore/PlayEarn';
import EarnCTA from '../components/explore/EarnCTA';
import StoreList from '../components/store/StoreList';
import { stores } from '../data/stores';
import BottomNavManager from '../components/layout/BottomNavManager';

const ExploreNew = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const handleQuickFilter = (filterId) => {
    setActiveFilter(filterId);
    // Apply filter logic here
  };

  // Filter stores based on active filters
  const filteredStores = stores.slice(0, 10); // Limit for better UX

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24 transition-colors">
      {/* Header - Sticky */}
      <ExploreHeader />

      {/* Mode Switcher - Sticky */}
      <ModeSwitcher />

      {/* Main Content */}
      <div className="relative">
        {/* Quick Discovery Chips */}
        <QuickDiscoveryChips onSelect={handleQuickFilter} />

        {/* 🎥 UGC REELS - Top Attention Grabber */}
        <UGCReels />

        {/* What's Hot Near You */}
        <WhatsHotNearYou />

        {/* 🖼 UGC POSTS & PHOTOS - Social Feed */}
        <UGCPostsFeed />

        {/* ⭐ VERIFIED REVIEWS - Trust Layer */}
        <VerifiedReviews />

        {/* Shop by Category */}
        <ShopByCategory />

        {/* 🧠 SMART PICKS - AI Discovery */}
        <SmartPicks />

        {/* Compare & Decide */}
        <CompareDecide />

        {/* 🏬 TRENDING STORES - Hot Right Now */}
        <TrendingStores />

        {/* Friends & Community */}
        <FriendsCommunity />

        {/* 👥 SOCIAL PROOF STRIP */}
        <SocialProofStrip />

        {/* Offers & Cashback Section */}
        <div className="px-4 py-4">
          <div className="p-6 bg-gradient-to-r from-rez-green-500 via-rez-teal-500 to-rez-gold rounded-2xl">
            <h3 className="text-h3 font-poppins text-white mb-2">
              Exclusive Offers
            </h3>
            <p className="text-sm text-white/90 mb-4">
              Unlock special deals and cashback rewards
            </p>
            <Link
              to="/offers"
              className="inline-block px-6 py-2.5 bg-white text-rez-green-500 rounded-full font-semibold hover:bg-white/90 transition-colors"
            >
              View All Offers
            </Link>
          </div>
        </div>

        {/* Play & Earn */}
        <PlayEarn />

        {/* 🪙 EARN CTA - Conversion */}
        <EarnCTA />

        {/* Stores Near You */}
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">
              Stores Near You
            </h2>
            <span className="text-sm text-rez-gray-600 dark:text-gray-400">
              {stores.length} stores
            </span>
          </div>
          <StoreList stores={filteredStores} />
        </div>

        {/* Map View Toggle - Floating Button */}
        <Link
          to="/explore/map"
          className="fixed bottom-24 right-4 z-40 flex items-center gap-2 px-4 py-3 bg-rez-green-500 hover:bg-rez-green-600 text-white rounded-full shadow-lg active:scale-95 transition-all"
        >
          <Map className="w-5 h-5" />
          <span className="font-semibold">Map View</span>
        </Link>

        {/* Empty State - Hidden by default, shown when no results */}
        {filteredStores.length === 0 && (
          <div className="px-4 py-12 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-rez-gray-100 dark:bg-white/10 flex items-center justify-center">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold text-rez-navy dark:text-white mb-2">
              Start Exploring
            </h3>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-6">
              Try searching for products or browse categories to discover amazing deals near you
            </p>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-rez-gray-700 dark:text-gray-300 mb-2">
                Trending searches:
              </p>
              {['Best sneakers', 'Biryani near me', 'Electronics deals', 'Beauty services'].map((term) => (
                <button
                  key={term}
                  className="inline-block mx-1 px-3 py-1.5 bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white rounded-full text-xs hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

export default ExploreNew;
