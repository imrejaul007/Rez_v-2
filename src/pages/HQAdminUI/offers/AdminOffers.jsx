import { useState } from 'react';
import { Search, CheckCircle, XCircle, Eye, Tag, TrendingUp, Users, Clock } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminOffers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const [offers, setOffers] = useState([
    {
      id: 1,
      title: '50% OFF on All Pizzas',
      merchant: { id: 1, name: 'Pizza Paradise', logo: '🍕' },
      offerType: 'discount_percent',
      discountValue: 50,
      status: 'active',
      approvalStatus: 'approved',
      validUntil: '2024-01-30',
      views: 2345,
      redemptions: 234,
      submittedAt: '2024-01-10',
      reviewedBy: 'Admin 1',
      reviewedAt: '2024-01-11'
    },
    {
      id: 2,
      title: 'Buy 1 Get 1 Free Coffee',
      merchant: { id: 2, name: 'The Coffee House', logo: '☕' },
      offerType: 'bogo',
      discountValue: 0,
      status: 'active',
      approvalStatus: 'approved',
      validUntil: '2024-02-15',
      views: 3456,
      redemptions: 456,
      submittedAt: '2024-01-08',
      reviewedBy: 'Admin 2',
      reviewedAt: '2024-01-09'
    },
    {
      id: 3,
      title: '30% OFF on Burgers',
      merchant: { id: 3, name: 'Burger King', logo: '🍔' },
      offerType: 'discount_percent',
      discountValue: 30,
      status: 'pending',
      approvalStatus: 'pending',
      validUntil: '2024-02-28',
      views: 0,
      redemptions: 0,
      submittedAt: '2024-01-20',
      reviewedBy: null,
      reviewedAt: null
    },
    {
      id: 4,
      title: 'Free Dessert with Meal',
      merchant: { id: 4, name: 'Italian Restaurant', logo: '🍝' },
      offerType: 'freebie',
      discountValue: 0,
      status: 'pending',
      approvalStatus: 'pending',
      validUntil: '2024-03-15',
      views: 0,
      redemptions: 0,
      submittedAt: '2024-01-19',
      reviewedBy: null,
      reviewedAt: null
    },
    {
      id: 5,
      title: '₹200 OFF on Orders Above ₹1000',
      merchant: { id: 5, name: 'Fashion Store', logo: '👗' },
      offerType: 'discount_fixed',
      discountValue: 200,
      status: 'rejected',
      approvalStatus: 'rejected',
      validUntil: '2024-02-20',
      views: 0,
      redemptions: 0,
      submittedAt: '2024-01-18',
      reviewedBy: 'Admin 1',
      reviewedAt: '2024-01-19',
      rejectionReason: 'Terms and conditions not clear'
    }
  ]);

  const filteredOffers = offers.filter(offer => {
    const matchesSearch = offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         offer.merchant.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || offer.approvalStatus === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleApprove = (id) => {
    setOffers(prev => prev.map(o =>
      o.id === id ? {
        ...o,
        approvalStatus: 'approved',
        status: 'active',
        reviewedBy: 'Current Admin',
        reviewedAt: new Date().toISOString().split('T')[0]
      } : o
    ));
  };

  const handleReject = (id) => {
    const reason = prompt('Enter rejection reason:');
    if (reason) {
      setOffers(prev => prev.map(o =>
        o.id === id ? {
          ...o,
          approvalStatus: 'rejected',
          status: 'rejected',
          reviewedBy: 'Current Admin',
          reviewedAt: new Date().toISOString().split('T')[0],
          rejectionReason: reason
        } : o
      ));
    }
  };

  const stats = {
    total: offers.length,
    pending: offers.filter(o => o.approvalStatus === 'pending').length,
    approved: offers.filter(o => o.approvalStatus === 'approved').length,
    rejected: offers.filter(o => o.approvalStatus === 'rejected').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Offer Management</h1>
          <p className="text-gray-600 mt-1">Review and approve merchant offers</p>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Total Offers</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Pending Review</p>
            <p className="text-3xl font-bold text-orange-600 mt-2">{stats.pending}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Approved</p>
            <p className="text-3xl font-bold text-green-600 mt-2">{stats.approved}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Rejected</p>
            <p className="text-3xl font-bold text-red-600 mt-2">{stats.rejected}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search offers or merchants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {filteredOffers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{offer.merchant.logo}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{offer.title}</h3>
                      <p className="text-sm text-gray-600">{offer.merchant.name}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-4">
                    <div className="bg-gray-50 rounded-lg px-4 py-2">
                      <p className="text-xs text-gray-600">Offer Type</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {offer.offerType === 'discount_percent' ? `${offer.discountValue}% OFF` :
                         offer.offerType === 'discount_fixed' ? `₹${offer.discountValue} OFF` :
                         offer.offerType === 'bogo' ? 'BOGO' : 'Free Item'}
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg px-4 py-2">
                      <p className="text-xs text-gray-600">Valid Until</p>
                      <p className="text-sm font-semibold text-gray-900">{offer.validUntil}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg px-4 py-2">
                      <p className="text-xs text-gray-600">Submitted</p>
                      <p className="text-sm font-semibold text-gray-900">{offer.submittedAt}</p>
                    </div>
                    {offer.approvalStatus === 'approved' && (
                      <>
                        <div className="bg-gray-50 rounded-lg px-4 py-2">
                          <p className="text-xs text-gray-600">Views</p>
                          <p className="text-sm font-semibold text-gray-900">{offer.views}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg px-4 py-2">
                          <p className="text-xs text-gray-600">Redemptions</p>
                          <p className="text-sm font-semibold text-green-600">{offer.redemptions}</p>
                        </div>
                      </>
                    )}
                  </div>

                  {offer.rejectionReason && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-800">
                        <strong>Rejection Reason:</strong> {offer.rejectionReason}
                      </p>
                    </div>
                  )}

                  {offer.reviewedBy && (
                    <p className="text-xs text-gray-500 mt-3">
                      Reviewed by {offer.reviewedBy} on {offer.reviewedAt}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2 ml-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    offer.approvalStatus === 'approved' ? 'bg-green-100 text-green-700' :
                    offer.approvalStatus === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {offer.approvalStatus}
                  </span>

                  {offer.approvalStatus === 'pending' && (
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => handleApprove(offer.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(offer.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                      >
                        <XCircle className="w-4 h-4" />
                        Reject
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm">
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
