import { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { stores, filterStores } from '../data/stores';
import { categories } from '../data/categories';
import StoreList from '../components/store/StoreList';
import Badge from '../components/common/Badge';

const Explore = () => {
  const { filters } = useApp();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('distance'); // distance | rating | cashback

  // Apply filters
  let filteredStores = filterStores(stores, {
    ...filters,
    category: selectedCategory
  });

  // Apply sorting
  filteredStores = [...filteredStores].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'cashback':
        return b.cashback - a.cashback;
      case 'distance':
      default:
        return parseFloat(a.distance) - parseFloat(b.distance);
    }
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24 transition-colors">
      {/* Header */}
      <div className="px-4 pt-2 pb-4">
        <h1 className="text-h2 font-poppins text-rez-navy dark:text-white">Explore</h1>
        <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mt-1">
          {filteredStores.length} stores nearby
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 px-4 overflow-x-auto hide-scrollbar pb-3">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full shrink-0 transition-all ${
            !selectedCategory
              ? 'bg-emerald-500 text-white'
              : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-700 dark:text-gray-300'
          }`}
        >
          All
        </button>
        {categories.slice(0, 8).map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-4 py-2 rounded-full shrink-0 transition-all ${
              selectedCategory === cat.name
                ? 'bg-emerald-500 text-white'
                : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-700 dark:text-gray-300'
            }`}
          >
            {cat.name.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Sort Options */}
      <div className="flex items-center gap-2 px-4 pb-4">
        <span className="text-body-sm text-rez-gray-600 dark:text-gray-400">Sort by:</span>
        <div className="flex gap-2">
          {[
            { id: 'distance', label: 'Distance' },
            { id: 'rating', label: 'Rating' },
            { id: 'cashback', label: 'Cashback' },
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => setSortBy(option.id)}
              className={`px-3 py-1.5 rounded-full text-body-sm transition-all ${
                sortBy === option.id
                  ? 'bg-rez-gray-200 dark:bg-white/20 text-rez-navy dark:text-white'
                  : 'bg-rez-gray-50 dark:bg-white/5 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filters Display */}
      {Object.entries(filters).some(([_, v]) => v) && (
        <div className="flex flex-wrap gap-2 px-4 pb-4">
          {filters.halal && <Badge variant="halal">🕌 Halal</Badge>}
          {filters.vegan && <Badge variant="vegan">🌱 Vegan</Badge>}
          {filters.vegetarian && <Badge variant="default">🥗 Veg</Badge>}
          {filters.is60Min && <Badge variant="fast">⚡ 60min</Badge>}
        </div>
      )}

      {/* Store List */}
      <StoreList
        stores={filteredStores}
        emptyMessage="No stores match your current filters. Try adjusting your mode or expanding your search."
      />
    </div>
  );
};

export default Explore;
