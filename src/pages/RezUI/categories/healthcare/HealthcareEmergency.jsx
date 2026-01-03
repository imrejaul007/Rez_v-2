import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertCircle, Phone, Ambulance, MapPin, Clock } from 'lucide-react';

function HealthcareEmergency() {
  const navigate = useNavigate();
  const services = [
    { id: 1, name: 'Ambulance Service', type: 'Emergency Transport', phone: '108', responseTime: '10-15 min', icon: Ambulance, color: 'from-red-500 to-orange-500' },
    { id: 2, name: 'Emergency Room', type: 'Immediate Care', phone: '102', responseTime: 'Walk-in', icon: AlertCircle, color: 'from-blue-500 to-cyan-500' }
  ];

  const hospitals = [
    { id: 1, name: 'City Hospital', distance: 1.5, emergency: true, beds: 5, image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400' },
    { id: 2, name: 'Apollo Emergency', distance: 2.3, emergency: true, beds: 8, image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><AlertCircle className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Emergency</h1></div><p className="text-xs text-white/80">24x7 emergency services</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="space-y-3">
          {services.map(service => (
            <div key={service.id} className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{service.name}</h3>
                  <p className="text-sm opacity-90">{service.type}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{service.responseTime}</span>
                </div>
                <a href={`tel:${service.phone}`} className="px-4 py-2 rounded-lg bg-white text-red-600 font-bold flex items-center gap-2">
                  <Phone className="w-4 h-4" />Call {service.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-3">Nearby Emergency Hospitals</h2>
          <div className="space-y-3">
            {hospitals.map(hospital => (
              <div key={hospital.id} className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
                <div className="flex gap-3">
                  <img src={hospital.image} alt={hospital.name} className="w-20 h-20 rounded-xl object-cover" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-bold text-rez-navy dark:text-white">{hospital.name}</h3>
                      <span className="px-2 py-1 rounded-md bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold">24x7</span>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1"><MapPin className="w-3 h-3 text-rez-gray-400" /><span className="text-sm text-rez-gray-600 dark:text-gray-400">{hospital.distance} km</span></div>
                      <span className="text-sm text-emerald-600 dark:text-emerald-400 font-bold">{hospital.beds} beds available</span>
                    </div>
                    <button className="w-full py-2 rounded-lg bg-red-500 text-white font-bold text-sm">Get Directions</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthcareEmergency;
