import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gift, Users, Copy, Share2, CheckCircle } from 'lucide-react';

function ReferralProgram() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const referralCode = 'REZ2026ABCD';
  const referralLink = `https://rez.app/r/${referralCode}`;
  const stats = { totalReferrals: 12, successfulReferrals: 8, pendingReferrals: 4, totalEarned: 2400 };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="text-center"><div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"><Gift className="w-8 h-8 text-white" /></div><h1 className="text-3xl font-bold text-gray-900 mb-2">Referral Program</h1><p className="text-gray-600">Invite friends and earn rewards!</p></div>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total Referrals', value: stats.totalReferrals, icon: Users },
            { label: 'Successful', value: stats.successfulReferrals, icon: CheckCircle },
            { label: 'Pending', value: stats.pendingReferrals, icon: Users },
            { label: 'Total Earned', value: `₹${stats.totalEarned}`, icon: Gift }
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl shadow-lg p-4 text-center">
              <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your Referral Code</h2>
          <div className="p-4 bg-purple-50 border-2 border-purple-200 rounded-lg mb-4">
            <p className="text-center text-3xl font-bold text-purple-600 mb-2">{referralCode}</p>
            <p className="text-center text-sm text-gray-600">{referralLink}</p>
          </div>
          <div className="flex gap-4">
            <button onClick={copyToClipboard} className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg">
              {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
            <button onClick={() => navigate('/invite-friends')} className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How It Works</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Share Your Code', desc: 'Share your unique referral code with friends' },
              { step: '2', title: 'Friend Signs Up', desc: 'Your friend creates an account using your code' },
              { step: '3', title: 'Both Get Rewards', desc: 'You get ₹300 and your friend gets ₹200 discount' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
                <div><h3 className="font-bold text-gray-900">{item.title}</h3><p className="text-sm text-gray-600">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ReferralProgram;
