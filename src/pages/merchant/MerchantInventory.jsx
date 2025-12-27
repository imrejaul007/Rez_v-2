import { useState } from 'react';
import { Package, Plus, Search, Filter, Download, Upload, Edit, Trash2, Eye, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export default function MerchantInventory() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showBulkUpload, setShowBulkUpload] = useState(false);

  const [products, setProducts] = useState([
    {
      id: 'PRD001',
      sku: 'SHOE-NIKE-001',
      name: 'Nike Air Max 270',
      category: 'Footwear',
      price: 12999,
      stock: 45,
      status: 'active',
      image: '🏃',
      variants: 3,
      sold: 124,
      revenueGenerated: 1611876,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'PRD002',
      sku: 'SHIRT-LEVI-002',
      name: 'Levi\'s Denim Shirt',
      category: 'Clothing',
      price: 2499,
      stock: 8,
      status: 'low_stock',
      image: '👕',
      variants: 2,
      sold: 89,
      revenueGenerated: 222411,
      lastUpdated: '2024-01-14'
    },
    {
      id: 'PRD003',
      sku: 'WATCH-FOSSIL-003',
      name: 'Fossil Chronograph Watch',
      category: 'Accessories',
      price: 8999,
      stock: 0,
      status: 'out_of_stock',
      image: '⌚',
      variants: 1,
      sold: 56,
      revenueGenerated: 503944,
      lastUpdated: '2024-01-13'
    },
    {
      id: 'PRD004',
      sku: 'BAG-WOODLAND-004',
      name: 'Woodland Leather Bag',
      category: 'Bags',
      price: 3499,
      stock: 23,
      status: 'active',
      image: '🎒',
      variants: 2,
      sold: 67,
      revenueGenerated: 234433,
      lastUpdated: '2024-01-15'
    },
    {
      id: 'PRD005',
      sku: 'GLASS-RAY-005',
      name: 'Ray-Ban Aviator',
      category: 'Accessories',
      price: 7499,
      status: 'inactive',
      stock: 15,
      image: '🕶️',
      variants: 1,
      sold: 34,
      revenueGenerated: 254966,
      lastUpdated: '2024-01-10'
    }
  ]);

  const [newProduct, setNewProduct] = useState({
    sku: '',
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
    variants: []
  });

  const stats = {
    totalProducts: products.length,
    activeProducts: products.filter(p => p.status === 'active').length,
    lowStock: products.filter(p => p.status === 'low_stock').length,
    outOfStock: products.filter(p => p.status === 'out_of_stock').length,
    totalValue: products.reduce((sum, p) => sum + (p.price * p.stock), 0)
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' ||
                      (activeTab === 'active' && product.status === 'active') ||
                      (activeTab === 'low_stock' && product.status === 'low_stock') ||
                      (activeTab === 'out_of_stock' && product.status === 'out_of_stock') ||
                      (activeTab === 'inactive' && product.status === 'inactive');
    return matchesSearch && matchesTab;
  });

  const getStatusBadge = (status) => {
    const badges = {
      active: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle, label: 'Active' },
      low_stock: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: AlertCircle, label: 'Low Stock' },
      out_of_stock: { bg: 'bg-red-100', text: 'text-red-800', icon: XCircle, label: 'Out of Stock' },
      inactive: { bg: 'bg-gray-100', text: 'text-gray-800', icon: XCircle, label: 'Inactive' }
    };
    const badge = badges[status];
    const Icon = badge.icon;
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
        <Icon className="w-3 h-3" />
        {badge.label}
      </span>
    );
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Package className="w-8 h-8 text-indigo-600" />
          Inventory & Catalog Management
        </h1>
        <p className="text-gray-600 mt-1">Manage your product catalog, stock levels, and SKU inventory</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-sm text-gray-600">Total Products</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">{stats.totalProducts}</div>
          <div className="text-xs text-gray-500 mt-1">Across all categories</div>
        </div>
        <div className="bg-white rounded-lg border border-green-200 p-4">
          <div className="text-sm text-green-600">Active Products</div>
          <div className="text-2xl font-bold text-green-900 mt-1">{stats.activeProducts}</div>
          <div className="text-xs text-green-600 mt-1">Ready to sell</div>
        </div>
        <div className="bg-white rounded-lg border border-yellow-200 p-4">
          <div className="text-sm text-yellow-600">Low Stock</div>
          <div className="text-2xl font-bold text-yellow-900 mt-1">{stats.lowStock}</div>
          <div className="text-xs text-yellow-600 mt-1">Need restocking</div>
        </div>
        <div className="bg-white rounded-lg border border-red-200 p-4">
          <div className="text-sm text-red-600">Out of Stock</div>
          <div className="text-2xl font-bold text-red-900 mt-1">{stats.outOfStock}</div>
          <div className="text-xs text-red-600 mt-1">Unavailable</div>
        </div>
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-4 text-white">
          <div className="text-sm text-indigo-100">Inventory Value</div>
          <div className="text-2xl font-bold mt-1">₹{(stats.totalValue / 100000).toFixed(1)}L</div>
          <div className="text-xs text-indigo-200 mt-1">Total stock value</div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 flex gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by product name or SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowBulkUpload(true)}
              className="flex items-center gap-2 px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50"
            >
              <Upload className="w-5 h-5" />
              Bulk Upload
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="w-5 h-5" />
              Export CSV
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Plus className="w-5 h-5" />
              Add Product
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mt-4 border-t pt-4">
          {['all', 'active', 'low_stock', 'out_of_stock', 'inactive'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{product.image}</div>
                      <div>
                        <div className="font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.variants} variant{product.variants > 1 ? 's' : ''}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-mono text-gray-900">{product.sku}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-semibold text-gray-900">₹{product.price.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-semibold ${
                      product.stock === 0 ? 'text-red-600' :
                      product.stock < 10 ? 'text-yellow-600' :
                      'text-green-600'
                    }`}>
                      {product.stock} units
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(product.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.sold} sold</div>
                    <div className="text-xs text-gray-500">₹{(product.revenueGenerated / 1000).toFixed(0)}K revenue</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-gray-600 hover:text-indigo-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-600 hover:text-indigo-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-600 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No products found</p>
          </div>
        )}
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Add New Product</h2>
              <p className="text-sm text-gray-600 mt-1">Fill in the product details to add to your inventory</p>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Name *</label>
                  <input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="Nike Air Max 270"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">SKU *</label>
                  <input
                    type="text"
                    value={newProduct.sku}
                    onChange={(e) => setNewProduct({...newProduct, sku: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="SHOE-NIKE-001"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select category</option>
                    <option value="Footwear">Footwear</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Bags">Bags</option>
                    <option value="Electronics">Electronics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹) *</label>
                  <input
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="12999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Initial Stock *</label>
                <input
                  type="number"
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="45"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  rows="3"
                  placeholder="Product description..."
                />
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Upload Modal */}
      {showBulkUpload && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-xl w-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Bulk Upload Products</h2>
              <p className="text-sm text-gray-600 mt-1">Upload CSV file to add multiple products at once</p>
            </div>

            <div className="p-6 space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-sm text-gray-600 mb-2">Drag and drop your CSV file here, or click to browse</p>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Choose File
                </button>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-medium text-blue-900 mb-2">CSV Format Requirements:</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Headers: SKU, Name, Category, Price, Stock</li>
                  <li>• Maximum 1000 products per upload</li>
                  <li>• File size limit: 5MB</li>
                </ul>
                <button className="text-sm text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  Download sample CSV template
                </button>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowBulkUpload(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Upload & Process
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
