/// <reference types="jest" />
import { getCountOfUniqueVowels } from '../src/get-count-of-unique-vowels/index';

/* restore mocks after each test */
afterEach(() => {
  jest.restoreAllMocks();
});

describe('getCountOfUniqueVowels', () => {
  /* #1 */
  test('throws an error when input is an empty string', () => {
    expect(() => getCountOfUniqueVowels('')).toThrow(
      '[Bad]: Get Count of Unique Vowels - Argument length to be greater than zero',
    );
  });

  /* #2 */
  test('returns zero when input has no vowels', () => {
    expect(getCountOfUniqueVowels('rhythms')).toEqual({
      input: 'rhythms',
      unique: 0,
    });
  });

  /* #3 */
  test('returns five when all unique vowels are present', () => {
    expect(getCountOfUniqueVowels('aeiou')).toEqual({
      input: 'aeiou',
      unique: 5,
    });
  });

  /* #4 */
  test('counts unique vowels case-insensitively', () => {
    expect(getCountOfUniqueVowels('AeiOuaei')).toEqual({
      input: 'AeiOuaei',
      unique: 5,
    });
  });

  /* #5 */
  test('does not double count repeated vowels', () => {
    expect(getCountOfUniqueVowels('banana')).toEqual({
      input: 'banana',
      unique: 1,
    });
  });
});
