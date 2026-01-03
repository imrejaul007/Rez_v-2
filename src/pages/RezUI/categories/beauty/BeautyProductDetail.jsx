import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, Heart, Share2, ShoppingCart } from 'lucide-react';

function BeautyProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: 'Vitamin C Brightening Serum',
    brand: 'GlowLab',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400',
    price: 1299,
    rezPrice: 999,
    rating: 4.8,
    reviews: 567,
    cashback: 15,
    coins: 120,
    description: 'Advanced formula with 15% Vitamin C for brighter, more even-toned skin',
    keyIngredients: ['Vitamin C 15%', 'Hyaluronic Acid', 'Vitamin E', 'Ferulic Acid'],
    howToUse: 'Apply 2-3 drops to cleansed face morning and evening',
    benefits: ['Brightens skin tone', 'Reduces dark spots', 'Boosts collagen', 'Anti-aging']
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700">
              <Share2 className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <button className="p-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700">
              <Heart className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="bg-white dark:bg-dark-800">
        <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Title & Brand */}
        <div>
          <p className="text-sm text-pink-600 dark:text-pink-400 font-semibold mb-1">{product.brand}</p>
          <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">{product.name}</h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-sm font-bold">{product.rating}</span>
            </div>
            <span className="text-sm text-rez-gray-600 dark:text-gray-400">({product.reviews} reviews)</span>
          </div>
        </div>

        {/* Price */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-3xl font-bold text-rez-navy dark:text-white">₹{product.rezPrice}</p>
              <p className="text-sm text-rez-gray-500 dark:text-gray-400 line-through">₹{product.price}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{product.cashback}% Cashback</p>
              <p className="text-sm font-semibold text-amber-600 dark:text-amber-400">+{product.coins} Coins</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-bold text-rez-navy dark:text-white mb-2">Description</h3>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300">{product.description}</p>
        </div>

        {/* Key Ingredients */}
        <div>
          <h3 className="font-bold text-rez-navy dark:text-white mb-2">Key Ingredients</h3>
          <div className="flex gap-2 flex-wrap">
            {product.keyIngredients.map((ing, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-pink-500/20 text-sm font-medium text-pink-600 dark:text-pink-400">{ing}</span>
            ))}
          </div>
        </div>

        {/* How to Use */}
        <div>
          <h3 className="font-bold text-rez-navy dark:text-white mb-2">How to Use</h3>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300">{product.howToUse}</p>
        </div>

        {/* Benefits */}
        <div>
          <h3 className="font-bold text-rez-navy dark:text-white mb-2">Benefits</h3>
          <ul className="space-y-1">
            {product.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-rez-gray-700 dark:text-gray-300">
                <span className="text-emerald-500">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700 p-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center border-2 border-rez-gray-300 dark:border-dark-600 rounded-xl">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 font-bold">-</button>
            <span className="px-4 py-2 font-bold">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 font-bold">+</button>
          </div>
          <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold flex items-center justify-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default BeautyProductDetail;
