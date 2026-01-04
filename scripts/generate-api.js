#!/usr/bin/env node

/**
 * API Endpoint Generator
 *
 * Generates complete CRUD API in 2 minutes:
 * - Controller (CRUD operations)
 * - Service (business logic)
 * - Routes (Express routes)
 * - Tests (comprehensive suite)
 * - Validation (request validation)
 *
 * Usage:
 *   node scripts/generate-api.js --entity=Product
 *   node scripts/generate-api.js --entity=Campaign --operations=CRUD
 *
 * Time saved: 4-6 hours per entity
 */

const fs = require('fs');
const path = require('path');

class APIGenerator {
  constructor(entity, operations = 'CRUD') {
    this.entity = entity; // e.g., "Product"
    this.entityLower = entity.toLowerCase(); // "product"
    this.entityPlural = entity + 's'; // "Products"
    this.entityPluralLower = this.entityPlural.toLowerCase(); // "products"
    this.operations = operations.split('');
  }

  generate() {
    console.log(`\n🚀 Generating Complete API for ${this.entity}...\n`);

    const files = [];

    if (this.operations.includes('C') || this.operations.includes('R') ||
        this.operations.includes('U') || this.operations.includes('D')) {
      files.push(this.generateController());
      files.push(this.generateService());
      files.push(this.generateRoutes());
      files.push(this.generateTests());
      files.push(this.generateValidation());
    }

    console.log(`\n✅ Generated ${files.length} files for ${this.entity}\n`);
    console.log(`📁 Files created:`);
    files.forEach(file => console.log(`   ${file}`));

    console.log(`\n📝 Next steps:`);
    console.log(`   1. Add routes to src/app.js:`);
    console.log(`      const ${this.entityLower}Routes = require('./routes/${this.entityLower}.routes');`);
    console.log(`      app.use('/api/${this.entityPluralLower}', ${this.entityLower}Routes);`);
    console.log(`   2. Create database migration:`);
    console.log(`      npx sequelize-cli migration:generate --name create-${this.entityPluralLower}`);
    console.log(`   3. Run tests:`);
    console.log(`      npm test tests/api/${this.entityLower}.test.js\n`);
  }

  generateController() {
    const template = `const ${this.entityLower}Service = require('../services/${this.entityLower}.service');
const { asyncHandler } = require('../middleware/error.middleware');
const { ApplicationError, ErrorCode } = require('../utils/errorCodes');

class ${this.entity}Controller {
  /**
   * GET /api/${this.entityPluralLower}
   * Get all ${this.entityPluralLower}
   */
  getAll = asyncHandler(async (req, res) => {
    const { page = 1, limit = 20, ...filters } = req.query;

    const result = await ${this.entityLower}Service.getAll({
      page: parseInt(page),
      limit: parseInt(limit),
      filters
    });

    res.json({
      data: result.${this.entityPluralLower},
      pagination: result.pagination,
      metadata: {
        request_id: req.id,
        timestamp: new Date().toISOString()
      }
    });
  });

  /**
   * GET /api/${this.entityPluralLower}/:id
   * Get ${this.entityLower} by ID
   */
  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const ${this.entityLower} = await ${this.entityLower}Service.getById(id);

    if (!${this.entityLower}) {
      throw new ApplicationError(
        ErrorCode.${this.entity.toUpperCase()}_NOT_FOUND,
        '${this.entity} not found',
        { ${this.entityLower}_id: id }
      );
    }

    res.json({
      data: ${this.entityLower},
      metadata: {
        request_id: req.id,
        timestamp: new Date().toISOString()
      }
    });
  });

  /**
   * POST /api/${this.entityPluralLower}
   * Create new ${this.entityLower}
   */
  create = asyncHandler(async (req, res) => {
    const ${this.entityLower}Data = req.body;

    const ${this.entityLower} = await ${this.entityLower}Service.create(${this.entityLower}Data);

    res.status(201).json({
      data: ${this.entityLower},
      metadata: {
        request_id: req.id,
        timestamp: new Date().toISOString()
      }
    });
  });

  /**
   * PUT /api/${this.entityPluralLower}/:id
   * Update ${this.entityLower}
   */
  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    const ${this.entityLower} = await ${this.entityLower}Service.update(id, updates);

    if (!${this.entityLower}) {
      throw new ApplicationError(
        ErrorCode.${this.entity.toUpperCase()}_NOT_FOUND,
        '${this.entity} not found',
        { ${this.entityLower}_id: id }
      );
    }

    res.json({
      data: ${this.entityLower},
      metadata: {
        request_id: req.id,
        timestamp: new Date().toISOString()
      }
    });
  });

  /**
   * DELETE /api/${this.entityPluralLower}/:id
   * Delete ${this.entityLower}
   */
  delete = asyncHandler(async (req, res) => {
    const { id } = req.params;

    await ${this.entityLower}Service.delete(id);

    res.json({
      message: '${this.entity} deleted successfully',
      metadata: {
        request_id: req.id,
        timestamp: new Date().toISOString()
      }
    });
  });
}

module.exports = new ${this.entity}Controller();
`;

    const filePath = path.join(process.cwd(), 'src/controllers', `${this.entityLower}.controller.js`);
    this.writeFile(filePath, template);
    return `src/controllers/${this.entityLower}.controller.js`;
  }

  generateService() {
    const template = `const ${this.entity} = require('../models/${this.entity}');
const { ApplicationError, ErrorCode } = require('../utils/errorCodes');
const { Op } = require('sequelize');

class ${this.entity}Service {
  async getAll({ page, limit, filters }) {
    const offset = (page - 1) * limit;

    const where = {};

    // Add filters dynamically
    if (filters.status) {
      where.status = filters.status;
    }
    if (filters.search) {
      where.name = { [Op.iLike]: \`%\${filters.search}%\` };
    }

    const { count, rows } = await ${this.entity}.findAndCountAll({
      where,
      limit,
      offset,
      order: [['created_at', 'DESC']]
    });

    return {
      ${this.entityPluralLower}: rows,
      pagination: {
        total: count,
        page,
        limit,
        pages: Math.ceil(count / limit),
        has_more: offset + limit < count
      }
    };
  }

  async getById(id) {
    return await ${this.entity}.findByPk(id);
  }

  async create(data) {
    // Validate required fields
    if (!data.name) {
      throw new ApplicationError(
        ErrorCode.VALIDATION_FAILED,
        'Name is required'
      );
    }

    return await ${this.entity}.create(data);
  }

  async update(id, updates) {
    const ${this.entityLower} = await ${this.entity}.findByPk(id);

    if (!${this.entityLower}) {
      return null;
    }

    await ${this.entityLower}.update(updates);
    return ${this.entityLower};
  }

  async delete(id) {
    const ${this.entityLower} = await ${this.entity}.findByPk(id);

    if (!${this.entityLower}) {
      throw new ApplicationError(
        ErrorCode.${this.entity.toUpperCase()}_NOT_FOUND,
        '${this.entity} not found'
      );
    }

    await ${this.entityLower}.destroy();
    return true;
  }

  async search(query) {
    return await ${this.entity}.findAll({
      where: {
        name: { [Op.iLike]: \`%\${query}%\` }
      },
      limit: 10
    });
  }
}

module.exports = new ${this.entity}Service();
`;

    const filePath = path.join(process.cwd(), 'src/services', `${this.entityLower}.service.js`);
    this.writeFile(filePath, template);
    return `src/services/${this.entityLower}.service.js`;
  }

  generateRoutes() {
    const template = `const express = require('express');
const ${this.entityLower}Controller = require('../controllers/${this.entityLower}.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { validate } = require('../middleware/validation.middleware');
const ${this.entityLower}Validation = require('../validation/${this.entityLower}.validation');

const router = express.Router();

// All routes require authentication
router.use(authenticate);

/**
 * @route   GET /api/${this.entityPluralLower}
 * @desc    Get all ${this.entityPluralLower}
 * @access  Private
 */
router.get('/',
  ${this.entityLower}Controller.getAll
);

/**
 * @route   GET /api/${this.entityPluralLower}/:id
 * @desc    Get ${this.entityLower} by ID
 * @access  Private
 */
router.get('/:id',
  ${this.entityLower}Controller.getById
);

/**
 * @route   POST /api/${this.entityPluralLower}
 * @desc    Create new ${this.entityLower}
 * @access  Private
 */
router.post('/',
  validate(${this.entityLower}Validation.create),
  ${this.entityLower}Controller.create
);

/**
 * @route   PUT /api/${this.entityPluralLower}/:id
 * @desc    Update ${this.entityLower}
 * @access  Private
 */
router.put('/:id',
  validate(${this.entityLower}Validation.update),
  ${this.entityLower}Controller.update
);

/**
 * @route   DELETE /api/${this.entityPluralLower}/:id
 * @desc    Delete ${this.entityLower}
 * @access  Private
 */
router.delete('/:id',
  ${this.entityLower}Controller.delete
);

module.exports = router;
`;

    const filePath = path.join(process.cwd(), 'src/routes', `${this.entityLower}.routes.js`);
    this.writeFile(filePath, template);
    return `src/routes/${this.entityLower}.routes.js`;
  }

  generateTests() {
    const template = `const request = require('supertest');
const app = require('../../src/app');
const ${this.entity} = require('../../src/models/${this.entity}');
const { generateAccessToken } = require('../helpers/auth.helper');

describe('${this.entity} API', () => {
  let accessToken;
  let test${this.entity};

  beforeAll(async () => {
    // Generate test access token
    accessToken = await generateAccessToken({
      user_id: 'test-user-id',
      phone: '+91-9876543210'
    });
  });

  beforeEach(async () => {
    // Create test ${this.entityLower}
    test${this.entity} = await ${this.entity}.create({
      name: 'Test ${this.entity}',
      status: 'active'
    });
  });

  afterEach(async () => {
    // Clean up test data
    await ${this.entity}.destroy({ where: {}, truncate: true });
  });

  describe('GET /api/${this.entityPluralLower}', () => {
    it('should return all ${this.entityPluralLower}', async () => {
      const response = await request(app)
        .get('/api/${this.entityPluralLower}')
        .set('Authorization', \`Bearer \${accessToken}\`);

      expect(response.status).toBe(200);
      expect(response.body.data).toBeInstanceOf(Array);
      expect(response.body.data.length).toBeGreaterThan(0);
      expect(response.body.pagination).toBeDefined();
    });

    it('should return 401 if not authenticated', async () => {
      const response = await request(app)
        .get('/api/${this.entityPluralLower}');

      expect(response.status).toBe(401);
    });

    it('should support pagination', async () => {
      const response = await request(app)
        .get('/api/${this.entityPluralLower}?page=1&limit=10')
        .set('Authorization', \`Bearer \${accessToken}\`);

      expect(response.status).toBe(200);
      expect(response.body.pagination.page).toBe(1);
      expect(response.body.pagination.limit).toBe(10);
    });
  });

  describe('GET /api/${this.entityPluralLower}/:id', () => {
    it('should return ${this.entityLower} by id', async () => {
      const response = await request(app)
        .get(\`/api/${this.entityPluralLower}/\${test${this.entity}.id}\`)
        .set('Authorization', \`Bearer \${accessToken}\`);

      expect(response.status).toBe(200);
      expect(response.body.data.id).toBe(test${this.entity}.id);
      expect(response.body.data.name).toBe('Test ${this.entity}');
    });

    it('should return 404 if ${this.entityLower} not found', async () => {
      const response = await request(app)
        .get('/api/${this.entityPluralLower}/invalid-id')
        .set('Authorization', \`Bearer \${accessToken}\`);

      expect(response.status).toBe(404);
      expect(response.body.error.code).toBe('${this.entity.toUpperCase()}_NOT_FOUND');
    });
  });

  describe('POST /api/${this.entityPluralLower}', () => {
    it('should create new ${this.entityLower}', async () => {
      const response = await request(app)
        .post('/api/${this.entityPluralLower}')
        .set('Authorization', \`Bearer \${accessToken}\`)
        .send({
          name: 'New ${this.entity}',
          status: 'active'
        });

      expect(response.status).toBe(201);
      expect(response.body.data.name).toBe('New ${this.entity}');
      expect(response.body.data.status).toBe('active');
    });

    it('should return 400 if validation fails', async () => {
      const response = await request(app)
        .post('/api/${this.entityPluralLower}')
        .set('Authorization', \`Bearer \${accessToken}\`)
        .send({
          // Missing required 'name' field
          status: 'active'
        });

      expect(response.status).toBe(400);
    });
  });

  describe('PUT /api/${this.entityPluralLower}/:id', () => {
    it('should update ${this.entityLower}', async () => {
      const response = await request(app)
        .put(\`/api/${this.entityPluralLower}/\${test${this.entity}.id}\`)
        .set('Authorization', \`Bearer \${accessToken}\`)
        .send({
          name: 'Updated ${this.entity}',
          status: 'inactive'
        });

      expect(response.status).toBe(200);
      expect(response.body.data.name).toBe('Updated ${this.entity}');
      expect(response.body.data.status).toBe('inactive');
    });

    it('should return 404 if ${this.entityLower} not found', async () => {
      const response = await request(app)
        .put('/api/${this.entityPluralLower}/invalid-id')
        .set('Authorization', \`Bearer \${accessToken}\`)
        .send({ name: 'Updated' });

      expect(response.status).toBe(404);
    });
  });

  describe('DELETE /api/${this.entityPluralLower}/:id', () => {
    it('should delete ${this.entityLower}', async () => {
      const response = await request(app)
        .delete(\`/api/${this.entityPluralLower}/\${test${this.entity}.id}\`)
        .set('Authorization', \`Bearer \${accessToken}\`);

      expect(response.status).toBe(200);
      expect(response.body.message).toContain('deleted successfully');

      // Verify deletion
      const deleted = await ${this.entity}.findByPk(test${this.entity}.id);
      expect(deleted).toBeNull();
    });

    it('should return 404 if ${this.entityLower} not found', async () => {
      const response = await request(app)
        .delete('/api/${this.entityPluralLower}/invalid-id')
        .set('Authorization', \`Bearer \${accessToken}\`);

      expect(response.status).toBe(404);
    });
  });
});
`;

    const filePath = path.join(process.cwd(), 'tests/api', `${this.entityLower}.test.js`);
    this.writeFile(filePath, template);
    return `tests/api/${this.entityLower}.test.js`;
  }

  generateValidation() {
    const template = `const { body, param, query } = require('express-validator');

module.exports = {
  create: [
    body('name')
      .trim()
      .notEmpty()
      .withMessage('Name is required')
      .isLength({ min: 3, max: 255 })
      .withMessage('Name must be between 3 and 255 characters'),

    body('description')
      .optional()
      .trim()
      .isLength({ max: 1000 })
      .withMessage('Description must be less than 1000 characters'),

    body('status')
      .optional()
      .isIn(['active', 'inactive', 'draft'])
      .withMessage('Status must be active, inactive, or draft')
  ],

  update: [
    param('id')
      .isUUID()
      .withMessage('Invalid ${this.entityLower} ID'),

    body('name')
      .optional()
      .trim()
      .isLength({ min: 3, max: 255 })
      .withMessage('Name must be between 3 and 255 characters'),

    body('description')
      .optional()
      .trim()
      .isLength({ max: 1000 })
      .withMessage('Description must be less than 1000 characters'),

    body('status')
      .optional()
      .isIn(['active', 'inactive', 'draft'])
      .withMessage('Status must be active, inactive, or draft')
  ],

  getAll: [
    query('page')
      .optional()
      .isInt({ min: 1 })
      .withMessage('Page must be a positive integer'),

    query('limit')
      .optional()
      .isInt({ min: 1, max: 100 })
      .withMessage('Limit must be between 1 and 100'),

    query('status')
      .optional()
      .isIn(['active', 'inactive', 'draft'])
      .withMessage('Invalid status filter')
  ]
};
`;

    const filePath = path.join(process.cwd(), 'src/validation', `${this.entityLower}.validation.js`);
    this.writeFile(filePath, template);
    return `src/validation/${this.entityLower}.validation.js`;
  }

  writeFile(filePath, content) {
    const dir = path.dirname(filePath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, content.trim() + '\n');
  }
}

// CLI execution
const args = process.argv.slice(2);
const entityArg = args.find(arg => arg.startsWith('--entity='));
const operationsArg = args.find(arg => arg.startsWith('--operations='));

if (!entityArg) {
  console.error('\n❌ Error: --entity parameter is required\n');
  console.log('Usage:');
  console.log('  node scripts/generate-api.js --entity=Product');
  console.log('  node scripts/generate-api.js --entity=Campaign --operations=CRUD\n');
  console.log('Examples:');
  console.log('  node scripts/generate-api.js --entity=User');
  console.log('  node scripts/generate-api.js --entity=Order');
  console.log('  node scripts/generate-api.js --entity=Merchant\n');
  process.exit(1);
}

const entity = entityArg.split('=')[1];
const operations = operationsArg ? operationsArg.split('=')[1] : 'CRUD';

const generator = new APIGenerator(entity, operations);
generator.generate();
