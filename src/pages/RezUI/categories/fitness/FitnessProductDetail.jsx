import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Minus, Plus } from 'lucide-react';

function FitnessProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: 'Adjustable Dumbbells Set',
    brand: 'PowerMax',
    price: 3999,
    mrp: 5999,
    rating: 4.7,
    reviews: 850,
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400',
    description: 'Premium quality adjustable dumbbells with weight range from 2kg to 24kg. Perfect for home workouts.',
    features: [
      'Weight Range: 2kg - 24kg',
      'Compact Design',
      'Anti-slip Grip',
      'Durable Material',
      'Space Saving'
    ],
    specs: {
      material: 'Cast Iron with Rubber Coating',
      color: 'Black',
      warranty: '1 Year'
    }
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <h1 className="text-h3 font-poppins text-white flex-1">Product Details</h1>
          <button className="p-2 rounded-full hover:bg-white/20"><Heart className="w-5 h-5 text-white" /></button>
          <button className="p-2 rounded-full hover:bg-white/20"><Share2 className="w-5 h-5 text-white" /></button>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700">
          <img src={product.image} alt={product.name} className="w-full h-72 object-cover" />
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-1">{product.brand}</p>
          <h2 className="text-xl font-bold text-rez-navy dark:text-white mb-2">{product.name}</h2>
          <div className="flex items-center gap-1 mb-3"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{product.rating}</span><span className="text-xs text-rez-gray-600 dark:text-gray-400">({product.reviews} reviews)</span></div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl font-bold text-rez-navy dark:text-white">₹{product.price}</span>
            <span className="text-lg text-rez-gray-400 line-through">₹{product.mrp}</span>
            <span className="px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-bold">{Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF</span>
          </div>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">{product.description}</p>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Key Features</h3>
          <ul className="space-y-2">
            {product.features.map((feature, i) => (
              <li key={i} className="text-sm text-rez-gray-600 dark:text-gray-400">• {feature}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Specifications</h3>
          <div className="space-y-2">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b border-rez-gray-200 dark:border-dark-700 last:border-0">
                <span className="text-sm text-rez-gray-600 dark:text-gray-400 capitalize">{key}</span>
                <span className="text-sm font-bold text-rez-navy dark:text-white">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border-2 border-rez-gray-200 dark:border-dark-700 rounded-lg">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2"><Minus className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" /></button>
            <span className="w-8 text-center font-bold text-rez-navy dark:text-white">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="p-2"><Plus className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" /></button>
          </div>
          <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold flex items-center justify-center gap-2"><ShoppingCart className="w-5 h-5" />Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default FitnessProductDetail;
