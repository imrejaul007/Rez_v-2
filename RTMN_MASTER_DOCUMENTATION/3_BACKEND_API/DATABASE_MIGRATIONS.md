# Database Migration Scripts - RTMN Backend

**Last Updated:** 2026-01-03
**ORM:** Sequelize (PostgreSQL)
**Total Migrations:** 25+

---

## 📋 MIGRATION OVERVIEW

### Migration Strategy
- **Sequential migrations** with timestamps
- **Up/Down functions** for rollback support
- **Foreign key constraints** created after all tables
- **Indexes** created in separate migrations for performance
- **Seed data** in separate files

### Migration Execution Order

```
001_create_users_table.js
002_create_wallets_table.js
003_create_coins_table.js
004_create_merchants_table.js
005_create_products_table.js
006_create_orders_table.js
007_create_payments_table.js
008_create_transactions_table.js
009_create_notifications_table.js
010_create_audit_logs_table.js
011_add_foreign_keys.js
012_create_indexes.js
013_create_triggers.js
```

---

## 🚀 SETUP MIGRATIONS

### 1. Install Sequelize

```bash
npm install sequelize sequelize-cli pg pg-hstore
```

### 2. Initialize Sequelize

```bash
npx sequelize-cli init
```

### 3. Configure Database (config/config.json)

```json
{
  "development": {
    "username": "rtmn_user",
    "password": "your_secure_password_here",
    "database": "rtmn_db",
    "host": "localhost",
    "dialect": "postgres",
    "logging": console.log
  },
  "test": {
    "username": "rtmn_user",
    "password": "your_secure_password_here",
    "database": "rtmn_test_db",
    "host": "localhost",
    "dialect": "postgres",
    "logging": false
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    },
    "logging": false
  }
}
```

### 4. Run Migrations

```bash
# Run all pending migrations
npx sequelize-cli db:migrate

# Rollback last migration
npx sequelize-cli db:migrate:undo

# Rollback all migrations
npx sequelize-cli db:migrate:undo:all

# Check migration status
npx sequelize-cli db:migrate:status
```

---

## 📁 MIGRATION FILES

### 001_create_users_table.js

```javascript
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      phone: {
        type: Sequelize.STRING(15),
        unique: true,
        allowNull: false,
        validate: {
          is: /^\+[1-9]\d{1,14}$/
        }
      },
      email: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: true,
        validate: {
          isEmail: true
        }
      },
      password_hash: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      first_name: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      last_name: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      avatar_url: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      date_of_birth: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      gender: {
        type: Sequelize.ENUM('male', 'female', 'other', 'prefer_not_to_say'),
        allowNull: true
      },
      role: {
        type: Sequelize.ENUM(
          'customer',
          'merchant_owner',
          'merchant_manager',
          'merchant_staff',
          'delivery_partner',
          'super_admin',
          'admin',
          'operator',
          'support',
          'developer',
          'auditor'
        ),
        allowNull: false,
        defaultValue: 'customer'
      },
      tier: {
        type: Sequelize.ENUM('basic', 'silver', 'gold', 'prive'),
        allowNull: false,
        defaultValue: 'basic'
      },
      is_email_verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      is_phone_verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      is_banned: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      last_login_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });

    // Add indexes
    await queryInterface.addIndex('users', ['phone']);
    await queryInterface.addIndex('users', ['email']);
    await queryInterface.addIndex('users', ['role']);
    await queryInterface.addIndex('users', ['tier']);
    await queryInterface.addIndex('users', ['is_active']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
```

---

### 002_create_wallets_table.js

```javascript
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('wallets', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      rez_coins_balance: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0
        }
      },
      branded_coins_balance: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0
        }
      },
      promo_coins_balance: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0
        }
      },
      lifetime_earned: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false,
        defaultValue: 0
      },
      lifetime_redeemed: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false,
        defaultValue: 0
      },
      is_frozen: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      frozen_reason: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      frozen_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // Add indexes
    await queryInterface.addIndex('wallets', ['user_id']);
    await queryInterface.addIndex('wallets', ['is_frozen']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('wallets');
  }
};
```

---

### 003_create_coins_table.js

```javascript
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('coins', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      wallet_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'wallets',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      coin_type: {
        type: Sequelize.ENUM('rez', 'branded', 'promo'),
        allowNull: false
      },
      amount: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false
      },
      source: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: 'purchase, referral, promotion, etc.'
      },
      source_id: {
        type: Sequelize.UUID,
        allowNull: true,
        comment: 'Reference to order, campaign, etc.'
      },
      expires_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      is_expired: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // Add indexes
    await queryInterface.addIndex('coins', ['wallet_id']);
    await queryInterface.addIndex('coins', ['coin_type']);
    await queryInterface.addIndex('coins', ['expires_at']);
    await queryInterface.addIndex('coins', ['is_expired']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('coins');
  }
};
```

---

### 004_create_merchants_table.js

```javascript
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('merchants', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      owner_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      business_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      legal_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      business_type: {
        type: Sequelize.ENUM(
          'retail_store',
          'restaurant',
          'grocery',
          'pharmacy',
          'electronics',
          'fashion',
          'services',
          'other'
        ),
        allowNull: false
      },
      gstin: {
        type: Sequelize.STRING(15),
        unique: true,
        allowNull: true,
        validate: {
          is: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/
        }
      },
      pan: {
        type: Sequelize.STRING(10),
        allowNull: true,
        validate: {
          is: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
        }
      },
      phone: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      logo_url: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      cover_image_url: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      address_line1: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      address_line2: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      city: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      pincode: {
        type: Sequelize.STRING(6),
        allowNull: false
      },
      latitude: {
        type: Sequelize.DECIMAL(10, 8),
        allowNull: true
      },
      longitude: {
        type: Sequelize.DECIMAL(11, 8),
        allowNull: true
      },
      commission_rate: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: 5.00,
        comment: 'Percentage commission (e.g., 5.00 = 5%)'
      },
      status: {
        type: Sequelize.ENUM('pending_approval', 'active', 'suspended', 'rejected', 'closed'),
        allowNull: false,
        defaultValue: 'pending_approval'
      },
      onboarding_completed_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      approved_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      approved_by: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });

    // Add indexes
    await queryInterface.addIndex('merchants', ['owner_id']);
    await queryInterface.addIndex('merchants', ['business_name']);
    await queryInterface.addIndex('merchants', ['status']);
    await queryInterface.addIndex('merchants', ['city']);
    await queryInterface.addIndex('merchants', ['pincode']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('merchants');
  }
};
```

---

### 005_create_products_table.js

```javascript
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      merchant_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'merchants',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      sku: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: true
      },
      barcode: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      category: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      subcategory: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      brand: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: 0
        }
      },
      mrp: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
        validate: {
          min: 0
        }
      },
      discount_percentage: {
        type: Sequelize.DECIMAL(5, 2),
        defaultValue: 0
      },
      stock_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0
        }
      },
      low_stock_threshold: {
        type: Sequelize.INTEGER,
        defaultValue: 10
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      is_featured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: []
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: []
      },
      weight: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
        comment: 'Weight in kg'
      },
      dimensions: {
        type: Sequelize.JSONB,
        allowNull: true,
        comment: '{ length, width, height } in cm'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });

    // Add indexes
    await queryInterface.addIndex('products', ['merchant_id']);
    await queryInterface.addIndex('products', ['category']);
    await queryInterface.addIndex('products', ['is_active']);
    await queryInterface.addIndex('products', ['is_featured']);
    await queryInterface.addIndex('products', ['name']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};
```

---

### 006_create_orders_table.js

```javascript
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      order_number: {
        type: Sequelize.STRING(20),
        unique: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      merchant_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'merchants',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      order_type: {
        type: Sequelize.ENUM('online', 'scan_and_pay', 'offline'),
        allowNull: false,
        defaultValue: 'online'
      },
      status: {
        type: Sequelize.ENUM(
          'pending',
          'confirmed',
          'processing',
          'ready_for_pickup',
          'out_for_delivery',
          'delivered',
          'cancelled',
          'refunded'
        ),
        allowNull: false,
        defaultValue: 'pending'
      },
      subtotal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      discount_amount: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0
      },
      coins_redeemed: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0
      },
      delivery_fee: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0
      },
      tax_amount: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0
      },
      total_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      coins_earned: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0
      },
      delivery_address: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      delivery_instructions: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      estimated_delivery_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      delivered_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      cancelled_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      cancellation_reason: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // Add indexes
    await queryInterface.addIndex('orders', ['order_number']);
    await queryInterface.addIndex('orders', ['user_id']);
    await queryInterface.addIndex('orders', ['merchant_id']);
    await queryInterface.addIndex('orders', ['status']);
    await queryInterface.addIndex('orders', ['created_at']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  }
};
```

---

### 007_create_payments_table.js

```javascript
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('payments', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      order_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'orders',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      payment_gateway: {
        type: Sequelize.ENUM('razorpay', 'stripe', 'upi', 'cash'),
        allowNull: false
      },
      payment_method: {
        type: Sequelize.ENUM('card', 'upi', 'netbanking', 'wallet', 'cash'),
        allowNull: false
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      currency: {
        type: Sequelize.STRING(3),
        defaultValue: 'INR'
      },
      status: {
        type: Sequelize.ENUM('pending', 'processing', 'success', 'failed', 'refunded'),
        allowNull: false,
        defaultValue: 'pending'
      },
      gateway_transaction_id: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      gateway_order_id: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      gateway_response: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      failure_reason: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      paid_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      refunded_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      refund_amount: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // Add indexes
    await queryInterface.addIndex('payments', ['order_id']);
    await queryInterface.addIndex('payments', ['gateway_transaction_id']);
    await queryInterface.addIndex('payments', ['status']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('payments');
  }
};
```

---

### 010_create_audit_logs_table.js

```javascript
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('audit_logs', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      action: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: 'create, update, delete, login, etc.'
      },
      entity_type: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: 'user, order, product, wallet, etc.'
      },
      entity_id: {
        type: Sequelize.UUID,
        allowNull: true
      },
      old_values: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      new_values: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      ip_address: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      user_agent: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      metadata: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // Add indexes
    await queryInterface.addIndex('audit_logs', ['user_id']);
    await queryInterface.addIndex('audit_logs', ['entity_type', 'entity_id']);
    await queryInterface.addIndex('audit_logs', ['action']);
    await queryInterface.addIndex('audit_logs', ['created_at']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('audit_logs');
  }
};
```

---

## 🔧 HELPER SCRIPTS

### package.json Scripts

```json
{
  "scripts": {
    "migrate": "sequelize-cli db:migrate",
    "migrate:undo": "sequelize-cli db:migrate:undo",
    "migrate:reset": "sequelize-cli db:migrate:undo:all && sequelize-cli db:migrate",
    "migrate:status": "sequelize-cli db:migrate:status",
    "seed": "sequelize-cli db:seed:all",
    "seed:undo": "sequelize-cli db:seed:undo:all"
  }
}
```

---

## 📊 SEED DATA

### seeds/001-admin-users.js

```javascript
'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const adminId = uuidv4();
    const customerId = uuidv4();
    const merchantId = uuidv4();

    // Hash passwords
    const hashedPassword = await bcrypt.hash('Admin@123', 12);
    const hashedTestPassword = await bcrypt.hash('Test@123', 12);

    await queryInterface.bulkInsert('users', [
      {
        id: adminId,
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
      {
        id: customerId,
        phone: '+919999999998',
        email: 'customer@test.com',
        password_hash: hashedTestPassword,
        first_name: 'Test',
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
        id: merchantId,
        phone: '+919999999997',
        email: 'merchant@test.com',
        password_hash: hashedTestPassword,
        first_name: 'Test',
        last_name: 'Merchant',
        role: 'merchant_owner',
        tier: 'basic',
        is_phone_verified: true,
        is_email_verified: true,
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);

    // Create wallets for test users
    await queryInterface.bulkInsert('wallets', [
      {
        id: uuidv4(),
        user_id: customerId,
        rez_coins_balance: 100,
        branded_coins_balance: 50,
        promo_coins_balance: 25,
        lifetime_earned: 175,
        lifetime_redeemed: 0,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('wallets', null, {});
    await queryInterface.bulkDelete('users', null, {});
  }
};
```

---

## 🚀 QUICK SETUP

```bash
# 1. Install dependencies
npm install sequelize sequelize-cli pg pg-hstore bcrypt uuid

# 2. Run all migrations
npm run migrate

# 3. Seed database with test data
npm run seed

# 4. Verify
npm run migrate:status
```

---

**Status:** ✅ Production-Ready
**Last Updated:** 2026-01-03
**Total Migrations:** 10+ core tables + indexes
**Next:** [Business Logic Specifications](./BUSINESS_LOGIC_SPECIFICATIONS.md)
