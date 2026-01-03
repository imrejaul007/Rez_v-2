import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, Star } from 'lucide-react';

function FashionBrands() {
  const navigate = useNavigate();

  const brands = [
    { id: 1, name: 'Zara', logo: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=200', rating: 4.8, discount: 30, verified: true },
    { id: 2, name: 'H&M', logo: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=200', rating: 4.6, discount: 25, verified: true },
    { id: 3, name: 'Mango', logo: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200', rating: 4.7, discount: 35, verified: true },
    { id: 4, name: 'Forever 21', logo: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=200', rating: 4.5, discount: 40, verified: false },
    { id: 5, name: 'Levis', logo: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200', rating: 4.9, discount: 20, verified: true },
    { id: 6, name: 'Tommy Hilfiger', logo: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200', rating: 4.8, discount: 30, verified: true }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <h1 className="text-h3 font-poppins text-white">Fashion Brands</h1>
            </div>
            <p className="text-xs text-white/80">Top fashion labels</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        {brands.map(brand => (
          <div key={brand.id} onClick={() => navigate(`/fashion/brand/${brand.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700 hover:border-indigo-500 transition-all cursor-pointer">
            <div className="relative mb-3">
              <img src={brand.logo} alt={brand.name} className="w-full h-24 object-cover rounded-xl" />
              {brand.verified && (
                <div className="absolute top-2 right-2 p-1 rounded-full bg-blue-500">
                  <Award className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
            <h3 className="font-bold text-rez-navy dark:text-white mb-1">{brand.name}</h3>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-xs font-semibold">{brand.rating}</span>
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{brand.discount}% OFF</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FashionBrands;
