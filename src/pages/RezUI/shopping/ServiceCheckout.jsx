import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Check,
  X,
  Sparkles,
  Shield,
  CheckCircle,
  Smartphone,
  CreditCard,
  Wallet as WalletIcon,
  Share2,
  Star
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';

const ServiceCheckout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { rezCoins, brandedCoins, promoCoins, cashbackBalance } = useWallet();

  // Get booking data from navigation state
  const bookingData = location.state || {
    serviceId: 'hair-spa',
    serviceName: 'Hair Spa (Keratin Treatment)',
    serviceImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
    price: 3499,
    coinsEarnable: 250,
    date: 'Dec 25, 2024',
    timeSlot: '2:00 PM - 3:00 PM',
    professional: {
      name: 'Priya Sharma',
      rating: 4.9,
      reviews: 342,
      image: 'https://i.pravatar.cc/150?img=5'
    },
    store: {
      name: 'Glamour Studio',
      address: 'Shop 12, Phoenix Mall, BTM Layout',
      distance: '1.2 km'
    }
  };

  // Checkout state
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showCoinsBreakdown, setShowCoinsBreakdown] = useState(false);

  // Contact details
  const [contactDetails, setContactDetails] = useState({
    name: 'Rejaul Karim',
    phone: '+91 98765 43210',
    email: 'rejaul@example.com'
  });

  // Coin usage controls
  const [usePromoCoins, setUsePromoCoins] = useState(true);
  const [useBrandedCoins, setUseBrandedCoins] = useState(true);
  const [useRezCoins, setUseRezCoins] = useState(false);

  // Calculate coins to use based on toggles and hierarchy
  const calculateCoinsToUse = () => {
    const maxCoinsAllowed = Math.floor(bookingData.price * 0.3); // 30% max for services
    let coinsToUse = 0;
    const breakdown = { promo: 0, branded: 0, rez: 0 };

    // Priority 1: Promo Coins (expiring soon)
    if (usePromoCoins && promoCoins?.balance > 0) {
      const promoAmount = Math.min(promoCoins.balance, maxCoinsAllowed - coinsToUse);
      breakdown.promo = promoAmount;
      coinsToUse += promoAmount;
    }

    // Priority 2: Branded Coins (store-specific)
    if (useBrandedCoins && coinsToUse < maxCoinsAllowed) {
      const relevantBrandedCoins = Array.isArray(brandedCoins)
        ? brandedCoins.filter(coin => coin.brand === 'Glamour Studio')
        : [];
      const totalBranded = relevantBrandedCoins.reduce((sum, coin) => sum + coin.balance, 0);
      const brandedAmount = Math.min(totalBranded, maxCoinsAllowed - coinsToUse);
      breakdown.branded = brandedAmount;
      coinsToUse += brandedAmount;
    }

    // Priority 3: ReZ Coins (universal)
    if (useRezCoins && coinsToUse < maxCoinsAllowed) {
      const rezAmount = Math.min(rezCoins?.balance || 0, maxCoinsAllowed - coinsToUse);
      breakdown.rez = rezAmount;
      coinsToUse += rezAmount;
    }

    return { total: coinsToUse, breakdown };
  };

  const coinsUsage = calculateCoinsToUse();
  const serviceTotal = bookingData.price;
  const coinsDiscount = coinsUsage.total;
  const amountPayable = serviceTotal - coinsDiscount;

  const handlePlaceBooking = () => {
    // Simulate booking placement
    setOrderPlaced(true);
  };

  // Order Confirmation Screen
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-rez-navy dark:text-white pb-24">
        <div className="px-4 py-6">
          {/* Success Animation */}
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 animate-pulse">
              <Check className="w-12 h-12 text-emerald-400" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Booking Confirmed!</h1>
            <p className="text-rez-gray-600 dark:text-gray-400 text-center">
              Your appointment has been scheduled successfully
            </p>
          </div>

          {/* Booking Details Card */}
          <div className="mb-6 p-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-600/10 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={bookingData.serviceImage}
                alt={bookingData.serviceName}
                className="w-16 h-16 rounded-2xl object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-rez-navy dark:text-white">{bookingData.serviceName}</h3>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">{bookingData.store.name}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span className="text-rez-gray-700 dark:text-gray-300">{bookingData.date}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-purple-400" />
                <span className="text-rez-gray-700 dark:text-gray-300">{bookingData.timeSlot}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <User className="w-4 h-4 text-purple-400" />
                <span className="text-rez-gray-700 dark:text-gray-300">{bookingData.professional.name}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-rez-gray-700 dark:text-gray-300">{bookingData.store.address}</span>
              </div>
            </div>
          </div>

          {/* Booking ID */}
          <div className="mb-6 p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10">
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Booking ID</p>
            <p className="text-lg font-mono text-rez-navy dark:text-white">BK{Date.now().toString().slice(-8)}</p>
          </div>

          {/* Rewards Earned */}
          <div className="mb-6 p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 border border-amber-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/30 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-rez-navy dark:text-white">💰 Rewards Earned!</h3>
                <p className="text-sm text-rez-gray-700 dark:text-gray-300">Credited to your wallet</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-white/10">
              <div className="flex items-center gap-2">
                <span className="text-lg">🪙</span>
                <span className="text-sm text-rez-gray-700 dark:text-gray-300">ReZ Coins</span>
              </div>
              <span className="text-2xl font-bold text-amber-400">+{bookingData.coinsEarnable}</span>
            </div>
            {coinsDiscount > 0 && (
              <div className="mt-3 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <p className="text-xs font-semibold text-emerald-400">
                    You saved ₹{coinsDiscount} using coins on this booking!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Share & Earn Extra */}
          <div className="mb-6 p-5 rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-600/10 border border-purple-500/30">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <p className="text-sm font-semibold text-rez-navy dark:text-white">Share & Earn Extra Coins</p>
            </div>
            <p className="text-xs text-rez-gray-700 dark:text-gray-300 mb-4">
              Share your experience and earn 2× more ReZ Coins. Help others discover great services!
            </p>
            <div className="flex gap-2">
              <button className="flex-1 py-3 rounded-xl bg-purple-500 text-white text-sm font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform">
                <Share2 className="w-4 h-4" />
                Share Now
              </button>
              <button className="flex-1 py-3 rounded-xl bg-amber-500 text-white text-sm font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform">
                <Star className="w-4 h-4" />
                Write Review
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <button
              onClick={() => navigate('/bookings')}
              className="w-full p-4 rounded-2xl bg-purple-500 text-rez-navy dark:text-white font-semibold"
            >
              View My Bookings
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 text-rez-navy dark:text-white font-semibold"
            >
              Back to Home
            </button>
          </div>

          {/* Support Info */}
          <div className="mt-6 p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10">
            <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-2">Need help with your booking?</p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm text-purple-400">
                <Phone className="w-4 h-4" />
                Call Store
              </button>
              <button className="flex items-center gap-2 text-sm text-purple-400">
                <Mail className="w-4 h-4" />
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Checkout Screen
  return (
    <div className="min-h-screen bg-white dark:bg-black text-rez-navy dark:text-white pb-32">
      {/* 🔝 TOP BAR */}
      <div className="sticky top-0 z-50 glass">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-semibold">Secure Booking</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-500/20 border border-amber-500/30">
            <span className="text-amber-400">🪙</span>
            <span className="text-xs font-medium">
              {(rezCoins?.balance || 0) + (promoCoins?.balance || 0)}
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        {/* 🛍️ SERVICE SUMMARY */}
        <h3 className="text-sm font-semibold text-rez-gray-600 dark:text-gray-400 mb-3">Booking Summary</h3>
        <div className="mb-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
            <div className="flex gap-4 mb-4">
              <img
                src={bookingData.serviceImage}
                alt={bookingData.serviceName}
                className="w-20 h-20 rounded-2xl object-cover"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1 line-clamp-2">{bookingData.serviceName}</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">{bookingData.store.name}</p>
                <div className="flex items-start gap-1">
                  <MapPin className="w-3 h-3 text-rez-gray-500 dark:text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 line-clamp-1">{bookingData.store.address}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-rez-navy dark:text-white">₹{serviceTotal.toLocaleString()}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-rez-gray-600 dark:text-gray-400">Date</span>
                </div>
                <p className="text-sm font-semibold text-rez-navy dark:text-white">{bookingData.date}</p>
              </div>
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-rez-gray-600 dark:text-gray-400">Time</span>
                </div>
                <p className="text-sm font-semibold text-rez-navy dark:text-white">{bookingData.timeSlot}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 flex items-center gap-3">
              <img
                src={bookingData.professional.image}
                alt={bookingData.professional.name}
                className="w-12 h-12 rounded-full border-2 border-amber-400/30"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  <p className="text-sm font-semibold text-rez-navy dark:text-white">{bookingData.professional.name}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-medium text-amber-400">{bookingData.professional.rating}</span>
                  <span className="text-xs text-rez-gray-600 dark:text-gray-400">({bookingData.professional.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-rez-gray-600 dark:text-gray-400 mb-3">Contact Details</h3>
          <div className="p-5 rounded-2xl bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-rez-gray-600 dark:text-gray-400 mb-2 block">Full Name</label>
                <input
                  type="text"
                  value={contactDetails.name}
                  onChange={(e) => setContactDetails({ ...contactDetails, name: e.target.value })}
                  className="w-full p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 border-2 border-rez-gray-200 dark:border-white/10 text-rez-navy dark:text-white outline-none focus:border-purple-500/50 transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-rez-gray-600 dark:text-gray-400 mb-2 block">Phone Number</label>
                <input
                  type="tel"
                  value={contactDetails.phone}
                  onChange={(e) => setContactDetails({ ...contactDetails, phone: e.target.value })}
                  className="w-full p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 border-2 border-rez-gray-200 dark:border-white/10 text-rez-navy dark:text-white outline-none focus:border-purple-500/50 transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-rez-gray-600 dark:text-gray-400 mb-2 block">Email Address</label>
                <input
                  type="email"
                  value={contactDetails.email}
                  onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
                  className="w-full p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 border-2 border-rez-gray-200 dark:border-white/10 text-rez-navy dark:text-white outline-none focus:border-purple-500/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 💰 PRICE & SAVINGS BREAKDOWN */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-rez-gray-600 dark:text-gray-400 mb-3">Price & Rewards</h3>
          <div className="p-5 rounded-2xl bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
            <div className="space-y-2.5 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-rez-gray-700 dark:text-gray-300">Service Charge</span>
                <span className="text-rez-navy dark:text-white font-medium">₹{serviceTotal.toLocaleString()}</span>
              </div>
              {coinsDiscount > 0 && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-rez-gray-700 dark:text-gray-300">Coins Used</span>
                  <span className="text-emerald-400 font-semibold">−₹{coinsDiscount}</span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t-2 border-rez-gray-200 dark:border-white/20 flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Amount Payable</p>
                <p className="text-xl font-bold text-rez-navy dark:text-white">₹{amountPayable.toLocaleString()}</p>
              </div>
              {coinsDiscount > 0 && (
                <div className="text-right">
                  <p className="text-xs text-emerald-400 mb-1">You Saved</p>
                  <p className="text-lg font-bold text-emerald-400">₹{coinsDiscount}</p>
                </div>
              )}
            </div>

            {/* Rewards Preview */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/10 border border-amber-500/30">
              <p className="text-xs font-semibold text-rez-navy dark:text-white mb-2">💰 Rewards You'll Earn</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🪙</span>
                  <span className="text-sm text-rez-gray-700 dark:text-gray-300">ReZ Coins</span>
                </div>
                <span className="text-base font-bold text-amber-400">+{bookingData.coinsEarnable} coins</span>
              </div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-2 text-center">
                💫 Credited after service completion
              </p>
            </div>
          </div>
        </div>

        {/* 🪙 APPLY REZ COINS */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-rez-gray-600 dark:text-gray-400 mb-3">Wallet Usage</h3>
          <div className="p-5 rounded-2xl bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
            <button
              onClick={() => setShowCoinsBreakdown(!showCoinsBreakdown)}
              className="w-full flex items-center justify-between mb-3"
            >
              <div className="flex items-center gap-2">
                <WalletIcon className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-rez-navy dark:text-white">Apply ReZ Coins</h3>
                {coinsDiscount > 0 && (
                  <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500/20">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span className="text-xs font-semibold text-emerald-400">Best Savings Applied</span>
                  </div>
                )}
              </div>
              {showCoinsBreakdown ? (
                <ChevronUp className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
              )}
            </button>

            {coinsDiscount > 0 && (
              <div className="flex items-center justify-between mb-3 p-3 rounded-xl bg-gradient-to-r from-emerald-500/20 to-amber-500/10 border border-emerald-500/30">
                <span className="text-sm text-rez-navy dark:text-white font-semibold">Coins Applied</span>
                <span className="text-lg font-bold text-emerald-400">−₹{coinsDiscount}</span>
              </div>
            )}

            {showCoinsBreakdown && (
              <div className="space-y-3 pt-3 border-t border-rez-gray-200 dark:border-white/10">
                {/* Promo Coins */}
                {promoCoins?.balance > 0 && (
                  <label className="flex items-center justify-between p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 cursor-pointer hover:bg-rez-gray-100 dark:hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={usePromoCoins}
                        onChange={(e) => setUsePromoCoins(e.target.checked)}
                        className="w-4 h-4 accent-orange-500"
                      />
                      <div>
                        <p className="text-sm font-medium text-rez-navy dark:text-white">Use Promo Coins</p>
                        <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                          {usePromoCoins && coinsUsage.breakdown.promo > 0
                            ? `Using ₹${coinsUsage.breakdown.promo}`
                            : `${promoCoins.balance} available`}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-amber-400">{promoCoins.balance}</span>
                  </label>
                )}

                {/* Branded Coins */}
                {Array.isArray(brandedCoins) && brandedCoins.filter(c => c.brand === 'Glamour Studio').length > 0 && (
                  <label className="flex items-center justify-between p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 cursor-pointer hover:bg-rez-gray-100 dark:hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={useBrandedCoins}
                        onChange={(e) => setUseBrandedCoins(e.target.checked)}
                        className="w-4 h-4 accent-blue-500"
                      />
                      <div>
                        <p className="text-sm font-medium text-rez-navy dark:text-white">Use Branded Coins</p>
                        <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                          {useBrandedCoins && coinsUsage.breakdown.branded > 0
                            ? `Using ₹${coinsUsage.breakdown.branded}`
                            : 'Glamour Studio specific'}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-purple-400">
                      {brandedCoins.filter(c => c.brand === 'Glamour Studio').reduce((sum, c) => sum + c.balance, 0)}
                    </span>
                  </label>
                )}

                {/* ReZ Coins */}
                {rezCoins?.balance > 0 && (
                  <label className="flex items-center justify-between p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 cursor-pointer hover:bg-rez-gray-100 dark:hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={useRezCoins}
                        onChange={(e) => setUseRezCoins(e.target.checked)}
                        className="w-4 h-4 accent-emerald-500"
                      />
                      <div>
                        <p className="text-sm font-medium text-rez-navy dark:text-white">Use ReZ Coins</p>
                        <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                          {useRezCoins && coinsUsage.breakdown.rez > 0
                            ? `Using ₹${coinsUsage.breakdown.rez}`
                            : 'Universal coins'}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-emerald-400">{rezCoins.balance}</span>
                  </label>
                )}

                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <p className="text-xs font-semibold text-rez-navy dark:text-white">Auto-Apply Recommendation</p>
                  </div>
                  <p className="text-xs text-rez-gray-700 dark:text-gray-300 mb-1">
                    Best savings applied automatically. Max 30% can be paid with coins.
                  </p>
                  <p className="text-xs text-purple-400">
                    Priority: Promo → Branded → ReZ Coins
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 🔐 PAYMENT METHOD */}
        <div className="mb-6">
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

      </div>

      {/* 🔘 STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-rez-gray-200 dark:border-white/10 p-4">
        {coinsDiscount > 0 && (
          <div className="mb-3 p-3 rounded-xl bg-gradient-to-r from-emerald-500/20 to-amber-500/10 border border-emerald-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-emerald-300 font-semibold">
                You're saving ₹{coinsDiscount} with coins!
              </span>
            </div>
            <span className="text-xs text-amber-400 font-semibold">
              🎉 Best Deal
            </span>
          </div>
        )}

        <button
          onClick={handlePlaceBooking}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg"
        >
          <Shield className="w-5 h-5" />
          Pay ₹{amountPayable.toLocaleString()} & Confirm Booking
        </button>

        <p className="text-center text-xs text-rez-gray-600 dark:text-gray-400 mt-2">
          Free cancellation up to 2 hours before appointment
        </p>
      </div>
    </div>
  );
};

export default ServiceCheckout;
