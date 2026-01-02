import React, { useState } from 'react';
import {
  MapPin, Navigation, Layers, Filter, Crosshair,
  Coins, Clock, Zap, Target, ChevronDown, Maximize
} from 'lucide-react';

// CoinHunt Map: Interactive Coin Location Map
// Backend API: GET /api/growth/coinhunt/map/coins
// Backend API: GET /api/growth/coinhunt/map/user-location
// Backend API: POST /api/growth/coinhunt/map/navigate

const CoinHuntMap = () => {
  const [mapView, setMapView] = useState('standard');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCoinType, setSelectedCoinType] = useState('all');

  const mapCoins = [
    { id: 1, type: 'gold', lat: 12.9716, lng: 77.5946, value: 100, expires: '25 min' },
    { id: 2, type: 'silver', lat: 12.9720, lng: 77.5950, value: 50, expires: '40 min' },
    { id: 3, type: 'bronze', lat: 12.9710, lng: 77.5940, value: 25, expires: '55 min' },
    { id: 4, type: 'rare', lat: 12.9725, lng: 77.5955, value: 500, expires: '10 min' },
    { id: 5, type: 'gold', lat: 12.9730, lng: 77.5960, value: 100, expires: '30 min' }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Coins', icon: '🪙' },
    { value: 'gold', label: 'Gold Only', icon: '🥇' },
    { value: 'silver', label: 'Silver Only', icon: '🥈' },
    { value: 'rare', label: 'Rare Only', icon: '💎' }
  ];

  const nearbyHotspots = [
    { name: 'Phoenix Mall', coinCount: 8, distance: '0.2 km' },
    { name: 'Central Park', coinCount: 5, distance: '0.5 km' },
    { name: 'MG Road', coinCount: 12, distance: '0.8 km' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-white/95 backdrop-blur-sm shadow-sm px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-indigo-600" />
            <h1 className="text-lg font-bold text-gray-800">Coin Map</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 bg-gray-100 rounded-lg"
            >
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 bg-gray-100 rounded-lg">
              <Layers className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mt-3 bg-white rounded-xl p-3 border border-gray-200">
            <p className="text-xs font-medium text-gray-600 mb-2">Filter by Coin Type</p>
            <div className="grid grid-cols-2 gap-2">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedCoinType(option.value)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
                    selectedCoinType === option.value
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  <span>{option.icon}</span>
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Map Area (Placeholder) */}
      <div className="h-screen bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 relative">
        {/* Map Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-indigo-600 mx-auto mb-2 animate-bounce" />
            <p className="text-gray-600 font-medium">Interactive Map View</p>
            <p className="text-sm text-gray-500">Showing {mapCoins.length} nearby coins</p>
          </div>
        </div>

        {/* Coin Markers Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {mapCoins.map((coin) => (
            <div
              key={coin.id}
              className="absolute pointer-events-auto"
              style={{
                top: `${Math.random() * 70 + 10}%`,
                left: `${Math.random() * 70 + 10}%`
              }}
            >
              <div className="relative animate-pulse">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-xl shadow-lg border-2 border-white">
                  {coin.type === 'gold' ? '🥇' : coin.type === 'silver' ? '🥈' : coin.type === 'rare' ? '💎' : '🥉'}
                </div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black/75 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  +{coin.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* User Location Indicator */}
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none">
          <div className="relative">
            <div className="w-8 h-8 bg-indigo-600 rounded-full border-4 border-white shadow-lg animate-ping absolute" />
            <div className="w-8 h-8 bg-indigo-600 rounded-full border-4 border-white shadow-lg relative" />
          </div>
        </div>
      </div>

      {/* Bottom Sheet - Nearby Coins */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl">
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mt-3 mb-4" />

        <div className="px-4 pb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-800 text-lg">Nearby Coins ({mapCoins.length})</h2>
            <button className="text-indigo-600 text-sm font-medium">Sort by Distance</button>
          </div>

          <div className="space-y-2 max-h-48 overflow-y-auto">
            {mapCoins.map((coin) => (
              <div key={coin.id} className="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-xl">
                  {coin.type === 'gold' ? '🥇' : coin.type === 'silver' ? '🥈' : coin.type === 'rare' ? '💎' : '🥉'}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800 capitalize">{coin.type} Coin</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {(Math.random() * 500 + 50).toFixed(0)}m
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {coin.expires}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-yellow-600">+{coin.value}</p>
                  <button className="mt-1 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                    Navigate
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Hotspots */}
          <div className="mt-4">
            <h3 className="font-bold text-gray-800 text-sm mb-2">Coin Hotspots</h3>
            <div className="grid grid-cols-3 gap-2">
              {nearbyHotspots.map((hotspot, idx) => (
                <div key={idx} className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-2 text-center">
                  <p className="text-xs font-bold text-gray-800">{hotspot.name}</p>
                  <p className="text-lg font-bold text-indigo-600">{hotspot.coinCount}</p>
                  <p className="text-xs text-gray-500">{hotspot.distance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute right-4 top-24 space-y-2 z-20">
        <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <Navigation className="w-6 h-6 text-indigo-600" />
        </button>
        <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <Crosshair className="w-6 h-6 text-gray-600" />
        </button>
        <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <Maximize className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default CoinHuntMap;
