import { useState } from 'react';
import { ArrowLeft, CreditCard, Plus, Trash2, Shield, Check, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';

export default function WalletCards() {
  const navigate = useNavigate();
  const [showAddCard, setShowAddCard] = useState(false);

  // Backend API: GET /api/wallet/saved-cards
  // Backend API: POST /api/wallet/saved-cards
  // Backend API: DELETE /api/wallet/saved-cards/:id
  // Backend API: PUT /api/wallet/saved-cards/:id/set-default

  const savedCards = [
    {
      id: '1',
      type: 'visa',
      last4: '4242',
      holder: 'RAHUL SHARMA',
      expiry: '12/27',
      isDefault: true,
      bank: 'HDFC Bank',
    },
    {
      id: '2',
      type: 'mastercard',
      last4: '8888',
      holder: 'RAHUL SHARMA',
      expiry: '08/26',
      isDefault: false,
      bank: 'ICICI Bank',
    },
  ];

  const cardColors = {
    visa: 'from-blue-500 to-blue-700',
    mastercard: 'from-orange-500 to-red-600',
    rupay: 'from-green-500 to-teal-600',
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
        <button onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">Saved Cards</h1>
        <p className="text-purple-100 mt-1">Manage your payment cards</p>
      </div>

      {/* Cards List */}
      <div className="p-4 space-y-4">
        {savedCards.map((card) => (
          <div key={card.id} className="relative">
            <div
              className={`bg-gradient-to-br ${
                cardColors[card.type]
              } rounded-2xl p-6 text-white shadow-xl`}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-2">
                  <CreditCard size={24} />
                  <span className="text-sm font-medium opacity-90">{card.bank}</span>
                </div>
                {card.isDefault && (
                  <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                    Default
                  </div>
                )}
              </div>

              {/* Card Number */}
              <div className="mb-6">
                <div className="flex items-center gap-3 text-xl font-mono tracking-wider">
                  <span>••••</span>
                  <span>••••</span>
                  <span>••••</span>
                  <span>{card.last4}</span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs opacity-70 mb-1">Card Holder</p>
                  <p className="font-medium">{card.holder}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs opacity-70 mb-1">Expires</p>
                  <p className="font-medium">{card.expiry}</p>
                </div>
              </div>

              {/* Card Type Logo */}
              <div className="absolute top-6 right-6 text-white/20 text-2xl font-bold uppercase">
                {card.type}
              </div>
            </div>

            {/* Card Actions */}
            <div className="flex gap-2 mt-3">
              {!card.isDefault && (
                <button className="flex-1 bg-white border border-purple-600 text-purple-600 py-2 rounded-lg text-sm font-medium hover:bg-purple-50">
                  Set as Default
                </button>
              )}
              <button className="px-4 bg-white border border-red-300 text-red-600 py-2 rounded-lg hover:bg-red-50">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Card Button */}
      <div className="px-4 mb-4">
        <button
          onClick={() => setShowAddCard(true)}
          className="w-full bg-white border-2 border-dashed border-purple-300 text-purple-600 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-purple-50"
        >
          <Plus size={20} />
          Add New Card
        </button>
      </div>

      {/* Security Info */}
      <div className="px-4">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
          <Shield className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
          <div className="text-sm text-blue-900">
            <p className="font-medium mb-1">Your cards are secure</p>
            <p className="text-xs text-blue-700">
              All card information is encrypted and stored securely. We never store your CVV.
            </p>
          </div>
        </div>
      </div>

      {/* Add Card Modal */}
      {showAddCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
          <div className="bg-white rounded-t-3xl w-full max-w-lg p-6 pb-8 animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Add New Card</h2>
              <button
                onClick={() => setShowAddCard(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Holder Name
                </label>
                <input
                  type="text"
                  placeholder="Name on card"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent uppercase"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVV
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="•••"
                      maxLength={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="saveCard"
                  className="w-4 h-4 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                />
                <label htmlFor="saveCard" className="text-sm text-gray-700">
                  Save this card for future payments
                </label>
              </div>

              <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg p-3">
                <Shield className="text-green-600 flex-shrink-0" size={20} />
                <p className="text-xs text-green-800">
                  Your card details are encrypted and securely stored
                </p>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-bold mt-4">
                Add Card
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
