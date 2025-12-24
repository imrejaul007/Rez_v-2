import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Award, Clock } from 'lucide-react';

function BeautyClinics() {
  const navigate = useNavigate();

  const clinics = [
    {
      id: 1,
      name: 'Radiance Skin Clinic',
      image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400',
      rating: 4.9,
      reviews: 312,
      distance: 1.2,
      specialties: ['Laser Treatment', 'Botox', 'Skin Rejuvenation'],
      certified: true,
      openNow: true
    },
    {
      id: 2,
      name: 'Glow Aesthetics',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400',
      rating: 4.8,
      reviews: 234,
      distance: 2.3,
      specialties: ['Dermal Fillers', 'Chemical Peel', 'Anti-Aging'],
      certified: true,
      openNow: false
    }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <h1 className="text-h3 font-poppins text-white">Beauty Clinics</h1>
            <p className="text-xs text-white/80">Expert dermatologists & aestheticians</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-3">
        {clinics.map(clinic => (
          <div key={clinic.id} onClick={() => navigate(`/beauty/clinic/${clinic.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-purple-500 transition-all cursor-pointer">
            <img src={clinic.image} alt={clinic.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold text-lg text-rez-navy dark:text-white">{clinic.name}</h3>
                  {clinic.certified && (
                    <div className="flex items-center gap-1 mt-1">
                      <Award className="w-4 h-4 text-blue-500" />
                      <span className="text-xs text-blue-600 dark:text-blue-400">Certified Clinic</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-sm font-bold">{clinic.rating}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-blue-600 dark:text-blue-400">{clinic.distance} km</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <span className={`text-sm font-medium ${clinic.openNow ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                    {clinic.openNow ? 'Open Now' : 'Closed'}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {clinic.specialties.map((spec, idx) => (
                  <span key={idx} className="px-2 py-1 rounded-full bg-purple-500/20 text-xs font-medium text-purple-600 dark:text-purple-400">{spec}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BeautyClinics;
