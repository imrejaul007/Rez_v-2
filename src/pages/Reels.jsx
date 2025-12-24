import React from 'react';
import { ArrowLeft, Heart, Share2, ShoppingCart, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Reels() {
  const navigate = useNavigate();

  const reels = [
    {
      id: 1,
      video: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      product: 'Premium Watch',
      price: 4999,
      likes: 1200,
      creator: 'Sarah'
    }
  ];

  return (
    <div className="h-screen bg-black overflow-hidden">
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-black/50 backdrop-blur-sm">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-white font-bold">ReZ Reels</h1>
        <div className="w-9" />
      </div>

      <div className="h-full flex items-center justify-center bg-rez-gray-900">
        <div className="text-center text-white">
          <p className="text-lg mb-2">Shopping Reels</p>
          <p className="text-sm opacity-75">Discover products through videos</p>
        </div>
      </div>

      <div className="absolute bottom-20 right-4 flex flex-col gap-4">
        <button className="p-3 rounded-full bg-black/50 backdrop-blur-sm">
          <Heart className="w-6 h-6 text-white" />
        </button>
        <button className="p-3 rounded-full bg-black/50 backdrop-blur-sm">
          <Share2 className="w-6 h-6 text-white" />
        </button>
        <button className="p-3 rounded-full bg-black/50 backdrop-blur-sm">
          <Bookmark className="w-6 h-6 text-white" />
        </button>
        <button className="p-3 rounded-full bg-emerald-500">
          <ShoppingCart className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}

export default Reels;
