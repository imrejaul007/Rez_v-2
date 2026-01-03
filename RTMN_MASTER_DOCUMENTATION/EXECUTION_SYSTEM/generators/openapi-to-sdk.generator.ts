#!/usr/bin/env ts-node
/**
 * OPENAPI → SDK GENERATOR
 *
 * Automatically generates TypeScript SDK from OpenAPI spec
 *
 * USAGE:
 *   npm run generate:sdk
 *   npm run generate:sdk -- wallet.openapi.yaml
 *
 * OUTPUT:
 *   sdks/WalletSDK.generated.ts
 *   sdks/OrderSDK.generated.ts
 *   etc.
 */

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

interface OpenAPISpec {
  info: {
    title: string;
    version: string;
  };
  paths: Record<string, Record<string, any>>;
  components?: {
    schemas?: Record<string, any>;
  };
}

/**
 * Convert OpenAPI parameter type to TypeScript type
 */
function openApiTypeToTS(schema: any): string {
  if (!schema) return 'any';

  if (schema.$ref) {
    const typeName = schema.$ref.split('/').pop();
    return typeName || 'any';
  }

  if (schema.type === 'array') {
    return `Array<${openApiTypeToTS(schema.items)}>`;
  }

  if (schema.type === 'object') {
    if (schema.properties) {
      const props = Object.entries(schema.properties)
        .map(([key, val]: [string, any]) => {
          const required = schema.required?.includes(key);
          const optional = required ? '' : '?';
          return `${key}${optional}: ${openApiTypeToTS(val)}`;
        })
        .join('; ');
      return `{ ${props} }`;
    }
    return 'Record<string, any>';
  }

  const typeMap: Record<string, string> = {
    string: 'string',
    number: 'number',
    integer: 'number',
    boolean: 'boolean'
  };

  return typeMap[schema.type] || 'any';
}

/**
 * Generate SDK method from OpenAPI operation
 */
function generateMethod(
  path: string,
  method: string,
  operation: any
): { methodCode: string; interfaceCode: string } {
  const operationId = operation.operationId;
  const methodName = operationId || `${method}${path.replace(/[^a-zA-Z0-9]/g, '')}`;

  // Extract parameters
  const pathParams: any[] = [];
  const queryParams: any[] = [];
  const bodyParam = operation.requestBody?.content?.['application/json']?.schema;

  (operation.parameters || []).forEach((param: any) => {
    if (param.in === 'path') pathParams.push(param);
    if (param.in === 'query') queryParams.push(param);
  });

  // Generate TypeScript interfaces for request/response
  let interfaceCode = '';
  const requestTypeName = `${capitalize(methodName)}Request`;
  const responseTypeName = `${capitalize(methodName)}Response`;

  if (bodyParam) {
    interfaceCode += `export interface ${requestTypeName} ${openApiTypeToTS(bodyParam)}\n\n`;
  }

  const responseSchema = operation.responses?.['200']?.content?.['application/json']?.schema ||
    operation.responses?.['201']?.content?.['application/json']?.schema;

  if (responseSchema) {
    interfaceCode += `export interface ${responseTypeName} ${openApiTypeToTS(responseSchema)}\n\n`;
  }

  // Generate method signature
  const params: string[] = [];

  pathParams.forEach(param => {
    params.push(`${param.name}: ${openApiTypeToTS(param.schema)}`);
  });

  if (bodyParam) {
    params.push(`request: ${requestTypeName}`);
  }

  queryParams.forEach(param => {
    const optional = param.required ? '' : '?';
    params.push(`${param.name}${optional}: ${openApiTypeToTS(param.schema)}`);
  });

  params.push('accessToken: string');

  const returnType = responseSchema ? responseTypeName : 'void';

  // Generate method body
  let apiPath = path;
  pathParams.forEach(param => {
    apiPath = apiPath.replace(`{${param.name}}`, `\${${param.name}}`);
  });

  const queryString = queryParams.length > 0
    ? ` + '?' + new URLSearchParams({ ${queryParams.map(p => p.name).join(', ')} }).toString()`
    : '';

  const methodCode = `
  /**
   * ${operation.summary || operation.description || methodName}
   ${operation.description ? `   * \n   * ${operation.description}` : ''}
   */
  async ${methodName}(${params.join(', ')}): Promise<${returnType}> {
    return this.request<${returnType}>(
      '${method.toUpperCase()}',
      \`${apiPath}\`${queryString},
      accessToken${bodyParam ? ',\n      request' : ''}
    );
  }
`;

  return { methodCode, interfaceCode };
}

/**
 * Capitalize first letter
 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generate SDK from OpenAPI spec
 */
function generateSDK(openApiPath: string): string {
  const spec = yaml.load(fs.readFileSync(openApiPath, 'utf8')) as OpenAPISpec;

  const serviceName = spec.info.title.replace(/Service|API/gi, '').trim();
  const sdkClassName = `${serviceName}SDK`;

  let interfaces = '';
  let methods = '';

  // Generate component schemas as interfaces
  if (spec.components?.schemas) {
    for (const [name, schema] of Object.entries(spec.components.schemas)) {
      interfaces += `export interface ${name} ${openApiTypeToTS(schema)}\n\n`;
    }
  }

  // Generate methods from paths
  for (const [path, pathItem] of Object.entries(spec.paths)) {
    for (const [method, operation] of Object.entries(pathItem)) {
      if (['get', 'post', 'put', 'patch', 'delete'].includes(method.toLowerCase())) {
        const { methodCode, interfaceCode } = generateMethod(path, method, operation);
        methods += methodCode;
        interfaces += interfaceCode;
      }
    }
  }

  const sdkCode = `/**
 * AUTO-GENERATED SDK
 * Generated from: ${path.basename(openApiPath)}
 * DO NOT EDIT MANUALLY
 *
 * To regenerate: npm run generate:sdk
 */

import crypto from 'crypto';

${interfaces}

interface SDKConfig {
  apiBaseUrl: string;
  sdkName: string;
  sdkVersion: string;
  sdkSecret: string;
}

export class ${sdkClassName} {
  private config: SDKConfig;

  constructor(config: SDKConfig) {
    this.config = config;
  }

  /**
   * Generate HMAC-SHA256 signature
   */
  private generateSignature(
    method: string,
    path: string,
    body: string,
    timestamp: number
  ): string {
    const message = \`\${timestamp}\${method}\${path}\${body}\`;
    return crypto
      .createHmac('sha256', this.config.sdkSecret)
      .update(message)
      .digest('hex');
  }

  /**
   * Make authenticated API request
   */
  private async request<T>(
    method: string,
    path: string,
    accessToken: string,
    body?: any
  ): Promise<T> {
    const timestamp = Date.now();
    const bodyString = body ? JSON.stringify(body) : '';
    const signature = this.generateSignature(method, path, bodyString, timestamp);

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${accessToken}\`,
      'X-SDK-Name': this.config.sdkName,
      'X-SDK-Version': this.config.sdkVersion,
      'X-SDK-Timestamp': timestamp.toString(),
      'X-SDK-Signature': signature
    };

    const response = await fetch(\`\${this.config.apiBaseUrl}\${path}\`, {
      method,
      headers,
      body: bodyString || undefined
    });

    if (!response.ok) {
      const error = await response.json();
      throw new SDKError(error.code, error.message, error.details);
    }

    return response.json();
  }

${methods}
}

/**
 * SDK Error
 */
export class SDKError extends Error {
  constructor(
    public code: string,
    public message: string,
    public details?: Record<string, any>
  ) {
    super(message);
    this.name = 'SDKError';
  }
}
`;

  return sdkCode;
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);
  const contractsDir = path.join(__dirname, '../contracts');
  const sdksDir = path.join(__dirname, '../sdks/generated');

  // Create sdks directory if it doesn't exist
  if (!fs.existsSync(sdksDir)) {
    fs.mkdirSync(sdksDir, { recursive: true });
  }

  // Get OpenAPI files to process
  let openApiFiles: string[];
  if (args.length > 0) {
    openApiFiles = args.map(f => path.join(contractsDir, f));
  } else {
    openApiFiles = fs
      .readdirSync(contractsDir)
      .filter(f => f.endsWith('.openapi.yaml') || f.endsWith('.openapi.yml'))
      .map(f => path.join(contractsDir, f));
  }

  console.log('🔨 Generating SDKs from OpenAPI specs...\n');

  for (const openApiPath of openApiFiles) {
    try {
      const fileName = path.basename(openApiPath, '.openapi.yaml');
      const sdkName = fileName
        .split('-')
        .map(w => capitalize(w))
        .join('');

      const sdkCode = generateSDK(openApiPath);
      const sdkPath = path.join(sdksDir, `${sdkName}SDK.generated.ts`);

      fs.writeFileSync(sdkPath, sdkCode);
      console.log(`✅ Generated: ${sdkName}SDK.generated.ts`);
    } catch (error) {
      console.error(`❌ Failed to generate SDK for ${path.basename(openApiPath)}:`, error);
    }
  }

  console.log('\n✨ SDK generation complete!');
}

if (require.main === module) {
  main();
}

export { generateSDK };
