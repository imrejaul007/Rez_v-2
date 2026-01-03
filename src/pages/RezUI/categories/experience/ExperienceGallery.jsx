import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const ExperienceGallery = () => {
  const [experiences] = useState([
    { id: 1, name: 'Cooking Class', image: '🍳', description: 'Master culinary arts' },
    { id: 2, name: 'Yoga Retreat', image: '🧘', description: 'Find inner peace' },
    { id: 3, name: 'Art Workshop', image: '🎨', description: 'Express creativity' },
    { id: 4, name: 'Music Lessons', image: '🎵', description: 'Learn an instrument' },
    { id: 5, name: 'Dance Classes', image: '💃', description: 'Master dance moves' },
    { id: 6, name: 'Photography Tour', image: '📸', description: 'Capture moments' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Experiences</h1>
        <p className="text-gray-600 dark:text-gray-400">Explore amazing activities</p>
      </div>

      <div className="px-4 py-6 grid grid-cols-2 gap-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-4 text-center hover:shadow-md transition-all">
            <div className="text-5xl mb-3">{exp.image}</div>
            <p className="font-bold text-rez-navy dark:text-white mb-1">{exp.name}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">{exp.description}</p>
          </div>
        ))}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default ExperienceGallery;
