/**
 * SDK VALIDATOR MIDDLEWARE
 *
 * ENFORCES SDK-ONLY ACCESS
 *
 * RULES:
 * - ALL API requests MUST come through SDK
 * - SDK signature MUST be valid
 * - Timestamp MUST be within 5 minutes
 * - Rejects direct API calls (no SDK headers)
 */

import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

interface SDKHeaders {
  'x-sdk-name': string;
  'x-sdk-version': string;
  'x-sdk-timestamp': string;
  'x-sdk-signature': string;
}

/**
 * SDK Configuration (stored in environment)
 */
const SDK_CONFIGS: Record<string, { secret: string; allowedVersions: string[] }> = {
  'rabtul-wallet-sdk': {
    secret: process.env.WALLET_SDK_SECRET || '',
    allowedVersions: ['1.0.0', '1.1.0']
  },
  'rabtul-order-sdk': {
    secret: process.env.ORDER_SDK_SECRET || '',
    allowedVersions: ['1.0.0']
  },
  'rabtul-auth-sdk': {
    secret: process.env.AUTH_SDK_SECRET || '',
    allowedVersions: ['1.0.0']
  }
};

/**
 * Validate SDK signature
 */
function validateSignature(
  method: string,
  path: string,
  body: string,
  timestamp: number,
  signature: string,
  secret: string
): boolean {
  const message = `${timestamp}${method}${path}${body}`;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(message)
    .digest('hex');

  return signature === expectedSignature;
}

/**
 * SDK Validator Middleware
 *
 * Place this BEFORE route handlers
 */
export function requireSDK(req: Request, res: Response, next: NextFunction) {
  // Extract SDK headers
  const sdkName = req.headers['x-sdk-name'] as string;
  const sdkVersion = req.headers['x-sdk-version'] as string;
  const sdkTimestamp = req.headers['x-sdk-timestamp'] as string;
  const sdkSignature = req.headers['x-sdk-signature'] as string;

  // Check if SDK headers present
  if (!sdkName || !sdkVersion || !sdkTimestamp || !sdkSignature) {
    return res.status(403).json({
      code: 'SDK_REQUIRED',
      message: 'Direct API access not allowed. Use SDK.',
      details: {
        required_headers: ['X-SDK-Name', 'X-SDK-Version', 'X-SDK-Timestamp', 'X-SDK-Signature'],
        documentation: 'https://docs.rabtul.com/sdks/wallet'
      }
    });
  }

  // Check if SDK is recognized
  const sdkConfig = SDK_CONFIGS[sdkName];
  if (!sdkConfig) {
    return res.status(403).json({
      code: 'SDK_UNKNOWN',
      message: `Unknown SDK: ${sdkName}`,
      details: {
        allowed_sdks: Object.keys(SDK_CONFIGS)
      }
    });
  }

  // Check SDK version
  if (!sdkConfig.allowedVersions.includes(sdkVersion)) {
    return res.status(403).json({
      code: 'SDK_VERSION_INCOMPATIBLE',
      message: `SDK version ${sdkVersion} is not supported`,
      details: {
        current_version: sdkVersion,
        allowed_versions: sdkConfig.allowedVersions,
        upgrade_url: 'https://docs.rabtul.com/sdks/upgrade'
      }
    });
  }

  // Check timestamp (prevent replay attacks)
  const timestamp = parseInt(sdkTimestamp, 10);
  const now = Date.now();
  const timeDiff = Math.abs(now - timestamp);
  const MAX_TIME_DIFF = 5 * 60 * 1000; // 5 minutes

  if (timeDiff > MAX_TIME_DIFF) {
    return res.status(403).json({
      code: 'SDK_TIMESTAMP_EXPIRED',
      message: 'Request timestamp too old or too far in future',
      details: {
        timestamp,
        server_time: now,
        max_diff_ms: MAX_TIME_DIFF
      }
    });
  }

  // Validate signature
  const body = req.body ? JSON.stringify(req.body) : '';
  const isValid = validateSignature(
    req.method,
    req.path,
    body,
    timestamp,
    sdkSignature,
    sdkConfig.secret
  );

  if (!isValid) {
    return res.status(403).json({
      code: 'SDK_SIGNATURE_INVALID',
      message: 'Invalid SDK signature',
      details: {
        hint: 'Signature = HMAC-SHA256(secret, timestamp + method + path + body)'
      }
    });
  }

  // All checks passed - attach SDK info to request
  (req as any).sdk = {
    name: sdkName,
    version: sdkVersion
  };

  next();
}

/**
 * USAGE IN EXPRESS APP
 */

/*
import express from 'express';
import { requireSDK } from './middleware/sdk-validator.middleware';

const app = express();

// Apply SDK validation to all /api routes
app.use('/api', requireSDK);

// Now all routes under /api require valid SDK
app.get('/api/wallet/:userId/balance', async (req, res) => {
  // This will only execute if SDK validation passed
  const userId = req.params.userId;
  const balance = await getWalletBalance(userId);
  res.json(balance);
});
*/

/**
 * OPTIONAL: Skip SDK validation for specific routes
 */
export function skipSDKValidation(paths: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (paths.some(path => req.path.startsWith(path))) {
      return next();
    }
    return requireSDK(req, res, next);
  };
}

/*
// Example: Skip SDK for health check
app.use('/api', skipSDKValidation(['/api/health', '/api/status']));
*/
