import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, FileText, Tag } from 'lucide-react';

function FinancialPayBill() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [billNumber, setBillNumber] = useState('');
  const [amount, setAmount] = useState('');

  const bill = {
    id: 1,
    name: 'Electricity Bill',
    provider: 'MSEB',
    suggestedAmount: 2500
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">{bill.name}</h1></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-4">{bill.provider}</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-rez-gray-600 dark:text-gray-400 mb-2 block">Consumer Number</label>
              <input type="text" value={billNumber} onChange={(e) => setBillNumber(e.target.value)} placeholder="Enter your consumer number" className="w-full p-3 rounded-lg border-2 border-rez-gray-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-rez-navy dark:text-white" />
            </div>
            <div>
              <label className="text-sm text-rez-gray-600 dark:text-gray-400 mb-2 block">Amount (₹)</label>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" className="w-full p-3 rounded-lg border-2 border-rez-gray-200 dark:border-dark-700 bg-white dark:bg-dark-700 text-rez-navy dark:text-white" />
            </div>
          </div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
          <div className="flex gap-3">
            <Tag className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-1">Available Offers</h3>
              <p className="text-sm text-blue-700 dark:text-blue-400">Get up to ₹100 cashback on this bill payment</p>
              <button className="mt-2 text-sm font-bold text-blue-600 dark:text-blue-400">View Offers</button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Payment Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between py-2 border-b border-rez-gray-200 dark:border-dark-700">
              <span className="text-sm text-rez-gray-600 dark:text-gray-400">Bill Amount</span>
              <span className="text-sm font-bold text-rez-navy dark:text-white">₹{amount || '0'}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-rez-gray-200 dark:border-dark-700">
              <span className="text-sm text-rez-gray-600 dark:text-gray-400">Processing Fee</span>
              <span className="text-sm font-bold text-rez-navy dark:text-white">₹0</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-bold text-rez-navy dark:text-white">Total Amount</span>
              <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">₹{amount || '0'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700">
        <button disabled={!billNumber || !amount} className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold disabled:opacity-50">Proceed to Payment</button>
      </div>
    </div>
  );
}

export default FinancialPayBill;
