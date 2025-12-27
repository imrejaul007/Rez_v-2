import { useState } from 'react';
import { Save, TrendingUp, Users, Coins, Award, MessageSquare, Image, Star, Target, RotateCcw, DollarSign, Percent, PieChart } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantBrandedCoinConfig() {
  const [merchantInfo] = useState({
    name: 'Tech Galaxy',
    brandedCoinName: 'Galaxy Coin',
    brandedCoinIcon: '🔵',
    totalIssued: 1234567,
    totalRedeemed: 987654,
    activeBalance: 246913,
    usersHolding: 12456,
    tier: 'golden',
    commissionStructure: {
      total: 17, // Golden tier: 17%
      rezCoin: 9,
      brandedCoin: 6,
      priveCoin: 15,
      toReZ: 2, // Platform revenue
      isCustom: false
    }
  });

  const [earningRules, setEarningRules] = useState({
    purchaseRate: 5, // % of bill amount
    minPurchaseForCoins: 100,
    maxCoinsPerTransaction: 1000,
    reviewCoins: 50,
    photoReviewBonus: 25,
    shareOfferCoins: 20,
    referralCoins: 100,
    birthdayBonus: 200,
    firstPurchaseBonus: 150,
    repeatPurchaseBonus: 30,
    bulkOrderBonus: 10, // % extra
    minBulkAmount: 5000
  });

  const [redemptionSettings, setRedemptionSettings] = useState({
    enabled: true,
    maxPercentPerBill: 100,
    minPurchaseForRedemption: 50,
    combinableWithOffers: true,
    giftCardAllowed: false
  });

  const [campaignSettings, setCampaignSettings] = useState({
    doubleCoinsEnabled: false,
    doubleCoinsMultiplier: 2,
    doubleCoinsDays: ['Saturday', 'Sunday'],
    specialEventsEnabled: true,
    brandAnniversaryBonus: 500,
    festiveSeasonMultiplier: 1.5
  });

  const [stats] = useState({
    avgCoinsEarnedPerUser: 145,
    avgRedemptionRate: 63.5,
    topEarners: [
      { name: 'Rajesh Kumar', earned: 2456, redeemed: 1200 },
      { name: 'Priya Sharma', earned: 2234, redeemed: 1800 },
      { name: 'Amit Singh', earned: 2100, redeemed: 1500 }
    ],
    monthlyTrend: {
      issued: 145678,
      redeemed: 98765,
      growth: 23.4
    }
  });

  const handleSave = () => {
    console.log('Saving branded coin configuration:', {
      earningRules,
      redemptionSettings,
      campaignSettings
    });
    alert('Branded coin configuration saved successfully!');
  };

  const handleReset = () => {
    if (window.confirm('Reset all settings to default values?')) {
      setEarningRules({
        purchaseRate: 5,
        minPurchaseForCoins: 100,
        maxCoinsPerTransaction: 1000,
        reviewCoins: 50,
        photoReviewBonus: 25,
        shareOfferCoins: 20,
        referralCoins: 100,
        birthdayBonus: 200,
        firstPurchaseBonus: 150,
        repeatPurchaseBonus: 30,
        bulkOrderBonus: 10,
        minBulkAmount: 5000
      });
      setRedemptionSettings({
        enabled: true,
        maxPercentPerBill: 100,
        minPurchaseForRedemption: 50,
        combinableWithOffers: true,
        giftCardAllowed: false
      });
      setCampaignSettings({
        doubleCoinsEnabled: false,
        doubleCoinsMultiplier: 2,
        doubleCoinsDays: ['Saturday', 'Sunday'],
        specialEventsEnabled: true,
        brandAnniversaryBonus: 500,
        festiveSeasonMultiplier: 1.5
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <Coins className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Branded Coin Configuration</h1>
              <p className="text-blue-100 mt-1">Configure {merchantInfo.brandedCoinName} earning and redemption rules</p>
            </div>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Merchant Branded Coin Overview */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-sm border-2 border-blue-300 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="text-6xl">{merchantInfo.brandedCoinIcon}</div>
              <div>
                <h2 className="text-3xl font-bold text-blue-900">{merchantInfo.brandedCoinName}</h2>
                <p className="text-blue-700 mt-1">Your exclusive merchant loyalty coin</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-700 mb-1">Total Issued</p>
              <p className="text-4xl font-bold text-blue-900">{(merchantInfo.totalIssued / 1000).toFixed(0)}K</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-xs text-gray-600 mb-1">Total Redeemed</p>
              <p className="text-2xl font-bold text-green-600">{(merchantInfo.totalRedeemed / 1000).toFixed(0)}K</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-xs text-gray-600 mb-1">Active Balance</p>
              <p className="text-2xl font-bold text-blue-600">{(merchantInfo.activeBalance / 1000).toFixed(0)}K</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-xs text-gray-600 mb-1">Users Holding</p>
              <p className="text-2xl font-bold text-purple-600">{merchantInfo.usersHolding.toLocaleString()}</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-xs text-gray-600 mb-1">Redemption Rate</p>
              <p className="text-2xl font-bold text-orange-600">{stats.avgRedemptionRate}%</p>
            </div>
          </div>
        </div>

        {/* Commission Structure Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-4">
            <div className="flex items-center gap-3">
              <PieChart className="w-6 h-6" />
              <div>
                <h2 className="text-xl font-bold">Commission Structure</h2>
                <p className="text-purple-100 text-sm">Your {merchantInfo.tier} tier distribution breakdown</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
              {/* Total Commission */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Percent className="w-4 h-4 text-gray-600" />
                  <p className="text-xs text-gray-600 font-medium">Total Commission</p>
                </div>
                <p className="text-3xl font-bold text-gray-900">{merchantInfo.commissionStructure.total}%</p>
                <p className="text-xs text-gray-500 mt-1">Of transaction</p>
              </div>

              {/* ReZ Coin Distribution */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-lg p-4 border-2 border-emerald-300">
                <div className="flex items-center gap-2 mb-2">
                  <Coins className="w-4 h-4 text-emerald-600" />
                  <p className="text-xs text-emerald-700 font-medium">💚 ReZ Coin</p>
                </div>
                <p className="text-3xl font-bold text-emerald-700">{merchantInfo.commissionStructure.rezCoin}%</p>
                <p className="text-xs text-emerald-600 mt-1">Universal coin to user</p>
              </div>

              {/* Branded Coin Distribution */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-300">
                <div className="flex items-center gap-2 mb-2">
                  <Coins className="w-4 h-4 text-blue-600" />
                  <p className="text-xs text-blue-700 font-medium">🔵 Branded Coin</p>
                </div>
                <p className="text-3xl font-bold text-blue-700">{merchantInfo.commissionStructure.brandedCoin}%</p>
                <p className="text-xs text-blue-600 mt-1">Your loyalty coin</p>
              </div>

              {/* Privé Coin Contribution */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-2 border-purple-300">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-purple-600" />
                  <p className="text-xs text-purple-700 font-medium">👑 Privé Coin</p>
                </div>
                <p className="text-3xl font-bold text-purple-700">{merchantInfo.commissionStructure.priveCoin}%</p>
                <p className="text-xs text-purple-600 mt-1">Premium rewards</p>
              </div>

              {/* Platform Revenue */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-2 border-green-300">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <p className="text-xs text-green-700 font-medium">Platform Revenue</p>
                </div>
                <p className="text-3xl font-bold text-green-700">{merchantInfo.commissionStructure.toReZ}%</p>
                <p className="text-xs text-green-600 mt-1">ReZ platform fee</p>
              </div>
            </div>

            {/* Visual Breakdown */}
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm font-medium text-gray-700 mb-3">Transaction Breakdown Example (₹1000 sale):</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-sm text-gray-700">💚 ReZ Coin ({merchantInfo.commissionStructure.rezCoin}%)</span>
                  </div>
                  <span className="text-sm font-semibold text-emerald-700">₹{(1000 * merchantInfo.commissionStructure.rezCoin / 100).toFixed(0)} coins to customer</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-700">🔵 Branded Coin ({merchantInfo.commissionStructure.brandedCoin}%)</span>
                  </div>
                  <span className="text-sm font-semibold text-blue-700">₹{(1000 * merchantInfo.commissionStructure.brandedCoin / 100).toFixed(0)} coins to customer (your brand)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-gray-700">👑 Privé Eligibility ({merchantInfo.commissionStructure.priveCoin}%)</span>
                  </div>
                  <span className="text-sm font-semibold text-purple-700">₹{(1000 * merchantInfo.commissionStructure.priveCoin / 100).toFixed(0)} you contribute</span>
                </div>
                <div className="flex items-center justify-between border-t border-gray-300 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium text-gray-900">Platform Fee ({merchantInfo.commissionStructure.toReZ}%)</span>
                  </div>
                  <span className="text-sm font-semibold text-green-700">₹{(1000 * merchantInfo.commissionStructure.toReZ / 100).toFixed(0)}</span>
                </div>
                <div className="flex items-center justify-between border-t-2 border-gray-400 pt-2 mt-2">
                  <span className="text-sm font-bold text-gray-900">Total Commission</span>
                  <span className="text-sm font-bold text-gray-900">₹{(1000 * merchantInfo.commissionStructure.total / 100).toFixed(0)} ({merchantInfo.commissionStructure.total}%)</span>
                </div>
                <div className="flex items-center justify-between bg-green-100 rounded p-2 mt-2">
                  <span className="text-sm font-bold text-green-900">You Receive (Net)</span>
                  <span className="text-lg font-bold text-green-700">₹{(1000 - (1000 * merchantInfo.commissionStructure.total / 100)).toFixed(0)}</span>
                </div>
              </div>
            </div>

            {merchantInfo.commissionStructure.isCustom && (
              <div className="mt-4 bg-orange-50 border border-orange-200 rounded-lg p-3">
                <p className="text-sm text-orange-800">
                  <strong>Note:</strong> You have a custom commission structure. Contact support to modify your rates.
                </p>
              </div>
            )}

            {!merchantInfo.commissionStructure.isCustom && (
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  <strong>Upgrade Opportunity:</strong> You're on <span className="font-semibold capitalize">{merchantInfo.tier}</span> tier ({merchantInfo.commissionStructure.total}% commission). Higher tiers offer better rates! Contact sales to upgrade.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Monthly Growth</p>
                <p className="text-2xl font-bold text-gray-900">+{stats.monthlyTrend.growth}%</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-600">Issued</p>
                <p className="font-semibold text-gray-900">{(stats.monthlyTrend.issued / 1000).toFixed(0)}K</p>
              </div>
              <div>
                <p className="text-gray-600">Redeemed</p>
                <p className="font-semibold text-gray-900">{(stats.monthlyTrend.redeemed / 1000).toFixed(0)}K</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg Earned Per User</p>
                <p className="text-2xl font-bold text-gray-900">{stats.avgCoinsEarnedPerUser}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Higher engagement = More loyalty</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Top Earner This Month</p>
                <p className="text-lg font-bold text-gray-900">{stats.topEarners[0].name}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">{stats.topEarners[0].earned} coins earned</p>
          </div>
        </div>

        {/* Earning Rules Configuration */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Earning Rules Configuration</h2>
              <p className="text-sm text-gray-600 mt-1">Set how customers earn your branded coins (🔵 {merchantInfo.commissionStructure.brandedCoin}% of transaction value)</p>
            </div>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
            >
              <RotateCcw className="w-4 h-4" />
              Reset to Default
            </button>
          </div>

          <div className="space-y-6">
            {/* Purchase Rewards */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <Coins className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Purchase Rewards</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coins Earning Rate (% of bill)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={earningRules.purchaseRate}
                      onChange={(e) => setEarningRules({ ...earningRules, purchaseRate: parseInt(e.target.value) })}
                      className="flex-1"
                    />
                    <span className="font-bold text-blue-600 w-12">{earningRules.purchaseRate}%</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">₹100 bill = {earningRules.purchaseRate} coins</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Purchase Amount
                  </label>
                  <input
                    type="number"
                    value={earningRules.minPurchaseForCoins}
                    onChange={(e) => setEarningRules({ ...earningRules, minPurchaseForCoins: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Coins Per Transaction
                  </label>
                  <input
                    type="number"
                    value={earningRules.maxCoinsPerTransaction}
                    onChange={(e) => setEarningRules({ ...earningRules, maxCoinsPerTransaction: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* UGC & Engagement Rewards */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-gray-900">Reviews & UGC Rewards</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Text Review Coins
                  </label>
                  <input
                    type="number"
                    value={earningRules.reviewCoins}
                    onChange={(e) => setEarningRules({ ...earningRules, reviewCoins: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Photo Review Bonus
                  </label>
                  <input
                    type="number"
                    value={earningRules.photoReviewBonus}
                    onChange={(e) => setEarningRules({ ...earningRules, photoReviewBonus: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                  <p className="text-xs text-gray-500 mt-1">Extra bonus for photo reviews</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Share Offer Coins
                  </label>
                  <input
                    type="number"
                    value={earningRules.shareOfferCoins}
                    onChange={(e) => setEarningRules({ ...earningRules, shareOfferCoins: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Special Bonuses */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-gray-900">Special Bonuses</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Purchase Bonus
                  </label>
                  <input
                    type="number"
                    value={earningRules.firstPurchaseBonus}
                    onChange={(e) => setEarningRules({ ...earningRules, firstPurchaseBonus: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Repeat Purchase Bonus
                  </label>
                  <input
                    type="number"
                    value={earningRules.repeatPurchaseBonus}
                    onChange={(e) => setEarningRules({ ...earningRules, repeatPurchaseBonus: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                  <p className="text-xs text-gray-500 mt-1">2+ purchases same day</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Referral Coins
                  </label>
                  <input
                    type="number"
                    value={earningRules.referralCoins}
                    onChange={(e) => setEarningRules({ ...earningRules, referralCoins: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Birthday Bonus
                  </label>
                  <input
                    type="number"
                    value={earningRules.birthdayBonus}
                    onChange={(e) => setEarningRules({ ...earningRules, birthdayBonus: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Bulk Order Bonus */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold text-gray-900">Bulk Order Incentive</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Extra Bonus (% of coins earned)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="0"
                      max="50"
                      value={earningRules.bulkOrderBonus}
                      onChange={(e) => setEarningRules({ ...earningRules, bulkOrderBonus: parseInt(e.target.value) })}
                      className="flex-1"
                    />
                    <span className="font-bold text-orange-600 w-12">+{earningRules.bulkOrderBonus}%</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Bill for Bulk Bonus
                  </label>
                  <input
                    type="number"
                    value={earningRules.minBulkAmount}
                    onChange={(e) => setEarningRules({ ...earningRules, minBulkAmount: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Redemption Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Redemption Settings</h2>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
              <div>
                <p className="font-medium text-gray-900">Enable Branded Coin Redemption</p>
                <p className="text-sm text-gray-600">Allow customers to redeem coins at your store</p>
              </div>
              <input
                type="checkbox"
                checked={redemptionSettings.enabled}
                onChange={(e) => setRedemptionSettings({ ...redemptionSettings, enabled: e.target.checked })}
                className="w-6 h-6"
              />
            </label>

            <div className="p-4 bg-gray-50 rounded-lg">
              <label className="block">
                <p className="font-medium text-gray-900 mb-2">Max Redemption (% of bill)</p>
                <p className="text-sm text-gray-600 mb-3">Maximum percentage of bill that can be paid with branded coins</p>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={redemptionSettings.maxPercentPerBill}
                    onChange={(e) => setRedemptionSettings({ ...redemptionSettings, maxPercentPerBill: parseInt(e.target.value) })}
                    className="flex-1"
                  />
                  <span className="font-bold text-blue-600 text-xl w-16">{redemptionSettings.maxPercentPerBill}%</span>
                </div>
              </label>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <label className="block">
                <p className="font-medium text-gray-900 mb-2">Minimum Purchase for Redemption</p>
                <input
                  type="number"
                  value={redemptionSettings.minPurchaseForRedemption}
                  onChange={(e) => setRedemptionSettings({ ...redemptionSettings, minPurchaseForRedemption: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </label>
            </div>

            <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
              <div>
                <p className="font-medium text-gray-900">Combinable with Other Offers</p>
                <p className="text-sm text-gray-600">Allow coins + discounts/offers stacking</p>
              </div>
              <input
                type="checkbox"
                checked={redemptionSettings.combinableWithOffers}
                onChange={(e) => setRedemptionSettings({ ...redemptionSettings, combinableWithOffers: e.target.checked })}
                className="w-6 h-6"
              />
            </label>

            <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
              <div>
                <p className="font-medium text-gray-900">Allow Gift Card Purchase</p>
                <p className="text-sm text-gray-600">Let users buy gift cards with branded coins</p>
              </div>
              <input
                type="checkbox"
                checked={redemptionSettings.giftCardAllowed}
                onChange={(e) => setRedemptionSettings({ ...redemptionSettings, giftCardAllowed: e.target.checked })}
                className="w-6 h-6"
              />
            </label>
          </div>
        </div>

        {/* Campaign Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Campaign & Promotion Settings</h2>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
              <div>
                <p className="font-medium text-gray-900">Enable Double Coins Days</p>
                <p className="text-sm text-gray-600">Offer double coins on selected days</p>
              </div>
              <input
                type="checkbox"
                checked={campaignSettings.doubleCoinsEnabled}
                onChange={(e) => setCampaignSettings({ ...campaignSettings, doubleCoinsEnabled: e.target.checked })}
                className="w-6 h-6"
              />
            </label>

            {campaignSettings.doubleCoinsEnabled && (
              <div className="p-4 bg-gray-50 rounded-lg ml-6 border-l-4 border-blue-400">
                <p className="font-medium text-gray-900 mb-3">Select Double Coins Days</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <label key={day} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={campaignSettings.doubleCoinsDays.includes(day)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setCampaignSettings({
                              ...campaignSettings,
                              doubleCoinsDays: [...campaignSettings.doubleCoinsDays, day]
                            });
                          } else {
                            setCampaignSettings({
                              ...campaignSettings,
                              doubleCoinsDays: campaignSettings.doubleCoinsDays.filter(d => d !== day)
                            });
                          }
                        }}
                        className="w-5 h-5"
                      />
                      <span className="text-sm text-gray-700">{day}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
              <div>
                <p className="font-medium text-gray-900">Enable Special Event Bonuses</p>
                <p className="text-sm text-gray-600">Anniversary, festivals, seasonal bonuses</p>
              </div>
              <input
                type="checkbox"
                checked={campaignSettings.specialEventsEnabled}
                onChange={(e) => setCampaignSettings({ ...campaignSettings, specialEventsEnabled: e.target.checked })}
                className="w-6 h-6"
              />
            </label>

            {campaignSettings.specialEventsEnabled && (
              <div className="p-4 bg-gray-50 rounded-lg ml-6 border-l-4 border-purple-400 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brand Anniversary Bonus (coins)
                  </label>
                  <input
                    type="number"
                    value={campaignSettings.brandAnniversaryBonus}
                    onChange={(e) => setCampaignSettings({ ...campaignSettings, brandAnniversaryBonus: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Festive Season Multiplier
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="3"
                      step="0.1"
                      value={campaignSettings.festiveSeasonMultiplier}
                      onChange={(e) => setCampaignSettings({ ...campaignSettings, festiveSeasonMultiplier: parseFloat(e.target.value) })}
                      className="flex-1"
                    />
                    <span className="font-bold text-purple-600 w-12">{campaignSettings.festiveSeasonMultiplier}x</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Save Button */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Ready to apply changes?</h3>
              <p className="text-sm text-gray-600 mt-1">This configuration will affect all future branded coin transactions</p>
            </div>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              <Save className="w-5 h-5" />
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
