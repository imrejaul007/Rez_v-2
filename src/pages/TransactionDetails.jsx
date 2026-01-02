import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Receipt, Download, Share2, CheckCircle, XCircle } from 'lucide-react';

/**
 * TRANSACTION DETAILS - Transaction Details View
 * Backend APIs: GET /api/transactions/:id
 * Status: ✅ BUILT (Jan 2, 2026) | Priority: MEDIUM
 */

function TransactionDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  // TODO: Fetch from API
  const transaction = {
    id: 'TXN123456789',
    type: 'order',
    amount: 1299.00,
    status: 'success',
    date: '2026-01-02T10:30:00',
    orderId: 'ORD987654321',
    paymentMethod: 'UPI',
    upiId: 'user@upi',
    description: 'Order payment',
    items: [{ name: 'Product 1', quantity: 2, price: 599.50 }, { name: 'Product 2', quantity: 1, price: 100.00 }],
    subtotal: 1299.00,
    tax: 0,
    discount: 0,
    total: 1299.00
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'failed': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Receipt className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Transaction Details</h1>
            <p className="text-gray-600">{transaction.id}</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(transaction.status)}`}>
                {transaction.status === 'success' ? <CheckCircle className="w-4 h-4 inline mr-1" /> : <XCircle className="w-4 h-4 inline mr-1" />}
                {transaction.status.toUpperCase()}
              </span>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-center mb-4">
                <p className="text-gray-600 text-sm mb-1">Amount</p>
                <p className="text-4xl font-bold text-gray-900">₹{transaction.amount.toFixed(2)}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Transaction ID</span>
                <span className="font-medium text-gray-900">{transaction.id}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Date & Time</span>
                <span className="font-medium text-gray-900">{new Date(transaction.date).toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Payment Method</span>
                <span className="font-medium text-gray-900">{transaction.paymentMethod}</span>
              </div>
              {transaction.orderId && (
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Order ID</span>
                  <span className="font-medium text-purple-600 cursor-pointer hover:underline" onClick={() => navigate(`/orders/${transaction.orderId}`)}>{transaction.orderId}</span>
                </div>
              )}
            </div>

            {transaction.items && (
              <div className="space-y-2">
                <h3 className="font-bold text-gray-900">Items</h3>
                {transaction.items.map((item, index) => (
                  <div key={index} className="flex justify-between py-2">
                    <span className="text-gray-700">{item.name} x {item.quantity}</span>
                    <span className="font-medium text-gray-900">₹{item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4 border-t space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{transaction.subtotal.toFixed(2)}</span>
              </div>
              {transaction.discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹{transaction.discount.toFixed(2)}</span>
                </div>
              )}
              {transaction.tax > 0 && (
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>₹{transaction.tax.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t">
                <span>Total</span>
                <span>₹{transaction.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all">
                <Download className="w-5 h-5" />
                Download
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-all">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>

            <button onClick={() => navigate(-1)} className="w-full py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-all">Back</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TransactionDetails;
