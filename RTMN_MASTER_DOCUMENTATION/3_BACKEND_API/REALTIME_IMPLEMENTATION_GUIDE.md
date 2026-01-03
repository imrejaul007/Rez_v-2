# Real-Time Implementation Guide - RTMN Backend

**Last Updated:** 2026-01-03
**Technology:** Socket.IO
**Purpose:** Real-time features implementation

---

## 📋 OVERVIEW

Real-time features in RTMN:
- Order status updates
- Wallet balance changes
- Live delivery tracking
- Flash sale notifications
- Merchant order alerts
- Admin dashboard updates

---

## 🚀 SOCKET.IO SETUP

### Installation

```bash
npm install socket.io socket.io-client
```

### Server Setup

```javascript
// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      process.env.CUSTOMER_APP_URL,
      process.env.MERCHANT_APP_URL,
      process.env.ADMIN_APP_URL
    ],
    credentials: true
  },
  path: '/socket.io',
  pingTimeout: 60000,
  pingInterval: 25000,
  maxHttpBufferSize: 1e6
});

// Authentication middleware
io.use((socket, next) => {
  const token = socket.handshake.auth.token;

  if (!token) {
    return next(new Error('Authentication token required'));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = decoded.sub;
    socket.userRole = decoded.role;
    next();
  } catch (error) {
    next(new Error('Invalid token'));
  }
});

// Connection handler
io.on('connection', (socket) => {
  console.log(`User ${socket.userId} connected`);

  // Join user-specific room
  socket.join(`user:${socket.userId}`);

  // Role-based rooms
  if (socket.userRole === 'merchant_owner' || socket.userRole === 'merchant_staff') {
    // Get merchant ID and join merchant room
    const merchantId = getMerchantIdFromUser(socket.userId);
    socket.join(`merchant:${merchantId}`);
  } else if (['super_admin', 'admin', 'operator'].includes(socket.userRole)) {
    socket.join('admin:dashboard');
  }

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log(`User ${socket.userId} disconnected`);
  });

  // Custom events
  socket.on('order:subscribe', (orderId) => {
    socket.join(`order:${orderId}`);
  });

  socket.on('order:unsubscribe', (orderId) => {
    socket.leave(`order:${orderId}`);
  });
});

// Export io instance
module.exports = { io, server };
```

---

## 🔔 EVENT CATALOG

### 1. Order Events

#### order.statusChanged

```javascript
// Emit when order status changes
io.to(`user:${order.user_id}`).emit('order.statusChanged', {
  orderId: order.id,
  orderNumber: order.order_number,
  status: 'out_for_delivery',
  previousStatus: 'processing',
  timestamp: new Date().toISOString(),
  metadata: {
    estimatedDelivery: '2026-01-05T18:00:00Z',
    deliveryPartner: {
      name: 'John Delivery',
      phone: '+919988776655'
    }
  }
});

// Also notify merchant
io.to(`merchant:${order.merchant_id}`).emit('order.statusChanged', {
  orderId: order.id,
  status: 'out_for_delivery'
});
```

#### order.created (Merchant receives new order)

```javascript
io.to(`merchant:${order.merchant_id}`).emit('order.created', {
  orderId: order.id,
  orderNumber: order.order_number,
  customer: {
    name: user.first_name,
    phone: user.phone
  },
  items: order.items.length,
  total: order.total_amount,
  type: order.order_type,
  createdAt: order.created_at
});

// Sound notification flag
io.to(`merchant:${order.merchant_id}`).emit('notification.sound', {
  type: 'new_order'
});
```

---

### 2. Wallet Events

#### wallet.balanceUpdated

```javascript
// After coins credit/debit
io.to(`user:${userId}`).emit('wallet.balanceUpdated', {
  balances: {
    rezCoins: 1250.50,
    brandedCoins: 150,
    promoCoins: 50,
    total: 1450.50
  },
  change: {
    amount: 99,
    type: 'rez_coins',
    operation: 'credit',
    reason: 'purchase_cashback',
    orderId: 'order_789'
  },
  timestamp: new Date().toISOString()
});
```

#### wallet.coinsExpiring

```javascript
// Sent daily for coins expiring in 7 days
io.to(`user:${userId}`).emit('wallet.coinsExpiring', {
  amount: 200,
  coinType: 'rez_coins',
  expiresAt: '2026-02-01T00:00:00Z',
  daysRemaining: 7
});
```

---

### 3. Delivery Tracking Events

#### delivery.locationUpdated

```javascript
// Real-time delivery partner location
io.to(`order:${orderId}`).emit('delivery.locationUpdated', {
  orderId,
  location: {
    latitude: 19.0760,
    longitude: 72.8777
  },
  deliveryPartner: {
    name: 'John Delivery',
    phone: '+919988776655'
  },
  estimatedArrival: '15 minutes',
  distanceRemaining: 2.3, // km
  timestamp: new Date().toISOString()
});
```

#### delivery.arrived

```javascript
io.to(`user:${userId}`).emit('delivery.arrived', {
  orderId,
  orderNumber,
  deliveryPartner: {
    name: 'John Delivery',
    phone: '+919988776655'
  },
  message: 'Your delivery partner has arrived',
  timestamp: new Date().toISOString()
});
```

---

### 4. Flash Sale / Promotion Events

#### promotion.flashSaleStarted

```javascript
// Broadcast to all connected users
io.emit('promotion.flashSaleStarted', {
  id: 'flash_sale_123',
  title: '50% Off Electronics',
  description: 'Limited time offer - Only 1 hour!',
  discount: 50,
  category: 'electronics',
  endsAt: '2026-01-03T15:00:00Z',
  imageUrl: 'https://cdn.rtmn.in/sales/flash-electronics.jpg'
});
```

#### promotion.stockUpdate (Live inventory)

```javascript
// During flash sales - update stock in real-time
io.to('flash_sale:123').emit('promotion.stockUpdate', {
  productId: 'product_456',
  stockRemaining: 5,
  totalStock: 100,
  percentageRemaining: 5
});
```

---

### 5. Admin Dashboard Events

#### dashboard.newOrder

```javascript
io.to('admin:dashboard').emit('dashboard.newOrder', {
  orderId: order.id,
  orderNumber: order.order_number,
  amount: order.total_amount,
  merchant: {
    id: merchant.id,
    name: merchant.business_name
  },
  timestamp: new Date().toISOString()
});
```

#### dashboard.stats

```javascript
// Every 30 seconds - live stats update
setInterval(async () => {
  const stats = await calculateDashboardStats();

  io.to('admin:dashboard').emit('dashboard.stats', {
    todayOrders: stats.orders,
    todayRevenue: stats.revenue,
    activeUsers: stats.activeUsers,
    activeMerchants: stats.activeMerchants,
    timestamp: new Date().toISOString()
  });
}, 30000);
```

---

## 📱 CLIENT IMPLEMENTATION

### React Native Client

```javascript
// SocketContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import * as SecureStore from 'expo-secure-store';

const SocketContext = createContext();

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    initializeSocket();

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  async function initializeSocket() {
    const token = await SecureStore.getItemAsync('accessToken');

    if (!token) return;

    const socketInstance = io(process.env.API_BASE_URL, {
      auth: { token },
      path: '/socket.io',
      transports: ['websocket'],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000
    });

    socketInstance.on('connect', () => {
      console.log('Socket connected');
      setConnected(true);
    });

    socketInstance.on('disconnect', () => {
      console.log('Socket disconnected');
      setConnected(false);
    });

    socketInstance.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
    });

    setSocket(socketInstance);
  }

  return (
    <SocketContext.Provider value={{ socket, connected }}>
      {children}
    </SocketContext.Provider>
  );
}

export const useSocket = () => useContext(SocketContext);
```

### Usage in Components

```javascript
// OrderTrackingScreen.js
import { useEffect } from 'react';
import { useSocket } from './SocketContext';

function OrderTrackingScreen({ route }) {
  const { orderId } = route.params;
  const { socket, connected } = useSocket();
  const [orderStatus, setOrderStatus] = useState(null);

  useEffect(() => {
    if (!socket || !connected) return;

    // Subscribe to order updates
    socket.emit('order:subscribe', orderId);

    // Listen for status changes
    socket.on('order.statusChanged', handleStatusChange);

    // Listen for delivery location updates
    socket.on('delivery.locationUpdated', handleLocationUpdate);

    return () => {
      socket.emit('order:unsubscribe', orderId);
      socket.off('order.statusChanged', handleStatusChange);
      socket.off('delivery.locationUpdated', handleLocationUpdate);
    };
  }, [socket, connected, orderId]);

  function handleStatusChange(data) {
    if (data.orderId === orderId) {
      setOrderStatus(data.status);

      // Show notification
      showNotification({
        title: 'Order Update',
        message: `Your order is now ${data.status}`
      });
    }
  }

  function handleLocationUpdate(data) {
    // Update map marker
    updateDeliveryMarker(data.location);
  }

  return (
    <View>
      {/* Order tracking UI */}
    </View>
  );
}
```

---

## 🔄 RECONNECTION HANDLING

### Server-Side

```javascript
io.on('connection', (socket) => {
  // Send missed events on reconnection
  socket.on('sync:request', async ({ lastSyncTimestamp }) => {
    const missedEvents = await getMissedEvents(socket.userId, lastSyncTimestamp);

    socket.emit('sync:response', {
      events: missedEvents,
      timestamp: new Date().toISOString()
    });
  });
});

async function getMissedEvents(userId, since) {
  // Fetch events from database/cache
  const events = await db.events.findAll({
    where: {
      user_id: userId,
      created_at: { [Op.gt]: new Date(since) }
    },
    order: [['created_at', 'ASC']]
  });

  return events;
}
```

### Client-Side

```javascript
socket.on('connect', () => {
  const lastSync = localStorage.getItem('lastSocketSync');

  if (lastSync) {
    socket.emit('sync:request', {
      lastSyncTimestamp: lastSync
    });
  }

  localStorage.setItem('lastSocketSync', new Date().toISOString());
});

socket.on('sync:response', ({ events }) => {
  events.forEach(event => {
    // Process each missed event
    handleEvent(event);
  });
});
```

---

## 📊 MESSAGE QUEUING (Offline Users)

### Using Redis for Offline Messages

```javascript
const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);

// Store message for offline user
async function sendToUserOrQueue(userId, event, data) {
  const room = `user:${userId}`;
  const socketIds = await io.in(room).allSockets();

  if (socketIds.size > 0) {
    // User is online - send immediately
    io.to(room).emit(event, data);
  } else {
    // User is offline - queue message
    await redis.rpush(
      `offline:${userId}`,
      JSON.stringify({
        event,
        data,
        timestamp: new Date().toISOString()
      })
    );

    // Set expiry (7 days)
    await redis.expire(`offline:${userId}`, 7 * 24 * 60 * 60);
  }
}

// Send queued messages on connection
io.on('connection', async (socket) => {
  const queueKey = `offline:${socket.userId}`;
  const messages = await redis.lrange(queueKey, 0, -1);

  if (messages.length > 0) {
    messages.forEach(msg => {
      const { event, data } = JSON.parse(msg);
      socket.emit(event, data);
    });

    // Clear queue
    await redis.del(queueKey);
  }
});
```

---

## 🔐 SECURITY

### Room Access Control

```javascript
io.use((socket, next) => {
  socket.on('join', (room) => {
    // Validate room access
    if (room.startsWith('user:') && room !== `user:${socket.userId}`) {
      return socket.emit('error', { message: 'Unauthorized room access' });
    }

    if (room.startsWith('merchant:')) {
      // Verify user is merchant owner/staff
      const merchantId = room.split(':')[1];
      if (!userBelongsToMerchant(socket.userId, merchantId)) {
        return socket.emit('error', { message: 'Unauthorized room access' });
      }
    }

    socket.join(room);
  });

  next();
});
```

---

## 📈 MONITORING

### Track Active Connections

```javascript
// Every minute - log stats
setInterval(() => {
  const sockets = io.sockets.sockets;
  console.log(`Active connections: ${sockets.size}`);

  const stats = {
    total: sockets.size,
    byRole: {},
    byRoom: {}
  };

  sockets.forEach(socket => {
    stats.byRole[socket.userRole] = (stats.byRole[socket.userRole] || 0) + 1;
  });

  console.log('Socket stats:', stats);
}, 60000);
```

---

**Status:** ✅ Production-Ready
**Last Updated:** 2026-01-03
**Technology:** Socket.IO v4
**Next:** [Data Seeding Scripts](./DATA_SEEDING_SCRIPTS.md)
