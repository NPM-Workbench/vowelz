/// <reference types="jest" />
import { extractAllVowelsFromString } from '../src/extract-all-vowels-from-string/index';

/* restore mocks after each test */
afterEach(() => {
  jest.restoreAllMocks();
});

describe('extractAllVowelsFromString', () => {
  /* #1 */
  test('throws an error when input is an empty string', () => {
    expect(() => extractAllVowelsFromString('')).toThrow(
      '[Bad]: Extract All Vowels From String - Argument length to be greater than zero',
    );
  });

  /* #2 */
  test('returns an empty extract array when no vowels are present', () => {
    expect(extractAllVowelsFromString('rhythms')).toEqual({
      input: 'rhythms',
      extract: [],
    });
  });

  /* #3 */
  test('extracts lowercase vowels in order', () => {
    expect(extractAllVowelsFromString('sequoia')).toEqual({
      input: 'sequoia',
      extract: ['e', 'u', 'o', 'i', 'a'],
    });
  });

  /* #4 */
  test('extracts vowels case-insensitively and preserves original case', () => {
    expect(extractAllVowelsFromString('ApplE pIE')).toEqual({
      input: 'ApplE pIE',
      extract: ['A', 'E', 'I', 'E'],
    });
  });

  /* #5 */
  test('extracts only vowels from strings with spaces, numbers, and punctuation', () => {
    expect(extractAllVowelsFromString('H3llo, W0rld! Are you 2?')).toEqual({
      input: 'H3llo, W0rld! Are you 2?',
      extract: ['o', 'A', 'e', 'o', 'u'],
    });
  });
});
