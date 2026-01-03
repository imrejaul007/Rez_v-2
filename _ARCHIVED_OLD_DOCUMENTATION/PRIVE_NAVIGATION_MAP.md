# ReZ Privé - Complete Navigation Map

## Overview
This document maps all Privé screens, their navigation paths, and connections.

---

## Converted Screens (20/93)

### Core Screens (Already Converted - 14)
1. **PriveHome** (`/prive`)
   - Main dashboard and entry point
   - Links to: Privileges, Explore, Influence, Profile, Wallet, Tier Progress

2. **PrivePrivileges** (`/prive/privileges`)
   - Curated luxury offers hub
   - Links to: OfferDetail, StoreDetail, CategoryExplore

3. **PriveExplore** (`/prive/explore`)
   - Browse stores and experiences
   - Links to: StoreDetail, CategoryExplore, MapView

4. **PriveInfluence** (`/prive/influence`)
   - Influence dashboard
   - Links to: InfluenceHub, ContentHub, CategoryAuthority

5. **PriveTierProgress** (`/prive/tier-progress`)
   - Tier advancement tracking
   - Links to: Profile, Activity, Privileges

6. **PriveOfferDetail** (`/prive/offer/:offerId`)
   - Individual offer/campaign details
   - Links to: Redeem, StoreDetail, CampaignTask

7. **PriveRedeem** (`/prive/redeem`)
   - Redemption center
   - Links to: GiftCards, Experiences, Cart

8. **PriveProfile** (`/prive/profile`)
   - User profile and settings
   - Links to: Recognition, Authority, Visibility, Statement, Invitations, Exit, Settings

9. **PriveStoreDetail** (`/prive/store/:storeId`)
   - Store/merchant detail page
   - Links to: OfferDetail, MapView, Review

10. **PriveInfluenceHub** (`/prive/influence-hub`)
    - Content management hub
    - Links to: ContentHub, ContentPerformance, CampaignTask

11. **PriveNotifications** (`/prive/notifications`)
    - Notification center
    - Links to: BrandInvitation, CampaignStatus, OfferDetail

12. **PriveBrandInvitation** (`/prive/invitation/:invitationId`)
    - Brand campaign invitation details
    - Links to: CampaignTask, OfferDetail

13. **PriveEarnings** (`/prive/earnings`)
    - Earnings breakdown and history
    - Links to: Wallet, Activity, Statement

14. **PriveActivity** (`/prive/activity`)
    - Recent activity feed
    - Links to: OfferDetail, ContentPerformance, Statement

### F_Profile Screens (6 converted, 6 remaining)

#### Converted:
15. **PriveRecognition** (`/prive/recognition`)
    - Achievements and badges
    - Navigation: Back to Profile
    - Features: Earned achievements, progress tracking, rarity system

16. **PriveAuthority** (`/prive/authority`)
    - Trust score and reputation
    - Navigation: Back to Profile
    - Features: Trust metrics, brand confidence, community credibility

17. **PriveVisibilityControl** (`/prive/visibility`)
    - Privacy and visibility settings
    - Navigation: Back to Profile
    - Features: Badge visibility, category authority display, anonymous mode

18. **PriveActivityStatement** (`/prive/statement`)
    - Monthly activity statement
    - Navigation: Back to Profile
    - Features: Period summary, rewards earned, campaigns completed

19. **PriveExit** (`/prive/exit`)
    - Account downgrade/exit flow
    - Navigation: Back, Continue to Home
    - Features: Respectful exit, what remains, re-entry info

20. **PriveInvitations** (SOURCE: F6_InvitationsScreen.tsx) - READY TO CONVERT
    - Brand invitations and referrals
    - Tabs: Brand Invitations, My Referrals
    - Features: Pending invitations, active campaigns, referral code sharing

#### Remaining to Convert:
- **PriveProfileEdit** (SOURCE: F8_ProfileEditScreen.tsx)
  - Edit profile information
  - Navigation: Back to Profile

- **PriveAccountReview** (SOURCE: F9_AccountReviewScreen.tsx)
  - Account review status
  - Navigation: Back to Profile

- **PriveWallet** (Already converted - F10_WalletScreen.tsx)
  - Wallet management (may be duplicate of existing)

- **PriveSettings** (SOURCE: F11_SettingsScreen.tsx) - PRIORITY
  - App settings and preferences
  - Navigation: Back to Profile
  - Features: Notifications, privacy, account management

- **PriveAnalyticsDashboard** (SOURCE: F12_AnalyticsDashboardScreen.tsx)
  - Performance analytics
  - Navigation: Back to Profile

---

## Screens to Convert (73 remaining)

### C_Offers Screens (13 screens)
- **C1_OffersFeed** → PriveOffersFeed (`/prive/offers`)
  - All privileges feed with filters
  - Links to: OfferDetail, StoreDetail, CategoryExplore

- **C2_OfferDetail** → (Already exists as PriveOfferDetail)

- **C4_CampaignTask** → PriveCampaignTask (`/prive/campaign/:campaignId`)
  - Campaign task details and requirements
  - Links to: ContentSubmission, OfferDetail

- **C5_CampaignStatus** → PriveCampaignStatus (`/prive/campaign/:campaignId/status`)

- **C6_ContentSubmission** → PriveContentSubmission (`/prive/campaign/:campaignId/submit`)

- **C7_Rejection** → PriveCampaignRejection (`/prive/campaign/:campaignId/rejected`)

- **C8_CampaignHistory** → PriveCampaignHistory (`/prive/campaigns/history`)

- **C9_BrandFeedback** → PriveBrandFeedback (`/prive/campaign/:campaignId/feedback`)

- **CampaignApprovalPending** → PriveCampaignPending (`/prive/campaign/:campaignId/pending`)

- **CampaignRewardFailed** → PriveRewardFailed (`/prive/campaign/:campaignId/reward-failed`)

- **CampaignRewardReleased** → PriveRewardReleased (`/prive/campaign/:campaignId/reward-released`)

- **BrandCampaignRules** → PriveCampaignRules (`/prive/campaign/rules`)

### D_Content Screens (8 screens)
- **D1_ContentHub** → PriveContentHub (`/prive/content`)
  - Content management dashboard
  - Links to: ContentPerformance, ContentGuidelines, VisibilityBoost

- **D2_ContentPerformance** → PriveContentPerformance (`/prive/content/:contentId`)

- **D3_VisibilityBoost** → PriveVisibilityBoost (`/prive/content/boost`)

- **D4_RecommendedLabel** → PriveRecommendedLabel (`/prive/content/recommended`)

- **D5_ContentGuidelines** → PriveContentGuidelines (`/prive/content/guidelines`)

- **D6_CategoryAuthority** → PriveCategoryAuthority (`/prive/authority/categories`)

- **D7_InfluenceScore** → PriveInfluenceScore (`/prive/influence/score`)

- **D8_SocialSharing** → PriveSocialSharing (`/prive/content/share`)

### A_Entry Screens (14 screens)
- **A1_Eligibility** → PriveEligibility (`/prive/eligibility`)
- **A2_Invitation** → PriveInvitation (`/prive/invitation`)
- **A3_RequestAccess** → PriveRequestAccess (`/prive/request`)
- **A4_AccessCategories** → PriveAccessCategories (`/prive/categories`)
- **A4_Onboarding** → PriveOnboarding (`/prive/onboarding`)
- **A5_AccessStatus** → PriveAccessStatus (`/prive/access/status`)
- **A5_Rules** → PriveRules (`/prive/rules`)
- **A6_StatusUpdate** → PriveStatusUpdate (`/prive/status/update`)
- **A6_WhyPrive** → PriveWhyPrive (`/prive/why`)
- **A7_Orientation** → PriveOrientation (`/prive/orientation`)
- **A8_Requalification** → PriveRequalification (`/prive/requalify`)
- **A9_RedCarpetWelcome** → PriveRedCarpet (`/prive/welcome`)
- **EligibilityScoreBreakdown** → PriveScoreBreakdown (`/prive/eligibility/score`)
- **GracePeriod** → PriveGracePeriod (`/prive/grace-period`)

### E_Redemption Screens (12 screens)
- **E1_RedemptionHome** → PriveRedemptionHome (`/prive/redemption`)
- **E2_GiftCards** → PriveGiftCards (`/prive/redemption/gift-cards`)
- **E3_GiftCardDetail** → PriveGiftCardDetail (`/prive/redemption/gift-card/:id`)
- **E4_Experiences** → PriveExperiences (`/prive/redemption/experiences`)
- **E5_ExperienceDetail** → PriveExperienceDetail (`/prive/redemption/experience/:id`)
- **E6_PartnerPrivileges** → PrivePartnerPrivileges (`/prive/redemption/privileges`)
- **E7_RedemptionConfirmation** → PriveRedemptionConfirm (`/prive/redemption/confirm`)
- **E8_RedemptionHistory** → PriveRedemptionHistory (`/prive/redemption/history`)
- **E9_PrivilegeExpiry** → PrivePrivilegeExpiry (`/prive/redemption/expiring`)
- **Cart** → PriveCart (`/prive/cart`)
- **Checkout** → PriveCheckout (`/prive/checkout`)
- **ReviewRating** → PriveReviewRating (`/prive/review/:itemId`)

### G_Notifications Screens (10 screens)
- **G1_NotificationCenter** → (Already exists as PriveNotifications)
- **G2_PushNotificationStyle** → PriveNotificationStyle (`/prive/notifications/style`)
- **G3_BrandMessages** → PriveBrandMessages (`/prive/messages`)
- **G4_Concierge** → PriveConcierge (`/prive/concierge`)
- **G5_DisputeResolution** → PriveDispute (`/prive/dispute/:disputeId`)
- **G6_TrustIntegrity** → PriveTrustIntegrity (`/prive/trust`)
- **G7_ActivityReview** → PriveActivityReview (`/prive/activity/review`)
- **G8_Suspension** → PriveSuspension (`/prive/suspended`)
- **G9_ExitSummary** → PriveExitSummary (`/prive/exit/summary`)
- **Appeal** → PriveAppeal (`/prive/appeal/:appealId`)

### X_Explore Screens (7 screens)
- **X1_ExploreMain** → (Already exists as PriveExplore)
- **X2_CategoryExplore** → PriveCategoryExplore (`/prive/explore/category/:categoryId`)
- **X3_StoreListing** → PriveStoreListing (`/prive/explore/stores`)
- **X4_StoreDetail** → (Already exists as PriveStoreDetail)
- **X5_OfferDetail** → (Already exists as PriveOfferDetail)
- **X6_CompareDecision** → PriveCompare (`/prive/compare`)
- **X7_MapView** → PriveMapView (`/prive/map`)

### System Screens (4 screens)
- **EmptyState** → PriveEmptyState (Component)
- **Error** → PriveError (`/prive/error`)
- **Loading** → PriveLoading (Component)
- **Maintenance** → PriveMaintenance (`/prive/maintenance`)

### Compliance Screens (2 screens)
- **InfluencerDisclosure** → PriveDisclosure (`/prive/disclosure`)
- **TaxDisclosure** → PriveTaxDisclosure (`/prive/tax`)

### Transparency Screens (4 screens)
- **BrandSponsoredLabel** → PriveSponsoredInfo (`/prive/sponsored`)
- **RewardFundingSource** → PriveFundingInfo (`/prive/funding`)
- **WhyThisOffer** → PriveWhyOffer (`/prive/why-offer/:offerId`)
- **WhyThisUserInvited** → PriveWhyInvited (`/prive/why-invited`)

---

## Navigation Flow Diagram

```
PriveHome (/)
├── Privileges (/privileges)
│   ├── OffersFeed (/offers)
│   ├── OfferDetail (/offer/:id)
│   │   ├── CampaignTask (/campaign/:id)
│   │   │   ├── ContentSubmission (/campaign/:id/submit)
│   │   │   └── CampaignStatus (/campaign/:id/status)
│   │   └── StoreDetail (/store/:id)
│   └── CategoryExplore (/explore/category/:id)
│
├── Explore (/explore)
│   ├── StoreListing (/explore/stores)
│   ├── StoreDetail (/store/:id)
│   ├── MapView (/map)
│   └── Compare (/compare)
│
├── Influence (/influence)
│   ├── InfluenceHub (/influence-hub)
│   ├── ContentHub (/content)
│   │   ├── ContentPerformance (/content/:id)
│   │   ├── VisibilityBoost (/content/boost)
│   │   └── ContentGuidelines (/content/guidelines)
│   ├── InfluenceScore (/influence/score)
│   └── CategoryAuthority (/authority/categories)
│
├── Profile (/profile)
│   ├── Recognition (/recognition) ✅
│   ├── Authority (/authority) ✅
│   ├── Visibility (/visibility) ✅
│   ├── Statement (/statement) ✅
│   ├── Invitations (/invitations) 🔄
│   ├── Settings (/settings) 🔄
│   ├── ProfileEdit (/profile/edit)
│   └── Exit (/exit) ✅
│
├── Wallet (/wallet)
│   ├── Earnings (/earnings) ✅
│   └── RedemptionHistory (/redemption/history)
│
├── Redeem (/redeem) ✅
│   ├── RedemptionHome (/redemption)
│   ├── GiftCards (/redemption/gift-cards)
│   ├── Experiences (/redemption/experiences)
│   ├── Cart (/cart)
│   └── Checkout (/checkout)
│
├── Notifications (/notifications) ✅
│   ├── BrandMessages (/messages)
│   ├── BrandInvitation (/invitation/:id) ✅
│   └── Concierge (/concierge)
│
└── Tier Progress (/tier-progress) ✅
    └── Activity (/activity) ✅

Legend:
✅ Converted
🔄 In Progress
⏳ To Convert
```

---

## URL Structure Summary

### Core Navigation
- `/prive` - Home
- `/prive/privileges` - Privileges Hub
- `/prive/explore` - Explore
- `/prive/influence` - Influence Dashboard
- `/prive/profile` - Profile

### Offers & Campaigns
- `/prive/offers` - Offers Feed
- `/prive/offer/:offerId` - Offer Detail
- `/prive/campaign/:campaignId` - Campaign Detail
- `/prive/campaign/:campaignId/submit` - Submit Content
- `/prive/campaign/:campaignId/status` - Campaign Status
- `/prive/campaigns/history` - Campaign History

### Content & Influence
- `/prive/content` - Content Hub
- `/prive/content/:contentId` - Content Performance
- `/prive/content/guidelines` - Guidelines
- `/prive/influence/score` - Influence Score
- `/prive/authority/categories` - Category Authority

### Profile & Settings
- `/prive/profile` - Main Profile
- `/prive/recognition` - Achievements ✅
- `/prive/authority` - Authority & Trust ✅
- `/prive/visibility` - Privacy Settings ✅
- `/prive/statement` - Activity Statement ✅
- `/prive/invitations` - Invitations & Referrals
- `/prive/settings` - Settings
- `/prive/exit` - Exit Flow ✅

### Redemption
- `/prive/redemption` - Redemption Home
- `/prive/redemption/gift-cards` - Gift Cards
- `/prive/redemption/experiences` - Experiences
- `/prive/cart` - Shopping Cart
- `/prive/checkout` - Checkout

### Notifications & Messages
- `/prive/notifications` - Notification Center ✅
- `/prive/messages` - Brand Messages
- `/prive/concierge` - Concierge Service

### Entry & Eligibility
- `/prive/eligibility` - Check Eligibility
- `/prive/onboarding` - Onboarding
- `/prive/welcome` - Welcome
- `/prive/rules` - Rules & Guidelines

---

## Conversion Status

**Total Screens:** 93
**Converted:** 20 (21.5%)
**Remaining:** 73 (78.5%)

### Priority for Next Conversion:
1. **PriveInvitations** (F6) - High user engagement
2. **PriveSettings** (F11) - Core functionality
3. **PriveOffersFeed** (C1) - Main offers hub
4. **PriveCampaignTask** (C4) - Campaign flow
5. **PriveContentHub** (D1) - Content management

---

## Theme & Design Consistency

All Privé screens follow:
- **Background:** #0A0A0A (deep black)
- **Primary Gold:** #C9A962
- **Secondary Card:** #181818
- **Tertiary Card:** #2A2A2A
- **Border Radius:** 12px (lg), 16px (xl)
- **Spacing:** 4px, 8px, 12px, 16px, 20px, 24px
- **Bottom Nav Space:** 80px padding

All screens include:
- `BottomNavManager` component
- Consistent back navigation
- Gold accent colors
- Dark luxury aesthetic
