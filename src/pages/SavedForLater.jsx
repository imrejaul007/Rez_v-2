import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bookmark, ShoppingCart, Trash2 } from 'lucide-react';

function SavedForLater() {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, name: 'Wireless Headphones', price: 2999, image: 'https://via.placeholder.com/100', savedDate: '2026-01-01' },
    { id: 2, name: 'Smart Watch', price: 15999, image: 'https://via.placeholder.com/100', savedDate: '2025-12-28' }
  ]);

  const moveToCart = async (item) => {
    try {
      await fetch('/api/cart/add', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }, body: JSON.stringify({ productId: item.id }) });
      setItems(items.filter(i => i.id !== item.id));
    } catch (err) {}
  };

  const removeItem = async (itemId) => {
    try {
      await fetch(`/api/saved/${itemId}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` } });
      setItems(items.filter(i => i.id !== itemId));
    } catch (err) {}
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center gap-3"><div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center"><Bookmark className="w-6 h-6 text-white" /></div><div><h1 className="text-2xl font-bold text-gray-900">Saved for Later</h1><p className="text-sm text-gray-600">{items.length} items</p></div></div>
        </motion.div>
        {items.length > 0 ? (
          <div className="space-y-4">
            {items.map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl shadow-lg p-4">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1"><h3 className="font-bold text-gray-900">{item.name}</h3><p className="text-purple-600 font-bold text-lg">₹{item.price}</p><p className="text-xs text-gray-500">Saved {item.savedDate}</p></div>
                  <div className="flex flex-col gap-2">
                    <button onClick={() => moveToCart(item)} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg text-sm font-medium hover:shadow-lg"><ShoppingCart className="w-4 h-4" />Move to Cart</button>
                    <button onClick={() => removeItem(item.id)} className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50"><Trash2 className="w-4 h-4" />Remove</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <Bookmark className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No saved items</h3>
            <p className="text-gray-600 mb-6">Save items for later</p>
            <button onClick={() => navigate('/')} className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg">Start Shopping</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SavedForLater;
