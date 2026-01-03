# ReZ Universal Store System Documentation

## Overview

The ReZ Universal Store System is a config-driven, flexible architecture that handles ALL store types while maintaining ReZ's core principles of savings-first, mode-aware filtering, and gamification.

---

## Architecture

### 1. Configuration-Driven System

**File**: `src/config/storeTypes.js`

All store types are defined in a single configuration file with:
- Theme (colors, gradients, badges)
- Features (delivery, lock price, appointments, etc.)
- Reward multipliers
- Allowed modes (Halal, Vegan, etc.)
- Sections (products, offers, subscriptions, etc.)
- CTA text and messaging

**Example**:
```javascript
LUXURY: {
  id: 'luxury',
  name: 'Luxury Store',
  icon: '💎',
  theme: {
    primary: 'from-amber-500 to-yellow-500',
    accent: 'text-amber-400',
    badge: 'bg-amber-500/20 text-amber-400',
  },
  features: {
    appointment: true,
    concierge: true,
    exclusive: true,
    prive: true,
  },
  rewardMultiplier: 2.0,
  allowedModes: ['prive'],
  sections: ['collections', 'exclusive', 'experiences', 'concierge'],
  cta: 'Book Experience',
  savingsMessage: 'Earn Privé Coins + Exclusive Perks',
}
```

---

### 2. Store Types Supported

| Type | ID | Icon | Key Features |
|------|-----|------|-------------|
| 60-Min Delivery | `60MIN` | ⚡ | Live ETA, instant order, delivery tracking |
| Convenience | `CONVENIENCE` | 🏪 | Delivery, pickup, subscriptions |
| Sample Store | `SAMPLE` | 🎁 | Trial @ ₹1, review rewards, share rewards |
| Luxury | `LUXURY` | 💎 | Privé only, appointments, concierge |
| Organic | `ORGANIC` | 🌱 | Certifications, eco-impact, subscriptions |
| Men Store | `MEN` | 👔 | Virtual try-on, style AI, size guide |
| Women Store | `WOMEN` | 👗 | Virtual try-on, women exclusive offers |
| Children | `CHILDREN` | 🧸 | Age filters, safety info, parental controls |
| Rental | `RENTAL` | 🔄 | Rental pricing, deposits, pickup/return |
| Gifting | `GIFTING` | 🎀 | Occasion filters, budget slider, gift cards |
| Deals | `DEALS` | 🏷️ | Flash deals, countdown timers, limited stock |
| Flea Market | `FLEA` | 🛍️ | Local vendors, negotiation, events |

---

### 3. Mode-Aware Filtering

**Modes Supported**:
- 🕌 Halal
- 🌱 Vegan
- 🥬 Vegetarian
- 🌿 Organic
- 🔞 Adult
- ✨ Privé

**Auto-Filtering Logic**:
```javascript
// Products automatically filtered based on active modes
const products = filterProductsByMode(rawProducts, activeModes);

// Each product can be hidden with reason shown
{
  product: {...},
  isHidden: true,
  hideReason: "Not Halal-certified"
}
```

---

## Components

### 1. StoreHeader Component

**File**: `src/components/store/StoreHeader.jsx`

Displays:
- Hero image with gradient overlay
- Store logo, name, category
- Rating & reviews
- Mode compatibility badges (Halal ✓, Vegan ✓, etc.)
- Distance, delivery time, contact actions
- Cashback badge
- Store type badge
- Available offers banner
- **Sticky reward strip** showing savings message

**Props**:
```javascript
<StoreHeader
  store={storeData}
  storeConfig={configFromTypes}
  isSaved={boolean}
  onToggleSave={function}
  onShare={function}
  showBackButton={boolean}
/>
```

---

### 2. StoreQuickActions Component

**File**: `src/components/store/StoreQuickActions.jsx`

Dynamic action buttons based on store features:

**Always Shown**:
- 💰 Pay with ReZ (primary CTA)

**Conditional Actions**:
- 🔒 Lock Price (if `lockPrice: true`)
- 🧾 Upload Bill (if `uploadBill: true`)
- ⏰ Book Appointment (if `appointment: true`)
- 🎁 Concierge (if `concierge: true`)

**ReZ Advantage Message**:
Shows why ReZ is better than normal payment

---

### 3. StoreDetailPage (Universal Page)

**File**: `src/pages/StoreDetailPage.jsx`

**Features**:
- Uses store type config to adapt UI
- Auto-applies mode filtering
- Dynamic tabs based on store sections
- Shows filtered/hidden products with reasons
- Empty state when all items filtered
- Social proof & reviews sections
- Store information footer

**Route**: `/store-detail/:id`

**URL Parameters**:
- Pass store type via query: `?type=luxury`
- Example: `/store-detail/123?type=luxury`

---

## Usage Examples

### Example 1: 60-Min Delivery Store

```javascript
// Store data
const store = {
  id: '1',
  name: 'BigBasket Express',
  type: '60min',
  is60Min: true,
  deliveryTime: '45-60 mins',
  cashback: 20,
  // ...
};

// Auto-configured with:
// - Live ETA badges
// - Instant order button
// - "Delivery fee returned as ReZ Coins" message
// - 1.2x reward multiplier
```

### Example 2: Luxury Store

```javascript
// Store data
const store = {
  id: '2',
  name: 'Louis Vuitton',
  type: 'luxury',
  isPrive: true,
  cashback: 30,
  // ...
};

// Auto-configured with:
// - Dark + gold theme
// - Book Experience CTA
// - Concierge button
// - 2.0x reward multiplier (Privé Coins)
// - Only shows to Privé members
```

### Example 3: Sample Store

```javascript
// Product pricing
{
  name: 'Trial Skincare Kit',
  price: 1,
  originalPrice: 499,
  badges: ['Try @ ₹1'],
  // ...
}

// Auto-configured with:
// - "Try @ ₹1" CTA
// - Triple coins for reviews + shares
// - 1.5x reward multiplier
```

---

## Mode Filtering Examples

### Scenario 1: Halal Mode Active

```javascript
// User has Halal mode ON
activeModes = ['halal'];

// Product 1 (Halal certified)
{
  name: 'Chicken Biryani',
  isHalal: true,
  isHidden: false,  // ✅ SHOWN
}

// Product 2 (Not Halal)
{
  name: 'Pork Ribs',
  isHalal: false,
  isHidden: true,  // ❌ HIDDEN
  hideReason: "Not Halal-certified"
}
```

### Scenario 2: Vegan + Organic Modes

```javascript
// User has both modes active
activeModes = ['vegan', 'organic'];

// Only products that are BOTH vegan AND organic are shown
// Others hidden with appropriate reason
```

---

## Adding New Store Types

1. **Add to `storeTypes.js`**:
```javascript
NEWTYPE: {
  id: 'newtype',
  name: 'New Store Type',
  icon: '🆕',
  theme: {
    primary: 'from-color-500 to-color-600',
    accent: 'text-color-400',
    badge: 'bg-color-500/20 text-color-400',
  },
  features: {
    // Define features
  },
  rewardMultiplier: 1.0,
  allowedModes: ['all'],
  sections: ['products', 'offers'],
  cta: 'Action Text',
}
```

2. **Use StoreDetailPage**:
```javascript
// No new page needed! Just use:
<Link to="/store-detail/123?type=newtype">
  Visit Store
</Link>
```

---

## ReZ Core Principles (Built-In)

### ✅ 1. Savings Always Visible
- Cashback badge on header
- Sticky reward strip
- Coins shown on every product
- Offer banners

### ✅ 2. Mode-Aware Intelligence
- Auto-filters products
- Shows relevant badges
- Explains why items are hidden

### ✅ 3. Gamification
- Reward multipliers per store type
- Extra coins for actions (review, share)
- Streak rewards for organic stores

### ✅ 4. Lock Price Advantage
- Available for compatible stores
- "Pay 10%, reserve item" messaging

### ✅ 5. Upload Bill & Earn
- Quick action button
- Extra coins for offline purchases

### ✅ 6. Social Proof
- Reviews section
- UGC integration ready
- "People near you" messaging

---

## API Integration Points

### Store Data
```javascript
// GET /api/stores/:id?type=<storeType>
{
  id: string,
  name: string,
  category: string,
  image: string,
  rating: number,
  reviews: number,
  cashback: number,
  distance: string,
  deliveryTime: string,
  isHalal: boolean,
  isVegan: boolean,
  isVegetarian: boolean,
  is60Min: boolean,
  isPrive: boolean,
  offers: string[],
  tags: string[]
}
```

### Products Data
```javascript
// GET /api/stores/:id/products
[{
  id: string,
  name: string,
  description: string,
  price: number,
  originalPrice: number,
  image: string,
  badges: string[],
  isHalal: boolean,
  isVegan: boolean,
  isVegetarian: boolean,
  coins: number,
  delivery: string | null,
  rental: {...} | null  // For rental stores
}]
```

---

## Testing

### Test Different Store Types
1. Visit `/store-detail/1?type=60min`
2. Visit `/store-detail/2?type=luxury`
3. Visit `/store-detail/3?type=organic`
4. Visit `/store-detail/4?type=rental`

### Test Mode Filtering
1. Activate Halal mode in app settings
2. Visit any store
3. Verify non-Halal products are hidden
4. Check "hideReason" is displayed

### Test Features
- Lock Price button (stores with `lockPrice: true`)
- Upload Bill button (stores with `uploadBill: true`)
- Appointment booking (luxury/organic stores)
- Rental pricing (rental stores)

---

## Future Enhancements

1. **Real-time ETA** for 60-min stores
2. **AR Try-On** for fashion stores
3. **Live inventory** for rental stores
4. **Appointment calendar** for luxury/organic
5. **Negotiation chat** for flea markets
6. **Virtual tours** for luxury stores
7. **Eco-impact tracker** for organic stores

---

## Developer Quick Start

```bash
# 1. Use existing StoreDetailPage
import StoreDetailPage from './pages/StoreDetailPage';

# 2. Route to it with store type
<Route path="store-detail/:id" element={<StoreDetailPage />} />

# 3. Link from anywhere
<Link to="/store-detail/123?type=luxury">Visit Store</Link>

# 4. That's it! The page auto-configures based on type
```

---

**Built with**: React 19, Tailwind CSS, Lucide Icons, React Router v6
**Design System**: ReZ Colors + Dark Mode Support
**Architecture**: Config-driven, component-based, mode-aware
