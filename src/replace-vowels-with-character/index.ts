/* types */
type TReplacedVowelsRes = {input: string, mutated: string};
type TOutput = TReplacedVowelsRes;

/* module */
function replaceVowelsWithCharacter(str: string, character: string): TOutput {
  if (str.length <= 0) {
    throw new Error("[Bad]: Replace Vowels With Character - Argument length to be greater than zero");
  } else if (character.length !== 1) {
    throw new Error("[Bad]: Replace Vowels With Character - Replacement to be exactly a single character");
  } else {
    return {input: str, mutated: str.replace(/[aeiou]/gi, character)};
  }
}

/* exports */
export type { TReplacedVowelsRes };
export { replaceVowelsWithCharacter };
