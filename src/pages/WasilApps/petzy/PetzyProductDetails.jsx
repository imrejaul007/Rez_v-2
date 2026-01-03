import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';

// Petzy Product Details: Pet Products
// Backend API: GET /api/wasil/petzy/products/:id

const PetzyProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: 'Premium Dog Food - Royal Canin',
    brand: 'Royal Canin',
    price: 2499,
    originalPrice: 2999,
    coins: 250,
    description: 'Complete nutrition for adult dogs',
    weight: '10 kg'
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-80 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center text-9xl">
        🍖
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <Heart className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="bg-white px-4 py-4">
        <p className="text-sm text-gray-500">{product.brand}</p>
        <h1 className="text-xl font-bold text-gray-800 mt-1">{product.name}</h1>
        <div className="flex items-center gap-3 mt-3">
          <p className="text-2xl font-bold text-gray-800">₹{product.price}</p>
          <p className="text-lg text-gray-400 line-through">₹{product.originalPrice}</p>
        </div>
        <p className="text-yellow-600 mt-2">Earn {product.coins}🪙 coins</p>
        <p className="text-gray-700 mt-3">{product.description}</p>
        <p className="text-sm text-gray-500 mt-2">Pack Size: {product.weight}</p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-pink-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PetzyProductDetails;
