import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Package, Crown, Diamond, Star, Gift,
  Settings, Edit2, Save, X, Plus, Search, Filter,
  Percent, IndianRupee, TrendingUp, Users, Store,
  Shield, Award, Zap, AlertCircle, CheckCircle,
  ChevronDown, ChevronUp, MoreVertical, Copy,
  History, Lock, Unlock, RefreshCw
} from 'lucide-react';

const AdminMerchantPackages = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tiers');
  const [editingTier, setEditingTier] = useState(null);
  const [showSpecialModal, setShowSpecialModal] = useState(false);
  const [searchMerchant, setSearchMerchant] = useState('');
  const [selectedMerchant, setSelectedMerchant] = useState(null);

  // Package Tiers Configuration
  const [packageTiers, setPackageTiers] = useState([
    {
      id: 'free',
      name: 'Free',
      icon: Gift,
      color: 'gray',
      marketingSpend: 0,
      commission: {
        fixed: 20,
        rezCoin: { min: 5, max: 10 },
        platformRevenue: { min: 10, max: 15 }
      },
      optional: {
        brandCoin: { min: 0, max: 10 },
        priveCoin: { min: 5, max: 100 }
      },
      subscription: {
        aboveThreshold: 0,
        belowThreshold: 499,
        threshold: 100000
      },
      merchantCount: 1250,
      benefits: ['Platform Listing', 'Basic Analytics', 'POS System']
    },
    {
      id: 'basic',
      name: 'Basic',
      icon: Package,
      color: 'blue',
      marketingSpend: 10000,
      commission: {
        fixed: 18,
        rezCoin: { min: 5, max: 10 },
        platformRevenue: { min: 8, max: 13 }
      },
      optional: {
        brandCoin: { min: 0, max: 10 },
        priveCoin: { min: 5, max: 100 }
      },
      subscription: {
        aboveThreshold: 0,
        belowThreshold: 499,
        threshold: 100000
      },
      merchantCount: 456,
      benefits: ['Priority Support', 'API Access', 'Enhanced Analytics']
    },
    {
      id: 'golden',
      name: 'Golden',
      icon: Crown,
      color: 'yellow',
      marketingSpend: 30000,
      commission: {
        fixed: 17,
        rezCoin: { min: 5, max: 10 },
        platformRevenue: { min: 7, max: 12 }
      },
      optional: {
        brandCoin: { min: 0, max: 10 },
        priveCoin: { min: 5, max: 100 }
      },
      subscription: {
        aboveThreshold: 0,
        belowThreshold: 499,
        threshold: 100000
      },
      merchantCount: 189,
      benefits: ['Featured Placement', 'Custom Campaigns', 'Dedicated Support']
    },
    {
      id: 'diamond',
      name: 'Diamond',
      icon: Diamond,
      color: 'purple',
      marketingSpend: 100000,
      commission: {
        fixed: 15,
        rezCoin: { min: 5, max: 10 },
        platformRevenue: { min: 5, max: 10 }
      },
      optional: {
        brandCoin: { min: 0, max: 10 },
        priveCoin: { min: 5, max: 100 }
      },
      subscription: {
        aboveThreshold: 0,
        belowThreshold: 499,
        threshold: 100000
      },
      merchantCount: 67,
      benefits: ['Dedicated Manager', 'White-label Options', 'Custom Integration']
    }
  ]);

  // Special Privilege Merchants
  const [specialMerchants, setSpecialMerchants] = useState([
    {
      id: 'sp1',
      merchantId: 'M001',
      name: 'BigBazaar Retail',
      baseTier: 'diamond',
      customCommission: 12,
      customRezCoin: 8,
      customSubscription: 0,
      reason: 'Strategic Partner - High Volume',
      validUntil: '2025-12-31',
      approvedBy: 'Admin HQ',
      status: 'active'
    },
    {
      id: 'sp2',
      merchantId: 'M045',
      name: 'FreshMart Grocery',
      baseTier: 'golden',
      customCommission: 14,
      customRezCoin: 7,
      customSubscription: 0,
      reason: 'Early Adopter Bonus',
      validUntil: '2025-06-30',
      approvedBy: 'Zone Admin North',
      status: 'active'
    },
    {
      id: 'sp3',
      merchantId: 'M112',
      name: 'StyleHub Fashion',
      baseTier: 'basic',
      customCommission: 15,
      customRezCoin: 10,
      customSubscription: 0,
      reason: 'Promotional Period',
      validUntil: '2025-03-31',
      approvedBy: 'Admin HQ',
      status: 'expiring_soon'
    }
  ]);

  // Mock merchant search results
  const merchantSearchResults = [
    { id: 'M201', name: 'TechZone Electronics', tier: 'basic', monthlySales: 250000 },
    { id: 'M202', name: 'FoodieHub Restaurant', tier: 'golden', monthlySales: 450000 },
    { id: 'M203', name: 'HealthFirst Pharmacy', tier: 'free', monthlySales: 85000 },
  ];

  const getTierColor = (color) => {
    const colors = {
      gray: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
      blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    };
    return colors[color] || colors.gray;
  };

  const formatCurrency = (amount) => {
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
    if (amount >= 1000) return `₹${(amount / 1000).toFixed(0)}k`;
    return `₹${amount}`;
  };

  const handleSaveTier = (tierId, updates) => {
    setPackageTiers(prev => prev.map(tier =>
      tier.id === tierId ? { ...tier, ...updates } : tier
    ));
    setEditingTier(null);
  };

  const TierCard = ({ tier, isEditing, onEdit, onSave, onCancel }) => {
    const [editData, setEditData] = useState(tier);
    const IconComponent = tier.icon;

    return (
      <div className={`bg-gray-800 rounded-xl border ${isEditing ? 'border-blue-500' : 'border-gray-700'} overflow-hidden`}>
        {/* Header */}
        <div className={`p-4 ${getTierColor(tier.color)} border-b border-gray-700`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getTierColor(tier.color)}`}>
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{tier.name} Tier</h3>
                <p className="text-sm opacity-75">{tier.merchantCount} merchants</p>
              </div>
            </div>
            {!isEditing ? (
              <button
                onClick={() => onEdit(tier.id)}
                className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <Edit2 className="w-4 h-4 text-gray-300" />
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => onSave(tier.id, editData)}
                  className="p-2 bg-green-600 rounded-lg hover:bg-green-500 transition-colors"
                >
                  <Save className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={onCancel}
                  className="p-2 bg-red-600 rounded-lg hover:bg-red-500 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Marketing Spend */}
          <div className="flex items-center justify-between p-3 bg-gray-900 rounded-lg">
            <span className="text-gray-400">Marketing Spend</span>
            {isEditing ? (
              <div className="flex items-center gap-2">
                <span className="text-gray-500">₹</span>
                <input
                  type="number"
                  value={editData.marketingSpend}
                  onChange={(e) => setEditData({...editData, marketingSpend: parseInt(e.target.value) || 0})}
                  className="w-24 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-white text-right"
                />
                <span className="text-gray-500">/mo</span>
              </div>
            ) : (
              <span className="text-white font-semibold">
                {tier.marketingSpend === 0 ? '₹0' : formatCurrency(tier.marketingSpend) + '/mo'}
              </span>
            )}
          </div>

          {/* Commission Structure */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-400 flex items-center gap-2">
              <Percent className="w-4 h-4" /> Commission Structure
            </h4>

            {/* Fixed Commission */}
            <div className="flex items-center justify-between p-2 bg-gray-900/50 rounded">
              <span className="text-gray-400 text-sm">Fixed Commission</span>
              {isEditing ? (
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    value={editData.commission.fixed}
                    onChange={(e) => setEditData({
                      ...editData,
                      commission: {...editData.commission, fixed: parseInt(e.target.value) || 0}
                    })}
                    className="w-16 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-white text-right text-sm"
                  />
                  <span className="text-gray-500">%</span>
                </div>
              ) : (
                <span className="text-red-400 font-medium">{tier.commission.fixed}%</span>
              )}
            </div>

            {/* ReZ Coin */}
            <div className="flex items-center justify-between p-2 bg-gray-900/50 rounded">
              <span className="text-gray-400 text-sm">ReZ Coin Allocation</span>
              {isEditing ? (
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    value={editData.commission.rezCoin.min}
                    onChange={(e) => setEditData({
                      ...editData,
                      commission: {
                        ...editData.commission,
                        rezCoin: {...editData.commission.rezCoin, min: parseInt(e.target.value) || 0}
                      }
                    })}
                    className="w-12 bg-gray-800 border border-gray-600 rounded px-1 py-1 text-white text-right text-sm"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    value={editData.commission.rezCoin.max}
                    onChange={(e) => setEditData({
                      ...editData,
                      commission: {
                        ...editData.commission,
                        rezCoin: {...editData.commission.rezCoin, max: parseInt(e.target.value) || 0}
                      }
                    })}
                    className="w-12 bg-gray-800 border border-gray-600 rounded px-1 py-1 text-white text-right text-sm"
                  />
                  <span className="text-gray-500">%</span>
                </div>
              ) : (
                <span className="text-yellow-400 font-medium">
                  {tier.commission.rezCoin.min}-{tier.commission.rezCoin.max}%
                </span>
              )}
            </div>

            {/* Platform Revenue */}
            <div className="flex items-center justify-between p-2 bg-gray-900/50 rounded">
              <span className="text-gray-400 text-sm">Platform Revenue (Ours)</span>
              {isEditing ? (
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    value={editData.commission.platformRevenue.min}
                    onChange={(e) => setEditData({
                      ...editData,
                      commission: {
                        ...editData.commission,
                        platformRevenue: {...editData.commission.platformRevenue, min: parseInt(e.target.value) || 0}
                      }
                    })}
                    className="w-12 bg-gray-800 border border-gray-600 rounded px-1 py-1 text-white text-right text-sm"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    value={editData.commission.platformRevenue.max}
                    onChange={(e) => setEditData({
                      ...editData,
                      commission: {
                        ...editData.commission,
                        platformRevenue: {...editData.commission.platformRevenue, max: parseInt(e.target.value) || 0}
                      }
                    })}
                    className="w-12 bg-gray-800 border border-gray-600 rounded px-1 py-1 text-white text-right text-sm"
                  />
                  <span className="text-gray-500">%</span>
                </div>
              ) : (
                <span className="text-green-400 font-medium">
                  {tier.commission.platformRevenue.min}-{tier.commission.platformRevenue.max}%
                </span>
              )}
            </div>
          </div>

          {/* Optional Allocations */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-400 flex items-center gap-2">
              <Gift className="w-4 h-4" /> Optional Allocations
            </h4>

            <div className="flex items-center justify-between p-2 bg-gray-900/50 rounded">
              <span className="text-gray-400 text-sm">Brand Coin</span>
              <span className="text-blue-400 font-medium">
                {tier.optional.brandCoin.min}-{tier.optional.brandCoin.max}%
              </span>
            </div>

            <div className="flex items-center justify-between p-2 bg-gray-900/50 rounded">
              <span className="text-gray-400 text-sm">Prive Coin</span>
              <span className="text-purple-400 font-medium">
                {tier.optional.priveCoin.min}-{tier.optional.priveCoin.max}%
              </span>
            </div>
          </div>

          {/* Subscription */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-400 flex items-center gap-2">
              <IndianRupee className="w-4 h-4" /> Subscription Fees
            </h4>

            <div className="p-3 bg-gray-900 rounded-lg space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Sales &gt; ₹1L/mo</span>
                {isEditing ? (
                  <div className="flex items-center gap-1">
                    <span className="text-gray-500">₹</span>
                    <input
                      type="number"
                      value={editData.subscription.aboveThreshold}
                      onChange={(e) => setEditData({
                        ...editData,
                        subscription: {...editData.subscription, aboveThreshold: parseInt(e.target.value) || 0}
                      })}
                      className="w-16 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-white text-right text-sm"
                    />
                  </div>
                ) : (
                  <span className="text-green-400 font-medium">₹{tier.subscription.aboveThreshold}</span>
                )}
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Sales &lt; ₹1L/mo</span>
                {isEditing ? (
                  <div className="flex items-center gap-1">
                    <span className="text-gray-500">₹</span>
                    <input
                      type="number"
                      value={editData.subscription.belowThreshold}
                      onChange={(e) => setEditData({
                        ...editData,
                        subscription: {...editData.subscription, belowThreshold: parseInt(e.target.value) || 0}
                      })}
                      className="w-16 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-white text-right text-sm"
                    />
                  </div>
                ) : (
                  <span className="text-orange-400 font-medium">₹{tier.subscription.belowThreshold}</span>
                )}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="pt-2 border-t border-gray-700">
            <h4 className="text-sm font-medium text-gray-400 mb-2">Tier Benefits</h4>
            <div className="flex flex-wrap gap-2">
              {tier.benefits.map((benefit, idx) => (
                <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Special Privilege Modal
  const SpecialPrivilegeModal = () => {
    const [formData, setFormData] = useState({
      merchantId: '',
      customCommission: 15,
      customRezCoin: 8,
      customSubscription: 0,
      reason: '',
      validUntil: '',
      baseTier: 'basic'
    });

    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-800 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-xl font-bold text-white">Grant Special Privilege</h2>
              </div>
              <button
                onClick={() => setShowSpecialModal(false)}
                className="p-2 hover:bg-gray-700 rounded-lg"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {/* Merchant Search */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Search Merchant</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  value={searchMerchant}
                  onChange={(e) => setSearchMerchant(e.target.value)}
                  placeholder="Search by name or ID..."
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white"
                />
              </div>
              {searchMerchant && (
                <div className="mt-2 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
                  {merchantSearchResults.map(merchant => (
                    <button
                      key={merchant.id}
                      onClick={() => {
                        setSelectedMerchant(merchant);
                        setFormData({...formData, merchantId: merchant.id, baseTier: merchant.tier});
                        setSearchMerchant('');
                      }}
                      className="w-full p-3 flex items-center justify-between hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Store className="w-4 h-4 text-gray-500" />
                        <div className="text-left">
                          <p className="text-white text-sm">{merchant.name}</p>
                          <p className="text-gray-500 text-xs">{merchant.id} • {merchant.tier} tier</p>
                        </div>
                      </div>
                      <span className="text-gray-400 text-sm">{formatCurrency(merchant.monthlySales)}/mo</span>
                    </button>
                  ))}
                </div>
              )}
              {selectedMerchant && (
                <div className="mt-2 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{selectedMerchant.name}</p>
                      <p className="text-gray-400 text-sm">Current: {selectedMerchant.tier} tier</p>
                    </div>
                    <button
                      onClick={() => setSelectedMerchant(null)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Custom Commission */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Custom Commission Rate</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={formData.customCommission}
                  onChange={(e) => setFormData({...formData, customCommission: parseInt(e.target.value) || 0})}
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white"
                />
                <span className="text-gray-400">%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Standard: 15-20% based on tier</p>
            </div>

            {/* Custom ReZ Coin */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Custom ReZ Coin Allocation</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={formData.customRezCoin}
                  onChange={(e) => setFormData({...formData, customRezCoin: parseInt(e.target.value) || 0})}
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white"
                />
                <span className="text-gray-400">%</span>
              </div>
            </div>

            {/* Custom Subscription */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Custom Subscription Fee</label>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">₹</span>
                <input
                  type="number"
                  value={formData.customSubscription}
                  onChange={(e) => setFormData({...formData, customSubscription: parseInt(e.target.value) || 0})}
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white"
                />
                <span className="text-gray-400">/mo</span>
              </div>
            </div>

            {/* Valid Until */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Valid Until</label>
              <input
                type="date"
                value={formData.validUntil}
                onChange={(e) => setFormData({...formData, validUntil: e.target.value})}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white"
              />
            </div>

            {/* Reason */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Reason for Special Privilege</label>
              <textarea
                value={formData.reason}
                onChange={(e) => setFormData({...formData, reason: e.target.value})}
                placeholder="e.g., Strategic Partner, Early Adopter, High Volume..."
                rows={3}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white resize-none"
              />
            </div>
          </div>

          <div className="p-6 border-t border-gray-700 flex gap-3">
            <button
              onClick={() => setShowSpecialModal(false)}
              className="flex-1 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Add special privilege logic
                setShowSpecialModal(false);
              }}
              className="flex-1 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-colors flex items-center justify-center gap-2"
            >
              <Shield className="w-4 h-4" />
              Grant Privilege
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-4 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/admin')} className="p-2 hover:bg-gray-700 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-gray-400" />
            </button>
            <div>
              <h1 className="text-lg font-bold text-white">Merchant Packages</h1>
              <p className="text-xs text-gray-400">Configure tiers & special privileges</p>
            </div>
          </div>
          <button
            onClick={() => setShowSpecialModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors"
          >
            <Star className="w-4 h-4" />
            <span className="hidden sm:inline">Special Privilege</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 py-3 bg-gray-800/50 border-b border-gray-700">
        <div className="flex gap-2">
          {[
            { id: 'tiers', label: 'Package Tiers', icon: Package },
            { id: 'special', label: 'Special Privileges', icon: Star },
            { id: 'history', label: 'Change History', icon: History }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="text-sm">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'tiers' && (
          <div className="space-y-4">
            {/* Summary Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {packageTiers.map(tier => {
                const IconComponent = tier.icon;
                return (
                  <div key={tier.id} className={`p-4 rounded-xl border ${getTierColor(tier.color)}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{tier.name}</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{tier.merchantCount}</p>
                    <p className="text-xs opacity-75">merchants</p>
                  </div>
                );
              })}
            </div>

            {/* Tier Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {packageTiers.map(tier => (
                <TierCard
                  key={tier.id}
                  tier={tier}
                  isEditing={editingTier === tier.id}
                  onEdit={setEditingTier}
                  onSave={handleSaveTier}
                  onCancel={() => setEditingTier(null)}
                />
              ))}
            </div>

            {/* Global Settings */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-gray-400" />
                Global Package Settings
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-900 rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Sales Threshold</p>
                  <p className="text-xl font-bold text-white">₹1,00,000</p>
                  <p className="text-xs text-gray-500">For subscription waiver</p>
                </div>
                <div className="p-4 bg-gray-900 rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Auto-Upgrade</p>
                  <p className="text-xl font-bold text-green-400">Enabled</p>
                  <p className="text-xs text-gray-500">Based on marketing spend</p>
                </div>
                <div className="p-4 bg-gray-900 rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Grace Period</p>
                  <p className="text-xl font-bold text-white">30 Days</p>
                  <p className="text-xs text-gray-500">Before tier downgrade</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'special' && (
          <div className="space-y-4">
            {/* Special Privilege Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                <p className="text-sm text-gray-400">Active Privileges</p>
                <p className="text-2xl font-bold text-white">{specialMerchants.filter(m => m.status === 'active').length}</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                <p className="text-sm text-gray-400">Expiring Soon</p>
                <p className="text-2xl font-bold text-orange-400">{specialMerchants.filter(m => m.status === 'expiring_soon').length}</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                <p className="text-sm text-gray-400">Avg. Discount</p>
                <p className="text-2xl font-bold text-green-400">-4.3%</p>
              </div>
            </div>

            {/* Special Merchants List */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                <h3 className="font-semibold text-white">Merchants with Special Privileges</h3>
                <button
                  onClick={() => setShowSpecialModal(true)}
                  className="flex items-center gap-2 px-3 py-1.5 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-500"
                >
                  <Plus className="w-4 h-4" />
                  Add New
                </button>
              </div>
              <div className="divide-y divide-gray-700">
                {specialMerchants.map(merchant => (
                  <div key={merchant.id} className="p-4 hover:bg-gray-750">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          merchant.status === 'active' ? 'bg-green-500/20' : 'bg-orange-500/20'
                        }`}>
                          <Store className={`w-5 h-5 ${
                            merchant.status === 'active' ? 'text-green-400' : 'text-orange-400'
                          }`} />
                        </div>
                        <div>
                          <p className="font-medium text-white">{merchant.name}</p>
                          <p className="text-sm text-gray-400">{merchant.merchantId} • Base: {merchant.baseTier}</p>
                          <p className="text-xs text-gray-500 mt-1">{merchant.reason}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 rounded text-xs ${
                            merchant.status === 'active'
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-orange-500/20 text-orange-400'
                          }`}>
                            {merchant.status === 'active' ? 'Active' : 'Expiring Soon'}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">Until {merchant.validUntil}</p>
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="p-2 bg-gray-900 rounded text-center">
                        <p className="text-xs text-gray-400">Commission</p>
                        <p className="text-sm font-semibold text-red-400">{merchant.customCommission}%</p>
                      </div>
                      <div className="p-2 bg-gray-900 rounded text-center">
                        <p className="text-xs text-gray-400">ReZ Coin</p>
                        <p className="text-sm font-semibold text-yellow-400">{merchant.customRezCoin}%</p>
                      </div>
                      <div className="p-2 bg-gray-900 rounded text-center">
                        <p className="text-xs text-gray-400">Subscription</p>
                        <p className="text-sm font-semibold text-green-400">₹{merchant.customSubscription}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                      <span>Approved by: {merchant.approvedBy}</span>
                      <div className="flex gap-2">
                        <button className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600 text-gray-300">
                          Edit
                        </button>
                        <button className="px-2 py-1 bg-red-500/20 rounded hover:bg-red-500/30 text-red-400">
                          Revoke
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-xl border border-gray-700">
              <div className="p-4 border-b border-gray-700">
                <h3 className="font-semibold text-white">Recent Changes</h3>
              </div>
              <div className="divide-y divide-gray-700">
                {[
                  { action: 'Tier rate updated', target: 'Diamond Tier', details: 'Commission 16% → 15%', by: 'Admin HQ', time: '2 hours ago' },
                  { action: 'Special privilege granted', target: 'BigBazaar Retail', details: 'Custom 12% commission', by: 'Admin HQ', time: '1 day ago' },
                  { action: 'Subscription threshold updated', target: 'Global', details: '₹80k → ₹100k', by: 'System', time: '3 days ago' },
                  { action: 'Special privilege expired', target: 'QuickMart Stores', details: 'Reverted to Basic tier', by: 'Auto', time: '1 week ago' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                      <History className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{item.action}</p>
                      <p className="text-gray-400 text-xs">{item.target} • {item.details}</p>
                      <p className="text-gray-500 text-xs mt-1">By {item.by} • {item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Special Privilege Modal */}
      {showSpecialModal && <SpecialPrivilegeModal />}
    </div>
  );
};

export default AdminMerchantPackages;
