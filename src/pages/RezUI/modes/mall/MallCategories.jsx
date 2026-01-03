import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Sparkles, Smartphone, Home as HomeIcon, ShirtIcon, Zap } from 'lucide-react';
import Header from '../../components/layout/Header';
import ModeSwitcher from '../../components/home/ModeSwitcher';
import BottomNavManager from '../../components/layout/BottomNavManager';

const MallCategories = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 'fashion', name: 'Fashion', icon: '👗', stores: 120, coins: 'Up to 35% ReZ Coins', color: 'from-purple-500 to-pink-500' },
    { id: 'beauty', name: 'Beauty & Personal Care', icon: '💄', stores: 85, coins: 'Up to 30% ReZ Coins', color: 'from-pink-500 to-rose-500' },
    { id: 'electronics', name: 'Electronics', icon: '📱', stores: 65, coins: 'Up to 25% ReZ Coins', color: 'from-blue-500 to-cyan-500' },
    { id: 'home', name: 'Home & Living', icon: '🏠', stores: 95, coins: 'Up to 28% ReZ Coins', color: 'from-amber-500 to-orange-500' },
    { id: 'grocery', name: 'Grocery & Gourmet', icon: '🛒', stores: 45, coins: 'Up to 20% ReZ Coins', color: 'from-green-500 to-emerald-500' },
    { id: 'luxury', name: 'Luxury', icon: '💎', stores: 25, coins: 'Up to 40% ReZ Coins', color: 'from-violet-500 to-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      <Header />
      <ModeSwitcher />

      {/* Page Header */}
      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Browse Categories</h1>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">Shop by category across curated brands</p>
      </div>

      {/* Categories Grid */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(`/mall/category/${category.id}`)}
              className="p-5 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl mb-3 shadow-lg`}>
                {category.icon}
              </div>
              <h3 className="font-bold text-rez-navy dark:text-white mb-1">{category.name}</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">{category.stores} stores</p>
              <div className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{category.coins}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default MallCategories;
