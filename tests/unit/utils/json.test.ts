import { describe, it, expect } from '@jest/globals';
import { parseIfJsonString } from '../../../src/utils/json.js';

describe('parseIfJsonString', () => {
  it('should return parsed object when valid JSON string is provided', () => {
    const result = parseIfJsonString('{"a":1}');
    expect(result).toEqual({ a: 1 });
  });

  it('should return original value when invalid JSON string is provided', () => {
    const input = '{invalid}';
    const result = parseIfJsonString(input);
    expect(result).toBe(input);
  });

  it('should return original value when value is not a string', () => {
    const obj = { a: 1 };
    expect(parseIfJsonString(obj)).toBe(obj);
  });
});

