# Environment Setup Guide - RTMN Backend

**Last Updated:** 2026-01-03
**Status:** Production-Ready Configuration

---

## 📋 PREREQUISITES

### Required Software
- **Node.js:** v18.x or higher
- **PostgreSQL:** v14.x or higher
- **Redis:** v7.x or higher
- **MongoDB:** v6.x or higher (for logs)
- **Elasticsearch:** v8.x or higher (for search)

### Development Tools
- **Git:** Latest version
- **Docker & Docker Compose:** For containerized development
- **Postman/Insomnia:** For API testing
- **PM2:** For process management (production)

---

## 🔧 ENVIRONMENT VARIABLES

### .env.example (Complete Template)

```bash
# ==============================================
# APPLICATION CONFIGURATION
# ==============================================
NODE_ENV=development
APP_NAME=RTMN_Backend
APP_PORT=3000
APP_HOST=localhost
APP_URL=http://localhost:3000

# Frontend URLs (for CORS)
CUSTOMER_APP_URL=http://localhost:3001
MERCHANT_APP_URL=http://localhost:3002
ADMIN_APP_URL=http://localhost:3003

# ==============================================
# DATABASE CONFIGURATION
# ==============================================

# PostgreSQL (Primary Database)
DATABASE_TYPE=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=rtmn_db
DATABASE_USER=rtmn_user
DATABASE_PASSWORD=your_secure_password_here
DATABASE_SSL=false
DATABASE_POOL_MIN=2
DATABASE_POOL_MAX=10
DATABASE_CONNECTION_TIMEOUT=30000

# Full connection string (alternative)
DATABASE_URL=postgresql://rtmn_user:your_secure_password_here@localhost:5432/rtmn_db

# Redis (Cache & Sessions)
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0
REDIS_URL=redis://localhost:6379

# MongoDB (Logs & Analytics)
MONGODB_URI=mongodb://localhost:27017/rtmn_logs
MONGODB_DB_NAME=rtmn_logs

# Elasticsearch (Search)
ELASTICSEARCH_NODE=http://localhost:9200
ELASTICSEARCH_USERNAME=elastic
ELASTICSEARCH_PASSWORD=your_elastic_password

# ==============================================
# AUTHENTICATION & SECURITY
# ==============================================

# JWT Tokens
JWT_SECRET=your-256-bit-secret-key-change-in-production
JWT_ACCESS_TOKEN_EXPIRY=15m
JWT_REFRESH_TOKEN_EXPIRY=7d
JWT_ISSUER=rtmn-auth-service
JWT_AUDIENCE=rtmn-apps

# OTP Configuration
OTP_LENGTH=6
OTP_EXPIRY_MINUTES=5
OTP_MAX_ATTEMPTS=3
OTP_RESEND_COOLDOWN_SECONDS=30

# Password Hashing
BCRYPT_ROUNDS=12

# API Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# CORS Configuration
CORS_ORIGINS=http://localhost:3001,http://localhost:3002,http://localhost:3003

# ==============================================
# PAYMENT GATEWAYS
# ==============================================

# Razorpay (Primary - India)
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
RAZORPAY_ENABLED=true

# Stripe (International)
STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxx
STRIPE_ENABLED=false

# UPI Configuration
UPI_MERCHANT_ID=merchant@paytm
UPI_MERCHANT_NAME=RTMN_Technologies

# Payment Settings
PAYMENT_CURRENCY=INR
PAYMENT_TIMEOUT_SECONDS=600
PAYMENT_RETRY_ATTEMPTS=3

# ==============================================
# SMS & MESSAGING
# ==============================================

# Twilio (Primary)
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=+1234567890
TWILIO_ENABLED=true

# Fallback SMS Provider (MSG91)
MSG91_AUTH_KEY=your_msg91_auth_key
MSG91_SENDER_ID=RTMNSMS
MSG91_ROUTE=4
MSG91_ENABLED=false

# SMS Templates
SMS_OTP_TEMPLATE=Your RTMN OTP is {otp}. Valid for {expiry} minutes. Do not share.
SMS_ORDER_CONFIRMED_TEMPLATE=Order #{orderId} confirmed! Track at {link}

# ==============================================
# EMAIL CONFIGURATION
# ==============================================

# SendGrid (Primary)
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=noreply@rtmn.in
SENDGRID_FROM_NAME=RTMN Team
SENDGRID_ENABLED=true

# SMTP (Fallback)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_ENABLED=false

# Email Templates
EMAIL_WELCOME_TEMPLATE_ID=d-xxxxxxxxxxxxxxxxxx
EMAIL_ORDER_CONFIRMATION_TEMPLATE_ID=d-yyyyyyyyyyyyyyyy
EMAIL_PASSWORD_RESET_TEMPLATE_ID=d-zzzzzzzzzzzzzzzz

# ==============================================
# PUSH NOTIFICATIONS
# ==============================================

# Firebase Cloud Messaging (FCM)
FCM_SERVER_KEY=AAAAxxxxxxxxxx:APA91bxxxxxxxxxxxxxxxxxxxxxxxxx
FCM_PROJECT_ID=rtmn-firebase-project
FCM_ENABLED=true

# Apple Push Notification Service (APNS)
APNS_KEY_ID=your_apns_key_id
APNS_TEAM_ID=your_team_id
APNS_BUNDLE_ID=com.rtmn.customerapp
APNS_KEY_PATH=./config/apns-key.p8
APNS_PRODUCTION=false

# ==============================================
# FILE STORAGE & CDN
# ==============================================

# AWS S3
AWS_ACCESS_KEY_ID=AKIAXXXXXXXXXXXXXXXXX
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=ap-south-1
AWS_S3_BUCKET=rtmn-prod-assets
AWS_CLOUDFRONT_DOMAIN=dxxxxxxxxx.cloudfront.net
AWS_S3_ENABLED=true

# Upload Limits
MAX_FILE_SIZE_MB=10
MAX_IMAGE_SIZE_MB=5
ALLOWED_IMAGE_TYPES=image/jpeg,image/png,image/webp
ALLOWED_DOCUMENT_TYPES=application/pdf,application/msword

# CDN Configuration
CDN_BASE_URL=https://dxxxxxxxxx.cloudfront.net
CDN_CACHE_TTL_SECONDS=86400

# ==============================================
# WEBSOCKET / REAL-TIME
# ==============================================

# Socket.IO
SOCKET_IO_ENABLED=true
SOCKET_IO_PATH=/socket.io
SOCKET_IO_PING_TIMEOUT=60000
SOCKET_IO_PING_INTERVAL=25000
SOCKET_IO_MAX_HTTP_BUFFER_SIZE=1e6

# ==============================================
# KAFKA / MESSAGE QUEUE
# ==============================================

# Apache Kafka (Event Streaming)
KAFKA_BROKERS=localhost:9092
KAFKA_CLIENT_ID=rtmn-backend
KAFKA_GROUP_ID=rtmn-consumer-group
KAFKA_ENABLED=false

# Kafka Topics
KAFKA_TOPIC_ORDERS=rtmn.orders
KAFKA_TOPIC_PAYMENTS=rtmn.payments
KAFKA_TOPIC_WALLET=rtmn.wallet
KAFKA_TOPIC_NOTIFICATIONS=rtmn.notifications

# ==============================================
# RABTUL SDK CONFIGURATION
# ==============================================

# Rabtul API
RABTUL_API_URL=http://localhost:4000
RABTUL_API_KEY=rabtul_api_key_xxxxxxxxxx
RABTUL_API_SECRET=rabtul_api_secret_xxxxxxxxxx

# Rabtul Services
RABTUL_AUTH_SERVICE_URL=http://localhost:4001
RABTUL_WALLET_SERVICE_URL=http://localhost:4002
RABTUL_IDENTITY_SERVICE_URL=http://localhost:4003
RABTUL_GOVERNANCE_SERVICE_URL=http://localhost:4004

# ==============================================
# LOGGING & MONITORING
# ==============================================

# Log Configuration
LOG_LEVEL=debug
LOG_FORMAT=json
LOG_MAX_FILES=30
LOG_MAX_SIZE=10m
LOG_DIRECTORY=./logs

# Sentry (Error Tracking)
SENTRY_DSN=https://xxxxxx@o123456.ingest.sentry.io/123456
SENTRY_ENVIRONMENT=development
SENTRY_ENABLED=false

# New Relic (APM)
NEW_RELIC_LICENSE_KEY=your_newrelic_license_key
NEW_RELIC_APP_NAME=RTMN_Backend
NEW_RELIC_ENABLED=false

# ==============================================
# THIRD-PARTY SERVICES
# ==============================================

# Google Services
GOOGLE_MAPS_API_KEY=AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxx
GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX

# Social Login
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FACEBOOK_APP_ID=your_facebook_app_id
FACEBOOK_APP_SECRET=your_facebook_app_secret

# Analytics
MIXPANEL_TOKEN=your_mixpanel_token
AMPLITUDE_API_KEY=your_amplitude_key

# ==============================================
# FEATURE FLAGS
# ==============================================

# Kill Switches (From Business Rules)
KILL_SWITCH_PAYMENTS=false
KILL_SWITCH_WALLET=false
KILL_SWITCH_MERCHANT_ONBOARDING=false
KILL_SWITCH_REGISTRATIONS=false

# Feature Toggles
FEATURE_AI_RECOMMENDATIONS=true
FEATURE_SOCIAL_COMMERCE=true
FEATURE_SCAN_AND_PAY=true
FEATURE_LOYALTY_PROGRAM=true

# ==============================================
# DEVELOPMENT SETTINGS
# ==============================================

# Debug
DEBUG=rtmn:*
VERBOSE_LOGGING=true

# Seed Data
AUTO_SEED_DATABASE=true
SEED_ADMIN_EMAIL=admin@rtmn.in
SEED_ADMIN_PHONE=+919999999999
SEED_ADMIN_PASSWORD=Admin@123

# Mock External Services (Dev only)
MOCK_PAYMENT_GATEWAY=false
MOCK_SMS_PROVIDER=false
MOCK_EMAIL_PROVIDER=false

# ==============================================
# TESTING CONFIGURATION
# ==============================================

# Test Database
TEST_DATABASE_URL=postgresql://rtmn_user:password@localhost:5432/rtmn_test_db

# Test API Keys (Sandbox)
TEST_RAZORPAY_KEY=rzp_test_xxxxxxxxxx
TEST_TWILIO_NUMBER=+15005550006

# ==============================================
# PRODUCTION OVERRIDES
# ==============================================
# (Uncomment and set for production deployment)

# NODE_ENV=production
# DATABASE_SSL=true
# DATABASE_POOL_MAX=50
# REDIS_PASSWORD=your_redis_production_password
# JWT_SECRET=your-production-secret-min-32-chars-long
# SENTRY_ENABLED=true
# NEW_RELIC_ENABLED=true
# MOCK_PAYMENT_GATEWAY=false
# AUTO_SEED_DATABASE=false
```

---

## 🚀 QUICK START (Local Development)

### 1. Clone Repository

```bash
git clone https://github.com/your-org/rtmn-backend.git
cd rtmn-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment

```bash
# Copy .env.example to .env
cp .env.example .env

# Edit .env with your local configuration
nano .env
```

### 4. Setup Databases

#### PostgreSQL Setup

```bash
# Create database
createdb rtmn_db

# Create user
psql -c "CREATE USER rtmn_user WITH PASSWORD 'your_secure_password_here';"
psql -c "GRANT ALL PRIVILEGES ON DATABASE rtmn_db TO rtmn_user;"

# Run migrations
npm run migrate

# Seed data (optional)
npm run seed
```

#### Redis Setup

```bash
# Start Redis (if using Docker)
docker run -d -p 6379:6379 redis:7-alpine

# Or install locally (macOS)
brew install redis
brew services start redis
```

#### MongoDB Setup

```bash
# Start MongoDB (Docker)
docker run -d -p 27017:27017 --name rtmn-mongo mongo:6

# Or install locally (macOS)
brew install mongodb-community@6.0
brew services start mongodb-community@6.0
```

#### Elasticsearch Setup

```bash
# Start Elasticsearch (Docker)
docker run -d -p 9200:9200 -e "discovery.type=single-node" elasticsearch:8.11.0
```

### 5. Start Development Server

```bash
# Start all services
npm run dev

# Or start specific services
npm run dev:api          # API server only
npm run dev:websocket    # WebSocket server only
npm run dev:worker       # Background workers only
```

---

## 🐳 DOCKER SETUP (Recommended)

### docker-compose.yml

```yaml
version: '3.8'

services:
  # PostgreSQL
  postgres:
    image: postgres:14-alpine
    environment:
      POSTGRES_DB: rtmn_db
      POSTGRES_USER: rtmn_user
      POSTGRES_PASSWORD: your_secure_password_here
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  # Redis
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  # MongoDB
  mongodb:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

  # Elasticsearch
  elasticsearch:
    image: elasticsearch:8.11.0
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
    ports:
      - "9200:9200"
    volumes:
      - elasticsearch_data:/usr/share/elasticsearch/data

  # RTMN Backend API
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    env_file:
      - .env
    depends_on:
      - postgres
      - redis
      - mongodb
      - elasticsearch
    volumes:
      - .:/app
      - /app/node_modules

volumes:
  postgres_data:
  redis_data:
  mongodb_data:
  elasticsearch_data:
```

### Start with Docker

```bash
# Start all services
docker-compose up -d

# Run migrations
docker-compose exec api npm run migrate

# Seed data
docker-compose exec api npm run seed

# View logs
docker-compose logs -f api
```

---

## 🔐 SECURITY CHECKLIST

### Before Production Deployment

- [ ] Change all default passwords
- [ ] Generate strong JWT_SECRET (min 32 characters)
- [ ] Enable database SSL (DATABASE_SSL=true)
- [ ] Set strong Redis password
- [ ] Enable Sentry error tracking
- [ ] Enable rate limiting
- [ ] Configure CORS with specific origins
- [ ] Enable HTTPS/SSL certificates
- [ ] Set secure cookie flags
- [ ] Enable API key authentication for Rabtul SDKs
- [ ] Review and test all kill switches
- [ ] Enable audit logging
- [ ] Configure firewall rules
- [ ] Setup backup strategies
- [ ] Enable monitoring (New Relic/Datadog)

---

## 📊 ENVIRONMENT-SPECIFIC CONFIGURATIONS

### Development
```bash
NODE_ENV=development
LOG_LEVEL=debug
VERBOSE_LOGGING=true
AUTO_SEED_DATABASE=true
MOCK_PAYMENT_GATEWAY=false
```

### Staging
```bash
NODE_ENV=staging
LOG_LEVEL=info
VERBOSE_LOGGING=false
AUTO_SEED_DATABASE=false
SENTRY_ENABLED=true
```

### Production
```bash
NODE_ENV=production
LOG_LEVEL=warn
VERBOSE_LOGGING=false
AUTO_SEED_DATABASE=false
DATABASE_SSL=true
SENTRY_ENABLED=true
NEW_RELIC_ENABLED=true
RATE_LIMIT_MAX_REQUESTS=50
```

---

## 🧪 TESTING CREDENTIALS

### Test Users (Auto-seeded)

```javascript
// Super Admin
{
  phone: '+919999999999',
  email: 'admin@rtmn.in',
  password: 'Admin@123',
  role: 'super_admin'
}

// Test Customer
{
  phone: '+919999999998',
  email: 'customer@test.com',
  password: 'Test@123',
  role: 'customer'
}

// Test Merchant
{
  phone: '+919999999997',
  email: 'merchant@test.com',
  password: 'Merchant@123',
  role: 'merchant_owner'
}
```

### Test Payment Cards (Razorpay Sandbox)

```
Card Number: 4111 1111 1111 1111
CVV: 123
Expiry: Any future date
Name: Test User
```

---

## 🛠️ TROUBLESHOOTING

### Common Issues

**Database Connection Failed**
```bash
# Check PostgreSQL is running
pg_isready -h localhost -p 5432

# Test connection
psql -U rtmn_user -d rtmn_db -h localhost
```

**Redis Connection Failed**
```bash
# Check Redis is running
redis-cli ping
# Should return: PONG
```

**Port Already in Use**
```bash
# Find process using port 3000
lsof -ti:3000

# Kill process
kill -9 $(lsof -ti:3000)
```

**Migration Failed**
```bash
# Rollback last migration
npm run migrate:rollback

# Reset database (CAUTION: Deletes all data)
npm run migrate:reset

# Re-run migrations
npm run migrate
```

---

## 📞 SUPPORT

- **Documentation:** [BACKEND_DEVELOPER_PORTAL.md](./BACKEND_DEVELOPER_PORTAL.md)
- **API Reference:** [COMPLETE_API_SPECIFICATION.md](./COMPLETE_API_SPECIFICATION.md)
- **Business Rules:** [RTMN_BUSINESS_RULES_FOR_DEVELOPERS.md](../1_ARCHITECTURE/RTMN_BUSINESS_RULES_FOR_DEVELOPERS.md)

---

**Status:** ✅ Production-Ready
**Last Updated:** 2026-01-03
**Next:** [Database Migration Scripts](./DATABASE_MIGRATIONS.md)
