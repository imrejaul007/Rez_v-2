import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Star,
  Zap,
  Store,
  Heart,
  Share2,
  Coins,
  ChevronRight,
  Check,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  Ruler,
} from 'lucide-react';
import { useWallet } from '../contexts/WalletContext';
import {
  fashionProducts,
  fashionBankOffers,
} from '../data/fashionData';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

const FashionProduct = () => {
  const { id } = useParams();
  const { rezCoins } = useWallet();
  const [liked, setLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const product = fashionProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Product not found</p>
          <Link to="/fashion" className="text-emerald-400">
            ← Back to Fashion
          </Link>
        </div>
      </div>
    );
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );
  const totalPrice = product.price * quantity;
  const maxCoinsUsable = Math.min(rezCoins?.balance || 0, totalPrice * 0.2);
  const finalPrice = totalPrice - maxCoinsUsable;
  const totalCoinsEarned = product.coinsEarned * quantity;

  // Get related products
  const relatedProducts = fashionProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-black pb-32">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="px-4 py-3 flex items-center justify-between">
          <Link to="/fashion" className="p-2 rounded-full bg-white/10">
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className="p-2 rounded-full bg-white/10"
            >
              <Heart
                className={`w-5 h-5 ${liked ? 'text-red-500 fill-red-500' : 'text-white'}`}
              />
            </button>
            <button className="p-2 rounded-full bg-white/10">
              <Share2 className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 rounded-full bg-white/10 relative">
              <ShoppingCart className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Image */}
      <div className="relative bg-white/5 h-80">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {discount > 0 && (
            <Badge variant="danger">{discount}% OFF</Badge>
          )}
          {product.tag && (
            <Badge variant="primary">{product.tag}</Badge>
          )}
        </div>

        {/* Delivery badges */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          {product.is60Min && (
            <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-500 text-xs text-black font-bold">
              <Zap className="w-3.5 h-3.5" />
              60-min Try
            </span>
          )}
          {product.hasPickup && (
            <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-500 text-xs text-white">
              <Store className="w-3.5 h-3.5" />
              Store Pickup
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="px-4 py-4">
        {/* Brand */}
        <p className="text-sm text-gray-400">{product.brand}</p>

        {/* Name */}
        <h1 className="text-xl font-bold text-white mt-1">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500/20">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-sm font-medium text-white">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-400">{product.reviews.toLocaleString()} reviews</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-bold text-white">
            ₹{product.price.toLocaleString()}
          </span>
          <span className="text-lg text-gray-500 line-through">
            ₹{product.originalPrice.toLocaleString()}
          </span>
          <span className="px-2 py-1 rounded-lg bg-emerald-500/20 text-sm text-emerald-400">
            Save ₹{(product.originalPrice - product.price).toLocaleString()}
          </span>
        </div>

        {/* Coins & Cashback */}
        <div className="flex items-center gap-4 mt-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-amber-400" />
            <div>
              <p className="text-sm font-medium text-white">Earn {product.coinsEarned} coins</p>
              <p className="text-xs text-gray-400">{product.cashbackPercent}% cashback</p>
            </div>
          </div>
          <div className="ml-auto text-right">
            <p className="text-xs text-gray-400">You have</p>
            <p className="text-sm font-medium text-amber-400">{rezCoins} coins</p>
          </div>
        </div>

        {/* Size Selection */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-white">Select Size</h3>
              <button className="flex items-center gap-1 text-xs text-emerald-400">
                <Ruler className="w-3.5 h-3.5" />
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[48px] px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Color Selection */}
        {product.colors && product.colors.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-white mb-2">Select Color</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-xl text-sm transition-colors ${
                    selectedColor === color
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white/10 text-gray-400 hover:bg-white/20'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Offers */}
        {product.offers && product.offers.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-white mb-2">Available Offers</h3>
            <div className="space-y-2">
              {product.offers.map((offer, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
                >
                  <span className="text-lg">🎁</span>
                  <span className="text-sm text-white flex-1">{offer}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bank Offers */}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-white mb-2">Bank Offers</h3>
          <div className="space-y-2">
            {fashionBankOffers.slice(0, 2).map((offer) => (
              <div
                key={offer.id}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#2C2C2E]"
              >
                <span className="text-lg">{offer.icon}</span>
                <div className="flex-1">
                  <p className="text-sm text-white">{offer.bank}</p>
                  <p className="text-xs text-emerald-400">{offer.offer}</p>
                </div>
                <span className="text-xs text-gray-500">{offer.cardType}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vibes & Occasions */}
        {(product.vibe?.length > 0 || product.occasion?.length > 0) && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-white mb-2">Perfect For</h3>
            <div className="flex flex-wrap gap-2">
              {product.vibe?.map((v) => (
                <span key={v} className="px-3 py-1.5 rounded-full bg-purple-500/20 text-xs text-purple-400 capitalize">
                  {v}
                </span>
              ))}
              {product.occasion?.map((o) => (
                <span key={o} className="px-3 py-1.5 rounded-full bg-pink-500/20 text-xs text-pink-400 capitalize">
                  {o}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Delivery & Services */}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-white mb-2">Delivery & Services</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-xl bg-[#2C2C2E] flex items-center gap-2">
              <Truck className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-xs text-white">Free Delivery</p>
                <p className="text-[10px] text-gray-500">By tomorrow</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#2C2C2E] flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-xs text-white">100% Original</p>
                <p className="text-[10px] text-gray-500">Guaranteed</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#2C2C2E] flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-xs text-white">Easy Returns</p>
                <p className="text-[10px] text-gray-500">15 days</p>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#2C2C2E] flex items-center gap-2">
              <Store className="w-5 h-5 text-amber-400" />
              <div>
                <p className="text-xs text-white">Store Pickup</p>
                <p className="text-[10px] text-gray-500">{product.stores?.length || 0} stores</p>
              </div>
            </div>
          </div>
        </div>

        {/* Available at Stores */}
        {product.stores && product.stores.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-medium text-white mb-2">Available at Stores</h3>
            <div className="space-y-2">
              {product.stores.map((store, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedStore(selectedStore === store ? null : store)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${
                    selectedStore === store
                      ? 'bg-emerald-500/20 border border-emerald-500/50'
                      : 'bg-[#2C2C2E]'
                  }`}
                >
                  <Store className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-white flex-1 text-left">{store}</span>
                  {selectedStore === store && (
                    <Check className="w-5 h-5 text-emerald-400" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Compare Section */}
        <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xl">🧠</span>
            <div>
              <p className="text-sm font-medium text-white">Smart Compare</p>
              <p className="text-xs text-gray-400">See prices across all platforms</p>
            </div>
          </div>
          <Button variant="secondary" fullWidth>
            Compare Prices
          </Button>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-medium text-white mb-3">You might also like</h3>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/fashion/product/${p.id}`}
                  className="min-w-[160px] p-3 rounded-xl bg-[#2C2C2E] shrink-0"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <p className="text-xs text-white line-clamp-2">{p.name}</p>
                  <p className="text-sm font-medium text-white mt-1">
                    ₹{p.price.toLocaleString()}
                  </p>
                  <p className="text-xs text-emerald-400">{p.cashbackPercent}% cashback</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-16 left-0 right-0 px-4 z-50">
        <div className="p-4 rounded-2xl bg-[#1C1C1E] border border-white/10 shadow-xl">
          {/* Quantity */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400">Quantity</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg bg-white/10 text-white"
              >
                -
              </button>
              <span className="text-white font-medium w-6 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg bg-white/10 text-white"
              >
                +
              </button>
            </div>
          </div>

          {/* Price Summary */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-lg font-bold text-white">₹{totalPrice.toLocaleString()}</p>
              <p className="text-xs text-amber-400">Earn {totalCoinsEarned} coins</p>
            </div>
            {maxCoinsUsable > 0 && (
              <div className="text-right">
                <p className="text-xs text-gray-400">Use coins: -₹{maxCoinsUsable}</p>
                <p className="text-sm font-medium text-emerald-400">
                  Pay ₹{finalPrice.toLocaleString()}
                </p>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Button variant="secondary" className="flex-1">
              Add to Cart
            </Button>
            <Button variant="primary" className="flex-1">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionProduct;
