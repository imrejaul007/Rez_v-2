# Database Seeders - Complete Test Data

**Purpose**: Pre-populated database with realistic test data so developers can start building immediately without manual data entry.

**What Gets Created**:
- ✅ 100 test users (across all loyalty tiers)
- ✅ 50 merchants (across 10 sister companies)
- ✅ 500 products (with realistic pricing, images, categories)
- ✅ 1000 orders (in various states of the order lifecycle)
- ✅ 5000 wallet transactions (showing complete coin flows)
- ✅ 20 active campaigns (with different rules and rewards)
- ✅ 100 reviews and ratings
- ✅ Admin users with different permission levels

---

## 1. Setup Instructions

### Installation
```bash
cd backend
npm install faker @faker-js/faker
```

### Run All Seeders
```bash
# Clear database and seed everything
npm run seed:fresh

# Add more data to existing database
npm run seed
```

### Run Individual Seeders
```bash
npm run seed:users
npm run seed:merchants
npm run seed:products
npm run seed:orders
npm run seed:wallets
```

---

## 2. Complete Seeder Scripts

### 2.1 Master Seeder (`seeders/00-master-seeder.js`)

```javascript
const { sequelize } = require('../models');
const seedCompanies = require('./01-seed-companies');
const seedUsers = require('./02-seed-users');
const seedMerchants = require('./03-seed-merchants');
const seedProducts = require('./04-seed-products');
const seedOrders = require('./05-seed-orders');
const seedWallets = require('./06-seed-wallets');
const seedCampaigns = require('./07-seed-campaigns');
const seedReviews = require('./08-seed-reviews');
const seedAdmins = require('./09-seed-admins');

async function runAllSeeders() {
  console.log('🌱 Starting database seeding...\n');

  try {
    // Start transaction
    const transaction = await sequelize.transaction();

    try {
      console.log('1️⃣  Seeding companies...');
      const companies = await seedCompanies(transaction);
      console.log(`   ✅ Created ${companies.length} companies\n`);

      console.log('2️⃣  Seeding users...');
      const users = await seedUsers(transaction, companies);
      console.log(`   ✅ Created ${users.length} users\n`);

      console.log('3️⃣  Seeding merchants...');
      const merchants = await seedMerchants(transaction, companies);
      console.log(`   ✅ Created ${merchants.length} merchants\n`);

      console.log('4️⃣  Seeding products...');
      const products = await seedProducts(transaction, merchants);
      console.log(`   ✅ Created ${products.length} products\n`);

      console.log('5️⃣  Seeding wallets...');
      const wallets = await seedWallets(transaction, users);
      console.log(`   ✅ Created ${wallets.length} wallet transactions\n`);

      console.log('6️⃣  Seeding campaigns...');
      const campaigns = await seedCampaigns(transaction, companies);
      console.log(`   ✅ Created ${campaigns.length} campaigns\n`);

      console.log('7️⃣  Seeding orders...');
      const orders = await seedOrders(transaction, users, merchants, products);
      console.log(`   ✅ Created ${orders.length} orders\n`);

      console.log('8️⃣  Seeding reviews...');
      const reviews = await seedReviews(transaction, users, orders);
      console.log(`   ✅ Created ${reviews.length} reviews\n`);

      console.log('9️⃣  Seeding admins...');
      const admins = await seedAdmins(transaction, companies);
      console.log(`   ✅ Created ${admins.length} admin users\n`);

      // Commit transaction
      await transaction.commit();

      console.log('✅ Database seeding completed successfully!\n');
      console.log('📊 Summary:');
      console.log(`   Companies: ${companies.length}`);
      console.log(`   Users: ${users.length}`);
      console.log(`   Merchants: ${merchants.length}`);
      console.log(`   Products: ${products.length}`);
      console.log(`   Orders: ${orders.length}`);
      console.log(`   Wallet Transactions: ${wallets.length}`);
      console.log(`   Campaigns: ${campaigns.length}`);
      console.log(`   Reviews: ${reviews.length}`);
      console.log(`   Admins: ${admins.length}\n`);

    } catch (error) {
      await transaction.rollback();
      throw error;
    }

  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  runAllSeeders().then(() => process.exit(0));
}

module.exports = runAllSeeders;
```

---

### 2.2 Company Seeder (`seeders/01-seed-companies.js`)

```javascript
const { faker } = require('@faker-js/faker');
const { Company } = require('../models');

const RTMN_COMPANIES = [
  {
    id: 'rtmn-digital',
    name: 'RTMN Digital',
    type: 'parent',
    business_model: 'multi-tenant-platform',
    status: 'active',
    founded_date: '2020-01-01',
    website: 'https://rtmn.digital',
    contact_email: 'contact@rtmn.digital',
    contact_phone: '+91-98765-43210'
  },
  {
    id: 'rez-app',
    name: 'ReZ',
    type: 'sister',
    business_model: 'food-delivery',
    status: 'active',
    parent_company_id: 'rtmn-digital',
    founded_date: '2021-03-15',
    website: 'https://rez.app',
    contact_email: 'support@rez.app',
    contact_phone: '+91-98765-00001'
  },
  {
    id: 'bizone',
    name: 'BizOne',
    type: 'sister',
    business_model: 'b2b-marketplace',
    status: 'active',
    parent_company_id: 'rtmn-digital',
    founded_date: '2021-06-01',
    website: 'https://bizone.com',
    contact_email: 'support@bizone.com',
    contact_phone: '+91-98765-00002'
  },
  {
    id: 'adzy',
    name: 'Adzy',
    type: 'sister',
    business_model: 'ad-network',
    status: 'active',
    parent_company_id: 'rtmn-digital',
    founded_date: '2021-08-10',
    website: 'https://adzy.app',
    contact_email: 'support@adzy.app',
    contact_phone: '+91-98765-00003'
  },
  {
    id: 'sozy',
    name: 'Sozy',
    type: 'sister',
    business_model: 'social-commerce',
    status: 'active',
    parent_company_id: 'rtmn-digital',
    founded_date: '2022-01-20',
    website: 'https://sozy.app',
    contact_email: 'support@sozy.app',
    contact_phone: '+91-98765-00004'
  },
  {
    id: 'quezy',
    name: 'Quezy',
    type: 'sister',
    business_model: 'gamification',
    status: 'active',
    parent_company_id: 'rtmn-digital',
    founded_date: '2022-04-01',
    website: 'https://quezy.app',
    contact_email: 'support@quezy.app',
    contact_phone: '+91-98765-00005'
  },
  {
    id: 'rabtul',
    name: 'Rabtul',
    type: 'tech-provider',
    business_model: 'saas-platform',
    status: 'active',
    parent_company_id: 'rtmn-digital',
    founded_date: '2020-01-01',
    website: 'https://rabtul.com',
    contact_email: 'tech@rabtul.com',
    contact_phone: '+91-98765-99999'
  }
];

async function seedCompanies(transaction) {
  const companies = await Company.bulkCreate(RTMN_COMPANIES, {
    transaction,
    updateOnDuplicate: ['name', 'status', 'website']
  });

  return companies;
}

module.exports = seedCompanies;
```

---

### 2.3 User Seeder (`seeders/02-seed-users.js`)

```javascript
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');
const { User, UserProfile, UserWallet } = require('../models');

const LOYALTY_TIERS = ['basic', 'silver', 'gold', 'prive'];

async function seedUsers(transaction, companies) {
  const users = [];
  const profiles = [];
  const wallets = [];

  // Create 100 users
  for (let i = 0; i < 100; i++) {
    const userId = `user-${String(i + 1).padStart(5, '0')}`;
    const tier = LOYALTY_TIERS[Math.floor(Math.random() * LOYALTY_TIERS.length)];
    const phone = `+91-${faker.string.numeric(10)}`;

    // User record
    users.push({
      id: userId,
      phone: phone,
      email: faker.internet.email().toLowerCase(),
      password_hash: await bcrypt.hash('Test@1234', 10),
      status: 'active',
      email_verified: true,
      phone_verified: true,
      loyalty_tier: tier,
      joined_via_app: faker.helpers.arrayElement(['rez-app', 'bizone', 'adzy', 'sozy']),
      created_at: faker.date.past({ years: 2 }),
      updated_at: new Date()
    });

    // User profile
    profiles.push({
      user_id: userId,
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      date_of_birth: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
      gender: faker.helpers.arrayElement(['male', 'female', 'other']),
      avatar_url: faker.image.avatar(),
      bio: faker.lorem.sentence(),
      city: faker.location.city(),
      state: faker.location.state(),
      country: 'India',
      pincode: faker.location.zipCode('######')
    });

    // Initial wallet balances
    const promoCoins = faker.number.int({ min: 0, max: 500 });
    const brandedCoins = faker.number.int({ min: 0, max: 1000 });
    const rezCoins = faker.number.int({ min: 0, max: 2000 });
    const cashBalance = faker.number.int({ min: 0, max: 5000 });

    wallets.push({
      user_id: userId,
      promo_coins: promoCoins,
      branded_coins: brandedCoins,
      rez_coins: rezCoins,
      cash_balance: cashBalance,
      total_balance: promoCoins + brandedCoins + rezCoins + cashBalance,
      lifetime_earned: faker.number.int({ min: 1000, max: 50000 }),
      lifetime_spent: faker.number.int({ min: 500, max: 30000 }),
      status: 'active'
    });
  }

  // Insert all users
  await User.bulkCreate(users, { transaction });
  await UserProfile.bulkCreate(profiles, { transaction });
  await UserWallet.bulkCreate(wallets, { transaction });

  return users;
}

module.exports = seedUsers;
```

---

### 2.4 Merchant Seeder (`seeders/03-seed-merchants.js`)

```javascript
const { faker } = require('@faker-js/faker');
const { Merchant, MerchantProfile, MerchantBankDetails } = require('../models');

const CATEGORIES = [
  'restaurant', 'cafe', 'grocery', 'pharmacy', 'electronics',
  'fashion', 'home-decor', 'books', 'sports', 'beauty'
];

async function seedMerchants(transaction, companies) {
  const merchants = [];
  const profiles = [];
  const bankDetails = [];

  const appCompanies = companies.filter(c => c.type === 'sister');

  // Create 50 merchants
  for (let i = 0; i < 50; i++) {
    const merchantId = `merchant-${String(i + 1).padStart(5, '0')}`;
    const company = faker.helpers.arrayElement(appCompanies);
    const category = faker.helpers.arrayElement(CATEGORIES);

    // Merchant record
    merchants.push({
      id: merchantId,
      company_id: company.id,
      business_name: faker.company.name(),
      brand_name: faker.company.buzzNoun(),
      category: category,
      subcategory: `${category}-${faker.number.int({ min: 1, max: 5 })}`,
      status: 'active',
      is_verified: true,
      is_featured: faker.datatype.boolean(0.2),
      rating: faker.number.float({ min: 3.5, max: 5, precision: 0.1 }),
      total_reviews: faker.number.int({ min: 10, max: 1000 }),
      created_at: faker.date.past({ years: 2 }),
      updated_at: new Date()
    });

    // Merchant profile
    profiles.push({
      merchant_id: merchantId,
      description: faker.lorem.paragraph(),
      logo_url: faker.image.urlLoremFlickr({ category: 'business' }),
      cover_image_url: faker.image.urlLoremFlickr({ category: 'abstract' }),
      phone: `+91-${faker.string.numeric(10)}`,
      email: faker.internet.email().toLowerCase(),
      website: faker.internet.url(),
      address_line1: faker.location.streetAddress(),
      address_line2: faker.location.secondaryAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      pincode: faker.location.zipCode('######'),
      country: 'India',
      latitude: faker.location.latitude({ min: 8, max: 35 }),
      longitude: faker.location.longitude({ min: 68, max: 97 }),
      opening_hours: {
        monday: { open: '09:00', close: '21:00' },
        tuesday: { open: '09:00', close: '21:00' },
        wednesday: { open: '09:00', close: '21:00' },
        thursday: { open: '09:00', close: '21:00' },
        friday: { open: '09:00', close: '21:00' },
        saturday: { open: '09:00', close: '22:00' },
        sunday: { open: '10:00', close: '22:00' }
      }
    });

    // Bank details
    bankDetails.push({
      merchant_id: merchantId,
      account_holder_name: faker.person.fullName(),
      account_number: faker.string.numeric(14),
      ifsc_code: `${faker.string.alpha(4).toUpperCase()}0${faker.string.numeric(6)}`,
      bank_name: faker.helpers.arrayElement(['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak Mahindra']),
      branch_name: faker.location.city(),
      account_type: faker.helpers.arrayElement(['savings', 'current']),
      is_verified: true
    });
  }

  // Insert all merchants
  await Merchant.bulkCreate(merchants, { transaction });
  await MerchantProfile.bulkCreate(profiles, { transaction });
  await MerchantBankDetails.bulkCreate(bankDetails, { transaction });

  return merchants;
}

module.exports = seedMerchants;
```

---

### 2.5 Product Seeder (`seeders/04-seed-products.js`)

```javascript
const { faker } = require('@faker-js/faker');
const { Product, ProductImage, ProductInventory } = require('../models');

async function seedProducts(transaction, merchants) {
  const products = [];
  const images = [];
  const inventory = [];

  // Create 10 products per merchant (500 total)
  for (const merchant of merchants) {
    for (let i = 0; i < 10; i++) {
      const productId = `product-${merchant.id}-${String(i + 1).padStart(3, '0')}`;
      const price = faker.number.int({ min: 50, max: 5000 });
      const discount = faker.number.int({ min: 0, max: 30 });
      const finalPrice = Math.round(price * (1 - discount / 100));

      // Product record
      products.push({
        id: productId,
        merchant_id: merchant.id,
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        category: merchant.category,
        subcategory: `${merchant.category}-sub-${faker.number.int({ min: 1, max: 5 })}`,
        price: price,
        discount_percentage: discount,
        final_price: finalPrice,
        currency: 'INR',
        sku: faker.string.alphanumeric(10).toUpperCase(),
        is_active: true,
        is_featured: faker.datatype.boolean(0.15),
        rating: faker.number.float({ min: 3.5, max: 5, precision: 0.1 }),
        total_reviews: faker.number.int({ min: 5, max: 500 }),
        tags: faker.helpers.arrayElements(['popular', 'new', 'trending', 'sale', 'bestseller'], 2),
        created_at: faker.date.past({ years: 1 }),
        updated_at: new Date()
      });

      // Product images (2-4 per product)
      const imageCount = faker.number.int({ min: 2, max: 4 });
      for (let j = 0; j < imageCount; j++) {
        images.push({
          product_id: productId,
          image_url: faker.image.urlLoremFlickr({ category: 'product' }),
          alt_text: faker.commerce.productName(),
          is_primary: j === 0,
          display_order: j + 1
        });
      }

      // Inventory
      inventory.push({
        product_id: productId,
        merchant_id: merchant.id,
        stock_quantity: faker.number.int({ min: 0, max: 500 }),
        reserved_quantity: faker.number.int({ min: 0, max: 50 }),
        reorder_level: 20,
        max_order_quantity: 10,
        is_in_stock: true,
        last_restocked_at: faker.date.recent({ days: 30 })
      });
    }
  }

  // Insert all products
  await Product.bulkCreate(products, { transaction });
  await ProductImage.bulkCreate(images, { transaction });
  await ProductInventory.bulkCreate(inventory, { transaction });

  return products;
}

module.exports = seedProducts;
```

---

### 2.6 Wallet Transaction Seeder (`seeders/06-seed-wallets.js`)

```javascript
const { faker } = require('@faker-js/faker');
const { WalletTransaction } = require('../models');

const TRANSACTION_TYPES = [
  'credit_signup_bonus',
  'credit_referral_reward',
  'credit_cashback',
  'credit_campaign_reward',
  'debit_order_payment',
  'debit_transfer',
  'refund_order_cancelled'
];

const COIN_TYPES = ['promo_coins', 'branded_coins', 'rez_coins', 'cash'];

async function seedWallets(transaction, users) {
  const transactions = [];

  // Create 50 transactions per user (5000 total)
  for (const user of users) {
    for (let i = 0; i < 50; i++) {
      const txnId = `txn-${user.id}-${String(i + 1).padStart(4, '0')}`;
      const txnType = faker.helpers.arrayElement(TRANSACTION_TYPES);
      const coinType = faker.helpers.arrayElement(COIN_TYPES);
      const amount = faker.number.int({ min: 10, max: 500 });

      transactions.push({
        id: txnId,
        user_id: user.id,
        transaction_type: txnType,
        coin_type: coinType,
        amount: amount,
        balance_before: faker.number.int({ min: 100, max: 5000 }),
        balance_after: faker.number.int({ min: 100, max: 5000 }),
        status: 'completed',
        metadata: {
          source: faker.helpers.arrayElement(['rez-app', 'bizone', 'adzy']),
          campaign_id: txnType.includes('campaign') ? `campaign-${faker.number.int({ min: 1, max: 20 })}` : null,
          order_id: txnType.includes('order') ? `order-${faker.string.alphanumeric(10)}` : null
        },
        created_at: faker.date.past({ years: 1 }),
        updated_at: new Date()
      });
    }
  }

  await WalletTransaction.bulkCreate(transactions, { transaction });

  return transactions;
}

module.exports = seedWallets;
```

---

### 2.7 Campaign Seeder (`seeders/07-seed-campaigns.js`)

```javascript
const { faker } = require('@faker-js/faker');
const { Campaign } = require('../models');

async function seedCampaigns(transaction, companies) {
  const campaigns = [];
  const appCompanies = companies.filter(c => c.type === 'sister');

  // Create 20 campaigns
  for (let i = 0; i < 20; i++) {
    const campaignId = `campaign-${String(i + 1).padStart(5, '0')}`;
    const company = faker.helpers.arrayElement(appCompanies);
    const startDate = faker.date.past({ years: 1 });
    const endDate = faker.date.future({ years: 1, refDate: startDate });

    campaigns.push({
      id: campaignId,
      company_id: company.id,
      name: `${faker.commerce.productAdjective()} ${faker.commerce.product()} Campaign`,
      description: faker.lorem.paragraph(),
      type: faker.helpers.arrayElement(['cashback', 'discount', 'bonus', 'referral']),
      status: 'active',
      start_date: startDate,
      end_date: endDate,
      budget: faker.number.int({ min: 10000, max: 1000000 }),
      spent: faker.number.int({ min: 1000, max: 500000 }),
      rules: {
        min_order_value: faker.number.int({ min: 100, max: 500 }),
        max_reward: faker.number.int({ min: 100, max: 1000 }),
        reward_percentage: faker.number.int({ min: 5, max: 50 }),
        eligible_categories: faker.helpers.arrayElements(['restaurant', 'grocery', 'electronics'], 2),
        max_uses_per_user: faker.number.int({ min: 1, max: 10 })
      },
      created_at: startDate,
      updated_at: new Date()
    });
  }

  await Campaign.bulkCreate(campaigns, { transaction });

  return campaigns;
}

module.exports = seedCampaigns;
```

---

### 2.8 Order Seeder (`seeders/05-seed-orders.js`)

```javascript
const { faker } = require('@faker-js/faker');
const { Order, OrderItem, OrderStatusHistory } = require('../models');

const ORDER_STATES = [
  'initiated', 'created', 'paid', 'confirmed', 'preparing',
  'ready', 'shipped', 'delivered', 'completed'
];

async function seedOrders(transaction, users, merchants, products) {
  const orders = [];
  const orderItems = [];
  const statusHistory = [];

  // Create 10 orders per user (1000 total)
  for (const user of users.slice(0, 100)) {
    for (let i = 0; i < 10; i++) {
      const orderId = `order-${user.id}-${String(i + 1).padStart(3, '0')}`;
      const merchant = faker.helpers.arrayElement(merchants);
      const orderState = faker.helpers.arrayElement(ORDER_STATES);

      // Select 2-5 random products
      const selectedProducts = faker.helpers.arrayElements(
        products.filter(p => p.merchant_id === merchant.id),
        faker.number.int({ min: 2, max: 5 })
      );

      let subtotal = 0;

      // Create order items
      for (const product of selectedProducts) {
        const quantity = faker.number.int({ min: 1, max: 3 });
        const itemTotal = product.final_price * quantity;
        subtotal += itemTotal;

        orderItems.push({
          order_id: orderId,
          product_id: product.id,
          quantity: quantity,
          unit_price: product.final_price,
          total_price: itemTotal,
          discount_applied: product.discount_percentage || 0
        });
      }

      const taxAmount = Math.round(subtotal * 0.05); // 5% tax
      const deliveryFee = faker.number.int({ min: 0, max: 50 });
      const totalAmount = subtotal + taxAmount + deliveryFee;

      const promoCoins = faker.number.int({ min: 0, max: 100 });
      const brandedCoins = faker.number.int({ min: 0, max: 200 });
      const rezCoins = faker.number.int({ min: 0, max: 300 });
      const cashPaid = totalAmount - promoCoins - brandedCoins - rezCoins;

      // Order record
      orders.push({
        id: orderId,
        user_id: user.id,
        merchant_id: merchant.id,
        status: orderState,
        subtotal: subtotal,
        tax_amount: taxAmount,
        delivery_fee: deliveryFee,
        total_amount: totalAmount,
        promo_coins_used: promoCoins,
        branded_coins_used: brandedCoins,
        rez_coins_used: rezCoins,
        cash_paid: cashPaid,
        payment_method: faker.helpers.arrayElement(['wallet', 'razorpay', 'cod']),
        delivery_address: {
          line1: faker.location.streetAddress(),
          line2: faker.location.secondaryAddress(),
          city: faker.location.city(),
          state: faker.location.state(),
          pincode: faker.location.zipCode('######')
        },
        created_at: faker.date.past({ years: 1 }),
        updated_at: new Date()
      });

      // Status history (simulate state transitions)
      const stateIndex = ORDER_STATES.indexOf(orderState);
      for (let j = 0; j <= stateIndex; j++) {
        statusHistory.push({
          order_id: orderId,
          from_status: j === 0 ? null : ORDER_STATES[j - 1],
          to_status: ORDER_STATES[j],
          changed_by: j === 0 ? user.id : merchant.id,
          changed_at: faker.date.past({ years: 1 }),
          notes: `Order ${ORDER_STATES[j]}`
        });
      }
    }
  }

  await Order.bulkCreate(orders, { transaction });
  await OrderItem.bulkCreate(orderItems, { transaction });
  await OrderStatusHistory.bulkCreate(statusHistory, { transaction });

  return orders;
}

module.exports = seedOrders;
```

---

## 3. NPM Scripts Configuration

Add to `package.json`:

```json
{
  "scripts": {
    "seed": "node seeders/00-master-seeder.js",
    "seed:fresh": "npm run db:reset && npm run seed",
    "seed:users": "node seeders/02-seed-users.js",
    "seed:merchants": "node seeders/03-seed-merchants.js",
    "seed:products": "node seeders/04-seed-products.js",
    "seed:orders": "node seeders/05-seed-orders.js",
    "db:reset": "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate"
  }
}
```

---

## 4. Test Data Access

### Pre-configured Test Accounts

#### Test Users (Easy Login)
```javascript
// All test users have password: Test@1234

const TEST_USERS = {
  basic: { phone: '+91-9876500001', tier: 'basic' },
  silver: { phone: '+91-9876500025', tier: 'silver' },
  gold: { phone: '+91-9876500050', tier: 'gold' },
  prive: { phone: '+91-9876500075', tier: 'prive' }
};
```

#### Test Merchants
```javascript
const TEST_MERCHANTS = {
  restaurant: 'merchant-00001',
  cafe: 'merchant-00002',
  grocery: 'merchant-00003'
};
```

#### Test Products
```javascript
// Products are auto-generated with IDs like:
// product-merchant-00001-001
// product-merchant-00001-002
```

---

## 5. Developer Quick Start

```bash
# 1. Clone repo and install
git clone <repo-url>
cd backend
npm install

# 2. Setup environment
cp .env.example .env
# Edit .env with your database credentials

# 3. Run migrations
npm run db:migrate

# 4. Seed database
npm run seed

# 5. Start server
npm run dev

# 6. Test with seeded data
curl http://localhost:3000/api/users/user-00001
curl http://localhost:3000/api/merchants/merchant-00001
curl http://localhost:3000/api/products?merchant_id=merchant-00001
```

---

## 6. What Developers Get

✅ **Instant Development**: No manual data entry, start building features immediately
✅ **Realistic Data**: 6,000+ records with proper relationships
✅ **All States Covered**: Orders in every state, wallets with all coin types
✅ **Complete Relationships**: Users → Orders → Products → Merchants → Companies
✅ **Test Accounts**: Pre-configured logins for each loyalty tier
✅ **Reproducible**: Run `npm run seed:fresh` anytime to reset database

**Developer can start building in 5 minutes after cloning the repo.**
