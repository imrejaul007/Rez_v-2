import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';

function FashionOccasionDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const products = [
    { id: 1, name: 'Evening Gown', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', price: 4999 },
    { id: 2, name: 'Formal Blazer', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400', price: 3499 },
    { id: 3, name: 'Party Dress', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400', price: 2999 },
    { id: 4, name: 'Cocktail Dress', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400', price: 3999 }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <h1 className="text-h3 font-poppins text-rez-navy dark:text-white capitalize">{id} Outfits</h1>
        </div>
      </div>

      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        {products.map(product => (
          <div key={product.id} onClick={() => navigate(`/fashion/product/${product.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-rose-500 transition-all cursor-pointer">
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <button className="absolute top-2 right-2 p-2 rounded-full bg-white/90 backdrop-blur-sm">
                <Heart className="w-4 h-4 text-rez-gray-600" />
              </button>
            </div>
            <div className="p-3">
              <h3 className="font-bold text-sm text-rez-navy dark:text-white mb-1">{product.name}</h3>
              <p className="text-lg font-bold text-rez-navy dark:text-white">₹{product.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FashionOccasionDetail;
