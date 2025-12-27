import { useNavigate } from 'react-router-dom';
import { Search, Award, Star, Zap } from 'lucide-react';
import Header from '../../components/layout/Header';
import ModeSwitcher from '../../components/home/ModeSwitcher';
import BottomNavManager from '../../components/layout/BottomNavManager';

const MallBrands = () => {
  const navigate = useNavigate();

  // Mock brands data
  const brands = [
    { id: 1, name: 'Zara', logo: 'https://logo.clearbit.com/zara.com', category: 'Fashion', rating: 4.8, badge: '✅ Verified', coins: 'Up to 35% ReZ Coins' },
    { id: 2, name: 'Nykaa', logo: 'https://logo.clearbit.com/nykaa.com', category: 'Beauty', rating: 4.9, badge: '⭐ ReZ Preferred', coins: 'Up to 30% ReZ Coins' },
    { id: 3, name: 'Sony', logo: 'https://logo.clearbit.com/sony.com', category: 'Electronics', rating: 4.7, badge: '✅ Verified', coins: 'Up to 25% ReZ Coins' },
    { id: 4, name: 'Licious', logo: 'https://logo.clearbit.com/licious.in', category: 'Food', rating: 4.6, badge: '⭐ ReZ Preferred', coins: 'Up to 20% ReZ Coins' },
    { id: 5, name: 'Forest Essentials', logo: 'https://logo.clearbit.com/forestessentialsindia.com', category: 'Beauty', rating: 4.8, badge: '👑 Premium', coins: 'Up to 40% ReZ Coins' },
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      <Header />
      <ModeSwitcher />

      {/* Page Header */}
      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">All Mall Brands</h1>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">Curated brands with verified quality</p>
      </div>

      {/* Search */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <Search className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search brands..."
            className="flex-1 bg-transparent text-rez-navy dark:text-white placeholder-rez-gray-500 dark:placeholder-gray-500 outline-none text-sm"
          />
        </div>
      </div>

      {/* Brands Grid */}
      <div className="px-4 mb-6">
        <div className="grid gap-3">
          {brands.map((brand) => (
            <div
              key={brand.id}
              onClick={() => navigate(`/mall/brand/${brand.id}`)}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center p-2 overflow-hidden">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<span class="text-2xl">🏪</span>';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-bold text-rez-navy dark:text-white">{brand.name}</h3>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">{brand.category}</p>
                    </div>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      {brand.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-sm font-semibold text-rez-navy dark:text-white">{brand.rating}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{brand.coins}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default MallBrands;
