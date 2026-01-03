import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Star, MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { getStoreById } from '../data/stores';
import { useApp } from '../contexts/AppContext';
import { useUser } from '../contexts/UserContext';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import ProductCard from '../components/store/ProductCard';

// Mock products for demo
const mockProducts = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Aromatic basmati rice with tender chicken pieces",
    price: 299,
    originalPrice: 349,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200",
    badges: ["Bestseller", "Spicy"],
    isHalal: true,
    isVegan: false
  },
  {
    id: 2,
    name: "Veg Dum Biryani",
    description: "Traditional biryani with seasonal vegetables",
    price: 249,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200",
    badges: ["Vegetarian"],
    isHalal: true,
    isVegan: false
  },
  {
    id: 3,
    name: "Mutton Biryani",
    description: "Slow-cooked mutton in fragrant spices",
    price: 399,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=200",
    badges: ["Premium"],
    isHalal: true,
    isVegan: false
  }
];

const StorePage = () => {
  const { id } = useParams();
  const store = getStoreById(id);
  const { filters } = useApp();
  const { isStoresSaved, toggleSavedStore } = useUser();

  if (!store) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <span className="text-4xl mb-4">🔍</span>
        <h2 className="text-xl font-semibold text-rez-navy dark:text-white mb-2">Store not found</h2>
        <p className="text-rez-gray-600 dark:text-gray-400 text-center mb-4">
          This store might have been removed or is temporarily unavailable.
        </p>
        <Link to="/" className="text-emerald-400">Go back home</Link>
      </div>
    );
  }

  const isSaved = isStoresSaved(store.id);

  // Filter products based on mode
  const getFilteredProducts = () => {
    return mockProducts.map(product => {
      let isHidden = false;
      let hideReason = null;

      if (filters.halal && !product.isHalal) {
        isHidden = true;
        hideReason = "Not halal-certified";
      }
      if (filters.vegan && !product.isVegan) {
        isHidden = true;
        hideReason = "Contains animal products";
      }

      return { ...product, isHidden, hideReason };
    });
  };

  const products = getFilteredProducts();

  return (
    <div className="pb-24">
      {/* Hero Image */}
      <div className="relative h-56">
        <img
          src={store.image}
          alt={store.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-4 left-4 p-2 rounded-full bg-white dark:bg-black/50 backdrop-blur"
        >
          <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
        </Link>

        {/* Actions */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => toggleSavedStore(store.id)}
            className="p-2 rounded-full bg-white dark:bg-black/50 backdrop-blur"
          >
            <Heart className={`w-5 h-5 ${isSaved ? 'fill-red-500 text-red-500' : 'text-white'}`} />
          </button>
          <button className="p-2 rounded-full bg-white dark:bg-black/50 backdrop-blur">
            <Share2 className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
        </div>

        {/* Cashback Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="px-3 py-1.5 rounded-full bg-emerald-500/90 backdrop-blur">
            <span className="text-sm font-semibold text-rez-navy dark:text-white">
              Earn {store.cashback}% cashback
            </span>
          </div>
        </div>
      </div>

      {/* Store Info */}
      <div className="px-4 pt-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-rez-navy dark:text-white">{store.name}</h1>
            <p className="text-rez-gray-600 dark:text-gray-400">{store.category}</p>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-rez-gray-100 dark:bg-white/10">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="font-medium text-rez-navy dark:text-white">{store.rating}</span>
            <span className="text-rez-gray-600 dark:text-gray-400 text-sm">({store.reviews})</span>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-3">
          {store.isHalal && <Badge variant="halal">🕌 Halal Verified</Badge>}
          {store.isVegan && <Badge variant="vegan">🌱 Vegan</Badge>}
          {store.isVegetarian && <Badge variant="default">🥗 Vegetarian</Badge>}
          {store.is60Min && <Badge variant="fast">⚡ 60-min Delivery</Badge>}
          {store.isPrive && <Badge variant="prive">✨ Privé</Badge>}
        </div>

        {/* Quick Info */}
        <div className="flex flex-wrap gap-4 mt-4 text-sm text-rez-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {store.distance}
          </span>
          {store.deliveryTime && (
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {store.deliveryTime}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            Call
          </span>
          <span className="flex items-center gap-1">
            <ExternalLink className="w-4 h-4" />
            Directions
          </span>
        </div>

        {/* Offers */}
        {store.offers && store.offers.length > 0 && (
          <div className="mt-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
            <h3 className="font-medium text-amber-400 mb-2">Available Offers</h3>
            <ul className="space-y-1">
              {store.offers.map((offer, i) => (
                <li key={i} className="text-sm text-rez-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <span className="text-amber-400">•</span>
                  {offer}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {store.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-rez-gray-50 dark:bg-white/5 text-sm text-rez-gray-600 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Menu / Products */}
      <div className="mt-6">
        <div className="px-4 mb-3">
          <h2 className="text-lg font-semibold text-rez-navy dark:text-white">Menu</h2>
          <p className="text-sm text-rez-gray-600 dark:text-gray-400">Tap to add items</p>
        </div>

        <div className="space-y-3 px-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isHidden={product.isHidden}
              hideReason={product.hideReason}
            />
          ))}
        </div>
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-20 left-0 right-0 p-4 glass">
        <Button variant="primary" fullWidth>
          Pay with ReZ Wallet
        </Button>
        <p className="text-center text-xs text-rez-gray-600 dark:text-gray-400 mt-2">
          Best savings auto-applied for you
        </p>
      </div>
    </div>
  );
};

export default StorePage;
