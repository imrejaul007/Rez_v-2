import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, MapPin, Star, Coins, TrendingUp, Users, Store, Truck } from 'lucide-react';

const productData = {
  1: {
    name: 'Chicken Biryani',
    store: 'Paradise Biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800',
    images: [
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800',
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800',
    ],
    price: 350,
    originalPrice: 450,
    rating: 4.7,
    reviews: 234,
    cashback: '15%',
    coins: 52,
    distance: '0.8 km',
    description: 'Authentic Hyderabadi chicken biryani made with basmati rice, tender chicken pieces, and aromatic spices.',
    tags: ['Halal', 'Spicy', 'Hot Deal'],
    availability: {
      type: 'offline',
      status: 'Available now',
      delivery: 'Pickup in 20 mins'
    },
    trending: {
      buyers: 234,
      viewers: 456,
      saves: 89
    },
    highlights: [
      'Fresh ingredients',
      'Authentic recipe',
      'Generous portions',
      'Quick service'
    ]
  }
};

const ExploreProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const product = productData[productId] || productData[1];
  const savings = product.originalPrice - product.price;
  const totalEarnings = Math.round(product.price * 0.15) + product.coins;

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-32 transition-colors">
      {/* Header */}
      <div className="sticky top-0 z-50 glass border-b border-rez-gray-200 dark:border-white/10">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSaved(!isSaved)}
                className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 active:scale-95 transition-all"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isSaved
                      ? 'fill-red-500 text-red-500'
                      : 'text-rez-navy dark:text-white'
                  }`}
                />
              </button>
              <button className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 active:scale-95 transition-all">
                <Share2 className="w-5 h-5 text-rez-navy dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative">
        <img
          src={product.images[activeImage]}
          alt={product.name}
          className="w-full aspect-square object-cover"
        />
        {product.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeImage === index
                    ? 'bg-white w-6'
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
        {/* Tags on Image */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-semibold text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-4">
        {/* Product Name & Rating */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <h1 className="text-h2 font-poppins text-rez-navy dark:text-white mb-1">
              {product.name}
            </h1>
            <Link
              to={`/store/${product.store}`}
              className="text-sm text-rez-green-500 font-medium"
            >
              {product.store}
            </Link>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 bg-amber-500/20 rounded-full">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-bold text-rez-navy dark:text-white">
              {product.rating}
            </span>
            <span className="text-xs text-rez-gray-600 dark:text-gray-400">
              ({product.reviews})
            </span>
          </div>
        </div>

        {/* Location & Availability */}
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-rez-gray-200 dark:border-white/10">
          <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{product.distance}</span>
          </div>
          <div className="flex items-center gap-1">
            {product.availability.type === 'offline' ? (
              <Store className="w-4 h-4 text-blue-500" />
            ) : (
              <Truck className="w-4 h-4 text-purple-500" />
            )}
            <span className="text-sm text-rez-navy dark:text-white font-medium">
              {product.availability.delivery}
            </span>
          </div>
        </div>

        {/* Price & Savings */}
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl mb-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Price</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-rez-navy dark:text-white">
                  ₹{product.price}
                </span>
                <span className="text-lg text-rez-gray-500 dark:text-gray-500 line-through">
                  ₹{product.originalPrice}
                </span>
              </div>
              <p className="text-xs text-emerald-500 font-semibold mt-1">
                Save ₹{savings} ({Math.round((savings / product.originalPrice) * 100)}% off)
              </p>
            </div>
          </div>

          {/* Earnings Breakdown */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-2 bg-white dark:bg-white/10 rounded-xl">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Cashback</p>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-bold text-emerald-500">
                  ₹{Math.round(product.price * 0.15)}
                </span>
              </div>
            </div>
            <div className="p-2 bg-white dark:bg-white/10 rounded-xl">
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">ReZ Coins</p>
              <div className="flex items-center gap-1">
                <Coins className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-bold text-amber-500">
                  ₹{product.coins}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-emerald-500/20">
            <p className="text-xs text-rez-gray-600 dark:text-gray-400 text-center">
              Total you earn: <span className="font-bold text-emerald-500">₹{totalEarnings}</span>
            </p>
          </div>
        </div>

        {/* Trending Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-xl text-center">
            <Users className="w-5 h-5 text-orange-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">
              {product.trending.buyers}
            </p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Bought today</p>
          </div>
          <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center">
            <TrendingUp className="w-5 h-5 text-blue-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">
              {product.trending.viewers}
            </p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Viewing now</p>
          </div>
          <div className="p-3 bg-pink-500/10 border border-pink-500/20 rounded-xl text-center">
            <Heart className="w-5 h-5 text-pink-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">
              {product.trending.saves}
            </p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Saved</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-2">
            Description
          </h3>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-2">
            Highlights
          </h3>
          <div className="space-y-2">
            {product.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-rez-green-500" />
                <p className="text-sm text-rez-gray-700 dark:text-gray-300">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compare Button */}
        <Link
          to="/explore/compare"
          className="block p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl mb-4 hover:bg-purple-500/20 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">
                Compare This Product
              </h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                See prices from other stores
              </p>
            </div>
            <ArrowLeft className="w-5 h-5 text-purple-500 rotate-180" />
          </div>
        </Link>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 glass border-t border-rez-gray-200 dark:border-white/10">
        <div className="flex gap-3">
          <button className="flex-1 py-4 bg-rez-green-500 hover:bg-rez-green-600 active:bg-rez-green-700 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg">
            {product.availability.type === 'offline' ? 'Get Directions' : 'Order Now'}
          </button>
          <button className="px-6 py-4 bg-white dark:bg-white/10 border-2 border-rez-green-500 text-rez-green-500 font-bold rounded-2xl transition-all active:scale-95">
            Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreProductDetail;
