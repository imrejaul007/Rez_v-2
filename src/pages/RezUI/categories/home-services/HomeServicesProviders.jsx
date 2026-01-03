import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Star, Award, MapPin } from 'lucide-react';

function HomeServicesProviders() {
  const navigate = useNavigate();
  const providers = [
    { id: 1, name: 'Rajesh Kumar', specialization: 'Electrician', experience: 10, rating: 4.9, jobs: 850, verified: true, distance: 1.2, image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
    { id: 2, name: 'Amit Singh', specialization: 'Plumber', experience: 8, rating: 4.7, jobs: 650, verified: true, distance: 2.5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><User className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Service Providers</h1></div><p className="text-xs text-white/80">Verified professionals</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {providers.map(provider => (
          <div key={provider.id} onClick={() => navigate(`/home-services/provider/${provider.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 transition-all cursor-pointer">
            <div className="flex gap-3">
              <img src={provider.image} alt={provider.name} className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <div><h3 className="font-bold text-rez-navy dark:text-white">{provider.name}</h3><p className="text-sm text-emerald-600 dark:text-emerald-400">{provider.specialization}</p></div>
                  {provider.verified && <Award className="w-5 h-5 text-emerald-500" />}
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{provider.rating}</span></div>
                  <span className="text-sm text-rez-gray-600 dark:text-gray-400">{provider.experience} yrs</span>
                  <span className="text-sm text-rez-gray-600 dark:text-gray-400">{provider.jobs} jobs</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1"><MapPin className="w-3 h-3 text-rez-gray-400" /><span className="text-sm text-rez-gray-600 dark:text-gray-400">{provider.distance} km away</span></div>
                  <button className="px-4 py-2 rounded-lg bg-emerald-500 text-white font-bold text-sm">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeServicesProviders;
