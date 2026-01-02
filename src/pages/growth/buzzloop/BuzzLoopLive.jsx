import React from 'react';
import { Radio, Eye, Heart, MessageCircle, Gift } from 'lucide-react';

// BuzzLoop Live: Live Streaming
// Backend API: POST /api/growth/buzzloop/live/start
// Backend API: GET /api/growth/buzzloop/live/active

const BuzzLoopLive = () => {
  const liveStreams = [
    { id: 1, creator: '@techguru', avatar: '👨‍💻', title: 'Tech Q&A Live!', viewers: 12500 },
    { id: 2, creator: '@foodlover', avatar: '👨‍🍳', title: 'Cooking Show', viewers: 8900 },
    { id: 3, creator: '@fashionista', avatar: '👗', title: 'Fashion Tips', viewers: 6700 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-red-500 to-pink-600 px-4 pt-6 pb-8">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <Radio className="w-6 h-6" />
          Live Now
        </h1>
      </div>

      <div className="px-4 mt-4 space-y-3">
        {liveStreams.map((stream) => (
          <div key={stream.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-48 bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
              <div className="text-6xl">{stream.avatar}</div>
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1 animate-pulse">
                <Radio className="w-3 h-3" />
                LIVE
              </div>
              <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {stream.viewers.toLocaleString()}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800">{stream.title}</h3>
              <p className="text-sm text-gray-600">{stream.creator}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuzzLoopLive;
