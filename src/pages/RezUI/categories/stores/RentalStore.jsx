import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  ChevronRight,
  Coins,
  Calendar,
  Shield,
  MapPin,
  Gift,
  Clock,
  Check,
} from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';
import { rentalStore, socialProof } from '../../data/specializedStoresData';
import Button from '../../components/common/Button';
import QuickActionBar from '../../components/common/QuickActionBar';
import AISuggestions from '../../components/common/AISuggestions';
import UGCSocialProof from '../../components/common/UGCSocialProof';
import FooterTrust from '../../components/common/FooterTrust';

const RentalStore = () => {
  const { rezCoins } = useWallet();
  const [activeFilters, setActiveFilters] = useState([]);
  const [proofIndex, setProofIndex] = useState(0);

  const theme = rentalStore.theme;

  const filters = [
    { id: 'clothes', label: 'Clothes', icon: '👔' },
    { id: 'electronics', label: 'Electronics', icon: '📱' },
    { id: 'furniture', label: 'Furniture', icon: '🛋️' },
    { id: 'vehicles', label: 'Vehicles', icon: '🚗' },
    { id: 'daily', label: 'Daily Rental', icon: '📅' },
  ];

  const proofs = [
    { avatar: '👨', user: 'Arun K.', action: 'rented', product: 'MacBook Pro', coins: 450 },
    { avatar: '👩', user: 'Priya S.', action: 'booked', product: 'Designer Sherwani', coins: 200 },
    { avatar: '👨‍💼', user: 'Vikram M.', action: 'rented', product: 'Sofa Set', coins: 300 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProofIndex((prev) => (prev + 1) % proofs.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleFilter = (filterId) => {
    if (activeFilters.includes(filterId)) {
      setActiveFilters(activeFilters.filter((f) => f !== filterId));
    } else {
      setActiveFilters([...activeFilters, filterId]);
    }
  };

  const proof = proofs[proofIndex];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </Link>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-rez-navy dark:text-white">Rental Store</h1>
              <p className="text-xs" style={{ color: theme.primary }}>{rentalStore.tagline}</p>
            </div>
            <button className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
              <Search className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ backgroundColor: `${theme.primary}30` }}>
              <Coins className="w-4 h-4" style={{ color: theme.primary }} />
              <span className="text-sm font-medium" style={{ color: theme.primary }}>{rezCoins}</span>
            </div>
          </div>

          {/* Smart Context Strip */}
          <div className="mt-3 px-3 py-2 rounded-full border" style={{ backgroundColor: `${theme.primary}10`, borderColor: `${theme.primary}30` }}>
            <p className="text-xs text-center" style={{ color: theme.primary }}>
              🔄 {socialProof.rental.recentBookings} rentals this week • ₹{socialProof.rental.totalSaved.toLocaleString()} saved by renting
            </p>
          </div>
        </div>

        {/* Filter Strip */}
        <div className="px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 text-sm transition-colors ${
                  activeFilters.includes(filter.id)
                    ? 'text-white'
                    : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
                }`}
                style={activeFilters.includes(filter.id) ? { backgroundColor: theme.primary } : {}}
              >
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Action Bar */}
      <QuickActionBar category="rental" />

      {/* Social Proof */}
      <div className="px-4 py-2">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-rez-gray-50 dark:bg-white/5 animate-fade-in">
          <span className="text-lg">{proof.avatar}</span>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 flex-1">
            <span className="font-medium text-rez-navy dark:text-white">{proof.user}</span>{' '}
            {proof.action}{' '}
            <span style={{ color: theme.primary }}>{proof.product}</span>
          </p>
          <span className="text-xs" style={{ color: theme.primary }}>+{proof.coins} coins</span>
        </div>
      </div>

      {/* Categories */}
      <div className="mt-4 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Rent by Category</h2>
          <button className="text-xs flex items-center gap-1" style={{ color: theme.primary }}>
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {rentalStore.categories.map((category) => (
            <Link
              key={category.id}
              to={`/store/rental/${category.id}`}
              className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] active:scale-[0.98] transition-transform"
            >
              <span className="text-3xl block mb-2">{category.icon}</span>
              <h3 className="font-medium text-rez-navy dark:text-white">{category.name}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">{category.items} items</p>
              <div className="flex items-center gap-1 mt-2">
                <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                <span className="text-xs" style={{ color: theme.primary }}>{category.cashback}% back</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Why Rent on ReZ */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-3">Why Rent on ReZ?</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">💰</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Save Money</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Use, don't own</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">🪙</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Earn Cashback</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Up to 20% back</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">🛡️</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Protected</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Damage coverage</p>
          </div>
          <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5">
            <span className="text-xl">⚡</span>
            <h4 className="text-sm font-medium text-rez-navy dark:text-white mt-1">Fast Delivery</h4>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">Same-day available</p>
          </div>
        </div>
      </div>

      {/* Popular Rentals */}
      <div className="mt-6 px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-rez-navy dark:text-white">Popular Rentals</h2>
          <button className="text-xs flex items-center gap-1" style={{ color: theme.primary }}>
            View All <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <div className="space-y-3">
          {rentalStore.rentals.map((rental) => (
            <Link
              key={rental.id}
              to={`/store/rental/item/${rental.id}`}
              className="block p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] active:scale-[0.99] transition-transform"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-rez-navy dark:text-white">{rental.name}</h3>
                <div className="flex items-center gap-1">
                  <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                  <span className="text-sm" style={{ color: theme.primary }}>{rental.cashback}%</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-rez-gray-600 dark:text-gray-400">
                {rental.dailyRate && <span>₹{rental.dailyRate}/day</span>}
                {rental.weeklyRate && <span>₹{rental.weeklyRate}/week</span>}
                {rental.monthlyRate && <span>₹{rental.monthlyRate}/month</span>}
              </div>
              <div className="flex items-center gap-1 mt-2 text-xs text-rez-gray-600 dark:text-gray-500">
                <Shield className="w-3 h-3" />
                <span>Deposit: ₹{rental.deposit.toLocaleString()}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bonus Coins */}
      <div className="mt-6 px-4">
        <div className="p-4 rounded-2xl" style={{ backgroundColor: `${theme.primary}15` }}>
          <div className="flex items-center gap-2 mb-3">
            <Coins className="w-5 h-5" style={{ color: theme.primary }} />
            <h3 className="font-semibold text-rez-navy dark:text-white">Earn Bonus Coins</h3>
          </div>
          <div className="space-y-2">
            {rentalStore.bonuses.map((bonus) => (
              <div key={bonus.id} className="flex items-center justify-between p-3 rounded-xl bg-rez-gray-100 dark:bg-white/10">
                <div>
                  <span className="text-sm text-rez-navy dark:text-white">{bonus.action}</span>
                  <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">{bonus.description}</p>
                </div>
                <span className="font-medium" style={{ color: theme.primary }}>+{bonus.bonus}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add-ons */}
      <div className="mt-6 px-4">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-5 h-5" style={{ color: theme.primary }} />
          <h2 className="font-semibold text-rez-navy dark:text-white">Add-ons</h2>
        </div>
        <div className="space-y-2">
          {rentalStore.addons.map((addon) => (
            <div key={addon.id} className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#2C2C2E]">
              <div>
                <p className="text-sm text-rez-navy dark:text-white">{addon.name}</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">{addon.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-rez-navy dark:text-white">₹{addon.price}</span>
                <button className="p-1 rounded-full" style={{ backgroundColor: `${theme.primary}30` }}>
                  <Check className="w-4 h-4" style={{ color: theme.primary }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book Rental CTA */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E]">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-5 h-5" style={{ color: theme.primary }} />
          <h3 className="font-semibold text-rez-navy dark:text-white">Book a Rental</h3>
        </div>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-4">Select dates and duration for your rental</p>
        <button className="w-full py-2.5 rounded-xl text-sm font-medium text-rez-navy dark:text-white" style={{ backgroundColor: theme.primary }}>
          Check Availability
        </button>
      </div>

      {/* Nearby Rental Stores */}
      <div className="mt-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            <h2 className="font-semibold text-rez-navy dark:text-white">Rental Partners Nearby</h2>
          </div>
        </div>
        <div className="px-4 space-y-3">
          {['Rentomojo', 'Furlenco', 'RentSher'].map((store, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] flex items-center justify-between">
              <div>
                <h3 className="font-medium text-rez-navy dark:text-white">{store}</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">{2 + idx} km away</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ backgroundColor: `${theme.primary}20` }}>
                <Coins className="w-3 h-3" style={{ color: theme.primary }} />
                <span className="text-xs" style={{ color: theme.primary }}>{10 + idx * 3}% back</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loyalty Progress */}
      <div className="mx-4 mt-6 p-4 rounded-2xl border" style={{ backgroundColor: `${theme.primary}10`, borderColor: `${theme.primary}30` }}>
        <div className="flex items-center gap-3 mb-3">
          <Gift className="w-6 h-6" style={{ color: theme.primary }} />
          <div>
            <h3 className="font-semibold text-rez-navy dark:text-white">Smart Renter Progress</h3>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">2 more rentals to unlock bonus</p>
          </div>
        </div>
        <div className="h-2 bg-rez-gray-100 dark:bg-white/10 rounded-full overflow-hidden mb-2">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: '60%', backgroundColor: theme.primary }}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-rez-gray-600 dark:text-gray-400">3/5 rentals</span>
          <span className="text-xs" style={{ color: theme.primary }}>🎁 +200 Bonus Coins</span>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-white dark:bg-[#2C2C2E] text-center">
        <h3 className="font-semibold text-rez-navy dark:text-white mb-2">Use More. Own Less.</h3>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">Smart savings through rentals. With ReZ rewards.</p>
      </div>

      {/* AI Suggestions */}
      <AISuggestions category="rental" />

      {/* UGC & Social Proof */}
      <UGCSocialProof category="rental" />

      {/* Footer Trust */}
      <FooterTrust />

      {/* Sticky CTA */}
      <div className="fixed bottom-20 left-0 right-0 px-4 z-50">
        <div className="p-3 rounded-2xl shadow-xl flex items-center justify-between" style={{ backgroundColor: theme.primary }}>
          <div>
            <p className="text-sm font-medium text-rez-navy dark:text-white">🔄 Save ₹10,000+ by renting</p>
            <p className="text-xs text-white/70">Smart choice, smart savings</p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="bg-white/20 text-rez-navy dark:text-white border-0">Browse</Button>
            <Button variant="primary" size="sm" className="bg-white text-sky-600">
              Rent Now
            </Button>
          </div>
        </div>
      </div>

      <div className="h-20" />
    </div>
  );
};

export default RentalStore;
