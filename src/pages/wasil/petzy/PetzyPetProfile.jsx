import React from 'react';
import { Calendar, Award, Heart } from 'lucide-react';

// Petzy Pet Profile: Manage Pet Profiles
// Backend API: GET /api/wasil/petzy/pets
// Backend API: POST /api/wasil/petzy/pets

const PetzyPetProfile = () => {
  const pets = [
    {
      id: 1,
      name: 'Max',
      type: 'Dog',
      breed: 'Golden Retriever',
      age: '3 years',
      weight: '28 kg',
      image: '🐕'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white">My Pets</h1>
      </div>

      <div className="px-4 py-4 space-y-4">
        {pets.map((pet) => (
          <div key={pet.id} className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center text-5xl">
                {pet.image}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg">{pet.name}</h3>
                <p className="text-sm text-gray-500">{pet.breed}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {pet.age}
                  </span>
                  <span>{pet.weight}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <button className="bg-pink-100 text-pink-700 py-2 rounded-lg text-sm font-medium">
                View Records
              </button>
              <button className="bg-pink-500 text-white py-2 rounded-lg text-sm font-medium">
                Book Service
              </button>
            </div>
          </div>
        ))}

        <button className="w-full bg-pink-50 border-2 border-dashed border-pink-300 rounded-xl py-4 text-pink-600 font-medium">
          + Add New Pet
        </button>
      </div>
    </div>
  );
};

export default PetzyPetProfile;
