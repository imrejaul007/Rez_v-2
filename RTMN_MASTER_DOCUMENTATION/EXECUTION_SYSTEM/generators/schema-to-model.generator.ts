#!/usr/bin/env ts-node
/**
 * SCHEMA → SEQUELIZE MODEL GENERATOR
 *
 * Automatically generates Sequelize models from canonical schemas
 *
 * USAGE:
 *   npm run generate:models
 *   npm run generate:models -- user.schema.ts
 *
 * OUTPUT:
 *   models/User.model.ts
 *   models/Wallet.model.ts
 *   etc.
 */

import fs from 'fs';
import path from 'path';

interface SchemaField {
  type: string;
  required: boolean;
  primary_key?: boolean;
  foreign_key?: string;
  unique?: boolean;
  default?: any;
  min?: number;
  max?: number;
  max_length?: number;
  allowed_values?: string[];
  [key: string]: any;
}

interface Schema {
  table: string;
  fields: Record<string, SchemaField>;
  indexes?: any[];
  [key: string]: any;
}

/**
 * Map schema types to Sequelize types
 */
function mapTypeToSequelize(field: SchemaField): string {
  const typeMap: Record<string, string> = {
    uuid: 'DataTypes.UUID',
    string: `DataTypes.STRING${field.max_length ? `(${field.max_length})` : ''}`,
    text: 'DataTypes.TEXT',
    integer: 'DataTypes.INTEGER',
    decimal: `DataTypes.DECIMAL(${field.precision || 10}, ${field.scale || 2})`,
    boolean: 'DataTypes.BOOLEAN',
    timestamp: 'DataTypes.DATE',
    date: 'DataTypes.DATEONLY',
    jsonb: 'DataTypes.JSONB',
    array: 'DataTypes.ARRAY(DataTypes.STRING)',
    enum: `DataTypes.ENUM(${field.allowed_values?.map(v => `'${v}'`).join(', ')})`
  };

  return typeMap[field.type] || 'DataTypes.STRING';
}

/**
 * Generate Sequelize model from schema
 */
function generateModel(schemaPath: string): string {
  // Import and extract schema
  const schemaModule = require(schemaPath);
  const schemaName = Object.keys(schemaModule).find(k => k.endsWith('Schema'));
  if (!schemaName) throw new Error('No schema found in file');

  const schema: Schema = schemaModule[schemaName];
  const modelName = schema.table
    .split('_')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');

  let code = `/**
 * AUTO-GENERATED SEQUELIZE MODEL
 * Generated from: ${path.basename(schemaPath)}
 * DO NOT EDIT MANUALLY
 *
 * To regenerate: npm run generate:models
 */

import { Model, DataTypes, Sequelize } from 'sequelize';

export interface ${modelName}Attributes {
`;

  // Generate TypeScript interface
  for (const [fieldName, field] of Object.entries(schema.fields)) {
    const tsType = mapTypeToTypeScript(field);
    const optional = !field.required || field.nullable ? '?' : '';
    code += `  ${fieldName}${optional}: ${tsType};\n`;
  }

  code += `}

export class ${modelName} extends Model<${modelName}Attributes> implements ${modelName}Attributes {
`;

  // Generate class properties
  for (const [fieldName, field] of Object.entries(schema.fields)) {
    const tsType = mapTypeToTypeScript(field);
    const optional = !field.required || field.nullable ? '!' : '';
    code += `  public ${fieldName}${optional}: ${tsType};\n`;
  }

  code += `
  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function init${modelName}(sequelize: Sequelize) {
  ${modelName}.init(
    {
`;

  // Generate field definitions
  for (const [fieldName, field] of Object.entries(schema.fields)) {
    if (fieldName === 'created_at' || fieldName === 'updated_at') continue; // Handled by timestamps

    code += `      ${fieldName}: {\n`;
    code += `        type: ${mapTypeToSequelize(field)},\n`;

    if (field.primary_key) code += `        primaryKey: true,\n`;
    if (field.generated === 'auto') code += `        defaultValue: DataTypes.UUIDV4,\n`;
    if (field.unique) code += `        unique: true,\n`;
    if (field.required && !field.nullable) code += `        allowNull: false,\n`;
    if (field.nullable) code += `        allowNull: true,\n`;
    if (field.default !== undefined && field.generated !== 'auto') {
      const defaultValue = typeof field.default === 'string' ? `'${field.default}'` : field.default;
      code += `        defaultValue: ${defaultValue},\n`;
    }
    if (field.description) {
      code += `        comment: '${field.description}',\n`;
    }

    // Validation
    code += `        validate: {\n`;
    if (field.min !== undefined) code += `          min: ${field.min},\n`;
    if (field.max !== undefined) code += `          max: ${field.max},\n`;
    if (field.regex) code += `          is: ${field.regex},\n`;
    code += `        }\n`;

    code += `      },\n`;
  }

  code += `    },
    {
      sequelize,
      tableName: '${schema.table}',
      timestamps: true,
      underscored: true,
      indexes: [
${(schema.indexes || []).map(idx => {
  if (idx.unique) {
    return `        { fields: ${JSON.stringify(idx.fields)}, unique: true }`;
  }
  return `        { fields: ${JSON.stringify(idx.fields)} }`;
}).join(',\n')}
      ]
    }
  );

  return ${modelName};
}
`;

  return code;
}

/**
 * Map schema type to TypeScript type
 */
function mapTypeToTypeScript(field: SchemaField): string {
  const typeMap: Record<string, string> = {
    uuid: 'string',
    string: 'string',
    text: 'string',
    integer: 'number',
    decimal: 'number',
    boolean: 'boolean',
    timestamp: 'Date',
    date: 'Date',
    jsonb: 'Record<string, any>',
    array: 'string[]'
  };

  if (field.type === 'enum' && field.allowed_values) {
    return field.allowed_values.map(v => `'${v}'`).join(' | ');
  }

  return typeMap[field.type] || 'any';
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);
  const schemasDir = path.join(__dirname, '../schemas');
  const modelsDir = path.join(__dirname, '../models');

  // Create models directory if it doesn't exist
  if (!fs.existsSync(modelsDir)) {
    fs.mkdirSync(modelsDir, { recursive: true });
  }

  // Get schema files to process
  let schemaFiles: string[];
  if (args.length > 0) {
    schemaFiles = args.map(f => path.join(schemasDir, f));
  } else {
    schemaFiles = fs
      .readdirSync(schemasDir)
      .filter(f => f.endsWith('.schema.ts'))
      .map(f => path.join(schemasDir, f));
  }

  console.log('🔨 Generating Sequelize models...\n');

  for (const schemaPath of schemaFiles) {
    try {
      const schemaName = path.basename(schemaPath, '.schema.ts');
      const modelName = schemaName
        .split('_')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join('');

      const modelCode = generateModel(schemaPath);
      const modelPath = path.join(modelsDir, `${modelName}.model.ts`);

      fs.writeFileSync(modelPath, modelCode);
      console.log(`✅ Generated: ${modelName}.model.ts`);
    } catch (error) {
      console.error(`❌ Failed to generate model for ${path.basename(schemaPath)}:`, error);
    }
  }

  console.log('\n✨ Model generation complete!');
}

if (require.main === module) {
  main();
}

export { generateModel };
