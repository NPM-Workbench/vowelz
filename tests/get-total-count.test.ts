/// <reference types="jest" />
import { getTotalCountOfVowels } from '../src/get-total-count/index';

/* restore mocks after each test */
afterEach(() => {
  jest.restoreAllMocks();
});

describe('getTotalCountOfVowels', () => {
  /* #1 */
  test('throws an error when input is an empty string', () => {
    expect(() => getTotalCountOfVowels('')).toThrow(
      '[Bad]: Get Total Count Of Vowels - Argument length to be greater than zero',
    );
  });

  /* #2 */
  test('returns zero when input has no vowels', () => {
    expect(getTotalCountOfVowels('rhythms')).toEqual({
      input: 'rhythms',
      total: 0,
    });
  });

  /* #3 */
  test('returns total count for lowercase vowels', () => {
    expect(getTotalCountOfVowels('banana')).toEqual({
      input: 'banana',
      total: 3,
    });
  });

  /* #4 */
  test('counts vowels case-insensitively', () => {
    expect(getTotalCountOfVowels('AEioU')).toEqual({
      input: 'AEioU',
      total: 5,
    });
  });

  /* #5 */
  test('counts vowels accurately in mixed-content strings', () => {
    expect(getTotalCountOfVowels('H3llo, W0rld! Are you 2?')).toEqual({
      input: 'H3llo, W0rld! Are you 2?',
      total: 5,
    });
  });
});
