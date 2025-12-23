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
import Badge from '../components/common/Badge';

const ProductCheckout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { rezCoinsData, promoCoins, brandedCoins, totalCoinsValue } = useWallet();

  // State
  const [deliveryOption, setDeliveryOption] = useState('delivery'); // 'delivery', 'pickup', 'later'
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [usePromoCoins, setUsePromoCoins] = useState(true);
  const [useBrandedCoins, setUseBrandedCoins] = useState(true);
  const [useRezCoins, setUseRezCoins] = useState(true);
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

    if (usePromoCoins && promoCoins?.balance) {
      const promoUsable = Math.min(
        promoCoins.balance,
        Math.floor(productData.rezPrice * 0.2) // Promo coins max 20%
      );
      coinsUsed += promoUsable;
    }

    if (useBrandedCoins && Array.isArray(brandedCoins)) {
      const brandedTotal = brandedCoins.reduce((sum, coin) => sum + coin.balance, 0);
      const remaining = maxCoinsUsable - coinsUsed;
      coinsUsed += Math.min(brandedTotal, remaining);
    }

    if (useRezCoins && rezCoinsData?.balance) {
      const remaining = maxCoinsUsable - coinsUsed;
      coinsUsed += Math.min(rezCoinsData.balance, remaining);
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
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4 animate-pulse">
              <CheckCircle className="w-12 h-12 text-emerald-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">🎉 Order Confirmed!</h1>
            <p className="text-gray-400">Your order has been placed successfully</p>
          </div>

          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-400">Order ID</p>
              <p className="text-sm font-mono text-white">#RZ{Date.now().toString().slice(-6)}</p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-400">Amount Paid</p>
              <p className="text-lg font-bold text-white">₹{amountPayable.toLocaleString()}</p>
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
              <p className="text-sm font-semibold text-white">Unlock More Rewards</p>
            </div>
            <p className="text-xs text-gray-300 mb-4">
              People who share earn 2× more ReZ Coins. Share your experience and double your rewards!
            </p>
            <div className="flex gap-2">
              <button className="flex-1 py-3 rounded-xl bg-purple-500 text-white text-sm font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform">
                <Share2 className="w-4 h-4" />
                Share Now
              </button>
              <button className="flex-1 py-3 rounded-xl bg-amber-500 text-white text-sm font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform">
                <Star className="w-4 h-4" />
                Review for Coins
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full py-4 rounded-2xl bg-emerald-500 text-white font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform">
              <MapPin className="w-5 h-5" />
              Track Order
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full py-4 rounded-2xl bg-white/5 text-white font-medium active:scale-95 transition-transform"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pb-32">
      {/* 🔝 TOP BAR */}
      <div className="sticky top-0 z-50 glass">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-semibold text-white">Secure Checkout</span>
          </div>
          <button
            onClick={() => setShowWalletBreakdown(!showWalletBreakdown)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-500/20 border border-amber-500/30 active:scale-95 transition-transform"
          >
            <span className="text-amber-400">🪙</span>
            <span className="text-xs font-medium text-white">
              ReZ: {rezCoinsData?.balance || 0}
              {promoCoins?.balance > 0 && ` | Promo: ${promoCoins.balance}`}
              {Array.isArray(brandedCoins) && brandedCoins.length > 0 && ` | Brand: ${brandedCoins.reduce((sum, coin) => sum + coin.balance, 0)}`}
            </span>
          </button>
        </div>

        {/* Wallet Breakdown Bottom Sheet */}
        {showWalletBreakdown && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl bg-black border border-white/10 shadow-xl z-50">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-white">Your Wallet</h4>
              <button
                onClick={() => setShowWalletBreakdown(false)}
                className="text-gray-400 text-xs"
              >
                Close
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-500/10">
                <span className="text-xs text-gray-300">ReZ Coins</span>
                <span className="text-sm font-semibold text-emerald-400">{rezCoinsData?.balance || 0}</span>
              </div>
              {promoCoins?.balance > 0 && (
                <div className="flex items-center justify-between p-2 rounded-xl bg-amber-500/10">
                  <span className="text-xs text-gray-300">Promo Coins</span>
                  <span className="text-sm font-semibold text-amber-400">{promoCoins.balance}</span>
                </div>
              )}
              {Array.isArray(brandedCoins) && brandedCoins.map((coin, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-purple-500/10">
                  <span className="text-xs text-gray-300">{coin.brand} Coins</span>
                  <span className="text-sm font-semibold text-purple-400">{coin.balance}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-gray-400">Total Value</span>
              <span className="text-base font-bold text-white">₹{totalCoinsValue}</span>
            </div>
          </div>
        )}
      </div>

      {/* 🛍️ PRODUCT SUMMARY */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
          <img
            src={productData.image}
            alt={productData.name}
            className="w-20 h-20 rounded-xl object-cover"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold text-white mb-1">{productData.name}</p>
            <p className="text-xs text-gray-400">{productData.brand}</p>
            {productData.isLocked && (
              <Badge variant="default" size="sm" className="mt-2 bg-purple-500/20 text-purple-400">
                <Lock className="w-3 h-3 mr-1" />
                Locked • {productData.timeRemaining} left
              </Badge>
            )}
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-white">₹{itemTotal.toLocaleString()}</p>
            <p className="text-xs text-gray-400">Qty: {productData.quantity}</p>
          </div>
        </div>

        {/* Locked Product Note */}
        {productData.isLocked && (
          <div className="mt-3 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-start gap-2">
            <Lock className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-purple-300">
              This item is reserved for you. Complete payment before time runs out.
            </p>
          </div>
        )}

        {/* Auto Savings Note */}
        <div className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-emerald-300">
            Savings applied automatically. You're getting the best deal on ReZ.
          </p>
        </div>
      </div>

      {/* 💰 PRICE BREAKDOWN */}
      <div className="px-4 mb-6">
        <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-amber-500/10 border border-emerald-500/30">
          <h3 className="text-base font-bold text-white mb-4">Price Breakdown</h3>

          {productData.isLocked && (
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="text-gray-300">Already Paid (Lock)</span>
              <span className="text-gray-300">₹{productData.lockPrice.toLocaleString()}</span>
            </div>
          )}

          <div className="flex items-center justify-between mb-2 text-sm">
            <span className="text-gray-300">MRP</span>
            <span className="text-gray-400 line-through">₹{productData.mrp.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between mb-2 text-sm">
            <span className="text-gray-300">ReZ Price</span>
            <span className="text-white font-semibold">₹{productData.rezPrice.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-500/20 mb-3">
            <span className="text-sm text-emerald-300 font-semibold">🎉 You Save</span>
            <span className="text-base text-emerald-400 font-bold">₹{productData.savings.toLocaleString()}</span>
          </div>

          <div className="pt-3 border-t border-white/10">
            <p className="text-sm text-gray-300 mb-2">Rewards You'll Earn</p>
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-gray-300">🪙 ReZ Coins</span>
              <span className="text-amber-400 font-semibold">{productData.coinsEarned}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-300">💸 Cashback</span>
              <span className="text-emerald-400 font-semibold">₹{product.cashback}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🚚 DELIVERY / PICKUP SELECTION */}
      <div className="px-4 mb-6">
        <h3 className="text-lg font-bold text-white mb-3">Delivery Option</h3>

        <div className="space-y-2">
          {/* 60-Min Delivery */}
          <button
            onClick={() => setDeliveryOption('delivery')}
            className={`w-full p-4 rounded-2xl border flex items-center gap-3 transition-all ${
              deliveryOption === 'delivery'
                ? 'bg-blue-500/20 border-blue-500'
                : 'bg-white/5 border-white/10'
            }`}
          >
            <Truck className="w-5 h-5 text-blue-400" />
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold text-white">60-Minute Home Delivery</p>
              <p className="text-xs text-gray-400">
                Fee: ₹{productData.deliveryFee}
              </p>
              {productData.deliveryFeeReturnAsCoins && (
                <p className="text-xs text-blue-300 mt-1">
                  💫 Delivery fee returned as ReZ Coins after sharing your experience
                </p>
              )}
            </div>
            {deliveryOption === 'delivery' && (
              <CheckCircle className="w-5 h-5 text-blue-400" />
            )}
          </button>

          {/* Store Pickup */}
          {product.storePickup && (
            <button
              onClick={() => setDeliveryOption('pickup')}
              className={`w-full p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                deliveryOption === 'pickup'
                  ? 'bg-emerald-500/20 border-emerald-500'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <Store className="w-5 h-5 text-emerald-400" />
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-white">Store Pickup</p>
                <p className="text-xs text-gray-400">{productData.storeAddress} • {productData.storeDistance}</p>
                <p className="text-xs text-emerald-300 mt-1">
                  🌱 No delivery fee. Faster & greener choice.
                </p>
              </div>
              {deliveryOption === 'pickup' && (
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              )}
            </button>
          )}

          {/* Visit Later (if locked) */}
          {productData.isLocked && (
            <button
              onClick={() => setDeliveryOption('later')}
              className={`w-full p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                deliveryOption === 'later'
                  ? 'bg-purple-500/20 border-purple-500'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <Clock className="w-5 h-5 text-purple-400" />
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-white">Visit Store Later</p>
                <p className="text-xs text-gray-400">Pay remaining amount at store</p>
              </div>
              {deliveryOption === 'later' && (
                <CheckCircle className="w-5 h-5 text-purple-400" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* 🪙 APPLY REZ COINS */}
      <div className="px-4 mb-6">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
          <button
            onClick={() => setShowCoinDetails(!showCoinDetails)}
            className="w-full flex items-center justify-between mb-3"
          >
            <div className="flex items-center gap-2">
              <WalletIcon className="w-5 h-5 text-amber-400" />
              <h3 className="text-base font-bold text-white">Apply ReZ Coins</h3>
              {coinsUsed > 0 && (
                <Badge variant="default" size="sm" className="bg-emerald-500/20 text-emerald-400 ml-2">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Best Savings Applied
                </Badge>
              )}
            </div>
            {showCoinDetails ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          <div className="flex items-center justify-between mb-3 p-3 rounded-xl bg-gradient-to-r from-emerald-500/20 to-amber-500/10 border border-emerald-500/30">
            <span className="text-sm text-white font-semibold">Coins Applied</span>
            <span className="text-lg font-bold text-emerald-400">−₹{coinsUsed}</span>
          </div>

          {showCoinDetails && (
            <div className="space-y-3 pt-3 border-t border-white/10">
              {/* Promo Coins */}
              {promoCoins?.balance > 0 && (
                <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={usePromoCoins}
                      onChange={(e) => setUsePromoCoins(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">Use Promo Coins</p>
                      <p className="text-xs text-gray-400">Max 20% per bill</p>
                    </div>
                  </div>
                  <span className="text-sm text-amber-400">{promoCoins.balance} available</span>
                </label>
              )}

              {/* Branded Coins */}
              {Array.isArray(brandedCoins) && brandedCoins.length > 0 && (
                <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={useBrandedCoins}
                      onChange={(e) => setUseBrandedCoins(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">Use Branded Coins</p>
                      <p className="text-xs text-gray-400">Merchant specific</p>
                    </div>
                  </div>
                  <span className="text-sm text-purple-400">
                    {brandedCoins.reduce((sum, coin) => sum + coin.balance, 0)} available
                  </span>
                </label>
              )}

              {/* ReZ Coins */}
              {rezCoinsData?.balance > 0 && (
                <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={useRezCoins}
                      onChange={(e) => setUseRezCoins(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">Use ReZ Coins</p>
                      <p className="text-xs text-gray-400">Universal coins</p>
                    </div>
                  </div>
                  <span className="text-sm text-emerald-400">{rezCoinsData.balance} available</span>
                </label>
              )}

              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <p className="text-xs text-blue-300">Coins are applied automatically for maximum savings</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 🧾 FINAL PAYMENT SUMMARY */}
      <div className="px-4 mb-6">
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-base font-bold text-white mb-4">Payment Summary</h3>

          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-300">Item Total</span>
              <span className="text-white">₹{itemTotal.toLocaleString()}</span>
            </div>

            {coinsUsed > 0 && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">Coins Used</span>
                <span className="text-emerald-400">−₹{coinsUsed}</span>
              </div>
            )}

            {deliveryCharge > 0 && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">Delivery Fee</span>
                <span className="text-white">₹{deliveryCharge}</span>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-base font-semibold text-white">Amount Payable</span>
            <span className="text-2xl font-bold text-white">₹{amountPayable.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* 🔐 PAYMENT METHOD */}
      <div className="px-4 mb-6">
        <h3 className="text-lg font-bold text-white mb-3">Payment Method</h3>

        <div className="space-y-2">
          <label className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-4 h-4"
            />
            <Smartphone className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-white">UPI</span>
          </label>

          <label className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-4 h-4"
            />
            <CreditCard className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-white">Card</span>
          </label>

          <label className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
            <input
              type="radio"
              name="payment"
              value="wallet"
              checked={paymentMethod === 'wallet'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-4 h-4"
            />
            <WalletIcon className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-medium text-white">Wallet</span>
          </label>
        </div>

        <div className="mt-3 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-green-400" />
            <p className="text-sm font-semibold text-green-300">100% Secure Payment</p>
          </div>
          <p className="text-xs text-gray-300">
            Powered by trusted banking partners. Your payment information is encrypted and never stored.
          </p>
        </div>
      </div>

      {/* 🔘 STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 p-4">
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
          className={`w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg ${
            animateCTA ? 'scale-105 shadow-emerald-500/50' : 'scale-100'
          }`}
        >
          <Shield className="w-5 h-5" />
          {productData.isLocked ? `Pay ₹${amountPayable.toLocaleString()} & Complete Purchase` : `Pay ₹${amountPayable.toLocaleString()} & Place Order`}
        </button>

        <p className="text-center text-xs text-gray-400 mt-2">
          By placing your order, you agree to ReZ's Terms & Conditions
        </p>
      </div>
    </div>
  );
};

export default ProductCheckout;
