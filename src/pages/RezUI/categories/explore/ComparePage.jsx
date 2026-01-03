import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Store, Truck, Globe, TrendingUp, Check, Clock, MapPin } from 'lucide-react';

const compareProducts = [
  {
    id: 1,
    name: 'Nike Air Max 90',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: 'Footwear',
    options: [
      {
        platform: 'Nike Store BTM',
        type: 'offline',
        icon: Store,
        price: 6999,
        originalPrice: 8999,
        cashback: '10%',
        cashbackAmount: 700,
        coins: 1400,
        delivery: 'Pickup today',
        distance: '1.2 km',
        inStock: true,
        rating: 4.8,
        pros: ['Try before buy', 'Instant pickup', 'Local support'],
        cons: ['Need to visit store']
      },
      {
        platform: 'ReZ Mall',
        type: 'online',
        icon: Truck,
        price: 7199,
        originalPrice: 8999,
        cashback: '15%',
        cashbackAmount: 1080,
        coins: 2160,
        delivery: '60 mins',
        distance: null,
        inStock: true,
        rating: 4.7,
        pros: ['Fast delivery', 'Highest cashback', 'ReZ verified'],
        cons: ['Delivery charge ₹50'],
        isBest: true
      },
      {
        platform: 'Nike.com',
        type: 'online',
        icon: Globe,
        price: 7499,
        originalPrice: 8999,
        cashback: 'None',
        cashbackAmount: 0,
        coins: 0,
        delivery: '3-5 days',
        distance: null,
        inStock: true,
        rating: 4.9,
        pros: ['Official store', 'Authentic guaranteed'],
        cons: ['Slow delivery', 'No cashback', 'No ReZ coins']
      }
    ]
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400',
    category: 'Electronics',
    options: [
      {
        platform: 'Apple Store',
        type: 'offline',
        icon: Store,
        price: 129900,
        originalPrice: 134900,
        cashback: '5%',
        cashbackAmount: 6495,
        coins: 12990,
        delivery: 'Pickup today',
        distance: '3.5 km',
        inStock: true,
        rating: 5.0,
        pros: ['Official warranty', 'Expert support', 'Trade-in available'],
        cons: ['Far distance']
      },
      {
        platform: 'Croma (ReZ)',
        type: 'online',
        icon: Truck,
        price: 128900,
        originalPrice: 134900,
        cashback: '8%',
        cashbackAmount: 10312,
        coins: 20624,
        delivery: '2 hours',
        distance: null,
        inStock: true,
        rating: 4.6,
        pros: ['Fast delivery', 'Good cashback', 'Same-day'],
        cons: [],
        isBest: true
      }
    ]
  }
];

const ComparePage = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(compareProducts[0]);
  const [showDetails, setShowDetails] = useState(false);

  const bestOption = selectedProduct.options.find(opt => opt.isBest) || selectedProduct.options[0];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24 transition-colors">
      {/* Header */}
      <div className="sticky top-0 z-50 glass border-b border-rez-gray-200 dark:border-white/10">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">
                Compare & Decide
              </h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">
                Find the best deal for you
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Selector */}
      <div className="px-4 py-4">
        <div className="flex gap-3 overflow-x-auto hide-scrollbar">
          {compareProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`flex items-center gap-3 p-3 rounded-2xl shrink-0 transition-all ${
                selectedProduct.id === product.id
                  ? 'bg-rez-green-500 text-white shadow-rez-green'
                  : 'bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10'
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div className="text-left">
                <h3 className={`text-sm font-semibold ${
                  selectedProduct.id === product.id
                    ? 'text-white'
                    : 'text-rez-navy dark:text-white'
                }`}>
                  {product.name}
                </h3>
                <p className={`text-xs ${
                  selectedProduct.id === product.id
                    ? 'text-white/80'
                    : 'text-rez-gray-600 dark:text-gray-400'
                }`}>
                  {product.options.length} options
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Best Deal Highlight */}
      <div className="px-4 mb-4">
        <div className="p-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-white" />
            <h3 className="text-sm font-bold text-white">Best Value</h3>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/90 text-xs mb-1">{bestOption.platform}</p>
              <p className="text-2xl font-bold text-white">₹{bestOption.price.toLocaleString()}</p>
              <p className="text-white/80 text-xs mt-1">
                Save ₹{(bestOption.originalPrice - bestOption.price + bestOption.cashbackAmount).toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <div className="px-3 py-1.5 bg-white/20 rounded-full mb-2">
                <span className="text-xs font-semibold text-white">
                  {bestOption.cashback} Cashback
                </span>
              </div>
              <p className="text-white/90 text-xs">+ ₹{bestOption.coins} coins</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white">
            All Options
          </h3>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs text-rez-green-500 font-medium"
          >
            {showDetails ? 'Hide' : 'Show'} Details
          </button>
        </div>

        <div className="space-y-3">
          {selectedProduct.options.map((option, index) => {
            const Icon = option.icon;
            const totalSavings = (option.originalPrice - option.price) + option.cashbackAmount;

            return (
              <div
                key={index}
                className={`p-4 rounded-2xl border-2 transition-all ${
                  option.isBest
                    ? 'border-emerald-500 bg-emerald-500/5'
                    : 'border-rez-gray-200 dark:border-white/10 bg-white dark:bg-white/10'
                }`}
              >
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      option.type === 'offline'
                        ? 'bg-blue-500/20'
                        : 'bg-purple-500/20'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        option.type === 'offline' ? 'text-blue-500' : 'text-purple-500'
                      }`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-rez-navy dark:text-white">
                        {option.platform}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-rez-gray-100 dark:bg-white/10 text-rez-gray-700 dark:text-gray-300 uppercase font-medium">
                          {option.type}
                        </span>
                        {option.distance && (
                          <div className="flex items-center gap-1 text-rez-gray-600 dark:text-gray-400">
                            <MapPin className="w-3 h-3" />
                            <span className="text-[10px]">{option.distance}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {option.isBest && (
                    <div className="px-2 py-1 bg-emerald-500 rounded-full">
                      <span className="text-[10px] font-bold text-white">BEST</span>
                    </div>
                  )}
                </div>

                {/* Price Section */}
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Price</p>
                    <p className="text-lg font-bold text-rez-navy dark:text-white">
                      ₹{option.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-rez-gray-500 dark:text-gray-500 line-through">
                      ₹{option.originalPrice.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Cashback</p>
                    <p className="text-lg font-bold text-emerald-500">
                      {option.cashback === 'None' ? '-' : `₹${option.cashbackAmount}`}
                    </p>
                    <p className="text-xs text-emerald-500">
                      {option.cashback}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Coins</p>
                    <p className="text-lg font-bold text-amber-500">
                      {option.coins === 0 ? '-' : `₹${option.coins}`}
                    </p>
                    <p className="text-xs text-amber-500">ReZ coins</p>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="flex items-center gap-2 p-2 bg-rez-gray-50 dark:bg-white/5 rounded-xl mb-3">
                  <Clock className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" />
                  <span className="text-xs text-rez-navy dark:text-white font-medium">
                    {option.delivery}
                  </span>
                </div>

                {/* Total Savings */}
                <div className="p-2 bg-green-500/10 rounded-xl mb-3">
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 text-center">
                    Total savings: <span className="font-bold text-emerald-500">₹{totalSavings.toLocaleString()}</span>
                  </p>
                </div>

                {/* Pros & Cons (if details shown) */}
                {showDetails && (
                  <div className="space-y-2 mb-3">
                    {option.pros.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-emerald-500 mb-1">Pros:</p>
                        {option.pros.map((pro, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <Check className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                            <p className="text-xs text-rez-gray-700 dark:text-gray-300">{pro}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {option.cons.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-red-500 mb-1">Cons:</p>
                        {option.cons.map((con, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-red-500 text-xs mt-0.5">×</span>
                            <p className="text-xs text-rez-gray-700 dark:text-gray-300">{con}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* CTA Button */}
                <button className={`w-full py-3 rounded-xl font-semibold transition-all active:scale-95 ${
                  option.isBest
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                    : 'bg-rez-gray-100 dark:bg-white/10 hover:bg-rez-gray-200 dark:hover:bg-white/20 text-rez-navy dark:text-white'
                }`}>
                  {option.type === 'offline' ? 'Get Directions' : 'Buy Now'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Info */}
      <div className="px-4 py-6">
        <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-2">
            💡 ReZ Smart Tip
          </h3>
          <p className="text-xs text-rez-gray-700 dark:text-gray-300">
            The "Best Value" option gives you the highest total savings when you combine discount + cashback + coins earned.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
