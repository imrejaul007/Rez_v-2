import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Trash2, Tag } from 'lucide-react';

function CartSummary() {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, name: 'Wireless Headphones', price: 2999, quantity: 1, image: 'https://via.placeholder.com/80' },
    { id: 2, name: 'Smart Watch', price: 15999, quantity: 1, image: 'https://via.placeholder.com/80' }
  ]);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id, delta) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const applyPromo = () => {
    if (promoCode === 'SAVE10') setDiscount(subtotal * 0.1);
    else alert('Invalid promo code');
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax - discount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center gap-3"><div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center"><ShoppingCart className="w-6 h-6 text-white" /></div><div><h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1><p className="text-sm text-gray-600">{items.length} items</p></div></div>
        </motion.div>
        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, i) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl shadow-lg p-4">
                  <div className="flex gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1"><h3 className="font-bold text-gray-900">{item.name}</h3><p className="text-purple-600 font-bold text-lg">₹{item.price.toLocaleString()}</p></div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1"><button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-gray-200 rounded"><Minus className="w-4 h-4" /></button><span className="w-8 text-center font-medium">{item.quantity}</span><button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-gray-200 rounded"><Plus className="w-4 h-4" /></button></div>
                      <button onClick={() => removeItem(item.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="space-y-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Apply Promo Code</h3>
                <div className="flex gap-2"><input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg" placeholder="Enter code" /><button onClick={applyPromo} className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"><Tag className="w-5 h-5" /></button></div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
                <div className="space-y-2 mb-4"><div className="flex justify-between text-gray-600"><span>Subtotal</span><span>₹{subtotal.toLocaleString()}</span></div><div className="flex justify-between text-gray-600"><span>Tax (18%)</span><span>₹{tax.toFixed(2)}</span></div>{discount > 0 && <div className="flex justify-between text-green-600"><span>Discount</span><span>-₹{discount.toFixed(2)}</span></div>}<div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t"><span>Total</span><span>₹{total.toFixed(2)}</span></div></div>
                <button onClick={() => navigate('/checkout-review')} className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg">Proceed to Checkout</button>
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center"><ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" /><h3 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h3><p className="text-gray-600 mb-6">Add items to get started</p><button onClick={() => navigate('/')} className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg">Start Shopping</button></div>
        )}
      </div>
    </div>
  );
}

export default CartSummary;
