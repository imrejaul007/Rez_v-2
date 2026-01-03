import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Grid, List } from 'lucide-react';

function BeautyAll() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid');

  const allBeauty = [
    { id: 1, name: 'Glow Beauty Salon', type: 'clinic', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400', rating: 4.9 },
    { id: 2, name: 'Vitamin C Serum', type: 'product', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400', rating: 4.8 },
    { id: 3, name: 'Full Body Massage', type: 'service', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400', rating: 5.0 },
    { id: 4, name: 'Matte Lipstick', type: 'product', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400', rating: 4.9 }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-h3 font-poppins text-white flex-1">All Beauty</h1>
          <div className="flex gap-2">
            <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-white/20' : ''}`}>
              <Grid className="w-5 h-5 text-white" />
            </button>
            <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-white/20' : ''}`}>
              <List className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-3' : 'space-y-3'}>
          {allBeauty.map(item => (
            <div key={item.id} onClick={() => navigate(`/beauty/${item.type}/${item.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-pink-500 transition-all cursor-pointer">
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover" />
              <div className="p-3">
                <span className="text-xs text-pink-600 dark:text-pink-400 font-medium capitalize">{item.type}</span>
                <h3 className="font-bold text-sm text-rez-navy dark:text-white">{item.name}</h3>
                <p className="text-xs text-amber-600 dark:text-amber-400">⭐ {item.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BeautyAll;
