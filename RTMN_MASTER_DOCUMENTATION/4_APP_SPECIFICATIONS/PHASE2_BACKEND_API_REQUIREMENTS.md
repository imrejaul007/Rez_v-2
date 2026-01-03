# Phase 2 Backend API Requirements

## Discovery Clone Apps - API Documentation for Backend Developers

This document contains all API endpoints required for the 4 Phase 2 apps. All apps share the core ReZ/Rabtul infrastructure (Auth, Wallet, Coins) and add app-specific endpoints.

---

## Shared Infrastructure (From Phase 1)

All Phase 2 apps use these Rabtul Core APIs:

```
# Authentication (Rabtul SSO)
POST /api/rabtul/auth/login
POST /api/rabtul/auth/register
POST /api/rabtul/auth/refresh-token
GET  /api/rabtul/auth/profile

# Wallet (Rabtul Coin Ledger)
GET  /api/rabtul/coins/balance/:userId
POST /api/rabtul/coins/credit
POST /api/rabtul/coins/debit
GET  /api/rabtul/coins/history/:userId

# Notifications (Rabtul)
POST /api/rabtul/notify/push
POST /api/rabtul/notify/sms
```

---

## 1. AI-R (AI-First Discovery)

### Base URL: `/api/air`

### Chat & Conversation APIs

```
# AI Chat
POST /api/air/chat/message
Request: { userId, message, context?, conversationId? }
Response: {
  response: string,
  results?: Array<Merchant|Offer>,
  suggestions?: string[],
  coinTip?: string
}

GET  /api/air/chat/history/:userId
Response: { conversations: Array<Conversation> }

POST /api/air/chat/feedback
Request: { messageId, feedback: 'positive'|'negative', reason? }

DELETE /api/air/chat/conversation/:conversationId
```

### Discovery APIs

```
GET  /api/air/discover/feed
Query: { userId, page, limit, category? }
Response: {
  discoveries: Array<Discovery>,
  aiInsights: { savingsPotential, coinOpportunities, perfectMatches }
}

GET  /api/air/discover/categories
Response: { categories: Array<Category> }

POST /api/air/discover/personalize
Request: { userId, preferences: { categories, priceRange, distance } }
```

### Profile & AI Insights

```
GET  /api/air/profile/:userId/insights
Response: {
  spendingPattern: { mostActiveDay, peakTime, avgTransaction },
  preferences: Array<{ category, matchPercentage }>,
  predictions: Array<{ text, confidence }>,
  achievements: Array<Achievement>
}
```

### Wallet APIs (Shared from Rabtul)

```
GET  /api/air/wallet/:userId
Response: {
  rezCoins: number,
  brandCoins: number,
  promoCoins: number,
  totalValue: number,
  pendingCoins: number,
  expiringCoins: number,
  expiringIn: string
}

GET  /api/air/wallet/:userId/transactions
Query: { page, limit, type?: 'earned'|'spent'|'expired' }
Response: { transactions: Array<Transaction> }

GET  /api/air/wallet/:userId/insights
Response: {
  aiInsights: Array<{ text, action }>,
  savingsTips: Array<string>
}
```

### Saved Items APIs

```
GET  /api/air/saved/:userId
Query: { type?: 'all'|'merchants'|'deals', page, limit }
Response: {
  items: Array<SavedItem>,
  collections: Array<Collection>
}

POST /api/air/saved
Request: { userId, itemId, itemType: 'merchant'|'deal'|'place' }

DELETE /api/air/saved/:itemId

GET  /api/air/saved/collections/:userId
Response: { collections: Array<Collection> }

POST /api/air/saved/collections
Request: { userId, name, icon, color }

PUT  /api/air/saved/collections/:collectionId
Request: { name?, icon?, itemIds? }
```

### Data Models

```typescript
interface AIConversation {
  id: string;
  userId: string;
  messages: AIMessage[];
  createdAt: Date;
  updatedAt: Date;
}

interface AIMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  results?: SearchResult[];
  timestamp: Date;
}

interface Discovery {
  id: string;
  type: 'hot_deal' | 'new_discovery' | 'coin_opportunity' | 'personalized' | 'trending' | 'bundle';
  title: string;
  subtitle: string;
  merchant?: Merchant;
  cashback?: string;
  coinReward?: number;
  aiReason: string; // Why this was recommended
}
```

---

## 2. BuzzLoop (Social/UGC Feed)

### Base URL: `/api/buzzloop`

### Posts & Feed APIs

```
GET  /api/buzzloop/feed
Query: { userId, type: 'foryou'|'following'|'trending', page, limit }
Response: { posts: Array<Post>, hasMore: boolean }

POST /api/buzzloop/posts
Request: {
  userId,
  type: 'review'|'tip'|'haul'|'discovery',
  content: string,
  merchantId?: string,
  rating?: number,
  media?: Array<MediaUpload>,
  tags?: string[],
  location?: Location
}
Response: { post: Post, coinsEarned: number }

GET  /api/buzzloop/posts/:postId
Response: { post: Post }

DELETE /api/buzzloop/posts/:postId
```

### Engagement APIs

```
POST /api/buzzloop/posts/:postId/like
POST /api/buzzloop/posts/:postId/unlike
POST /api/buzzloop/posts/:postId/comment
Request: { userId, content }

POST /api/buzzloop/posts/:postId/save
POST /api/buzzloop/posts/:postId/share
```

### Stories APIs

```
GET  /api/buzzloop/stories
Query: { userId }
Response: { stories: Array<Story> }

POST /api/buzzloop/stories
Request: { userId, media: MediaUpload, merchantId?, duration: number }

POST /api/buzzloop/stories/:storyId/view
```

### Profile APIs

```
GET  /api/buzzloop/profile/:userId
Response: {
  user: UserProfile,
  stats: { posts, followers, following, coinsEarned, savingsShared },
  achievements: Array<Achievement>
}

GET  /api/buzzloop/profile/:userId/posts
Query: { type: 'posts'|'saved'|'liked', page, limit }

POST /api/buzzloop/profile/:userId/follow
POST /api/buzzloop/profile/:userId/unfollow
```

### Trending APIs

```
GET  /api/buzzloop/trending/topics
Response: { topics: Array<{ tag, posts, growth }> }

GET  /api/buzzloop/trending/creators
Response: { creators: Array<Creator> }
```

### Explore APIs

```
GET  /api/buzzloop/explore
Query: { userId, tab: 'foryou'|'trending'|'creators'|'hashtags', page, limit }
Response: {
  categories: Array<Category>,
  trendingPosts: Array<Post>,
  hotTopics: Array<{ name, posts, icon }>,
  risingStars: Array<Creator>
}

GET  /api/buzzloop/explore/categories
Response: { categories: Array<{ id, name, icon, color }> }

GET  /api/buzzloop/explore/hashtags/:tag
Query: { page, limit }
Response: { posts: Array<Post>, totalPosts: number }
```

### Notifications APIs

```
GET  /api/buzzloop/notifications/:userId
Query: { type?: 'all'|'engagement'|'coins'|'system', page, limit }
Response: {
  notifications: Array<Notification>,
  unreadCount: number,
  todayStats: { likes, coinsEarned }
}

PUT  /api/buzzloop/notifications/:notificationId/read

PUT  /api/buzzloop/notifications/:userId/mark-all-read

DELETE /api/buzzloop/notifications/:notificationId

GET  /api/buzzloop/notifications/:userId/settings
Response: { settings: NotificationSettings }

PUT  /api/buzzloop/notifications/:userId/settings
Request: { pushEnabled, emailEnabled, types: string[] }
```

### Merchant Search

```
GET  /api/buzzloop/merchants/search
Query: { query, userId }
Response: { merchants: Array<Merchant>, recent: Array<Merchant> }
```

### Media Upload

```
POST /api/buzzloop/posts/media
Request: FormData { file, type: 'image'|'video' }
Response: { mediaUrl: string, thumbnailUrl?: string }
```

### Data Models

```typescript
interface Post {
  id: string;
  user: { id, name, handle, avatar, verified, followers };
  type: 'review' | 'tip' | 'haul' | 'discovery';
  content: string;
  merchant?: Merchant;
  rating?: number;
  media?: Array<{ type, url, thumbnail? }>;
  tags?: string[];
  location?: { name, lat, lng };
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  coinsEarned: number;
  timestamp: Date;
}

interface Story {
  id: string;
  userId: string;
  media: { type, url };
  merchantId?: string;
  expiresAt: Date;
  views: number;
}
```

---

## 3. CoinHunt (Deals & Coupons)

### Base URL: `/api/coinhunt`

### Deals APIs

```
GET  /api/coinhunt/deals
Query: {
  userId,
  category?: string,
  type?: 'flash'|'regular'|'exclusive',
  lat?, lng?, radius?,
  page, limit
}
Response: {
  deals: Array<Deal>,
  flashDeals: Array<FlashDeal>,
  dailyChallenges: Array<Challenge>
}

GET  /api/coinhunt/deals/:dealId
Response: { deal: DealDetail }

POST /api/coinhunt/deals/:dealId/claim
Request: { userId }
Response: {
  claimed: boolean,
  couponCode?: string,
  coinsEarned: number,
  expiresAt: Date
}

GET  /api/coinhunt/deals/claimed
Query: { userId, status: 'active'|'used'|'expired' }
Response: { deals: Array<ClaimedDeal> }
```

### Flash Deals APIs

```
GET  /api/coinhunt/flash-deals
Response: {
  deals: Array<FlashDeal>,
  nextFlashIn: number // seconds
}

POST /api/coinhunt/flash-deals/:dealId/claim
Request: { userId }
Response: { success: boolean, position: number, coinsEarned: number }
```

### Map & Location APIs

```
GET  /api/coinhunt/deals/nearby
Query: { lat, lng, radius, category? }
Response: { deals: Array<DealWithLocation> }

GET  /api/coinhunt/deals/map-bounds
Query: { neLat, neLng, swLat, swLng, category? }
Response: { deals: Array<DealMarker> }
```

### Challenges APIs

```
GET  /api/coinhunt/challenges
Query: { userId }
Response: {
  daily: Array<Challenge>,
  weekly: Array<Challenge>,
  special: Array<Challenge>
}

POST /api/coinhunt/challenges/:challengeId/complete
Request: { userId }
Response: { completed: boolean, coinsEarned: number }
```

### Stats APIs

```
GET  /api/coinhunt/stats/:userId
Response: {
  coins: number,
  dealsClaimed: number,
  totalSaved: number,
  streak: number,
  rank: number
}
```

### My Deals APIs

```
GET  /api/coinhunt/my-deals/:userId
Query: { status: 'active'|'used'|'expired', page, limit }
Response: {
  active: Array<ClaimedDeal>,
  used: Array<UsedDeal>,
  expired: Array<ExpiredDeal>,
  stats: { totalSaved, totalCoins, dealsUsed }
}

GET  /api/coinhunt/my-deals/:userId/:dealId
Response: {
  deal: ClaimedDealDetail,
  qrCode: string,
  couponCode: string,
  expiresAt: Date
}

POST /api/coinhunt/my-deals/:dealId/redeem
Request: { userId, merchantId }
Response: { success: boolean, savedAmount: number }
```

### Wallet & Gamification APIs

```
GET  /api/coinhunt/wallet/:userId
Response: {
  totalCoins: number,
  lifetimeEarned: number,
  level: number,
  levelName: string,
  nextLevel: string,
  xpCurrent: number,
  xpRequired: number,
  streak: number,
  rank: number,
  weeklyChange: string
}

GET  /api/coinhunt/wallet/:userId/history
Query: { page, limit, type?: 'earned'|'spent'|'bonus' }
Response: { activity: Array<CoinActivity> }

GET  /api/coinhunt/wallet/:userId/achievements
Response: {
  earned: Array<Achievement>,
  inProgress: Array<{ achievement, progress, total }>
}

POST /api/coinhunt/wallet/:userId/redeem
Request: { coins, redeemType: 'voucher'|'cashback', value }
Response: { success: boolean, voucherCode?: string }
```

### Data Models

```typescript
interface Deal {
  id: string;
  merchant: Merchant;
  type: 'flash' | 'regular' | 'exclusive';
  title: string;
  description: string;
  discount: string; // "25% OFF" or "₹500 OFF"
  originalPrice?: number;
  dealPrice?: number;
  cashback?: string;
  coinReward: number;
  validTill: Date;
  terms?: string[];
  claimed: number;
  limit?: number;
}

interface FlashDeal extends Deal {
  endsIn: number; // seconds remaining
  featured: boolean;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  target: number;
  reward: number;
  endsIn: Date;
}
```

---

## 4. LocalEdge (Hyperlocal Check-ins)

### Base URL: `/api/localedge`

### Check-in APIs

```
POST /api/localedge/checkin
Request: {
  userId,
  placeId,
  lat, lng,
  photo?: MediaUpload,
  message?: string
}
Response: {
  success: boolean,
  coinsEarned: number,
  breakdown: Array<{ label, coins }>,
  newBadge?: Badge,
  mayorProgress: string,
  leaderboardChange: string
}

GET  /api/localedge/checkins/:userId
Query: { page, limit }
Response: { checkins: Array<Checkin> }

GET  /api/localedge/checkins/:userId/stats
Response: {
  totalCheckins: number,
  uniquePlaces: number,
  streak: number,
  rank: number,
  coins: number
}
```

### Places APIs

```
GET  /api/localedge/places/nearby
Query: { lat, lng, radius?, category? }
Response: { places: Array<Place> }

GET  /api/localedge/places/:placeId
Response: {
  place: PlaceDetail,
  currentMayor: User,
  yourCheckins: number,
  checksToMayor: number,
  bonusActive?: { multiplier, reason }
}

GET  /api/localedge/places/:placeId/activity
Query: { page, limit }
Response: { activity: Array<CheckinActivity> }
```

### Leaderboard APIs

```
GET  /api/localedge/leaderboard
Query: { type: 'local'|'global', period: 'daily'|'weekly'|'monthly' }
Response: {
  leaders: Array<LeaderboardEntry>,
  yourPosition: number
}

GET  /api/localedge/leaderboard/mayors
Query: { lat, lng, radius }
Response: { mayors: Array<MayorEntry> }
```

### Challenges APIs

```
GET  /api/localedge/challenges
Query: { userId }
Response: {
  active: Array<Challenge>,
  completed: Array<Challenge>,
  upcoming: Array<Challenge>
}
```

### Activity Feed

```
GET  /api/localedge/activity
Query: { userId, type: 'friends'|'nearby'|'all', page, limit }
Response: { activity: Array<Activity> }
```

### Badges & Achievements

```
GET  /api/localedge/badges/:userId
Response: {
  earned: Array<Badge>,
  inProgress: Array<{ badge: Badge, progress: number, target: number }>
}
```

### Explore APIs

```
GET  /api/localedge/explore
Query: { lat, lng, category?: string, page, limit }
Response: {
  trending: Array<Place>,
  nearby: Array<Place>,
  topMayors: Array<MayorEntry>,
  categories: Array<Category>
}

GET  /api/localedge/explore/categories
Response: { categories: Array<{ id, name, icon, color }> }

GET  /api/localedge/explore/trending
Query: { lat, lng, radius }
Response: { places: Array<TrendingPlace> }

GET  /api/localedge/explore/photo-spots
Query: { lat, lng, radius }
Response: { spots: Array<PhotoSpot> }
```

### Profile APIs

```
GET  /api/localedge/profile/:userId
Response: {
  user: UserProfile,
  stats: {
    totalCheckins, uniquePlaces, mayorships,
    coins, streak, rank, followers, following
  },
  level: { level, name, xpCurrent, xpRequired }
}

GET  /api/localedge/profile/:userId/checkins
Query: { page, limit }
Response: { checkins: Array<Checkin> }

GET  /api/localedge/profile/:userId/badges
Response: {
  earned: Array<Badge>,
  inProgress: Array<{ badge, progress, total }>
}

GET  /api/localedge/profile/:userId/mayorships
Response: { mayorships: Array<Mayorship> }

GET  /api/localedge/profile/:userId/almost-mayor
Query: { lat, lng, radius }
Response: { places: Array<{ place, checksNeeded, currentMayor }> }

PUT  /api/localedge/profile/:userId
Request: { name?, avatar?, bio? }

POST /api/localedge/profile/:userId/follow
POST /api/localedge/profile/:userId/unfollow
```

### Data Models

```typescript
interface Place {
  id: string;
  name: string;
  type: string; // cafe, restaurant, gym, etc.
  address: string;
  lat: number;
  lng: number;
  rating: number;
  checkins: number;
  isOpen: boolean;
  closeTime?: string;
  checkInReward: number;
  bonusMultiplier?: number;
  bonusReason?: string;
  image: string;
  currentMayor?: User;
}

interface Checkin {
  id: string;
  userId: string;
  placeId: string;
  place: Place;
  timestamp: Date;
  coinsEarned: number;
  photo?: string;
  message?: string;
}

interface LeaderboardEntry {
  rank: number;
  user: User;
  checkins: number;
  coins: number;
  isMayor: boolean;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  earnedAt?: Date;
}
```

---

## Webhook Events (For Real-time Updates)

All apps should emit these events to Rabtul Event Bus:

```
# User Events
user.checkin - When user checks in (LocalEdge)
user.post.created - When user creates post (BuzzLoop)
user.deal.claimed - When user claims deal (CoinHunt)
user.chat.message - When user sends AI message (AI-R)

# Coin Events
coins.earned - When coins are credited
coins.spent - When coins are redeemed

# Social Events
user.followed - When user follows another
post.liked - When post is liked
post.commented - When post receives comment

# Achievement Events
badge.earned - When user earns badge
mayor.changed - When mayor status changes
streak.updated - When streak is updated
```

---

## Rate Limits

| Endpoint Type | Rate Limit |
|--------------|------------|
| Read APIs | 100 req/min |
| Write APIs | 30 req/min |
| Media Upload | 10 req/min |
| AI Chat | 20 req/min |
| Check-in | 10 req/min |

---

## Error Response Format

```json
{
  "success": false,
  "error": {
    "code": "DEAL_ALREADY_CLAIMED",
    "message": "You have already claimed this deal",
    "details": {}
  }
}
```

### Common Error Codes

| Code | Description |
|------|-------------|
| AUTH_REQUIRED | User not authenticated |
| INSUFFICIENT_COINS | Not enough coins |
| DEAL_EXPIRED | Deal has expired |
| DEAL_ALREADY_CLAIMED | Deal already claimed by user |
| LOCATION_REQUIRED | GPS location required |
| LOCATION_TOO_FAR | User too far from check-in location |
| RATE_LIMIT_EXCEEDED | Too many requests |
| CONTENT_VIOLATION | Post violates guidelines |

---

## Database Schema Requirements

### New Tables for Phase 2

```sql
-- AI-R
CREATE TABLE ai_conversations (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE ai_messages (
  id UUID PRIMARY KEY,
  conversation_id UUID REFERENCES ai_conversations(id),
  type VARCHAR(10), -- 'user' or 'ai'
  content TEXT,
  results JSONB,
  created_at TIMESTAMP
);

-- BuzzLoop
CREATE TABLE posts (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  type VARCHAR(20), -- review, tip, haul, discovery
  content TEXT,
  merchant_id UUID REFERENCES merchants(id),
  rating INTEGER,
  location JSONB,
  coins_earned INTEGER DEFAULT 0,
  created_at TIMESTAMP
);

CREATE TABLE post_media (
  id UUID PRIMARY KEY,
  post_id UUID REFERENCES posts(id),
  type VARCHAR(10), -- image, video
  url TEXT,
  thumbnail_url TEXT
);

CREATE TABLE post_interactions (
  id UUID PRIMARY KEY,
  post_id UUID REFERENCES posts(id),
  user_id UUID REFERENCES users(id),
  type VARCHAR(10), -- like, save, share
  created_at TIMESTAMP
);

-- CoinHunt
CREATE TABLE deals (
  id UUID PRIMARY KEY,
  merchant_id UUID REFERENCES merchants(id),
  type VARCHAR(20), -- flash, regular, exclusive
  title VARCHAR(255),
  description TEXT,
  discount VARCHAR(50),
  coin_reward INTEGER,
  valid_from TIMESTAMP,
  valid_till TIMESTAMP,
  claim_limit INTEGER,
  is_active BOOLEAN DEFAULT true
);

CREATE TABLE deal_claims (
  id UUID PRIMARY KEY,
  deal_id UUID REFERENCES deals(id),
  user_id UUID REFERENCES users(id),
  coupon_code VARCHAR(50),
  status VARCHAR(20), -- active, used, expired
  claimed_at TIMESTAMP,
  used_at TIMESTAMP
);

-- LocalEdge
CREATE TABLE places (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  type VARCHAR(50),
  address TEXT,
  lat DECIMAL(10, 8),
  lng DECIMAL(11, 8),
  rating DECIMAL(2, 1),
  check_in_reward INTEGER DEFAULT 25,
  is_active BOOLEAN DEFAULT true
);

CREATE TABLE checkins (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  place_id UUID REFERENCES places(id),
  lat DECIMAL(10, 8),
  lng DECIMAL(11, 8),
  photo_url TEXT,
  message TEXT,
  coins_earned INTEGER,
  created_at TIMESTAMP
);

CREATE TABLE mayors (
  id UUID PRIMARY KEY,
  place_id UUID REFERENCES places(id),
  user_id UUID REFERENCES users(id),
  checkin_count INTEGER,
  became_mayor_at TIMESTAMP
);

CREATE TABLE badges (
  id UUID PRIMARY KEY,
  name VARCHAR(100),
  description TEXT,
  icon VARCHAR(50),
  category VARCHAR(50),
  criteria JSONB
);

CREATE TABLE user_badges (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  badge_id UUID REFERENCES badges(id),
  earned_at TIMESTAMP
);
```

---

## Summary

| App | New Endpoints | Primary Features |
|-----|---------------|------------------|
| **AI-R** | 16 | Chat, Discovery Feed, AI Insights, Wallet, Saved Items |
| **BuzzLoop** | 28 | Posts, Stories, Feed, Profile, Explore, Notifications |
| **CoinHunt** | 22 | Deals, Flash Deals, Map, Challenges, My Deals, Wallet |
| **LocalEdge** | 24 | Check-ins, Places, Leaderboard, Badges, Explore, Profile |

**Total New Endpoints: 90**

### Pages per App

| App | Pages | Routes |
|-----|-------|--------|
| **AI-R** | 6 | /air, /air/chat, /air/discover, /air/profile, /air/wallet, /air/saved |
| **BuzzLoop** | 5 | /buzzloop, /buzzloop/create, /buzzloop/profile, /buzzloop/explore, /buzzloop/notifications |
| **CoinHunt** | 4 | /coinhunt, /coinhunt/map, /coinhunt/my-deals, /coinhunt/wallet |
| **LocalEdge** | 4 | /localedge, /localedge/checkin, /localedge/explore, /localedge/profile |

**Total New Pages: 19**

All endpoints integrate with:
- Rabtul Auth (SSO)
- Rabtul Coin Ledger (coins)
- Rabtul Notification Hub (push)
- Rabtul AIRA (AI/ML)

---

*Document Version: 2.0*
*Phase: 2 - Discovery Clones (Expanded)*
*Updated: January 2026*
