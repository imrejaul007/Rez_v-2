import { useState, useRef } from 'react';
import { Scan, Camera, Package, ShoppingCart, Plus, Trash2, Check, X, Search, History, Download, Settings, Zap, AlertCircle, CheckCircle } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantBarcodeScanner() {
  const [scanMode, setScanMode] = useState('sale'); // sale, inventory, pricing
  const [scannedItems, setScannedItems] = useState([]);
  const [barcodeInput, setBarcodeInput] = useState('');
  const [scanning, setScanning] = useState(false);
  const [lastScanned, setLastScanned] = useState(null);
  const [scanHistory, setScannedHistory] = useState([]);
  const inputRef = useRef(null);

  // Mock product database with barcodes
  const productDatabase = {
    '8901030895265': {
      barcode: '8901030895265',
      name: 'Britannia Good Day Butter Cookies 200g',
      category: 'Biscuits & Cookies',
      brand: 'Britannia',
      mrp: 60,
      sellingPrice: 55,
      costPrice: 42,
      stock: 45,
      sku: 'BRT-GDB-200',
      hsnCode: '19053100',
      taxRate: 18,
      weight: '200g',
      expiryDate: '2025-06-15'
    },
    '8901719113017': {
      barcode: '8901719113017',
      name: 'Parle-G Gold Biscuits 1kg',
      category: 'Biscuits & Cookies',
      brand: 'Parle',
      mrp: 90,
      sellingPrice: 85,
      costPrice: 68,
      stock: 120,
      sku: 'PRL-GLD-1KG',
      hsnCode: '19053100',
      taxRate: 18,
      weight: '1kg',
      expiryDate: '2025-08-20'
    },
    '8901491101714': {
      barcode: '8901491101714',
      name: 'Amul Taaza Toned Milk 1L',
      category: 'Dairy',
      brand: 'Amul',
      mrp: 52,
      sellingPrice: 52,
      costPrice: 48,
      stock: 30,
      sku: 'AML-TAAZA-1L',
      hsnCode: '04011010',
      taxRate: 0,
      weight: '1L',
      expiryDate: '2025-01-05'
    },
    '8906010362010': {
      barcode: '8906010362010',
      name: 'Maggi 2-Minute Masala Noodles 140g',
      category: 'Instant Food',
      brand: 'Maggi',
      mrp: 24,
      sellingPrice: 22,
      costPrice: 18,
      stock: 200,
      sku: 'MGI-2MIN-140',
      hsnCode: '19023010',
      taxRate: 12,
      weight: '140g',
      expiryDate: '2025-09-10'
    },
    '8901030853326': {
      barcode: '8901030853326',
      name: 'Britannia Marie Gold Biscuits 250g',
      category: 'Biscuits & Cookies',
      brand: 'Britannia',
      mrp: 35,
      sellingPrice: 32,
      costPrice: 25,
      stock: 85,
      sku: 'BRT-MRG-250',
      hsnCode: '19053100',
      taxRate: 18,
      weight: '250g',
      expiryDate: '2025-07-25'
    }
  };

  // Handle barcode scan
  const handleScan = (barcode) => {
    const product = productDatabase[barcode];

    if (product) {
      setLastScanned({
        ...product,
        scanTime: new Date().toLocaleTimeString(),
        success: true
      });

      // Add to history
      setScannedHistory(prev => [{
        ...product,
        scanTime: new Date().toLocaleTimeString(),
        mode: scanMode
      }, ...prev.slice(0, 19)]); // Keep last 20 scans

      // Handle different scan modes
      if (scanMode === 'sale') {
        // Add to cart
        const existingItem = scannedItems.find(item => item.barcode === barcode);
        if (existingItem) {
          setScannedItems(scannedItems.map(item =>
            item.barcode === barcode
              ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.sellingPrice }
              : item
          ));
        } else {
          setScannedItems([...scannedItems, {
            ...product,
            quantity: 1,
            total: product.sellingPrice
          }]);
        }
      }
    } else {
      setLastScanned({
        barcode,
        scanTime: new Date().toLocaleTimeString(),
        success: false
      });
    }

    setBarcodeInput('');
    setScanning(false);
  };

  // Handle manual barcode entry
  const handleManualEntry = (e) => {
    e.preventDefault();
    if (barcodeInput.trim()) {
      handleScan(barcodeInput.trim());
    }
  };

  // Calculate cart totals
  const cartTotals = scannedItems.reduce((acc, item) => ({
    subtotal: acc.subtotal + item.total,
    items: acc.items + item.quantity,
    tax: acc.tax + (item.total * item.taxRate / 100)
  }), { subtotal: 0, items: 0, tax: 0 });

  const grandTotal = cartTotals.subtotal + cartTotals.tax;

  // Remove item from cart
  const removeItem = (barcode) => {
    setScannedItems(scannedItems.filter(item => item.barcode !== barcode));
  };

  // Update quantity
  const updateQuantity = (barcode, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(barcode);
    } else {
      setScannedItems(scannedItems.map(item =>
        item.barcode === barcode
          ? { ...item, quantity: newQuantity, total: newQuantity * item.sellingPrice }
          : item
      ));
    }
  };

  // Clear cart
  const clearCart = () => {
    setScannedItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Barcode Scanner</h1>
              <p className="text-gray-600">Fast checkout and inventory management with barcode scanning</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Scanner Settings
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export Data
              </button>
            </div>
          </div>
        </div>

        {/* Scan Mode Selector */}
        <div className="mb-6 flex gap-3">
          <button
            onClick={() => setScanMode('sale')}
            className={`px-6 py-3 rounded-lg border-2 transition-all flex items-center gap-2 ${
              scanMode === 'sale'
                ? 'bg-indigo-50 border-indigo-600 text-indigo-700'
                : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">Quick Sale</div>
              <div className="text-xs">Scan to add to cart</div>
            </div>
          </button>

          <button
            onClick={() => setScanMode('inventory')}
            className={`px-6 py-3 rounded-lg border-2 transition-all flex items-center gap-2 ${
              scanMode === 'inventory'
                ? 'bg-green-50 border-green-600 text-green-700'
                : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
            }`}
          >
            <Package className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">Inventory Check</div>
              <div className="text-xs">View stock levels</div>
            </div>
          </button>

          <button
            onClick={() => setScanMode('pricing')}
            className={`px-6 py-3 rounded-lg border-2 transition-all flex items-center gap-2 ${
              scanMode === 'pricing'
                ? 'bg-purple-50 border-purple-600 text-purple-700'
                : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
            }`}
          >
            <Zap className="w-5 h-5" />
            <div className="text-left">
              <div className="font-semibold">Price Check</div>
              <div className="text-xs">Verify product details</div>
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Scanner & Last Scanned */}
          <div className="lg:col-span-2 space-y-6">
            {/* Scanner Interface */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Scan className="w-5 h-5" />
                Scan Barcode
              </h3>

              {/* Manual Entry */}
              <form onSubmit={handleManualEntry} className="mb-6">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Enter barcode or use scanner..."
                      value={barcodeInput}
                      onChange={(e) => setBarcodeInput(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg font-mono"
                      autoFocus
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                  >
                    <Scan className="w-5 h-5" />
                    Scan
                  </button>
                </div>
              </form>

              {/* Camera Scanner (Mock) */}
              <div className="relative">
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="text-center text-white">
                    <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-semibold mb-2">Camera Scanner</p>
                    <p className="text-sm text-gray-400">Position barcode within the frame</p>
                    <div className="mt-6 w-64 h-2 bg-white/20 rounded-full mx-auto overflow-hidden">
                      <div className={`h-full bg-indigo-500 transition-all duration-1000 ${scanning ? 'w-full' : 'w-0'}`}></div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-32 border-4 border-indigo-500 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Last Scanned Product */}
            {lastScanned && (
              <div className={`rounded-lg border-2 p-6 ${
                lastScanned.success
                  ? 'bg-green-50 border-green-300'
                  : 'bg-red-50 border-red-300'
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    {lastScanned.success ? (
                      <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <h4 className={`text-lg font-bold mb-1 ${
                        lastScanned.success ? 'text-green-900' : 'text-red-900'
                      }`}>
                        {lastScanned.success ? 'Product Found!' : 'Product Not Found'}
                      </h4>
                      {lastScanned.success ? (
                        <div className="space-y-2">
                          <p className="text-green-900 font-semibold">{lastScanned.name}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-green-700">Barcode: {lastScanned.barcode}</p>
                              <p className="text-green-700">Brand: {lastScanned.brand}</p>
                              <p className="text-green-700">Category: {lastScanned.category}</p>
                            </div>
                            <div>
                              <p className="text-green-700">MRP: ₹{lastScanned.mrp}</p>
                              <p className="text-green-700 font-semibold">Price: ₹{lastScanned.sellingPrice}</p>
                              <p className="text-green-700">Stock: {lastScanned.stock} units</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p className="text-red-900">
                          Barcode "{lastScanned.barcode}" not found in database
                        </p>
                      )}
                      <p className="text-xs text-gray-600 mt-2">Scanned at {lastScanned.scanTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Scan History */}
            {scanHistory.length > 0 && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <History className="w-5 h-5" />
                  Recent Scans
                </h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {scanHistory.map((scan, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">{scan.name}</p>
                        <p className="text-xs text-gray-500">{scan.barcode} • {scan.scanTime}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        scan.mode === 'sale' ? 'bg-indigo-100 text-indigo-700' :
                        scan.mode === 'inventory' ? 'bg-green-100 text-green-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {scan.mode}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Cart/Details */}
          <div className="lg:col-span-1">
            {scanMode === 'sale' && (
              <div className="bg-white rounded-lg border border-gray-200 sticky top-8">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <ShoppingCart className="w-5 h-5" />
                      Cart ({cartTotals.items} items)
                    </h3>
                    {scannedItems.length > 0 && (
                      <button
                        onClick={clearCart}
                        className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        Clear
                      </button>
                    )}
                  </div>

                  {scannedItems.length === 0 ? (
                    <div className="text-center py-8">
                      <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-500 text-sm">Scan products to add to cart</p>
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {scannedItems.map((item) => (
                        <div key={item.barcode} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 text-sm truncate">{item.name}</p>
                            <p className="text-xs text-gray-500 mt-1">₹{item.sellingPrice} each</p>
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() => updateQuantity(item.barcode, item.quantity - 1)}
                                className="w-6 h-6 rounded bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700"
                              >
                                -
                              </button>
                              <span className="text-sm font-semibold w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.barcode, item.quantity + 1)}
                                className="w-6 h-6 rounded bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700"
                              >
                                +
                              </button>
                              <button
                                onClick={() => removeItem(item.barcode)}
                                className="ml-auto text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">₹{item.total.toFixed(2)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {scannedItems.length > 0 && (
                  <>
                    <div className="p-6 border-b border-gray-200 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold">₹{cartTotals.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Tax</span>
                        <span className="font-semibold">₹{cartTotals.tax.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center justify-between text-lg font-bold pt-2 border-t">
                        <span>Total</span>
                        <span className="text-indigo-600">₹{grandTotal.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold flex items-center justify-center gap-2">
                        <Check className="w-5 h-5" />
                        Complete Sale
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
