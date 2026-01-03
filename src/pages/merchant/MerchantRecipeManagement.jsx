import React from 'react';
import { BookOpen, Plus } from 'lucide-react';

export default function MerchantRecipeManagement() {
  const [recipes] = React.useState([
    { id: 1, name: 'Margherita Pizza', ingredients: ['Flour', 'Tomato', 'Cheese'], time: '15 min' },
    { id: 2, name: 'Caesar Salad', ingredients: ['Lettuce', 'Croutons', 'Dressing'], time: '5 min' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <BookOpen size={28} /> Recipes
      </h1>

      <div className="space-y-3">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-lg p-4 shadow">
            <p className="font-semibold text-gray-900">{recipe.name}</p>
            <p className="text-sm text-gray-600 mt-2">Prep: {recipe.time}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {recipe.ingredients.map((ing, i) => (
                <span key={i} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                  {ing}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded font-semibold flex items-center justify-center gap-2">
        <Plus size={18} /> Add Recipe
      </button>
    </div>
  );
}