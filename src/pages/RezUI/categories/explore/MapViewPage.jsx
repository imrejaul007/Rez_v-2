import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Navigation, Filter, Layers, TrendingUp, Store, Coins, Star } from 'lucide-react';

const nearbyStores = [
  {
    id: 1,
    name: 'Paradise Biryani',
    category: 'Food',
    distance: '0.8 km',
    cashback: '15%',
    rating: 4.7,
    position: { lat: 12.9165, lng: 77.6101 },
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=100',
    deals: 3,
    trending: true
  },
  {
    id: 2,
    name: 'Nike Store',
    category: 'Fashion',
    distance: '1.2 km',
    cashback: '18%',
    rating: 4.8,
    position: { lat: 12.9175, lng: 77.6111 },
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100',
    deals: 5,
    trending: false
  },
  {
    id: 3,
    name: 'Wellness Spa',
    category: 'Beauty',
    distance: '2.1 km',
    cashback: '25%',
    rating: 4.6,
    position: { lat: 12.9155, lng: 77.6091 },
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=100',
    deals: 2,
    trending: false
  },
  {
    id: 4,
    name: 'Starbucks',
    category: 'Food',
    distance: '0.5 km',
    cashback: '10%',
    rating: 4.5,
    position: { lat: 12.9185, lng: 77.6121 },
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=100',
    deals: 1,
    trending: true
  }
];

const categories = [
  { id: 'all', label: 'All', icon: '🌍', active: true },
  { id: 'food', label: 'Food', icon: '🍔', active: false },
  { id: 'fashion', label: 'Fashion', icon: '👕', active: false },
  { id: 'beauty', label: 'Beauty', icon: '💄', active: false },
  { id: 'grocery', label: 'Grocery', icon: '🛒', active: false },
];

const MapViewPage = () => {
  const navigate = useNavigate();
  const [selectedStore, setSelectedStore] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [mapMode, setMapMode] = useState('satellite'); // satellite, terrain, default

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50 glass safe-top">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 active:scale-95 transition-all shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-h3 font-poppins text-rez-navy dark:text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                Map View
              </h1>
            </div>
            <button className="p-2 rounded-full bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 active:scale-95 transition-all shadow-lg">
              <Navigation className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <button className="p-2 rounded-full bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 active:scale-95 transition-all shadow-lg">
              <Layers className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="absolute top-20 left-0 right-0 z-40 px-4">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all shadow-lg ${
                activeCategory === cat.id
                  ? 'bg-rez-green-500 text-white'
                  : 'bg-white dark:bg-white/10 text-rez-navy dark:text-white border border-rez-gray-200 dark:border-white/10'
              }`}
            >
              <span className="mr-1">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="h-screen bg-rez-gray-200 dark:bg-white/5 relative">
        {/* Simulated Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20">
          {/* Grid overlay to simulate map */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />

          {/* Store Pins */}
          {nearbyStores.map((store, index) => (
            <button
              key={store.id}
              onClick={() => setSelectedStore(store)}
              className={`absolute transition-all duration-300 ${
                selectedStore?.id === store.id ? 'scale-125 z-30' : 'z-20'
              }`}
              style={{
                top: `${45 + index * 8}%`,
                left: `${35 + index * 12}%`
              }}
            >
              <div className="relative">
                {/* Pin */}
                <div className={`w-12 h-12 rounded-full border-4 ${
                  store.trending
                    ? 'border-orange-500 bg-orange-500'
                    : 'border-rez-green-500 bg-rez-green-500'
                } shadow-xl flex items-center justify-center overflow-hidden`}>
                  <img src={store.image} alt={store.name} className="w-full h-full object-cover" />
                </div>
                {/* Pulse effect for trending */}
                {store.trending && (
                  <div className="absolute inset-0 rounded-full border-4 border-orange-500 animate-ping" />
                )}
                {/* Cashback Badge */}
                <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-emerald-500 rounded-full shadow-lg">
                  <span className="text-[10px] font-bold text-white">{store.cashback}</span>
                </div>
              </div>
            </button>
          ))}

          {/* Your Location */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-lg" />
              <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75" />
            </div>
          </div>
        </div>
      </div>

      {/* Store List Bottom Sheet */}
      <div className="absolute bottom-0 left-0 right-0 z-50 bg-white dark:bg-black border-t border-rez-gray-200 dark:border-white/10 rounded-t-3xl shadow-2xl max-h-64 overflow-y-auto">
        {selectedStore ? (
          // Selected Store Detail
          <div className="p-4">
            <div className="w-12 h-1 bg-rez-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4" />
            <div className="flex gap-3 mb-4">
              <img
                src={selectedStore.image}
                alt={selectedStore.name}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-base font-bold text-rez-navy dark:text-white">
                    {selectedStore.name}
                  </h3>
                  <button
                    onClick={() => setSelectedStore(null)}
                    className="text-rez-gray-500 dark:text-gray-400"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">
                  {selectedStore.category} • {selectedStore.distance}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-semibold text-rez-navy dark:text-white">
                      {selectedStore.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/20 rounded-full">
                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                    <span className="text-xs font-semibold text-emerald-500">
                      {selectedStore.cashback} cashback
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Coins className="w-3 h-3 text-amber-500" />
                    <span className="text-xs font-semibold text-rez-navy dark:text-white">
                      {selectedStore.deals} deals
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                to={`/store/${selectedStore.id}`}
                className="flex-1 py-2.5 bg-rez-green-500 hover:bg-rez-green-600 text-white text-sm font-semibold rounded-xl text-center transition-colors"
              >
                View Store
              </Link>
              <button className="px-4 py-2.5 bg-rez-gray-100 dark:bg-white/10 hover:bg-rez-gray-200 dark:hover:bg-white/20 rounded-xl transition-colors">
                <Navigation className="w-5 h-5 text-rez-navy dark:text-white" />
              </button>
            </div>
          </div>
        ) : (
          // Store List
          <div className="p-4">
            <div className="w-12 h-1 bg-rez-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4" />
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-rez-navy dark:text-white">
                Nearby Stores ({nearbyStores.length})
              </h3>
              <button className="flex items-center gap-1 text-xs text-rez-green-500 font-medium">
                <Filter className="w-3.5 h-3.5" />
                Filter
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
              {nearbyStores.map((store) => (
                <button
                  key={store.id}
                  onClick={() => setSelectedStore(store)}
                  className="shrink-0 w-32 p-2 bg-rez-gray-50 dark:bg-white/5 rounded-xl hover:bg-rez-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-20 rounded-lg object-cover mb-2"
                  />
                  <h4 className="text-xs font-semibold text-rez-navy dark:text-white line-clamp-1 mb-1">
                    {store.name}
                  </h4>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-rez-gray-600 dark:text-gray-400">{store.distance}</span>
                    <span className="text-emerald-500 font-semibold">{store.cashback}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="absolute bottom-72 right-4 z-40 p-3 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-xl shadow-lg">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-rez-green-500" />
          <span className="text-xs text-rez-navy dark:text-white">Stores</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange-500" />
          <span className="text-xs text-rez-navy dark:text-white">Trending</span>
        </div>
      </div>
    </div>
  );
};

export default MapViewPage;
