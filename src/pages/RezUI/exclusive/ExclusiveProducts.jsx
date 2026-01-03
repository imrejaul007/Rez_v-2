import { useState } from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const ExclusiveProducts = () => {
  const [products] = useState([
    { id: 1, name: 'Premium Headphones', price: 4999, originalPrice: 7999, image: '🎧', rating: 4.8, exclusive: true },
    { id: 2, name: 'Luxury Watch', price: 8999, originalPrice: 12999, image: '⌚', rating: 4.9, exclusive: true },
    { id: 3, name: 'Designer Sunglasses', price: 2999, originalPrice: 4999, image: '😎', rating: 4.7, exclusive: true }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Exclusive Products</h1>
        <p className="text-gray-600 dark:text-gray-400">Limited edition items</p>
      </div>

      <div className="px-4 py-6 space-y-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-4">
            <div className="flex gap-4 mb-3">
              <div className="text-5xl">{product.image}</div>
              <div className="flex-1">
                <p className="font-bold text-rez-navy dark:text-white">{product.name}</p>
                <div className="flex items-center gap-2 my-2">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-bold text-rez-navy dark:text-white">{product.rating}</span>
                </div>
              </div>
              <button className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20">
                <Heart className="w-5 h-5 text-red-500" />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">₹{product.price}</span>
              <span className="text-sm line-through text-gray-500 dark:text-gray-400">₹{product.originalPrice}</span>
            </div>

            <button className="w-full py-2 rounded-lg bg-purple-600 text-white font-bold hover:bg-purple-700 flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default ExclusiveProducts;
