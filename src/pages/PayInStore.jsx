import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Camera,
  Flashlight,
  Upload,
  Lock,
  CheckCircle,
  MapPin,
  Star,
  ChevronRight,
  Coins,
  Zap,
  Gift,
  TrendingUp,
  AlertCircle,
  Wifi,
  WifiOff,
  X,
  Share2,
  MessageSquare
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';

const PayInStore = () => {
  const navigate = useNavigate();
  const { rezCoins, brandedCoins, addRezCoins } = useWallet();

  // Flow state management
  const [currentStep, setCurrentStep] = useState('scan'); // scan, merchant, amount, rewards, payment, processing, success
  const [torchOn, setTorchOn] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [billAmount, setBillAmount] = useState('');
  const [selectedMerchant, setSelectedMerchant] = useState(null);
  const [coinsToUse, setCoinsToUse] = useState({
    rezCoins: 0,
    brandCoins: 0,
    promoCoins: 0
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('upi');
  const [error, setError] = useState(null);

  // Mock merchant data (would come from QR scan)
  const mockMerchant = {
    id: 'merchant_001',
    name: 'Cafe Coffee Day',
    category: 'Food & Dining',
    logo: '☕',
    rating: 4.5,
    distance: '120m',
    verified: true,
    cashbackRate: 10,
    brandCoinsAvailable: 120,
    currentVisits: 4,
    requiredVisits: 5,
    nextReward: 'Free Coffee',
    offers: [
      { id: 1, text: '10% instant cashback', type: 'cashback' },
      { id: 2, text: 'Double coins on weekends', type: 'coins' }
    ]
  };

  // Calculate savings
  const calculateSavings = () => {
    const amount = parseFloat(billAmount) || 0;
    const totalCoinsUsed = coinsToUse.rezCoins + coinsToUse.brandCoins + coinsToUse.promoCoins;
    const cashbackEarned = Math.floor(amount * (selectedMerchant?.cashbackRate || 10) / 100);
    const coinsEarned = Math.floor(amount / 20); // 1 coin per ₹20
    const finalAmount = amount - totalCoinsUsed;

    return {
      originalAmount: amount,
      totalCoinsUsed,
      cashbackEarned,
      coinsEarned,
      finalAmount,
      totalSaved: totalCoinsUsed + cashbackEarned
    };
  };

  const savings = calculateSavings();

  // QR Scanner Screen
  const ScanQRScreen = () => (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="px-4 py-3 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/10">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-white">Scan & Pay with ReZ</h1>
            <p className="text-xs text-gray-400">Instant rewards on every payment</p>
          </div>
        </div>
      </div>

      {/* Camera View */}
      <div className="relative h-[500px] bg-gradient-to-b from-gray-900 to-black">
        {/* Scanner Frame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-64 h-64">
            {/* Corner markers */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-emerald-500 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-emerald-500 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-emerald-500 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-emerald-500 rounded-br-2xl" />

            {/* Scanning line animation */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-scan" />
            </div>

            {/* QR Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Camera className="w-16 h-16 text-white/30" />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6">
          <button
            onClick={() => setTorchOn(!torchOn)}
            className={`p-4 rounded-full ${torchOn ? 'bg-amber-500' : 'bg-white/20'} backdrop-blur-sm`}
          >
            <Flashlight className={`w-6 h-6 ${torchOn ? 'text-white' : 'text-gray-300'}`} />
          </button>
          <button className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
            <Upload className="w-6 h-6 text-gray-300" />
          </button>
        </div>
      </div>

      {/* Helper Text */}
      <div className="px-4 py-6 text-center">
        <p className="text-white font-medium mb-2">Scan the ReZ QR at the store counter</p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <Lock className="w-4 h-4 text-emerald-400" />
          <span>Secure payment · Instant rewards</span>
        </div>
      </div>

      {/* Demo Button */}
      <div className="px-4">
        <button
          onClick={() => {
            setSelectedMerchant(mockMerchant);
            setCurrentStep('merchant');
          }}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold"
        >
          Demo: Scan QR (Click to Continue)
        </button>
      </div>

      {/* Recent Stores */}
      <div className="px-4 py-6">
        <h3 className="text-sm font-semibold text-gray-400 mb-3">Recent Stores</h3>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedMerchant(mockMerchant);
                setCurrentStep('merchant');
              }}
              className="w-full p-3 rounded-xl bg-[#2C2C2E] flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-xl">
                ☕
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-white">Cafe Coffee Day</p>
                <p className="text-xs text-gray-500">Last visit: 2 days ago</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Merchant Detected Screen
  const MerchantDetectedScreen = () => (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="px-4 py-3 flex items-center gap-3">
          <button onClick={() => setCurrentStep('scan')} className="p-2 rounded-full bg-white/10">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-lg font-bold text-white">Merchant Detected</h1>
        </div>
      </div>

      {/* Success Animation */}
      <div className="px-4 py-8 text-center">
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4 animate-pulse">
          <CheckCircle className="w-12 h-12 text-emerald-400" />
        </div>
        <p className="text-white font-semibold">QR Scanned Successfully!</p>
      </div>

      {/* Merchant Card */}
      <div className="px-4 pb-6">
        <div className="p-6 rounded-3xl bg-gradient-to-br from-[#2C2C2E] to-[#1C1C1E] border border-white/10">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 flex items-center justify-center text-3xl">
              {selectedMerchant?.logo}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-bold text-white">{selectedMerchant?.name}</h2>
                {selectedMerchant?.verified && (
                  <div className="px-2 py-0.5 rounded-full bg-emerald-500/20 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    <span className="text-xs text-emerald-400">Verified</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-400 mb-2">{selectedMerchant?.category}</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-sm text-white">{selectedMerchant?.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-400">{selectedMerchant?.distance}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Offers */}
          <div className="space-y-2 mb-4">
            {selectedMerchant?.offers?.map((offer) => (
              <div
                key={offer.id}
                className="p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-amber-500/10 border border-emerald-500/20 flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-white">{offer.text}</span>
              </div>
            ))}
          </div>

          {/* Loyalty Progress */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">Loyalty Progress</span>
              <span className="text-sm font-semibold text-amber-400">
                {selectedMerchant?.currentVisits}/{selectedMerchant?.requiredVisits} visits
              </span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full transition-all"
                style={{ width: `${(selectedMerchant?.currentVisits / selectedMerchant?.requiredVisits) * 100}%` }}
              />
            </div>
            <p className="text-xs text-gray-500">
              1 more visit to unlock: {selectedMerchant?.nextReward} 🎁
            </p>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 glass">
        <button
          onClick={() => setCurrentStep('amount')}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold flex items-center justify-center gap-2"
        >
          <span>Continue to Pay</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  // Enter Bill Amount Screen
  const EnterAmountScreen = () => (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="px-4 py-3 flex items-center gap-3">
          <button onClick={() => setCurrentStep('merchant')} className="p-2 rounded-full bg-white/10">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-lg font-bold text-white">Enter Bill Amount</h1>
        </div>
      </div>

      {/* Amount Input */}
      <div className="px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl text-gray-500">₹</span>
            <input
              type="number"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
              placeholder="0"
              className="text-6xl font-bold text-white bg-transparent border-none outline-none w-full text-center"
              autoFocus
            />
          </div>
          <p className="text-sm text-gray-400">Enter total bill before discounts</p>
        </div>

        {/* Quick Amount Buttons */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          {[100, 200, 500, 1000].map((amount) => (
            <button
              key={amount}
              onClick={() => setBillAmount(amount.toString())}
              className="py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
            >
              ₹{amount}
            </button>
          ))}
        </div>

        {/* Preview Savings */}
        {billAmount && parseFloat(billAmount) > 0 && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-amber-500/10 border border-emerald-500/20 animate-slideDown">
            <p className="text-sm text-gray-400 mb-2">Estimated Rewards</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-400" />
                <span className="text-white font-medium">Cashback</span>
              </div>
              <span className="text-emerald-400 font-bold">
                ₹{Math.floor(parseFloat(billAmount) * 0.1)}
              </span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-amber-400" />
                <span className="text-white font-medium">Coins</span>
              </div>
              <span className="text-amber-400 font-bold">
                {Math.floor(parseFloat(billAmount) / 20)} coins
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Next Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 glass">
        <button
          onClick={() => billAmount && parseFloat(billAmount) > 0 && setCurrentStep('rewards')}
          disabled={!billAmount || parseFloat(billAmount) <= 0}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );

  // Apply Rewards Screen (MOST IMPORTANT)
  const ApplyRewardsScreen = () => {
    const maxRezCoins = Math.min(rezCoins, savings.originalAmount * 0.5); // Max 50% of bill
    const maxBrandCoins = Math.min(selectedMerchant?.brandCoinsAvailable || 0, savings.originalAmount * 0.3);

    return (
      <div className="min-h-screen bg-black pb-24">
        {/* Header */}
        <div className="sticky top-0 z-40 glass">
          <div className="px-4 py-3 flex items-center gap-3">
            <button onClick={() => setCurrentStep('amount')} className="p-2 rounded-full bg-white/10">
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <h1 className="text-lg font-bold text-white">Apply Rewards</h1>
          </div>
        </div>

        {/* Bill Breakdown */}
        <div className="px-4 py-6">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#2C2C2E] to-[#1C1C1E] border border-white/10 mb-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">Bill Amount</span>
              <span className="text-2xl font-bold text-white">₹{savings.originalAmount}</span>
            </div>
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Coins className="w-5 h-5 text-amber-400" />
                <span className="text-sm text-gray-400">Available Coins</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">ReZ Coins</span>
                <span className="text-amber-400 font-bold">{rezCoins}</span>
              </div>
              {selectedMerchant?.brandCoinsAvailable > 0 && (
                <div className="flex items-center justify-between mt-2">
                  <span className="text-white font-medium">Brand Coins</span>
                  <span className="text-purple-400 font-bold">{selectedMerchant.brandCoinsAvailable}</span>
                </div>
              )}
            </div>
          </div>

          {/* Apply Coins Section */}
          <div className="space-y-4 mb-6">
            <h3 className="text-sm font-semibold text-gray-400">Apply Coins</h3>

            {/* ReZ Coins */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Coins className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Use ReZ Coins</p>
                    <p className="text-xs text-gray-400">Max ₹{Math.floor(maxRezCoins)}</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={coinsToUse.rezCoins > 0}
                    onChange={(e) => setCoinsToUse(prev => ({
                      ...prev,
                      rezCoins: e.target.checked ? Math.floor(maxRezCoins) : 0
                    }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                </label>
              </div>
              {coinsToUse.rezCoins > 0 && (
                <div className="pt-3 border-t border-white/10">
                  <input
                    type="range"
                    min="0"
                    max={Math.floor(maxRezCoins)}
                    value={coinsToUse.rezCoins}
                    onChange={(e) => setCoinsToUse(prev => ({ ...prev, rezCoins: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400">Using</span>
                    <span className="text-emerald-400 font-bold">₹{coinsToUse.rezCoins}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Brand Coins */}
            {selectedMerchant?.brandCoinsAvailable > 0 && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-xl">
                      {selectedMerchant.logo}
                    </div>
                    <div>
                      <p className="text-white font-medium">Use Brand Coins</p>
                      <p className="text-xs text-gray-400">Max ₹{Math.floor(maxBrandCoins)}</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={coinsToUse.brandCoins > 0}
                      onChange={(e) => setCoinsToUse(prev => ({
                        ...prev,
                        brandCoins: e.target.checked ? Math.floor(maxBrandCoins) : 0
                      }))}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                  </label>
                </div>
                {coinsToUse.brandCoins > 0 && (
                  <div className="pt-3 border-t border-white/10">
                    <input
                      type="range"
                      min="0"
                      max={Math.floor(maxBrandCoins)}
                      value={coinsToUse.brandCoins}
                      onChange={(e) => setCoinsToUse(prev => ({ ...prev, brandCoins: parseInt(e.target.value) }))}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-400">Using</span>
                      <span className="text-purple-400 font-bold">₹{coinsToUse.brandCoins}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Auto-apply hint */}
            <div className="flex items-center gap-2 px-3">
              <Zap className="w-4 h-4 text-amber-400" />
              <p className="text-xs text-gray-400">Coins auto-applied for maximum savings</p>
            </div>
          </div>

          {/* Final Payable */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-amber-500/20 border-2 border-emerald-500/30 mb-4">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-400 mb-1">You Pay</p>
              <p className="text-5xl font-bold text-white">₹{savings.finalAmount}</p>
            </div>
            <div className="flex items-center justify-center gap-2 pt-4 border-t border-white/20">
              <Gift className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">You Save ₹{savings.totalCoinsUsed}</span>
            </div>
          </div>

          {/* Earnings Preview */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-sm text-gray-400 mb-3">You'll Earn</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-center">
                <p className="text-2xl font-bold text-emerald-400">₹{savings.cashbackEarned}</p>
                <p className="text-xs text-gray-400 mt-1">Cashback</p>
              </div>
              <div className="p-3 rounded-xl bg-amber-500/10 text-center">
                <p className="text-2xl font-bold text-amber-400">{savings.coinsEarned}</p>
                <p className="text-xs text-gray-400 mt-1">Coins</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pay Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 glass">
          <button
            onClick={() => setCurrentStep('payment')}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-lg"
          >
            Pay ₹{savings.finalAmount}
          </button>
        </div>
      </div>
    );
  };

  // Payment Method Screen
  const PaymentMethodScreen = () => {
    const paymentMethods = [
      { id: 'upi', name: 'UPI', icon: '💳', apps: ['GPay', 'PhonePe', 'Paytm', 'BHIM'] },
      { id: 'wallet', name: 'ReZ Wallet', icon: '👛', balance: 2500 },
      { id: 'cash', name: 'Pay with Cash', icon: '💵', note: 'Merchant will confirm' }
    ];

    return (
      <div className="min-h-screen bg-black">
        {/* Header */}
        <div className="sticky top-0 z-40 glass">
          <div className="px-4 py-3 flex items-center gap-3">
            <button onClick={() => setCurrentStep('rewards')} className="p-2 rounded-full bg-white/10">
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <h1 className="text-lg font-bold text-white">Choose Payment Method</h1>
          </div>
        </div>

        {/* Amount Summary */}
        <div className="px-4 py-6">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-amber-500/10 border border-emerald-500/20 text-center mb-6">
            <p className="text-sm text-gray-400 mb-1">Amount to Pay</p>
            <p className="text-4xl font-bold text-white">₹{savings.finalAmount}</p>
          </div>

          {/* Payment Methods */}
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedPaymentMethod(method.id)}
                className={`w-full p-4 rounded-2xl border-2 transition-all ${
                  selectedPaymentMethod === method.id
                    ? 'bg-emerald-500/20 border-emerald-500'
                    : 'bg-[#2C2C2E] border-white/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{method.icon}</div>
                  <div className="flex-1 text-left">
                    <p className="text-white font-semibold">{method.name}</p>
                    {method.apps && (
                      <p className="text-xs text-gray-400">{method.apps.join(' · ')}</p>
                    )}
                    {method.balance && (
                      <p className="text-xs text-emerald-400">Balance: ₹{method.balance}</p>
                    )}
                    {method.note && (
                      <p className="text-xs text-gray-400">{method.note}</p>
                    )}
                  </div>
                  {selectedPaymentMethod === method.id && (
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Proceed Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 glass">
          <button
            onClick={() => setCurrentStep('processing')}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold"
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    );
  };

  // Processing Screen
  const ProcessingScreen = () => {
    useEffect(() => {
      const timer = setTimeout(() => {
        setCurrentStep('success');
      }, 3000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center mb-6 animate-spin-slow">
          <Coins className="w-16 h-16 text-amber-400 animate-pulse" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Processing Payment...</h2>
        <p className="text-gray-400 text-center">Securing rewards</p>

        <div className="mt-8 space-y-2 w-full max-w-xs">
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Verifying payment</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse animation-delay-200" />
            <span>Applying rewards</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse animation-delay-400" />
            <span>Updating loyalty progress</span>
          </div>
        </div>
      </div>
    );
  };

  // Success Screen
  const SuccessScreen = () => {
    return (
      <div className="min-h-screen bg-black pb-24">
        {/* Confetti Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="confetti"></div>
        </div>

        {/* Success Animation */}
        <div className="px-4 py-12 text-center">
          <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <CheckCircle className="w-16 h-16 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Payment Successful!</h2>
          <p className="text-gray-400">Thank you for using ReZ</p>
        </div>

        {/* Savings Summary */}
        <div className="px-4 mb-6">
          <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-amber-500/20 border-2 border-emerald-500/30">
            <h3 className="text-center text-lg font-semibold text-white mb-4">Transaction Summary</h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/10">
                <span className="text-gray-400">You Paid</span>
                <span className="text-xl font-bold text-white">₹{savings.finalAmount}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10">
                <div className="flex items-center gap-2">
                  <Coins className="w-5 h-5 text-emerald-400" />
                  <span className="text-white">Coins Used</span>
                </div>
                <span className="text-emerald-400 font-bold">₹{savings.totalCoinsUsed}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  <span className="text-white">Cashback Earned</span>
                </div>
                <span className="text-emerald-400 font-bold">₹{savings.cashbackEarned}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-amber-500/10">
                <div className="flex items-center gap-2">
                  <Coins className="w-5 h-5 text-amber-400" />
                  <span className="text-white">Coins Earned</span>
                </div>
                <span className="text-amber-400 font-bold">{savings.coinsEarned} coins</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center justify-center gap-2">
                <Gift className="w-6 h-6 text-amber-400" />
                <span className="text-lg font-semibold text-white">
                  Total Saved: ₹{savings.totalSaved}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Loyalty Progress */}
        <div className="px-4 mb-6">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Loyalty Progress</h3>
                <p className="text-xs text-gray-400">Keep earning rewards!</p>
              </div>
            </div>

            <div className="mb-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Visits</span>
                <span className="text-sm font-semibold text-purple-400">
                  {(selectedMerchant?.currentVisits || 0) + 1}/{selectedMerchant?.requiredVisits}
                </span>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all"
                  style={{ width: `${(((selectedMerchant?.currentVisits || 0) + 1) / (selectedMerchant?.requiredVisits || 5)) * 100}%` }}
                />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 mt-3">
              <p className="text-sm text-white">
                🎁 Just {(selectedMerchant?.requiredVisits || 5) - (selectedMerchant?.currentVisits || 0) - 1} more visit(s) to unlock:
                <span className="font-semibold text-amber-400"> {selectedMerchant?.nextReward}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-4 space-y-3">
          <button
            onClick={() => navigate('/')}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold"
          >
            Done
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 rounded-xl bg-white/10 text-white font-medium flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
            <button className="py-3 rounded-xl bg-white/10 text-white font-medium flex items-center justify-center gap-2">
              <Star className="w-5 h-5" />
              <span>Rate Store</span>
            </button>
          </div>
        </div>

        {/* Cashback Status Note */}
        <div className="px-4 mt-6">
          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-white font-medium mb-1">Cashback Status</p>
              <p className="text-xs text-gray-400">
                Cashback will be credited within 24 hours after merchant confirmation
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render current step
  const renderStep = () => {
    switch (currentStep) {
      case 'scan':
        return <ScanQRScreen />;
      case 'merchant':
        return <MerchantDetectedScreen />;
      case 'amount':
        return <EnterAmountScreen />;
      case 'rewards':
        return <ApplyRewardsScreen />;
      case 'payment':
        return <PaymentMethodScreen />;
      case 'processing':
        return <ProcessingScreen />;
      case 'success':
        return <SuccessScreen />;
      default:
        return <ScanQRScreen />;
    }
  };

  return renderStep();
};

export default PayInStore;
