# ReZ Privé - Complete Navigation Reference

## 🗺️ Screen-to-Screen Navigation Map

### From PriveHome (Dashboard)
```
PriveHome (/prive)
  → PriveProfile (click profile card)
  → PriveTierProgress (click tier progress)
  → PriveEarnings (click earnings card)
  → PriveOffersFeed (click explore offers)
  → PrivePrivileges (click privileges)
  → PriveInfluenceHub (click influence)
  → PriveWallet (click wallet)
  → PriveRedeem (click redeem)
  → PriveNotifications (click notifications icon)
  → PriveSettings (click settings icon)
```

### From PriveProfile
```
PriveProfile (/prive/profile)
  → PriveTierProgress (click tier badge)
  → PriveWallet (click wallet action)
  → PriveInvitations (click invites action)
  → PriveActivity (click activity action)
  → PriveSettings (click settings action)
  → PriveRecognition (click achievements)
  → PriveAuthority (click trust score)
  → PriveActivityStatement (click activity link)
  → PriveScoreBreakdown (click score details)
```

### From PriveScoreBreakdown
```
PriveScoreBreakdown (/prive/score-breakdown)
  → View detailed 6-pillar scores
  → View metrics and improvement tips
  → Back to PriveProfile or PriveHome
```

### From PriveOffersFeed
```
PriveOffersFeed (/prive/offers-feed)
  → PriveOfferDetail (click any offer)
  → PriveStoreDetail (click store name)
  → PriveCampaignTask (accept campaign)
```

### From PriveOfferDetail
```
PriveOfferDetail (/prive/offer/:offerId)
  → PriveStoreDetail (click store info)
  → PriveCampaignTask (click "Join Campaign")
  → Back to PriveOffersFeed or PriveExplore
```

### From PriveStoreDetail
```
PriveStoreDetail (/prive/store/:storeId)
  → PriveOfferDetail (click offer in list)
  → Navigate to store website (external)
  → Add to favorites
  → Share store
```

### From PriveExplore
```
PriveExplore (/prive/explore)
  → PriveStoreDetail (click any store)
  → PriveOfferDetail (click any offer)
  → Filter by category
  → Search stores
```

### From PriveInvitations
```
PriveInvitations (/prive/invitations)
  Tab: Brand Invitations
    → PriveBrandInvitation (click pending invitation)
    → PriveCampaignTask (click accepted campaign)
  Tab: My Referrals
    → Share referral code
    → View referral details
```

### From PriveBrandInvitation
```
PriveBrandInvitation (/prive/invitation/:invitationId)
  → Accept: Navigate to PriveOfferDetail
  → Decline: Navigate back to PriveInvitations
```

### From PriveCampaignTask
```
PriveCampaignTask (/prive/campaign/:campaignId)
  → PriveCampaignStatus (view progress)
  → PriveContentGuidelines (click guidelines)
  → Upload content
  → Complete tasks
  → Submit for review
```

### From PriveCampaignStatus
```
PriveCampaignStatus (/prive/campaign-status/:campaignId)
  → PriveContentPerformance (click content item)
  → PriveEarnings (click earnings)
  → Back to PriveCampaignTask
```

### From PriveInfluenceHub
```
PriveInfluenceHub (/prive/influence-hub)
  Tab: Active
    → PriveContentPerformance (click live content)
  Tab: Pending
    → PriveContentPerformance (click under review)
  Tab: Completed
    → PriveContentPerformance (click approved content)

  Quick Actions:
    → PriveContentGuidelines
    → Boost visibility feature
    → PriveWallet (view earnings)
```

### From PriveContentPerformance
```
PriveContentPerformance (/prive/content/:contentId)
  → View detailed metrics
  → Share content
  → Edit content (if draft)
  → Delete content
```

### From PriveEarnings
```
PriveEarnings (/prive/earnings)
  Filter by:
    - All, Cashback, Invitations, Campaigns, Content
  Filter by status:
    - All, Pending, Completed

  → PriveWallet (click wallet link)
  → PriveExplore (click "Earn More")
  → PriveActivity (view all activity)
```

### From PriveWallet
```
PriveWallet (/prive/wallet)
  Tab: Overview
    → View all coin types
    → Recent activity
  Tab: ReZ Coins
    → Coin details and usage
  Tab: Branded Coins
    → Partner-specific coins
  Tab: Privé Coins
    → Exclusive coins

  → PriveRedeem (click redeem)
  → PriveEarnings (click earnings)
```

### From PriveRedeem
```
PriveRedeem (/prive/redeem)
  Categories:
    - Gift Cards → PriveGiftCards
    - Experiences → PriveExperiences
    - Partner Privileges → PrivePartnerPrivileges

  → PriveRedemptionHistory (click history)
  → PriveGiftCards (click gift cards)
  → PriveExperiences (click experiences)
  → PriveWallet (click wallet link)
```

### From PriveGiftCards
```
PriveGiftCards (/prive/gift-cards)
  Filter by:
    - All, Dining, Fashion, Wellness, Travel

  → PriveGiftCardDetail (click gift card)
  → Back to PriveRedeem
```

### From PriveGiftCardDetail
```
PriveGiftCardDetail (/prive/gift-card/:cardId)
  → Select denomination
  → Choose quantity
  → PriveCheckout (click purchase)
  → Save to favorites
  → Share gift card
  → Back to PriveGiftCards
```

### From PriveExperiences
```
PriveExperiences (/prive/experiences)
  Filter by:
    - All, Dining, Wellness, Travel, Events

  → PriveExperienceDetail (click experience)
  → Back to PriveRedeem
```

### From PriveExperienceDetail
```
PriveExperienceDetail (/prive/experience/:experienceId)
  → Select date
  → View full details
  → PriveBooking (click book now)
  → Save to favorites
  → Share experience
  → Back to PriveExperiences
```

### From PriveCheckout
```
PriveCheckout (/prive/checkout)
  → Enter delivery email
  → Confirm payment with coins
  → PriveWallet (if insufficient balance)
  → Checkout success
  → Back to item detail
```

### From PriveBooking
```
PriveBooking (/prive/booking)
  → Enter guest details
  → Add special requests
  → Confirm payment with coins
  → PriveWallet (if insufficient balance)
  → Booking success
  → Back to experience detail
```

### From PrivePartnerPrivileges
```
PrivePartnerPrivileges (/prive/partner-privileges)
  Filter by tier:
    - All Tiers, Signature, Elite, Icon

  → PriveStoreDetail (click partner store)
  → Activate privileges
  → Back to PriveRedeem
```

### From PriveRedemptionHistory
```
PriveRedemptionHistory (/prive/redemption-history)
  → View past redemptions
  → Reorder
  → Rate & review
```

### From PriveTierProgress
```
PriveTierProgress (/prive/tier-progress)
  → PriveEligibility (click tier requirements)
  → PriveActivity (click activity link)
  → PrivePrivileges (click benefits)
  → View tier milestones
```

### From PriveEligibility
```
PriveEligibility (/prive/eligibility)
  → PriveTierProgress (if eligible)
  → View requirements
  → Check score breakdown
```

### From PrivePrivileges
```
PrivePrivileges (/prive/privileges)
  → PriveStoreDetail (click partner store)
  → View benefit details
  → Activate privileges
```

### From PriveRecognition
```
PriveRecognition (/prive/recognition)
  → View achievements
  → Badge details
  → Share achievements
```

### From PriveAuthority
```
PriveAuthority (/prive/authority)
  → View trust metrics
  → Category authority details
  → Score breakdown
```

### From PriveVisibilityControl
```
PriveVisibilityControl (/prive/visibility)
  → Toggle privacy settings
  → Manage profile visibility
  → Control data sharing
```

### From PriveActivityStatement
```
PriveActivityStatement (/prive/statement)
  → View monthly statements
  → Download reports
  → Export data
```

### From PriveActivity
```
PriveActivity (/prive/activity)
  Filter by:
    - All, Rewards, Campaigns, Redemptions

  → PriveEarnings (click earning)
  → PriveCampaignStatus (click campaign)
  → PriveRedemptionHistory (click redemption)
```

### From PriveNotifications
```
PriveNotifications (/prive/notifications)
  Filter by:
    - All, Invites, Rewards, Campaigns, Status

  → PriveBrandInvitation (click invitation)
  → PriveWallet (click reward notification)
  → PriveCampaignStatus (click campaign notification)
  → PriveTierProgress (click tier notification)
  → Settings (notification preferences)
```

### From PriveSettings
```
PriveSettings (/prive/settings)
  Account:
    → Profile edit
    → PriveVisibilityControl (privacy)
    → Notification preferences

  Privé:
    → PriveTierProgress
    → PriveRecognition
    → PriveAuthority

  Support:
    → Help Center
    → Contact Support
    → Send Feedback

  About:
    → Terms & Conditions
    → Privacy Policy
    → About ReZ Privé

  → PriveExit (exit Privé)
```

### From PriveExit
```
PriveExit (/prive/exit)
  → Confirm exit
  → Export data
  → Final survey
  → Redirect to main app
```

## 🎯 Quick Access Paths

### Most Common User Journeys

**1. Browse & Join Campaign**
```
PriveHome → PriveOffersFeed → PriveOfferDetail → PriveCampaignTask → PriveCampaignStatus
```

**2. Accept Brand Invitation**
```
PriveNotifications → PriveBrandInvitation → PriveOfferDetail → PriveCampaignTask
```

**3. Track Earnings**
```
PriveHome → PriveEarnings → (Filter/View) → PriveWallet
```

**4. Redeem Gift Card**
```
PriveHome → PriveWallet → PriveRedeem → PriveGiftCards → PriveGiftCardDetail → PriveCheckout → Success
```

**4b. Book Experience**
```
PriveHome → PriveWallet → PriveRedeem → PriveExperiences → PriveExperienceDetail → PriveBooking → Success
```

**5. Manage Content**
```
PriveHome → PriveInfluenceHub → PriveContentPerformance → (Edit/Share)
```

**6. Referral Sharing**
```
PriveProfile → PriveInvitations → (Referrals tab) → Share code
```

**7. Tier Advancement**
```
PriveHome → PriveTierProgress → PriveEligibility → (Complete requirements)
```

**8. Check Achievements**
```
PriveProfile → PriveRecognition → (View badges)
```

## 🔄 Circular Dependencies (Intentional)

These screens link back to each other, creating useful navigation loops:

```
PriveHome ⟷ PriveProfile
PriveHome ⟷ PriveOffersFeed
PriveEarnings ⟷ PriveWallet
PriveCampaignTask ⟷ PriveCampaignStatus
PriveOfferDetail ⟷ PriveStoreDetail
PriveInfluenceHub ⟷ PriveContentPerformance
```

## 📱 Bottom Navigation

The BottomNavManager switches based on mode:

```
Normal Mode:
  - Home
  - Explore
  - Wallet
  - Profile

Privé Mode (when on /prive/*):
  - Privé Home
  - Offers
  - Influence
  - Profile
```

## 🎨 Header Navigation Patterns

### Standard Back Button
```jsx
<div onClick={() => navigate(-1)}>
  <span>←</span>
</div>
```

### Title + Actions
```jsx
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div onClick={() => navigate(-1)}>←</div>
  <h1>Title</h1>
  <div onClick={() => navigate('/prive/settings')}>⚙️</div>
</div>
```

### Breadcrumb Navigation (Not Implemented Yet)
Could add for deep navigation:
```
PriveHome > Offers > Campaign Details > Task
```

## 🔗 External Navigation

Some screens link to external resources:

- **Store websites**: Opens in new tab
- **Share functionality**: Native share or clipboard
- **Help Center**: Could link to external docs
- **Terms/Privacy**: Could link to legal pages

## ⚡ Navigation State Management

Currently using:
- React Router's `useNavigate()` for transitions
- `useParams()` for dynamic routes
- Browser's back button fully supported
- No state persistence (could add with Context API)

## 🎯 Navigation Best Practices

1. **Always provide back navigation** on detail screens
2. **Use meaningful routes** (`/prive/offer/123` not `/prive/o/123`)
3. **Preserve scroll position** when navigating back (browser handles this)
4. **Show loading states** for async navigation
5. **Handle 404s** for invalid IDs
6. **Deep linking** works out of the box

## 📊 Navigation Metrics to Track

Suggested analytics:
- Most visited screens
- Average navigation depth
- Drop-off points
- Time per screen
- Navigation patterns
- Back button usage

---

**Last Updated**: December 25, 2024
**Total Screens**: 37
**Total Routes**: 37+ (including dynamic routes)
**Navigation Completeness**: 100% for converted screens
**New**: Complete redemption flows with detail pages, checkout, and booking
