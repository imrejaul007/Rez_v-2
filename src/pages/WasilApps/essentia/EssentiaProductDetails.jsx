import React from 'react';
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';

// Essentia+ Product Details
// Backend API: GET /api/wasil/essentia/products/:id

const EssentiaProductDetails = () => {
  const product = {
    name: 'Organic Quinoa - Premium Grade',
    brand: 'Essentia Farms',
    price: 449,
    originalPrice: 549,
    rating: 4.8,
    reviews: 1234,
    coins: 45,
    description: 'Certified organic quinoa, rich in protein and fiber',
    weight: '500g'
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-80 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-9xl">
        🥗
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white px-4 py-4">
        <p className="text-sm text-gray-500">{product.brand}</p>
        <h1 className="text-xl font-bold text-gray-800 mt-1">{product.name}</h1>
        <div className="flex items-center gap-2 mt-2">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="font-medium">{product.rating}</span>
          <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <p className="text-2xl font-bold text-gray-800">₹{product.price}</p>
          <p className="text-lg text-gray-400 line-through">₹{product.originalPrice}</p>
        </div>
        <p className="text-yellow-600 mt-2">Earn {product.coins}🪙 coins</p>
        <p className="text-gray-700 mt-3">{product.description}</p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-emerald-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default EssentiaProductDetails;
