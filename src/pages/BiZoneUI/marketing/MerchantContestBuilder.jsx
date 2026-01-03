import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MerchantContestBuilder = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [contestForm, setContestForm] = useState({
    name: '',
    type: 'spending',
    target: '',
    reward: '',
    rewardType: 'coins',
    startDate: '',
    endDate: '',
    maxParticipants: '',
    description: ''
  });

  // Mock contests data
  const [contests] = useState([
    {
      id: 1,
      name: 'Weekend Shopping Spree',
      type: 'spending',
      status: 'active',
      target: 5000,
      targetUnit: 'Spend ₹5,000',
      reward: 500,
      rewardType: 'coins',
      startDate: '2024-12-25',
      endDate: '2024-12-31',
      participants: 156,
      maxParticipants: 500,
      completions: 42,
      engagement: 27,
      budget: 25000,
      spent: 21000
    },
    {
      id: 2,
      name: 'Review Champion',
      type: 'review',
      status: 'active',
      target: 3,
      targetUnit: 'Write 3 reviews',
      reward: 200,
      rewardType: 'coins',
      startDate: '2024-12-20',
      endDate: '2025-01-05',
      participants: 89,
      maxParticipants: 200,
      completions: 34,
      engagement: 38,
      budget: 10000,
      spent: 6800
    },
    {
      id: 3,
      name: 'New Year Photo Contest',
      type: 'ugc',
      status: 'draft',
      target: 1,
      targetUnit: 'Share 1 photo',
      reward: 1000,
      rewardType: 'voucher',
      startDate: '2025-01-01',
      endDate: '2025-01-07',
      participants: 0,
      maxParticipants: 100,
      completions: 0,
      engagement: 0,
      budget: 50000,
      spent: 0
    },
    {
      id: 4,
      name: 'Diwali Bonanza',
      type: 'spending',
      status: 'completed',
      target: 10000,
      targetUnit: 'Spend ₹10,000',
      reward: 1500,
      rewardType: 'coins',
      startDate: '2024-10-20',
      endDate: '2024-11-05',
      participants: 423,
      maxParticipants: 500,
      completions: 156,
      engagement: 37,
      budget: 75000,
      spent: 75000
    }
  ]);

  const contestTypes = [
    { id: 'spending', label: 'Spending Challenge', icon: '💰', description: 'Reward customers for spending a target amount' },
    { id: 'visit', label: 'Visit Challenge', icon: '🏪', description: 'Reward customers for multiple visits' },
    { id: 'review', label: 'Review Challenge', icon: '⭐', description: 'Encourage customers to write reviews' },
    { id: 'referral', label: 'Referral Challenge', icon: '👥', description: 'Reward customers for bringing friends' },
    { id: 'ugc', label: 'Photo/Video Contest', icon: '📸', description: 'User-generated content campaign' },
    { id: 'quiz', label: 'Quiz Challenge', icon: '🧠', description: 'Fun trivia about your brand' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-700',
      draft: 'bg-gray-100 text-gray-700',
      completed: 'bg-blue-100 text-blue-700',
      paused: 'bg-yellow-100 text-yellow-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getTypeIcon = (type) => {
    const icons = {
      spending: '💰',
      visit: '🏪',
      review: '⭐',
      referral: '👥',
      ugc: '📸',
      quiz: '🧠'
    };
    return icons[type] || '🎯';
  };

  const activeContests = contests.filter(c => c.status === 'active');
  const draftContests = contests.filter(c => c.status === 'draft');
  const completedContests = contests.filter(c => c.status === 'completed');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Contest Builder</h1>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold">{activeContests.length}</div>
            <div className="text-xs text-white/80">Active</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold">
              {activeContests.reduce((sum, c) => sum + c.participants, 0)}
            </div>
            <div className="text-xs text-white/80">Participants</div>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold">
              ₹{(activeContests.reduce((sum, c) => sum + c.spent, 0) / 1000).toFixed(0)}K
            </div>
            <div className="text-xs text-white/80">Rewards Given</div>
          </div>
        </div>
      </div>

      {/* Create Button */}
      <div className="p-4">
        <button
          onClick={() => setShowCreateModal(true)}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2"
        >
          <span className="text-xl">+</span>
          Create New Contest
        </button>
      </div>

      {/* Tabs */}
      <div className="flex bg-white border-b sticky top-0 z-10">
        <button
          onClick={() => setActiveTab('active')}
          className={`flex-1 py-3 text-sm font-medium border-b-2 ${
            activeTab === 'active' ? 'border-purple-600 text-purple-600' : 'border-transparent text-gray-600'
          }`}
        >
          Active ({activeContests.length})
        </button>
        <button
          onClick={() => setActiveTab('draft')}
          className={`flex-1 py-3 text-sm font-medium border-b-2 ${
            activeTab === 'draft' ? 'border-purple-600 text-purple-600' : 'border-transparent text-gray-600'
          }`}
        >
          Drafts ({draftContests.length})
        </button>
        <button
          onClick={() => setActiveTab('completed')}
          className={`flex-1 py-3 text-sm font-medium border-b-2 ${
            activeTab === 'completed' ? 'border-purple-600 text-purple-600' : 'border-transparent text-gray-600'
          }`}
        >
          Completed ({completedContests.length})
        </button>
      </div>

      {/* Contest List */}
      <div className="p-4 space-y-4">
        {(activeTab === 'active' ? activeContests :
          activeTab === 'draft' ? draftContests :
          completedContests).map(contest => (
          <div key={contest.id} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                  {getTypeIcon(contest.type)}
                </div>
                <div>
                  <p className="font-medium">{contest.name}</p>
                  <p className="text-sm text-gray-500">{contest.targetUnit}</p>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(contest.status)}`}>
                {contest.status}
              </span>
            </div>

            {/* Progress */}
            {contest.status !== 'draft' && (
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500">Participants</span>
                  <span>{contest.participants} / {contest.maxParticipants}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-500 rounded-full"
                    style={{ width: `${(contest.participants / contest.maxParticipants) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-2 text-center text-sm mb-3">
              <div className="bg-gray-50 rounded-lg p-2">
                <div className="font-bold text-purple-600">{contest.completions}</div>
                <div className="text-xs text-gray-500">Completed</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <div className="font-bold text-blue-600">{contest.engagement}%</div>
                <div className="text-xs text-gray-500">Engagement</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <div className="font-bold text-green-600">{contest.reward}</div>
                <div className="text-xs text-gray-500">{contest.rewardType}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <div className="font-bold text-orange-600">₹{(contest.spent / 1000).toFixed(0)}K</div>
                <div className="text-xs text-gray-500">Spent</div>
              </div>
            </div>

            {/* Date Range */}
            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
              <span>{contest.startDate} - {contest.endDate}</span>
              <span>Budget: ₹{contest.budget.toLocaleString()}</span>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              {contest.status === 'active' && (
                <>
                  <button className="flex-1 bg-purple-100 text-purple-700 py-2 rounded-lg text-sm font-medium">
                    View Details
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">
                    Pause
                  </button>
                </>
              )}
              {contest.status === 'draft' && (
                <>
                  <button className="flex-1 bg-green-500 text-white py-2 rounded-lg text-sm font-medium">
                    Launch
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">
                    Edit
                  </button>
                </>
              )}
              {contest.status === 'completed' && (
                <>
                  <button className="flex-1 bg-purple-100 text-purple-700 py-2 rounded-lg text-sm font-medium">
                    View Report
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">
                    Duplicate
                  </button>
                </>
              )}
            </div>
          </div>
        ))}

        {(activeTab === 'active' ? activeContests :
          activeTab === 'draft' ? draftContests :
          completedContests).length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎯</div>
            <p className="text-gray-500">No {activeTab} contests</p>
          </div>
        )}
      </div>

      {/* Create Contest Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full max-h-[90vh] rounded-t-2xl overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h2 className="font-bold">Create Contest</h2>
              <button onClick={() => setShowCreateModal(false)} className="text-2xl">&times;</button>
            </div>

            <div className="p-4 space-y-4">
              {/* Contest Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Contest Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {contestTypes.map(type => (
                    <button
                      key={type.id}
                      onClick={() => setContestForm({ ...contestForm, type: type.id })}
                      className={`p-3 rounded-xl text-left border-2 ${
                        contestForm.type === type.id
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">{type.icon}</span>
                        <span className="font-medium text-sm">{type.label}</span>
                      </div>
                      <p className="text-xs text-gray-500">{type.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contest Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Contest Name</label>
                <input
                  type="text"
                  value={contestForm.name}
                  onChange={(e) => setContestForm({ ...contestForm, name: e.target.value })}
                  className="w-full border rounded-xl p-3"
                  placeholder="e.g., Weekend Shopping Spree"
                />
              </div>

              {/* Target */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Target {contestForm.type === 'spending' ? '(Amount in ₹)' :
                          contestForm.type === 'visit' ? '(Number of visits)' :
                          contestForm.type === 'review' ? '(Number of reviews)' :
                          contestForm.type === 'referral' ? '(Number of referrals)' :
                          '(Required submissions)'}
                </label>
                <input
                  type="number"
                  value={contestForm.target}
                  onChange={(e) => setContestForm({ ...contestForm, target: e.target.value })}
                  className="w-full border rounded-xl p-3"
                  placeholder="Enter target"
                />
              </div>

              {/* Reward */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-2">Reward Amount</label>
                  <input
                    type="number"
                    value={contestForm.reward}
                    onChange={(e) => setContestForm({ ...contestForm, reward: e.target.value })}
                    className="w-full border rounded-xl p-3"
                    placeholder="e.g., 500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Reward Type</label>
                  <select
                    value={contestForm.rewardType}
                    onChange={(e) => setContestForm({ ...contestForm, rewardType: e.target.value })}
                    className="w-full border rounded-xl p-3"
                  >
                    <option value="coins">Coins</option>
                    <option value="voucher">Voucher</option>
                    <option value="discount">Discount %</option>
                    <option value="freebie">Free Product</option>
                  </select>
                </div>
              </div>

              {/* Date Range */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-2">Start Date</label>
                  <input
                    type="date"
                    value={contestForm.startDate}
                    onChange={(e) => setContestForm({ ...contestForm, startDate: e.target.value })}
                    className="w-full border rounded-xl p-3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">End Date</label>
                  <input
                    type="date"
                    value={contestForm.endDate}
                    onChange={(e) => setContestForm({ ...contestForm, endDate: e.target.value })}
                    className="w-full border rounded-xl p-3"
                  />
                </div>
              </div>

              {/* Max Participants */}
              <div>
                <label className="block text-sm font-medium mb-2">Max Participants</label>
                <input
                  type="number"
                  value={contestForm.maxParticipants}
                  onChange={(e) => setContestForm({ ...contestForm, maxParticipants: e.target.value })}
                  className="w-full border rounded-xl p-3"
                  placeholder="Leave empty for unlimited"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={contestForm.description}
                  onChange={(e) => setContestForm({ ...contestForm, description: e.target.value })}
                  className="w-full border rounded-xl p-3 h-20"
                  placeholder="Describe the contest rules and how to participate..."
                />
              </div>

              {/* Budget Estimate */}
              <div className="bg-purple-50 rounded-xl p-4">
                <h4 className="font-medium text-purple-800 mb-2">Estimated Budget</h4>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-700">Max rewards (if all complete)</span>
                  <span className="font-bold text-purple-800">
                    ₹{(contestForm.reward * contestForm.maxParticipants) || 0}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-medium"
                >
                  Save as Draft
                </button>
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-medium">
                  Launch Contest
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchantContestBuilder;
