import React, { useState } from 'react';
import { Heart, ShoppingBag, Smartphone, Home, Utensils, Dumbbell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OnboardingPreferences = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const categories = [
    { id: 'fashion', icon: ShoppingBag, label: 'Fashion' },
    { id: 'electronics', icon: Smartphone, label: 'Electronics' },
    { id: 'home', icon: Home, label: 'Home & Living' },
    { id: 'food', icon: Utensils, label: 'Food & Dining' },
    { id: 'fitness', icon: Dumbbell, label: 'Fitness' },
    { id: 'beauty', icon: Heart, label: 'Beauty' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">What are you interested in?</h1>
        <p className="text-gray-600 mb-8">Select your favorite categories to personalize your experience</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                if (selected.includes(cat.id)) {
                  setSelected(selected.filter(s => s !== cat.id));
                } else {
                  setSelected([...selected, cat.id]);
                }
              }}
              className={`p-6 rounded-xl border-2 transition-all ${
                selected.includes(cat.id)
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 bg-white hover:border-purple-300'
              }`}
            >
              <cat.icon className={`w-12 h-12 mx-auto mb-3 ${selected.includes(cat.id) ? 'text-purple-600' : 'text-gray-600'}`} />
              <p className={`font-semibold ${selected.includes(cat.id) ? 'text-purple-600' : 'text-gray-900'}`}>{cat.label}</p>
            </button>
          ))}
        </div>
        <button
          onClick={() => navigate('/onboarding/location')}
          disabled={selected.length === 0}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue ({selected.length} selected)
        </button>
      </div>
    </div>
  );
};

export default OnboardingPreferences;
