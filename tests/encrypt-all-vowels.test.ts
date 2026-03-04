/// <reference types="jest" />
import { encryptAllVowels } from '../src/encrypt-all-vowels/index';

/* restore mocks after each test */
afterEach(() => {
  jest.restoreAllMocks();
});

describe('encryptAllVowels', () => {
  /* #1 */
  test('throws an error when input is an empty string', () => {
    expect(() => encryptAllVowels('')).toThrow(
      '[Bad]: Encrypt All Vowels - Argument length to be greater than zero',
    );
  });

  /* #2 */
  test('returns unchanged string when no vowels are present', () => {
    expect(encryptAllVowels('rhythms')).toEqual({
      input: 'rhythms',
      encrypted: 'rhythms',
    });
  });

  /* #3 */
  test('encrypts all vowels in lowercase input', () => {
    expect(encryptAllVowels('aeiou')).toEqual({
      input: 'aeiou',
      encrypted: '@3!0*',
    });
  });

  /* #4 */
  test('encrypts vowels case-insensitively in mixed-case input', () => {
    expect(encryptAllVowels('AEIOU and vowels')).toEqual({
      input: 'AEIOU and vowels',
      encrypted: '@3!0* @nd v0w3ls',
    });
  });

  /* #5 */
  test('keeps non-vowel characters unchanged while encrypting vowels', () => {
    expect(encryptAllVowels('Hello, World! 123')).toEqual({
      input: 'Hello, World! 123',
      encrypted: 'H3ll0, W0rld! 123',
    });
  });
});
