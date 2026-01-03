import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Coins,
  Zap,
  Store,
  X,
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import {
  electronicsCategories,
  electronicsProducts,
  electronicsFilters,
} from '../data/electronicsData';
import ElectronicsProductCard from '../components/electronics/ElectronicsProductCard';
import Button from '../components/common/Button';

const sortOptions = [
  { id: 'popular', label: 'Popular' },
  { id: 'priceLow', label: 'Price: Low to High' },
  { id: 'priceHigh', label: 'Price: High to Low' },
  { id: 'cashback', label: 'Highest Cashback' },
  { id: 'rating', label: 'Top Rated' },
  { id: 'newest', label: 'Newest First' },
];

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under10k', label: 'Under ₹10,000', min: 0, max: 10000 },
  { id: '10k-25k', label: '₹10,000 - ₹25,000', min: 10000, max: 25000 },
  { id: '25k-50k', label: '₹25,000 - ₹50,000', min: 25000, max: 50000 },
  { id: '50k-100k', label: '₹50,000 - ₹1,00,000', min: 50000, max: 100000 },
  { id: 'above100k', label: 'Above ₹1,00,000', min: 100000, max: Infinity },
];

const ElectronicsCategory = () => {
  const { category } = useParams();
  const { rezCoins } = useWallet();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);

  // Get category info
  const categoryInfo = electronicsCategories.find((c) => c.id === category);

  // Filter products by category
  let filteredProducts = electronicsProducts.filter((p) => p.category === category);

  // Apply search
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply filters
  if (activeFilters.includes('60min')) {
    filteredProducts = filteredProducts.filter((p) => p.is60Min);
  }
  if (activeFilters.includes('pickup')) {
    filteredProducts = filteredProducts.filter((p) => p.hasPickup);
  }
  if (activeFilters.includes('deals')) {
    filteredProducts = filteredProducts.filter((p) => p.tag);
  }

  // Apply price range
  const selectedRange = priceRanges.find((r) => r.id === priceRange);
  if (selectedRange) {
    filteredProducts = filteredProducts.filter(
      (p) => p.price >= selectedRange.min && p.price <= selectedRange.max
    );
  }

  // Apply sort
  switch (sortBy) {
    case 'priceLow':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'priceHigh':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'cashback':
      filteredProducts.sort((a, b) => b.cashbackPercent - a.cashbackPercent);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      filteredProducts.sort((a, b) => b.reviews - a.reviews);
  }

  const toggleFilter = (filterId) => {
    if (activeFilters.includes(filterId)) {
      setActiveFilters(activeFilters.filter((f) => f !== filterId));
    } else {
      setActiveFilters([...activeFilters, filterId]);
    }
  };

  if (!categoryInfo) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-rez-gray-600 dark:text-gray-400 mb-4">Category not found</p>
          <Link to="/electronics" className="text-emerald-400">
            ← Back to Electronics
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
            <Link to="/electronics" className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </Link>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{categoryInfo.icon}</span>
                <h1 className="text-xl font-bold text-rez-navy dark:text-white">{categoryInfo.name}</h1>
              </div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                {filteredProducts.length} products • Up to {categoryInfo.cashback}% cashback
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

        {/* Quick Filters */}
        <div className="px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {electronicsFilters.slice(0, 6).map((filter) => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 text-sm transition-colors ${
                  activeFilters.includes(filter.id)
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
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
            {activeFilters.length > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500 text-[10px] text-rez-navy dark:text-white">
                {activeFilters.length}
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
                  setActiveFilters([]);
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

            {/* Quick Filters */}
            <div>
              <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-2">Quick Filters</p>
              <div className="flex flex-wrap gap-2">
                {electronicsFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => toggleFilter(filter.id)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs ${
                      activeFilters.includes(filter.id)
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white/10 text-rez-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <span>{filter.icon}</span>
                    <span>{filter.label}</span>
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
      {(activeFilters.length > 0 || priceRange !== 'all') && (
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
            {activeFilters.map((filterId) => {
              const filter = electronicsFilters.find((f) => f.id === filterId);
              return (
                <span
                  key={filterId}
                  className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/20 text-xs text-emerald-400"
                >
                  {filter?.icon} {filter?.label}
                  <button onClick={() => toggleFilter(filterId)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="px-4">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/electronics/product/${product.id}`}>
                <ElectronicsProductCard product={product} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-rez-gray-600 dark:text-gray-400 mb-2">No products found</p>
            <p className="text-sm text-rez-gray-600 dark:text-gray-500">Try adjusting your filters</p>
            <Button
              variant="secondary"
              className="mt-4"
              onClick={() => {
                setActiveFilters([]);
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
      {filteredProducts.length > 0 && (
        <div className="px-4 mt-6 text-center">
          <p className="text-sm text-rez-gray-600 dark:text-gray-500">
            Showing {filteredProducts.length} products
          </p>
        </div>
      )}
    </div>
  );
};

export default ElectronicsCategory;
