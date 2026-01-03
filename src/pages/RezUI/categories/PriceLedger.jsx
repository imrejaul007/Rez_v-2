import React, { useState } from 'react';
import {
  ArrowLeft, TrendingUp, TrendingDown, AlertTriangle, Bell, Search,
  Calendar, Filter, ChevronRight, IndianRupee, Clock, MapPin,
  Star, ShoppingBag, History, Target, Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PriceLedger = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('history');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const priceStats = {
    totalTracked: 342,
    moneySaved: 12450,
    overpayments: 3,
    alerts: 5,
    avgSavings: 14.2
  };

  const categories = [
    { id: 'all', name: 'All', icon: '📦' },
    { id: 'grocery', name: 'Grocery', icon: '🥬' },
    { id: 'food', name: 'Food', icon: '🍕' },
    { id: 'electronics', name: 'Electronics', icon: '📱' },
    { id: 'fashion', name: 'Fashion', icon: '👕' },
    { id: 'services', name: 'Services', icon: '🔧' }
  ];

  const priceHistory = [
    {
      id: 1,
      name: 'Tata Salt 1kg',
      category: 'grocery',
      currentPrice: 28,
      lastPaid: 24,
      lowestEver: 22,
      highestEver: 32,
      avgPrice: 26,
      trend: 'up',
      change: '+16.7%',
      store: 'BigBasket',
      lastBought: '2 days ago',
      frequency: 'Monthly',
      totalSpent: 288,
      purchases: 12,
      alert: true,
      alertMessage: 'Price 16% higher than usual!'
    },
    {
      id: 2,
      name: 'Butter Chicken',
      category: 'food',
      currentPrice: 340,
      lastPaid: 320,
      lowestEver: 280,
      highestEver: 380,
      avgPrice: 320,
      trend: 'up',
      change: '+6.3%',
      store: 'Punjabi Tadka',
      lastBought: '1 week ago',
      frequency: 'Weekly',
      totalSpent: 4160,
      purchases: 13,
      alert: false
    },
    {
      id: 3,
      name: 'iPhone Charger',
      category: 'electronics',
      currentPrice: 1499,
      lastPaid: 1899,
      lowestEver: 1299,
      highestEver: 2199,
      avgPrice: 1650,
      trend: 'down',
      change: '-21.1%',
      store: 'Amazon',
      lastBought: '3 months ago',
      frequency: 'Yearly',
      totalSpent: 3798,
      purchases: 2,
      alert: true,
      alertMessage: 'Price dropped! Good time to buy.'
    },
    {
      id: 4,
      name: 'Haircut - Men',
      category: 'services',
      currentPrice: 200,
      lastPaid: 200,
      lowestEver: 150,
      highestEver: 250,
      avgPrice: 190,
      trend: 'stable',
      change: '0%',
      store: 'Looks Salon',
      lastBought: '2 weeks ago',
      frequency: 'Monthly',
      totalSpent: 2400,
      purchases: 12,
      alert: false
    },
    {
      id: 5,
      name: 'Amul Milk 1L',
      category: 'grocery',
      currentPrice: 66,
      lastPaid: 62,
      lowestEver: 54,
      highestEver: 68,
      avgPrice: 60,
      trend: 'up',
      change: '+6.5%',
      store: 'DMart',
      lastBought: 'Yesterday',
      frequency: 'Daily',
      totalSpent: 21960,
      purchases: 365,
      alert: true,
      alertMessage: 'Near highest price ever!'
    }
  ];

  const overpaymentAlerts = [
    {
      id: 1,
      item: 'Tata Salt 1kg',
      paidAt: 'Reliance Fresh',
      paidPrice: 28,
      betterPrice: 22,
      betterStore: 'DMart',
      savings: 6,
      distance: '1.2 km away'
    },
    {
      id: 2,
      item: 'Coca Cola 2L',
      paidAt: 'Local Store',
      paidPrice: 95,
      betterPrice: 76,
      betterStore: 'BigBasket',
      savings: 19,
      distance: 'Online'
    },
    {
      id: 3,
      item: 'Maggi Noodles Pack',
      paidAt: 'Corner Shop',
      paidPrice: 72,
      betterPrice: 60,
      betterStore: 'Zepto',
      savings: 12,
      distance: '10 min delivery'
    }
  ];

  const priceDrops = [
    {
      id: 1,
      item: 'Samsung Galaxy Buds',
      currentPrice: 7999,
      oldPrice: 11999,
      drop: 33,
      store: 'Flipkart',
      expires: '2 days left'
    },
    {
      id: 2,
      item: 'Nike Running Shoes',
      currentPrice: 4499,
      oldPrice: 6999,
      drop: 36,
      store: 'Myntra',
      expires: 'Flash Sale'
    },
    {
      id: 3,
      item: 'Protein Powder 1kg',
      currentPrice: 1899,
      oldPrice: 2499,
      drop: 24,
      store: 'Amazon',
      expires: 'Limited Stock'
    }
  ];

  const cheapestNearby = [
    {
      item: 'Atta 10kg',
      stores: [
        { name: 'DMart', price: 425, distance: '2.1 km' },
        { name: 'Reliance Fresh', price: 445, distance: '0.8 km' },
        { name: 'BigBazaar', price: 460, distance: '1.5 km' }
      ]
    },
    {
      item: 'Cooking Oil 5L',
      stores: [
        { name: 'Wholesale Market', price: 680, distance: '3.2 km' },
        { name: 'DMart', price: 720, distance: '2.1 km' },
        { name: 'Local Store', price: 780, distance: '0.2 km' }
      ]
    }
  ];

  const filteredHistory = priceHistory.filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Personal Price Ledger</h1>
              <p className="text-emerald-200 text-sm">Your price memory & protection</p>
            </div>
          </div>
          <button className="bg-white/20 p-2 rounded-lg relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {priceStats.alerts}
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{priceStats.totalTracked}</p>
            <p className="text-xs text-emerald-200">Items Tracked</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-300">₹{(priceStats.moneySaved/1000).toFixed(1)}K</p>
            <p className="text-xs text-emerald-200">Saved</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-red-300">{priceStats.overpayments}</p>
            <p className="text-xs text-emerald-200">Overpaid</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{priceStats.avgSavings}%</p>
            <p className="text-xs text-emerald-200">Avg Savings</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-800 border-b border-gray-700">
        {[
          { id: 'history', label: 'Price History' },
          { id: 'alerts', label: 'Overpayment Alerts' },
          { id: 'drops', label: 'Price Drops' },
          { id: 'nearby', label: 'Cheapest Nearby' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === tab.id
                ? 'text-emerald-400 border-b-2 border-emerald-400'
                : 'text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'history' && (
          <>
            {/* Category Filter */}
            <div className="flex overflow-x-auto space-x-2 mb-4 pb-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex-shrink-0 px-3 py-2 rounded-full text-sm flex items-center ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  <span className="mr-1">{cat.icon}</span> {cat.name}
                </button>
              ))}
            </div>

            {/* Price History List */}
            <div className="space-y-3">
              {filteredHistory.map(item => (
                <div key={item.id} className="bg-gray-800 rounded-xl p-4">
                  {item.alert && (
                    <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-2 mb-3 flex items-center">
                      <AlertTriangle size={16} className="text-red-400 mr-2" />
                      <p className="text-red-400 text-sm">{item.alertMessage}</p>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-white font-medium">{item.name}</h4>
                      <p className="text-gray-400 text-sm">{item.store}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold">₹{item.currentPrice}</p>
                      <div className={`flex items-center text-sm ${
                        item.trend === 'up' ? 'text-red-400' :
                        item.trend === 'down' ? 'text-green-400' : 'text-gray-400'
                      }`}>
                        {item.trend === 'up' ? <TrendingUp size={14} /> :
                         item.trend === 'down' ? <TrendingDown size={14} /> : null}
                        <span className="ml-1">{item.change}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center text-sm mb-3">
                    <div className="bg-gray-700/50 rounded-lg p-2">
                      <p className="text-gray-400 text-xs">Last Paid</p>
                      <p className="text-white">₹{item.lastPaid}</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2">
                      <p className="text-gray-400 text-xs">Lowest</p>
                      <p className="text-green-400">₹{item.lowestEver}</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2">
                      <p className="text-gray-400 text-xs">Highest</p>
                      <p className="text-red-400">₹{item.highestEver}</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2">
                      <p className="text-gray-400 text-xs">Average</p>
                      <p className="text-blue-400">₹{item.avgPrice}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{item.purchases} purchases • ₹{item.totalSpent} total</span>
                    <span>{item.lastBought}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'alerts' && (
          <div className="space-y-3">
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 mb-4">
              <h3 className="text-red-400 font-bold mb-1">Overpayment Warning</h3>
              <p className="text-gray-300 text-sm">
                You could have saved ₹{overpaymentAlerts.reduce((sum, a) => sum + a.savings, 0)} on recent purchases
              </p>
            </div>

            {overpaymentAlerts.map(alert => (
              <div key={alert.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-medium">{alert.item}</h4>
                  <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs">
                    Overpaid ₹{alert.savings}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-900/20 rounded-lg p-3">
                    <p className="text-gray-400 text-xs mb-1">You Paid</p>
                    <p className="text-red-400 font-bold">₹{alert.paidPrice}</p>
                    <p className="text-gray-500 text-xs">{alert.paidAt}</p>
                  </div>
                  <div className="bg-green-900/20 rounded-lg p-3">
                    <p className="text-gray-400 text-xs mb-1">Better Price</p>
                    <p className="text-green-400 font-bold">₹{alert.betterPrice}</p>
                    <p className="text-gray-500 text-xs">{alert.betterStore} • {alert.distance}</p>
                  </div>
                </div>

                <button className="w-full mt-3 bg-emerald-600 text-white py-2 rounded-lg text-sm">
                  Set Price Alert for ₹{alert.betterPrice}
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'drops' && (
          <div className="space-y-3">
            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4 mb-4">
              <h3 className="text-green-400 font-bold flex items-center">
                <Zap size={18} className="mr-2" />
                Price Drops on Your Tracked Items
              </h3>
              <p className="text-gray-300 text-sm">
                Items you've bought before are now cheaper!
              </p>
            </div>

            {priceDrops.map(drop => (
              <div key={drop.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-white font-medium">{drop.item}</h4>
                    <p className="text-gray-400 text-sm">{drop.store}</p>
                  </div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                    -{drop.drop}%
                  </span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-gray-500 line-through mr-2">₹{drop.oldPrice}</span>
                    <span className="text-green-400 font-bold text-xl">₹{drop.currentPrice}</span>
                  </div>
                  <span className="text-yellow-400 text-sm">{drop.expires}</span>
                </div>

                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium">
                  Buy Now & Save ₹{drop.oldPrice - drop.currentPrice}
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'nearby' && (
          <div className="space-y-4">
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
              <h3 className="text-blue-400 font-bold flex items-center">
                <MapPin size={18} className="mr-2" />
                Cheapest Prices Near You
              </h3>
              <p className="text-gray-300 text-sm">
                Real-time price comparison from nearby stores
              </p>
            </div>

            {cheapestNearby.map((item, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-4">
                <h4 className="text-white font-medium mb-3">{item.item}</h4>
                <div className="space-y-2">
                  {item.stores.map((store, storeIdx) => (
                    <div
                      key={storeIdx}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        storeIdx === 0 ? 'bg-green-900/30 border border-green-500/30' : 'bg-gray-700/50'
                      }`}
                    >
                      <div className="flex items-center">
                        {storeIdx === 0 && (
                          <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded mr-2">
                            CHEAPEST
                          </span>
                        )}
                        <span className="text-white">{store.name}</span>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${storeIdx === 0 ? 'text-green-400' : 'text-white'}`}>
                          ₹{store.price}
                        </p>
                        <p className="text-gray-400 text-xs">{store.distance}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceLedger;
