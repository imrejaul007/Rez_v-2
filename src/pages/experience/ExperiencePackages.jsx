import { useState } from 'react';
import { Check, Users, Clock } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const ExperiencePackages = () => {
  const [packages] = useState([
    { id: 1, name: 'Basic', price: 1999, duration: '2 hours', guests: 1, features: ['Materials included', 'Certification'] },
    { id: 2, name: 'Premium', price: 4999, duration: '5 hours', guests: 3, features: ['Premium materials', 'Lunch included', 'Certification', 'Takeaway kit'] },
    { id: 3, name: 'VIP', price: 9999, duration: 'Full day', guests: 5, features: ['All premium items', 'Private instructor', 'Photo session', 'Dinner included'] }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Experience Packages</h1>
        <p className="text-gray-600 dark:text-gray-400">Choose your package</p>
      </div>

      <div className="px-4 py-6 space-y-4">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-4">
            <h3 className="text-2xl font-bold text-rez-navy dark:text-white mb-3">{pkg.name}</h3>
            <div className="flex items-center gap-6 mb-4">
              <div>
                <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">₹{pkg.price}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  {pkg.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  Up to {pkg.guests} guests
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              {pkg.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-2 rounded-lg bg-purple-600 text-white font-bold hover:bg-purple-700 text-sm">
              Book Now
            </button>
          </div>
        ))}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default ExperiencePackages;
