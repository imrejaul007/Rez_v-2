import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  Mic,
  Sparkles,
  SlidersHorizontal,
  MapPin,
  Clock,
  Star,
  Coins,
  TrendingUp,
  TrendingDown,
  Award,
  BadgeCheck,
  Navigation,
  ShoppingBag,
  CheckCircle2
} from 'lucide-react';

const searchPlaceholders = [
  "Yellow shirt under ₹1000 within 1 hour",
  "Phone repair near me with cashback",
  "Nike shoes lowest price nearby",
  "Salon haircut today under ₹500",
  "Bluetooth speaker with best reviews",
  "Halal chicken biryani under ₹500 in BTM"
];

const compareResults = [
  {
    id: 1,
    type: 'product',
    name: 'Nike Air Max 90',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    sellers: [
      {
        id: 1,
        store: 'Nike Store BTM',
        price: 6999,
        originalPrice: 8999,
        cashback: '18%',
        cashbackAmount: 1260,
        rating: 4.8,
        reviews: 234,
        distance: '1.2 km',
        delivery: '45 mins',
        type: 'offline',
        isBest: true,
        badge: 'Best Value'
      },
      {
        id: 2,
        store: 'ReZ Mall',
        price: 7199,
        originalPrice: 8999,
        cashback: '15%',
        cashbackAmount: 1080,
        rating: 4.7,
        reviews: 189,
        distance: 'Online',
        delivery: '60 mins',
        type: 'online',
        isBest: false
      },
      {
        id: 3,
        store: 'Brand Website',
        price: 7499,
        originalPrice: 8999,
        cashback: 'None',
        cashbackAmount: 0,
        rating: 4.6,
        reviews: 567,
        distance: 'Online',
        delivery: '3 days',
        type: 'online',
        isBest: false
      }
    ]
  }
];

const similarOptions = [
  {
    id: 1,
    name: 'Adidas Ultra Boost',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400',
    store: 'Sports Zone',
    price: 5999,
    cashback: '20%',
    distance: '0.8 km',
    delivery: '30 mins',
    reason: 'Cheaper alternative'
  },
  {
    id: 2,
    name: 'Puma RS-X',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400',
    store: 'Puma Outlet',
    price: 4999,
    cashback: '15%',
    distance: '2.1 km',
    delivery: '45 mins',
    reason: 'Faster nearby'
  },
  {
    id: 3,
    name: 'Reebok Classic',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400',
    store: 'Reebok Store',
    price: 5499,
    cashback: '25%',
    distance: '1.5 km',
    delivery: '40 mins',
    reason: 'Higher cashback'
  }
];

const CompareSmartFindPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('list'); // list or compare
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [placeholder] = useState(
    searchPlaceholders[Math.floor(Math.random() * searchPlaceholders.length)]
  );

  const [filters, setFilters] = useState({
    type: 'product',
    budget: '',
    location: 'near-me',
    time: 'immediate',
    preferences: {
      halal: false,
      organic: false,
      brand: false,
      cashback: false
    }
  });

  const bestOption = compareResults[0]?.sellers.find(s => s.isBest);
  const lowestPrice = Math.min(...(compareResults[0]?.sellers.map(s => s.price) || [0]));
  const fastestDelivery = compareResults[0]?.sellers.reduce((min, s) => {
    const time = parseInt(s.delivery);
    return time < min ? time : min;
  }, 999);
  const highestCashback = Math.max(...(compareResults[0]?.sellers.map(s => parseInt(s.cashback) || 0) || [0]));

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
              <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">
                Compare & Find
              </h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">
                Compare prices, rewards & availability
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20">
              <span className="text-amber-400">🪙</span>
              <span className="text-sm font-semibold text-amber-500 dark:text-amber-400">
                2,450
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Smart Search Bar */}
      <div className="sticky top-[73px] z-40 bg-white dark:bg-black border-b border-rez-gray-200 dark:border-white/10 px-4 py-3">
        <div className="flex gap-2">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-white/10 border-2 border-purple-500/30 dark:border-purple-500/30">
            <Search className="w-5 h-5 text-purple-500" />
            <input
              type="text"
              placeholder={placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-rez-navy dark:text-white placeholder-rez-gray-500 dark:placeholder-gray-500 outline-none text-sm"
            />
            <button className="p-1">
              <Mic className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
            </button>
            <button className="p-1">
              <Sparkles className="w-5 h-5 text-purple-500" />
            </button>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-3 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 hover:bg-purple-500/20 dark:hover:bg-purple-500/30 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5 text-purple-500" />
          </button>
        </div>

        {/* AI Hint */}
        <div className="flex items-center gap-2 mt-2 px-2">
          <Sparkles className="w-3.5 h-3.5 text-purple-500" />
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">
            You can search in normal language — ReZ understands intent
          </p>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mt-3 p-4 bg-rez-gray-50 dark:bg-white/5 rounded-2xl">
            <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
              Smart Requirements
            </h3>
            <div className="space-y-3">
              <div className="flex gap-2 flex-wrap">
                <button className="px-3 py-1.5 bg-purple-500 text-white text-xs font-medium rounded-full">
                  Product
                </button>
                <button className="px-3 py-1.5 bg-white dark:bg-white/10 text-rez-navy dark:text-white text-xs font-medium rounded-full">
                  Service
                </button>
                <button className="px-3 py-1.5 bg-white dark:bg-white/10 text-rez-navy dark:text-white text-xs font-medium rounded-full">
                  Store
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Budget ₹"
                  className="px-3 py-2 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-xl text-sm text-rez-navy dark:text-white placeholder-rez-gray-400"
                />
                <select className="px-3 py-2 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-xl text-sm text-rez-navy dark:text-white">
                  <option>Near me</option>
                  <option>Within 5km</option>
                  <option>City-wide</option>
                </select>
              </div>
              <div className="flex gap-2 flex-wrap">
                <button className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-medium rounded-full">
                  ✓ Halal
                </button>
                <button className="px-3 py-1.5 bg-white dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                  Organic
                </button>
                <button className="px-3 py-1.5 bg-white dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                  Brand
                </button>
                <button className="px-3 py-1.5 bg-white dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                  High Cashback
                </button>
              </div>
              <button className="w-full py-2.5 bg-rez-green-500 hover:bg-rez-green-600 text-white font-semibold rounded-xl transition-colors">
                Apply Requirements
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Comparison Summary Bar (Sticky) */}
      <div className="sticky top-[200px] z-30 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-b border-emerald-500/20 px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <TrendingDown className="w-4 h-4 text-emerald-500" />
              <p className="text-lg font-bold text-emerald-500">₹{lowestPrice}</p>
            </div>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Lowest Price</p>
          </div>
          <div className="w-px h-8 bg-rez-gray-200 dark:bg-white/10" />
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Clock className="w-4 h-4 text-blue-500" />
              <p className="text-lg font-bold text-blue-500">{fastestDelivery}m</p>
            </div>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Fastest Delivery</p>
          </div>
          <div className="w-px h-8 bg-rez-gray-200 dark:bg-white/10" />
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Award className="w-4 h-4 text-amber-500" />
              <p className="text-lg font-bold text-amber-500">{highestCashback}%</p>
            </div>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Top Cashback</p>
          </div>
        </div>
        <Link
          to="/pay-in-store"
          className="mt-2 w-full py-2 bg-rez-green-500 hover:bg-rez-green-600 text-white text-sm font-semibold rounded-xl text-center block transition-colors"
        >
          Choose Best Option
        </Link>
      </div>

      <div className="px-4 py-4">
        {/* View Toggle */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white">
            Compare Prices Near You
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-purple-500 text-white'
                  : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              List
            </button>
            <button
              onClick={() => setViewMode('compare')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                viewMode === 'compare'
                  ? 'bg-purple-500 text-white'
                  : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              Compare
            </button>
          </div>
        </div>

        {/* Compare Results */}
        {compareResults.map((result) => (
          <div key={result.id} className="mb-6">
            {/* Product Header */}
            <div className="flex gap-3 mb-4 p-4 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl">
              <img
                src={result.image}
                alt={result.name}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h3 className="text-base font-bold text-rez-navy dark:text-white mb-1">
                  {result.name}
                </h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">
                  {result.sellers.length} sellers available
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-purple-500/10 text-purple-500 text-[10px] font-semibold rounded-full">
                    Product
                  </span>
                </div>
              </div>
            </div>

            {/* Seller Options */}
            <div className="space-y-3">
              {result.sellers.map((seller) => (
                <div
                  key={seller.id}
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    seller.isBest
                      ? 'bg-emerald-500/10 border-emerald-500'
                      : 'bg-white dark:bg-white/10 border-rez-gray-200 dark:border-white/10'
                  }`}
                >
                  {/* Best Badge */}
                  {seller.isBest && (
                    <div className="flex items-center gap-1 mb-2">
                      <Award className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs font-bold text-emerald-500">
                        ⭐ {seller.badge}
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    {/* Store Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-sm font-bold text-rez-navy dark:text-white">
                          {seller.store}
                        </h4>
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span className="text-xs font-semibold text-rez-navy dark:text-white">
                            {seller.rating}
                          </span>
                          <span className="text-xs text-rez-gray-500 dark:text-gray-500">
                            ({seller.reviews})
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-2 text-xs text-rez-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{seller.distance}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{seller.delivery}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div>
                          <p className="text-xl font-bold text-rez-navy dark:text-white">
                            ₹{seller.price.toLocaleString()}
                          </p>
                          {seller.originalPrice && (
                            <p className="text-xs text-rez-gray-500 dark:text-gray-500 line-through">
                              ₹{seller.originalPrice.toLocaleString()}
                            </p>
                          )}
                        </div>
                        {seller.cashback !== 'None' && (
                          <div className="flex items-center gap-1 px-2 py-1 bg-emerald-500/20 rounded-lg">
                            <Coins className="w-3 h-3 text-emerald-500" />
                            <span className="text-xs font-semibold text-emerald-500">
                              {seller.cashback} • ₹{seller.cashbackAmount}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="shrink-0">
                      <Link
                        to={`/pay-in-store`}
                        className="px-4 py-2 bg-rez-green-500 hover:bg-rez-green-600 text-white text-sm font-semibold rounded-xl transition-colors whitespace-nowrap"
                      >
                        Pay & Earn
                      </Link>
                      <button className="mt-2 w-full px-4 py-1.5 bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white text-xs font-medium rounded-lg hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-colors">
                        <Navigation className="w-3 h-3 inline mr-1" />
                        Directions
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* AI Explanation */}
        <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl mb-6">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-2">
                Why these results?
              </h3>
              <ul className="space-y-1 text-xs text-rez-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Matches your budget and preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Available nearby with fast delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>High ratings from verified buyers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Better cashback rewards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Similar Options */}
        <div>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-3">
            Similar Options You Might Like
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {similarOptions.map((option) => (
              <Link
                key={option.id}
                to={`/explore/product/${option.id}`}
                className="block bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm dark:shadow-none hover:shadow-md dark:hover:border-white/20 transition-all"
              >
                <div className="relative aspect-square">
                  <img
                    src={option.image}
                    alt={option.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-1 bg-blue-500 rounded-full">
                    <span className="text-[10px] font-bold text-white">
                      {option.reason}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">
                    {option.store}
                  </p>
                  <h3 className="text-sm font-semibold text-rez-navy dark:text-white line-clamp-2 mb-2">
                    {option.name}
                  </h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-rez-navy dark:text-white">
                      ₹{option.price.toLocaleString()}
                    </span>
                    <div className="flex items-center gap-1 text-emerald-500">
                      <Coins className="w-3.5 h-3.5" />
                      <span className="text-xs font-semibold">{option.cashback}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-rez-gray-600 dark:text-gray-400">
                    <span>{option.distance}</span>
                    <span>•</span>
                    <span>{option.delivery}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareSmartFindPage;
