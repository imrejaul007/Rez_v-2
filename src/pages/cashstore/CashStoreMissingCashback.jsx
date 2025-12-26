import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, AlertCircle, Upload, Calendar, DollarSign,
  CheckCircle, Clock, Info, Shield, FileText, Camera, Send
} from 'lucide-react';
import Header from '../../components/layout/Header';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CashStoreMissingCashback = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    store: '',
    orderDate: '',
    orderAmount: '',
    orderId: '',
    expectedCashback: '',
    proofType: 'screenshot',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const claimStatuses = [
    {
      id: 1,
      store: 'Amazon',
      logo: '📦',
      orderId: 'AMZ123456789',
      amount: 2499,
      cashback: 125,
      status: 'approved',
      submittedOn: 'Dec 15, 2024',
      resolvedOn: 'Dec 18, 2024'
    },
    {
      id: 2,
      store: 'Myntra',
      logo: '👗',
      orderId: 'MYN987654321',
      amount: 1999,
      cashback: 100,
      status: 'investigating',
      submittedOn: 'Dec 20, 2024',
      resolvedOn: null
    },
    {
      id: 3,
      store: 'Swiggy',
      logo: '🍔',
      orderId: 'SWG456789123',
      amount: 599,
      cashback: 30,
      status: 'pending',
      submittedOn: 'Dec 23, 2024',
      resolvedOn: null
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30';
      case 'investigating':
        return 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30';
      case 'pending':
        return 'bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30';
      default:
        return 'bg-gray-500/20 text-gray-600 dark:text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-3 h-3" />;
      case 'investigating':
        return <Clock className="w-3 h-3" />;
      case 'pending':
        return <AlertCircle className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      <Header />

      {/* Header */}
      <div className="px-4 py-6 border-b border-rez-gray-200 dark:border-dark-700">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-rez-navy dark:text-white mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500">
            <AlertCircle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-rez-navy dark:text-white">Missing Cashback</h1>
            <p className="text-sm text-red-600 dark:text-red-400 font-semibold">
              🛡️ 100% Guaranteed Resolution
            </p>
          </div>
        </div>
      </div>

      {/* Guarantee Banner */}
      <div className="px-4 py-6">
        <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border-2 border-emerald-500/30">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-12 h-12 text-emerald-500 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-1">
                💯 We've Got You Covered
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                If your cashback is genuinely missing, we guarantee to credit it within 7 working days
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="text-center p-2 rounded-lg bg-white/60 dark:bg-white/5">
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">98%</p>
              <p className="text-[10px] text-gray-600 dark:text-gray-400">Success Rate</p>
            </div>
            <div className="text-center p-2 rounded-lg bg-white/60 dark:bg-white/5">
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">7d</p>
              <p className="text-[10px] text-gray-600 dark:text-gray-400">Avg Resolution</p>
            </div>
            <div className="text-center p-2 rounded-lg bg-white/60 dark:bg-white/5">
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">24/7</p>
              <p className="text-[10px] text-gray-600 dark:text-gray-400">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Claim Form */}
      <div className="px-4 mb-6">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-4">Raise a Claim</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Store Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Store Name *
              </label>
              <select
                value={formData.store}
                onChange={(e) => setFormData({ ...formData, store: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-gray-600 text-rez-navy dark:text-white outline-none focus:border-blue-500"
                required
              >
                <option value="">Select Store</option>
                <option value="amazon">Amazon</option>
                <option value="flipkart">Flipkart</option>
                <option value="myntra">Myntra</option>
                <option value="swiggy">Swiggy</option>
                <option value="zomato">Zomato</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Order Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Order Date *
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.orderDate}
                  onChange={(e) => setFormData({ ...formData, orderDate: e.target.value })}
                  className="w-full px-4 py-3 pl-12 rounded-xl bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-gray-600 text-rez-navy dark:text-white outline-none focus:border-blue-500"
                  required
                />
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Order Amount */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Order Amount *
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={formData.orderAmount}
                  onChange={(e) => setFormData({ ...formData, orderAmount: e.target.value })}
                  placeholder="₹0"
                  className="w-full px-4 py-3 pl-12 rounded-xl bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-gray-600 text-rez-navy dark:text-white outline-none focus:border-blue-500"
                  required
                />
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Order ID */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Order ID *
              </label>
              <input
                type="text"
                value={formData.orderId}
                onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                placeholder="Enter your order ID"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-gray-600 text-rez-navy dark:text-white outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Expected Cashback */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Expected Cashback
              </label>
              <input
                type="number"
                value={formData.expectedCashback}
                onChange={(e) => setFormData({ ...formData, expectedCashback: e.target.value })}
                placeholder="₹0"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-gray-600 text-rez-navy dark:text-white outline-none focus:border-blue-500"
              />
            </div>

            {/* Proof Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Upload Proof *
              </label>
              <div className="p-6 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 text-center bg-gray-50 dark:bg-dark-700">
                <Camera className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                <p className="text-sm font-semibold text-rez-navy dark:text-white mb-1">
                  Upload Order Screenshot
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                  Order confirmation, invoice, or receipt
                </p>
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Choose File
                </button>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Additional Details (Optional)
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Provide any additional information..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-gray-600 text-rez-navy dark:text-white outline-none focus:border-blue-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Submit Claim
            </button>
          </form>
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-rez-navy dark:text-white mb-2">
                Required Documents
              </p>
              <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <li>• Order confirmation email/screenshot</li>
                <li>• Invoice or receipt showing order amount</li>
                <li>• Order ID clearly visible</li>
                <li>• Transaction date should match order date</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Claims */}
      <div className="px-4 pb-6">
        <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-4">Your Claims</h3>
        <div className="space-y-3">
          {claimStatuses.map((claim) => (
            <div
              key={claim.id}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-2xl">
                    {claim.logo}
                  </div>
                  <div>
                    <h4 className="font-bold text-rez-navy dark:text-white">{claim.store}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Order: {claim.orderId}</p>
                  </div>
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(claim.status)}`}>
                  {getStatusIcon(claim.status)}
                  <span className="capitalize">{claim.status}</span>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Order Amount</p>
                  <p className="text-sm font-bold text-rez-navy dark:text-white">₹{claim.amount}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Cashback Claimed</p>
                  <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{claim.cashback} coins</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600 dark:text-gray-400">Submitted: {claim.submittedOn}</span>
                  {claim.resolvedOn && (
                    <span className="text-emerald-600 dark:text-emerald-400">Resolved: {claim.resolvedOn}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 pb-6">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-4">Common Reasons</h3>
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
              <p>Cashback can take 30-45 days to credit after order delivery</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
              <p>Order was returned or cancelled before delivery</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
              <p>Ad-blocker or tracking prevention was enabled</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
              <p>Store's cookie was cleared before purchase completion</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CashStoreMissingCashback;
