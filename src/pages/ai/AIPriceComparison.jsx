import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, TrendingDown, TrendingUp, Star, Bell, Share2, Heart,
  ChevronRight, Sparkles, LineChart, ShoppingCart, AlertCircle, Check
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const AIPriceComparison = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState({
    id: 1,
    name: 'Samsung Galaxy S24 Ultra (256GB)',
    image: '📱',
    category: 'Electronics',
    currentLowestPrice: 89999,
    aiPrediction: {
      trend: 'dropping',
      expectedDrop: 5000,
      bestTimeToBuy: '2-3 days',
      confidence: 87
    }
  });

  const [priceHistory, setPriceHistory] = useState([
    { date: 'Jan 1', price: 99999 },
    { date: 'Jan 5', price: 95999 },
    { date: 'Jan 10', price: 92999 },
    { date: 'Jan 15', price: 89999 }
  ]);

  const [merchants, setMerchants] = useState([
    {
      id: 1,
      name: 'Amazon',
      price: 89999,
      originalPrice: 109999,
      inStock: true,
      rating: 4.5,
      reviews: 15420,
      delivery: 'Tomorrow',
      cashback: 4500,
      offers: ['10% instant discount', 'No cost EMI'],
      trustScore: 95,
      isBestPrice: true
    },
    {
      id: 2,
      name: 'Flipkart',
      price: 91999,
      originalPrice: 109999,
      inStock: true,
      rating: 4.3,
      reviews: 12380,
      delivery: '2-3 days',
      cashback: 4000,
      offers: ['Exchange up to ₹15,000', 'EMI available'],
      trustScore: 92,
      isBestPrice: false
    },
    {
      id: 3,
      name: 'Croma',
      price: 94999,
      originalPrice: 109999,
      inStock: true,
      rating: 4.4,
      reviews: 8900,
      delivery: 'Same day',
      cashback: 3500,
      offers: ['Store pickup available', 'Extended warranty'],
      trustScore: 88,
      isBestPrice: false
    },
    {
      id: 4,
      name: 'Reliance Digital',
      price: 92999,
      originalPrice: 109999,
      inStock: false,
      rating: 4.2,
      reviews: 6720,
      delivery: 'Out of stock',
      cashback: 3800,
      offers: ['Notify when available'],
      trustScore: 85,
      isBestPrice: false
    }
  ]);

  const [priceAlerts, setPriceAlerts] = useState([
    {
      id: 1,
      product: 'iPhone 15 Pro',
      targetPrice: 119999,
      currentPrice: 129999,
      status: 'active'
    },
    {
      id: 2,
      product: 'Sony WH-1000XM5',
      targetPrice: 22999,
      currentPrice: 21999,
      status: 'triggered'
    }
  ]);

  const [showPriceAlert, setShowPriceAlert] = useState(false);
  const [targetPrice, setTargetPrice] = useState('');

  // API Comment: GET /api/ai/price-comparison/{productId}
  // ML Model: Price prediction using historical data + market trends
  // Response: { merchants: [], priceHistory: [], prediction: {}, alerts: [] }
  const fetchPriceComparison = async (productId) => {
    // Fetch real-time price comparison
  };

  // API Comment: POST /api/ai/price-alert
  // Payload: { productId: string, targetPrice: number, userId: string }
  // Response: { alertId: string, status: string, estimatedTime: string }
  const createPriceAlert = () => {
    if (!targetPrice) return;
    // Create price alert
    setShowPriceAlert(false);
  };

  // API Comment: GET /api/ai/price-prediction/{productId}
  // ML Model: LSTM/Time-series forecasting for price trends
  // Response: { trend: string, confidence: number, bestTime: string }
  const getPricePrediction = () => {
    // Get AI price prediction
  };

  const savingsVsBestPrice = merchants
    .filter(m => !m.isBestPrice)
    .map(m => m.price - merchants.find(best => best.isBestPrice)?.price || 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">AI Price Comparison</h1>
            <p className="text-xs text-green-100">Real-time across all merchants</p>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-lg">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product Header */}
      <div className="bg-white p-4 border-b">
        <div className="flex gap-3">
          <div className="text-6xl">{selectedProduct.image}</div>
          <div className="flex-1">
            <h2 className="font-semibold text-gray-900 mb-1">{selectedProduct.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{selectedProduct.category}</p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-600">
                ₹{selectedProduct.currentLowestPrice.toLocaleString()}
              </span>
              <span className="text-sm text-gray-500">Lowest Price</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Price Prediction */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-200">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">AI Price Prediction</h3>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                  {selectedProduct.aiPrediction.confidence}% Confident
                </span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                {selectedProduct.aiPrediction.trend === 'dropping' ? (
                  <TrendingDown className="w-5 h-5 text-green-600" />
                ) : (
                  <TrendingUp className="w-5 h-5 text-red-600" />
                )}
                <p className="text-sm text-gray-700">
                  Price expected to <span className="font-semibold">drop by ₹{selectedProduct.aiPrediction.expectedDrop.toLocaleString()}</span>
                </p>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-4 h-4 text-purple-600" />
                <p className="text-sm text-gray-600">
                  Best time to buy: <span className="font-semibold">{selectedProduct.aiPrediction.bestTimeToBuy}</span>
                </p>
              </div>
              <button
                onClick={() => setShowPriceAlert(true)}
                className="w-full px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 flex items-center justify-center gap-2"
              >
                <Bell className="w-4 h-4" />
                Set Price Alert
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Price Comparison List */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900">Compare Prices ({merchants.length} stores)</h2>
          <button className="text-sm text-purple-600 font-medium">Sort by</button>
        </div>

        <div className="space-y-3">
          {merchants.map((merchant) => (
            <div
              key={merchant.id}
              className={`bg-white rounded-xl p-4 border-2 ${
                merchant.isBestPrice
                  ? 'border-green-400 bg-green-50/50'
                  : 'border-gray-200'
              }`}
            >
              {merchant.isBestPrice && (
                <div className="flex items-center gap-1 mb-2 text-green-700">
                  <Check className="w-4 h-4" />
                  <span className="text-xs font-semibold">BEST PRICE</span>
                </div>
              )}

              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{merchant.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{merchant.rating}</span>
                      <span className="text-xs text-gray-500">({merchant.reviews.toLocaleString()})</span>
                    </div>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-purple-600 font-medium">
                      Trust: {merchant.trustScore}%
                    </span>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Heart className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-bold text-gray-900">
                  ₹{merchant.price.toLocaleString()}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ₹{merchant.originalPrice.toLocaleString()}
                </span>
                <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded">
                  {Math.round((1 - merchant.price / merchant.originalPrice) * 100)}% OFF
                </span>
              </div>

              <div className="flex items-center gap-4 mb-3 text-sm">
                <div className="flex items-center gap-1 text-gray-600">
                  <ShoppingCart className="w-4 h-4" />
                  <span>{merchant.delivery}</span>
                </div>
                <div className="flex items-center gap-1 text-green-600">
                  <Sparkles className="w-4 h-4" />
                  <span>₹{merchant.cashback} cashback</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {merchant.offers.map((offer, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                  >
                    {offer}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm ${
                    merchant.inStock
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!merchant.inStock}
                >
                  {merchant.inStock ? 'Buy Now' : 'Out of Stock'}
                </button>
                <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg font-medium text-sm hover:bg-purple-50">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Price History Chart */}
      <div className="p-4">
        <div className="bg-white rounded-xl p-4 border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Price History</h3>
            <LineChart className="w-5 h-5 text-purple-600" />
          </div>
          <div className="space-y-2">
            {priceHistory.map((point, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{point.date}</span>
                <span className="font-medium">₹{point.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Price Alerts */}
      {priceAlerts.length > 0 && (
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Your Price Alerts</h3>
          <div className="space-y-2">
            {priceAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-3 rounded-lg border ${
                  alert.status === 'triggered'
                    ? 'bg-green-50 border-green-200'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{alert.product}</p>
                    <p className="text-xs text-gray-500">
                      Target: ₹{alert.targetPrice.toLocaleString()} • Current: ₹{alert.currentPrice.toLocaleString()}
                    </p>
                  </div>
                  {alert.status === 'triggered' && (
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                      Price Hit!
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Price Alert Modal */}
      {showPriceAlert && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
          <div className="bg-white rounded-t-2xl w-full max-w-lg p-6 animate-slide-up">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Set Price Alert</h3>
            <p className="text-sm text-gray-600 mb-4">
              We'll notify you when the price drops to your target
            </p>
            <input
              type="number"
              value={targetPrice}
              onChange={(e) => setTargetPrice(e.target.value)}
              placeholder="Enter target price"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4"
            />
            <div className="flex gap-3">
              <button
                onClick={() => setShowPriceAlert(false)}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium"
              >
                Cancel
              </button>
              <button
                onClick={createPriceAlert}
                className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-lg font-medium"
              >
                Create Alert
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNavManager currentPage="deals" />
    </div>
  );
};

export default AIPriceComparison;
