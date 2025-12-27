import { useState } from 'react';
import {
  Package, Plus, Search, Filter, Upload, Download, Edit2, Trash2,
  Eye, EyeOff, Copy, Image as ImageIcon, AlertTriangle, CheckCircle,
  TrendingUp, TrendingDown, DollarSign, Layers, Tag, BarChart3,
  Grid, List, Settings, X, Save, RefreshCw, ExternalLink, Star
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantProducts() {
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showBulkUpload, setShowBulkUpload] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showBulkActions, setShowBulkActions] = useState(false);

  const [productForm, setProductForm] = useState({
    name: '',
    price: '',
    salePrice: '',
    category: '',
    subcategory: '',
    description: '',
    shortDescription: '',
    stock: '',
    sku: '',
    barcode: '',
    variants: [],
    images: [],
    status: 'active',
    featured: false,
    lowStockThreshold: 10,
    reorderPoint: 20,
    seoTitle: '',
    seoDescription: '',
    seoKeywords: ''
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Premium Pizza Margherita',
      sku: 'PIZZA-001',
      price: 599,
      salePrice: 449,
      category: 'Food',
      subcategory: 'Pizza',
      stock: 150,
      lowStockThreshold: 20,
      reorderPoint: 50,
      status: 'active',
      featured: true,
      images: ['pizza1.jpg', 'pizza2.jpg'],
      description: 'Classic Italian pizza with fresh mozzarella and basil',
      variants: [
        { name: 'Small', price: 449, stock: 50 },
        { name: 'Medium', price: 599, stock: 60 },
        { name: 'Large', price: 749, stock: 40 }
      ],
      sales: {
        total: 456,
        thisMonth: 89,
        revenue: 268344,
        trend: 'up'
      },
      createdAt: '2024-01-01',
      updatedAt: '2024-01-26'
    },
    {
      id: 2,
      name: 'Espresso Coffee',
      sku: 'COFFEE-001',
      price: 150,
      salePrice: null,
      category: 'Beverages',
      subcategory: 'Hot Drinks',
      stock: 5,
      lowStockThreshold: 10,
      reorderPoint: 30,
      status: 'active',
      featured: false,
      images: ['coffee1.jpg'],
      description: 'Rich and bold espresso coffee',
      variants: [
        { name: 'Single Shot', price: 150, stock: 5 },
        { name: 'Double Shot', price: 200, stock: 8 }
      ],
      sales: {
        total: 789,
        thisMonth: 145,
        revenue: 118350,
        trend: 'up'
      },
      createdAt: '2024-01-05',
      updatedAt: '2024-01-25'
    },
    {
      id: 3,
      name: 'Chicken Burger Deluxe',
      sku: 'BURGER-001',
      price: 299,
      salePrice: 249,
      category: 'Food',
      subcategory: 'Burgers',
      stock: 0,
      lowStockThreshold: 15,
      reorderPoint: 40,
      status: 'out_of_stock',
      featured: true,
      images: ['burger1.jpg', 'burger2.jpg', 'burger3.jpg'],
      description: 'Juicy chicken burger with special sauce',
      variants: [
        { name: 'Regular', price: 249, stock: 0 },
        { name: 'Large', price: 349, stock: 0 }
      ],
      sales: {
        total: 234,
        thisMonth: 0,
        revenue: 58266,
        trend: 'down'
      },
      createdAt: '2024-01-10',
      updatedAt: '2024-01-23'
    },
    {
      id: 4,
      name: 'Caesar Salad Bowl',
      sku: 'SALAD-001',
      price: 399,
      salePrice: null,
      category: 'Food',
      subcategory: 'Salads',
      stock: 75,
      lowStockThreshold: 20,
      reorderPoint: 50,
      status: 'active',
      featured: false,
      images: ['salad1.jpg'],
      description: 'Fresh Caesar salad with grilled chicken',
      variants: [],
      sales: {
        total: 123,
        thisMonth: 34,
        revenue: 49077,
        trend: 'up'
      },
      createdAt: '2024-01-12',
      updatedAt: '2024-01-26'
    },
    {
      id: 5,
      name: 'Chocolate Lava Cake',
      sku: 'DESSERT-001',
      price: 199,
      salePrice: 149,
      category: 'Desserts',
      subcategory: 'Cakes',
      stock: 30,
      lowStockThreshold: 10,
      reorderPoint: 25,
      status: 'active',
      featured: true,
      images: ['cake1.jpg', 'cake2.jpg'],
      description: 'Decadent chocolate cake with molten center',
      variants: [],
      sales: {
        total: 567,
        thisMonth: 98,
        revenue: 84543,
        trend: 'up'
      },
      createdAt: '2024-01-08',
      updatedAt: '2024-01-27'
    },
    {
      id: 6,
      name: 'Mango Smoothie',
      sku: 'DRINK-001',
      price: 149,
      salePrice: null,
      category: 'Beverages',
      subcategory: 'Cold Drinks',
      stock: 45,
      lowStockThreshold: 15,
      reorderPoint: 40,
      status: 'inactive',
      featured: false,
      images: ['smoothie1.jpg'],
      description: 'Fresh mango smoothie with yogurt',
      variants: [
        { name: 'Regular', price: 149, stock: 25 },
        { name: 'Large', price: 199, stock: 20 }
      ],
      sales: {
        total: 345,
        thisMonth: 12,
        revenue: 51405,
        trend: 'down'
      },
      createdAt: '2024-01-15',
      updatedAt: '2024-01-20'
    },
    {
      id: 7,
      name: 'Vegetable Spring Rolls',
      sku: 'SNACK-001',
      price: 179,
      salePrice: 159,
      category: 'Appetizers',
      subcategory: 'Snacks',
      stock: 120,
      lowStockThreshold: 30,
      reorderPoint: 60,
      status: 'draft',
      featured: false,
      images: [],
      description: 'Crispy vegetable spring rolls with sweet chili sauce',
      variants: [
        { name: '4 pieces', price: 159, stock: 60 },
        { name: '8 pieces', price: 289, stock: 60 }
      ],
      sales: {
        total: 0,
        thisMonth: 0,
        revenue: 0,
        trend: 'neutral'
      },
      createdAt: '2024-01-27',
      updatedAt: '2024-01-27'
    }
  ]);

  const categories = [
    { id: 'food', name: 'Food', count: 3 },
    { id: 'beverages', name: 'Beverages', count: 2 },
    { id: 'desserts', name: 'Desserts', count: 1 },
    { id: 'appetizers', name: 'Appetizers', count: 1 }
  ];

  const statusConfig = {
    active: { color: 'green', label: 'Active', icon: CheckCircle },
    inactive: { color: 'gray', label: 'Inactive', icon: EyeOff },
    out_of_stock: { color: 'red', label: 'Out of Stock', icon: AlertTriangle },
    draft: { color: 'yellow', label: 'Draft', icon: Edit2 }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category.toLowerCase() === filterCategory;
    const matchesStatus = filterStatus === 'all' || product.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleSelectProduct = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handleSelectAll = () => {
    if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(filteredProducts.map(p => p.id));
    }
  };

  const handleBulkAction = (action) => {
    alert(`Applying ${action} to ${selectedProducts.length} products`);
    setSelectedProducts([]);
    setShowBulkActions(false);
  };

  const renderAddProductForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Add New Product</h2>
            <button
              onClick={() => setShowAddProduct(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Basic Information */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Basic Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g., Premium Pizza Margherita"
                  value={productForm.name}
                  onChange={(e) => setProductForm({...productForm, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">SKU *</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="PROD-001"
                  value={productForm.sku}
                  onChange={(e) => setProductForm({...productForm, sku: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Barcode</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="1234567890"
                  value={productForm.barcode}
                  onChange={(e) => setProductForm({...productForm, barcode: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  value={productForm.category}
                  onChange={(e) => setProductForm({...productForm, category: e.target.value})}
                >
                  <option value="">Select Category</option>
                  <option value="food">Food</option>
                  <option value="beverages">Beverages</option>
                  <option value="desserts">Desserts</option>
                  <option value="appetizers">Appetizers</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subcategory</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g., Pizza"
                  value={productForm.subcategory}
                  onChange={(e) => setProductForm({...productForm, subcategory: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Pricing</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Regular Price (₹) *</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="599"
                  value={productForm.price}
                  onChange={(e) => setProductForm({...productForm, price: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sale Price (₹)</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="449"
                  value={productForm.salePrice}
                  onChange={(e) => setProductForm({...productForm, salePrice: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Stock Management */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Stock Management</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Stock *</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="100"
                  value={productForm.stock}
                  onChange={(e) => setProductForm({...productForm, stock: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Low Stock Alert</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="10"
                  value={productForm.lowStockThreshold}
                  onChange={(e) => setProductForm({...productForm, lowStockThreshold: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reorder Point</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="20"
                  value={productForm.reorderPoint}
                  onChange={(e) => setProductForm({...productForm, reorderPoint: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Description</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Short Description</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Brief product description (max 160 characters)"
                  value={productForm.shortDescription}
                  onChange={(e) => setProductForm({...productForm, shortDescription: e.target.value})}
                  maxLength={160}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Description</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  rows="4"
                  placeholder="Detailed product description"
                  value={productForm.description}
                  onChange={(e) => setProductForm({...productForm, description: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Images */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Product Images</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Drag and drop images here or click to browse</p>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Upload Images
              </button>
            </div>
          </div>

          {/* SEO Settings */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">SEO Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">SEO Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Product SEO title"
                  value={productForm.seoTitle}
                  onChange={(e) => setProductForm({...productForm, seoTitle: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">SEO Description</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  rows="3"
                  placeholder="Product SEO description"
                  value={productForm.seoDescription}
                  onChange={(e) => setProductForm({...productForm, seoDescription: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Keywords</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="keyword1, keyword2, keyword3"
                  value={productForm.seoKeywords}
                  onChange={(e) => setProductForm({...productForm, seoKeywords: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Status */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Product Status</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  value={productForm.status}
                  onChange={(e) => setProductForm({...productForm, status: e.target.value})}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
              <div className="flex items-end">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={productForm.featured}
                    onChange={(e) => setProductForm({...productForm, featured: e.target.checked})}
                    className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Featured Product</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowAddProduct(false)}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Save as Draft
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              <Save className="w-4 h-4" />
              Save & Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBulkUpload = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Bulk Product Upload</h2>
            <button
              onClick={() => setShowBulkUpload(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Step 1: Download Template</h3>
            <p className="text-sm text-gray-600 mb-4">
              Download our CSV or Excel template to ensure your data is formatted correctly
            </p>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                <Download className="w-4 h-4" />
                Download CSV Template
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Download className="w-4 h-4" />
                Download Excel Template
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-medium text-gray-900 mb-2">Step 2: Upload Your File</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Drag and drop your CSV/Excel file here</p>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Browse Files
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-medium text-gray-900 mb-2">Step 3: Import from Platform</h3>
            <p className="text-sm text-gray-600 mb-4">
              Connect your existing e-commerce platform to sync products
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <ExternalLink className="w-4 h-4" />
                Connect Shopify
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <ExternalLink className="w-4 h-4" />
                Connect WooCommerce
              </button>
            </div>
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Important Notes:</h4>
            <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
              <li>Ensure all required fields are filled in your file</li>
              <li>Images should be uploaded separately or via URLs</li>
              <li>Maximum 1000 products per upload</li>
              <li>Duplicate SKUs will be skipped</li>
            </ul>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowBulkUpload(false)}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
              <p className="text-gray-600 mt-1">Manage your product catalog and inventory</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowBulkUpload(true)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                <Upload className="w-5 h-5" />
                Bulk Upload
              </button>
              <button
                onClick={() => setShowAddProduct(true)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Plus className="w-5 h-5" />
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Package className="w-8 h-8 text-indigo-600" />
            </div>
            <p className="text-gray-600 text-sm font-medium">Total Products</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{products.length}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-gray-600 text-sm font-medium">Active</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {products.filter(p => p.status === 'active').length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <p className="text-gray-600 text-sm font-medium">Low Stock</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {products.filter(p => p.stock > 0 && p.stock <= p.lowStockThreshold).length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Star className="w-8 h-8 text-yellow-600" />
            </div>
            <p className="text-gray-600 text-sm font-medium">Featured</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {products.filter(p => p.featured).length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              ₹{(products.reduce((sum, p) => sum + p.sales.revenue, 0) / 1000).toFixed(0)}K
            </p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products by name or SKU..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name} ({cat.count})</option>
                ))}
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="out_of_stock">Out of Stock</option>
                <option value="draft">Draft</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {selectedProducts.length > 0 && (
            <div className="flex items-center gap-4 p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
              <span className="text-sm font-medium text-indigo-900">
                {selectedProducts.length} product{selectedProducts.length > 1 ? 's' : ''} selected
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleBulkAction('activate')}
                  className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                >
                  Activate
                </button>
                <button
                  onClick={() => handleBulkAction('deactivate')}
                  className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700"
                >
                  Deactivate
                </button>
                <button
                  onClick={() => handleBulkAction('update_price')}
                  className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                >
                  Update Price
                </button>
                <button
                  onClick={() => handleBulkAction('update_stock')}
                  className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700"
                >
                  Update Stock
                </button>
                <button
                  onClick={() => handleBulkAction('delete')}
                  className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
              <button
                onClick={() => setSelectedProducts([])}
                className="ml-auto text-indigo-600 hover:text-indigo-700 text-sm font-medium"
              >
                Clear Selection
              </button>
            </div>
          )}
        </div>

        {/* Product Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const statusInfo = statusConfig[product.status];
              const StatusIcon = statusInfo.icon;
              const isLowStock = product.stock > 0 && product.stock <= product.lowStockThreshold;

              return (
                <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <Package className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="absolute top-2 left-2">
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => handleSelectProduct(product.id)}
                        className="w-5 h-5 rounded"
                      />
                    </div>
                    <div className="absolute top-2 right-2 flex gap-1">
                      {product.featured && (
                        <div className="p-1.5 bg-yellow-500 rounded-full">
                          <Star className="w-4 h-4 text-white fill-white" />
                        </div>
                      )}
                      <span className={`px-2 py-1 bg-${statusInfo.color}-100 text-${statusInfo.color}-700 text-xs font-medium rounded-full`}>
                        {statusInfo.label}
                      </span>
                    </div>
                    {isLowStock && (
                      <div className="absolute bottom-2 left-2 right-2 p-2 bg-red-500 text-white text-xs font-medium rounded text-center">
                        Low Stock: {product.stock} units
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-1 truncate">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">SKU: {product.sku}</p>
                    <div className="flex items-center gap-2 mb-3">
                      {product.salePrice ? (
                        <>
                          <span className="text-lg font-bold text-green-600">₹{product.salePrice}</span>
                          <span className="text-sm text-gray-500 line-through">₹{product.price}</span>
                        </>
                      ) : (
                        <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-600">Stock: {product.stock}</span>
                      <span className={`flex items-center gap-1 ${product.sales.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {product.sales.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        {product.sales.thisMonth} sales
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4 mx-auto" />
                      </button>
                      <button className="flex-1 p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <Copy className="w-4 h-4 mx-auto" />
                      </button>
                      <button className="flex-1 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 mx-auto" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedProducts.length === filteredProducts.length}
                      onChange={handleSelectAll}
                      className="w-5 h-5 rounded"
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Product</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">SKU</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Price</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Stock</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Sales</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProducts.map((product) => {
                  const statusInfo = statusConfig[product.status];
                  const StatusIcon = statusInfo.icon;

                  return (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={selectedProducts.includes(product.id)}
                          onChange={() => handleSelectProduct(product.id)}
                          className="w-5 h-5 rounded"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                            <Package className="w-6 h-6 text-gray-400" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{product.name}</p>
                            {product.featured && (
                              <span className="text-xs text-yellow-600 flex items-center gap-1">
                                <Star className="w-3 h-3 fill-yellow-600" /> Featured
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{product.sku}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{product.category}</td>
                      <td className="px-4 py-3">
                        {product.salePrice ? (
                          <div>
                            <p className="font-medium text-green-600">₹{product.salePrice}</p>
                            <p className="text-xs text-gray-500 line-through">₹{product.price}</p>
                          </div>
                        ) : (
                          <p className="font-medium text-gray-900">₹{product.price}</p>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <p className={`text-sm font-medium ${
                          product.stock === 0 ? 'text-red-600' :
                          product.stock <= product.lowStockThreshold ? 'text-yellow-600' :
                          'text-gray-900'
                        }`}>
                          {product.stock}
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 bg-${statusInfo.color}-100 text-${statusInfo.color}-700 text-xs font-medium rounded-full`}>
                          <StatusIcon className="w-3 h-3" />
                          {statusInfo.label}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1 text-sm">
                          {product.sales.trend === 'up' ? (
                            <TrendingUp className="w-4 h-4 text-green-600" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-600" />
                          )}
                          <span className="text-gray-900">{product.sales.thisMonth}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button className="p-1 text-indigo-600 hover:bg-indigo-50 rounded">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-600 hover:bg-gray-50 rounded">
                            <Copy className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">
              {searchQuery || filterCategory !== 'all' || filterStatus !== 'all'
                ? 'Try adjusting your filters'
                : 'Add your first product to get started'}
            </p>
            <button
              onClick={() => setShowAddProduct(true)}
              className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Plus className="w-5 h-5" />
              Add Product
            </button>
          </div>
        )}
      </div>

      {/* Modals */}
      {showAddProduct && renderAddProductForm()}
      {showBulkUpload && renderBulkUpload()}
    </div>
  );
}
