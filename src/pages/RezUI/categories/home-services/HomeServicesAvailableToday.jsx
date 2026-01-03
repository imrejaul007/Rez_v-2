import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, Star, Clock } from 'lucide-react';

function HomeServicesAvailableToday() {
  const navigate = useNavigate();
  const services = [
    { id: 1, name: 'Emergency Plumbing', price: 499, rating: 4.7, available: 'Now', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400' },
    { id: 2, name: 'Electrician Service', price: 399, rating: 4.8, available: '2 hours', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400' },
    { id: 3, name: 'Appliance Repair', price: 599, rating: 4.6, available: '3 hours', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Zap className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Available Today</h1></div><p className="text-xs text-white/80">Same-day service</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {services.map(service => (
          <div key={service.id} onClick={() => navigate(`/home-services/book/${service.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700 hover:border-orange-500 transition-all cursor-pointer">
            <div className="flex gap-3">
              <img src={service.image} alt={service.name} className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1">
                <h3 className="font-bold text-rez-navy dark:text-white mb-1">{service.name}</h3>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{service.rating}</span></div>
                  <div className="px-2 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold flex items-center gap-1"><Clock className="w-3 h-3" />Available in {service.available}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div><span className="text-xs text-rez-gray-600 dark:text-gray-400">Starting</span><p className="text-lg font-bold text-orange-600 dark:text-orange-400">₹{service.price}</p></div>
                  <button className="px-4 py-2 rounded-lg bg-orange-500 text-white font-bold text-sm">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeServicesAvailableToday;
