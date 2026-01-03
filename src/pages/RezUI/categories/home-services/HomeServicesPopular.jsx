import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Wrench, Star, TrendingUp } from 'lucide-react';

function HomeServicesPopular() {
  const navigate = useNavigate();
  const services = [
    { id: 1, name: 'AC Repair & Service', price: 399, rating: 4.8, bookings: 2500, trending: true, image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400' },
    { id: 2, name: 'Home Cleaning', price: 599, rating: 4.7, bookings: 3200, trending: true, image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400' },
    { id: 3, name: 'Plumbing Services', price: 299, rating: 4.6, bookings: 1800, trending: false, image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Popular Services</h1></div><p className="text-xs text-white/80">Most booked services</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {services.map(service => (
          <div key={service.id} onClick={() => navigate(`/home-services/book/${service.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-blue-500 transition-all cursor-pointer">
            <div className="relative h-40">
              <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
              {service.trending && <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center gap-1"><TrendingUp className="w-3 h-3" />Trending</div>}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-rez-navy dark:text-white mb-2">{service.name}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-sm font-semibold">{service.rating}</span></div>
                  <span className="text-sm text-rez-gray-600 dark:text-gray-400">{service.bookings}+ bookings</span>
                </div>
                <div><span className="text-xs text-rez-gray-600 dark:text-gray-400">Starting</span><p className="text-lg font-bold text-blue-600 dark:text-blue-400">₹{service.price}</p></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeServicesPopular;
