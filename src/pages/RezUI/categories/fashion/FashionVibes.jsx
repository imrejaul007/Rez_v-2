import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

function FashionVibes() {
  const navigate = useNavigate();

  const vibes = [
    { id: 'minimalist', name: 'Minimalist', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400', color: 'from-gray-500 to-slate-500' },
    { id: 'boho', name: 'Boho Chic', image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400', color: 'from-orange-500 to-amber-500' },
    { id: 'streetwear', name: 'Streetwear', image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=400', color: 'from-purple-500 to-pink-500' },
    { id: 'vintage', name: 'Vintage', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400', color: 'from-yellow-500 to-orange-500' },
    { id: 'athleisure', name: 'Athleisure', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400', color: 'from-blue-500 to-cyan-500' },
    { id: 'formal', name: 'Formal', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400', color: 'from-indigo-500 to-blue-500' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h1 className="text-h3 font-poppins text-white">Fashion Vibes</h1>
            </div>
            <p className="text-xs text-white/80">Find your style</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        {vibes.map(vibe => (
          <div key={vibe.id} onClick={() => navigate(`/fashion/vibe/${vibe.id}`)} className="relative rounded-2xl overflow-hidden cursor-pointer group">
            <img src={vibe.image} alt={vibe.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
            <div className={`absolute inset-0 bg-gradient-to-t ${vibe.color} opacity-60`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-xl font-bold text-white">{vibe.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FashionVibes;
