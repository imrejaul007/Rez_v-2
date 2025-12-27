import { useState } from 'react';
import { Layers, Plus, Edit, Trash2, Copy, Package, DollarSign, Image, Tag, AlertCircle, CheckCircle, Grid, List, Search, Filter, Download, Upload, Eye } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantProductVariants() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAddVariant, setShowAddVariant] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // grid, list, matrix
  const [searchQuery, setSearchQuery] = useState('');

  // Mock products with variants
  const [products, setProducts] = useState([
    {
      id: 'prod-001',
      name: 'Premium Cotton T-Shirt',
      category: 'Apparel',
      basePrice: 499,
      baseSKU: 'TSHIRT-001',
      variantType: 'multi', // single, multi
      attributes: [
        {
          name: 'Size',
          values: ['S', 'M', 'L', 'XL', 'XXL']
        },
        {
          name: 'Color',
          values: ['Black', 'White', 'Navy Blue', 'Grey', 'Red']
        }
      ],
      variants: [
        { sku: 'TSHIRT-001-S-BLK', size: 'S', color: 'Black', price: 499, stock: 25, barcode: '8901234567890' },
        { sku: 'TSHIRT-001-S-WHT', size: 'S', color: 'White', price: 499, stock: 30, barcode: '8901234567891' },
        { sku: 'TSHIRT-001-M-BLK', size: 'M', color: 'Black', price: 499, stock: 45, barcode: '8901234567892' },
        { sku: 'TSHIRT-001-M-WHT', size: 'M', color: 'White', price: 499, stock: 50, barcode: '8901234567893' },
        { sku: 'TSHIRT-001-L-BLK', size: 'L', color: 'Black', price: 499, stock: 40, barcode: '8901234567894' },
        { sku: 'TSHIRT-001-L-WHT', size: 'L', color: 'White', price: 499, stock: 38, barcode: '8901234567895' },
        { sku: 'TSHIRT-001-XL-BLK', size: 'XL', color: 'Black', price: 549, stock: 20, barcode: '8901234567896' },
        { sku: 'TSHIRT-001-XL-WHT', size: 'XL', color: 'White', price: 549, stock: 22, barcode: '8901234567897' }
      ],
      totalStock: 270,
      totalVariants: 8,
      image: null
    },
    {
      id: 'prod-002',
      name: 'Sports Shoes',
      category: 'Footwear',
      basePrice: 1999,
      baseSKU: 'SHOE-001',
      variantType: 'multi',
      attributes: [
        {
          name: 'Size',
          values: ['6', '7', '8', '9', '10', '11']
        },
        {
          name: 'Color',
          values: ['Black', 'White', 'Blue']
        }
      ],
      variants: [
        { sku: 'SHOE-001-6-BLK', size: '6', color: 'Black', price: 1999, stock: 10, barcode: '8901234567900' },
        { sku: 'SHOE-001-7-BLK', size: '7', color: 'Black', price: 1999, stock: 15, barcode: '8901234567901' },
        { sku: 'SHOE-001-8-BLK', size: '8', color: 'Black', price: 1999, stock: 20, barcode: '8901234567902' },
        { sku: 'SHOE-001-9-BLK', size: '9', color: 'Black', price: 1999, stock: 18, barcode: '8901234567903' },
        { sku: 'SHOE-001-10-BLK', size: '10', color: 'Black', price: 1999, stock: 12, barcode: '8901234567904' }
      ],
      totalStock: 75,
      totalVariants: 5,
      image: null
    },
    {
      id: 'prod-003',
      name: 'Wireless Mouse',
      category: 'Electronics',
      basePrice: 699,
      baseSKU: 'MOUSE-001',
      variantType: 'single',
      attributes: [
        {
          name: 'Color',
          values: ['Black', 'Silver', 'Blue']
        }
      ],
      variants: [
        { sku: 'MOUSE-001-BLK', color: 'Black', price: 699, stock: 50, barcode: '8901234567910' },
        { sku: 'MOUSE-001-SLV', color: 'Silver', price: 699, stock: 35, barcode: '8901234567911' },
        { sku: 'MOUSE-001-BLU', color: 'Blue', price: 749, stock: 25, barcode: '8901234567912' }
      ],
      totalStock: 110,
      totalVariants: 3,
      image: null
    },
    {
      id: 'prod-004',
      name: 'Water Bottle',
      category: 'Accessories',
      basePrice: 299,
      baseSKU: 'BOTTLE-001',
      variantType: 'single',
      attributes: [
        {
          name: 'Capacity',
          values: ['500ml', '750ml', '1L']
        }
      ],
      variants: [
        { sku: 'BOTTLE-001-500', capacity: '500ml', price: 299, stock: 80, barcode: '8901234567920' },
        { sku: 'BOTTLE-001-750', capacity: '750ml', price: 349, stock: 60, barcode: '8901234567921' },
        { sku: 'BOTTLE-001-1L', capacity: '1L', price: 399, stock: 45, barcode: '8901234567922' }
      ],
      totalStock: 185,
      totalVariants: 3,
      image: null
    }
  ]);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.baseSKU.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate portfolio metrics
  const portfolioMetrics = {
    totalProducts: products.length,
    totalVariants: products.reduce((sum, p) => sum + p.totalVariants, 0),
    totalStock: products.reduce((sum, p) => sum + p.totalStock, 0),
    avgVariantsPerProduct: (products.reduce((sum, p) => sum + p.totalVariants, 0) / products.length).toFixed(1)
  };

  const getStockStatus = (stock) => {
    if (stock === 0) return { color: 'text-red-600 bg-red-50 border-red-200', label: 'Out of Stock' };
    if (stock < 10) return { color: 'text-yellow-600 bg-yellow-50 border-yellow-200', label: 'Low Stock' };
    return { color: 'text-green-600 bg-green-50 border-green-200', label: 'In Stock' };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Variants Manager</h1>
              <p className="text-gray-600">Manage product variations with sizes, colors, and combinations</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Bulk Import
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export
              </button>
              <button
                onClick={() => setShowAddVariant(true)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Product
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Products</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{portfolioMetrics.totalProducts}</p>
              </div>
              <Package className="w-8 h-8 text-gray-400" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-indigo-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-indigo-600">Total Variants</p>
                <p className="text-2xl font-bold text-indigo-700 mt-1">{portfolioMetrics.totalVariants}</p>
              </div>
              <Layers className="w-8 h-8 text-indigo-500" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600">Total Stock</p>
                <p className="text-2xl font-bold text-green-700 mt-1">{portfolioMetrics.totalStock}</p>
              </div>
              <Package className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Variants/Product</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{portfolioMetrics.avgVariantsPerProduct}</p>
              </div>
              <Layers className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Search and View Mode */}
        <div className="mb-6 flex gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg ${
                viewMode === 'grid' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg ${
                viewMode === 'list' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              className={`px-4 py-2 rounded-lg ${
                viewMode === 'matrix' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              <Layers className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Display */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{product.name}</h3>
                      <p className="text-sm text-indigo-100 mt-1">{product.category}</p>
                    </div>
                    <Package className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Base SKU</span>
                    <span className="font-mono font-semibold">{product.baseSKU}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Base Price</span>
                    <span className="font-semibold">₹{product.basePrice}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Variants</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Layers className="w-4 h-4" />
                      {product.totalVariants}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Stock</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      getStockStatus(product.totalStock).color
                    }`}>
                      {product.totalStock} units
                    </span>
                  </div>

                  <div className="border-t pt-3">
                    <p className="text-xs text-gray-600 mb-2">Attributes:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.attributes.map((attr, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {attr.name} ({attr.values.length})
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-3">
                    <button className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                    <button className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {viewMode === 'list' && (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">SKU</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Variants</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Stock</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Base Price</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.map(product => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{product.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-mono text-sm text-gray-600">{product.baseSKU}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{product.category}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-sm font-semibold">
                        {product.totalVariants}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className={`px-2 py-1 rounded text-sm font-semibold ${
                        getStockStatus(product.totalStock).color
                      }`}>
                        {product.totalStock}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-semibold">₹{product.basePrice}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {viewMode === 'matrix' && selectedProduct && (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Variant Matrix: {selectedProduct.name}</h3>

            {selectedProduct.variantType === 'multi' && selectedProduct.attributes.length === 2 && (
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">
                        {selectedProduct.attributes[0].name} / {selectedProduct.attributes[1].name}
                      </th>
                      {selectedProduct.attributes[1].values.map(value => (
                        <th key={value} className="px-4 py-3 text-center text-sm font-medium text-gray-900">
                          {value}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProduct.attributes[0].values.map(attr1Value => (
                      <tr key={attr1Value} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">{attr1Value}</td>
                        {selectedProduct.attributes[1].values.map(attr2Value => {
                          const variant = selectedProduct.variants.find(v =>
                            v[selectedProduct.attributes[0].name.toLowerCase()] === attr1Value &&
                            v[selectedProduct.attributes[1].name.toLowerCase()] === attr2Value
                          );
                          return (
                            <td key={attr2Value} className="px-4 py-3 text-center">
                              {variant ? (
                                <div className="space-y-1">
                                  <div className="text-sm font-semibold text-gray-900">₹{variant.price}</div>
                                  <div className={`text-xs px-2 py-1 rounded inline-block ${
                                    getStockStatus(variant.stock).color
                                  }`}>
                                    {variant.stock} units
                                  </div>
                                </div>
                              ) : (
                                <span className="text-gray-400">-</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && viewMode !== 'matrix' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full p-6 my-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h3>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>

            <div className="space-y-6">
              {/* Product Info */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Category</p>
                  <p className="font-semibold mt-1">{selectedProduct.category}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Base SKU</p>
                  <p className="font-mono font-semibold mt-1">{selectedProduct.baseSKU}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Base Price</p>
                  <p className="font-semibold mt-1">₹{selectedProduct.basePrice}</p>
                </div>
              </div>

              {/* Variants Table */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">All Variants ({selectedProduct.totalVariants})</h4>
                <div className="border border-gray-200 rounded-lg overflow-hidden max-h-96 overflow-y-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 sticky top-0">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">SKU</th>
                        {selectedProduct.attributes.map(attr => (
                          <th key={attr.name} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            {attr.name}
                          </th>
                        ))}
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Price</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Stock</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Barcode</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {selectedProduct.variants.map((variant, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm font-mono text-gray-900">{variant.sku}</td>
                          {selectedProduct.attributes.map(attr => (
                            <td key={attr.name} className="px-4 py-3 text-sm text-gray-600">
                              {variant[attr.name.toLowerCase()]}
                            </td>
                          ))}
                          <td className="px-4 py-3 text-sm font-semibold text-gray-900 text-right">
                            ₹{variant.price}
                          </td>
                          <td className="px-4 py-3 text-right">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              getStockStatus(variant.stock).color
                            }`}>
                              {variant.stock}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm font-mono text-gray-600">{variant.barcode}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2">
                  <Edit className="w-5 h-5" />
                  Edit Product
                </button>
                <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5" />
                  Add Variant
                </button>
                <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Export
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
