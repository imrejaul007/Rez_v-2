import { useState } from 'react';
import { ArrowLeft, Gift, TrendingUp, Award, Star, Clock, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';

export default function WalletRewards() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('available');

  // Backend API: GET /api/wallet/rewards/available
  // Backend API: GET /api/wallet/rewards/history
  // Backend API: POST /api/wallet/rewards/:id/claim

  const rewards = {
    totalEarned: 2340,
    thisMonth: 450,
    pending: 120,
    tier: 'Gold',
  };

  const availableRewards = [
    {
      id: '1',
      title: 'First Transaction Bonus',
      description: 'Complete your first wallet transaction',
      coins: 50,
      expires: '2 days left',
      type: 'task',
      progress: { current: 0, total: 1 },
    },
    {
      id: '2',
      title: 'Refer 3 Friends',
      description: 'Get 100 coins for each friend who joins',
      coins: 300,
      expires: '7 days left',
      type: 'referral',
      progress: { current: 1, total: 3 },
    },
    {
      id: '3',
      title: 'Spend ₹5000',
      description: 'Earn cashback on wallet spending',
      coins: 250,
      expires: '15 days left',
      type: 'spending',
      progress: { current: 3200, total: 5000 },
    },
  ];

  const history = [
    {
      id: '1',
      title: 'Sign-up Bonus',
      coins: 100,
      date: 'Jan 1, 2026',
      status: 'claimed',
    },
    {
      id: '2',
      title: 'Daily Check-in',
      coins: 20,
      date: 'Today',
      status: 'claimed',
    },
    {
      id: '3',
      title: 'Friend Referral',
      coins: 100,
      date: 'Dec 28, 2025',
      status: 'claimed',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6">
        <button onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Rewards</h1>
            <p className="text-yellow-100 mt-1">Earn coins & cashback</p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full">
              <p className="text-3xl font-bold">{rewards.totalEarned}</p>
              <p className="text-xs mt-1">Total Coins</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="p-4 bg-white border-b border-gray-100">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="text-yellow-600" size={20} />
            </div>
            <p className="text-lg font-bold text-gray-900">{rewards.thisMonth}</p>
            <p className="text-xs text-gray-500">This Month</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Clock className="text-orange-600" size={20} />
            </div>
            <p className="text-lg font-bold text-gray-900">{rewards.pending}</p>
            <p className="text-xs text-gray-500">Pending</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Award className="text-purple-600" size={20} />
            </div>
            <p className="text-lg font-bold text-gray-900">{rewards.tier}</p>
            <p className="text-xs text-gray-500">Tier</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100">
        <div className="flex">
          <button
            onClick={() => setActiveTab('available')}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === 'available'
                ? 'text-yellow-600 border-b-2 border-yellow-600'
                : 'text-gray-500'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === 'history'
                ? 'text-yellow-600 border-b-2 border-yellow-600'
                : 'text-gray-500'
            }`}
          >
            History
          </button>
        </div>
      </div>

      {/* Available Rewards */}
      {activeTab === 'available' && (
        <div className="p-4 space-y-3">
          {availableRewards.map((reward) => (
            <div key={reward.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Gift className="text-yellow-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-gray-900">{reward.title}</h3>
                    <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-bold">
                      +{reward.coins}🪙
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{reward.description}</p>

                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>
                        {reward.progress.current}/{reward.progress.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all"
                        style={{
                          width: `${(reward.progress.current / reward.progress.total) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={12} />
                      {reward.expires}
                    </div>
                    {reward.progress.current >= reward.progress.total ? (
                      <button className="bg-yellow-500 text-white px-4 py-1 rounded-lg text-sm font-medium">
                        Claim
                      </button>
                    ) : (
                      <button className="text-yellow-600 text-sm font-medium">
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {availableRewards.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-4">
                <Gift className="text-gray-400" size={40} />
              </div>
              <p className="text-gray-500">No rewards available</p>
              <p className="text-sm text-gray-400 mt-1">Check back later for new rewards</p>
            </div>
          )}
        </div>
      )}

      {/* History */}
      {activeTab === 'history' && (
        <div className="p-4 space-y-3">
          {history.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">+{item.coins}🪙</p>
                <span className="text-xs text-gray-500">Claimed</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <BottomNav />
    </div>
  );
}
