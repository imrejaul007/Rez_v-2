import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, Smartphone, Building, DollarSign, CheckCircle } from 'lucide-react';

function PaymentOptions() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('upi');
  const [loading, setLoading] = useState(false);
  const orderTotal = 21917.64;

  const paymentMethods = [
    { id: 'upi', name: 'UPI', icon: Smartphone, desc: 'Pay via UPI apps', color: 'text-blue-600' },
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, desc: 'Visa, Mastercard, Rupay', color: 'text-purple-600' },
    { id: 'wallet', name: 'ReZ Wallet', icon: Wallet, desc: 'Balance: ₹5,000', color: 'text-green-600' },
    { id: 'netbanking', name: 'Net Banking', icon: Building, desc: 'All major banks', color: 'text-orange-600' },
    { id: 'cod', name: 'Cash on Delivery', icon: DollarSign, desc: 'Pay when you receive', color: 'text-gray-600' }
  ];

  const handlePayment = async () => {
    setLoading(true);
    try {
      await fetch('/api/payment/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('authToken')}` },
        body: JSON.stringify({ method: selectedMethod, amount: orderTotal })
      });
      setTimeout(() => {
        navigate('/order-success');
      }, 2000);
    } catch (err) {
      alert('Payment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"><CreditCard className="w-8 h-8 text-white" /></div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Options</h1>
            <p className="text-gray-600">Choose your preferred payment method</p>
          </div>
          <div className="p-6 bg-purple-50 border border-purple-200 rounded-lg mb-6 text-center">
            <p className="text-sm text-gray-600 mb-1">Amount to Pay</p>
            <p className="text-4xl font-bold text-purple-600">₹{orderTotal.toFixed(2)}</p>
          </div>
          <div className="space-y-3 mb-6">
            {paymentMethods.map((method, i) => (
              <motion.button key={method.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} onClick={() => setSelectedMethod(method.id)} className={`w-full flex items-center gap-4 p-4 border-2 rounded-lg transition-all ${selectedMethod === method.id ? 'border-purple-500 bg-purple-50' : 'border-gray-300 hover:border-gray-400'}`}>
                <div className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center ${method.color}`}><method.icon className="w-6 h-6" /></div>
                <div className="flex-1 text-left"><p className="font-bold text-gray-900">{method.name}</p><p className="text-sm text-gray-600">{method.desc}</p></div>
                {selectedMethod === method.id && <CheckCircle className="w-6 h-6 text-purple-600" />}
              </motion.button>
            ))}
          </div>
          <button onClick={handlePayment} disabled={loading} className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all mb-4">
            {loading ? 'Processing...' : `Pay ₹${orderTotal.toFixed(2)}`}
          </button>
          <button onClick={() => navigate(-1)} className="w-full py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-all">Back</button>
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-xs text-gray-600">🔒 Your payment information is secure and encrypted</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PaymentOptions;
