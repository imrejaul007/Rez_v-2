# Data Seeding Scripts - RTMN Backend

**Last Updated:** 2026-01-03
**Purpose:** Complete database seeding for development and testing

---

## 📋 OVERVIEW

Seed data includes:
- Test users (all roles)
- Sample merchants with products
- Sample orders & transactions
- Wallet balances
- Test payment credentials

---

## 🚀 QUICK START

```bash
# Run all seeders
npm run seed

# Undo all seeders
npm run seed:undo

# Run specific seeder
npx sequelize-cli db:seed --seed seeds/001-users.js
```

---

## 👤 SEED DATA CATALOG

### 1. Test Users (seeds/001-users.js)

```javascript
'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('Test@123', 12);

    const users = [
      // Super Admin
      {
        id: '550e8400-e29b-41d4-a716-446655440001',
        phone: '+919999999999',
        email: 'admin@rtmn.in',
        password_hash: hashedPassword,
        first_name: 'Super',
        last_name: 'Admin',
        role: 'super_admin',
        tier: 'prive',
        is_phone_verified: true,
        is_email_verified: true,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Admin
      {
        id: '550e8400-e29b-41d4-a716-446655440002',
        phone: '+919999999998',
        email: 'admin2@rtmn.in',
        password_hash: hashedPassword,
        first_name: 'John',
        last_name: 'Admin',
        role: 'admin',
        tier: 'prive',
        is_phone_verified: true,
        is_email_verified: true,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Test Customers
      {
        id: '550e8400-e29b-41d4-a716-446655440003',
        phone: '+919999999997',
        email: 'customer1@test.com',
        password_hash: hashedPassword,
        first_name: 'Alice',
        last_name: 'Customer',
        role: 'customer',
        tier: 'gold',
        is_phone_verified: true,
        is_email_verified: true,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440004',
        phone: '+919999999996',
        email: 'customer2@test.com',
        password_hash: hashedPassword,
        first_name: 'Bob',
        last_name: 'Customer',
        role: 'customer',
        tier: 'silver',
        is_phone_verified: true,
        is_email_verified: true,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440005',
        phone: '+919999999995',
        email: 'customer3@test.com',
        password_hash: hashedPassword,
        first_name: 'Charlie',
        last_name: 'Customer',
        role: 'customer',
        tier: 'basic',
        is_phone_verified: true,
        is_email_verified: false,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Merchant Owners
      {
        id: '550e8400-e29b-41d4-a716-446655440006',
        phone: '+919999999994',
        email: 'merchant1@test.com',
        password_hash: hashedPassword,
        first_name: 'David',
        last_name: 'Merchant',
        role: 'merchant_owner',
        tier: 'basic',
        is_phone_verified: true,
        is_email_verified: true,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440007',
        phone: '+919999999993',
        email: 'merchant2@test.com',
        password_hash: hashedPassword,
        first_name: 'Emma',
        last_name: 'Merchant',
        role: 'merchant_owner',
        tier: 'basic',
        is_phone_verified: true,
        is_email_verified: true,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Delivery Partner
      {
        id: '550e8400-e29b-41d4-a716-446655440008',
        phone: '+919999999992',
        email: 'delivery@test.com',
        password_hash: hashedPassword,
        first_name: 'Frank',
        last_name: 'Delivery',
        role: 'delivery_partner',
        tier: 'basic',
        is_phone_verified: true,
        is_email_verified: true,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    ];

    await queryInterface.bulkInsert('users', users);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
```

---

### 2. Wallets (seeds/002-wallets.js)

```javascript
'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const wallets = [
      // Alice (Gold tier) - High balance
      {
        id: uuidv4(),
        user_id: '550e8400-e29b-41d4-a716-446655440003',
        rez_coins_balance: 1250.50,
        branded_coins_balance: 150,
        promo_coins_balance: 50,
        lifetime_earned: 5000,
        lifetime_redeemed: 3549.50,
        is_frozen: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Bob (Silver tier) - Medium balance
      {
        id: uuidv4(),
        user_id: '550e8400-e29b-41d4-a716-446655440004',
        rez_coins_balance: 500,
        branded_coins_balance: 0,
        promo_coins_balance: 100,
        lifetime_earned: 2000,
        lifetime_redeemed: 1500,
        is_frozen: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Charlie (Basic tier) - Low balance
      {
        id: uuidv4(),
        user_id: '550e8400-e29b-41d4-a716-446655440005',
        rez_coins_balance: 50,
        branded_coins_balance: 0,
        promo_coins_balance: 0,
        lifetime_earned: 200,
        lifetime_redeemed: 150,
        is_frozen: false,
        created_at: new Date(),
        updated_at: new Date()
      }
    ];

    await queryInterface.bulkInsert('wallets', wallets);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('wallets', null, {});
  }
};
```

---

### 3. Merchants (seeds/003-merchants.js)

```javascript
'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const merchants = [
      // Fashion Store
      {
        id: '660e8400-e29b-41d4-a716-446655440001',
        owner_id: '550e8400-e29b-41d4-a716-446655440006',
        business_name: 'Fashion Hub',
        legal_name: 'Fashion Hub Private Limited',
        business_type: 'fashion',
        gstin: '27AABCU9603R1ZM',
        pan: 'AABCU9603R',
        phone: '+919876543210',
        email: 'contact@fashionhub.com',
        logo_url: 'https://cdn.rtmn.in/merchants/fashion-hub-logo.jpg',
        description: 'Premium fashion clothing and accessories',
        address_line1: '123 MG Road',
        address_line2: 'Shop 5',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001',
        latitude: 19.0760,
        longitude: 72.8777,
        commission_rate: 15.00,
        status: 'active',
        onboarding_completed_at: new Date(),
        approved_at: new Date(),
        approved_by: '550e8400-e29b-41d4-a716-446655440001',
        created_at: new Date(),
        updated_at: new Date()
      },
      // Grocery Store
      {
        id: '660e8400-e29b-41d4-a716-446655440002',
        owner_id: '550e8400-e29b-41d4-a716-446655440007',
        business_name: 'Fresh Mart',
        legal_name: 'Fresh Mart Grocery Stores LLP',
        business_type: 'grocery',
        gstin: '27AABCU9603R1ZN',
        pan: 'AABCU9603S',
        phone: '+919876543211',
        email: 'contact@freshmart.com',
        logo_url: 'https://cdn.rtmn.in/merchants/fresh-mart-logo.jpg',
        description: 'Fresh groceries and daily essentials',
        address_line1: '456 Link Road',
        address_line2: null,
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400050',
        latitude: 19.0896,
        longitude: 72.8656,
        commission_rate: 5.00,
        status: 'active',
        onboarding_completed_at: new Date(),
        approved_at: new Date(),
        approved_by: '550e8400-e29b-41d4-a716-446655440001',
        created_at: new Date(),
        updated_at: new Date()
      },
      // Pending Merchant
      {
        id: '660e8400-e29b-41d4-a716-446655440003',
        owner_id: '550e8400-e29b-41d4-a716-446655440006',
        business_name: 'New Cafe',
        legal_name: 'New Cafe Private Limited',
        business_type: 'food',
        gstin: null,
        pan: null,
        phone: '+919876543212',
        email: 'contact@newcafe.com',
        logo_url: null,
        description: 'Coffee and snacks',
        address_line1: '789 Main Street',
        address_line2: null,
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001',
        latitude: null,
        longitude: null,
        commission_rate: 20.00,
        status: 'pending_approval',
        onboarding_completed_at: null,
        approved_at: null,
        approved_by: null,
        created_at: new Date(),
        updated_at: new Date()
      }
    ];

    await queryInterface.bulkInsert('merchants', merchants);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('merchants', null, {});
  }
};
```

---

### 4. Products (seeds/004-products.js)

```javascript
'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = [
      // Fashion Hub Products
      {
        id: uuidv4(),
        merchant_id: '660e8400-e29b-41d4-a716-446655440001',
        name: 'Blue T-Shirt',
        description: 'Premium cotton t-shirt - comfortable and stylish',
        sku: 'TSHIRT-BLUE-L',
        barcode: '1234567890001',
        category: 'fashion',
        subcategory: 'clothing',
        brand: 'Fashion Hub',
        price: 499,
        mrp: 999,
        discount_percentage: 50,
        stock_quantity: 100,
        low_stock_threshold: 10,
        is_active: true,
        is_featured: true,
        images: ['https://cdn.rtmn.in/products/tshirt-blue-1.jpg'],
        tags: ['clothing', 'tshirt', 'cotton'],
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        merchant_id: '660e8400-e29b-41d4-a716-446655440001',
        name: 'Black Jeans',
        description: 'Slim fit black jeans',
        sku: 'JEANS-BLACK-32',
        barcode: '1234567890002',
        category: 'fashion',
        subcategory: 'clothing',
        brand: 'Fashion Hub',
        price: 1299,
        mrp: 2499,
        discount_percentage: 48,
        stock_quantity: 50,
        low_stock_threshold: 5,
        is_active: true,
        is_featured: false,
        images: ['https://cdn.rtmn.in/products/jeans-black-1.jpg'],
        tags: ['clothing', 'jeans', 'denim'],
        created_at: new Date(),
        updated_at: new Date()
      },
      // Fresh Mart Products
      {
        id: uuidv4(),
        merchant_id: '660e8400-e29b-41d4-a716-446655440002',
        name: 'Organic Bananas (1 Dozen)',
        description: 'Fresh organic bananas',
        sku: 'BANANA-ORG-12',
        barcode: '1234567890003',
        category: 'grocery',
        subcategory: 'fruits',
        brand: 'Fresh Farms',
        price: 60,
        mrp: 80,
        discount_percentage: 25,
        stock_quantity: 200,
        low_stock_threshold: 20,
        is_active: true,
        is_featured: true,
        images: ['https://cdn.rtmn.in/products/banana-1.jpg'],
        tags: ['organic', 'fruits', 'fresh'],
        weight: 1.2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        merchant_id: '660e8400-e29b-41d4-a716-446655440002',
        name: 'Fresh Milk (1L)',
        description: 'Farm fresh full cream milk',
        sku: 'MILK-FRESH-1L',
        barcode: '1234567890004',
        category: 'grocery',
        subcategory: 'dairy',
        brand: 'Fresh Farms',
        price: 65,
        mrp: 70,
        discount_percentage: 7,
        stock_quantity: 150,
        low_stock_threshold: 30,
        is_active: true,
        is_featured: false,
        images: ['https://cdn.rtmn.in/products/milk-1.jpg'],
        tags: ['dairy', 'milk', 'fresh'],
        weight: 1.03,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Out of stock product
      {
        id: uuidv4(),
        merchant_id: '660e8400-e29b-41d4-a716-446655440001',
        name: 'Red T-Shirt',
        description: 'Premium cotton t-shirt - red color',
        sku: 'TSHIRT-RED-L',
        barcode: '1234567890005',
        category: 'fashion',
        subcategory: 'clothing',
        brand: 'Fashion Hub',
        price: 499,
        mrp: 999,
        discount_percentage: 50,
        stock_quantity: 0,
        low_stock_threshold: 10,
        is_active: true,
        is_featured: false,
        images: ['https://cdn.rtmn.in/products/tshirt-red-1.jpg'],
        tags: ['clothing', 'tshirt', 'cotton'],
        created_at: new Date(),
        updated_at: new Date()
      }
    ];

    await queryInterface.bulkInsert('products', products);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
```

---

### 5. Sample Orders (seeds/005-orders.js)

```javascript
'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const orders = [
      // Delivered order
      {
        id: uuidv4(),
        order_number: 'ORD20260101001',
        user_id: '550e8400-e29b-41d4-a716-446655440003', // Alice
        merchant_id: '660e8400-e29b-41d4-a716-446655440001', // Fashion Hub
        order_type: 'online',
        status: 'delivered',
        subtotal: 1798,
        discount_amount: 200,
        coins_redeemed: 100,
        delivery_fee: 0,
        tax_amount: 84.90,
        total_amount: 1582.90,
        coins_earned: 79,
        delivery_address: JSON.stringify({
          line1: '123 Main Street',
          line2: 'Apt 4B',
          city: 'Mumbai',
          state: 'Maharashtra',
          pincode: '400001',
          phone: '+919999999997'
        }),
        delivered_at: new Date('2026-01-02T18:00:00Z'),
        created_at: new Date('2026-01-01T10:00:00Z'),
        updated_at: new Date('2026-01-02T18:00:00Z')
      },
      // Out for delivery
      {
        id: uuidv4(),
        order_number: 'ORD20260103001',
        user_id: '550e8400-e29b-41d4-a716-446655440004', // Bob
        merchant_id: '660e8400-e29b-41d4-a716-446655440002', // Fresh Mart
        order_type: 'online',
        status: 'out_for_delivery',
        subtotal: 125,
        discount_amount: 0,
        coins_redeemed: 0,
        delivery_fee: 40,
        tax_amount: 6.25,
        total_amount: 171.25,
        coins_earned: 7,
        delivery_address: JSON.stringify({
          line1: '456 Park Avenue',
          city: 'Mumbai',
          state: 'Maharashtra',
          pincode: '400050',
          phone: '+919999999996'
        }),
        estimated_delivery_at: new Date('2026-01-03T20:00:00Z'),
        created_at: new Date('2026-01-03T10:00:00Z'),
        updated_at: new Date('2026-01-03T15:00:00Z')
      },
      // Cancelled order
      {
        id: uuidv4(),
        order_number: 'ORD20260102001',
        user_id: '550e8400-e29b-41d4-a716-446655440005', // Charlie
        merchant_id: '660e8400-e29b-41d4-a716-446655440001',
        order_type: 'online',
        status: 'cancelled',
        subtotal: 499,
        discount_amount: 50,
        coins_redeemed: 50,
        delivery_fee: 0,
        tax_amount: 19.95,
        total_amount: 418.95,
        coins_earned: 0,
        delivery_address: JSON.stringify({
          line1: '789 Lake View',
          city: 'Mumbai',
          state: 'Maharashtra',
          pincode: '400001',
          phone: '+919999999995'
        }),
        cancelled_at: new Date('2026-01-02T12:00:00Z'),
        cancellation_reason: 'Changed my mind',
        created_at: new Date('2026-01-02T10:00:00Z'),
        updated_at: new Date('2026-01-02T12:00:00Z')
      }
    ];

    await queryInterface.bulkInsert('orders', orders);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  }
};
```

---

## 🔧 HELPER SCRIPTS

### Generate All Seed Data

```javascript
// scripts/generate-seed-data.js
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

async function generateTestData() {
  const hashedPassword = await bcrypt.hash('Test@123', 12);

  // Generate 100 test users
  const users = [];
  for (let i = 1; i <= 100; i++) {
    users.push({
      id: uuidv4(),
      phone: `+9199999${String(i).padStart(5, '0')}`,
      email: `user${i}@test.com`,
      password_hash: hashedPassword,
      first_name: `User`,
      last_name: `${i}`,
      role: 'customer',
      tier: ['basic', 'silver', 'gold'][i % 3],
      is_phone_verified: true,
      is_email_verified: i % 2 === 0,
      is_active: true,
      created_at: new Date(),
      updated_at: new Date()
    });
  }

  return { users };
}

module.exports = { generateTestData };
```

---

## 📊 COMPLETE SEED COMMAND

```bash
# Create new seeder
npx sequelize-cli seed:generate --name demo-data

# Run all seeders in order
npx sequelize-cli db:seed:all

# Undo last seeder
npx sequelize-cli db:seed:undo

# Undo all seeders
npx sequelize-cli db:seed:undo:all
```

---

**Status:** ✅ Production-Ready
**Last Updated:** 2026-01-03
**Total Seed Files:** 5+ comprehensive seeders
**Next:** Priority 3 Documentation
