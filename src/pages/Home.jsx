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

      {/* 6️⃣ HOW ReZ WORKS */}
      <HowRezWorks />

      {/* 7️⃣ DEAL STORE PREVIEW */}
      <DealStorePreview />

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
    </div>
  );
};

export default Home;
