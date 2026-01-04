# DEVELOPER QUICK START - RTMN Backend

**Get from zero to running backend in 5 minutes.**

---

## 🚀 ONE-COMMAND SETUP

```bash
# Clone repository
git clone <repo-url>
cd rtmn-backend

# Start everything (PostgreSQL, Redis, API, Frontend)
docker-compose up

# That's it! ✅
```

**What just started:**
- ✅ PostgreSQL database (port 5432) with seed data
- ✅ Redis cache (port 6379)
- ✅ Backend API (port 3000)
- ✅ Frontend app (port 5173)
- ✅ pgAdmin UI (port 5050) - Database browser
- ✅ Redis Commander (port 8081) - Cache browser
- ✅ Mailhog (port 8025) - Email catcher

**Open in browser:**
- Frontend: http://localhost:5173
- API Health: http://localhost:3000/health
- pgAdmin: http://localhost:5050 (admin@rtmn.local / admin)
- Redis Commander: http://localhost:8081
- Mailhog: http://localhost:8025

---

## ⚡ FAST DEVELOPMENT WORKFLOW

### 1. Generate Complete API (2 minutes)

```bash
# Generate API for "Product" entity
node scripts/generate-api.js --entity=Product

# This creates 5 files with 500+ lines of working code:
# ✅ src/controllers/product.controller.js (CRUD operations)
# ✅ src/services/product.service.js (business logic)
# ✅ src/routes/product.routes.js (Express routes)
# ✅ tests/api/product.test.js (comprehensive tests)
# ✅ src/validation/product.validation.js (request validation)
```

**Time saved: 4-6 hours per entity**

### 2. Add Routes to App

```javascript
// src/app.js
const productRoutes = require('./routes/product.routes');
app.use('/api/products', productRoutes);
```

### 3. Create Database Migration

```bash
npx sequelize-cli migration:generate --name create-products

# Edit migration file (or use generator)
npx sequelize-cli db:migrate
```

### 4. Test API

```bash
# Run tests
npm test tests/api/product.test.js

# Or test manually
curl http://localhost:3000/api/products \
  -H "Authorization: Bearer <token>"
```

**Total time: 10-15 minutes for complete CRUD API**

---

## 📋 AVAILABLE GENERATORS

### 1. API Generator
```bash
node scripts/generate-api.js --entity=Order
node scripts/generate-api.js --entity=Campaign
node scripts/generate-api.js --entity=Merchant
```

Generates: Controller + Service + Routes + Tests + Validation

### 2. Migration Generator
```bash
node scripts/generate-migration.js \
  --table=products \
  --schema=schemas/product.json
```

Generates: Sequelize migration from JSON schema

### 3. Model Generator
```bash
node scripts/generate-model.js --entity=Product
```

Generates: Sequelize model with associations

---

## 🗂️ PROJECT STRUCTURE

```
rtmn-backend/
├── src/
│   ├── controllers/      ← API endpoint handlers
│   ├── services/         ← Business logic
│   ├── models/           ← Database models (Sequelize)
│   ├── routes/           ← Express routes
│   ├── middleware/       ← Auth, validation, error handling
│   ├── utils/            ← Helpers, error codes
│   └── app.js            ← Express app setup
│
├── tests/
│   ├── api/              ← API endpoint tests
│   ├── services/         ← Service layer tests
│   └── integration/      ← Integration tests
│
├── migrations/           ← Database migrations
├── seeders/              ← Seed data
├── scripts/              ← Code generators
├── docker-compose.yml    ← Development environment
└── package.json
```

---

## 🧪 TESTING

```bash
# Run all tests
npm test

# Run specific test file
npm test tests/api/product.test.js

# Run with coverage
npm run test:coverage

# Watch mode (re-run on file change)
npm run test:watch
```

---

## 📊 DATABASE MANAGEMENT

### View Database (pgAdmin)

1. Open http://localhost:5050
2. Login: admin@rtmn.local / admin
3. Add Server:
   - Name: RTMN Dev
   - Host: postgres
   - Port: 5432
   - Username: postgres
   - Password: postgres

### Run Migrations

```bash
# Run all pending migrations
npx sequelize-cli db:migrate

# Rollback last migration
npx sequelize-cli db:migrate:undo

# Rollback all migrations
npx sequelize-cli db:migrate:undo:all
```

### Seed Database

```bash
# Run all seeders
npx sequelize-cli db:seed:all

# Run specific seeder
npx sequelize-cli db:seed --seed 20260104-demo-users.js
```

---

## 🔍 DEBUGGING

### View Logs

```bash
# Backend API logs
docker-compose logs -f api

# Database logs
docker-compose logs -f postgres

# All logs
docker-compose logs -f
```

### Access Database CLI

```bash
docker-compose exec postgres psql -U postgres rtmn_development
```

### Access Redis CLI

```bash
docker-compose exec redis redis-cli
```

---

## 🎯 COMMON TASKS

### Add New API Endpoint

```bash
# 1. Generate API files
node scripts/generate-api.js --entity=Category

# 2. Add routes to app.js
# 3. Create migration
# 4. Run migration
# 5. Test
npm test tests/api/category.test.js

# Done! ✅
```

### Add Third-Party Integration

```bash
# Example: Add Razorpay payment
npm install razorpay

# Create service
# src/services/razorpay.service.js
```

### Add Middleware

```bash
# Create middleware file
# src/middleware/rate-limit.middleware.js

# Apply to routes
# router.use(rateLimitMiddleware);
```

---

## 🚨 TROUBLESHOOTING

### Port Already in Use

```bash
# Stop all containers
docker-compose down

# Kill process on port
lsof -ti:3000 | xargs kill -9
```

### Database Connection Error

```bash
# Restart PostgreSQL
docker-compose restart postgres

# Check logs
docker-compose logs postgres
```

### Tests Failing

```bash
# Reset test database
NODE_ENV=test npx sequelize-cli db:drop
NODE_ENV=test npx sequelize-cli db:create
NODE_ENV=test npx sequelize-cli db:migrate

# Run tests again
npm test
```

---

## 📚 DOCUMENTATION LINKS

- **Architecture**: [RTMN_MASTER_DOCUMENTATION/1_ARCHITECTURE/](RTMN_MASTER_DOCUMENTATION/1_ARCHITECTURE/)
- **API Specs**: [RTMN_MASTER_DOCUMENTATION/3_BACKEND_API/COMPLETE_API_SPECIFICATION.md](RTMN_MASTER_DOCUMENTATION/3_BACKEND_API/COMPLETE_API_SPECIFICATION.md)
- **Implementation Guide**: [RTMN_MASTER_DOCUMENTATION/BACKEND_IMPLEMENTATION_COMPLETE_GUIDE.md](RTMN_MASTER_DOCUMENTATION/BACKEND_IMPLEMENTATION_COMPLETE_GUIDE.md)
- **Database Design**: [RTMN_MASTER_DOCUMENTATION/DATABASE_IMPLEMENTATION_COMPLETE_GUIDE.md](RTMN_MASTER_DOCUMENTATION/DATABASE_IMPLEMENTATION_COMPLETE_GUIDE.md)

---

## ⚡ PRODUCTIVITY TIPS

### 1. Use Code Generators
Don't write boilerplate. Generate it.

### 2. Run Tests in Watch Mode
```bash
npm run test:watch
```
Tests re-run automatically on file save.

### 3. Use Hot Reload
Backend auto-restarts on file change (nodemon).

### 4. Browse Database Visually
Use pgAdmin instead of CLI for complex queries.

### 5. Test Emails Locally
Mailhog catches all emails sent in development.

---

## 🎯 DAILY WORKFLOW

```bash
# Morning: Start everything
docker-compose up

# During development:
# - Edit files (auto-reload)
# - Tests run automatically (watch mode)
# - Check logs (docker-compose logs -f api)

# Before commit:
npm run lint
npm test
git commit -m "feat: add product API"

# Evening: Stop everything
docker-compose down
```

---

## ✅ CHECKLIST FOR NEW DEVELOPERS

Day 1:
- [ ] Clone repository
- [ ] Run `docker-compose up`
- [ ] Access frontend at http://localhost:5173
- [ ] Generate first API: `node scripts/generate-api.js --entity=Test`
- [ ] Run tests: `npm test`
- [ ] Browse database in pgAdmin
- [ ] Read architecture docs

Day 2:
- [ ] Build real API endpoint (User/Product/Order)
- [ ] Write tests
- [ ] Create migration
- [ ] Commit code

Week 1:
- [ ] Complete 3-5 API endpoints
- [ ] Understand authentication flow
- [ ] Understand database schema
- [ ] Understand error handling

---

**Time from zero to first commit: 30 minutes** ⚡

**Time from zero to production-ready API: 10-15 minutes** ⚡⚡

**You're ready to build 10x faster!** 🚀
