import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Flame, TrendingUp, Users, Clock, MapPin, Coins, Star } from 'lucide-react';

const trendingItems = [
  {
    id: 1,
    name: 'Chicken Biryani',
    store: 'Paradise Biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400',
    category: 'Food',
    price: 350,
    originalPrice: 450,
    trending: 234,
    trendingText: '234 people bought today',
    distance: '0.8 km',
    rating: 4.7,
    cashback: '15%',
    coins: 52,
    timeLeft: '2 hours',
    tags: ['Halal', 'Hot Deal']
  },
  {
    id: 2,
    name: 'Nike Air Max 90',
    store: 'Nike Store',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: 'Fashion',
    price: 6999,
    originalPrice: 8999,
    trending: 189,
    trendingText: '189 people viewing now',
    distance: '1.2 km',
    rating: 4.8,
    cashback: '18%',
    coins: 1260,
    timeLeft: '6 hours',
    tags: ['Limited Stock']
  },
  {
    id: 3,
    name: 'iPhone 15 Pro',
    store: 'Apple Store',
    image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400',
    category: 'Electronics',
    price: 129900,
    originalPrice: 134900,
    trending: 456,
    trendingText: '456 people saved this',
    distance: '3.5 km',
    rating: 5.0,
    cashback: '5%',
    coins: 6495,
    timeLeft: '12 hours',
    tags: ['Pre-Order']
  },
  {
    id: 4,
    name: 'Spa Package',
    store: 'Wellness Spa',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400',
    category: 'Wellness',
    price: 1999,
    originalPrice: 3499,
    trending: 67,
    trendingText: '67 people booked today',
    distance: '2.1 km',
    rating: 4.6,
    cashback: '25%',
    coins: 500,
    timeLeft: '24 hours',
    tags: ['Best Cashback']
  }
];

const TrendingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24 transition-colors">
      {/* Header */}
      <div className="sticky top-0 z-50 glass border-b border-rez-gray-200 dark:border-white/10">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-h3 font-poppins text-rez-navy dark:text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" />
                Trending Near You
              </h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">
                {trendingItems.length} hot deals right now
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-2xl text-center">
            <Flame className="w-6 h-6 text-orange-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">946</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Active buyers</p>
          </div>
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
            <TrendingUp className="w-6 h-6 text-emerald-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">23%</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Avg savings</p>
          </div>
          <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-center">
            <Users className="w-6 h-6 text-blue-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">1.2k</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Views today</p>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-4 mb-4">
        <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-5 h-5 text-white" />
            <h3 className="text-sm font-bold text-white">Hot Right Now</h3>
          </div>
          <p className="text-xs text-white/90">
            These deals are trending based on real-time purchases, views, and saves in your area.
          </p>
        </div>
      </div>

      {/* Trending Items */}
      <div className="px-4 space-y-3">
        {trendingItems.map((item, index) => (
          <Link
            key={item.id}
            to={`/explore/product/${item.id}`}
            className="block relative bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm dark:shadow-none hover:shadow-md dark:hover:border-white/20 transition-all active:scale-[0.98]"
          >
            {/* Trending Badge */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2 py-1 bg-orange-500 rounded-full">
              <Flame className="w-3 h-3 text-white" />
              <span className="text-[10px] font-bold text-white">#{index + 1} Trending</span>
            </div>

            <div className="flex gap-4 p-4">
              {/* Image */}
              <div className="w-28 h-28 rounded-xl overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-rez-navy dark:text-white line-clamp-1">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1 shrink-0">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-semibold text-rez-navy dark:text-white">
                      {item.rating}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">
                  {item.store} · {item.distance}
                </p>

                {/* Trending Info */}
                <div className="flex items-center gap-1 mb-2 text-orange-500">
                  <Users className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">{item.trendingText}</span>
                </div>

                {/* Tags */}
                <div className="flex gap-1 mb-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-red-500/10 text-red-500 rounded-full text-[10px] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price & Coins */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-rez-navy dark:text-white">
                      ₹{item.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-rez-gray-500 dark:text-gray-500 line-through">
                      ₹{item.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Coins className="w-3.5 h-3.5" />
                    <span className="text-xs font-semibold">₹{item.coins}</span>
                  </div>
                </div>

                {/* Time Left */}
                <div className="flex items-center gap-1 px-2 py-1 bg-red-500/10 rounded-lg inline-block">
                  <Clock className="w-3 h-3 text-red-500" />
                  <span className="text-[10px] font-semibold text-red-500">
                    {item.timeLeft} left
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-6">
        <div className="p-4 bg-rez-gray-50 dark:bg-white/5 rounded-2xl text-center">
          <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">
            Updates every 30 minutes based on real activity
          </p>
          <button className="px-4 py-2 bg-rez-green-500 hover:bg-rez-green-600 text-white text-sm font-semibold rounded-full transition-colors">
            Refresh Trends
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingPage;
