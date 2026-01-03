import React from 'react';
import { Download, Share2 } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function TransactionReceiptView() {
  const receipt = {
    id: 'TXN20250103001',
    date: 'Jan 3, 2025 2:30 PM',
    amount: 1500,
    type: 'Purchase',
    merchant: 'Pizza Palace',
    status: 'Success',
    coins: 75,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Transaction Receipt</h1>

        <div className="bg-white rounded-lg p-4 shadow space-y-4">
          <div className="text-center pb-4 border-b">
            <p className="text-2xl font-bold text-gray-900">Rs. {receipt.amount}</p>
            <p className="text-sm text-green-600 font-semibold">{receipt.status}</p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <p className="text-gray-600">Transaction ID</p>
              <p className="font-semibold text-gray-900">{receipt.id}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Date & Time</p>
              <p className="font-semibold text-gray-900">{receipt.date}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Merchant</p>
              <p className="font-semibold text-gray-900">{receipt.merchant}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Coins Earned</p>
              <p className="font-bold text-blue-600">+{receipt.coins}</p>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button className="flex-1 border-2 border-gray-300 text-gray-700 py-2 rounded font-semibold flex items-center justify-center gap-2">
              <Download size={18} /> Download
            </button>
            <button className="flex-1 border-2 border-gray-300 text-gray-700 py-2 rounded font-semibold flex items-center justify-center gap-2">
              <Share2 size={18} /> Share
            </button>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}