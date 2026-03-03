/// <reference types="jest" />
import { replaceVowelsWithCharacter } from '../src/replace-vowels-with-character/index';

/* restore mocks after each test */
afterEach(() => {
  jest.restoreAllMocks();
});

describe('replaceVowelsWithCharacter', () => {
  /* #1 */
  test('throws an error when input string is empty', () => {
    expect(() => replaceVowelsWithCharacter('', '#')).toThrow(
      '[Bad]: Replace Vowels With Character - Argument length to be greater than zero',
    );
  });

  /* #2 */
  test('throws an error when replacement is not a single character', () => {
    expect(() => replaceVowelsWithCharacter('banana', '**')).toThrow(
      '[Bad]: Replace Vowels With Character - Replacement to be exactly a single character',
    );
  });

  /* #3 */
  test('returns unchanged string when no vowels are present', () => {
    expect(replaceVowelsWithCharacter('rhythms', '#')).toEqual({
      input: 'rhythms',
      mutated: 'rhythms',
    });
  });

  /* #4 */
  test('replaces vowels case-insensitively using the provided character', () => {
    expect(replaceVowelsWithCharacter('ApplE pIE', '#')).toEqual({
      input: 'ApplE pIE',
      mutated: '#ppl# p##',
    });
  });

  /* #5 */
  test('preserves non-vowel characters while replacing vowels', () => {
    expect(replaceVowelsWithCharacter('H3llo, W0rld! Are you 2?', '*')).toEqual(
      {
        input: 'H3llo, W0rld! Are you 2?',
        mutated: 'H3ll*, W0rld! *r* y** 2?',
      },
    );
  });
});
