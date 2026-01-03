import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Wallet, CreditCard } from 'lucide-react';

function WalletUse() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const walletBalance = 2500;

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700"><ArrowLeft className="w-5 h-5" /></button>
          <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">Use Wallet Balance</h1>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 text-center text-white">
          <Wallet className="w-16 h-16 mx-auto mb-3" />
          <p className="text-sm opacity-90 mb-1">Available Balance</p>
          <p className="text-4xl font-bold">₹{walletBalance.toLocaleString()}</p>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Enter Amount</h3>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-rez-gray-600">₹</span>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0" className="w-full pl-10 pr-4 py-4 text-2xl font-bold rounded-xl bg-rez-gray-50 dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div className="grid grid-cols-4 gap-2 mt-3">
            {[100, 500, 1000, 2000].map(amt => (
              <button key={amt} onClick={() => setAmount(amt.toString())} className="py-2 rounded-lg border-2 border-rez-gray-300 dark:border-dark-600 hover:border-purple-500 text-sm font-semibold">+{amt}</button>
            ))}
          </div>
        </div>
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <h3 className="font-bold text-rez-navy dark:text-white mb-2 flex items-center gap-2"><CreditCard className="w-5 h-5 text-blue-500" />How to Use</h3>
          <ul className="space-y-1 text-sm text-rez-gray-700 dark:text-gray-300">
            <li>• Use wallet balance during checkout</li>
            <li>• Pay bills & recharge</li>
            <li>• Transfer to bank account</li>
            <li>• Gift to friends</li>
          </ul>
        </div>
        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg">Continue to Payment</button>
      </div>
    </div>
  );
}

export default WalletUse;
