/// <reference types="jest" />
import { countAllVowels } from '../src/count-all-vowels/index';

/* restore mocks after each test */
afterEach(() => {
  jest.restoreAllMocks();
});

describe('countAllVowels', () => {
  /* #1 */
  test('throws an error when input is an empty string', () => {
    expect(() => countAllVowels('')).toThrow(
      '[Bad]: Count All Vowels - Argument length to be greater than zero',
    );
  });

  /* #2 */
  test('returns zero for all vowels when no vowels are present', () => {
    expect(countAllVowels('rhythms')).toEqual({
      input: 'rhythms',
      count: { a: 0, e: 0, i: 0, o: 0, u: 0 },
    });
  });

  /* #3 */
  test('counts vowels case-insensitively', () => {
    expect(countAllVowels('AEIOUaeiou')).toEqual({
      input: 'AEIOUaeiou',
      count: { a: 2, e: 2, i: 2, o: 2, u: 2 },
    });
  });

  /* #4 */
  test('counts repeated vowels in regular text', () => {
    expect(countAllVowels('banana')).toEqual({
      input: 'banana',
      count: { a: 3, e: 0, i: 0, o: 0, u: 0 },
    });
  });

  /* #5 */
  test('handles spaces and punctuation while counting vowels', () => {
    expect(countAllVowels('Hello, World! Are you okay?')).toEqual({
      input: 'Hello, World! Are you okay?',
      count: { a: 2, e: 2, i: 0, o: 4, u: 1 },
    });
  });
});
