import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, CheckCircle, AlertCircle, BookOpen, Coffee, Music, Dumbbell } from 'lucide-react';
import { studentDealsExtended } from '../../data/exclusiveDeals';
import DealCard from '../../components/deals/DealCard';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';

const StudentZone = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { id: 'All', icon: '🎓', label: 'All' },
    { id: 'Food & Dining', icon: '🍕', label: 'Food' },
    { id: 'Entertainment', icon: '🎬', label: 'Entertainment' },
    { id: 'Shopping', icon: '🛍️', label: 'Shopping' },
    { id: 'Wellness', icon: '🧘', label: 'Wellness' },
    { id: 'Sports', icon: '⚽', label: 'Sports' },
  ];

  const filteredDeals = selectedCategory === 'All'
    ? studentDealsExtended
    : studentDealsExtended.filter(d => d.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/20 to-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="flex items-center gap-4 px-4 py-4">
          <Link to="/deal-store" className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </Link>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-rez-navy dark:text-white">Student Zone</h1>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">Campus deals & student discounts</p>
          </div>
          <div className="text-4xl">🎓</div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="mx-4 mt-4 p-6 rounded-3xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-500/20">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/30 flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-blue-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-rez-navy dark:text-white">Exclusive Student Discounts</h2>
            <p className="text-sm text-rez-gray-700 dark:text-gray-300">Verified students get access to special deals</p>
          </div>
        </div>

        {/* Verification Status */}
        <div className="mt-4 p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 flex items-center justify-between">
          {isVerified ? (
            <>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">Student Verified</span>
              </div>
              <Badge variant="success">Active</Badge>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400">Verify to unlock all deals</span>
              </div>
              <Button
                variant="amber"
                size="sm"
                onClick={() => setIsVerified(true)}
              >
                Verify Now
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3 px-4 mt-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] text-center">
          <p className="text-2xl font-bold text-blue-400">{studentDealsExtended.length}+</p>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">Active Deals</p>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] text-center">
          <p className="text-2xl font-bold text-purple-400">50%</p>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">Max Discount</p>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] text-center">
          <p className="text-2xl font-bold text-green-400">₹5000+</p>
          <p className="text-xs text-rez-gray-600 dark:text-gray-400">Avg. Savings</p>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="mt-6">
        <div className="px-4 mb-3">
          <h3 className="text-lg font-semibold text-rez-navy dark:text-white">Browse by Category</h3>
        </div>
        <div className="flex gap-2 px-4 overflow-x-auto hide-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full shrink-0 transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/10 text-gray-300'
              }`}
            >
              <span>{cat.icon}</span>
              <span className="text-sm font-medium">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Deals List */}
      <div className="mt-4 px-4 space-y-3">
        {filteredDeals.map((deal) => (
          <Card key={deal.id} className="p-4" hover>
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                {deal.image ? (
                  <img src={deal.image} alt={deal.store} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-blue-500/20 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-blue-400" />
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-rez-gray-600 dark:text-gray-400">{deal.store}</p>
                    <p className="font-medium text-rez-navy dark:text-white">{deal.title}</p>
                  </div>
                  <div className="px-2 py-1 rounded-lg bg-blue-500/20">
                    <span className="text-sm font-bold text-blue-400">{deal.discount}</span>
                  </div>
                </div>

                <p className="text-sm text-rez-gray-600 dark:text-gray-400 mt-1">{deal.description}</p>

                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="default" size="xs">🎓 Students Only</Badge>
                  <Badge variant="default" size="xs">{deal.category}</Badge>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* How to Verify */}
      {!isVerified && (
        <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
          <h3 className="font-semibold text-rez-navy dark:text-white mb-3">How to Verify</h3>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-blue-400">1</span>
              </span>
              <span className="text-sm text-rez-gray-700 dark:text-gray-300">Enter your college email (.edu)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-blue-400">2</span>
              </span>
              <span className="text-sm text-rez-gray-700 dark:text-gray-300">Upload student ID (optional)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <span className="text-xs font-bold text-blue-400">3</span>
              </span>
              <span className="text-sm text-rez-gray-700 dark:text-gray-300">Get verified in 24 hours</span>
            </li>
          </ol>
        </div>
      )}

      {/* Fixed CTA */}
      <div className="fixed bottom-20 left-0 right-0 p-4 glass">
        <Button variant="primary" fullWidth>
          {isVerified ? 'Browse All Student Deals' : 'Verify Student Status'}
        </Button>
      </div>
    </div>
  );
};

export default StudentZone;
