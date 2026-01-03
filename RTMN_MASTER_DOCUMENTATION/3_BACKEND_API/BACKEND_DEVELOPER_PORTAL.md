# Backend Developer Portal

**Last Updated:** 2026-01-03
**Version:** 1.0.0

## Quick Start (5 minutes)

### Prerequisites
- Node.js v20+
- PostgreSQL 15
- Redis 7
- Docker (optional)

### Setup
```bash
# Clone repository
git clone git@github.com:imrejaul007/Rez_v-2.git
cd Rez_v-2

# Install dependencies
npm install

# Setup database
npm run db:setup

# Start development server
npm run dev
```

## Documentation Navigation

### For New Developers
1. Read: [RTMN_MASTER_ARCHITECTURE.md](../1_ARCHITECTURE/RTMN_MASTER_ARCHITECTURE.md)
2. Read: [DATABASE_SCHEMA_DESIGN.md](DATABASE_SCHEMA_DESIGN.md)
3. Read: [API_ARCHITECTURE_DESIGN.md](API_ARCHITECTURE_DESIGN.md)
4. Start Building!

### Building a Feature
1. Find screen: [COMPLETE_SCREEN_ORGANIZATION_AND_FLOWS.md](../2_FRONTEND/COMPLETE_SCREEN_ORGANIZATION_AND_FLOWS.md)
2. Check APIs: [SCREEN_TO_API_MAPPING.md](SCREEN_TO_API_MAPPING.md)
3. Implement: [COMPLETE_API_SPECIFICATION.md](COMPLETE_API_SPECIFICATION.md)
4. Add Auth: [AUTHENTICATION_PERMISSIONS_MATRIX.md](AUTHENTICATION_PERMISSIONS_MATRIX.md)
5. Add Real-time: [WEBSOCKET_EVENTS_CATALOG.md](WEBSOCKET_EVENTS_CATALOG.md)
6. Handle Errors: [ERROR_HANDLING_GUIDE.md](ERROR_HANDLING_GUIDE.md)

## API Development Workflow

```
1. Design → Use OpenAPI spec
2. Implement → Follow architecture patterns
3. Test → Write unit + integration tests
4. Document → Update API docs
5. Deploy → CI/CD pipeline
```
