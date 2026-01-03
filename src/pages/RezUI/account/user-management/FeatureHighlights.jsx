import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check, Sparkles, Zap, Gift, Heart, Star } from 'lucide-react';

// Backend API: POST /api/user/onboarding/complete

export default function FeatureHighlights() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: Sparkles,
      title: 'Earn ReZ Coins',
      description: 'Get rewarded for every purchase, referral, and engagement. ReZ Coins never expire!',
      color: 'from-purple-500 to-pink-500',
      image: '💰'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Delivery',
      description: 'Get your orders delivered in minutes. Track in real-time with live updates.',
      color: 'from-blue-500 to-cyan-500',
      image: '⚡'
    },
    {
      icon: Gift,
      title: 'Exclusive Deals',
      description: 'Access member-only offers, flash sales, and limited-time discounts daily.',
      color: 'from-orange-500 to-red-500',
      image: '🎁'
    },
    {
      icon: Heart,
      title: 'Personalized Experience',
      description: 'AI-powered recommendations based on your preferences and shopping history.',
      color: 'from-green-500 to-emerald-500',
      image: '❤️'
    },
    {
      icon: Star,
      title: 'VIP Rewards Program',
      description: 'Unlock tiers, earn badges, and get cashback on every transaction.',
      color: 'from-yellow-500 to-amber-500',
      image: '⭐'
    }
  ];

  const nextSlide = () => {
    if (currentSlide < features.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/home');
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const skip = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 flex flex-col">
      {/* Header */}
      <div className="p-4 flex justify-between items-center">
        <button onClick={skip} className="text-white/80 hover:text-white font-medium">
          Skip
        </button>
        <div className="flex gap-2">
          {features.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Feature Slide */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="text-center max-w-md">
          {/* Icon */}
          <div className="mb-8">
            <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br ${features[currentSlide].color} shadow-2xl animate-bounce`}>
              <span className="text-6xl">{features[currentSlide].image}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold text-white mb-4">
            {features[currentSlide].title}
          </h2>

          {/* Description */}
          <p className="text-xl text-white/90 leading-relaxed">
            {features[currentSlide].description}
          </p>

          {/* Features List (for first slide) */}
          {currentSlide === 0 && (
            <div className="mt-8 space-y-3">
              {['Shop from 10+ apps', 'Earn on every purchase', 'Redeem anywhere'].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-white/90">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="p-8 flex items-center justify-between">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-4 rounded-full transition-all ${
            currentSlide === 0
              ? 'bg-white/20 text-white/40 cursor-not-allowed'
              : 'bg-white/30 text-white hover:bg-white/40'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-white/90 transition-all shadow-lg flex items-center gap-2"
        >
          {currentSlide === features.length - 1 ? "Let's Go!" : 'Next'}
          {currentSlide < features.length - 1 && <ChevronRight className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}
