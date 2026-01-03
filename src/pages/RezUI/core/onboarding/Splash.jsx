import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('rez_user_token');
    const hasSeenOnboarding = localStorage.getItem('rez_onboarding_complete');

    const timer = setTimeout(() => {
      if (isLoggedIn) {
        navigate('/');
      } else if (hasSeenOnboarding) {
        navigate('/login');
      } else {
        navigate('/onboarding');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rez-green-500 via-rez-teal-500 to-rez-green-600 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 animate-scale-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-rez-3xl bg-white/20 backdrop-blur-lg flex items-center justify-center shadow-2xl">
            <Sparkles className="w-16 h-16 text-white animate-spin-slow" />
          </div>
          <h1 className="text-6xl font-black font-poppins text-white mb-4 tracking-tight">
            ReZ
          </h1>
          <p className="text-xl text-white/90 font-medium">
            Save Money on Everything
          </p>
        </div>

        {/* Tagline */}
        <div className="mt-12 space-y-3 animate-fade-in animation-delay-500">
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span className="text-2xl">💰</span>
            <p className="text-lg font-semibold">Earn Cashback & Coins</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span className="text-2xl">🏪</span>
            <p className="text-lg font-semibold">10,000+ Partner Stores</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <span className="text-2xl">⚡</span>
            <p className="text-lg font-semibold">Instant Rewards</p>
          </div>
        </div>

        {/* Loading Indicator */}
        <div className="mt-16 animate-fade-in animation-delay-1000">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-200" />
            <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-400" />
          </div>
          <p className="mt-4 text-white/80 text-sm">Loading your savings...</p>
        </div>
      </div>

      {/* Version */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs">
        v2.0.0
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Splash;
