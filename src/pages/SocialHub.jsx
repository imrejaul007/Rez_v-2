import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Share2,
  ThumbsUp,
  MessageCircle,
  Camera,
  Video,
  Heart,
  Trophy,
  TrendingUp,
  Users,
  Coins,
  Award,
  CheckCircle,
  Clock,
  ChevronRight,
  Sparkles,
  Star,
  Gift
} from 'lucide-react';
import BottomNavManager from '../components/layout/BottomNavManager';

const SocialHub = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const socialActivities = [
    {
      id: 1,
      type: 'vote-poll',
      title: 'Vote: Best Coffee Shop?',
      icon: ThumbsUp,
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-500',
      category: 'Poll',
      reward: 10,
      description: 'Help the community decide',
      options: ['Starbucks', 'CCD', 'Blue Tokai', 'Third Wave'],
      participants: 1247,
      timeLeft: '12h left',
      status: 'active',
      completed: false
    },
    {
      id: 2,
      type: 'comment',
      title: 'Share Your Experience at Pizza Hut',
      icon: MessageCircle,
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-500',
      category: 'Comment',
      reward: 15,
      description: 'Quality comments earn more',
      store: 'Pizza Hut, Indiranagar',
      comments: 234,
      timeLeft: 'Ongoing',
      status: 'active',
      completed: false
    },
    {
      id: 3,
      type: 'share-offer',
      title: 'Share: 50% Off at Zara',
      icon: Share2,
      iconBg: 'bg-pink-500/20',
      iconColor: 'text-pink-500',
      category: 'Share',
      reward: 25,
      bonusReward: 50,
      description: 'Friends must view to earn',
      store: 'Zara',
      deal: '50% Off',
      shares: 89,
      views: 456,
      status: 'active',
      completed: false
    },
    {
      id: 4,
      type: 'upload-photo',
      title: 'Upload Store Photo',
      icon: Camera,
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-500',
      category: 'Photo',
      reward: 30,
      bonusReward: 100,
      description: 'High quality photos earn bonus',
      requirements: ['Clear lighting', 'Store front/interior', 'No blur'],
      status: 'active',
      completed: false
    },
    {
      id: 5,
      type: 'create-reel',
      title: 'Create Shopping Reel',
      icon: Video,
      iconBg: 'bg-red-500/20',
      iconColor: 'text-red-500',
      category: 'UGC',
      reward: 100,
      bonusReward: 200,
      description: 'Best reels get featured',
      requirements: ['15-30 sec video', 'Show products', 'Add #ReZSaves'],
      featured: true,
      views: 0,
      likes: 0,
      status: 'active',
      completed: false
    },
    {
      id: 6,
      type: 'rate-event',
      title: 'Rate: Weekend Food Fest',
      icon: Heart,
      iconBg: 'bg-orange-500/20',
      iconColor: 'text-orange-500',
      category: 'Rating',
      reward: 20,
      description: 'Event attendees only',
      event: 'Weekend Food Fest',
      location: 'Phoenix Mall',
      status: 'active',
      requiresAttendance: true,
      completed: false
    },
    {
      id: 7,
      type: 'vote-poll',
      title: 'Vote: Favorite Cuisine',
      icon: ThumbsUp,
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-500',
      category: 'Poll',
      reward: 10,
      description: 'Completed',
      options: ['Italian', 'Chinese', 'Indian', 'Mexican'],
      participants: 2341,
      timeLeft: 'Completed',
      status: 'completed',
      completed: true,
      earnedCoins: 10
    }
  ];

  const tabs = [
    { id: 'all', label: 'All', count: socialActivities.filter(a => !a.completed).length },
    { id: 'vote', label: 'Polls', count: socialActivities.filter(a => a.type === 'vote-poll' && !a.completed).length },
    { id: 'comment', label: 'Comments', count: socialActivities.filter(a => a.type === 'comment' && !a.completed).length },
    { id: 'share', label: 'Share', count: socialActivities.filter(a => a.type === 'share-offer' && !a.completed).length },
    { id: 'ugc', label: 'Create', count: socialActivities.filter(a => (a.type === 'upload-photo' || a.type === 'create-reel') && !a.completed).length },
    { id: 'completed', label: 'Done', count: socialActivities.filter(a => a.completed).length }
  ];

  const filteredActivities = activeTab === 'all'
    ? socialActivities.filter(a => !a.completed)
    : activeTab === 'completed'
    ? socialActivities.filter(a => a.completed)
    : activeTab === 'vote'
    ? socialActivities.filter(a => a.type === 'vote-poll' && !a.completed)
    : activeTab === 'comment'
    ? socialActivities.filter(a => a.type === 'comment' && !a.completed)
    : activeTab === 'share'
    ? socialActivities.filter(a => a.type === 'share-offer' && !a.completed)
    : socialActivities.filter(a => (a.type === 'upload-photo' || a.type === 'create-reel') && !a.completed);

  const myStats = {
    totalEarned: 1450,
    activitiesCompleted: 87,
    reelsCreated: 12,
    photosUploaded: 23,
    pollsVoted: 34,
    sharesCount: 18,
    currentStreak: 7
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">Social & Community</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Engage, share, create & earn</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <Coins className="w-4 h-4 text-emerald-500" />
            <span className="text-body-sm font-bold text-emerald-600 dark:text-emerald-400">{myStats.totalEarned}</span>
          </div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="px-4 py-6">
        <div className="p-5 rounded-rez-xl bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 dark:from-pink-500/10 dark:via-purple-500/10 dark:to-blue-500/10 border border-pink-500/30 dark:border-pink-500/30">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <p className="text-h4 font-poppins text-rez-navy dark:text-white">{myStats.activitiesCompleted}</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Activities</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <p className="text-h4 font-poppins text-rez-navy dark:text-white">{myStats.currentStreak}</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Day Streak</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <p className="text-h4 font-poppins text-rez-navy dark:text-white">{myStats.totalEarned}</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Coins Earned</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mb-6">
        <h2 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3">Quick Actions</h2>
        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: Share2, label: 'Share', coins: '20-50', color: 'text-pink-500', bg: 'bg-pink-500/20' },
            { icon: ThumbsUp, label: 'Vote', coins: '10', color: 'text-blue-500', bg: 'bg-blue-500/20' },
            { icon: MessageCircle, label: 'Comment', coins: '15', color: 'text-purple-500', bg: 'bg-purple-500/20' },
            { icon: Camera, label: 'Upload', coins: '25-100', color: 'text-green-500', bg: 'bg-green-500/20' }
          ].map((action, idx) => (
            <div
              key={idx}
              className="p-3 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 text-center hover:border-emerald-300 dark:hover:border-emerald-500/30 transition-all cursor-pointer"
            >
              <div className={`w-12 h-12 mx-auto mb-2 rounded-full ${action.bg} flex items-center justify-center`}>
                <action.icon className={`w-6 h-6 ${action.color}`} />
              </div>
              <p className="text-caption text-rez-navy dark:text-white font-medium mb-1">{action.label}</p>
              <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">+{action.coins}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-rez-lg whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-pink-500 text-white'
                  : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 hover:bg-rez-gray-200 dark:hover:bg-white/20'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      {/* Activities List */}
      <div className="px-4 space-y-4">
        {filteredActivities.map((activity) => (
          <div
            key={activity.id}
            className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 shadow-rez-card hover:shadow-rez-green transition-all"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-14 h-14 rounded-rez-lg ${activity.iconBg} flex items-center justify-center shrink-0`}>
                <activity.icon className={`w-7 h-7 ${activity.iconColor}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full bg-rez-gray-100 dark:bg-white/10 text-xs font-medium text-rez-gray-600 dark:text-gray-400">
                    {activity.category}
                  </span>
                  {activity.featured && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                  {activity.completed && (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  )}
                </div>
                <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-1">{activity.title}</h3>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">{activity.description}</p>
              </div>
            </div>

            {/* Details */}
            {activity.store && (
              <div className="mb-3 p-3 rounded-rez-md bg-rez-gray-50 dark:bg-white/5">
                <p className="text-body-sm text-rez-navy dark:text-white">{activity.store}</p>
                {activity.deal && (
                  <p className="text-caption text-emerald-600 dark:text-emerald-400 font-bold">{activity.deal}</p>
                )}
              </div>
            )}

            {activity.requirements && (
              <div className="mb-3 space-y-1">
                {activity.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-caption text-rez-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Stats */}
            <div className="flex items-center gap-4 mb-4 text-caption text-rez-gray-600 dark:text-gray-400">
              {activity.participants && (
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{activity.participants.toLocaleString()} votes</span>
                </div>
              )}
              {activity.comments && (
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{activity.comments} comments</span>
                </div>
              )}
              {activity.shares !== undefined && (
                <div className="flex items-center gap-1">
                  <Share2 className="w-4 h-4" />
                  <span>{activity.shares} shares</span>
                </div>
              )}
              {activity.timeLeft && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{activity.timeLeft}</span>
                </div>
              )}
            </div>

            {/* Rewards */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Coins className="w-5 h-5 text-emerald-500" />
                  <span className="text-h5 font-poppins text-emerald-600 dark:text-emerald-400">
                    +{activity.reward}
                  </span>
                </div>
                {activity.bonusReward && (
                  <div className="px-2 py-1 rounded-rez-md bg-amber-500/20 border border-amber-500/30">
                    <div className="flex items-center gap-1">
                      <Gift className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        Up to +{activity.bonusReward}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              {activity.completed ? (
                <button
                  className="px-5 py-2 rounded-rez-lg font-semibold bg-rez-gray-200 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 cursor-not-allowed"
                  disabled
                >
                  ✓ Done
                </button>
              ) : (
                <Link
                  to={`/social/${activity.type}/${activity.id}`}
                  className="px-5 py-2 rounded-rez-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white transition-all"
                >
                  Start
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredActivities.length === 0 && (
        <div className="px-4 py-12 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-rez-gray-100 dark:bg-white/10 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-rez-gray-400 dark:text-gray-400" />
          </div>
          <h3 className="text-h4 font-poppins text-rez-navy dark:text-white mb-2">All Caught Up!</h3>
          <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
            Check back later for new activities
          </p>
        </div>
      )}

      {/* CTA Section */}
      <div className="px-4 py-6">
        <div className="p-6 rounded-rez-xl bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-500/10 dark:to-purple-500/10 border border-pink-200 dark:border-pink-500/30 text-center">
          <h3 className="text-h4 font-poppins text-rez-navy dark:text-white mb-2">Create & Earn More</h3>
          <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-4">
            Top creators earn up to 10,000 coins/month
          </p>
          <div className="flex items-center justify-center gap-4 text-caption text-rez-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Video className="w-4 h-4" />
              <span>Create reels</span>
            </div>
            <div className="flex items-center gap-1">
              <Camera className="w-4 h-4" />
              <span>Upload photos</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              <span>Write reviews</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialHub;
