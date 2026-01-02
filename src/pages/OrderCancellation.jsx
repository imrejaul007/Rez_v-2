import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { XCircle, AlertTriangle } from 'lucide-react';

function OrderCancellation() {
  const navigate = useNavigate();
  const [reason, setReason] = useState('');
  const [otherReason, setOtherReason] = useState('');
  const [loading, setLoading] = useState(false);
  const reasons = ['Changed my mind', 'Found better price', 'Ordered by mistake', 'Delivery time too long', 'Other'];

  const handleCancel = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/orders/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('authToken')}` },
        body: JSON.stringify({ reason: reason === 'Other' ? otherReason : reason })
      });
      navigate('/orders');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Cancel Order</h1>
            <p className="text-gray-600">Please tell us why you're canceling</p>
          </div>
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <p className="text-yellow-800 text-sm">Refund will be processed within 5-7 business days</p>
          </div>
          <form onSubmit={handleCancel} className="space-y-6">
            <div className="space-y-2">
              {reasons.map(r => (
                <label key={r} className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input type="radio" name="reason" value={r} onChange={() => setReason(r)} className="w-4 h-4 text-purple-600" required />
                  <span className="text-gray-700">{r}</span>
                </label>
              ))}
            </div>
            {reason === 'Other' && (
              <textarea value={otherReason} onChange={(e) => setOtherReason(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500" rows="3" placeholder="Please specify..." required />
            )}
            <button type="submit" disabled={loading} className="w-full py-3 px-4 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 disabled:opacity-50 transition-all">
              {loading ? 'Canceling...' : 'Cancel Order'}
            </button>
            <button type="button" onClick={() => navigate(-1)} className="w-full py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-all">Keep Order</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default OrderCancellation;
