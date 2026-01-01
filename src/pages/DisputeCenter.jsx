import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DisputeCenter = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');
  const [selectedDispute, setSelectedDispute] = useState(null);
  const [showNewDispute, setShowNewDispute] = useState(false);

  // Mock disputes data
  const [disputes] = useState([
    {
      id: 'DSP-2024-001',
      orderId: 'ORD-789456',
      merchant: 'Fresh Mart',
      merchantLogo: '🛒',
      type: 'refund',
      reason: 'Product damaged during delivery',
      amount: 450,
      status: 'in_review',
      stage: 2,
      stages: [
        { name: 'Submitted', completed: true, date: '2024-12-26' },
        { name: 'AI Review', completed: true, date: '2024-12-26', note: 'Evidence reviewed' },
        { name: 'Support Review', completed: false, date: null },
        { name: 'Manager Escalation', completed: false, date: null },
        { name: 'Resolution', completed: false, date: null }
      ],
      createdAt: '2024-12-26',
      expectedResolution: '2024-12-29',
      slaHours: 72,
      remainingHours: 48,
      evidence: [
        { type: 'photo', name: 'damaged_product.jpg', uploadedAt: '2024-12-26' }
      ],
      messages: [
        { from: 'system', message: 'Your dispute has been submitted successfully.', time: '2024-12-26 10:30' },
        { from: 'ai', message: 'Based on the evidence provided, this appears to be a valid damage claim. Escalating to support team.', time: '2024-12-26 10:35' },
        { from: 'support', message: 'We are reviewing your case. Please allow 24-48 hours for resolution.', time: '2024-12-26 11:00' }
      ],
      canAppeal: false
    },
    {
      id: 'DSP-2024-002',
      orderId: 'ORD-654321',
      merchant: 'Tech World',
      merchantLogo: '💻',
      type: 'wrong_item',
      reason: 'Received wrong color variant',
      amount: 1299,
      status: 'resolved',
      stage: 5,
      stages: [
        { name: 'Submitted', completed: true, date: '2024-12-20' },
        { name: 'AI Review', completed: true, date: '2024-12-20' },
        { name: 'Support Review', completed: true, date: '2024-12-21' },
        { name: 'Merchant Response', completed: true, date: '2024-12-22' },
        { name: 'Resolution', completed: true, date: '2024-12-23', note: 'Full refund processed' }
      ],
      createdAt: '2024-12-20',
      resolvedAt: '2024-12-23',
      resolution: 'Full refund of ₹1,299 credited to wallet',
      resolutionType: 'refund',
      canAppeal: true,
      appealDeadline: '2024-12-30'
    },
    {
      id: 'DSP-2024-003',
      orderId: 'ORD-111222',
      merchant: 'Quick Bites',
      merchantLogo: '🍔',
      type: 'quality',
      reason: 'Food quality not as expected',
      amount: 350,
      status: 'escalated',
      stage: 4,
      stages: [
        { name: 'Submitted', completed: true, date: '2024-12-24' },
        { name: 'AI Review', completed: true, date: '2024-12-24' },
        { name: 'Support Review', completed: true, date: '2024-12-25' },
        { name: 'Manager Escalation', completed: true, date: '2024-12-26', note: 'Under manager review' },
        { name: 'Resolution', completed: false, date: null }
      ],
      createdAt: '2024-12-24',
      expectedResolution: '2024-12-28',
      slaHours: 96,
      remainingHours: 24,
      messages: [
        { from: 'system', message: 'Case escalated to manager due to complexity.', time: '2024-12-26 09:00' },
        { from: 'manager', message: 'I am personally reviewing this case. We take food quality very seriously.', time: '2024-12-26 10:00' }
      ],
      canAppeal: false
    }
  ]);

  const disputeTypes = [
    { id: 'refund', label: 'Refund Request', icon: '💰' },
    { id: 'wrong_item', label: 'Wrong Item Received', icon: '📦' },
    { id: 'quality', label: 'Quality Issue', icon: '⚠️' },
    { id: 'not_delivered', label: 'Not Delivered', icon: '🚫' },
    { id: 'damaged', label: 'Damaged Product', icon: '💔' },
    { id: 'missing_items', label: 'Missing Items', icon: '❓' },
    { id: 'overcharge', label: 'Overcharged', icon: '💳' },
    { id: 'other', label: 'Other', icon: '📝' }
  ];

  const getStatusColor = (status) => {
    const colors = {
      submitted: 'bg-blue-100 text-blue-700',
      in_review: 'bg-yellow-100 text-yellow-700',
      escalated: 'bg-orange-100 text-orange-700',
      resolved: 'bg-green-100 text-green-700',
      rejected: 'bg-red-100 text-red-700',
      appealed: 'bg-purple-100 text-purple-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getStatusLabel = (status) => {
    const labels = {
      submitted: 'Submitted',
      in_review: 'In Review',
      escalated: 'Escalated',
      resolved: 'Resolved',
      rejected: 'Rejected',
      appealed: 'Under Appeal'
    };
    return labels[status] || status;
  };

  const activeDisputes = disputes.filter(d => ['submitted', 'in_review', 'escalated', 'appealed'].includes(d.status));
  const resolvedDisputes = disputes.filter(d => ['resolved', 'rejected'].includes(d.status));

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-20">
        <div className="flex items-center gap-3 p-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Dispute Center</h1>
        </div>

        {/* Tabs */}
        <div className="flex border-t">
          <button
            onClick={() => setActiveTab('active')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 ${
              activeTab === 'active' ? 'border-purple-600 text-purple-600' : 'border-transparent text-gray-600'
            }`}
          >
            Active ({activeDisputes.length})
          </button>
          <button
            onClick={() => setActiveTab('resolved')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 ${
              activeTab === 'resolved' ? 'border-purple-600 text-purple-600' : 'border-transparent text-gray-600'
            }`}
          >
            Resolved ({resolvedDisputes.length})
          </button>
        </div>
      </div>

      {/* New Dispute Button */}
      <div className="p-4">
        <button
          onClick={() => setShowNewDispute(true)}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2"
        >
          <span className="text-xl">+</span>
          Raise New Dispute
        </button>
      </div>

      {/* Dispute List */}
      <div className="px-4 space-y-4">
        {(activeTab === 'active' ? activeDisputes : resolvedDisputes).map(dispute => (
          <div
            key={dispute.id}
            onClick={() => setSelectedDispute(dispute)}
            className="bg-white rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                  {dispute.merchantLogo}
                </div>
                <div>
                  <p className="font-medium">{dispute.merchant}</p>
                  <p className="text-xs text-gray-500">Order: {dispute.orderId}</p>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(dispute.status)}`}>
                {getStatusLabel(dispute.status)}
              </span>
            </div>

            <div className="mb-3">
              <p className="text-sm text-gray-700">{dispute.reason}</p>
              <p className="text-sm font-semibold text-purple-600">Amount: ₹{dispute.amount}</p>
            </div>

            {/* Progress Stages */}
            <div className="mb-3">
              <div className="flex justify-between">
                {dispute.stages.slice(0, 5).map((stage, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      stage.completed
                        ? 'bg-green-500 text-white'
                        : idx === dispute.stage
                          ? 'bg-yellow-500 text-white'
                          : 'bg-gray-200 text-gray-500'
                    }`}>
                      {stage.completed ? '✓' : idx + 1}
                    </div>
                    {idx < dispute.stages.length - 1 && (
                      <div className={`h-0.5 w-full mt-3 ${
                        stage.completed ? 'bg-green-500' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {dispute.stages.slice(0, 5).map((stage, idx) => (
                  <div key={idx} className="flex-1 text-center">
                    <p className="text-[10px] text-gray-500 truncate px-1">{stage.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SLA Timer for active disputes */}
            {dispute.remainingHours && (
              <div className="flex items-center justify-between text-sm bg-blue-50 rounded-lg p-2">
                <span className="text-blue-700">Expected resolution</span>
                <span className="font-medium text-blue-800">{dispute.remainingHours}h remaining</span>
              </div>
            )}

            {/* Appeal option for resolved disputes */}
            {dispute.canAppeal && (
              <div className="flex items-center justify-between text-sm bg-orange-50 rounded-lg p-2 mt-2">
                <span className="text-orange-700">Not satisfied with resolution?</span>
                <button className="font-medium text-orange-800 underline">Appeal</button>
              </div>
            )}
          </div>
        ))}

        {(activeTab === 'active' ? activeDisputes : resolvedDisputes).length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">{activeTab === 'active' ? '✅' : '📋'}</div>
            <p className="text-gray-500">
              {activeTab === 'active' ? 'No active disputes' : 'No resolved disputes yet'}
            </p>
          </div>
        )}
      </div>

      {/* Dispute Detail Modal */}
      {selectedDispute && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full max-h-[90vh] rounded-t-2xl overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h2 className="font-bold">Dispute #{selectedDispute.id}</h2>
              <button onClick={() => setSelectedDispute(null)} className="text-2xl">&times;</button>
            </div>

            <div className="p-4 space-y-4">
              {/* Dispute Info */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-3xl shadow-sm">
                    {selectedDispute.merchantLogo}
                  </div>
                  <div>
                    <p className="font-semibold">{selectedDispute.merchant}</p>
                    <p className="text-sm text-gray-500">Order: {selectedDispute.orderId}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500">Type</p>
                    <p className="font-medium capitalize">{selectedDispute.type.replace('_', ' ')}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Amount</p>
                    <p className="font-medium">₹{selectedDispute.amount}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Created</p>
                    <p className="font-medium">{selectedDispute.createdAt}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Status</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(selectedDispute.status)}`}>
                      {getStatusLabel(selectedDispute.status)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Reason */}
              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-semibold mb-2">Reason</h3>
                <p className="text-sm text-gray-700">{selectedDispute.reason}</p>
              </div>

              {/* Progress Timeline */}
              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-semibold mb-4">Case Progress</h3>
                <div className="space-y-4">
                  {selectedDispute.stages.map((stage, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          stage.completed
                            ? 'bg-green-500 text-white'
                            : idx === selectedDispute.stage
                              ? 'bg-yellow-500 text-white animate-pulse'
                              : 'bg-gray-200 text-gray-500'
                        }`}>
                          {stage.completed ? '✓' : idx + 1}
                        </div>
                        {idx < selectedDispute.stages.length - 1 && (
                          <div className={`w-0.5 h-8 ${
                            stage.completed ? 'bg-green-500' : 'bg-gray-200'
                          }`} />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <p className={`font-medium ${stage.completed ? 'text-green-700' : 'text-gray-600'}`}>
                          {stage.name}
                        </p>
                        {stage.date && <p className="text-xs text-gray-500">{stage.date}</p>}
                        {stage.note && (
                          <p className="text-sm text-gray-600 mt-1 bg-gray-50 p-2 rounded">
                            {stage.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Messages */}
              {selectedDispute.messages && (
                <div className="bg-white border rounded-xl p-4">
                  <h3 className="font-semibold mb-4">Communication</h3>
                  <div className="space-y-3">
                    {selectedDispute.messages.map((msg, idx) => (
                      <div key={idx} className={`p-3 rounded-lg ${
                        msg.from === 'system' ? 'bg-gray-100' :
                        msg.from === 'ai' ? 'bg-blue-50' :
                        msg.from === 'support' ? 'bg-purple-50' :
                        msg.from === 'manager' ? 'bg-orange-50' :
                        'bg-green-50'
                      }`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm">
                            {msg.from === 'system' && '🤖'}
                            {msg.from === 'ai' && '🧠'}
                            {msg.from === 'support' && '👤'}
                            {msg.from === 'manager' && '👔'}
                          </span>
                          <span className="text-xs font-medium capitalize">{msg.from}</span>
                          <span className="text-xs text-gray-500">{msg.time}</span>
                        </div>
                        <p className="text-sm">{msg.message}</p>
                      </div>
                    ))}
                  </div>

                  {/* Reply Box */}
                  <div className="mt-4 flex gap-2">
                    <input
                      type="text"
                      placeholder="Add a message..."
                      className="flex-1 border rounded-lg px-3 py-2 text-sm"
                    />
                    <button className="bg-purple-600 text-white px-4 rounded-lg">
                      Send
                    </button>
                  </div>
                </div>
              )}

              {/* Resolution (for resolved disputes) */}
              {selectedDispute.resolution && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Resolution</h3>
                  <p className="text-sm text-green-700">{selectedDispute.resolution}</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                {selectedDispute.canAppeal && (
                  <button className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-medium">
                    Appeal Decision
                  </button>
                )}
                <button
                  onClick={() => setSelectedDispute(null)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Dispute Modal */}
      {showNewDispute && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full max-h-[90vh] rounded-t-2xl overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h2 className="font-bold">Raise New Dispute</h2>
              <button onClick={() => setShowNewDispute(false)} className="text-2xl">&times;</button>
            </div>

            <div className="p-4 space-y-4">
              {/* Select Order */}
              <div>
                <label className="block text-sm font-medium mb-2">Select Order</label>
                <select className="w-full border rounded-xl p-3">
                  <option>ORD-999111 - Fresh Mart (₹850)</option>
                  <option>ORD-888222 - Tech World (₹2,499)</option>
                  <option>ORD-777333 - Quick Bites (₹420)</option>
                </select>
              </div>

              {/* Dispute Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Dispute Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {disputeTypes.map(type => (
                    <button
                      key={type.id}
                      className="flex items-center gap-2 p-3 border rounded-xl hover:bg-purple-50 hover:border-purple-300"
                    >
                      <span className="text-xl">{type.icon}</span>
                      <span className="text-sm">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2">Describe the issue</label>
                <textarea
                  className="w-full border rounded-xl p-3 h-24"
                  placeholder="Please provide details about your issue..."
                />
              </div>

              {/* Evidence Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">Upload Evidence (Optional)</label>
                <div className="border-2 border-dashed rounded-xl p-6 text-center">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-sm text-gray-500">Tap to upload photos or videos</p>
                </div>
              </div>

              {/* Submit */}
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-medium">
                Submit Dispute
              </button>

              <p className="text-xs text-gray-500 text-center">
                We aim to resolve all disputes within 72 hours. You'll receive updates via notification.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisputeCenter;
