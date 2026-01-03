import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DollarSign, Clock, CheckCircle } from 'lucide-react';

function RefundStatus() {
  const navigate = useNavigate();
  const refund = { id: 'REF123456', orderId: 'ORD987654', amount: 1299, status: 'processing', initiatedDate: '2026-01-01', expectedDate: '2026-01-08', method: 'Original Payment', timeline: [
    { label: 'Refund Initiated', date: '2026-01-01', completed: true },
    { label: 'Processing Refund', date: '2026-01-02', completed: true },
    { label: 'Refund Approved', date: '2026-01-05', completed: false },
    { label: 'Amount Credited', date: '2026-01-08', completed: false }
  ]};

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"><DollarSign className="w-8 h-8 text-white" /></div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Refund Status</h1>
            <p className="text-gray-600">{refund.id}</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg mb-6 text-center">
            <p className="text-gray-600 text-sm mb-1">Refund Amount</p>
            <p className="text-4xl font-bold text-gray-900">₹{refund.amount.toFixed(2)}</p>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mt-4">{refund.status.toUpperCase()}</span>
          </div>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between py-2 border-b"><span className="text-gray-600">Order ID</span><span className="font-medium text-purple-600 cursor-pointer" onClick={() => navigate(`/orders/${refund.orderId}`)}>{refund.orderId}</span></div>
            <div className="flex justify-between py-2 border-b"><span className="text-gray-600">Expected Date</span><span className="font-medium text-gray-900">{refund.expectedDate}</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Method</span><span className="font-medium text-gray-900">{refund.method}</span></div>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Refund Timeline</h3>
            <div className="space-y-4">
              {refund.timeline.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                    {step.completed ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Clock className="w-5 h-5 text-gray-400" />}
                  </div>
                  <div className="pt-2">
                    <p className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>{step.label}</p>
                    <p className="text-sm text-gray-500">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => navigate(-1)} className="w-full py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-all">Back</button>
        </motion.div>
      </div>
    </div>
  );
}

export default RefundStatus;
