import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Wrench, Zap, Droplet, Wind, Paintbrush } from 'lucide-react';

function HomeServicesCategory() {
  const navigate = useNavigate();
  const { category } = useParams();

  const categoryData = {
    electrical: { name: 'Electrical Services', icon: Zap, color: 'from-yellow-600 to-orange-600' },
    plumbing: { name: 'Plumbing Services', icon: Droplet, color: 'from-blue-600 to-cyan-600' },
    ac: { name: 'AC Services', icon: Wind, color: 'from-cyan-600 to-blue-600' },
    painting: { name: 'Painting Services', icon: Paintbrush, color: 'from-purple-600 to-pink-600' },
    carpentry: { name: 'Carpentry Services', icon: Wrench, color: 'from-orange-600 to-red-600' }
  };

  const current = categoryData[category] || categoryData.electrical;
  const Icon = current.icon;

  const services = [
    { id: 1, name: `${current.name} - Basic`, price: 299, image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400' },
    { id: 2, name: `${current.name} - Premium`, price: 599, image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className={`sticky top-0 z-10 bg-gradient-to-r ${current.color}`}>
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Icon className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">{current.name}</h1></div><p className="text-xs text-white/80">Professional services</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {services.map(service => (
          <div key={service.id} onClick={() => navigate(`/home-services/book/${service.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-blue-500 transition-all cursor-pointer">
            <img src={service.image} alt={service.name} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-rez-navy dark:text-white mb-2">{service.name}</h3>
              <div className="flex items-center justify-between">
                <div><span className="text-xs text-rez-gray-600 dark:text-gray-400">Starting</span><p className="text-lg font-bold text-blue-600 dark:text-blue-400">₹{service.price}</p></div>
                <button className="px-4 py-2 rounded-lg bg-blue-500 text-white font-bold text-sm">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeServicesCategory;
