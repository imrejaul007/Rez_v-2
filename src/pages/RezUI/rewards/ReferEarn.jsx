import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Copy, Share2, Users, Coins, TrendingUp, Gift,
  CheckCircle, Clock, Award, Sparkles, MessageCircle, Mail,
  Facebook, Twitter, Instagram, Download, ExternalLink
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const ReferEarn = () => {
  const navigate = useNavigate();
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const referralCode = 'REZ2024XYZ';
  const referralLink = 'https://rez.app/invite/REZ2024XYZ';

  const stats = [
    { label: 'Total Referrals', value: '24', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { label: 'Coins Earned', value: '2,400', icon: Coins, color: 'from-emerald-500 to-teal-500' },
    { label: 'Pending', value: '8', icon: Clock, color: 'from-orange-500 to-amber-500' },
    { label: 'Success Rate', value: '78%', icon: TrendingUp, color: 'from-purple-500 to-pink-500' }
  ];

  const referralHistory = [
    {
      id: 1,
      name: 'Rahul Sharma',
      avatar: '👨',
      status: 'completed',
      reward: 100,
      date: 'Dec 20, 2024',
      activity: 'Made first purchase'
    },
    {
      id: 2,
      name: 'Priya Singh',
      avatar: '👩',
      status: 'completed',
      reward: 100,
      date: 'Dec 18, 2024',
      activity: 'Made first purchase'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      avatar: '👨',
      status: 'pending',
      reward: 100,
      date: 'Dec 15, 2024',
      activity: 'Signed up'
    },
    {
      id: 4,
      name: 'Sneha Patel',
      avatar: '👩',
      status: 'pending',
      reward: 100,
      date: 'Dec 12, 2024',
      activity: 'Signed up'
    },
    {
      id: 5,
      name: 'Vikram Reddy',
      avatar: '👨',
      status: 'completed',
      reward: 100,
      date: 'Dec 10, 2024',
      activity: 'Made first purchase'
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const shareOptions = [
    { name: 'WhatsApp', icon: MessageCircle, color: 'bg-green-500', action: () => {} },
    { name: 'Facebook', icon: Facebook, color: 'bg-blue-600', action: () => {} },
    { name: 'Twitter', icon: Twitter, color: 'bg-sky-500', action: () => {} },
    { name: 'Instagram', icon: Instagram, color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500', action: () => {} },
    { name: 'Email', icon: Mail, color: 'bg-gray-600', action: () => {} },
    { name: 'More', icon: Share2, color: 'bg-indigo-500', action: () => {} }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Refer & Earn</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Invite friends, earn together</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-4 py-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 border-2 border-purple-500/30 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Gift className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">
            Earn ₹100 Per Referral
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Your friend gets ₹100 • You get ₹100
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30">
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
              No limits on earnings!
            </span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
              <div className={`w-12 h-12 mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-rez-navy dark:text-white mb-1">{stat.value}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Referral Code Section */}
      <div className="px-4 mb-6">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="text-base font-bold text-rez-navy dark:text-white mb-3">Your Referral Code</h3>

          {/* Code Display */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex-1 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-dashed border-purple-500/30">
              <code className="text-xl font-mono font-bold text-purple-600 dark:text-purple-400">
                {referralCode}
              </code>
            </div>
            <button
              onClick={() => copyToClipboard(referralCode)}
              className={`p-4 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                copiedCode
                  ? 'bg-green-500 text-white'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105'
              }`}
            >
              {copiedCode ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>

          {/* Link Display */}
          <div className="p-3 rounded-xl bg-gray-50 dark:bg-dark-700 mb-3">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Share this link</p>
            <p className="text-sm font-mono text-rez-navy dark:text-white break-all">{referralLink}</p>
          </div>

          {/* Copy Link Button */}
          <button
            onClick={() => copyToClipboard(referralLink)}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            <Copy className="w-4 h-4" />
            Copy Link
          </button>
        </div>
      </div>

      {/* Share Options */}
      <div className="px-4 mb-6">
        <h3 className="text-base font-bold text-rez-navy dark:text-white mb-3">Share Via</h3>
        <div className="grid grid-cols-3 gap-3">
          {shareOptions.map((option, index) => (
            <button
              key={index}
              onClick={option.action}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all text-center"
            >
              <div className={`w-12 h-12 mx-auto mb-2 rounded-xl ${option.color} flex items-center justify-center`}>
                <option.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{option.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="px-4 mb-6">
        <h3 className="text-base font-bold text-rez-navy dark:text-white mb-3">How It Works</h3>
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">1</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-rez-navy dark:text-white mb-1">Share Your Code</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Send your unique referral code to friends via any platform
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">2</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-rez-navy dark:text-white mb-1">Friend Signs Up</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                They download ReZ and enter your code during signup
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">3</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-rez-navy dark:text-white mb-1">Both Get Rewarded</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                You both receive ₹100 in ReZ Coins when they make their first purchase
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Referral History */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-bold text-rez-navy dark:text-white">Referral History</h3>
          <button className="text-sm text-purple-600 dark:text-purple-400 font-semibold">View All →</button>
        </div>
        <div className="space-y-3">
          {referralHistory.map((referral) => (
            <div key={referral.id} className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-2xl">
                  {referral.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-rez-navy dark:text-white">{referral.name}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{referral.activity}</p>
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                  referral.status === 'completed'
                    ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                    : 'bg-orange-500/20 text-orange-600 dark:text-orange-400'
                }`}>
                  {referral.status === 'completed' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                  <span>{referral.status === 'completed' ? 'Completed' : 'Pending'}</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-rez-gray-200 dark:border-dark-700">
                <span className="text-xs text-gray-600 dark:text-gray-400">{referral.date}</span>
                <div className="flex items-center gap-1.5">
                  <Coins className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className={`text-sm font-bold ${
                    referral.status === 'completed'
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-gray-400 dark:text-gray-500'
                  }`}>
                    +{referral.reward}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="px-4 pb-6">
        <div className="p-4 rounded-xl bg-gray-50 dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <h4 className="text-sm font-bold text-rez-navy dark:text-white mb-2">Terms & Conditions</h4>
          <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
            <li>• Referral bonus credited when referred user makes first purchase</li>
            <li>• Both referrer and referee get ₹100 in ReZ Coins</li>
            <li>• No limit on number of referrals</li>
            <li>• Self-referrals are not allowed</li>
            <li>• Coins valid for 365 days from credit date</li>
          </ul>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default ReferEarn;
