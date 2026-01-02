import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OnboardingWelcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-4">
      <div className="text-center text-white max-w-md">
        <Sparkles className="w-24 h-24 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Welcome to ReZ!</h1>
        <p className="text-purple-100 text-lg mb-8">
          Discover amazing deals, earn rewards, and save on everything you love
        </p>
        <button
          onClick={() => navigate('/onboarding/step1')}
          className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all flex items-center gap-2 mx-auto"
        >
          Get Started
          <ArrowRight className="w-6 h-6" />
        </button>
        <p className="text-purple-200 text-sm mt-6">
          Already have an account? <button className="text-white font-semibold hover:underline">Sign In</button>
        </p>
      </div>
    </div>
  );
};

export default OnboardingWelcome;
