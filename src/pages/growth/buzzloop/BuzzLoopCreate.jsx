import React, { useState } from 'react';
import {
  Camera, Video, Music, Sparkles, Filter, Scissors,
  RotateCw, Smile, Type, Upload, X, Check, Clock
} from 'lucide-react';

// BuzzLoop Create: Video Creation & Editing
// Backend API: POST /api/growth/buzzloop/upload
// Backend API: GET /api/growth/buzzloop/music/trending
// Backend API: POST /api/growth/buzzloop/publish

const BuzzLoopCreate = () => {
  const [activeTab, setActiveTab] = useState('camera');
  const [recordingTime, setRecordingTime] = useState(0);

  const filters = [
    { id: 1, name: 'Normal', icon: '📷' },
    { id: 2, name: 'Vintage', icon: '📸' },
    { id: 3, name: 'Beauty', icon: '✨' },
    { id: 4, name: 'Noir', icon: '🎬' },
    { id: 5, name: 'Vivid', icon: '🌈' }
  ];

  const effects = [
    { id: 1, name: 'Zoom', icon: '🔍' },
    { id: 2, name: 'Blur', icon: '💫' },
    { id: 3, name: 'Glitch', icon: '⚡' },
    { id: 4, name: 'Slow Mo', icon: '🎥' }
  ];

  const trendingSounds = [
    { id: 1, name: 'Trending Beat 1', artist: 'Popular', uses: '1.2M', duration: '0:15' },
    { id: 2, name: 'Viral Sound', artist: 'Top Charts', uses: '890K', duration: '0:30' },
    { id: 3, name: 'Dance Mix', artist: 'DJ Mix', uses: '650K', duration: '0:20' }
  ];

  return (
    <div className="h-screen bg-black relative">
      {/* Camera View */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <Camera className="w-32 h-32 text-white/20" />
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/60 to-transparent p-4">
        <div className="flex items-center justify-between">
          <button>
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="flex gap-3">
            <button className="bg-white/20 backdrop-blur rounded-full px-4 py-2 text-white text-sm font-medium">
              60s
            </button>
            <button className="bg-white/20 backdrop-blur rounded-full px-4 py-2 text-white text-sm font-medium">
              Templates
            </button>
          </div>
          <button>
            <Sparkles className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Right Side Tools */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 space-y-6">
        <button className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <Filter className="w-6 h-6 text-white" />
          </div>
          <span className="text-white text-xs">Filters</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-white text-xs">Effects</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <RotateCw className="w-6 h-6 text-white" />
          </div>
          <span className="text-white text-xs">Flip</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <span className="text-white text-xs">Timer</span>
        </button>
      </div>

      {/* Bottom Filters Carousel */}
      <div className="absolute bottom-32 left-0 right-0 z-10 px-4">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter) => (
            <button key={filter.id} className="flex-shrink-0 flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-2xl">
                {filter.icon}
              </div>
              <span className="text-white text-xs">{filter.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-6 pb-8">
        <div className="flex items-center justify-between">
          {/* Upload */}
          <button className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
              <Upload className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xs">Upload</span>
          </button>

          {/* Record Button */}
          <button className="relative">
            <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center shadow-2xl">
              <div className="w-16 h-16 rounded-full border-4 border-white" />
            </div>
            {recordingTime > 0 && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                {recordingTime}s
              </div>
            )}
          </button>

          {/* Music */}
          <button className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xs">Sounds</span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-red-500 rounded-full" style={{ width: '0%' }} />
        </div>
      </div>

      {/* Music Selection Panel (Hidden by default) */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/95 backdrop-blur rounded-t-3xl p-4 transform translate-y-full transition-transform">
        <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-4" />
        <h2 className="text-white font-bold text-lg mb-4">Add Sound</h2>

        <div className="space-y-3 max-h-80 overflow-y-auto">
          {trendingSounds.map((sound) => (
            <div key={sound.id} className="bg-white/10 rounded-xl p-3 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-medium">{sound.name}</h3>
                <p className="text-gray-400 text-xs">{sound.artist} • {sound.uses} uses</p>
              </div>
              <div className="text-right">
                <span className="text-gray-400 text-xs">{sound.duration}</span>
                <button className="mt-1 bg-white text-black text-xs px-3 py-1 rounded-full font-medium">
                  Use
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuzzLoopCreate;
