import React, { useState, useEffect } from 'react';
import { ChefHat, Clock, CheckCircle, AlertCircle, Flame, Users, Maximize2, RefreshCw, Filter, Bell, Settings } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

const MerchantKDS = () => {
  const [view, setView] = useState('grid'); // grid, list
  const [filter, setFilter] = useState('all'); // all, new, preparing, ready
  const [station, setStation] = useState('all'); // all, grill, wok, fryer, salad, drinks
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Mock orders for Kitchen Display
  const [orders, setOrders] = useState([
    {
      id: 'KDS-001',
      orderNumber: 'ORD-20240128-001',
      type: 'dine_in',
      tableNumber: '5',
      server: 'Priya',
      orderTime: '2024-01-28T12:15:00',
      status: 'new',
      priority: 'normal',
      items: [
        {
          id: 'item-1',
          name: 'Margherita Pizza',
          quantity: 2,
          station: 'grill',
          modifiers: ['Extra Cheese', 'No Onions'],
          prepTime: 12,
          status: 'pending',
          startedAt: null,
          completedAt: null
        },
        {
          id: 'item-2',
          name: 'Chicken Wings',
          quantity: 1,
          station: 'fryer',
          modifiers: ['Spicy', 'Extra Sauce'],
          prepTime: 8,
          status: 'pending',
          startedAt: null,
          completedAt: null
        }
      ],
      totalItems: 3,
      completedItems: 0,
      estimatedTime: 12,
      elapsedTime: 2
    },
    {
      id: 'KDS-002',
      orderNumber: 'ORD-20240128-002',
      type: 'takeaway',
      tableNumber: null,
      server: null,
      orderTime: '2024-01-28T12:20:00',
      status: 'preparing',
      priority: 'high',
      items: [
        {
          id: 'item-3',
          name: 'Pepperoni Pizza',
          quantity: 1,
          station: 'grill',
          modifiers: [],
          prepTime: 12,
          status: 'preparing',
          startedAt: '2024-01-28T12:21:00',
          completedAt: null
        },
        {
          id: 'item-4',
          name: 'Garlic Bread',
          quantity: 2,
          station: 'grill',
          modifiers: ['Extra Garlic'],
          prepTime: 5,
          status: 'completed',
          startedAt: '2024-01-28T12:21:00',
          completedAt: '2024-01-28T12:25:00'
        }
      ],
      totalItems: 3,
      completedItems: 2,
      estimatedTime: 12,
      elapsedTime: 8
    },
    {
      id: 'KDS-003',
      orderNumber: 'ORD-20240128-003',
      type: 'delivery',
      tableNumber: null,
      server: null,
      orderTime: '2024-01-28T12:10:00',
      status: 'ready',
      priority: 'urgent',
      items: [
        {
          id: 'item-5',
          name: 'Veggie Supreme Pizza',
          quantity: 1,
          station: 'grill',
          modifiers: [],
          prepTime: 12,
          status: 'completed',
          startedAt: '2024-01-28T12:11:00',
          completedAt: '2024-01-28T12:22:00'
        },
        {
          id: 'item-6',
          name: 'Coca Cola',
          quantity: 2,
          station: 'drinks',
          modifiers: [],
          prepTime: 1,
          status: 'completed',
          startedAt: '2024-01-28T12:11:00',
          completedAt: '2024-01-28T12:12:00'
        }
      ],
      totalItems: 3,
      completedItems: 3,
      estimatedTime: 12,
      elapsedTime: 18
    }
  ]);

  const stations = [
    { id: 'all', name: 'All Stations', icon: '🍳', color: 'gray' },
    { id: 'grill', name: 'Grill', icon: '🔥', color: 'red' },
    { id: 'wok', name: 'Wok', icon: '🥘', color: 'orange' },
    { id: 'fryer', name: 'Fryer', icon: '🍟', color: 'yellow' },
    { id: 'salad', name: 'Salad', icon: '🥗', color: 'green' },
    { id: 'drinks', name: 'Drinks', icon: '🥤', color: 'blue' }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'new': return 'bg-blue-100 border-blue-500 text-blue-800';
      case 'preparing': return 'bg-orange-100 border-orange-500 text-orange-800';
      case 'ready': return 'bg-green-100 border-green-500 text-green-800';
      default: return 'bg-gray-100 border-gray-500 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'urgent': return 'bg-red-500 text-white';
      case 'high': return 'bg-orange-500 text-white';
      case 'normal': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getOrderTypeIcon = (type) => {
    switch(type) {
      case 'dine_in': return '🍽️';
      case 'takeaway': return '🥡';
      case 'delivery': return '🛵';
      default: return '📦';
    }
  };

  const startItem = (orderId, itemId) => {
    setOrders(orders.map(order => {
      if (order.id === orderId) {
        return {
          ...order,
          status: 'preparing',
          items: order.items.map(item =>
            item.id === itemId
              ? { ...item, status: 'preparing', startedAt: new Date().toISOString() }
              : item
          )
        };
      }
      return order;
    }));
  };

  const completeItem = (orderId, itemId) => {
    setOrders(orders.map(order => {
      if (order.id === orderId) {
        const updatedItems = order.items.map(item =>
          item.id === itemId
            ? { ...item, status: 'completed', completedAt: new Date().toISOString() }
            : item
        );
        const completedCount = updatedItems.filter(i => i.status === 'completed').length;
        const allCompleted = completedCount === updatedItems.length;

        return {
          ...order,
          items: updatedItems,
          completedItems: completedCount,
          status: allCompleted ? 'ready' : 'preparing'
        };
      }
      return order;
    }));
  };

  const completeOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
    if (soundEnabled) {
      // Play completion sound
      console.log('Order completed:', orderId);
    }
  };

  const filteredOrders = orders.filter(order => {
    const statusMatch = filter === 'all' || order.status === filter;
    const stationMatch = station === 'all' || order.items.some(item => item.station === station);
    return statusMatch && stationMatch;
  });

  // Auto-refresh simulation
  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => {
        // Update elapsed time for all orders
        setOrders(prevOrders =>
          prevOrders.map(order => ({
            ...order,
            elapsedTime: order.elapsedTime + 1
          }))
        );
      }, 60000); // Every minute
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  return (
    <div className="min-h-screen bg-gray-900">
      <MerchantNav />

      <div className="lg:ml-64">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 p-4 sticky top-0 z-10 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <ChefHat className="w-8 h-8 text-white" />
              <div>
                <h1 className="text-2xl font-bold text-white">Kitchen Display System</h1>
                <p className="text-white/80 text-sm">
                  {filteredOrders.length} Active Orders • Station: {stations.find(s => s.id === station)?.name}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Station Filter */}
              <select
                value={station}
                onChange={(e) => setStation(e.target.value)}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-4 py-2 rounded-lg font-semibold focus:outline-none cursor-pointer"
              >
                {stations.map(s => (
                  <option key={s.id} value={s.id} className="text-gray-800">
                    {s.icon} {s.name}
                  </option>
                ))}
              </select>

              {/* Status Filter */}
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-4 py-2 rounded-lg font-semibold focus:outline-none cursor-pointer"
              >
                <option value="all" className="text-gray-800">All Orders</option>
                <option value="new" className="text-gray-800">New</option>
                <option value="preparing" className="text-gray-800">Preparing</option>
                <option value="ready" className="text-gray-800">Ready</option>
              </select>

              {/* View Toggle */}
              <button
                onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
                className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-all"
              >
                <Maximize2 className="w-5 h-5 text-white" />
              </button>

              {/* Auto Refresh */}
              <button
                onClick={() => setAutoRefresh(!autoRefresh)}
                className={`p-2 rounded-lg transition-all ${autoRefresh ? 'bg-green-500' : 'bg-white/10'}`}
              >
                <RefreshCw className={`w-5 h-5 text-white ${autoRefresh ? 'animate-spin' : ''}`} />
              </button>

              {/* Sound Toggle */}
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`p-2 rounded-lg transition-all ${soundEnabled ? 'bg-green-500' : 'bg-white/10'}`}
              >
                <Bell className={`w-5 h-5 text-white ${soundEnabled ? 'animate-pulse' : ''}`} />
              </button>

              <button className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-white/20 transition-all">
                <Settings className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Orders Grid */}
        <div className="p-6">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-20">
              <ChefHat className="w-20 h-20 text-gray-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-600">No Active Orders</h2>
              <p className="text-gray-500 mt-2">Orders will appear here when customers place them</p>
            </div>
          ) : (
            <div className={`grid ${view === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
              {filteredOrders.map(order => (
                <div
                  key={order.id}
                  className={`bg-white rounded-2xl border-4 ${getStatusColor(order.status)} shadow-xl overflow-hidden`}
                >
                  {/* Order Header */}
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 text-white">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-3xl">{getOrderTypeIcon(order.type)}</span>
                          <div>
                            <h3 className="text-xl font-bold">{order.orderNumber}</h3>
                            {order.tableNumber && (
                              <p className="text-sm text-white/80">Table {order.tableNumber}</p>
                            )}
                          </div>
                        </div>
                        {order.server && (
                          <p className="text-xs text-white/60">Server: {order.server}</p>
                        )}
                      </div>

                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getPriorityColor(order.priority)}`}>
                        {order.priority.toUpperCase()}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{order.elapsedTime} min</span>
                      </div>
                      <div className={`flex items-center gap-1 ${order.elapsedTime > order.estimatedTime ? 'text-red-400' : 'text-green-400'}`}>
                        <AlertCircle className="w-4 h-4" />
                        <span>Est: {order.estimatedTime} min</span>
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="p-4 space-y-3">
                    {order.items.map(item => (
                      <div
                        key={item.id}
                        className={`p-3 rounded-lg border-2 ${
                          item.status === 'completed'
                            ? 'bg-green-50 border-green-300'
                            : item.status === 'preparing'
                            ? 'bg-orange-50 border-orange-300'
                            : 'bg-gray-50 border-gray-300'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-2xl font-bold text-gray-800">{item.quantity}×</span>
                              <h4 className="font-bold text-gray-800">{item.name}</h4>
                            </div>
                            {item.modifiers.length > 0 && (
                              <div className="ml-8">
                                {item.modifiers.map((mod, idx) => (
                                  <span key={idx} className="inline-block mr-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-semibold">
                                    {mod}
                                  </span>
                                ))}
                              </div>
                            )}
                            <p className="text-xs text-gray-600 ml-8 mt-1">
                              Station: {stations.find(s => s.id === item.station)?.name} • {item.prepTime} min
                            </p>
                          </div>

                          <div className="flex flex-col gap-2">
                            {item.status === 'pending' && (
                              <button
                                onClick={() => startItem(order.id, item.id)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
                              >
                                <Flame className="w-4 h-4" />
                                Start
                              </button>
                            )}
                            {item.status === 'preparing' && (
                              <button
                                onClick={() => completeItem(order.id, item.id)}
                                className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all flex items-center gap-2"
                              >
                                <CheckCircle className="w-4 h-4" />
                                Done
                              </button>
                            )}
                            {item.status === 'completed' && (
                              <span className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                Done
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Footer */}
                  <div className="bg-gray-100 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Progress</p>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-3 bg-gray-300 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-green-500 transition-all"
                              style={{ width: `${(order.completedItems / order.totalItems) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-bold text-gray-800">
                            {order.completedItems}/{order.totalItems}
                          </span>
                        </div>
                      </div>

                      {order.status === 'ready' && (
                        <button
                          onClick={() => completeOrder(order.id)}
                          className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-all shadow-lg"
                        >
                          Complete Order
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MerchantKDS;
