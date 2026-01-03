import React, { useState } from 'react';
import {
  Gift, Clock, CheckCircle, XCircle, ChevronRight, QrCode,
  MapPin, Star, Calendar, Filter, Search, Zap, Share2,
  AlertCircle, ArrowRight, Timer
} from 'lucide-react';

// CoinHunt My Deals: User's Claimed & Saved Deals
// Backend API: GET /api/coinhunt/deals/my/:userId
// Backend API: GET /api/coinhunt/deals/history/:userId
// Backend API: POST /api/coinhunt/deals/redeem/:dealId

const CoinHuntMyDeals = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [selectedDeal, setSelectedDeal] = useState(null);

  const myDeals = {
    active: [
      {
        id: 1,
        merchant: "Pasta Paradise",
        deal: "25% OFF",
        description: "On any pasta order above ₹500",
        image: "🍝",
        code: "PASTA25",
        expiresIn: "2 days",
        claimedAt: "Today",
        coinsEarned: 100,
        status: "active"
      },
      {
        id: 2,
        merchant: "Coffee Corner",
        deal: "Free Cookie",
        description: "With any beverage purchase",
        image: "☕",
        code: "COOKIE1",
        expiresIn: "Today",
        claimedAt: "Yesterday",
        coinsEarned: 50,
        status: "expiring",
        urgent: true
      },
      {
        id: 3,
        merchant: "Tech World",
        deal: "₹500 OFF",
        description: "On purchases above ₹5000",
        image: "📱",
        code: "TECH500",
        expiresIn: "5 days",
        claimedAt: "2 days ago",
        coinsEarned: 200,
        status: "active"
      },
      {
        id: 4,
        merchant: "Fashion Hub",
        deal: "BOGO",
        description: "Buy 1 Get 1 on selected items",
        image: "👗",
        code: "BOGO2024",
        expiresIn: "1 week",
        claimedAt: "3 days ago",
        coinsEarned: 150,
        status: "active"
      }
    ],
    used: [
      {
        id: 5,
        merchant: "Burger Barn",
        deal: "30% OFF",
        image: "🍔",
        usedAt: "2 days ago",
        savedAmount: "₹150",
        coinsEarned: 80
      },
      {
        id: 6,
        merchant: "Book Corner",
        deal: "₹100 OFF",
        image: "📚",
        usedAt: "1 week ago",
        savedAmount: "₹100",
        coinsEarned: 40
      }
    ],
    expired: [
      {
        id: 7,
        merchant: "Spa Serenity",
        deal: "40% OFF",
        image: "🧘",
        expiredAt: "Yesterday",
        missedCoins: 200
      }
    ]
  };

  const tabs = [
    { id: 'active', label: 'Active', count: myDeals.active.length },
    { id: 'used', label: 'Used', count: myDeals.used.length },
    { id: 'expired', label: 'Expired', count: myDeals.expired.length }
  ];

  const stats = {
    totalSaved: "₹2,450",
    totalCoins: 1520,
    dealsUsed: 15
  };

  const renderActiveDeal = (deal) => (
    <div
      key={deal.id}
      onClick={() => setSelectedDeal(deal)}
      className={`bg-white rounded-xl p-4 shadow-sm cursor-pointer transition-all hover:shadow-md ${
        deal.urgent ? 'border-2 border-red-400' : ''
      }`}
    >
      {deal.urgent && (
        <div className="flex items-center gap-1 text-red-600 text-xs font-medium mb-2">
          <AlertCircle className="w-3 h-3" />
          Expires Today - Use Now!
        </div>
      )}
      <div className="flex gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center text-3xl">
          {deal.image}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{deal.merchant}</h3>
          <p className="text-orange-600 font-bold">{deal.deal}</p>
          <p className="text-sm text-gray-500 mt-0.5">{deal.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {deal.expiresIn}
          </span>
          <span className="flex items-center gap-1 text-yellow-600">
            +{deal.coinsEarned}🪙
          </span>
        </div>
        <button className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
          Use Now
        </button>
      </div>
    </div>
  );

  const renderUsedDeal = (deal) => (
    <div key={deal.id} className="bg-white rounded-xl p-4 shadow-sm opacity-80">
      <div className="flex gap-4">
        <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl grayscale">
          {deal.image}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-gray-700">{deal.merchant}</h3>
            <CheckCircle className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-gray-500">{deal.deal}</p>
          <div className="flex items-center gap-3 mt-2 text-xs">
            <span className="text-gray-400">Used {deal.usedAt}</span>
            <span className="text-green-600 font-medium">Saved {deal.savedAmount}</span>
            <span className="text-yellow-600">+{deal.coinsEarned}🪙</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExpiredDeal = (deal) => (
    <div key={deal.id} className="bg-gray-100 rounded-xl p-4 opacity-60">
      <div className="flex gap-4">
        <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center text-2xl grayscale">
          {deal.image}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-gray-500">{deal.merchant}</h3>
            <XCircle className="w-4 h-4 text-red-400" />
          </div>
          <p className="text-gray-400 line-through">{deal.deal}</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
            <span>Expired {deal.expiredAt}</span>
            <span className="text-red-400">Missed {deal.missedCoins}🪙</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDealModal = () => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className="bg-white w-full rounded-t-3xl max-h-[85vh] overflow-y-auto">
        <div className="sticky top-0 bg-white px-4 py-3 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-semibold text-gray-800">Deal Details</h2>
          <button onClick={() => setSelectedDeal(null)} className="text-gray-500">
            ✕
          </button>
        </div>

        <div className="p-4">
          {/* Deal Header */}
          <div className="text-center mb-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center text-5xl mb-4">
              {selectedDeal?.image}
            </div>
            <h2 className="text-xl font-bold text-gray-800">{selectedDeal?.merchant}</h2>
            <p className="text-2xl font-bold text-orange-600 mt-1">{selectedDeal?.deal}</p>
            <p className="text-gray-600 mt-1">{selectedDeal?.description}</p>
          </div>

          {/* QR Code */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-4">
            <div className="bg-white rounded-xl p-8 flex items-center justify-center mb-4">
              <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <QrCode className="w-24 h-24 text-gray-400" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Or use code</p>
              <div className="bg-white border-2 border-dashed border-orange-300 rounded-xl py-3 px-6 inline-block">
                <span className="text-xl font-bold text-orange-600 tracking-widest">
                  {selectedDeal?.code}
                </span>
              </div>
            </div>
          </div>

          {/* Expiry Warning */}
          <div className={`rounded-xl p-4 mb-4 ${
            selectedDeal?.urgent
              ? 'bg-red-50 border border-red-200'
              : 'bg-yellow-50 border border-yellow-200'
          }`}>
            <div className="flex items-center gap-3">
              <Timer className={`w-5 h-5 ${selectedDeal?.urgent ? 'text-red-500' : 'text-yellow-600'}`} />
              <div>
                <p className={`font-medium ${selectedDeal?.urgent ? 'text-red-700' : 'text-yellow-700'}`}>
                  {selectedDeal?.urgent ? 'Expires Today!' : `Valid for ${selectedDeal?.expiresIn}`}
                </p>
                <p className="text-sm text-gray-600">Claimed {selectedDeal?.claimedAt}</p>
              </div>
            </div>
          </div>

          {/* Coins Earned */}
          <div className="bg-yellow-50 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Coins earned on claim</span>
              <span className="text-yellow-600 font-bold">+{selectedDeal?.coinsEarned}🪙</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5" />
              Share
            </button>
            <button className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-4 pt-6 pb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-white">My Deals</h1>
          <button className="bg-white/20 p-2 rounded-lg">
            <Filter className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/20 backdrop-blur rounded-xl px-3 py-4 text-center">
            <p className="text-white/80 text-xs">Total Saved</p>
            <p className="text-white font-bold text-lg">{stats.totalSaved}</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl px-3 py-4 text-center">
            <p className="text-white/80 text-xs">Coins Earned</p>
            <p className="text-white font-bold text-lg">{stats.totalCoins}🪙</p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl px-3 py-4 text-center">
            <p className="text-white/80 text-xs">Deals Used</p>
            <p className="text-white font-bold text-lg">{stats.dealsUsed}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100 px-4 py-2 flex gap-2 -mt-4 mx-4 rounded-t-xl sticky top-0 z-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1 ${
              activeTab === tab.id
                ? 'bg-orange-500 text-white'
                : 'text-gray-600'
            }`}
          >
            {tab.label}
            <span className={`text-xs ${activeTab === tab.id ? 'text-orange-200' : 'text-gray-400'}`}>
              ({tab.count})
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        {activeTab === 'active' && (
          <>
            {/* Expiring Soon Alert */}
            {myDeals.active.some(d => d.urgent) && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-4 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-sm text-red-700 flex-1">
                  You have deals expiring today! Use them before they're gone.
                </p>
              </div>
            )}
            <div className="space-y-3">
              {myDeals.active.map(renderActiveDeal)}
            </div>
          </>
        )}

        {activeTab === 'used' && (
          <div className="space-y-3">
            {myDeals.used.length > 0 ? (
              myDeals.used.map(renderUsedDeal)
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No deals used yet</p>
                <button className="mt-4 text-orange-600 font-medium">
                  Browse Deals <ArrowRight className="w-4 h-4 inline" />
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'expired' && (
          <div className="space-y-3">
            {myDeals.expired.length > 0 ? (
              <>
                <p className="text-sm text-gray-500 mb-2">
                  Don't miss out next time! Set reminders for your deals.
                </p>
                {myDeals.expired.map(renderExpiredDeal)}
              </>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-300 mx-auto mb-4" />
                <p className="text-gray-500">Great job! No expired deals</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Find More Deals CTA */}
      <div className="px-4 mt-4">
        <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2">
          <Gift className="w-5 h-5" />
          Find More Deals
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Deal Modal */}
      {selectedDeal && renderDealModal()}
    </div>
  );
};

export default CoinHuntMyDeals;
