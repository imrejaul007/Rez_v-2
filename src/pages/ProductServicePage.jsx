import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft, Heart, Share2, Star, MapPin, Clock, CheckCircle, Lock,
  Store, Truck, ChevronRight, Timer, Sparkles, ShoppingCart, X,
  Package, TrendingUp, Gift, Zap, Trophy, AlertCircle, ShieldCheck,
  Camera, Play, ChevronDown, ChevronUp, Phone, Navigation, Users
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';

const ProductServicePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { rezCoins, cashbackBalance } = useWallet();

  // State
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [isLocked, setIsLocked] = useState(false);
  const [lockDuration, setLockDuration] = useState(2);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [showLockModal, setShowLockModal] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Mock product data
  const product = {
    id: id,
    name: 'Sony WH-1000XM5 Wireless Headphones',
    brand: 'Tech Galaxy',
    category: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600'
    ],
    hasVideo: true,
    rating: 4.8,
    reviews: 324,
    verified: true,
    inStock: true,
    stockCount: 5,

    // Pricing
    mrp: 29990,
    rezPrice: 24990,
    savings: 5000,

    // Rewards
    coinsEarned: 2499,
    cashback: 1200,
    extraCoinsOnShare: 250,

    // Lock feature
    lockable: true,
    lockPercentage: 10,
    lockDurations: [
      { hours: 2, label: '2 Hours', recommended: true },
      { hours: 4, label: '4 Hours', recommended: false },
      { hours: 8, label: '8 Hours', recommended: false }
    ],

    // Purchase options
    storePickup: true,
    delivery60Min: true,
    buyOnline: true,

    // Store details
    storeAddress: 'Tech Galaxy, 123 Indiranagar Main Road, Bangalore',
    storeDistance: '2.3 km',
    storeTimings: '10:00 AM - 9:00 PM',
    storePhone: '+91 80 1234 5678',

    // Delivery
    deliveryFee: 99,
    deliveryFeeReturnAsCoins: true,
    deliveryAreas: ['Indiranagar', 'Koramangala', 'HSR Layout', 'Whitefield'],

    // Details
    description: 'Industry-leading noise cancellation with Auto NC Optimizer. Up to 30 hours battery life. Crystal clear hands-free calling. Multipoint connection. Speak-to-chat technology stops playback when you start talking.',

    specifications: [
      { label: 'Battery Life', value: 'Up to 30 hours' },
      { label: 'Noise Cancellation', value: 'Industry-leading ANC' },
      { label: 'Connectivity', value: 'Bluetooth 5.2, Multipoint' },
      { label: 'Weight', value: '250g' },
      { label: 'Warranty', value: '1 year manufacturer warranty' },
      { label: 'Color', value: 'Black / Silver' }
    ],

    // AI Insight
    aiInsight: {
      message: 'This product is usually bought on weekends — locking now saves ₹5,000.',
      subMessage: 'High demand item — price may change during sale season.',
      confidence: 'high'
    },

    // Lock info
    lockInfo: [
      'Pay just 10% to reserve this product',
      'Price stays locked for your selected duration',
      'Visit store or choose delivery anytime within lock period',
      'Lock amount adjustable with remaining payment'
    ],

    // Reviews
    topReviews: [
      {
        id: 1,
        user: 'Rajesh Kumar',
        rating: 5,
        date: '2 days ago',
        comment: 'Amazing noise cancellation! Worth every penny. Earned ₹1,200 cashback too!',
        verified: true,
        helpful: 24,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200'
      },
      {
        id: 2,
        user: 'Priya Sharma',
        rating: 5,
        date: '1 week ago',
        comment: 'Best headphones for work from home. Battery lasts forever.',
        verified: true,
        helpful: 18
      }
    ],

    // Related products
    relatedProducts: [
      {
        id: 2,
        name: 'Boat Rockerz 450',
        price: 1499,
        mrp: 2999,
        cashback: 75,
        image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=200'
      },
      {
        id: 3,
        name: 'JBL Tune 760NC',
        price: 4999,
        mrp: 7999,
        cashback: 250,
        image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=200'
      }
    ]
  };

  const lockPrice = Math.round(product.rezPrice * (product.lockPercentage / 100));
  const remainingPrice = product.rezPrice - lockPrice;

  // Lock timer
  useEffect(() => {
    if (isLocked && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setIsLocked(false);
            setShowLockModal(false);
            return null;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isLocked, timeRemaining]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const handleLockProduct = () => {
    setIsLocked(true);
    setTimeRemaining(lockDuration * 3600);
    setShowLockModal(false);
  };

  const handleCancelLock = () => {
    if (confirm('Are you sure you want to cancel the lock? Lock amount will be refunded as per policy.')) {
      setIsLocked(false);
      setTimeRemaining(null);
    }
  };

  const handlePurchaseOption = (option) => {
    console.log('Purchase option clicked:', option);
    console.log('Product ID:', id);
    console.log('Is Locked:', isLocked);

    // Create product object with all checkout-required fields
    const checkoutProduct = {
      ...product,
      purchaseOption: option,
      isLocked,
      lockPrice: isLocked ? lockPrice : 0,
      remainingPrice: isLocked ? remainingPrice : product.rezPrice,
      timeRemaining
    };

    try {
      navigate(`/checkout/product/${id}`, {
        state: checkoutProduct
      });
    } catch (error) {
      console.error('Navigation error:', error);
      alert(`Error navigating to checkout: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-32">
      {/* 🔝 TOP BAR */}
      <div className="sticky top-0 z-50 bg-white/90 dark:bg-dark-800/90 backdrop-blur-lg border-b border-rez-gray-200 dark:border-dark-700">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-rez-gray-100 dark:bg-dark-700 active:scale-95 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>

          <div className="flex items-center gap-2">
            {/* Wallet Pill */}
            <Link
              to="/wallet"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-emerald-500/20 border border-amber-500/30"
            >
              <span className="text-sm">🪙</span>
              <span className="text-sm font-semibold text-amber-400">{rezCoins}</span>
              <span className="text-xs text-rez-gray-600 dark:text-gray-400">|</span>
              <span className="text-sm font-semibold text-emerald-400">₹{cashbackBalance}</span>
            </Link>

            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2 rounded-full transition-all active:scale-95 ${
                isSaved ? 'bg-pink-500/20' : 'bg-rez-gray-100 dark:bg-dark-700'
              }`}
            >
              <Heart className={`w-5 h-5 ${
                isSaved ? 'text-pink-500 fill-pink-500' : 'text-rez-navy dark:text-white'
              }`} />
            </button>

            <button className="p-2 rounded-full bg-rez-gray-100 dark:bg-dark-700 active:scale-95 transition-all">
              <Share2 className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* 🖼️ 1. PRODUCT HERO SECTION */}
        <div className="rounded-2xl overflow-hidden bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          {/* Main Image */}
          <div className="relative aspect-square bg-rez-gray-50 dark:bg-dark-700">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />

            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.inStock && (
                <div className="px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-sm flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-xs font-semibold text-white">In Stock</span>
                </div>
              )}
              {product.storePickup && (
                <div className="px-3 py-1 rounded-full bg-blue-500/90 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-white">📍 Available at Store</span>
                </div>
              )}
            </div>

            {/* Urgency Badge */}
            {product.stockCount <= 10 && (
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1 rounded-full bg-red-500/90 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-white">🔥 Only {product.stockCount} left</span>
                </div>
              </div>
            )}

            {/* Rating */}
            <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-sm font-bold text-rez-navy dark:text-white">{product.rating}</span>
              <span className="text-xs text-rez-gray-600 dark:text-gray-400">({product.reviews})</span>
            </div>

            {/* Media Type Indicator */}
            {product.hasVideo && (
              <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-sm">
                <Play className="w-5 h-5 text-white" />
              </div>
            )}
          </div>

          {/* Image Thumbnails */}
          <div className="flex gap-2 p-4 overflow-x-auto hide-scrollbar">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === idx
                    ? 'border-rez-green-500 scale-105'
                    : 'border-rez-gray-200 dark:border-dark-600'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
            {product.hasVideo && (
              <button className="flex-shrink-0 w-16 h-16 rounded-lg bg-rez-gray-100 dark:bg-dark-700 flex items-center justify-center border-2 border-rez-gray-200 dark:border-dark-600">
                <Play className="w-6 h-6 text-rez-navy dark:text-white" />
              </button>
            )}
          </div>
        </div>

        {/* Product Identity */}
        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1 flex items-center gap-2">
                {product.category} · {product.brand}
                {product.verified && (
                  <span className="flex items-center gap-1 text-emerald-500">
                    <CheckCircle className="w-3 h-3" />
                    <span className="text-xs">Verified</span>
                  </span>
                )}
              </p>
              <h1 className="text-xl font-bold text-rez-navy dark:text-white leading-tight">
                {product.name}
              </h1>
            </div>
          </div>

          {product.storePickup && (
            <div className="flex items-center gap-2 mt-3 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-rez-navy dark:text-white truncate">
                  {product.storeAddress.split(',')[0]}
                </p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                  {product.storeDistance} away · {product.storeTimings}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            </div>
          )}
        </div>

        {/* 💰 2. PRICE & SAVINGS */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-amber-500/10 border border-emerald-500/20">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">MRP</p>
              <p className="text-lg text-rez-gray-500 dark:text-gray-400 line-through">₹{product.mrp.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-emerald-500 mb-1">ReZ Price</p>
              <p className="text-3xl font-bold text-rez-navy dark:text-white">₹{product.rezPrice.toLocaleString()}</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/50 dark:bg-black/20 mb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-500" />
              <span className="text-lg font-bold text-emerald-500">You Save ₹{product.savings.toLocaleString()}</span>
              <span className="text-sm text-rez-gray-600 dark:text-gray-400">
                ({Math.round((product.savings / product.mrp) * 100)}% off)
              </span>
            </div>
          </div>

          {/* Rewards Breakdown */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-rez-gray-700 dark:text-gray-300 mb-2">Rewards you'll earn:</p>
            <div className="flex items-center justify-between p-2 rounded-lg bg-amber-500/20 border border-amber-500/30">
              <div className="flex items-center gap-2">
                <span className="text-lg">🪙</span>
                <span className="text-sm font-semibold text-amber-400">ReZ Coins</span>
              </div>
              <span className="text-lg font-bold text-amber-400">{product.coinsEarned}</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30">
              <div className="flex items-center gap-2">
                <span className="text-lg">💸</span>
                <span className="text-sm font-semibold text-emerald-400">Cashback</span>
              </div>
              <span className="text-lg font-bold text-emerald-400">₹{product.cashback}</span>
            </div>
            {product.extraCoinsOnShare > 0 && (
              <div className="flex items-center justify-between p-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-semibold text-purple-400">Bonus on Sharing</span>
                </div>
                <span className="text-sm font-bold text-purple-400">+{product.extraCoinsOnShare} coins</span>
              </div>
            )}
          </div>
        </div>

        {/* 🧠 7. AI INSIGHT */}
        {product.aiInsight && (
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-purple-400 mb-1 flex items-center gap-2">
                  AI Smart Deal Insight
                  <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20">High Confidence</span>
                </h3>
                <p className="text-sm text-rez-navy dark:text-white mb-1">{product.aiInsight.message}</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">{product.aiInsight.subMessage}</p>
              </div>
            </div>
          </div>
        )}

        {/* 🔐 3. LOCK PRODUCT FEATURE */}
        {product.lockable && !isLocked && (
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-500/30">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-amber-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-1">🔥 Lock This Price Now</h2>
                <p className="text-sm text-rez-gray-700 dark:text-gray-300">
                  Pay just <span className="font-bold text-amber-500">10%</span> to reserve. Price stays locked. Complete purchase anytime!
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-dark-700 border border-amber-500/20 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-rez-gray-600 dark:text-gray-400">Lock Amount (10%)</span>
                <span className="text-2xl font-bold text-rez-navy dark:text-white">₹{lockPrice.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-rez-gray-600 dark:text-gray-400">
                <span>Pay Later</span>
                <span>₹{remainingPrice.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-xs font-semibold text-rez-gray-700 dark:text-gray-300">Choose Lock Duration:</p>
              <div className="grid grid-cols-3 gap-2">
                {product.lockDurations.map((duration) => (
                  <button
                    key={duration.hours}
                    onClick={() => setLockDuration(duration.hours)}
                    className={`p-3 rounded-xl border-2 transition-all active:scale-95 ${
                      lockDuration === duration.hours
                        ? 'border-amber-500 bg-amber-500/20'
                        : 'border-rez-gray-200 dark:border-dark-600 bg-white dark:bg-dark-700'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Timer className="w-4 h-4 text-amber-400" />
                      {duration.recommended && <span className="text-xs">⭐</span>}
                    </div>
                    <p className="text-sm font-bold text-rez-navy dark:text-white text-center">
                      {duration.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowLockModal(true)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg flex items-center justify-center gap-2 active:scale-98 transition-all shadow-lg shadow-amber-500/20"
            >
              <Lock className="w-5 h-5" />
              Lock for ₹{lockPrice.toLocaleString()}
            </button>

            <div className="mt-3 space-y-1">
              {product.lockInfo.slice(0, 2).map((info, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-rez-gray-700 dark:text-gray-300">{info}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lock Active Status */}
        {isLocked && (
          <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border-2 border-emerald-500/40">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center animate-pulse">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-emerald-400 mb-1">🔒 Product Locked!</h3>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-300" />
                  <span className="text-sm font-semibold text-emerald-300">
                    Time left: {formatTime(timeRemaining)}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-emerald-100">Lock Amount Paid</span>
                <span className="text-lg font-bold text-white">₹{lockPrice.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-emerald-100">Remaining to Pay</span>
                <span className="font-bold text-white">₹{remainingPrice.toLocaleString()}</span>
              </div>
            </div>

            <p className="text-sm text-emerald-100 mb-4">
              Price is locked at ₹{product.rezPrice.toLocaleString()}. Choose how to complete your purchase:
            </p>

            <button
              onClick={handleCancelLock}
              className="w-full py-2 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 font-semibold text-sm active:scale-98 transition-all"
            >
              Cancel Lock
            </button>
          </div>
        )}

        {/* 🏬 4. COMPLETE PURCHASE OPTIONS */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-rez-navy dark:text-white px-1">
            {isLocked ? 'Complete Your Purchase' : 'How would you like to buy?'}
          </h2>

          {/* Option A - Visit Store */}
          {product.storePickup && (
            <button
              onClick={() => handlePurchaseOption('store')}
              className="w-full p-4 rounded-2xl bg-white dark:bg-dark-800 border-2 border-rez-gray-200 dark:border-dark-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all active:scale-98"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Store className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-base font-bold text-rez-navy dark:text-white mb-1">Visit Store & Buy</h3>
                  <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-2">
                    {isLocked ? `Pay ₹${remainingPrice.toLocaleString()} at store` : 'See product in person, pay at store'}
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-rez-gray-700 dark:text-gray-300">
                      <MapPin className="w-3 h-3 text-blue-400" />
                      <span>{product.storeDistance} away</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-rez-gray-700 dark:text-gray-300">
                      <Clock className="w-3 h-3 text-blue-400" />
                      <span>{product.storeTimings}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-emerald-500">
                      <CheckCircle className="w-3 h-3" />
                      <span>Product reserved for you</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-rez-gray-400 dark:text-gray-500 flex-shrink-0 mt-2" />
              </div>
            </button>
          )}

          {/* Option B - 60-Min Delivery */}
          {product.delivery60Min && (
            <button
              onClick={() => handlePurchaseOption('delivery')}
              className="w-full p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-2 border-emerald-500/30 hover:border-emerald-500 transition-all active:scale-98"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-rez-navy dark:text-white">60-Minute Delivery</h3>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-xs font-semibold text-emerald-400">
                      FASTEST
                    </span>
                  </div>
                  <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-2">
                    Get it delivered in under 1 hour
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-rez-gray-700 dark:text-gray-300">
                      <Zap className="w-3 h-3 text-emerald-400" />
                      <span>Delivery fee: ₹{product.deliveryFee}</span>
                      {product.deliveryFeeReturnAsCoins && (
                        <span className="text-amber-400">(returned as coins)</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-emerald-500">
                      <CheckCircle className="w-3 h-3" />
                      <span>Live tracking available</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-rez-gray-400 dark:text-gray-500 flex-shrink-0 mt-2" />
              </div>
            </button>
          )}

          {/* Option C - Buy Online */}
          {product.buyOnline && (
            <button
              onClick={() => handlePurchaseOption('online')}
              className="w-full p-4 rounded-2xl bg-white dark:bg-dark-800 border-2 border-rez-gray-200 dark:border-dark-700 hover:border-rez-green-500 dark:hover:border-emerald-500 transition-all active:scale-98"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-6 h-6 text-amber-400" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-base font-bold text-rez-navy dark:text-white mb-1">Buy Online</h3>
                  <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-2">
                    Standard delivery in 2-3 days
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-emerald-500">
                      <CheckCircle className="w-3 h-3" />
                      <span>Free delivery</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-emerald-500">
                      <Gift className="w-3 h-3" />
                      <span>Earn full cashback & coins</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-rez-gray-400 dark:text-gray-500 flex-shrink-0 mt-2" />
              </div>
            </button>
          )}
        </div>

        {/* 📋 8. PRODUCT DETAILS TABS */}
        <div className="rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-rez-gray-200 dark:border-dark-700 overflow-x-auto hide-scrollbar">
            {['description', 'specifications', 'reviews', 'lock-info'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[100px] px-4 py-3 text-sm font-semibold capitalize whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'text-rez-green-500 border-b-2 border-rez-green-500'
                    : 'text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-4">
            {activeTab === 'description' && (
              <div>
                <p className="text-sm text-rez-gray-700 dark:text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="space-y-3">
                {product.specifications.map((spec, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-rez-gray-100 dark:border-dark-700 last:border-0">
                    <span className="text-sm text-rez-gray-600 dark:text-gray-400">{spec.label}</span>
                    <span className="text-sm font-semibold text-rez-navy dark:text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-4">
                {/* Rating Summary */}
                <div className="p-4 rounded-xl bg-rez-gray-50 dark:bg-dark-700">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-rez-navy dark:text-white">{product.rating}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-rez-navy dark:text-white mb-1">
                        {product.reviews} verified reviews
                      </p>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                        Rated by verified ReZ buyers only
                      </p>
                    </div>
                  </div>
                </div>

                {/* Individual Reviews */}
                {product.topReviews.map((review) => (
                  <div key={review.id} className="pb-4 border-b border-rez-gray-100 dark:border-dark-700 last:border-0">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-rez-green-500 flex items-center justify-center text-white font-bold">
                        {review.user[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-semibold text-rez-navy dark:text-white">{review.user}</p>
                          {review.verified && (
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-rez-gray-300 dark:text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-rez-gray-600 dark:text-gray-400">{review.date}</span>
                        </div>
                        <p className="text-sm text-rez-gray-700 dark:text-gray-300 mb-2">{review.comment}</p>
                        {review.image && (
                          <img src={review.image} alt="Review" className="w-20 h-20 rounded-lg object-cover mb-2" />
                        )}
                        <button className="text-xs text-rez-gray-600 dark:text-gray-400 flex items-center gap-1">
                          <Trophy className="w-3 h-3" />
                          Helpful ({review.helpful})
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'lock-info' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <h3 className="text-sm font-bold text-amber-400 mb-2 flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    How Lock & Save Works
                  </h3>
                  <div className="space-y-2">
                    {product.lockInfo.map((info, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-amber-400">{idx + 1}</span>
                        </div>
                        <p className="text-sm text-rez-gray-700 dark:text-gray-300">{info}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <h3 className="text-sm font-bold text-emerald-400 mb-2">Benefits</h3>
                  <div className="space-y-2">
                    {['Price protection guarantee', 'Flexible completion time', 'Full refund if cancelled within policy', 'Lock amount adjustable with payment'].map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-rez-gray-700 dark:text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 🔁 10. RELATED PRODUCTS */}
        <div>
          <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-3 px-1">You May Also Like</h2>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {product.relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="flex-shrink-0 w-40 p-3 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-rez-green-500 dark:hover:border-emerald-500 transition-all active:scale-95"
              >
                <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-xl mb-2" />
                <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1 line-clamp-2">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-rez-navy dark:text-white">₹{item.price.toLocaleString()}</span>
                  <span className="text-xs text-emerald-500">💰 ₹{item.cashback}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 🏁 END MESSAGE */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-rez-green-500/10 to-emerald-500/10 border border-rez-green-500/20 text-center">
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 font-medium">
            Why rush? <span className="text-rez-green-500 font-bold">Lock smart.</span> Buy better.{' '}
            <span className="text-emerald-500 font-bold">Save more</span> — only on ReZ. ✨
          </p>
        </div>
      </div>

      {/* 🔘 11. STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-dark-800/90 backdrop-blur-lg border-t border-rez-gray-200 dark:border-dark-700 z-40">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">
              {isLocked ? 'Remaining to pay' : 'ReZ Price'}
            </p>
            <p className="text-xl font-bold text-rez-navy dark:text-white">
              ₹{isLocked ? remainingPrice.toLocaleString() : product.rezPrice.toLocaleString()}
            </p>
            {isLocked && timeRemaining && (
              <p className="text-xs text-emerald-500">⏱ {formatTime(timeRemaining)} left</p>
            )}
          </div>
          {!isLocked ? (
            <button
              onClick={() => setShowLockModal(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold flex items-center gap-2 active:scale-95 transition-all shadow-lg"
            >
              <Lock className="w-5 h-5" />
              Lock ₹{lockPrice.toLocaleString()}
            </button>
          ) : (
            <button className="px-6 py-3 rounded-xl bg-rez-green-500 text-white font-bold active:scale-95 transition-all shadow-lg">
              Choose Option →
            </button>
          )}
        </div>
      </div>

      {/* Lock Confirmation Modal */}
      {showLockModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end justify-center z-50 p-4">
          <div className="w-full max-w-md bg-white dark:bg-dark-800 rounded-3xl p-6 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-rez-navy dark:text-white">Confirm Lock</h2>
              <button
                onClick={() => setShowLockModal(false)}
                className="p-2 rounded-full bg-rez-gray-100 dark:bg-dark-700 active:scale-95 transition-all"
              >
                <X className="w-5 h-5 text-rez-navy dark:text-white" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-rez-gray-700 dark:text-gray-300">Lock Amount</span>
                <span className="text-2xl font-bold text-rez-navy dark:text-white">₹{lockPrice.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-rez-gray-600 dark:text-gray-400">Lock Duration</span>
                <span className="font-semibold text-rez-navy dark:text-white">{lockDuration} hours</span>
              </div>
              <div className="pt-3 border-t border-amber-500/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-rez-gray-600 dark:text-gray-400">Pay Later</span>
                  <span className="font-bold text-rez-navy dark:text-white">₹{remainingPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              {['Price locked at ₹' + product.rezPrice.toLocaleString(), 'Valid for ' + lockDuration + ' hours', 'Complete purchase anytime', 'Refundable if cancelled'].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-rez-gray-700 dark:text-gray-300">{point}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleLockProduct}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg active:scale-98 transition-all shadow-lg mb-2"
            >
              Confirm Lock
            </button>
            <button
              onClick={() => setShowLockModal(false)}
              className="w-full py-3 rounded-xl bg-rez-gray-100 dark:bg-dark-700 text-rez-navy dark:text-white font-semibold active:scale-98 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductServicePage;
