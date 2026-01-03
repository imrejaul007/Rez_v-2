import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Star, Coins, TrendingUp, Award, CheckCircle,
  Camera, Edit3, Users, Clock, Gift, Sparkles, MessageSquare,
  ThumbsUp, Eye, Target, ChevronRight
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const WriteReviews = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('available');

  const tabs = [
    { id: 'available', name: 'Available', count: 45 },
    { id: 'submitted', name: 'Submitted', count: 28 },
    { id: 'approved', name: 'Approved', count: 24 }
  ];

  const stats = [
    { label: 'Reviews Written', value: '28', icon: Edit3, color: 'from-blue-500 to-cyan-500' },
    { label: 'Coins Earned', value: '1,120', icon: Coins, color: 'from-emerald-500 to-teal-500' },
    { label: 'Total Views', value: '2.4k', icon: Eye, color: 'from-purple-500 to-pink-500' },
    { label: 'Helpful Votes', value: '187', icon: ThumbsUp, color: 'from-orange-500 to-amber-500' }
  ];

  const reviewOpportunities = [
    {
      id: 1,
      product: 'Sony WH-1000XM5 Headphones',
      brand: 'Sony',
      logo: '🎧',
      category: 'Electronics',
      reward: 50,
      timeLimit: '3 days left',
      requirements: ['Must have purchased', 'Min 100 words', 'Add photos'],
      trending: true,
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 2,
      product: 'Nike Air Max Running Shoes',
      brand: 'Nike',
      logo: '👟',
      category: 'Fashion',
      reward: 40,
      timeLimit: '5 days left',
      requirements: ['Must have purchased', 'Min 80 words', 'Rate 5 aspects'],
      trending: true,
      bgColor: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 3,
      product: 'Nykaa Face Serum',
      brand: 'Nykaa',
      logo: '💄',
      category: 'Beauty',
      reward: 35,
      timeLimit: '2 days left',
      requirements: ['Must have purchased', 'Min 50 words', 'Before/After photos'],
      bgColor: 'from-pink-500/10 to-rose-500/10',
      borderColor: 'border-pink-500/30'
    },
    {
      id: 4,
      product: 'Boat Airdopes Earbuds',
      brand: 'Boat',
      logo: '🎵',
      category: 'Electronics',
      reward: 30,
      timeLimit: '4 days left',
      requirements: ['Must have purchased', 'Min 60 words', 'Audio quality rating'],
      bgColor: 'from-orange-500/10 to-amber-500/10',
      borderColor: 'border-orange-500/30'
    },
    {
      id: 5,
      product: 'Amazon Echo Dot',
      brand: 'Amazon',
      logo: '🔊',
      category: 'Electronics',
      reward: 45,
      timeLimit: '6 days left',
      requirements: ['Must have purchased', 'Min 100 words', 'Feature review'],
      bgColor: 'from-emerald-500/10 to-teal-500/10',
      borderColor: 'border-emerald-500/30'
    },
    {
      id: 6,
      product: 'Mamaearth Sunscreen SPF 50',
      brand: 'Mamaearth',
      logo: '☀️',
      category: 'Beauty',
      reward: 30,
      timeLimit: '3 days left',
      requirements: ['Must have purchased', 'Min 50 words', 'Usage experience'],
      bgColor: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/30'
    }
  ];

  const submittedReviews = [
    {
      id: 1,
      product: 'iPhone 15 Pro',
      brand: 'Apple',
      logo: '📱',
      status: 'approved',
      reward: 60,
      views: 342,
      helpful: 28,
      date: 'Dec 20, 2024',
      rating: 5
    },
    {
      id: 2,
      product: 'Samsung Galaxy S24',
      brand: 'Samsung',
      logo: '📱',
      status: 'approved',
      reward: 50,
      views: 198,
      helpful: 15,
      date: 'Dec 18, 2024',
      rating: 4
    },
    {
      id: 3,
      product: 'Myntra Kurta Set',
      brand: 'Myntra',
      logo: '👗',
      status: 'pending',
      reward: 40,
      views: 0,
      helpful: 0,
      date: 'Dec 25, 2024',
      rating: 5
    }
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
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Write Reviews</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Share experiences, earn rewards</p>
          </div>
        </div>
      </div>

      {/* Hero Stats Section */}
      <div className="px-4 py-6">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-purple-500/30">
          <div className="grid grid-cols-4 gap-3">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg font-bold text-rez-navy dark:text-white">{stat.value}</p>
                <p className="text-[10px] text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
          <div className="flex items-center gap-3">
            <Sparkles className="w-10 h-10 text-emerald-500 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">
                ⭐ Quality Reviews = More Coins
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Detailed reviews with photos earn bonus coins. Help others make better decisions!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-4 mb-6">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-full whitespace-nowrap text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-gray-600 dark:text-gray-300'
              }`}
            >
              {tab.name}
              <span className="ml-1.5 opacity-75">({tab.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Available Reviews */}
      {activeTab === 'available' && (
        <div className="px-4 pb-6 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-bold text-rez-navy dark:text-white">Review Opportunities</h3>
            <span className="text-xs text-gray-600 dark:text-gray-400">{reviewOpportunities.length} available</span>
          </div>
          {reviewOpportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className={`p-4 rounded-2xl bg-gradient-to-br ${opportunity.bgColor} border-2 ${opportunity.borderColor} hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer`}
              onClick={() => navigate(`/product/${opportunity.id}`)}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-14 h-14 rounded-xl bg-white/50 dark:bg-white/10 flex items-center justify-center text-3xl flex-shrink-0">
                  {opportunity.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-bold text-rez-navy dark:text-white">{opportunity.product}</h3>
                    {opportunity.trending && (
                      <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30">
                        <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400">Hot</span>
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 mb-2">
                    <span>{opportunity.brand}</span>
                    <span>•</span>
                    <span>{opportunity.category}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <Clock className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                    <span className="font-semibold text-orange-600 dark:text-orange-400">{opportunity.timeLimit}</span>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-3 p-3 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-sm">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Requirements:</p>
                <div className="space-y-1">
                  {opportunity.requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <div className="w-1 h-1 rounded-full bg-gray-400" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reward Display */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
                <div className="flex items-center gap-2">
                  <Coins className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Reward</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">+{opportunity.reward}</span>
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold hover:scale-105 transition-all">
                    Write Review
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Submitted/Approved Reviews */}
      {(activeTab === 'submitted' || activeTab === 'approved') && (
        <div className="px-4 pb-6 space-y-3">
          {submittedReviews
            .filter(review => activeTab === 'submitted' || review.status === 'approved')
            .map((review) => (
              <div
                key={review.id}
                className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700"
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-2xl">
                    {review.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-rez-navy dark:text-white mb-1">{review.product}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < review.rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{review.date}</span>
                    </div>
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${
                      review.status === 'approved'
                        ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                        : 'bg-orange-500/20 text-orange-600 dark:text-orange-400'
                    }`}>
                      {review.status === 'approved' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                      <span>{review.status === 'approved' ? 'Approved' : 'Under Review'}</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                {review.status === 'approved' && (
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="text-center p-2 rounded-lg bg-gray-50 dark:bg-dark-700">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Eye className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400" />
                        <span className="text-sm font-bold text-rez-navy dark:text-white">{review.views}</span>
                      </div>
                      <p className="text-[10px] text-gray-600 dark:text-gray-400">Views</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-gray-50 dark:bg-dark-700">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <ThumbsUp className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400" />
                        <span className="text-sm font-bold text-rez-navy dark:text-white">{review.helpful}</span>
                      </div>
                      <p className="text-[10px] text-gray-600 dark:text-gray-400">Helpful</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Coins className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">+{review.reward}</span>
                      </div>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400">Earned</p>
                    </div>
                  </div>
                )}

                {/* Reward for pending */}
                {review.status === 'pending' && (
                  <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600 dark:text-gray-400">Pending reward</span>
                      <div className="flex items-center gap-1.5">
                        <Coins className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                        <span className="text-lg font-bold text-orange-600 dark:text-orange-400">+{review.reward}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      )}

      {/* Bottom CTA */}
      <div className="px-4 pb-6">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-500/10 dark:to-blue-500/10 border border-purple-200 dark:border-purple-500/30 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-2">Become a Top Reviewer</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Write quality reviews consistently to unlock exclusive benefits and higher rewards
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>Verified badge</span>
            </div>
            <div className="flex items-center gap-1">
              <Coins className="w-4 h-4" />
              <span>2x rewards</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default WriteReviews;
