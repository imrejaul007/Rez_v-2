import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Star, Clock, Sparkles } from 'lucide-react';

function BeautyServices() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair' },
    { id: 'facial', label: 'Facial' },
    { id: 'massage', label: 'Massage' },
    { id: 'manicure', label: 'Manicure & Pedicure' },
    { id: 'makeup', label: 'Makeup' }
  ];

  const services = [
    {
      id: 1,
      name: 'Hair Cut & Styling',
      category: 'hair',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400',
      duration: '45 mins',
      price: 800,
      rezPrice: 640,
      rating: 4.8,
      reviews: 456,
      cashback: 12,
      coins: 80,
      popular: true
    },
    {
      id: 2,
      name: 'Full Body Massage',
      category: 'massage',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400',
      duration: '90 mins',
      price: 2999,
      rezPrice: 2499,
      rating: 5.0,
      reviews: 187,
      cashback: 20,
      coins: 200,
      popular: true
    },
    {
      id: 3,
      name: 'Gold Facial',
      category: 'facial',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400',
      duration: '60 mins',
      price: 1800,
      rezPrice: 1440,
      rating: 4.9,
      reviews: 234,
      cashback: 15,
      coins: 150,
      popular: false
    },
    {
      id: 4,
      name: 'Manicure + Pedicure',
      category: 'manicure',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400',
      duration: '60 mins',
      price: 1200,
      rezPrice: 960,
      rating: 4.7,
      reviews: 312,
      cashback: 10,
      coins: 100,
      popular: false
    },
    {
      id: 5,
      name: 'Bridal Makeup',
      category: 'makeup',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400',
      duration: '120 mins',
      price: 15000,
      rezPrice: 12000,
      rating: 4.9,
      reviews: 89,
      cashback: 25,
      coins: 500,
      popular: true
    },
    {
      id: 6,
      name: 'Hair Spa Treatment',
      category: 'hair',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
      duration: '75 mins',
      price: 2500,
      rezPrice: 2000,
      rating: 4.8,
      reviews: 276,
      cashback: 15,
      coins: 180,
      popular: false
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="px-4 py-4">
          <div className="flex items-center gap-3 mb-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 rounded-full hover:bg-white/20 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-h3 font-poppins text-white">Beauty Services</h1>
              <p className="text-xs text-white/80">Professional treatments</p>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="px-4 pb-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-white text-pink-600'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-4 space-y-3">
        {/* Popular Services Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-rez-navy dark:text-white">Most Booked</h3>
          </div>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">
            {services.filter(s => s.popular).length} popular services this week
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-3">
          {filteredServices.map(service => (
            <div
              key={service.id}
              onClick={() => navigate(`/beauty/service/${service.id}`)}
              className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-pink-500 transition-all active:scale-98 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-32 object-cover"
                />

                {service.popular && (
                  <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-white fill-white" />
                    <span className="text-xs font-bold text-white">Popular</span>
                  </div>
                )}

                {/* Discount Badge */}
                <div className="absolute bottom-2 left-2 px-2 py-1 rounded-full bg-emerald-500">
                  <p className="text-xs font-bold text-white">
                    {Math.round(((service.price - service.rezPrice) / service.price) * 100)}% OFF
                  </p>
                </div>
              </div>

              <div className="p-3">
                <h3 className="font-bold text-sm text-rez-navy dark:text-white mb-1 line-clamp-1">
                  {service.name}
                </h3>

                {/* Duration & Rating */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-0.5">
                    <Clock className="w-3 h-3 text-rez-gray-600 dark:text-gray-400" />
                    <span className="text-xs text-rez-gray-600 dark:text-gray-400">{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-xs text-rez-gray-600 dark:text-gray-400">{service.rating}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-rez-navy dark:text-white">
                      ₹{service.rezPrice.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-xs text-rez-gray-500 dark:text-gray-400 line-through">
                    ₹{service.price.toLocaleString()}
                  </span>
                </div>

                {/* Rewards */}
                <div className="grid grid-cols-2 gap-1">
                  <div className="px-2 py-1 rounded bg-emerald-500/20">
                    <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {service.cashback}% back
                    </p>
                  </div>
                  <div className="px-2 py-1 rounded bg-amber-500/20">
                    <p className="text-xs font-bold text-amber-600 dark:text-amber-400">
                      +{service.coins}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BeautyServices;
