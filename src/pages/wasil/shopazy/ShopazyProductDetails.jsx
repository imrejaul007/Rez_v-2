import React, { useState } from 'react';
import { ArrowLeft, Star, Heart, Share2, ShoppingCart, Check, ChevronRight } from 'lucide-react';

// Shopazy Product Details: View Product & Add to Cart
// Backend API: GET /api/wasil/shopazy/products/:id
// Backend API: POST /api/wasil/shopazy/cart/add

const ShopazyProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('256gb');

  const product = {
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 134900,
    originalPrice: 144900,
    rating: 4.8,
    reviews: 2340,
    discount: '7%',
    coins: 1349,
    inStock: true,
    description: 'Forged in titanium with A17 Pro chip, Action button, and powerful camera system.',
    specs: ['6.7" Super Retina XDR', 'A17 Pro chip', '48MP camera', '5G enabled'],
    variants: [
      { id: '256gb', name: '256GB', price: 134900 },
      { id: '512gb', name: '512GB', price: 154900 },
      { id: '1tb', name: '1TB', price: 184900 }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-80 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-9xl">
        📱
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
            <Heart className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
            <Share2 className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="bg-white px-4 py-4">
        <p className="text-sm text-gray-500">{product.brand}</p>
        <h1 className="text-xl font-bold text-gray-800 mt-1">{product.name}</h1>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1 bg-green-600 text-white text-sm font-bold px-2 py-1 rounded">
            <Star className="w-4 h-4" /> {product.rating}
          </div>
          <span className="text-sm text-gray-500">{product.reviews.toLocaleString()} reviews</span>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <p className="text-3xl font-bold text-gray-800">₹{product.price.toLocaleString()}</p>
          <p className="text-lg text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</p>
          <span className="bg-green-100 text-green-700 text-sm font-bold px-2 py-1 rounded">{product.discount} OFF</span>
        </div>
        <p className="text-yellow-600 mt-2">Earn {product.coins}🪙 coins on this purchase</p>
      </div>

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Select Storage</h2>
        <div className="flex gap-2">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant.id)}
              className={`flex-1 px-4 py-3 rounded-lg border ${
                selectedVariant === variant.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
              }`}
            >
              <p className="font-medium text-gray-800">{variant.name}</p>
              <p className="text-xs text-gray-500">₹{variant.price.toLocaleString()}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">Description</h2>
        <p className="text-gray-700">{product.description}</p>
        <ul className="mt-3 space-y-2">
          {product.specs.map((spec, idx) => (
            <li key={idx} className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-green-600" />
              {spec}
            </li>
          ))}
        </ul>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2">-</button>
            <span className="px-4">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2">+</button>
          </div>
          <button className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopazyProductDetails;
