import React, { useState } from 'react';
import { Brain, AlertTriangle, CheckCircle, XCircle, Eye, Flag, Image, MessageSquare, User, Clock } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

const AdminAIModerationQueue = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const moderationQueue = [
    {
      id: 1,
      type: 'ugc_post',
      content: 'Amazing product! Got 50% off using ReZ',
      image: true,
      author: 'John Doe',
      userId: 'USR-12345',
      aiScore: 92,
      aiFlags: ['Promotional content detected', 'Possible incentivized review'],
      timestamp: '2025-01-20 14:30:00',
      severity: 'low'
    },
    {
      id: 2,
      type: 'review',
      content: 'Terrible service, complete scam! DO NOT BUY!',
      image: false,
      author: 'Jane Smith',
      userId: 'USR-67890',
      aiScore: 85,
      aiFlags: ['Offensive language', 'Possible fake review', 'Competitor mention'],
      timestamp: '2025-01-20 14:15:00',
      severity: 'high'
    },
    {
      id: 3,
      type: 'comment',
      content: 'Hey, check out this deal at [external-link]',
      image: false,
      author: 'Mike Johnson',
      userId: 'USR-11122',
      aiScore: 78,
      aiFlags: ['Spam link detected', 'External site promotion'],
      timestamp: '2025-01-20 13:45:00',
      severity: 'medium'
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-red-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 p-6">
      <AdminNav />
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Brain className="w-10 h-10 text-red-400" />
            AI Content Moderation Queue
          </h1>
          <p className="text-gray-400">AI-powered content screening and review</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-yellow-400" />
              <span className="text-xs text-gray-400">Pending Review</span>
            </div>
            <div className="text-3xl font-bold text-white">23</div>
            <div className="text-sm text-yellow-400">3 high priority</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <span className="text-xs text-gray-400">Approved Today</span>
            </div>
            <div className="text-3xl font-bold text-white">156</div>
            <div className="text-sm text-green-400">+23% vs yesterday</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <XCircle className="w-8 h-8 text-red-400" />
              <span className="text-xs text-gray-400">Rejected Today</span>
            </div>
            <div className="text-3xl font-bold text-white">12</div>
            <div className="text-sm text-red-400">7.1% rejection rate</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Brain className="w-8 h-8 text-purple-400" />
              <span className="text-xs text-gray-400">AI Accuracy</span>
            </div>
            <div className="text-3xl font-bold text-white">94.2%</div>
            <div className="text-sm text-purple-400">High confidence</div>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          {[
            { id: 'pending', label: 'Pending Review', count: 23 },
            { id: 'approved', label: 'Approved', count: 156 },
            { id: 'rejected', label: 'Rejected', count: 12 }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {moderationQueue.map((item) => (
            <div key={item.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs px-3 py-1 rounded-full border ${getSeverityColor(item.severity)}`}>
                      {item.severity.toUpperCase()} RISK
                    </span>
                    <span className="text-gray-400 text-sm">{item.type.replace('_', ' ').toUpperCase()}</span>
                    <span className="text-gray-500 text-sm">{item.timestamp}</span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/5 rounded-lg p-2">
                      <User className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium mb-1">{item.author}</p>
                      <p className="text-gray-400 text-sm mb-3">{item.userId}</p>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-4">
                        <p className="text-white">{item.content}</p>
                        {item.image && (
                          <div className="mt-3 bg-gray-700 h-32 rounded-lg flex items-center justify-center">
                            <Image className="w-8 h-8 text-gray-500" />
                          </div>
                        )}
                      </div>

                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Brain className="w-5 h-5 text-red-400" />
                          <span className="text-red-400 font-semibold">AI Analysis</span>
                          <span className={`ml-auto text-2xl font-bold ${getScoreColor(item.aiScore)}`}>
                            {item.aiScore}% Risk Score
                          </span>
                        </div>
                        <div className="space-y-2">
                          {item.aiFlags.map((flag, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <Flag className="w-4 h-4 text-red-400" />
                              <span className="text-white">{flag}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Approve
                  </button>
                  <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Reject
                  </button>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Review
                  </button>
                  <button className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all flex items-center gap-2">
                    <Flag className="w-5 h-5" />
                    Flag User
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminAIModerationQueue;
