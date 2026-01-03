import React, { useState } from 'react';
import { Heart, Trash2 } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function WishlistManager() {
  const [wishlist, setWishlist] = useState([
    { id: 1, name: 'Wireless Earbuds', price: 2999, image: 'bg-blue-200' },
    { id: 2, name: 'Phone Case', price: 499, image: 'bg-red-200' },
    { id: 3, name: 'Screen Protector', price: 199, image: 'bg-yellow-200' },
  ]);

  const removeItem = (id) => setWishlist(wishlist.filter(item => item.id !== id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <Heart className="text-red-500" size={28} fill="currentColor" /> Wishlist
        </h1>
        <p className="text-gray-600 mb-6">{wishlist.length} items saved</p>

        <div className="space-y-3">
          {wishlist.map(item => (
            <div key={item.id} className="bg-white rounded-lg p-4 flex gap-3 shadow">
              <div className={`w-20 h-20 rounded ${item.image}`} />
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-lg font-bold text-red-600 mt-2">Rs. {item.price}</p>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 rounded-lg font-semibold">
          Add All to Cart
        </button>
      </div>
      <BottomNav />
    </div>
  );
}