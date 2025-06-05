import { safeJsonParse } from '../errors/index.js';

/**
 * Parse JSON if the provided value is a string containing JSON.
 * Returns the original value if parsing fails or the value is not a string.
 */
export function parseIfJsonString(value: any): any {
  if (typeof value !== 'string') return value;
  const parsed = safeJsonParse(value);
  return parsed !== null ? parsed : value;
}

