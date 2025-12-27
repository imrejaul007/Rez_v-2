import { useState } from 'react';
import {
  Image, Video, Upload, X, Star, Grid, ChevronUp, ChevronDown,
  Package, DollarSign, Camera, Film, Users, Check, Eye, Heart,
  MessageSquare, Share2, Download, Trash2, Edit, Plus, FileSpreadsheet
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantContent() {
  const [activeTab, setActiveTab] = useState('catalog');

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic tomato sauce, mozzarella, and fresh basil',
      price: 399,
      category: 'Pizza',
      image: '🍕',
      available: true
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk foam',
      price: 149,
      category: 'Beverages',
      image: '☕',
      available: true
    },
    {
      id: 3,
      name: 'Caesar Salad',
      description: 'Romaine lettuce, croutons, parmesan, Caesar dressing',
      price: 299,
      category: 'Salads',
      image: '🥗',
      available: false
    },
    {
      id: 4,
      name: 'Pasta Carbonara',
      description: 'Creamy pasta with bacon and parmesan',
      price: 449,
      category: 'Pasta',
      image: '🍝',
      available: true
    }
  ]);

  const [storePhotos, setStorePhotos] = useState([
    { id: 1, url: '🏪', category: 'Storefront', isPrimary: true, order: 1 },
    { id: 2, url: '🪑', category: 'Interior', isPrimary: false, order: 2 },
    { id: 3, url: '🍕', category: 'Products', isPrimary: false, order: 3 },
    { id: 4, url: '👨‍🍳', category: 'Team', isPrimary: false, order: 4 },
    { id: 5, url: '🎉', category: 'Events', isPrimary: false, order: 5 }
  ]);

  const [storeVideos, setStoreVideos] = useState([
    { id: 1, url: '🎬', title: 'Store Tour', duration: '45s', views: 1234 },
    { id: 2, url: '🍳', title: 'Chef Preparation', duration: '30s', views: 890 }
  ]);

  const [ugcContent, setUgcContent] = useState([
    {
      id: 1,
      customer: 'John Doe',
      type: 'photo',
      content: '📸',
      caption: 'Amazing pizza experience!',
      likes: 156,
      date: '2 days ago',
      featured: false,
      permissionRequested: true,
      permissionGranted: false
    },
    {
      id: 2,
      customer: 'Jane Smith',
      type: 'video',
      content: '🎥',
      caption: 'Best coffee in town',
      likes: 234,
      date: '4 days ago',
      featured: true,
      permissionRequested: true,
      permissionGranted: true
    },
    {
      id: 3,
      customer: 'Mike Johnson',
      type: 'photo',
      content: '📷',
      caption: 'Loved the ambience',
      likes: 89,
      date: '1 week ago',
      featured: false,
      permissionRequested: false,
      permissionGranted: false
    }
  ]);

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const toggleProductAvailability = (productId) => {
    setProducts(products.map(p =>
      p.id === productId ? { ...p, available: !p.available } : p
    ));
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  const movePhoto = (photoId, direction) => {
    const photoIndex = storePhotos.findIndex(p => p.id === photoId);
    if (direction === 'up' && photoIndex > 0) {
      const newPhotos = [...storePhotos];
      [newPhotos[photoIndex], newPhotos[photoIndex - 1]] = [newPhotos[photoIndex - 1], newPhotos[photoIndex]];
      setStorePhotos(newPhotos.map((p, i) => ({ ...p, order: i + 1 })));
    } else if (direction === 'down' && photoIndex < storePhotos.length - 1) {
      const newPhotos = [...storePhotos];
      [newPhotos[photoIndex], newPhotos[photoIndex + 1]] = [newPhotos[photoIndex + 1], newPhotos[photoIndex]];
      setStorePhotos(newPhotos.map((p, i) => ({ ...p, order: i + 1 })));
    }
  };

  const setPrimaryPhoto = (photoId) => {
    setStorePhotos(storePhotos.map(p => ({
      ...p,
      isPrimary: p.id === photoId
    })));
  };

  const requestPermission = (ugcId) => {
    setUgcContent(ugcContent.map(u =>
      u.id === ugcId ? { ...u, permissionRequested: true } : u
    ));
  };

  const toggleFeature = (ugcId) => {
    setUgcContent(ugcContent.map(u =>
      u.id === ugcId && u.permissionGranted ? { ...u, featured: !u.featured } : u
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Content & Media</h1>
          <p className="text-gray-600 mt-1">Manage your store catalog, photos, videos, and customer content</p>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="flex gap-1 p-1">
            <button
              onClick={() => setActiveTab('catalog')}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'catalog'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Package className="w-5 h-5 inline mr-2" />
              Product Catalog
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'photos'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Image className="w-5 h-5 inline mr-2" />
              Store Photos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'videos'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Video className="w-5 h-5 inline mr-2" />
              Store Videos
            </button>
            <button
              onClick={() => setActiveTab('ugc')}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'ugc'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Users className="w-5 h-5 inline mr-2" />
              Customer Content
            </button>
          </div>
        </div>

        {/* Product Catalog Tab */}
        {activeTab === 'catalog' && (
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Product/Service Catalog</h2>
                  <p className="text-sm text-gray-600 mt-1">{products.length} items • {products.filter(p => p.available).length} available</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                    <FileSpreadsheet className="w-5 h-5" />
                    Import CSV
                  </button>
                  <button
                    onClick={() => setShowAddProduct(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    <Plus className="w-5 h-5" />
                    Add Item
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-indigo-300 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-3xl">
                        {product.image}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingProduct(product)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div>
                        <p className="text-xs text-gray-500">{product.category}</p>
                        <p className="text-lg font-bold text-gray-900">₹{product.price}</p>
                      </div>
                      <button
                        onClick={() => toggleProductAvailability(product.id)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium ${
                          product.available
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {product.available ? 'Available' : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Store Photos Tab */}
        {activeTab === 'photos' && (
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Store Photos</h2>
                  <p className="text-sm text-gray-600 mt-1">{storePhotos.length}/20 photos uploaded</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  <Upload className="w-5 h-5" />
                  Upload Photos
                </button>
              </div>

              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-2">Categories:</p>
                <div className="flex gap-2 flex-wrap">
                  {['Storefront', 'Interior', 'Products', 'Team', 'Events'].map((category) => (
                    <span key={category} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {category} ({storePhotos.filter(p => p.category === category).length})
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {storePhotos.map((photo) => (
                  <div key={photo.id} className="relative bg-gray-50 rounded-xl border border-gray-200 overflow-hidden group">
                    <div className="aspect-square flex items-center justify-center text-6xl">
                      {photo.url}
                    </div>
                    {photo.isPrimary && (
                      <div className="absolute top-2 left-2 px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded">
                        PRIMARY
                      </div>
                    )}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex gap-1">
                        <button
                          onClick={() => movePhoto(photo.id, 'up')}
                          className="p-1 bg-white rounded shadow-lg hover:bg-gray-100"
                        >
                          <ChevronUp className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => movePhoto(photo.id, 'down')}
                          className="p-1 bg-white rounded shadow-lg hover:bg-gray-100"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="p-3 bg-white border-t border-gray-200">
                      <p className="text-xs text-gray-600 mb-2">{photo.category}</p>
                      <div className="flex gap-2">
                        {!photo.isPrimary && (
                          <button
                            onClick={() => setPrimaryPhoto(photo.id)}
                            className="flex-1 px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded hover:bg-indigo-200"
                          >
                            Set Primary
                          </button>
                        )}
                        <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 cursor-pointer transition-colors">
                  <Camera className="w-8 h-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">Add Photo</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Store Videos Tab */}
        {activeTab === 'videos' && (
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Store Videos</h2>
                  <p className="text-sm text-gray-600 mt-1">{storeVideos.length}/3 videos uploaded • Max 60s each</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  <Upload className="w-5 h-5" />
                  Upload Video
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {storeVideos.map((video) => (
                  <div key={video.id} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                    <div className="aspect-video flex items-center justify-center text-6xl bg-gradient-to-br from-purple-100 to-pink-100">
                      {video.url}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900">{video.title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Film className="w-4 h-4" />
                          {video.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {video.views}
                        </span>
                      </div>
                      <button className="mt-3 w-full px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 text-sm font-medium">
                        <Trash2 className="w-4 h-4 inline mr-2" />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
                <div className="aspect-video flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 cursor-pointer transition-colors">
                  <Film className="w-8 h-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">Add Video</p>
                  <p className="text-xs text-gray-500">Max 60 seconds</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* User Generated Content Tab */}
        {activeTab === 'ugc' && (
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">User Generated Content</h2>
                <p className="text-sm text-gray-600 mt-1">Customer reels and photos featuring your store</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ugcContent.map((ugc) => (
                  <div key={ugc.id} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                    <div className="aspect-square flex items-center justify-center text-6xl bg-gradient-to-br from-blue-100 to-purple-100 relative">
                      {ugc.content}
                      {ugc.featured && (
                        <div className="absolute top-2 left-2 px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded">
                          FEATURED
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full"></div>
                        <div>
                          <p className="font-medium text-gray-900">{ugc.customer}</p>
                          <p className="text-xs text-gray-500">{ugc.date}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{ugc.caption}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {ugc.likes}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          ugc.type === 'photo' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                        }`}>
                          {ugc.type}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {!ugc.permissionRequested ? (
                          <button
                            onClick={() => requestPermission(ugc.id)}
                            className="flex-1 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium"
                          >
                            Request Permission
                          </button>
                        ) : ugc.permissionGranted ? (
                          <>
                            <button
                              onClick={() => toggleFeature(ugc.id)}
                              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium ${
                                ugc.featured
                                  ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                              }`}
                            >
                              {ugc.featured ? 'Unfeature' : 'Feature'}
                            </button>
                            <button className="px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 text-sm font-medium">
                              <MessageSquare className="w-4 h-4 inline" />
                            </button>
                          </>
                        ) : (
                          <div className="flex-1 px-3 py-2 bg-yellow-100 text-yellow-700 rounded-lg text-sm font-medium text-center">
                            Pending Approval
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
