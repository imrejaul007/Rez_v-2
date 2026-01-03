# Screen Folder Reorganization Plan

**Date:** 2026-01-03
**Total Screens:** 1,103
**Objective:** Organize all screens into app-specific folders for better structure and maintainability

---

## Current Status

### ✅ Already Organized (663 screens)
Screens already in app-specific folders:
- `admin/` - 178 screens (HQ Admin)
- `merchant/` - 222 screens (BizOne Merchant OS)
- `prive/` - 142 screens (ReZ Prive Premium)
- `wasil/` - 80 screens (Wasil Distribution Apps)
- `growth/` - 45 screens (Growth Stack)
- `RezUI/` - 0 screens (needs population)
- Partially organized category folders - ~182 screens

### ⚠️ Needs Reorganization (440+ screens)
- Root-level screens (`src/pages/*.jsx`)
- Scattered category folders that should move into RezUI
- Shared/common screens need dedicated folder

---

## Target Folder Structure

```
rez-app/src/pages/
│
├── RezUI/                          # ReZ Customer App (Target: 360+ screens)
│   ├── auth/                       # Authentication flows
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── OTPVerify.jsx
│   │   ├── ForgotPassword.jsx
│   │   └── ...
│   │
│   ├── home/                       # Home & Discovery
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── ExploreNew.jsx
│   │   └── ...
│   │
│   ├── shopping/                   # E-commerce flows
│   │   ├── Categories.jsx
│   │   ├── CategoryHub.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── CartSummary.jsx
│   │   ├── Checkout.jsx
│   │   ├── CheckoutReview.jsx
│   │   ├── ProductCheckout.jsx
│   │   └── ...
│   │
│   ├── categories/                 # Category-specific browsing
│   │   ├── grocery/
│   │   │   ├── Grocery.jsx
│   │   │   ├── GroceryProduct.jsx
│   │   │   └── ...
│   │   ├── fashion/
│   │   │   ├── Fashion.jsx
│   │   │   ├── FashionCategory.jsx
│   │   │   ├── FashionProduct.jsx
│   │   │   └── ...
│   │   ├── beauty/
│   │   │   ├── Beauty.jsx
│   │   │   ├── BeautyCategory.jsx
│   │   │   ├── BeautyService.jsx
│   │   │   └── ...
│   │   ├── electronics/
│   │   │   ├── Electronics.jsx
│   │   │   ├── ElectronicsCategory.jsx
│   │   │   ├── ElectronicsProduct.jsx
│   │   │   └── ...
│   │   ├── healthcare/
│   │   ├── fitness/
│   │   ├── lifestyle/
│   │   └── ...
│   │
│   ├── wallet/                     # Wallet & Payments
│   │   ├── Wallet.jsx
│   │   ├── WalletTopUp.jsx
│   │   ├── PaymentMethods.jsx
│   │   ├── PaymentOptions.jsx
│   │   ├── PaymentGateway.jsx
│   │   ├── TransactionHistory.jsx
│   │   └── ...
│   │
│   ├── loyalty/                    # Loyalty & Rewards
│   │   ├── LoyaltyHub.jsx
│   │   ├── LoyaltyRewardsHub.jsx
│   │   ├── BrandLoyalty.jsx
│   │   ├── CoinHistory.jsx
│   │   ├── CoinSystemGuide.jsx
│   │   ├── Cashback.jsx
│   │   ├── CashbackDetail.jsx
│   │   └── ...
│   │
│   ├── deals/                      # Deals & Offers
│   │   ├── Deals.jsx
│   │   ├── DealStore.jsx
│   │   ├── DealDetail.jsx
│   │   ├── SuperDeals.jsx
│   │   ├── Offers.jsx
│   │   ├── OfferDetail.jsx
│   │   └── ...
│   │
│   ├── social/                     # Social Features
│   │   ├── SocialHub.jsx
│   │   ├── SocialFeed.jsx
│   │   ├── SocialSharing.jsx
│   │   ├── Reels.jsx
│   │   └── ...
│   │
│   ├── earn/                       # Earn mechanisms
│   │   ├── Earn.jsx
│   │   ├── EarnMore.jsx
│   │   ├── Missions.jsx
│   │   ├── Quests.jsx
│   │   └── ...
│   │
│   ├── gamification/               # Gamification
│   │   ├── GamificationHub.jsx
│   │   ├── AchievementsList.jsx
│   │   ├── BadgeCollection.jsx
│   │   ├── ChallengeCenter.jsx
│   │   ├── LeaderboardView.jsx
│   │   └── ...
│   │
│   ├── profile/                    # User Profile & Account
│   │   ├── Profile.jsx
│   │   ├── AccountSettings.jsx
│   │   ├── AddressManagement.jsx
│   │   ├── ChangePassword.jsx
│   │   ├── AccountDeletion.jsx
│   │   ├── KYCSubmission.jsx
│   │   ├── KYCStatus.jsx
│   │   └── ...
│   │
│   ├── orders/                     # Orders & Bookings
│   │   ├── Orders.jsx
│   │   ├── OrderHistory.jsx
│   │   ├── OrderTracking.jsx
│   │   ├── DeliveryTracking.jsx
│   │   ├── Bookings.jsx
│   │   └── ...
│   │
│   ├── events/                     # Events & Experiences
│   │   ├── Events.jsx
│   │   ├── EventDetail.jsx
│   │   ├── EventTicketing.jsx
│   │   └── ...
│   │
│   ├── creator/                    # Creator Economy
│   │   ├── CreatorsAll.jsx
│   │   ├── CreatorProfile.jsx
│   │   ├── CreatorStoreHome.jsx
│   │   ├── CreatorPickDetail.jsx
│   │   ├── CollectionDetail.jsx
│   │   └── ...
│   │
│   ├── exclusive/                  # Exclusive/Premium features
│   │   └── ...
│   │
│   └── modes/                      # Shopping modes
│       ├── ScanPay.jsx
│       ├── QRScanner.jsx
│       └── ...
│
├── BiZoneUI/                       # BizOne Merchant OS (222 screens - DONE ✓)
│   └── merchant/                   # Already organized
│
├── HQAdminUI/                      # HQ Admin (178 screens - DONE ✓)
│   └── admin/                      # Already organized
│
├── RezPriveUI/                     # ReZ Prive Premium (142 screens - DONE ✓)
│   └── prive/                      # Already organized
│
├── WasilApps/                      # Wasil Distribution (80 screens - DONE ✓)
│   └── wasil/                      # Already organized
│       ├── dinezy/
│       ├── grocify/
│       ├── glowzy/
│       ├── shopazy/
│       └── ... (18 apps)
│
├── GrowthApps/                     # Growth Stack (45 screens - DONE ✓)
│   └── growth/                     # Already organized
│       ├── buzzloop/
│       ├── coinhunt/
│       ├── referralx/
│       └── ... (14 apps)
│
├── DiscoveryApps/                  # Discovery Layer (31 screens)
│   ├── ai/
│   ├── air/
│   ├── buzzloop/
│   ├── coinhunt/
│   └── localedge/
│
└── SharedUI/                       # Shared Components (10 screens - DONE ✓)
    ├── common/                     # Common screens
    │   ├── Splash.jsx
    │   ├── Onboarding.jsx
    │   ├── Help.jsx
    │   ├── HelpCenter.jsx
    │   ├── Privacy.jsx
    │   └── Terms.jsx
    │
    ├── support/
    │   ├── ContactSupport.jsx
    │   ├── ChatSupport.jsx
    │   └── SupportChat.jsx
    │
    └── layout/                     # Layout components
```

---

## Migration Plan

### Phase 1: Create New Folder Structure ✅
```bash
# Create RezUI subfolders
mkdir -p rez-app/src/pages/RezUI/{auth,home,shopping,categories,wallet,loyalty,deals,social,earn,gamification,profile,orders,events,creator,exclusive,modes}

# Create category subfolders
mkdir -p rez-app/src/pages/RezUI/categories/{grocery,fashion,beauty,electronics,healthcare,fitness,lifestyle,food-dining,home-services,travel}

# Create top-level app folders
mkdir -p rez-app/src/pages/{BiZoneUI,HQAdminUI,RezPriveUI,WasilApps,GrowthApps,DiscoveryApps}

# Create SharedUI structure
mkdir -p rez-app/src/pages/SharedUI/{common,support,layout,navigation}
```

### Phase 2: Move Screens by Category

#### A. Authentication Screens → `RezUI/auth/`
```bash
mv rez-app/src/pages/Login.jsx rez-app/src/pages/RezUI/auth/
mv rez-app/src/pages/Signup.jsx rez-app/src/pages/RezUI/auth/
mv rez-app/src/pages/OTPVerify.jsx rez-app/src/pages/RezUI/auth/
mv rez-app/src/pages/ForgotPassword.jsx rez-app/src/pages/RezUI/auth/
# ... (8-10 auth screens)
```

#### B. Home & Discovery → `RezUI/home/`
```bash
mv rez-app/src/pages/Home.jsx rez-app/src/pages/RezUI/home/
mv rez-app/src/pages/Explore.jsx rez-app/src/pages/RezUI/home/
mv rez-app/src/pages/ExploreNew.jsx rez-app/src/pages/RezUI/home/
# ... (15-20 screens)
```

#### C. Shopping & Cart → `RezUI/shopping/`
```bash
mv rez-app/src/pages/Cart.jsx rez-app/src/pages/RezUI/shopping/
mv rez-app/src/pages/CartSummary.jsx rez-app/src/pages/RezUI/shopping/
mv rez-app/src/pages/ProductCheckout.jsx rez-app/src/pages/RezUI/shopping/
mv rez-app/src/pages/CheckoutReview.jsx rez-app/src/pages/RezUI/shopping/
# ... (25-30 screens)
```

#### D. Categories → `RezUI/categories/`
```bash
# Grocery
mv rez-app/src/pages/Grocery.jsx rez-app/src/pages/RezUI/categories/grocery/
mv rez-app/src/pages/grocery/* rez-app/src/pages/RezUI/categories/grocery/

# Fashion
mv rez-app/src/pages/Fashion.jsx rez-app/src/pages/RezUI/categories/fashion/
mv rez-app/src/pages/fashion/* rez-app/src/pages/RezUI/categories/fashion/

# Beauty
mv rez-app/src/pages/Beauty.jsx rez-app/src/pages/RezUI/categories/beauty/
mv rez-app/src/pages/beauty/* rez-app/src/pages/RezUI/categories/beauty/

# Electronics
mv rez-app/src/pages/Electronics.jsx rez-app/src/pages/RezUI/categories/electronics/
# ... (60-80 category screens)
```

#### E. Wallet & Payments → `RezUI/wallet/`
```bash
mv rez-app/src/pages/wallet/* rez-app/src/pages/RezUI/wallet/
mv rez-app/src/pages/PaymentMethods.jsx rez-app/src/pages/RezUI/wallet/
mv rez-app/src/pages/PaymentGateway.jsx rez-app/src/pages/RezUI/wallet/
# ... (20-25 screens)
```

#### F. Loyalty & Rewards → `RezUI/loyalty/`
```bash
mv rez-app/src/pages/LoyaltyHub.jsx rez-app/src/pages/RezUI/loyalty/
mv rez-app/src/pages/BrandLoyalty.jsx rez-app/src/pages/RezUI/loyalty/
mv rez-app/src/pages/CashbackDetail.jsx rez-app/src/pages/RezUI/loyalty/
# ... (15-20 screens)
```

#### G. Deals & Offers → `RezUI/deals/`
```bash
mv rez-app/src/pages/Deals.jsx rez-app/src/pages/RezUI/deals/
mv rez-app/src/pages/DealStore.jsx rez-app/src/pages/RezUI/deals/
mv rez-app/src/pages/SuperDeals.jsx rez-app/src/pages/RezUI/deals/
# ... (10-15 screens)
```

#### H. Social Features → `RezUI/social/`
```bash
mv rez-app/src/pages/SocialHub.jsx rez-app/src/pages/RezUI/social/
mv rez-app/src/pages/social/* rez-app/src/pages/RezUI/social/
mv rez-app/src/pages/Reels.jsx rez-app/src/pages/RezUI/social/
# ... (15-20 screens)
```

#### I. Earn Mechanisms → `RezUI/earn/`
```bash
mv rez-app/src/pages/Earn.jsx rez-app/src/pages/RezUI/earn/
mv rez-app/src/pages/earn/* rez-app/src/pages/RezUI/earn/
mv rez-app/src/pages/Missions.jsx rez-app/src/pages/RezUI/earn/
# ... (10-15 screens)
```

#### J. Gamification → `RezUI/gamification/`
```bash
mv rez-app/src/pages/GamificationHub.jsx rez-app/src/pages/RezUI/gamification/
mv rez-app/src/pages/AchievementsList.jsx rez-app/src/pages/RezUI/gamification/
mv rez-app/src/pages/BadgeCollection.jsx rez-app/src/pages/RezUI/gamification/
mv rez-app/src/pages/ChallengeCenter.jsx rez-app/src/pages/RezUI/gamification/
# ... (10-12 screens)
```

#### K. Profile & Account → `RezUI/profile/`
```bash
mv rez-app/src/pages/Profile.jsx rez-app/src/pages/RezUI/profile/
mv rez-app/src/pages/user/* rez-app/src/pages/RezUI/profile/
mv rez-app/src/pages/AddressManagement.jsx rez-app/src/pages/RezUI/profile/
# ... (15-20 screens)
```

#### L. Shared/Common → `SharedUI/common/`
```bash
mv rez-app/src/pages/Splash.jsx rez-app/src/pages/SharedUI/common/
mv rez-app/src/pages/Onboarding.jsx rez-app/src/pages/SharedUI/common/
mv rez-app/src/pages/Help.jsx rez-app/src/pages/SharedUI/common/
mv rez-app/src/pages/Privacy.jsx rez-app/src/pages/SharedUI/common/
mv rez-app/src/pages/Terms.jsx rez-app/src/pages/SharedUI/common/
```

#### M. Move Existing Organized Folders
```bash
mv rez-app/src/pages/merchant rez-app/src/pages/BiZoneUI/
mv rez-app/src/pages/admin rez-app/src/pages/HQAdminUI/
mv rez-app/src/pages/prive rez-app/src/pages/RezPriveUI/
mv rez-app/src/pages/wasil rez-app/src/pages/WasilApps/
mv rez-app/src/pages/growth rez-app/src/pages/GrowthApps/
```

### Phase 3: Update Import Paths
Update all imports across the codebase:
```javascript
// OLD
import Home from '../pages/Home'
import Login from '../pages/Login'

// NEW
import Home from '../pages/RezUI/home/Home'
import Login from '../pages/RezUI/auth/Login'
```

Use find-and-replace script to update all imports.

### Phase 4: Update Routing Configuration
Update route definitions in routing files to reflect new paths.

---

## Expected Final State

```
Total: 1,103 screens organized into:

✅ RezUI/                 360 screens (Customer App)
✅ BiZoneUI/              222 screens (Merchant OS)
✅ HQAdminUI/             178 screens (Admin)
✅ RezPriveUI/            142 screens (Premium)
✅ WasilApps/              80 screens (Distribution)
✅ GrowthApps/             45 screens (Growth)
✅ DiscoveryApps/          31 screens (Discovery)
✅ CategorySpecific/       35 screens (Standalone categories)
✅ SharedUI/               10 screens (Common)
```

---

## Benefits

1. **Clear App Boundaries** - Easy to see which screens belong to which app
2. **Better Code Organization** - Logical grouping by feature and function
3. **Easier Maintenance** - Find and update screens more quickly
4. **Scalability** - Easy to add new apps without cluttering root
5. **Team Collaboration** - Different teams can own different folders
6. **Import Clarity** - Import paths clearly indicate the app context
7. **Build Optimization** - Can create app-specific bundles more easily

---

## Next Steps

1. ✅ Generate automated migration script
2. Run migration script with dry-run mode
3. Review and validate all moved files
4. Update all import paths
5. Update routing configuration
6. Test all screens still load correctly
7. Commit changes with detailed documentation

---

**Status:** Plan Ready - Awaiting Approval to Execute
