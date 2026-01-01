import React, { useState } from 'react';
import {
  MapPin, Camera, Image, X, CheckCircle, Star, Users, Gift,
  ChevronRight, Navigation, Clock, Zap, Crown, Share2, Award
} from 'lucide-react';

// LocalEdge Check-in: Location Check-in Flow
// Backend API Required: POST /api/localedge/checkin
// Backend API Required: GET /api/localedge/places/nearby
// Backend API Required: GET /api/localedge/places/:id/details

const LocalEdgeCheckin = () => {
  const [step, setStep] = useState('confirm'); // confirm, photo, success
  const [addPhoto, setAddPhoto] = useState(false);

  const place = {
    id: 1,
    name: "Starbucks Reserve",
    type: "Cafe",
    address: "123 MG Road, Bangalore",
    rating: 4.6,
    reviews: 1234,
    checkins: 5678,
    image: "☕",
    isOpen: true,
    closeTime: "11:00 PM",
    baseReward: 25,
    bonusMultiplier: 2,
    bonusReason: "Double Coins Weekend!",
    currentMayor: {
      name: "Priya M.",
      avatar: "👩",
      checkins: 45
    },
    yourCheckins: 12,
    checksToMayor: 33,
    specialBadge: "Coffee Enthusiast",
    streakBonus: 10
  };

  const successData = {
    coinsEarned: 60,
    breakdown: [
      { label: "Base check-in", coins: 25 },
      { label: "2x Weekend Bonus", coins: 25 },
      { label: "Streak Bonus (Day 14)", coins: 10 }
    ],
    newBadge: null, // or { name: "Coffee Enthusiast", icon: "☕" }
    leaderboardChange: "+2 positions",
    mayorProgress: "12/45 check-ins for Mayor"
  };

  const renderConfirmStep = () => (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-4">
        <div className="flex items-center justify-between">
          <button className="text-white">
            <X className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold text-white">Check In</h1>
          <div className="w-6" />
        </div>
      </div>

      {/* Place Card */}
      <div className="px-4 py-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 text-center">
          <div className="w-24 h-24 bg-white rounded-2xl mx-auto flex items-center justify-center text-6xl shadow-lg mb-4">
            {place.image}
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{place.name}</h2>
          <p className="text-gray-500 mt-1">{place.type}</p>
          <div className="flex items-center justify-center gap-3 mt-2 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              {place.rating}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {place.checkins.toLocaleString()} check-ins
            </span>
          </div>
          <div className="flex items-center justify-center gap-1 mt-2 text-sm text-green-600">
            <Clock className="w-4 h-4" />
            <span>Open until {place.closeTime}</span>
          </div>
        </div>

        {/* Location Confirmation */}
        <div className="mt-6 bg-gray-50 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">Your location</p>
              <p className="font-medium text-gray-800">{place.address}</p>
            </div>
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
        </div>

        {/* Bonus Active */}
        {place.bonusMultiplier > 1 && (
          <div className="mt-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-yellow-800" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-yellow-800">{place.bonusMultiplier}x Bonus Active!</p>
                <p className="text-sm text-yellow-700">{place.bonusReason}</p>
              </div>
            </div>
          </div>
        )}

        {/* Rewards Preview */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-800 mb-3">You'll Earn</h3>
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <span className="text-gray-600">Base check-in</span>
              <span className="font-medium text-gray-800">+{place.baseReward}🪙</span>
            </div>
            {place.bonusMultiplier > 1 && (
              <div className="p-4 flex items-center justify-between border-t border-gray-100 bg-yellow-50">
                <span className="text-yellow-700">{place.bonusMultiplier}x Bonus</span>
                <span className="font-medium text-yellow-700">+{place.baseReward}🪙</span>
              </div>
            )}
            {place.streakBonus > 0 && (
              <div className="p-4 flex items-center justify-between border-t border-gray-100 bg-orange-50">
                <span className="text-orange-700">Streak Bonus (Day 14)</span>
                <span className="font-medium text-orange-700">+{place.streakBonus}🪙</span>
              </div>
            )}
            <div className="p-4 flex items-center justify-between border-t-2 border-gray-200 bg-gray-50">
              <span className="font-semibold text-gray-800">Total</span>
              <span className="text-xl font-bold text-blue-600">
                +{place.baseReward * place.bonusMultiplier + place.streakBonus}🪙
              </span>
            </div>
          </div>
        </div>

        {/* Mayor Status */}
        <div className="mt-6 bg-purple-50 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Crown className="w-6 h-6 text-purple-500" />
              <div>
                <p className="font-medium text-purple-800">Current Mayor</p>
                <p className="text-sm text-purple-600">{place.currentMayor.name} ({place.currentMayor.checkins} check-ins)</p>
              </div>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-xl">
              {place.currentMayor.avatar}
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs text-purple-600 mb-1">
              <span>Your progress: {place.yourCheckins} check-ins</span>
              <span>{place.checksToMayor} more to become Mayor</span>
            </div>
            <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-500 rounded-full"
                style={{ width: `${(place.yourCheckins / place.currentMayor.checkins) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Add Photo Option */}
        <div className="mt-6">
          <button
            onClick={() => setAddPhoto(!addPhoto)}
            className={`w-full p-4 rounded-xl border-2 flex items-center gap-3 ${
              addPhoto ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}
          >
            <Camera className={`w-6 h-6 ${addPhoto ? 'text-blue-600' : 'text-gray-400'}`} />
            <div className="flex-1 text-left">
              <p className={`font-medium ${addPhoto ? 'text-blue-600' : 'text-gray-700'}`}>
                Add a photo
              </p>
              <p className="text-sm text-gray-500">Earn 10 extra coins</p>
            </div>
            {addPhoto && <CheckCircle className="w-6 h-6 text-blue-500" />}
          </button>
        </div>

        {/* Check-in Button */}
        <button
          onClick={() => setStep('success')}
          className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2"
        >
          <CheckCircle className="w-6 h-6" />
          Check In Now
        </button>
      </div>
    </div>
  );

  const renderSuccessStep = () => (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-indigo-700 flex flex-col items-center justify-center p-6">
      {/* Success Animation */}
      <div className="relative">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-6xl shadow-2xl animate-bounce">
          {place.image}
        </div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-white mt-6">Checked In!</h1>
      <p className="text-blue-200 mt-2">{place.name}</p>

      {/* Coins Earned */}
      <div className="bg-white/20 backdrop-blur rounded-2xl p-6 mt-8 w-full max-w-sm">
        <div className="text-center mb-4">
          <p className="text-blue-200">You earned</p>
          <p className="text-5xl font-bold text-white mt-2">+{successData.coinsEarned}🪙</p>
        </div>

        <div className="space-y-2">
          {successData.breakdown.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between text-sm">
              <span className="text-blue-200">{item.label}</span>
              <span className="text-white font-medium">+{item.coins}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Updates */}
      <div className="mt-6 space-y-3 w-full max-w-sm">
        <div className="bg-white/10 rounded-xl p-4 flex items-center gap-3">
          <Crown className="w-6 h-6 text-yellow-400" />
          <span className="text-white text-sm">{successData.mayorProgress}</span>
        </div>
        <div className="bg-white/10 rounded-xl p-4 flex items-center gap-3">
          <Award className="w-6 h-6 text-green-400" />
          <span className="text-white text-sm">Leaderboard: {successData.leaderboardChange}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-3 w-full max-w-sm">
        <button className="flex-1 bg-white/20 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2">
          <Share2 className="w-5 h-5" />
          Share
        </button>
        <button className="flex-1 bg-white text-blue-600 py-3 rounded-xl font-medium">
          Done
        </button>
      </div>
    </div>
  );

  return step === 'confirm' ? renderConfirmStep() : renderSuccessStep();
};

export default LocalEdgeCheckin;
