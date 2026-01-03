import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Star, Clock, Phone, Calendar } from 'lucide-react';

function FitnessGymDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const gym = {
    id: 1,
    name: 'Cult.fit Gym',
    address: '123 Fitness Street, Mumbai',
    distance: 0.8,
    rating: 4.8,
    reviews: 1250,
    price: 999,
    phone: '1800-123-4567',
    timing: '5 AM - 11 PM',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
    features: ['Cardio Equipment', 'Free Weights', 'Group Classes', 'Personal Training', 'Steam & Sauna', 'Locker Rooms'],
    plans: [
      { name: '1 Month', price: 999, savings: 0 },
      { name: '3 Months', price: 2699, savings: 300 },
      { name: '6 Months', price: 4999, savings: 1000 },
      { name: '1 Year', price: 8999, savings: 3000 }
    ]
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <h1 className="text-h3 font-poppins text-white">Gym Details</h1>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700">
          <img src={gym.image} alt={gym.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold text-rez-navy dark:text-white mb-2">{gym.name}</h2>
            <div className="flex items-center gap-1 mb-3"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{gym.rating}</span><span className="text-xs text-rez-gray-600 dark:text-gray-400">({gym.reviews} reviews)</span></div>
            <div className="space-y-2">
              <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-rez-gray-400 mt-0.5" /><p className="text-sm text-rez-gray-600 dark:text-gray-400">{gym.address} • {gym.distance} km</p></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-rez-gray-400" /><p className="text-sm text-rez-gray-600 dark:text-gray-400">{gym.timing}</p></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-rez-gray-400" /><p className="text-sm text-rez-gray-600 dark:text-gray-400">{gym.phone}</p></div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Facilities</h3>
          <div className="grid grid-cols-2 gap-2">
            {gym.features.map((feature, i) => (
              <div key={i} className="px-3 py-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-sm">• {feature}</div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Membership Plans</h3>
          <div className="grid grid-cols-2 gap-3">
            {gym.plans.map((plan, i) => (
              <div key={i} className="p-3 rounded-xl border-2 border-rez-gray-200 dark:border-dark-700 hover:border-orange-500 transition-all cursor-pointer">
                <p className="text-sm font-bold text-rez-navy dark:text-white mb-1">{plan.name}</p>
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">₹{plan.price}</p>
                {plan.savings > 0 && <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">Save ₹{plan.savings}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700">
        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold flex items-center justify-center gap-2"><Calendar className="w-5 h-5" />Join Now</button>
      </div>
    </div>
  );
}

export default FitnessGymDetail;
