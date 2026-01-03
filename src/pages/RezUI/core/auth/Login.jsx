import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        navigate('/otp-verify', { state: { phoneNumber } });
      }, 1000);
    }
  };

  const benefits = [
    { icon: '💰', text: 'Earn ReZ Coins on every purchase' },
    { icon: '🎁', text: 'Get instant cashback & rewards' },
    { icon: '🏪', text: 'Shop at 10,000+ partner stores' },
    { icon: '⚡', text: 'Pay in-store with QR code' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rez-green-50 via-white to-rez-teal-50 dark:from-black dark:via-rez-navy dark:to-black flex flex-col">
      {/* Header */}
      <div className="p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-12 h-12 rounded-rez-xl bg-gradient-to-br from-rez-green-500 to-rez-teal-500 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-black font-poppins bg-gradient-to-r from-rez-green-600 to-rez-teal-600 dark:from-rez-green-400 dark:to-rez-teal-400 bg-clip-text text-transparent">
            ReZ
          </h1>
        </div>
        <p className="text-body text-rez-gray-600 dark:text-gray-400">
          Save money on everything you buy
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
        <div className="w-full max-w-md">
          {/* Welcome Message */}
          <div className="text-center mb-8">
            <h2 className="text-h2 font-poppins text-rez-navy dark:text-white mb-2">
              Welcome Back!
            </h2>
            <p className="text-body text-rez-gray-600 dark:text-gray-400">
              Login to continue saving money
            </p>
          </div>

          {/* Phone Number Form */}
          <form onSubmit={handleSendOTP} className="mb-8">
            <div className="mb-6">
              <label className="block text-body-sm font-semibold text-rez-navy dark:text-white mb-2">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-rez-gray-400" />
                  <span className="text-body text-rez-gray-600 dark:text-gray-400">+91</span>
                </div>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="Enter 10-digit mobile number"
                  className="w-full pl-24 pr-4 py-4 rounded-rez-lg border-2 border-rez-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-rez-navy dark:text-white placeholder-rez-gray-400 focus:border-rez-green-500 dark:focus:border-emerald-500 focus:outline-none text-lg transition-colors"
                  maxLength="10"
                  required
                />
              </div>
              {phoneNumber.length > 0 && phoneNumber.length < 10 && (
                <p className="mt-2 text-caption text-red-500">
                  Please enter a valid 10-digit number
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={phoneNumber.length !== 10 || isLoading}
              className="w-full py-4 rounded-rez-lg bg-gradient-to-r from-rez-green-500 to-rez-teal-500 hover:from-rez-green-600 hover:to-rez-teal-600 text-white font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-rez-green"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending OTP...
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-rez-gray-200 dark:border-white/10" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white dark:bg-black text-caption text-rez-gray-500 dark:text-gray-400">
                Don't have an account?
              </span>
            </div>
          </div>

          {/* Sign Up Link */}
          <Link
            to="/signup"
            className="w-full py-4 rounded-rez-lg border-2 border-rez-green-500 dark:border-emerald-500 text-rez-green-600 dark:text-emerald-400 font-bold text-lg flex items-center justify-center gap-2 hover:bg-rez-green-50 dark:hover:bg-emerald-500/10 transition-all"
          >
            Create New Account
          </Link>
        </div>
      </div>

      {/* Benefits Footer */}
      <div className="px-6 pb-8">
        <div className="max-w-md mx-auto">
          <p className="text-caption font-semibold text-rez-gray-600 dark:text-gray-400 mb-4 text-center">
            Why choose ReZ?
          </p>
          <div className="grid grid-cols-2 gap-3">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-3 rounded-rez-lg bg-white dark:bg-white/5 border border-rez-gray-200 dark:border-white/10"
              >
                <span className="text-xl">{benefit.icon}</span>
                <span className="text-xs text-rez-navy dark:text-white">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Terms */}
      <div className="px-6 pb-6 text-center">
        <p className="text-xs text-rez-gray-500 dark:text-gray-400">
          By continuing, you agree to our{' '}
          <Link to="/terms" className="text-rez-green-600 dark:text-emerald-400 underline">
            Terms & Conditions
          </Link>
          {' '}and{' '}
          <Link to="/privacy" className="text-rez-green-600 dark:text-emerald-400 underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
