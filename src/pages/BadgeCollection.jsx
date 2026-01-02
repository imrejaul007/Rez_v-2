import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Star, Lock } from 'lucide-react';

function BadgeCollection() {
  const navigate = useNavigate();
  const badges = [
    { id: 1, name: 'Early Bird', desc: 'First 1000 users', icon: '🐦', unlocked: true, rarity: 'legendary' },
    { id: 2, name: 'Shopaholic', desc: '50 orders completed', icon: '🛒', unlocked: true, rarity: 'epic' },
    { id: 3, name: 'VIP Member', desc: 'Premium membership', icon: '👑', unlocked: true, rarity: 'rare' },
    { id: 4, name: 'Review Pro', desc: '100 reviews written', icon: '⭐', unlocked: false, rarity: 'epic' },
    { id: 5, name: 'Social Star', desc: '20 social shares', icon: '✨', unlocked: false, rarity: 'rare' },
    { id: 6, name: 'Big Spender', desc: 'Spent ₹1 Lakh', icon: '💎', unlocked: false, rarity: 'legendary' }
  ];

  const rarityColors = { legendary: 'from-yellow-400 to-orange-500', epic: 'from-purple-500 to-pink-500', rare: 'from-blue-500 to-cyan-500', common: 'from-gray-400 to-gray-500' };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center gap-3"><div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center"><Award className="w-6 h-6 text-white" /></div><div><h1 className="text-2xl font-bold text-gray-900">Badge Collection</h1><p className="text-sm text-gray-600">{badges.filter(b => b.unlocked).length} of {badges.length} badges collected</p></div></div>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {badges.map((badge, i) => (
            <motion.div key={badge.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-3 ${badge.unlocked ? `bg-gradient-to-br ${rarityColors[badge.rarity]}` : 'bg-gray-100'}`}>
                {badge.unlocked ? badge.icon : <Lock className="w-8 h-8 text-gray-400" />}
              </div>
              <h3 className={`font-bold mb-1 ${badge.unlocked ? 'text-gray-900' : 'text-gray-500'}`}>{badge.name}</h3>
              <p className="text-xs text-gray-600 mb-2">{badge.desc}</p>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${badge.unlocked ? `bg-gradient-to-r ${rarityColors[badge.rarity]} text-white` : 'bg-gray-200 text-gray-600'}`}>{badge.rarity}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BadgeCollection;
