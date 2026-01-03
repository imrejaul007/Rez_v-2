import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, Award, MapPin, Phone, Calendar } from 'lucide-react';

function HomeServicesProviderDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const provider = {
    id: 1,
    name: 'Rajesh Kumar',
    specialization: 'Electrician',
    experience: 10,
    rating: 4.9,
    reviews: 850,
    jobs: 850,
    verified: true,
    distance: 1.2,
    phone: '98765-43210',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    about: 'Experienced electrician with 10+ years in residential and commercial electrical work. Specialized in wiring, installations, and repairs.',
    services: ['House Wiring', 'Fan Installation', 'Switch Repair', 'Light Fixtures', 'MCB Installation'],
    availability: ['Mon-Sat: 9 AM - 7 PM']
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <h1 className="text-h3 font-poppins text-white">Provider Profile</h1>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <div className="flex gap-3 mb-4">
            <img src={provider.image} alt={provider.name} className="w-24 h-24 rounded-xl object-cover" />
            <div className="flex-1">
              <div className="flex items-start justify-between mb-1">
                <div><h2 className="text-xl font-bold text-rez-navy dark:text-white">{provider.name}</h2><p className="text-sm text-emerald-600 dark:text-emerald-400">{provider.specialization}</p></div>
                {provider.verified && <Award className="w-6 h-6 text-emerald-500" />}
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{provider.rating}</span><span className="text-xs text-rez-gray-600 dark:text-gray-400">({provider.reviews})</span></div>
                <span className="text-sm text-rez-gray-600 dark:text-gray-400">{provider.experience} yrs exp</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-rez-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1"><MapPin className="w-3 h-3" />{provider.distance} km</div>
                <div className="flex items-center gap-1"><Phone className="w-3 h-3" />{provider.phone}</div>
              </div>
            </div>
          </div>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">{provider.about}</p>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Services Offered</h3>
          <div className="flex flex-wrap gap-2">
            {provider.services.map((service, i) => (
              <span key={i} className="px-3 py-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-bold">{service}</span>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Availability</h3>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">{provider.availability.join(', ')}</p>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700">
        <div className="flex gap-3">
          <a href={`tel:${provider.phone}`} className="px-6 py-3 rounded-xl border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2"><Phone className="w-5 h-5" />Call</a>
          <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold flex items-center justify-center gap-2"><Calendar className="w-5 h-5" />Book Service</button>
        </div>
      </div>
    </div>
  );
}

export default HomeServicesProviderDetail;
