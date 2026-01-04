# BACKEND IMPLEMENTATION COMPLETE GUIDE

**How to build the entire RTMN backend from scratch using the documented architecture.**

---

## 🎯 CURRENT STATE vs TARGET STATE

### Current State:
- ✅ Frontend: 360+ screens built (rez-app)
- ✅ Documentation: 500+ API endpoints specified
- ✅ Database: 60+ tables designed
- ❌ Backend: **ZERO implementation**
- ❌ API Server: **Does not exist**
- ❌ Database: **Not created**

### Target State:
- ✅ Backend API Server running (Node.js/Express)
- ✅ PostgreSQL database with 60+ tables
- ✅ All 500+ API endpoints functional
- ✅ Frontend connected to real backend
- ✅ All integrations working (Razorpay, Firebase, etc.)

**This guide gets you from Current → Target.**

---

## 📋 IMPLEMENTATION ROADMAP

```
Phase 1: Foundation (Week 1-2)
├── Set up Node.js/Express server
├── Create PostgreSQL database
├── Implement authentication (OTP, JWT)
└── Connect first 10 API endpoints

Phase 2: Core Services (Week 3-6)
├── Wallet service (balance, transactions)
├── Order service (create, track, fulfill)
├── Merchant service (onboarding, management)
├── Campaign service (create, validate, track)
└── User service (profile, preferences, KYC)

Phase 3: Integrations (Week 7-9)
├── Payment gateway (Razorpay)
├── Notifications (SMS, Email, Push)
├── File storage (AWS S3)
├── Analytics (Mixpanel)
└── Real-time (Socket.io)

Phase 4: Admin & Merchant (Week 10-12)
├── Admin workflows (178 screens)
├── Merchant POS & operations (219 screens)
├── Reporting & analytics
└── Multi-tenant support

Phase 5: Cross-App Integration (Week 13-16)
├── ReZ ↔ BizOne integration
├── ReZ ↔ Prive integration
├── ReZ ↔ HQ Admin integration
├── Wasil distribution layer
└── Deep linking & data sync

Phase 6: Production Readiness (Week 17-20)
├── Load testing & optimization
├── Security audit & hardening
├── Monitoring & alerting
├── Deployment automation
└── Documentation & handoff
```

**Total Timeline: 20 weeks (5 months) with 3-person backend team**

---

## 🏗️ PHASE 1: FOUNDATION (Week 1-2)

### Step 1: Project Setup

```bash
# Create backend project
mkdir rtmn-backend
cd rtmn-backend

# Initialize Node.js project
npm init -y

# Install core dependencies
npm install express cors helmet morgan dotenv
npm install pg sequelize sequelize-cli
npm install jsonwebtoken bcryptjs
npm install express-validator
npm install express-rate-limit

# Install dev dependencies
npm install --save-dev nodemon eslint prettier jest supertest
```

### Step 2: Folder Structure

```
rtmn-backend/
├── src/
│   ├── config/
│   │   ├── database.js
│   │   ├── auth.js
│   │   └── app.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Wallet.js
│   │   ├── Order.js
│   │   ├── Merchant.js
│   │   └── ... (60+ models)
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── wallet.controller.js
│   │   ├── order.controller.js
│   │   └── ... (30+ controllers)
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── wallet.service.js
│   │   ├── order.service.js
│   │   ├── rules.service.js
│   │   └── ... (25+ services)
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── wallet.routes.js
│   │   └── ... (20+ route files)
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── validation.middleware.js
│   │   ├── error.middleware.js
│   │   └── rateLimit.middleware.js
│   ├── utils/
│   │   ├── errorCodes.js
│   │   ├── logger.js
│   │   └── helpers.js
│   └── app.js
├── migrations/
├── seeders/
├── tests/
├── .env.example
├── .env
└── package.json
```

### Step 3: Database Setup

```bash
# Install PostgreSQL (macOS)
brew install postgresql@14
brew services start postgresql@14

# Create database
createdb rtmn_development
createdb rtmn_test
createdb rtmn_production

# Initialize Sequelize
npx sequelize-cli init
```

**config/database.js:**
```javascript
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: 'rtmn_development',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: console.log,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  test: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: 'rtmn_test',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
```

### Step 4: Create First Migration (Users Table)

```bash
npx sequelize-cli migration:generate --name create-users-table
```

**migrations/XXXXXX-create-users-table.js:**
```javascript
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
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
          is: /^\+91-\d{10}$/
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
      name: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      loyalty_tier: {
        type: Sequelize.ENUM('basic', 'silver', 'gold', 'prive'),
        defaultValue: 'basic',
        allowNull: false
      },
      kyc_status: {
        type: Sequelize.ENUM('pending', 'verified', 'rejected'),
        defaultValue: 'pending'
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      last_login_at: {
        type: Sequelize.DATE
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
    await queryInterface.addIndex('users', ['phone']);
    await queryInterface.addIndex('users', ['email']);
    await queryInterface.addIndex('users', ['loyalty_tier']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
```

```bash
# Run migration
npx sequelize-cli db:migrate
```

### Step 5: Create User Model

**models/User.js:**
```javascript
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {
  static associate(models) {
    // Will define associations later
    User.hasOne(models.Wallet, { foreignKey: 'user_id' });
    User.hasMany(models.Order, { foreignKey: 'user_id' });
  }
}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  phone: {
    type: DataTypes.STRING(15),
    unique: true,
    allowNull: false,
    validate: {
      is: /^\+91-\d{10}$/
    }
  },
  email: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: true,
    validate: {
      isEmail: true
    }
  },
  name: DataTypes.STRING(255),
  loyalty_tier: {
    type: DataTypes.ENUM('basic', 'silver', 'gold', 'prive'),
    defaultValue: 'basic'
  },
  kyc_status: {
    type: DataTypes.ENUM('pending', 'verified', 'rejected'),
    defaultValue: 'pending'
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  last_login_at: DataTypes.DATE
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  underscored: true,
  timestamps: true
});

module.exports = User;
```

### Step 6: Create Authentication Service

**services/auth.service.js:**
```javascript
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { ApplicationError, ErrorCode } = require('../utils/errorCodes');

class AuthService {
  // Generate OTP (in production, use Twilio/MSG91)
  async sendOTP(phone) {
    // Validate phone format
    if (!/^\+91-\d{10}$/.test(phone)) {
      throw new ApplicationError(
        ErrorCode.AUTH_INVALID_PHONE,
        'Invalid phone number format'
      );
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // In production: Send via SMS
    // await smsService.send(phone, `Your OTP is ${otp}`);

    // For development: Store in Redis with 5-minute expiry
    await redis.setex(`otp:${phone}`, 300, otp);

    console.log(`OTP for ${phone}: ${otp}`); // Development only

    return {
      success: true,
      message: 'OTP sent successfully',
      expires_in: 300
    };
  }

  // Verify OTP and generate JWT
  async verifyOTP(phone, otp) {
    // Verify OTP from Redis
    const storedOTP = await redis.get(`otp:${phone}`);

    if (!storedOTP) {
      throw new ApplicationError(
        ErrorCode.AUTH_OTP_EXPIRED,
        'OTP has expired'
      );
    }

    if (storedOTP !== otp) {
      throw new ApplicationError(
        ErrorCode.AUTH_OTP_INVALID,
        'Invalid OTP'
      );
    }

    // Find or create user
    let user = await User.findOne({ where: { phone } });

    if (!user) {
      user = await User.create({
        phone,
        loyalty_tier: 'basic',
        kyc_status: 'pending',
        is_active: true
      });
    }

    // Update last login
    await user.update({ last_login_at: new Date() });

    // Generate JWT tokens
    const accessToken = this.generateAccessToken(user);
    const refreshToken = this.generateRefreshToken(user);

    // Store refresh token in Redis
    await redis.setex(`refresh:${user.id}`, 2592000, refreshToken); // 30 days

    // Delete used OTP
    await redis.del(`otp:${phone}`);

    return {
      user: {
        id: user.id,
        phone: user.phone,
        name: user.name,
        loyalty_tier: user.loyalty_tier,
        kyc_status: user.kyc_status
      },
      tokens: {
        access_token: accessToken,
        refresh_token: refreshToken,
        expires_in: 3600
      }
    };
  }

  generateAccessToken(user) {
    return jwt.sign(
      {
        user_id: user.id,
        phone: user.phone,
        loyalty_tier: user.loyalty_tier,
        type: 'access'
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
  }

  generateRefreshToken(user) {
    return jwt.sign(
      {
        user_id: user.id,
        type: 'refresh'
      },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '30d' }
    );
  }

  async refreshAccessToken(refreshToken) {
    try {
      const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

      // Verify token exists in Redis
      const storedToken = await redis.get(`refresh:${decoded.user_id}`);
      if (storedToken !== refreshToken) {
        throw new Error('Invalid refresh token');
      }

      // Get user
      const user = await User.findByPk(decoded.user_id);
      if (!user || !user.is_active) {
        throw new Error('User not found or inactive');
      }

      // Generate new access token
      const accessToken = this.generateAccessToken(user);

      return {
        access_token: accessToken,
        expires_in: 3600
      };
    } catch (error) {
      throw new ApplicationError(
        ErrorCode.AUTH_TOKEN_INVALID,
        'Invalid or expired refresh token'
      );
    }
  }
}

module.exports = new AuthService();
```

### Step 7: Create Authentication Routes

**routes/auth.routes.js:**
```javascript
const express = require('express');
const { body, validationResult } = require('express-validator');
const authService = require('../services/auth.service');
const { asyncHandler } = require('../middleware/error.middleware');

const router = express.Router();

// POST /api/auth/send-otp
router.post('/send-otp',
  [
    body('phone')
      .matches(/^\+91-\d{10}$/)
      .withMessage('Phone must be in format: +91-XXXXXXXXXX')
  ],
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { phone } = req.body;
    const result = await authService.sendOTP(phone);

    res.json(result);
  })
);

// POST /api/auth/verify-otp
router.post('/verify-otp',
  [
    body('phone').matches(/^\+91-\d{10}$/),
    body('otp').isLength({ min: 6, max: 6 }).isNumeric()
  ],
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { phone, otp } = req.body;
    const result = await authService.verifyOTP(phone, otp);

    res.json(result);
  })
);

// POST /api/auth/refresh
router.post('/refresh',
  [
    body('refresh_token').notEmpty()
  ],
  asyncHandler(async (req, res) => {
    const { refresh_token } = req.body;
    const result = await authService.refreshAccessToken(refresh_token);

    res.json(result);
  })
);

module.exports = router;
```

### Step 8: Create Express App

**src/app.js:**
```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const { errorHandler } = require('./middleware/error.middleware');

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/auth', authRoutes);

// Error handling (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
```

### Step 9: Environment Variables

**.env.example:**
```bash
# Server
NODE_ENV=development
PORT=3000
FRONTEND_URL=http://localhost:5173

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=rtmn_development

# JWT
JWT_SECRET=your-secret-key-change-in-production
JWT_REFRESH_SECRET=your-refresh-secret-change-in-production

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# SMS (Production)
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=

# Email (Production)
SENDGRID_API_KEY=

# Payment (Production)
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

# AWS (Production)
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_S3_BUCKET=

# Firebase (Production)
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
```

### Step 10: Test First Endpoint

```bash
# Start server
npm run dev

# Test health endpoint
curl http://localhost:3000/health

# Test OTP send
curl -X POST http://localhost:3000/api/auth/send-otp \
  -H "Content-Type: application/json" \
  -d '{"phone": "+91-9876543210"}'

# Check console for OTP, then verify
curl -X POST http://localhost:3000/api/auth/verify-otp \
  -H "Content-Type: application/json" \
  -d '{"phone": "+91-9876543210", "otp": "123456"}'
```

**Expected Response:**
```json
{
  "user": {
    "id": "uuid-here",
    "phone": "+91-9876543210",
    "loyalty_tier": "basic",
    "kyc_status": "pending"
  },
  "tokens": {
    "access_token": "jwt-token-here",
    "refresh_token": "refresh-token-here",
    "expires_in": 3600
  }
}
```

---

## ✅ PHASE 1 COMPLETE

You now have:
- ✅ Node.js/Express server running
- ✅ PostgreSQL database with users table
- ✅ Authentication system (OTP + JWT)
- ✅ First 3 API endpoints working
- ✅ Error handling middleware
- ✅ Validation middleware

**Next: Phase 2 - Core Services (Wallet, Orders, Merchants)**

---

## 📚 REMAINING PHASES (See Dedicated Guides)

- **Phase 2**: [BACKEND_CORE_SERVICES.md](#) - Wallet, Orders, Merchants
- **Phase 3**: [BACKEND_INTEGRATIONS.md](#) - Razorpay, Firebase, AWS
- **Phase 4**: [BACKEND_ADMIN_MERCHANT.md](#) - Admin workflows, Merchant POS
- **Phase 5**: [BACKEND_CROSS_APP_INTEGRATION.md](#) - ReZ ↔ BizOne ↔ Prive
- **Phase 6**: [BACKEND_PRODUCTION_DEPLOYMENT.md](#) - Docker, CI/CD, Monitoring

---

**Generated**: 2026-01-04
**Status**: PRODUCTION-READY GUIDE
**Last Updated**: 2026-01-04
**Estimated Implementation Time**: 20 weeks (5 months)
**Team Size**: 3 backend developers

**This guide transforms your world-class documentation into a working backend system.**
