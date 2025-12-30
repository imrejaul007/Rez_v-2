import { useState } from 'react';
import { Plus, Upload, Search, Filter, Grid3x3, List, Shirt, TrendingUp, Calendar, Trash2, Edit2, Eye, Camera } from 'lucide-react';

export default function VirtualWardrobe() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Mock wardrobe data
  const [wardrobeItems, setWardrobeItems] = useState([
    {
      id: 'W001',
      name: 'Black Linen Shirt',
      category: 'tops',
      subCategory: 'shirt',
      brand: 'FabIndia',
      color: 'Black',
      season: 'all-season',
      occasions: ['work', 'casual'],
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
      purchaseDate: '2024-08-15',
      wornCount: 12,
      lastWorn: '2025-01-10',
      sustainabilityScore: 85,
      source: 'order'
    },
    {
      id: 'W002',
      name: 'Blue Denim Jeans',
      category: 'bottoms',
      subCategory: 'jeans',
      brand: 'Levis',
      color: 'Blue',
      season: 'all-season',
      occasions: ['casual', 'party'],
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop',
      purchaseDate: '2024-07-20',
      wornCount: 18,
      lastWorn: '2025-01-12',
      sustainabilityScore: 70,
      source: 'order'
    },
    {
      id: 'W003',
      name: 'White Sneakers',
      category: 'shoes',
      subCategory: 'sneakers',
      brand: 'Nike',
      color: 'White',
      season: 'all-season',
      occasions: ['casual', 'fitness'],
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop',
      purchaseDate: '2024-09-05',
      wornCount: 25,
      lastWorn: '2025-01-14',
      sustainabilityScore: 60,
      source: 'manual'
    },
    {
      id: 'W004',
      name: 'Ethnic Kurta Set',
      category: 'ethnic',
      subCategory: 'kurta',
      brand: 'Manyavar',
      color: 'Maroon',
      season: 'winter',
      occasions: ['wedding', 'party'],
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop',
      purchaseDate: '2024-10-12',
      wornCount: 3,
      lastWorn: '2024-12-25',
      sustainabilityScore: 75,
      source: 'order'
    }
  ]);

  const categories = [
    { id: 'all', label: 'All Items', count: wardrobeItems.length, icon: Grid3x3 },
    { id: 'tops', label: 'Tops', count: wardrobeItems.filter(i => i.category === 'tops').length, icon: Shirt },
    { id: 'bottoms', label: 'Bottoms', count: wardrobeItems.filter(i => i.category === 'bottoms').length, icon: Shirt },
    { id: 'ethnic', label: 'Ethnic', count: wardrobeItems.filter(i => i.category === 'ethnic').length, icon: Shirt },
    { id: 'shoes', label: 'Shoes', count: wardrobeItems.filter(i => i.category === 'shoes').length, icon: Shirt },
    { id: 'accessories', label: 'Accessories', count: wardrobeItems.filter(i => i.category === 'accessories').length, icon: Shirt }
  ];

  const wardrobeStats = {
    totalItems: wardrobeItems.length,
    totalValue: 125000,
    avgWornCount: Math.round(wardrobeItems.reduce((sum, item) => sum + item.wornCount, 0) / wardrobeItems.length),
    leastWorn: wardrobeItems.filter(item => item.wornCount < 5).length,
    sustainabilityScore: Math.round(wardrobeItems.reduce((sum, item) => sum + item.sustainabilityScore, 0) / wardrobeItems.length)
  };

  const filteredItems = wardrobeItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDaysSinceWorn = (lastWorn) => {
    const days = Math.floor((new Date() - new Date(lastWorn)) / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    return `${Math.floor(days / 30)} months ago`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Virtual Wardrobe</h1>
              <p className="text-gray-500 mt-1">Manage your fashion collection digitally</p>
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              Add Item
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-5 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
              <div className="text-2xl font-bold text-purple-900">{wardrobeStats.totalItems}</div>
              <div className="text-sm text-purple-600">Total Items</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
              <div className="text-2xl font-bold text-blue-900">₹{(wardrobeStats.totalValue / 1000).toFixed(0)}K</div>
              <div className="text-sm text-blue-600">Wardrobe Value</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
              <div className="text-2xl font-bold text-green-900">{wardrobeStats.avgWornCount}x</div>
              <div className="text-sm text-green-600">Avg Worn</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4">
              <div className="text-2xl font-bold text-orange-900">{wardrobeStats.leastWorn}</div>
              <div className="text-sm text-orange-600">Rarely Worn</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4">
              <div className="text-2xl font-bold text-teal-900">{wardrobeStats.sustainabilityScore}/100</div>
              <div className="text-sm text-teal-600">Eco Score</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters Bar */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or brand..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2 border border-gray-300 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-600'}`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-600'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    selectedCategory === cat.id ? 'bg-white/20' : 'bg-gray-200'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Items Grid */}
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all group">
                {/* Image */}
                <div className="relative aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Wear Count Badge */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {item.wornCount}x worn
                  </div>

                  {/* Sustainability Badge */}
                  <div className={`absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-semibold ${
                    item.sustainabilityScore >= 80 ? 'bg-green-500' :
                    item.sustainabilityScore >= 60 ? 'bg-yellow-500' : 'bg-gray-500'
                  } text-white`}>
                    {item.sustainabilityScore}/100
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Eye className="w-5 h-5 text-gray-900" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Edit2 className="w-5 h-5 text-gray-900" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.brand} • {item.color}</p>

                  {/* Occasion Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.occasions.slice(0, 2).map((occasion, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs">
                        {occasion}
                      </span>
                    ))}
                  </div>

                  {/* Last Worn */}
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    Last worn {getDaysSinceWorn(item.lastWorn)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-3">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.brand} • {item.color} • {item.category}</p>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <div className="text-gray-500">Worn</div>
                    <div className="font-semibold">{item.wornCount}x</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Last Worn</div>
                    <div className="font-semibold">{getDaysSinceWorn(item.lastWorn)}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Eco Score</div>
                    <div className="font-semibold">{item.sustainabilityScore}/100</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Eye className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Edit2 className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Shirt className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Add Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Add Item to Wardrobe</h2>

            <div className="space-y-4">
              {/* Upload Options */}
              <div className="grid grid-cols-2 gap-4">
                <button className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-purple-600 hover:bg-purple-50 transition-all">
                  <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-700">Take Photo</div>
                  <div className="text-xs text-gray-500 mt-1">Use camera</div>
                </button>
                <button className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-purple-600 hover:bg-purple-50 transition-all">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-700">Upload Photo</div>
                  <div className="text-xs text-gray-500 mt-1">From gallery</div>
                </button>
              </div>

              <div className="text-center text-sm text-gray-500">or</div>

              <button className="w-full border border-gray-300 rounded-xl p-4 hover:bg-gray-50 transition-all">
                <div className="font-medium text-gray-900">Import from ReZ Orders</div>
                <div className="text-sm text-gray-500 mt-1">Auto-add items from your purchase history</div>
              </button>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
