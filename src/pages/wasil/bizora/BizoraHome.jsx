import React, { useState } from 'react';
import {
  Search, MapPin, Star, Clock, ChevronRight, Timer,
  Building2, Package, Truck, FileText, Users, Wallet,
  ShoppingCart, TrendingUp, Zap, Shield, BarChart3, Box
} from 'lucide-react';

// Bizora Home: B2B Bulk Orders & Supplies
// Backend API: GET /api/wasil/bizora/home
// Backend API: GET /api/wasil/bizora/products
// Backend API: GET /api/wasil/bizora/orders
// Backend API: POST /api/wasil/bizora/quote

const BizoraHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '🏢', color: 'bg-slate-700' },
    { id: 'office', name: 'Office', icon: '🖨️', color: 'bg-blue-500' },
    { id: 'pantry', name: 'Pantry', icon: '☕', color: 'bg-amber-500' },
    { id: 'hygiene', name: 'Hygiene', icon: '🧴', color: 'bg-green-500' },
    { id: 'packaging', name: 'Packaging', icon: '📦', color: 'bg-orange-500' },
    { id: 'electronics', name: 'Electronics', icon: '💻', color: 'bg-purple-500' },
    { id: 'furniture', name: 'Furniture', icon: '🪑', color: 'bg-rose-500' }
  ];

  const myBusiness = {
    name: "TechStart Solutions Pvt Ltd",
    gstin: "29AABCT1234A1Z5",
    creditLimit: 500000,
    creditUsed: 125000,
    ordersThisMonth: 12
  };

  const quickReorder = [
    { id: 1, name: "A4 Paper (500 sheets x 5)", quantity: "5 reams", price: 1450, lastOrder: "Weekly" },
    { id: 2, name: "Bisleri 1L x 24", quantity: "2 cases", price: 480, lastOrder: "Weekly" },
    { id: 3, name: "Hand Sanitizer 5L", quantity: "3 units", price: 1200, lastOrder: "Monthly" }
  ];

  const bulkDeals = [
    {
      id: 1,
      name: "HP LaserJet Printer",
      description: "M1005 Multifunction",
      image: "🖨️",
      moq: 5,
      pricePerUnit: 18999,
      discount: "15%",
      coins: 2000
    },
    {
      id: 2,
      name: "Office Chair Executive",
      description: "High-back, Ergonomic",
      image: "🪑",
      moq: 10,
      pricePerUnit: 8999,
      discount: "20%",
      coins: 1500
    }
  ];

  const products = [
    {
      id: 1,
      name: "JK Copier A4 Paper",
      description: "75 GSM, 500 sheets",
      image: "📄",
      pricePerUnit: 290,
      moq: 10,
      rating: 4.6,
      reviews: 1230,
      coins: 50,
      inStock: true
    },
    {
      id: 2,
      name: "Nescafe Classic",
      description: "200g Jar",
      image: "☕",
      pricePerUnit: 450,
      moq: 24,
      rating: 4.7,
      reviews: 890,
      coins: 80,
      inStock: true
    },
    {
      id: 3,
      name: "Dettol Hand Sanitizer",
      description: "5L Can",
      image: "🧴",
      pricePerUnit: 899,
      moq: 6,
      rating: 4.5,
      reviews: 567,
      coins: 100,
      inStock: true
    },
    {
      id: 4,
      name: "Brown Packing Tape",
      description: "48mm x 65m, 6 rolls",
      image: "📦",
      pricePerUnit: 320,
      moq: 12,
      rating: 4.4,
      reviews: 345,
      coins: 40,
      inStock: false
    }
  ];

  const recentOrders = [
    { id: "BZ-12345", items: 8, amount: 45600, status: "Delivered", date: "Jan 1" },
    { id: "BZ-12344", items: 5, amount: 23400, status: "In Transit", date: "Dec 30" },
    { id: "BZ-12343", items: 12, amount: 78900, status: "Processing", date: "Dec 28" }
  ];

  const benefits = [
    { icon: Wallet, text: "30-Day Credit" },
    { icon: Truck, text: "Free Delivery" },
    { icon: FileText, text: "GST Invoice" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-slate-400 text-xs">Business Account</p>
            <h1 className="text-lg font-bold text-white">{myBusiness.name}</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/10 px-3 py-1.5 rounded-full flex items-center gap-2">
              <span className="text-lg">🪙</span>
              <span className="text-white font-bold">12,450</span>
            </div>
            <button className="relative bg-white/10 p-2 rounded-full">
              <ShoppingCart className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Credit Limit Card */}
        <div className="bg-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-300 text-sm">Credit Available</span>
            <span className="text-xs text-slate-400">GSTIN: {myBusiness.gstin}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">
              ₹{((myBusiness.creditLimit - myBusiness.creditUsed) / 1000).toFixed(0)}K
            </span>
            <span className="text-slate-400 text-sm">
              of ₹{(myBusiness.creditLimit / 1000).toFixed(0)}K
            </span>
          </div>
          <div className="h-2 bg-white/20 rounded-full mt-3 overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${((myBusiness.creditLimit - myBusiness.creditUsed) / myBusiness.creditLimit) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Benefits Bar */}
      <div className="bg-white px-4 py-3 flex justify-around border-b border-gray-100">
        {benefits.map((b, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <b.icon className="w-4 h-4 text-slate-600" />
            <span className="text-xs text-gray-600">{b.text}</span>
          </div>
        ))}
      </div>

      {/* Quick Reorder */}
      <div className="px-4 mt-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Quick Reorder</h2>
          <button className="text-slate-600 text-sm">Order History</button>
        </div>

        <div className="space-y-2">
          {quickReorder.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 text-sm">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.quantity} • {item.lastOrder}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-800">₹{item.price.toLocaleString()}</p>
              </div>
              <button className="bg-slate-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium">
                Reorder
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-6">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center gap-2 min-w-[70px] ${
                activeCategory === cat.id ? 'opacity-100' : 'opacity-70'
              }`}
            >
              <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-2xl ${
                activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-slate-500' : ''
              }`}>
                {cat.icon}
              </div>
              <span className="text-xs text-gray-700 font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bulk Deals */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Bulk Deals
          </h2>
          <button className="text-slate-600 text-sm">View All</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {bulkDeals.map((deal) => (
            <div key={deal.id} className="flex-shrink-0 w-56 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-slate-100 to-gray-100 flex items-center justify-center text-5xl relative">
                {deal.image}
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                  {deal.discount} OFF
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm">{deal.name}</h3>
                <p className="text-xs text-gray-500">{deal.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-bold text-gray-800">₹{deal.pricePerUnit.toLocaleString()}</span>
                  <span className="text-xs text-gray-500">per unit</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-orange-600">MOQ: {deal.moq} units</span>
                  <span className="text-yellow-600 text-xs">+{deal.coins}🪙</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Business Essentials</h2>
          <button className="text-slate-600 text-sm">See All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-28 bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center text-5xl relative">
                {product.image}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
                    <span className="bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm truncate">{product.name}</h3>
                <p className="text-xs text-gray-500">{product.description}</p>
                <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-gray-800">₹{product.pricePerUnit}</span>
                  <span className="text-xs text-gray-500">/unit</span>
                </div>
                <p className="text-xs text-orange-600">MOQ: {product.moq} units</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-600 text-xs">+{product.coins}🪙</span>
                  <button
                    disabled={!product.inStock}
                    className={`px-4 py-1.5 rounded-lg text-xs font-medium ${
                      product.inStock
                        ? 'bg-slate-700 text-white'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Orders */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Recent Orders</h2>
          <button className="text-slate-600 text-sm">View All</button>
        </div>

        <div className="space-y-2">
          {recentOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-slate-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 text-sm">Order #{order.id}</h3>
                <p className="text-xs text-gray-500">{order.items} items • {order.date}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-800">₹{order.amount.toLocaleString()}</p>
                <span className={`text-xs ${
                  order.status === 'Delivered' ? 'text-green-600' :
                  order.status === 'In Transit' ? 'text-blue-600' : 'text-orange-600'
                }`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Request Quote */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold">Need Custom Quote?</h3>
              <p className="text-slate-300 text-sm">Get bulk pricing for large orders</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BizoraHome;
