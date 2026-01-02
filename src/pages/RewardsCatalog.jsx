import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gift, Coins, ShoppingBag } from 'lucide-react';

function RewardsCatalog() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('all');
  const userPoints = 8420;
  const rewards = [
    { id: 1, name: '₹100 Off Voucher', points: 1000, category: 'vouchers', image: '🎟️', stock: 'unlimited' },
    { id: 2, name: '₹500 Off Voucher', points: 4500, category: 'vouchers', image: '🎫', stock: 'unlimited' },
    { id: 3, name: 'Free Delivery (1 Month)', points: 2000, category: 'perks', image: '🚚', stock: 'limited' },
    { id: 4, name: 'Premium Membership', points: 10000, category: 'perks', image: '👑', stock: 'limited' },
    { id: 5, name: 'Wireless Headphones', points: 15000, category: 'products', image: '🎧', stock: '5 left' },
    { id: 6, name: 'Smart Watch', points: 25000, category: 'products', image: '⌚', stock: '2 left' }
  ];

  const categories = ['all', 'vouchers', 'perks', 'products'];
  const filteredRewards = category === 'all' ? rewards : rewards.filter(r => r.category === category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center"><Gift className="w-6 h-6 text-white" /></div><div><h1 className="text-2xl font-bold text-gray-900">Rewards Catalog</h1><p className="text-sm text-gray-600">Redeem your points</p></div></div><div className="text-right"><p className="text-sm text-gray-600">Your Points</p><div className="flex items-center gap-1"><Coins className="w-5 h-5 text-yellow-500" /><p className="text-2xl font-bold text-purple-600">{userPoints.toLocaleString()}</p></div></div></div>
          <div className="flex gap-2 mt-4">{categories.map(cat => (<button key={cat} onClick={() => setCategory(cat)} className={`flex-1 py-2 px-4 rounded-lg font-medium capitalize transition-all ${category === cat ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{cat}</button>))}</div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRewards.map((reward, i) => (
            <motion.div key={reward.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-center mb-4"><div className="text-6xl mb-3">{reward.image}</div><h3 className="font-bold text-gray-900 mb-1">{reward.name}</h3><p className="text-xs text-gray-500">{reward.stock}</p></div>
              <div className="flex items-center justify-between mb-4"><div className="flex items-center gap-1"><Coins className="w-4 h-4 text-yellow-500" /><span className="font-bold text-purple-600">{reward.points.toLocaleString()}</span></div><span className={`px-2 py-1 rounded-full text-xs font-medium ${reward.points <= userPoints ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>{reward.points <= userPoints ? 'Available' : 'Need more points'}</span></div>
              <button disabled={reward.points > userPoints} className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${reward.points <= userPoints ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}>Redeem</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RewardsCatalog;
