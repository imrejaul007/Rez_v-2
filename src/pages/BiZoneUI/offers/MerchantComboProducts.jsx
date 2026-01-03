import React, { useState } from 'react';
import {
  ArrowLeft, Plus, Search, Package, Gift, Tag, Edit, Trash2,
  ChevronRight, Check, X, Image, Percent, IndianRupee, ToggleLeft, ToggleRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantComboProducts = () => {
  const navigate = useNavigate();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [combos, setCombos] = useState([
    {
      id: 1,
      name: 'Family Meal Deal',
      description: '2 Mains + 4 Rotis + 2 Rice + 2 Drinks',
      products: [
        { name: 'Butter Chicken', qty: 1, price: 340 },
        { name: 'Dal Makhani', qty: 1, price: 260 },
        { name: 'Butter Naan', qty: 4, price: 50 },
        { name: 'Jeera Rice', qty: 2, price: 120 },
        { name: 'Lassi', qty: 2, price: 80 },
      ],
      actualPrice: 1240,
      comboPrice: 999,
      savings: 241,
      savingsPercent: 19,
      image: null,
      isActive: true,
      soldCount: 156
    },
    {
      id: 2,
      name: 'Breakfast Combo',
      description: 'Dosa + Vada + Coffee',
      products: [
        { name: 'Masala Dosa', qty: 1, price: 120 },
        { name: 'Medu Vada (2pc)', qty: 1, price: 80 },
        { name: 'Filter Coffee', qty: 1, price: 50 },
      ],
      actualPrice: 250,
      comboPrice: 199,
      savings: 51,
      savingsPercent: 20,
      image: null,
      isActive: true,
      soldCount: 89
    },
    {
      id: 3,
      name: 'Party Pack - 10 Pax',
      description: 'Complete party meal for 10 people',
      products: [
        { name: 'Veg Biryani', qty: 2, price: 280 },
        { name: 'Chicken Biryani', qty: 2, price: 320 },
        { name: 'Raita', qty: 4, price: 60 },
        { name: 'Gulab Jamun', qty: 20, price: 25 },
      ],
      actualPrice: 2140,
      comboPrice: 1799,
      savings: 341,
      savingsPercent: 16,
      image: null,
      isActive: false,
      soldCount: 23
    },
  ]);

  const availableProducts = [
    { id: 1, name: 'Butter Chicken', price: 340, category: 'Main Course' },
    { id: 2, name: 'Dal Makhani', price: 260, category: 'Main Course' },
    { id: 3, name: 'Paneer Tikka', price: 280, category: 'Starters' },
    { id: 4, name: 'Butter Naan', price: 50, category: 'Breads' },
    { id: 5, name: 'Jeera Rice', price: 120, category: 'Rice' },
    { id: 6, name: 'Lassi', price: 80, category: 'Beverages' },
    { id: 7, name: 'Masala Dosa', price: 120, category: 'South Indian' },
    { id: 8, name: 'Filter Coffee', price: 50, category: 'Beverages' },
    { id: 9, name: 'Gulab Jamun', price: 100, category: 'Desserts' },
    { id: 10, name: 'Chicken Biryani', price: 320, category: 'Biryani' },
  ];

  const stats = {
    totalCombos: combos.length,
    activeCombos: combos.filter(c => c.isActive).length,
    totalSold: combos.reduce((sum, c) => sum + c.soldCount, 0),
    avgSavings: Math.round(combos.reduce((sum, c) => sum + c.savingsPercent, 0) / combos.length)
  };

  const toggleComboStatus = (comboId) => {
    setCombos(prev => prev.map(c =>
      c.id === comboId ? { ...c, isActive: !c.isActive } : c
    ));
  };

  const calculateComboTotal = () => {
    return selectedProducts.reduce((sum, p) => sum + (p.price * p.qty), 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Combo Products</h1>
              <p className="text-fuchsia-200 text-sm">Bundle deals & meal combos</p>
            </div>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-white/20 px-4 py-2 rounded-lg flex items-center"
          >
            <Plus size={18} className="mr-1" /> Create
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.totalCombos}</p>
            <p className="text-xs text-fuchsia-200">Combos</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.activeCombos}</p>
            <p className="text-xs text-fuchsia-200">Active</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.totalSold}</p>
            <p className="text-xs text-fuchsia-200">Sold</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.avgSavings}%</p>
            <p className="text-xs text-fuchsia-200">Avg Saving</p>
          </div>
        </div>
      </div>

      {/* Combo List */}
      <div className="p-4 space-y-4">
        {combos.map(combo => (
          <div key={combo.id} className={`bg-gray-800 rounded-xl overflow-hidden ${!combo.isActive && 'opacity-60'}`}>
            {/* Combo Header */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-xl flex items-center justify-center mr-3">
                    <Gift size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{combo.name}</h3>
                    <p className="text-gray-400 text-sm">{combo.description}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-gray-500 line-through text-sm mr-2">₹{combo.actualPrice}</span>
                      <span className="text-green-400 font-bold">₹{combo.comboPrice}</span>
                      <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full ml-2">
                        Save {combo.savingsPercent}%
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => toggleComboStatus(combo.id)}
                  className={combo.isActive ? 'text-green-400' : 'text-gray-500'}
                >
                  {combo.isActive ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                </button>
              </div>

              {/* Products in Combo */}
              <div className="bg-gray-700/30 rounded-lg p-3 mb-3">
                <p className="text-gray-400 text-xs mb-2">Includes:</p>
                <div className="flex flex-wrap gap-2">
                  {combo.products.map((product, idx) => (
                    <span key={idx} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                      {product.name} {product.qty > 1 && `×${product.qty}`}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats & Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-400 text-sm">
                  <Package size={14} className="mr-1" />
                  <span>{combo.soldCount} sold</span>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-gray-700 text-white p-2 rounded-lg">
                    <Edit size={16} />
                  </button>
                  <button className="bg-red-600/20 text-red-400 p-2 rounded-lg">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Combo Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="w-full bg-gray-900 rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-lg font-bold">Create Combo</h3>
              <button onClick={() => setShowCreateModal(false)}>
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            {/* Combo Details */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Combo Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Family Meal Deal"
                  className="w-full bg-gray-800 text-white p-3 rounded-xl"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Description</label>
                <input
                  type="text"
                  placeholder="e.g. 2 Mains + 4 Rotis + 2 Drinks"
                  className="w-full bg-gray-800 text-white p-3 rounded-xl"
                />
              </div>
            </div>

            {/* Select Products */}
            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-3 block">Add Products</label>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {availableProducts.map(product => {
                  const isSelected = selectedProducts.find(p => p.id === product.id);
                  return (
                    <button
                      key={product.id}
                      onClick={() => {
                        if (isSelected) {
                          setSelectedProducts(prev => prev.filter(p => p.id !== product.id));
                        } else {
                          setSelectedProducts(prev => [...prev, { ...product, qty: 1 }]);
                        }
                      }}
                      className={`w-full flex items-center justify-between p-3 rounded-lg ${
                        isSelected ? 'bg-fuchsia-600' : 'bg-gray-800'
                      }`}
                    >
                      <div className="flex items-center">
                        {isSelected && <Check size={16} className="mr-2" />}
                        <span className="text-white">{product.name}</span>
                        <span className="text-gray-400 text-sm ml-2">({product.category})</span>
                      </div>
                      <span className="text-white">₹{product.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Items */}
            {selectedProducts.length > 0 && (
              <div className="mb-6">
                <label className="text-gray-400 text-sm mb-3 block">Selected Items ({selectedProducts.length})</label>
                <div className="bg-gray-800 rounded-xl p-4 space-y-2">
                  {selectedProducts.map(product => (
                    <div key={product.id} className="flex items-center justify-between">
                      <span className="text-white">{product.name}</span>
                      <div className="flex items-center">
                        <button
                          onClick={() => {
                            setSelectedProducts(prev => prev.map(p =>
                              p.id === product.id ? { ...p, qty: Math.max(1, p.qty - 1) } : p
                            ));
                          }}
                          className="bg-gray-700 text-white w-8 h-8 rounded-lg"
                        >-</button>
                        <span className="text-white mx-3">{product.qty}</span>
                        <button
                          onClick={() => {
                            setSelectedProducts(prev => prev.map(p =>
                              p.id === product.id ? { ...p, qty: p.qty + 1 } : p
                            ));
                          }}
                          className="bg-gray-700 text-white w-8 h-8 rounded-lg"
                        >+</button>
                        <span className="text-white ml-4 w-16 text-right">₹{product.price * product.qty}</span>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between pt-3 border-t border-gray-700">
                    <span className="text-gray-400">Total Value</span>
                    <span className="text-white font-bold">₹{calculateComboTotal()}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Combo Price */}
            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-2 block">Combo Price *</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full bg-gray-800 text-white text-xl font-bold pl-10 pr-4 py-4 rounded-xl"
                />
              </div>
              {selectedProducts.length > 0 && (
                <p className="text-gray-400 text-sm mt-2">
                  Original: ₹{calculateComboTotal()} | Set combo price to show savings
                </p>
              )}
            </div>

            {/* Create Button */}
            <button className="w-full bg-fuchsia-600 text-white py-4 rounded-xl font-bold">
              Create Combo
            </button>
          </div>
        </div>
      )}

      <BottomNav userType="merchant" />
    </div>
  );
};

export default MerchantComboProducts;
