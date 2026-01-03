import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Mail, MessageSquare, Share2 } from 'lucide-react';

function InviteFriends() {
  const navigate = useNavigate();
  const referralLink = 'https://rez.app/r/REZ2026ABCD';

  const shareOptions = [
    { icon: MessageSquare, label: 'WhatsApp', color: 'bg-green-500', action: () => window.open(`https://wa.me/?text=Join ReZ and get ₹200 off! ${referralLink}`) },
    { icon: Mail, label: 'Email', color: 'bg-blue-500', action: () => window.open(`mailto:?subject=Join ReZ&body=Join ReZ and get ₹200 off! ${referralLink}`) },
    { icon: Share2, label: 'Facebook', color: 'bg-blue-600', action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${referralLink}`) },
    { icon: Share2, label: 'Twitter', color: 'bg-sky-500', action: () => window.open(`https://twitter.com/intent/tweet?text=Join ReZ and get ₹200 off!&url=${referralLink}`) }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"><Users className="w-8 h-8 text-white" /></div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Invite Friends</h1>
            <p className="text-gray-600">Share with friends and earn rewards together!</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg mb-8 text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">₹300</p>
            <p className="text-gray-700">For each friend who signs up</p>
          </div>
          <div className="space-y-4 mb-8">
            {shareOptions.map((option, i) => (
              <motion.button key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} onClick={option.action} className="w-full flex items-center gap-4 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                <div className={`w-12 h-12 ${option.color} rounded-full flex items-center justify-center text-white`}><option.icon className="w-6 h-6" /></div>
                <span className="font-medium text-gray-900">Share via {option.label}</span>
              </motion.button>
            ))}
          </div>
          <button onClick={() => navigate(-1)} className="w-full py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-all">Back</button>
        </motion.div>
      </div>
    </div>
  );
}

export default InviteFriends;
