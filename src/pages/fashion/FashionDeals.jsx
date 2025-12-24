import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tag, Clock } from 'lucide-react';

function FashionDeals() {
  const navigate = useNavigate();

  const deals = [
    { id: 1, title: 'Summer Collection Sale', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400', discount: 50, endsIn: '2 days', cashback: 15 },
    { id: 2, title: 'Designer Handbags', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400', discount: 40, endsIn: '5h', cashback: 20 },
    { id: 3, title: 'Footwear Fest', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400', discount: 35, endsIn: '1 day', cashback: 12 },
    { id: 4, title: 'Winter Jackets', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', discount: 45, endsIn: '3 days', cashback: 18 }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5 text-amber-400" />
              <h1 className="text-h3 font-poppins text-white">Fashion Deals</h1>
            </div>
            <p className="text-xs text-white/80">Best offers on fashion</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        {deals.map(deal => (
          <div key={deal.id} onClick={() => navigate(`/deal/${deal.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 transition-all cursor-pointer">
            <div className="relative">
              <img src={deal.image} alt={deal.title} className="w-full h-32 object-cover" />
              <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-black/70 backdrop-blur-sm flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-400" />
                <span className="text-xs font-bold text-white">{deal.endsIn}</span>
              </div>
              <div className="absolute bottom-2 left-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-500">
                <p className="text-sm font-bold text-white">{deal.discount}% OFF</p>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-bold text-sm text-rez-navy dark:text-white mb-2">{deal.title}</h3>
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 text-center">{deal.cashback}% Cashback</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FashionDeals;
