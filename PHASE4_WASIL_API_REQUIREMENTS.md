# Phase 4: Wasil Transaction Apps - Backend API Requirements

## Overview
Wasil is the 60-minute delivery commerce layer of the RTMN ecosystem. All Wasil apps share:
- Same wallet (ReZ Coins)
- Same BizOne merchant backend
- Same Adzy promotions engine
- Unified checkout & delivery

## Total New Pages: 22 pages
## Total New Routes: 44 routes

---

## Wave 1: High Frequency Apps (5 Apps)

### 1. Dinezy - Food & Dining
**Pages:** DinezyHome, DinezyRestaurant
**Theme:** Orange/Red gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/dinezy/home` | GET | Home page data (cuisines, restaurants, offers) |
| `/api/wasil/dinezy/restaurants` | GET | List restaurants with filters |
| `/api/wasil/dinezy/restaurants/:id` | GET | Restaurant details, menu, reviews |
| `/api/wasil/dinezy/cuisines` | GET | Cuisine categories |
| `/api/wasil/dinezy/search` | GET | Search restaurants, dishes |
| `/api/wasil/dinezy/cart` | GET/POST | Cart operations |
| `/api/wasil/dinezy/orders` | POST | Place order |
| `/api/wasil/dinezy/orders/:id/track` | GET | Order tracking |

---

### 2. Grocify - Groceries & Daily Essentials
**Pages:** GrocifyHome
**Theme:** Green gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/grocify/home` | GET | Home page data |
| `/api/wasil/grocify/products` | GET | Product listing with filters |
| `/api/wasil/grocify/categories` | GET | Category tree |
| `/api/wasil/grocify/deals` | GET | Flash deals, offers |
| `/api/wasil/grocify/quick-lists` | GET/POST | User's quick lists |
| `/api/wasil/grocify/reorder/:orderId` | POST | Reorder previous order |
| `/api/wasil/grocify/cart` | GET/POST/PUT | Cart operations |
| `/api/wasil/grocify/stores-nearby` | GET | Nearby dark stores |

---

### 3. Glowzy - Beauty & Wellness Services
**Pages:** GlowzyHome
**Theme:** Pink/Rose gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/glowzy/home` | GET | Home page data |
| `/api/wasil/glowzy/services` | GET | Service categories |
| `/api/wasil/glowzy/salons` | GET | Salon/spa listings |
| `/api/wasil/glowzy/salons/:id` | GET | Salon details, stylists |
| `/api/wasil/glowzy/appointments` | GET/POST | Book/view appointments |
| `/api/wasil/glowzy/stylists/:id` | GET | Stylist profile, availability |
| `/api/wasil/glowzy/at-home` | GET | At-home service packages |

---

### 4. MediEarn - Medicines & Healthcare
**Pages:** MediEarnHome
**Theme:** Teal/Cyan gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/mediearn/home` | GET | Home page data |
| `/api/wasil/mediearn/medicines` | GET | Medicine search, listing |
| `/api/wasil/mediearn/prescriptions` | POST | Upload prescription |
| `/api/wasil/mediearn/prescriptions/:id` | GET | Prescription status |
| `/api/wasil/mediearn/pharmacies` | GET | Nearby pharmacies |
| `/api/wasil/mediearn/doctors` | GET | Consult doctor listing |
| `/api/wasil/mediearn/health-products` | GET | OTC products |
| `/api/wasil/mediearn/reminders` | GET/POST | Medicine reminders |

---

### 5. FitEarn - Fitness Products & Supplements
**Pages:** FitEarnHome
**Theme:** Orange/Red gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/fitearn/home` | GET | Home page data |
| `/api/wasil/fitearn/products` | GET | Products by category |
| `/api/wasil/fitearn/supplements` | GET | Supplements listing |
| `/api/wasil/fitearn/equipment` | GET | Fitness equipment |
| `/api/wasil/fitearn/brands` | GET | Brand listings |
| `/api/wasil/fitearn/goals` | GET | Products by fitness goal |
| `/api/wasil/fitearn/authenticity/:sku` | GET | Product authenticity check |

---

## Wave 2: Retail & Lifestyle Apps (5 Apps)

### 6. Shopazy - Quick Retail & Electronics
**Pages:** ShopazyHome
**Theme:** Blue/Indigo gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/shopazy/home` | GET | Home page data |
| `/api/wasil/shopazy/products` | GET | Product listing |
| `/api/wasil/shopazy/categories` | GET | Categories |
| `/api/wasil/shopazy/deals` | GET | Flash deals |
| `/api/wasil/shopazy/brands` | GET | Top brands |
| `/api/wasil/shopazy/express` | GET | Express delivery items |

---

### 7. Funzy - Entertainment & Events
**Pages:** FunzyHome
**Theme:** Purple/Pink gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/funzy/home` | GET | Home page data |
| `/api/wasil/funzy/movies` | GET | Now showing, coming soon |
| `/api/wasil/funzy/movies/:id/showtimes` | GET | Show timings |
| `/api/wasil/funzy/events` | GET | Live events listing |
| `/api/wasil/funzy/events/:id` | GET | Event details |
| `/api/wasil/funzy/concerts` | GET | Concerts, shows |
| `/api/wasil/funzy/book` | POST | Book tickets |
| `/api/wasil/funzy/bookings` | GET | User's bookings |

---

### 8. AutoPerks - Automobile Accessories & Services
**Pages:** AutoPerksHome
**Theme:** Blue/Cyan gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/autoperks/home` | GET | Home page data |
| `/api/wasil/autoperks/products` | GET | Auto accessories |
| `/api/wasil/autoperks/services` | GET | Car services |
| `/api/wasil/autoperks/garages` | GET | Nearby garages |
| `/api/wasil/autoperks/my-vehicle` | GET/POST | User's vehicle info |
| `/api/wasil/autoperks/service-history` | GET | Vehicle service history |
| `/api/wasil/autoperks/book-service` | POST | Book car service |

---

### 9. Petzy - Pet Food & Accessories
**Pages:** PetzyHome
**Theme:** Amber/Orange gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/petzy/home` | GET | Home page data |
| `/api/wasil/petzy/products` | GET | Pet products |
| `/api/wasil/petzy/services` | GET | Pet services |
| `/api/wasil/petzy/vets` | GET | Nearby vets |
| `/api/wasil/petzy/my-pets` | GET/POST | User's pet profiles |
| `/api/wasil/petzy/appointments` | GET/POST | Vet appointments |
| `/api/wasil/petzy/reminders` | GET/POST | Vaccination reminders |

---

### 10. Kidzo - Baby & Kids Products
**Pages:** KidzoHome
**Theme:** Pink/Purple gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/kidzo/home` | GET | Home page data |
| `/api/wasil/kidzo/products` | GET | Baby/kids products |
| `/api/wasil/kidzo/categories` | GET | Categories by age group |
| `/api/wasil/kidzo/brands` | GET | Top brands |
| `/api/wasil/kidzo/essentials` | GET | Daily essentials |
| `/api/wasil/kidzo/subscriptions` | GET/POST | Diaper/formula subscriptions |

---

## Wave 3: Premium & Luxury Apps (3 Apps)

### 11. Luxora - Premium & Luxury Retail
**Pages:** LuxoraHome
**Theme:** Gold/Amber gradient (Dark mode)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/luxora/home` | GET | Home page data |
| `/api/wasil/luxora/products` | GET | Luxury products |
| `/api/wasil/luxora/brands` | GET | Luxury brands |
| `/api/wasil/luxora/collections` | GET | Featured collections |
| `/api/wasil/luxora/membership` | GET | Membership tier info |
| `/api/wasil/luxora/concierge` | POST | Personal concierge request |
| `/api/wasil/luxora/authenticity/:sku` | GET | Authenticity certificate |

---

### 12. Elitezy - Elite Memberships & Experiences
**Pages:** ElitezyHome
**Theme:** Purple/Black (Dark mode)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/elitezy/home` | GET | Home page data |
| `/api/wasil/elitezy/memberships` | GET | Available memberships |
| `/api/wasil/elitezy/memberships/:id/join` | POST | Join membership |
| `/api/wasil/elitezy/experiences` | GET | Exclusive experiences |
| `/api/wasil/elitezy/experiences/:id/book` | POST | Book experience |
| `/api/wasil/elitezy/events` | GET | VIP events |
| `/api/wasil/elitezy/benefits` | GET | Member benefits |
| `/api/wasil/elitezy/concierge` | POST | Concierge request |

---

### 13. Royale+ - Ultra-Premium Concierge
**Pages:** RoyaleHome
**Theme:** Black/Gold (Full dark mode)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/royale/home` | GET | Home page data |
| `/api/wasil/royale/services` | GET | Bespoke services |
| `/api/wasil/royale/requests` | GET/POST | Active requests |
| `/api/wasil/royale/requests/:id` | GET | Request details/progress |
| `/api/wasil/royale/lifestyle-team` | GET | Assigned managers |
| `/api/wasil/royale/concierge/call` | POST | Request callback |
| `/api/wasil/royale/perks` | GET | Active perks |

---

## Wave 4: Utility & Service Apps (9 Apps)

### 14. Washzy - Laundry & Dry Cleaning
**Pages:** WashzyHome
**Theme:** Blue/Cyan gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/washzy/home` | GET | Home page data |
| `/api/wasil/washzy/services` | GET | Service types, pricing |
| `/api/wasil/washzy/orders` | GET | Order history |
| `/api/wasil/washzy/orders/:id` | GET | Order tracking |
| `/api/wasil/washzy/pickup` | POST | Schedule pickup |
| `/api/wasil/washzy/subscriptions` | GET/POST | Monthly plans |
| `/api/wasil/washzy/pricing` | GET | Price list |

---

### 15. Maidzy - Home Help & Cleaning
**Pages:** MaidzyHome
**Theme:** Purple/Pink gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/maidzy/home` | GET | Home page data |
| `/api/wasil/maidzy/services` | GET | Service types |
| `/api/wasil/maidzy/helpers` | GET | Available helpers |
| `/api/wasil/maidzy/helpers/:id` | GET | Helper profile |
| `/api/wasil/maidzy/book` | POST | Book service |
| `/api/wasil/maidzy/my-helper` | GET | Assigned regular helper |
| `/api/wasil/maidzy/subscriptions` | GET/POST | Monthly plans |

---

### 16. Essentia+ - Home Essentials & Utilities
**Pages:** EssentiaHome
**Theme:** Emerald/Teal gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/essentia/home` | GET | Home page data |
| `/api/wasil/essentia/products` | GET | Essential products |
| `/api/wasil/essentia/bills` | GET | Utility bills |
| `/api/wasil/essentia/bills/:id/pay` | POST | Pay bill |
| `/api/wasil/essentia/subscriptions` | GET/POST | Auto-delivery subscriptions |
| `/api/wasil/essentia/reorder` | GET | Quick reorder items |

---

### 17. Society+ - Gated Community Management
**Pages:** SocietyHome
**Theme:** Indigo/Purple gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/society/home` | GET | Home page data |
| `/api/wasil/society/notices` | GET | Community notices |
| `/api/wasil/society/services` | GET | Society services |
| `/api/wasil/society/complaints` | GET/POST | Raise complaints |
| `/api/wasil/society/amenities` | GET | Amenity booking |
| `/api/wasil/society/amenities/:id/book` | POST | Book amenity |
| `/api/wasil/society/deliveries` | GET | Pending deliveries |
| `/api/wasil/society/gate-pass` | POST | Generate gate pass |
| `/api/wasil/society/dues` | GET | Maintenance dues |
| `/api/wasil/society/dues/pay` | POST | Pay dues |

---

### 18. Bizora - B2B Bulk Orders & Supplies
**Pages:** BizoraHome
**Theme:** Slate/Gray gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/bizora/home` | GET | Home page data |
| `/api/wasil/bizora/products` | GET | Bulk products |
| `/api/wasil/bizora/orders` | GET | Order history |
| `/api/wasil/bizora/quote` | POST | Request quote |
| `/api/wasil/bizora/credit` | GET | Credit limit, usage |
| `/api/wasil/bizora/reorder` | GET/POST | Quick reorder |
| `/api/wasil/bizora/invoices` | GET | GST invoices |

---

### 19. Gamezy - Gaming & Esports
**Pages:** GamezyHome
**Theme:** Purple/Pink gradient (Dark mode)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/gamezy/home` | GET | Home page data |
| `/api/wasil/gamezy/tournaments` | GET | Live tournaments |
| `/api/wasil/gamezy/tournaments/:id/join` | POST | Join tournament |
| `/api/wasil/gamezy/games` | GET | Game listings |
| `/api/wasil/gamezy/challenges` | GET | Daily challenges |
| `/api/wasil/gamezy/leaderboard` | GET | Leaderboard |
| `/api/wasil/gamezy/profile` | GET | User gaming profile |
| `/api/wasil/gamezy/rewards` | GET | Claimable rewards |

---

### 20. Wellnez - Health & Wellness Platform
**Pages:** WellnezHome
**Theme:** Teal/Emerald gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/wellnez/home` | GET | Home page data |
| `/api/wasil/wellnez/programs` | GET | Wellness programs |
| `/api/wasil/wellnez/programs/:id/enroll` | POST | Enroll in program |
| `/api/wasil/wellnez/coaches` | GET | Wellness coaches |
| `/api/wasil/wellnez/classes` | GET | Live classes |
| `/api/wasil/wellnez/classes/:id/book` | POST | Book class |
| `/api/wasil/wellnez/schedule` | GET | User's schedule |
| `/api/wasil/wellnez/stats` | GET | Wellness stats |

---

### 21. TravoPay - Travel Bookings & Payments
**Pages:** TravoPayHome
**Theme:** Blue/Indigo gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/travopay/home` | GET | Home page data |
| `/api/wasil/travopay/flights` | GET | Flight search |
| `/api/wasil/travopay/trains` | GET | Train search |
| `/api/wasil/travopay/buses` | GET | Bus search |
| `/api/wasil/travopay/hotels` | GET | Hotel search |
| `/api/wasil/travopay/deals` | GET | Holiday packages |
| `/api/wasil/travopay/book` | POST | Book travel |
| `/api/wasil/travopay/bookings` | GET | User's bookings |
| `/api/wasil/travopay/bookings/:id` | GET | Booking details |

---

### 22. Learnly - E-Learning & Courses
**Pages:** LearnlyHome
**Theme:** Indigo/Purple gradient

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/learnly/home` | GET | Home page data |
| `/api/wasil/learnly/courses` | GET | Course listing |
| `/api/wasil/learnly/courses/:id` | GET | Course details |
| `/api/wasil/learnly/courses/:id/enroll` | POST | Enroll in course |
| `/api/wasil/learnly/instructors` | GET | Top instructors |
| `/api/wasil/learnly/my-learning` | GET | User's enrolled courses |
| `/api/wasil/learnly/progress/:courseId` | GET | Course progress |
| `/api/wasil/learnly/certificates` | GET | User's certificates |

---

## Common APIs (Shared Across All Wasil Apps)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/wasil/cart` | GET/POST/PUT/DELETE | Unified cart |
| `/api/wasil/checkout` | POST | Unified checkout |
| `/api/wasil/orders` | GET | All Wasil orders |
| `/api/wasil/orders/:id` | GET | Order details |
| `/api/wasil/orders/:id/track` | GET | Live tracking |
| `/api/wasil/addresses` | GET/POST | Delivery addresses |
| `/api/wasil/wallet` | GET | ReZ Coins balance |
| `/api/wasil/coins/earn` | POST | Earn coins on order |
| `/api/wasil/coins/redeem` | POST | Redeem coins |
| `/api/wasil/express-eligible` | GET | 60-min delivery check |

---

## Summary

| Category | Apps | Pages | API Endpoints |
|----------|------|-------|---------------|
| Wave 1: High Frequency | 5 | 6 | 42 |
| Wave 2: Retail & Lifestyle | 5 | 5 | 35 |
| Wave 3: Premium & Luxury | 3 | 3 | 22 |
| Wave 4: Utility & Services | 9 | 9 | 65 |
| Common APIs | - | - | 10 |
| **Total** | **22** | **23** | **174** |

---

## Implementation Priority

1. **Immediate (Wave 1):** Dinezy, Grocify, MediEarn - highest GMV potential
2. **Short-term (Wave 2):** Shopazy, Funzy - retail & entertainment
3. **Medium-term (Wave 3):** Luxora, Elitezy - premium segment
4. **Ongoing (Wave 4):** Utility apps based on city expansion

---

## Integration Points

All Wasil apps integrate with:
- **ReZ Wallet:** Unified coin economy
- **BizOne:** Merchant management
- **Adzy:** Promotional campaigns
- **Rabtul:** Infrastructure services
