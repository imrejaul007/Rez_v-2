import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, Award } from 'lucide-react';

function FashionBrandDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const brand = { name: 'Zara', rating: 4.8, verified: true };
  const products = [
    { id: 1, name: 'Classic Shirt', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400', price: 1999, discount: 30 },
    { id: 2, name: 'Summer Dress', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', price: 2999, discount: 25 },
    { id: 3, name: 'Denim Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400', price: 2499, discount: 35 },
    { id: 4, name: 'Blazer', image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400', price: 3999, discount: 20 }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-dark-700 mb-3">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-rez-navy dark:text-white">{brand.name}</h1>
            {brand.verified && <Award className="w-5 h-5 text-blue-500" />}
          </div>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-sm font-semibold">{brand.rating}</span>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        {products.map(product => (
          <div key={product.id} onClick={() => navigate(`/fashion/product/${product.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-indigo-500 transition-all cursor-pointer">
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-emerald-500">
                <p className="text-xs font-bold text-white">{product.discount}% OFF</p>
              </div>
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

export default FashionBrandDetail;
