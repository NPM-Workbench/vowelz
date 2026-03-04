/// <reference types="jest" />
import { setAllVowelsToUpperCase } from '../src/set-all-vowels-to-upper-case/index';

/* restore mocks after each test */
afterEach(() => {
  jest.restoreAllMocks();
});

describe('setAllVowelsToUpperCase', () => {
  /* #1 */
  test('throws an error when input is an empty string', () => {
    expect(() => setAllVowelsToUpperCase('')).toThrow(
      '[Bad]: Set All Vowels To Uppercase - Argument length to be greater than zero',
    );
  });

  /* #2 */
  test('returns unchanged string when vowels are already uppercase', () => {
    expect(setAllVowelsToUpperCase('HELLO WORLD')).toEqual({
      input: 'HELLO WORLD',
      upper: 'HELLO WORLD',
    });
  });

  /* #3 */
  test('converts lowercase vowels to uppercase', () => {
    expect(setAllVowelsToUpperCase('aeiou')).toEqual({
      input: 'aeiou',
      upper: 'AEIOU',
    });
  });

  /* #4 */
  test('converts only vowels and keeps consonants unchanged', () => {
    expect(setAllVowelsToUpperCase('ApplE pIE')).toEqual({
      input: 'ApplE pIE',
      upper: 'ApplE pIE',
    });
  });

  /* #5 */
  test('preserves spaces, numbers, and punctuation while uppercasing vowels', () => {
    expect(setAllVowelsToUpperCase('H3llo, W0rld! Are you 2?')).toEqual({
      input: 'H3llo, W0rld! Are you 2?',
      upper: 'H3llO, W0rld! ArE yOU 2?',
    });
  });
});
