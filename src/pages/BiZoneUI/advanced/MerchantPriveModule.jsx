import { useState } from 'react';
import MerchantNav from '../../components/merchant/MerchantNav';
import {
  Crown, Star, TrendingUp, Calendar, DollarSign, Users, Eye,
  FileText, Check, X, Clock, Target, Award, Sparkles, Download,
  Upload, Send, MessageSquare, BarChart3, Heart, Share2, Image
} from 'lucide-react';

export default function MerchantPriveModule() {
  const [activeTab, setActiveTab] = useState('campaigns');

  const [priveStatus] = useState({
    tier: 'Gold Partner',
    membersSince: 'Jan 2024',
    totalCampaigns: 45,
    activeCampaigns: 8,
    totalEarnings: 456700,
    thisMonthEarnings: 67890,
    totalReach: 234567,
    avgEngagement: 8.5,
    rating: 4.8,
    responseRate: 95
  });

  const [availableCampaigns] = useState([
    {
      id: 'PC-2024-001',
      title: 'Luxury Dining Experience - Valentine Special',
      brand: 'ReZ Privé Events',
      type: 'Content Creation',
      budget: 50000,
      coinReward: 5000,
      deadline: '2024-02-10',
      requirements: [
        'Create 3 Instagram Reels showcasing Valentine menu',
        'Minimum 10K views per reel',
        'Tag @rezprive and use #RezValentine',
        'Include couple testimonials'
      ],
      deliverables: ['3 Reels', '5 Stories', '1 Grid Post'],
      targetAudience: 'Couples, Premium Diners, Age 25-40',
      estimatedReach: '50K+',
      status: 'available',
      urgency: 'high',
      acceptedBy: 0,
      maxParticipants: 5
    },
    {
      id: 'PC-2024-002',
      title: 'Premium Fashion Collection Launch',
      brand: 'Luxury Fashion Brand',
      type: 'Event Hosting',
      budget: 100000,
      coinReward: 10000,
      deadline: '2024-02-20',
      requirements: [
        'Host exclusive preview event at your store',
        'Invite min 50 Privé members',
        'Photo/video documentation',
        'Provide exclusive discount for attendees'
      ],
      deliverables: ['Event Hosting', 'Social Coverage', 'Discount Offers'],
      targetAudience: 'Fashion Enthusiasts, HNI, Age 25-45',
      estimatedReach: '30K+',
      status: 'available',
      urgency: 'medium',
      acceptedBy: 2,
      maxParticipants: 3
    },
    {
      id: 'PC-2024-003',
      title: 'Weekend Brunch Influencer Collaboration',
      brand: 'ReZ Privé Experiences',
      type: 'Paid Partnership',
      budget: 75000,
      coinReward: 7500,
      deadline: '2024-02-15',
      requirements: [
        'Host 2 complimentary weekend brunches',
        'Invite 3 Privé influencers per session',
        'Create special Privé menu items',
        'Allow social media content creation'
      ],
      deliverables: ['2 Brunch Sessions', 'Menu Creation', 'Content Rights'],
      targetAudience: 'Foodies, Lifestyle Influencers',
      estimatedReach: '100K+',
      status: 'available',
      urgency: 'low',
      acceptedBy: 1,
      maxParticipants: 5
    }
  ]);

  const [activeCampaigns] = useState([
    {
      id: 'PC-2024-004',
      title: 'Premium Wine Tasting Evening',
      brand: 'Fine Wines Co.',
      type: 'Event Partnership',
      budget: 80000,
      coinReward: 8000,
      acceptedDate: '2024-01-15',
      deadline: '2024-02-05',
      status: 'in_progress',
      progress: 65,
      deliverables: [
        { name: 'Event Setup', status: 'completed', dueDate: '2024-01-25' },
        { name: 'Guest Invitations (50 sent)', status: 'completed', dueDate: '2024-01-28' },
        { name: 'Menu Finalization', status: 'in_progress', dueDate: '2024-02-01' },
        { name: 'Event Execution', status: 'pending', dueDate: '2024-02-05' },
        { name: 'Content Submission', status: 'pending', dueDate: '2024-02-07' }
      ],
      contentBrief: {
        tone: 'Sophisticated, Elegant',
        hashtags: ['#RezPriveWines', '#LuxuryTasting', '#PremiumExperience'],
        mentions: ['@rezprive', '@finewinesco'],
        minPhotos: 10,
        minVideos: 3
      }
    },
    {
      id: 'PC-2024-005',
      title: 'Luxury Spa Package Promotion',
      brand: 'ReZ Privé Wellness',
      type: 'Content Creation',
      budget: 60000,
      coinReward: 6000,
      acceptedDate: '2024-01-20',
      deadline: '2024-02-12',
      status: 'in_progress',
      progress: 40,
      deliverables: [
        { name: 'Professional Photoshoot', status: 'completed', dueDate: '2024-01-28' },
        { name: '5 Instagram Reels', status: 'in_progress', dueDate: '2024-02-05' },
        { name: '10 Stories', status: 'pending', dueDate: '2024-02-08' },
        { name: 'Blog Post', status: 'pending', dueDate: '2024-02-10' }
      ],
      contentBrief: {
        tone: 'Relaxing, Premium, Wellness-focused',
        hashtags: ['#RezPriveSpa', '#LuxuryWellness', '#SelfCare'],
        mentions: ['@rezprive'],
        minPhotos: 15,
        minVideos: 5
      }
    }
  ]);

  const [completedCampaigns] = useState([
    {
      id: 'PC-2023-045',
      title: 'New Year Gala Dinner Experience',
      brand: 'ReZ Privé Events',
      completedDate: '2024-01-02',
      earnings: 120000,
      coinEarned: 12000,
      reach: 45000,
      engagement: 12.5,
      rating: 5.0,
      feedback: 'Outstanding execution! The event was a massive success with excellent guest feedback.'
    },
    {
      id: 'PC-2023-044',
      title: 'Premium Jewelry Collection Showcase',
      brand: 'Diamond House',
      completedDate: '2023-12-28',
      earnings: 95000,
      coinEarned: 9500,
      reach: 67000,
      engagement: 9.8,
      rating: 4.8,
      feedback: 'Great partnership. The showcase was elegant and well-received by our target audience.'
    },
    {
      id: 'PC-2023-043',
      title: 'Winter Fashion Week Collaboration',
      brand: 'Luxury Brands Co.',
      completedDate: '2023-12-20',
      earnings: 150000,
      coinEarned: 15000,
      reach: 123000,
      engagement: 11.2,
      rating: 4.9,
      feedback: 'Exceeded expectations with creative content and professional execution.'
    }
  ]);

  const [performance] = useState({
    totalReach: 234567,
    totalEngagement: 23456,
    avgRating: 4.8,
    repeatCollaborations: 12,
    topCategories: ['Fine Dining', 'Fashion', 'Wellness', 'Events'],
    monthlyTrend: [
      { month: 'Aug', earnings: 45000, reach: 23000 },
      { month: 'Sep', earnings: 52000, reach: 28000 },
      { month: 'Oct', earnings: 48000, reach: 31000 },
      { month: 'Nov', earnings: 67000, reach: 45000 },
      { month: 'Dec', earnings: 89000, reach: 52000 },
      { month: 'Jan', earnings: 67890, reach: 55467 }
    ]
  });

  const getStatusColor = (status) => {
    const colors = {
      available: 'bg-blue-100 text-blue-700',
      in_progress: 'bg-yellow-100 text-yellow-700',
      completed: 'bg-green-100 text-green-700',
      pending: 'bg-gray-100 text-gray-600'
    };
    return colors[status] || 'bg-gray-100 text-gray-600';
  };

  const getUrgencyColor = (urgency) => {
    const colors = {
      high: 'bg-red-100 text-red-700',
      medium: 'bg-yellow-100 text-yellow-700',
      low: 'bg-green-100 text-green-700'
    };
    return colors[urgency] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Crown className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">ReZ Privé Partnership Module</h1>
              <p className="text-purple-100">Exclusive campaigns, premium collaborations & elevated earnings</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              {priveStatus.tier}
            </span>
            <span className="flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-sm">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              {priveStatus.rating}
            </span>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <FileText className="w-5 h-5 text-purple-200" />
              <span className="text-xs text-purple-200">Active: {priveStatus.activeCampaigns}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{priveStatus.totalCampaigns}</div>
            <div className="text-sm text-purple-200">Total Campaigns</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-5 h-5 text-purple-200" />
              <span className="text-xs text-purple-200">This Month</span>
            </div>
            <div className="text-2xl font-bold mb-1">₹{(priveStatus.thisMonthEarnings / 1000).toFixed(0)}K</div>
            <div className="text-sm text-purple-200">Privé Earnings</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Crown className="w-5 h-5 text-purple-200" />
              <span className="text-xs text-purple-200">Lifetime</span>
            </div>
            <div className="text-2xl font-bold mb-1">₹{(priveStatus.totalEarnings / 1000).toFixed(0)}K</div>
            <div className="text-sm text-purple-200">Total Revenue</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-5 h-5 text-purple-200" />
            </div>
            <div className="text-2xl font-bold mb-1">{(priveStatus.totalReach / 1000).toFixed(0)}K</div>
            <div className="text-sm text-purple-200">Total Reach</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-5 h-5 text-purple-200" />
            </div>
            <div className="text-2xl font-bold mb-1">{priveStatus.avgEngagement}%</div>
            <div className="text-sm text-purple-200">Engagement</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-5 h-5 text-purple-200" />
            </div>
            <div className="text-2xl font-bold mb-1">{priveStatus.responseRate}%</div>
            <div className="text-sm text-purple-200">Response Rate</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex gap-6 px-6">
          <button
            onClick={() => setActiveTab('campaigns')}
            className={`py-4 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'campaigns'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Available Campaigns
          </button>
          <button
            onClick={() => setActiveTab('active')}
            className={`py-4 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'active'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Active Projects ({priveStatus.activeCampaigns})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`py-4 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'completed'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab('performance')}
            className={`py-4 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'performance'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Performance & Earnings
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Available Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Available Privé Campaigns</h2>
              <div className="flex items-center gap-3">
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>All Types</option>
                  <option>Content Creation</option>
                  <option>Event Hosting</option>
                  <option>Paid Partnership</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>All Budgets</option>
                  <option>Under ₹50K</option>
                  <option>₹50K - ₹1L</option>
                  <option>Above ₹1L</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {availableCampaigns.map((campaign) => (
                <div key={campaign.id} className="bg-white border-2 border-purple-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{campaign.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(campaign.urgency)}`}>
                          {campaign.urgency.toUpperCase()} PRIORITY
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          {campaign.brand}
                        </span>
                        <span className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          {campaign.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Due: {campaign.deadline}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Requirements:</h4>
                          <ul className="space-y-1">
                            {campaign.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <Check className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Deliverables:</h4>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {campaign.deliverables.map((item, idx) => (
                              <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                                {item}
                              </span>
                            ))}
                          </div>
                          <div className="text-sm text-gray-600">
                            <p><span className="font-medium">Target:</span> {campaign.targetAudience}</p>
                            <p><span className="font-medium">Est. Reach:</span> {campaign.estimatedReach}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="ml-6 text-right">
                      <div className="bg-green-50 rounded-lg p-4 mb-3">
                        <div className="text-2xl font-bold text-green-700">₹{(campaign.budget / 1000).toFixed(0)}K</div>
                        <div className="text-xs text-green-600">Campaign Budget</div>
                        <div className="text-sm font-medium text-purple-600 mt-2">
                          + {campaign.coinReward.toLocaleString()} ReZ Coins
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 mb-3">
                        {campaign.acceptedBy}/{campaign.maxParticipants} spots filled
                      </div>
                      <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium">
                        Accept Campaign
                      </button>
                      <button className="w-full mt-2 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 text-sm">
                        View Full Brief
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Active Projects Tab */}
        {activeTab === 'active' && (
          <div className="space-y-6">
            {activeCampaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{campaign.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                        IN PROGRESS
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{campaign.brand}</span>
                      <span>•</span>
                      <span>Accepted: {campaign.acceptedDate}</span>
                      <span>•</span>
                      <span>Deadline: {campaign.deadline}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">₹{(campaign.budget / 1000).toFixed(0)}K</div>
                    <div className="text-sm text-gray-600">+ {campaign.coinReward.toLocaleString()} coins</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                    <span className="text-sm font-bold text-purple-600">{campaign.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-purple-600 h-3 rounded-full transition-all"
                      style={{ width: `${campaign.progress}%` }}
                    />
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Deliverables Checklist:</h4>
                  <div className="space-y-2">
                    {campaign.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          {item.status === 'completed' ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : item.status === 'in_progress' ? (
                            <Clock className="w-5 h-5 text-yellow-600" />
                          ) : (
                            <div className="w-5 h-5 border-2 border-gray-300 rounded" />
                          )}
                          <span className={`font-medium ${
                            item.status === 'completed' ? 'text-gray-500 line-through' : 'text-gray-900'
                          }`}>
                            {item.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-600">Due: {item.dueDate}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                            {item.status.replace('_', ' ').toUpperCase()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Brief */}
                <div className="bg-purple-50 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Content Brief Guidelines:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Tone:</span>
                      <span className="text-gray-600 ml-2">{campaign.contentBrief.tone}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Required Content:</span>
                      <span className="text-gray-600 ml-2">
                        {campaign.contentBrief.minPhotos} photos, {campaign.contentBrief.minVideos} videos
                      </span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="font-medium text-gray-700">Hashtags:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {campaign.contentBrief.hashtags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <span className="font-medium text-gray-700">Mentions:</span>
                      <span className="text-gray-600 ml-2">{campaign.contentBrief.mentions.join(', ')}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    <Upload className="w-4 h-4" />
                    Upload Content
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50">
                    <MessageSquare className="w-4 h-4" />
                    Message Brand
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    <Download className="w-4 h-4" />
                    Download Brief
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Completed Tab */}
        {activeTab === 'completed' && (
          <div className="space-y-4">
            {completedCampaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{campaign.title}</h3>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        COMPLETED
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-gray-900">{campaign.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      {campaign.brand} • Completed: {campaign.completedDate}
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 mb-3">
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Brand Feedback:</span> "{campaign.feedback}"
                      </p>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-900">₹{(campaign.earnings / 1000).toFixed(0)}K</div>
                        <div className="text-xs text-gray-600">Earned</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-purple-600">{campaign.coinEarned.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">Coins</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-900">{(campaign.reach / 1000).toFixed(0)}K</div>
                        <div className="text-xs text-gray-600">Reach</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-900">{campaign.engagement}%</div>
                        <div className="text-xs text-gray-600">Engagement</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Performance Tab */}
        {activeTab === 'performance' && (
          <div className="space-y-6">
            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{(performance.totalReach / 1000).toFixed(0)}K</div>
                    <div className="text-sm text-gray-600">Total Reach</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Heart className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{(performance.totalEngagement / 1000).toFixed(0)}K</div>
                    <div className="text-sm text-gray-600">Total Engagement</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Star className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{performance.avgRating}</div>
                    <div className="text-sm text-gray-600">Avg Rating</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{performance.repeatCollaborations}</div>
                    <div className="text-sm text-gray-600">Repeat Collabs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly Trend */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Monthly Performance Trend</h3>
              <div className="space-y-3">
                {performance.monthlyTrend.map((month, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-16 text-sm font-medium text-gray-600">{month.month}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="text-sm font-medium text-gray-900">₹{(month.earnings / 1000).toFixed(0)}K</div>
                        <div className="text-xs text-gray-600">• {(month.reach / 1000).toFixed(0)}K reach</div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: `${(month.earnings / 100000) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Categories */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top Performance Categories</h3>
              <div className="flex flex-wrap gap-3">
                {performance.topCategories.map((category, idx) => (
                  <span key={idx} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
