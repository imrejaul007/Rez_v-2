# WebSocket Events Catalog

**Generated:** 2026-01-03 22:40:35
**Total Events:** 100+

## Connection Setup

**WebSocket URL:** `wss://ws.rezapp.in`

**Authentication:**
```javascript
const socket = io('wss://ws.rezapp.in', {
  auth: {
    token: userJWT
  }
});
```

## Event Categories

### 1. Wallet Events

#### `wallet.balanceUpdated`
**Direction:** Server → Client
**Payload:**
```json
{
  "userId": "uuid",
  "balance": 1250.50,
  "change": +50,
  "reason": "purchase_cashback"
}
```

### 2. Order Events

#### `order.statusChanged`
**Direction:** Server → Client
**Payload:**
```json
{
  "orderId": "uuid",
  "status": "out_for_delivery",
  "estimatedTime": "15 mins"
}
```

### 3. Notification Events

#### `notification.new`
**Direction:** Server → Client
**Payload:**
```json
{
  "id": "uuid",
  "title": "New offer available!",
  "body": "50% off on groceries",
  "type": "offer",
  "deepLink": "rezapp://offers/123"
}
```

... (100+ more events)
