import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

function FashionOccasions() {
  const navigate = useNavigate();

  const occasions = [
    { id: 'wedding', name: 'Wedding', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400', items: 245 },
    { id: 'party', name: 'Party', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400', items: 567 },
    { id: 'casual', name: 'Casual Hangout', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400', items: 892 },
    { id: 'work', name: 'Work & Office', image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=400', items: 423 },
    { id: 'date', name: 'Date Night', image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=400', items: 334 },
    { id: 'travel', name: 'Travel', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400', items: 278 }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-white" />
              <h1 className="text-h3 font-poppins text-white">Shop by Occasion</h1>
            </div>
            <p className="text-xs text-white/80">Perfect outfits for every event</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-3">
        {occasions.map(occasion => (
          <div key={occasion.id} onClick={() => navigate(`/fashion/occasion/${occasion.id}`)} className="relative h-32 rounded-2xl overflow-hidden cursor-pointer group">
            <img src={occasion.image} alt={occasion.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-4">
              <h3 className="text-xl font-bold text-white mb-1">{occasion.name}</h3>
              <p className="text-sm text-white/80">{occasion.items} items</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FashionOccasions;
