import { useState } from 'react';
import { Scissors, Plus, Edit, Trash2, Copy, Clock, DollarSign, Tag, Users, Star, Search, Filter, Download, Upload, Eye, Image as ImageIcon, Package } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantServiceCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddService, setShowAddService] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Service categories
  const categories = [
    { id: 'all', name: 'All Services', icon: Package, count: 24 },
    { id: 'hair', name: 'Hair Services', icon: Scissors, count: 8 },
    { id: 'facial', name: 'Facial & Skin', icon: Star, count: 6 },
    { id: 'spa', name: 'Spa & Massage', icon: Users, count: 5 },
    { id: 'makeup', name: 'Makeup', icon: ImageIcon, count: 3 },
    { id: 'nails', name: 'Nails', icon: Tag, count: 2 }
  ];

  // Mock services
  const [services, setServices] = useState([
    {
      id: 'svc-001',
      name: 'Haircut & Styling',
      category: 'hair',
      description: 'Professional haircut with styling for all hair types',
      duration: 45,
      price: 499,
      discountPrice: null,
      staffRequired: 1,
      image: null,
      rating: 4.8,
      reviews: 156,
      popular: true,
      active: true,
      resources: ['Scissors', 'Blow Dryer', 'Hair Products'],
      preparationTime: 5
    },
    {
      id: 'svc-002',
      name: 'Hair Coloring',
      category: 'hair',
      description: 'Full hair coloring with premium products',
      duration: 120,
      price: 2499,
      discountPrice: 1999,
      staffRequired: 1,
      image: null,
      rating: 4.6,
      reviews: 89,
      popular: true,
      active: true,
      resources: ['Color Products', 'Foils', 'Processing Bowl'],
      preparationTime: 10
    },
    {
      id: 'svc-003',
      name: 'Keratin Treatment',
      category: 'hair',
      description: 'Smoothening and strengthening hair treatment',
      duration: 180,
      price: 3999,
      discountPrice: null,
      staffRequired: 1,
      image: null,
      rating: 4.9,
      reviews: 67,
      popular: true,
      active: true,
      resources: ['Keratin Solution', 'Flat Iron', 'Blow Dryer'],
      preparationTime: 15
    },
    {
      id: 'svc-004',
      name: 'Gold Facial',
      category: 'facial',
      description: 'Luxury gold facial for radiant skin',
      duration: 90,
      price: 1799,
      discountPrice: 1499,
      staffRequired: 1,
      image: null,
      rating: 4.7,
      reviews: 124,
      popular: true,
      active: true,
      resources: ['Gold Facial Kit', 'Steamer', 'Towels'],
      preparationTime: 10
    },
    {
      id: 'svc-005',
      name: 'Anti-Aging Facial',
      category: 'facial',
      description: 'Advanced facial treatment for mature skin',
      duration: 75,
      price: 1999,
      discountPrice: null,
      staffRequired: 1,
      image: null,
      rating: 4.8,
      reviews: 98,
      popular: false,
      active: true,
      resources: ['Anti-aging Serum', 'Face Mask', 'Steamer'],
      preparationTime: 10
    },
    {
      id: 'svc-006',
      name: 'Full Body Massage',
      category: 'spa',
      description: 'Relaxing full body massage therapy',
      duration: 60,
      price: 1299,
      discountPrice: null,
      staffRequired: 1,
      image: null,
      rating: 4.9,
      reviews: 234,
      popular: true,
      active: true,
      resources: ['Massage Oil', 'Towels', 'Aromatherapy'],
      preparationTime: 5
    },
    {
      id: 'svc-007',
      name: 'Thai Massage',
      category: 'spa',
      description: 'Traditional Thai massage therapy',
      duration: 90,
      price: 1799,
      discountPrice: 1599,
      staffRequired: 1,
      image: null,
      rating: 4.7,
      reviews: 145,
      popular: true,
      active: true,
      resources: ['Massage Mat', 'Essential Oils', 'Towels'],
      preparationTime: 10
    },
    {
      id: 'svc-008',
      name: 'Bridal Makeup',
      category: 'makeup',
      description: 'Complete bridal makeup with hairstyling',
      duration: 180,
      price: 4999,
      discountPrice: null,
      staffRequired: 2,
      image: null,
      rating: 4.9,
      reviews: 78,
      popular: true,
      active: true,
      resources: ['Makeup Kit', 'Hair Tools', 'Accessories'],
      preparationTime: 15
    },
    {
      id: 'svc-009',
      name: 'Party Makeup',
      category: 'makeup',
      description: 'Glamorous makeup for parties and events',
      duration: 60,
      price: 1499,
      discountPrice: 1299,
      staffRequired: 1,
      image: null,
      rating: 4.6,
      reviews: 112,
      popular: false,
      active: true,
      resources: ['Makeup Kit', 'Hair Accessories'],
      preparationTime: 5
    },
    {
      id: 'svc-010',
      name: 'Manicure & Pedicure',
      category: 'nails',
      description: 'Complete nail care with polish',
      duration: 60,
      price: 799,
      discountPrice: null,
      staffRequired: 1,
      image: null,
      rating: 4.5,
      reviews: 189,
      popular: true,
      active: true,
      resources: ['Nail Tools', 'Polish', 'Cuticle Care'],
      preparationTime: 5
    }
  ]);

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate metrics
  const metrics = {
    total: services.length,
    active: services.filter(s => s.active).length,
    popular: services.filter(s => s.popular).length,
    avgPrice: Math.round(services.reduce((sum, s) => sum + s.price, 0) / services.length),
    avgDuration: Math.round(services.reduce((sum, s) => sum + s.duration, 0) / services.length),
    avgRating: (services.reduce((sum, s) => sum + s.rating, 0) / services.length).toFixed(1)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Service Catalog</h1>
              <p className="text-gray-600">Manage your salon services, pricing, and availability</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Bulk Import
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export
              </button>
              <button
                onClick={() => setShowAddService(true)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Service
              </button>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">Total Services</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{metrics.total}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <p className="text-sm text-green-600">Active</p>
            <p className="text-2xl font-bold text-green-700 mt-1">{metrics.active}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-indigo-200">
            <p className="text-sm text-indigo-600">Popular</p>
            <p className="text-2xl font-bold text-indigo-700 mt-1">{metrics.popular}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">Avg Price</p>
            <p className="text-xl font-bold text-gray-900 mt-1">₹{metrics.avgPrice}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">Avg Duration</p>
            <p className="text-xl font-bold text-gray-900 mt-1">{metrics.avgDuration}m</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-600">Avg Rating</p>
            <p className="text-2xl font-bold text-yellow-700 mt-1 flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              {metrics.avgRating}
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6 flex gap-3 overflow-x-auto pb-2">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-lg border-2 transition-all whitespace-nowrap flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-50 border-indigo-600 text-indigo-700'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-5 h-5" />
                <div>
                  <div className="font-semibold">{cat.name}</div>
                  <div className="text-xs">{cat.count} services</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {/* Service Header */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{service.name}</h3>
                    <p className="text-sm text-indigo-100 mt-1">{service.category.charAt(0).toUpperCase() + service.category.slice(1)}</p>
                  </div>
                  {service.popular && (
                    <span className="px-2 py-1 bg-yellow-400 text-yellow-900 rounded text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
              </div>

              {/* Service Details */}
              <div className="p-4 space-y-3">
                <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{service.duration} mins</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="text-sm font-semibold">{service.rating}</span>
                    <span className="text-xs text-gray-500">({service.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div>
                    {service.discountPrice ? (
                      <div>
                        <span className="text-lg font-bold text-indigo-600">₹{service.discountPrice}</span>
                        <span className="text-sm text-gray-400 line-through ml-2">₹{service.price}</span>
                      </div>
                    ) : (
                      <span className="text-lg font-bold text-gray-900">₹{service.price}</span>
                    )}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    service.active
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {service.active ? 'Active' : 'Inactive'}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>{service.staffRequired} staff required</span>
                </div>

                <div className="flex gap-2 pt-3">
                  <button className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <Scissors className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-3xl w-full p-6 my-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{selectedService.name}</h3>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>

            <div className="space-y-6">
              {/* Service Info */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Category</p>
                  <p className="font-semibold mt-1">{selectedService.category.charAt(0).toUpperCase() + selectedService.category.slice(1)}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold mt-1">{selectedService.duration} minutes</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Staff Required</p>
                  <p className="font-semibold mt-1">{selectedService.staffRequired}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Description</p>
                <p className="text-gray-900">{selectedService.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Pricing</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    {selectedService.discountPrice ? (
                      <div>
                        <p className="text-2xl font-bold text-indigo-600">₹{selectedService.discountPrice}</p>
                        <p className="text-sm text-gray-400 line-through">₹{selectedService.price}</p>
                        <p className="text-xs text-green-600 mt-1">
                          Save ₹{selectedService.price - selectedService.discountPrice}
                        </p>
                      </div>
                    ) : (
                      <p className="text-2xl font-bold text-gray-900">₹{selectedService.price}</p>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Rating</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                      <span className="text-2xl font-bold">{selectedService.rating}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{selectedService.reviews} reviews</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Resources Required</p>
                <div className="flex flex-wrap gap-2">
                  {selectedService.resources.map((resource, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                      {resource}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2">
                  <Edit className="w-5 h-5" />
                  Edit Service
                </button>
                <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                  <Copy className="w-5 h-5" />
                  Duplicate
                </button>
                <button className="px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
