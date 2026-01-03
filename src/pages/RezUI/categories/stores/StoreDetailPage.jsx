import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStoreTypeConfig, filterProductsByMode } from '../config/storeTypes';
import StoreHeader from '../components/store/StoreHeader';
import StoreQuickActions from '../components/store/StoreQuickActions';
import ProductCard from '../components/store/ProductCard';
import { useApp } from '../contexts/AppContext';
import { useUser } from '../contexts/UserContext';

// Mock store data - Replace with actual API
const getMockStore = (id, type) => ({
  id,
  name: type === '60min' ? 'BigBasket Express' :
        type === 'luxury' ? 'Louis Vuitton' :
        type === 'organic' ? 'Organic Valley' :
        type === 'rental' ? 'RentOMojo' :
        type === 'sample' ? 'Try & Buy Store' :
        'Super Store',
  category: type === '60min' ? 'Groceries & Essentials' :
            type === 'luxury' ? 'Luxury Fashion' :
            type === 'organic' ? 'Organic Products' :
            type === 'rental' ? 'Furniture & Electronics' :
            'Retail',
  image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800',
  rating: 4.6,
  reviews: 2340,
  cashback: type === 'luxury' ? 30 : type === '60min' ? 20 : 15,
  distance: '1.2 km',
  deliveryTime: type === '60min' ? '45-60 mins' : '2-3 days',
  isHalal: type !== 'luxury',
  isVegan: type === 'organic' || type === 'sample',
  isVegetarian: true,
  is60Min: type === '60min',
  isPrive: type === 'luxury',
  offers: [
    'Flat 20% off on first order',
    'Free delivery above ₹500',
    'Extra 5% with ReZ Wallet'
  ],
  tags: ['Fast Delivery', 'Top Rated', 'Verified'],
});

// Mock products
const getMockProducts = (storeType) => {
  const base = [
    {
      id: 1,
      name: storeType === 'luxury' ? 'Designer Handbag' :
            storeType === 'organic' ? 'Organic Quinoa' :
            storeType === 'rental' ? 'Premium Sofa' :
            storeType === 'sample' ? 'Trial Skincare Kit' :
            'Fresh Vegetables',
      description: storeType === 'rental' ? 'Rent for ₹500/month' : 'Premium quality product',
      price: storeType === 'luxury' ? 45000 :
             storeType === 'rental' ? 500 :
             storeType === 'sample' ? 1 :
             299,
      originalPrice: storeType === 'luxury' ? 55000 :
                      storeType === 'rental' ? null :
                      storeType === 'sample' ? 499 :
                      349,
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300',
      badges: storeType === 'sample' ? ['Try @ ₹1'] : ['Bestseller'],
      isHalal: true,
      isVegan: storeType === 'organic',
      isVegetarian: true,
      isOrganic: storeType === 'organic',
      isPrive: storeType === 'luxury',
      coins: Math.floor((storeType === 'luxury' ? 45000 : 299) * 0.15),
      delivery: storeType === '60min' ? '45 mins' : null,
      rental: storeType === 'rental' ? {
        daily: 50,
        weekly: 300,
        monthly: 500,
        deposit: 2000,
      } : null,
    },
    {
      id: 2,
      name: storeType === 'luxury' ? 'Luxury Watch' :
            storeType === 'organic' ? 'Organic Honey' :
            storeType === 'rental' ? 'MacBook Pro' :
            storeType === 'sample' ? 'Trial Makeup Set' :
            'Fresh Fruits',
      description: storeType === 'rental' ? 'Rent for ₹2000/month' : 'Top quality item',
      price: storeType === 'luxury' ? 125000 :
             storeType === 'rental' ? 2000 :
             storeType === 'sample' ? 1 :
             399,
      originalPrice: storeType === 'luxury' ? 150000 :
                      storeType === 'rental' ? null :
                      storeType === 'sample' ? 999 :
                      499,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300',
      badges: storeType === 'luxury' ? ['Exclusive'] : storeType === 'sample' ? ['Try @ ₹1'] : ['Fresh'],
      isHalal: false,
      isVegan: true,
      isVegetarian: true,
      isOrganic: storeType === 'organic',
      isPrive: storeType === 'luxury',
      coins: Math.floor((storeType === 'luxury' ? 125000 : 399) * 0.15),
      delivery: storeType === '60min' ? '30 mins' : null,
      rental: storeType === 'rental' ? {
        daily: 150,
        weekly: 900,
        monthly: 2000,
        deposit: 10000,
      } : null,
    },
  ];

  return base;
};

const StoreDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { filters } = useApp();
  const { isStoresSaved, toggleSavedStore } = useUser();

  // Get store type from URL or store data
  const [storeType, setStoreType] = useState('convenience');
  const [activeTab, setActiveTab] = useState('products');

  // Get configuration
  const storeConfig = getStoreTypeConfig(storeType);

  // Mock data - replace with actual API calls
  const store = getMockStore(id, storeType);
  const rawProducts = getMockProducts(storeType);

  // Apply mode filtering
  const activeModes = Object.keys(filters).filter(key => filters[key]);
  const products = filterProductsByMode(rawProducts, activeModes);

  const isSaved = isStoresSaved(id);

  const handleToggleSave = () => {
    toggleSavedStore(id);
  };

  const handleShare = () => {
    // Implement share functionality
    if (navigator.share) {
      navigator.share({
        title: store.name,
        text: `Check out ${store.name} on ReZ! Earn ${store.cashback}% cashback.`,
        url: window.location.href,
      });
    }
  };

  const handleAction = (actionId) => {
    console.log('Action:', actionId);
    // Implement action handlers
    switch (actionId) {
      case 'pay':
        navigate(`/checkout/${id}`);
        break;
      case 'lock':
        console.log('Lock price feature');
        break;
      case 'upload':
        navigate('/upload-bill');
        break;
      case 'book':
        navigate(`/book/${id}`);
        break;
      case 'concierge':
        navigate('/concierge');
        break;
      default:
        break;
    }
  };

  // Tabs based on store config
  const tabs = storeConfig.sections.map(section => ({
    id: section,
    label: section.charAt(0).toUpperCase() + section.slice(1),
  }));

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      {/* Store Header */}
      <StoreHeader
        store={store}
        storeConfig={storeConfig}
        isSaved={isSaved}
        onToggleSave={handleToggleSave}
        onShare={handleShare}
      />

      {/* Quick Actions */}
      <StoreQuickActions
        store={store}
        storeConfig={storeConfig}
        onAction={handleAction}
      />

      {/* Category Tabs */}
      <div className="sticky top-0 z-20 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="flex gap-2 px-4 py-3 overflow-x-auto hide-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all shrink-0 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${storeConfig.theme.primary} text-white`
                  : 'bg-rez-gray-100 dark:bg-dark-700 text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Active Mode Filter Badge */}
      {activeModes.length > 0 && (
        <div className="px-4 py-3 bg-emerald-50 dark:bg-emerald-900/20 border-b border-emerald-200 dark:border-emerald-800">
          <p className="text-xs text-emerald-700 dark:text-emerald-400">
            🔍 Showing {activeModes.map(m => m.charAt(0).toUpperCase() + m.slice(1)).join(', ')} items only
          </p>
        </div>
      )}

      {/* Products Section */}
      {activeTab === 'products' && (
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-rez-navy dark:text-white">
              {storeType === 'rental' ? 'Available for Rent' : 'Products'}
            </h2>
            <button className="text-sm text-emerald-500">
              Filter & Sort
            </button>
          </div>

          <div className="space-y-3">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                storeType={storeType}
                storeConfig={storeConfig}
                isHidden={product.isHidden}
                hideReason={product.hideReason}
              />
            ))}
          </div>

          {/* Empty State */}
          {products.every(p => p.isHidden) && (
            <div className="text-center py-12">
              <span className="text-5xl mb-4 block">🔍</span>
              <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-2">
                No items found
              </h3>
              <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-4">
                No products match your current mode filters
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 rounded-xl bg-emerald-500 text-white font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* Offers Section */}
      {activeTab === 'offers' && (
        <div className="px-4 py-4">
          <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-4">Special Offers</h2>
          <div className="space-y-3">
            {store.offers?.map((offer, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎉</span>
                  <div className="flex-1">
                    <p className="font-medium text-rez-navy dark:text-white mb-1">{offer}</p>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">Valid till Dec 31, 2024</p>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reviews Section */}
      {activeTab === 'reviews' && (
        <div className="px-4 py-4">
          <h2 className="text-lg font-bold text-rez-navy dark:text-white mb-4">Customer Reviews</h2>
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
                    U{i}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-rez-navy dark:text-white text-sm">User {i}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-amber-400 text-xs">★</span>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-rez-gray-600 dark:text-gray-400">2 days ago</span>
                </div>
                <p className="text-sm text-rez-gray-700 dark:text-gray-300">
                  Great experience! Fast delivery and excellent quality. Will order again.
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Info */}
      <div className="px-4 py-4 border-t border-rez-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800">
        <h3 className="font-bold text-rez-navy dark:text-white mb-3">Store Information</h3>
        <div className="space-y-2 text-sm text-rez-gray-600 dark:text-gray-400">
          <p>📍 {store.distance} from you</p>
          <p>🕐 Open: 9 AM - 9 PM</p>
          <p>📞 Contact: +91 98765 43210</p>
          <p>✅ ReZ Verified Store</p>
        </div>
      </div>
    </div>
  );
};

export default StoreDetailPage;
