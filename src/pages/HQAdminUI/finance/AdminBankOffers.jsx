import { useState } from 'react';
import { Search, CreditCard, Plus, TrendingUp, DollarSign, Users, BarChart3, Building2, CheckCircle, XCircle, Clock, Calendar, Gift } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminBankOffers() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const [bankOfferStats] = useState({
    totalOffers: 28,
    activeOffers: 16,
    totalRedemptions: 5678,
    totalRevenue: 8945670,
    topPerformingBank: 'HDFC Bank',
    avgDiscountValue: 234
  });

  const [bankPartners] = useState([
    {
      id: 1,
      name: 'HDFC Bank',
      logo: '🏦',
      status: 'active',
      activeOffers: 5,
      totalRedemptions: 2345,
      revenue: 3456789,
      avgDiscount: 12.5,
      partnership: 'Platinum'
    },
    {
      id: 2,
      name: 'ICICI Bank',
      logo: '🏦',
      status: 'active',
      activeOffers: 4,
      totalRedemptions: 1876,
      revenue: 2876543,
      avgDiscount: 10.8,
      partnership: 'Gold'
    },
    {
      id: 3,
      name: 'Axis Bank',
      logo: '🏦',
      status: 'active',
      activeOffers: 3,
      totalRedemptions: 987,
      revenue: 1567890,
      avgDiscount: 9.5,
      partnership: 'Gold'
    },
    {
      id: 4,
      name: 'SBI',
      logo: '🏦',
      status: 'active',
      activeOffers: 2,
      totalRedemptions: 345,
      revenue: 789012,
      avgDiscount: 8.2,
      partnership: 'Silver'
    },
    {
      id: 5,
      name: 'Kotak Mahindra',
      logo: '🏦',
      status: 'active',
      activeOffers: 2,
      totalRedemptions: 125,
      revenue: 256834,
      avgDiscount: 7.5,
      partnership: 'Silver'
    }
  ]);

  const [bankOffers, setBankOffers] = useState([
    {
      id: 1,
      bankName: 'HDFC Bank',
      bankLogo: '🏦',
      offerName: '15% Instant Discount',
      offerCode: 'HDFC15',
      cardType: ['Credit Card', 'Debit Card'],
      discountType: 'percentage',
      discountValue: 15,
      maxDiscount: 500,
      minTransaction: 2000,
      validFrom: '2024-01-01',
      validTo: '2024-03-31',
      categories: ['All'],
      merchants: ['All'],
      eligibility: 'All HDFC cardholders',
      status: 'active',
      totalRedemptions: 456,
      revenue: 912000,
      avgTransactionValue: 3200
    },
    {
      id: 2,
      bankName: 'ICICI Bank',
      bankLogo: '🏦',
      offerName: 'Flat Rs.200 Off',
      offerCode: 'ICICI200',
      cardType: ['Credit Card'],
      discountType: 'fixed',
      discountValue: 200,
      maxDiscount: 200,
      minTransaction: 1500,
      validFrom: '2024-01-15',
      validTo: '2024-02-28',
      categories: ['Food & Dining', 'Shopping'],
      merchants: ['All'],
      eligibility: 'ICICI Credit Card holders',
      status: 'active',
      totalRedemptions: 328,
      revenue: 492000,
      avgTransactionValue: 2250
    },
    {
      id: 3,
      bankName: 'Axis Bank',
      bankLogo: '🏦',
      offerName: '10% Cashback',
      offerCode: 'AXIS10',
      cardType: ['Credit Card', 'Debit Card'],
      discountType: 'cashback',
      discountValue: 10,
      maxDiscount: 300,
      minTransaction: 1000,
      validFrom: '2024-01-10',
      validTo: '2024-06-30',
      categories: ['Entertainment', 'Shopping'],
      merchants: ['All'],
      eligibility: 'All Axis cardholders',
      status: 'active',
      totalRedemptions: 234,
      revenue: 234000,
      avgTransactionValue: 1800
    },
    {
      id: 4,
      bankName: 'SBI',
      bankLogo: '🏦',
      offerName: 'Weekend Special - 12% Off',
      offerCode: 'SBI12',
      cardType: ['Debit Card'],
      discountType: 'percentage',
      discountValue: 12,
      maxDiscount: 400,
      minTransaction: 1500,
      validFrom: '2024-01-01',
      validTo: '2024-12-31',
      categories: ['Food & Dining'],
      merchants: ['All'],
      eligibility: 'SBI Debit Card (Weekends only)',
      status: 'active',
      totalRedemptions: 189,
      revenue: 283500,
      avgTransactionValue: 2100
    },
    {
      id: 5,
      bankName: 'HDFC Bank',
      bankLogo: '🏦',
      offerName: 'Premium Card Exclusive',
      offerCode: 'HDFCPREM',
      cardType: ['Credit Card'],
      discountType: 'percentage',
      discountValue: 20,
      maxDiscount: 1000,
      minTransaction: 5000,
      validFrom: '2024-01-01',
      validTo: '2024-12-31',
      categories: ['All'],
      merchants: ['Premium Merchants'],
      eligibility: 'HDFC Premium/Platinum Credit Card',
      status: 'active',
      totalRedemptions: 98,
      revenue: 490000,
      avgTransactionValue: 8500
    },
    {
      id: 6,
      bankName: 'Kotak Mahindra',
      bankLogo: '🏦',
      offerName: 'Rs.150 Off on Dining',
      offerCode: 'KOTAK150',
      cardType: ['Credit Card'],
      discountType: 'fixed',
      discountValue: 150,
      maxDiscount: 150,
      minTransaction: 1000,
      validFrom: '2024-01-20',
      validTo: '2024-02-20',
      categories: ['Food & Dining'],
      merchants: ['All'],
      eligibility: 'Kotak Credit Card holders',
      status: 'active',
      totalRedemptions: 67,
      revenue: 100500,
      avgTransactionValue: 1650
    },
    {
      id: 7,
      bankName: 'ICICI Bank',
      bankLogo: '🏦',
      offerName: 'New Year Special',
      offerCode: 'ICICI2024',
      cardType: ['Credit Card'],
      discountType: 'percentage',
      discountValue: 25,
      maxDiscount: 750,
      minTransaction: 3000,
      validFrom: '2024-01-01',
      validTo: '2024-01-15',
      categories: ['All'],
      merchants: ['All'],
      eligibility: 'All ICICI cardholders',
      status: 'expired',
      totalRedemptions: 456,
      revenue: 1368000,
      avgTransactionValue: 4200
    }
  ]);

  const [recentRedemptions] = useState([
    {
      id: 1,
      offerCode: 'HDFC15',
      bankName: 'HDFC Bank',
      userName: 'John Doe',
      userEmail: 'john@example.com',
      cardLast4: '4532',
      transactionAmount: 3200,
      discountGiven: 480,
      finalAmount: 2720,
      merchantName: 'The Coffee House',
      date: '2024-01-20 14:35:22'
    },
    {
      id: 2,
      offerCode: 'ICICI200',
      bankName: 'ICICI Bank',
      userName: 'Jane Smith',
      userEmail: 'jane@example.com',
      cardLast4: '7890',
      transactionAmount: 2100,
      discountGiven: 200,
      finalAmount: 1900,
      merchantName: 'Fashion Boutique',
      date: '2024-01-20 12:15:30'
    },
    {
      id: 3,
      offerCode: 'AXIS10',
      bankName: 'Axis Bank',
      userName: 'Mike Johnson',
      userEmail: 'mike@example.com',
      cardLast4: '3456',
      transactionAmount: 1800,
      discountGiven: 180,
      finalAmount: 1620,
      merchantName: 'Tech Store',
      date: '2024-01-19 18:45:10'
    }
  ]);

  const filteredOffers = bankOffers.filter(offer =>
    offer.offerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    offer.offerCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    offer.bankName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateOffer = (offerData) => {
    const newOffer = {
      id: bankOffers.length + 1,
      ...offerData,
      totalRedemptions: 0,
      revenue: 0,
      avgTransactionValue: 0
    };
    setBankOffers([newOffer, ...bankOffers]);
    setShowCreateModal(false);
  };

  const handleToggleStatus = (id) => {
    setBankOffers(prev => prev.map(o =>
      o.id === id ? { ...o, status: o.status === 'active' ? 'paused' : 'active' } : o
    ));
  };

  const handleDeleteOffer = (id) => {
    setBankOffers(prev => prev.filter(o => o.id !== id));
    setSelectedOffer(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'paused': return 'bg-orange-100 text-orange-700';
      case 'expired': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPartnershipBadgeColor = (partnership) => {
    switch (partnership) {
      case 'Platinum': return 'bg-purple-100 text-purple-700 border-purple-300';
      case 'Gold': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'Silver': return 'bg-gray-100 text-gray-700 border-gray-300';
      default: return 'bg-blue-100 text-blue-700 border-blue-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Bank Partnership Offers</h1>
              <p className="text-gray-600 mt-1">Manage bank card offers and partnerships</p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create Bank Offer
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Bank Offers</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{bankOfferStats.totalOffers}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-green-600">
              {bankOfferStats.activeOffers} currently active
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Redemptions</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {bankOfferStats.totalRedemptions.toLocaleString()}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <Users className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Avg ₹{bankOfferStats.avgDiscountValue} discount/redemption
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Revenue Impact</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  ₹{(bankOfferStats.totalRevenue / 1000000).toFixed(2)}M
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex items-center text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                +32.5%
              </span>
              <span className="text-gray-600 text-sm">vs last month</span>
            </div>
          </div>
        </div>

        {/* Bank Partners Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Banking Partners</h2>
            <p className="text-sm text-gray-600 mt-1">Overview of all bank partnerships and their performance</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bankPartners.map((partner) => (
                <div key={partner.id} className="border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-300 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{partner.logo}</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{partner.name}</h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getPartnershipBadgeColor(partner.partnership)}`}>
                          {partner.partnership}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Active Offers</span>
                      <span className="font-bold text-indigo-600">{partner.activeOffers}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Redemptions</span>
                      <span className="font-bold text-gray-900">{partner.totalRedemptions.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Revenue</span>
                      <span className="font-bold text-green-600">₹{(partner.revenue / 100000).toFixed(1)}L</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg Discount</span>
                      <span className="font-bold text-purple-600">{partner.avgDiscount}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'overview'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                All Bank Offers
              </button>
              <button
                onClick={() => setActiveTab('redemptions')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'redemptions'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Redemption History
              </button>
              <button
                onClick={() => setActiveTab('performance')}
                className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'performance'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Performance Comparison
              </button>
            </nav>
          </div>

          {/* All Bank Offers Tab */}
          {activeTab === 'overview' && (
            <div className="p-6">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by bank name, offer name, or code..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {filteredOffers.map((offer) => (
                  <div key={offer.id} className={`border-2 rounded-xl p-6 ${
                    offer.status === 'active' ? 'border-green-200 bg-green-50' :
                    offer.status === 'paused' ? 'border-orange-200 bg-orange-50' :
                    'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-5xl">{offer.bankLogo}</div>
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-2xl font-bold text-gray-900">{offer.offerName}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(offer.status)}`}>
                              {offer.status.toUpperCase()}
                            </span>
                          </div>
                          <p className="text-gray-600 mt-1">{offer.bankName}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="font-mono font-bold text-indigo-600 text-lg">{offer.offerCode}</span>
                            <div className="flex gap-2">
                              {offer.cardType.map((type, idx) => (
                                <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                  {type}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-green-600">
                          {offer.discountType === 'percentage' && `${offer.discountValue}% OFF`}
                          {offer.discountType === 'fixed' && `₹${offer.discountValue} OFF`}
                          {offer.discountType === 'cashback' && `${offer.discountValue}% Cashback`}
                        </div>
                        {offer.maxDiscount > 0 && (
                          <p className="text-sm text-gray-600 mt-1">Up to ₹{offer.maxDiscount}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Min Transaction</p>
                        <p className="font-bold text-gray-900">₹{offer.minTransaction}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Redemptions</p>
                        <p className="font-bold text-blue-600">{offer.totalRedemptions}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Revenue</p>
                        <p className="font-bold text-green-600">₹{(offer.revenue / 1000).toFixed(1)}K</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600 mb-1">Avg Transaction</p>
                        <p className="font-bold text-purple-600">₹{offer.avgTransactionValue.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Valid from</span>
                        <span className="font-medium text-gray-900">{offer.validFrom}</span>
                        <span className="text-gray-600">to</span>
                        <span className="font-medium text-gray-900">{offer.validTo}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Eligibility:</span>
                        <span className="font-medium text-gray-900">{offer.eligibility}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Gift className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Categories:</span>
                        <div className="flex gap-2">
                          {offer.categories.map((cat, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded">
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedOffer(offer)}
                        className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
                      >
                        Edit Offer
                      </button>
                      {offer.status === 'active' && (
                        <button
                          onClick={() => handleToggleStatus(offer.id)}
                          className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm"
                        >
                          Pause Offer
                        </button>
                      )}
                      {offer.status === 'paused' && (
                        <button
                          onClick={() => handleToggleStatus(offer.id)}
                          className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                        >
                          Activate Offer
                        </button>
                      )}
                      {offer.status === 'expired' && (
                        <button
                          onClick={() => handleDeleteOffer(offer.id)}
                          className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                        >
                          Delete Offer
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Redemption History Tab */}
          {activeTab === 'redemptions' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Bank Offer Redemption History</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bank & Offer</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Card</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Merchant</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Discount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Final Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentRedemptions.map((redemption) => (
                      <tr key={redemption.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1 text-sm text-gray-900">
                            <Clock className="w-3 h-3 text-gray-400" />
                            {redemption.date}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-gray-900">{redemption.bankName}</p>
                            <p className="text-xs font-mono text-indigo-600">{redemption.offerCode}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-gray-900">{redemption.userName}</p>
                            <p className="text-xs text-gray-500">{redemption.userEmail}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-gray-400" />
                            <span className="font-mono text-sm text-gray-900">****{redemption.cardLast4}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-gray-900">{redemption.merchantName}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-medium text-gray-900">₹{redemption.transactionAmount.toLocaleString()}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-bold text-green-600">-₹{redemption.discountGiven.toLocaleString()}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-bold text-gray-900">₹{redemption.finalAmount.toLocaleString()}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Performance Comparison Tab */}
          {activeTab === 'performance' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Bank Partnership Performance Comparison</h3>
              <div className="space-y-4">
                {bankPartners.map((partner) => (
                  <div key={partner.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-5xl">{partner.logo}</div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{partner.name}</h4>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border mt-1 ${getPartnershipBadgeColor(partner.partnership)}`}>
                            {partner.partnership} Partner
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-indigo-600">{partner.avgDiscount}%</p>
                        <p className="text-sm text-gray-600">Avg Discount Rate</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Gift className="w-4 h-4 text-purple-600" />
                          <p className="text-xs text-gray-600">Active Offers</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{partner.activeOffers}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-4 h-4 text-blue-600" />
                          <p className="text-xs text-gray-600">Redemptions</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{partner.totalRedemptions.toLocaleString()}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <p className="text-xs text-gray-600">Revenue Impact</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">₹{(partner.revenue / 100000).toFixed(1)}L</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart3 className="w-4 h-4 text-indigo-600" />
                          <p className="text-xs text-gray-600">Market Share</p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">
                          {((partner.totalRedemptions / bankOfferStats.totalRedemptions) * 100).toFixed(1)}%
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Revenue Contribution</span>
                        <span className="text-sm font-medium text-gray-900">
                          {((partner.revenue / bankOfferStats.totalRevenue) * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${(partner.revenue / bankOfferStats.totalRevenue) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Bank Offer Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-3xl w-full my-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Create New Bank Offer</h2>
              <p className="text-sm text-gray-600 mt-1">Set up a new bank partnership offer</p>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
                  <select id="bankName" className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>Axis Bank</option>
                    <option>SBI</option>
                    <option>Kotak Mahindra</option>
                    <option>IndusInd Bank</option>
                    <option>Yes Bank</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Offer Name</label>
                  <input
                    type="text"
                    id="offerName"
                    placeholder="15% Instant Discount"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Offer Code</label>
                  <input
                    type="text"
                    id="offerCode"
                    placeholder="HDFC15"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg uppercase"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Discount Type</label>
                  <select id="discountType" className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <option value="percentage">Percentage Discount</option>
                    <option value="fixed">Fixed Amount</option>
                    <option value="cashback">Cashback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Discount Value</label>
                  <input
                    type="number"
                    id="discountValue"
                    placeholder="15"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Discount (₹)</label>
                  <input
                    type="number"
                    id="maxDiscount"
                    placeholder="500"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Min Transaction (₹)</label>
                  <input
                    type="number"
                    id="minTransaction"
                    placeholder="2000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Card Types</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" id="creditCard" defaultChecked className="rounded" />
                      <span className="text-sm">Credit Card</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" id="debitCard" className="rounded" />
                      <span className="text-sm">Debit Card</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Valid From</label>
                  <input
                    type="date"
                    id="validFrom"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Valid To</label>
                  <input
                    type="date"
                    id="validTo"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Eligibility Criteria</label>
                  <input
                    type="text"
                    id="eligibility"
                    placeholder="All HDFC cardholders"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const cardTypes = [];
                  if (document.getElementById('creditCard').checked) cardTypes.push('Credit Card');
                  if (document.getElementById('debitCard').checked) cardTypes.push('Debit Card');

                  const offerData = {
                    bankName: document.getElementById('bankName').value,
                    bankLogo: '🏦',
                    offerName: document.getElementById('offerName').value,
                    offerCode: document.getElementById('offerCode').value.toUpperCase(),
                    discountType: document.getElementById('discountType').value,
                    discountValue: parseInt(document.getElementById('discountValue').value),
                    maxDiscount: parseInt(document.getElementById('maxDiscount').value),
                    minTransaction: parseInt(document.getElementById('minTransaction').value),
                    cardType: cardTypes,
                    validFrom: document.getElementById('validFrom').value,
                    validTo: document.getElementById('validTo').value,
                    eligibility: document.getElementById('eligibility').value,
                    categories: ['All'],
                    merchants: ['All'],
                    status: 'active'
                  };
                  handleCreateOffer(offerData);
                }}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Create Offer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
