import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  MapPin,
  Bell,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Wallet,
  Store,
  ShoppingBag,
  Sparkles,
  Heart,
  Plane,
  Home as HomeIcon,
  Dumbbell,
  Utensils,
  QrCode,
  Gift,
  Zap,
  RefreshCw
} from 'lucide-react';

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [referralCode, setReferralCode] = useState('');
  const [showReferral, setShowReferral] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpTimer, setOtpTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  // Determine steps based on user type
  const steps = isFirstTimeUser
    ? ['preloader1', 'preloader2', 'preloader3', 'login', 'otp', 'onboarding1', 'onboarding2', 'onboarding3', 'onboarding4', 'success']
    : ['splash', 'login', 'otp'];

  // OTP Timer countdown
  useEffect(() => {
    if (otpSent && otpTimer > 0 && !canResend) {
      const timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else if (otpTimer === 0) {
      setCanResend(true);
    }
  }, [otpSent, otpTimer, canResend]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      localStorage.setItem('onboardingComplete', 'true');
      navigate('/');
    }
  };

  const skipToHome = () => {
    localStorage.setItem('onboardingComplete', 'true');
    navigate('/');
  };

  const handleSendOTP = () => {
    if (phoneNumber.length === 10) {
      setOtpSent(true);
      setOtpTimer(30);
      setCanResend(false);
      nextStep();
    }
  };

  const handleResendOTP = () => {
    setOtpTimer(30);
    setCanResend(false);
    // Simulate resend
    console.log('OTP resent');
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      // Simulate OTP verification
      nextStep();
    }
  };

  const renderStep = () => {
    switch (steps[currentStep]) {
      // 3-Screen Micro Pre-Loader (First-Time Users)
      case 'preloader1':
        return <PreLoader1 onComplete={nextStep} />;
      case 'preloader2':
        return <PreLoader2 onComplete={nextStep} />;
      case 'preloader3':
        return <PreLoader3 onComplete={nextStep} />;

      // Single Splash (Returning Users)
      case 'splash':
        return <SplashScreen onComplete={nextStep} />;

      // Login/Signup
      case 'login':
        return (
          <LoginScreen
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            countryCode={countryCode}
            setCountryCode={setCountryCode}
            referralCode={referralCode}
            setReferralCode={setReferralCode}
            showReferral={showReferral}
            setShowReferral={setShowReferral}
            onSendOTP={handleSendOTP}
          />
        );

      // OTP Verification
      case 'otp':
        return (
          <OTPScreen
            phoneNumber={phoneNumber}
            countryCode={countryCode}
            otp={otp}
            setOtp={setOtp}
            otpTimer={otpTimer}
            canResend={canResend}
            onResend={handleResendOTP}
            onVerify={handleVerifyOTP}
          />
        );

      // First-Time Onboarding (4 Screens)
      case 'onboarding1':
        return <OnboardingScreen1 onNext={nextStep} />;
      case 'onboarding2':
        return <OnboardingScreen2 onNext={nextStep} />;
      case 'onboarding3':
        return <OnboardingScreen3 onNext={nextStep} />;
      case 'onboarding4':
        return <OnboardingScreen4 onNext={nextStep} />;

      // Success / Welcome
      case 'success':
        return <SuccessScreen onComplete={skipToHome} />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {renderStep()}
    </div>
  );
};

// 🧩 PRE-LOADER SCREEN 1 (0.8s) - First-Time Users
const PreLoader1 = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-500 via-teal-500 to-amber-500 p-8">
      {/* Coin Animation */}
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-bounce">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl">
            <span className="text-5xl font-bold text-emerald-600">R</span>
          </div>
        </div>
        {/* Shimmer effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
      </div>

      <p className="text-rez-navy dark:text-white text-center text-xl font-semibold px-8">
        Save on everything you already buy
      </p>
    </div>
  );
};

// 🧩 PRE-LOADER SCREEN 2 (0.8s)
const PreLoader2 = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8">
      {/* Scan QR + Online Shopping Icons */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse">
          <QrCode className="w-12 h-12 text-rez-navy dark:text-white" />
        </div>
        <div className="text-4xl text-rez-navy dark:text-white font-bold">+</div>
        <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse animation-delay-200">
          <ShoppingBag className="w-12 h-12 text-rez-navy dark:text-white" />
        </div>
      </div>

      <p className="text-rez-navy dark:text-white text-center text-xl font-semibold px-8">
        Online or in-store — earn rewards everywhere
      </p>
    </div>
  );
};

// 🧩 PRE-LOADER SCREEN 3 (0.8s)
const PreLoader3 = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-amber-500 p-8">
      {/* Wallet Filling Animation */}
      <div className="relative mb-8">
        <div className="w-32 h-32 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <Wallet className="w-16 h-16 text-rez-navy dark:text-white" />
        </div>
        {/* Coins falling into wallet */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-2 animate-bounce">
          <span className="text-3xl">🪙</span>
          <span className="text-3xl animation-delay-200">🪙</span>
          <span className="text-3xl animation-delay-400">🪙</span>
        </div>
      </div>

      <p className="text-rez-navy dark:text-white text-center text-xl font-semibold px-8">
        Cashback • Coins • Loyalty — one wallet
      </p>
    </div>
  );
};

// 💫 SINGLE SPLASH SCREEN (1.5s) - Returning Users
const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-500 via-teal-500 to-amber-500 p-8">
      <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-8 animate-pulse">
        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
          <span className="text-5xl font-bold text-emerald-600">R</span>
        </div>
      </div>
      <p className="text-rez-navy dark:text-white text-center text-lg font-medium">
        Smart people use ReZ to save money
      </p>
    </div>
  );
};

// 🔐 LOGIN / SIGNUP SCREEN
const LoginScreen = ({
  phoneNumber,
  setPhoneNumber,
  countryCode,
  setCountryCode,
  referralCode,
  setReferralCode,
  showReferral,
  setShowReferral,
  onSendOTP
}) => {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-black p-6">
      <div className="flex-1 flex flex-col justify-center">
        {/* Value-First Headline */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-rez-navy dark:text-white mb-3">
            Start saving with ReZ
          </h1>
          <p className="text-rez-gray-600 dark:text-gray-400 text-lg">
            Earn cashback, coins & loyalty rewards on every purchase
          </p>
        </div>

        {/* Mobile Number Input */}
        <div className="mb-4">
          <label className="text-sm text-rez-gray-600 dark:text-gray-400 mb-2 block">Mobile Number</label>
          <div className="flex gap-3">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-24 px-3 py-4 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white border border-white/20 focus:border-emerald-500 focus:outline-none"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+971">🇦🇪 +971</option>
            </select>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
              className="flex-1 px-4 py-4 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white border border-white/20 focus:border-emerald-500 focus:outline-none placeholder-gray-500"
            />
          </div>
        </div>

        {/* Referral Code (Expandable) */}
        {!showReferral ? (
          <button
            onClick={() => setShowReferral(true)}
            className="text-emerald-400 text-sm mb-4 text-left flex items-center gap-2"
          >
            <Gift className="w-4 h-4" />
            Have a referral code?
          </button>
        ) : (
          <div className="mb-4">
            <label className="text-sm text-rez-gray-600 dark:text-gray-400 mb-2 block">Referral Code (Optional)</label>
            <input
              type="text"
              placeholder="Enter referral code"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
              className="w-full px-4 py-4 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white border border-white/20 focus:border-emerald-500 focus:outline-none placeholder-gray-500"
            />
          </div>
        )}

        {/* Primary CTA */}
        <button
          onClick={onSendOTP}
          disabled={phoneNumber.length !== 10}
          className="w-full py-4 rounded-2xl bg-emerald-500 text-rez-navy dark:text-white font-semibold mb-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          Send OTP
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Secondary CTA - WhatsApp Login */}
        <button className="w-full py-4 rounded-2xl bg-[#25D366] text-rez-navy dark:text-white font-semibold mb-6 flex items-center justify-center gap-2">
          <span className="text-xl">💬</span>
          Login via WhatsApp
        </button>

        {/* 💎 BENEFIT STRIP (3 Icons) */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 text-center">
            <div className="text-2xl mb-1">💰</div>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Earn Cashback Everywhere</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 text-center">
            <div className="text-2xl mb-1">🏪</div>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Online + Offline Stores</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 text-center">
            <div className="text-2xl mb-1">⚡</div>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Instant Wallet Rewards</p>
          </div>
        </div>

        {/* 🎁 FIRST-TIME INCENTIVE */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-amber-500/20 border border-emerald-500/30 text-center">
          <p className="text-emerald-400 font-semibold text-sm">
            🎉 Get ₹50-₹100 Welcome Bonus on your first transaction
          </p>
        </div>

        {/* Trust Message */}
        <p className="text-center text-xs text-rez-gray-600 dark:text-gray-500 mt-6">
          🔒 Your data stays private. We never spam or share your info.
        </p>
      </div>
    </div>
  );
};

// 📱 OTP VERIFICATION SCREEN
const OTPScreen = ({
  phoneNumber,
  countryCode,
  otp,
  setOtp,
  otpTimer,
  canResend,
  onResend,
  onVerify
}) => {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-black p-6">
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
            <Smartphone className="w-10 h-10 text-emerald-400" />
          </div>
          <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">
            Verify your number
          </h1>
          <p className="text-rez-gray-600 dark:text-gray-400">
            We sent a code to {countryCode} {phoneNumber}
          </p>
        </div>

        {/* OTP Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
            maxLength={6}
            className="w-full px-4 py-5 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white text-center text-2xl tracking-widest border border-white/20 focus:border-emerald-500 focus:outline-none placeholder-gray-600"
            autoFocus
          />
        </div>

        {/* Resend Timer / Button */}
        <div className="text-center mb-6">
          {!canResend ? (
            <p className="text-rez-gray-600 dark:text-gray-400 text-sm">
              Resend code in <span className="text-emerald-400 font-semibold">{otpTimer}s</span>
            </p>
          ) : (
            <button
              onClick={onResend}
              className="text-emerald-400 font-semibold text-sm flex items-center justify-center gap-2 mx-auto"
            >
              <RefreshCw className="w-4 h-4" />
              Resend OTP
            </button>
          )}
        </div>

        {/* Verify Button */}
        <button
          onClick={onVerify}
          disabled={otp.length !== 6}
          className="w-full py-4 rounded-2xl bg-emerald-500 text-rez-navy dark:text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          Verify & Continue
          <CheckCircle className="w-5 h-5" />
        </button>

        {/* Trust Message */}
        <p className="text-center text-xs text-rez-gray-600 dark:text-gray-500 mt-4">
          🔒 OTP is valid for 10 minutes
        </p>
      </div>
    </div>
  );
};

// 🚀 ONBOARDING SCREEN 1 - What is ReZ (5s)
const OnboardingScreen1 = ({ onNext }) => {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-black p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* ReZ Coin Logo Animation */}
        <div className="relative mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center animate-pulse">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center">
              <span className="text-5xl font-bold text-rez-navy dark:text-white">R</span>
            </div>
          </div>
          {/* Coin shimmer */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-spin" style={{ animationDuration: '3s' }} />
        </div>

        <h1 className="text-3xl font-bold text-rez-navy dark:text-white mb-4 text-center">
          Welcome to ReZ
        </h1>

        <p className="text-xl text-rez-gray-700 dark:text-gray-300 mb-8 text-center px-4">
          Save on everything you buy
        </p>

        {/* Category Icons */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-2">
              <Utensils className="w-7 h-7 text-emerald-400" />
            </div>
            <p className="text-xs text-rez-gray-600 dark:text-gray-500">Food</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-2">
              <ShoppingBag className="w-7 h-7 text-purple-400" />
            </div>
            <p className="text-xs text-rez-gray-600 dark:text-gray-500">Shop</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-xl bg-pink-500/20 flex items-center justify-center mb-2">
              <Sparkles className="w-7 h-7 text-pink-400" />
            </div>
            <p className="text-xs text-rez-gray-600 dark:text-gray-500">Salon</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center mb-2">
              <Heart className="w-7 h-7 text-red-400" />
            </div>
            <p className="text-xs text-rez-gray-600 dark:text-gray-500">Health</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-2">
              <Plane className="w-7 h-7 text-cyan-400" />
            </div>
            <p className="text-xs text-rez-gray-600 dark:text-gray-500">Travel</p>
          </div>
        </div>

        <p className="text-rez-gray-600 dark:text-gray-400 text-center px-8">
          From your daily coffee to your dream vacation — earn cashback on it all
        </p>
      </div>

      <button
        onClick={onNext}
        className="w-full py-4 rounded-2xl bg-emerald-500 text-rez-navy dark:text-white font-semibold flex items-center justify-center gap-2"
      >
        See how it works
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

// 🚀 ONBOARDING SCREEN 2 - How ReZ Works (5s)
const OnboardingScreen2 = ({ onNext }) => {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-black p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-12 text-center">
          How ReZ Works
        </h1>

        {/* Animated Flow: Discover → Pay → Earn */}
        <div className="w-full max-w-sm mb-12">
          {/* Step 1 */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center shrink-0">
              <Store className="w-8 h-8 text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-1">1. Discover</h3>
              <p className="text-rez-gray-600 dark:text-gray-400 text-sm">Browse stores, products, or services on ReZ</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full" />
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center shrink-0">
              <QrCode className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-1">2. Pay</h3>
              <p className="text-rez-gray-600 dark:text-gray-400 text-sm">Scan QR in-store or order online via ReZ</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-amber-500 rounded-full" />
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center shrink-0">
              <Wallet className="w-8 h-8 text-amber-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-1">3. Earn</h3>
              <p className="text-rez-gray-600 dark:text-gray-400 text-sm">Get instant cashback + coins in your wallet</p>
            </div>
          </div>
        </div>

        <p className="text-emerald-400 font-semibold text-center">
          ⚡ It's that simple!
        </p>
      </div>

      <button
        onClick={onNext}
        className="w-full py-4 rounded-2xl bg-emerald-500 text-rez-navy dark:text-white font-semibold flex items-center justify-center gap-2"
      >
        Next
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

// 🚀 ONBOARDING SCREEN 3 - Online + Offline Magic (5s)
const OnboardingScreen3 = ({ onNext }) => {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-black p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-8 text-center">
          Works everywhere you shop
        </h1>

        {/* Split Screen: Offline + Online */}
        <div className="w-full grid grid-cols-2 gap-4 mb-8">
          {/* Offline */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/30 flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-rez-navy dark:text-white text-center mb-2">In Store</h3>
            <p className="text-rez-gray-600 dark:text-gray-400 text-xs text-center">Scan QR at any local partner store & earn instantly</p>
          </div>

          {/* Online */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/30 flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-rez-navy dark:text-white text-center mb-2">Online</h3>
            <p className="text-rez-gray-600 dark:text-gray-400 text-xs text-center">Order from 1000s of brands & get delivered fast</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 mb-4">
          <p className="text-center text-rez-gray-700 dark:text-gray-300">
            💳 Pay any way you like — UPI, Cards, or ReZ Wallet
          </p>
        </div>

        <p className="text-emerald-400 font-semibold text-center">
          Same app. Same wallet. Double the rewards.
        </p>
      </div>

      <button
        onClick={onNext}
        className="w-full py-4 rounded-2xl bg-emerald-500 text-rez-navy dark:text-white font-semibold flex items-center justify-center gap-2"
      >
        Almost done
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

// 🚀 ONBOARDING SCREEN 4 - Rewards & Loyalty (5s)
const OnboardingScreen4 = ({ onNext }) => {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-black p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Wallet Filling Animation */}
        <div className="relative mb-8">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-500/20 to-amber-500/20 flex items-center justify-center">
            <Wallet className="w-16 h-16 text-amber-400" />
          </div>
          {/* Coins animating into wallet */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-2 animate-bounce">
            <span className="text-3xl">🪙</span>
            <span className="text-3xl animation-delay-200">🪙</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-4 text-center">
          Your rewards grow with you
        </h1>

        <p className="text-rez-gray-700 dark:text-gray-300 text-center px-6 mb-8">
          The more you shop, the more you earn
        </p>

        {/* Reward Types */}
        <div className="w-full space-y-3 mb-8">
          <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💰</span>
              <span className="text-rez-navy dark:text-white font-semibold">Instant Cashback</span>
            </div>
            <span className="text-emerald-400 font-bold">5-20%</span>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🪙</span>
              <span className="text-rez-navy dark:text-white font-semibold">ReZ Coins</span>
            </div>
            <span className="text-amber-400 font-bold">Every ₹1 = 1 coin</span>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <span className="text-rez-navy dark:text-white font-semibold">Brand Loyalty</span>
            </div>
            <span className="text-purple-400 font-bold">Exclusive perks</span>
          </div>
        </div>

        {/* Welcome Bonus Callout */}
        <div className="w-full p-5 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-amber-500/20 to-purple-500/20 border-2 border-emerald-500/50">
          <p className="text-center text-rez-navy dark:text-white font-semibold mb-1">
            🎉 Welcome Bonus: ₹50-₹100
          </p>
          <p className="text-center text-rez-gray-600 dark:text-gray-400 text-sm">
            Use it on your first purchase!
          </p>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-amber-500 text-rez-navy dark:text-white font-bold flex items-center justify-center gap-2"
      >
        Let's start saving! 🚀
      </button>
    </div>
  );
};

// 🎉 SUCCESS SCREEN - Post-Onboarding
const SuccessScreen = ({ onComplete }) => {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-black p-6 relative overflow-hidden">
      {/* Coin Burst Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-4xl animate-bounce animation-delay-0">🪙</div>
        <div className="absolute top-1/3 right-1/4 text-4xl animate-bounce animation-delay-200">🪙</div>
        <div className="absolute top-1/2 left-1/3 text-5xl animate-bounce animation-delay-400">🪙</div>
        <div className="absolute top-2/3 right-1/3 text-4xl animate-bounce animation-delay-600">🪙</div>
        <div className="absolute bottom-1/4 left-1/2 text-3xl animate-bounce animation-delay-800">🪙</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        {/* Success Icon */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center mb-8 animate-pulse">
          <CheckCircle className="w-16 h-16 text-emerald-400" />
        </div>

        <h1 className="text-4xl font-bold text-rez-navy dark:text-white mb-4 text-center">
          Welcome to ReZ! 🎉
        </h1>

        <p className="text-rez-gray-700 dark:text-gray-300 text-lg text-center px-8 mb-8">
          You're all set to start saving money on everything you buy
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 w-full mb-8">
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
            <p className="text-2xl font-bold text-emerald-400">5000+</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">Brands</p>
          </div>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center">
            <p className="text-2xl font-bold text-amber-400">₹50</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">Welcome Bonus</p>
          </div>
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-center">
            <p className="text-2xl font-bold text-purple-400">20%</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">Max Cashback</p>
          </div>
        </div>

        <p className="text-emerald-400 font-semibold text-center animate-pulse">
          ✨ Start exploring nearby rewards now!
        </p>
      </div>

      <button
        onClick={onComplete}
        className="w-full py-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 text-rez-navy dark:text-white font-bold text-lg flex items-center justify-center gap-2 relative z-10"
      >
        <Zap className="w-6 h-6" />
        Explore ReZ
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Onboarding;
