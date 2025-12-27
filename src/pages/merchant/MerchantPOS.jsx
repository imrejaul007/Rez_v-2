import { useState } from 'react';
import {
  ShoppingCart, Search, Plus, Minus, X, Trash2, User, CreditCard,
  Wallet, Smartphone, DollarSign, Tag, Receipt, Check, AlertCircle, Package
} from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';
import { mockProducts, mockCategories } from '../../data/mock/products';

export default function MerchantPOS() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [customer, setCustomer] = useState(null);
  const [orderType, setOrderType] = useState('dine_in');
  const [tableNumber, setTableNumber] = useState('');
  const [coinsToRedeem, setCoinsToRedeem] = useState({ promo: 0, branded: 0, rez: 0 });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Filter products
  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch && product.isActive;
  });

  // Cart functions
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
          : item
      ));
    } else {
      setCart([...cart, {
        ...product,
        quantity: 1,
        total: product.price
      }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity, total: newQuantity * item.price }
        : item
    ));
  };

  const clearCart = () => {
    setCart([]);
    setCustomer(null);
    setTableNumber('');
    setCoinsToRedeem({ promo: 0, branded: 0, rez: 0 });
    setPaymentMethod('');
  };

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
  const tax = cart.reduce((sum, item) => sum + (item.total * (item.taxRate / 100)), 0);
  const coinsDiscount = coinsToRedeem.promo + coinsToRedeem.branded + coinsToRedeem.rez;
  const total = subtotal + tax - coinsDiscount;

  // Process payment
  const processPayment = () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }
    if (orderType === 'dine_in' && !tableNumber) {
      alert('Please enter table number');
      return;
    }

    const order = {
      orderNumber: `ORD-${Date.now()}`,
      type: orderType,
      tableNumber: orderType === 'dine_in' ? tableNumber : null,
      customer,
      items: cart,
      subtotal,
      tax,
      coinsRedeemed: coinsDiscount,
      total,
      paymentMethod,
      timestamp: new Date().toISOString()
    };

    console.log('Order placed:', order);
    alert(`Order ${order.orderNumber} placed successfully! Total: ₹${total.toFixed(2)}`);
    clearCart();
    setShowPaymentModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-8 h-8" />
              <div>
                <h1 className="text-2xl font-bold">Point of Sale</h1>
                <p className="text-orange-100">Create new orders and process payments</p>
              </div>
            </div>
            <div className="flex gap-3">
              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white font-medium backdrop-blur-sm"
              >
                <option value="dine_in">Dine In</option>
                <option value="takeaway">Takeaway</option>
                <option value="delivery">Delivery</option>
              </select>
              {orderType === 'dine_in' && (
                <input
                  type="text"
                  placeholder="Table #"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 w-24"
                />
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Products Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Search and Category Filter */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex gap-4 mb-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search products by name or SKU..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Category Pills */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 rounded-full font-medium whitespace-nowrap ${
                      selectedCategory === 'all'
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All
                  </button>
                  {mockCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`px-4 py-2 rounded-full font-medium whitespace-nowrap ${
                        selectedCategory === category.name
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.icon} {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => addToCart(product)}
                    className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow text-left group"
                  >
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                      <Package className="w-12 h-12 text-orange-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-orange-600">₹{product.price}</span>
                      {product.stock.quantity <= product.stock.reorderLevel && (
                        <span className="text-xs text-red-600 font-medium">Low Stock</span>
                      )}
                    </div>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-orange-600 text-white py-1 px-2 rounded text-xs font-medium text-center flex items-center justify-center gap-1">
                        <Plus className="w-3 h-3" />
                        Add to Cart
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                  <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No products found</p>
                </div>
              )}
            </div>

            {/* Cart Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm sticky top-6">
                {/* Cart Header */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-lg font-bold text-gray-900">Current Order</h2>
                    {cart.length > 0 && (
                      <button
                        onClick={clearCart}
                        className="text-sm text-red-600 hover:text-red-700 font-medium"
                      >
                        Clear All
                      </button>
                    )}
                  </div>

                  {/* Customer Info */}
                  <button
                    onClick={() => setShowCustomerModal(true)}
                    className="w-full flex items-center gap-2 p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <User className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">
                      {customer ? customer.name : 'Add Customer (Optional)'}
                    </span>
                  </button>
                </div>

                {/* Cart Items */}
                <div className="max-h-96 overflow-y-auto p-4 space-y-3">
                  {cart.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-500 text-sm">Cart is empty</p>
                      <p className="text-gray-400 text-xs mt-1">Add items to start an order</p>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div key={item.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
                          <p className="text-xs text-gray-600">₹{item.price} each</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="font-bold text-sm">₹{item.total}</span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:text-red-700 mt-1"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Cart Summary */}
                {cart.length > 0 && (
                  <div className="border-t border-gray-200 p-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">₹{tax.toFixed(2)}</span>
                    </div>
                    {coinsDiscount > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Coins Redeemed</span>
                        <span className="font-medium">-₹{coinsDiscount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-lg font-bold pt-3 border-t border-gray-200">
                      <span>Total</span>
                      <span>₹{total.toFixed(2)}</span>
                    </div>

                    <button
                      onClick={() => setShowPaymentModal(true)}
                      className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <CreditCard className="w-5 h-5" />
                      Process Payment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Process Payment</h2>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Total Amount</div>
              <div className="text-3xl font-bold text-gray-900">₹{total.toFixed(2)}</div>
            </div>

            <div className="space-y-3 mb-6">
              <h3 className="font-medium text-gray-900">Select Payment Method</h3>
              {['cash', 'card', 'upi', 'wallet'].map((method) => (
                <button
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={`w-full flex items-center gap-3 p-4 border-2 rounded-lg transition-all ${
                    paymentMethod === method
                      ? 'border-orange-600 bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {method === 'cash' && <DollarSign className="w-6 h-6 text-green-600" />}
                  {method === 'card' && <CreditCard className="w-6 h-6 text-blue-600" />}
                  {method === 'upi' && <Smartphone className="w-6 h-6 text-purple-600" />}
                  {method === 'wallet' && <Wallet className="w-6 h-6 text-orange-600" />}
                  <span className="font-medium capitalize">{method}</span>
                  {paymentMethod === method && (
                    <Check className="w-5 h-5 text-orange-600 ml-auto" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={processPayment}
                className="flex-1 px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-bold"
              >
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Customer Modal */}
      {showCustomerModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Add Customer</h2>
              <button
                onClick={() => setShowCustomerModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-medium">
                Search Customer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
