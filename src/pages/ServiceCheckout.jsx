import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, MapPin, Phone, Mail, ChevronDown, ChevronUp, Check, X, Sparkles } from 'lucide-react';
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
      <div className="min-h-screen bg-black text-white pb-24">
        <div className="px-4 py-6">
          {/* Success Animation */}
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 animate-pulse">
              <Check className="w-12 h-12 text-emerald-400" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Booking Confirmed!</h1>
            <p className="text-gray-400 text-center">
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
                <h3 className="font-semibold text-white">{bookingData.serviceName}</h3>
                <p className="text-sm text-gray-400">{bookingData.store.name}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">{bookingData.date}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">{bookingData.timeSlot}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <User className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">{bookingData.professional.name}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">{bookingData.store.address}</span>
              </div>
            </div>
          </div>

          {/* Booking ID */}
          <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-xs text-gray-400 mb-1">Booking ID</p>
            <p className="text-lg font-mono text-white">BK{Date.now().toString().slice(-8)}</p>
          </div>

          {/* Rewards Earned */}
          <div className="mb-6 p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 border border-amber-500/30">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-amber-400" />
              <div>
                <h3 className="font-semibold text-white">Rewards Earned!</h3>
                <p className="text-sm text-gray-300">Added to your wallet</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">ReZ Coins</span>
              <span className="text-2xl font-bold text-amber-400">+{bookingData.coinsEarnable}</span>
            </div>
            {coinsDiscount > 0 && (
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-xs text-emerald-400">
                  ✓ Saved ₹{coinsDiscount} using coins
                </p>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <button
              onClick={() => navigate('/bookings')}
              className="w-full p-4 rounded-2xl bg-purple-500 text-white font-semibold"
            >
              View My Bookings
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full p-4 rounded-2xl bg-white/5 text-white font-semibold"
            >
              Back to Home
            </button>
          </div>

          {/* Support Info */}
          <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-sm text-gray-400 mb-2">Need help with your booking?</p>
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
    <div className="min-h-screen bg-black text-white pb-24">
      {/* Header */}
      <div className="sticky top-0 z-50 glass px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-white/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold">Confirm Booking</h1>
          <div className="w-9" /> {/* Spacer */}
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Service Summary */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-400 mb-3">SERVICE DETAILS</h2>
          <div className="p-5 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-600/10 border border-purple-500/20">
            <div className="flex gap-4 mb-4">
              <img
                src={bookingData.serviceImage}
                alt={bookingData.serviceName}
                className="w-20 h-20 rounded-2xl object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{bookingData.serviceName}</h3>
                <p className="text-sm text-gray-400 mb-2">{bookingData.store.name}</p>
                <p className="text-xs text-gray-500">{bookingData.store.address}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white/5">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-gray-400">Date</span>
                </div>
                <p className="text-sm font-medium">{bookingData.date}</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-gray-400">Time</span>
                </div>
                <p className="text-sm font-medium">{bookingData.timeSlot}</p>
              </div>
            </div>

            <div className="mt-3 p-3 rounded-xl bg-white/5 flex items-center gap-3">
              <img
                src={bookingData.professional.image}
                alt={bookingData.professional.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{bookingData.professional.name}</p>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-amber-400">★ {bookingData.professional.rating}</span>
                  <span className="text-xs text-gray-500">({bookingData.professional.reviews})</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-400 mb-3">CONTACT DETAILS</h2>
          <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Name</label>
                <input
                  type="text"
                  value={contactDetails.name}
                  onChange={(e) => setContactDetails({ ...contactDetails, name: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-purple-500/50"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Phone</label>
                <input
                  type="tel"
                  value={contactDetails.phone}
                  onChange={(e) => setContactDetails({ ...contactDetails, phone: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-purple-500/50"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Email</label>
                <input
                  type="email"
                  value={contactDetails.email}
                  onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-purple-500/50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-400 mb-3">PAYMENT SUMMARY</h2>
          <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
            <div className="space-y-3 mb-4 pb-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Service charge</span>
                <span className="text-sm">₹{serviceTotal}</span>
              </div>
              {coinsDiscount > 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-emerald-400">Coins used</span>
                  <span className="text-sm text-emerald-400">-₹{coinsDiscount}</span>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">Amount Payable</span>
              <span className="text-2xl font-bold text-white">₹{amountPayable}</span>
            </div>

            {/* Rewards Preview */}
            <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-sm text-amber-300">You'll earn</span>
                </div>
                <span className="text-sm font-semibold text-amber-400">+{bookingData.coinsEarnable} coins</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coin Usage Controls */}
        <div className="mb-6">
          <button
            onClick={() => setShowCoinsBreakdown(!showCoinsBreakdown)}
            className="w-full flex items-center justify-between mb-3"
          >
            <h2 className="text-sm font-semibold text-gray-400">USE COINS (Optional)</h2>
            {showCoinsBreakdown ? (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            )}
          </button>

          {showCoinsBreakdown && (
            <div className="space-y-3">
              {/* Promo Coins */}
              {promoCoins?.balance > 0 && (
                <div className={`p-4 rounded-2xl border transition-all ${
                  usePromoCoins
                    ? 'bg-orange-500/10 border-orange-500/30'
                    : 'bg-white/5 border-white/10'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{promoCoins.icon}</span>
                      <div>
                        <p className="text-sm font-semibold">Promo Coins</p>
                        <p className="text-xs text-gray-400">{promoCoins.balance} available</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setUsePromoCoins(!usePromoCoins)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        usePromoCoins ? 'bg-orange-500' : 'bg-white/20'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                        usePromoCoins ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>
                  {usePromoCoins && coinsUsage.breakdown.promo > 0 && (
                    <p className="text-xs text-orange-400">Using ₹{coinsUsage.breakdown.promo}</p>
                  )}
                </div>
              )}

              {/* Branded Coins */}
              {Array.isArray(brandedCoins) && brandedCoins.filter(c => c.brand === 'Glamour Studio').length > 0 && (
                <div className={`p-4 rounded-2xl border transition-all ${
                  useBrandedCoins
                    ? 'bg-blue-500/10 border-blue-500/30'
                    : 'bg-white/5 border-white/10'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🔵</span>
                      <div>
                        <p className="text-sm font-semibold">Glamour Studio Coins</p>
                        <p className="text-xs text-gray-400">
                          {brandedCoins.filter(c => c.brand === 'Glamour Studio').reduce((sum, c) => sum + c.balance, 0)} available
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setUseBrandedCoins(!useBrandedCoins)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        useBrandedCoins ? 'bg-blue-500' : 'bg-white/20'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                        useBrandedCoins ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>
                  {useBrandedCoins && coinsUsage.breakdown.branded > 0 && (
                    <p className="text-xs text-blue-400">Using ₹{coinsUsage.breakdown.branded}</p>
                  )}
                </div>
              )}

              {/* ReZ Coins */}
              {rezCoins?.balance > 0 && (
                <div className={`p-4 rounded-2xl border transition-all ${
                  useRezCoins
                    ? 'bg-emerald-500/10 border-emerald-500/30'
                    : 'bg-white/5 border-white/10'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{rezCoins.icon}</span>
                      <div>
                        <p className="text-sm font-semibold">ReZ Coins</p>
                        <p className="text-xs text-gray-400">{rezCoins.balance} available</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setUseRezCoins(!useRezCoins)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        useRezCoins ? 'bg-emerald-500' : 'bg-white/20'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                        useRezCoins ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>
                  {useRezCoins && coinsUsage.breakdown.rez > 0 && (
                    <p className="text-xs text-emerald-400">Using ₹{coinsUsage.breakdown.rez}</p>
                  )}
                </div>
              )}

              <div className="p-3 rounded-xl bg-white/5">
                <p className="text-xs text-gray-400 mb-1">Maximum 30% of service cost can be paid with coins</p>
                <p className="text-xs text-purple-400">
                  Priority: Promo Coins → Branded Coins → ReZ Coins
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-400 mb-3">PAYMENT METHOD</h2>
          <div className="space-y-3">
            {['upi', 'card', 'wallet'].map((method) => (
              <button
                key={method}
                onClick={() => setPaymentMethod(method)}
                className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all ${
                  paymentMethod === method
                    ? 'bg-purple-500/20 border-purple-500/50'
                    : 'bg-white/5 border-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === method
                      ? 'border-purple-500 bg-purple-500'
                      : 'border-white/30'
                  }`}>
                    {paymentMethod === method && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span className="font-medium">
                    {method === 'upi' && 'UPI (GPay, PhonePe, Paytm)'}
                    {method === 'card' && 'Credit/Debit Card'}
                    {method === 'wallet' && 'ReZ Wallet'}
                  </span>
                </div>
                {method === 'upi' && <span className="text-xs text-emerald-400">Recommended</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Terms */}
        <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
          <p className="text-xs text-gray-400 leading-relaxed">
            By confirming this booking, you agree to the service provider's cancellation policy.
            Free cancellation available up to 2 hours before appointment time.
          </p>
        </div>

        {/* Place Booking Button */}
        <button
          onClick={handlePlaceBooking}
          className="w-full p-5 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg shadow-xl shadow-purple-500/20"
        >
          Pay ₹{amountPayable} & Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default ServiceCheckout;
