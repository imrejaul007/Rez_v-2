import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, Bell, Volume2, VolumeX, Settings, Maximize,
  RefreshCw, Clock, CheckCircle, Coffee, UtensilsCrossed,
  Package, ChefHat
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MerchantTokenDisplay = () => {
  const navigate = useNavigate();
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const [preparingOrders, setPreparingOrders] = useState([
    { token: 'A001', items: ['Paneer Tikka', 'Butter Naan'], type: 'dine-in', table: 'T5', time: '5 min' },
    { token: 'A002', items: ['Chicken Biryani'], type: 'takeaway', time: '8 min' },
    { token: 'A003', items: ['Veg Thali', 'Lassi'], type: 'dine-in', table: 'T2', time: '3 min' },
    { token: 'A004', items: ['Pizza Margherita'], type: 'delivery', time: '12 min' },
    { token: 'A005', items: ['Dal Makhani', 'Roti x4'], type: 'takeaway', time: '6 min' },
    { token: 'A006', items: ['Fish Curry', 'Rice'], type: 'dine-in', table: 'T8', time: '10 min' },
  ]);

  const [readyOrders, setReadyOrders] = useState([
    { token: 'A098', items: ['Masala Dosa'], type: 'takeaway', readyAt: '1 min ago' },
    { token: 'A097', items: ['Coffee x2'], type: 'takeaway', readyAt: '2 min ago' },
    { token: 'A096', items: ['Sandwich', 'Juice'], type: 'takeaway', readyAt: '3 min ago' },
  ]);

  const [lastCalledToken, setLastCalledToken] = useState('A098');
  const [showCallAnimation, setShowCallAnimation] = useState(false);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate new ready order
  useEffect(() => {
    const interval = setInterval(() => {
      if (preparingOrders.length > 0) {
        const readyOrder = preparingOrders[0];
        setReadyOrders(prev => [{ ...readyOrder, readyAt: 'Just now' }, ...prev.slice(0, 5)]);
        setPreparingOrders(prev => prev.slice(1));
        setLastCalledToken(readyOrder.token);
        setShowCallAnimation(true);
        setTimeout(() => setShowCallAnimation(false), 3000);
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [preparingOrders]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'dine-in': return <UtensilsCrossed size={16} />;
      case 'takeaway': return <Package size={16} />;
      case 'delivery': return <Coffee size={16} />;
      default: return <UtensilsCrossed size={16} />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'dine-in': return 'bg-blue-600';
      case 'takeaway': return 'bg-orange-600';
      case 'delivery': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Bar */}
      <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4 lg:hidden">
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-2xl font-bold">Token Display</h1>
            <p className="text-gray-400">Customer Order Status</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-3xl font-mono font-bold">
              {currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
            </p>
            <p className="text-gray-400 text-sm">
              {currentTime.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short' })}
            </p>
          </div>
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-3 bg-gray-800 rounded-lg"
          >
            {soundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-3 bg-gray-800 rounded-lg"
          >
            <Maximize size={24} />
          </button>
        </div>
      </div>

      {/* Now Serving - Large Display */}
      {showCallAnimation && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="text-center animate-pulse">
            <p className="text-4xl text-gray-400 mb-4">NOW SERVING</p>
            <p className="text-[12rem] font-bold text-green-400 leading-none">{lastCalledToken}</p>
            <p className="text-3xl text-gray-400 mt-4">Please collect your order</p>
          </div>
        </div>
      )}

      <div className="flex h-[calc(100vh-100px)]">
        {/* Ready Orders - Left Side (40%) */}
        <div className="w-2/5 bg-gradient-to-b from-green-900/30 to-green-900/10 p-6 border-r border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <CheckCircle size={32} className="text-green-400 mr-3" />
              <h2 className="text-3xl font-bold text-green-400">READY</h2>
            </div>
            <span className="bg-green-600 px-4 py-2 rounded-full text-xl font-bold">
              {readyOrders.length}
            </span>
          </div>

          {/* Large Token Display */}
          <div className="mb-6">
            <div className="bg-green-600 rounded-2xl p-8 text-center">
              <p className="text-2xl text-green-100 mb-2">NOW SERVING</p>
              <p className="text-8xl font-bold">{lastCalledToken}</p>
            </div>
          </div>

          {/* Ready List */}
          <div className="space-y-3">
            {readyOrders.map((order, idx) => (
              <div
                key={order.token}
                className={`bg-gray-800/50 rounded-xl p-4 flex items-center justify-between ${
                  idx === 0 ? 'ring-2 ring-green-400' : ''
                }`}
              >
                <div className="flex items-center">
                  <span className="text-4xl font-bold text-green-400 mr-4">{order.token}</span>
                  <div>
                    <p className="text-gray-300">{order.items.join(', ')}</p>
                    <div className="flex items-center mt-1">
                      <span className={`text-xs px-2 py-1 rounded ${getTypeColor(order.type)} mr-2`}>
                        {order.type.toUpperCase()}
                      </span>
                      <span className="text-gray-500 text-sm">{order.readyAt}</span>
                    </div>
                  </div>
                </div>
                <Bell size={24} className="text-green-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Preparing Orders - Right Side (60%) */}
        <div className="w-3/5 bg-gradient-to-b from-yellow-900/20 to-yellow-900/5 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <ChefHat size={32} className="text-yellow-400 mr-3" />
              <h2 className="text-3xl font-bold text-yellow-400">PREPARING</h2>
            </div>
            <span className="bg-yellow-600 px-4 py-2 rounded-full text-xl font-bold">
              {preparingOrders.length}
            </span>
          </div>

          {/* Preparing Grid */}
          <div className="grid grid-cols-3 gap-4">
            {preparingOrders.map((order) => (
              <div
                key={order.token}
                className="bg-gray-800/50 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-bold text-yellow-400">{order.token}</span>
                  <div className={`flex items-center text-xs px-2 py-1 rounded ${getTypeColor(order.type)}`}>
                    {getTypeIcon(order.type)}
                    <span className="ml-1">{order.type.toUpperCase()}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-2 line-clamp-2">
                  {order.items.join(', ')}
                </p>

                {order.table && (
                  <span className="text-blue-400 text-sm">Table: {order.table}</span>
                )}

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-700">
                  <div className="flex items-center text-gray-400">
                    <Clock size={14} className="mr-1" />
                    <span className="text-sm">{order.time}</span>
                  </div>
                  <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full animate-pulse"
                      style={{ width: `${Math.random() * 60 + 20}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {preparingOrders.length === 0 && (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500">
              <ChefHat size={64} className="mb-4" />
              <p className="text-xl">No orders being prepared</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-gray-400">System Online</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded mr-1"></span> Dine-in
              </span>
              <span className="flex items-center">
                <span className="w-3 h-3 bg-orange-600 rounded mr-1"></span> Takeaway
              </span>
              <span className="flex items-center">
                <span className="w-3 h-3 bg-purple-600 rounded mr-1"></span> Delivery
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white flex items-center">
              <RefreshCw size={18} className="mr-2" /> Refresh
            </button>
            <button className="text-gray-400 hover:text-white flex items-center">
              <Settings size={18} className="mr-2" /> Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantTokenDisplay;
