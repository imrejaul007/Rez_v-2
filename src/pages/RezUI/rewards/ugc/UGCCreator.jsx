import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Video,
  Camera,
  MessageSquare,
  Star,
  TrendingUp,
  Award,
  Users,
  Coins,
  Eye,
  Heart,
  Share2,
  Trophy,
  Sparkles,
  Clock,
  CheckCircle,
  Upload,
  Play,
  Image as ImageIcon,
  FileText,
  ChevronRight
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const UGCCreator = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const contentTypes = [
    {
      id: 'reels',
      title: 'Create Reels',
      icon: Video,
      iconBg: 'bg-red-500/20',
      iconColor: 'text-red-500',
      baseReward: 100,
      bonusReward: 500,
      description: '15-30 sec shopping/experience videos',
      requirements: ['High quality video', 'Show products/stores clearly', 'Add #ReZSaves', 'Engaging content'],
      performance: {
        avgViews: 2500,
        avgLikes: 350,
        avgCoins: 180
      },
      status: 'active'
    },
    {
      id: 'photos',
      title: 'Upload Photos',
      icon: Camera,
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-500',
      baseReward: 30,
      bonusReward: 150,
      description: 'Store fronts, products, ambiance shots',
      requirements: ['Clear lighting', 'Good composition', 'HD quality', 'No blur'],
      performance: {
        avgViews: 800,
        avgLikes: 120,
        avgCoins: 45
      },
      status: 'active'
    },
    {
      id: 'reviews',
      title: 'Write Reviews',
      icon: MessageSquare,
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-500',
      baseReward: 50,
      bonusReward: 200,
      description: 'Detailed product/store experiences',
      requirements: ['Minimum 100 words', 'Include pros & cons', 'Helpful & honest', 'Add photos (optional)'],
      performance: {
        avgViews: 450,
        avgLikes: 85,
        avgCoins: 75
      },
      status: 'active'
    },
    {
      id: 'stories',
      title: 'Share Stories',
      icon: ImageIcon,
      iconBg: 'bg-orange-500/20',
      iconColor: 'text-orange-500',
      baseReward: 20,
      bonusReward: 100,
      description: 'Quick shopping moments & finds',
      requirements: ['24-hour content', 'Engaging visuals', 'Add location/store tags'],
      performance: {
        avgViews: 1200,
        avgLikes: 180,
        avgCoins: 35
      },
      status: 'active'
    }
  ];

  const myContent = [
    {
      id: 1,
      type: 'reel',
      title: 'Nike Store Shopping Haul',
      thumbnail: '👟',
      views: 3200,
      likes: 456,
      shares: 89,
      comments: 34,
      earned: 220,
      status: 'published',
      publishedDate: '2 days ago',
      performance: 'trending'
    },
    {
      id: 2,
      type: 'photo',
      title: 'Starbucks New Drink',
      thumbnail: '☕',
      views: 890,
      likes: 123,
      shares: 12,
      comments: 8,
      earned: 50,
      status: 'published',
      publishedDate: '5 days ago',
      performance: 'good'
    },
    {
      id: 3,
      type: 'review',
      title: 'Zara Summer Collection Review',
      thumbnail: '👗',
      views: 520,
      likes: 94,
      shares: 18,
      comments: 15,
      earned: 85,
      status: 'published',
      publishedDate: '1 week ago',
      performance: 'good'
    },
    {
      id: 4,
      type: 'reel',
      title: 'Weekend Food Fest Highlights',
      thumbnail: '🍔',
      views: 5600,
      likes: 789,
      shares: 156,
      comments: 67,
      earned: 450,
      status: 'featured',
      publishedDate: '3 days ago',
      performance: 'viral',
      badge: 'Featured'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Priya Sharma', avatar: '👩', content: 234, coins: 45600, badge: '🏆' },
    { rank: 2, name: 'Rahul Kumar', avatar: '👨', content: 198, coins: 38900, badge: '🥈' },
    { rank: 3, name: 'Anjali Patel', avatar: '👩', content: 176, coins: 32400, badge: '🥉' },
    { rank: 4, name: 'You', avatar: '😊', content: 87, coins: 12340, badge: '', highlight: true }
  ];

  const tabs = [
    { id: 'all', label: 'Create', count: contentTypes.length },
    { id: 'my-content', label: 'My Content', count: myContent.length },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy }
  ];

  const myStats = {
    totalContent: 87,
    totalViews: 145600,
    totalLikes: 23400,
    totalEarned: 12340,
    thisMonthEarned: 2450,
    currentRank: 4,
    topPerformer: true
  };

  const performanceColors = {
    'viral': 'text-red-500 bg-red-500/10 border-red-500/30',
    'trending': 'text-orange-500 bg-orange-500/10 border-orange-500/30',
    'good': 'text-green-500 bg-green-500/10 border-green-500/30',
    'average': 'text-blue-500 bg-blue-500/10 border-blue-500/30'
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
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">UGC Creator Hub</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Create content, earn rewards</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <Coins className="w-4 h-4 text-emerald-500" />
            <span className="text-body-sm font-bold text-emerald-600 dark:text-emerald-400">{myStats.totalEarned}</span>
          </div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="px-4 py-6">
        <div className="p-5 rounded-rez-xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 dark:from-purple-500/10 dark:via-pink-500/10 dark:to-red-500/10 border border-purple-500/30 dark:border-purple-500/30">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-3 rounded-rez-lg bg-white dark:bg-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Video className="w-4 h-4 text-purple-500" />
                <span className="text-caption text-rez-gray-600 dark:text-gray-400">Content</span>
              </div>
              <p className="text-h3 font-poppins text-rez-navy dark:text-white">{myStats.totalContent}</p>
            </div>
            <div className="p-3 rounded-rez-lg bg-white dark:bg-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Eye className="w-4 h-4 text-blue-500" />
                <span className="text-caption text-rez-gray-600 dark:text-gray-400">Total Views</span>
              </div>
              <p className="text-h3 font-poppins text-rez-navy dark:text-white">{(myStats.totalViews / 1000).toFixed(1)}K</p>
            </div>
            <div className="p-3 rounded-rez-lg bg-white dark:bg-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-caption text-rez-gray-600 dark:text-gray-400">Total Likes</span>
              </div>
              <p className="text-h3 font-poppins text-rez-navy dark:text-white">{(myStats.totalLikes / 1000).toFixed(1)}K</p>
            </div>
            <div className="p-3 rounded-rez-lg bg-white dark:bg-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span className="text-caption text-rez-gray-600 dark:text-gray-400">Rank</span>
              </div>
              <p className="text-h3 font-poppins text-rez-navy dark:text-white">#{myStats.currentRank}</p>
            </div>
          </div>
          <div className="p-3 rounded-rez-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
            <div className="flex items-center justify-between">
              <span className="text-body-sm text-rez-navy dark:text-white">This Month Earnings</span>
              <span className="text-h4 font-poppins text-emerald-600 dark:text-emerald-400">+{myStats.thisMonthEarned}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-rez-lg whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 hover:bg-rez-gray-200 dark:hover:bg-white/20'
              }`}
            >
              {tab.icon && <tab.icon className="w-4 h-4" />}
              {tab.label} {tab.count !== undefined && `(${tab.count})`}
            </button>
          ))}
        </div>
      </div>

      {/* Create Content Tab */}
      {activeTab === 'all' && (
        <div className="px-4 space-y-4">
          {contentTypes.map((content) => (
            <div
              key={content.id}
              className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 shadow-rez-card hover:shadow-rez-green transition-all"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-rez-lg ${content.iconBg} flex items-center justify-center shrink-0`}>
                  <content.icon className={`w-7 h-7 ${content.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-1">{content.title}</h3>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">{content.description}</p>
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-4 p-3 rounded-rez-md bg-rez-gray-50 dark:bg-white/5">
                <p className="text-caption font-medium text-rez-navy dark:text-white mb-2">Requirements:</p>
                <div className="space-y-1">
                  {content.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-caption text-rez-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Avg */}
              <div className="mb-4 p-3 rounded-rez-md bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30">
                <p className="text-caption font-medium text-blue-900 dark:text-blue-300 mb-2">
                  <TrendingUp className="w-3.5 h-3.5 inline mr-1" />
                  Average Performance
                </p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-h5 font-poppins text-blue-600 dark:text-blue-400">{content.performance.avgViews.toLocaleString()}</p>
                    <p className="text-[10px] text-blue-600 dark:text-blue-400">Views</p>
                  </div>
                  <div>
                    <p className="text-h5 font-poppins text-blue-600 dark:text-blue-400">{content.performance.avgLikes}</p>
                    <p className="text-[10px] text-blue-600 dark:text-blue-400">Likes</p>
                  </div>
                  <div>
                    <p className="text-h5 font-poppins text-blue-600 dark:text-blue-400">{content.performance.avgCoins}</p>
                    <p className="text-[10px] text-blue-600 dark:text-blue-400">Coins</p>
                  </div>
                </div>
              </div>

              {/* Rewards */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Coins className="w-5 h-5 text-emerald-500" />
                    <span className="text-h5 font-poppins text-emerald-600 dark:text-emerald-400">
                      +{content.baseReward}
                    </span>
                  </div>
                  <div className="px-2 py-1 rounded-rez-md bg-amber-500/20 border border-amber-500/30">
                    <div className="flex items-center gap-1">
                      <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        Up to +{content.bonusReward}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="px-5 py-2 rounded-rez-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold transition-all flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Create
                </button>
              </div>
            </div>
          ))}

          {/* Tips Section */}
          <div className="p-5 rounded-rez-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-500/10 dark:to-orange-500/10 border border-amber-200 dark:border-amber-500/30">
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Tips to Maximize Earnings
            </h3>
            <ul className="space-y-2 text-caption text-rez-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span>Post during peak hours (6-9 PM) for maximum visibility</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span>Use trending hashtags and add location tags</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span>Engage with other creators for better reach</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span>High-quality content gets featured and earns 3x rewards</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* My Content Tab */}
      {activeTab === 'my-content' && (
        <div className="px-4 space-y-4">
          {myContent.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 shadow-rez-card hover:shadow-rez-green transition-all"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-rez-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-3xl shrink-0">
                  {item.thumbnail}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        {item.badge}
                      </span>
                    )}
                    {item.performance && (
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${performanceColors[item.performance]}`}>
                        {item.performance.charAt(0).toUpperCase() + item.performance.slice(1)}
                      </span>
                    )}
                  </div>
                  <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-1">{item.title}</h3>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">{item.publishedDate}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="p-2 rounded-rez-md bg-rez-gray-50 dark:bg-white/5 text-center">
                  <Eye className="w-4 h-4 mx-auto mb-1 text-blue-500" />
                  <p className="text-caption font-bold text-rez-navy dark:text-white">{item.views.toLocaleString()}</p>
                  <p className="text-[10px] text-rez-gray-500 dark:text-gray-500">Views</p>
                </div>
                <div className="p-2 rounded-rez-md bg-rez-gray-50 dark:bg-white/5 text-center">
                  <Heart className="w-4 h-4 mx-auto mb-1 text-red-500" />
                  <p className="text-caption font-bold text-rez-navy dark:text-white">{item.likes}</p>
                  <p className="text-[10px] text-rez-gray-500 dark:text-gray-500">Likes</p>
                </div>
                <div className="p-2 rounded-rez-md bg-rez-gray-50 dark:bg-white/5 text-center">
                  <Share2 className="w-4 h-4 mx-auto mb-1 text-green-500" />
                  <p className="text-caption font-bold text-rez-navy dark:text-white">{item.shares}</p>
                  <p className="text-[10px] text-rez-gray-500 dark:text-gray-500">Shares</p>
                </div>
                <div className="p-2 rounded-rez-md bg-emerald-50 dark:bg-emerald-500/10 text-center">
                  <Coins className="w-4 h-4 mx-auto mb-1 text-emerald-500" />
                  <p className="text-caption font-bold text-emerald-600 dark:text-emerald-400">+{item.earned}</p>
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400">Earned</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-rez-lg bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white font-medium hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-all">
                  View Analytics
                </button>
                <button className="flex-1 py-2 rounded-rez-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium transition-all">
                  Boost Post
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Leaderboard Tab */}
      {activeTab === 'leaderboard' && (
        <div className="px-4 space-y-4">
          {/* Top 3 Podium */}
          <div className="p-5 rounded-rez-xl bg-gradient-to-br from-amber-500/10 via-yellow-500/10 to-orange-500/10 dark:from-amber-500/10 dark:via-yellow-500/10 dark:to-orange-500/10 border border-amber-500/30 dark:border-amber-500/30">
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-4 text-center flex items-center justify-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              Top Creators This Month
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {leaderboard.slice(0, 3).map((creator) => (
                <div key={creator.rank} className="text-center">
                  <div className="text-4xl mb-2">{creator.badge}</div>
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                    {creator.avatar}
                  </div>
                  <p className="text-caption font-bold text-rez-navy dark:text-white mb-1">{creator.name}</p>
                  <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">{creator.content} posts</p>
                  <p className="text-caption font-bold text-emerald-600 dark:text-emerald-400">{creator.coins.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Full Leaderboard */}
          <div className="space-y-2">
            {leaderboard.map((creator) => (
              <div
                key={creator.rank}
                className={`p-4 rounded-rez-lg ${
                  creator.highlight
                    ? 'bg-emerald-50 dark:bg-emerald-500/10 border-2 border-emerald-500'
                    : 'bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-h4 font-poppins text-rez-gray-400 dark:text-gray-400 w-8 text-center">
                    #{creator.rank}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">
                    {creator.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-body-sm font-bold text-rez-navy dark:text-white">{creator.name}</p>
                      {creator.badge && <span>{creator.badge}</span>}
                    </div>
                    <p className="text-caption text-rez-gray-600 dark:text-gray-400">{creator.content} posts</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Coins className="w-4 h-4 text-emerald-500" />
                      <p className="text-h5 font-poppins text-emerald-600 dark:text-emerald-400">
                        {creator.coins.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Climb the Ranks CTA */}
          <div className="p-5 rounded-rez-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-200 dark:border-purple-500/30 text-center">
            <h3 className="text-h4 font-poppins text-rez-navy dark:text-white mb-2">Climb the Ranks!</h3>
            <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-4">
              Top 3 creators win exclusive rewards every month
            </p>
            <button className="px-6 py-2.5 rounded-rez-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold transition-all">
              Create More Content
            </button>
          </div>
        </div>
      )}

      <BottomNavManager />
    </div>
  );
};

export default UGCCreator;
