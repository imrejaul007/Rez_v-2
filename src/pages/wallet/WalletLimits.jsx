import { useState } from 'react';
import { ArrowLeft, Shield, AlertCircle, CheckCircle, ArrowUp, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';

export default function WalletLimits() {
  const navigate = useNavigate();
  const [kycStatus, setKycStatus] = useState('basic'); // basic, verified, premium

  // Backend API: GET /api/wallet/limits
  // Response: { kycLevel, dailyLimit, monthlyLimit, currentUsage: { daily, monthly } }

  const limits = {
    basic: {
      dailyLimit: 5000,
      monthlyLimit: 20000,
      transferLimit: 1000,
      dailyUsed: 1200,
      monthlyUsed: 8500,
    },
    verified: {
      dailyLimit: 50000,
      monthlyLimit: 200000,
      transferLimit: 25000,
      dailyUsed: 1200,
      monthlyUsed: 8500,
    },
    premium: {
      dailyLimit: 100000,
      monthlyLimit: 1000000,
      transferLimit: 100000,
      dailyUsed: 1200,
      monthlyUsed: 8500,
    },
  };

  const currentLimits = limits[kycStatus];

  const upgradeKYC = () => {
    navigate('/kyc/submit');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
        <button onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">Wallet Limits</h1>
        <p className="text-purple-100 mt-1">Transaction limits and KYC status</p>
      </div>

      {/* KYC Status */}
      <div className="p-4">
        <div className="bg-white rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                kycStatus === 'basic' ? 'bg-orange-100' : kycStatus === 'verified' ? 'bg-blue-100' : 'bg-purple-100'
              }`}>
                <Shield className={`${
                  kycStatus === 'basic' ? 'text-orange-600' : kycStatus === 'verified' ? 'text-blue-600' : 'text-purple-600'
                }`} />
              </div>
              <div>
                <p className="font-bold text-gray-900 capitalize">{kycStatus} Account</p>
                <p className="text-sm text-gray-500">
                  {kycStatus === 'basic' && 'Complete KYC to increase limits'}
                  {kycStatus === 'verified' && 'Verified KYC - Higher limits active'}
                  {kycStatus === 'premium' && 'Premium KYC - Maximum limits'}
                </p>
              </div>
            </div>
            {kycStatus !== 'premium' && (
              <button
                onClick={upgradeKYC}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700"
              >
                Upgrade
              </button>
            )}
          </div>

          {/* KYC Levels */}
          <div className="space-y-2">
            {['basic', 'verified', 'premium'].map((level, index) => (
              <div
                key={level}
                className={`flex items-center gap-3 p-3 rounded-lg ${
                  kycStatus === level ? 'bg-purple-50 border-2 border-purple-600' : 'bg-gray-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  kycStatus === level
                    ? 'bg-purple-600 text-white'
                    : index < ['basic', 'verified', 'premium'].indexOf(kycStatus)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}>
                  {index < ['basic', 'verified', 'premium'].indexOf(kycStatus) ? (
                    <CheckCircle size={16} />
                  ) : (
                    <span className="text-xs font-bold">{index + 1}</span>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium capitalize">{level} KYC</p>
                  <p className="text-xs text-gray-500">
                    {level === 'basic' && 'Phone verification only'}
                    {level === 'verified' && 'ID proof + Address proof'}
                    {level === 'premium' && 'Full verification + Income proof'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Limits */}
        <h2 className="font-bold text-gray-900 mb-3">Current Limits</h2>

        {/* Daily Limit */}
        <div className="bg-white rounded-xl p-4 mb-3">
          <div className="flex justify-between items-center mb-2">
            <p className="font-medium text-gray-900">Daily Transaction Limit</p>
            <p className="text-sm text-gray-600">
              ₹{currentLimits.dailyUsed.toLocaleString()} / ₹{currentLimits.dailyLimit.toLocaleString()}
            </p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div
              className="bg-purple-600 h-2 rounded-full"
              style={{ width: `${(currentLimits.dailyUsed / currentLimits.dailyLimit) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500">
            Remaining today: ₹{(currentLimits.dailyLimit - currentLimits.dailyUsed).toLocaleString()}
          </p>
        </div>

        {/* Monthly Limit */}
        <div className="bg-white rounded-xl p-4 mb-3">
          <div className="flex justify-between items-center mb-2">
            <p className="font-medium text-gray-900">Monthly Transaction Limit</p>
            <p className="text-sm text-gray-600">
              ₹{currentLimits.monthlyUsed.toLocaleString()} / ₹{currentLimits.monthlyLimit.toLocaleString()}
            </p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div
              className="bg-purple-600 h-2 rounded-full"
              style={{ width: `${(currentLimits.monthlyUsed / currentLimits.monthlyLimit) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500">
            Remaining this month: ₹{(currentLimits.monthlyLimit - currentLimits.monthlyUsed).toLocaleString()}
          </p>
        </div>

        {/* Transfer Limit */}
        <div className="bg-white rounded-xl p-4 mb-3">
          <div className="flex justify-between items-center">
            <p className="font-medium text-gray-900">Per Transaction Limit</p>
            <p className="text-lg font-bold text-purple-600">
              ₹{currentLimits.transferLimit.toLocaleString()}
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-1">Maximum amount per single transaction</p>
        </div>

        {/* Comparison Table */}
        <h2 className="font-bold text-gray-900 mb-3 mt-6">Compare Limits</h2>
        <div className="bg-white rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Feature</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Basic</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Verified</th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Premium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm text-gray-900">Daily Limit</td>
                <td className="px-4 py-3 text-sm text-center text-gray-600">₹5K</td>
                <td className="px-4 py-3 text-sm text-center text-gray-600">₹50K</td>
                <td className="px-4 py-3 text-sm text-center font-medium text-purple-600">₹1L</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-900">Monthly Limit</td>
                <td className="px-4 py-3 text-sm text-center text-gray-600">₹20K</td>
                <td className="px-4 py-3 text-sm text-center text-gray-600">₹2L</td>
                <td className="px-4 py-3 text-sm text-center font-medium text-purple-600">₹10L</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-900">Per Transfer</td>
                <td className="px-4 py-3 text-sm text-center text-gray-600">₹1K</td>
                <td className="px-4 py-3 text-sm text-center text-gray-600">₹25K</td>
                <td className="px-4 py-3 text-sm text-center font-medium text-purple-600">₹1L</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Info */}
        <div className="bg-blue-50 p-4 rounded-xl mt-4 flex items-start gap-3">
          <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
          <div className="text-sm text-blue-900">
            <p className="font-medium">Important Information</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Limits reset daily at 12:00 AM IST</li>
              <li>Monthly limits reset on the 1st of each month</li>
              <li>Upgrade KYC anytime to increase your limits</li>
            </ul>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
