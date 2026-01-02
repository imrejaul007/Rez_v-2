import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Clock, Users, Gift } from 'lucide-react';

function CompetitionDetails() {
  const navigate = useNavigate();
  const competition = { id: 1, title: 'Weekly Shopping Challenge', desc: 'Spend the most and win amazing prizes!', prize: '₹10,000 Voucher', participants: 2547, endsIn: '3 days', prizes: [{ rank: '1st', prize: '₹10,000 Voucher', icon: '🥇' }, { rank: '2nd', prize: '₹5,000 Voucher', icon: '🥈' }, { rank: '3rd', prize: '₹2,500 Voucher', icon: '🥉' }, { rank: '4-10', prize: '₹500 Voucher', icon: '🎁' }], rules: ['Spend minimum ₹500 to qualify', 'Only purchases made during competition period count', 'Cancelled orders are not counted', 'Winners announced within 24 hours'], yourRank: 45, yourSpending: 3250 };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white"><div className="flex items-center gap-3 mb-3"><Trophy className="w-8 h-8" /><h1 className="text-2xl font-bold">{competition.title}</h1></div><p className="text-purple-100 mb-4">{competition.desc}</p><div className="grid grid-cols-2 gap-4"><div className="flex items-center gap-2"><Clock className="w-5 h-5" /><div><p className="text-sm text-purple-100">Ends in</p><p className="font-bold">{competition.endsIn}</p></div></div><div className="flex items-center gap-2"><Users className="w-5 h-5" /><div><p className="text-sm text-purple-100">Participants</p><p className="font-bold">{competition.participants.toLocaleString()}</p></div></div></div></div>
          <div className="p-6"><div className="p-4 bg-purple-50 border border-purple-200 rounded-lg mb-6 text-center"><p className="text-sm text-gray-600 mb-1">Your Current Rank</p><p className="text-4xl font-bold text-purple-600">#{competition.yourRank}</p><p className="text-sm text-gray-600 mt-2">Total Spending: ₹{competition.yourSpending.toLocaleString()}</p></div><div className="mb-6"><h3 className="font-bold text-gray-900 mb-4">Prizes</h3><div className="space-y-3">{competition.prizes.map((prize, i) => (<div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"><span className="text-3xl">{prize.icon}</span><div className="flex-1"><p className="font-medium text-gray-900">{prize.rank} Place</p></div><p className="font-bold text-purple-600">{prize.prize}</p></div>))}</div></div><div><h3 className="font-bold text-gray-900 mb-4">Rules</h3><ul className="space-y-2">{competition.rules.map((rule, i) => (<li key={i} className="flex items-start gap-2 text-sm text-gray-700"><span className="text-purple-600 mt-1">•</span><span>{rule}</span></li>))}</ul></div></div>
        </motion.div>
        <button onClick={() => navigate(-1)} className="w-full py-3 px-4 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-50 shadow-lg transition-all">Back</button>
      </div>
    </div>
  );
}

export default CompetitionDetails;
