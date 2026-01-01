import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminSocialFeedControl = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('algorithm');

  // Mock social feed data
  const [feedData] = useState({
    stats: {
      dailyActiveUsers: 125000,
      contentCreated: 8500,
      engagementRate: 12.5,
      avgSessionTime: '8.5 mins'
    },
    algorithmWeights: {
      recency: { weight: 25, description: 'How recent the content is' },
      engagement: { weight: 30, description: 'Likes, comments, shares' },
      relevance: { weight: 20, description: 'Match to user interests' },
      quality: { weight: 15, description: 'Content quality score' },
      diversity: { weight: 10, description: 'Content variety' }
    },
    viralContent: [
      {
        id: 1,
        type: 'reel',
        author: 'fashion_diva',
        title: 'Summer Style Tips 2024',
        views: 125000,
        likes: 15600,
        shares: 3200,
        comments: 890,
        viralScore: 95,
        status: 'trending',
        flagged: false
      },
      {
        id: 2,
        type: 'review',
        author: 'tech_guru',
        title: 'iPhone 15 Pro Unboxing',
        views: 89000,
        likes: 8900,
        shares: 1800,
        comments: 456,
        viralScore: 82,
        status: 'rising',
        flagged: false
      },
      {
        id: 3,
        type: 'story',
        author: 'food_explorer',
        title: 'Hidden Gems in Mumbai',
        views: 67000,
        likes: 7200,
        shares: 2100,
        comments: 320,
        viralScore: 78,
        status: 'trending',
        flagged: true,
        flagReason: 'Potential copyright content'
      }
    ],
    contentCategories: [
      { name: 'Fashion', posts: 2500, engagement: 14.2 },
      { name: 'Food', posts: 2100, engagement: 12.8 },
      { name: 'Tech', posts: 1800, engagement: 11.5 },
      { name: 'Lifestyle', posts: 1400, engagement: 10.2 },
      { name: 'Beauty', posts: 700, engagement: 15.1 }
    ],
    boostedContent: [
      { id: 1, title: 'New Year Sale Announcement', impressions: 250000, clicks: 45000, cost: 5000, status: 'active' },
      { id: 2, title: 'Partner Brand Campaign', impressions: 180000, clicks: 32000, cost: 3500, status: 'active' },
      { id: 3, title: 'Feature Launch Promo', impressions: 120000, clicks: 21000, cost: 2500, status: 'completed' }
    ],
    moderationQueue: {
      pending: 156,
      flagged: 23,
      appealed: 8
    }
  });

  const [algorithmWeights, setAlgorithmWeights] = useState(feedData.algorithmWeights);

  const handleWeightChange = (key, value) => {
    const newWeights = { ...algorithmWeights };
    newWeights[key] = { ...newWeights[key], weight: parseInt(value) };
    setAlgorithmWeights(newWeights);
  };

  const totalWeight = Object.values(algorithmWeights).reduce((sum, w) => sum + w.weight, 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Social Feed Control</h1>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-lg font-bold">{(feedData.stats.dailyActiveUsers / 1000).toFixed(0)}K</div>
            <div className="text-xs text-white/80">Daily Active</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-lg font-bold">{(feedData.stats.contentCreated / 1000).toFixed(1)}K</div>
            <div className="text-xs text-white/80">Content/Day</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-lg font-bold">{feedData.stats.engagementRate}%</div>
            <div className="text-xs text-white/80">Engagement</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-lg font-bold">{feedData.stats.avgSessionTime}</div>
            <div className="text-xs text-white/80">Avg Session</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto bg-white border-b sticky top-0 z-10">
        {['algorithm', 'viral', 'boosted', 'moderation'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-shrink-0 px-4 py-3 text-sm font-medium border-b-2 capitalize ${
              activeTab === tab
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4">
        {/* Algorithm Tab */}
        {activeTab === 'algorithm' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Feed Algorithm Weights</h3>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  totalWeight === 100 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  Total: {totalWeight}%
                </span>
              </div>

              <div className="space-y-4">
                {Object.entries(algorithmWeights).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium capitalize">{key}</p>
                        <p className="text-xs text-gray-500">{value.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="range"
                          min="0"
                          max="50"
                          value={value.weight}
                          onChange={(e) => handleWeightChange(key, e.target.value)}
                          className="w-24"
                        />
                        <span className="w-10 text-right font-medium">{value.weight}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500 rounded-full"
                        style={{ width: `${value.weight * 2}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-xl font-medium">
                Apply Changes
              </button>
            </div>

            {/* Category Performance */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-4">Category Performance</h3>
              <div className="space-y-3">
                {feedData.contentCategories.map((cat, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                        {cat.name === 'Fashion' && '👗'}
                        {cat.name === 'Food' && '🍕'}
                        {cat.name === 'Tech' && '📱'}
                        {cat.name === 'Lifestyle' && '🌟'}
                        {cat.name === 'Beauty' && '💄'}
                      </div>
                      <div>
                        <p className="font-medium">{cat.name}</p>
                        <p className="text-xs text-gray-500">{cat.posts} posts</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-indigo-600">{cat.engagement}%</p>
                      <p className="text-xs text-gray-500">engagement</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Viral Content Tab */}
        {activeTab === 'viral' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4">
              <h3 className="font-semibold mb-2">🔥 Viral Content Monitor</h3>
              <p className="text-sm text-gray-600">
                Track and manage content that's gaining viral traction across the platform.
              </p>
            </div>

            {feedData.viralContent.map(content => (
              <div
                key={content.id}
                className={`bg-white rounded-xl p-4 shadow-sm ${
                  content.flagged ? 'border-l-4 border-l-orange-500' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                      {content.type === 'reel' && '🎬'}
                      {content.type === 'review' && '⭐'}
                      {content.type === 'story' && '📷'}
                    </div>
                    <div>
                      <p className="font-medium">{content.title}</p>
                      <p className="text-sm text-gray-500">@{content.author}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <span className={`w-2 h-2 rounded-full ${
                        content.status === 'trending' ? 'bg-red-500 animate-pulse' : 'bg-green-500'
                      }`} />
                      <span className="text-xs capitalize">{content.status}</span>
                    </div>
                    <div className="text-lg font-bold text-purple-600">{content.viralScore}</div>
                    <div className="text-xs text-gray-500">Viral Score</div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center text-sm mb-3">
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="font-bold">{(content.views / 1000).toFixed(0)}K</div>
                    <div className="text-xs text-gray-500">Views</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="font-bold">{(content.likes / 1000).toFixed(1)}K</div>
                    <div className="text-xs text-gray-500">Likes</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="font-bold">{(content.shares / 1000).toFixed(1)}K</div>
                    <div className="text-xs text-gray-500">Shares</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="font-bold">{content.comments}</div>
                    <div className="text-xs text-gray-500">Comments</div>
                  </div>
                </div>

                {content.flagged && (
                  <div className="bg-orange-50 rounded-lg p-2 text-sm text-orange-700 mb-3">
                    ⚠️ {content.flagReason}
                  </div>
                )}

                <div className="flex gap-2">
                  <button className="flex-1 bg-indigo-100 text-indigo-700 py-2 rounded-lg text-sm font-medium">
                    Boost
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">
                    Suppress
                  </button>
                  <button className="flex-1 bg-red-100 text-red-700 py-2 rounded-lg text-sm font-medium">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Boosted Content Tab */}
        {activeTab === 'boosted' && (
          <div className="space-y-4">
            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium">
              + Boost New Content
            </button>

            {feedData.boostedContent.map(content => (
              <div key={content.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-medium">{content.title}</p>
                    <p className="text-sm text-gray-500">₹{content.cost} spent</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    content.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {content.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center mb-3">
                  <div className="bg-indigo-50 rounded-lg p-3">
                    <div className="text-xl font-bold text-indigo-600">
                      {(content.impressions / 1000).toFixed(0)}K
                    </div>
                    <div className="text-xs text-gray-500">Impressions</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-xl font-bold text-green-600">
                      {(content.clicks / 1000).toFixed(0)}K
                    </div>
                    <div className="text-xs text-gray-500">Clicks</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    CTR: {((content.clicks / content.impressions) * 100).toFixed(1)}%
                  </span>
                  <span className="text-gray-500">
                    CPC: ₹{(content.cost / content.clicks).toFixed(2)}
                  </span>
                </div>

                {content.status === 'active' && (
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 bg-indigo-100 text-indigo-700 py-2 rounded-lg text-sm font-medium">
                      Increase Budget
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">
                      Pause
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Moderation Tab */}
        {activeTab === 'moderation' && (
          <div className="space-y-4">
            {/* Moderation Queue Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-yellow-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-700">
                  {feedData.moderationQueue.pending}
                </div>
                <div className="text-xs text-yellow-600">Pending Review</div>
              </div>
              <div className="bg-orange-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-orange-700">
                  {feedData.moderationQueue.flagged}
                </div>
                <div className="text-xs text-orange-600">Flagged</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-700">
                  {feedData.moderationQueue.appealed}
                </div>
                <div className="text-xs text-purple-600">Appeals</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">⏳</span>
                    <span>Review Pending Content</span>
                  </div>
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">
                    {feedData.moderationQueue.pending}
                  </span>
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🚩</span>
                    <span>Handle Flagged Content</span>
                  </div>
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">
                    {feedData.moderationQueue.flagged}
                  </span>
                </button>
                <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📣</span>
                    <span>Review Appeals</span>
                  </div>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                    {feedData.moderationQueue.appealed}
                  </span>
                </button>
              </div>
            </div>

            {/* Moderation Rules */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-4">Auto-Moderation Rules</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Spam Detection</p>
                    <p className="text-xs text-gray-500">Auto-flag repetitive/promotional content</p>
                  </div>
                  <div className="w-12 h-7 bg-green-500 rounded-full p-1">
                    <div className="w-5 h-5 bg-white rounded-full translate-x-5" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Profanity Filter</p>
                    <p className="text-xs text-gray-500">Block content with offensive language</p>
                  </div>
                  <div className="w-12 h-7 bg-green-500 rounded-full p-1">
                    <div className="w-5 h-5 bg-white rounded-full translate-x-5" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Copyright Detection</p>
                    <p className="text-xs text-gray-500">Flag potentially copyrighted content</p>
                  </div>
                  <div className="w-12 h-7 bg-green-500 rounded-full p-1">
                    <div className="w-5 h-5 bg-white rounded-full translate-x-5" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">AI Content Detection</p>
                    <p className="text-xs text-gray-500">Flag AI-generated fake content</p>
                  </div>
                  <div className="w-12 h-7 bg-gray-300 rounded-full p-1">
                    <div className="w-5 h-5 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSocialFeedControl;
