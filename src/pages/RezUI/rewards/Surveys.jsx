import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Coins,
  TrendingUp,
  Award,
  CheckCircle,
  Users,
  Building2,
  Sparkles,
  Filter,
  ChevronRight,
  Target,
  BarChart3,
  FileText
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const Surveys = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Surveys', count: 45 },
    { id: 'trending', name: 'Trending', count: 12 },
    { id: 'high-reward', name: 'High Reward', count: 8 },
    { id: 'quick', name: 'Quick Win', count: 15 },
  ];

  const surveys = [
    {
      id: 1,
      title: 'Shopping Habits & Preferences',
      sponsor: 'Amazon',
      logo: '📦',
      category: 'Shopping',
      duration: '5 mins',
      reward: 150,
      questions: 12,
      trending: true,
      difficulty: 'Easy',
      bgColor: 'from-orange-500/10 to-amber-500/10',
      borderColor: 'border-orange-500/30',
      participants: 2456,
      completionRate: '95%'
    },
    {
      id: 2,
      title: 'Food Delivery Experience',
      sponsor: 'Swiggy',
      logo: '🍔',
      category: 'Food',
      duration: '3 mins',
      reward: 80,
      questions: 8,
      trending: true,
      difficulty: 'Easy',
      bgColor: 'from-red-500/10 to-orange-500/10',
      borderColor: 'border-red-500/30',
      participants: 3124,
      completionRate: '98%'
    },
    {
      id: 3,
      title: 'Fashion & Lifestyle Survey',
      sponsor: 'Myntra',
      logo: '👗',
      category: 'Fashion',
      duration: '7 mins',
      reward: 200,
      questions: 15,
      trending: true,
      difficulty: 'Medium',
      bgColor: 'from-pink-500/10 to-purple-500/10',
      borderColor: 'border-pink-500/30',
      participants: 1890,
      completionRate: '92%'
    },
    {
      id: 4,
      title: 'Mobile Banking Usage',
      sponsor: 'HDFC Bank',
      logo: '🏦',
      category: 'Finance',
      duration: '8 mins',
      reward: 250,
      questions: 18,
      difficulty: 'Medium',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30',
      participants: 1234,
      completionRate: '88%'
    },
    {
      id: 5,
      title: 'Healthcare & Wellness',
      sponsor: 'Apollo Pharmacy',
      logo: '💊',
      category: 'Health',
      duration: '6 mins',
      reward: 180,
      questions: 14,
      trending: true,
      difficulty: 'Easy',
      bgColor: 'from-emerald-500/10 to-green-500/10',
      borderColor: 'border-emerald-500/30',
      participants: 1567,
      completionRate: '94%'
    },
    {
      id: 6,
      title: 'Smartphone Usage Patterns',
      sponsor: 'Samsung',
      logo: '📱',
      category: 'Technology',
      duration: '10 mins',
      reward: 300,
      questions: 20,
      difficulty: 'Hard',
      bgColor: 'from-purple-500/10 to-indigo-500/10',
      borderColor: 'border-purple-500/30',
      participants: 987,
      completionRate: '85%'
    },
    {
      id: 7,
      title: 'Travel & Vacation Planning',
      sponsor: 'MakeMyTrip',
      logo: '✈️',
      category: 'Travel',
      duration: '4 mins',
      reward: 120,
      questions: 10,
      difficulty: 'Easy',
      bgColor: 'from-sky-500/10 to-blue-500/10',
      borderColor: 'border-sky-500/30',
      participants: 2145,
      completionRate: '96%'
    },
    {
      id: 8,
      title: 'Entertainment & Streaming',
      sponsor: 'Netflix',
      logo: '🎬',
      category: 'Entertainment',
      duration: '5 mins',
      reward: 150,
      questions: 12,
      trending: true,
      difficulty: 'Easy',
      bgColor: 'from-red-500/10 to-pink-500/10',
      borderColor: 'border-red-500/30',
      participants: 2890,
      completionRate: '97%'
    },
    {
      id: 9,
      title: 'Fitness & Exercise Routine',
      sponsor: 'Puma',
      logo: '👟',
      category: 'Fitness',
      duration: '6 mins',
      reward: 180,
      questions: 14,
      difficulty: 'Easy',
      bgColor: 'from-lime-500/10 to-green-500/10',
      borderColor: 'border-lime-500/30',
      participants: 1456,
      completionRate: '93%'
    },
    {
      id: 10,
      title: 'Beauty & Skincare Routine',
      sponsor: 'Nykaa',
      logo: '💄',
      category: 'Beauty',
      duration: '7 mins',
      reward: 200,
      questions: 16,
      trending: true,
      difficulty: 'Medium',
      bgColor: 'from-pink-500/10 to-rose-500/10',
      borderColor: 'border-pink-500/30',
      participants: 1678,
      completionRate: '91%'
    },
    {
      id: 11,
      title: 'Coffee Shop Preferences',
      sponsor: 'Starbucks',
      logo: '☕',
      category: 'Food',
      duration: '3 mins',
      reward: 100,
      questions: 8,
      difficulty: 'Easy',
      bgColor: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/30',
      participants: 2234,
      completionRate: '99%'
    },
    {
      id: 12,
      title: 'E-commerce Shopping Behavior',
      sponsor: 'Flipkart',
      logo: '🛒',
      category: 'Shopping',
      duration: '8 mins',
      reward: 250,
      questions: 18,
      trending: true,
      difficulty: 'Medium',
      bgColor: 'from-blue-500/10 to-indigo-500/10',
      borderColor: 'border-blue-500/30',
      participants: 1923,
      completionRate: '90%'
    }
  ];

  const filteredSurveys = surveys.filter(survey => {
    if (activeCategory === 'trending') return survey.trending;
    if (activeCategory === 'high-reward') return survey.reward >= 200;
    if (activeCategory === 'quick') return survey.difficulty === 'Easy' && parseInt(survey.duration) <= 5;
    return true;
  });

  const myStats = {
    totalEarned: 3420,
    surveysCompleted: 28,
    avgTime: '5.2 mins',
    successRate: '96%'
  };

  const difficultyColors = {
    'Easy': 'text-green-500 bg-green-500/10 border-green-500/30',
    'Medium': 'text-orange-500 bg-orange-500/10 border-orange-500/30',
    'Hard': 'text-red-500 bg-red-500/10 border-red-500/30'
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">Surveys</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Share opinions, earn rewards</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <Coins className="w-4 h-4 text-emerald-500" />
            <span className="text-body-sm font-bold text-emerald-600 dark:text-emerald-400">{myStats.totalEarned}</span>
          </div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="px-4 py-6">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/30">
          <div className="grid grid-cols-4 gap-3">
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Coins className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg font-bold text-rez-navy dark:text-white">{myStats.totalEarned}</p>
              <p className="text-[10px] text-gray-600 dark:text-gray-400">Earned</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg font-bold text-rez-navy dark:text-white">{myStats.surveysCompleted}</p>
              <p className="text-[10px] text-gray-600 dark:text-gray-400">Completed</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg font-bold text-rez-navy dark:text-white">{myStats.avgTime}</p>
              <p className="text-[10px] text-gray-600 dark:text-gray-400">Avg Time</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg font-bold text-rez-navy dark:text-white">{myStats.successRate}</p>
              <p className="text-[10px] text-gray-600 dark:text-gray-400">Success</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="px-4 mb-6">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-dark-700'
              }`}
            >
              {cat.name}
              <span className="ml-1.5 opacity-75">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <div className="flex items-center gap-3">
            <FileText className="w-10 h-10 text-purple-500 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">
                💰 Earn While You Share
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Your opinions help brands improve. Get rewarded for every completed survey!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Surveys List */}
      <div className="px-4 space-y-3">
        {filteredSurveys.map((survey) => (
          <div
            key={survey.id}
            className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer"
            onClick={() => {/* Navigate to survey detail */}}
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${survey.bgColor} border ${survey.borderColor} flex items-center justify-center text-2xl flex-shrink-0`}>
                {survey.logo}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${difficultyColors[survey.difficulty]}`}>
                    {survey.difficulty}
                  </span>
                  {survey.trending && (
                    <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30">
                      <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        Trending
                      </span>
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-rez-navy dark:text-white mb-1">{survey.title}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <Building2 className="w-3 h-3" />
                  <span>{survey.sponsor}</span>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{survey.duration}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                <FileText className="w-3.5 h-3.5" />
                <span>{survey.questions} questions</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                <Users className="w-3.5 h-3.5" />
                <span>{survey.participants.toLocaleString()}</span>
              </div>
            </div>

            {/* Completion Rate Bar */}
            <div className="mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-600 dark:text-gray-400">Completion Rate</span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{survey.completionRate}</span>
              </div>
              <div className="h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
                  style={{ width: survey.completionRate }}
                />
              </div>
            </div>

            {/* Reward & CTA */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 leading-none">
                    +{survey.reward}
                  </p>
                  <p className="text-[10px] text-gray-600 dark:text-gray-400">ReZ Coins</p>
                </div>
              </div>
              <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition-all flex items-center gap-2">
                Start Now
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-6">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-500/10 dark:to-blue-500/10 border border-emerald-200 dark:border-emerald-500/30 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-2">
            New Surveys Daily
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Check back often for fresh surveys from top brands
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4" />
              <span>High Rewards</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Quick Surveys</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              <span>Easy Tasks</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default Surveys;
