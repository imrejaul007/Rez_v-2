# Deployment Guide - RTMN Backend

**Last Updated:** 2026-01-03
**Status:** Production-Ready
**Target:** AWS/DigitalOcean/Self-hosted

---

## 📋 DEPLOYMENT OPTIONS

1. **Docker + Docker Compose** (Recommended for development & staging)
2. **PM2 + Nginx** (Production on single server)
3. **Kubernetes** (Production at scale)
4. **AWS/Cloud** (Managed services)

---

## 🐳 DOCKER DEPLOYMENT (Recommended)

### Complete docker-compose.yml

```yaml
version: '3.8'

services:
  # PostgreSQL Database
  postgres:
    image: postgres:14-alpine
    container_name: rtmn_postgres
    restart: always
    environment:
      POSTGRES_DB: rtmn_db
      POSTGRES_USER: rtmn_user
      POSTGRES_PASSWORD: ${DATABASE_PASSWORD}
      POSTGRES_INITDB_ARGS: "-E UTF8 --locale=en_US.UTF-8"
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./backups:/backups
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U rtmn_user -d rtmn_db"]
      interval: 10s
      timeout: 5s
      retries: 5

  # Redis Cache
  redis:
    image: redis:7-alpine
    container_name: rtmn_redis
    restart: always
    command: redis-server --requirepass ${REDIS_PASSWORD}
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 3s
      retries: 5

  # MongoDB (Logs)
  mongodb:
    image: mongo:6
    container_name: rtmn_mongodb
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: ${MONGO_USER}
      MONGO_INITDB_ROOT_PASSWORD: ${MONGO_PASSWORD}
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

  # Elasticsearch (Search)
  elasticsearch:
    image: elasticsearch:8.11.0
    container_name: rtmn_elasticsearch
    restart: always
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=false
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    ports:
      - "9200:9200"
    volumes:
      - elasticsearch_data:/usr/share/elasticsearch/data

  # RTMN API Server
  api:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: rtmn_api
    restart: always
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      DATABASE_URL: postgresql://rtmn_user:${DATABASE_PASSWORD}@postgres:5432/rtmn_db
      REDIS_URL: redis://:${REDIS_PASSWORD}@redis:6379
      MONGODB_URI: mongodb://${MONGO_USER}:${MONGO_PASSWORD}@mongodb:27017/rtmn_logs
      ELASTICSEARCH_NODE: http://elasticsearch:9200
    env_file:
      - .env.production
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    volumes:
      - ./logs:/app/logs
      - ./uploads:/app/uploads
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  # Nginx Reverse Proxy
  nginx:
    image: nginx:alpine
    container_name: rtmn_nginx
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/ssl:/etc/nginx/ssl:ro
      - ./nginx/logs:/var/log/nginx
    depends_on:
      - api

volumes:
  postgres_data:
  redis_data:
  mongodb_data:
  elasticsearch_data:

networks:
  default:
    name: rtmn_network
```

---

### Dockerfile

```dockerfile
# Multi-stage build for optimized image size

# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

# Copy built node modules and source
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --chown=nodejs:nodejs . .

# Create necessary directories
RUN mkdir -p /app/logs /app/uploads && chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node healthcheck.js

# Start with dumb-init
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "server.js"]
```

---

### Deployment Commands

```bash
# 1. Build images
docker-compose build

# 2. Start services
docker-compose up -d

# 3. Run migrations
docker-compose exec api npm run migrate

# 4. Seed data (development only)
docker-compose exec api npm run seed

# 5. Check logs
docker-compose logs -f api

# 6. Stop services
docker-compose down

# 7. Update and restart
docker-compose pull
docker-compose up -d --build
```

---

## ⚙️ PM2 DEPLOYMENT (Production)

### Install PM2

```bash
npm install -g pm2
```

### ecosystem.config.js

```javascript
module.exports = {
  apps: [{
    name: 'rtmn-api',
    script: './server.js',
    instances: 'max', // Use all CPU cores
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    max_memory_restart: '1G',
    node_args: '--max-old-space-size=2048',

    // Auto restart on file changes (development)
    watch: false,

    // Graceful shutdown
    kill_timeout: 5000,
    wait_ready: true,
    listen_timeout: 10000,

    // Exponential backoff restart delay
    exp_backoff_restart_delay: 100,
    max_restarts: 10,
    min_uptime: '10s',

    // Cron restart (daily at 3 AM)
    cron_restart: '0 3 * * *'
  }]
};
```

### PM2 Commands

```bash
# Start application
pm2 start ecosystem.config.js

# Status
pm2 status

# Logs
pm2 logs rtmn-api

# Restart
pm2 restart rtmn-api

# Stop
pm2 stop rtmn-api

# Delete
pm2 delete rtmn-api

# Save PM2 process list
pm2 save

# Setup PM2 to start on system boot
pm2 startup
```

---

## 🌐 NGINX CONFIGURATION

### nginx.conf

```nginx
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
    worker_connections 2048;
    use epoll;
    multi_accept on;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for" $request_time';

    access_log /var/log/nginx/access.log main;

    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;
    client_max_body_size 10M;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript
               application/json application/javascript application/xml+rss
               application/rss+xml application/atom+xml image/svg+xml;

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;
    limit_conn_zone $binary_remote_addr zone=addr:10m;

    # Upstream backend
    upstream rtmn_backend {
        least_conn;
        server localhost:3000 max_fails=3 fail_timeout=30s;
        keepalive 32;
    }

    # HTTP -> HTTPS redirect
    server {
        listen 80;
        server_name api.rtmn.in;

        location /.well-known/acme-challenge/ {
            root /var/www/certbot;
        }

        location / {
            return 301 https://$server_name$request_uri;
        }
    }

    # HTTPS server
    server {
        listen 443 ssl http2;
        server_name api.rtmn.in;

        # SSL certificates
        ssl_certificate /etc/nginx/ssl/fullchain.pem;
        ssl_certificate_key /etc/nginx/ssl/privkey.pem;

        # SSL configuration
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;
        ssl_session_cache shared:SSL:10m;
        ssl_session_timeout 10m;

        # Security headers
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-XSS-Protection "1; mode=block" always;

        # API endpoints
        location /api/ {
            limit_req zone=api_limit burst=20 nodelay;
            limit_conn addr 10;

            proxy_pass http://rtmn_backend;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_cache_bypass $http_upgrade;

            # Timeouts
            proxy_connect_timeout 60s;
            proxy_send_timeout 60s;
            proxy_read_timeout 60s;
        }

        # Socket.IO WebSocket
        location /socket.io/ {
            proxy_pass http://rtmn_backend;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

            # WebSocket timeouts
            proxy_connect_timeout 7d;
            proxy_send_timeout 7d;
            proxy_read_timeout 7d;
        }

        # Health check
        location /health {
            access_log off;
            proxy_pass http://rtmn_backend/health;
        }
    }
}
```

---

## 🔐 SSL CERTIFICATE (Let's Encrypt)

### Install Certbot

```bash
# Install certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d api.rtmn.in

# Auto-renewal (cron job)
sudo crontab -e
# Add: 0 0 * * * certbot renew --quiet
```

---

## 📊 MONITORING & LOGGING

### Health Check Endpoint

```javascript
// server.js
app.get('/health', async (req, res) => {
  const health = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    checks: {}
  };

  // Database check
  try {
    await db.sequelize.authenticate();
    health.checks.database = 'ok';
  } catch (error) {
    health.checks.database = 'error';
    health.status = 'degraded';
  }

  // Redis check
  try {
    await redis.ping();
    health.checks.redis = 'ok';
  } catch (error) {
    health.checks.redis = 'error';
    health.status = 'degraded';
  }

  const statusCode = health.status === 'ok' ? 200 : 503;
  res.status(statusCode).json(health);
});
```

---

## 🔄 CI/CD PIPELINE (GitHub Actions)

### .github/workflows/deploy.yml

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Run linter
        run: npm run lint

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Deploy to server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /var/www/rtmn-backend
            git pull origin main
            npm install --production
            npm run migrate
            pm2 restart rtmn-api
```

---

## 💾 BACKUP STRATEGY

### Database Backup Script

```bash
#!/bin/bash
# backup.sh

BACKUP_DIR="/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
DB_NAME="rtmn_db"
DB_USER="rtmn_user"

# Create backup
pg_dump -U $DB_USER -d $DB_NAME -F c -b -v -f "$BACKUP_DIR/rtmn_db_$TIMESTAMP.backup"

# Compress
gzip "$BACKUP_DIR/rtmn_db_$TIMESTAMP.backup"

# Delete backups older than 30 days
find $BACKUP_DIR -name "rtmn_db_*.backup.gz" -mtime +30 -delete

# Upload to S3 (optional)
aws s3 cp "$BACKUP_DIR/rtmn_db_$TIMESTAMP.backup.gz" s3://rtmn-backups/
```

### Cron Job for Automated Backups

```bash
# Daily backup at 2 AM
0 2 * * * /path/to/backup.sh
```

---

**Status:** ✅ Production-Ready
**Last Updated:** 2026-01-03
**Supports:** Docker, PM2, Kubernetes
**Next:** [Testing Guide](./TESTING_GUIDE.md)
