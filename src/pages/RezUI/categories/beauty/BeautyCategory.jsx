import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Coins,
  X,
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import {
  beautyServiceCategories,
  beautyProductCategories,
  beautyModes,
  beautyServices,
  beautyProducts,
} from '../data/beautyData';
import BeautyServiceCard from '../components/beauty/BeautyServiceCard';
import BeautyProductCard from '../components/beauty/BeautyProductCard';
import Button from '../components/common/Button';

const sortOptions = [
  { id: 'popular', label: 'Popular' },
  { id: 'priceLow', label: 'Price: Low to High' },
  { id: 'priceHigh', label: 'Price: High to Low' },
  { id: 'cashback', label: 'Highest Cashback' },
  { id: 'rating', label: 'Top Rated' },
  { id: 'distance', label: 'Nearest First' },
];

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under500', label: 'Under ₹500', min: 0, max: 500 },
  { id: '500-1000', label: '₹500 - ₹1,000', min: 500, max: 1000 },
  { id: '1000-2000', label: '₹1,000 - ₹2,000', min: 1000, max: 2000 },
  { id: '2000-5000', label: '₹2,000 - ₹5,000', min: 2000, max: 5000 },
  { id: 'above5000', label: 'Above ₹5,000', min: 5000, max: Infinity },
];

const BeautyCategory = () => {
  const { type, category } = useParams();
  const { rezCoins } = useWallet();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModes, setActiveModes] = useState([]);
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);

  // Determine if showing services or products
  const isServices = type === 'services';

  // Get category info
  const categories = isServices ? beautyServiceCategories : beautyProductCategories;
  const categoryInfo = categories.find((c) => c.id === category);

  // Get items
  let items = isServices
    ? beautyServices.filter((s) => s.category === category)
    : beautyProducts.filter((p) => p.category === category);

  // Apply search
  if (searchQuery) {
    items = items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.brand?.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.provider?.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  // Apply mode filters
  if (activeModes.length > 0) {
    items = items.filter((item) =>
      item.modes?.some((mode) => activeModes.includes(mode))
    );
  }

  // Apply price range
  const selectedRange = priceRanges.find((r) => r.id === priceRange);
  if (selectedRange) {
    items = items.filter(
      (item) => item.price >= selectedRange.min && item.price <= selectedRange.max
    );
  }

  // Apply sort
  switch (sortBy) {
    case 'priceLow':
      items.sort((a, b) => a.price - b.price);
      break;
    case 'priceHigh':
      items.sort((a, b) => b.price - a.price);
      break;
    case 'cashback':
      items.sort((a, b) => b.cashbackPercent - a.cashbackPercent);
      break;
    case 'rating':
      items.sort((a, b) => b.rating - a.rating);
      break;
    case 'distance':
      if (isServices) {
        items.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
      }
      break;
    default:
      items.sort((a, b) => b.reviews - a.reviews);
  }

  const toggleMode = (modeId) => {
    if (activeModes.includes(modeId)) {
      setActiveModes(activeModes.filter((m) => m !== modeId));
    } else {
      setActiveModes([...activeModes, modeId]);
    }
  };

  if (!categoryInfo) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-rez-gray-600 dark:text-gray-400 mb-4">Category not found</p>
          <Link to="/beauty" className="text-emerald-400">
            ← Back to Beauty & Wellness
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <Link to="/beauty" className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </Link>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{categoryInfo.icon}</span>
                <h1 className="text-xl font-bold text-rez-navy dark:text-white">{categoryInfo.name}</h1>
              </div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                {items.length} {isServices ? 'services' : 'products'} • Up to {categoryInfo.cashback}% cashback
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20">
              <Coins className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">{rezCoins}</span>
            </div>
          </div>

          {/* Search */}
          <div className="relative mt-3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-600 dark:text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${categoryInfo.name.toLowerCase()}...`}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Mode Chips */}
        <div className="px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {beautyModes.slice(0, 5).map((mode) => (
              <button
                key={mode.id}
                onClick={() => toggleMode(mode.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 text-sm transition-colors ${
                  activeModes.includes(mode.id)
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                <span>{mode.icon}</span>
                <span>{mode.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sort & Filter Bar */}
        <div className="px-4 pb-3 flex gap-2">
          <button
            onClick={() => setShowSort(!showSort)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-rez-gray-100 dark:bg-white/10"
          >
            <span className="text-sm text-rez-navy dark:text-white">
              {sortOptions.find((s) => s.id === sortBy)?.label}
            </span>
            <ChevronDown className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" />
          </button>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rez-gray-100 dark:bg-white/10"
          >
            <SlidersHorizontal className="w-4 h-4 text-rez-navy dark:text-white" />
            <span className="text-sm text-rez-navy dark:text-white">Filters</span>
            {(activeModes.length > 0 || priceRange !== 'all') && (
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500 text-[10px] text-rez-navy dark:text-white">
                {activeModes.length + (priceRange !== 'all' ? 1 : 0)}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Sort Dropdown */}
      {showSort && (
        <div className="px-4 mb-4">
          <div className="p-3 rounded-xl bg-white dark:bg-[#2C2C2E]">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  setSortBy(option.id);
                  setShowSort(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg ${
                  sortBy === option.id
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'text-white hover:bg-white/5'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Filters Panel */}
      {showFilters && (
        <div className="px-4 mb-4">
          <div className="p-4 rounded-xl bg-white dark:bg-[#2C2C2E]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-rez-navy dark:text-white">Filters</h3>
              <button
                onClick={() => {
                  setActiveModes([]);
                  setPriceRange('all');
                }}
                className="text-xs text-emerald-400"
              >
                Clear All
              </button>
            </div>

            {/* Price Range */}
            <div className="mb-4">
              <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-2">Price Range</p>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setPriceRange(range.id)}
                    className={`px-3 py-1.5 rounded-full text-xs ${
                      priceRange === range.id
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mode Filters */}
            <div>
              <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-2">Preferences</p>
              <div className="flex flex-wrap gap-2">
                {beautyModes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => toggleMode(mode.id)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs ${
                      activeModes.includes(mode.id)
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <span>{mode.icon}</span>
                    <span>{mode.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <Button
              variant="primary"
              fullWidth
              className="mt-4"
              onClick={() => setShowFilters(false)}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}

      {/* Active Filters */}
      {(activeModes.length > 0 || priceRange !== 'all') && (
        <div className="px-4 mb-4">
          <div className="flex flex-wrap gap-2">
            {priceRange !== 'all' && (
              <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/20 text-xs text-blue-400">
                {priceRanges.find((r) => r.id === priceRange)?.label}
                <button onClick={() => setPriceRange('all')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {activeModes.map((modeId) => {
              const mode = beautyModes.find((m) => m.id === modeId);
              return (
                <span
                  key={modeId}
                  className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/20 text-xs text-emerald-400"
                >
                  {mode?.icon} {mode?.label}
                  <button onClick={() => toggleMode(modeId)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* Items List */}
      <div className="px-4">
        {items.length > 0 ? (
          <div className="space-y-4">
            {items.map((item) =>
              isServices ? (
                <BeautyServiceCard key={item.id} service={item} />
              ) : (
                <BeautyProductCard key={item.id} product={item} />
              )
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-rez-gray-600 dark:text-gray-400 mb-2">No {isServices ? 'services' : 'products'} found</p>
            <p className="text-sm text-rez-gray-600 dark:text-gray-500">Try adjusting your filters</p>
            <Button
              variant="secondary"
              className="mt-4"
              onClick={() => {
                setActiveModes([]);
                setPriceRange('all');
                setSearchQuery('');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Results Count */}
      {items.length > 0 && (
        <div className="px-4 mt-6 text-center">
          <p className="text-sm text-rez-gray-600 dark:text-gray-500">
            Showing {items.length} {isServices ? 'services' : 'products'}
          </p>
        </div>
      )}
    </div>
  );
};

export default BeautyCategory;
