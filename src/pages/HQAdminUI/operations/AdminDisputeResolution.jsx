import React, { useState } from 'react';
import {
  ArrowLeft, Scale, AlertTriangle, Clock, CheckCircle, XCircle,
  MessageSquare, Upload, FileText, User, Store, Coins, Shield,
  ChevronRight, Filter, Search, Eye, ThumbsUp, ThumbsDown,
  AlertCircle, RefreshCw, ArrowUp, DollarSign, Gavel, Timer
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDisputeResolution = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pending');
  const [selectedDispute, setSelectedDispute] = useState(null);
  const [showJudgementModal, setShowJudgementModal] = useState(false);

  // Dispute Categories
  const disputeCategories = [
    { id: 'coin_denial', label: 'Coin Denial', icon: Coins, color: 'yellow' },
    { id: 'cashback_rejection', label: 'Cashback Rejected', icon: DollarSign, color: 'green' },
    { id: 'user_vs_merchant', label: 'User vs Merchant', icon: Scale, color: 'blue' },
    { id: 'merchant_vs_platform', label: 'Merchant vs Platform', icon: Store, color: 'purple' },
    { id: 'refund_dispute', label: 'Refund Dispute', icon: RefreshCw, color: 'red' },
    { id: 'offer_dispute', label: 'Offer Not Applied', icon: AlertCircle, color: 'orange' },
  ];

  // SLA Timers
  const slaConfig = {
    first_response: 4, // hours
    resolution_target: 48, // hours
    escalation_auto: 72, // hours - auto escalate if not resolved
    max_resolution: 168, // hours (7 days)
  };

  // Escalation Ladder
  const escalationLadder = [
    { level: 1, name: 'AI Auto-Resolution', autoResolve: true, slaHours: 1 },
    { level: 2, name: 'Support Agent', autoResolve: false, slaHours: 24 },
    { level: 3, name: 'Senior Support', autoResolve: false, slaHours: 48 },
    { level: 4, name: 'Dispute Manager', autoResolve: false, slaHours: 72 },
    { level: 5, name: 'Legal/Compliance', autoResolve: false, slaHours: 168 },
  ];

  // Auto-Judgement Rules
  const [autoRules, setAutoRules] = useState([
    {
      id: 1,
      name: 'Auto-approve if merchant trust < 30',
      condition: 'merchant_trust_score < 30 AND user_trust_score > 70',
      action: 'FAVOR_USER',
      compensation: '100% coins + 20% bonus',
      enabled: true,
      triggered: 156
    },
    {
      id: 2,
      name: 'Auto-reject repeat abusers',
      condition: 'user_dispute_count_30d > 5 AND user_win_rate < 20%',
      action: 'REJECT_DISPUTE',
      compensation: 'None',
      enabled: true,
      triggered: 89
    },
    {
      id: 3,
      name: 'Auto-partial for first-time issues',
      condition: 'user_first_dispute = true AND evidence_score > 50',
      action: 'PARTIAL_FAVOR',
      compensation: '50% coins',
      enabled: true,
      triggered: 234
    },
    {
      id: 4,
      name: 'Auto-escalate high-value disputes',
      condition: 'dispute_value > 5000 OR merchant_tier = platinum',
      action: 'ESCALATE_L3',
      compensation: 'Manual decision',
      enabled: true,
      triggered: 45
    },
  ]);

  // Sample Disputes
  const [disputes, setDisputes] = useState([
    {
      id: 'DSP001',
      category: 'coin_denial',
      status: 'pending',
      priority: 'high',
      createdAt: '2024-12-28 10:30:00',
      slaDeadline: '2024-12-30 10:30:00',
      escalationLevel: 2,

      // Parties
      user: {
        id: 'U12345',
        name: 'Rahul Sharma',
        phone: '+91 98765 43210',
        trustScore: 78,
        totalDisputes: 2,
        disputeWinRate: 50,
      },
      merchant: {
        id: 'M5678',
        name: 'Spice Garden Restaurant',
        trustScore: 85,
        tier: 'Gold',
        totalDisputes: 5,
        disputeLossRate: 20,
      },

      // Dispute Details
      transactionId: 'TXN789456123',
      transactionAmount: 1250,
      coinsExpected: 62,
      coinsReceived: 0,

      description: 'I made a purchase of ₹1,250 and scanned the QR code but received no coins. Bill was uploaded successfully and shows approved status.',

      // Evidence
      evidence: {
        user: [
          { type: 'image', name: 'bill_receipt.jpg', uploadedAt: '2024-12-28 10:35:00' },
          { type: 'image', name: 'qr_scan_screenshot.jpg', uploadedAt: '2024-12-28 10:36:00' },
        ],
        merchant: [
          { type: 'document', name: 'pos_report.pdf', uploadedAt: '2024-12-28 14:20:00' },
        ],
        system: [
          { type: 'log', name: 'Transaction log shows bill approved at 10:32:00' },
          { type: 'log', name: 'Coin credit failed - API timeout' },
        ]
      },

      // Messages
      messages: [
        { from: 'user', text: 'I paid ₹1,250 but got no coins. Please help!', time: '10:30' },
        { from: 'support', text: 'We are investigating your case. Please wait.', time: '11:45' },
        { from: 'merchant', text: 'Customer visited our store and made payment.', time: '14:22' },
      ],

      // AI Analysis
      aiAnalysis: {
        confidence: 92,
        recommendation: 'FAVOR_USER',
        reasoning: 'System logs confirm API timeout during coin credit. Bill was legitimately approved. Recommend full coin credit + goodwill bonus.',
        suggestedResolution: {
          action: 'Credit coins to user',
          coins: 62,
          bonusCoins: 12,
          merchantPenalty: false,
        }
      }
    },
    {
      id: 'DSP002',
      category: 'user_vs_merchant',
      status: 'in_review',
      priority: 'medium',
      createdAt: '2024-12-27 15:20:00',
      slaDeadline: '2024-12-29 15:20:00',
      escalationLevel: 3,

      user: {
        id: 'U23456',
        name: 'Priya Patel',
        phone: '+91 87654 32109',
        trustScore: 65,
        totalDisputes: 4,
        disputeWinRate: 25,
      },
      merchant: {
        id: 'M9012',
        name: 'Fashion Hub',
        trustScore: 72,
        tier: 'Silver',
        totalDisputes: 12,
        disputeLossRate: 33,
      },

      transactionId: 'TXN456789012',
      transactionAmount: 3500,
      coinsExpected: 175,
      coinsReceived: 0,

      description: 'Merchant refused to accept ReZ payment saying their QR is not working. I paid cash but merchant says I cannot get coins for cash payments.',

      evidence: {
        user: [
          { type: 'image', name: 'cash_receipt.jpg', uploadedAt: '2024-12-27 15:25:00' },
        ],
        merchant: [
          { type: 'text', name: 'QR terminal was down for maintenance', uploadedAt: '2024-12-27 18:00:00' },
        ],
        system: [
          { type: 'log', name: 'Merchant QR terminal reported offline from 14:00-17:00' },
        ]
      },

      messages: [],

      aiAnalysis: {
        confidence: 75,
        recommendation: 'PARTIAL_FAVOR',
        reasoning: 'Merchant QR was genuinely down. User could have used app-based payment. Recommend 50% coins as goodwill.',
        suggestedResolution: {
          action: 'Partial coin credit',
          coins: 87,
          bonusCoins: 0,
          merchantPenalty: false,
        }
      }
    },
    {
      id: 'DSP003',
      category: 'merchant_vs_platform',
      status: 'escalated',
      priority: 'critical',
      createdAt: '2024-12-26 09:00:00',
      slaDeadline: '2024-12-28 09:00:00',
      escalationLevel: 4,

      user: null,
      merchant: {
        id: 'M3456',
        name: 'Royal Biryani House',
        trustScore: 91,
        tier: 'Platinum',
        totalDisputes: 1,
        disputeLossRate: 0,
      },

      transactionId: null,
      transactionAmount: 45000,
      coinsExpected: 0,
      coinsReceived: 0,

      description: 'Platform settlement delayed by 5 days. We need immediate settlement of ₹45,000 pending amount. This is affecting our cash flow.',

      evidence: {
        user: [],
        merchant: [
          { type: 'document', name: 'bank_statement.pdf', uploadedAt: '2024-12-26 09:10:00' },
          { type: 'document', name: 'settlement_request.pdf', uploadedAt: '2024-12-26 09:12:00' },
        ],
        system: [
          { type: 'log', name: 'Settlement batch failed on 2024-12-21 due to bank API error' },
          { type: 'log', name: 'Retry scheduled for 2024-12-28' },
        ]
      },

      messages: [
        { from: 'merchant', text: 'Please process our pending settlement urgently', time: '09:00' },
        { from: 'support', text: 'Escalated to finance team for priority processing', time: '10:30' },
      ],

      aiAnalysis: {
        confidence: 95,
        recommendation: 'FAVOR_MERCHANT',
        reasoning: 'Platform settlement failure due to technical issue. Recommend immediate manual settlement + compensation.',
        suggestedResolution: {
          action: 'Immediate settlement',
          coins: 0,
          bonusCoins: 0,
          merchantCompensation: 500,
          merchantPenalty: false,
        }
      }
    },
  ]);

  // Stats
  const stats = {
    pending: disputes.filter(d => d.status === 'pending').length,
    inReview: disputes.filter(d => d.status === 'in_review').length,
    escalated: disputes.filter(d => d.status === 'escalated').length,
    resolved: 1247,
    avgResolutionTime: '18 hrs',
    userWinRate: 62,
    autoResolvedRate: 45,
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-600';
      case 'in_review': return 'bg-blue-600';
      case 'escalated': return 'bg-red-600';
      case 'resolved': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'text-red-400';
      case 'high': return 'text-orange-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const resolveDispute = (disputeId, resolution) => {
    setDisputes(prev => prev.map(d =>
      d.id === disputeId ? { ...d, status: 'resolved', resolution } : d
    ));
    setShowJudgementModal(false);
    setSelectedDispute(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Dispute Resolution Center</h1>
              <p className="text-indigo-200 text-sm">Fair judgement & arbitration</p>
            </div>
          </div>
          <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
            <Gavel size={16} className="mr-1" />
            <span className="text-sm">Justice Hub</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{stats.pending}</p>
            <p className="text-xs text-indigo-200">Pending</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{stats.escalated}</p>
            <p className="text-xs text-indigo-200">Escalated</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{stats.avgResolutionTime}</p>
            <p className="text-xs text-indigo-200">Avg Time</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{stats.autoResolvedRate}%</p>
            <p className="text-xs text-indigo-200">Auto-Resolved</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 px-4">
        {['pending', 'in_review', 'escalated', 'rules'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-4 text-sm font-medium capitalize ${
              activeTab === tab
                ? 'text-indigo-400 border-b-2 border-indigo-400'
                : 'text-gray-400'
            }`}
          >
            {tab.replace('_', ' ')}
            {tab !== 'rules' && (
              <span className="ml-1 bg-gray-700 px-2 py-0.5 rounded-full text-xs">
                {disputes.filter(d => d.status === tab).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab !== 'rules' ? (
          <div className="space-y-4">
            {/* Dispute Categories Filter */}
            <div className="flex overflow-x-auto gap-2 pb-2 -mx-4 px-4">
              {disputeCategories.map(cat => (
                <button
                  key={cat.id}
                  className={`flex items-center bg-gray-800 px-3 py-2 rounded-lg whitespace-nowrap`}
                >
                  <cat.icon size={14} className={`mr-1 text-${cat.color}-400`} />
                  <span className="text-white text-sm">{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Dispute List */}
            {disputes
              .filter(d => d.status === activeTab)
              .map(dispute => (
                <div
                  key={dispute.id}
                  onClick={() => setSelectedDispute(dispute)}
                  className="bg-gray-800 rounded-xl p-4 cursor-pointer hover:bg-gray-750"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center">
                        <span className="text-white font-bold">{dispute.id}</span>
                        <span className={`ml-2 text-xs ${getPriorityColor(dispute.priority)} uppercase`}>
                          {dispute.priority}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {disputeCategories.find(c => c.id === dispute.category)?.label}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`${getStatusColor(dispute.status)} text-white text-xs px-2 py-1 rounded-full`}>
                        {dispute.status.replace('_', ' ')}
                      </span>
                      <p className="text-gray-500 text-xs mt-1">Level {dispute.escalationLevel}</p>
                    </div>
                  </div>

                  {/* Parties */}
                  <div className="flex items-center justify-between bg-gray-700/30 rounded-lg p-3 mb-3">
                    {dispute.user && (
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                          <User size={16} className="text-white" />
                        </div>
                        <div>
                          <p className="text-white text-sm">{dispute.user.name}</p>
                          <p className="text-gray-400 text-xs">Trust: {dispute.user.trustScore}</p>
                        </div>
                      </div>
                    )}

                    <Scale size={20} className="text-gray-500" />

                    <div className="flex items-center">
                      <div>
                        <p className="text-white text-sm text-right">{dispute.merchant.name}</p>
                        <p className="text-gray-400 text-xs text-right">Trust: {dispute.merchant.trustScore}</p>
                      </div>
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center ml-2">
                        <Store size={16} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Amount & SLA */}
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-gray-400 text-xs">Disputed Amount</p>
                      <p className="text-white font-bold">₹{dispute.transactionAmount}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Coins at Stake</p>
                      <p className="text-yellow-400 font-bold">{dispute.coinsExpected} coins</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-xs">SLA Deadline</p>
                      <p className="text-orange-400 text-sm flex items-center">
                        <Timer size={12} className="mr-1" />
                        {new Date(dispute.slaDeadline).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* AI Recommendation */}
                  <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Shield size={16} className="text-indigo-400 mr-2" />
                        <span className="text-indigo-300 text-sm">AI Recommendation</span>
                      </div>
                      <span className="text-indigo-400 text-sm">{dispute.aiAnalysis.confidence}% confident</span>
                    </div>
                    <p className="text-white text-sm mt-2">{dispute.aiAnalysis.recommendation.replace('_', ' ')}</p>
                    <p className="text-gray-400 text-xs mt-1">{dispute.aiAnalysis.reasoning}</p>
                  </div>
                </div>
              ))}

            {disputes.filter(d => d.status === activeTab).length === 0 && (
              <div className="text-center py-12">
                <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
                <p className="text-white font-medium">No {activeTab.replace('_', ' ')} disputes</p>
                <p className="text-gray-400 text-sm">All caught up!</p>
              </div>
            )}
          </div>
        ) : (
          /* Auto-Judgement Rules Tab */
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Gavel size={18} className="text-indigo-400 mr-2" />
                Automated Judgement Rules
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Rules that automatically resolve disputes without human intervention
              </p>

              <div className="space-y-3">
                {autoRules.map(rule => (
                  <div key={rule.id} className="bg-gray-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium">{rule.name}</h4>
                      <button
                        onClick={() => setAutoRules(prev => prev.map(r =>
                          r.id === rule.id ? { ...r, enabled: !r.enabled } : r
                        ))}
                        className={`px-3 py-1 rounded-full text-xs ${
                          rule.enabled ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'
                        }`}
                      >
                        {rule.enabled ? 'Active' : 'Disabled'}
                      </button>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-400">
                        <span className="text-gray-500">IF:</span> {rule.condition}
                      </p>
                      <p className="text-gray-400">
                        <span className="text-gray-500">THEN:</span>{' '}
                        <span className="text-indigo-400">{rule.action}</span>
                      </p>
                      <p className="text-gray-400">
                        <span className="text-gray-500">COMPENSATION:</span>{' '}
                        <span className="text-green-400">{rule.compensation}</span>
                      </p>
                    </div>
                    <p className="text-gray-500 text-xs mt-2">
                      Triggered {rule.triggered} times
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Escalation Ladder */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <ArrowUp size={18} className="text-orange-400 mr-2" />
                Escalation Ladder
              </h3>

              <div className="space-y-2">
                {escalationLadder.map((level, idx) => (
                  <div key={level.level} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                      idx === 0 ? 'bg-green-600' :
                      idx === escalationLadder.length - 1 ? 'bg-red-600' : 'bg-gray-600'
                    }`}>
                      <span className="text-white font-bold">{level.level}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{level.name}</p>
                      <p className="text-gray-400 text-xs">
                        SLA: {level.slaHours}h | {level.autoResolve ? 'Auto-resolve enabled' : 'Manual review'}
                      </p>
                    </div>
                    {idx < escalationLadder.length - 1 && (
                      <ChevronRight size={20} className="text-gray-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* SLA Configuration */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Timer size={18} className="text-yellow-400 mr-2" />
                SLA Configuration
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">First Response</p>
                  <p className="text-white font-bold">{slaConfig.first_response} hours</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Resolution Target</p>
                  <p className="text-white font-bold">{slaConfig.resolution_target} hours</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Auto Escalation</p>
                  <p className="text-orange-400 font-bold">{slaConfig.escalation_auto} hours</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Max Resolution</p>
                  <p className="text-red-400 font-bold">{slaConfig.max_resolution} hours</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dispute Detail Modal */}
      {selectedDispute && (
        <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto">
          <div className="min-h-screen p-4">
            <div className="bg-gray-900 rounded-2xl max-w-lg mx-auto">
              {/* Modal Header */}
              <div className="bg-gray-800 rounded-t-2xl p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold">{selectedDispute.id}</h3>
                  <p className="text-gray-400 text-sm">
                    {disputeCategories.find(c => c.id === selectedDispute.category)?.label}
                  </p>
                </div>
                <button onClick={() => setSelectedDispute(null)}>
                  <XCircle size={24} className="text-gray-400" />
                </button>
              </div>

              <div className="p-4 space-y-4">
                {/* Parties */}
                <div className="grid grid-cols-2 gap-4">
                  {selectedDispute.user && (
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-3">
                      <div className="flex items-center mb-2">
                        <User size={16} className="text-blue-400 mr-2" />
                        <span className="text-blue-400 text-sm font-medium">Complainant</span>
                      </div>
                      <p className="text-white font-medium">{selectedDispute.user.name}</p>
                      <p className="text-gray-400 text-xs">Trust Score: {selectedDispute.user.trustScore}</p>
                      <p className="text-gray-400 text-xs">
                        Disputes: {selectedDispute.user.totalDisputes} ({selectedDispute.user.disputeWinRate}% won)
                      </p>
                    </div>
                  )}

                  <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-3">
                    <div className="flex items-center mb-2">
                      <Store size={16} className="text-purple-400 mr-2" />
                      <span className="text-purple-400 text-sm font-medium">Merchant</span>
                    </div>
                    <p className="text-white font-medium">{selectedDispute.merchant.name}</p>
                    <p className="text-gray-400 text-xs">Trust Score: {selectedDispute.merchant.trustScore}</p>
                    <p className="text-gray-400 text-xs">Tier: {selectedDispute.merchant.tier}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-gray-800 rounded-xl p-4">
                  <h4 className="text-white font-medium mb-2">Dispute Description</h4>
                  <p className="text-gray-300 text-sm">{selectedDispute.description}</p>
                </div>

                {/* Evidence */}
                <div className="bg-gray-800 rounded-xl p-4">
                  <h4 className="text-white font-medium mb-3">Evidence Submitted</h4>

                  {selectedDispute.evidence.user.length > 0 && (
                    <div className="mb-3">
                      <p className="text-blue-400 text-xs mb-2">From User:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedDispute.evidence.user.map((e, idx) => (
                          <div key={idx} className="bg-gray-700 rounded-lg px-3 py-2 flex items-center">
                            <FileText size={14} className="text-gray-400 mr-2" />
                            <span className="text-white text-sm">{e.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedDispute.evidence.merchant.length > 0 && (
                    <div className="mb-3">
                      <p className="text-purple-400 text-xs mb-2">From Merchant:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedDispute.evidence.merchant.map((e, idx) => (
                          <div key={idx} className="bg-gray-700 rounded-lg px-3 py-2 flex items-center">
                            <FileText size={14} className="text-gray-400 mr-2" />
                            <span className="text-white text-sm">{e.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="text-gray-400 text-xs mb-2">System Logs:</p>
                    {selectedDispute.evidence.system.map((e, idx) => (
                      <p key={idx} className="text-gray-300 text-xs bg-gray-700/50 rounded px-2 py-1 mb-1">
                        {e.name}
                      </p>
                    ))}
                  </div>
                </div>

                {/* AI Analysis */}
                <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Shield size={18} className="text-indigo-400 mr-2" />
                      <span className="text-indigo-300 font-medium">AI Analysis</span>
                    </div>
                    <span className="text-indigo-400 font-bold">{selectedDispute.aiAnalysis.confidence}% confidence</span>
                  </div>

                  <div className="bg-indigo-900/50 rounded-lg p-3 mb-3">
                    <p className="text-white font-medium mb-1">Recommendation: {selectedDispute.aiAnalysis.recommendation.replace('_', ' ')}</p>
                    <p className="text-gray-300 text-sm">{selectedDispute.aiAnalysis.reasoning}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-gray-800/50 rounded-lg p-2">
                      <p className="text-gray-400 text-xs">Coins to Credit</p>
                      <p className="text-yellow-400 font-bold">{selectedDispute.aiAnalysis.suggestedResolution.coins}</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-2">
                      <p className="text-gray-400 text-xs">Bonus Coins</p>
                      <p className="text-green-400 font-bold">{selectedDispute.aiAnalysis.suggestedResolution.bonusCoins}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => resolveDispute(selectedDispute.id, 'rejected')}
                    className="bg-red-600/20 text-red-400 py-3 rounded-xl font-medium flex items-center justify-center"
                  >
                    <XCircle size={18} className="mr-1" />
                    Reject
                  </button>
                  <button
                    onClick={() => resolveDispute(selectedDispute.id, 'partial')}
                    className="bg-yellow-600/20 text-yellow-400 py-3 rounded-xl font-medium flex items-center justify-center"
                  >
                    <Scale size={18} className="mr-1" />
                    Partial
                  </button>
                  <button
                    onClick={() => resolveDispute(selectedDispute.id, 'approved')}
                    className="bg-green-600 text-white py-3 rounded-xl font-bold flex items-center justify-center"
                  >
                    <CheckCircle size={18} className="mr-1" />
                    Approve
                  </button>
                </div>

                <button
                  onClick={() => {
                    setDisputes(prev => prev.map(d =>
                      d.id === selectedDispute.id
                        ? { ...d, status: 'escalated', escalationLevel: d.escalationLevel + 1 }
                        : d
                    ));
                    setSelectedDispute(null);
                  }}
                  className="w-full bg-orange-600/20 text-orange-400 py-3 rounded-xl font-medium flex items-center justify-center"
                >
                  <ArrowUp size={18} className="mr-2" />
                  Escalate to Level {selectedDispute.escalationLevel + 1}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDisputeResolution;
