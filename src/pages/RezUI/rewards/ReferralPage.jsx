import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Copy, Share2, Gift, TrendingUp, CheckCircle2, Crown, Zap } from 'lucide-react';

const ReferralPage = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const referralCode = 'REZ-ARJUN2024';
  const referralLink = 'https://rez.app/r/ARJUN2024';

  const stats = {
    totalReferrals: 12,
    pendingReferrals: 3,
    totalEarned: 1200,
    thisMonth: 400
  };

  const referrals = [
    { id: 1, name: 'Priya S.', date: '2 days ago', status: 'completed', earned: 100 },
    { id: 2, name: 'Rahul K.', date: '5 days ago', status: 'completed', earned: 100 },
    { id: 3, name: 'Neha M.', date: '1 week ago', status: 'pending', earned: 0 },
    { id: 4, name: 'Amit P.', date: '2 weeks ago', status: 'completed', earned: 100 },
  ];

  const rewards = [
    { referrals: 1, bonus: 100, unlocked: true },
    { referrals: 5, bonus: 600, unlocked: true },
    { referrals: 10, bonus: 1500, unlocked: true },
    { referrals: 25, bonus: 5000, unlocked: false },
    { referrals: 50, bonus: 12000, unlocked: false },
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join ReZ & Earn Together!',
        text: `Hey! I'm using ReZ to earn cashback on everything I buy. Join me with code ${referralCode} and get ₹100 instantly!`,
        url: referralLink
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24 transition-colors">
      {/* Header */}
      <div className="sticky top-0 z-50 glass border-b border-rez-gray-200 dark:border-white/10">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-h3 font-poppins text-rez-navy dark:text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-500" />
                Refer & Earn
              </h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">
                Invite friends, earn ₹100 each
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
            <Users className="w-6 h-6 text-purple-500 mb-2" />
            <p className="text-2xl font-bold text-rez-navy dark:text-white">
              {stats.totalReferrals}
            </p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Friends joined</p>
          </div>
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
            <TrendingUp className="w-6 h-6 text-emerald-500 mb-2" />
            <p className="text-2xl font-bold text-rez-navy dark:text-white">
              ₹{stats.totalEarned}
            </p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Total earned</p>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="px-4 mb-6">
        <div className="p-6 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <Gift className="w-16 h-16 text-white mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Give ₹100, Get ₹100
            </h2>
            <p className="text-white/90 text-sm mb-4">
              Both you and your friend earn ₹100 when they make their first purchase!
            </p>
            <div className="flex items-center justify-center gap-2 text-white">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-semibold">Instant rewards • No limits</span>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Code */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
          Your Referral Code
        </h3>
        <div className="p-4 bg-white dark:bg-white/10 border-2 border-purple-500/30 rounded-2xl">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Code</p>
              <p className="text-2xl font-bold text-purple-500">{referralCode}</p>
            </div>
            <button
              onClick={() => handleCopy(referralCode)}
              className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-xl flex items-center gap-2 transition-colors active:scale-95"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="text-sm font-semibold">Copy</span>
                </>
              )}
            </button>
          </div>
          <div className="pt-3 border-t border-rez-gray-200 dark:border-white/10">
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">Link</p>
            <div className="flex items-center gap-2">
              <p className="text-xs text-rez-navy dark:text-white flex-1 truncate">
                {referralLink}
              </p>
              <button
                onClick={() => handleCopy(referralLink)}
                className="p-2 bg-rez-gray-100 dark:bg-white/10 hover:bg-rez-gray-200 dark:hover:bg-white/20 rounded-lg transition-colors"
              >
                <Copy className="w-4 h-4 text-rez-navy dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Share Buttons */}
      <div className="px-4 mb-6">
        <button
          onClick={handleShare}
          className="w-full py-4 bg-rez-green-500 hover:bg-rez-green-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg"
        >
          <Share2 className="w-5 h-5" />
          Share with Friends
        </button>
      </div>

      {/* Milestone Rewards */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
          Milestone Rewards
        </h3>
        <div className="space-y-2">
          {rewards.map((reward) => (
            <div
              key={reward.referrals}
              className={`p-4 rounded-2xl border-2 ${
                reward.unlocked
                  ? 'bg-emerald-500/10 border-emerald-500'
                  : 'bg-white dark:bg-white/10 border-rez-gray-200 dark:border-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {reward.unlocked ? (
                    <CheckCircle2 className="w-8 h-8 text-emerald-500 fill-emerald-500" />
                  ) : (
                    <div className="w-8 h-8 rounded-full border-2 border-rez-gray-300 dark:border-gray-600 flex items-center justify-center">
                      <Crown className="w-5 h-5 text-rez-gray-400 dark:text-gray-500" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-rez-navy dark:text-white">
                      {reward.referrals} Friends
                    </p>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                      {reward.unlocked ? 'Unlocked!' : `${reward.referrals - stats.totalReferrals} more to go`}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-bold ${
                    reward.unlocked ? 'text-emerald-500' : 'text-rez-navy dark:text-white'
                  }`}>
                    ₹{reward.bonus}
                  </p>
                  <p className="text-xs text-rez-gray-500 dark:text-gray-500">Bonus</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Referral History */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white">
            Your Referrals ({stats.totalReferrals})
          </h3>
          {stats.pendingReferrals > 0 && (
            <span className="px-2 py-1 bg-amber-500/20 text-amber-500 text-xs font-semibold rounded-full">
              {stats.pendingReferrals} pending
            </span>
          )}
        </div>
        <div className="space-y-3">
          {referrals.map((referral) => (
            <div
              key={referral.id}
              className="p-4 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-rez-navy dark:text-white">
                      {referral.name}
                    </p>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                      {referral.date}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  {referral.status === 'completed' ? (
                    <div className="flex items-center gap-1 px-2 py-1 bg-emerald-500/20 rounded-lg">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span className="text-xs font-semibold text-emerald-500">
                        +₹{referral.earned}
                      </span>
                    </div>
                  ) : (
                    <div className="px-2 py-1 bg-amber-500/20 rounded-lg">
                      <span className="text-xs font-semibold text-amber-500">
                        Pending
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="px-4 py-6">
        <div className="p-4 bg-rez-gray-50 dark:bg-white/5 rounded-2xl">
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
            How It Works
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                1
              </div>
              <div>
                <p className="text-sm font-medium text-rez-navy dark:text-white">Share Your Code</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                  Send your unique referral code or link to friends
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                2
              </div>
              <div>
                <p className="text-sm font-medium text-rez-navy dark:text-white">Friend Joins</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                  They sign up using your code and get ₹100 instantly
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                3
              </div>
              <div>
                <p className="text-sm font-medium text-rez-navy dark:text-white">Both Earn</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                  When they make their first purchase, you both earn ₹100!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralPage;
