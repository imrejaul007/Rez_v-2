import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Coins, Flame, Gift, TrendingUp, CheckCircle2, Share2, Users, ShoppingCart, Link2, Clock, XCircle, Award } from 'lucide-react';

const checkInRewards = [
  { day: 1, coins: 10, claimed: true },
  { day: 2, coins: 15, claimed: true },
  { day: 3, coins: 20, claimed: true },
  { day: 4, coins: 25, claimed: false, today: true },
  { day: 5, coins: 30, claimed: false },
  { day: 6, coins: 40, claimed: false },
  { day: 7, coins: 100, claimed: false, bonus: true },
];

const promotionalPosters = [
  {
    id: 1,
    title: 'Mega Diwali Sale',
    subtitle: 'Up to 70% off + Extra Cashback',
    image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=500',
    color: 'from-orange-500 to-red-500',
    shareBonus: 50,
  },
  {
    id: 2,
    title: 'Weekend Bonanza',
    subtitle: '3X Coins on All Purchases',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500',
    color: 'from-purple-500 to-pink-500',
    shareBonus: 30,
  },
  {
    id: 3,
    title: 'New User Special',
    subtitle: 'Get ₹500 Welcome Bonus',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=500',
    color: 'from-blue-500 to-cyan-500',
    shareBonus: 100,
  },
  {
    id: 4,
    title: 'Flash Sale Today',
    subtitle: 'Limited Time Mega Deals',
    image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=500',
    color: 'from-green-500 to-teal-500',
    shareBonus: 40,
  },
];

const DailyCheckInPage = () => {
  const navigate = useNavigate();
  const [currentStreak, setCurrentStreak] = useState(3);
  const [totalEarned, setTotalEarned] = useState(45);
  const [showReward, setShowReward] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [affiliateStats, setAffiliateStats] = useState({
    totalShares: 12,
    appDownloads: 5,
    purchases: 2,
    commissionEarned: 450,
  });

  // Submission workflow states
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submitUrl, setSubmitUrl] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      posterTitle: 'Mega Diwali Sale',
      postUrl: 'https://instagram.com/p/xyz123',
      platform: 'instagram',
      status: 'approved',
      submittedAt: '2024-12-25 10:30 AM',
      approvedAt: '2024-12-25 11:00 AM',
      shareBonus: 50,
    },
    {
      id: 2,
      posterTitle: 'Weekend Bonanza',
      postUrl: 'https://facebook.com/post/abc456',
      platform: 'facebook',
      status: 'pending',
      submittedAt: '2024-12-26 09:15 AM',
      shareBonus: 30,
    },
  ]);

  const [checkInStarted, setCheckInStarted] = useState(false);
  const [pendingCheckInReward, setPendingCheckInReward] = useState(null);

  const handleCheckIn = () => {
    const todayReward = checkInRewards.find(r => r.today);
    if (todayReward && !todayReward.claimed) {
      // Mark check-in as started, but not completed
      setCheckInStarted(true);
      setPendingCheckInReward(todayReward);
      // Scroll to promotional posters section
      setTimeout(() => {
        document.getElementById('promotional-posters')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const completeCheckIn = () => {
    if (pendingCheckInReward) {
      setShowReward(true);
      setCurrentStreak(prev => prev + 1);
      setTotalEarned(prev => prev + pendingCheckInReward.coins);
      pendingCheckInReward.claimed = true;
      setCheckInStarted(false);
      setPendingCheckInReward(null);

      setTimeout(() => {
        setShowReward(false);
      }, 3000);
    }
  };

  const handleSharePoster = (poster, platform) => {
    // Generate unique affiliate link
    const affiliateCode = `REZ${Date.now().toString(36)}`;
    const shareUrl = `https://rez.app?ref=${affiliateCode}`;
    const shareText = `${poster.title} - ${poster.subtitle}! Download ReZ app and get amazing deals. Use my code: ${affiliateCode}`;

    let platformUrl = '';
    switch(platform) {
      case 'whatsapp':
        platformUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
      case 'facebook':
        platformUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case 'twitter':
        platformUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'instagram':
        // Copy to clipboard for Instagram
        navigator.clipboard.writeText(shareText + ' ' + shareUrl);
        alert('Link copied! Paste it in your Instagram story or post.');
        // Open submit modal for Instagram
        setSelectedPlatform(platform);
        setShowSubmitModal(true);
        setSelectedPoster(null);
        return;
    }

    if (platformUrl) {
      window.open(platformUrl, '_blank', 'width=600,height=400');
      // Increment share count (in real app, this would be tracked on backend)
      setAffiliateStats(prev => ({
        ...prev,
        totalShares: prev.totalShares + 1,
      }));
      // Open submit modal after sharing
      setSelectedPlatform(platform);
      setShowSubmitModal(true);
      setSelectedPoster(null);
    }
  };

  const handleSubmitPost = () => {
    if (!submitUrl.trim()) {
      alert('Please enter the URL of your shared post');
      return;
    }

    // Validate URL format
    try {
      new URL(submitUrl);
    } catch {
      alert('Please enter a valid URL');
      return;
    }

    // Create new submission
    const newSubmission = {
      id: submissions.length + 1,
      posterTitle: selectedPoster?.title || 'Promotional Poster',
      postUrl: submitUrl,
      platform: selectedPlatform,
      status: 'pending',
      submittedAt: new Date().toLocaleString('en-IN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }),
      shareBonus: selectedPoster?.shareBonus || 0,
    };

    setSubmissions(prev => [newSubmission, ...prev]);
    setShowSubmitModal(false);
    setSubmitUrl('');
    setSelectedPlatform('');

    // Complete the check-in if it was started
    if (checkInStarted) {
      completeCheckIn();
    }

    // Show success message
    alert('Your post has been submitted for review! Check-in completed! You will receive share bonus coins once approved.');
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
                <Calendar className="w-5 h-5 text-blue-500" />
                Daily Check-In & Earn
              </h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">
                Check in daily + Share to earn rewards
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-2xl text-center">
            <Flame className="w-5 h-5 text-orange-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">{currentStreak}</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Day streak</p>
          </div>
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
            <Coins className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">₹{totalEarned}</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Total earned</p>
          </div>
          <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-2xl text-center">
            <TrendingUp className="w-5 h-5 text-purple-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">7</p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Best streak</p>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-4 mb-6">
        {checkInStarted ? (
          <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl animate-pulse">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-white" />
              <h3 className="text-sm font-bold text-white">Complete Your Check-In!</h3>
            </div>
            <p className="text-xs text-white/90">
              📱 Share a promotional poster below and submit your post link to complete today's check-in and earn ₹{pendingCheckInReward?.coins} coins!
            </p>
          </div>
        ) : (
          <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-5 h-5 text-white" />
              <h3 className="text-sm font-bold text-white">How Daily Check-In Works!</h3>
            </div>
            <p className="text-xs text-white/90">
              1️⃣ Click "Check In Now" → 2️⃣ Share a promotional poster → 3️⃣ Submit your post link → 4️⃣ Earn coins + share bonus!
            </p>
          </div>
        )}
      </div>

      {/* Check-In Calendar */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Daily Check-In Calendar
        </h3>
        <div className="grid grid-cols-7 gap-2">
          {checkInRewards.map((reward) => (
            <div
              key={reward.day}
              className={`aspect-square rounded-2xl flex flex-col items-center justify-center p-2 ${
                reward.claimed
                  ? 'bg-emerald-500/20 border-2 border-emerald-500'
                  : reward.today
                  ? 'bg-blue-500/20 border-2 border-blue-500 animate-pulse'
                  : 'bg-rez-gray-100 dark:bg-white/10 border border-rez-gray-200 dark:border-white/10'
              } ${reward.bonus ? 'col-span-7' : ''}`}
            >
              <span className="text-[10px] text-rez-gray-600 dark:text-gray-400 mb-1">
                Day {reward.day}
              </span>
              <div className="flex items-center gap-0.5 mb-1">
                <Coins className={`w-3 h-3 ${
                  reward.claimed ? 'text-emerald-500' : reward.today ? 'text-blue-500' : 'text-amber-500'
                }`} />
                <span className={`text-xs font-bold ${
                  reward.claimed ? 'text-emerald-500' : reward.today ? 'text-blue-500' : 'text-rez-navy dark:text-white'
                }`}>
                  ₹{reward.coins}
                </span>
              </div>
              {reward.claimed && (
                <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500" />
              )}
              {reward.bonus && (
                <span className="text-[10px] font-bold text-amber-500">BONUS!</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Check-In Button */}
      <div className="px-4 mb-6">
        <button
          onClick={handleCheckIn}
          disabled={checkInRewards.find(r => r.today)?.claimed || checkInStarted}
          className={`w-full py-4 rounded-2xl font-bold text-white transition-all ${
            checkInRewards.find(r => r.today)?.claimed
              ? 'bg-emerald-500 cursor-not-allowed'
              : checkInStarted
              ? 'bg-amber-500 cursor-not-allowed'
              : 'bg-rez-green-500 hover:bg-rez-green-600 active:scale-95 shadow-lg'
          }`}
        >
          {checkInRewards.find(r => r.today)?.claimed ? (
            <span className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Checked In Today
            </span>
          ) : checkInStarted ? (
            <span className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 animate-pulse" />
              Share & Submit Post to Complete
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Check In Now (+₹{checkInRewards.find(r => r.today)?.coins})
            </span>
          )}
        </button>
      </div>

      {/* Affiliate Stats Dashboard */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Your Affiliate Performance
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl">
            <Share2 className="w-5 h-5 text-blue-500 mb-2" />
            <p className="text-2xl font-bold text-rez-navy dark:text-white">{affiliateStats.totalShares}</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Total Shares</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
            <Users className="w-5 h-5 text-green-500 mb-2" />
            <p className="text-2xl font-bold text-rez-navy dark:text-white">{affiliateStats.appDownloads}</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">App Downloads</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl">
            <ShoppingCart className="w-5 h-5 text-purple-500 mb-2" />
            <p className="text-2xl font-bold text-rez-navy dark:text-white">{affiliateStats.purchases}</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Purchases Made</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl">
            <Coins className="w-5 h-5 text-amber-500 mb-2" />
            <p className="text-2xl font-bold text-rez-navy dark:text-white">₹{affiliateStats.commissionEarned}</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Commission Earned</p>
          </div>
        </div>
        <div className="mt-3 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
          <p className="text-xs text-amber-700 dark:text-amber-400 flex items-start gap-2">
            <span className="text-base">💡</span>
            <span><strong>How it works:</strong> Share posters → Friends download ReZ → Earn ₹100/download + 5% commission on their first 3 purchases!</span>
          </p>
        </div>
      </div>

      {/* Promotional Posters */}
      <div className="px-4 mb-6" id="promotional-posters">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share Promotional Posters
          </h3>
          {checkInStarted && (
            <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full animate-pulse">
              Required to complete check-in
            </span>
          )}
        </div>
        <div className={`grid grid-cols-2 gap-3 ${checkInStarted ? 'ring-2 ring-amber-500 rounded-xl p-2' : ''}`}>
          {promotionalPosters.map((poster) => (
            <div
              key={poster.id}
              className="relative rounded-xl overflow-hidden border border-rez-gray-200 dark:border-white/10 group cursor-pointer"
              onClick={() => setSelectedPoster(poster)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${poster.color} opacity-90`} />
              <img
                src={poster.image}
                alt={poster.title}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              />
              <div className="relative p-4 h-32 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{poster.title}</h4>
                  <p className="text-xs text-white/90">{poster.subtitle}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white bg-white/20 px-2 py-1 rounded-full">
                    +₹{poster.shareBonus} bonus
                  </span>
                  <Share2 className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submission History */}
      {submissions.length > 0 && (
        <div className="px-4 mb-6">
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3 flex items-center gap-2">
            <Link2 className="w-4 h-4" />
            Your Submissions
          </h3>
          <div className="space-y-3">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="p-4 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-xl"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">
                      {submission.posterTitle}
                    </h4>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">
                      Submitted: {submission.submittedAt}
                    </p>
                    <a
                      href={submission.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-500 hover:underline flex items-center gap-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link2 className="w-3 h-3" />
                      View Post
                    </a>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {submission.status === 'pending' && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full">
                        <Clock className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                        <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                          Pending
                        </span>
                      </div>
                    )}
                    {submission.status === 'approved' && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                          Approved
                        </span>
                      </div>
                    )}
                    {submission.status === 'rejected' && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-red-500/20 border border-red-500/30 rounded-full">
                        <XCircle className="w-3 h-3 text-red-600 dark:text-red-400" />
                        <span className="text-xs font-semibold text-red-600 dark:text-red-400">
                          Rejected
                        </span>
                      </div>
                    )}
                    <span className="text-xs font-bold text-rez-navy dark:text-white">
                      +₹{submission.shareBonus}
                    </span>
                  </div>
                </div>
                {submission.status === 'approved' && submission.approvedAt && (
                  <div className="mt-2 pt-2 border-t border-rez-gray-200 dark:border-white/10">
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      Approved on {submission.approvedAt} - ₹{submission.shareBonus} credited!
                    </p>
                  </div>
                )}
                {submission.status === 'rejected' && submission.rejectionReason && (
                  <div className="mt-2 pt-2 border-t border-rez-gray-200 dark:border-white/10">
                    <p className="text-xs text-red-600 dark:text-red-400">
                      Reason: {submission.rejectionReason}
                    </p>
                  </div>
                )}
                {submission.status === 'pending' && (
                  <div className="mt-2 pt-2 border-t border-rez-gray-200 dark:border-white/10">
                    <p className="text-xs text-amber-600 dark:text-amber-400">
                      Under review - You'll earn ₹{submission.shareBonus} once approved!
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reward Animation */}
      {showReward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="p-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl text-center animate-bounce mx-4 max-w-sm">
            <Coins className="w-16 h-16 text-white mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">
              +₹{pendingCheckInReward?.coins || checkInRewards.find(r => r.today)?.coins}
            </h3>
            <p className="text-white/90 mb-3">
              Check-in completed successfully! 🎉
            </p>
            <p className="text-sm text-white/80">
              Keep the streak going! Your post is under review for share bonus approval.
            </p>
          </div>
        </div>
      )}

      {/* Share Poster Modal */}
      {selectedPoster && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={() => setSelectedPoster(null)}>
          <div className="bg-white dark:bg-rez-navy rounded-2xl max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            {/* Poster Preview */}
            <div className="relative h-48 rounded-t-2xl overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedPoster.color} opacity-90`} />
              <img
                src={selectedPoster.image}
                alt={selectedPoster.title}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              />
              <div className="relative p-6 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedPoster.title}</h3>
                <p className="text-white/90">{selectedPoster.subtitle}</p>
              </div>
            </div>

            {/* Share Options */}
            <div className="p-6">
              <h4 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
                Share on Social Media
              </h4>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  onClick={() => handleSharePoster(selectedPoster, 'whatsapp')}
                  className="p-3 bg-[#25D366] text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
                >
                  📱 WhatsApp
                </button>
                <button
                  onClick={() => handleSharePoster(selectedPoster, 'facebook')}
                  className="p-3 bg-[#1877F2] text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
                >
                  📘 Facebook
                </button>
                <button
                  onClick={() => handleSharePoster(selectedPoster, 'twitter')}
                  className="p-3 bg-[#1DA1F2] text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
                >
                  🐦 Twitter
                </button>
                <button
                  onClick={() => handleSharePoster(selectedPoster, 'instagram')}
                  className="p-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
                >
                  📸 Instagram
                </button>
              </div>
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl mb-3">
                <p className="text-xs text-emerald-700 dark:text-emerald-400 text-center">
                  <strong>+₹{selectedPoster.shareBonus} bonus</strong> when you submit your post link for approval!
                </p>
              </div>
              <button
                onClick={() => setSelectedPoster(null)}
                className="w-full py-3 bg-rez-gray-100 dark:bg-white/10 rounded-xl font-semibold text-rez-navy dark:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Submit Post URL Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={() => setShowSubmitModal(false)}>
          <div className="bg-white dark:bg-rez-navy rounded-2xl max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Link2 className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-rez-navy dark:text-white">Submit Your Post</h3>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">Paste the link to your shared post</p>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-rez-navy dark:text-white mb-2">
                  Post URL
                </label>
                <input
                  type="url"
                  value={submitUrl}
                  onChange={(e) => setSubmitUrl(e.target.value)}
                  placeholder={`https://${selectedPlatform}.com/your-post-link`}
                  className="w-full px-4 py-3 bg-rez-gray-50 dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-xl text-rez-navy dark:text-white placeholder:text-rez-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl mb-4">
                <p className="text-xs text-blue-700 dark:text-blue-400 flex items-start gap-2">
                  <span className="text-base">ℹ️</span>
                  <span>
                    <strong>How to get your post link:</strong><br />
                    • WhatsApp/Facebook/Twitter: Click share button and copy link<br />
                    • Instagram: Go to your post → ··· → Share → Copy Link
                  </span>
                </p>
              </div>

              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl mb-4">
                <p className="text-xs text-amber-700 dark:text-amber-400 text-center">
                  Your post will be reviewed within 24 hours. You'll earn <strong>₹{selectedPoster?.shareBonus || 0}</strong> once approved!
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowSubmitModal(false);
                    setSubmitUrl('');
                  }}
                  className="flex-1 py-3 bg-rez-gray-100 dark:bg-white/10 rounded-xl font-semibold text-rez-navy dark:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitPost}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold active:scale-95 transition-all"
                >
                  Submit for Review
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Streak Bonuses */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
          Streak Bonuses
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-rez-navy dark:text-white">7-Day Streak</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Complete 7 days</p>
              </div>
            </div>
            <span className="text-sm font-bold text-amber-500">₹100</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-rez-navy dark:text-white">30-Day Streak</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Complete 30 days</p>
              </div>
            </div>
            <span className="text-sm font-bold text-amber-500">₹500</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5 text-pink-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-rez-navy dark:text-white">100-Day Streak</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">Complete 100 days</p>
              </div>
            </div>
            <span className="text-sm font-bold text-amber-500">₹2000</span>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="px-4 py-6">
        <div className="p-4 bg-rez-gray-50 dark:bg-white/5 rounded-2xl">
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
            Pro Tips
          </h3>
          <div className="space-y-2 text-sm text-rez-gray-700 dark:text-gray-300">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-rez-green-500 mt-1.5" />
              <p>Check in at the same time daily to build a habit</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-rez-green-500 mt-1.5" />
              <p>Share posters daily to maximize your affiliate earnings</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-rez-green-500 mt-1.5" />
              <p>Track your affiliate performance to see which posters work best</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-rez-green-500 mt-1.5" />
              <p>Missing even one day resets your streak to zero</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyCheckInPage;
