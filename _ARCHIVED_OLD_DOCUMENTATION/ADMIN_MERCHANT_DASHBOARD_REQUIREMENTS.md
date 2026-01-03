# Admin & Merchant Dashboard Requirements

## 📊 Overview
ReZ needs **two separate dashboard systems** to manage the entire ecosystem:
1. **Admin Dashboard** - ReZ team to control the entire platform
2. **Merchant Dashboard** - Individual merchants to manage their presence and offers

---

# 🔐 ADMIN DASHBOARD (ReZ Team)

## 🎯 Purpose
Central command center for ReZ team to manage users, merchants, transactions, content, analytics, and platform configuration.

---

## 📱 Admin Dashboard Sections

### **1. DASHBOARD HOME** 📊

#### **Key Metrics Overview**
- **Total Users**: 50,234 (+2,345 this week)
- **Active Merchants**: 2,456 (Online: 1,234 | Offline: 1,222)
- **Total Transactions Today**: ₹12,45,678
- **ReZ Coins Distributed Today**: 1,24,567 coins
- **Cashback Pending**: ₹8,45,234
- **Platform Revenue**: ₹2,34,567 (commission)
- **Pending Approvals**: 45 merchants | 123 offers | 234 reviews

#### **Real-Time Stats**
- Active users right now: 1,234
- Transactions per minute: 45
- Average transaction value: ₹1,245
- Peak hours graph
- User activity heatmap

#### **Quick Actions**
- ✅ Approve pending merchants
- 📢 Create platform announcement
- 🎁 Launch flash sale
- 🚨 Handle urgent tickets
- 📊 Generate daily report

#### **Alerts & Notifications**
- 🔴 System errors (3)
- 🟡 Payment gateway issues (1)
- 🟢 High-value transaction alerts
- 🔔 New merchant signups (12)
- ⚠️ Fraud detection alerts (2)

---

### **2. USER MANAGEMENT** 👥

#### **User List**
**Filters**:
- Status: Active, Inactive, Suspended, Banned
- Tier: Regular, Premium, Privé
- Registration Date Range
- Location (City, State)
- Spending Range (₹0-10k, ₹10k-50k, ₹50k+)
- Engagement Level: High, Medium, Low, Inactive

**Table Columns**:
- User ID
- Name | Avatar
- Email | Phone
- ReZ Coins Balance
- Total Spent
- Total Earned
- Registration Date
- Last Active
- Status Badge
- Actions (View, Edit, Suspend, Message)

#### **User Detail View**
**Personal Info**:
- Full name, Email, Phone
- Location, Age, Gender
- Profile photo
- Verification status (Email, Phone, KYC)

**Account Stats**:
- Total transactions: 245
- Total spent: ₹1,24,567
- Total earned: ₹24,567
- ReZ Coins: 12,456
- Branded Coins: 5,678
- Promo Coins: 1,234
- Current streak: 23 days
- Loyalty tier: Gold

**Activity Timeline**:
- Recent transactions
- Coin earning history
- Referrals made (12)
- Reviews written (34)
- UGC content posted (8)

**Wallet Management**:
- Add/deduct coins (with reason)
- Freeze wallet (fraud prevention)
- Transaction history export
- Coin expiry management

**Actions**:
- Send push notification
- Send email
- Suspend account
- Ban user (with reason)
- Reset password
- View support tickets
- Export user data (GDPR)

---

### **3. MERCHANT MANAGEMENT** 🏪

#### **Merchant List**
**Filters**:
- Type: Online, Offline, Both
- Status: Active, Pending, Suspended, Rejected
- Category: Food, Fashion, Electronics, etc.
- Verification: Verified, Unverified
- Performance: Top, Good, Average, Poor
- Location (for offline)

**Table Columns**:
- Merchant ID
- Logo | Name
- Category
- Type (Online/Offline)
- Status Badge
- Total Offers Active
- Monthly Transactions
- Monthly Revenue
- Commission Rate
- Verification Status
- Actions (View, Edit, Approve, Suspend)

#### **Merchant Detail View**
**Business Info**:
- Business name, Legal name
- Owner name, Contact
- GSTIN, PAN
- Business address
- License/Registration documents
- Business type
- Website/App URL

**Store Details (Offline)**:
- Store name
- Address with map
- Operating hours
- Photos (storefront, interior)
- QR code generated
- Staff count
- Categories served

**Brand Details (Online)**:
- Brand logo (high-res)
- Brand description
- Product categories
- Tracking integration
- API credentials
- Affiliate network

**Performance Metrics**:
- Total transactions: 12,456
- Monthly revenue: ₹12,45,678
- Average order value: ₹1,234
- Customer rating: 4.7 ⭐
- Total reviews: 234
- Repeat customer rate: 45%
- Cashback distributed: ₹2,34,567

**Offers Management**:
- Active offers (23)
- Scheduled offers (5)
- Expired offers (156)
- Create new offer (admin override)

**Financial**:
- Commission rate: 15%
- ReZ earnings: ₹1,87,456
- Pending settlements: ₹45,678
- Settlement history
- Invoice generation

**Actions**:
- Approve/Reject signup
- Verify merchant (badge)
- Suspend/Reactivate
- Change commission rate
- Feature merchant (homepage)
- Send message
- Generate report

---

### **4. TRANSACTION MANAGEMENT** 💳

#### **Transaction List**
**Filters**:
- Date range
- Status: Success, Pending, Failed, Refunded
- Type: Online, Offline, Lock Deal
- Payment method
- Amount range
- Merchant
- User

**Table Columns**:
- Transaction ID
- Date & Time
- User (name, ID)
- Merchant (name, logo)
- Amount
- Cashback Given
- Coins Earned
- Payment Method
- Status Badge
- Actions (View, Refund, Dispute)

#### **Transaction Detail View**
- User details
- Merchant details
- Product/Service details
- Amount breakdown:
  - Subtotal
  - Discount
  - Tax
  - Final amount
- Cashback calculation:
  - Base cashback %
  - Multiplier applied
  - Bonus coins
  - Total earned
- Payment info:
  - Method (UPI, Card, Wallet)
  - Gateway transaction ID
  - Status
  - Timestamps
- Receipt/Invoice
- Customer review (if any)

**Actions**:
- Issue refund (full/partial)
- Adjust cashback
- Mark as fraudulent
- Export receipt
- Contact user
- Contact merchant

---

### **5. CASHBACK & COINS MANAGEMENT** 🪙

#### **Coin Distribution Overview**
- Total ReZ Coins in circulation: 12,45,67,890
- Coins distributed today: 1,24,567
- Coins redeemed today: 45,678
- Pending coin credits: 23,456
- Expired coins (30 days): 12,345

#### **Cashback Pending Queue**
**Table**:
- User name
- Merchant name
- Transaction ID
- Amount
- Cashback due
- Coins due
- Days pending
- Auto-credit date
- Actions (Credit now, Hold, Investigate)

#### **Coin Adjustment**
- Bulk coin distribution (campaigns)
- Individual user adjustments
- Merchant-funded coin pools
- Promo coin campaigns
- Expiry rule management

#### **Cashback Rate Management**
**By Category**:
- Food & Dining: 10-20%
- Fashion: 15-25%
- Electronics: 8-15%
- Beauty: 18-30%
- etc.

**By Merchant** (override):
- Custom rates for specific merchants
- Seasonal rate adjustments
- Promotional rates

**Multiplier Rules**:
- First purchase: 2x
- Daily streak: 1.5x
- Premium tier: 1.3x
- Special occasions: 3x
- Combined multipliers logic

---

### **6. OFFERS & DEALS MANAGEMENT** 🎁

#### **Offer List**
**Filters**:
- Status: Active, Scheduled, Expired, Draft
- Type: Cashback, Discount, BOGO, Lock Deal
- Category
- Merchant
- Performance: Top, Good, Poor

**Table Columns**:
- Offer ID
- Merchant (logo, name)
- Title
- Type Badge
- Discount/Cashback %
- Valid From - To
- Total Uses
- Total Revenue
- Status
- Actions (View, Edit, Duplicate, Deactivate)

#### **Create/Edit Offer**
**Basic Info**:
- Offer title
- Description (rich text)
- Offer type: Cashback, Discount, BOGO, Free Item, Combo
- Banner image (1200x628)

**Discount Details**:
- Discount type: Percentage, Fixed amount
- Discount value
- Maximum discount cap
- Minimum order value
- Applicable on: All products, Specific categories, Specific products

**Cashback Details**:
- Base cashback %
- Additional ReZ Coins
- Multiplier (1x, 2x, 5x)
- Instant or delayed

**Validity**:
- Start date & time
- End date & time
- All day or specific hours
- Days of week
- Auto-renew option

**Usage Limits**:
- Total usage limit
- Per user limit
- First-time users only
- Specific user tiers (Premium, Privé)

**Targeting**:
- Location (cities, areas)
- User segments (new, active, inactive)
- Device type (app, web)
- Payment methods

**Visibility**:
- Show on homepage
- Feature in category
- Push notification
- Email campaign

---

### **7. CATEGORY MANAGEMENT** 🗂️

#### **Category List**
- Food & Dining (234 merchants)
- Fashion (156 merchants)
- Electronics (89 merchants)
- Beauty & Wellness (178 merchants)
- Grocery (312 merchants)
- Healthcare (145 merchants)
- Fitness (67 merchants)
- Home Services (98 merchants)
- Travel (54 merchants)
- Events (87 merchants)
- Financial Services (23 merchants)
- Luxury (45 merchants)

**For Each Category**:
- Name, Icon (emoji)
- Description
- Banner image
- Average cashback %
- Total merchants
- Monthly transactions
- Monthly revenue
- Featured merchants (top 5)
- Sub-categories
- SEO metadata

**Actions**:
- Edit category
- Add sub-category
- Set default cashback %
- Feature category (homepage)
- Reorder categories
- Hide/Show category

---

### **8. CONTENT MANAGEMENT** 📝

#### **UGC (User-Generated Content)**
**Reels & Videos**:
- Pending approval (45)
- Approved (1,234)
- Rejected (123)

**Each item**:
- Thumbnail
- User name
- Store name
- Upload date
- Views, Likes, Comments
- Flagged count
- Actions (Approve, Reject, Feature, Remove)

**Reviews**:
- Pending moderation (67)
- Approved (5,678)
- Flagged (23)

**Each review**:
- User name
- Merchant name
- Rating (1-5 stars)
- Text
- Photos (if any)
- Date
- Verified purchase badge
- Helpful count
- Actions (Approve, Edit, Remove, Feature)

**Posts & Photos**:
- Similar to Reels
- Grid/List view
- Bulk actions

#### **Announcements & Banners**
**Homepage Banners**:
- Carousel banners (5)
- Each: Image, Link, Priority, Active dates
- Drag to reorder
- A/B testing support

**In-App Announcements**:
- Title, Message
- Icon, Color scheme
- Target audience
- Start/End date
- Dismissable or persistent

**Push Notifications**:
- Create campaign
- Title, Body, Image
- Deep link
- Schedule or send now
- Target segments
- Delivery report

#### **Blog & Help Center**
- Articles (150)
- FAQs (45)
- How-to guides (23)
- Rich text editor
- Categories
- SEO metadata
- Publish/Draft/Schedule

---

### **9. GAMIFICATION MANAGEMENT** 🎮

#### **Games Configuration**
**Daily Check-In**:
- Coin rewards per day (Day 1: 10, Day 7: 100, Day 30: 500)
- Milestone rewards
- Streak reset rules

**Spin the Wheel**:
- Prize slots (8 segments)
- Probabilities for each prize
- Daily spin limit
- Visual customization

**Scratch Card**:
- Prize pool
- Win probabilities
- Daily limit
- Card designs

**Coin Hunt**:
- Duration
- Coin spawn rate
- Maximum coins per session
- Difficulty levels

**Quiz**:
- Question bank (500+)
- Categories
- Difficulty
- Coins per correct answer
- Daily limit

#### **Achievements**
**Create/Edit Achievement**:
- Name, Icon, Description
- Unlock criteria:
  - First purchase
  - 10 purchases
  - ₹10,000 spent
  - 30-day streak
  - Refer 10 friends
  - etc.
- Reward (coins)
- Visible/Hidden
- Expiry (if any)

**List**:
- All achievements (67)
- Unlock rate %
- Total unlocks
- Most popular
- Least popular

#### **Leaderboards**
**Configure**:
- Weekly/Monthly reset
- Scoring rules:
  - Transactions count
  - Total spent
  - Coins earned
  - Referrals made
  - Social engagement
- Prizes for top ranks
- Display settings

**View Current**:
- Top 100 users
- Current week/month standings
- Previous winners
- Prize distribution status

#### **Tournaments**
**Active Tournaments**:
- Shopping Sprint (1,247 participants)
- Coin Master (892 participants)
- Referral Rally (543 participants)

**Create Tournament**:
- Name, Description, Icon
- Start/End date
- Entry fee (coins or free)
- Prize pool
- Leaderboard rules
- Eligibility criteria

---

### **10. ANALYTICS & REPORTS** 📊

#### **Dashboard Analytics**
**User Analytics**:
- New signups (daily, weekly, monthly graph)
- Active users (DAU, WAU, MAU)
- Retention rate (cohort analysis)
- Churn rate
- User demographics (age, gender, location)
- Device breakdown (iOS, Android, Web)
- App version distribution

**Transaction Analytics**:
- GMV (Gross Merchandise Value) trends
- Transaction volume
- Average order value
- Category-wise breakdown
- Merchant-wise breakdown
- Payment method distribution
- Success rate vs failure rate
- Peak transaction hours

**Cashback Analytics**:
- Total cashback distributed
- Average cashback per transaction
- Category-wise cashback spend
- ROI on cashback campaigns
- User acquisition cost vs cashback cost

**Coin Economics**:
- Total coins issued
- Total coins redeemed
- Coins expired
- Coins in circulation
- Coin velocity (usage frequency)
- Coin redemption rate
- Top coin earners

**Revenue Analytics**:
- Commission revenue
- Premium subscriptions
- Ad revenue (if any)
- Merchant listing fees
- Revenue by category
- Revenue by region
- Profit margins

**Engagement Analytics**:
- Content views (reels, posts)
- Likes, comments, shares
- Review submission rate
- Referral conversion rate
- Game participation
- Daily streak completion rate
- Feature usage heatmap

#### **Custom Reports**
**Generate Report For**:
- Date range selector
- Report type:
  - User acquisition
  - Transaction summary
  - Merchant performance
  - Category performance
  - Cashback utilization
  - Coin distribution
  - Revenue breakdown
  - Fraud detection
- Export formats: PDF, Excel, CSV
- Schedule recurring reports (daily, weekly, monthly)
- Email distribution list

#### **A/B Testing**
- Active experiments (5)
- Create new test:
  - Feature name
  - Variants (A, B, C)
  - Traffic split (33%, 33%, 34%)
  - Success metrics
  - Duration
- View results:
  - Conversion rates
  - Statistical significance
  - Winner declaration

---

### **11. REFERRAL PROGRAM MANAGEMENT** 🎯

#### **Referral Settings**
**Reward Structure**:
- Referrer gets: ₹100 coins
- Referee gets: ₹100 coins
- Minimum referee purchase for reward: ₹500
- Maximum referrals per user: Unlimited / Set limit
- Expiry: 30 days from signup

**Referral Tiers** (Based on successful referrals):
- Bronze (1-10): Standard rewards
- Silver (11-50): 1.5x rewards
- Gold (51-100): 2x rewards
- Platinum (101+): 3x rewards + special perks

#### **Referral Analytics**
- Total referrals: 12,456
- Successful conversions: 7,890 (63%)
- Total rewards distributed: ₹15,67,890
- Top referrers (leaderboard)
- Referral source tracking (WhatsApp, Facebook, etc.)
- Fraud detection (same device, IP, etc.)

---

### **12. EVENTS MANAGEMENT** 🎉

#### **Event List**
**Types**:
- Movies
- Concerts
- College Fests
- Flea Markets
- Workshops
- Sports Events
- Music Nights

**For Each Event**:
- Name, Poster
- Venue, Date, Time
- Ticket types & prices
- ReZ cashback %
- Coin earning
- Total bookings
- Revenue
- Status (Upcoming, Ongoing, Completed, Cancelled)

**Create Event**:
- Basic info (name, description, poster)
- Venue details (address, map)
- Date & time
- Ticket types:
  - VIP: ₹5,000 (15% cashback)
  - Premium: ₹2,500 (12% cashback)
  - General: ₹1,000 (10% cashback)
- Seating arrangement
- Early bird offers
- Group discounts
- Partner integration (BookMyShow, Paytm Insider)

---

### **13. SOCIAL IMPACT MANAGEMENT** 🤝

#### **Social Impact Events**
**Event Types**:
- Blood Donation Drives
- Tree Plantation
- Beach Cleanup
- NGO Volunteering

**For Each Event**:
- Name, Banner
- NGO partner details
- Location, Date, Time
- Participants registered
- Reward: 200 ReZ Coins + Branded Coins
- Verification process
- Certificate generation
- Impact metrics (trees planted, blood units, etc.)

**Create Event**:
- Event details
- NGO partnership (verification)
- Location
- Capacity
- Rewards
- Sponsor brands (for branded coins)
- Photo verification requirement
- Certificate template

#### **Impact Dashboard**:
- Total events conducted: 234
- Total participants: 12,456
- Blood units donated: 1,234
- Trees planted: 23,456
- Beach cleanup: 45 drives
- Volunteer hours: 45,678
- Partner NGOs: 23

---

### **14. SPECIAL PROGRAMS** 💎

#### **ReZ Privé (Premium Tier)**
**Members**:
- Total: 1,234
- Monthly subscriptions: 890
- Annual subscriptions: 344
- Revenue: ₹12,45,678

**Membership Tiers**:
- Silver: ₹299/month (1.5x coins, priority support)
- Gold: ₹499/month (2x coins, exclusive deals)
- Platinum: ₹999/month (3x coins, personal concierge)

**Exclusive Offers**:
- Privé-only deals (45 active)
- Early access to sales
- VIP event invitations
- Partner brand collaborations

#### **Student Program**:
- Registered students: 5,678
- Verification pending: 234
- Student-only offers: 67
- Campus ambassador applications: 123
- Monthly earnings cap: ₹5,000

#### **Corporate Program**:
- Registered employees: 3,456
- Partner companies: 23
- Corporate-only deals: 45
- Monthly earnings cap: ₹3,000

---

### **15. PAYMENT & SETTLEMENT** 💰

#### **Payment Gateway**:
- Gateway status: Razorpay (Active), Paytm (Active)
- Success rate: 97.5%
- Failed transactions (last 24h): 45
- Gateway charges: 2% + ₹3 per transaction

#### **Merchant Settlements**:
**Pending Settlements**:
- Total amount: ₹45,67,890
- Merchants pending: 234
- Next settlement date: Dec 30, 2025

**Settlement Schedule**:
- Frequency: Weekly (Every Monday)
- Minimum threshold: ₹5,000
- Processing time: 3-5 business days

**Settlement History**:
- Date, Merchant, Amount, Status, UTR Number
- Download statement
- Resend confirmation

#### **Refunds**:
- Pending refunds: 23 (₹1,23,456)
- Processed refunds (today): 12 (₹67,890)
- Refund processing time: 5-7 days
- Bulk refund processing

---

### **16. MARKETING & CAMPAIGNS** 📢

#### **Email Campaigns**:
- Create campaign:
  - Subject line
  - Email template (drag & drop builder)
  - Target segment
  - Schedule
- Sent campaigns (234)
- Open rate: 45%
- Click rate: 12%
- Conversion: 3.5%

#### **SMS Campaigns**:
- Create SMS
- Character count (160 limit)
- Target users
- Schedule
- Delivery report

#### **Push Notifications**:
- Create notification
- Title, Body, Image
- Deep link
- Schedule
- Segment targeting
- Delivery & engagement report

#### **Influencer Campaigns**:
- Active campaigns (12)
- Influencer database (234)
- Commission tracking
- Content approval
- Performance metrics

---

### **17. SUPPORT & TICKETS** 🎫

#### **Support Ticket Management**:
**Ticket List**:
- Open (123)
- In Progress (45)
- Resolved (5,678)
- Closed (23,456)

**Each Ticket**:
- Ticket ID
- User name
- Category: Payment, Cashback, Account, Technical, Other
- Priority: Low, Medium, High, Urgent
- Subject
- Description
- Attachments
- Status
- Assigned to (support agent)
- Created date
- Last updated

**Ticket Detail**:
- Full conversation thread
- User details (quick view)
- Transaction history (if payment-related)
- Quick actions:
  - Credit coins (compensation)
  - Issue refund
  - Escalate
  - Close
  - Merge with another ticket
- Internal notes
- SLA timer (response time)

#### **Knowledge Base**:
- FAQs (234)
- Articles (567)
- Video tutorials (23)
- Categories
- Search analytics (what users search for)

---

### **18. FRAUD DETECTION** 🚨

#### **Fraud Alerts**:
- Suspicious transactions (12)
- Multiple accounts (same device/IP): 5
- Referral fraud (self-referrals): 3
- Fake reviews: 8
- Unusual coin activity: 4

#### **Fraud Rules**:
**Transaction Rules**:
- Flag if amount > ₹50,000
- Flag if user makes > 10 transactions in 1 hour
- Flag if different payment methods from same IP
- Velocity checks

**Account Rules**:
- Flag multiple accounts with same device ID
- Flag same bank account across multiple users
- Flag suspicious referral patterns
- KYC mismatch detection

**Review/Content Rules**:
- Duplicate content detection
- Spam keyword filtering
- Fake review patterns (same wording, timing)

#### **Blocked Users/Merchants**:
- User blacklist (234)
- Merchant blacklist (12)
- IP blacklist
- Device ID blacklist
- Reason, Date, Action taken

---

### **19. SYSTEM CONFIGURATION** ⚙️

#### **General Settings**:
- App name, Logo
- Primary color, Theme
- Supported languages
- Currency
- Timezone
- Date format

#### **Feature Toggles**:
- Enable/Disable features:
  - Referral program
  - Daily games
  - UGC content
  - Reviews
  - Social impact events
  - Privé program
  - Lock deals
  - etc.

#### **Coin Settings**:
- Coin to currency ratio (100 coins = ₹1)
- Coin expiry period (90 days)
- Minimum redemption (500 coins)
- Maximum coin balance (unlimited / cap)

#### **Cashback Settings**:
- Auto-credit delay (24 hours)
- Cashback expiry (365 days)
- Maximum cashback per transaction (₹10,000)

#### **Referral Settings**:
- Referrer reward
- Referee reward
- Minimum referee purchase
- Reward expiry

#### **Commission Settings**:
- Default commission rate: 15%
- Category-wise rates
- Merchant-specific overrides

#### **App Version Control**:
- Minimum supported version
- Latest version
- Force update toggle
- What's new (release notes)

#### **Maintenance Mode**:
- Enable maintenance
- Display message
- Estimated downtime
- Whitelist admin IPs

---

### **20. ADMIN USER MANAGEMENT** 👨‍💼

#### **Admin Roles**:
- **Super Admin**: Full access
- **Operations Manager**: Users, Merchants, Transactions
- **Marketing Manager**: Campaigns, Content, Offers
- **Finance Manager**: Settlements, Refunds, Reports
- **Support Agent**: Tickets only
- **Content Moderator**: Reviews, UGC approval

#### **Admin User List**:
- Name, Email, Phone
- Role
- Last login
- Status (Active, Inactive)
- Actions (Edit, Deactivate, Reset password)

#### **Create Admin**:
- Name, Email, Phone
- Role selection
- Permissions (granular):
  - View users
  - Edit users
  - Approve merchants
  - Manage offers
  - View analytics
  - etc.
- Two-factor authentication

#### **Activity Logs**:
- All admin actions logged:
  - Who
  - What (action)
  - When (timestamp)
  - IP address
  - Details
- Audit trail for compliance

---

### **21. NOTIFICATIONS & ALERTS** 🔔

#### **System Notifications**:
- Payment gateway down
- High error rate (>5%)
- Database backup failed
- API response time > 2s
- Disk space low

#### **Business Alerts**:
- Daily revenue milestone reached
- New high-value transaction (>₹50,000)
- Merchant signup (premium brand)
- Viral content (>10k views)
- Negative review on top merchant

#### **Scheduled Reports**:
- Daily summary (8 AM)
- Weekly performance (Monday 9 AM)
- Monthly report (1st of month)
- Custom schedules

---

### **22. INTEGRATIONS** 🔌

#### **Payment Gateways**:
- Razorpay (Active)
- Paytm (Active)
- PhonePe (Inactive)
- Stripe (International - Inactive)
- Configuration (API keys, webhooks)

#### **SMS Gateway**:
- Twilio / MSG91
- API configuration
- Message templates
- Delivery reports

#### **Email Service**:
- SendGrid / AWS SES
- SMTP configuration
- Email templates
- Bounce/Spam reports

#### **Push Notifications**:
- Firebase Cloud Messaging
- Configuration
- Token management

#### **Analytics**:
- Google Analytics
- Mixpanel
- Firebase Analytics
- Custom event tracking

#### **Affiliate Networks**:
- Commission Junction
- ShareASale
- vCommission
- Tracking pixel integration

#### **Third-Party APIs**:
- Google Maps (store locations)
- Clearbit (brand logos)
- Razorpay (payments)
- Twilio (SMS)
- SendGrid (Email)
- Firebase (Auth, Push, Analytics)

---

### **23. API MANAGEMENT** 🔧

#### **API Keys**:
- Generate API key
- Key list (with permissions)
- Usage statistics
- Rate limits
- Revoke key

#### **Webhooks**:
- Configure webhook URLs
- Events to listen:
  - Transaction success
  - Cashback credited
  - User signup
  - Merchant approved
  - etc.
- Webhook logs
- Retry failed webhooks

#### **API Documentation**:
- Swagger/OpenAPI spec
- Authentication methods
- Endpoint reference
- Request/Response examples
- Postman collection

---

### **24. LOGS & DEBUGGING** 🐛

#### **Error Logs**:
- Recent errors (24h)
- Error type
- Frequency
- Affected users
- Stack trace
- Actions (Mark resolved, Investigate)

#### **Activity Logs**:
- User activity
- Admin activity
- System events
- Search & filter

#### **Performance Monitoring**:
- API response times
- Database query times
- Page load times
- Memory usage
- CPU usage
- Alerts for degradation

---

---

# 🏪 MERCHANT DASHBOARD (Individual Merchants)

## 🎯 Purpose
Self-service dashboard for merchants to manage their store presence, offers, analytics, and settlements on ReZ platform.

---

## 📱 Merchant Dashboard Sections

### **1. DASHBOARD HOME** 📊

#### **Today's Overview**
- Revenue today: ₹45,678
- Transactions today: 234
- Cashback given: ₹4,567
- New customers: 45
- Average order value: ₹1,234
- Top-selling product/service
- Peak hours today

#### **Quick Stats**
- Total revenue (MTD): ₹12,45,678
- Total transactions (MTD): 5,678
- Customer rating: 4.7 ⭐ (234 reviews)
- Offer redemptions: 456
- ReZ Coins distributed: 1,24,567

#### **Quick Actions**:
- ✅ Create new offer
- 📊 View analytics
- 💬 Respond to reviews
- 🎁 Set up flash sale
- 📢 Send notification to followers
- 📝 Update store info

#### **Pending Items**:
- Orders to fulfill: 12
- Reviews to respond: 8
- Settlement pending: ₹45,678
- Offer approvals: 2

---

### **2. STORE/BRAND PROFILE** 🏪

#### **Basic Info** (Editable):
- Store/Brand name
- Logo (upload, 500x500px)
- Banner image (upload, 1200x400px)
- Category (primary + secondary)
- Description (500 characters)
- Tags (for search)

#### **Contact & Location** (Offline stores):
- Phone number
- Email
- Website
- Address (with map integration)
- Operating hours:
  - Monday: 9 AM - 9 PM
  - Tuesday: 9 AM - 9 PM
  - etc.
  - Special hours (holidays)
- Multiple locations management

#### **Online Brand Settings**:
- Brand website URL
- Tracking link generation
- Affiliate network
- Product categories
- Shipping methods
- Return policy

#### **Verification**:
- Business documents (upload):
  - GSTIN certificate
  - PAN card
  - Business license
  - Owner ID proof
- Bank details:
  - Account number
  - IFSC code
  - Account holder name
  - Cancelled cheque
- Verification status badge

#### **Store Media**:
- Photos (max 10):
  - Storefront
  - Interior
  - Products
  - Team
- Videos (max 3)
- Virtual tour (360° if available)

---

### **3. OFFERS & DEALS MANAGEMENT** 🎁

#### **My Offers**
**Active Offers** (12):
- Offer title
- Discount %
- Valid until
- Total redemptions
- Revenue generated
- Actions (Edit, Pause, Duplicate, End)

**Scheduled Offers** (3):
- Starts in X days
- Preview
- Edit before launch

**Draft Offers** (2):
- Complete to publish
- Resume editing

**Expired Offers** (56):
- View performance
- Re-activate
- Duplicate

#### **Create New Offer**:
**Step 1: Offer Details**
- Offer title (max 50 chars)
- Description (max 200 chars)
- Offer type:
  - Cashback (%)
  - Flat discount (₹)
  - BOGO (Buy One Get One)
  - Free item
  - Combo deal

**Step 2: Discount Configuration**
- Discount value (% or ₹)
- Maximum discount cap (₹)
- Minimum order value (₹)
- Additional ReZ Coins (optional)
- Applicable on:
  - All products/services
  - Specific categories
  - Specific items

**Step 3: Validity & Timing**
- Start date & time
- End date & time
- All day or specific hours (e.g., Lunch special: 12-3 PM)
- Days of week (e.g., Weekend offer)
- Auto-renew option

**Step 4: Usage Limits**
- Total redemption limit (unlimited / set number)
- Per customer limit (e.g., once per user)
- First-time customers only
- Applicable tiers (All / Premium / Privé)

**Step 5: Visuals**
- Offer banner (upload, 800x600px)
- Icon/Emoji
- Color theme

**Step 6: Preview & Publish**
- Preview how it appears on ReZ app
- Submit for approval (if required)
- Publish immediately (if pre-approved merchant)

#### **Flash Sales**:
- Create time-limited sale (2-24 hours)
- High-urgency template
- Push notification to nearby users
- Limited stock option

---

### **4. TRANSACTION MANAGEMENT** 💳

#### **Transaction List**:
**Filters**:
- Date range
- Status: Completed, Pending, Cancelled, Refunded
- Amount range
- Payment method

**Table Columns**:
- Transaction ID
- Date & Time
- Customer name (masked for privacy)
- Order details
- Amount
- Cashback given
- ReZ commission
- Net amount
- Status
- Actions (View, Invoice, Refund)

#### **Transaction Detail**:
- Customer info (name, phone - masked)
- Order ID
- Date & time
- Items/Services:
  - Item name
  - Quantity
  - Price
- Subtotal
- Discount applied
- Tax
- Total amount
- Cashback to customer
- ReZ commission (%)
- Net settlement to merchant
- Payment method
- Payment status
- Receipt (download PDF)

**Actions**:
- Issue refund (full/partial)
- Download invoice
- Contact customer (via ReZ platform)
- Mark for dispute

---

### **5. CUSTOMER INSIGHTS** 👥

#### **Customer Overview**:
- Total unique customers: 2,345
- Repeat customers: 1,234 (52%)
- New customers (MTD): 234
- Lost customers (haven't returned in 90 days): 345

#### **Customer List**:
**Filters**:
- Visit frequency: First-time, Regular, VIP
- Last visit
- Total spent
- Location

**Table**:
- Customer name (anonymous)
- Total visits
- Total spent
- Last visit
- Avg order value
- Favorite items
- Actions (Send offer, Message via ReZ)

#### **Customer Behavior**:
- Peak visit hours (heatmap)
- Most popular items/services
- Average basket size
- Preferred payment methods
- Repeat purchase cycle (avg days between visits)

#### **Demographics** (aggregated, privacy-safe):
- Age groups
- Gender distribution (if available)
- Location heatmap
- Device type (app/web)

---

### **6. REVIEWS & RATINGS** ⭐

#### **Review Overview**:
- Overall rating: 4.7 ⭐
- Total reviews: 234
- 5 stars: 156 (67%)
- 4 stars: 45 (19%)
- 3 stars: 23 (10%)
- 2 stars: 8 (3%)
- 1 star: 2 (1%)

#### **Review List**:
**Filters**:
- Rating (1-5 stars)
- Date range
- Verified purchase only
- Responded / Not responded

**Each Review**:
- Customer name (anonymous)
- Rating (stars)
- Review text
- Photos (if uploaded)
- Date
- Verified purchase badge
- Helpful count
- Merchant response (if any)

**Actions**:
- Respond publicly
- Flag inappropriate
- Request removal (if violates policy)

#### **Respond to Review**:
- Thank customer
- Address concerns
- Invite back
- Professional template suggestions

#### **Review Insights**:
- Common keywords (word cloud)
- Sentiment analysis (positive, neutral, negative)
- Top praises (clean, fast, quality, etc.)
- Top complaints (slow service, parking, etc.)

---

### **7. ANALYTICS & REPORTS** 📊

#### **Revenue Analytics**:
- Daily revenue graph (last 30 days)
- Monthly comparison
- Year-over-year growth
- Revenue by category (if multi-category)
- Revenue by time of day
- Revenue by day of week

#### **Transaction Analytics**:
- Total transactions
- Average order value (AOV)
- Transaction volume trends
- Payment method breakdown
- Success rate vs failure rate

#### **Customer Analytics**:
- New vs returning customers
- Customer retention rate
- Churn rate
- Customer lifetime value (CLV)
- Acquisition sources (ReZ search, offer, friend referral, etc.)

#### **Offer Performance**:
- Top-performing offers
- Offer redemption rate
- Revenue per offer
- Customer acquisition cost per offer
- ROI on discounts

#### **Product/Service Insights** (If applicable):
- Best sellers
- Least popular
- Revenue by product
- Stock alerts (if integrated)

#### **Cashback Analysis**:
- Total cashback given
- Average cashback per transaction
- Cashback as % of revenue
- Impact on repeat purchases

#### **Custom Reports**:
- Generate report for date range
- Select metrics
- Export as PDF, Excel, CSV
- Schedule recurring reports (weekly, monthly)

---

### **8. FINANCIAL MANAGEMENT** 💰

#### **Settlement Overview**:
- Pending settlement: ₹45,678
- Next settlement date: Dec 30, 2025
- Settlement frequency: Weekly (Every Monday)
- Minimum threshold: ₹5,000

#### **Settlement History**:
**Table**:
- Settlement date
- Period (Dec 20-26, 2025)
- Gross amount
- ReZ commission (15%)
- Cashback adjustments
- Net amount
- Status (Processed, Pending, Failed)
- UTR number (bank reference)
- Download statement

#### **Transaction Summary**:
- Total transactions (period): 234
- Gross revenue: ₹1,24,567
- Cashback given: ₹12,456
- ReZ commission: ₹18,685
- Net settlement: ₹93,426

#### **Commission Details**:
- Commission rate: 15%
- Category: Food & Dining
- Negotiable after 1000 transactions
- Request rate review

#### **Invoices**:
- Download invoice for each settlement
- GST-compliant format
- Auto-generated
- Resend via email

#### **Bank Account**:
- Account number: ****1234
- IFSC: HDFC0001234
- Account holder: Store name
- Verification status: Verified ✅
- Update details (requires re-verification)

---

### **9. MARKETING TOOLS** 📢

#### **Follower Management**:
- Total followers: 1,234
- Growth (MTD): +234
- Send notification to followers:
  - Title, Message
  - Deep link to offer
  - Schedule or send now
  - Estimated reach

#### **QR Code** (Offline stores):
- Generate unique QR code
- Display at checkout counter
- Customers scan to pay via ReZ
- Download (print-ready PDF)
- Multiple QR codes (if multiple counters)

#### **Share & Promote**:
- Share store profile:
  - WhatsApp, Facebook, Instagram
  - Copy link
  - Generate poster with offer
- Social media assets:
  - Pre-designed templates
  - Offer graphics
  - Story templates

#### **Referral Program**:
- Share unique referral link
- Earn bonus for new merchant referrals
- Track referral conversions

#### **Campaign Ideas** (AI-suggested):
- "Lunch hour special (12-2 PM) - 20% off"
- "Weekend BOGO on bestsellers"
- "First-time customer: Flat ₹100 off"
- "Rainy day offer: Free delivery"

---

### **10. CONTENT & MEDIA** 📸

#### **Product/Service Catalog** (Optional):
- Add items:
  - Name
  - Description
  - Price
  - Category
  - Photos (multiple)
  - Available/Out of stock
- Edit/Delete
- Import via CSV

#### **Store Photos**:
- Upload photos (max 20)
- Categories: Storefront, Interior, Products, Team, Events
- Set primary photo (appears in search)
- Reorder

#### **Store Videos**:
- Upload videos (max 3, 60s each)
- Showcase ambience, products, testimonials
- Auto-thumbnail generation

#### **UGC from Customers**:
- View customer-posted reels/photos
- Request permission to share
- Feature on profile
- Respond/thank

---

### **11. NOTIFICATIONS & ALERTS** 🔔

#### **Notification Center**:
- New order (10)
- New review (3)
- Settlement processed (1)
- Offer approved (2)
- Low rating alert (1 - immediate attention)
- New follower (15)

#### **Notification Preferences**:
- Email notifications:
  - Daily summary ✅
  - New orders ✅
  - Reviews ✅
  - Settlements ✅
- SMS notifications:
  - New orders ✅
  - Urgent alerts ✅
- Push notifications (mobile app):
  - All enabled ✅

---

### **12. SUPPORT & HELP** 🎫

#### **Merchant Support**:
- Submit support ticket:
  - Category: Account, Payments, Offers, Technical
  - Priority: Low, Medium, High
  - Description
  - Attachments
- My tickets:
  - Open (2)
  - In progress (1)
  - Resolved (12)
- Ticket detail (conversation thread)

#### **Help Center**:
- FAQs (45 articles)
- Video tutorials:
  - How to create an offer
  - How to respond to reviews
  - Understanding settlements
  - Using analytics
- Contact support:
  - Email: merchant-support@rez.com
  - Phone: +91-XXXX-XXXXXX
  - Live chat (10 AM - 7 PM)

#### **Merchant Community**:
- Forum/Discussion board
- Best practices
- Success stories
- Tips from top merchants

---

### **13. SETTINGS** ⚙️

#### **Account Settings**:
- Business name
- Contact email
- Phone number
- Change password
- Two-factor authentication

#### **Notification Preferences**:
- Email, SMS, Push toggles
- Frequency (real-time, daily digest)

#### **Payment Settings**:
- Bank account details
- Settlement preferences
- Invoice settings (GST number, business address)

#### **Store Hours**:
- Operating hours per day
- Holiday schedule
- Temporary closure (vacation mode)

#### **Privacy**:
- Customer data visibility
- Review display settings
- Public profile visibility

#### **API Access** (Advanced):
- Generate API key
- Webhook configuration
- Developer documentation

---

### **14. LOYALTY PROGRAM** (Optional) 🎁

#### **Create Store Loyalty Card**:
- Punch card (Buy 5 get 1 free)
- Points system (₹100 spent = 10 points)
- Tiers (Bronze, Silver, Gold)
- Rewards:
  - Free item
  - Discount %
  - Birthday bonus

#### **Loyalty Members**:
- Total members: 567
- Active (used in last 30 days): 345
- Member tiers breakdown
- Rewards redeemed

---

### **15. STAFF MANAGEMENT** (Multi-user access) 👨‍💼

#### **Staff Roles**:
- **Store Manager**: Full access
- **Cashier**: View transactions, process refunds
- **Marketing Manager**: Create offers, view analytics
- **Accountant**: View financials, settlements

#### **Staff List**:
- Name, Email, Phone
- Role
- Last login
- Status (Active, Inactive)
- Actions (Edit, Deactivate, Reset password)

#### **Add Staff Member**:
- Name, Email, Phone
- Role selection
- Permissions (granular)
- Send invitation

---

### **16. PERFORMANCE BENCHMARKS** 📈

#### **Compare with Category Average**:
- Your revenue vs category avg: ↑ 15%
- Your rating vs category avg: 4.7 vs 4.5 ⭐
- Your repeat rate vs avg: 52% vs 45%
- Your AOV vs avg: ₹1,234 vs ₹1,000

#### **Top Performers** (Anonymous):
- Top revenue merchant (category)
- Top-rated merchant
- Highest repeat rate
- Learn from best practices

---

### **17. COMPLIANCE & POLICIES** 📜

#### **Terms & Conditions**:
- ReZ merchant agreement
- Commission structure
- Settlement terms
- Refund policy

#### **Tax Compliance**:
- GST filing support
- Transaction reports (GST-ready)
- TDS certificates
- Form 26AS reconciliation

#### **Data Privacy**:
- GDPR/Data protection compliance
- Customer data handling
- Privacy policy

---

---

# 🔗 INTEGRATION BETWEEN ADMIN & MERCHANT DASHBOARDS

## **Data Flow**:

### **Merchant → Admin**:
- Merchant signup → Pending approval queue
- Offer creation → Approval queue (if needed)
- Transaction → Admin analytics
- Settlement request → Admin finance
- Support ticket → Admin support system

### **Admin → Merchant**:
- Merchant approval → Merchant dashboard access
- Offer approval → Offer goes live
- Settlement processing → Merchant receives payment
- Policy updates → Notification to merchant
- Platform announcements → Merchant notification

---

# 🎯 TECHNICAL REQUIREMENTS

## **Admin Dashboard Tech Stack**:
- **Frontend**: React.js, Tailwind CSS, Recharts (analytics)
- **Backend**: Node.js, Express
- **Database**: PostgreSQL (relational), MongoDB (logs)
- **Authentication**: JWT, OAuth2, 2FA
- **Hosting**: AWS, Vercel
- **Real-time**: WebSockets (for live stats)

## **Merchant Dashboard Tech Stack**:
- **Frontend**: React.js, Tailwind CSS, Chart.js
- **Backend**: Same API as admin (role-based access)
- **Authentication**: JWT, 2FA optional
- **Mobile**: React Native (merchant mobile app)
- **Offline Support**: Service workers, local storage

## **Security**:
- Role-based access control (RBAC)
- Data encryption (at rest, in transit)
- Regular security audits
- Activity logging
- IP whitelisting (admin)
- Rate limiting
- CAPTCHA for sensitive actions

## **Scalability**:
- Microservices architecture
- Load balancing
- Database sharding
- CDN for assets
- Caching (Redis)
- Queue system (RabbitMQ) for async tasks

---

# 📊 SUMMARY

## **Admin Dashboard**: 24 Major Sections
1. Dashboard Home
2. User Management
3. Merchant Management
4. Transaction Management
5. Cashback & Coins Management
6. Offers & Deals Management
7. Category Management
8. Content Management (UGC, Reviews, Announcements)
9. Gamification Management
10. Analytics & Reports
11. Referral Program Management
12. Events Management
13. Social Impact Management
14. Special Programs (Privé, Student, Corporate)
15. Payment & Settlement
16. Marketing & Campaigns
17. Support & Tickets
18. Fraud Detection
19. System Configuration
20. Admin User Management
21. Notifications & Alerts
22. Integrations
23. API Management
24. Logs & Debugging

## **Merchant Dashboard**: 17 Major Sections
1. Dashboard Home
2. Store/Brand Profile
3. Offers & Deals Management
4. Transaction Management
5. Customer Insights
6. Reviews & Ratings
7. Analytics & Reports
8. Financial Management
9. Marketing Tools
10. Content & Media
11. Notifications & Alerts
12. Support & Help
13. Settings
14. Loyalty Program
15. Staff Management
16. Performance Benchmarks
17. Compliance & Policies

---

**Total Features**: 300+ distinct features across both dashboards
**Estimated Development**: 6-9 months (full team)
**Priority**: Phase 1 (MVP) → Phase 2 (Advanced) → Phase 3 (Enterprise)

---

**Last Updated**: December 27, 2025
**Document By**: Claude AI Assistant
**Status**: ✅ Complete Requirements
