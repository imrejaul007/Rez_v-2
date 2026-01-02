# Phase 3: Vertical Expansion Apps - Backend API Requirements

## Overview
Phase 3 introduces 4 vertical-specific apps that clone the ReZ UI/SDK pattern for niche markets:
- **StyleSync** - Fashion & Beauty
- **FitCircle** - Health & Fitness
- **TechHunt** - Electronics & Gadgets
- **HomeHub** - Home & Living

All apps share Rabtul infrastructure (SSO, Coin Ledger, Notifications, AIRA).

---

## 1. StyleSync (Fashion/Beauty) APIs

### 1.1 Home & Discovery
```
GET /api/stylesync/home
Response: {
  aiInsights: { title, description, products[], recommendation },
  virtualTryOn: { title, subtitle, image },
  trendingLooks: Look[],
  featuredBrands: Brand[],
  beautyDeals: Deal[],
  categories: Category[],
  quickActions: Action[]
}

GET /api/stylesync/trending
Query: ?category=all|fashion|beauty|skincare|hair&period=today|week|month
Response: { trending: TrendingItem[] }

GET /api/stylesync/brands
Response: { brands: Brand[] }
```

### 1.2 Looks & Inspiration
```
GET /api/stylesync/looks
Query: ?filter=trending|new|celebrity|budget&sort=popular|recent
Response: {
  looks: Look[],
  pagination: { page, limit, total, hasMore }
}

GET /api/stylesync/looks/:lookId
Response: {
  look: {
    id, title, creator: Creator,
    products: Product[],
    likes, saves, comments,
    tags: string[]
  }
}

POST /api/stylesync/looks/:lookId/save
Body: { userId }
Response: { success, savedCount }

POST /api/stylesync/looks/:lookId/like
Body: { userId }
Response: { success, likeCount }
```

### 1.3 Virtual Closet
```
GET /api/stylesync/closet/:userId
Response: {
  items: ClosetItem[],
  stats: { totalItems, favorites, totalWears, avgCostPerWear },
  categories: { tops, bottoms, dresses, shoes, accessories, bags },
  outfitSuggestions: Outfit[]
}

POST /api/stylesync/closet/add
Body: { userId, imageUrl, category, brand?, purchasePrice?, purchaseDate? }
Response: { success, item: ClosetItem }

PUT /api/stylesync/closet/:itemId
Body: { wearCount?, favorite?, category? }
Response: { success, item: ClosetItem }

DELETE /api/stylesync/closet/:itemId
Response: { success }

GET /api/stylesync/closet/:userId/outfits/ai
Query: ?occasion=casual|work|party|date&weather=warm|cold|rainy
Response: { suggestions: Outfit[] }
```

### 1.4 Shop
```
GET /api/stylesync/shop/products
Query: ?category=all&sort=popular|new|price_low|price_high&page=1
Response: {
  products: Product[],
  pagination: { page, limit, total, hasMore }
}

GET /api/stylesync/shop/flash-deals
Response: {
  deals: FlashDeal[],
  expiresAt: timestamp
}

GET /api/stylesync/shop/ai-recommendations/:userId
Response: {
  recommendations: Product[],
  reason: string
}
```

---

## 2. FitCircle (Health/Fitness) APIs

### 2.1 Home & Dashboard
```
GET /api/fitcircle/home/:userId
Response: {
  dailyStats: {
    steps: { current, goal },
    calories: { current, goal },
    water: { current, goal },
    activeMinutes: { current, goal },
    coinsEarned: number
  },
  todaysChallenge: Challenge,
  currentWorkout: Workout?,
  nearbyGyms: Gym[],
  leaderboard: LeaderboardEntry[]
}

PUT /api/fitcircle/stats/:userId
Body: { steps?, calories?, water?, activeMinutes? }
Response: { success, stats, coinsEarned }
```

### 2.2 Workouts
```
GET /api/fitcircle/workouts
Query: ?category=all|strength|cardio|yoga|hiit|stretch&level=all|beginner|intermediate|advanced
Response: {
  featured: Workout,
  workouts: Workout[],
  recentWorkouts: UserWorkout[]
}

GET /api/fitcircle/workouts/:workoutId
Response: {
  workout: {
    id, title, instructor,
    duration, category, level,
    calories, exercises: Exercise[],
    rating, reviews,
    coins: number
  }
}

POST /api/fitcircle/workouts/:workoutId/start
Body: { userId }
Response: { success, sessionId, startedAt }

POST /api/fitcircle/workouts/:workoutId/complete
Body: { userId, sessionId, duration, caloriesBurned }
Response: { success, coinsEarned, xpEarned, achievements? }
```

### 2.3 Challenges
```
GET /api/fitcircle/challenges
Query: ?status=active|upcoming|completed
Response: {
  featured: Challenge,
  challenges: Challenge[],
  userChallenges: UserChallenge[]
}

GET /api/fitcircle/challenges/:challengeId
Response: {
  challenge: Challenge,
  userProgress?: { current, total, rank },
  leaderboard: LeaderboardEntry[]
}

POST /api/fitcircle/challenges/:challengeId/join
Body: { userId, teamId? }
Response: { success, enrollmentId }

GET /api/fitcircle/challenges/:challengeId/leaderboard
Query: ?limit=50&offset=0
Response: { leaderboard: LeaderboardEntry[], userRank: number }
```

### 2.4 Nutrition
```
GET /api/fitcircle/nutrition/daily/:userId
Query: ?date=YYYY-MM-DD
Response: {
  goals: { calories, protein, carbs, fat, water },
  logged: { calories, protein, carbs, fat, water },
  meals: Meal[],
  waterLog: WaterEntry[]
}

POST /api/fitcircle/nutrition/log
Body: { userId, mealType, items: FoodItem[], timestamp }
Response: { success, meal: Meal, coinsEarned }

POST /api/fitcircle/nutrition/water
Body: { userId, amount, timestamp }
Response: { success, totalToday }

GET /api/fitcircle/nutrition/recipes
Query: ?remainingMacros={protein,carbs,fat}&maxCalories=500
Response: { suggestions: Recipe[] }
```

### 2.5 Profile & Stats
```
GET /api/fitcircle/profile/:userId
Response: {
  user: { name, avatar, level, title, streak, joinedDate },
  followers, following,
  totalCoins: number
}

GET /api/fitcircle/profile/:userId/stats
Response: {
  totalWorkouts, totalMinutes, caloriesBurned,
  challengesWon, personalBests,
  weeklyProgress: DailyProgress[],
  achievements: Achievement[]
}

GET /api/fitcircle/profile/:userId/achievements
Response: { achievements: Achievement[] }
```

---

## 3. TechHunt (Electronics) APIs

### 3.1 Home & Discovery
```
GET /api/techhunt/home
Response: {
  flashDeals: FlashDeal[],
  trendingProducts: Product[],
  categories: Category[],
  techNews: NewsItem[],
  userCoins: number
}

GET /api/techhunt/categories
Response: { categories: Category[] }

GET /api/techhunt/products/trending
Query: ?category=all|phones|laptops|audio|wearables|gaming
Response: { products: Product[] }
```

### 3.2 Deals & Flash Sales
```
GET /api/techhunt/deals
Query: ?type=all|flash|daily|clearance|bundle&category=all&sort=popular
Response: {
  flashSaleTimer: { endsAt: timestamp },
  flashDeals: FlashDeal[],
  allDeals: Deal[],
  upcomingDeals: UpcomingDeal[]
}

GET /api/techhunt/deals/flash
Response: {
  deals: FlashDeal[],
  expiresAt: timestamp
}

GET /api/techhunt/deals/upcoming
Response: { deals: UpcomingDeal[] }

POST /api/techhunt/deals/:dealId/alert
Body: { userId }
Response: { success, alertId }
```

### 3.3 Product Comparison
```
GET /api/techhunt/products/:productId/specs
Response: {
  product: Product,
  specs: { [key: string]: SpecValue },
  pros: string[],
  cons: string[]
}

POST /api/techhunt/compare
Body: { productIds: string[] }
Response: {
  products: Product[],
  specs: ComparisonSpec[],
  verdict: {
    winner: productId,
    reason: string,
    scores: { [productId]: number }
  }
}

GET /api/techhunt/compare/suggestions
Query: ?productId=xxx
Response: { suggestions: Product[] }
```

### 3.4 Wishlist & Price Tracking
```
GET /api/techhunt/wishlist/:userId
Response: {
  items: WishlistItem[],
  stats: { totalValue, potentialSavings, activeAlerts }
}

POST /api/techhunt/wishlist/add
Body: { userId, productId }
Response: { success, item: WishlistItem }

DELETE /api/techhunt/wishlist/:productId
Body: { userId }
Response: { success }

PUT /api/techhunt/wishlist/:productId/alert
Body: { userId, targetPrice }
Response: { success, alertActive: boolean }

GET /api/techhunt/products/:productId/price-history
Query: ?period=30d|90d|1y
Response: {
  history: PricePoint[],
  lowestPrice: { price, date },
  highestPrice: { price, date }
}
```

---

## 4. HomeHub (Home & Living) APIs

### 4.1 Home & Discovery
```
GET /api/homehub/home
Response: {
  flashDeals: Deal[],
  trendingProducts: Product[],
  designIdeas: DesignIdea[],
  categories: Category[],
  userCoins: number
}

GET /api/homehub/categories
Response: { categories: Category[] }

GET /api/homehub/products/trending
Query: ?category=all|furniture|lighting|kitchen|bath|garden|decor
Response: { products: Product[] }
```

### 4.2 Room Planner
```
GET /api/homehub/planner/rooms/:userId
Response: { rooms: Room[] }

POST /api/homehub/planner/rooms
Body: { userId, name, dimensions, style }
Response: { success, room: Room }

PUT /api/homehub/planner/rooms/:roomId
Body: { name?, dimensions?, style?, items?: PlacedItem[] }
Response: { success, room: Room }

DELETE /api/homehub/planner/rooms/:roomId
Response: { success }

GET /api/homehub/planner/furniture
Query: ?category=seating|tables|storage|lighting|decor|plants
Response: { items: FurnitureItem[] }

GET /api/homehub/planner/palettes
Response: { palettes: ColorPalette[] }

POST /api/homehub/planner/rooms/:roomId/share
Body: { userId }
Response: { success, shareUrl }
```

### 4.3 Home Services
```
GET /api/homehub/services
Query: ?category=all|repair|painting|electrical|plumbing|garden
Response: {
  featured: ServiceDeal,
  services: Service[],
  topProviders: Provider[]
}

GET /api/homehub/services/:categoryId
Response: { services: Service[] }

POST /api/homehub/services/book
Body: {
  userId, serviceId, providerId?,
  scheduledDate, scheduledTime,
  address, notes?
}
Response: { success, booking: Booking }

GET /api/homehub/services/bookings/:userId
Response: { bookings: Booking[] }

PUT /api/homehub/services/bookings/:bookingId
Body: { status?, rating?, review? }
Response: { success, booking: Booking }
```

### 4.4 Shop
```
GET /api/homehub/shop/products
Query: ?category=all&sort=popular|new|price_low|price_high&page=1
Response: {
  products: Product[],
  collections: Collection[],
  pagination: { page, limit, total, hasMore }
}

GET /api/homehub/shop/categories
Response: { categories: Category[] }

GET /api/homehub/shop/collections
Response: { collections: Collection[] }

GET /api/homehub/shop/cart/:userId
Response: { items: CartItem[], subtotal, shipping, total }

POST /api/homehub/shop/cart/add
Body: { userId, productId, quantity }
Response: { success, cart: Cart }
```

---

## Shared Infrastructure (Rabtul)

### Authentication (SSO)
All Phase 3 apps use unified authentication:
```
POST /api/rabtul/auth/login
POST /api/rabtul/auth/register
POST /api/rabtul/auth/refresh-token
GET /api/rabtul/auth/user/:userId
```

### Coin Ledger
Universal coin management:
```
GET /api/rabtul/coins/:userId
POST /api/rabtul/coins/earn
POST /api/rabtul/coins/redeem
GET /api/rabtul/coins/:userId/history
```

### Notifications
Cross-app notifications:
```
GET /api/rabtul/notifications/:userId
POST /api/rabtul/notifications/send
PUT /api/rabtul/notifications/:notificationId/read
```

### AIRA (AI Recommendations)
AI-powered personalization:
```
POST /api/rabtul/aira/recommend
Body: { userId, context, appId, limit }
Response: { recommendations: any[] }

POST /api/rabtul/aira/personalize
Body: { userId, content, preferences }
Response: { personalized: any }
```

---

## Data Models

### Common Models
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  coins: number;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
}

interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  coins: number;
  category: string;
  inStock: boolean;
}

interface Deal {
  id: string;
  productId: string;
  product: Product;
  discount: string;
  dealPrice: number;
  endsAt: timestamp;
  stock: number;
  claimed: number;
}

interface Coin {
  amount: number;
  type: 'earned' | 'spent' | 'bonus';
  source: string;
  timestamp: Date;
}
```

### StyleSync Models
```typescript
interface Look {
  id: string;
  title: string;
  creator: Creator;
  products: Product[];
  image: string;
  likes: number;
  saves: number;
  tags: string[];
}

interface ClosetItem {
  id: string;
  userId: string;
  imageUrl: string;
  category: string;
  brand?: string;
  purchasePrice?: number;
  wearCount: number;
  favorite: boolean;
  addedAt: Date;
}
```

### FitCircle Models
```typescript
interface Workout {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  calories: number;
  exercises: Exercise[];
  rating: number;
  reviews: number;
  coins: number;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  type: 'individual' | 'team';
  participants: number;
  prize: number;
  startsAt: Date;
  endsAt: Date;
  progress?: { current: number; total: number };
}
```

### TechHunt Models
```typescript
interface TechProduct extends Product {
  specs: Record<string, any>;
  priceHistory: PricePoint[];
  pros: string[];
  cons: string[];
}

interface WishlistItem {
  id: string;
  userId: string;
  product: TechProduct;
  alertPrice?: number;
  addedAt: Date;
  priceAtAdd: number;
  currentPrice: number;
}
```

### HomeHub Models
```typescript
interface Room {
  id: string;
  userId: string;
  name: string;
  dimensions: string;
  style: string;
  items: PlacedItem[];
  createdAt: Date;
  updatedAt: Date;
}

interface Service {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  duration: string;
  coins: number;
  popular: boolean;
}

interface Booking {
  id: string;
  userId: string;
  serviceId: string;
  providerId: string;
  scheduledDate: Date;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  rating?: number;
  review?: string;
}
```

---

## API Response Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Rate Limited |
| 500 | Server Error |

## Rate Limits
- Standard endpoints: 100 requests/minute
- Search/AI endpoints: 30 requests/minute
- Coin transactions: 10 requests/minute

## Pagination
All list endpoints support:
```
?page=1&limit=20&sort=created_at&order=desc
```

---

## Total Phase 3 API Count

| App | Endpoints |
|-----|-----------|
| StyleSync | 18 |
| FitCircle | 25 |
| TechHunt | 16 |
| HomeHub | 19 |
| **Total** | **78 endpoints** |

---

## Implementation Priority

### High Priority (Week 1-2)
1. All home/discovery endpoints
2. Core listing endpoints
3. User profile endpoints
4. Coin integration

### Medium Priority (Week 3-4)
1. Detailed product/item views
2. User actions (like, save, bookmark)
3. Cart & wishlist management
4. Challenge/workout tracking

### Lower Priority (Week 5+)
1. AI recommendations
2. Room planner save/share
3. Advanced analytics
4. Service bookings

---

*Document Version: 1.0*
*Phase 3 Vertical Apps: 17 pages, 78 API endpoints*
*Last Updated: January 2025*
