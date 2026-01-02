import { useState } from 'react';
import { ArrowLeft, Users, Copy, Share2, Check, Clock, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';

export default function WalletRequestMoney() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [recipient, setRecipient] = useState('');
  const [activeTab, setActiveTab] = useState('request');

  // Backend API: POST /api/wallet/request-money
  // Backend API: GET /api/wallet/money-requests
  // Backend API: PUT /api/wallet/money-requests/:id/accept
  // Backend API: PUT /api/wallet/money-requests/:id/decline

  const requestHistory = [
    {
      id: '1',
      from: 'Priya Sharma',
      amount: 500,
      note: 'Dinner split',
      status: 'pending',
      date: '2 hours ago',
    },
    {
      id: '2',
      to: 'Rahul Kumar',
      amount: 1000,
      note: 'Movie tickets',
      status: 'paid',
      date: 'Yesterday',
    },
    {
      id: '3',
      from: 'Amit Patel',
      amount: 250,
      note: 'Coffee',
      status: 'declined',
      date: '2 days ago',
    },
  ];

  const handleRequest = () => {
    if (!amount || !recipient) {
      alert('Please fill all fields');
      return;
    }
    alert('Money request sent!');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
        <button onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">Request Money</h1>
        <p className="text-purple-100 mt-1">Request money from friends & family</p>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100">
        <div className="flex">
          <button
            onClick={() => setActiveTab('request')}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === 'request'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-500'
            }`}
          >
            New Request
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === 'history'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-500'
            }`}
          >
            History
          </button>
        </div>
      </div>

      {/* New Request Tab */}
      {activeTab === 'request' && (
        <div className="p-4 space-y-4">
          {/* Recipient */}
          <div className="bg-white p-4 rounded-xl">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Request From
            </label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Enter phone number or email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Amount */}
          <div className="bg-white p-4 rounded-xl">
            <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                ₹
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0"
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg font-bold"
              />
            </div>
            <div className="flex gap-2 mt-3">
              {[100, 500, 1000, 2000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(amt.toString())}
                  className="flex-1 px-3 py-2 bg-purple-50 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-100"
                >
                  ₹{amt}
                </button>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="bg-white p-4 rounded-xl">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What's it for?
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Add a note (optional)"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Request Button */}
          <button
            onClick={handleRequest}
            disabled={!amount || !recipient}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Request ₹{amount || '0'}
          </button>
        </div>
      )}

      {/* History Tab */}
      {activeTab === 'history' && (
        <div className="p-4 space-y-3">
          {requestHistory.map((request) => (
            <div key={request.id} className="bg-white rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      {request.from ? `From ${request.from}` : `To ${request.to}`}
                    </p>
                    <p className="text-sm text-gray-500">{request.note}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">₹{request.amount}</p>
                  {request.status === 'pending' && (
                    <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-1 rounded mt-1">
                      <Clock size={12} />
                      Pending
                    </span>
                  )}
                  {request.status === 'paid' && (
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded mt-1">
                      <Check size={12} />
                      Paid
                    </span>
                  )}
                  {request.status === 'declined' && (
                    <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded mt-1">
                      <X size={12} />
                      Declined
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs text-gray-400 mb-3">{request.date}</p>

              {request.from && request.status === 'pending' && (
                <div className="flex gap-2 pt-3 border-t border-gray-100">
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">
                    Decline
                  </button>
                  <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg text-sm font-medium">
                    Pay ₹{request.amount}
                  </button>
                </div>
              )}
            </div>
          ))}

          {requestHistory.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto flex items-center justify-center mb-4">
                <Users className="text-gray-400" size={40} />
              </div>
              <p className="text-gray-500">No money requests yet</p>
            </div>
          )}
        </div>
      )}

      <BottomNav />
    </div>
  );
}
