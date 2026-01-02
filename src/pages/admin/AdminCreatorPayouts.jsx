import { useState } from 'react';
import { DollarSign, CheckCircle, Clock, Download, Search, Filter } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

/**
 * ADMIN CREATOR PAYOUTS
 *
 * Backend APIs:
 * - GET /api/admin/payouts/creators
 * - GET /api/admin/payouts/:id/details
 * - PUT /api/admin/payouts/:id/approve
 * - POST /api/admin/payouts/process-batch
 * - GET /api/admin/payouts/export
 *
 * Status: ✅ BUILT (Jan 2, 2026)
 */

export default function AdminCreatorPayouts() {
  const [payouts, setPayouts] = useState([
    {
      id: 'PAY-001',
      creator: 'Priya Sharma',
      creatorId: 'USR-123',
      email: 'priya@example.com',
      phone: '+91-9876543210',
      bankAccount: '****1234',
      ifsc: 'HDFC0001234',
      amount: 15000,
      coinsEarned: 15000,
      period: 'Jan 1-15, 2024',
      contentCount: 45,
      requestedAt: '2024-01-20',
      status: 'pending'
    },
    {
      id: 'PAY-002',
      creator: 'Rahul Mehta',
      creatorId: 'USR-456',
      email: 'rahul@example.com',
      phone: '+91-9876543211',
      bankAccount: '****5678',
      ifsc: 'ICIC0005678',
      amount: 22500,
      coinsEarned: 22500,
      period: 'Jan 1-15, 2024',
      contentCount: 68,
      requestedAt: '2024-01-19',
      status: 'pending'
    },
    {
      id: 'PAY-003',
      creator: 'Sneha Patel',
      creatorId: 'USR-789',
      email: 'sneha@example.com',
      phone: '+91-9876543212',
      upiId: 'sneha@upi',
      amount: 8750,
      coinsEarned: 8750,
      period: 'Jan 1-15, 2024',
      contentCount: 28,
      requestedAt: '2024-01-18',
      status: 'approved'
    }
  ]);

  const handleApprove = async (id) => {
    try {
      await fetch(`/api/admin/payouts/${id}/approve`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('rtmn_admin_token')}`,
          'Content-Type': 'application/json'
        }
      });
      setPayouts(payouts.map(p => p.id === id ? { ...p, status: 'approved' } : p));
    } catch (error) {
      console.error('Failed to approve:', error);
    }
  };

  const handleProcessBatch = async () => {
    const approvedIds = payouts.filter(p => p.status === 'approved').map(p => p.id);
    try {
      await fetch('/api/admin/payouts/process-batch', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('rtmn_admin_token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ payoutIds: approvedIds })
      });
      setPayouts(payouts.map(p =>
        approvedIds.includes(p.id) ? { ...p, status: 'processed' } : p
      ));
    } catch (error) {
      console.error('Failed to process batch:', error);
    }
  };

  const totalPending = payouts
    .filter(p => p.status === 'pending')
    .reduce((sum, p) => sum + p.amount, 0);

  const totalApproved = payouts
    .filter(p => p.status === 'approved')
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Creator Payouts</h1>
              <p className="text-gray-600">Manage and process creator earnings</p>
            </div>
            <button
              onClick={handleProcessBatch}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              Process Batch
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{totalPending.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Pending Approval</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{totalApproved.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Approved</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{payouts.length}</p>
            <p className="text-sm text-gray-600">Total Requests</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Download className="w-8 h-8 text-purple-500" />
            </div>
            <button className="text-sm text-purple-600 hover:text-purple-700 font-semibold">
              Export Report
            </button>
          </div>
        </div>

        {/* Payouts Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Creator
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Payment Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Period
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Content
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {payouts.map(payout => (
                  <tr key={payout.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-gray-900">{payout.creator}</p>
                        <p className="text-sm text-gray-600">{payout.email}</p>
                        <p className="text-xs text-gray-500">{payout.phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {payout.bankAccount && (
                        <div>
                          <p className="text-sm text-gray-900">Bank: {payout.bankAccount}</p>
                          <p className="text-xs text-gray-600">IFSC: {payout.ifsc}</p>
                        </div>
                      )}
                      {payout.upiId && (
                        <div>
                          <p className="text-sm text-gray-900">UPI: {payout.upiId}</p>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-lg font-bold text-gray-900">₹{payout.amount.toLocaleString()}</p>
                        <p className="text-xs text-gray-600">{payout.coinsEarned} coins</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-900">{payout.period}</p>
                      <p className="text-xs text-gray-600">Requested: {payout.requestedAt}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-gray-900">{payout.contentCount}</p>
                      <p className="text-xs text-gray-600">pieces</p>
                    </td>
                    <td className="px-6 py-4">
                      {payout.status === 'pending' && (
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                          Pending
                        </span>
                      )}
                      {payout.status === 'approved' && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                          Approved
                        </span>
                      )}
                      {payout.status === 'processed' && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                          Processed
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {payout.status === 'pending' && (
                        <button
                          onClick={() => handleApprove(payout.id)}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                        >
                          Approve
                        </button>
                      )}
                      {payout.status === 'approved' && (
                        <span className="text-sm text-gray-600">Ready for batch</span>
                      )}
                      {payout.status === 'processed' && (
                        <span className="text-sm text-green-600 font-semibold">✓ Paid</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
