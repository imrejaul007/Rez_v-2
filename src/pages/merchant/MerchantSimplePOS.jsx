import React, { useState } from 'react';
import {
  ArrowLeft,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  CreditCard,
  Banknote,
  Smartphone,
  QrCode,
  Printer,
  Check,
  X,
  Search,
  Grid,
  User,
  Clock,
  Volume2,
  VolumeX,
  Settings,
  AlertCircle,
  Wifi,
  WifiOff,
  Battery,
  Sun,
  Moon,
  Languages,
  Home,
  Coffee,
  UtensilsCrossed,
  Pizza,
  Cake,
  IceCream,
  Beer
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MerchantSimplePOS = () => {
  const navigate = useNavigate();

  // ============================================
  // SIMPLE MODE SETTINGS
  // ============================================

  const [settings, setSettings] = useState({
    mode: 'simple', // 'simple', 'icon', 'full'
    language: 'en', // 'en', 'hi', 'ta', 'te', 'kn', 'mr'
    fontSize: 'large', // 'normal', 'large', 'xlarge'
    soundEnabled: true,
    darkMode: false,
    showPrices: true,
    autoConfirm: false, // Skip confirmation for small orders
    quickPayEnabled: true
  });

  // ============================================
  // QUICK ACCESS PRODUCTS (ICON MODE)
  // ============================================

  const quickProducts = [
    { id: 1, name: 'Coffee', nameHi: 'कॉफ़ी', icon: Coffee, price: 150, color: 'bg-amber-500' },
    { id: 2, name: 'Tea', nameHi: 'चाय', icon: Coffee, price: 80, color: 'bg-green-500' },
    { id: 3, name: 'Sandwich', nameHi: 'सैंडविच', icon: UtensilsCrossed, price: 180, color: 'bg-yellow-500' },
    { id: 4, name: 'Pizza', nameHi: 'पिज़्ज़ा', icon: Pizza, price: 350, color: 'bg-red-500' },
    { id: 5, name: 'Cake', nameHi: 'केक', icon: Cake, price: 250, color: 'bg-pink-500' },
    { id: 6, name: 'Ice Cream', nameHi: 'आइसक्रीम', icon: IceCream, price: 120, color: 'bg-blue-500' },
    { id: 7, name: 'Cold Drink', nameHi: 'कोल्ड ड्रिंक', icon: Beer, price: 60, color: 'bg-cyan-500' },
    { id: 8, name: 'Snacks', nameHi: 'नाश्ता', icon: UtensilsCrossed, price: 100, color: 'bg-orange-500' }
  ];

  // ============================================
  // CART STATE
  // ============================================

  const [cart, setCart] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  // ============================================
  // CART FUNCTIONS
  // ============================================

  const addToCart = (product) => {
    if (settings.soundEnabled) {
      // Play beep sound
    }

    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const updateQty = (productId, delta) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }).filter(item => item.qty > 0));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  };

  const processPayment = (method) => {
    setSelectedPayment(method);
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowPaymentModal(false);
      setShowSuccess(true);

      // Auto-clear after success
      setTimeout(() => {
        setShowSuccess(false);
        clearCart();
      }, 3000);
    }, 1500);
  };

  // ============================================
  // LANGUAGE TRANSLATIONS
  // ============================================

  const translations = {
    en: {
      total: 'Total',
      pay: 'Pay',
      cash: 'Cash',
      upi: 'UPI',
      card: 'Card',
      clear: 'Clear',
      success: 'Payment Success!',
      printReceipt: 'Print Receipt',
      newSale: 'New Sale',
      offline: 'Offline Mode'
    },
    hi: {
      total: 'कुल',
      pay: 'भुगतान',
      cash: 'नकद',
      upi: 'यूपीआई',
      card: 'कार्ड',
      clear: 'साफ़',
      success: 'भुगतान सफल!',
      printReceipt: 'रसीद प्रिंट',
      newSale: 'नई बिक्री',
      offline: 'ऑफलाइन'
    }
  };

  const t = translations[settings.language] || translations.en;

  // ============================================
  // RENDER
  // ============================================

  return (
    <div className={`min-h-screen ${settings.darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Simple Header */}
      <div className={`${settings.darkMode ? 'bg-gray-800' : 'bg-emerald-600'} text-white p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/merchant')}
              className="p-2 hover:bg-white/10 rounded-lg"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className={`font-bold ${settings.fontSize === 'xlarge' ? 'text-3xl' : settings.fontSize === 'large' ? 'text-2xl' : 'text-xl'}`}>
              Simple POS
            </h1>
          </div>

          {/* Status Indicators */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Wifi size={20} />
              <span className="text-sm">Online</span>
            </div>
            <div className="flex items-center gap-2">
              <Battery size={20} />
              <span className="text-sm">85%</span>
            </div>
            <button
              onClick={() => setSettings(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }))}
              className="p-2 hover:bg-white/10 rounded-lg"
            >
              {settings.soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
            <button
              onClick={() => setSettings(prev => ({ ...prev, darkMode: !prev.darkMode }))}
              className="p-2 hover:bg-white/10 rounded-lg"
            >
              {settings.darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Split View */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Products Grid (Left Side) */}
        <div className="flex-1 p-4 overflow-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {quickProducts.map(product => {
              const ProductIcon = product.icon;
              const cartItem = cart.find(item => item.id === product.id);

              return (
                <button
                  key={product.id}
                  onClick={() => addToCart(product)}
                  className={`relative p-6 rounded-2xl ${product.color} text-white shadow-lg hover:scale-105 transition-transform active:scale-95`}
                >
                  {/* Quantity Badge */}
                  {cartItem && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-lg font-bold">
                      {cartItem.qty}
                    </div>
                  )}

                  {/* Icon */}
                  <ProductIcon size={settings.fontSize === 'xlarge' ? 64 : 48} className="mx-auto mb-3" />

                  {/* Name */}
                  <div className={`text-center font-bold ${settings.fontSize === 'xlarge' ? 'text-2xl' : settings.fontSize === 'large' ? 'text-xl' : 'text-lg'}`}>
                    {settings.language === 'hi' ? product.nameHi : product.name}
                  </div>

                  {/* Price */}
                  {settings.showPrices && (
                    <div className={`text-center mt-2 ${settings.fontSize === 'xlarge' ? 'text-xl' : 'text-lg'}`}>
                      ₹{product.price}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cart (Right Side) */}
        <div className={`w-80 lg:w-96 ${settings.darkMode ? 'bg-gray-800' : 'bg-white'} border-l flex flex-col`}>
          {/* Cart Header */}
          <div className={`p-4 border-b ${settings.darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingCart size={24} className={settings.darkMode ? 'text-white' : 'text-gray-800'} />
                <span className={`font-bold ${settings.fontSize === 'large' ? 'text-xl' : 'text-lg'} ${settings.darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Cart ({cart.length})
                </span>
              </div>
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 size={20} />
                </button>
              )}
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-auto p-4">
            {cart.length === 0 ? (
              <div className={`text-center py-12 ${settings.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <ShoppingCart size={48} className="mx-auto mb-4 opacity-50" />
                <p className={settings.fontSize === 'large' ? 'text-xl' : 'text-lg'}>Cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map(item => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={item.id}
                      className={`p-4 rounded-xl ${settings.darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center`}>
                          <ItemIcon size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className={`font-medium ${settings.darkMode ? 'text-white' : 'text-gray-800'}`}>
                            {settings.language === 'hi' ? item.nameHi : item.name}
                          </div>
                          <div className={settings.darkMode ? 'text-gray-400' : 'text-gray-500'}>
                            ₹{item.price} × {item.qty}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`font-bold text-lg ${settings.darkMode ? 'text-white' : 'text-gray-800'}`}>
                            ₹{item.price * item.qty}
                          </div>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-end gap-3 mt-3">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center text-xl font-bold"
                        >
                          -
                        </button>
                        <span className={`w-10 text-center text-xl font-bold ${settings.darkMode ? 'text-white' : 'text-gray-800'}`}>
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-10 h-10 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-xl font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Cart Footer - Payment */}
          {cart.length > 0 && (
            <div className={`p-4 border-t ${settings.darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
              {/* Total */}
              <div className="flex justify-between items-center mb-4">
                <span className={`${settings.fontSize === 'xlarge' ? 'text-2xl' : 'text-xl'} font-bold ${settings.darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {t.total}
                </span>
                <span className={`${settings.fontSize === 'xlarge' ? 'text-4xl' : 'text-3xl'} font-bold text-emerald-600`}>
                  ₹{getTotal()}
                </span>
              </div>

              {/* Quick Pay Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => processPayment('cash')}
                  className="flex flex-col items-center gap-2 p-4 bg-green-500 text-white rounded-xl hover:bg-green-600 active:scale-95 transition-transform"
                >
                  <Banknote size={32} />
                  <span className="font-bold">{t.cash}</span>
                </button>
                <button
                  onClick={() => processPayment('upi')}
                  className="flex flex-col items-center gap-2 p-4 bg-purple-500 text-white rounded-xl hover:bg-purple-600 active:scale-95 transition-transform"
                >
                  <QrCode size={32} />
                  <span className="font-bold">{t.upi}</span>
                </button>
                <button
                  onClick={() => processPayment('card')}
                  className="flex flex-col items-center gap-2 p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 active:scale-95 transition-transform"
                >
                  <CreditCard size={32} />
                  <span className="font-bold">{t.card}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-12 text-center shadow-2xl animate-bounce-in">
            <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={48} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.success}</h2>
            <p className="text-2xl font-bold text-emerald-600 mb-6">₹{getTotal()}</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  // Print receipt
                }}
                className="px-6 py-3 bg-gray-200 rounded-xl font-medium flex items-center gap-2"
              >
                <Printer size={20} />
                {t.printReceipt}
              </button>
              <button
                onClick={() => {
                  setShowSuccess(false);
                  clearCart();
                }}
                className="px-6 py-3 bg-emerald-500 text-white rounded-xl font-medium"
              >
                {t.newSale}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Processing Overlay */}
      {isProcessing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-12 text-center">
            <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <p className="text-xl font-medium text-gray-800">Processing Payment...</p>
          </div>
        </div>
      )}

      {/* Panic Button - Lock POS */}
      <button
        className="fixed bottom-4 left-4 w-16 h-16 bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-700"
        title="Lock POS"
      >
        <AlertCircle size={32} />
      </button>
    </div>
  );
};

export default MerchantSimplePOS;
