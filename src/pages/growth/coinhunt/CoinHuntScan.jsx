import React, { useState } from 'react';
import {
  Camera, Zap, Target, Crosshair, Sparkles, X,
  Coins, TrendingUp, Award, Volume2, VolumeX
} from 'lucide-react';

// CoinHunt Scan: AR Coin Scanner & Collector
// Backend API: POST /api/growth/coinhunt/scan/start
// Backend API: POST /api/growth/coinhunt/scan/collect
// Backend API: GET /api/growth/coinhunt/scan/nearby

const CoinHuntScan = () => {
  const [isScanning, setIsScanning] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [detectedCoin, setDetectedCoin] = useState({
    type: 'gold',
    value: 100,
    distance: 15
  });

  const scanStats = {
    scannedToday: 12,
    totalCollected: 1250,
    accuracy: 95
  };

  const powerUps = [
    { id: 1, name: 'Radar Boost', icon: '📡', active: true, duration: '5 min' },
    { id: 2, name: '2x Multiplier', icon: '⚡', active: false, duration: 'Not Active' },
    { id: 3, name: 'Magnet', icon: '🧲', active: false, duration: 'Not Active' }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Camera View Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        {/* AR Grid Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-4 grid-rows-8 h-full w-full">
            {[...Array(32)].map((_, i) => (
              <div key={i} className="border border-cyan-500/30" />
            ))}
          </div>
        </div>

        {/* Scanning Animation */}
        {isScanning && (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-4 border-cyan-500 rounded-full animate-ping opacity-20" />
              <div className="absolute w-48 h-48 border-4 border-cyan-400 rounded-full animate-pulse" />
              <div className="absolute w-32 h-32 border-4 border-cyan-300 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
            </div>

            {/* Scanning Line */}
            <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
          </>
        )}

        {/* Detected Coin */}
        {detectedCoin && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative animate-bounce">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-yellow-500 rounded-full blur-3xl opacity-50 animate-pulse" />

              {/* Coin */}
              <div className="relative w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-6xl shadow-2xl border-4 border-yellow-300">
                {detectedCoin.type === 'gold' ? '🥇' : detectedCoin.type === 'rare' ? '💎' : '🪙'}
              </div>

              {/* Value Badge */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-yellow-400 font-bold px-4 py-2 rounded-full border-2 border-yellow-400">
                +{detectedCoin.value} 🪙
              </div>

              {/* Distance Indicator */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-cyan-500/80 text-white text-sm px-3 py-1 rounded-full">
                {detectedCoin.distance}m away
              </div>

              {/* Sparkles */}
              <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400 animate-pulse" />
              <Sparkles className="absolute -bottom-4 -left-4 w-8 h-8 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        )}
      </div>

      {/* Top HUD */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between">
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur rounded-full px-4 py-2 flex items-center gap-2">
              <Coins className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-bold">+{scanStats.totalCollected}</span>
            </div>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur"
            >
              {soundEnabled ? (
                <Volume2 className="w-5 h-5 text-white" />
              ) : (
                <VolumeX className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-3 flex items-center gap-3">
          <div className="flex-1 bg-white/10 backdrop-blur rounded-lg px-3 py-2 flex items-center gap-2">
            <Target className="w-4 h-4 text-cyan-400" />
            <span className="text-white text-sm">Scanned: {scanStats.scannedToday}</span>
          </div>
          <div className="flex-1 bg-white/10 backdrop-blur rounded-lg px-3 py-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-white text-sm">Accuracy: {scanStats.accuracy}%</span>
          </div>
        </div>
      </div>

      {/* Crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5 pointer-events-none">
        <Crosshair className="w-12 h-12 text-cyan-400 animate-pulse" />
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4 pb-8">
        {/* Power-ups */}
        <div className="mb-4">
          <p className="text-cyan-400 text-xs font-bold mb-2">ACTIVE POWER-UPS</p>
          <div className="flex gap-2">
            {powerUps.map((powerUp) => (
              <div
                key={powerUp.id}
                className={`flex-1 rounded-lg p-2 text-center ${
                  powerUp.active
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600'
                    : 'bg-white/10 backdrop-blur'
                }`}
              >
                <div className="text-2xl mb-1">{powerUp.icon}</div>
                <p className="text-white text-xs font-medium">{powerUp.name}</p>
                <p className={`text-xs ${powerUp.active ? 'text-yellow-300' : 'text-gray-400'}`}>
                  {powerUp.duration}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Collect Button */}
        <button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 py-4 rounded-2xl font-bold text-xl text-white shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
          <Zap className="w-6 h-6" />
          TAP TO COLLECT
          <Zap className="w-6 h-6" />
        </button>

        {/* Helper Text */}
        <p className="text-center text-cyan-400 text-sm mt-3 animate-pulse">
          Move closer to collect the coin
        </p>
      </div>

      {/* Corner Indicators */}
      <div className="absolute top-20 left-4 w-8 h-8 border-l-4 border-t-4 border-cyan-400" />
      <div className="absolute top-20 right-4 w-8 h-8 border-r-4 border-t-4 border-cyan-400" />
      <div className="absolute bottom-40 left-4 w-8 h-8 border-l-4 border-b-4 border-cyan-400" />
      <div className="absolute bottom-40 right-4 w-8 h-8 border-r-4 border-b-4 border-cyan-400" />
    </div>
  );
};

export default CoinHuntScan;
