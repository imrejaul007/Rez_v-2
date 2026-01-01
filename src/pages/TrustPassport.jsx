import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TrustPassport = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user trust data
  const [trustData] = useState({
    overallScore: 847,
    maxScore: 1000,
    tier: 'Gold',
    tierIcon: '🏆',
    verificationStatus: {
      phone: { verified: true, date: '2024-01-15' },
      email: { verified: true, date: '2024-01-15' },
      aadhaar: { verified: true, date: '2024-02-20' },
      pan: { verified: true, date: '2024-02-20' },
      address: { verified: true, date: '2024-03-01' },
      bank: { verified: false, date: null },
      selfie: { verified: true, date: '2024-02-20' }
    },
    scoreBreakdown: {
      transactionHistory: { score: 185, max: 200, label: 'Transaction History' },
      paymentBehavior: { score: 170, max: 200, label: 'Payment Behavior' },
      reviewQuality: { score: 142, max: 150, label: 'Review Quality' },
      accountAge: { score: 120, max: 150, label: 'Account Age' },
      verificationLevel: { score: 130, max: 150, label: 'Verification Level' },
      communityContribution: { score: 100, max: 150, label: 'Community Contribution' }
    },
    tierBenefits: {
      Bronze: ['Basic cashback rates', '24hr support response', 'Standard delivery'],
      Silver: ['5% extra cashback', '12hr support response', 'Priority delivery', 'Early sale access'],
      Gold: ['10% extra cashback', '4hr support response', 'Free delivery', 'VIP sale access', 'Exclusive deals'],
      Platinum: ['15% extra cashback', '1hr support response', 'Express delivery', 'First access to everything', 'Personal account manager', 'Invite-only events'],
      Diamond: ['20% extra cashback', 'Instant support', 'Same-day delivery', 'Ultimate perks', 'Concierge service', 'VIP experiences']
    },
    history: [
      { date: '2024-12-28', action: 'Completed 100th transaction', points: '+15', type: 'milestone' },
      { date: '2024-12-25', action: 'Helpful review appreciated', points: '+5', type: 'review' },
      { date: '2024-12-20', action: 'On-time payment streak: 50', points: '+20', type: 'payment' },
      { date: '2024-12-15', action: 'Verified bank account', points: '+25', type: 'verification' },
      { date: '2024-12-10', action: 'Referred 5 friends', points: '+30', type: 'referral' }
    ],
    portability: {
      ondc: { connected: true, score: 820, syncDate: '2024-12-25' },
      upi: { connected: true, score: 890, syncDate: '2024-12-20' },
      digilocker: { connected: true, documents: 5, syncDate: '2024-12-15' },
      aadhaar: { connected: true, verified: true, syncDate: '2024-02-20' }
    },
    nextTier: {
      name: 'Platinum',
      requiredScore: 900,
      pointsNeeded: 53,
      tips: [
        'Complete bank verification (+25 points)',
        'Write 3 more quality reviews (+15 points)',
        'Maintain payment streak (+20 points)'
      ]
    }
  });

  const getTierColor = (tier) => {
    const colors = {
      Bronze: 'from-amber-600 to-amber-800',
      Silver: 'from-gray-400 to-gray-600',
      Gold: 'from-yellow-400 to-yellow-600',
      Platinum: 'from-indigo-400 to-indigo-600',
      Diamond: 'from-cyan-300 to-blue-500'
    };
    return colors[tier] || 'from-gray-400 to-gray-600';
  };

  const getScoreColor = (score, max) => {
    const percentage = (score / max) * 100;
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-yellow-500';
    if (percentage >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'breakdown', label: 'Score Breakdown', icon: '📈' },
    { id: 'benefits', label: 'Tier Benefits', icon: '🎁' },
    { id: 'portability', label: 'Portability', icon: '🔗' },
    { id: 'history', label: 'History', icon: '📜' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className={`bg-gradient-to-r ${getTierColor(trustData.tier)} text-white p-6`}>
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Trust Passport</h1>
        </div>

        {/* Trust Score Card */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/80 text-sm">Your Trust Score</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">{trustData.overallScore}</span>
                <span className="text-white/60">/ {trustData.maxScore}</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-1">{trustData.tierIcon}</div>
              <div className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold">
                {trustData.tier} Tier
              </div>
            </div>
          </div>

          {/* Progress to next tier */}
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress to {trustData.nextTier.name}</span>
              <span>{trustData.nextTier.pointsNeeded} points needed</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all"
                style={{ width: `${((trustData.overallScore - 700) / (trustData.nextTier.requiredScore - 700)) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto bg-white border-b sticky top-0 z-10">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-600'
            }`}
          >
            <span className="mr-1">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-2xl mb-1">✅</div>
                <div className="text-2xl font-bold text-green-600">
                  {Object.values(trustData.verificationStatus).filter(v => v.verified).length}
                </div>
                <div className="text-xs text-gray-500">Verified</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-2xl mb-1">🔗</div>
                <div className="text-2xl font-bold text-blue-600">
                  {Object.values(trustData.portability).filter(p => p.connected).length}
                </div>
                <div className="text-xs text-gray-500">Connected</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-2xl mb-1">📈</div>
                <div className="text-2xl font-bold text-purple-600">+65</div>
                <div className="text-xs text-gray-500">This Month</div>
              </div>
            </div>

            {/* Verification Status */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-3">Verification Status</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(trustData.verificationStatus).map(([key, value]) => (
                  <div
                    key={key}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      value.verified ? 'bg-green-50' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">
                        {key === 'phone' && '📱'}
                        {key === 'email' && '📧'}
                        {key === 'aadhaar' && '🆔'}
                        {key === 'pan' && '💳'}
                        {key === 'address' && '🏠'}
                        {key === 'bank' && '🏦'}
                        {key === 'selfie' && '🤳'}
                      </span>
                      <span className="text-sm capitalize">{key}</span>
                    </div>
                    {value.verified ? (
                      <span className="text-green-600 text-lg">✓</span>
                    ) : (
                      <button className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                        Verify
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tips to Improve */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span>💡</span> Tips to Reach {trustData.nextTier.name}
              </h3>
              <div className="space-y-2">
                {trustData.nextTier.tips.map((tip, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="w-5 h-5 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs">
                      {index + 1}
                    </span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Score Breakdown Tab */}
        {activeTab === 'breakdown' && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-4">Score Components</h3>
              <div className="space-y-4">
                {Object.entries(trustData.scoreBreakdown).map(([key, data]) => (
                  <div key={key}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{data.label}</span>
                      <span className="font-medium">{data.score} / {data.max}</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getScoreColor(data.score, data.max)} rounded-full transition-all`}
                        style={{ width: `${(data.score / data.max) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Score Factors */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-3">What Affects Your Score</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-xl">📈</span>
                  <div>
                    <p className="font-medium text-green-800">Positive Factors</p>
                    <p className="text-green-600">Timely payments, quality reviews, verified documents, transaction volume</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <span className="text-xl">📉</span>
                  <div>
                    <p className="font-medium text-red-800">Negative Factors</p>
                    <p className="text-red-600">Payment delays, order cancellations, disputes, inactive periods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <div className="space-y-4">
            {Object.entries(trustData.tierBenefits).map(([tier, benefits]) => (
              <div
                key={tier}
                className={`bg-white rounded-xl p-4 shadow-sm ${
                  tier === trustData.tier ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getTierColor(tier)} flex items-center justify-center text-white text-lg`}>
                      {tier === 'Bronze' && '🥉'}
                      {tier === 'Silver' && '🥈'}
                      {tier === 'Gold' && '🥇'}
                      {tier === 'Platinum' && '💎'}
                      {tier === 'Diamond' && '👑'}
                    </div>
                    <span className="font-semibold">{tier}</span>
                  </div>
                  {tier === trustData.tier && (
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-500">✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Portability Tab */}
        {activeTab === 'portability' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
              <h3 className="font-semibold mb-2">🔗 Cross-Platform Trust</h3>
              <p className="text-sm text-gray-600">
                Your trust score is portable across platforms. Connect more services to strengthen your reputation.
              </p>
            </div>

            <div className="space-y-3">
              {/* ONDC */}
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🛒</span>
                    </div>
                    <div>
                      <p className="font-medium">ONDC Network</p>
                      <p className="text-xs text-gray-500">Open Network for Digital Commerce</p>
                    </div>
                  </div>
                  {trustData.portability.ondc.connected ? (
                    <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm">
                      Connected
                    </span>
                  ) : (
                    <button className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                      Connect
                    </button>
                  )}
                </div>
                {trustData.portability.ondc.connected && (
                  <div className="mt-3 pt-3 border-t flex justify-between text-sm">
                    <span className="text-gray-500">ONDC Score: {trustData.portability.ondc.score}</span>
                    <span className="text-gray-500">Last sync: {trustData.portability.ondc.syncDate}</span>
                  </div>
                )}
              </div>

              {/* UPI */}
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💳</span>
                    </div>
                    <div>
                      <p className="font-medium">UPI Ecosystem</p>
                      <p className="text-xs text-gray-500">Unified Payments Interface</p>
                    </div>
                  </div>
                  <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm">
                    Connected
                  </span>
                </div>
                <div className="mt-3 pt-3 border-t flex justify-between text-sm">
                  <span className="text-gray-500">Payment Score: {trustData.portability.upi.score}</span>
                  <span className="text-gray-500">Last sync: {trustData.portability.upi.syncDate}</span>
                </div>
              </div>

              {/* DigiLocker */}
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📁</span>
                    </div>
                    <div>
                      <p className="font-medium">DigiLocker</p>
                      <p className="text-xs text-gray-500">Government Document Vault</p>
                    </div>
                  </div>
                  <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm">
                    Connected
                  </span>
                </div>
                <div className="mt-3 pt-3 border-t flex justify-between text-sm">
                  <span className="text-gray-500">{trustData.portability.digilocker.documents} documents linked</span>
                  <span className="text-gray-500">Last sync: {trustData.portability.digilocker.syncDate}</span>
                </div>
              </div>

              {/* Aadhaar */}
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🆔</span>
                    </div>
                    <div>
                      <p className="font-medium">Aadhaar</p>
                      <p className="text-xs text-gray-500">UIDAI Verification</p>
                    </div>
                  </div>
                  <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="space-y-3">
            {trustData.history.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.type === 'milestone' ? 'bg-yellow-100' :
                    item.type === 'review' ? 'bg-blue-100' :
                    item.type === 'payment' ? 'bg-green-100' :
                    item.type === 'verification' ? 'bg-purple-100' :
                    'bg-pink-100'
                  }`}>
                    {item.type === 'milestone' && '🏆'}
                    {item.type === 'review' && '⭐'}
                    {item.type === 'payment' && '💰'}
                    {item.type === 'verification' && '✅'}
                    {item.type === 'referral' && '👥'}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.action}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </div>
                <span className="text-green-600 font-semibold">{item.points}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrustPassport;
