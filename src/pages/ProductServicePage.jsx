import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Heart,
  Share2,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  Lock,
  Store,
  Truck,
  Globe,
  ChevronRight,
  Calendar,
  Users,
  Award,
  Timer,
  Sparkles,
  ShoppingCart,
  AlertCircle,
  X,
  Package,
  TrendingUp,
  Gift,
  Zap,
  Trophy
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import Badge from '../components/common/Badge';

const ProductServicePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { rezCoins, totalCoinsValue } = useWallet();

  // State
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [isLocked, setIsLocked] = useState(false);
  const [lockDuration, setLockDuration] = useState(2); // hours
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [purchaseOption, setPurchaseOption] = useState(null); // 'store', 'delivery', 'online'
  const [isSaved, setIsSaved] = useState(false);

  // Mock product data (in real app, fetch from API)
  const product = {
    id: id,
    type: 'product', // 'product', 'service', 'online'
    name: 'Sony WH-1000XM5 Wireless Headphones',
    brand: 'Tech Galaxy',
    category: 'Electronics',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600'
    ],
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
    lockDurations: [2, 4, 8], // hours

    // Delivery/Pickup
    delivery60Min: true,
    deliveryFee: 99,
    deliveryFeeReturnAsCoins: true,
    storePickup: true,
    storeAddress: 'Tech Galaxy, 123 Indiranagar, Bangalore',
    storeDistance: '2.3 km',

    // Details
    description: 'Industry-leading noise cancellation with Auto NC Optimizer. Up to 30 hours battery life. Crystal clear hands-free calling. Multipoint connection. Speak-to-chat technology.',
    specifications: [
      { label: 'Battery Life', value: '30 hours' },
      { label: 'Noise Cancellation', value: 'Industry-leading' },
      { label: 'Connectivity', value: 'Bluetooth 5.2, Multipoint' },
      { label: 'Weight', value: '250g' },
      { label: 'Warranty', value: '1 year manufacturer' }
    ],

    // AI suggestion
    aiSuggestion: 'This product is usually bought on weekends — locking now saves ₹5,000. Price may increase during sale season.',

    // Urgency
    urgency: {
      type: 'limited_stock',
      message: 'Only 5 left in stock',
      icon: '🔥'
    }
  };

  // Calculate prices
  const lockPrice = Math.round(product.rezPrice * (product.lockPercentage / 100));
  const remainingPrice = product.rezPrice - lockPrice;
  const finalPrice = product.rezPrice * quantity;
  const totalSavings = product.savings * quantity;
  const totalCoinsEarned = product.coinsEarned * quantity;

  // Lock timer effect
  useEffect(() => {
    if (isLocked && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setIsLocked(false);
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
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const handleLockProduct = () => {
    setIsLocked(true);
    setTimeRemaining(lockDuration * 3600); // Convert hours to seconds
  };

  const handleCancelLock = () => {
    setIsLocked(false);
    setTimeRemaining(null);
  };

  const handlePurchaseOption = (option) => {
    // Navigate to checkout with product details and purchase option
    navigate(`/checkout/product/${id}`, {
      state: {
        productId: id,
        productName: product.name,
        productImage: product.images[0],
        brand: product.brand,
        quantity: quantity,
        mrp: product.mrp,
        rezPrice: product.rezPrice,
        savings: product.savings,
        coinsEarnable: product.coinsEarned,
        isLocked: isLocked,
        lockPrice: isLocked ? lockPrice : 0,
        remainingPrice: isLocked ? remainingPrice : product.rezPrice,
        timeRemaining: isLocked ? timeRemaining : null,
        purchaseOption: option, // 'store', 'delivery', 'online', or 'direct'
        deliveryFee: option === 'delivery' ? product.deliveryFee : 0,
        storeAddress: product.storeAddress,
        storeDistance: product.storeDistance
      }
    });
  };

  const handleBuyNow = () => {
    handlePurchaseOption('direct');
  };

  return (
    <div className="min-h-screen bg-black pb-32">
      {/* 🔝 TOP BAR */}
      <div className="sticky top-0 z-50 glass">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center gap-2">
            {/* Wallet Pill */}
            <Link to="/wallet" className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-500/20">
              <span className="text-amber-400">🪙</span>
              <span className="text-sm font-medium text-amber-400">{totalCoinsValue}</span>
            </Link>

            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2 rounded-full ${isSaved ? 'bg-red-500/20' : 'bg-white/10'}`}
            >
              <Heart className={`w-5 h-5 ${isSaved ? 'text-red-400 fill-red-400' : 'text-white'}`} />
            </button>

            <button className="p-2 rounded-full bg-white/10">
              <Share2 className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* 🖼️ HERO SECTION */}
      <div className="px-4 py-4">
        {/* Image Carousel */}
        <div className="mb-4">
          <div className="relative rounded-3xl overflow-hidden bg-white/5 aspect-square">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.inStock && (
                <Badge variant="success" size="sm">🟢 In Stock</Badge>
              )}
              {product.delivery60Min && (
                <Badge variant="default" size="sm" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  🚚 60-Min Delivery
                </Badge>
              )}
              {product.lockable && (
                <Badge variant="default" size="sm" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  🔒 Lock Price Available
                </Badge>
              )}
            </div>
            {product.urgency && (
              <div className="absolute top-4 right-4">
                <Badge variant="default" size="sm" className="bg-red-500/20 text-red-400 border-red-500/30">
                  {product.urgency.icon} {product.urgency.message}
                </Badge>
              </div>
            )}
            {/* Rating Badge */}
            <div className="absolute bottom-4 left-4">
              <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-sm font-semibold text-white">{product.rating}</span>
                <span className="text-xs text-gray-300">({product.reviews})</span>
              </div>
            </div>
          </div>

          {/* Image Thumbnails */}
          <div className="flex gap-2 mt-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-16 h-16 rounded-xl overflow-hidden border-2 ${
                  selectedImage === idx ? 'border-emerald-500' : 'border-white/10'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Identity */}
        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-1">{product.category} · {product.brand}</p>
          <h1 className="text-2xl font-bold text-white mb-2">{product.name}</h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-sm font-semibold text-white">{product.rating}</span>
              <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
            </div>
            {product.verified && (
              <Badge variant="success" size="sm">
                <CheckCircle className="w-3 h-3 mr-1" />
                Verified on ReZ
              </Badge>
            )}
          </div>

          {product.storePickup && (
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-300">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Available at {product.storeAddress.split(',')[0]}</span>
              <span className="text-gray-500">• {product.storeDistance}</span>
            </div>
          )}

          {/* Trust Signals */}
          <div className="flex flex-wrap gap-2 mt-3">
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              <span className="text-xs text-emerald-300">Pay with ReZ</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              <Gift className="w-3 h-3 text-amber-400" />
              <span className="text-xs text-amber-300">Earn Cashback</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Package className="w-3 h-3 text-blue-400" />
              <span className="text-xs text-blue-300">Easy Returns</span>
            </div>
          </div>
        </div>

        {/* Brand Loyalty Section */}
        <Link
          to={`/brand/${product.brand.toLowerCase().replace(/\s+/g, '-')}`}
          className="block p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-amber-500/10 border border-emerald-500/20 mt-4"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-semibold text-white">Loyalty Status with {product.brand}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="px-2 py-1 rounded-lg bg-white/10">
                <p className="text-xs text-gray-400">Visits</p>
                <p className="text-sm font-bold text-white">8</p>
              </div>
              <div className="px-2 py-1 rounded-lg bg-white/10">
                <p className="text-xs text-gray-400">Tier</p>
                <p className="text-sm font-bold text-amber-400">Silver</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">Next reward in</p>
              <p className="text-sm font-bold text-emerald-400">2 visits</p>
            </div>
          </div>
        </Link>
      </div>

      {/* 💰 PRICE & SAVINGS BLOCK */}
      <div className="px-4 mb-6">
        <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-emerald-600/10 to-amber-500/10 border border-emerald-500/30">
          <p className="text-sm text-gray-300 mb-3">Price Breakdown</p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400 line-through">MRP</span>
              <span className="text-sm text-gray-400 line-through">₹{product.mrp.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base text-white font-semibold">ReZ Price</span>
              <span className="text-2xl text-white font-bold">₹{product.rezPrice.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-500/20">
              <span className="text-sm text-emerald-300 font-semibold">🎉 You Save</span>
              <span className="text-lg text-emerald-400 font-bold">₹{product.savings.toLocaleString()}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-sm text-gray-300 mb-3">🎁 Rewards You'll Earn</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">🪙 ReZ Coins</span>
                <span className="text-amber-400 font-semibold">{product.coinsEarned}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">💸 Cashback</span>
                <span className="text-emerald-400 font-semibold">₹{product.cashback}</span>
              </div>
              {product.extraCoinsOnShare && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">🔥 Bonus (Share after purchase)</span>
                  <span className="text-purple-400 font-semibold">+{product.extraCoinsOnShare} coins</span>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              💡 Rewards are credited instantly after payment
            </p>
          </div>
        </div>
      </div>

      {/* 🔥 URGENCY & STOCK STATUS */}
      {(product.urgency || product.stockCount < 10) && (
        <div className="px-4 mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-red-500/20 to-orange-500/10 border border-red-500/30 flex items-center gap-3">
            <Timer className="w-5 h-5 text-red-400 flex-shrink-0" />
            <div className="flex-1">
              {product.stockCount && product.stockCount < 10 && (
                <p className="text-sm font-semibold text-red-300">
                  ⚠ Only {product.stockCount} left in stock
                </p>
              )}
              {product.urgency && product.urgency.type === 'viewing' && (
                <p className="text-xs text-orange-300 mt-1">
                  👀 {Math.floor(Math.random() * 20) + 10} people viewing now
                </p>
              )}
              {product.urgency && product.urgency.type === 'time_limited' && (
                <p className="text-xs text-orange-300 mt-1">
                  ⏰ Offer ends in 3h 20m
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 🎯 REZ BENEFITS STRIP */}
      <div className="px-4 mb-6">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 whitespace-nowrap">
            <span className="text-lg">🪙</span>
            <span className="text-sm font-semibold text-amber-300">Pay with ReZ</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 whitespace-nowrap">
            <span className="text-lg">💸</span>
            <span className="text-sm font-semibold text-emerald-300">Cashback Guaranteed</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 whitespace-nowrap">
            <span className="text-lg">🔁</span>
            <span className="text-sm font-semibold text-blue-300">Easy Refunds</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 whitespace-nowrap">
            <span className="text-lg">📍</span>
            <span className="text-sm font-semibold text-purple-300">Nearby Store</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-pink-500/20 border border-pink-500/30 whitespace-nowrap">
            <span className="text-lg">🧠</span>
            <span className="text-sm font-semibold text-pink-300">AI Best Price</span>
          </div>
        </div>
      </div>

      {/* 🔐 LOCK PRODUCT FEATURE */}
      {product.lockable && !isLocked && (
        <div className="px-4 mb-6">
          <div className="p-5 rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-600/10 border border-purple-500/30">
            <div className="flex items-center gap-2 mb-3">
              <Lock className="w-5 h-5 text-purple-400" />
              <h2 className="text-lg font-bold text-white">🔥 Lock this product now</h2>
            </div>

            <p className="text-sm text-gray-300 mb-4">
              Pay just {product.lockPercentage}% to reserve this product. Visit the store or choose delivery later — price stays locked.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-300">Lock Price ({product.lockPercentage}%)</span>
                <span className="text-2xl font-bold text-purple-400">₹{lockPrice}</span>
              </div>

              <p className="text-xs text-gray-400 mb-3">Lock Duration:</p>
              <div className="flex gap-2">
                {product.lockDurations.map((hours) => (
                  <button
                    key={hours}
                    onClick={() => setLockDuration(hours)}
                    className={`flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                      lockDuration === hours
                        ? 'bg-purple-500/30 text-purple-300 border-2 border-purple-500/50'
                        : 'bg-white/5 text-gray-400 border border-white/10'
                    }`}
                  >
                    ⏳ {hours}h
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleLockProduct}
              className="w-full py-4 rounded-2xl bg-purple-500 text-white font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <Lock className="w-5 h-5" />
              Lock Product for ₹{lockPrice}
            </button>

            <div className="mt-3 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <p className="text-xs text-blue-300">🔒 Price protected • Product reserved under your name</p>
            </div>
          </div>
        </div>
      )}

      {/* 🔒 LOCKED STATUS */}
      {isLocked && (
        <div className="px-4 mb-6">
          <div className="p-5 rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-600/10 border border-green-500/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-500/30 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">🔒 Product Locked</p>
                  <p className="text-sm text-gray-300">Price protected at ₹{product.rezPrice.toLocaleString()}</p>
                </div>
              </div>
              <button onClick={handleCancelLock} className="text-red-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            {timeRemaining && (
              <div className="p-3 rounded-xl bg-white/10 mb-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Time Remaining</p>
                <p className="text-2xl font-bold text-white">{formatTime(timeRemaining)}</p>
              </div>
            )}

            <p className="text-sm text-gray-300 mb-4">
              Complete your purchase by choosing one of these options:
            </p>

            {/* Purchase Options */}
            <div className="space-y-2">
              <button
                onClick={() => handlePurchaseOption('store')}
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between active:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Store className="w-5 h-5 text-emerald-400" />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white">Visit Store & Pay</p>
                    <p className="text-xs text-gray-400">Remaining: ₹{remainingPrice.toLocaleString()}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              {product.delivery60Min && (
                <button
                  onClick={() => handlePurchaseOption('delivery')}
                  className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between active:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-blue-400" />
                    <div className="text-left">
                      <p className="text-sm font-semibold text-white">Get Delivered in 60 Min</p>
                      <p className="text-xs text-gray-400">
                        Fee: ₹{product.deliveryFee} {product.deliveryFeeReturnAsCoins && '(returned as coins)'}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              )}

              <button
                onClick={() => handlePurchaseOption('online')}
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between active:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white">Buy Online Now</p>
                    <p className="text-xs text-gray-400">Complete payment online</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🪙 PAY WITH REZ */}
      {!isLocked && (
        <div className="px-4 mb-6">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-base font-bold text-white mb-3">Pay with ReZ</h3>

            <div className="space-y-2">
              <label className="flex items-center gap-3 p-3 rounded-xl bg-white/5 cursor-pointer">
                <input type="radio" name="payment" className="w-4 h-4" defaultChecked />
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">✔ Mix Coins + Cash</p>
                  <p className="text-xs text-gray-400">Maximum savings applied automatically</p>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl bg-white/5 cursor-pointer">
                <input type="radio" name="payment" className="w-4 h-4" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">✔ Pay Normally & Earn Later</p>
                  <p className="text-xs text-gray-400">Get full cashback + coins</p>
                </div>
              </label>
            </div>

            <div className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-xs text-emerald-300">💡 Coins auto-apply for maximum savings</p>
            </div>
          </div>
        </div>
      )}

      {/* 🎁 OFFERS & DEALS */}
      <div className="px-4 mb-6">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white">🎁 Offers & Deals</h3>
            <button className="text-xs text-emerald-400 font-semibold">View All</button>
          </div>

          {/* Applied Automatically */}
          <div className="mb-4">
            <p className="text-xs text-gray-400 mb-2">✅ Applied Automatically</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-emerald-300">15% ReZ Discount</p>
                  <p className="text-xs text-gray-400">Save ₹{Math.round(product.mrp * 0.15)}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-amber-300">₹{product.cashback} Cashback</p>
                  <p className="text-xs text-gray-400">Credited as ReZ Coins</p>
                </div>
              </div>
            </div>
          </div>

          {/* Available Offers */}
          <div>
            <p className="text-xs text-gray-400 mb-2">💡 Available Offers</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                <Gift className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">Pay via UPI → Extra 2%</p>
                  <p className="text-xs text-gray-400">Get additional savings</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">Use Promo Coins → Save ₹100</p>
                  <p className="text-xs text-gray-400">If you have promo coins available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🧠 AI SUGGESTION */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-600/10 border border-amber-500/30">
          <div className="flex gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-white mb-1">Why This is a Good Deal</p>
              <p className="text-sm text-gray-300">{product.aiSuggestion}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 📋 DETAILS TABS */}
      <div className="px-4 mb-6">
        <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar">
          {['description', 'specifications', 'reviews', 'lock-info', 'terms'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-white/5 text-gray-400'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
          {activeTab === 'description' && (
            <p className="text-sm text-gray-300 leading-relaxed">{product.description}</p>
          )}

          {activeTab === 'specifications' && (
            <div className="space-y-3">
              {product.specifications.map((spec, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-sm text-gray-400">{spec.label}</span>
                  <span className="text-sm font-medium text-white">{spec.value}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              {/* Ratings Summary */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-white mb-1">{product.rating}</p>
                  <div className="flex items-center gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`w-3 h-3 ${star <= Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}`} />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">{product.reviews} reviews</p>
                </div>
                <div className="flex-1">
                  <div className="space-y-1">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center gap-2">
                        <span className="text-xs text-gray-400 w-8">{stars}⭐</span>
                        <div className="flex-1 h-2 rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-amber-500"
                            style={{ width: `${Math.random() * 60 + 20}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Highlights */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-white mb-2">Review Highlights</p>
                <div className="flex flex-wrap gap-2">
                  <div className="px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                    <p className="text-xs text-emerald-300">✓ Best price in area</p>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30">
                    <p className="text-xs text-blue-300">✓ Fast delivery</p>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30">
                    <p className="text-xs text-purple-300">✓ Good cashback</p>
                  </div>
                </div>
              </div>

              {/* UGC Preview */}
              <div>
                <p className="text-sm font-semibold text-white mb-2">People Near You</p>
                <div className="space-y-3">
                  {[1, 2].map((review) => (
                    <div key={review} className="p-3 rounded-xl bg-white/5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white">User {review}</p>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-3 h-3 text-amber-400 fill-amber-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-300">Great product! Got it at best price with ReZ coins.</p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-3 py-3 rounded-xl bg-purple-500/20 text-purple-300 font-semibold text-sm">
                  ⭐ Write a Review & Earn Coins
                </button>
              </div>
            </div>
          )}

          {activeTab === 'lock-info' && (
            <div className="space-y-3 text-sm text-gray-300">
              <p>• Pay {product.lockPercentage}% upfront to lock the product</p>
              <p>• Lock valid for selected duration</p>
              <p>• Remaining amount payable when you visit store or choose delivery</p>
              <p>• Lock amount is adjustable based on our policy</p>
              <p>• Price is protected during lock period</p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-3 text-sm text-gray-300">
              <p>• Easy returns within 7 days</p>
              <p>• Warranty as per manufacturer</p>
              <p>• Coins credited within 24 hours</p>
              <p>• Cashback processed within 48 hours</p>
            </div>
          )}
        </div>
      </div>

      {/* 💰 COMPARE PRICES */}
      <div className="px-4 mb-6">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-base font-bold text-white mb-4">💰 Compare Prices</h3>

          <div className="space-y-2">
            {/* This Store (Best) */}
            <div className="p-3 rounded-xl bg-emerald-500/20 border-2 border-emerald-500/50">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-semibold text-white">This Store (ReZ)</span>
                  <Badge variant="success" size="sm">Best Deal</Badge>
                </div>
                <span className="text-lg font-bold text-emerald-400">₹{product.rezPrice.toLocaleString()}</span>
              </div>
              <p className="text-xs text-emerald-300">+ ₹{product.cashback} cashback + {product.coinsEarned} coins</p>
            </div>

            {/* Other nearby stores */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white">Other Nearby Stores</p>
                  <p className="text-xs text-gray-400">Average price in your area</p>
                </div>
                <span className="text-sm font-semibold text-gray-300">₹{(product.rezPrice + 2000).toLocaleString()}</span>
              </div>
            </div>

            {/* Online platforms */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white">Online Platforms</p>
                  <p className="text-xs text-gray-400">Amazon, Flipkart avg</p>
                </div>
                <span className="text-sm font-semibold text-gray-300">₹{(product.rezPrice + 1500).toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-amber-500/10 border border-emerald-500/20">
            <p className="text-xs text-center text-emerald-300">
              🎉 You're saving ₹{product.savings.toLocaleString()} + earning rewards worth ₹{(product.cashback + product.coinsEarned).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* 🔁 SIMILAR PRODUCTS */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-white">Similar Products</h3>
          <button className="text-xs text-emerald-400 font-semibold">View All</button>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex-shrink-0 w-40 p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-2 flex items-center justify-center">
                <Package className="w-8 h-8 text-white/40" />
              </div>
              <p className="text-xs font-medium text-white mb-1 line-clamp-2">Similar Product {item}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-emerald-400">₹{(product.rezPrice - 1000).toLocaleString()}</p>
                <p className="text-xs text-amber-400">+250 🪙</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🛡️ TRUST & SAFETY */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
            <CheckCircle className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <p className="text-xs font-semibold text-white mb-1">Secure Payment</p>
            <p className="text-[10px] text-gray-400">100% Protected</p>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
            <Award className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <p className="text-xs font-semibold text-white mb-1">Verified</p>
            <p className="text-[10px] text-gray-400">Merchant</p>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
            <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <p className="text-xs font-semibold text-white mb-1">24/7 Support</p>
            <p className="text-[10px] text-gray-400">ReZ Help</p>
          </div>
        </div>
      </div>

      {/* 🔘 STICKY BOTTOM BAR */}
      <div className="fixed bottom-20 left-0 right-0 z-50 glass border-t border-white/10 p-4">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-gray-400">Final Price</p>
            <p className="text-xl font-bold text-white">₹{(isLocked ? remainingPrice : product.rezPrice).toLocaleString()}</p>
            <p className="text-xs text-emerald-400">Earn {product.coinsEarned} coins</p>
          </div>

          {!isLocked ? (
            <button
              onClick={handleBuyNow}
              className="px-8 py-4 rounded-2xl bg-emerald-500 text-white font-bold flex items-center gap-2 active:scale-95 transition-transform"
            >
              <ShoppingCart className="w-5 h-5" />
              Buy Now
            </button>
          ) : (
            <div className="text-right">
              <p className="text-xs text-gray-400 mb-1">Locked</p>
              <p className="text-sm font-bold text-emerald-400">{timeRemaining && formatTime(timeRemaining)}</p>
            </div>
          )}
        </div>
      </div>

      {/* END MESSAGE */}
      <div className="px-4 pb-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-600/10 border border-purple-500/30 text-center">
          <p className="text-sm font-semibold text-white mb-1">
            Smart people don't just buy — they earn while buying.
          </p>
          <p className="text-xs text-gray-300">That's ReZ.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductServicePage;
