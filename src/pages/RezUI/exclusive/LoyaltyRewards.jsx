import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Gift, TrendingUp, Star, ChevronRight } from 'lucide-react';
import { loyaltyDealsExtended } from '../../data/exclusiveDeals';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';

const LoyaltyRewards = () => {
  const totalProgress = loyaltyDealsExtended.reduce((acc, deal) => acc + deal.progress, 0) / loyaltyDealsExtended.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900/20 to-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="flex items-center gap-4 px-4 py-4">
          <Link to="/deal-store" className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </Link>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-rez-navy dark:text-white">Loyalty Rewards</h1>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">Complete challenges, earn rewards</p>
          </div>
          <div className="text-4xl">🎯</div>
        </div>
      </div>

      {/* Overall Progress */}
      <div className="mx-4 mt-4 p-6 rounded-3xl bg-gradient-to-r from-emerald-500/30 to-teal-500/30 border border-emerald-500/20">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/30 flex items-center justify-center">
            <Target className="w-8 h-8 text-emerald-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-rez-navy dark:text-white">Your Progress</h2>
            <p className="text-sm text-rez-gray-700 dark:text-gray-300">{loyaltyDealsExtended.length} active rewards in progress</p>
          </div>
        </div>

        {/* Overall progress bar */}
        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-rez-gray-600 dark:text-gray-400">Overall completion</span>
            <span className="text-emerald-400 font-medium">{Math.round(totalProgress)}%</span>
          </div>
          <div className="h-3 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all"
              style={{ width: `${totalProgress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-center">
            <p className="text-xl font-bold text-emerald-400">{loyaltyDealsExtended.length}</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Active</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-center">
            <p className="text-xl font-bold text-amber-400">3</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Almost Done</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-center">
            <p className="text-xl font-bold text-purple-400">12</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Completed</p>
          </div>
        </div>
      </div>

      {/* Almost There Section */}
      <div className="mt-6">
        <div className="px-4 mb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-semibold text-rez-navy dark:text-white">Almost There!</h3>
          </div>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">Complete these to unlock rewards</p>
        </div>

        <div className="px-4 space-y-4">
          {loyaltyDealsExtended.map((deal) => (
            <Card key={deal.id} className="p-4" hover>
              <div className="flex items-start gap-4">
                <img
                  src={deal.storeLogo}
                  alt={deal.store}
                  className="w-14 h-14 rounded-xl object-contain bg-white shrink-0"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium text-rez-navy dark:text-white">{deal.store}</p>
                      <p className="text-sm text-emerald-400">{deal.reward}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">Worth</p>
                      <p className="font-semibold text-amber-400">{deal.rewardValue}</p>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-rez-gray-600 dark:text-gray-400">
                        {deal.currentVisits !== undefined
                          ? `${deal.currentVisits}/${deal.requiredVisits} visits`
                          : `₹${deal.currentSpend}/₹${deal.requiredSpend} spent`
                        }
                      </span>
                      <span className="text-emerald-400 font-medium">{deal.progress}%</span>
                    </div>
                    <div className="h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all"
                        style={{ width: `${deal.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Next milestone */}
                  <div className="flex items-center justify-between">
                    <Badge variant="default" size="xs">
                      <Target className="w-3 h-3" />
                      {deal.nextMilestone}
                    </Badge>
                    <ChevronRight className="w-4 h-4 text-rez-gray-600 dark:text-gray-500" />
                  </div>
                </div>
              </div>

              {/* History (expandable) */}
              {deal.history && deal.history.length > 0 && (
                <div className="mt-3 pt-3 border-t border-rez-gray-200 dark:border-white/5">
                  <p className="text-xs text-rez-gray-600 dark:text-gray-500 mb-2">Recent activity</p>
                  <div className="flex gap-2 overflow-x-auto hide-scrollbar">
                    {deal.history.slice(-4).map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded bg-rez-gray-50 dark:bg-white/5 text-xs text-rez-gray-600 dark:text-gray-400 shrink-0"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Completed Rewards */}
      <div className="mt-6">
        <div className="px-4 mb-3">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-rez-navy dark:text-white">Completed Rewards</h3>
          </div>
        </div>

        <div className="flex gap-3 px-4 overflow-x-auto hide-scrollbar pb-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="min-w-[160px] p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 shrink-0"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🎁</span>
                <Badge variant="success" size="xs">Claimed</Badge>
              </div>
              <p className="text-sm font-medium text-rez-navy dark:text-white">Free Coffee</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Starbucks • Dec 15</p>
            </div>
          ))}
        </div>
      </div>

      {/* How it Works */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-3">How Loyalty Rewards Work</h3>
        <ol className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-emerald-400">1</span>
            </span>
            <span className="text-sm text-rez-gray-700 dark:text-gray-300">Visit or spend at participating stores</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-emerald-400">2</span>
            </span>
            <span className="text-sm text-rez-gray-700 dark:text-gray-300">Pay with ReZ Wallet for automatic tracking</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-emerald-400">3</span>
            </span>
            <span className="text-sm text-rez-gray-700 dark:text-gray-300">Complete milestones and claim rewards!</span>
          </li>
        </ol>
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-20 left-0 right-0 p-4 glass">
        <Button variant="primary" fullWidth>
          <Gift className="w-5 h-5 mr-2" />
          Find More Loyalty Programs
        </Button>
      </div>
    </div>
  );
};

export default LoyaltyRewards;
