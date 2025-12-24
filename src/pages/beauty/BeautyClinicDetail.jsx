import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Clock, Phone, Award, Calendar } from 'lucide-react';

function BeautyClinicDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const clinic = {
    id: 1,
    name: 'Radiance Skin Clinic',
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400',
    rating: 4.9,
    reviews: 312,
    distance: 1.2,
    address: '123 MG Road, Indiranagar, Bangalore - 560038',
    phone: '+91 98765 43210',
    openNow: true,
    hours: '10:00 AM - 8:00 PM',
    specialties: ['Laser Treatment', 'Botox', 'Skin Rejuvenation', 'Anti-Aging'],
    certified: true,
    services: [
      { name: 'Laser Hair Removal', price: 3999, duration: '45 mins' },
      { name: 'Botox Treatment', price: 12999, duration: '30 mins' },
      { name: 'Chemical Peel', price: 2499, duration: '60 mins' }
    ]
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="relative">
        <img src={clinic.image} alt={clinic.name} className="w-full h-64 object-cover" />
        {clinic.certified && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-500 flex items-center gap-1">
            <Award className="w-4 h-4 text-white" />
            <span className="text-xs font-bold text-white">Certified</span>
          </div>
        )}
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Title & Rating */}
        <div>
          <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">{clinic.name}</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span className="text-lg font-bold">{clinic.rating}</span>
              <span className="text-sm text-rez-gray-600 dark:text-gray-400">({clinic.reviews} reviews)</span>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-rez-navy dark:text-white mb-1">{clinic.distance} km away</p>
              <p className="text-sm text-rez-gray-600 dark:text-gray-400">{clinic.address}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <Clock className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            <div>
              <p className={`text-sm font-semibold ${clinic.openNow ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                {clinic.openNow ? 'Open Now' : 'Closed'}
              </p>
              <p className="text-sm text-rez-gray-600 dark:text-gray-400">{clinic.hours}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <Phone className="w-5 h-5 text-purple-500 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-rez-navy dark:text-white">{clinic.phone}</p>
              <button className="text-sm text-purple-600 dark:text-purple-400 font-medium">Call Now</button>
            </div>
          </div>
        </div>

        {/* Specialties */}
        <div>
          <h3 className="font-bold text-rez-navy dark:text-white mb-2">Specialties</h3>
          <div className="flex gap-2 flex-wrap">
            {clinic.specialties.map((spec, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-purple-500/20 text-sm font-medium text-purple-600 dark:text-purple-400">{spec}</span>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-rez-navy dark:text-white mb-2">Popular Services</h3>
          <div className="space-y-2">
            {clinic.services.map((service, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-rez-navy dark:text-white">{service.name}</h4>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">{service.duration}</p>
                  </div>
                  <p className="font-bold text-rez-navy dark:text-white">₹{service.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700 p-4">
        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold flex items-center justify-center gap-2">
          <Calendar className="w-5 h-5" />
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default BeautyClinicDetail;
