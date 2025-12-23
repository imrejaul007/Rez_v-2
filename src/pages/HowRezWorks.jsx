import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowLeft, Store, ShoppingBag, Tag, Wallet, Check, Sparkles, Gift, TrendingUp } from 'lucide-react';

const HowRezWorks = () => {
  const navigate = useNavigate();
  const [currentScreen, setCurrentScreen] = useState('HRW-01');
  const [selectedPath, setSelectedPath] = useState(null);
  const [pathProgress, setPathProgress] = useState(0);

  // Navigation handlers
  const handleSelectIntent = (path) => {
    setSelectedPath(path);
    switch (path) {
      case 'offline':
        setCurrentScreen('HRW-A1');
        break;
      case 'online':
        setCurrentScreen('HRW-B1');
        break;
      case 'offers':
        setCurrentScreen('HRW-C1');
        break;
      case 'wallet':
        setCurrentScreen('HRW-D1');
        break;
      default:
        break;
    }
    setPathProgress(1);
  };

  const handleNext = (nextScreen) => {
    setCurrentScreen(nextScreen);
    setPathProgress(prev => prev + 1);
  };

  const handleBack = () => {
    if (pathProgress === 1) {
      setCurrentScreen('HRW-01');
      setSelectedPath(null);
      setPathProgress(0);
    } else {
      // Handle going back within paths
      const backMap = {
        'HRW-A2': 'HRW-A1',
        'HRW-A3': 'HRW-A2',
        'HRW-A4': 'HRW-A3',
        'HRW-B2': 'HRW-B1',
        'HRW-B3': 'HRW-B2',
        'HRW-B4': 'HRW-B3',
        'HRW-C2': 'HRW-C1',
        'HRW-D2': 'HRW-D1',
        'HRW-F1': currentScreen // Can come from A4, B4, C2, or D2
      };
      setCurrentScreen(backMap[currentScreen] || 'HRW-01');
      setPathProgress(prev => prev - 1);
    }
  };

  // Screen Components
  const IntentSelectorScreen = () => (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-lg font-bold text-white">How ReZ Works</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center">
            <span className="text-4xl">💡</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Welcome to ReZ</h2>
          <p className="text-gray-400 text-lg">
            Save money on things you already buy — online & offline
          </p>
        </div>

        {/* Intent Question */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white text-center mb-2">
            What would you like to do today?
          </h3>
          <p className="text-sm text-gray-400 text-center">
            Choose your journey to see how ReZ helps you save
          </p>
        </div>

        {/* Intent Options */}
        <div className="space-y-3">
          {/* Option 1: Visit Store */}
          <button
            onClick={() => handleSelectIntent('offline')}
            className="w-full p-5 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 hover:border-emerald-500/50 transition-all text-left group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Store className="w-7 h-7 text-emerald-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-1">Visit a Store Offline</h4>
                <p className="text-sm text-gray-400">Pay with QR & earn instant cashback</p>
              </div>
              <span className="text-emerald-400 text-xl group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>

          {/* Option 2: Order Online */}
          <button
            onClick={() => handleSelectIntent('online')}
            className="w-full p-5 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 hover:border-blue-500/50 transition-all text-left group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-7 h-7 text-blue-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-1">Order Online/Delivery</h4>
                <p className="text-sm text-gray-400">Shop from ReZ Mall or external stores</p>
              </div>
              <span className="text-blue-400 text-xl group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>

          {/* Option 3: Browse Offers */}
          <button
            onClick={() => handleSelectIntent('offers')}
            className="w-full p-5 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 hover:border-amber-500/50 transition-all text-left group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Tag className="w-7 h-7 text-amber-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-1">Just Browse Offers & Deals</h4>
                <p className="text-sm text-gray-400">Discover exclusive deals near you</p>
              </div>
              <span className="text-amber-400 text-xl group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>

          {/* Option 4: Understand Wallet */}
          <button
            onClick={() => handleSelectIntent('wallet')}
            className="w-full p-5 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:border-purple-500/50 transition-all text-left group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Wallet className="w-7 h-7 text-purple-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-1">Understand ReZ Wallet</h4>
                <p className="text-sm text-gray-400">Learn how your money & coins work</p>
              </div>
              <span className="text-purple-400 text-xl group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>
        </div>

        {/* Skip Option */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-500 text-sm hover:text-gray-400 transition-colors"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );

  // PATH A: OFFLINE STORE FLOW
  const OfflineA1Screen = () => (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button onClick={handleBack} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex gap-1">
            <div className="w-8 h-1 rounded-full bg-emerald-500" />
            <div className="w-8 h-1 rounded-full bg-white/20" />
            <div className="w-8 h-1 rounded-full bg-white/20" />
            <div className="w-8 h-1 rounded-full bg-white/20" />
          </div>
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-8">
        {/* Step Icon */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 border border-emerald-500/30 flex items-center justify-center">
            <Store className="w-12 h-12 text-emerald-400" />
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            Step 1 of 4
          </span>
          <h2 className="text-2xl font-bold text-white mb-2">Discover Nearby Stores</h2>
          <p className="text-gray-400">
            See all stores near you offering cashback & deals
          </p>
        </div>

        {/* Visual Demo */}
        <div className="mb-6 p-6 rounded-3xl bg-gradient-to-br from-[#2C2C2E] to-[#1C1C1E] border border-white/10">
          <div className="space-y-3">
            {/* Store Card 1 */}
            <div className="p-4 rounded-2xl bg-white/5 border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <span className="text-xl">🍕</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">Pizza Corner</h4>
                  <p className="text-xs text-gray-400">0.3 km away</p>
                </div>
                <div className="text-right">
                  <p className="text-emerald-400 font-bold">15%</p>
                  <p className="text-xs text-gray-400">Cashback</p>
                </div>
              </div>
            </div>

            {/* Store Card 2 */}
            <div className="p-4 rounded-2xl bg-white/5 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-xl">👕</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">Fashion Hub</h4>
                  <p className="text-xs text-gray-400">0.5 km away</p>
                </div>
                <div className="text-right">
                  <p className="text-emerald-400 font-bold">20%</p>
                  <p className="text-xs text-gray-400">Cashback</p>
                </div>
              </div>
            </div>

            {/* Store Card 3 */}
            <div className="p-4 rounded-2xl bg-white/5 border border-amber-500/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                  <span className="text-xl">☕</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">Coffee Bean</h4>
                  <p className="text-xs text-gray-400">0.8 km away</p>
                </div>
                <div className="text-right">
                  <p className="text-emerald-400 font-bold">10%</p>
                  <p className="text-xs text-gray-400">Cashback</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Point */}
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
          <div className="flex gap-3">
            <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-white font-medium mb-1">Every purchase = savings</p>
              <p className="text-xs text-gray-400">Browse by location, category, or cashback %</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNext('HRW-A2')}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
        >
          Next: Pay in Store
        </button>
      </div>
    </div>
  );

  const OfflineA2Screen = () => (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button onClick={handleBack} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex gap-1">
            <div className="w-8 h-1 rounded-full bg-emerald-500" />
            <div className="w-8 h-1 rounded-full bg-emerald-500" />
            <div className="w-8 h-1 rounded-full bg-white/20" />
            <div className="w-8 h-1 rounded-full bg-white/20" />
          </div>
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-8">
        {/* Step Icon */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-emerald-500/30 to-amber-500/30 border border-emerald-500/30 flex items-center justify-center">
            <span className="text-5xl">💳</span>
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            Step 2 of 4
          </span>
          <h2 className="text-2xl font-bold text-white mb-2">Pay at the Counter</h2>
          <p className="text-gray-400">
            Scan store QR code before paying
          </p>
        </div>

        {/* Visual Demo */}
        <div className="mb-6 p-6 rounded-3xl bg-gradient-to-br from-[#2C2C2E] to-[#1C1C1E] border border-white/10">
          {/* QR Code Mock */}
          <div className="w-40 h-40 mx-auto mb-4 rounded-2xl bg-white flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-black via-gray-800 to-black rounded-xl" />
          </div>

          <div className="text-center mb-4">
            <p className="text-white font-semibold mb-1">Scan this QR at checkout</p>
            <p className="text-xs text-gray-400">Then pay with UPI, card, or cash</p>
          </div>

          {/* Payment Flow */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-400 text-sm font-bold">1</span>
              </div>
              <p className="text-sm text-white">Scan QR code</p>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-400 text-sm font-bold">2</span>
              </div>
              <p className="text-sm text-white">Enter bill amount</p>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-400 text-sm font-bold">3</span>
              </div>
              <p className="text-sm text-white">Pay with UPI/Card/Cash</p>
            </div>
          </div>
        </div>

        {/* Key Point */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-6">
          <div className="flex gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-white font-medium mb-1">No special hardware needed</p>
              <p className="text-xs text-gray-400">Works with your normal UPI or card payment</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNext('HRW-A3')}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
        >
          Next: Earn Rewards
        </button>
      </div>
    </div>
  );

  const OfflineA3Screen = () => (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button onClick={handleBack} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex gap-1">
            <div className="w-8 h-1 rounded-full bg-emerald-500" />
            <div className="w-8 h-1 rounded-full bg-emerald-500" />
            <div className="w-8 h-1 rounded-full bg-emerald-500" />
            <div className="w-8 h-1 rounded-full bg-white/20" />
          </div>
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-8">
        {/* Step Icon */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-amber-500/30 to-yellow-500/30 border border-amber-500/30 flex items-center justify-center animate-pulse">
            <span className="text-5xl">🪙</span>
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            Step 3 of 4
          </span>
          <h2 className="text-2xl font-bold text-white mb-2">Earn Instant Rewards</h2>
          <p className="text-gray-400">
            Get cashback + coins immediately
          </p>
        </div>

        {/* Visual Demo */}
        <div className="mb-6 p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/30">
          {/* Transaction Summary */}
          <div className="text-center mb-6">
            <p className="text-sm text-gray-400 mb-1">You paid</p>
            <p className="text-4xl font-bold text-white mb-4">₹500</p>

            <div className="space-y-3">
              {/* Cashback */}
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Gift className="w-5 h-5 text-emerald-400" />
                    <span className="text-white font-medium">Cashback Earned</span>
                  </div>
                  <span className="text-emerald-400 font-bold text-xl">₹50</span>
                </div>
              </div>

              {/* Coins */}
              <div className="p-4 rounded-2xl bg-amber-500/20 border border-amber-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🪙</span>
                    <span className="text-white font-medium">ReZ Coins</span>
                  </div>
                  <span className="text-amber-400 font-bold text-xl">+25</span>
                </div>
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-400">Total Saved</span>
              <span className="text-white font-semibold">₹62.50</span>
            </div>
            <p className="text-xs text-gray-500 text-center">Coins = ₹12.50 (1 coin = ₹0.50)</p>
          </div>
        </div>

        {/* Key Point */}
        <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-6">
          <div className="flex gap-3">
            <TrendingUp className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-white font-medium mb-1">Rewards credited instantly</p>
              <p className="text-xs text-gray-400">Use coins on your next purchase anywhere</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNext('HRW-A4')}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all"
        >
          Next: Use Your Rewards
        </button>
      </div>
    </div>
  );

  const OfflineA4Screen = () => (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button onClick={handleBack} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex gap-1">
            <div className="w-8 h-1 rounded-full bg-emerald-500" />
            <div className="w-8 h-1 rounded-full bg-emerald-500" />
            <div className="w-8 h-1 rounded-full bg-emerald-500" />
            <div className="w-8 h-1 rounded-full bg-emerald-500" />
          </div>
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-8">
        {/* Step Icon */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/30 flex items-center justify-center">
            <Wallet className="w-12 h-12 text-purple-400" />
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold mb-3">
            Step 4 of 4
          </span>
          <h2 className="text-2xl font-bold text-white mb-2">Use Coins on Next Bill</h2>
          <p className="text-gray-400">
            Pay less using your earned coins
          </p>
        </div>

        {/* Visual Demo */}
        <div className="mb-6 p-6 rounded-3xl bg-gradient-to-br from-[#2C2C2E] to-[#1C1C1E] border border-white/10">
          {/* Next Purchase */}
          <div className="mb-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 mb-3">
              <span className="text-gray-400">Next Bill Amount</span>
              <span className="text-2xl font-bold text-white">₹800</span>
            </div>

            <div className="p-4 rounded-2xl bg-purple-500/20 border border-purple-500/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🪙</span>
                  <span className="text-white font-medium">Use 50 Coins</span>
                </div>
                <span className="text-purple-400 font-bold">-₹25</span>
              </div>

              {/* Slider Visual */}
              <div className="w-full h-2 bg-white/20 rounded-full mb-2">
                <div className="w-1/2 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              </div>
              <p className="text-xs text-gray-400 text-center">50 of 100 coins available</p>
            </div>
          </div>

          {/* Final Amount */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-2 border-emerald-500/30">
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-1">You Pay</p>
              <p className="text-4xl font-bold text-white">₹775</p>
              <p className="text-emerald-400 text-sm mt-2">+ Earn ₹80 cashback + 40 coins more!</p>
            </div>
          </div>
        </div>

        {/* Key Point */}
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
          <div className="flex gap-3">
            <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-white font-medium mb-1">The cycle continues</p>
              <p className="text-xs text-gray-400">Every purchase saves money & earns for the next</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNext('HRW-F1')}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
        >
          See What Else ReZ Offers
        </button>
      </div>
    </div>
  );

  // PATH B: ONLINE DELIVERY FLOW
  const OnlineB1Screen = () => (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button onClick={handleBack} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex gap-1">
            <div className="w-8 h-1 rounded-full bg-blue-500" />
            <div className="w-8 h-1 rounded-full bg-white/20" />
            <div className="w-8 h-1 rounded-full bg-white/20" />
            <div className="w-8 h-1 rounded-full bg-white/20" />
          </div>
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-8">
        {/* Step Icon */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-500/30 flex items-center justify-center">
            <ShoppingBag className="w-12 h-12 text-blue-400" />
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
            Step 1 of 4
          </span>
          <h2 className="text-2xl font-bold text-white mb-2">Two Ways to Shop Online</h2>
          <p className="text-gray-400">
            ReZ Mall or link external orders
          </p>
        </div>

        {/* Two Options */}
        <div className="space-y-4 mb-6">
          {/* ReZ Mall */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-500/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/30 flex items-center justify-center flex-shrink-0">
                <Store className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">ReZ Mall</h3>
                <p className="text-sm text-gray-400">Shop directly from our marketplace</p>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Guaranteed cashback</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Instant coin rewards</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Exclusive deals</span>
              </li>
            </ul>
          </div>

          {/* Cash Store Link */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/30 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">🔗</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Cash Store (Link Orders)</h3>
                <p className="text-sm text-gray-400">Connect Amazon, Flipkart, Zomato orders</p>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Track all purchases in one place</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Get ReZ coins retroactively</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Unlock special offers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Point */}
        <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-6">
          <div className="flex gap-3">
            <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-white font-medium mb-1">Either way, you earn rewards</p>
              <p className="text-xs text-gray-400">ReZ makes every online purchase count</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNext('HRW-B2')}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
        >
          Next: Browse & Select
        </button>
      </div>
    </div>
  );

  const OnlineB2Screen = () => (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button onClick={handleBack} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex gap-1">
            <div className="w-8 h-1 rounded-full bg-blue-500" />
            <div className="w-8 h-1 rounded-full bg-blue-500" />
            <div className="w-8 h-1 rounded-full bg-white/20" />
            <div className="w-8 h-1 rounded-full bg-white/20" />
          </div>
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-8">
        {/* Step Icon */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/30 flex items-center justify-center">
            <span className="text-5xl">🎧</span>
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold mb-3">
            Step 2 of 4
          </span>
          <h2 className="text-2xl font-bold text-white mb-2">Browse & Select Products</h2>
          <p className="text-gray-400">
            See savings before you buy
          </p>
        </div>

        {/* Product Card Example */}
        <div className="mb-6 p-6 rounded-3xl bg-gradient-to-br from-[#2C2C2E] to-[#1C1C1E] border border-white/10">
          <div className="flex gap-4 mb-4">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-4xl">🎧</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white mb-1">Sony WH-1000XM5</h3>
              <p className="text-xs text-gray-400 mb-2">Premium Noise Cancelling</p>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold">₹24,990</span>
                <span className="text-xs text-gray-500 line-through">₹29,990</span>
              </div>
            </div>
          </div>

          {/* Rewards Preview */}
          <div className="space-y-2 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10">
              <span className="text-sm text-white">Cashback</span>
              <span className="text-emerald-400 font-bold">₹2,499</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-amber-500/10">
              <span className="text-sm text-white">ReZ Coins</span>
              <span className="text-amber-400 font-bold">+1,249 🪙</span>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-purple-500/20 border border-purple-500/30 text-center">
            <p className="text-white font-semibold">Total Savings: ₹6,123</p>
            <p className="text-xs text-gray-400 mt-1">Discount + Cashback + Coins value</p>
          </div>
        </div>

        {/* Key Point */}
        <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6">
          <div className="flex gap-3">
            <Sparkles className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-white font-medium mb-1">Know your savings upfront</p>
              <p className="text-xs text-gray-400">Every product shows exact cashback & coins</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNext('HRW-B3')}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
        >
          Next: Lock & Order
        </button>
      </div>
    </div>
  );

  const OnlineB3Screen = () => (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button onClick={handleBack} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex gap-1">
            <div className="w-8 h-1 rounded-full bg-blue-500" />
            <div className="w-8 h-1 rounded-full bg-blue-500" />
            <div className="w-8 h-1 rounded-full bg-blue-500" />
            <div className="w-8 h-1 rounded-full bg-white/20" />
          </div>
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-8">
        {/* Step Icon */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 border border-emerald-500/30 flex items-center justify-center">
            <span className="text-5xl">🔒</span>
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            Step 3 of 4
          </span>
          <h2 className="text-2xl font-bold text-white mb-2">Lock Price & Choose Mode</h2>
          <p className="text-gray-400">
            Visit store or get home delivery
          </p>
        </div>

        {/* Lock Feature */}
        <div className="mb-6 p-6 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 mb-3">
              <span className="text-xl">🔒</span>
              <span className="text-emerald-400 font-semibold">Price Locked for 24h</span>
            </div>
            <p className="text-xs text-gray-400">Your savings are guaranteed</p>
          </div>

          {/* Choose Mode */}
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-white/5 border-2 border-emerald-500/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Store className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Visit Store</p>
                    <p className="text-xs text-gray-400">Pick up today</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Home Delivery</p>
                    <p className="text-xs text-gray-400">Arrives in 2-3 days</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-[#2C2C2E] to-[#1C1C1E] border border-white/10 mb-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Product Price</span>
              <span className="text-white">₹24,990</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Using Coins (500 🪙)</span>
              <span className="text-emerald-400">-₹250</span>
            </div>
            <div className="pt-3 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">You Pay</span>
                <span className="text-2xl font-bold text-white">₹24,740</span>
              </div>
              <p className="text-xs text-emerald-400 text-right mt-1">+ Earn ₹2,499 back + 1,249 coins</p>
            </div>
          </div>
        </div>

        {/* Key Point */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-6">
          <div className="flex gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-white font-medium mb-1">Flexible fulfillment</p>
              <p className="text-xs text-gray-400">Choose how you want to receive your order</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNext('HRW-B4')}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
        >
          Next: Earn Rewards
        </button>
      </div>
    </div>
  );

  const OnlineB4Screen = () => (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button onClick={handleBack} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex gap-1">
            <div className="w-8 h-1 rounded-full bg-blue-500" />
            <div className="w-8 h-1 rounded-full bg-blue-500" />
            <div className="w-8 h-1 rounded-full bg-blue-500" />
            <div className="w-8 h-1 rounded-full bg-blue-500" />
          </div>
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-8">
        {/* Step Icon */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-amber-500/30 to-yellow-500/30 border border-amber-500/30 flex items-center justify-center animate-pulse">
            <span className="text-5xl">🎉</span>
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            Step 4 of 4
          </span>
          <h2 className="text-2xl font-bold text-white mb-2">Earn Big on Every Order</h2>
          <p className="text-gray-400">
            Your rewards are on the way
          </p>
        </div>

        {/* Rewards Summary */}
        <div className="mb-6 p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/30">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 mb-4">
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Order Confirmed</span>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            {/* Cashback */}
            <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-emerald-400" />
                  <span className="text-white font-medium">Cashback</span>
                </div>
                <span className="text-emerald-400 font-bold text-xl">₹2,499</span>
              </div>
              <p className="text-xs text-gray-400">Credits in 2-3 days</p>
            </div>

            {/* Coins */}
            <div className="p-4 rounded-2xl bg-amber-500/20 border border-amber-500/30">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🪙</span>
                  <span className="text-white font-medium">ReZ Coins</span>
                </div>
                <span className="text-amber-400 font-bold text-xl">+1,249</span>
              </div>
              <p className="text-xs text-gray-400">Credited instantly (₹624.50 value)</p>
            </div>

            {/* Brand Loyalty */}
            <div className="p-4 rounded-2xl bg-purple-500/20 border border-purple-500/30">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⭐</span>
                  <span className="text-white font-medium">Sony Loyalty Points</span>
                </div>
                <span className="text-purple-400 font-bold text-xl">+500</span>
              </div>
              <p className="text-xs text-gray-400">Tier upgrade: Gold → Platinum</p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-center">
            <p className="text-white font-semibold text-lg mb-1">Total Value Earned: ₹3,123.50</p>
            <p className="text-xs text-gray-400">Use on your next purchase anywhere!</p>
          </div>
        </div>

        {/* Key Point */}
        <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6">
          <div className="flex gap-3">
            <TrendingUp className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-white font-medium mb-1">Multi-layer rewards</p>
              <p className="text-xs text-gray-400">Get cashback, coins, and brand loyalty - all at once</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNext('HRW-F1')}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all"
        >
          See What Else ReZ Offers
        </button>
      </div>
    </div>
  );

  // PATH C: OFFERS & DEALS FLOW
  const OffersC1Screen = () => (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button onClick={handleBack} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex gap-1">
            <div className="w-8 h-1 rounded-full bg-amber-500" />
            <div className="w-8 h-1 rounded-full bg-white/20" />
          </div>
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-8">
        {/* Step Icon */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-amber-500/30 to-orange-500/30 border border-amber-500/30 flex items-center justify-center">
            <Tag className="w-12 h-12 text-amber-400" />
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            Step 1 of 2
          </span>
          <h2 className="text-2xl font-bold text-white mb-2">Discover Exclusive Deals</h2>
          <p className="text-gray-400">
            Curated offers from 1000+ brands
          </p>
        </div>

        {/* Deals Categories */}
        <div className="space-y-3 mb-6">
          {/* Super Deals */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🔥</span>
              <div>
                <h3 className="text-lg font-bold text-white">Super Deals</h3>
                <p className="text-xs text-gray-400">Up to 70% off + extra cashback</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 p-2 rounded-xl bg-white/5 text-center">
                <p className="text-sm font-bold text-white">23</p>
                <p className="text-xs text-gray-400">Deals</p>
              </div>
              <div className="flex-1 p-2 rounded-xl bg-white/5 text-center">
                <p className="text-sm font-bold text-red-400">Live</p>
                <p className="text-xs text-gray-400">Status</p>
              </div>
            </div>
          </div>

          {/* Location-Based */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-blue-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">📍</span>
              <div>
                <h3 className="text-lg font-bold text-white">Near You</h3>
                <p className="text-xs text-gray-400">Restaurants, cafes, salons nearby</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 p-2 rounded-xl bg-white/5 text-center">
                <p className="text-sm font-bold text-white">47</p>
                <p className="text-xs text-gray-400">Stores</p>
              </div>
              <div className="flex-1 p-2 rounded-xl bg-white/5 text-center">
                <p className="text-sm font-bold text-blue-400">&lt; 2km</p>
                <p className="text-xs text-gray-400">Radius</p>
              </div>
            </div>
          </div>

          {/* Category Deals */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🎯</span>
              <div>
                <h3 className="text-lg font-bold text-white">By Category</h3>
                <p className="text-xs text-gray-400">Fashion, electronics, food, wellness</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 p-2 rounded-xl bg-white/5 text-center">
                <p className="text-sm font-bold text-white">12</p>
                <p className="text-xs text-gray-400">Categories</p>
              </div>
              <div className="flex-1 p-2 rounded-xl bg-white/5 text-center">
                <p className="text-sm font-bold text-purple-400">All</p>
                <p className="text-xs text-gray-400">Filter</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Point */}
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
          <div className="flex gap-3">
            <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-white font-medium mb-1">Smart recommendations</p>
              <p className="text-xs text-gray-400">Based on your spending habits & location</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNext('HRW-C2')}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all"
        >
          Next: Save on Repeat Purchases
        </button>
      </div>
    </div>
  );

  const OffersC2Screen = () => (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button onClick={handleBack} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex gap-1">
            <div className="w-8 h-1 rounded-full bg-amber-500" />
            <div className="w-8 h-1 rounded-full bg-amber-500" />
          </div>
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-8">
        {/* Step Icon */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 border border-emerald-500/30 flex items-center justify-center">
            <span className="text-5xl">♻️</span>
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            Step 2 of 2
          </span>
          <h2 className="text-2xl font-bold text-white mb-2">Save on Repeat Purchases</h2>
          <p className="text-gray-400">
            Get rewarded for being a regular customer
          </p>
        </div>

        {/* Examples */}
        <div className="space-y-4 mb-6">
          {/* Coffee Example */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/30 flex items-center justify-center">
                <span className="text-3xl">☕</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Your Daily Coffee</h3>
                <p className="text-xs text-gray-400">Coffee Bean - Visited 12 times</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                <span className="text-sm text-white">Regular Price</span>
                <span className="text-white">₹150/visit</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10">
                <span className="text-sm text-white">With ReZ</span>
                <span className="text-emerald-400 font-bold">₹135/visit</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/30 text-center">
                <p className="text-white font-semibold">Saved ₹180 this month!</p>
                <p className="text-xs text-gray-400 mt-1">+ Earned 90 coins</p>
              </div>
            </div>
          </div>

          {/* Grocery Example */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-green-500/30 flex items-center justify-center">
                <span className="text-3xl">🛒</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Monthly Groceries</h3>
                <p className="text-xs text-gray-400">BigBasket - Monthly order</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                <span className="text-sm text-white">Avg. Monthly Bill</span>
                <span className="text-white">₹5,000</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10">
                <span className="text-sm text-white">ReZ Cashback</span>
                <span className="text-emerald-400 font-bold">₹500</span>
              </div>
              <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/30 text-center">
                <p className="text-white font-semibold">₹6,000 saved yearly!</p>
                <p className="text-xs text-gray-400 mt-1">+ 3,000 coins</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Point */}
        <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-6">
          <div className="flex gap-3">
            <TrendingUp className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-white font-medium mb-1">The more you use, the more you save</p>
              <p className="text-xs text-gray-400">Build streaks & unlock bonus rewards</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNext('HRW-F1')}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
        >
          See What Else ReZ Offers
        </button>
      </div>
    </div>
  );

  // PATH D: WALLET FIRST FLOW
  const WalletD1Screen = () => (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button onClick={handleBack} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex gap-1">
            <div className="w-8 h-1 rounded-full bg-purple-500" />
            <div className="w-8 h-1 rounded-full bg-white/20" />
          </div>
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-8">
        {/* Step Icon */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/30 flex items-center justify-center">
            <Wallet className="w-12 h-12 text-purple-400" />
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold mb-3">
            Step 1 of 2
          </span>
          <h2 className="text-2xl font-bold text-white mb-2">Your ReZ Wallet</h2>
          <p className="text-gray-400">
            One wallet, multiple types of value
          </p>
        </div>

        {/* Wallet Sections */}
        <div className="space-y-4 mb-6">
          {/* Real Money */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/30 flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="font-bold text-white">Real Money</h3>
                  <p className="text-xs text-gray-400">Cashback & refunds</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-emerald-400">₹2,450</p>
            </div>
            <ul className="space-y-1 text-xs text-gray-300">
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>Withdraw to bank anytime</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>Use for any purchase</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>No expiry</span>
              </li>
            </ul>
          </div>

          {/* ReZ Coins */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/30 flex items-center justify-center">
                  <span className="text-2xl">🪙</span>
                </div>
                <div>
                  <h3 className="font-bold text-white">ReZ Coins</h3>
                  <p className="text-xs text-gray-400">Universal rewards</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-amber-400">1,250</p>
                <p className="text-xs text-gray-400">= ₹625</p>
              </div>
            </div>
            <ul className="space-y-1 text-xs text-gray-300">
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-amber-400" />
                <span>Earned on every purchase</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-amber-400" />
                <span>Use at any store</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-amber-400" />
                <span>1 coin = ₹0.50</span>
              </li>
            </ul>
          </div>

          {/* Brand Coins */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/30 flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <h3 className="font-bold text-white">Brand Coins</h3>
                  <p className="text-xs text-gray-400">Store-specific rewards</p>
                </div>
              </div>
              <p className="text-lg font-bold text-blue-400">7 Brands</p>
            </div>
            <ul className="space-y-1 text-xs text-gray-300">
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-blue-400" />
                <span>Starbucks: 450 stars</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-blue-400" />
                <span>Nike: 320 points</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3 h-3 text-blue-400" />
                <span>More from other brands</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Point */}
        <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-6">
          <div className="flex gap-3">
            <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-white font-medium mb-1">Everything in one place</p>
              <p className="text-xs text-gray-400">Track all your rewards across all brands</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNext('HRW-D2')}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
        >
          Next: Full Transparency
        </button>
      </div>
    </div>
  );

  const WalletD2Screen = () => (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button onClick={handleBack} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex gap-1">
            <div className="w-8 h-1 rounded-full bg-purple-500" />
            <div className="w-8 h-1 rounded-full bg-purple-500" />
          </div>
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-8">
        {/* Step Icon */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 border border-emerald-500/30 flex items-center justify-center">
            <span className="text-5xl">✅</span>
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            Step 2 of 2
          </span>
          <h2 className="text-2xl font-bold text-white mb-2">100% Transparent</h2>
          <p className="text-gray-400">
            See exactly where every rupee comes from
          </p>
        </div>

        {/* Transparency Features */}
        <div className="space-y-4 mb-6">
          {/* Transaction History */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/30 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Complete Transaction History</h3>
                <p className="text-xs text-gray-400">Every earn & spend, timestamped</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between text-sm">
                <div>
                  <p className="text-white">Pizza Corner</p>
                  <p className="text-xs text-gray-400">Today, 2:30 PM</p>
                </div>
                <span className="text-emerald-400 font-semibold">+₹50</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between text-sm">
                <div>
                  <p className="text-white">Fashion Hub</p>
                  <p className="text-xs text-gray-400">Yesterday, 6:15 PM</p>
                </div>
                <span className="text-emerald-400 font-semibold">+₹250</span>
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/30 flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Detailed Breakdowns</h3>
                <p className="text-xs text-gray-400">Know exactly what you earned</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/5">
              <p className="text-sm text-white font-semibold mb-2">Last Purchase Breakdown:</p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>Base Cashback (10%)</span>
                  <span>₹50</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Bonus Streak Reward</span>
                  <span>₹10</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>ReZ Coins Earned</span>
                  <span>25 (₹12.50)</span>
                </div>
                <div className="pt-2 mt-2 border-t border-white/10 flex justify-between font-semibold text-emerald-400">
                  <span>Total Value</span>
                  <span>₹72.50</span>
                </div>
              </div>
            </div>
          </div>

          {/* No Hidden Fees */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/30 flex items-center justify-center">
                <span className="text-2xl">🚫</span>
              </div>
              <div>
                <h3 className="font-bold text-white">No Hidden Fees</h3>
                <p className="text-xs text-gray-400">What you see is what you get</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Zero subscription fees</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Free bank withdrawals</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>No minimum balance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Point */}
        <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-6">
          <div className="flex gap-3">
            <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-white font-medium mb-1">Your money, your control</p>
              <p className="text-xs text-gray-400">Full visibility into every transaction</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNext('HRW-F1')}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
        >
          See What Else ReZ Offers
        </button>
      </div>
    </div>
  );

  // FINAL MERGE SCREEN
  const FinalMergeScreen = () => (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="w-10" />
          <h1 className="text-lg font-bold text-white">You're All Set!</h1>
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-8">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center animate-scale-in">
            <span className="text-6xl">🎉</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">You're Ready to Save!</h2>
          <p className="text-gray-400 text-lg">
            Start using ReZ and watch your savings grow
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 text-center">
            <p className="text-2xl font-bold text-white mb-1">1000+</p>
            <p className="text-xs text-gray-400">Partner Stores</p>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/30 text-center">
            <p className="text-2xl font-bold text-white mb-1">30%</p>
            <p className="text-xs text-gray-400">Avg Savings</p>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30 text-center">
            <p className="text-2xl font-bold text-white mb-1">24/7</p>
            <p className="text-xs text-gray-400">Support</p>
          </div>
        </div>

        {/* What You Can Do */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4">What You Can Do Now:</h3>
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <Store className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-white font-medium">Find stores near you</p>
                <p className="text-xs text-gray-400">Start saving on offline purchases</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-medium">Browse ReZ Mall</p>
                <p className="text-xs text-gray-400">Shop online with guaranteed rewards</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <Tag className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-white font-medium">Explore deals</p>
                <p className="text-xs text-gray-400">Discover exclusive offers</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-white font-medium">Check your wallet</p>
                <p className="text-xs text-gray-400">Track earnings and rewards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
          <h3 className="text-white font-semibold mb-3 text-center">Why Users Love ReZ</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Save on every purchase, online & offline</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Instant cashback & rewards</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>All your loyalty programs in one place</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>100% transparent, no hidden fees</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="space-y-3">
          <button
            onClick={() => navigate('/')}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
          >
            Start Saving Now
          </button>

          <button
            onClick={() => setCurrentScreen('HRW-01')}
            className="w-full py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
          >
            Take Tour Again
          </button>
        </div>
      </div>
    </div>
  );

  // Main Render
  const renderScreen = () => {
    switch (currentScreen) {
      case 'HRW-01':
        return <IntentSelectorScreen />;

      // Path A: Offline
      case 'HRW-A1':
        return <OfflineA1Screen />;
      case 'HRW-A2':
        return <OfflineA2Screen />;
      case 'HRW-A3':
        return <OfflineA3Screen />;
      case 'HRW-A4':
        return <OfflineA4Screen />;

      // Path B: Online
      case 'HRW-B1':
        return <OnlineB1Screen />;
      case 'HRW-B2':
        return <OnlineB2Screen />;
      case 'HRW-B3':
        return <OnlineB3Screen />;
      case 'HRW-B4':
        return <OnlineB4Screen />;

      // Path C: Offers
      case 'HRW-C1':
        return <OffersC1Screen />;
      case 'HRW-C2':
        return <OffersC2Screen />;

      // Path D: Wallet
      case 'HRW-D1':
        return <WalletD1Screen />;
      case 'HRW-D2':
        return <WalletD2Screen />;

      // Final
      case 'HRW-F1':
        return <FinalMergeScreen />;

      default:
        return <IntentSelectorScreen />;
    }
  };

  return renderScreen();
};

export default HowRezWorks;
