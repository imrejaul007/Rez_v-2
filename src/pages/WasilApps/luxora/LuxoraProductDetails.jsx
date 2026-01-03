import React from 'react';
import { ArrowLeft, ShoppingCart, Heart, Star, Shield } from 'lucide-react';

// Luxora Product Details
// Backend API: GET /api/wasil/luxora/products/:id

const LuxoraProductDetails = () => {
  const product = {
    name: 'Gucci Marmont Handbag',
    brand: 'Gucci',
    price: 189900,
    rating: 4.9,
    reviews: 234,
    coins: 18990,
    description: 'Iconic GG Marmont small matelassé shoulder bag',
    authentic: true,
    warranty: '1 year international warranty'
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-80 bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center text-9xl">
        👜
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <Heart className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="bg-white px-4 py-4">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-5 h-5 text-green-600" />
          <span className="text-sm text-green-600 font-medium">100% Authentic</span>
        </div>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <h1 className="text-xl font-bold text-gray-800 mt-1">{product.name}</h1>
        <div className="flex items-center gap-2 mt-2">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="font-medium">{product.rating}</span>
          <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
        </div>
        <p className="text-3xl font-bold text-gray-800 mt-4">₹{product.price.toLocaleString()}</p>
        <p className="text-yellow-600 mt-2">Earn {product.coins.toLocaleString()}🪙 coins</p>
        <p className="text-gray-700 mt-3">{product.description}</p>
        <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-sm text-blue-800">{product.warranty}</p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-amber-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default LuxoraProductDetails;
