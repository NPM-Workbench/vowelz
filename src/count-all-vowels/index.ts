/* types */
type TVowelsCount = {input: string, count: Record<string, number>};
type TInput = string;
type TOutput = TVowelsCount;

/* module */
function countAllVowels(arg: TInput): TOutput {
  if (arg.length <= 0) {
    throw new Error("[Bad]: Count All Vowels - Argument length to be greater than zero");
  } else {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelCounts: Record<string, number> = {};

    /* iterate */
    vowels.forEach(vowel => {
      const regex = new RegExp(vowel, 'gi');
      const matches = arg.match(regex);
      vowelCounts[vowel] = matches ? matches.length : 0;
    });

    return {input: arg, count: vowelCounts};
  }
}

/* exports */
export type { TVowelsCount };
export { countAllVowels };
