import React, { useState } from 'react';
import {
  Grid3X3, Move, RotateCw, Trash2, Save, Share2, Undo, Redo,
  Plus, Sofa, Lamp, Frame, Flower2, ChevronRight, Camera,
  Layers, Eye, Download, Sparkles, Ruler, Palette
} from 'lucide-react';

// HomeHub Room Planner: 2D/3D Room Design Tool
// Backend API: GET /api/homehub/planner/rooms/:userId
// Backend API: POST /api/homehub/planner/rooms
// Backend API: PUT /api/homehub/planner/rooms/:roomId
// Backend API: GET /api/homehub/planner/furniture

const HomeHubRoomPlanner = () => {
  const [activeTab, setActiveTab] = useState('furniture');
  const [viewMode, setViewMode] = useState('2d');
  const [selectedItem, setSelectedItem] = useState(null);

  const roomInfo = {
    name: "Living Room",
    dimensions: "4.5m x 3.8m",
    style: "Modern Minimalist",
    items: 8,
    lastEdited: "Today, 2:30 PM"
  };

  const furnitureCategories = [
    { id: 'seating', name: 'Seating', icon: '🛋️', count: 24 },
    { id: 'tables', name: 'Tables', icon: '🪵', count: 18 },
    { id: 'storage', name: 'Storage', icon: '🗄️', count: 15 },
    { id: 'lighting', name: 'Lighting', icon: '💡', count: 22 },
    { id: 'decor', name: 'Decor', icon: '🖼️', count: 35 },
    { id: 'plants', name: 'Plants', icon: '🪴', count: 12 }
  ];

  const furnitureItems = [
    { id: 1, name: "3-Seater Sofa", image: "🛋️", price: 45999, brand: "Urban Ladder" },
    { id: 2, name: "Armchair", image: "🪑", price: 15999, brand: "Pepperfry" },
    { id: 3, name: "Coffee Table", image: "🪵", price: 8999, brand: "IKEA" },
    { id: 4, name: "Floor Lamp", image: "🪔", price: 5999, brand: "Philips" },
    { id: 5, name: "Bookshelf", image: "📚", price: 12999, brand: "Urban Ladder" },
    { id: 6, name: "Indoor Plant", image: "🪴", price: 1499, brand: "Ugaoo" }
  ];

  const placedItems = [
    { id: 1, name: "Modern Sofa", position: { x: 20, y: 40 }, rotation: 0 },
    { id: 2, name: "Coffee Table", position: { x: 45, y: 50 }, rotation: 0 },
    { id: 3, name: "Floor Lamp", position: { x: 10, y: 25 }, rotation: 45 },
    { id: 4, name: "Plant Stand", position: { x: 80, y: 20 }, rotation: 0 }
  ];

  const colorPalettes = [
    { id: 1, name: "Nordic", colors: ['#F5F5F0', '#E8E4DF', '#C4B8A5', '#8B7355'] },
    { id: 2, name: "Modern", colors: ['#FFFFFF', '#F0F0F0', '#333333', '#E63946'] },
    { id: 3, name: "Warm", colors: ['#FFF8E7', '#FFE4C4', '#D2691E', '#8B4513'] },
    { id: 4, name: "Cool", colors: ['#F0F8FF', '#E0EEEE', '#4682B4', '#2F4F4F'] }
  ];

  const savedDesigns = [
    { id: 1, name: "Living Room v1", preview: "🏠", date: "Dec 28" },
    { id: 2, name: "Bedroom", preview: "🛏️", date: "Dec 25" },
    { id: 3, name: "Home Office", preview: "💼", date: "Dec 20" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gray-800 px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-white">{roomInfo.name}</h1>
            <p className="text-gray-400 text-sm">{roomInfo.dimensions} • {roomInfo.style}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-gray-700 p-2 rounded-lg">
              <Undo className="w-5 h-5 text-gray-300" />
            </button>
            <button className="bg-gray-700 p-2 rounded-lg">
              <Redo className="w-5 h-5 text-gray-300" />
            </button>
            <button className="bg-amber-500 p-2 rounded-lg">
              <Save className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex gap-2 bg-gray-700 p-1 rounded-lg">
          <button
            onClick={() => setViewMode('2d')}
            className={`flex-1 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 ${
              viewMode === '2d' ? 'bg-amber-500 text-white' : 'text-gray-300'
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
            2D View
          </button>
          <button
            onClick={() => setViewMode('3d')}
            className={`flex-1 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 ${
              viewMode === '3d' ? 'bg-amber-500 text-white' : 'text-gray-300'
            }`}
          >
            <Layers className="w-4 h-4" />
            3D View
          </button>
          <button
            onClick={() => setViewMode('ar')}
            className={`flex-1 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 ${
              viewMode === 'ar' ? 'bg-amber-500 text-white' : 'text-gray-300'
            }`}
          >
            <Camera className="w-4 h-4" />
            AR
          </button>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="mx-4 mt-4">
        <div className="bg-gray-800 rounded-xl h-64 relative overflow-hidden border-2 border-dashed border-gray-600">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(#666 1px, transparent 1px), linear-gradient(90deg, #666 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />

          {/* Room Outline */}
          <div className="absolute inset-4 border-2 border-amber-500/50 rounded-lg">
            {/* Placed Items Preview */}
            {placedItems.map((item) => (
              <div
                key={item.id}
                className={`absolute w-12 h-12 bg-amber-500/30 border-2 border-amber-500 rounded-lg flex items-center justify-center cursor-move ${
                  selectedItem === item.id ? 'ring-2 ring-white' : ''
                }`}
                style={{
                  left: `${item.position.x}%`,
                  top: `${item.position.y}%`,
                  transform: `rotate(${item.rotation}deg)`
                }}
                onClick={() => setSelectedItem(item.id)}
              >
                <span className="text-lg">🛋️</span>
              </div>
            ))}
          </div>

          {/* Dimensions */}
          <div className="absolute bottom-2 left-2 bg-gray-900/80 px-2 py-1 rounded text-xs text-gray-400 flex items-center gap-1">
            <Ruler className="w-3 h-3" />
            {roomInfo.dimensions}
          </div>

          {/* Zoom Controls */}
          <div className="absolute right-2 bottom-2 flex flex-col gap-1">
            <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-white text-lg">+</button>
            <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-white text-lg">-</button>
          </div>
        </div>
      </div>

      {/* Selected Item Controls */}
      {selectedItem && (
        <div className="mx-4 mt-3">
          <div className="bg-gray-800 rounded-xl p-3 flex items-center justify-between">
            <span className="text-white text-sm">Modern Sofa</span>
            <div className="flex gap-2">
              <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                <Move className="w-4 h-4 text-gray-300" />
              </button>
              <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                <RotateCw className="w-4 h-4 text-gray-300" />
              </button>
              <button className="w-8 h-8 bg-red-500/20 rounded flex items-center justify-center">
                <Trash2 className="w-4 h-4 text-red-400" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Panel */}
      <div className="mx-4 mt-4">
        {/* Tabs */}
        <div className="flex gap-2 mb-3">
          {[
            { id: 'furniture', name: 'Furniture', icon: Sofa },
            { id: 'colors', name: 'Colors', icon: Palette },
            { id: 'saved', name: 'Saved', icon: Save }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-800 text-gray-400'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Furniture Tab */}
        {activeTab === 'furniture' && (
          <div className="bg-gray-800 rounded-xl p-4">
            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-3 border-b border-gray-700">
              {furnitureCategories.map((cat) => (
                <button key={cat.id} className="flex-shrink-0 bg-gray-700 px-3 py-2 rounded-lg flex items-center gap-2">
                  <span>{cat.icon}</span>
                  <span className="text-white text-sm">{cat.name}</span>
                  <span className="text-xs text-gray-400">({cat.count})</span>
                </button>
              ))}
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-3 gap-3">
              {furnitureItems.map((item) => (
                <button key={item.id} className="bg-gray-700 rounded-lg p-3 text-center">
                  <div className="text-3xl mb-2">{item.image}</div>
                  <p className="text-white text-xs truncate">{item.name}</p>
                  <p className="text-amber-500 text-xs">₹{item.price.toLocaleString()}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Colors Tab */}
        {activeTab === 'colors' && (
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-medium mb-3">Color Palettes</h3>
            <div className="space-y-3">
              {colorPalettes.map((palette) => (
                <button key={palette.id} className="w-full bg-gray-700 rounded-lg p-3 flex items-center gap-3">
                  <div className="flex">
                    {palette.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 -ml-1 first:ml-0 rounded-full border-2 border-gray-800"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className="text-white text-sm">{palette.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Saved Tab */}
        {activeTab === 'saved' && (
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="space-y-3">
              {savedDesigns.map((design) => (
                <button key={design.id} className="w-full bg-gray-700 rounded-lg p-3 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center text-2xl">
                    {design.preview}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-white font-medium">{design.name}</p>
                    <p className="text-gray-400 text-xs">{design.date}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              ))}

              <button className="w-full bg-amber-500/20 border border-dashed border-amber-500 rounded-lg p-3 flex items-center justify-center gap-2 text-amber-500">
                <Plus className="w-5 h-5" />
                New Design
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mx-4 mt-4 mb-4 flex gap-3">
        <button className="flex-1 bg-gray-800 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2">
          <Eye className="w-5 h-5" />
          Preview
        </button>
        <button className="flex-1 bg-amber-500 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2">
          <Share2 className="w-5 h-5" />
          Share
        </button>
      </div>
    </div>
  );
};

export default HomeHubRoomPlanner;
