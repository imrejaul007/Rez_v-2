import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  Coins,
  ChevronRight,
  Zap,
  Play,
  ArrowRight,
  Shield,
  Users,
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import BottomNavManager from '../components/layout/BottomNavManager';
import {
  fitnessCategories,
  fitnessHeroSlides,
  fitnessGyms,
  fitnessStudios,
  fitnessTrainers,
  fitnessProducts,
  fitnessProductTabs,
  fitnessStreak,
  fitnessStreakMilestones,
  fitnessChallenges,
  fitnessUGC,
  fitnessTrust,
} from '../data/fitnessData';
import FitnessCategoryGrid from '../components/fitness/FitnessCategoryGrid';
import FitnessGymCard from '../components/fitness/FitnessGymCard';
import FitnessTrainerCard from '../components/fitness/FitnessTrainerCard';
import FitnessProductCard from '../components/fitness/FitnessProductCard';
import FitnessStreakCard from '../components/fitness/FitnessStreakCard';
import FitnessChallengeCard from '../components/fitness/FitnessChallengeCard';
import FitnessUGCCard from '../components/fitness/FitnessUGCCard';
import Button from '../components/common/Button';
import QuickActionBar from '../components/common/QuickActionBar';
import AISuggestions from '../components/common/AISuggestions';
import UGCSocialProof from '../components/common/UGCSocialProof';
import FooterTrust from '../components/common/FooterTrust';

const Fitness = () => {
  const { rezCoins } = useWallet();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProductTab, setActiveProductTab] = useState('equipment');
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredProducts = fitnessProducts.filter(
    (p) => p.category === activeProductTab
  );

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-xl font-bold text-rez-navy dark:text-white">Fitness & Sports</h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Train smarter. Earn rewards every time.</p>
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
              placeholder="Search gyms, trainers, products..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Hero Carousel */}
      <div className="px-4 py-3">
        <div
          className="p-4 rounded-2xl border"
          style={{
            backgroundColor: `${fitnessHeroSlides[currentSlide].color}20`,
            borderColor: `${fitnessHeroSlides[currentSlide].color}30`,
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{fitnessHeroSlides[currentSlide].icon}</span>
            <p className="text-lg font-semibold text-rez-navy dark:text-white">
              {fitnessHeroSlides[currentSlide].text}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="primary" size="sm">
              Book Now
            </Button>
            <Button variant="secondary" size="sm">
              Explore Nearby
            </Button>
            <Button variant="secondary" size="sm">
              Free Trial
            </Button>
          </div>
          <div className="flex justify-center gap-1.5 mt-3">
            {fitnessHeroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Action Bar */}
      <QuickActionBar category="fitness" />

      {/* Categories */}
      <div className="mb-6">
        <div className="px-4 mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Quick Actions</h2>
        </div>
        <FitnessCategoryGrid categories={fitnessCategories} />
      </div>

      {/* Gyms Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-semibold text-rez-navy dark:text-white">Book & Earn</h2>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Gyms, Studios, Trainers & Classes</p>
          </div>
          <Link to="/fitness/gyms" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="space-y-4">
          {fitnessGyms.slice(0, 2).map((gym) => (
            <FitnessGymCard key={gym.id} gym={gym} />
          ))}
        </div>
      </div>

      {/* Studios Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Studios & Classes</h2>
          <Link to="/fitness/studios" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {fitnessStudios.map((studio) => (
            <FitnessGymCard key={studio.id} gym={studio} variant="compact" />
          ))}
        </div>
      </div>

      {/* Trainers Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Personal Trainers</h2>
          <Link to="/fitness/trainers" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {fitnessTrainers.map((trainer) => (
            <FitnessTrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-semibold text-rez-navy dark:text-white">Fitness Store</h2>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Equipment & Supplements</p>
          </div>
          <Link to="/fitness/store" className="text-sm text-emerald-400">See All</Link>
        </div>

        {/* Product Tabs */}
        <div className="flex gap-2 mb-3 overflow-x-auto hide-scrollbar">
          {fitnessProductTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveProductTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 text-sm transition-colors ${
                activeProductTab === tab.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {(filteredProducts.length > 0 ? filteredProducts : fitnessProducts).map((product) => (
            <FitnessProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Streak Section */}
      <div className="px-4 mb-6">
        <FitnessStreakCard streak={fitnessStreak} milestones={fitnessStreakMilestones} />
      </div>

      {/* Challenges Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🏆</span>
            <h2 className="font-semibold text-rez-navy dark:text-white">Challenges & Community</h2>
          </div>
          <Link to="/fitness/challenges" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {fitnessChallenges.map((challenge) => (
            <FitnessChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>

      {/* UGC Feed */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">📸</span>
            <h2 className="font-semibold text-rez-navy dark:text-white">Community Feed</h2>
          </div>
          <Link to="/fitness/feed" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {fitnessUGC.map((item) => (
            <FitnessUGCCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Trust Section */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-emerald-400" />
            <h3 className="font-semibold text-rez-navy dark:text-white">Why Choose ReZ Fitness?</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {fitnessTrust.map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-rez-gray-50 dark:bg-white/5">
                <span>{item.icon}</span>
                <span className="text-xs text-rez-gray-700 dark:text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-red-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">💪</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">🏋️</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">🧘</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-rez-navy dark:text-white">3,450 fitness sessions booked this week</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">₹45,000 saved with ReZ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-4 mb-6">
        <Link
          to="/wallet"
          className="p-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/20 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <Coins className="w-6 h-6 text-amber-400" />
            <div>
              <p className="text-sm text-rez-navy dark:text-white">Fitness Wallet: <span className="font-bold text-amber-400">{rezCoins}</span> coins</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Use at gyms & fitness stores</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-amber-400" />
        </Link>
      </div>

      {/* AI Suggestions */}
      <AISuggestions
        category="fitness"
        suggestions={[
          { id: 1, title: 'Near you', icon: '📍', link: '/fitness?filter=nearby' },
          { id: 2, title: 'Free trials', icon: '🎁', link: '/fitness?filter=trial' },
          { id: 3, title: 'High cashback', icon: '🪙', link: '/fitness?filter=cashback' },
          { id: 4, title: 'Top rated', icon: '⭐', link: '/fitness?filter=toprated' },
        ]}
        chips={[
          { id: 'gym', label: 'Gyms', icon: '🏋️' },
          { id: 'yoga', label: 'Yoga', icon: '🧘' },
          { id: 'swim', label: 'Swimming', icon: '🏊' },
          { id: 'martial', label: 'Martial Arts', icon: '🥋' },
          { id: 'trainer', label: 'Trainers', icon: '💪' },
        ]}
      />

      {/* UGC Social Proof */}
      <UGCSocialProof category="fitness" />

      {/* Footer Trust */}
      <FooterTrust
        coinsEarnable={400}
        expiringCoins={50}
        expiryDays={7}
      />

      {/* Bottom spacer */}
      <div className="h-8" />

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

export default Fitness;
