import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tag } from 'lucide-react';

function GroceryDeals() {
  const navigate = useNavigate();
  const deals = [
    { id: 1, title: 'Buy 1 Get 1 Free', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400', discount: 50 },
    { id: 2, title: '30% Off on Fruits', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400', discount: 30 }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Tag className="w-5 h-5 text-amber-400" /><h1 className="text-h3 font-poppins text-white">Grocery Deals</h1></div></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {deals.map(d => (
          <div key={d.id} className="relative h-40 rounded-2xl overflow-hidden cursor-pointer" onClick={() => navigate(`/deal/${d.id}`)}>
            <img src={d.image} alt={d.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center px-4">
              <div><h3 className="text-xl font-bold text-white mb-1">{d.title}</h3><div className="px-3 py-1 rounded-full bg-emerald-500 inline-block"><p className="text-sm font-bold text-white">{d.discount}% OFF</p></div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroceryDeals;
