import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Share2, Instagram, Twitter, MessageCircle } from 'lucide-react';

function SocialSharing() {
  const navigate = useNavigate();
  const shareText = 'Check out this amazing deal on ReZ!';
  const shareUrl = 'https://rez.app/deals/special';

  const platforms = [
    { name: 'Instagram Stories', icon: Instagram, color: 'bg-gradient-to-br from-purple-600 to-pink-600', action: () => alert('Share to Instagram Stories') },
    { name: 'WhatsApp Status', icon: MessageCircle, color: 'bg-green-500', action: () => window.open(`https://wa.me/?text=${shareText} ${shareUrl}`) },
    { name: 'Twitter', icon: Twitter, color: 'bg-sky-500', action: () => window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`) },
    { name: 'Facebook', icon: Share2, color: 'bg-blue-600', action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`) }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"><Share2 className="w-8 h-8 text-white" /></div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Share & Earn</h1>
            <p className="text-gray-600">Share deals on social media and earn bonus points!</p>
          </div>
          <div className="p-6 bg-purple-50 border border-purple-200 rounded-lg mb-8">
            <p className="text-center text-lg font-bold text-purple-600 mb-2">Earn +50 Points per share!</p>
            <p className="text-center text-sm text-gray-600">Share to any platform and get bonus points</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {platforms.map((platform, i) => (
              <motion.button key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} onClick={platform.action} className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-500 transition-all">
                <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-3`}><platform.icon className="w-8 h-8 text-white" /></div>
                <p className="font-medium text-gray-900 text-center">{platform.name}</p>
              </motion.button>
            ))}
          </div>
          <button onClick={() => navigate(-1)} className="w-full py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-all">Back</button>
        </motion.div>
      </div>
    </div>
  );
}

export default SocialSharing;
