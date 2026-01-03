import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  Lock,
  ShoppingBag,
  Truck,
  Store,
  MapPin,
  Clock,
  ChevronRight,
  CreditCard,
  Smartphone,
  Wallet as WalletIcon,
  Shield,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Minus,
  Plus,
  Gift,
  Star,
  Share2,
  Sparkles
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import { useUser } from '../contexts/UserContext';
import Badge from '../components/common/Badge';

const ProductCheckout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { rezCoinsData, promoCoins, brandedCoins, priveCoins, totalCoinsValue } = useWallet();
  const { user } = useUser();

  // State
  const [deliveryOption, setDeliveryOption] = useState('delivery'); // 'delivery', 'pickup', 'later'
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [usePromoCoins, setUsePromoCoins] = useState(true);
  const [useBrandedCoins, setUseBrandedCoins] = useState(true);
  const [useRezCoins, setUseRezCoins] = useState(true);
  const [usePriveCoins, setUsePriveCoins] = useState(true);
  const [showCoinDetails, setShowCoinDetails] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showWalletBreakdown, setShowWalletBreakdown] = useState(false);
  const [animateCTA, setAnimateCTA] = useState(false);

  // Get product data from navigation state or use mock data
  const productFromState = location.state || null;

  const product = productFromState || {
    id: 'sony-headphones',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    brand: 'Tech Galaxy',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200',
    mrp: 29990,
    rezPrice: 24990,
    savings: 5000,
    coinsEarned: 2499,
    cashback: 1200,
    quantity: 1,
    isLocked: false,
    lockAmount: 2499,
    remainingAmount: 22491,
    lockTimeRemaining: '2h 15m',
    deliveryFee: 99,
    deliveryFeeReturnAsCoins: true,
    deliveryTime: '60 mins',
    storePickup: true,
    storeAddress: 'Tech Galaxy, 123 Indiranagar, Bangalore',
    storeDistance: '2.3 km'
  };

  // Normalize the data structure from ProductServicePage
  const productData = {
    id: product.productId || product.id,
    name: product.productName || product.name,
    brand: product.brand,
    image: product.productImage || product.image,
    mrp: product.mrp,
    rezPrice: product.rezPrice,
    savings: product.savings,
    coinsEarned: product.coinsEarnable || product.coinsEarned,
    quantity: product.quantity || 1,
    isLocked: product.isLocked || false,
    lockPrice: product.lockPrice || 0,
    remainingPrice: product.remainingPrice || product.rezPrice,
    timeRemaining: product.timeRemaining,
    purchaseOption: product.purchaseOption || 'direct',
    deliveryFee: product.deliveryFee || 99,
    storeAddress: product.storeAddress || 'Store Address',
    storeDistance: product.storeDistance || 'N/A'
  };

  // Set initial delivery option based on purchase option from product page
  useEffect(() => {
    if (productData.purchaseOption === 'store') {
      setDeliveryOption('later');
    } else if (productData.purchaseOption === 'delivery') {
      setDeliveryOption('delivery');
    } else if (productData.purchaseOption === 'online') {
      setDeliveryOption('pickup');
    }
  }, [productData.purchaseOption]);

  // Calculate coin usage
  const maxCoinsUsable = Math.min(
    totalCoinsValue || 0,
    Math.floor(productData.rezPrice * 0.3) // Max 30% can be paid with coins
  );

  const calculateCoinsToUse = () => {
    let coinsUsed = 0;

    // Priority 1: Promo Coins (expiring soon)
    if (usePromoCoins && promoCoins?.balance) {
      const promoUsable = Math.min(
        promoCoins.balance,
        Math.floor(productData.rezPrice * 0.2) // Promo coins max 20%
      );
      coinsUsed += promoUsable;
    }

    // Priority 2: Branded Coins (brand-specific)
    if (useBrandedCoins && Array.isArray(brandedCoins)) {
      const brandedTotal = brandedCoins.reduce((sum, coin) => sum + coin.balance, 0);
      const remaining = maxCoinsUsable - coinsUsed;
      coinsUsed += Math.min(brandedTotal, remaining);
    }

    // Priority 3: ReZ Coins (universal)
    if (useRezCoins && rezCoinsData?.balance) {
      const remaining = maxCoinsUsable - coinsUsed;
      coinsUsed += Math.min(rezCoinsData.balance, remaining);
    }

    // Priority 4: Privé Coins (most powerful, applied last - members only)
    if (usePriveCoins && user?.isPriveMember && priveCoins?.balance) {
      const remaining = maxCoinsUsable - coinsUsed;
      coinsUsed += Math.min(priveCoins.balance, remaining);
    }

    return Math.min(coinsUsed, maxCoinsUsable);
  };

  const coinsUsed = calculateCoinsToUse();
  const itemTotal = productData.isLocked ? productData.remainingPrice : productData.rezPrice;
  const deliveryCharge = deliveryOption === 'delivery' ? productData.deliveryFee : 0;
  const amountPayable = itemTotal - coinsUsed + deliveryCharge;

  // Trigger CTA animation when coins are applied
  useEffect(() => {
    if (coinsUsed > 0) {
      setAnimateCTA(true);
      const timer = setTimeout(() => setAnimateCTA(false), 600);
      return () => clearTimeout(timer);
    }
  }, [coinsUsed]);

  const handlePlaceOrder = () => {
    // Handle order placement
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4 animate-pulse">
              <CheckCircle className="w-12 h-12 text-emerald-400" />
            </div>
            <h1 className="text-3xl font-bold text-rez-navy dark:text-white mb-2">🎉 Order Confirmed!</h1>
            <p className="text-rez-gray-600 dark:text-gray-400">Your order has been placed successfully</p>
          </div>

          <div className="p-6 rounded-3xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 mb-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-rez-gray-600 dark:text-gray-400">Order ID</p>
              <p className="text-sm font-mono text-rez-navy dark:text-white">#RZ{Date.now().toString().slice(-6)}</p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-rez-gray-600 dark:text-gray-400">Amount Paid</p>
              <p className="text-lg font-bold text-rez-navy dark:text-white">₹{amountPayable.toLocaleString()}</p>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/20">
              <p className="text-sm text-emerald-300">Coins Earned</p>
              <p className="text-lg font-bold text-emerald-400">{productData.coinsEarned} 🪙</p>
            </div>
          </div>

          {/* Social Nudge */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-600/20 border border-purple-500/30 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <p className="text-sm font-semibold text-rez-navy dark:text-white">Unlock More Rewards</p>
            </div>
            <p className="text-xs text-rez-gray-700 dark:text-gray-300 mb-4">
              People who share earn 2× more ReZ Coins. Share your experience and double your rewards!
            </p>
            <div className="flex gap-2">
              <button className="flex-1 py-3 rounded-xl bg-purple-500 text-rez-navy dark:text-white text-sm font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform">
                <Share2 className="w-4 h-4" />
                Share Now
              </button>
              <button className="flex-1 py-3 rounded-xl bg-amber-500 text-rez-navy dark:text-white text-sm font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform">
                <Star className="w-4 h-4" />
                Review for Coins
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full py-4 rounded-2xl bg-emerald-500 text-rez-navy dark:text-white font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform">
              <MapPin className="w-5 h-5" />
              Track Order
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full py-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 text-rez-navy dark:text-white font-medium active:scale-95 transition-transform"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-32">
      {/* 🔝 TOP BAR */}
      <div className="sticky top-0 z-50 glass">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-semibold text-rez-navy dark:text-white">Secure Checkout</span>
          </div>
          <button
            onClick={() => setShowWalletBreakdown(!showWalletBreakdown)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-500/20 border border-amber-500/30 active:scale-95 transition-transform"
          >
            <span className="text-amber-400">🪙</span>
            <span className="text-xs font-medium text-rez-navy dark:text-white">
              ReZ: {rezCoinsData?.balance || 0}
              {promoCoins?.balance > 0 && ` | Promo: ${promoCoins.balance}`}
              {Array.isArray(brandedCoins) && brandedCoins.length > 0 && ` | Brand: ${brandedCoins.reduce((sum, coin) => sum + coin.balance, 0)}`}
              {user?.isPriveMember && priveCoins?.balance > 0 && ` | 👑: ${priveCoins.balance}`}
            </span>
          </button>
        </div>

        {/* Wallet Breakdown Bottom Sheet */}
        {showWalletBreakdown && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl bg-white dark:bg-black border border-rez-gray-200 dark:border-white/10 shadow-xl z-50">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-rez-navy dark:text-white">Your Wallet</h4>
              <button
                onClick={() => setShowWalletBreakdown(false)}
                className="text-rez-gray-600 dark:text-gray-400 text-xs"
              >
                Close
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-500/10">
                <span className="text-xs text-rez-gray-700 dark:text-gray-300">ReZ Coins</span>
                <span className="text-sm font-semibold text-emerald-400">{rezCoinsData?.balance || 0}</span>
              </div>
              {promoCoins?.balance > 0 && (
                <div className="flex items-center justify-between p-2 rounded-xl bg-amber-500/10">
                  <span className="text-xs text-rez-gray-700 dark:text-gray-300">Promo Coins</span>
                  <span className="text-sm font-semibold text-amber-400">{promoCoins.balance}</span>
                </div>
              )}
              {Array.isArray(brandedCoins) && brandedCoins.map((coin, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-purple-500/10">
                  <span className="text-xs text-rez-gray-700 dark:text-gray-300">{coin.brand} Coins</span>
                  <span className="text-sm font-semibold text-purple-400">{coin.balance}</span>
                </div>
              ))}
              {user?.isPriveMember && priveCoins?.balance > 0 && (
                <div className="flex items-center justify-between p-2 rounded-xl bg-gradient-to-r from-[#D4AF37]/20 to-amber-500/20 border border-[#D4AF37]/30">
                  <div className="flex items-center gap-1">
                    <span className="text-xl">👑</span>
                    <span className="text-xs text-[#D4AF37] font-semibold">Privé Coins</span>
                  </div>
                  <span className="text-sm font-bold text-[#D4AF37]">{priveCoins.balance}</span>
                </div>
              )}
            </div>
            <div className="mt-3 pt-3 border-t border-rez-gray-200 dark:border-white/10 flex items-center justify-between">
              <span className="text-xs text-rez-gray-600 dark:text-gray-400">Total Value</span>
              <span className="text-base font-bold text-rez-navy dark:text-white">₹{totalCoinsValue}</span>
            </div>
          </div>
        )}
      </div>

      {/* 🛍️ PRODUCT SUMMARY */}
      <div className="px-4 py-4">
        <h3 className="text-sm font-semibold text-rez-gray-600 dark:text-gray-400 mb-3">Order Summary</h3>
        <div className="p-4 rounded-2xl bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 shadow-sm dark:shadow-none flex items-center gap-4">
          <img
            src={productData.image}
            alt={productData.name}
            className="w-20 h-20 rounded-xl object-cover"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold text-rez-navy dark:text-white mb-1 line-clamp-2">{productData.name}</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">{productData.brand}</p>
            {productData.isLocked && (
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-purple-500/20 border border-purple-500/30 w-fit">
                <Lock className="w-3 h-3 text-purple-400" />
                <span className="text-xs font-semibold text-purple-400">
                  Locked • {productData.timeRemaining} left
                </span>
              </div>
            )}
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-rez-navy dark:text-white">₹{itemTotal.toLocaleString()}</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Qty: {productData.quantity}</p>
          </div>
        </div>

        {/* Locked Product Note */}
        {productData.isLocked && (
          <div className="mt-3 p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30 flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center flex-shrink-0">
              <Lock className="w-5 h-5 text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-rez-navy dark:text-white mb-1">
                🔒 Product Locked
              </p>
              <p className="text-xs text-rez-gray-700 dark:text-gray-300">
                This item is reserved for you. Complete payment within {productData.timeRemaining} to secure your purchase.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 💰 PRICE & SAVINGS BREAKDOWN */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-rez-gray-600 dark:text-gray-400 mb-3">Price & Savings</h3>
        <div className="p-5 rounded-2xl bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
          {productData.isLocked && (
            <div className="flex items-center justify-between mb-3 pb-3 border-b border-rez-gray-200 dark:border-white/10">
              <span className="text-sm text-rez-gray-700 dark:text-gray-300">Already Paid (Lock Amount)</span>
              <span className="text-sm font-semibold text-purple-400">−₹{productData.lockPrice.toLocaleString()}</span>
            </div>
          )}

          <div className="space-y-2 mb-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-rez-gray-600 dark:text-gray-400">MRP</span>
              <span className="text-rez-gray-500 dark:text-gray-500 line-through">₹{productData.mrp.toLocaleString()}</span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-rez-gray-700 dark:text-gray-300 font-medium">ReZ Price</span>
              <span className="text-rez-navy dark:text-white font-semibold">₹{productData.rezPrice.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎉</span>
              <span className="text-sm font-semibold text-rez-navy dark:text-white">You Save</span>
            </div>
            <span className="text-lg font-bold text-emerald-400">₹{productData.savings.toLocaleString()}</span>
          </div>

          <div className="pt-4 border-t border-rez-gray-200 dark:border-white/10">
            <p className="text-sm font-semibold text-rez-navy dark:text-white mb-3">💰 Rewards Preview</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-500/10">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🪙</span>
                  <span className="text-sm text-rez-gray-700 dark:text-gray-300">Earn ReZ Coins</span>
                </div>
                <span className="text-sm font-bold text-amber-400">{productData.coinsEarned} coins</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-500/10">
                <div className="flex items-center gap-2">
                  <span className="text-lg">💸</span>
                  <span className="text-sm text-rez-gray-700 dark:text-gray-300">Cashback</span>
                </div>
                <span className="text-sm font-bold text-emerald-400">₹{product.cashback}</span>
              </div>
            </div>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-3 text-center">
              💫 Rewards will be credited after successful delivery
            </p>
          </div>
        </div>
      </div>

      {/* 🚚 DELIVERY / PICKUP SELECTION */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-rez-gray-600 dark:text-gray-400 mb-3">Delivery / Pickup Option</h3>

        <div className="space-y-2">
          {/* 60-Min Delivery */}
          <button
            onClick={() => setDeliveryOption('delivery')}
            className={`w-full p-4 rounded-2xl border-2 flex items-start gap-3 transition-all ${
              deliveryOption === 'delivery'
                ? 'bg-blue-500/10 border-blue-500 shadow-lg shadow-blue-500/20'
                : 'bg-white dark:bg-white/5 border-rez-gray-200 dark:border-white/10 hover:border-blue-500/50'
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-bold text-rez-navy dark:text-white">60-Minute Home Delivery</p>
                {deliveryOption === 'delivery' && (
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                )}
              </div>
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-3.5 h-3.5 text-rez-gray-500 dark:text-gray-400" />
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                  Estimated delivery: {product.deliveryTime || '60 mins'}
                </p>
              </div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">
                Delivery fee: ₹{productData.deliveryFee}
              </p>
              {product.deliveryFeeReturnAsCoins && (
                <div className="flex items-start gap-1.5 p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-blue-300">
                    Delivery fee returned as ReZ Coins after sharing
                  </p>
                </div>
              )}
              <p className="text-xs text-rez-gray-500 dark:text-gray-500 mt-2">
                📍 Live tracking available
              </p>
            </div>
          </button>

          {/* Store Pickup */}
          {product.storePickup && (
            <button
              onClick={() => setDeliveryOption('pickup')}
              className={`w-full p-4 rounded-2xl border-2 flex items-start gap-3 transition-all ${
                deliveryOption === 'pickup'
                  ? 'bg-emerald-500/10 border-emerald-500 shadow-lg shadow-emerald-500/20'
                  : 'bg-white dark:bg-white/5 border-rez-gray-200 dark:border-white/10 hover:border-emerald-500/50'
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Store className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-bold text-rez-navy dark:text-white">Store Pickup</p>
                  {deliveryOption === 'pickup' && (
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  )}
                </div>
                <div className="flex items-start gap-1.5 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-rez-gray-500 dark:text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                    {productData.storeAddress}
                  </p>
                </div>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">
                  {productData.storeDistance} away • Ready in 30 mins
                </p>
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-base">🌱</span>
                  <p className="text-xs text-emerald-300 font-medium">
                    No delivery fee • Eco-friendly choice
                  </p>
                </div>
                <button className="text-xs text-emerald-400 font-medium mt-2 underline">
                  View on Map
                </button>
              </div>
            </button>
          )}

          {/* Visit Later (if locked) */}
          {productData.isLocked && (
            <button
              onClick={() => setDeliveryOption('later')}
              className={`w-full p-4 rounded-2xl border-2 flex items-start gap-3 transition-all ${
                deliveryOption === 'later'
                  ? 'bg-purple-500/10 border-purple-500 shadow-lg shadow-purple-500/20'
                  : 'bg-white dark:bg-white/5 border-rez-gray-200 dark:border-white/10 hover:border-purple-500/50'
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-bold text-rez-navy dark:text-white">Visit Store Later</p>
                  {deliveryOption === 'later' && (
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                  )}
                </div>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">
                  Pay remaining amount at store within {productData.timeRemaining}
                </p>
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <Lock className="w-3.5 h-3.5 text-purple-400" />
                  <p className="text-xs text-purple-300">
                    Item reserved • Confirmation sent to your phone
                  </p>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>

      {/* 🪙 APPLY REZ COINS */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-rez-gray-600 dark:text-gray-400 mb-3">Wallet Usage</h3>
        <div className="p-5 rounded-2xl bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
          <button
            onClick={() => setShowCoinDetails(!showCoinDetails)}
            className="w-full flex items-center justify-between mb-3"
          >
            <div className="flex items-center gap-2">
              <WalletIcon className="w-5 h-5 text-amber-400" />
              <h3 className="text-base font-bold text-rez-navy dark:text-white">Apply ReZ Coins</h3>
              {coinsUsed > 0 && (
                <Badge variant="default" size="sm" className="bg-emerald-500/20 text-emerald-400 ml-2">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Best Savings Applied
                </Badge>
              )}
            </div>
            {showCoinDetails ? (
              <ChevronUp className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
            )}
          </button>

          <div className="flex items-center justify-between mb-3 p-3 rounded-xl bg-gradient-to-r from-emerald-500/20 to-amber-500/10 border border-emerald-500/30">
            <span className="text-sm text-rez-navy dark:text-white font-semibold">Coins Applied</span>
            <span className="text-lg font-bold text-emerald-400">−₹{coinsUsed}</span>
          </div>

          {showCoinDetails && (
            <div className="space-y-3 pt-3 border-t border-rez-gray-200 dark:border-white/10">
              {/* Promo Coins */}
              {promoCoins?.balance > 0 && (
                <label className="flex items-center justify-between p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 cursor-pointer hover:bg-rez-gray-100 dark:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={usePromoCoins}
                      onChange={(e) => setUsePromoCoins(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <div>
                      <p className="text-sm font-medium text-rez-navy dark:text-white">Use Promo Coins</p>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">Max 20% per bill</p>
                    </div>
                  </div>
                  <span className="text-sm text-amber-400">{promoCoins.balance} available</span>
                </label>
              )}

              {/* Branded Coins */}
              {Array.isArray(brandedCoins) && brandedCoins.length > 0 && (
                <label className="flex items-center justify-between p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 cursor-pointer hover:bg-rez-gray-100 dark:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={useBrandedCoins}
                      onChange={(e) => setUseBrandedCoins(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <div>
                      <p className="text-sm font-medium text-rez-navy dark:text-white">Use Branded Coins</p>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">Merchant specific</p>
                    </div>
                  </div>
                  <span className="text-sm text-purple-400">
                    {brandedCoins.reduce((sum, coin) => sum + coin.balance, 0)} available
                  </span>
                </label>
              )}

              {/* ReZ Coins */}
              {rezCoinsData?.balance > 0 && (
                <label className="flex items-center justify-between p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 cursor-pointer hover:bg-rez-gray-100 dark:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={useRezCoins}
                      onChange={(e) => setUseRezCoins(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <div>
                      <p className="text-sm font-medium text-rez-navy dark:text-white">Use ReZ Coins</p>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">Universal coins</p>
                    </div>
                  </div>
                  <span className="text-sm text-emerald-400">{rezCoinsData.balance} available</span>
                </label>
              )}

              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <p className="text-xs font-semibold text-rez-navy dark:text-white">Auto-Apply Recommendation</p>
                </div>
                <p className="text-xs text-rez-gray-700 dark:text-gray-300">
                  Best savings applied automatically. You can manually override the selection above.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 🧾 FINAL PAYMENT SUMMARY */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-rez-gray-600 dark:text-gray-400 mb-3">Final Payment Summary</h3>
        <div className="p-5 rounded-2xl bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
          <div className="space-y-2.5 mb-4">
            {productData.isLocked && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-rez-gray-600 dark:text-gray-400">Already Paid</span>
                <span className="text-rez-gray-600 dark:text-gray-400">₹{productData.lockPrice.toLocaleString()}</span>
              </div>
            )}

            <div className="flex items-center justify-between text-sm">
              <span className="text-rez-gray-700 dark:text-gray-300">
                {productData.isLocked ? 'Remaining Item Total' : 'Item Total'}
              </span>
              <span className="text-rez-navy dark:text-white font-medium">₹{itemTotal.toLocaleString()}</span>
            </div>

            {coinsUsed > 0 && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-rez-gray-700 dark:text-gray-300">Coins Used</span>
                <span className="text-emerald-400 font-semibold">−₹{coinsUsed}</span>
              </div>
            )}

            {deliveryCharge > 0 && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-rez-gray-700 dark:text-gray-300">Delivery Fee</span>
                <span className="text-rez-navy dark:text-white">+₹{deliveryCharge}</span>
              </div>
            )}
          </div>

          <div className="pt-4 border-t-2 border-rez-gray-200 dark:border-white/20 flex items-center justify-between">
            <div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">
                {productData.isLocked ? 'Remaining to Pay' : 'Amount Payable'}
              </p>
              <p className="text-base font-bold text-rez-navy dark:text-white">
                ₹{amountPayable.toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-emerald-400 mb-1">Total Savings</p>
              <p className="text-base font-bold text-emerald-400">
                ₹{(productData.savings + coinsUsed).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔐 PAYMENT METHOD */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-rez-gray-600 dark:text-gray-400 mb-3">Payment Method</h3>

        <div className="space-y-2.5">
          <label className={`flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
            paymentMethod === 'upi'
              ? 'bg-blue-500/10 border-blue-500'
              : 'bg-white dark:bg-white/5 border-rez-gray-200 dark:border-white/10 hover:border-blue-500/50'
          }`}>
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-4 h-4 accent-blue-500"
            />
            <div className="w-9 h-9 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-rez-navy dark:text-white">UPI</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Google Pay, PhonePe, Paytm</p>
            </div>
            {paymentMethod === 'upi' && (
              <CheckCircle className="w-5 h-5 text-blue-400" />
            )}
          </label>

          <label className={`flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
            paymentMethod === 'card'
              ? 'bg-purple-500/10 border-purple-500'
              : 'bg-white dark:bg-white/5 border-rez-gray-200 dark:border-white/10 hover:border-purple-500/50'
          }`}>
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-4 h-4 accent-purple-500"
            />
            <div className="w-9 h-9 rounded-full bg-purple-500/20 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-rez-navy dark:text-white">Card</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Credit, Debit, or ATM Card</p>
            </div>
            {paymentMethod === 'card' && (
              <CheckCircle className="w-5 h-5 text-purple-400" />
            )}
          </label>

          <label className={`flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
            paymentMethod === 'wallet'
              ? 'bg-emerald-500/10 border-emerald-500'
              : 'bg-white dark:bg-white/5 border-rez-gray-200 dark:border-white/10 hover:border-emerald-500/50'
          }`}>
            <input
              type="radio"
              name="payment"
              value="wallet"
              checked={paymentMethod === 'wallet'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-4 h-4 accent-emerald-500"
            />
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <WalletIcon className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-rez-navy dark:text-white">Wallet</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Paytm, Amazon Pay, etc.</p>
            </div>
            {paymentMethod === 'wallet' && (
              <CheckCircle className="w-5 h-5 text-emerald-400" />
            )}
          </label>
        </div>

        <div className="mt-3 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-green-400" />
            <p className="text-sm font-semibold text-green-300">100% Secure Payment</p>
          </div>
          <p className="text-xs text-rez-gray-700 dark:text-gray-300">
            Powered by trusted banking partners. Your payment information is encrypted and never stored.
          </p>
        </div>
      </div>

      {/* 🔘 STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-rez-gray-200 dark:border-white/10 p-4">
        {coinsUsed > 0 && (
          <div className="mb-3 p-3 rounded-xl bg-gradient-to-r from-emerald-500/20 to-amber-500/10 border border-emerald-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-emerald-300 font-semibold">
                You're saving ₹{coinsUsed} with coins!
              </span>
            </div>
            <span className="text-xs text-amber-400 font-semibold">
              🎉 Best Deal
            </span>
          </div>
        )}

        <button
          onClick={handlePlaceOrder}
          className={`w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white dark:text-white font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg ${
            animateCTA ? 'scale-105 shadow-emerald-500/50' : 'scale-100'
          }`}
        >
          <Shield className="w-5 h-5" />
          {productData.isLocked ? `Pay ₹${amountPayable.toLocaleString()} & Complete Purchase` : `Pay ₹${amountPayable.toLocaleString()} & Place Order`}
        </button>

        <p className="text-center text-xs text-rez-gray-600 dark:text-gray-400 mt-2">
          By placing your order, you agree to ReZ's Terms & Conditions
        </p>
      </div>
    </div>
  );
};

export default ProductCheckout;
