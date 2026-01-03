import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Star,
  CheckCircle,
  Clock,
  Coins,
  Award,
  TrendingUp,
  Users,
  Gift,
  ShoppingBag,
  MessageSquare,
  Camera,
  Video,
  Trophy,
  Sparkles,
  ChevronRight,
  Heart,
  Search
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const BrandTasks = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const brandMissions = [
    {
      id: 1,
      brand: 'Starbucks',
      logo: '☕',
      bgColor: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
      tasks: [
        {
          id: 'sb-1',
          type: 'review',
          title: 'Review Your Latest Order',
          reward: 50,
          brandedReward: 30,
          difficulty: 'Easy',
          timeEstimate: '2 mins',
          description: 'Share your experience with coffee quality, service & ambiance',
          requirements: ['Must have ordered in last 7 days', 'Minimum 50 words', 'Include photo (optional)'],
          status: 'available',
          completed: 0,
          total: 1
        },
        {
          id: 'sb-2',
          type: 'quiz',
          title: 'Coffee Connoisseur Quiz',
          reward: 30,
          brandedReward: 20,
          difficulty: 'Medium',
          timeEstimate: '5 mins',
          description: 'Test your knowledge about coffee varieties & brewing methods',
          requirements: ['10 questions', '70% to pass', 'Unlimited attempts'],
          status: 'available',
          completed: 0,
          total: 1
        },
        {
          id: 'sb-3',
          type: 'content',
          title: 'Create a Coffee Reel',
          reward: 150,
          brandedReward: 100,
          difficulty: 'Hard',
          timeEstimate: '15 mins',
          featured: true,
          description: 'Create a 15-30 sec reel showcasing your Starbucks experience',
          requirements: ['15-30 seconds', 'Show products clearly', 'Use #StarbucksReZ', 'High quality video'],
          status: 'available',
          completed: 0,
          total: 1
        }
      ]
    },
    {
      id: 2,
      brand: 'Nike',
      logo: '👟',
      bgColor: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30',
      tasks: [
        {
          id: 'nk-1',
          type: 'mystery-shop',
          title: 'Mystery Shopper Mission',
          reward: 200,
          brandedReward: 150,
          difficulty: 'Medium',
          timeEstimate: '30 mins',
          featured: true,
          description: 'Visit Nike store, evaluate service & share detailed feedback',
          requirements: ['Visit designated store', 'Note staff behavior', 'Check stock availability', 'Photo proof required'],
          status: 'available',
          completed: 0,
          total: 1,
          premium: true
        },
        {
          id: 'nk-2',
          type: 'review',
          title: 'Rate Your Nike Shoes',
          reward: 60,
          brandedReward: 40,
          difficulty: 'Easy',
          timeEstimate: '3 mins',
          description: 'Share your experience with comfort, durability & style',
          requirements: ['Must own Nike product', 'Rate 5 attributes', 'Add photo'],
          status: 'available',
          completed: 0,
          total: 1
        },
        {
          id: 'nk-3',
          type: 'sample',
          title: 'Try New Running Shoe',
          reward: 100,
          brandedReward: 300,
          difficulty: 'Easy',
          timeEstimate: '1 week',
          description: 'Get sample product, use for 1 week, then review',
          requirements: ['Application required', 'Limited slots (50)', 'Detailed review after trial', 'Return not needed'],
          status: 'apply',
          completed: 0,
          total: 1,
          slots: { available: 12, total: 50 }
        }
      ]
    },
    {
      id: 3,
      brand: 'Zara',
      logo: '👗',
      bgColor: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      tasks: [
        {
          id: 'zr-1',
          type: 'feedback',
          title: 'Style Preference Survey',
          reward: 40,
          brandedReward: 25,
          difficulty: 'Easy',
          timeEstimate: '5 mins',
          description: 'Help us understand your fashion preferences',
          requirements: ['10 questions', 'Include size preferences', 'Color choices'],
          status: 'available',
          completed: 0,
          total: 1
        },
        {
          id: 'zr-2',
          type: 'content',
          title: 'Fashion Lookbook Post',
          reward: 120,
          brandedReward: 80,
          difficulty: 'Medium',
          timeEstimate: '20 mins',
          description: 'Create outfit combination using Zara pieces',
          requirements: ['Minimum 3 Zara items', 'Clear photos', 'Style description', 'Post on social'],
          status: 'available',
          completed: 0,
          total: 1
        }
      ]
    },
    {
      id: 4,
      brand: 'McDonald\'s',
      logo: '🍔',
      bgColor: 'from-yellow-500/20 to-red-500/20',
      borderColor: 'border-yellow-500/30',
      tasks: [
        {
          id: 'mc-1',
          type: 'review',
          title: 'Rate Your Meal',
          reward: 30,
          brandedReward: 20,
          difficulty: 'Easy',
          timeEstimate: '2 mins',
          description: 'Quick feedback on food quality & service',
          requirements: ['Recent purchase', 'Rate taste, service, cleanliness'],
          status: 'completed',
          completed: 1,
          total: 1,
          earnedCoins: 50
        },
        {
          id: 'mc-2',
          type: 'quiz',
          title: 'Menu Master Challenge',
          reward: 25,
          brandedReward: 15,
          difficulty: 'Easy',
          timeEstimate: '3 mins',
          description: 'Test your knowledge of McDonald\'s menu',
          requirements: ['8 questions', '60% to pass'],
          status: 'available',
          completed: 0,
          total: 1
        }
      ]
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Brands', count: brandMissions.reduce((acc, b) => acc + b.tasks.filter(t => t.status !== 'completed').length, 0) },
    { id: 'featured', label: 'Featured', count: brandMissions.reduce((acc, b) => acc + b.tasks.filter(t => t.featured && t.status !== 'completed').length, 0) },
    { id: 'high-reward', label: 'High Reward', count: brandMissions.reduce((acc, b) => acc + b.tasks.filter(t => t.reward >= 100 && t.status !== 'completed').length, 0) },
    { id: 'easy', label: 'Quick Win', count: brandMissions.reduce((acc, b) => acc + b.tasks.filter(t => t.difficulty === 'Easy' && t.status !== 'completed').length, 0) },
    { id: 'completed', label: 'Done', count: brandMissions.reduce((acc, b) => acc + b.tasks.filter(t => t.status === 'completed').length, 0) }
  ];

  const filteredBrands = brandMissions
    .map(brand => ({
      ...brand,
      tasks: brand.tasks.filter(task => {
        // Filter by tab
        let tabMatch = true;
        if (activeTab === 'featured') tabMatch = task.featured && task.status !== 'completed';
        else if (activeTab === 'high-reward') tabMatch = task.reward >= 100 && task.status !== 'completed';
        else if (activeTab === 'easy') tabMatch = task.difficulty === 'Easy' && task.status !== 'completed';
        else if (activeTab === 'completed') tabMatch = task.status === 'completed';
        else if (activeTab === 'all') tabMatch = task.status !== 'completed';

        // Filter by search
        const searchMatch = searchQuery === '' ||
          brand.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.title.toLowerCase().includes(searchQuery.toLowerCase());

        return tabMatch && searchMatch;
      })
    }))
    .filter(brand => brand.tasks.length > 0);

  const myStats = {
    totalEarned: 2340,
    tasksCompleted: 45,
    brandsPartnered: 12,
    currentStreak: 5
  };

  const taskTypeIcons = {
    'review': MessageSquare,
    'quiz': Trophy,
    'content': Video,
    'mystery-shop': Search,
    'feedback': Star,
    'sample': Gift
  };

  const difficultyColors = {
    'Easy': 'text-green-500 bg-green-500/10 border-green-500/30',
    'Medium': 'text-orange-500 bg-orange-500/10 border-orange-500/30',
    'Hard': 'text-red-500 bg-red-500/10 border-red-500/30'
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
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">Brand Tasks</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Complete missions, earn rewards</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <Coins className="w-4 h-4 text-emerald-500" />
            <span className="text-body-sm font-bold text-emerald-600 dark:text-emerald-400">{myStats.totalEarned}</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-400 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search brands or tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 text-rez-navy dark:text-white placeholder:text-rez-gray-400 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="px-4 py-6">
        <div className="p-5 rounded-rez-xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 border border-blue-500/30 dark:border-blue-500/30">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <p className="text-h4 font-poppins text-rez-navy dark:text-white">{myStats.tasksCompleted}</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Completed</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <p className="text-h4 font-poppins text-rez-navy dark:text-white">{myStats.brandsPartnered}</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Brands</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <p className="text-h4 font-poppins text-rez-navy dark:text-white">{myStats.totalEarned}</p>
              <p className="text-caption text-rez-gray-600 dark:text-gray-400">Total Earned</p>
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
              className={`px-4 py-2 rounded-rez-lg whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 hover:bg-rez-gray-200 dark:hover:bg-white/20'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      {/* Brands & Tasks List */}
      <div className="px-4 space-y-6">
        {filteredBrands.map((brand) => (
          <div key={brand.id} className="space-y-3">
            {/* Brand Header */}
            <div className={`p-4 rounded-rez-xl bg-gradient-to-r ${brand.bgColor} border ${brand.borderColor}`}>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-rez-lg bg-white dark:bg-white/90 flex items-center justify-center text-3xl">
                  {brand.logo}
                </div>
                <div className="flex-1">
                  <h2 className="text-h4 font-poppins text-rez-navy dark:text-white">{brand.brand}</h2>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                    {brand.tasks.length} {brand.tasks.length === 1 ? 'task' : 'tasks'} available
                  </p>
                </div>
              </div>
            </div>

            {/* Tasks */}
            {brand.tasks.map((task) => {
              const TaskIcon = taskTypeIcons[task.type];
              return (
                <div
                  key={task.id}
                  className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 shadow-rez-card hover:shadow-rez-green transition-all"
                >
                  {/* Task Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-rez-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                      <TaskIcon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${difficultyColors[task.difficulty]}`}>
                          {task.difficulty}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-rez-gray-100 dark:bg-white/10 text-xs font-medium text-rez-gray-600 dark:text-gray-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {task.timeEstimate}
                        </span>
                        {task.featured && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                        {task.premium && (
                          <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-xs font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            Premium
                          </span>
                        )}
                        {task.status === 'completed' && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-1">{task.title}</h3>
                      <p className="text-caption text-rez-gray-600 dark:text-gray-400">{task.description}</p>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="mb-4 p-3 rounded-rez-md bg-rez-gray-50 dark:bg-white/5">
                    <p className="text-caption font-medium text-rez-navy dark:text-white mb-2">Requirements:</p>
                    <div className="space-y-1">
                      {task.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-caption text-rez-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Slots Info (for sample tasks) */}
                  {task.slots && (
                    <div className="mb-4 p-3 rounded-rez-md bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-caption font-medium text-orange-900 dark:text-orange-300">Limited Slots</span>
                        <span className="text-caption font-bold text-orange-600 dark:text-orange-400">
                          {task.slots.available}/{task.slots.total} left
                        </span>
                      </div>
                      <div className="h-2 bg-rez-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                          style={{ width: `${(task.slots.available / task.slots.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Rewards */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Coins className="w-5 h-5 text-emerald-500" />
                        <div className="flex flex-col">
                          <span className="text-h5 font-poppins text-emerald-600 dark:text-emerald-400">
                            +{task.reward}
                          </span>
                          <span className="text-[10px] text-rez-gray-500 dark:text-gray-500">ReZ Coins</span>
                        </div>
                      </div>
                      {task.brandedReward > 0 && (
                        <div className="flex items-center gap-1">
                          <ShoppingBag className="w-5 h-5 text-purple-500" />
                          <div className="flex flex-col">
                            <span className="text-h5 font-poppins text-purple-600 dark:text-purple-400">
                              +{task.brandedReward}
                            </span>
                            <span className="text-[10px] text-rez-gray-500 dark:text-gray-500">{brand.brand} Coins</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <button
                      className={`px-5 py-2 rounded-rez-lg font-semibold transition-all ${
                        task.status === 'completed'
                          ? 'bg-rez-gray-200 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 cursor-not-allowed'
                          : task.status === 'apply'
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white'
                          : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                      }`}
                      disabled={task.status === 'completed'}
                    >
                      {task.status === 'completed' ? '✓ Done' : task.status === 'apply' ? 'Apply Now' : 'Start Task'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredBrands.length === 0 && (
        <div className="px-4 py-12 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-rez-gray-100 dark:bg-white/10 flex items-center justify-center">
            <Search className="w-10 h-10 text-rez-gray-400 dark:text-gray-400" />
          </div>
          <h3 className="text-h4 font-poppins text-rez-navy dark:text-white mb-2">No Tasks Found</h3>
          <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
            Try adjusting your filters or search query
          </p>
        </div>
      )}

      {/* CTA Section */}
      <div className="px-4 py-6">
        <div className="p-6 rounded-rez-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-200 dark:border-blue-500/30 text-center">
          <h3 className="text-h4 font-poppins text-rez-navy dark:text-white mb-2">Earn from Your Favorite Brands</h3>
          <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-4">
            Complete tasks, earn ReZ + Branded Coins
          </p>
          <div className="flex items-center justify-center gap-4 text-caption text-rez-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <MessageSquare className="w-4 h-4" />
              <span>Reviews</span>
            </div>
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4" />
              <span>Quizzes</span>
            </div>
            <div className="flex items-center gap-1">
              <Video className="w-4 h-4" />
              <span>Content</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default BrandTasks;
