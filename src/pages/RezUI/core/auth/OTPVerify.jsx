import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

const OTPVerify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { phoneNumber, isSignup } = location.state || {};

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (!phoneNumber) {
      navigate('/login');
    }
  }, [phoneNumber, navigate]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }

    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }

      // Auto-submit when all filled
      if (newOtp.every(digit => digit !== '') && index === 5) {
        handleVerify(newOtp.join(''));
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = pastedData.split('');
      setOtp([...newOtp, ...Array(6 - newOtp.length).fill('')]);
      if (newOtp.length === 6) {
        handleVerify(pastedData);
      }
    }
  };

  const handleVerify = (otpCode) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (isSignup) {
        navigate('/onboarding');
      } else {
        navigate('/');
      }
    }, 1500);
  };

  const handleResend = () => {
    if (canResend) {
      setTimer(30);
      setCanResend(false);
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
      // Simulate resend API call
      console.log('OTP resent to', phoneNumber);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rez-green-50 via-white to-rez-teal-50 dark:from-black dark:via-rez-navy dark:to-black flex flex-col">
      {/* Header */}
      <div className="p-6 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-rez-lg hover:bg-rez-gray-100 dark:hover:bg-white/10 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-rez-navy dark:text-white" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-rez-lg bg-gradient-to-br from-rez-green-500 to-rez-teal-500 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-black font-poppins bg-gradient-to-r from-rez-green-600 to-rez-teal-600 dark:from-rez-green-400 dark:to-rez-teal-400 bg-clip-text text-transparent">
            ReZ
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
        <div className="w-full max-w-md">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-rez-2xl bg-gradient-to-br from-rez-green-100 to-rez-teal-100 dark:from-rez-green-500/20 dark:to-rez-teal-500/20 flex items-center justify-center">
            <span className="text-4xl">📱</span>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-h2 font-poppins text-rez-navy dark:text-white mb-2">
              Verify OTP
            </h2>
            <p className="text-body text-rez-gray-600 dark:text-gray-400">
              Enter the 6-digit code sent to
            </p>
            <p className="text-body-sm font-semibold text-rez-navy dark:text-white mt-1">
              +91 {phoneNumber}
            </p>
          </div>

          {/* OTP Input */}
          <div className="mb-8">
            <div className="flex gap-3 justify-center mb-6" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-14 h-14 text-center text-2xl font-bold rounded-rez-lg border-2 border-rez-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-rez-navy dark:text-white focus:border-rez-green-500 dark:focus:border-emerald-500 focus:outline-none transition-colors"
                  disabled={isLoading}
                />
              ))}
            </div>

            {/* Resend Timer */}
            <div className="text-center">
              {canResend ? (
                <button
                  onClick={handleResend}
                  className="text-body-sm font-semibold text-rez-green-600 dark:text-emerald-400 hover:underline"
                >
                  Resend OTP
                </button>
              ) : (
                <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
                  Resend OTP in <span className="font-semibold text-rez-navy dark:text-white">{timer}s</span>
                </p>
              )}
            </div>
          </div>

          {/* Verify Button */}
          <button
            onClick={() => handleVerify(otp.join(''))}
            disabled={otp.some(digit => digit === '') || isLoading}
            className="w-full py-4 rounded-rez-lg bg-gradient-to-r from-rez-green-500 to-rez-teal-500 hover:from-rez-green-600 hover:to-rez-teal-600 text-white font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-rez-green"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Verifying...
              </>
            ) : (
              'Verify & Continue'
            )}
          </button>

          {/* Help Text */}
          <div className="mt-8 p-4 rounded-rez-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30">
            <p className="text-caption text-center text-blue-600 dark:text-blue-400">
              💡 Didn't receive the code? Check your SMS or wait {timer > 0 ? timer + 's' : 'and resend'}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Help */}
      <div className="px-6 pb-6 text-center">
        <p className="text-xs text-rez-gray-500 dark:text-gray-400">
          Having trouble? Contact{' '}
          <a href="/support" className="text-rez-green-600 dark:text-emerald-400 underline">
            Support
          </a>
        </p>
      </div>
    </div>
  );
};

export default OTPVerify;
