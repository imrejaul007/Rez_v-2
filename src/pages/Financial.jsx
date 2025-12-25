import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Coins,
  ChevronRight,
  CreditCard,
  Wallet,
  ArrowRight,
  Receipt,
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import BottomNavManager from '../components/layout/BottomNavManager';
import {
  financialCategories,
  financialBillTypes,
  financialOffers,
  financialNudges,
  financialDashboard,
  financialTrust,
  financialGoldSavings,
  financialOTT,
} from '../data/financialData';
import FinancialCategoryTile from '../components/financial/FinancialCategoryTile';
import FinancialBillCard from '../components/financial/FinancialBillCard';
import FinancialDashboardCard from '../components/financial/FinancialDashboardCard';
import FinancialOfferCard from '../components/financial/FinancialOfferCard';
import FinancialNudgeCard from '../components/financial/FinancialNudgeCard';
import FinancialTransactionCard from '../components/financial/FinancialTransactionCard';
import FinancialGoldCard from '../components/financial/FinancialGoldCard';
import FinancialTrustCard from '../components/financial/FinancialTrustCard';
import FinancialOTTCard from '../components/financial/FinancialOTTCard';
import QuickActionBar from '../components/common/QuickActionBar';
import StreakLoyaltySection from '../components/common/StreakLoyaltySection';
import AISuggestions from '../components/common/AISuggestions';
import FooterTrust from '../components/common/FooterTrust';

const Financial = () => {
  const { rezCoins } = useWallet();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('payments');

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-xl font-bold text-rez-navy dark:text-white">Financial Lifestyle</h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Pay. Save. Earn. Repeat.</p>
            </div>
            <Link to="/wallet" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20">
              <Coins className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">{rezCoins}</span>
            </Link>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-600 dark:text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search bills, recharge, insurance..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Quick Action Bar */}
      <QuickActionBar category="financial" />

      {/* Dashboard */}
      <div className="px-4 py-3">
        <FinancialDashboardCard data={financialDashboard.thisMonth} />
      </div>

      {/* Smart Nudges */}
      <div className="px-4 mb-6">
        <FinancialNudgeCard nudges={financialNudges} />
      </div>

      {/* Section Tabs */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {[
            { id: 'payments', label: 'Payments & Bills', icon: <Receipt className="w-4 h-4" /> },
            { id: 'savings', label: 'Savings', icon: <Wallet className="w-4 h-4" /> },
            { id: 'credit', label: 'Credit', icon: <CreditCard className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full shrink-0 text-sm transition-colors ${
                activeSection === tab.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Payments Section */}
      {activeSection === 'payments' && (
        <div className="px-4 mb-6">
          <h2 className="font-semibold text-rez-navy dark:text-white mb-3">Payments & Bills</h2>
          <div className="space-y-2">
            {financialCategories.payments.map((category) => (
              <FinancialCategoryTile key={category.id} category={category} section="payments" />
            ))}
          </div>
        </div>
      )}

      {/* Savings Section */}
      {activeSection === 'savings' && (
        <div className="px-4 mb-6">
          <h2 className="font-semibold text-rez-navy dark:text-white mb-3">Savings & Protection</h2>
          <div className="space-y-2">
            {financialCategories.savings.map((category) => (
              <FinancialCategoryTile key={category.id} category={category} section="savings" />
            ))}
          </div>
        </div>
      )}

      {/* Credit Section */}
      {activeSection === 'credit' && (
        <div className="px-4 mb-6">
          <h2 className="font-semibold text-rez-navy dark:text-white mb-3">Credit & Pay Later</h2>
          <div className="space-y-2">
            {financialCategories.credit.map((category) => (
              <FinancialCategoryTile key={category.id} category={category} section="credit" />
            ))}
          </div>
        </div>
      )}

      {/* Upcoming Bills */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Upcoming Bills</h2>
          <Link to="/financial/bills" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="space-y-2">
          {financialDashboard.upcomingBills.map((bill) => (
            <FinancialBillCard key={bill.id} bill={bill} />
          ))}
        </div>
      </div>

      {/* Offers */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Today's Offers</h2>
          <Link to="/financial/offers" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {financialOffers.map((offer) => (
            <FinancialOfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>

      {/* Gold Savings */}
      <div className="px-4 mb-6">
        <FinancialGoldCard gold={financialGoldSavings} />
      </div>

      {/* OTT Subscriptions */}
      <div className="px-4 mb-6">
        <FinancialOTTCard ottList={financialOTT} />
      </div>

      {/* Recent Transactions */}
      <div className="px-4 mb-6">
        <FinancialTransactionCard transactions={financialDashboard.recentTransactions} />
      </div>

      {/* Trust Section */}
      <div className="px-4 mb-6">
        <FinancialTrustCard trustItems={financialTrust} />
      </div>

      {/* Social Proof */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">📱</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-amber-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">⚡</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">🛡️</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-rez-navy dark:text-white">12,340 bills paid this week</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">₹2.5L saved with ReZ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/financial/bills"
            className="p-4 rounded-xl bg-white dark:bg-[#2C2C2E] flex items-center gap-2"
          >
            <Receipt className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-rez-navy dark:text-white">Pay Bills</span>
          </Link>
          <Link
            to="/financial/history"
            className="p-4 rounded-xl bg-white dark:bg-[#2C2C2E] flex items-center gap-2"
          >
            <Wallet className="w-5 h-5 text-emerald-400" />
            <span className="text-sm text-rez-navy dark:text-white">History</span>
          </Link>
        </div>
        <Link
          to="/wallet"
          className="mt-3 p-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/20 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <Coins className="w-6 h-6 text-amber-400" />
            <div>
              <p className="text-sm text-rez-navy dark:text-white">You have <span className="font-bold text-amber-400">{rezCoins}</span> coins</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Use for bill payments</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-amber-400" />
        </Link>
      </div>

      {/* AI Suggestions */}
      <AISuggestions
        category="financial"
        suggestions={[
          { id: 1, title: 'Due bills', icon: '📋', link: '/financial?filter=due' },
          { id: 2, title: 'Auto-pay', icon: '🔄', link: '/financial?filter=autopay' },
          { id: 3, title: 'High cashback', icon: '🪙', link: '/financial?filter=cashback' },
          { id: 4, title: 'Offers', icon: '🎁', link: '/financial?filter=offers' },
        ]}
        chips={[
          { id: 'mobile', label: 'Mobile', icon: '📱' },
          { id: 'electricity', label: 'Electricity', icon: '⚡' },
          { id: 'gas', label: 'Gas', icon: '🔥' },
          { id: 'insurance', label: 'Insurance', icon: '🛡️' },
          { id: 'invest', label: 'Invest', icon: '📈' },
        ]}
      />

      {/* Streaks & Loyalty */}
      <StreakLoyaltySection
        category="financial"
        streakData={{
          currentStreak: 4,
          targetStreak: 5,
          reward: 200,
          type: 'monthly'
        }}
        brandLoyalty={[
          { name: 'Jio', icon: '📱', visits: 5, targetVisits: 5, reward: 50 },
          { name: 'Tata Power', icon: '⚡', visits: 3, targetVisits: 3, reward: 30 },
        ]}
        weeklyMission={{
          completed: 3,
          target: 5,
          reward: 100,
          description: 'Pay 5 bills this month'
        }}
      />

      {/* Footer Trust */}
      <FooterTrust
        coinsEarnable={150}
        expiringCoins={20}
        expiryDays={10}
      />

      {/* Bottom spacer */}
      <div className="h-8" />

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

export default Financial;
