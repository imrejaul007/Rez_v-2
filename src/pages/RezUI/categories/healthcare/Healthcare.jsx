import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  Coins,
  Heart,
  AlertCircle,
  ChevronRight,
  Shield,
  ArrowRight,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import BottomNavManager from '../components/layout/BottomNavManager';
import {
  healthcareCategories,
  healthcareHighlights,
  doctors,
  dentalTreatments,
  diagnosticTests,
  pharmacies,
  healthcareOffers,
  healthSavings,
  healthcareTrust,
  billUploadTypes,
  specializations,
} from '../data/healthcareData';
import HealthcareCategoryGrid from '../components/healthcare/HealthcareCategoryGrid';
import DoctorCard from '../components/healthcare/DoctorCard';
import DiagnosticCard from '../components/healthcare/DiagnosticCard';
import DentalCard from '../components/healthcare/DentalCard';
import PharmacyCard from '../components/healthcare/PharmacyCard';
import HealthSavingsCard from '../components/healthcare/HealthSavingsCard';
import BillUploadCard from '../components/healthcare/BillUploadCard';
import Button from '../components/common/Button';
import QuickActionBar from '../components/common/QuickActionBar';
import StreakLoyaltySection from '../components/common/StreakLoyaltySection';
import AISuggestions from '../components/common/AISuggestions';
import UGCSocialProof from '../components/common/UGCSocialProof';
import FooterTrust from '../components/common/FooterTrust';

const Healthcare = () => {
  const { rezCoins } = useWallet();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpec, setSelectedSpec] = useState(null);

  const handleEmergencyCall = () => {
    window.location.href = 'tel:108'; // Emergency number
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-sm text-rez-navy dark:text-white font-medium">Your Location</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">123 Main Street, City</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleEmergencyCall}
                className="p-2 rounded-full bg-red-500/20"
                title="Emergency Call 108"
              >
                <Phone className="w-5 h-5 text-red-400" />
              </button>
              <Link to="/wallet" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20">
                <Coins className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-400">{rezCoins}</span>
              </Link>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-600 dark:text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search doctors, clinics, tests, pharmacy..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Promise Banner */}
      <div className="px-4 py-3">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-emerald-500/20 border border-blue-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-5 h-5 text-red-400" />
            <p className="text-sm font-medium text-rez-navy dark:text-white">
              Take care of health. ReZ takes care of savings.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {healthcareHighlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span className="text-xs text-rez-gray-700 dark:text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Action Bar */}
      <QuickActionBar category="healthcare" />

      {/* Categories */}
      <div className="mb-6">
        <HealthcareCategoryGrid categories={healthcareCategories} />
      </div>

      {/* Specialization Filter */}
      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {specializations.slice(0, 6).map((spec) => (
            <button
              key={spec.id}
              onClick={() => setSelectedSpec(selectedSpec === spec.id ? null : spec.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 text-sm transition-colors ${
                selectedSpec === spec.id
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              <span>{spec.icon}</span>
              <span>{spec.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Doctors Section */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Top Doctors Near You</h2>
          <Link to="/healthcare/doctors" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="space-y-4">
          {doctors.slice(0, 2).map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>

      {/* Dental & Cosmetic */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-semibold text-rez-navy dark:text-white">Dental & Cosmetic</h2>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">High-value treatments, smarter savings</p>
          </div>
          <Link to="/healthcare/dental" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {dentalTreatments.map((treatment) => (
            <DentalCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </div>

      {/* Diagnostics */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="font-semibold text-rez-navy dark:text-white">Lab Tests & Diagnostics</h2>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Home collection available</p>
          </div>
          <Link to="/healthcare/diagnostics" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="space-y-4">
          {diagnosticTests.slice(0, 2).map((test) => (
            <DiagnosticCard key={test.id} test={test} />
          ))}
        </div>
      </div>

      {/* Pharmacy */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Pharmacy & Medicines</h2>
          <Link to="/healthcare/pharmacy" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {pharmacies.map((pharmacy) => (
            <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
          ))}
        </div>
      </div>

      {/* Offers */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Healthcare Offers</h2>
          <Link to="/healthcare/offers" className="text-sm text-emerald-400">See All</Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {healthcareOffers.slice(0, 4).map((offer) => (
            <div
              key={offer.id}
              className="p-3 rounded-xl"
              style={{ backgroundColor: `${offer.color}15` }}
            >
              {offer.tag && (
                <span
                  className="px-2 py-0.5 rounded-full text-[10px] text-rez-navy dark:text-white mb-2 inline-block"
                  style={{ backgroundColor: offer.color }}
                >
                  {offer.tag}
                </span>
              )}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{offer.icon}</span>
                <span
                  className="text-lg font-bold"
                  style={{ color: offer.color }}
                >
                  {offer.discount}
                </span>
              </div>
              <p className="text-xs text-rez-navy dark:text-white font-medium">{offer.title}</p>
              <p className="text-[10px] text-rez-gray-600 dark:text-gray-400 mt-0.5">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Health Savings */}
      <div className="px-4 mb-6">
        <HealthSavingsCard savings={healthSavings} />
      </div>

      {/* Bill Upload */}
      <div className="px-4 mb-6">
        <BillUploadCard types={billUploadTypes} />
      </div>

      {/* Trust Section */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-emerald-400" />
            <h3 className="font-semibold text-rez-navy dark:text-white">Trust & Safety</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {healthcareTrust.map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-rez-gray-50 dark:bg-white/5">
                <span>{item.icon}</span>
                <span className="text-xs text-rez-gray-700 dark:text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/healthcare/emergency"
            className="p-4 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center gap-2"
          >
            <AlertCircle className="w-5 h-5 text-red-400" />
            <span className="text-sm text-rez-navy dark:text-white">Emergency</span>
          </Link>
          <Link
            to="/healthcare/support"
            className="p-4 rounded-xl bg-white dark:bg-[#2C2C2E] flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-rez-navy dark:text-white">Support</span>
          </Link>
        </div>
        <Link
          to="/wallet"
          className="mt-3 p-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/20 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <Coins className="w-6 h-6 text-amber-400" />
            <div>
              <p className="text-sm text-rez-navy dark:text-white">Health Wallet: <span className="font-bold text-amber-400">{rezCoins}</span> coins</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Use at clinics & pharmacies</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-amber-400" />
        </Link>
      </div>

      {/* Social Proof */}
      <div className="px-4 mb-6">
        <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">👨</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-pink-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">👩</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-500/30 border-2 border-[#2C2C2E] flex items-center justify-center">
                <span className="text-xs">👨</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-rez-navy dark:text-white">856 healthcare visits today</p>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">₹12,400 saved with ReZ</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Suggestions */}
      <AISuggestions
        category="healthcare"
        suggestions={[
          { id: 1, title: 'Find doctors', icon: '👨‍⚕️', link: '/healthcare?filter=doctors' },
          { id: 2, title: 'Lab tests', icon: '🔬', link: '/healthcare?filter=tests' },
          { id: 3, title: 'Near you', icon: '📍', link: '/healthcare?filter=nearby' },
          { id: 4, title: 'Top rated', icon: '⭐', link: '/healthcare?filter=toprated' },
        ]}
        chips={[
          { id: 'doctors', label: 'Doctors', icon: '👨‍⚕️' },
          { id: 'labs', label: 'Labs', icon: '🔬' },
          { id: 'pharmacy', label: 'Pharmacy', icon: '💊' },
          { id: 'dental', label: 'Dental', icon: '🦷' },
          { id: 'urgent', label: 'Urgent', icon: '🚨' },
        ]}
      />

      {/* UGC Social Proof */}
      <UGCSocialProof category="healthcare" />

      {/* Streaks & Loyalty */}
      <StreakLoyaltySection
        category="healthcare"
        streakData={{
          currentStreak: 2,
          targetStreak: 5,
          reward: 150,
          type: 'weekly'
        }}
        brandLoyalty={[
          { name: 'Apollo', icon: '🏥', visits: 2, targetVisits: 3, reward: 200 },
          { name: 'Thyrocare', icon: '🔬', visits: 1, targetVisits: 2, reward: 100 },
          { name: 'MedPlus', icon: '💊', visits: 5, targetVisits: 5, reward: 75 },
        ]}
        weeklyMission={{
          completed: 1,
          target: 3,
          reward: 200,
          description: 'Complete 3 health checkups'
        }}
      />

      {/* Footer Trust */}
      <FooterTrust
        coinsEarnable={350}
        expiringCoins={0}
        expiryDays={0}
      />

      {/* Bottom spacer */}
      <div className="h-8" />

      {/* Bottom Navigation */}
      <BottomNavManager />
    </div>
  );
};

export default Healthcare;
