import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function EventGallery() {
  const [photos] = React.useState([
    { id: 1, title: 'Performance 1' },
    { id: 2, title: 'Crowd' },
    { id: 3, title: 'Stage Setup' },
    { id: 4, title: 'Lights' },
    { id: 5, title: 'Audience' },
    { id: 6, title: 'Finale' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <ImageIcon size={28} /> Event Gallery
        </h1>

        <div className="grid grid-cols-2 gap-3">
          {photos.map(photo => (
            <div
              key={photo.id}
              className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-90 transition"
            >
              <div className="text-center">
                <ImageIcon className="text-white mx-auto mb-2" size={32} />
                <p className="text-white text-sm font-semibold">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}