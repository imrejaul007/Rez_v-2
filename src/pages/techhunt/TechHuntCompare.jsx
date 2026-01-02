import React, { useState } from 'react';
import {
  Plus, X, Check, Star, ArrowRight, Zap, Battery, Cpu,
  Camera, Monitor, HardDrive, Wifi, ChevronDown, Share2,
  ThumbsUp, ThumbsDown, Award
} from 'lucide-react';

// TechHunt Compare: Product Comparison Tool
// Backend API: GET /api/techhunt/products/:id/specs
// Backend API: POST /api/techhunt/compare
// Backend API: GET /api/techhunt/compare/suggestions

const TechHuntCompare = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      brand: "Apple",
      image: "📱",
      price: 159900,
      rating: 4.9,
      reviews: 4560,
      coins: 500,
      winner: false
    },
    {
      id: 2,
      name: "Samsung S24 Ultra",
      brand: "Samsung",
      image: "📱",
      price: 134999,
      rating: 4.8,
      reviews: 3890,
      coins: 420,
      winner: true
    }
  ]);

  const specs = {
    display: {
      label: "Display",
      icon: Monitor,
      values: [
        { id: 1, value: '6.7" Super Retina XDR', winner: false },
        { id: 2, value: '6.8" Dynamic AMOLED 2X', winner: true }
      ]
    },
    processor: {
      label: "Processor",
      icon: Cpu,
      values: [
        { id: 1, value: "A17 Pro Chip", winner: true },
        { id: 2, value: "Snapdragon 8 Gen 3", winner: false }
      ]
    },
    camera: {
      label: "Camera",
      icon: Camera,
      values: [
        { id: 1, value: "48MP Main", winner: false },
        { id: 2, value: "200MP Main", winner: true }
      ]
    },
    battery: {
      label: "Battery",
      icon: Battery,
      values: [
        { id: 1, value: "4422 mAh", winner: false },
        { id: 2, value: "5000 mAh", winner: true }
      ]
    },
    storage: {
      label: "Storage",
      icon: HardDrive,
      values: [
        { id: 1, value: "256GB - 1TB", winner: false },
        { id: 2, value: "256GB - 1TB", winner: false }
      ]
    },
    connectivity: {
      label: "5G",
      icon: Wifi,
      values: [
        { id: 1, value: "Yes", winner: false },
        { id: 2, value: "Yes", winner: false }
      ]
    }
  };

  const pros = {
    1: ["Best-in-class performance", "Excellent video quality", "Long software support", "Premium build"],
    2: ["Stunning display", "S-Pen included", "200MP camera", "Better battery life"]
  };

  const cons = {
    1: ["Higher price", "No charger included", "Smaller battery"],
    2: ["Slower updates", "Heavier", "Camera oversaturation"]
  };

  const suggestedProducts = [
    { id: 3, name: "Pixel 8 Pro", brand: "Google", image: "📱", price: 106999 },
    { id: 4, name: "OnePlus 12", brand: "OnePlus", image: "📱", price: 69999 }
  ];

  const verdict = {
    winner: 2,
    reason: "Samsung S24 Ultra offers better value with a larger display, 200MP camera, and superior battery life, while being ₹24,901 cheaper.",
    score: { 1: 8.5, 2: 9.0 }
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-white">Compare</h1>
          <button className="bg-white/20 p-2 rounded-lg">
            <Share2 className="w-5 h-5 text-white" />
          </button>
        </div>
        <p className="text-indigo-200 text-sm">Side-by-side product comparison</p>
      </div>

      {/* Product Cards */}
      <div className="px-4 -mt-2">
        <div className="flex gap-3">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`flex-1 bg-white rounded-xl p-4 shadow-sm relative ${
                verdict.winner === product.id ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {verdict.winner === product.id && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  WINNER
                </div>
              )}
              <button className="absolute top-2 right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                <X className="w-4 h-4 text-gray-400" />
              </button>
              <div className="h-20 flex items-center justify-center text-5xl">
                {product.image}
              </div>
              <div className="text-center mt-2">
                <p className="text-xs text-gray-500">{product.brand}</p>
                <h3 className="font-medium text-gray-800 text-sm">{product.name}</h3>
                <p className="text-lg font-bold text-gray-800 mt-1">
                  ₹{product.price.toLocaleString()}
                </p>
                <div className="flex items-center justify-center gap-1 mt-1 text-xs">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-gray-600">{product.rating}</span>
                  <span className="text-gray-400">({product.reviews})</span>
                </div>
                <span className="text-yellow-600 text-xs font-medium">+{product.coins}🪙</span>
              </div>
            </div>
          ))}

          {/* Add Product Slot */}
          {products.length < 3 && (
            <button className="flex-1 bg-white/50 border-2 border-dashed border-gray-300 rounded-xl p-4 flex flex-col items-center justify-center min-h-[200px]">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <Plus className="w-6 h-6 text-gray-400" />
              </div>
              <span className="text-sm text-gray-500 mt-2">Add Product</span>
            </button>
          )}
        </div>
      </div>

      {/* Overall Score */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-3">Overall Score</h2>
          <div className="flex gap-4">
            {products.map((product) => (
              <div key={product.id} className="flex-1 text-center">
                <div className={`text-3xl font-bold ${
                  verdict.winner === product.id ? 'text-green-600' : 'text-gray-700'
                }`}>
                  {verdict.score[product.id]}
                </div>
                <p className="text-sm text-gray-500">{product.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specs Comparison */}
      <div className="px-4 mt-6">
        <h2 className="font-semibold text-gray-800 mb-3">Specifications</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {Object.entries(specs).map(([key, spec], idx) => (
            <div
              key={key}
              className={`${idx !== Object.keys(specs).length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50">
                <spec.icon className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">{spec.label}</span>
              </div>
              <div className="flex">
                {spec.values.map((val, vidx) => (
                  <div
                    key={val.id}
                    className={`flex-1 p-4 text-center ${
                      vidx !== spec.values.length - 1 ? 'border-r border-gray-100' : ''
                    }`}
                  >
                    <span className={`text-sm ${val.winner ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
                      {val.value}
                    </span>
                    {val.winner && (
                      <Check className="w-4 h-4 text-green-500 mx-auto mt-1" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pros & Cons */}
      <div className="px-4 mt-6">
        <h2 className="font-semibold text-gray-800 mb-3">Pros & Cons</h2>
        <div className="flex gap-3">
          {products.map((product) => (
            <div key={product.id} className="flex-1 bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-medium text-gray-800 text-sm mb-3">{product.name}</h3>

              {/* Pros */}
              <div className="mb-3">
                <div className="flex items-center gap-1 text-green-600 text-xs font-medium mb-2">
                  <ThumbsUp className="w-3 h-3" />
                  Pros
                </div>
                <ul className="space-y-1">
                  {pros[product.id].map((pro, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                      <Check className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div>
                <div className="flex items-center gap-1 text-red-600 text-xs font-medium mb-2">
                  <ThumbsDown className="w-3 h-3" />
                  Cons
                </div>
                <ul className="space-y-1">
                  {cons[product.id].map((con, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                      <X className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Verdict */}
      <div className="px-4 mt-6">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-yellow-300" />
            <h3 className="text-white font-semibold">AI Verdict</h3>
          </div>
          <p className="text-indigo-100 text-sm leading-relaxed">
            {verdict.reason}
          </p>
        </div>
      </div>

      {/* Suggested Comparisons */}
      <div className="px-4 mt-6 mb-4">
        <h2 className="font-semibold text-gray-800 mb-3">Also Compare With</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {suggestedProducts.map((product) => (
            <button
              key={product.id}
              className="flex-shrink-0 bg-white rounded-xl p-3 shadow-sm flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                {product.image}
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500">{product.brand}</p>
                <p className="font-medium text-gray-800 text-sm">{product.name}</p>
                <p className="text-sm text-gray-600">₹{product.price.toLocaleString()}</p>
              </div>
              <Plus className="w-5 h-5 text-indigo-500" />
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 mt-4 mb-4">
        <div className="flex gap-3">
          <button className="flex-1 bg-gray-800 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2">
            View Full Comparison
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechHuntCompare;
