/// <reference types="jest" />
import { removeAllVowelsFromString } from '../src/remove-all-vowels-from-string/index';

/* restore mocks after each test */
afterEach(() => {
  jest.restoreAllMocks();
});

describe('removeAllVowelsFromString', () => {
  /* #1 */
  test('throws an error when input is an empty string', () => {
    expect(() => removeAllVowelsFromString('')).toThrow(
      '[Bad]: Remove Vowels From String - Argument length to be greater than zero',
    );
  });

  /* #2 */
  test('returns the same string when no vowels are present', () => {
    expect(removeAllVowelsFromString('rhythms')).toEqual({
      input: 'rhythms',
      removed: 'rhythms',
    });
  });

  /* #3 */
  test('removes all lowercase vowels from a string', () => {
    expect(removeAllVowelsFromString('sequoia')).toEqual({
      input: 'sequoia',
      removed: 'sq',
    });
  });

  /* #4 */
  test('removes vowels case-insensitively', () => {
    expect(removeAllVowelsFromString('ApplE pIE')).toEqual({
      input: 'ApplE pIE',
      removed: 'ppl p',
    });
  });

  /* #5 */
  test('preserves spaces, numbers, and punctuation while removing vowels', () => {
    expect(removeAllVowelsFromString('H3llo, W0rld! Are you 2?')).toEqual({
      input: 'H3llo, W0rld! Are you 2?',
      removed: 'H3ll, W0rld! r y 2?',
    });
  });
});
