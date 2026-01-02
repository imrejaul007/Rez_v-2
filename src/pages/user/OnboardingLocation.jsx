import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OnboardingLocation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <MapPin className="w-20 h-20 text-purple-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Enable Location</h1>
          <p className="text-gray-600">
            Find deals and offers near you for the best shopping experience
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Nearby Deals</h3>
                <p className="text-sm text-gray-600">Discover offers from stores around you</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Get accurate delivery estimates</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Local Events</h3>
                <p className="text-sm text-gray-600">Stay updated on local happenings</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2 mb-3">
          <Navigation className="w-5 h-5" />
          Enable Location
        </button>
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full text-gray-600 py-3 rounded-lg font-semibold hover:text-gray-900 transition-all"
        >
          Skip for Now
        </button>
      </div>
    </div>
  );
};

export default OnboardingLocation;
