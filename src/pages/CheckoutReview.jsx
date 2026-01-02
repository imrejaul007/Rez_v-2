import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, MapPin, CreditCard, Package, Edit } from 'lucide-react';

function CheckoutReview() {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const order = { items: [{ name: 'Wireless Headphones', qty: 1, price: 2999 }, { name: 'Smart Watch', qty: 1, price: 15999 }], address: { name: 'John Doe', phone: '+91 98765 43210', line: '123 Main St, Apt 4B, City - 123456' }, payment: { method: 'UPI', details: 'user@upi' }, subtotal: 18998, tax: 3419.64, discount: 500, delivery: 0, total: 21917.64 };

  const handlePlaceOrder = async () => {
    if (!agreed) { alert('Please agree to terms'); return; }
    try {
      await fetch('/api/orders/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('authToken')}` },
        body: JSON.stringify(order)
      });
      navigate('/payment-options');
    } catch (err) { alert('Order placement failed'); }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center gap-3"><div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center"><CheckCircle className="w-6 h-6 text-white" /></div><div><h1 className="text-2xl font-bold text-gray-900">Review Order</h1><p className="text-sm text-gray-600">Verify details before placing order</p></div></div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4"><div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-purple-600" /><h3 className="font-bold text-gray-900">Delivery Address</h3></div><button className="text-purple-600 hover:underline text-sm"><Edit className="w-4 h-4" /></button></div>
              <div><p className="font-medium text-gray-900">{order.address.name}</p><p className="text-gray-600">{order.address.phone}</p><p className="text-gray-600">{order.address.line}</p></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4"><div className="flex items-center gap-2"><CreditCard className="w-5 h-5 text-purple-600" /><h3 className="font-bold text-gray-900">Payment Method</h3></div><button className="text-purple-600 hover:underline text-sm"><Edit className="w-4 h-4" /></button></div>
              <div><p className="font-medium text-gray-900">{order.payment.method}</p><p className="text-gray-600">{order.payment.details}</p></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4"><Package className="w-5 h-5 text-purple-600" /><h3 className="font-bold text-gray-900">Order Items</h3></div>
              <div className="space-y-3">{order.items.map((item, i) => (<div key={i} className="flex justify-between py-2 border-b last:border-0"><div><p className="font-medium text-gray-900">{item.name}</p><p className="text-sm text-gray-600">Qty: {item.qty}</p></div><p className="font-bold text-gray-900">₹{item.price.toLocaleString()}</p></div>))}</div>
            </motion.div>
          </div>
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Price Details</h3>
              <div className="space-y-2 mb-4"><div className="flex justify-between text-gray-600"><span>Subtotal</span><span>₹{order.subtotal.toLocaleString()}</span></div><div className="flex justify-between text-gray-600"><span>Tax</span><span>₹{order.tax.toFixed(2)}</span></div><div className="flex justify-between text-green-600"><span>Discount</span><span>-₹{order.discount}</span></div><div className="flex justify-between text-gray-600"><span>Delivery</span><span className="text-green-600">{order.delivery === 0 ? 'FREE' : `₹${order.delivery}`}</span></div><div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t"><span>Total</span><span>₹{order.total.toFixed(2)}</span></div></div>
              <label className="flex items-start gap-2 mb-4 cursor-pointer"><input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 w-4 h-4 text-purple-600 rounded" /><span className="text-xs text-gray-600">I agree to the terms and conditions</span></label>
              <button onClick={handlePlaceOrder} disabled={!agreed} className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">Place Order</button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutReview;
