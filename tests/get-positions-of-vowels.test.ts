/// <reference types="jest" />
import { getPositionsOfVowels } from '../src/get-positions-of-vowels/index';

/* restore mocks after each test */
afterEach(() => {
  jest.restoreAllMocks();
});

describe('getPositionsOfVowels', () => {
  /* #1 */
  test('throws an error when input is an empty string', () => {
    expect(() => getPositionsOfVowels('')).toThrow(
      '[Bad]: Get Positions Of Vowels - Argument length to be greater than zero',
    );
  });

  /* #2 */
  test('returns an empty positions array when no vowels are present', () => {
    expect(getPositionsOfVowels('rhythms')).toEqual({
      input: 'rhythms',
      positions: [],
    });
  });

  /* #3 */
  test('returns positions for lowercase vowels', () => {
    expect(getPositionsOfVowels('banana')).toEqual({
      input: 'banana',
      positions: [1, 3, 5],
    });
  });

  /* #4 */
  test('returns positions for uppercase and lowercase vowels', () => {
    expect(getPositionsOfVowels('ApplE pIE')).toEqual({
      input: 'ApplE pIE',
      positions: [0, 4, 7, 8],
    });
  });

  /* #5 */
  test('returns accurate positions with spaces, numbers, and punctuation', () => {
    expect(getPositionsOfVowels('H3llo, W0rld! Are you 2?')).toEqual({
      input: 'H3llo, W0rld! Are you 2?',
      positions: [4, 14, 16, 19, 20],
    });
  });
});
