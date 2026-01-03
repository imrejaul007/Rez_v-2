import { useNavigate } from 'react-router-dom';
import { Crown, Star, Sparkles, TrendingUp } from 'lucide-react';
import Header from '../../components/layout/Header';
import ModeSwitcher from '../../components/home/ModeSwitcher';
import BottomNavManager from '../../components/layout/BottomNavManager';

const PriveExplore = () => {
  const navigate = useNavigate();

  // Mock exclusive brands
  const exclusiveBrands = [
    { id: 1, name: 'Hermès', logo: '👜', category: 'Luxury Fashion', offer: 'Private Shopping Session', badge: '👑 Ultra Luxury' },
    { id: 2, name: 'Bvlgari', logo: '💍', category: 'Jewelry', offer: 'Personalized Consultation', badge: '✨ Invitation Only' },
    { id: 3, name: 'Dom Pérignon', logo: '🥂', category: 'Fine Wines', offer: 'Vintage Collection Access', badge: '👑 Ultra Luxury' },
  ];

  // Mock experiences
  const experiences = [
    { id: 1, title: 'Private Yacht Experience', host: 'Azure Luxe', date: 'Jan 15', seats: '2 left', image: '🛥️' },
    { id: 2, title: 'Michelin Star Chef Dinner', host: 'Le Jardin', date: 'Jan 20', seats: '5 left', image: '👨‍🍳' },
    { id: 3, title: 'Art Gallery Private Viewing', host: 'Modern Art Society', date: 'Jan 25', seats: '8 left', image: '🎨' },
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      <Header />
      <ModeSwitcher />

      {/* Page Header */}
      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2 flex items-center gap-2">
          <Sparkles className="w-7 h-7 text-amber-500" />
          Explore Privé
        </h1>
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">Exclusive brands & experiences for members</p>
      </div>

      {/* Exclusive Brands */}
      <div className="px-4 mb-8">
        <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-4">Privé-Only Brands</h2>
        <div className="space-y-3">
          {exclusiveBrands.map((brand) => (
            <div
              key={brand.id}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-amber-200 dark:border-amber-800 hover:border-amber-500 dark:hover:border-amber-500 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center text-3xl">
                  {brand.logo}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-bold text-rez-navy dark:text-white">{brand.name}</h3>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">{brand.category}</p>
                    </div>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      {brand.badge}
                    </span>
                  </div>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold">{brand.offer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exclusive Experiences */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-4">Upcoming Experiences</h2>
        <div className="grid gap-3">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-5 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-amber-500 dark:hover:border-amber-500 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-3xl">
                  {exp.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-rez-navy dark:text-white mb-1">{exp.title}</h3>
                  <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-2">{exp.host}</p>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-rez-gray-600 dark:text-gray-400">{exp.date}</span>
                    <span className="text-amber-600 dark:text-amber-400 font-semibold">{exp.seats}</span>
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

export default PriveExplore;
