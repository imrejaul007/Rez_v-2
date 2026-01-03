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
          className="block relative group"
        >
          {/* Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>

          {/* Main Card */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 dark:from-emerald-600 dark:via-teal-600 dark:to-cyan-700"></div>

            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>

            {/* Content */}
            <div className="relative p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Icon with Glow */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/40 rounded-2xl blur-lg"></div>
                    <div className="relative w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl">
                      <span className="text-4xl">💳</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                      Pay in Store
                      <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-[10px] font-bold border border-white/30">
                        NEW
                      </span>
                    </h3>
                    <p className="text-sm text-white/90 font-medium">Scan QR & earn instant rewards</p>
                  </div>
                </div>

                {/* Arrow with Animation */}
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all">
                  <span className="text-white text-xl">→</span>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-3 gap-2">
                {/* Cashback */}
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-xl blur"></div>
                  <div className="relative p-3 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 text-center transform group-hover:scale-105 transition-transform">
                    <div className="w-8 h-8 mx-auto mb-1.5 rounded-full bg-emerald-400/30 flex items-center justify-center">
                      <span className="text-lg">💰</span>
                    </div>
                    <p className="text-xl font-bold text-white mb-0.5">10%</p>
                    <p className="text-[10px] text-white/80 font-semibold">Cashback</p>
                  </div>
                </div>

                {/* Earn Coins */}
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-xl blur"></div>
                  <div className="relative p-3 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 text-center transform group-hover:scale-105 transition-transform delay-75">
                    <div className="w-8 h-8 mx-auto mb-1.5 rounded-full bg-amber-400/30 flex items-center justify-center">
                      <span className="text-lg">🪙</span>
                    </div>
                    <p className="text-xl font-bold text-white mb-0.5">2x</p>
                    <p className="text-[10px] text-white/80 font-semibold">Earn Coins</p>
                  </div>
                </div>

                {/* Instant */}
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-xl blur"></div>
                  <div className="relative p-3 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 text-center transform group-hover:scale-105 transition-transform delay-150">
                    <div className="w-8 h-8 mx-auto mb-1.5 rounded-full bg-yellow-400/30 flex items-center justify-center">
                      <span className="text-lg">⚡</span>
                    </div>
                    <p className="text-xl font-bold text-white mb-0.5">1s</p>
                    <p className="text-[10px] text-white/80 font-semibold">Instant</p>
                  </div>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
                <p className="text-xs text-white/70 font-semibold">Accepted at 10,000+ stores</p>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20"></div>
              </div>
            </div>

            {/* Animated Orbs */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

      {/* 💰 EARN REZ COINS - FEATURED EARNING WAYS (Bento Box Layout) */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">💰 Earn ReZ Coins</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Multiple ways to earn rewards</p>
          </div>
          <Link to="/earn" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        {/* Bento Box Grid - Asymmetric Layout */}
        <div className="grid grid-cols-4 grid-rows-4 gap-3 h-[400px]">
          {/* Large: Online Shopping - Takes 2x2 */}
          <Link
            to="/cash-store"
            className="col-span-2 row-span-2 relative group rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 dark:from-emerald-600 dark:via-green-600 dark:to-teal-700"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
            <div className="relative p-5 h-full flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <span className="text-5xl">🛍️</span>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold text-white border border-white/30">
                  Most Popular
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Online Shopping</h3>
                <p className="text-sm text-white/90 mb-3">2500+ brands • Up to 25% cashback</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30">
                  <span className="text-xs font-bold text-white">₹2,500 avg/month</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Medium: Pay in Store - Takes 2x1 */}
          <Link
            to="/pay-in-store"
            className="col-span-2 row-span-1 relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="relative p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💳</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-white mb-1">Pay in Store</h3>
                <p className="text-xs text-white/80">QR scan • Instant rewards</p>
              </div>
              <span className="text-white text-xl group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* Small: Play Games */}
          <Link
            to="/earn/play"
            className="col-span-1 row-span-1 p-4 rounded-2xl bg-gradient-to-br from-orange-500/30 to-red-500/20 dark:from-orange-500/30 dark:to-red-500/20 border-2 border-orange-500/40 dark:border-orange-500/40 hover:border-orange-500 dark:hover:border-orange-500 transition-all group"
          >
            <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">🎮</span>
            <p className="text-xs font-bold text-rez-navy dark:text-white">Play Games</p>
          </Link>

          {/* Small: Refer Friends */}
          <Link
            to="/earn/refer"
            className="col-span-1 row-span-1 p-4 rounded-2xl bg-gradient-to-br from-pink-500/30 to-purple-500/20 dark:from-pink-500/30 dark:to-purple-500/20 border-2 border-pink-500/40 dark:border-pink-500/40 hover:border-pink-500 dark:hover:border-pink-500 transition-all group"
          >
            <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">👥</span>
            <p className="text-xs font-bold text-rez-navy dark:text-white">Refer</p>
          </Link>

          {/* Medium: Social Impact - Takes 2x1 */}
          <Link
            to="/earn/social-impact"
            className="col-span-2 row-span-1 relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-purple-600 dark:to-indigo-600"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🤝</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-white mb-1">Social Impact</h3>
                <p className="text-xs text-white/80">CSR events • Dual rewards</p>
              </div>
            </div>
          </Link>

          {/* Small: Surveys */}
          <Link
            to="/earn/surveys"
            className="col-span-1 row-span-1 p-4 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-blue-500/20 dark:from-indigo-500/30 dark:to-blue-500/20 border-2 border-indigo-500/40 dark:border-indigo-500/40 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all group"
          >
            <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">📋</span>
            <p className="text-xs font-bold text-rez-navy dark:text-white">Surveys</p>
          </Link>

          {/* Small: Reviews */}
          <Link
            to="/earn/reviews"
            className="col-span-1 row-span-1 p-4 rounded-2xl bg-gradient-to-br from-amber-500/30 to-yellow-500/20 dark:from-amber-500/30 dark:to-yellow-500/20 border-2 border-amber-500/40 dark:border-amber-500/40 hover:border-amber-500 dark:hover:border-amber-500 transition-all group"
          >
            <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">⭐</span>
            <p className="text-xs font-bold text-rez-navy dark:text-white">Reviews</p>
          </Link>
        </div>
      </div>

      {/* 🎮 PLAY & EARN SECTION */}
      <PlayAndEarnSection />

      {/* 🎉 UGC FEED - NEW ON REZ */}
      <UGCFeedSection />

      {/* ⚡ FLASH SALES - URGENT CARD STYLE */}
      <div className="mb-6">
        <div className="px-4 flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">⚡ Flash Sales</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Ending soon • Limited stock</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-500/30">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-red-400">2h 45m left</span>
          </div>
        </div>

        {/* Horizontal Scroll with Snap */}
        <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-4 pb-2">
          {[
            { id: 1, name: 'iPhone 15 Pro', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400', price: 124999, was: 134900, stock: 3 },
            { id: 2, name: 'Samsung TV 55"', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400', price: 39999, was: 54999, stock: 7 },
            { id: 3, name: 'Nike Air Max', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', price: 5999, was: 12999, stock: 12 }
          ].map((item, idx) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="flex-shrink-0 w-72 snap-center group"
            >
              {/* Outer Urgency Glow */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity"></div>

                {/* Main Card */}
                <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-gray-900 border-2 border-red-500/40">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                    {/* Discount Badge - Top Right */}
                    <div className="absolute top-3 right-3">
                      <div className="relative">
                        <div className="absolute inset-0 bg-red-500 rounded-full blur"></div>
                        <div className="relative px-3 py-1.5 rounded-full bg-red-500 text-white text-sm font-black shadow-2xl">
                          {Math.round(((item.was - item.price) / item.was) * 100)}% OFF
                        </div>
                      </div>
                    </div>

                    {/* Stock Warning - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                            style={{ width: `${(item.stock / 15) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-bold text-white">Only {item.stock} left!</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 bg-white dark:bg-gray-900">
                    <h3 className="text-base font-bold text-rez-navy dark:text-white mb-3 line-clamp-1">{item.name}</h3>

                    {/* Price Row */}
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl font-black bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
                        ₹{item.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-rez-gray-500 dark:text-gray-500 line-through">₹{item.was.toLocaleString()}</span>
                    </div>

                    {/* Savings & Coins */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                          Save ₹{(item.was - item.price).toLocaleString()}
                        </p>
                      </div>
                      <div className="px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30">
                        <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold whitespace-nowrap">
                          🪙 {Math.round(item.price * 0.1)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 🔥 TRENDING NEAR YOU - SPLIT HERO + GRID */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">🔥 Trending Near You</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Popular in your area</p>
          </div>
          <Link to="/explore/trending" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        {/* Hero + Small Grid Split Layout */}
        <div className="grid grid-cols-2 gap-3">
          {/* Large Featured Card - Takes Full Left Column */}
          <Link
            to="/store/1"
            className="relative row-span-2 rounded-3xl overflow-hidden group"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400"
                alt="Starbucks Coffee"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>

            {/* Trending Badge */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-xl">
              <span className="text-sm">🔥</span>
              <span className="text-xs font-bold text-white">324 people</span>
            </div>

            {/* Cashback Badge */}
            <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-emerald-500/90 backdrop-blur-sm shadow-xl">
              <span className="text-xs font-bold text-white">15% cashback</span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="mb-2">
                <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold text-white border border-white/30">
                  Food & Dining
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Starbucks Coffee</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-white/90">Earn rewards</span>
                <span className="text-amber-400 text-sm">🪙 Coins</span>
              </div>
            </div>
          </Link>

          {/* Small Cards - Right Column */}
          {[
            { id: 2, name: 'Zara Fashion', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400', category: 'Fashion', trending: '198', cashback: '20%' },
            { id: 3, name: 'Glowzy Salon', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400', category: 'Beauty', trending: '156', cashback: '25%' }
          ].map((item) => (
            <Link
              key={item.id}
              to={`/store/${item.id}`}
              className="relative rounded-2xl overflow-hidden group bg-white dark:bg-gray-900 border border-rez-gray-200 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all"
            >
              {/* Mini Image */}
              <div className="relative h-20 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Trending Count */}
                <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/90 backdrop-blur-sm">
                  <span className="text-xs">🔥</span>
                  <span className="text-xs font-semibold text-white">{item.trending}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">{item.category}</p>
                <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-2 line-clamp-1">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-500">{item.cashback}</span>
                  <span className="text-xs text-amber-400">🪙</span>
                </div>
              </div>
            </Link>
          ))}

          {/* Fourth Item - Full Width at Bottom */}
          <Link
            to="/store/4"
            className="col-span-2 p-4 rounded-2xl bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 border border-orange-500/30 hover:border-orange-500 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400"
                  alt="FitClub Gym"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-bold text-rez-navy dark:text-white">FitClub Gym</h3>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/20">
                    <span className="text-xs">🔥</span>
                    <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">89</span>
                  </span>
                </div>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Fitness</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold text-emerald-500">10% cashback</p>
                <p className="text-xs text-amber-400 mt-1">🪙 Earn coins</p>
              </div>
            </div>
          </Link>
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

      {/* 🎉 EVENTS & EXPERIENCES - MAGAZINE LAYOUT */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">🎉 Events & Experiences</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Book tickets, save money, earn rewards</p>
          </div>
          <Link to="/events" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        {/* Magazine Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-2 h-[320px]">
          {/* Movies - Large vertical */}
          <Link
            to="/events/movies"
            className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800 dark:from-purple-700 dark:via-pink-700 dark:to-purple-900"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <div className="relative h-full p-5 flex flex-col justify-between">
              <div>
                <span className="text-5xl mb-3 block">🎬</span>
                <div className="inline-flex px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                  <span className="text-xs font-bold text-white">Up to 20% off</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Movies</h3>
                <p className="text-sm text-white/80">Latest blockbusters</p>
              </div>
            </div>
          </Link>

          {/* Concerts - Square */}
          <Link
            to="/events/concerts"
            className="row-span-2 relative rounded-2xl overflow-hidden group bg-gradient-to-br from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700"
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer"></div>

            <div className="relative h-full p-4 flex flex-col justify-between">
              <span className="text-3xl">🎤</span>
              <div>
                <h3 className="text-sm font-bold text-white mb-1">Concerts</h3>
                <p className="text-xs text-white/80 mb-2">Live music</p>
                <span className="text-xs font-semibold text-white">2x coins</span>
              </div>
            </div>
          </Link>

          {/* Workshops - Wide */}
          <Link
            to="/events/workshops"
            className="col-span-2 p-3 rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/10 border-2 border-blue-500/30 hover:border-blue-500 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/30 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📚</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-0.5">Workshops</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Learn & grow</p>
              </div>
              <span className="text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* Parks - Small */}
          <Link
            to="/events/parks"
            className="p-3 rounded-2xl bg-gradient-to-br from-green-500/30 to-emerald-500/20 border-2 border-green-500/40 hover:border-green-500 transition-all group"
          >
            <span className="text-2xl mb-1 block group-hover:scale-110 transition-transform">🎢</span>
            <p className="text-xs font-bold text-rez-navy dark:text-white">Parks</p>
          </Link>

          {/* Gaming - Small */}
          <Link
            to="/events/gaming"
            className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/20 border-2 border-purple-500/40 hover:border-purple-500 transition-all group"
          >
            <span className="text-2xl mb-1 block group-hover:scale-110 transition-transform">🎮</span>
            <p className="text-xs font-bold text-rez-navy dark:text-white">Gaming</p>
          </Link>
        </div>
      </div>

      {/* 🛍️ SHOP BY CATEGORY - ICON CARD GRID */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">🛍️ Shop by Category</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Cashback on every purchase</p>
          </div>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* Electronics - Featured Large */}
          <Link
            to="/electronics"
            className="relative col-span-2 p-6 rounded-3xl overflow-hidden group"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 dark:from-blue-600 dark:via-cyan-600 dark:to-blue-700"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_70%)]"></div>

            <div className="relative flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-4xl">📱</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1">Electronics</h3>
                <p className="text-sm text-white/90 mb-2">Phones, laptops, gadgets</p>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-bold text-white">
                    10-15% cashback
                  </span>
                  <span className="text-xs font-semibold text-white/90">+ 2x coins</span>
                </div>
              </div>
              <span className="text-white text-2xl group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </Link>

          {/* Fashion */}
          <Link
            to="/fashion"
            className="relative p-5 rounded-2xl overflow-hidden group bg-gradient-to-br from-pink-500 to-purple-600 dark:from-pink-600 dark:to-purple-700"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-3xl">👗</span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">Fashion</h3>
              <p className="text-xs text-white/80 mb-3">Clothing & accessories</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white">15-25%</span>
                <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-semibold text-white">Trending</span>
              </div>
            </div>
          </Link>

          {/* Food & Dining */}
          <Link
            to="/food"
            className="relative p-5 rounded-2xl overflow-hidden group bg-gradient-to-br from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700"
          >
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🍽️</span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">Food & Dining</h3>
              <p className="text-xs text-white/80 mb-3">Restaurants & cafes</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white">10-20%</span>
                <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-semibold text-white">Popular</span>
              </div>
            </div>
          </Link>
        </div>

        {/* View More Categories - Horizontal Scroll */}
        <Link
          to="/categories"
          className="flex items-center justify-center gap-2 p-4 rounded-2xl border-2 border-dashed border-rez-gray-300 dark:border-white/20 hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-500/5 transition-all group"
        >
          <span className="text-body-sm font-semibold text-rez-gray-600 dark:text-gray-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400">
            View All 15+ Categories
          </span>
          <span className="text-rez-gray-600 dark:text-gray-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* 💄 BEAUTY & WELLNESS - LUXURY SPA INSPIRED */}
      <div className="mb-6">
        <div className="px-4 flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">💄 Beauty & Wellness</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Pamper yourself, save more</p>
          </div>
          <Link to="/beauty" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        {/* Horizontal Scroll Luxury Cards */}
        <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-4 pb-2">
          {/* Salon & Spa - Luxury Card */}
          <Link
            to="/beauty/services"
            className="flex-shrink-0 w-80 snap-center group"
          >
            <div className="relative rounded-3xl overflow-hidden h-52">
              {/* Soft gradient background like makeup palette */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 dark:from-pink-900/30 dark:via-rose-900/20 dark:to-purple-900/30"></div>

              {/* Floating orbs like beauty products */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-300/30 dark:bg-pink-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-rose-300/30 dark:bg-rose-500/20 rounded-full blur-3xl"></div>

              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-white/40 dark:border-white/20 flex items-center justify-center shadow-xl">
                    <span className="text-4xl">💆</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-pink-500/20 backdrop-blur-sm border border-pink-500/30">
                    <span className="text-xs font-bold text-pink-700 dark:text-pink-300">30% OFF</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Salon & Spa</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Hair, nails, skin treatments</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-gradient-to-r from-pink-300 to-transparent dark:from-pink-500/30"></div>
                    <span className="text-xs font-semibold text-pink-600 dark:text-pink-400">350+ Partners</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Beauty Products - Cosmetic Inspired */}
          <Link
            to="/beauty/products"
            className="flex-shrink-0 w-80 snap-center group"
          >
            <div className="relative rounded-3xl overflow-hidden h-52">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-fuchsia-100 dark:from-purple-900/30 dark:via-pink-900/20 dark:to-fuchsia-900/30"></div>

              <div className="absolute top-0 left-1/2 w-40 h-40 bg-purple-300/30 dark:bg-purple-500/20 rounded-full blur-3xl"></div>

              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-white/40 dark:border-white/20 flex items-center justify-center shadow-xl">
                    <span className="text-4xl">💄</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30">
                    <span className="text-xs font-bold text-purple-700 dark:text-purple-300">20% CASHBACK</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Beauty Products</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Makeup, skincare, fragrances</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded-full bg-purple-200/50 dark:bg-purple-500/20 text-xs font-semibold text-purple-700 dark:text-purple-300">
                      Top Brands
                    </span>
                    <span className="px-2 py-1 rounded-full bg-pink-200/50 dark:bg-pink-500/20 text-xs font-semibold text-pink-700 dark:text-pink-300">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Clinics - Medical Aesthetic */}
          <Link
            to="/beauty/clinics"
            className="flex-shrink-0 w-80 snap-center group"
          >
            <div className="relative rounded-3xl overflow-hidden h-52">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-red-50 to-pink-100 dark:from-rose-900/30 dark:via-red-900/20 dark:to-pink-900/30"></div>

              <div className="absolute bottom-0 right-0 w-36 h-36 bg-rose-300/30 dark:bg-rose-500/20 rounded-full blur-3xl"></div>

              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-white/40 dark:border-white/20 flex items-center justify-center shadow-xl">
                    <span className="text-4xl">🏥</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Aesthetic Clinics</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">Dermatology & skin treatments</p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-400">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                    Expert Specialists
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* 💪 FITNESS & SPORTS - ATHLETIC ENERGY DESIGN */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">💪 Fitness & Sports</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Get fit, get rewards</p>
          </div>
          <Link to="/fitness" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        {/* Dynamic Athletic Grid */}
        <div className="grid grid-cols-6 gap-3 h-[260px]">
          {/* Gyms - Large Energetic */}
          <Link
            to="/fitness/gyms"
            className="col-span-4 relative rounded-3xl overflow-hidden group"
          >
            {/* Athletic gradient with diagonal stripes */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 dark:from-orange-600 dark:via-red-600 dark:to-orange-700"></div>
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.3) 35px, rgba(255,255,255,.3) 70px)'
            }}></div>

            <div className="relative h-full p-5 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-4xl">🏋️</span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/40">
                  <span className="text-xs font-black text-white">15% OFF</span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">GYMS</h3>
                <p className="text-sm text-white/90 mb-3 font-semibold">Premium equipment • Expert trainers</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold text-white">
                    200+ Locations
                  </span>
                </div>
              </div>
            </div>

            {/* Animated energy pulse */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          </Link>

          {/* Studios - Zen Style */}
          <Link
            to="/fitness/studios"
            className="col-span-2 relative rounded-2xl overflow-hidden group bg-gradient-to-br from-emerald-400 to-green-600 dark:from-emerald-500 dark:to-green-700"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_70%)]"></div>

            <div className="relative h-full p-4 flex flex-col justify-between">
              <span className="text-3xl">🧘</span>

              <div>
                <h3 className="text-base font-bold text-white mb-1">Studios</h3>
                <p className="text-xs text-white/90 mb-2">Yoga • Dance</p>
                <span className="text-xs font-semibold text-white/80">Book Now</span>
              </div>
            </div>
          </Link>

          {/* Bottom Row - Three Cards */}
          <Link
            to="/fitness/trainers"
            className="col-span-2 p-4 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/10 border-2 border-red-500/30 hover:border-red-500 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-rez-navy dark:text-white">Personal Trainers</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">1-on-1</p>
              </div>
            </div>
          </Link>

          <Link
            to="/fitness/store"
            className="col-span-2 p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border-2 border-blue-500/30 hover:border-blue-500 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <span className="text-2xl">👟</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-rez-navy dark:text-white">Sports Store</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Gear up</p>
              </div>
            </div>
          </Link>

          <Link
            to="/fitness/challenges"
            className="col-span-2 p-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/10 border-2 border-yellow-500/30 hover:border-yellow-500 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-rez-navy dark:text-white">Challenges</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Win big</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* 🛒 GROCERY & ESSENTIALS - Fresh Market Style */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">🛒 Grocery & Essentials</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Daily needs, delivered fast</p>
          </div>
          <Link to="/grocery" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        {/* Fresh Market Grid with Category Icons */}
        <div className="grid grid-cols-4 gap-3 mb-3">
          {/* Quick Delivery - Hero Card (takes 2 columns, 2 rows) */}
          <Link
            to="/grocery/fast"
            className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group"
          >
            {/* Fresh Green Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600 dark:from-lime-500/90 dark:via-green-600/90 dark:to-emerald-700/90"></div>

            {/* Fresh Produce Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 10%, transparent 10%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 8%, transparent 8%)'
            }}></div>

            {/* Speed Lines */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative h-full flex flex-col justify-between p-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/30 dark:bg-white/20 backdrop-blur-sm mb-3">
                  <span className="text-xs font-bold text-white">⚡ 10-30 MIN</span>
                </div>
                <h3 className="text-xl font-black text-white mb-1">QUICK<br/>DELIVERY</h3>
                <p className="text-xs text-white/90 font-medium">Groceries at your doorstep</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">5% Cashback</span>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🥬</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Fresh Fruits */}
          <Link
            to="/grocery/fruits"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/40 dark:to-yellow-900/40"></div>
            <div className="relative p-4 h-full flex flex-col items-center justify-center">
              <span className="text-3xl mb-2">🍎</span>
              <p className="text-xs font-bold text-orange-900 dark:text-orange-300 text-center">Fruits</p>
            </div>
          </Link>

          {/* Vegetables */}
          <Link
            to="/grocery/vegetables"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-lime-100 dark:from-green-900/40 dark:to-lime-900/40"></div>
            <div className="relative p-4 h-full flex flex-col items-center justify-center">
              <span className="text-3xl mb-2">🥕</span>
              <p className="text-xs font-bold text-green-900 dark:text-green-300 text-center">Veggies</p>
            </div>
          </Link>

          {/* Dairy */}
          <Link
            to="/grocery/dairy"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30"></div>
            <div className="relative p-4 h-full flex flex-col items-center justify-center">
              <span className="text-3xl mb-2">🥛</span>
              <p className="text-xs font-bold text-blue-900 dark:text-blue-300 text-center">Dairy</p>
            </div>
          </Link>

          {/* Snacks */}
          <Link
            to="/grocery/snacks"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40"></div>
            <div className="relative p-4 h-full flex flex-col items-center justify-center">
              <span className="text-3xl mb-2">🍪</span>
              <p className="text-xs font-bold text-amber-900 dark:text-amber-300 text-center">Snacks</p>
            </div>
          </Link>
        </div>

        {/* Bottom Quick Actions */}
        <div className="grid grid-cols-3 gap-2">
          <Link
            to="/grocery/deals"
            className="p-3 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 dark:from-red-500/20 dark:to-orange-500/20 border border-red-500/30 dark:border-red-500/40 hover:scale-105 transition-transform active:scale-95"
          >
            <span className="text-xl mb-1 block">🔥</span>
            <p className="text-xs font-bold text-red-700 dark:text-red-400 mb-0.5">Hot Deals</p>
            <p className="text-[10px] text-red-600 dark:text-red-500">Save more</p>
          </Link>

          <Link
            to="/grocery/compare"
            className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-500/30 dark:border-blue-500/40 hover:scale-105 transition-transform active:scale-95"
          >
            <span className="text-xl mb-1 block">⚖️</span>
            <p className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-0.5">Compare</p>
            <p className="text-[10px] text-blue-600 dark:text-blue-500">Best price</p>
          </Link>

          <Link
            to="/grocery/stores"
            className="p-3 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 border border-green-500/30 dark:border-green-500/40 hover:scale-105 transition-transform active:scale-95"
          >
            <span className="text-xl mb-1 block">🏪</span>
            <p className="text-xs font-bold text-green-700 dark:text-green-400 mb-0.5">Stores</p>
            <p className="text-[10px] text-green-600 dark:text-green-500">Big Bazaar+</p>
          </Link>
        </div>
      </div>

      {/* ⚕️ HEALTHCARE - Medical/Clinical Design */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">⚕️ Healthcare</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Your health, our priority</p>
          </div>
          <Link to="/healthcare" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        {/* Clean Medical Grid */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* Doctors - Primary Medical Blue */}
          <Link
            to="/healthcare/doctors"
            className="relative rounded-3xl overflow-hidden group"
          >
            {/* Clean Medical Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 dark:from-blue-600/90 dark:via-blue-700/90 dark:to-cyan-700/90"></div>

            {/* Medical Cross Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.3) 20px, rgba(255,255,255,0.3) 22px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.3) 20px, rgba(255,255,255,0.3) 22px)'
            }}></div>

            {/* Pulse Effect */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
              <div className="h-full bg-white/80 animate-pulse" style={{ width: '40%' }}></div>
            </div>

            <div className="relative p-5">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-3xl">👨‍⚕️</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Consult Doctors</h3>
              <p className="text-xs text-white/90 mb-3">Book instant appointments</p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                <span className="text-xs font-bold text-white">24/7 Available</span>
              </div>
            </div>
          </Link>

          {/* Pharmacy - Medicinal Green */}
          <Link
            to="/healthcare/pharmacy"
            className="relative rounded-3xl overflow-hidden group"
          >
            {/* Pharmacy Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-emerald-600 to-green-600 dark:from-teal-600/90 dark:via-emerald-700/90 dark:to-green-700/90"></div>

            {/* Pill Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 5%, transparent 5%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.4) 4%, transparent 4%)'
            }}></div>

            {/* Shine Effect */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

            <div className="relative p-5">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-3xl">💊</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Online Pharmacy</h3>
              <p className="text-xs text-white/90 mb-3">Order medicines online</p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                <span className="text-xs font-bold text-white">25% OFF</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Medical Services Row */}
        <div className="grid grid-cols-4 gap-2">
          {/* Lab Tests */}
          <Link
            to="/healthcare/diagnostics"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/30"></div>
            <div className="relative p-3 flex flex-col items-center justify-center h-full">
              <span className="text-2xl mb-1.5">🔬</span>
              <p className="text-[10px] font-bold text-indigo-900 dark:text-indigo-300 text-center leading-tight">Lab<br/>Tests</p>
            </div>
          </Link>

          {/* Dental */}
          <Link
            to="/healthcare/dental"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-teal-100 dark:from-cyan-900/30 dark:to-teal-900/30"></div>
            <div className="relative p-3 flex flex-col items-center justify-center h-full">
              <span className="text-2xl mb-1.5">🦷</span>
              <p className="text-[10px] font-bold text-cyan-900 dark:text-cyan-300 text-center leading-tight">Dental<br/>Care</p>
            </div>
          </Link>

          {/* Emergency */}
          <Link
            to="/healthcare/emergency"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30"></div>
            <div className="relative p-3 flex flex-col items-center justify-center h-full">
              <span className="text-2xl mb-1.5">🚑</span>
              <p className="text-[10px] font-bold text-red-900 dark:text-red-300 text-center leading-tight">Emergency<br/>24x7</p>
            </div>
          </Link>

          {/* Health Records */}
          <Link
            to="/healthcare/records"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30"></div>
            <div className="relative p-3 flex flex-col items-center justify-center h-full">
              <span className="text-2xl mb-1.5">📋</span>
              <p className="text-[10px] font-bold text-violet-900 dark:text-violet-300 text-center leading-tight">Health<br/>Records</p>
            </div>
          </Link>
        </div>
      </div>

      {/* 🏠 HOME SERVICES - Professional Toolbox Style */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">🏠 Home Services</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Professional help at home</p>
          </div>
          <Link to="/home-services" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        {/* Professional Service Grid */}
        <div className="grid grid-cols-3 gap-3 mb-3">
          {/* Repairs - Large Professional Card (takes 2 columns) */}
          <Link
            to="/home-services/popular"
            className="col-span-2 relative rounded-3xl overflow-hidden group"
          >
            {/* Toolbox Orange Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-amber-600 to-orange-700 dark:from-orange-600/90 dark:via-amber-700/90 dark:to-orange-800/90"></div>

            {/* Tool Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-6 w-8 h-8 border-2 border-white rotate-45"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 border-2 border-white rounded-full"></div>
              <div className="absolute top-12 left-1/3 w-10 h-1 bg-white"></div>
            </div>

            {/* Verified Badge Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/30 rounded-full blur-2xl"></div>

            <div className="relative p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <span className="text-3xl">🔧</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-yellow-400/30 backdrop-blur-sm border border-yellow-400/50">
                  <span className="text-[10px] font-bold text-white">✓ VERIFIED</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">Repair Services</h3>
              <p className="text-xs text-white/90 mb-3">AC • Plumbing • Electrical</p>

              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                  <span className="text-xs font-bold text-white">⚡ Same Day</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                  <span className="text-xs font-bold text-white">10% OFF</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Cleaning - Clean Blue Style */}
          <Link
            to="/home-services/cleaning"
            className="relative rounded-3xl overflow-hidden group"
          >
            {/* Clean Blue Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-cyan-700 dark:from-cyan-600/90 dark:via-blue-700/90 dark:to-cyan-800/90"></div>

            {/* Sparkle Pattern */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.8) 2%, transparent 2%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.6) 1.5%, transparent 1.5%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.7) 1%, transparent 1%)'
            }}></div>

            <div className="relative p-5 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-3xl">🧹</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-1">Deep Clean</h3>
                <p className="text-xs text-white/90 mb-2">Pest control too</p>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                  <span className="text-[10px] font-bold text-white">Book Now</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Service Categories Row */}
        <div className="grid grid-cols-4 gap-2">
          {/* Painting */}
          <Link
            to="/home-services/painting"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30"></div>
            <div className="relative p-3 flex flex-col items-center justify-center h-full">
              <span className="text-2xl mb-1.5">🎨</span>
              <p className="text-[10px] font-bold text-purple-900 dark:text-purple-300 text-center leading-tight">Painting</p>
            </div>
          </Link>

          {/* Carpentry */}
          <Link
            to="/home-services/carpentry"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30"></div>
            <div className="relative p-3 flex flex-col items-center justify-center h-full">
              <span className="text-2xl mb-1.5">🪚</span>
              <p className="text-[10px] font-bold text-amber-900 dark:text-amber-300 text-center leading-tight">Carpentry</p>
            </div>
          </Link>

          {/* Available Today */}
          <Link
            to="/home-services/available-today"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30"></div>
            <div className="relative p-3 flex flex-col items-center justify-center h-full">
              <span className="text-2xl mb-1.5">⚡</span>
              <p className="text-[10px] font-bold text-green-900 dark:text-green-300 text-center leading-tight">Today</p>
            </div>
          </Link>

          {/* Verified Pros */}
          <Link
            to="/home-services/providers"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30"></div>
            <div className="relative p-3 flex flex-col items-center justify-center h-full">
              <span className="text-2xl mb-1.5">👨‍🔧</span>
              <p className="text-[10px] font-bold text-blue-900 dark:text-blue-300 text-center leading-tight">Verified</p>
            </div>
          </Link>
        </div>
      </div>

      {/* 💳 FINANCIAL SERVICES - Banking/Fintech Style */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">💳 Financial Services</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Pay bills, recharge & more</p>
          </div>
          <Link to="/financial" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        {/* Fintech Grid with Card Design */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* Pay Bills - Premium Banking Card */}
          <Link
            to="/financial/bills"
            className="relative rounded-3xl overflow-hidden group"
          >
            {/* Banking Gradient - Dark Blue */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-blue-900 to-indigo-900 dark:from-slate-800/90 dark:via-blue-950/90 dark:to-indigo-950/90"></div>

            {/* Credit Card Chip Pattern */}
            <div className="absolute top-5 right-5 w-12 h-10 rounded-md bg-gradient-to-br from-amber-400/40 to-yellow-500/40 backdrop-blur-sm" style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
            }}></div>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <div className="relative p-5">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💳</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">Pay Bills</h3>
              <p className="text-xs text-white/80 mb-3">Electricity • Water • Gas</p>

              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30">
                  <span className="text-xs font-bold text-emerald-300">3% Cashback</span>
                </div>
                <div className="text-white/60 text-xs font-mono">SECURE</div>
              </div>
            </div>
          </Link>

          {/* OTT Plans - Entertainment Card */}
          <Link
            to="/financial/ott"
            className="relative rounded-3xl overflow-hidden group"
          >
            {/* Entertainment Gradient - Purple/Pink */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-600 dark:from-purple-700/90 dark:via-fuchsia-700/90 dark:to-pink-700/90"></div>

            {/* Play Button Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent"></div>
            </div>

            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-400/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative p-5">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📺</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">OTT Plans</h3>
              <p className="text-xs text-white/80 mb-3">Netflix • Prime • Disney+</p>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                <span className="text-xs font-bold text-white">Special Prices</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Actions Financial Grid */}
        <div className="grid grid-cols-4 gap-2">
          {/* Mobile Recharge */}
          <Link
            to="/financial/recharge"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30"></div>
            <div className="relative p-3 flex flex-col items-center justify-center h-full">
              <span className="text-2xl mb-1.5">📱</span>
              <p className="text-[10px] font-bold text-blue-900 dark:text-blue-300 text-center leading-tight">Recharge</p>
            </div>
          </Link>

          {/* Digital Gold */}
          <Link
            to="/financial/gold"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30"></div>
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-yellow-400 to-amber-400 blur-xl"></div>
            <div className="relative p-3 flex flex-col items-center justify-center h-full">
              <span className="text-2xl mb-1.5">🪙</span>
              <p className="text-[10px] font-bold text-amber-900 dark:text-amber-300 text-center leading-tight">Gold</p>
            </div>
          </Link>

          {/* Insurance */}
          <Link
            to="/financial/insurance"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30"></div>
            <div className="relative p-3 flex flex-col items-center justify-center h-full">
              <span className="text-2xl mb-1.5">🛡️</span>
              <p className="text-[10px] font-bold text-green-900 dark:text-green-300 text-center leading-tight">Insurance</p>
            </div>
          </Link>

          {/* Cashback Offers */}
          <Link
            to="/financial/offers"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30"></div>
            <div className="relative p-3 flex flex-col items-center justify-center h-full">
              <span className="text-2xl mb-1.5">🎁</span>
              <p className="text-[10px] font-bold text-rose-900 dark:text-rose-300 text-center leading-tight">Offers</p>
            </div>
          </Link>
        </div>
      </div>

      {/* ✈️ TRAVEL - Vacation/Journey Aesthetic */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">✈️ Travel</h2>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Book trips, save big</p>
          </div>
          <Link to="/travel" className="text-button text-rez-green-500 dark:text-emerald-400 font-poppins">View All →</Link>
        </div>

        {/* Destination Inspired Grid */}
        <div className="grid grid-cols-3 gap-3 mb-3">
          {/* Flights - Sky Journey (takes 2 columns) */}
          <Link
            to="/travel/flights"
            className="col-span-2 relative rounded-3xl overflow-hidden group"
          >
            {/* Sky Gradient - Dawn to Dusk */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 dark:from-sky-500/90 dark:via-blue-600/90 dark:to-indigo-700/90"></div>

            {/* Cloud Pattern */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(ellipse at 20% 40%, rgba(255,255,255,0.6) 20%, transparent 20%), radial-gradient(ellipse at 60% 60%, rgba(255,255,255,0.5) 15%, transparent 15%), radial-gradient(ellipse at 80% 30%, rgba(255,255,255,0.4) 18%, transparent 18%)'
            }}></div>

            {/* Airplane Trail */}
            <div className="absolute top-6 right-12 w-16 h-0.5 bg-white/40 blur-sm rotate-45"></div>
            <div className="absolute top-6 right-8 w-8 h-0.5 bg-white/60"></div>

            {/* Sun Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300/30 rounded-full blur-3xl"></div>

            <div className="relative p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl">✈️</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm">
                  <span className="text-[10px] font-bold text-white">BEST PRICE</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">Book Flights</h3>
              <p className="text-xs text-white/90 mb-3">Domestic & International</p>

              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                  <span className="text-xs font-bold text-white">Instant Booking</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/30 backdrop-blur-sm">
                  <span className="text-xs font-bold text-white">5% OFF</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Hotels - Luxury Stay */}
          <Link
            to="/travel/hotels"
            className="relative rounded-3xl overflow-hidden group"
          >
            {/* Luxury Hotel Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-600 to-rose-600 dark:from-amber-600/90 dark:via-orange-700/90 dark:to-rose-700/90"></div>

            {/* Window Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 12px, rgba(255,255,255,0.3) 12px, rgba(255,255,255,0.3) 14px), repeating-linear-gradient(0deg, transparent, transparent 12px, rgba(255,255,255,0.3) 12px, rgba(255,255,255,0.3) 14px)'
            }}></div>

            {/* Star Glint */}
            <div className="absolute top-4 right-4 w-3 h-3">
              <div className="absolute inset-0 bg-white rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-white rotate-45 scale-150"></div>
            </div>

            <div className="relative p-5 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-3xl">🏨</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-1">Hotels</h3>
                <p className="text-xs text-white/90 mb-2">Luxury to Budget</p>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                  <span className="text-[10px] font-bold text-white">50% OFF</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Travel Services Row */}
        <div className="grid grid-cols-4 gap-2">
          {/* Train */}
          <Link
            to="/travel/trains"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30"></div>
            <div className="relative p-3 flex flex-col items-center justify-center h-full">
              <span className="text-2xl mb-1.5">🚄</span>
              <p className="text-[10px] font-bold text-green-900 dark:text-green-300 text-center leading-tight">Trains</p>
            </div>
          </Link>

          {/* Bus */}
          <Link
            to="/travel/bus"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30"></div>
            <div className="relative p-3 flex flex-col items-center justify-center h-full">
              <span className="text-2xl mb-1.5">🚌</span>
              <p className="text-[10px] font-bold text-orange-900 dark:text-orange-300 text-center leading-tight">Bus</p>
            </div>
          </Link>

          {/* Cab */}
          <Link
            to="/travel/cab"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30"></div>
            <div className="relative p-3 flex flex-col items-center justify-center h-full">
              <span className="text-2xl mb-1.5">🚕</span>
              <p className="text-[10px] font-bold text-yellow-900 dark:text-yellow-300 text-center leading-tight">Cab</p>
            </div>
          </Link>

          {/* Packages */}
          <Link
            to="/travel/packages"
            className="relative rounded-2xl overflow-hidden group active:scale-95 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30"></div>
            <div className="relative p-3 flex flex-col items-center justify-center h-full">
              <span className="text-2xl mb-1.5">🎒</span>
              <p className="text-[10px] font-bold text-purple-900 dark:text-purple-300 text-center leading-tight">Packages</p>
            </div>
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
            { brand: 'Nike', logo: 'https://logo.clearbit.com/nike.com', deal: 'Up to 50% off', color: 'from-orange-500/20 to-red-500/10' },
            { brand: 'Apple', logo: 'https://logo.clearbit.com/apple.com', deal: '₹10k cashback', color: 'from-blue-500/20 to-purple-500/10' },
            { brand: 'Starbucks', logo: 'https://logo.clearbit.com/starbucks.in', deal: 'Buy 1 Get 1', color: 'from-green-500/20 to-emerald-500/10' },
            { brand: 'Zara', logo: 'https://logo.clearbit.com/zara.com', deal: 'Extra 20% off', color: 'from-pink-500/20 to-purple-500/10' },
            { brand: 'Samsung', logo: 'https://logo.clearbit.com/samsung.com', deal: '₹15k off TVs', color: 'from-blue-500/20 to-cyan-500/10' },
            { brand: 'Dominos', logo: 'https://logo.clearbit.com/dominos.co.in', deal: '50% on 2nd', color: 'from-red-500/20 to-orange-500/10' }
          ].map((brand, idx) => (
            <Link
              key={idx}
              to={`/brand/${brand.brand.toLowerCase()}`}
              className={`p-4 rounded-2xl bg-gradient-to-br ${brand.color} border border-white/20 hover:border-white/40 transition-all active:scale-95`}
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-2 flex items-center justify-center overflow-hidden">
                  <img src={brand.logo} alt={brand.brand} className="w-full h-full object-contain" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<span class="text-2xl">🏪</span>'; }} />
                </div>
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
