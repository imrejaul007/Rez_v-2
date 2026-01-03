import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Coins, TrendingUp, Plus, Minus } from 'lucide-react';

function FinancialGold() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(1000);
  const goldPrice = 6200; // per gram
  const goldAmount = (amount / goldPrice).toFixed(4);

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-amber-600 to-yellow-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Coins className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Digital Gold</h1></div><p className="text-xs text-white/80">Buy & sell 24K gold</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl p-6 text-white text-center">
          <Coins className="w-16 h-16 mx-auto mb-4" />
          <p className="text-sm opacity-90 mb-2">Current Gold Price (24K)</p>
          <p className="text-4xl font-bold mb-2">₹{goldPrice}/g</p>
          <div className="flex items-center justify-center gap-2 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>+2.5% today</span>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-4">Buy Gold</h3>
          <div className="mb-4">
            <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-2">Enter Amount (₹)</p>
            <div className="flex items-center gap-2">
              <button onClick={() => setAmount(Math.max(100, amount - 100))} className="p-2 rounded-lg bg-rez-gray-100 dark:bg-dark-700"><Minus className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" /></button>
              <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="flex-1 p-3 rounded-lg border-2 border-rez-gray-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-rez-navy dark:text-white text-center font-bold text-xl" />
              <button onClick={() => setAmount(amount + 100)} className="p-2 rounded-lg bg-rez-gray-100 dark:bg-dark-700"><Plus className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" /></button>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-amber-700 dark:text-amber-400 mb-1">You will get</p>
            <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">{goldAmount}g</p>
            <p className="text-xs text-amber-600 dark:text-amber-500 mt-1">24K Pure Gold</p>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4">
            {[500, 1000, 5000, 10000].map(preset => (
              <button key={preset} onClick={() => setAmount(preset)} className={`py-2 rounded-lg border-2 font-bold text-sm ${amount === preset ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400' : 'border-rez-gray-200 dark:border-dark-700 text-rez-gray-600 dark:text-gray-400'}`}>₹{preset}</button>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Why Buy Digital Gold?</h3>
          <ul className="space-y-2 text-sm text-rez-gray-600 dark:text-gray-400">
            <li>• 100% Pure 24K Gold</li>
            <li>• Buy from ₹10 onwards</li>
            <li>• Secure vault storage</li>
            <li>• Sell anytime instantly</li>
            <li>• Home delivery available</li>
          </ul>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700">
        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold">Buy Gold</button>
      </div>
    </div>
  );
}

export default FinancialGold;
