/// <reference types="jest" />
import { setAllVowelsToLowerCase } from '../src/set-all-vowels-to-lower-case/index';

/* restore mocks after each test */
afterEach(() => {
  jest.restoreAllMocks();
});

describe('setAllVowelsToLowerCase', () => {
  /* #1 */
  test('throws an error when input is an empty string', () => {
    expect(() => setAllVowelsToLowerCase('')).toThrow(
      '[Bad]: Set All Vowels To Lowercase - Argument length to be greater than zero',
    );
  });

  /* #2 */
  test('returns unchanged string when vowels are already lowercase', () => {
    expect(setAllVowelsToLowerCase('hello world')).toEqual({
      input: 'hello world',
      lower: 'hello world',
    });
  });

  /* #3 */
  test('converts uppercase vowels to lowercase', () => {
    expect(setAllVowelsToLowerCase('AEIOU')).toEqual({
      input: 'AEIOU',
      lower: 'aeiou',
    });
  });

  /* #4 */
  test('converts only vowels and keeps consonants unchanged', () => {
    expect(setAllVowelsToLowerCase('ApplE pIE')).toEqual({
      input: 'ApplE pIE',
      lower: 'apple pie',
    });
  });

  /* #5 */
  test('preserves spaces, numbers, and punctuation while lowering vowels', () => {
    expect(setAllVowelsToLowerCase('H3llo, W0rld! Are YOU 2?')).toEqual({
      input: 'H3llo, W0rld! Are YOU 2?',
      lower: 'H3llo, W0rld! are You 2?',
    });
  });
});
