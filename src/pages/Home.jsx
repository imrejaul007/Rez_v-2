import { useApp } from '../contexts/AppContext';
import { Link } from 'react-router-dom';
import HomeHeader from '../components/home/HomeHeader';
import ModeSwitcher from '../components/home/ModeSwitcher';
import SearchSuperDeals from '../components/home/SearchSuperDeals';
import HomeQuickActions from '../components/home/HomeQuickActions';
import HomeCategoryGrid from '../components/home/HomeCategoryGrid';
import HowRezWorks from '../components/home/HowRezWorks';
import DealStorePreview from '../components/home/DealStorePreview';
import WalletPreview from '../components/home/WalletPreview';
import StoreDiscovery from '../components/home/StoreDiscovery';
import HomeReels from '../components/home/HomeReels';
import StreaksGamification from '../components/home/StreaksGamification';
import LiveActivityFeed from '../components/home/LiveActivityFeed';
import FloatingScanButton from '../components/home/FloatingScanButton';
import BottomNavManager from '../components/layout/BottomNavManager';
import LiveChatWidget from '../components/LiveChatWidget';
import PlayAndEarnSection from '../components/home/PlayAndEarnSection';
import UGCFeedSection from '../components/home/UGCFeedSection';
import ShopByExperience from '../components/home/ShopByExperience';
import ExcitingDealsSection from '../components/home/ExcitingDealsSection';

const Home = () => {
  const { globalMode, filters, vibe } = useApp();

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24 transition-colors">
      {/* 1️⃣ HEADER (Sticky) */}
      <HomeHeader />

      {/* 2️⃣ MODE SWITCHER */}
      <ModeSwitcher />

      {/* 3️⃣ SEARCH + SUPER DEALS BAR */}
      <SearchSuperDeals />

      {/* 4️⃣ QUICK ACTIONS */}
      <HomeQuickActions />

      {/* 💳 PAY IN STORE - HERO CTA */}
      <div className="px-4 mb-6">
        <Link
          to="/pay-in-store"
          className="block p-6 rounded-rez-2xl bg-gradient-to-r from-rez-green-500 via-rez-teal-500 to-rez-gold relative overflow-hidden shadow-rez-green"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-rez-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-3xl">💳</span>
                </div>
                <div>
                  <h3 className="text-h3 font-poppins text-rez-navy dark:text-white">Pay in Store</h3>
                  <p className="text-body-sm text-white/90">Scan QR & earn instant rewards</p>
                </div>
              </div>
              <span className="text-rez-navy dark:text-white text-2xl">→</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-center">
                <p className="text-xl font-bold text-rez-navy dark:text-white">10%</p>
                <p className="text-[10px] text-white/80">Cashback</p>
              </div>
              <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-center">
                <p className="text-xl font-bold text-rez-navy dark:text-white">🪙</p>
                <p className="text-[10px] text-white/80">Earn Coins</p>
              </div>
              <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-center">
                <p className="text-xl font-bold text-rez-navy dark:text-white">⚡</p>
                <p className="text-[10px] text-white/80">Instant</p>
              </div>
            </div>
          </div>

          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse animation-delay-1000" />
          </div>
        </Link>
      </div>

      {/* 💡 HOW ReZ WORKS - ENTRY POINT */}
      <div className="px-4 mb-6">
        <Link
          to="/how-rez-works"
          className="block p-5 rounded-rez-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/30 dark:border-blue-500/30 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-rez-lg bg-blue-500/30 dark:bg-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-3xl">💡</span>
            </div>
            <div className="flex-1">
              <h3 className="text-h4 font-poppins text-rez-navy dark:text-white mb-1">New to ReZ? See how it works</h3>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Save money on things you already buy — online & offline</p>
            </div>
            <span className="text-blue-400 dark:text-blue-400 text-xl group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </Link>
      </div>

      {/* 💰 EARN REZ COINS - FEATURED EARNING WAYS */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">💰 Earn ReZ Coins</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Multiple ways to earn rewards</p>
          </div>
          <Link to="/earn" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        {/* Top 3 Earning Methods Grid */}
        <div className="grid grid-cols-1 gap-3 mb-3">
          {/* Online Shopping Cashback */}
          <Link
            to="/cash-store"
            className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/10 border-2 border-emerald-500/30 hover:border-emerald-500/50 transition-all active:scale-98"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">🛍️</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-rez-navy dark:text-white mb-1">Online Shopping Cashback</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Shop from 1000+ brands & earn up to 25% cashback</p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Auto-tracked
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    ₹2,500 avg/month
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Pay in Store */}
          <Link
            to="/pay-in-store"
            className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border-2 border-blue-500/30 hover:border-blue-500/50 transition-all active:scale-98"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">💳</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-rez-navy dark:text-white mb-1">Pay in Store</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Scan QR at offline stores & earn instant rewards</p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded-full bg-blue-500/20 text-xs font-bold text-blue-600 dark:text-blue-400">
                    Instant
                  </span>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    Up to 10% cashback
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Social Impact - CSR Programs */}
          <Link
            to="/earn/social-impact"
            className="p-5 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/10 border-2 border-purple-500/30 hover:border-purple-500/50 transition-all active:scale-98"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">🤝</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-rez-navy dark:text-white mb-1">Social Impact Events</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Join CSR activities & earn ReZ + Brand Coins</p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded-full bg-purple-500/20 text-xs font-bold text-purple-600 dark:text-purple-400">
                    Dual Rewards
                  </span>
                  <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                    45 CSR Partners
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* More Earning Ways - Compact Grid */}
        <div className="grid grid-cols-2 gap-2">
          <Link
            to="/earn/play"
            className="p-3 rounded-xl bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-orange-500 dark:hover:border-orange-500 transition-all active:scale-95"
          >
            <span className="text-2xl mb-1 block">🎮</span>
            <p className="text-xs font-bold text-rez-navy dark:text-white mb-0.5">Play Games</p>
            <p className="text-[10px] text-gray-600 dark:text-gray-400">Win coins daily</p>
          </Link>

          <Link
            to="/earn/refer"
            className="p-3 rounded-xl bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-pink-500 dark:hover:border-pink-500 transition-all active:scale-95"
          >
            <span className="text-2xl mb-1 block">👥</span>
            <p className="text-xs font-bold text-rez-navy dark:text-white mb-0.5">Refer Friends</p>
            <p className="text-[10px] text-gray-600 dark:text-gray-400">₹100 per referral</p>
          </Link>

          <Link
            to="/earn/surveys"
            className="p-3 rounded-xl bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all active:scale-95"
          >
            <span className="text-2xl mb-1 block">📋</span>
            <p className="text-xs font-bold text-rez-navy dark:text-white mb-0.5">Surveys</p>
            <p className="text-[10px] text-gray-600 dark:text-gray-400">Quick rewards</p>
          </Link>

          <Link
            to="/earn/reviews"
            className="p-3 rounded-xl bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-amber-500 dark:hover:border-amber-500 transition-all active:scale-95"
          >
            <span className="text-2xl mb-1 block">⭐</span>
            <p className="text-xs font-bold text-rez-navy dark:text-white mb-0.5">Write Reviews</p>
            <p className="text-[10px] text-gray-600 dark:text-gray-400">Share experiences</p>
          </Link>
        </div>
      </div>

      {/* 🎮 PLAY & EARN SECTION */}
      <PlayAndEarnSection />

      {/* 🎉 UGC FEED - NEW ON REZ */}
      <UGCFeedSection />

      {/* ⚡ FLASH SALES - LIMITED TIME OFFERS */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">⚡ Flash Sales</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Ending soon • Limited stock</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-500/30">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-red-400">2h 45m left</span>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {[
            { id: 1, name: 'iPhone 15 Pro', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400', price: 124999, was: 134900, stock: 3 },
            { id: 2, name: 'Samsung TV 55"', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400', price: 39999, was: 54999, stock: 7 },
            { id: 3, name: 'Nike Air Max', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', price: 5999, was: 12999, stock: 12 }
          ].map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="flex-shrink-0 w-44 p-3 rounded-2xl bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-red-500 dark:hover:border-red-500 transition-all active:scale-95"
            >
              <div className="relative mb-3">
                <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-xl" />
                <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-red-500 text-white text-xs font-bold">
                  {Math.round(((item.was - item.price) / item.was) * 100)}% OFF
                </div>
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-white/90 dark:bg-black/90 text-xs font-semibold text-red-500">
                  {item.stock} left
                </div>
              </div>
              <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1 line-clamp-1">{item.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base font-bold text-rez-navy dark:text-white">₹{item.price.toLocaleString()}</span>
                <span className="text-xs text-rez-gray-500 dark:text-gray-500 line-through">₹{item.was.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-emerald-500 font-semibold">Save ₹{(item.was - item.price).toLocaleString()}</span>
                <span className="text-amber-400">🪙 {Math.round(item.price * 0.1)} coins</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 🔥 TRENDING NEAR YOU */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">🔥 Trending Near You</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Popular in your area</p>
          </div>
          <Link to="/explore/trending" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { id: 1, name: 'Starbucks Coffee', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400', category: 'Food & Dining', trending: '324 people', cashback: '15%' },
            { id: 2, name: 'Zara Fashion', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400', category: 'Fashion', trending: '198 people', cashback: '20%' },
            { id: 3, name: 'Glowzy Salon', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400', category: 'Beauty', trending: '156 people', cashback: '25%' },
            { id: 4, name: 'FitClub Gym', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400', category: 'Fitness', trending: '89 people', cashback: '10%' }
          ].map((item) => (
            <Link
              key={item.id}
              to={`/store/${item.id}`}
              className="p-3 rounded-2xl bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-rez-green-500 dark:hover:border-emerald-500 transition-all active:scale-95"
            >
              <div className="relative mb-3">
                <img src={item.image} alt={item.name} className="w-full h-24 object-cover rounded-xl" />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-orange-500/90 backdrop-blur-sm flex items-center gap-1">
                  <span className="text-xs">🔥</span>
                  <span className="text-xs font-semibold text-white">{item.trending}</span>
                </div>
              </div>
              <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1 line-clamp-1">{item.name}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">{item.category}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-500">{item.cashback} cashback</span>
                <span className="text-xs text-amber-400">🪙 Coins</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 5️⃣ CATEGORY GRID */}
      <HomeCategoryGrid />

      {/* 🗂️ VIEW ALL CATEGORIES */}
      <div className="px-4 mb-6">
        <Link
          to="/categories"
          className="block p-4 rounded-rez-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-500/30 dark:border-blue-500/30"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-rez-md bg-blue-500/30 dark:bg-blue-500/30 flex items-center justify-center">
                <span className="text-2xl">🗂️</span>
              </div>
              <div>
                <h3 className="text-h4 font-poppins text-rez-navy dark:text-white">View All Categories</h3>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">Explore everything ReZ offers</p>
              </div>
            </div>
            <span className="text-blue-400 dark:text-blue-400 text-button font-poppins">Browse →</span>
          </div>
        </Link>
      </div>

      {/* 🎉 EVENTS & EXPERIENCES - FEATURED SECTION */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">🎉 Events & Experiences</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Book tickets, save money, earn rewards</p>
          </div>
          <Link to="/events" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <Link
            to="/events/movies"
            className="p-4 rounded-rez-lg bg-gradient-to-br from-purple-500/20 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/10 border border-purple-500/30 dark:border-purple-500/30 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all active:scale-95"
          >
            <span className="text-3xl mb-2 block">🎬</span>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Movies</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">Latest releases</p>
            <div className="text-xs font-semibold text-purple-600 dark:text-purple-400">Up to 20% off</div>
          </Link>

          <Link
            to="/events/concerts"
            className="p-4 rounded-rez-lg bg-gradient-to-br from-orange-500/20 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/10 border border-orange-500/30 dark:border-orange-500/30 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all active:scale-95"
          >
            <span className="text-3xl mb-2 block">🎤</span>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Concerts</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">Live music</p>
            <div className="text-xs font-semibold text-orange-600 dark:text-orange-400">Earn 2x coins</div>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Link
            to="/events/workshops"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">📚</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Workshops</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Learn & grow</p>
          </Link>

          <Link
            to="/events/parks"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-green-500 dark:hover:border-green-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">🎢</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Parks</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Family fun</p>
          </Link>

          <Link
            to="/events/gaming"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-purple-500 dark:hover:border-purple-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">🎮</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Gaming</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Esports</p>
          </Link>
        </div>
      </div>

      {/* 🛍️ SHOP BY CATEGORY - ReZ PRINCIPLES */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">🛍️ Shop by Category</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Cashback on every purchase</p>
          </div>
        </div>

        <div className="space-y-3">
          {/* Electronics */}
          <Link
            to="/electronics"
            className="block p-4 rounded-rez-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/10 dark:to-cyan-500/10 border border-blue-500/20 dark:border-blue-500/20 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-rez-md bg-blue-500/20 dark:bg-blue-500/20 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <div className="flex-1">
                <h3 className="text-body font-semibold text-rez-navy dark:text-white">Electronics</h3>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">Phones, laptops, gadgets</p>
              </div>
              <div className="text-right">
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">10-15% cashback</div>
                <div className="text-[10px] text-rez-gray-500 dark:text-gray-400">+ 2x coins</div>
              </div>
            </div>
          </Link>

          {/* Fashion */}
          <Link
            to="/fashion"
            className="block p-4 rounded-rez-lg bg-gradient-to-r from-pink-500/10 to-purple-500/10 dark:from-pink-500/10 dark:to-purple-500/10 border border-pink-500/20 dark:border-pink-500/20 hover:border-pink-500/40 dark:hover:border-pink-500/40 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-rez-md bg-pink-500/20 dark:bg-pink-500/20 flex items-center justify-center">
                <span className="text-2xl">👗</span>
              </div>
              <div className="flex-1">
                <h3 className="text-body font-semibold text-rez-navy dark:text-white">Fashion</h3>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">Clothing, accessories, footwear</p>
              </div>
              <div className="text-right">
                <div className="text-xs font-semibold text-pink-600 dark:text-pink-400">15-25% cashback</div>
                <div className="text-[10px] text-rez-gray-500 dark:text-gray-400">Trending</div>
              </div>
            </div>
          </Link>

          {/* Food & Dining */}
          <Link
            to="/food"
            className="block p-4 rounded-rez-lg bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/10 dark:to-red-500/10 border border-orange-500/20 dark:border-orange-500/20 hover:border-orange-500/40 dark:hover:border-orange-500/40 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-rez-md bg-orange-500/20 dark:bg-orange-500/20 flex items-center justify-center">
                <span className="text-2xl">🍽️</span>
              </div>
              <div className="flex-1">
                <h3 className="text-body font-semibold text-rez-navy dark:text-white">Food & Dining</h3>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">Restaurants, cafes, delivery</p>
              </div>
              <div className="text-right">
                <div className="text-xs font-semibold text-orange-600 dark:text-orange-400">10-20% cashback</div>
                <div className="text-[10px] text-rez-gray-500 dark:text-gray-400">Popular</div>
              </div>
            </div>
          </Link>

          {/* View More Categories */}
          <Link
            to="/categories"
            className="block p-3 rounded-rez-lg border-2 border-dashed border-rez-gray-300 dark:border-white/20 hover:border-rez-green-500 dark:hover:border-emerald-500 transition-all text-center"
          >
            <span className="text-body-sm font-semibold text-rez-gray-600 dark:text-gray-400">View All 15+ Categories →</span>
          </Link>
        </div>
      </div>

      {/* 🛍️ BEAUTY & WELLNESS */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">💄 Beauty & Wellness</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Pamper yourself, save more</p>
          </div>
          <Link to="/beauty" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <Link
            to="/beauty/services"
            className="p-4 rounded-rez-lg bg-gradient-to-br from-pink-500/20 to-rose-500/10 dark:from-pink-500/20 dark:to-rose-500/10 border border-pink-500/30 dark:border-pink-500/30 hover:border-pink-500/50 dark:hover:border-pink-500/50 transition-all active:scale-95"
          >
            <span className="text-3xl mb-2 block">💆</span>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Salon & Spa</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">Hair, nails, skin</p>
            <div className="text-xs font-semibold text-pink-600 dark:text-pink-400">Up to 30% off</div>
          </Link>

          <Link
            to="/beauty/products"
            className="p-4 rounded-rez-lg bg-gradient-to-br from-purple-500/20 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/10 border border-purple-500/30 dark:border-purple-500/30 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all active:scale-95"
          >
            <span className="text-3xl mb-2 block">💄</span>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Products</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">Makeup, skincare</p>
            <div className="text-xs font-semibold text-purple-600 dark:text-purple-400">20% cashback</div>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Link
            to="/beauty/clinics"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-pink-500 dark:hover:border-pink-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">🏥</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Clinics</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Dermatology</p>
          </Link>

          <Link
            to="/beauty/nearby"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-rose-500 dark:hover:border-rose-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">📍</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Nearby</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Near you</p>
          </Link>

          <Link
            to="/beauty/deals"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-purple-500 dark:hover:border-purple-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">🏷️</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Deals</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Hot offers</p>
          </Link>
        </div>
      </div>

      {/* 💪 FITNESS & SPORTS */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">💪 Fitness & Sports</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Get fit, get rewards</p>
          </div>
          <Link to="/fitness" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <Link
            to="/fitness/gyms"
            className="p-4 rounded-rez-lg bg-gradient-to-br from-orange-500/20 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/10 border border-orange-500/30 dark:border-orange-500/30 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all active:scale-95"
          >
            <span className="text-3xl mb-2 block">🏋️</span>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Gyms</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">All equipment</p>
            <div className="text-xs font-semibold text-orange-600 dark:text-orange-400">15% off memberships</div>
          </Link>

          <Link
            to="/fitness/studios"
            className="p-4 rounded-rez-lg bg-gradient-to-br from-green-500/20 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/10 border border-green-500/30 dark:border-green-500/30 hover:border-green-500/50 dark:hover:border-green-500/50 transition-all active:scale-95"
          >
            <span className="text-3xl mb-2 block">🧘</span>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Studios</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">Yoga, dance, pilates</p>
            <div className="text-xs font-semibold text-green-600 dark:text-green-400">Book classes</div>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Link
            to="/fitness/trainers"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-orange-500 dark:hover:border-orange-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">👨‍🏫</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Trainers</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Personal PT</p>
          </Link>

          <Link
            to="/fitness/store"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-red-500 dark:hover:border-red-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">👟</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Store</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Gear & wear</p>
          </Link>

          <Link
            to="/fitness/challenges"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-green-500 dark:hover:border-green-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">🏆</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Challenges</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Win prizes</p>
          </Link>
        </div>
      </div>

      {/* 🛒 GROCERY & ESSENTIALS */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">🛒 Grocery & Essentials</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Daily needs, delivered fast</p>
          </div>
          <Link to="/grocery" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <Link
            to="/grocery/fast"
            className="p-4 rounded-rez-lg bg-gradient-to-br from-green-500/20 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/10 border border-green-500/30 dark:border-green-500/30 hover:border-green-500/50 dark:hover:border-green-500/50 transition-all active:scale-95"
          >
            <span className="text-3xl mb-2 block">⚡</span>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Quick Delivery</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">10-30 mins</p>
            <div className="text-xs font-semibold text-green-600 dark:text-green-400">5% instant cashback</div>
          </Link>

          <Link
            to="/grocery/stores"
            className="p-4 rounded-rez-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/10 border border-blue-500/30 dark:border-blue-500/30 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all active:scale-95"
          >
            <span className="text-3xl mb-2 block">🏪</span>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Stores</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">Big Bazaar, More</p>
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">10% cashback</div>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Link
            to="/grocery/deals"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-green-500 dark:hover:border-green-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">🔥</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Deals</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Daily offers</p>
          </Link>

          <Link
            to="/grocery/compare"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">⚖️</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Compare</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Best prices</p>
          </Link>

          <Link
            to="/grocery/products"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-teal-500 dark:hover:border-teal-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">📦</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Browse</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">All products</p>
          </Link>
        </div>
      </div>

      {/* ⚕️ HEALTHCARE */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">⚕️ Healthcare</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Your health, our priority</p>
          </div>
          <Link to="/healthcare" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <Link
            to="/healthcare/doctors"
            className="p-4 rounded-rez-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/10 border border-blue-500/30 dark:border-blue-500/30 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all active:scale-95"
          >
            <span className="text-3xl mb-2 block">👨‍⚕️</span>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Doctors</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">Book appointments</p>
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">Instant booking</div>
          </Link>

          <Link
            to="/healthcare/pharmacy"
            className="p-4 rounded-rez-lg bg-gradient-to-br from-green-500/20 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/10 border border-green-500/30 dark:border-green-500/30 hover:border-green-500/50 dark:hover:border-green-500/50 transition-all active:scale-95"
          >
            <span className="text-3xl mb-2 block">💊</span>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Pharmacy</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">Order medicines</p>
            <div className="text-xs font-semibold text-green-600 dark:text-green-400">25% off</div>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Link
            to="/healthcare/diagnostics"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">🔬</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Lab Tests</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Home service</p>
          </Link>

          <Link
            to="/healthcare/dental"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-teal-500 dark:hover:border-teal-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">🦷</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Dental</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Specialists</p>
          </Link>

          <Link
            to="/healthcare/emergency"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-red-500 dark:hover:border-red-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">🚑</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Emergency</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">24x7</p>
          </Link>
        </div>
      </div>

      {/* 🏠 HOME SERVICES */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">🏠 Home Services</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Professional help at home</p>
          </div>
          <Link to="/home-services" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <Link
            to="/home-services/popular"
            className="p-4 rounded-rez-lg bg-gradient-to-br from-amber-500/20 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/10 border border-amber-500/30 dark:border-amber-500/30 hover:border-amber-500/50 dark:hover:border-amber-500/50 transition-all active:scale-95"
          >
            <span className="text-3xl mb-2 block">🔧</span>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Repairs</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">AC, plumbing, electric</p>
            <div className="text-xs font-semibold text-amber-600 dark:text-amber-400">Same day service</div>
          </Link>

          <Link
            to="/home-services/cleaning"
            className="p-4 rounded-rez-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/10 border border-blue-500/30 dark:border-blue-500/30 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all active:scale-95"
          >
            <span className="text-3xl mb-2 block">🧹</span>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Cleaning</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">Deep clean, pest control</p>
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">Book now</div>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Link
            to="/home-services/painting"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-amber-500 dark:hover:border-amber-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">🎨</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Painting</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Interior</p>
          </Link>

          <Link
            to="/home-services/available-today"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-green-500 dark:hover:border-green-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">⚡</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Today</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Available</p>
          </Link>

          <Link
            to="/home-services/providers"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">👨‍🔧</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Providers</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Verified</p>
          </Link>
        </div>
      </div>

      {/* 💳 FINANCIAL SERVICES */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">💳 Financial Services</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Pay bills, recharge & more</p>
          </div>
          <Link to="/financial" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <Link
            to="/financial/bills"
            className="p-4 rounded-rez-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/10 border border-indigo-500/30 dark:border-indigo-500/30 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all active:scale-95"
          >
            <span className="text-3xl mb-2 block">📝</span>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Pay Bills</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">Electricity, water, gas</p>
            <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">Earn cashback</div>
          </Link>

          <Link
            to="/financial/ott"
            className="p-4 rounded-rez-lg bg-gradient-to-br from-purple-500/20 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/10 border border-purple-500/30 dark:border-purple-500/30 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all active:scale-95"
          >
            <span className="text-3xl mb-2 block">📺</span>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">OTT Plans</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">Netflix, Prime, Disney+</p>
            <div className="text-xs font-semibold text-purple-600 dark:text-purple-400">Special prices</div>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Link
            to="/financial/recharge"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">📱</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Recharge</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Mobile, DTH</p>
          </Link>

          <Link
            to="/financial/gold"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">🪙</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Gold</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Digital gold</p>
          </Link>

          <Link
            to="/financial/offers"
            className="p-3 rounded-rez-lg bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-green-500 dark:hover:border-green-500 transition-all active:scale-95"
          >
            <span className="text-xl mb-1 block">🎁</span>
            <p className="text-xs font-semibold text-rez-navy dark:text-white mb-0.5">Offers</p>
            <p className="text-[10px] text-rez-gray-500 dark:text-gray-400">Cashback</p>
          </Link>
        </div>
      </div>

      {/* ✈️ TRAVEL */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">✈️ Travel</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Book trips, save big</p>
          </div>
          <Link to="/travel" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/travel"
            className="p-4 rounded-rez-lg bg-gradient-to-br from-sky-500/20 to-blue-500/10 dark:from-sky-500/20 dark:to-blue-500/10 border border-sky-500/30 dark:border-sky-500/30 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition-all active:scale-95"
          >
            <span className="text-3xl mb-2 block">✈️</span>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Flights</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">Domestic & international</p>
            <div className="text-xs font-semibold text-sky-600 dark:text-sky-400">Best prices guaranteed</div>
          </Link>

          <Link
            to="/travel"
            className="p-4 rounded-rez-lg bg-gradient-to-br from-green-500/20 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/10 border border-green-500/30 dark:border-green-500/30 hover:border-green-500/50 dark:hover:border-green-500/50 transition-all active:scale-95"
          >
            <span className="text-3xl mb-2 block">🏨</span>
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">Hotels</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">Luxury to budget</p>
            <div className="text-xs font-semibold text-green-600 dark:text-green-400">Up to 50% off</div>
          </Link>
        </div>
      </div>

      {/* 6️⃣ HOW ReZ WORKS */}
      <HowRezWorks />

      {/* 7️⃣ DEAL STORE PREVIEW */}
      <DealStorePreview />

      {/* 💥 EXCITING DEALS SECTION */}
      <ExcitingDealsSection />

      {/* 🛍️ SHOP BY EXPERIENCE */}
      <ShopByExperience />

      {/* 8️⃣ ReZ WALLET PREVIEW */}
      <WalletPreview />

      {/* 🏆 LOYALTY & REWARDS HUB */}
      <div className="px-4 mb-6">
        <Link
          to="/loyalty-rewards"
          className="block p-6 rounded-rez-2xl bg-gradient-to-r from-rez-green-500/20 via-rez-gold/20 to-purple-500/20 dark:from-emerald-500/20 dark:via-amber-500/20 dark:to-purple-500/20 border border-rez-green-500/30 dark:border-emerald-500/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-rez-lg bg-gradient-to-br from-rez-green-500/30 to-rez-gold/30 dark:from-emerald-500/30 dark:to-amber-500/30 flex items-center justify-center">
              <span className="text-3xl">🏆</span>
            </div>
            <div className="flex-1">
              <h3 className="text-h4 font-poppins text-rez-navy dark:text-white">Loyalty & Rewards Hub</h3>
              <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">Your progress with every brand</p>
            </div>
            <span className="text-rez-green-500 dark:text-emerald-400 text-button font-poppins">View →</span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <div className="p-3 rounded-rez-md bg-rez-gray-100 dark:bg-white/10 text-center">
              <p className="text-h3 font-poppins text-rez-navy dark:text-white">7</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-1">Active Brands</p>
            </div>
            <div className="p-3 rounded-rez-md bg-rez-gray-100 dark:bg-white/10 text-center">
              <p className="text-h3 font-poppins text-rez-warning dark:text-orange-400">4</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-1">Streaks</p>
            </div>
            <div className="p-3 rounded-rez-md bg-rez-gray-100 dark:bg-white/10 text-center">
              <p className="text-h3 font-poppins text-rez-gold dark:text-amber-400">12</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-1">Unlocked</p>
            </div>
            <div className="p-3 rounded-rez-md bg-rez-gray-100 dark:bg-white/10 text-center">
              <p className="text-h3 font-poppins text-purple-500 dark:text-purple-400">3</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-1">Tiers</p>
            </div>
          </div>
        </Link>
      </div>

      {/* 🔥 DEMO: NEW FEATURES */}
      <div className="px-4 mb-6 space-y-3">
        <Link
          to="/product/sony-headphones"
          className="block p-6 rounded-rez-2xl bg-gradient-to-br from-purple-500/20 to-blue-600/10 dark:from-purple-500/20 dark:to-blue-600/10 border border-purple-500/30 dark:border-purple-500/30"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🎧</span>
            <div>
              <p className="text-h4 font-poppins text-rez-navy dark:text-white">🔥 Try Lock Product Feature</p>
              <p className="text-body-sm text-rez-gray-700 dark:text-gray-300">Lock price, visit store or get delivered</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">Sony WH-1000XM5</p>
              <p className="text-rez-green-500 dark:text-emerald-400 text-button font-poppins">Save ₹5,000 + Earn 2,499 coins</p>
            </div>
            <span className="text-button text-purple-500 dark:text-purple-400 font-poppins">Try Now →</span>
          </div>
        </Link>

        <Link
          to="/booking/hair-spa"
          className="block p-6 rounded-rez-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/10 dark:from-pink-500/20 dark:to-purple-600/10 border border-pink-500/30 dark:border-pink-500/30"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">💇‍♀️</span>
            <div>
              <p className="text-h4 font-poppins text-rez-navy dark:text-white">✨ Try Service Booking</p>
              <p className="text-body-sm text-rez-gray-700 dark:text-gray-300">Choose date, time & professional</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">Hair Spa (Keratin Treatment)</p>
              <p className="text-rez-green-500 dark:text-emerald-400 text-button font-poppins">Save ₹1,000 + Earn 250 coins</p>
            </div>
            <span className="text-button text-pink-500 dark:text-pink-400 font-poppins">Book Now →</span>
          </div>
        </Link>
      </div>

      {/* 🎯 PERSONALIZED FOR YOU */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">🎯 Picked For You</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Based on your shopping history</p>
          </div>
          <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30">
            <span className="text-xs font-semibold text-purple-400">AI Powered</span>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {[
            { id: 1, name: 'Noise Smart Watch', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', price: 2999, match: 95, reason: 'You viewed similar' },
            { id: 2, name: 'Boat Earbuds', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400', price: 1499, match: 92, reason: 'Trending in Electronics' },
            { id: 3, name: 'Adidas Running Shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', price: 4999, match: 88, reason: 'Based on Fitness activity' }
          ].map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="flex-shrink-0 w-52 p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 hover:border-purple-500 transition-all active:scale-95"
            >
              <div className="relative mb-3">
                <img src={item.image} alt={item.name} className="w-full h-36 object-cover rounded-xl" />
                <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-purple-500 text-white text-xs font-bold">
                  {item.match}% match
                </div>
              </div>
              <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">{item.name}</h3>
              <p className="text-xs text-purple-400 mb-2">{item.reason}</p>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-rez-navy dark:text-white">₹{item.price.toLocaleString()}</span>
                <span className="text-xs text-emerald-500 font-semibold">Save 40%</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 👥 FRIENDS ARE SHOPPING */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">👥 Friends Are Shopping</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">See what your friends bought</p>
          </div>
          <Link to="/explore/friends" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">See All →</Link>
        </div>

        <div className="space-y-3">
          {[
            { friend: 'Priya', avatar: '👩', item: 'bought Nike Air Max', store: 'SportZone', time: '2 hours ago', saved: 2000 },
            { friend: 'Rahul', avatar: '👨', item: 'booked Hair Spa', store: 'Glowzy Salon', time: '5 hours ago', saved: 800 },
            { friend: 'Anita', avatar: '👩', item: 'ordered Pizza', store: 'Dominos', time: '1 day ago', saved: 150 }
          ].map((activity, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-pink-500 dark:hover:border-pink-500 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 flex items-center justify-center text-2xl">
                  {activity.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-rez-navy dark:text-white mb-1">
                    <span className="text-pink-500">{activity.friend}</span> {activity.item}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-rez-gray-600 dark:text-gray-400">
                    <span>{activity.store}</span>
                    <span>•</span>
                    <span>{activity.time}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Saved</p>
                  <p className="text-sm font-bold text-emerald-500">₹{activity.saved}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📍 STORES NEAR YOU - LIVE */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">📍 Stores Near You</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Within 2km • Live availability</p>
          </div>
          <Link to="/explore/map" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">Map View →</Link>
        </div>

        <div className="space-y-3">
          {[
            { name: 'Starbucks Indiranagar', distance: '300m', status: 'Open', waitTime: '5 min', cashback: '15%', live: true },
            { name: 'Zara MG Road', distance: '800m', status: 'Open', waitTime: 'No wait', cashback: '20%', live: true },
            { name: 'BigBasket Express', distance: '1.2km', status: 'Closing soon', waitTime: '15 min', cashback: '10%', live: false }
          ].map((store, idx) => (
            <Link
              key={idx}
              to={`/store/${idx}`}
              className="block p-4 rounded-2xl bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all active:scale-98"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-rez-navy dark:text-white">{store.name}</h3>
                  {store.live && (
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-xs font-semibold text-emerald-400">Live</span>
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold text-blue-400">{store.distance}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className={`font-semibold ${store.status === 'Open' ? 'text-emerald-500' : 'text-orange-400'}`}>
                    {store.status}
                  </span>
                  <span className="text-rez-gray-600 dark:text-gray-400">Wait: {store.waitTime}</span>
                </div>
                <span className="font-semibold text-emerald-500">{store.cashback} cashback</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 🏷️ FEATURED BRANDS & PARTNERSHIPS */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">🏷️ Brand Partnerships</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Exclusive deals on top brands</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { brand: 'Nike', logo: '👟', deal: 'Up to 50% off', color: 'from-orange-500/20 to-red-500/10' },
            { brand: 'Apple', logo: '🍎', deal: '₹10k cashback', color: 'from-blue-500/20 to-purple-500/10' },
            { brand: 'Starbucks', logo: '☕', deal: 'Buy 1 Get 1', color: 'from-green-500/20 to-emerald-500/10' },
            { brand: 'Zara', logo: '👗', deal: 'Extra 20% off', color: 'from-pink-500/20 to-purple-500/10' },
            { brand: 'Samsung', logo: '📱', deal: '₹15k off TVs', color: 'from-blue-500/20 to-cyan-500/10' },
            { brand: 'Dominos', logo: '🍕', deal: '50% on 2nd', color: 'from-red-500/20 to-orange-500/10' }
          ].map((brand, idx) => (
            <Link
              key={idx}
              to={`/brand/${brand.brand.toLowerCase()}`}
              className={`p-4 rounded-2xl bg-gradient-to-br ${brand.color} border border-white/20 hover:border-white/40 transition-all active:scale-95`}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">{brand.logo}</div>
                <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">{brand.brand}</h3>
                <p className="text-xs text-rez-gray-700 dark:text-gray-300 font-semibold">{brand.deal}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 9️⃣ STORE & DISCOVERY SECTIONS */}
      <StoreDiscovery />

      {/* 🔟 UGC / SOCIAL PROOF */}
      <HomeReels />

      {/* 1️⃣1️⃣ STREAKS & GAMIFICATION */}
      <StreaksGamification />

      {/* 1️⃣2️⃣ PEOPLE NEAR YOU ARE EARNING */}
      <LiveActivityFeed />

      {/* Vibe-based indicator */}
      {vibe && (
        <div className="mx-4 mb-4 p-4 rounded-rez-lg bg-purple-500/10 dark:bg-purple-500/10 border border-purple-500/20 dark:border-purple-500/20">
          <p className="text-body-sm text-purple-600 dark:text-purple-300">
            ✨ Showing picks that match your <strong>{vibe}</strong> vibe
          </p>
        </div>
      )}

      {/* Mode-specific filters indicator */}
      {(filters.halal || filters.vegan || filters.vegetarian) && (
        <div className="mx-4 mb-4 p-3 rounded-rez-md bg-rez-green-500/10 dark:bg-emerald-500/10 border border-rez-green-500/20 dark:border-emerald-500/20">
          <p className="text-caption text-rez-green-700 dark:text-emerald-300">
            🌿 Filtering for:
            {filters.halal && ' Halal'}
            {filters.vegan && ' Vegan'}
            {filters.vegetarian && ' Vegetarian'}
          </p>
        </div>
      )}

      {/* 1️⃣3️⃣ FLOATING CTA */}
      <FloatingScanButton />

      {/* Live Chat Support */}
      <LiveChatWidget position="bottom-right" />

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

export default Home;
