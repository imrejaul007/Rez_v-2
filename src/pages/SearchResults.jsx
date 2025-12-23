import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Star,
  MapPin,
  Truck,
  CheckCircle,
  Heart,
  Lock,
  Plus,
  X,
  TrendingUp,
  Sparkles,
  Clock,
  Award,
  Users,
  Package,
  Store,
  BadgeCheck
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import Badge from '../components/common/Badge';

const SearchResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalCoinsValue } = useWallet();

  // Get search query from URL params or state
  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get('q') || location.state?.query || 'iPhone 14';
  const searchType = location.state?.type || 'product'; // 'product' or 'service'

  // State
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('best-value');
  const [selectedForCompare, setSelectedForCompare] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [savedItems, setSavedItems] = useState([]);

  // Filters state
  const [filters, setFilters] = useState({
    priceRange: [0, 100000],
    minCashback: 0,
    maxDistance: 50,
    minRating: 0,
    deliveryTime: 'all',
    availability: 'all',
    paymentType: 'all'
  });

  // Mock data - Same product, different sellers
  const sellers = [
    {
      id: 'seller-1',
      productName: 'Apple iPhone 14 128GB',
      sellerName: 'Croma - Indiranagar',
      sellerLogo: '🏬',
      verified: true,
      rating: 4.6,
      reviewCount: 1200,
      distance: '400m',
      price: 58999,
      cashback: 2000,
      coinsEarned: 200,
      savings: 5001,
      deliveryOptions: {
        sixtyMin: true,
        pickup: true,
        online: true
      },
      inStock: true,
      lockAvailable: true,
      badges: ['Hot Deal', 'Extra Coins'],
      image: 'https://images.unsplash.com/photo-1592286927505-b0501739b3ad?w=400'
    },
    {
      id: 'seller-2',
      productName: 'Apple iPhone 14 128GB',
      sellerName: 'Reliance Digital - Koramangala',
      sellerLogo: '🏪',
      verified: true,
      rating: 4.8,
      reviewCount: 2400,
      distance: '1.2 km',
      price: 59499,
      cashback: 2500,
      coinsEarned: 250,
      savings: 4501,
      deliveryOptions: {
        sixtyMin: false,
        pickup: true,
        online: true
      },
      inStock: true,
      lockAvailable: false,
      badges: ['Highest Cashback', 'Top Rated'],
      image: 'https://images.unsplash.com/photo-1592286927505-b0501739b3ad?w=400'
    },
    {
      id: 'seller-3',
      productName: 'Apple iPhone 14 128GB',
      sellerName: 'Vijay Sales - HSR Layout',
      sellerLogo: '🛒',
      verified: true,
      rating: 4.3,
      reviewCount: 890,
      distance: '2.5 km',
      price: 60000,
      cashback: 1800,
      coinsEarned: 180,
      savings: 4000,
      deliveryOptions: {
        sixtyMin: false,
        pickup: true,
        online: false
      },
      inStock: false,
      lockAvailable: true,
      badges: ['Limited Stock'],
      image: 'https://images.unsplash.com/photo-1592286927505-b0501739b3ad?w=400'
    },
    {
      id: 'seller-4',
      productName: 'Apple iPhone 14 128GB',
      sellerName: 'Amazon India',
      sellerLogo: '📦',
      verified: true,
      rating: 4.5,
      reviewCount: 5600,
      distance: 'Online',
      price: 59999,
      cashback: 1500,
      coinsEarned: 150,
      savings: 4001,
      deliveryOptions: {
        sixtyMin: false,
        pickup: false,
        online: true
      },
      inStock: true,
      lockAvailable: false,
      badges: ['Online Only'],
      image: 'https://images.unsplash.com/photo-1592286927505-b0501739b3ad?w=400'
    }
  ];

  // Similar products
  const similarProducts = [
    {
      id: 'similar-1',
      name: 'iPhone 14 Plus',
      sellerCount: 8,
      startingPrice: 68999,
      maxCashback: 3000,
      maxCoins: 300,
      image: 'https://images.unsplash.com/photo-1592286927505-b0501739b3ad?w=300'
    },
    {
      id: 'similar-2',
      name: 'iPhone 14 Pro',
      sellerCount: 6,
      startingPrice: 118999,
      maxCashback: 5000,
      maxCoins: 500,
      image: 'https://images.unsplash.com/photo-1592286927505-b0501739b3ad?w=300'
    },
    {
      id: 'similar-3',
      name: 'Samsung Galaxy S23',
      sellerCount: 12,
      startingPrice: 54999,
      maxCashback: 3500,
      maxCoins: 350,
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300'
    }
  ];

  const handleToggleSave = (sellerId) => {
    setSavedItems(prev =>
      prev.includes(sellerId)
        ? prev.filter(id => id !== sellerId)
        : [...prev, sellerId]
    );
  };

  const handleToggleCompare = (sellerId) => {
    setSelectedForCompare(prev => {
      if (prev.includes(sellerId)) {
        return prev.filter(id => id !== sellerId);
      }
      if (prev.length >= 3) {
        return prev; // Max 3 items
      }
      return [...prev, sellerId];
    });
  };

  const handleViewDeal = (seller) => {
    navigate(`/product/${seller.id}`, {
      state: {
        seller: seller
      }
    });
  };

  const getComparisonData = () => {
    return sellers.filter(s => selectedForCompare.includes(s.id));
  };

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* 🔝 TOP BAR */}
      <div className="sticky top-0 z-50 glass">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10">
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>

            {/* Search Bar */}
            <div className="flex-1 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products or services..."
                className="flex-1 bg-transparent text-sm text-white placeholder-gray-400 outline-none"
              />
            </div>

            {/* Wallet */}
            <Link
              to="/wallet"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-500/20"
            >
              <span className="text-amber-400">🪙</span>
              <span className="text-xs font-medium text-amber-400">{totalCoinsValue}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 🧠 SEARCH INTENT HEADER */}
      <div className="px-4 py-4 border-b border-white/10">
        <h1 className="text-xl font-bold text-white mb-2">Results for "{searchQuery}"</h1>
        <p className="text-sm text-gray-400">
          {sellers.length} sellers · Prices from ₹{Math.min(...sellers.map(s => s.price)).toLocaleString()} · Earn up to ₹{Math.max(...sellers.map(s => s.cashback)).toLocaleString()}
        </p>
      </div>

      {/* 🎛 FILTER & SORT BAR */}
      <div className="sticky top-[60px] z-40 glass border-b border-white/10">
        <div className="px-4 py-3 flex items-center gap-2 overflow-x-auto hide-scrollbar">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/10 whitespace-nowrap"
          >
            <SlidersHorizontal className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Filters</span>
          </button>

          <button
            onClick={() => setSortBy('best-value')}
            className={`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              sortBy === 'best-value'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-white/5 text-gray-400'
            }`}
          >
            Best Value
          </button>

          <button
            onClick={() => setSortBy('lowest-price')}
            className={`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              sortBy === 'lowest-price'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-white/5 text-gray-400'
            }`}
          >
            Lowest Price
          </button>

          <button
            onClick={() => setSortBy('highest-cashback')}
            className={`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              sortBy === 'highest-cashback'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-white/5 text-gray-400'
            }`}
          >
            Highest Cashback
          </button>

          <button
            onClick={() => setSortBy('nearest')}
            className={`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              sortBy === 'nearest'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-white/5 text-gray-400'
            }`}
          >
            Nearest
          </button>

          <button
            onClick={() => setSortBy('best-rated')}
            className={`px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              sortBy === 'best-rated'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-white/5 text-gray-400'
            }`}
          >
            Best Rated
          </button>
        </div>
      </div>

      {/* 🤖 AI INSIGHTS */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-600/10 border border-purple-500/30 flex gap-3">
          <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-white mb-1">AI Recommendation</p>
            <p className="text-sm text-gray-300">
              Most users choose <span className="text-purple-400 font-semibold">Reliance Digital</span> for highest cashback.
              Choose <span className="text-blue-400 font-semibold">Croma</span> for fastest delivery.
            </p>
          </div>
        </div>
      </div>

      {/* 📦 SECTION 1 — SAME PRODUCT, DIFFERENT SELLERS */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-white">Same product · Compare sellers</h2>
            <p className="text-xs text-gray-400">Choose the best deal for you</p>
          </div>
        </div>

        <div className="space-y-3">
          {sellers.map((seller) => (
            <div
              key={seller.id}
              className={`p-4 rounded-2xl border transition-all ${
                selectedForCompare.includes(seller.id)
                  ? 'bg-purple-500/10 border-purple-500/50'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {/* Badges Row */}
              {seller.badges.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {seller.badges.map((badge, idx) => (
                    <Badge
                      key={idx}
                      variant="default"
                      size="sm"
                      className={
                        badge === 'Hot Deal'
                          ? 'bg-red-500/20 text-red-400 border-red-500/30'
                          : badge === 'Highest Cashback'
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                          : badge === 'Top Rated'
                          ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                          : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                      }
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}

              <div className="flex gap-3">
                {/* Seller Image */}
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/5 flex-shrink-0">
                  <img
                    src={seller.image}
                    alt={seller.productName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Seller Info */}
                <div className="flex-1 min-w-0">
                  {/* Seller Name & Verification */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{seller.sellerLogo}</span>
                    <h3 className="text-sm font-bold text-white">{seller.sellerName}</h3>
                    {seller.verified && (
                      <BadgeCheck className="w-4 h-4 text-emerald-400" />
                    )}
                  </div>

                  {/* Rating & Distance */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span className="text-xs font-semibold text-amber-400">{seller.rating}</span>
                      <span className="text-xs text-gray-400">({seller.reviewCount.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-blue-400" />
                      <span className="text-xs text-gray-400">{seller.distance}</span>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center gap-2 mb-3">
                    {seller.inStock ? (
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                        <span className="text-xs text-emerald-400 font-medium">In Stock</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <span className="text-xs text-red-400 font-medium">Out of Stock</span>
                      </div>
                    )}

                    {seller.deliveryOptions.sixtyMin && (
                      <div className="flex items-center gap-1">
                        <Truck className="w-3 h-3 text-blue-400" />
                        <span className="text-xs text-blue-400">60 min delivery</span>
                      </div>
                    )}
                  </div>

                  {/* Price & Savings */}
                  <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-amber-500/10 border border-emerald-500/20 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Price</span>
                      <span className="text-lg font-bold text-white">₹{seller.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-400">Cashback</span>
                      <span className="text-sm font-semibold text-emerald-400">₹{seller.cashback.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400">ReZ Coins</span>
                      <span className="text-sm font-semibold text-amber-400">{seller.coinsEarned} coins</span>
                    </div>
                    <div className="pt-2 border-t border-white/10">
                      <p className="text-xs text-emerald-300 font-semibold text-center">
                        🎉 You Save ₹{seller.savings.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleViewDeal(seller)}
                      className="py-2 px-4 rounded-xl bg-emerald-500 text-white text-sm font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform"
                    >
                      <CheckCircle className="w-4 h-4" />
                      View Deal
                    </button>

                    <div className="flex gap-2">
                      {seller.lockAvailable && (
                        <button className="flex-1 py-2 px-3 rounded-xl bg-purple-500/20 text-purple-400 text-sm font-semibold flex items-center justify-center gap-1 active:scale-95 transition-transform border border-purple-500/30">
                          <Lock className="w-4 h-4" />
                          Lock
                        </button>
                      )}

                      <button
                        onClick={() => handleToggleSave(seller.id)}
                        className={`p-2 rounded-xl border transition-all ${
                          savedItems.includes(seller.id)
                            ? 'bg-red-500/20 border-red-500/30'
                            : 'bg-white/5 border-white/10'
                        }`}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            savedItems.includes(seller.id)
                              ? 'text-red-400 fill-red-400'
                              : 'text-gray-400'
                          }`}
                        />
                      </button>

                      <button
                        onClick={() => handleToggleCompare(seller.id)}
                        disabled={!selectedForCompare.includes(seller.id) && selectedForCompare.length >= 3}
                        className={`p-2 rounded-xl border transition-all ${
                          selectedForCompare.includes(seller.id)
                            ? 'bg-purple-500/20 border-purple-500/30'
                            : 'bg-white/5 border-white/10'
                        } ${
                          !selectedForCompare.includes(seller.id) && selectedForCompare.length >= 3
                            ? 'opacity-50 cursor-not-allowed'
                            : ''
                        }`}
                      >
                        <Plus
                          className={`w-4 h-4 ${
                            selectedForCompare.includes(seller.id)
                              ? 'text-purple-400'
                              : 'text-gray-400'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔄 SECTION 2 — SIMILAR PRODUCTS */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-white">Similar options you may like</h2>
          <button className="text-xs text-emerald-400 font-semibold">View All</button>
        </div>

        <div className="flex gap-3 overflow-x-auto hide-scrollbar">
          {similarProducts.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-56 p-4 rounded-2xl bg-white/5 border border-white/10 active:scale-95 transition-transform cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden mb-3 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{product.name}</h3>
              <p className="text-xs text-gray-400 mb-3">{product.sellerCount} sellers</p>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">From</span>
                  <span className="text-sm font-bold text-white">₹{product.startingPrice.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Save up to</span>
                  <span className="text-sm font-semibold text-emerald-400">₹{product.maxCashback.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🪙 CASHBACK BANNER */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-amber-500/10 border border-emerald-500/30">
          <p className="text-sm text-center text-emerald-300">
            🪙 Cashback & coins auto-applied at checkout for maximum savings
          </p>
        </div>
      </div>

      {/* 🔘 FLOATING COMPARE BAR */}
      {selectedForCompare.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 p-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {selectedForCompare.map((id) => {
                  const seller = sellers.find(s => s.id === id);
                  return (
                    <div key={id} className="relative">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">
                        {seller?.sellerLogo}
                      </div>
                      <button
                        onClick={() => handleToggleCompare(id)}
                        className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center"
                      >
                        <X className="w-3 h-3 text-white" />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{selectedForCompare.length} selected</p>
                <p className="text-xs text-gray-400">Max 3 items</p>
              </div>
            </div>

            <button
              onClick={() => setShowComparison(true)}
              disabled={selectedForCompare.length < 2}
              className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
                selectedForCompare.length >= 2
                  ? 'bg-purple-500 text-white active:scale-95'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              Compare Now
            </button>
          </div>
        </div>
      )}

      {/* 📊 COMPARISON MODAL */}
      {showComparison && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-end">
          <div className="w-full max-h-[90vh] bg-black border-t border-white/10 rounded-t-3xl overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 z-10 glass px-4 py-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">Compare Sellers</h2>
                <button
                  onClick={() => setShowComparison(false)}
                  className="p-2 rounded-full bg-white/10"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="p-4 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left p-3 text-sm font-semibold text-gray-400 sticky left-0 bg-black">Feature</th>
                    {getComparisonData().map((seller) => (
                      <th key={seller.id} className="p-3 text-center min-w-[150px]">
                        <div className="text-2xl mb-2">{seller.sellerLogo}</div>
                        <p className="text-xs font-semibold text-white">{seller.sellerName.split('-')[0]}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-t border-white/10">
                    <td className="p-3 text-sm text-gray-400 sticky left-0 bg-black">Price</td>
                    {getComparisonData().map((seller) => (
                      <td key={seller.id} className="p-3 text-center">
                        <p className="text-sm font-bold text-white">₹{seller.price.toLocaleString()}</p>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-3 text-sm text-gray-400 sticky left-0 bg-black">Cashback</td>
                    {getComparisonData().map((seller) => (
                      <td key={seller.id} className="p-3 text-center">
                        <p className="text-sm font-semibold text-emerald-400">₹{seller.cashback.toLocaleString()}</p>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-3 text-sm text-gray-400 sticky left-0 bg-black">Coins</td>
                    {getComparisonData().map((seller) => (
                      <td key={seller.id} className="p-3 text-center">
                        <p className="text-sm font-semibold text-amber-400">{seller.coinsEarned}</p>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-3 text-sm text-gray-400 sticky left-0 bg-black">Delivery</td>
                    {getComparisonData().map((seller) => (
                      <td key={seller.id} className="p-3 text-center">
                        {seller.deliveryOptions.sixtyMin ? (
                          <p className="text-xs text-blue-400">60 min</p>
                        ) : seller.deliveryOptions.pickup ? (
                          <p className="text-xs text-emerald-400">Pickup</p>
                        ) : (
                          <p className="text-xs text-gray-500">2 days</p>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-3 text-sm text-gray-400 sticky left-0 bg-black">Rating</td>
                    {getComparisonData().map((seller) => (
                      <td key={seller.id} className="p-3 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                          <p className="text-xs font-semibold text-amber-400">{seller.rating}</p>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-3 text-sm text-gray-400 sticky left-0 bg-black">Lock Option</td>
                    {getComparisonData().map((seller) => (
                      <td key={seller.id} className="p-3 text-center">
                        {seller.lockAvailable ? (
                          <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-600 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="p-3 text-sm text-gray-400 sticky left-0 bg-black">Action</td>
                    {getComparisonData().map((seller) => (
                      <td key={seller.id} className="p-3 text-center">
                        <button
                          onClick={() => handleViewDeal(seller)}
                          className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-xs font-semibold active:scale-95 transition-transform"
                        >
                          View Deal
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
