import React, { useState } from 'react';
import {
  ArrowLeft, Users, ShoppingBag, Clock, Check, X, Plus, Minus,
  Send, CreditCard, Smartphone, QrCode, UtensilsCrossed, Bell,
  ChefHat, Receipt, Sparkles, User, Search, Filter, RefreshCw
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantCaptainApp = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tables');
  const [selectedTable, setSelectedTable] = useState(null);
  const [cart, setCart] = useState([]);
  const [showOrderPanel, setShowOrderPanel] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [tables, setTables] = useState([
    { id: 1, name: 'T1', status: 'occupied', guests: 4, order: 1250, time: '45 min', waiter: 'You' },
    { id: 2, name: 'T2', status: 'available', guests: 0, order: 0, time: '', waiter: '' },
    { id: 3, name: 'T3', status: 'occupied', guests: 2, order: 680, time: '20 min', waiter: 'You' },
    { id: 4, name: 'T4', status: 'reserved', guests: 6, order: 0, time: '7:30 PM', waiter: '' },
    { id: 5, name: 'T5', status: 'billing', guests: 3, order: 1890, time: '1 hr', waiter: 'You' },
    { id: 6, name: 'T6', status: 'available', guests: 0, order: 0, time: '', waiter: '' },
    { id: 7, name: 'T7', status: 'occupied', guests: 2, order: 450, time: '10 min', waiter: 'Rahul' },
    { id: 8, name: 'T8', status: 'occupied', guests: 5, order: 2100, time: '35 min', waiter: 'Priya' },
  ]);

  const categories = [
    { id: 'all', name: 'All', icon: '🍽️' },
    { id: 'starters', name: 'Starters', icon: '🥗' },
    { id: 'mains', name: 'Mains', icon: '🍛' },
    { id: 'breads', name: 'Breads', icon: '🫓' },
    { id: 'drinks', name: 'Drinks', icon: '🥤' },
    { id: 'desserts', name: 'Desserts', icon: '🍨' },
  ];

  const menuItems = [
    { id: 1, name: 'Paneer Tikka', price: 280, category: 'starters', veg: true, bestseller: true },
    { id: 2, name: 'Chicken 65', price: 320, category: 'starters', veg: false, bestseller: true },
    { id: 3, name: 'Veg Manchurian', price: 220, category: 'starters', veg: true },
    { id: 4, name: 'Fish Fry', price: 380, category: 'starters', veg: false },
    { id: 5, name: 'Dal Makhani', price: 260, category: 'mains', veg: true, bestseller: true },
    { id: 6, name: 'Butter Chicken', price: 340, category: 'mains', veg: false, bestseller: true },
    { id: 7, name: 'Paneer Butter Masala', price: 280, category: 'mains', veg: true },
    { id: 8, name: 'Biryani', price: 320, category: 'mains', veg: false },
    { id: 9, name: 'Butter Naan', price: 50, category: 'breads', veg: true },
    { id: 10, name: 'Garlic Naan', price: 60, category: 'breads', veg: true },
    { id: 11, name: 'Roti', price: 30, category: 'breads', veg: true },
    { id: 12, name: 'Lassi', price: 80, category: 'drinks', veg: true },
    { id: 13, name: 'Masala Chai', price: 40, category: 'drinks', veg: true },
    { id: 14, name: 'Cold Coffee', price: 120, category: 'drinks', veg: true },
    { id: 15, name: 'Gulab Jamun', price: 100, category: 'desserts', veg: true },
    { id: 16, name: 'Ice Cream', price: 120, category: 'desserts', veg: true },
  ];

  const [aiSuggestions] = useState([
    { item: 'Butter Naan', reason: 'Goes well with Dal Makhani' },
    { item: 'Lassi', reason: 'Popular combo with spicy dishes' },
    { item: 'Gulab Jamun', reason: 'Top dessert choice' },
  ]);

  const [pendingKOTs, setPendingKOTs] = useState([
    { id: 'KOT001', table: 'T1', items: ['Paneer Tikka x2', 'Dal Makhani'], status: 'preparing', time: '5 min ago' },
    { id: 'KOT002', table: 'T3', items: ['Butter Chicken', 'Naan x3'], status: 'ready', time: '2 min ago' },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'occupied': return 'bg-blue-500';
      case 'reserved': return 'bg-yellow-500';
      case 'billing': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const addToCart = (item) => {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const updateQty = (id, delta) => {
    setCart(cart.map(c => {
      if (c.id === id) {
        const newQty = c.qty + delta;
        return newQty > 0 ? { ...c, qty: newQty } : null;
      }
      return c;
    }).filter(Boolean));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sendKOT = () => {
    if (cart.length === 0 || !selectedTable) return;

    const newKOT = {
      id: `KOT${String(pendingKOTs.length + 3).padStart(3, '0')}`,
      table: selectedTable.name,
      items: cart.map(c => `${c.name} x${c.qty}`),
      status: 'preparing',
      time: 'Just now'
    };
    setPendingKOTs([newKOT, ...pendingKOTs]);
    setCart([]);
    setShowOrderPanel(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Captain App</h1>
              <p className="text-orange-200 text-sm">Waiter: Amit Kumar</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
              <span className="text-green-300">● Online</span>
            </div>
            <button className="relative p-2 bg-white/20 rounded-full">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">5</p>
            <p className="text-xs text-orange-200">My Tables</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">12</p>
            <p className="text-xs text-orange-200">Orders</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹8.5K</p>
            <p className="text-xs text-orange-200">Sales</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹420</p>
            <p className="text-xs text-orange-200">Tips</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-800 border-b border-gray-700">
        {['tables', 'orders', 'kots'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-sm font-medium capitalize ${
              activeTab === tab
                ? 'text-orange-400 border-b-2 border-orange-400'
                : 'text-gray-400'
            }`}
          >
            {tab === 'kots' ? 'KOTs' : tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'tables' && (
          <>
            {/* Table Legend */}
            <div className="flex justify-center space-x-4 mb-4 text-xs">
              <span className="flex items-center"><span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span> Available</span>
              <span className="flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-1"></span> Occupied</span>
              <span className="flex items-center"><span className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></span> Reserved</span>
              <span className="flex items-center"><span className="w-3 h-3 bg-purple-500 rounded-full mr-1"></span> Billing</span>
            </div>

            {/* Tables Grid */}
            <div className="grid grid-cols-4 gap-3">
              {tables.map(table => (
                <button
                  key={table.id}
                  onClick={() => {
                    setSelectedTable(table);
                    if (table.status !== 'available') {
                      setShowOrderPanel(true);
                    }
                  }}
                  className={`aspect-square rounded-xl p-2 flex flex-col items-center justify-center ${getStatusColor(table.status)} ${
                    selectedTable?.id === table.id ? 'ring-2 ring-white' : ''
                  }`}
                >
                  <span className="text-white font-bold text-lg">{table.name}</span>
                  {table.guests > 0 && (
                    <span className="text-white/80 text-xs flex items-center">
                      <Users size={10} className="mr-1" />{table.guests}
                    </span>
                  )}
                  {table.order > 0 && (
                    <span className="text-white/80 text-xs">₹{table.order}</span>
                  )}
                  {table.time && (
                    <span className="text-white/60 text-xs">{table.time}</span>
                  )}
                </button>
              ))}
            </div>

            {/* Selected Table Actions */}
            {selectedTable && (
              <div className="mt-4 bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold">Table {selectedTable.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs capitalize ${getStatusColor(selectedTable.status)}`}>
                    {selectedTable.status}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setShowOrderPanel(true)}
                    className="bg-orange-500 text-white py-2 rounded-lg text-sm flex items-center justify-center"
                  >
                    <Plus size={16} className="mr-1" /> Order
                  </button>
                  <button className="bg-purple-500 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                    <Receipt size={16} className="mr-1" /> Bill
                  </button>
                  <button className="bg-green-500 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                    <CreditCard size={16} className="mr-1" /> Pay
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-3">
            <h3 className="text-white font-semibold">Active Orders</h3>
            {tables.filter(t => t.status === 'occupied' || t.status === 'billing').map(table => (
              <div key={table.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(table.status)} text-white font-bold text-sm mr-3`}>
                      {table.name}
                    </span>
                    <div>
                      <p className="text-white font-medium">₹{table.order}</p>
                      <p className="text-gray-400 text-xs">{table.guests} guests • {table.time}</p>
                    </div>
                  </div>
                  <button className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'kots' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">Kitchen Orders</h3>
              <button className="text-orange-400 text-sm flex items-center">
                <RefreshCw size={14} className="mr-1" /> Refresh
              </button>
            </div>

            {pendingKOTs.map(kot => (
              <div key={kot.id} className={`rounded-xl p-4 ${
                kot.status === 'ready' ? 'bg-green-900/50 border border-green-500' : 'bg-gray-800'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-white font-mono text-sm mr-3">{kot.id}</span>
                    <span className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs">{kot.table}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs capitalize ${
                    kot.status === 'ready' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                  }`}>
                    {kot.status === 'ready' ? '✓ Ready' : 'Preparing'}
                  </span>
                </div>
                <div className="text-gray-300 text-sm">
                  {kot.items.join(', ')}
                </div>
                <p className="text-gray-500 text-xs mt-1">{kot.time}</p>

                {kot.status === 'ready' && (
                  <button className="w-full mt-3 bg-green-500 text-white py-2 rounded-lg text-sm font-medium">
                    Mark as Served
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Order Panel (Slide Up) */}
      {showOrderPanel && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 rounded-t-3xl max-h-[90vh] overflow-hidden">
            {/* Panel Header */}
            <div className="bg-gray-800 p-4 flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold">New Order - {selectedTable?.name}</h3>
                <p className="text-gray-400 text-sm">{cart.length} items • ₹{cartTotal}</p>
              </div>
              <button onClick={() => setShowOrderPanel(false)} className="text-gray-400">
                <X size={24} />
              </button>
            </div>

            {/* Search */}
            <div className="p-3 bg-gray-800/50">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex overflow-x-auto p-3 space-x-2 bg-gray-800/30">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm ${
                    selectedCategory === cat.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>

            {/* AI Suggestions */}
            {cart.length > 0 && (
              <div className="p-3 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
                <div className="flex items-center mb-2">
                  <Sparkles size={16} className="text-yellow-400 mr-2" />
                  <span className="text-yellow-400 text-sm font-medium">AI Suggestions</span>
                </div>
                <div className="flex space-x-2 overflow-x-auto">
                  {aiSuggestions.map((sug, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        const item = menuItems.find(m => m.name === sug.item);
                        if (item) addToCart(item);
                      }}
                      className="flex-shrink-0 bg-gray-800 border border-purple-500/30 rounded-lg p-2"
                    >
                      <p className="text-white text-sm">{sug.item}</p>
                      <p className="text-gray-400 text-xs">{sug.reason}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Menu Items */}
            <div className="overflow-y-auto max-h-[40vh] p-3">
              <div className="grid grid-cols-2 gap-2">
                {filteredItems.map(item => {
                  const inCart = cart.find(c => c.id === item.id);
                  return (
                    <div key={item.id} className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center">
                            <span className={`w-3 h-3 border-2 ${item.veg ? 'border-green-500' : 'border-red-500'} mr-1`}></span>
                            <span className="text-white text-sm font-medium">{item.name}</span>
                          </div>
                          {item.bestseller && (
                            <span className="text-yellow-400 text-xs">★ Bestseller</span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">₹{item.price}</span>
                        {inCart ? (
                          <div className="flex items-center bg-orange-500 rounded-lg">
                            <button onClick={() => updateQty(item.id, -1)} className="p-1 text-white">
                              <Minus size={16} />
                            </button>
                            <span className="text-white px-2">{inCart.qty}</span>
                            <button onClick={() => updateQty(item.id, 1)} className="p-1 text-white">
                              <Plus size={16} />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(item)}
                            className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm"
                          >
                            Add
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cart Summary */}
            {cart.length > 0 && (
              <div className="p-4 bg-gray-800 border-t border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-white font-medium">{cart.length} items</p>
                    <p className="text-gray-400 text-sm">{cart.map(c => `${c.name} x${c.qty}`).join(', ')}</p>
                  </div>
                  <p className="text-white font-bold text-lg">₹{cartTotal}</p>
                </div>
                <button
                  onClick={sendKOT}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-bold flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send to Kitchen (KOT)
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <BottomNav userType="merchant" />
    </div>
  );
};

export default MerchantCaptainApp;
