# Developer Quick Start - From Zero to Production in 30 Minutes

**Purpose**: Get any developer from "git clone" to "fully functional app" in 30 minutes with ZERO thinking required.

**What You'll Have Running**:
- ✅ Backend API with all endpoints live
- ✅ Database with 6,000+ test records
- ✅ Frontend app with all screens working
- ✅ SDK packages integrated
- ✅ Authentication working
- ✅ Wallet operations functional
- ✅ Order creation working
- ✅ Real-time events publishing

---

## 🚀 30-Minute Setup (No Decisions Needed)

### Prerequisites (Install Once)
```bash
# Install Node.js 18+ (if not installed)
node --version  # Should be v18.0.0 or higher

# Install PostgreSQL (if not installed)
brew install postgresql@15  # macOS
# OR
sudo apt install postgresql-15  # Linux

# Install Redis (if not installed)
brew install redis  # macOS
# OR
sudo apt install redis  # Linux

# Install Kafka (optional for events)
brew install kafka  # macOS
```

---

## Step 1: Clone & Install (5 minutes)

```bash
# Clone repository
git clone https://github.com/your-org/rtmn-platform.git
cd rtmn-platform

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Install SDK packages (from internal registry or local)
npm install @rabtul/auth-sdk @rabtul/wallet-sdk @rabtul/order-sdk @rabtul/rules-sdk @rabtul/analytics-sdk
```

---

## Step 2: Environment Setup (3 minutes)

### Backend Environment

```bash
cd backend

# Copy environment template
cp .env.example .env

# Edit .env (ONLY change these 3 lines)
nano .env
```

**Edit ONLY these lines in .env:**
```bash
# Database (change if your PostgreSQL credentials are different)
DB_PASSWORD=your_postgres_password

# Twilio (get from https://console.twilio.com - takes 2 minutes)
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=+1234567890
```

**Everything else is pre-configured. DO NOT CHANGE.**

### Frontend Environment

```bash
cd ../frontend

# Copy environment template
cp .env.example .env

# Edit .env (ONLY change API URL if backend is not on localhost:3000)
nano .env
```

**Frontend .env:**
```bash
REACT_APP_API_BASE_URL=http://localhost:3000
REACT_APP_RABTUL_BASE_URL=http://localhost:3000
REACT_APP_ID=rez-app
REACT_APP_RABTUL_API_KEY=key-rez-app
REACT_APP_RABTUL_API_SECRET=secret-rez
```

---

## Step 3: Database Setup (5 minutes)

```bash
cd backend

# Create database
createdb rtmn_db

# Run migrations (creates all tables)
npm run db:migrate

# Seed database (adds 6,000+ test records)
npm run seed

# DONE! You now have:
# - 100 test users
# - 50 merchants
# - 500 products
# - 1,000 orders
# - 5,000 wallet transactions
# - 20 campaigns
```

**Seeding will output:**
```
✅ Database seeding completed successfully!

📊 Summary:
   Companies: 7
   Users: 100
   Merchants: 50
   Products: 500
   Orders: 1000
   Wallet Transactions: 5000
   Campaigns: 20
   Reviews: 100
   Admins: 10
```

---

## Step 4: Start Backend (2 minutes)

```bash
cd backend

# Start backend server
npm run dev

# You should see:
# 🚀 Server running on port 3000
# 📖 API Docs: http://localhost:3000/api-docs
# 🏥 Health Check: http://localhost:3000/health
```

**Verify backend is running:**
```bash
# Open browser and visit:
http://localhost:3000/health

# You should see:
{
  "status": "healthy",
  "timestamp": "2026-01-04T10:30:00.000Z",
  "uptime": 12.345
}
```

---

## Step 5: Start Frontend (2 minutes)

```bash
# Open NEW terminal tab
cd frontend

# Start frontend app
npm start

# App will open automatically at:
# http://localhost:3001
```

---

## Step 6: Test Complete Flow (10 minutes)

### Test 1: User Login ✅

1. **Go to**: `http://localhost:3001/login`

2. **Enter test user phone**: `+91-9876500001`

3. **Click "Send OTP"**
   - In development mode, OTP is logged to console
   - Check backend terminal: `[OTP] +91-9876500001: 123456`

4. **Enter OTP**: `123456`

5. **Click "Verify"**
   - ✅ You're now logged in!
   - ✅ Redirected to Home dashboard

---

### Test 2: Check Wallet Balance ✅

1. **Click "Wallet"** in bottom navigation

2. **You should see**:
   - Promo Coins: ~100-500
   - Branded Coins: ~200-1000
   - ReZ Coins: ~300-2000
   - Cash Balance: ~500-5000
   - Total Balance: ~1000-8000

3. **Click "Transaction History"**
   - ✅ See 50 transactions for this user

---

### Test 3: Browse Products & Add to Cart ✅

1. **Click "Home"** → **"Explore"**

2. **Click "Grocery"** category

3. **Click any product**
   - ✅ Product details loaded
   - ✅ Images showing
   - ✅ Price displaying
   - ✅ Add to Cart button

4. **Click "Add to Cart"**
   - ✅ Cart badge updates (1 item)

5. **Click cart icon**
   - ✅ Cart shows selected product
   - ✅ Total calculated

---

### Test 4: Complete Order Checkout ✅

1. **In cart, click "Checkout"**

2. **Delivery address auto-filled** (from user profile)

3. **Payment method**: Select "Wallet"

4. **Review order**:
   - Subtotal: ₹500
   - Tax: ₹25
   - Delivery: ₹30
   - **Total: ₹555**

5. **Click "Place Order"**

6. **MAGIC HAPPENS** (in 500ms):
   - ✅ Order created in database
   - ✅ Wallet debited atomically
   - ✅ Coins used in priority order (Promo → Branded → ReZ)
   - ✅ Order status set to "created"
   - ✅ Event published to Kafka
   - ✅ Merchant notified

7. **You see**:
   - ✅ Order confirmation screen
   - ✅ Order ID: `order-user-00001-001`
   - ✅ Wallet breakdown:
     ```
     Promo Coins Used: 100
     Branded Coins Used: 150
     ReZ Coins Used: 305
     Cash Used: 0
     Total: 555
     ```

8. **Click "View Order"**
   - ✅ Order tracking page
   - ✅ Real-time status updates

---

### Test 5: Merchant Dashboard ✅

1. **Open new browser tab**: `http://localhost:3001/merchant/login`

2. **Login as merchant**:
   - Phone: `+91-9876510001`
   - OTP: (check backend console)

3. **Merchant Dashboard loads**:
   - ✅ Today's orders: 10
   - ✅ Revenue: ₹5,500
   - ✅ Pending orders: 3

4. **Click "Orders"**
   - ✅ See all orders including the one you just created
   - ✅ Order status: "created"

5. **Click order → "Confirm Order"**
   - ✅ Status changes to "confirmed"
   - ✅ User receives notification
   - ✅ Event published

---

### Test 6: Admin Panel ✅

1. **Open new tab**: `http://localhost:3001/admin/login`

2. **Login as admin**:
   - Phone: `+91-9876520001`
   - OTP: (check backend console)

3. **Admin Dashboard loads**:
   - ✅ Total users: 100
   - ✅ Total merchants: 50
   - ✅ Orders today: 50
   - ✅ Revenue: ₹55,000

4. **Click "Users"**
   - ✅ See all 100 users
   - ✅ Search working
   - ✅ Filters working

5. **Click "Wallet Transactions"**
   - ✅ See all 5,000+ transactions
   - ✅ Real-time updates

---

## 🎉 Congratulations! You're Done!

**In 30 minutes you now have:**

✅ **Backend API** - All endpoints working
✅ **Database** - 6,000+ test records
✅ **Frontend** - All screens functional
✅ **Authentication** - OTP login working
✅ **Wallet** - Debit/credit working
✅ **Orders** - End-to-end flow working
✅ **Merchant Tools** - POS, inventory, orders
✅ **Admin Panel** - Full control center
✅ **Events** - Real-time updates

---

## 📚 What's Next?

### Option 1: Start Building Features

**Create a new screen in 2 minutes:**

```typescript
// frontend/src/pages/MyCampaigns.tsx
import { ListScreen } from '@/templates/ListScreen';
import { CampaignCard } from '@/components/cards';

export const MyCampaignsScreen = () => (
  <ListScreen
    endpoint="/api/campaigns"
    title="My Campaigns"
    searchPlaceholder="Search campaigns..."
    itemCard={CampaignCard}
  />
);
```

**Add route:**
```typescript
// frontend/src/routes/index.tsx
import { MyCampaignsScreen } from '@/pages/MyCampaigns';

// Add to routes:
{ path: '/campaigns', component: MyCampaignsScreen }
```

**Done!** New screen is live.

---

### Option 2: Explore API Documentation

1. **Open**: `http://localhost:3000/api-docs`
2. **See**: All 50+ API endpoints with examples
3. **Test**: Try any endpoint directly from browser

---

### Option 3: Review Architecture

1. **Read**: [REFERENCE_IMPLEMENTATION_PLAN.md](../REFERENCE_IMPLEMENTATION_PLAN.md)
2. **Understand**: How order flow works end-to-end
3. **Learn**: Best practices for extending the platform

---

### Option 4: Run Tests

```bash
cd backend
npm test

# You should see:
# ✅ 120 tests passed
# ✅ SDK enforcement tests
# ✅ Wallet safety tests
# ✅ Order state machine tests
# ✅ Event publishing tests
```

---

## 🔧 Common Issues & Solutions

### Issue 1: Port 3000 Already in Use

**Solution:**
```bash
# Change backend port
# Edit backend/.env:
PORT=3001

# Update frontend/.env:
REACT_APP_API_BASE_URL=http://localhost:3001
```

---

### Issue 2: Database Connection Failed

**Solution:**
```bash
# Start PostgreSQL
brew services start postgresql@15  # macOS
sudo service postgresql start      # Linux

# Verify PostgreSQL is running
psql -U postgres -c "SELECT version();"
```

---

### Issue 3: Redis Connection Failed

**Solution:**
```bash
# Start Redis
brew services start redis  # macOS
sudo service redis start   # Linux

# Verify Redis is running
redis-cli ping  # Should return "PONG"
```

---

### Issue 4: OTP Not Received

**Solution:**
In development mode, OTP is NOT sent via SMS. It's logged to backend console.

**Check backend terminal for:**
```
[OTP] +91-9876500001: 123456
```

Use `123456` as your OTP.

To enable real SMS, configure Twilio in `.env`:
```bash
TWILIO_ACCOUNT_SID=your_real_sid
TWILIO_AUTH_TOKEN=your_real_token
TWILIO_PHONE_NUMBER=your_real_number
```

---

## 📖 Documentation Reference

### Complete Documentation Suite

| Document | Purpose | Size |
|----------|---------|------|
| **[00_START_HERE.md](../00_START_HERE.md)** | Master documentation index | 15 KB |
| **[REFERENCE_IMPLEMENTATION_PLAN.md](../REFERENCE_IMPLEMENTATION_PLAN.md)** | Gold standard flow with code examples | 45 KB |
| **[ARCHITECTURE_TEST_CASES.md](../ARCHITECTURE_TEST_CASES.md)** | System-level contract tests | 38 KB |
| **[01_DATABASE_SEEDERS.md](./01_DATABASE_SEEDERS.md)** | Database seeder scripts | 35 KB |
| **[02_SDK_PACKAGES.md](./02_SDK_PACKAGES.md)** | SDK package implementation | 40 KB |
| **[03_API_BOILERPLATE.md](./03_API_BOILERPLATE.md)** | Complete backend boilerplate | 50 KB |
| **[04_FRONTEND_COMPONENT_TEMPLATES.md](./04_FRONTEND_COMPONENT_TEMPLATES.md)** | React component templates | 28 KB |

---

## 🎯 Developer Productivity Checklist

After completing this quick start, you should be able to:

- [ ] Clone repo and install dependencies (5 min)
- [ ] Setup environment variables (3 min)
- [ ] Create and seed database (5 min)
- [ ] Start backend server (2 min)
- [ ] Start frontend app (2 min)
- [ ] Test user login flow (2 min)
- [ ] Test order creation flow (5 min)
- [ ] Test merchant dashboard (3 min)
- [ ] Test admin panel (3 min)

**Total: 30 minutes**

---

## 💡 Pro Tips

### Tip 1: Use VS Code Extensions

Install these for best experience:
- **ES7+ React/Redux/React-Native snippets** - Code snippets
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **Prettier** - Code formatting
- **ESLint** - Linting
- **REST Client** - Test APIs from VS Code

### Tip 2: Use Postman Collection

Import the Postman collection:
```bash
backend/postman/RTMN_API_Collection.json
```

All 50+ endpoints with example requests.

### Tip 3: Enable Hot Reload

Both frontend and backend have hot reload enabled. Just save files and see changes instantly.

### Tip 4: Use React DevTools

Install React DevTools browser extension for debugging React components.

### Tip 5: Use Redux DevTools

Install Redux DevTools for state management debugging.

---

## 🚨 Important Notes

### ⚠️ Development Mode Only

This quick start is for **development only**. For production:

1. **Change all secrets** in `.env`
2. **Enable real Twilio** for OTP
3. **Setup real payment gateway**
4. **Enable SSL/HTTPS**
5. **Setup proper Kafka cluster**
6. **Configure production database**
7. **Enable monitoring** (Sentry, LogRocket)
8. **Setup CI/CD pipeline**

### ⚠️ Test Data

All seeded data is **test data**. Do NOT use in production.

Test user credentials:
- Phone: `+91-98765XXXXX`
- Password: `Test@1234`
- OTP: `123456` (in dev mode)

### ⚠️ SDK Enforcement

In production, **ALL apps MUST use SDKs**. Direct API calls are rejected.

Test this by trying to call API directly:
```bash
curl http://localhost:3000/api/wallet/user-00001/balance

# Response:
{
  "error": "SDK_REQUIRED",
  "message": "This endpoint requires SDK usage"
}
```

---

## 🎓 Learning Path

**Recommended learning order:**

1. ✅ Complete this quick start (30 min)
2. Read [REFERENCE_IMPLEMENTATION_PLAN.md](../REFERENCE_IMPLEMENTATION_PLAN.md) (20 min)
3. Read [ARCHITECTURE_TEST_CASES.md](../ARCHITECTURE_TEST_CASES.md) (15 min)
4. Study [02_SDK_PACKAGES.md](./02_SDK_PACKAGES.md) (20 min)
5. Review [03_API_BOILERPLATE.md](./03_API_BOILERPLATE.md) (25 min)
6. Explore [04_FRONTEND_COMPONENT_TEMPLATES.md](./04_FRONTEND_COMPONENT_TEMPLATES.md) (20 min)
7. Read architecture docs in `/1_ARCHITECTURE/` folder (2 hours)

**Total time: ~4 hours to become fully productive**

---

## 🤝 Getting Help

If you get stuck:

1. **Check documentation**: Most answers are in the docs
2. **Search Slack**: `#dev-help` channel
3. **Ask teammates**: Someone has probably faced this before
4. **Check GitHub Issues**: Known issues are tracked
5. **Create new issue**: If it's a new bug

---

## ✅ You're Ready!

You now have a fully functional development environment.

**Happy coding! 🚀**

---

**Generated with Claude Code** | **Last Updated**: 2026-01-04
