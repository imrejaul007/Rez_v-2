import React, { useState } from 'react';
import {
  ArrowLeft, Ticket, Plus, Search, Filter, Gift, Percent,
  DollarSign, Calendar, Users, TrendingUp, Copy, QrCode,
  Share2, Eye, Edit, Trash2, CheckCircle, Clock, XCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantVouchers = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');
  const [showCreate, setShowCreate] = useState(false);
  const [voucherType, setVoucherType] = useState('percentage');

  const vouchers = [
    {
      id: 1,
      code: 'WELCOME50',
      type: 'percentage',
      value: 50,
      maxDiscount: 200,
      minOrder: 500,
      usageLimit: 100,
      usedCount: 45,
      validFrom: '2024-01-01',
      validTill: '2024-01-31',
      status: 'active',
      visibility: 'public'
    },
    {
      id: 2,
      code: 'FLAT100',
      type: 'fixed',
      value: 100,
      maxDiscount: null,
      minOrder: 300,
      usageLimit: 50,
      usedCount: 50,
      validFrom: '2024-01-01',
      validTill: '2024-01-15',
      status: 'exhausted',
      visibility: 'public'
    },
    {
      id: 3,
      code: 'VIP20',
      type: 'percentage',
      value: 20,
      maxDiscount: 500,
      minOrder: 1000,
      usageLimit: null,
      usedCount: 128,
      validFrom: '2024-01-01',
      validTill: '2024-12-31',
      status: 'active',
      visibility: 'private'
    },
    {
      id: 4,
      code: 'FREEBIE',
      type: 'freeItem',
      value: 'Free Dessert',
      maxDiscount: null,
      minOrder: 800,
      usageLimit: 30,
      usedCount: 12,
      validFrom: '2024-01-10',
      validTill: '2024-01-20',
      status: 'active',
      visibility: 'public'
    },
    {
      id: 5,
      code: 'NEWYEAR25',
      type: 'percentage',
      value: 25,
      maxDiscount: 300,
      minOrder: 400,
      usageLimit: 200,
      usedCount: 180,
      validFrom: '2024-01-01',
      validTill: '2024-01-05',
      status: 'expired',
      visibility: 'public'
    }
  ];

  const stats = {
    activeVouchers: 3,
    totalRedemptions: 415,
    totalDiscount: 28450,
    avgOrderValue: 1250
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400';
      case 'exhausted': return 'bg-orange-500/20 text-orange-400';
      case 'expired': return 'bg-red-500/20 text-red-400';
      case 'scheduled': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'percentage': return <Percent size={16} />;
      case 'fixed': return <DollarSign size={16} />;
      case 'freeItem': return <Gift size={16} />;
      default: return <Ticket size={16} />;
    }
  };

  const filteredVouchers = activeTab === 'all'
    ? vouchers
    : vouchers.filter(v => v.status === activeTab);

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Voucher Management</h1>
              <p className="text-purple-200 text-sm">Create & track promo codes</p>
            </div>
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="bg-white/20 p-2 rounded-lg"
          >
            <Plus size={24} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{stats.activeVouchers}</p>
            <p className="text-xs text-purple-200">Active</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{stats.totalRedemptions}</p>
            <p className="text-xs text-purple-200">Redeemed</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">₹{(stats.totalDiscount/1000).toFixed(1)}K</p>
            <p className="text-xs text-purple-200">Discounts</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">₹{stats.avgOrderValue}</p>
            <p className="text-xs text-purple-200">Avg Order</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {[
            { id: 'active', label: 'Active' },
            { id: 'scheduled', label: 'Scheduled' },
            { id: 'expired', label: 'Expired' },
            { id: 'all', label: 'All' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Vouchers List */}
      <div className="px-4 space-y-3">
        {filteredVouchers.map(voucher => (
          <div key={voucher.id} className="bg-gray-800 rounded-xl overflow-hidden">
            {/* Voucher Header */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                    {getTypeIcon(voucher.type)}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="text-white font-bold text-lg">{voucher.code}</p>
                      <button className="ml-2 text-gray-400">
                        <Copy size={14} />
                      </button>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {voucher.type === 'percentage' && `${voucher.value}% off (max ₹${voucher.maxDiscount})`}
                      {voucher.type === 'fixed' && `₹${voucher.value} off`}
                      {voucher.type === 'freeItem' && voucher.value}
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(voucher.status)}`}>
                  {voucher.status}
                </span>
              </div>
            </div>

            {/* Voucher Body */}
            <div className="p-4">
              <div className="grid grid-cols-3 gap-2 mb-3 text-sm">
                <div>
                  <p className="text-gray-400 text-xs">Min Order</p>
                  <p className="text-white font-medium">₹{voucher.minOrder}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Usage</p>
                  <p className="text-white font-medium">
                    {voucher.usedCount}/{voucher.usageLimit || '∞'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Visibility</p>
                  <p className="text-white font-medium capitalize">{voucher.visibility}</p>
                </div>
              </div>

              {/* Usage Progress */}
              {voucher.usageLimit && (
                <div className="mb-3">
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className={`h-full rounded-full ${
                        voucher.usedCount >= voucher.usageLimit ? 'bg-orange-500' : 'bg-purple-500'
                      }`}
                      style={{ width: `${Math.min((voucher.usedCount / voucher.usageLimit) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-400">
                  <Calendar size={14} className="mr-1" />
                  <span>{voucher.validFrom} - {voucher.validTill}</span>
                </div>
                <div className="flex space-x-2">
                  <button className="text-gray-400 p-1">
                    <QrCode size={18} />
                  </button>
                  <button className="text-gray-400 p-1">
                    <Share2 size={18} />
                  </button>
                  <button className="text-gray-400 p-1">
                    <Eye size={18} />
                  </button>
                  {voucher.status === 'active' && (
                    <>
                      <button className="text-blue-400 p-1">
                        <Edit size={18} />
                      </button>
                      <button className="text-red-400 p-1">
                        <Trash2 size={18} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Create Templates */}
      <div className="p-4">
        <h3 className="text-white font-bold mb-3">Quick Create</h3>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setShowCreate(true)}
            className="bg-gray-800 p-4 rounded-xl text-left"
          >
            <Percent size={24} className="text-purple-400 mb-2" />
            <p className="text-white font-medium">Percentage Off</p>
            <p className="text-gray-400 text-xs">10-50% discount</p>
          </button>
          <button
            onClick={() => setShowCreate(true)}
            className="bg-gray-800 p-4 rounded-xl text-left"
          >
            <DollarSign size={24} className="text-green-400 mb-2" />
            <p className="text-white font-medium">Flat Discount</p>
            <p className="text-gray-400 text-xs">₹50-500 off</p>
          </button>
          <button
            onClick={() => setShowCreate(true)}
            className="bg-gray-800 p-4 rounded-xl text-left"
          >
            <Gift size={24} className="text-pink-400 mb-2" />
            <p className="text-white font-medium">Free Item</p>
            <p className="text-gray-400 text-xs">With min order</p>
          </button>
          <button
            onClick={() => setShowCreate(true)}
            className="bg-gray-800 p-4 rounded-xl text-left"
          >
            <Users size={24} className="text-blue-400 mb-2" />
            <p className="text-white font-medium">First Time User</p>
            <p className="text-gray-400 text-xs">New customers only</p>
          </button>
        </div>
      </div>

      {/* Create Voucher Modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
          <div className="bg-gray-800 rounded-t-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-bold">Create Voucher</h3>
                <button onClick={() => setShowCreate(false)} className="text-gray-400">
                  <XCircle size={24} />
                </button>
              </div>
            </div>

            <div className="p-4">
              {/* Voucher Type */}
              <div className="mb-4">
                <label className="text-gray-400 text-sm mb-2 block">Voucher Type</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'percentage', label: 'Percentage', icon: Percent },
                    { id: 'fixed', label: 'Fixed', icon: DollarSign },
                    { id: 'freeItem', label: 'Free Item', icon: Gift }
                  ].map(type => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setVoucherType(type.id)}
                        className={`p-3 rounded-xl text-center ${
                          voucherType === type.id
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-700 text-gray-300'
                        }`}
                      >
                        <Icon size={20} className="mx-auto mb-1" />
                        <p className="text-sm">{type.label}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Voucher Code */}
              <div className="mb-4">
                <label className="text-gray-400 text-sm mb-2 block">Voucher Code</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="e.g., SAVE20"
                    className="flex-1 bg-gray-700 text-white p-3 rounded-xl uppercase"
                  />
                  <button className="bg-gray-700 text-purple-400 px-4 rounded-xl text-sm">
                    Generate
                  </button>
                </div>
              </div>

              {/* Value */}
              <div className="mb-4">
                <label className="text-gray-400 text-sm mb-2 block">
                  {voucherType === 'percentage' ? 'Discount Percentage' :
                   voucherType === 'fixed' ? 'Discount Amount' : 'Free Item Name'}
                </label>
                <input
                  type={voucherType === 'freeItem' ? 'text' : 'number'}
                  placeholder={voucherType === 'percentage' ? '20' :
                               voucherType === 'fixed' ? '100' : 'Free Dessert'}
                  className="w-full bg-gray-700 text-white p-3 rounded-xl"
                />
              </div>

              {/* Max Discount (for percentage) */}
              {voucherType === 'percentage' && (
                <div className="mb-4">
                  <label className="text-gray-400 text-sm mb-2 block">Maximum Discount (₹)</label>
                  <input
                    type="number"
                    placeholder="200"
                    className="w-full bg-gray-700 text-white p-3 rounded-xl"
                  />
                </div>
              )}

              {/* Min Order */}
              <div className="mb-4">
                <label className="text-gray-400 text-sm mb-2 block">Minimum Order Value (₹)</label>
                <input
                  type="number"
                  placeholder="500"
                  className="w-full bg-gray-700 text-white p-3 rounded-xl"
                />
              </div>

              {/* Usage Limit */}
              <div className="mb-4">
                <label className="text-gray-400 text-sm mb-2 block">Usage Limit (leave empty for unlimited)</label>
                <input
                  type="number"
                  placeholder="100"
                  className="w-full bg-gray-700 text-white p-3 rounded-xl"
                />
              </div>

              {/* Validity */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Valid From</label>
                  <input
                    type="date"
                    className="w-full bg-gray-700 text-white p-3 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Valid Till</label>
                  <input
                    type="date"
                    className="w-full bg-gray-700 text-white p-3 rounded-xl"
                  />
                </div>
              </div>

              <button className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold">
                Create Voucher
              </button>
            </div>
          </div>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantVouchers;
