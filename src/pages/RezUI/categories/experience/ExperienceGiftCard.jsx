import { useState } from 'react';
import { Gift, Copy, Send } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const ExperienceGiftCard = () => {
  const [giftCard] = useState({
    code: 'EXP-2025-ABC123',
    amount: 5000,
    recipientName: 'Sarah',
    expiryDate: '2025-12-31'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Experience Gift Card</h1>
        <p className="text-gray-600 dark:text-gray-400">Gift an unforgettable moment</p>
      </div>

      <div className="px-4 py-6">
        <div className="bg-gradient-to-br from-pink-400 to-rose-600 rounded-2xl p-6 text-white mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Gift className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Gift Card</h2>
          </div>

          <div className="bg-white/20 backdrop-blur rounded-xl p-4 mb-4">
            <p className="text-sm opacity-90 mb-2">Code</p>
            <p className="text-xl font-bold font-mono mb-2">{giftCard.code}</p>
            <button className="flex items-center gap-2 text-sm hover:opacity-80">
              <Copy className="w-4 h-4" />
              Copy Code
            </button>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Amount:</span>
              <span className="font-bold">₹{giftCard.amount}</span>
            </div>
            <div className="flex justify-between">
              <span>For:</span>
              <span className="font-bold">{giftCard.recipientName}</span>
            </div>
            <div className="flex justify-between">
              <span>Expires:</span>
              <span className="font-bold">{giftCard.expiryDate}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full py-3 rounded-lg bg-purple-600 text-white font-bold hover:bg-purple-700 flex items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            Send Gift Card
          </button>
          <button className="w-full py-3 rounded-lg border border-gray-300 dark:border-dark-600 text-rez-navy dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-dark-700">
            Purchase More
          </button>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default ExperienceGiftCard;
