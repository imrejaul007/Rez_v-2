import { useState } from 'react';
import { Edit, Trash2, Plus, Eye, EyeOff, ChevronUp, ChevronDown, TrendingUp } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminCategories() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Food & Dining',
      icon: '🍕',
      description: 'Restaurants, cafes, cloud kitchens, and food delivery',
      avgCashback: 12,
      merchants: 234,
      monthlyTxns: 12456,
      monthlyRevenue: 1234567,
      visible: true,
      featured: true,
      order: 1,
      subCategories: ['Restaurants', 'Cafes', 'Cloud Kitchens', 'Bakery']
    },
    {
      id: 2,
      name: 'Fashion',
      icon: '👗',
      description: 'Clothing, accessories, footwear, and jewelry',
      avgCashback: 18,
      merchants: 156,
      monthlyTxns: 8934,
      monthlyRevenue: 987654,
      visible: true,
      featured: true,
      order: 2,
      subCategories: ['Men', 'Women', 'Kids', 'Accessories']
    },
    {
      id: 3,
      name: 'Electronics',
      icon: '📱',
      description: 'Mobile phones, laptops, gadgets, and accessories',
      avgCashback: 10,
      merchants: 89,
      monthlyTxns: 5678,
      monthlyRevenue: 2345678,
      visible: true,
      featured: true,
      order: 3,
      subCategories: ['Mobile', 'Laptops', 'Cameras', 'Accessories']
    },
    {
      id: 4,
      name: 'Beauty & Wellness',
      icon: '💄',
      description: 'Salons, spas, cosmetics, and wellness centers',
      avgCashback: 15,
      merchants: 178,
      monthlyTxns: 9876,
      monthlyRevenue: 876543,
      visible: true,
      featured: true,
      order: 4,
      subCategories: ['Salons', 'Spas', 'Cosmetics', 'Wellness']
    },
    {
      id: 5,
      name: 'Grocery',
      icon: '🛒',
      description: 'Supermarkets, grocery stores, and daily essentials',
      avgCashback: 8,
      merchants: 312,
      monthlyTxns: 23456,
      monthlyRevenue: 1567890,
      visible: true,
      featured: false,
      order: 5,
      subCategories: ['Supermarkets', 'Local Stores', 'Organic', 'Daily Essentials']
    },
    {
      id: 6,
      name: 'Healthcare',
      icon: '🏥',
      description: 'Hospitals, clinics, pharmacies, and diagnostics',
      avgCashback: 10,
      merchants: 145,
      monthlyTxns: 6789,
      monthlyRevenue: 1234567,
      visible: true,
      featured: false,
      order: 6,
      subCategories: ['Hospitals', 'Clinics', 'Pharmacy', 'Diagnostics']
    },
    {
      id: 7,
      name: 'Fitness',
      icon: '💪',
      description: 'Gyms, yoga studios, sports equipment',
      avgCashback: 12,
      merchants: 67,
      monthlyTxns: 3456,
      monthlyRevenue: 456789,
      visible: true,
      featured: false,
      order: 7,
      subCategories: ['Gyms', 'Yoga', 'Sports', 'Nutrition']
    },
    {
      id: 8,
      name: 'Home Services',
      icon: '🏠',
      description: 'Cleaning, repairs, home decor, and maintenance',
      avgCashback: 15,
      merchants: 98,
      monthlyTxns: 4567,
      monthlyRevenue: 567890,
      visible: true,
      featured: false,
      order: 8,
      subCategories: ['Cleaning', 'Repairs', 'Decor', 'Pest Control']
    }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const toggleVisibility = (id) => {
    setCategories(prev => prev.map(cat =>
      cat.id === id ? { ...cat, visible: !cat.visible } : cat
    ));
  };

  const toggleFeatured = (id) => {
    setCategories(prev => prev.map(cat =>
      cat.id === id ? { ...cat, featured: !cat.featured } : cat
    ));
  };

  const moveCategory = (id, direction) => {
    const index = categories.findIndex(cat => cat.id === id);
    if ((direction === 'up' && index === 0) || (direction === 'down' && index === categories.length - 1)) return;

    const newCategories = [...categories];
    const temp = newCategories[index];
    if (direction === 'up') {
      newCategories[index] = newCategories[index - 1];
      newCategories[index - 1] = temp;
    } else {
      newCategories[index] = newCategories[index + 1];
      newCategories[index + 1] = temp;
    }

    setCategories(newCategories.map((cat, idx) => ({ ...cat, order: idx + 1 })));
  };

  const stats = {
    totalCategories: categories.length,
    activeCategories: categories.filter(c => c.visible).length,
    featuredCategories: categories.filter(c => c.featured).length,
    totalMerchants: categories.reduce((sum, c) => sum + c.merchants, 0),
    totalRevenue: categories.reduce((sum, c) => sum + c.monthlyRevenue, 0)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Category Management</h1>
              <p className="text-gray-600 mt-1">Manage platform categories and sub-categories</p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Plus className="w-5 h-5" />
              Add Category
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Total Categories</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalCategories}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Active</p>
            <p className="text-3xl font-bold text-green-600 mt-2">{stats.activeCategories}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Featured</p>
            <p className="text-3xl font-bold text-indigo-600 mt-2">{stats.featuredCategories}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Total Merchants</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalMerchants}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Monthly Revenue</p>
            <p className="text-3xl font-bold text-green-600 mt-2">₹{(stats.totalRevenue / 100000).toFixed(1)}L</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cashback</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Merchants</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Monthly Stats</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {categories.map((category, index) => (
                  <tr key={category.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">#{category.order}</span>
                        <div className="flex flex-col">
                          <button
                            onClick={() => moveCategory(category.id, 'up')}
                            disabled={index === 0}
                            className={`${index === 0 ? 'text-gray-300' : 'text-gray-600 hover:text-indigo-600'}`}
                          >
                            <ChevronUp className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => moveCategory(category.id, 'down')}
                            disabled={index === categories.length - 1}
                            className={`${index === categories.length - 1 ? 'text-gray-300' : 'text-gray-600 hover:text-indigo-600'}`}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{category.icon}</div>
                        <div>
                          <p className="font-semibold text-gray-900">{category.name}</p>
                          <p className="text-sm text-gray-500">{category.description}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {category.subCategories.map((sub, idx) => (
                              <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-lg font-bold text-green-600">{category.avgCashback}%</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">{category.merchants}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <p className="text-gray-600">Txns: <span className="font-medium text-gray-900">{category.monthlyTxns.toLocaleString()}</span></p>
                        <p className="text-gray-600">Revenue: <span className="font-medium text-green-600">₹{(category.monthlyRevenue / 100000).toFixed(1)}L</span></p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleVisibility(category.id)}
                            className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                              category.visible
                                ? 'bg-green-100 text-green-700'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {category.visible ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                            {category.visible ? 'Visible' : 'Hidden'}
                          </button>
                        </div>
                        {category.featured && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-medium w-fit">
                            <TrendingUp className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setEditingCategory(category)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => toggleFeatured(category.id)}
                          className="px-3 py-1 text-xs font-medium border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50"
                        >
                          {category.featured ? 'Unfeature' : 'Feature'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
