import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MerchantWishlistDemand = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('trending');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Mock wishlist demand data
  const [demandData] = useState({
    summary: {
      totalWishlists: 1256,
      weeklyGrowth: 12.5,
      conversionRate: 8.2,
      potentialRevenue: 425000
    },
    trendingProducts: [
      {
        id: 1,
        name: 'Premium Wireless Headphones',
        image: '🎧',
        category: 'Electronics',
        currentPrice: 2999,
        wishlistCount: 234,
        weeklyChange: '+45',
        avgWaitDays: 12,
        priceAlerts: 156,
        targetPrice: 2499,
        conversionPotential: 'high',
        lastPurchaseDate: '2024-12-26',
        stockStatus: 'in_stock'
      },
      {
        id: 2,
        name: 'Smart Fitness Band',
        image: '⌚',
        category: 'Wearables',
        currentPrice: 1999,
        wishlistCount: 189,
        weeklyChange: '+32',
        avgWaitDays: 8,
        priceAlerts: 98,
        targetPrice: 1499,
        conversionPotential: 'medium',
        lastPurchaseDate: '2024-12-27',
        stockStatus: 'low_stock'
      },
      {
        id: 3,
        name: 'Organic Green Tea Set',
        image: '🍵',
        category: 'Food & Beverages',
        currentPrice: 599,
        wishlistCount: 145,
        weeklyChange: '+28',
        avgWaitDays: 5,
        priceAlerts: 45,
        targetPrice: 449,
        conversionPotential: 'high',
        lastPurchaseDate: '2024-12-25',
        stockStatus: 'in_stock'
      },
      {
        id: 4,
        name: 'Leather Messenger Bag',
        image: '👜',
        category: 'Fashion',
        currentPrice: 3499,
        wishlistCount: 123,
        weeklyChange: '+15',
        avgWaitDays: 18,
        priceAlerts: 67,
        targetPrice: 2999,
        conversionPotential: 'low',
        lastPurchaseDate: '2024-12-20',
        stockStatus: 'in_stock'
      },
      {
        id: 5,
        name: 'Bluetooth Speaker',
        image: '🔊',
        category: 'Electronics',
        currentPrice: 1499,
        wishlistCount: 98,
        weeklyChange: '+22',
        avgWaitDays: 10,
        priceAlerts: 54,
        targetPrice: 1199,
        conversionPotential: 'high',
        lastPurchaseDate: '2024-12-27',
        stockStatus: 'in_stock'
      }
    ],
    outOfStock: [
      {
        id: 6,
        name: 'Limited Edition Sneakers',
        image: '👟',
        category: 'Footwear',
        wishlistCount: 312,
        notifyRequests: 245,
        lastInStock: '2024-12-15',
        expectedRestock: '2025-01-10'
      },
      {
        id: 7,
        name: 'Vintage Camera',
        image: '📷',
        category: 'Electronics',
        wishlistCount: 156,
        notifyRequests: 134,
        lastInStock: '2024-11-30',
        expectedRestock: null
      }
    ],
    categoryBreakdown: [
      { category: 'Electronics', count: 456, percentage: 36 },
      { category: 'Fashion', count: 312, percentage: 25 },
      { category: 'Home & Kitchen', count: 234, percentage: 19 },
      { category: 'Food & Beverages', count: 145, percentage: 11 },
      { category: 'Others', count: 109, percentage: 9 }
    ],
    priceAlertDistribution: [
      { range: '10-20% off', count: 423 },
      { range: '20-30% off', count: 312 },
      { range: '30-40% off', count: 189 },
      { range: '40%+ off', count: 145 }
    ]
  });

  const getConversionColor = (potential) => {
    const colors = {
      high: 'bg-green-100 text-green-700',
      medium: 'bg-yellow-100 text-yellow-700',
      low: 'bg-orange-100 text-orange-700'
    };
    return colors[potential] || 'bg-gray-100 text-gray-700';
  };

  const getStockColor = (status) => {
    const colors = {
      in_stock: 'text-green-600',
      low_stock: 'text-orange-600',
      out_of_stock: 'text-red-600'
    };
    return colors[status] || 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-6">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Wishlist Demand</h1>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-white/80 text-sm">Total Wishlists</span>
              <span className="text-xs bg-green-400/30 px-2 py-0.5 rounded-full">
                +{demandData.summary.weeklyGrowth}%
              </span>
            </div>
            <div className="text-2xl font-bold">{demandData.summary.totalWishlists}</div>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-white/80 text-sm mb-1">Potential Revenue</div>
            <div className="text-2xl font-bold">₹{(demandData.summary.potentialRevenue / 1000).toFixed(0)}K</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-white border-b sticky top-0 z-10">
        <button
          onClick={() => setActiveTab('trending')}
          className={`flex-1 py-3 text-sm font-medium border-b-2 ${
            activeTab === 'trending' ? 'border-pink-600 text-pink-600' : 'border-transparent text-gray-600'
          }`}
        >
          Trending
        </button>
        <button
          onClick={() => setActiveTab('out_of_stock')}
          className={`flex-1 py-3 text-sm font-medium border-b-2 ${
            activeTab === 'out_of_stock' ? 'border-pink-600 text-pink-600' : 'border-transparent text-gray-600'
          }`}
        >
          Out of Stock
        </button>
        <button
          onClick={() => setActiveTab('insights')}
          className={`flex-1 py-3 text-sm font-medium border-b-2 ${
            activeTab === 'insights' ? 'border-pink-600 text-pink-600' : 'border-transparent text-gray-600'
          }`}
        >
          Insights
        </button>
      </div>

      <div className="p-4">
        {/* Trending Tab */}
        {activeTab === 'trending' && (
          <div className="space-y-4">
            {demandData.trendingProducts.map(product => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="bg-white rounded-xl p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-3xl">
                    {product.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${getConversionColor(product.conversionPotential)}`}>
                        {product.conversionPotential} potential
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center text-sm mb-3">
                  <div className="bg-pink-50 rounded-lg p-2">
                    <div className="font-bold text-pink-600">{product.wishlistCount}</div>
                    <div className="text-xs text-gray-500">Wishlists</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2">
                    <div className="font-bold text-green-600">{product.weeklyChange}</div>
                    <div className="text-xs text-gray-500">This Week</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-2">
                    <div className="font-bold text-blue-600">{product.priceAlerts}</div>
                    <div className="text-xs text-gray-500">Price Alerts</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2">
                    <div className="font-bold text-purple-600">{product.avgWaitDays}d</div>
                    <div className="text-xs text-gray-500">Avg Wait</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-gray-500">Current: </span>
                    <span className="font-medium">₹{product.currentPrice}</span>
                    <span className="text-gray-400 mx-1">→</span>
                    <span className="text-green-600">Target: ₹{product.targetPrice}</span>
                  </div>
                  <span className={getStockColor(product.stockStatus)}>
                    {product.stockStatus === 'in_stock' ? '✓ In Stock' :
                     product.stockStatus === 'low_stock' ? '⚠️ Low Stock' : '❌ Out'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Out of Stock Tab */}
        {activeTab === 'out_of_stock' && (
          <div className="space-y-4">
            <div className="bg-red-50 rounded-xl p-4">
              <h3 className="font-semibold text-red-800 mb-2">🚨 High Demand Products Unavailable</h3>
              <p className="text-sm text-red-700">
                These products have high wishlist demand but are currently out of stock. Restocking them could generate significant revenue.
              </p>
            </div>

            {demandData.outOfStock.map(product => (
              <div key={product.id} className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-l-red-500">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-3xl">
                    {product.image}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                  <div className="bg-pink-50 rounded-lg p-3">
                    <div className="font-bold text-pink-600 text-lg">{product.wishlistCount}</div>
                    <div className="text-xs text-gray-500">Waiting customers</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="font-bold text-blue-600 text-lg">{product.notifyRequests}</div>
                    <div className="text-xs text-gray-500">Notify requests</div>
                  </div>
                </div>

                <div className="text-sm text-gray-500 mb-3">
                  <p>Last in stock: {product.lastInStock}</p>
                  {product.expectedRestock && (
                    <p className="text-green-600">Expected restock: {product.expectedRestock}</p>
                  )}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-pink-600 text-white py-2 rounded-lg text-sm font-medium">
                    Update Stock
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">
                    Notify All
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Insights Tab */}
        {activeTab === 'insights' && (
          <div className="space-y-4">
            {/* Category Breakdown */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-4">Wishlist by Category</h3>
              <div className="space-y-3">
                {demandData.categoryBreakdown.map((cat, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{cat.category}</span>
                      <span className="font-medium">{cat.count} ({cat.percentage}%)</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
                        style={{ width: `${cat.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Alert Distribution */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-4">Price Alert Preferences</h3>
              <div className="space-y-3">
                {demandData.priceAlertDistribution.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm">{item.range}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${(item.count / 500) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-12 text-right">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">
                💡 Most customers are looking for 10-20% discounts. Consider running flash sales in this range.
              </p>
            </div>

            {/* Actionable Insights */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4">
              <h3 className="font-semibold mb-3">💡 Recommendations</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2 bg-white rounded-lg p-3">
                  <span>🎯</span>
                  <div>
                    <p className="font-medium">Run a 15% flash sale on Electronics</p>
                    <p className="text-gray-500">456 customers are waiting for deals in this category</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white rounded-lg p-3">
                  <span>📦</span>
                  <div>
                    <p className="font-medium">Restock Limited Edition Sneakers</p>
                    <p className="text-gray-500">312 customers have this in their wishlist</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white rounded-lg p-3">
                  <span>💌</span>
                  <div>
                    <p className="font-medium">Send price drop notifications</p>
                    <p className="text-gray-500">420 customers have set price alerts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full max-h-[80vh] rounded-t-2xl overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h2 className="font-bold">Product Details</h2>
              <button onClick={() => setSelectedProduct(null)} className="text-2xl">&times;</button>
            </div>

            <div className="p-4 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-4xl">
                  {selectedProduct.image}
                </div>
                <div>
                  <h3 className="font-semibold">{selectedProduct.name}</h3>
                  <p className="text-sm text-gray-500">{selectedProduct.category}</p>
                  <p className="text-lg font-bold text-pink-600">₹{selectedProduct.currentPrice}</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-pink-600 text-white py-3 rounded-xl font-medium">
                  Send Price Drop Alert
                </button>
                <button className="bg-blue-600 text-white py-3 rounded-xl font-medium">
                  Create Flash Sale
                </button>
              </div>

              {/* Demand Details */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-medium mb-3">Demand Analysis</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500">Wishlist Count</p>
                    <p className="font-semibold">{selectedProduct.wishlistCount}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Price Alerts</p>
                    <p className="font-semibold">{selectedProduct.priceAlerts}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Avg Wait Time</p>
                    <p className="font-semibold">{selectedProduct.avgWaitDays} days</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Target Price</p>
                    <p className="font-semibold text-green-600">₹{selectedProduct.targetPrice}</p>
                  </div>
                </div>
              </div>

              {/* Price Suggestion */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h4 className="font-medium text-green-800 mb-2">💰 Revenue Opportunity</h4>
                <p className="text-sm text-green-700">
                  If you offer a 17% discount (₹{selectedProduct.targetPrice}),
                  you could convert approximately {Math.round(selectedProduct.wishlistCount * 0.35)} customers,
                  generating ₹{(selectedProduct.targetPrice * Math.round(selectedProduct.wishlistCount * 0.35)).toLocaleString()} in revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchantWishlistDemand;
