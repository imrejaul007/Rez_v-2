import React, { useState } from 'react';
import {
  ArrowLeft, Search, Filter, Plus, Edit, Trash2, Download,
  Upload, CheckCircle, AlertCircle, Info, FileText, Database,
  ChevronRight, Tag, Percent
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantHSNCodes = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('mapped');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddMapping, setShowAddMapping] = useState(false);

  const stats = {
    totalProducts: 450,
    mapped: 420,
    unmapped: 30,
    sacCodes: 15
  };

  const hsnMappings = [
    {
      id: 1,
      code: '1006',
      description: 'Rice',
      gstRate: 5,
      products: ['Basmati Rice', 'Brown Rice', 'Jasmine Rice'],
      productCount: 12
    },
    {
      id: 2,
      code: '0401',
      description: 'Milk and cream',
      gstRate: 0,
      products: ['Full Cream Milk', 'Toned Milk', 'Double Toned'],
      productCount: 8
    },
    {
      id: 3,
      code: '1905',
      description: 'Bread, pastry, cakes',
      gstRate: 5,
      products: ['White Bread', 'Brown Bread', 'Multigrain'],
      productCount: 15
    },
    {
      id: 4,
      code: '2106',
      description: 'Food preparations',
      gstRate: 18,
      products: ['Ready to Eat Meals', 'Frozen Foods'],
      productCount: 25
    },
    {
      id: 5,
      code: '2201',
      description: 'Waters, mineral waters',
      gstRate: 18,
      products: ['Mineral Water', 'Packaged Drinking Water'],
      productCount: 6
    },
    {
      id: 6,
      code: '2202',
      description: 'Aerated waters, beverages',
      gstRate: 28,
      products: ['Soft Drinks', 'Energy Drinks', 'Flavored Drinks'],
      productCount: 18
    }
  ];

  const sacMappings = [
    {
      id: 101,
      code: '996331',
      description: 'Catering services',
      gstRate: 5,
      services: ['Party Orders', 'Bulk Catering'],
      serviceCount: 3
    },
    {
      id: 102,
      code: '996332',
      description: 'Outdoor catering',
      gstRate: 18,
      services: ['Event Catering', 'Corporate Catering'],
      serviceCount: 2
    },
    {
      id: 103,
      code: '998551',
      description: 'Beauty parlor services',
      gstRate: 18,
      services: ['Haircut', 'Facial', 'Spa'],
      serviceCount: 12
    }
  ];

  const unmappedProducts = [
    { id: 1, name: 'Organic Honey 500g', category: 'Grocery', suggestedHSN: '0409' },
    { id: 2, name: 'Green Tea 100g', category: 'Beverages', suggestedHSN: '0902' },
    { id: 3, name: 'Almond Butter 200g', category: 'Grocery', suggestedHSN: '2008' },
    { id: 4, name: 'Protein Bar', category: 'Health', suggestedHSN: '1806' }
  ];

  const gstRates = [
    { rate: 0, label: 'Exempt', color: 'bg-green-500/20 text-green-400' },
    { rate: 5, label: '5%', color: 'bg-blue-500/20 text-blue-400' },
    { rate: 12, label: '12%', color: 'bg-yellow-500/20 text-yellow-400' },
    { rate: 18, label: '18%', color: 'bg-orange-500/20 text-orange-400' },
    { rate: 28, label: '28%', color: 'bg-red-500/20 text-red-400' }
  ];

  const getGSTColor = (rate) => {
    const found = gstRates.find(r => r.rate === rate);
    return found ? found.color : 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">HSN/SAC Codes</h1>
              <p className="text-emerald-200 text-sm">Manage product tax codes</p>
            </div>
          </div>
          <button
            onClick={() => setShowAddMapping(true)}
            className="bg-white/20 p-2 rounded-lg"
          >
            <Plus size={24} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{stats.totalProducts}</p>
            <p className="text-xs text-emerald-200">Products</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold text-green-400">{stats.mapped}</p>
            <p className="text-xs text-emerald-200">Mapped</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold text-red-400">{stats.unmapped}</p>
            <p className="text-xs text-emerald-200">Unmapped</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{stats.sacCodes}</p>
            <p className="text-xs text-emerald-200">SAC Codes</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search HSN/SAC code or product..."
            className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-xl"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pb-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('mapped')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'mapped' ? 'bg-emerald-600 text-white' : 'text-gray-400'
            }`}
          >
            HSN Codes
          </button>
          <button
            onClick={() => setActiveTab('sac')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'sac' ? 'bg-emerald-600 text-white' : 'text-gray-400'
            }`}
          >
            SAC Codes
          </button>
          <button
            onClick={() => setActiveTab('unmapped')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'unmapped' ? 'bg-red-600 text-white' : 'text-gray-400'
            }`}
          >
            Unmapped
          </button>
        </div>
      </div>

      {/* HSN Mappings */}
      {activeTab === 'mapped' && (
        <div className="px-4 space-y-3">
          {hsnMappings.map(mapping => (
            <div key={mapping.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center">
                    <code className="text-emerald-400 font-bold text-lg font-mono">{mapping.code}</code>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${getGSTColor(mapping.gstRate)}`}>
                      {mapping.gstRate}% GST
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{mapping.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-400">
                    <Edit size={18} />
                  </button>
                </div>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-3 mb-3">
                <p className="text-gray-400 text-xs mb-2">Products ({mapping.productCount})</p>
                <div className="flex flex-wrap gap-1">
                  {mapping.products.slice(0, 3).map((product, idx) => (
                    <span key={idx} className="bg-gray-600 text-gray-200 text-xs px-2 py-1 rounded">
                      {product}
                    </span>
                  ))}
                  {mapping.productCount > 3 && (
                    <span className="text-emerald-400 text-xs px-2 py-1">
                      +{mapping.productCount - 3} more
                    </span>
                  )}
                </div>
              </div>

              <button className="text-emerald-400 text-sm flex items-center">
                Manage Products <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* SAC Mappings */}
      {activeTab === 'sac' && (
        <div className="px-4 space-y-3">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-4">
            <div className="flex items-start">
              <Info size={18} className="text-blue-400 mr-2 mt-0.5" />
              <div>
                <p className="text-blue-400 font-medium">SAC Codes for Services</p>
                <p className="text-gray-300 text-sm">Service Accounting Codes are used for service-based businesses</p>
              </div>
            </div>
          </div>

          {sacMappings.map(mapping => (
            <div key={mapping.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center">
                    <code className="text-blue-400 font-bold text-lg font-mono">{mapping.code}</code>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${getGSTColor(mapping.gstRate)}`}>
                      {mapping.gstRate}% GST
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{mapping.description}</p>
                </div>
                <button className="text-blue-400">
                  <Edit size={18} />
                </button>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-3">
                <p className="text-gray-400 text-xs mb-2">Services ({mapping.serviceCount})</p>
                <div className="flex flex-wrap gap-1">
                  {mapping.services.map((service, idx) => (
                    <span key={idx} className="bg-gray-600 text-gray-200 text-xs px-2 py-1 rounded">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Unmapped Products */}
      {activeTab === 'unmapped' && (
        <div className="px-4 space-y-3">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-4">
            <div className="flex items-start">
              <AlertCircle size={18} className="text-red-400 mr-2 mt-0.5" />
              <div>
                <p className="text-red-400 font-medium">Unmapped Products</p>
                <p className="text-gray-300 text-sm">These products need HSN codes for GST compliance</p>
              </div>
            </div>
          </div>

          {unmappedProducts.map(product => (
            <div key={product.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-white font-bold">{product.name}</p>
                  <p className="text-gray-400 text-sm">{product.category}</p>
                </div>
                <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs">
                  Needs Mapping
                </span>
              </div>

              {product.suggestedHSN && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 mb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-emerald-400 text-xs">Suggested HSN</p>
                      <code className="text-white font-mono">{product.suggestedHSN}</code>
                    </div>
                    <button className="bg-emerald-600 text-white px-3 py-1 rounded-lg text-sm">
                      Apply
                    </button>
                  </div>
                </div>
              )}

              <button className="w-full bg-gray-700 text-white py-2 rounded-lg text-sm font-medium">
                Assign HSN Code
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Quick Actions */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-gray-800 p-4 rounded-xl text-center">
            <Upload size={24} className="mx-auto mb-2 text-emerald-400" />
            <p className="text-white text-sm font-medium">Import CSV</p>
            <p className="text-gray-400 text-xs">Bulk mapping</p>
          </button>
          <button className="bg-gray-800 p-4 rounded-xl text-center">
            <Download size={24} className="mx-auto mb-2 text-blue-400" />
            <p className="text-white text-sm font-medium">Export HSN</p>
            <p className="text-gray-400 text-xs">Download all</p>
          </button>
        </div>
      </div>

      {/* Add Mapping Modal */}
      {showAddMapping && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
          <div className="bg-gray-800 rounded-t-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-bold">Add HSN/SAC Code</h3>
                <button onClick={() => setShowAddMapping(false)} className="text-gray-400">
                  ✕
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Code Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-emerald-600 text-white p-3 rounded-xl">
                    HSN Code
                  </button>
                  <button className="bg-gray-700 text-gray-300 p-3 rounded-xl">
                    SAC Code
                  </button>
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">HSN Code</label>
                <input
                  type="text"
                  placeholder="e.g., 1006"
                  className="w-full bg-gray-700 text-white p-3 rounded-xl font-mono"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Description</label>
                <input
                  type="text"
                  placeholder="e.g., Rice"
                  className="w-full bg-gray-700 text-white p-3 rounded-xl"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">GST Rate</label>
                <div className="grid grid-cols-5 gap-2">
                  {gstRates.map(rate => (
                    <button
                      key={rate.rate}
                      className={`p-3 rounded-xl text-center ${rate.color}`}
                    >
                      {rate.label}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold">
                Add Code
              </button>
            </div>
          </div>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantHSNCodes;
